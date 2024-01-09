"use client";
import { useState } from "react";
import DashSearch from "./dashSearch";

export default function Dashboard() {
  const repeatData = new Array(95).fill(null);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(repeatData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = repeatData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    if (totalPages <= 5) {
      return pageNumbers;
    }

    const visiblePages: (number | "...")[] = [];
    let lastPage = 0;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === currentPage ||
        i === 1 ||
        i === totalPages ||
        Math.abs(currentPage - i) <= 1
      ) {
        if (lastPage !== i - 1) {
          visiblePages.push("...");
        }
        visiblePages.push(i);
        lastPage = i;
      }
    }

    return visiblePages;
  };
  return (
    <>
      <DashSearch />
      {/* Overview */}
      <div className="flex flex-col md:gap-6 gap-3 md:m-8 m-5">
        <div className="flex justify-between text-darkText font-medium text-xl">
          <div>Overview</div>
          <div className="flex gap-2 text-lightText text-base font-normal bg-white border border-borderGray rounded box-border cursor-pointer">
            <p className="pl-3 py-1 ">Last month</p>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="self-center mr-3 hover:rotate-180 transition-all"
            >
              <path
                d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex flex-col justify-between md:gap-4 p-5 md:w-1/2 w-auto h-[118px] bg-white card-shadow rounded-lg">
            <p className="text-lightText font-normal text-base">
              Online Orders
            </p>
            <p className="text-darkText  text-[2rem] font-medium">231</p>
          </div>
          <div className="flex flex-col justify-between md:gap-4 p-5 md:w-1/2 w-auto h-[118px] bg-white card-shadow rounded-lg">
            <p className="text-lightText font-normal text-base">
              Amounts received
            </p>
            <p className="text-darkText  text-[2rem] font-medium">
              ₹23,92,312.19
            </p>
          </div>
        </div>
      </div>
      {/* Transactions Table */}
      {/* <div className="flex flex-col gap-5 mx-8 mb-8 "> */}
      <div className="flex flex-col gap-5 md:mx-8 mx-7 md:mb-8 mb-6">
        <div className="text-darkText text-xl font-medium">
          Transactions | This Month{" "}
        </div>
        <div className="bg-white rounded-lg card-shadow">
          <div className="flex p-3 justify-between">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none ">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_18261_2526)">
                      <path
                        d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
                        fill="#808080"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_18261_2526">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <input
                  type="text"
                  className="md:w-[248px] w-auto h-10 rounded-md placeholder:text-searchText text-darkText ps-10 text-sm font-normal border border-borderGray"
                  placeholder="Search by order ID..."
                />
              </div>
            </form>
            <div className="flex md:gap-3 gap-2">
              <div className="flex gap-2 py-[6px] ml-2 px-3 text-lightText text-base font-normal bg-white border border-borderGray rounded box-border">
                <p className="text-base font-normal">Sort</p>
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 self-center"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.623006 7.93375C0.831286 7.72547 1.16897 7.72547 1.37725 7.93375L3.641 10.1975L5.90474 7.93375C6.11302 7.72547 6.45071 7.72547 6.65899 7.93375C6.86727 8.14203 6.86727 8.47972 6.65899 8.688L4.01812 11.3289C3.80984 11.5371 3.47215 11.5371 3.26387 11.3289L0.623006 8.688C0.414727 8.47972 0.414727 8.14203 0.623006 7.93375Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.64095 0.515153C3.9355 0.515153 4.17428 0.753934 4.17428 1.04849L4.17428 10.9517C4.17428 11.2463 3.9355 11.4851 3.64095 11.4851C3.3464 11.4851 3.10762 11.2463 3.10762 10.9517L3.10762 1.04849C3.10762 0.753934 3.3464 0.515153 3.64095 0.515153Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.3772 4.06646C13.169 4.27474 12.8313 4.27474 12.623 4.06646L10.3592 1.80272L8.0955 4.06646C7.88722 4.27474 7.54953 4.27474 7.34126 4.06646C7.13298 3.85818 7.13298 3.52049 7.34126 3.31221L9.98212 0.671346C10.1904 0.463067 10.5281 0.463067 10.7364 0.671346L13.3772 3.31221C13.5855 3.52049 13.5855 3.85818 13.3772 4.06646Z"
                    fill="#4D4D4D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3593 11.4851C10.0647 11.4851 9.82596 11.2463 9.82596 10.9517L9.82596 1.04847C9.82596 0.753922 10.0647 0.515141 10.3593 0.515141C10.6538 0.515142 10.8926 0.753922 10.8926 1.04847L10.8926 10.9517C10.8926 11.2463 10.6538 11.4851 10.3593 11.4851Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
              <div className=" p-2 bg-white border border-borderGray rounded box-border">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="self-center w-5 h-5"
                >
                  <path
                    d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Table Starts here */}
          <div className="relative overflow-x-auto px-3 bg-white rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right ">
              <thead className=" bg-darkGray text-lightText text-sm font-medium ">
                <tr>
                  <th scope="col" className="px-3 py-[10px] rounded-s">
                    Order ID
                  </th>
                  <th scope="col" className="text-center">
                    Order date
                  </th>
                  <th scope="col" className="pr-5 md:text-right text-end">
                    Order Amount
                  </th>
                  <th
                    scope="col"
                    className="w-1/4 text-right px-3 py-[10px]  rounded-e"
                  >
                    <div className="flex justify-end md:gap-1 text-center">
                      <span>Transaction Fees</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="self-center"
                      >
                        <g clipPath="url(#clip0_0_5817)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z"
                            fill="#4D4D4D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z"
                            fill="#4D4D4D"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z"
                            fill="#4D4D4D"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_0_5817">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="border-hidden">
                {currentData.map((_, index) => (
                  <tr
                    key={index}
                    className="bg-white border border-b-borderGray"
                  >
                    <td className="px-3 py-[14px] text-blueText font-medium text-sm">
                      #281209
                    </td>
                    <td className="py-[14px] text-darkText text-sm text-center ">
                      7 July 2023
                    </td>
                    <td className="px-6 py-[14px] text-darkText text-right">
                      ₹1,278.23
                    </td>
                    <td className="w-1/5 px-3 py-[14px] text-darkText md:text-right text-center">
                      ₹22
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex justify-center items-center md:w-auto w-screen md:gap-6 gap-2 my-6">
              {/* previous btn */}
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                className={`text-darkText rounded flex gap-3 items-center border border-borderGray ${
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.21967 5.46967C0.0790172 5.61032 -9.53674e-07 5.80109 -9.53674e-07 6C-9.53674e-07 6.19891 0.0790172 6.38968 0.21967 6.53033L4.71967 11.0303C5.01256 11.3232 5.48744 11.3232 5.78033 11.0303C6.07322 10.7374 6.07322 10.2626 5.78033 9.96967L1.81066 6L5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967Z"
                    fill="#4D4D4D"
                  />
                </svg>
                <span className="text-sm font-medium py-[6px] pr-3">
                  Previous
                </span>
              </button>
              {/* numbers btn */}
              <div className="flex gap-2">
                {generatePageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handlePageChange(typeof page === "number" ? page : 1)
                    }
                    className={`text-darkText rounded size-7 ${
                      currentPage === page
                        ? "bg-blueText text-white"
                        : page === "..."
                        ? "ellipsis"
                        : ""
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              {/* next btn */}
              <button
                onClick={() =>
                  handlePageChange(Math.min(currentPage + 1, totalPages))
                }
                className={`text-darkText rounded flex gap-3 items-center border border-borderGray ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                <span className="text-sm font-medium pl-3 py-[6px]">Next</span>
                <svg
                  width="6"
                  height="12"
                  viewBox="0 0 6 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C5.92098 5.61032 6 5.80109 6 6C6 6.19891 5.92098 6.38968 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512564 11.3232 0.21967 11.0303C-0.0732229 10.7374 -0.0732229 10.2626 0.21967 9.96967L4.18934 6L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
