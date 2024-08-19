import { FiSearch } from "react-icons/fi";

function Banner() {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/2ygVcDMM/banner.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "0px"
      }}
      className='min-h-screen flex justify-center items-center'>
      <div className='backdrop-blur-lg max-w-[1320px] w-full mx-auto py-36 px-20 rounded-xl flex justify-between items-center mt-28 relative'>
        <img className="absolute -right-16 top-20" src="./strock.png" alt="" />

        <div className="w-1/2">
          <h2 className='text-white_bg text-6xl font-bold leading-[132%]'>
            Buy Anything <br /> in <span className='text-primary'>Trendify</span>
          </h2>

          <form className="flex items-center mt-8">
            <input className='bg-white_bg h-16 rounded-xl max-w-xl w-full outline-none px-12' type="text" />
            <button className="-ml-14 bg-primary p-3 rounded-lg">
              <FiSearch className="text-2xl text-white_bg font-bold" />
            </button>
          </form>

          <div className="flex justify-between items-center pt-16">
            <div>
              <h6 className="text-2xl font-bold leading-10 text-white_bg">1000+</h6>
              <p className="font-medium leading-6 text-[#F4F5F7]">Products</p>
            </div>
            <img src="./strock2.png" alt="" />
            <div>
              <h6 className="text-2xl font-bold leading-10 text-white_bg">200+</h6>
              <p className="font-medium leading-6 text-[#F4F5F7]">Happy Customers</p>
            </div>
            <img src="./strock2.png" alt="" />
            <div>
              <h6 className="text-2xl font-bold leading-10 text-white_bg">100+</h6>
              <p className="font-medium leading-6 text-[#F4F5F7]">Verified Users</p>
            </div>
          </div>
        </div>
        <img className="w-96" src="./handbag.png" alt="" />
      </div>
    </section>
  )
}

export default Banner