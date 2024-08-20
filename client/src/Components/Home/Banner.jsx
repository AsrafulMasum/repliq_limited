import { FiSearch } from "react-icons/fi";

function Banner() {
  return (
    <section
      style={{
        backgroundImage:
          "url(https://i.postimg.cc/y8nhmQW2/banner.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      className='min-h-screen flex justify-center items-center overflow-hidden'>
      <div className='backdrop-blur-lg max-w-[1320px] w-full mx-4 min-[1320px]:mx-auto p-4 lg:py-36 lg:px-20 rounded-xl flex flex-col-reverse lg:flex-row justify-between items-center mt-28 relative'>
        <img className="absolute -right-16 top-20" src="./strock.png" alt="" />

        <div className="lg:w-1/2">
          <h2 className='text-white_bg text-5xl lg:text-6xl font-bold leading-[132%] tracking-tighter lg:tracking-normal'>
          <span className='text-primary tracking-wide'>Manage</span> Your Store with <span className='text-primary tracking-wide'>Ease</span>
          </h2>

          <form className="flex justify-center items-center mt-8 w-full">
            <input className='bg-white_bg h-16 rounded-xl max-w-xl w-full outline-none px-12' type="text" />
            <button className="-ml-14 bg-primary p-3 rounded-lg">
              <FiSearch className="text-2xl text-white_bg font-bold" />
            </button>
          </form>

          <div className="flex justify-between items-center pt-16 text-center">
            <div>
              <h6 className="text-lg md:text-2xl font-bold leading-10 text-white_bg tracking-wide">100</h6>
              <p className="text-xs md:text-base font-medium leading-6 text-[#F4F5F7]">Total Orders</p>
            </div>
            <img src="./strock2.png" alt="" />
            <div>
              <h6 className="text-lg md:text-2xl font-bold leading-10 text-white_bg tracking-wide">20</h6>
              <p className="text-xs md:text-base font-medium leading-6 text-[#F4F5F7]">Pending Orders</p>
            </div>
            <img src="./strock2.png" alt="" />
            <div>
              <h6 className="text-lg md:text-2xl font-bold leading-10 text-white_bg tracking-wide">$ 11,785</h6>
              <p className="text-xs md:text-base font-medium leading-6 text-[#F4F5F7]">Total Sales</p>
            </div>
          </div>
        </div>
        <img className="w-64 md:w-96" src="./handbag.png" alt="" />
      </div>
    </section>
  )
}

export default Banner