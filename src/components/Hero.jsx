import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="justify-center md:p-10 lg:p-20 p-8 md:items-center grid grid-cols-1 gap-10 md:grid-cols-2 items-center ">
      <div className="flex flex-col text-white relative">
        <h1 className="md:text-6xl md:leading-[80px] text-left leading-[60px] text-3xl tracking-wide font-bold">
          Decentralized Token Governed By The
          <span className="text-[#43C878]"> Community</span>
        </h1>
        <p className="md:text-xl mt-4 text-base">
          Stake and win amazing rewards with multiple level
          <br className="hidden md:inline" />
          plan of this platform.
        </p>
        <div className="flex gap-4 w-full rounded-full mt-6 md:flex-row md:px-2 max-w-fit flex-col border-[#43C878] border justify-center items-center">
          <Link to="/" className="p-2 w-full">
            <img src="/assets/coinsut2.svg" alt="notfound" />
          </Link>
        </div>
        <div
          className="absolute inset-0"
          style={{
            content: "",
            position: "absolute",
            zIndex: "0",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "50%",
            height: "100%",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(44, 158, 117, 0.80) 0%, rgba(25, 185, 137, 0.55) 100%)",
            filter: "blur(200px)",
          }}
        ></div>
      </div>
      <div className="flex justify-center h-full w-full items-center">
        <img src="/assets/gerofig.gif" alt="notfound" />
      </div>
    </div>
  );
};

export default Hero;
