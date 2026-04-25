import React from "react";
import BannerBookImg from "../../../../assets/pngwing 1.png"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] container mx-auto  rounded-2xl my-8">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
            <img src={BannerBookImg} alt="" />
          <div>
            <h1 className="text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
           
            <button className="btn bg-green-600 text-white font-bold mt-6">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
