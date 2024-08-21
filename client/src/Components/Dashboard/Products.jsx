import useLoadSecureData from "../../Hooks/useLoadSecureData";

function Products() {
  const url = "/products";
  const { data: products } = useLoadSecureData(url);
  console.log(products);
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
                  <div className="font-bold">{product?.name}</div>
                  <div className="text-sm opacity-50">{product?.brand}</div>
                </td>
                <td>
                  <p className="flex gap-2 flex-wrap">
                    {product?.tags?.map((tag, idx) => (
                      <span className="capitalize" key={idx}>
                        {tag}
                      </span>
                    ))}
                  </p>
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {product?.category}
                  </span>
                </td>
                <td>$ {product?.price}</td>
                <td>{product?.stock}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
