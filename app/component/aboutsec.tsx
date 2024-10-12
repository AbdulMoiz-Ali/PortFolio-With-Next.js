import React from "react";

function Aboutsec() {
  return (
    <>
      <section className="bg-trasparent">
        <div className="grid max-w-screen-xl gap-50 px-10 md:px-20 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="flex gap-4 items-center mb-8 lg:mb-25">
              <img
                className="animate__animated animate__bounce animate__slideInLeft"
                width="44"
                height="44"
                src="https://img.icons8.com/glyph-neue/64/c778dd/long-arrow-right.png"
                alt="long-arrow-right"
              />
              <h1 className="md:text-5xl text-3xl gap-3 font-mono max-w-2xl font-light tracking-tight leading-nonetext">
                Skills
              </h1>
              <p className="lineprojects max-md:hidden md:w-64"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutsec;