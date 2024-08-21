import { Link } from "react-router-dom";
import useLoadSecureData from "../../Hooks/useLoadSecureData";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";

function Products() {
  const url = "/products";
  const { data } = useLoadSecureData(url);
  const [products, setProducts] = useState([]);
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [page4, setPage4] = useState(false);

  const handlePageNext = () => {
    if (page1) {
      setPage1(false);
      setPage2(true);
      setProducts(data?.slice(5, 10));
    } else if (page2) {
      setPage2(false);
      setPage3(true);
      setProducts(data?.slice(10, 15));
    } else if (page3) {
      setPage3(false);
      setPage4(true);
      setProducts(data?.slice(15, 20));
    }
  };

  const handlePagePrevious = () => {
    if (page2) {
      setPage2(false);
      setPage1(true);
      setProducts(data?.slice(0, 5));
    } else if (page3) {
      setPage3(false);
      setPage2(true);
      setProducts(data?.slice(5, 10));
    } else if (page4) {
      setPage4(false);
      setPage3(true);
      setProducts(data?.slice(10, 15));
    }
  };

  useEffect(() => {
    setProducts(data?.slice(0, 5));
  }, [setProducts, data]);

  return (
    <>
      <h2 className="text-2xl font-bold leading-10 capitalize text-black mb-10">
        All Products
      </h2>
      <div className="overflow-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden xl:block">Product ID</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products?.slice(0, 5)?.map((product) => (
              <tr key={product?._id}>
                <th className="hidden xl:block">
                  <p>#{product?._id}</p>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product?.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="font-bold">{product?.name}</p>
                  <p className="text-sm opacity-50">{product?.brand}</p>
                </td>
                <td>
                  <p className="flex gap-2 flex-wrap">
                    {product?.tags?.join(", ")}
                  </p>
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {product?.category}
                  </span>
                </td>
                <td>$ {product?.price}</td>
                <td>{product?.stock}</td>
                <th>
                  <Link
                    to={`/product/${product?._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        {!page1 && (
          <div className="w-full flex items-center">
            <button
              onClick={handlePagePrevious}
              className="flex justify-center items-center gap-2 bg-gray-300 py-2 px-4 rounded text-xl"
            >
              <MdKeyboardArrowLeft />
              <span>Previous</span>
            </button>
          </div>
        )}
        {!page4 && (
          <div className="w-full flex justify-end items-center">
            <button
              onClick={handlePageNext}
              className="flex justify-center items-center gap-2 bg-gray-300 py-2 px-4 rounded text-xl"
            >
              <span>Next</span>
              <MdKeyboardArrowRight />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
