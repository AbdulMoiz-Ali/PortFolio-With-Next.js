import React from "react";
import "animate.css";
import Sectiona from "./component/sectiona";
import Sectionb from "./component/sectionb";
import Sectionc from "./component/sectionc";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Abdul Moiz | Portfolio</title>
      </Head>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <h1 className="text-center font-bold">Hello Would</h1>
      <h1 className="text-center animate__animated animate__bounce">An animated element</h1> */}

      <Sectiona />
      <Sectionb />
      <Sectionc />
    </>
  );
}

export default Home;
