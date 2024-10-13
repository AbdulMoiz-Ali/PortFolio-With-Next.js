import React from "react";
import Contacta from "../component/contacta";
import Head from "next/head";

function Contacts() {
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
      <h1 className="max-w-2xl font-mono ml-32 text-4xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl">
        <span className="text-[#C778DD]">/</span>Contacts
      </h1>
      <p className="font-mono pl-8 mt-3 ml-32 text-[#ABB2BF] text-1xl font-light">
        Hirring Now
      </p>
      <Contacta />
    </>
  );
}

export default Contacts;
