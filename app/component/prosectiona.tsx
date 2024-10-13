import React from "react";
import Card from "./card";
import pro1 from "@/app/public/Untitled design (1).png";
import pro2 from "@/app/public/Untitled design.png";
import pro3 from "@/app/public/Untitled design 3.png";
import pro4 from "@/app/public/meme maker.png";
import pro5 from "@/app/public/quizapp.png";
import pro6 from "@/app/public/blogfire.png";
import pro7 from "@/app/public/simple ecomerce.png";
// import pro8 from "@/app/public/mobile shope.png";
import pro9 from "@/app/public/game.png";
// import pro10 from "@/app/public/shoping mart.png";
import pro11 from "@/app/public/saltnpaper.png";
import pro12 from "@/app/public/startup figma.png";
import pro13 from "@/app/public/otera figma.png";
import pro14 from "@/app/public/portfolimg.png";

function Prosectiona() {
  return (
    // <h1 classNameName="flex text-2xl items-center gap-3 max-w-2xl mb-4 font-semibold tracking-tight leading-none dark:text-white">
    //   <p classNameName="text-[#C778DD]">HELLO !</p>
    //   <span classNameName="linehello"></span>
    // </h1>

    <section className="z-10 bg-trasparent">
      <div className="py-8 px-10 mx-auto max-w-screen-xl lg:py-16 lg:px-20">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <Card
            img={pro4}
            live={"https://memes-generator-zeta.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Memes-Generator"}
            title={"Meme Maker App"}
            description={
              "Meme maker apps are great for creating custom memes! You can choose from popular templates, add text, and then download your creations."
            }
            noneclass={"flex"}
          />
           <Card
            img={pro14}
            live={"https://port-folio-with-next-js-xsxg.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/PortFolio-With-Next.js"}
            title={"Portfolio"}
            description={
              "This is my personal portfolio website with NEXT.js, created using HTML, CSS, JavaScript, Tailwind CSS, and Firebase.Showcase MY All Skill in this website."
            }
            noneclass={"flex"}
          />
          <Card
            img={pro3}
            live={"https://weather-app-with-react-ndwe.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Weather-App-With-React"}
            title={"Weather App"}
            description={
              "Explore my weather app built with React, offering real-time weather updates, forecasts, and detailed information about current conditions."
            }
            noneclass={"flex"}
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
            noneclass={"flex"}
          />
          <Card
            img={pro5}
            live={"https://quiz-app-with-react-eight.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Quiz-App-With-React"}
            title={"Quiz App"}
            description={
              "Discover my interactive quiz app built with React.The app features a variety of quizzes with real-time feedback and scores, designed to be both educational and fun"
            }
            noneclass={"flex"}
          />
          <Card
            img={pro6}
            live={"https://habk-tone-task.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/HabkToneTask"}
            title={"Bloger Website"}
            description={
              "Welcome to my blogging platform, crafted entirely with JavaScript. This site showcases my skills in web development, featuring a sleek and user-friendly interface."
            }
            noneclass={"flex"}
          />
          <Card
            img={pro7}
            live={"https://firebase-ecommerce-app.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Firebase-Ecommerce-App"}
            title={"Simple Ecomerce Website"}
            description={
              "This is an eCommerce app built with Firebase,The platform offers a seamless shopping experience, from browsing products to secure checkout. With Firebase as the backend."
            }
            noneclass={"flex"}
          />
          {/* <Card
            img={pro8}
            live={"https://mobile-store-ruddy.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Mobile-Store"}
            title={"Mobile Store"}
            description={
              ""
            }
            noneclass={"flex"}
          /> */}
          <Card
            img={pro9}
            live={"https://score-board-game-ten.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Score-Board-Game"}
            title={"Scoreboard Game"}
            description={
              "Check out my interactive scoreboard game, built entirely with JavaScript.featuring real-time score updates and intuitive gameplay. The app boasts a sleek design and responsive interface"
            }
            noneclass={"flex"}
          />
          {/* <Card
            img={pro10}
            live={"https://mart-shope.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Mart-Shope"}
            title={"Mart Shope"}
            description={
              ""
            }
            noneclass={"flex"}
          /> */}
          <Card
            img={pro11}
            live={"https://salt-n-pepper-eight.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/Salt-N-Pepper"}
            title={"Restaurant Website"}
            description={
              " Discover a culinary world crafted with the simplicity and elegance of HTML and CSS. Salt 'n' Pepper is a space where I share delicious recipes, cooking tips, and food stories. "
            }
            noneclass={"flex"}
          />
          <Card
            img={pro12}
            live={"https://start-up-figma-templeart-website.vercel.app/"}
            code={
              "https://github.com/AbdulMoiz-Ali/Start-Up-Figma-Templeart-Website"
            }
            title={"Start Up Figma Website"}
            description={
              "Explore the seamless transition from Figma designs to HTML and CSS .This platform showcases my expertise in converting stunning visual designs into responsive website."
            }
            noneclass={"flex"}
          />
          <Card
            img={pro13}
            live={"https://o-tera-figma-ui.vercel.app/"}
            code={"https://github.com/AbdulMoiz-Ali/OTera-Figma-ui"}
            title={"O Tera Figma UI Website"}
            description={
              "Explore the seamless transition from Figma designs to HTML and CSS .This platform showcases my expertise in converting stunning visual designs into responsive website."
            }
            noneclass={"flex"}
          />
        </div>
      </div>
    </section>
  );
}

export default Prosectiona;
