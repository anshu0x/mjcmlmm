import React from "react";
import StakingTable from "../components/StakingTable";
const Dashboard = () => {
  return (
    <div className="flex w-full justify-center items-center p-10 md:px-20  md:pb-20 flex-col h-full dashboard">
      <div className="grid gap-4 md:grid-cols-3  w-full">
        <div className="dcard text-white md:max-w-md w-full md:p-6 p-4 rounded-xl">
          <div className="flex flex-col">
            <h1 className="text-base">Stake wallet</h1>
            <h1 className="text-2xl md:text-2xl my-2">
              <span className="font-semibold">10000.00</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="connect-wallet cursor-pointer p-3 flex gap-4 items-center justify-center rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
              >
                <path
                  d="M10 10.75V8.75H11.61C11.85 9.46 12 10.14 12 10.75H10ZM9.58 4.75C9.12 4.04 8.65 3.36 8.2 2.75H8V4.75H9.58ZM10 8.75V6.75H8V8.75H10ZM10 5.43V6.75H10.74C10.5 6.31 10.26 5.86 10 5.43ZM6 12.75V10.75H8V8.75H6V6.75H8V4.75H6V2.75H8V2.48C6.9 1.01 6 0 6 0C6 0 0 6.75 0 10.75C0 14.06 2.69 16.75 6 16.75V14.75H8V12.75H6ZM8 16.4C8.75 16.14 9.42 15.75 10 15.21V14.75H8V16.4ZM8 12.75H10V10.75H8V12.75ZM10 14.75H10.46C11 14.17 11.39 13.5 11.65 12.75H10V14.75Z"
                  fill="white"
                />
              </svg>{" "}
              <p>Stake</p>
            </div>
            <div className="connect-wallet cursor-pointer p-3 flex gap-4 items-center justify-center rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M18 4L14 0V3H7V5H14V8M4 6L0 10L4 14V11H11V9H4V6Z"
                  fill="white"
                />
              </svg>{" "}
              <p>Withdraw</p>
            </div>
          </div>
        </div>
        <div className="dcard text-white md:max-w-md w-full md:p-6 p-4 rounded-xl">
          <div className="flex flex-col">
            <h1 className="text-base">Regular wallet</h1>
            <h1 className="text-2xl md:text-2xl my-2">
              <span className="font-semibold">10000.00</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="connect-wallet cursor-pointer p-3 flex gap-4 items-center justify-center rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
              >
                <path
                  d="M10 10.75V8.75H11.61C11.85 9.46 12 10.14 12 10.75H10ZM9.58 4.75C9.12 4.04 8.65 3.36 8.2 2.75H8V4.75H9.58ZM10 8.75V6.75H8V8.75H10ZM10 5.43V6.75H10.74C10.5 6.31 10.26 5.86 10 5.43ZM6 12.75V10.75H8V8.75H6V6.75H8V4.75H6V2.75H8V2.48C6.9 1.01 6 0 6 0C6 0 0 6.75 0 10.75C0 14.06 2.69 16.75 6 16.75V14.75H8V12.75H6ZM8 16.4C8.75 16.14 9.42 15.75 10 15.21V14.75H8V16.4ZM8 12.75H10V10.75H8V12.75ZM10 14.75H10.46C11 14.17 11.39 13.5 11.65 12.75H10V14.75Z"
                  fill="white"
                />
              </svg>{" "}
              <p>Stake</p>
            </div>
            <div className="connect-wallet cursor-pointer p-3 flex gap-4 items-center justify-center rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
              >
                <path
                  d="M18 4L14 0V3H7V5H14V8M4 6L0 10L4 14V11H11V9H4V6Z"
                  fill="white"
                />
              </svg>{" "}
              <p>Withdraw</p>
            </div>
          </div>
        </div>
        <div className="dcard text-white md:max-w-md w-full md:p-6 p-4 rounded-xl">
          <div className="flex flex-col">
            <h1 className="text-base">Investments</h1>
            <h1 className="text-2xl md:text-2xl my-2">
              <span className="font-semibold">10000.00</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-2">
            <div className="connect-wallet cursor-pointer p-2.5 flex gap-4 items-center justify-center rounded-lg text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M19.2208 24.2083L16.2896 19.1333C17.7188 18.0833 18.7104 16.45 18.9146 14.5833H24.7917C24.5438 18.6083 22.3854 22.1083 19.2208 24.2083ZM14.5833 5.87708V0C20.8542 0.379167 25.8708 5.39583 26.25 11.6667H20.3729C20.0375 8.61875 17.6313 6.2125 14.5833 5.87708ZM5.83333 13.8542C5.83333 14.7875 6.02292 15.6771 6.3875 16.4792L1.3125 19.4104C0.466667 17.7333 0 15.8521 0 13.8542C0 7.24792 5.1625 1.85208 11.6667 1.45833V7.33542C8.38542 7.7 5.83333 10.4708 5.83333 13.8542ZM12.3958 26.25C8.06458 26.25 4.25833 24.0625 2.04167 20.6792L7.11667 17.7479C8.3125 19.3667 10.2083 20.4167 12.3958 20.4167C13.3292 20.4167 14.2188 20.2271 15.0208 19.8625L17.9521 24.9375C16.275 25.7833 14.3938 26.25 12.3958 26.25Z"
                  fill="white"
                />
              </svg>{" "}
              <p className="text-base">My Investments</p>
              <p className="text-xl">35000 $</p>
            </div>
          </div>
        </div>
      </div>
      <StakingTable />
    </div>
  );
};

export default Dashboard;
