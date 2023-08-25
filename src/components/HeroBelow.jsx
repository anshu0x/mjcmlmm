import React from "react";

const HeroBelow = () => {
  return (
    <div className="flex p-10 md:p-20 justify-center items-center flex-col gap-4 ">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-white text-center text-sm leading-6 md:text-xl md:leading-10 font-normal">
          A decentralized networking platform based on smart{" "}
          <br className="hidden md:inline" />
          contracts, together with NFT technology,{" "}
          <br className="hidden md:inline" />
          whichbrings people together from all over the world{" "}
          <br className="hidden md:inline" />
          andopens up endless possibilitiesnew economic financial systems{" "}
          <br className="hidden md:inline" />
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative">
      <button className="leading-3 w-full max-w-[200px] py-4 mt-4 justify-center flex items-center p-3 text-center rounded-md   connect-wallet  text-white font-normal ">
          Sign up now{" "}
          <span class="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M1.02535 9.1599L0.967858 7.07387L15.9382 6.62193L11.1459 1.88773L12.5187 0.365594L19.7908 7.54951L12.9265 15.1602L11.4721 13.7234L15.9956 8.70797L1.02535 9.1599Z"
                fill="white"
              ></path>
            </svg>
          </span>
        </button>
      <div className="grid md:grid-cols-3 gap-8 mt-8 ">
        {[1, 2, 3].map((_, index) => {
          return (
            <div key={index} className="flex  card h-full max-w-xs flex-col gap-4 items-start justify-center border border-[#58DEA2] md:p-8 p-10 md:px-10 rounded-[38px]">
              <div className="flex justify-center items-center gap-4">
                <img
                  src="/assets/people.svg"
                  width={40}
                  height={40}
                  alt="notfound"
                />
                <p className="text-white text-base">Community</p>
              </div>
              <p className="font-light text-white">
                Select your favorite social network and share our new icons with
                your contacts or friends for better experience here with
              </p>
            </div>
          );
        })}
          <div
          className="absolute inset-0"
          style={{
            content: "",
            position: "absolute",
            zIndex: "0",
            top: 0,
            left: 0,
            width: "100%",
            height: "60%",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(44, 158, 117, 0.80) 0%, rgba(25, 185, 137, 0.55) 100%)",
            filter: "blur(200px)",
          }}
        ></div>
      </div>
      </div>
    </div>
  );
};

export default HeroBelow;
