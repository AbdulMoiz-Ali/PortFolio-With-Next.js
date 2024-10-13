import Image from "next/image";
import React from "react";

function Card({ img, title, description, code, live, noneclass }: any) {
  return (
    <div
      className={`${noneclass} z-10 havercard flex-col mx-auto max-w-lg text-center text-white border border-[#ABB2BF] shadow`}
    >
      <Image src={img} alt={title} width={350} height={100} />
      <div className="border-stone-500 border-2 text-2xl border-solid border-[#ABB2BF] py-5 font-bold">
        {title}
      </div>
      <p className="font-light py-3 border border-[#ABB2BF] text-gray-500 sm:text-lg">
        {description}
      </p>
      <div className="flex justify-center gap-8 items-center my-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={code}
          className="text-white items-center gap-2 flex bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2"
        >
          <p>Code</p>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
            />
          </svg>
        </a>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          <p>Live</p>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
