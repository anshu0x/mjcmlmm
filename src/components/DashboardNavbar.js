import React from "react";
const DashboardNavbar = ({ setOpenTab }) => {
  return (
    <div className="text-white bg-[#dcdcdc12] px-10 md:px-20 p-4 ">
      <div className="flex gap-8 justify-start">
        <div
          className="flex gap-4 cursor-pointer "
          onClick={() => setOpenTab(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M13.8889 0V8.33333H25V0M13.8889 25H25V11.1111H13.8889M0 25H11.1111V16.6667H0M0 13.8889H11.1111V0H0V13.8889Z"
              fill="#0FCA87"
            />
          </svg>{" "}
          <p>Dashboard</p>
        </div>
        <div
          onClick={() => setOpenTab(2)}
          className="flex gap-4 cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="26"
            viewBox="0 0 18 26"
            fill="none"
          >
            <path
              d="M15 16.125V13.125H17.415C17.775 14.19 18 15.21 18 16.125H15ZM14.37 7.125C13.68 6.06 12.975 5.04 12.3 4.125H12V7.125H14.37ZM15 13.125V10.125H12V13.125H15ZM15 8.145V10.125H16.11C15.75 9.465 15.39 8.79 15 8.145ZM9 19.125V16.125H12V13.125H9V10.125H12V7.125H9V4.125H12V3.72C10.35 1.515 9 0 9 0C9 0 0 10.125 0 16.125C0 21.09 4.035 25.125 9 25.125V22.125H12V19.125H9ZM12 24.6C13.125 24.21 14.13 23.625 15 22.815V22.125H12V24.6ZM12 19.125H15V16.125H12V19.125ZM15 22.125H15.69C16.5 21.255 17.085 20.25 17.475 19.125H15V22.125Z"
              fill="#0FCA87"
            />
          </svg>
          <p>Stake MJC Coin</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
