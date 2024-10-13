"use client";

import React, { useState } from "react";

function Uplodeinfo({}: any) {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="z-10 btn-linke inline-flex items-center font-mono justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-[#C778DD] text-white"
      >
        Contact Now{" "}
        <svg
          className="w-6 h-6 text-gray-800 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 12H5m14 0-4 4m4-4-4-4"
          />
        </svg>
      </button>

      {isOpen || (
        <div
          id="defaultModal"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl">
            <div className="relative p-4 rounded-lg shadow bg-gray-800">
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 text-white">
                  Contact
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {isLoading ? (
                <form
                  id="create-model"
                  //   onSubmit={handleSubmit(sendDatatoFirestore)}
                >
                  <div className="flex flex-col grid gap-4 mb-2 sm:grid-cols-2">
                    <div className="relative z-0 w-full mb-4 group">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        // {...register("blogtitle")}
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        placeholder="Type Name"
                        required
                      />
                    </div>
                    <div className="relative z-0 w-full mb-4 group">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        // {...register("blogtitle")}
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        placeholder="Type Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 text-white"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      // {...register("blogtitle")}
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                      placeholder="Type title name"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-white">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      // {...register("blogdescription")}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                      placeholder="Write message here"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="text-white border border-[#C778DD] mt-5 flex hover:bg-purple-900 bg-trasparent inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    <svg
                      className="mr-1 -ml-1 w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Send
                  </button>
                </form>
              ) : (
                <div className="flex flex-wrap items-center justify-center">
                  <div className="loader">Loading......</div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Uplodeinfo;
