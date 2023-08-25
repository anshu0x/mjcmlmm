import React from "react";

const StakingTable = () => {
  return (
    <div className="relative overflow-x-auto m-4 w-full bg-[#17181A]">
      <div className="text-sm sm:text-base block bg-[#17181A] rounded-lg text-white w-full p-3 ">
        <p className="p-2 inline-block">Your Staking Details</p>
      </div>
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-sm sm:text-base bg-[#1D2B26] rounded-lg text-white ">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Staked Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Days Left
            </th>
            <th scope="col" className="px-6 py-3">
              Daily Reward
            </th>
            <th scope="col" className="px-6 py-3">
              Total Rewards
            </th>
            <th scope="col" className="px-6 py-3">
              Rewards Received
            </th>
            <th scope="col" className="px-6 py-3">
              Date & Time
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((user, index) => {
            return (
              <tr
                key={user}
                className="bg-[#1E1E1F] border-t border-[#444242] text-white"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap "
                >
                  {user}
                </th>
                <td className="px-6 py-4">1200.0000</td>
                <td className="px-6 py-4">500</td>
                <td className="px-6 py-4">0.70</td>
                <td className="px-6 py-4">2400.0000</td>
                <td className="px-6 py-4">400.00</td>
                <td className="px-6 py-4">20/12/2023 11:20</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StakingTable;
