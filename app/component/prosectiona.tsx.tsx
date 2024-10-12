import React from "react";
import Card from "./card";
import pro1 from "@/app/public/Untitled design (1).png";
import pro2 from "@/app/public/Untitled design.png";
import pro3 from "@/app/public/Untitled design 3.png";

function Prosectiona() {
  return (
    // <h1 classNameName="flex text-2xl items-center gap-3 max-w-2xl mb-4 font-semibold tracking-tight leading-none dark:text-white">
    //   <p classNameName="text-[#C778DD]">HELLO !</p>
    //   <span classNameName="linehello"></span>
    // </h1>

    <section className="bg-trasparent">
      <div className="py-8 px-10 mx-auto max-w-screen-xl lg:py-16 lg:px-20">
        <div className="flex justify-between w-full items-center mb-8 lg:mb-25">
          <div className="flex gap-4 items-center mb-8 lg:mb-25">
            <img
              className="animate__animated animate__bounce animate__slideInLeft"
              width="44"
              height="44"
              src="https://img.icons8.com/glyph-neue/64/c778dd/long-arrow-right.png"
              alt="long-arrow-right"
            />
            <h1 className="md:text-5xl text-3xl gap-3 font-mono max-w-2xl font-light tracking-tight leading-nonetext">
              Projects
            </h1>

            <p className="lineprojects max-md:hidden md:w-64"></p>
          </div>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <Card
            img={pro3}
            live={"https://weather-app-with-react-ndwe.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Weather-App-With-React"}
            title={"Weather App"}
            description={
              "This weather app offers real-time updates and forecasts with an intuitive interface, allowing you to access detailed insights and plan your day confidently!"
            }
            noneclass={"hidden md:flex"}
          />
          <Card
            img={pro1}
            live={"https://blogging-website-with-react.vercel.app"}
            code={
              "https://github.com/AbdulMoiz-Ali/Blogging-Website-With-React"
            }
            title={"Blogging App"}
            description={
              "This React-based blogging website allows users to create, read, and engage with content, fostering a vibrant community through comments and likes!"
            }
            noneclass={"flex"}
          />
          <Card
            img={pro2}
            live={"https://to-do-app-with-firebase-in-react.vercel.app/"}
            code={
              "https://github.com/AbdulMoiz-Ali/ToDo-App-With-Firebase-in-React"
            }
            title={"Task Manager App"}
            description={
              "This task manager app, built with React and Firebase, offers an intuitive interface for organizing tasks with real-time syncing and easy task management."
            }
            noneclass={"hidden md:flex"}
          />
          
        </div>
      </div>
    </section>
  );
}

export default Prosectiona;
