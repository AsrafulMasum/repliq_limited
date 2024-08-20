require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g9v99.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// mongodb connection
const dbConnect = async () => {
  try {
    client.connect();
    console.log("DB Connected Successfully✅");
  } catch (error) {
    console.log(error.name, error.message);
  }
};
dbConnect();

const database = client.db("TrendifyDB");
const usersCollections = database.collection("usersDB");

// jwt api route
app.post("/jwt", (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1h",
  });
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send({ success: true });
});

// Logout route
app.post("/logout", (req, res) => {
  const user = req.body;
  res.clearCookie("token", { maxAge: 0 }).send({ success: true });
});

app.get("/", (req, res) => {
  res.send("server is running data will be appear soon..."); 
});

// User registration route
app.post("/register", async (req, res) => {
  const { phone, pass } = req.body;
  console.log(phone, pass)

  // Validation
  if (!phone || !pass) {
    return res.status(400).json({ message: "Phone and password are required!" });
  }

  try {
    // Check if user already exists
    const existingUser = await usersCollections.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash the password before storing it
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pass, salt);

    // Create new user
    const newUser = {
      phone,
      password: hashedPassword,
      createdAt: new Date()
    };

    // Insert user into database
    await usersCollections.insertOne(newUser);

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

// User login route
app.post("/login", async (req, res) => {
  const { phone, pass } = req.body;

  // Validation
  if (!phone || !pass) {
    return res.status(400).json({ message: "Phone and password are required!" });
  }

  try {
    // Find user by phone number
    const user = await usersCollections.findOne({ phone });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    res.status(200).json({user, message: "Logged in successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

// Provide user data route
app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  
  try {
    // Checking if the user exists
    const query = { _id: new ObjectId(userId) };
    const result = await usersCollections.findOne(query);

    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error( error);
    res.status(500).json({ message: "Internal Server Error" });
  }
})

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
