import PropTypes from "prop-types";

function OrderDetails({ order }) {
  console.log(order);
  return (
    <>
      <div className="w-full pt-20">
        <h4 className="text-4xl font-semibold text-primary mb-10">
          {order?.status}
        </h4>
        
        <p className="bg-gray-300 text-secondary text-lg py-2 px-8 mb-10 rounded-3xl xl:mr-96">
        <span className="text-xs">Email</span> <br />  {order?.customer?.email}
        </p>

        <div className="flex justify-center items-center gap-10 w-full">
          <p className="flex-1 bg-gray-300 text-secondary text-lg py-2 px-8 mb-10 rounded-3xl">
            <span className="text-xs">Name</span> <br /> {order?.customer?.name}
          </p>
          <p className="flex-1 bg-gray-300 text-secondary text-lg py-2 px-8 mb-10 rounded-3xl">
          <span className="text-xs">Phone</span> <br />  {order?.customer?.phone}
          </p>
        </div>
        <p className=" bg-gray-300 text-secondary text-lg py-2 px-8 mb-10 rounded-3xl">
        <span className="text-xs">Address</span> <br />  {order?.customer?.address}
        </p>
        
        <div className="mt-20 flex justify-center items-center gap-10 w-full">
          <p className="flex-1 bg-gray-300 text-secondary text-lg py-2 px-8 mb-10 rounded-3xl">
            <span className="text-xs">Product ID</span> <br /> {order?.productID}
          </p>
          <p className="flex-1 bg-gray-300 text-secondary text-lg py-2 px-8 mb-10 rounded-3xl">
          <span className="text-xs">Product Name</span> <br />  {order?.productName}
          </p>
        </div>

        <div className="flex justify-center items-center gap-10 w-full">
          <p className="flex-1 bg-gray-300 text-secondary text-lg py-2 px-8 mb-10 rounded-3xl">
            <span className="text-xs">Quantity</span> <br /> {order?.quantity}
          </p>
          <p className="flex-1 bg-gray-300 text-secondary text-lg py-2 px-8 mb-10 rounded-3xl">
          <span className="text-xs">Total Price</span> <br />  {order?.totalPrice} $
          </p>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;

OrderDetails.propTypes = {
  order: PropTypes.object,
};
