import React from "react";

const Network = () => {
  return (
    <div className="justify-center text-white md:p-10 p-8 md:items-center grid grid-cols-1 gap-10  items-center ">
      <div className="flex gap-4 w-full items-center justify-center flex-col md:flex-row">
        <img src="/assets/right.svg" className="w-10" alt="notfound" />
        <h1 className="md:text-3xl text-center ml-2">
          Decentralized platform to earn rewards using MJC Tokens
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 justify-center w-full md:px-8  mt-4">
        <div className="flex justify-end items-center gap-4 ">
          <p className="md:text-3xl  leading-6 md:leading-10">
            A decentralized networking <br className="hidden md:inline" />
            platform based on smart <br className="hidden md:inline" />
            contracts, together with NFT <br className="hidden md:inline" />
            technology, which brings {" "}
            <br className="hidden md:inline" />
             people together from all over
            <br className="hidden md:inline" />
            the world.
          </p>
        </div>
        <img
          src="/assets/dashboard.png"
          className=""
          width={800}
          alt="dashboard"
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <img src="/assets/dashboard2.png" className="" alt="dashboard" />
      </div>
    </div>
  );
};

export default Network;
