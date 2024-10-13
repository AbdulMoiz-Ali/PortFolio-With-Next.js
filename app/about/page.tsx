import React from "react";
import Aboutsec from "../component/aboutsec";
import Aboutc from "../component/aboutc";
import Head from "next/head";

function About() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Head>
        <title>Abdul Moiz | Portfolio</title>
      </Head>
      <h1 className="z-10 max-w-2xl font-mono ml-32 text-4xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl">
        <span className="text-[#C778DD]">/</span>about-me
      </h1>
      <p className="z-10 font-mono pl-8 mt-3 ml-32 text-[#ABB2BF] text-1xl font-light">
        Know Who I'M
      </p>
      <Aboutc />
      <Aboutsec />
    </>
  );
}

export default About;
