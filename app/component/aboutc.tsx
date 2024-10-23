import "@/app/style/section.css";
import Image from "next/image";
import aboutlogo from "@/app/public/InShot_20241013_194738698.png";

function Aboutc() {
  return (
    <>
      <section className="z-10 bg-trasparent">
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
                About-Me
              </h1>
              <p className="lineprojects max-md:hidden md:w-64"></p>
            </div>

            <h1 className="max-w-2xl mt-20 text-1xl font-mono mb-6 text-[#C778DD] font-bold lg:mb-8 md:text-2xl">
              Hello, <span className="text-[#ABB2BF]">i'm Abdul Moiz!</span>
            </h1>
            <p className="max-w-2xl text-base font-mono mb-6 text-[#ABB2BF] mt-10 font-light lg:mb-8 md:text-1xl">
              I’m Abdul Moiz, a self-taught
              <span className="text-[#C778DD]"> front-end developer</span> from
              Karachi, skilled in{" "}
              <span className="text-[#C778DD]">JavaScript</span>,
              <span className="text-[#C778DD]">React.js</span>, and
              <span className="text-[#C778DD]"> Next.js </span>. I create
              <span className="text-[#C778DD]"> responsive ,</span>
              <span className="text-[#C778DD]">user-friendly websites </span>
              and am passionate about
              <span className="text-[#C778DD]"> deep learning</span> and{" "}
              <span className="text-[#C778DD]">natural language </span>
              processing. I'm always exploring the latest technologies to
              enhance my skills.
            </p>
          </div>
          <div className="lg:mt-0 lg:ml-20 ml-20 mt-10 -z-5 lg:col-span-5 hidden md:flex">
            <Image
              className="moizimg"
              src={aboutlogo}
              width={400}
              height={80}
              alt="moiz ali"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutc;
