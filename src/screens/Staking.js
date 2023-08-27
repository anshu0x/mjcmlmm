import React from "react";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useMetaMask } from "../hooks/useMetamask";
import {
  STAKING_CONTRACT_ADDRESS,
  STAKING_ABI
} from "./constant/index.js";

const Staking = (props) => {
  const teamSize = 0;
  const { wallet } = useMetaMask();
  const amount = 30000;
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (wallet && wallet.accounts && wallet.accounts.length > 0) {
      setAccount(wallet.accounts[0]);
    }
  }, [wallet]);

  const stakingToken = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        STAKING_CONTRACT_ADDRESS,
        STAKING_ABI,
        signer
      );
      //const TT_Token_contract = new ethers.Contract(CUSTOM_TOKEN_ADDRESS, CUSTOM_TOKEN_ABI, signer);
      //onsole.log(contract.address);
      const userStakeCount = await contract.userCount(account);
      const StakeCount = parseInt(userStakeCount, 16);

      const tx = await contract.stakeTokens(amount, teamSize, StakeCount);
      // wait for the transaction to get mined
      await tx.wait();
      if (tx == "false") {
        window.alert("Staking Failed");
      }
      window.alert("You are Successfully Staked Your token");
      //console.log(tx);
      //setHash(tx.hash);
      console.log(tx.hash);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen items-start dashboard">
      <div className="flex w-full justify-start  items-start   p-10 md:px-20 md:flex-row flex-col gap-4 ">
        <div className="flex stakingcard justify-center flex-col h-full text-white gap-4 p-6  max-w-sm w-full rounded-lg shadow-[#222223] shadow-md">
          <div className="flex md:flex-row flex-col gap-2 items-center justify-between">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="26"
                viewBox="0 0 18 26"
                fill="none"
              >
                <path
                  d="M15 16.125V13.125H17.415C17.775 14.19 18 15.21 18 16.125H15ZM14.37 7.125C13.68 6.06 12.975 5.04 12.3 4.125H12V7.125H14.37ZM15 13.125V10.125H12V13.125H15ZM15 8.145V10.125H16.11C15.75 9.465 15.39 8.79 15 8.145ZM9 19.125V16.125H12V13.125H9V10.125H12V7.125H9V4.125H12V3.72C10.35 1.515 9 0 9 0C9 0 0 10.125 0 16.125C0 21.09 4.035 25.125 9 25.125V22.125H12V19.125H9ZM12 24.6C13.125 24.21 14.13 23.625 15 22.815V22.125H12V24.6ZM12 19.125H15V16.125H12V19.125ZM15 22.125H15.69C16.5 21.255 17.085 20.25 17.475 19.125H15V22.125Z"
                  fill="#FCFCFC"
                />
              </svg>
              <p> MJC Staking</p>
            </div>
            <button className="bg-[#0B8C5E] w-full md:w-fit mt-4 px-4 py-3 rounded-md">
              View slab
            </button>
          </div>
          <div className="flex connect-wallet gap-2 p-4 rounded my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M15.4 9.8H12.6V7H15.4M15.4 21H12.6V12.6H15.4M14 0C12.1615 0 10.341 0.362121 8.64243 1.06569C6.94387 1.76925 5.40053 2.80048 4.1005 4.1005C1.475 6.72601 0 10.287 0 14C0 17.713 1.475 21.274 4.1005 23.8995C5.40053 25.1995 6.94387 26.2307 8.64243 26.9343C10.341 27.6379 12.1615 28 14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 12.1615 27.6379 10.341 26.9343 8.64243C26.2307 6.94387 25.1995 5.40053 23.8995 4.1005C22.5995 2.80048 21.0561 1.76925 19.3576 1.06569C17.659 0.362121 15.8385 0 14 0Z"
                fill="white"
              />
            </svg>{" "}
            <p className="text-sm">
              Your tokens will be staked for a period of 6 months.{" "}
            </p>
          </div>
          <div className="flex gap-4 flex-col">
            <div class="mb-4">
              <label class="block  text-sm font-bold mb-2" for="username">
              Enter amount
              </label>
              <input
                class="shadow appearance-none border rounded w-full border-[#505352] p-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                id="duration"
                defaultValue={"10,000 .00"}
                type="text"
              />
            </div>
            <div class="mb-4">
              <label class="block  text-sm font-bold mb-2" for="username">
              Duration
              </label>
              <input
                class="shadow appearance-none border rounded w-full border-[#505352] p-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                id="reward"
                type="text"
                defaultValue={"180 Days"}
              />
            </div>
          </div>
          <div className="bg-[#31A16A] p-3 gap-4 flex items-center justify-center rounded-md">
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
            <p onClick={stakingToken}> Stake tokens</p>
          </div>
        </div>
        <div className="flex stakingcard justify-center h-full  flex-col text-white p-6 gap-6 max-w-sm w-full rounded-lg shadow-[#222223] shadow-md">
          <div className="flex md:flex-row flex-col gap-2 items-center justify-between">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="26"
                viewBox="0 0 18 26"
                fill="none"
              >
                <path
                  d="M15 16.125V13.125H17.415C17.775 14.19 18 15.21 18 16.125H15ZM14.37 7.125C13.68 6.06 12.975 5.04 12.3 4.125H12V7.125H14.37ZM15 13.125V10.125H12V13.125H15ZM15 8.145V10.125H16.11C15.75 9.465 15.39 8.79 15 8.145ZM9 19.125V16.125H12V13.125H9V10.125H12V7.125H9V4.125H12V3.72C10.35 1.515 9 0 9 0C9 0 0 10.125 0 16.125C0 21.09 4.035 25.125 9 25.125V22.125H12V19.125H9ZM12 24.6C13.125 24.21 14.13 23.625 15 22.815V22.125H12V24.6ZM12 19.125H15V16.125H12V19.125ZM15 22.125H15.69C16.5 21.255 17.085 20.25 17.475 19.125H15V22.125Z"
                  fill="#FCFCFC"
                />
              </svg>
              <p> Main Wallet Staking</p>
            </div>
            <button className="bg-[#0B8C5E] w-full md:w-fit mt-4 px-4 py-3 rounded-md">
              View slab
            </button>
          </div>
          <div class="w-full h-full">
            <label
              class="block  tracking-wide  text-sm font-bold mb-2"
              for="grid-state"
            >
             Buy plan
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full  bg-transparent border border-[#505352]  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#222223] focus:border-gray-500"
                id="grid-state"
              >
                <option>50$</option>
                <option>100$</option>
                <option>200$</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <div class="mb-4">
              <label class="block  text-sm font-bold mb-2" for="username">
              Enter Referrer wallet address
              </label>
              <input
                class="shadow appearance-none border rounded w-full border-[#505352] p-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
                id="duration"
                value={"180 Days"}
                type="text"
              />
            </div>
          </div>
          <div className="bg-[#31A16A] p-3 gap-4 flex items-center justify-center rounded-md">
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
            <p onClick={stakingToken}> Stake tokens</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
