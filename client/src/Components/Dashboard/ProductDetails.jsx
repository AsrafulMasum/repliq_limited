import PropTypes from "prop-types";

function ProductDetails({ product }) {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-20 bg-black pb-10 xl:pb-0 min-h-96">
      <img className="xl:w-1/2 xl:min-h-96 object-cover" src={product?.img} alt="" />
      <div className="flex-1 px-4">
        <h4 className="text-white_bg text-3xl font-semibold">
          <span className="text-primary text-4xl">{product?.brand} </span> <span className="text-white text-base">({product?.category})</span> {" "}
          <br />
          {product?.name}
        </h4>
        <p className="text-primary text-3xl font-semibold my-8">
          $ {product?.price}
        </p>
        <p className="text-white_bg max-w-lg mb-8">
          {product?.description} <span className="text-primary">({product?.tags?.join(", ")})</span>
        </p>
        <p className="text-white_bg bg-gray-500 inline-block px-4 py-2 rounded-badge">{product?.stock} in-stock</p>
      </div>
    </div>
  );
}

export default ProductDetails;

ProductDetails.propTypes = {
  product: PropTypes.object,
};
