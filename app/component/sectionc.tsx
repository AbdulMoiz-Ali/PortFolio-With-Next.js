import Link from "next/link";
import "@/app/style/section.css";
import aboutlogo from "@/app/public/InShot_20241013_194738698.png"
import Image from "next/image";

function Sectionc() {
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
              I’m a self-taught
              <span className="text-[#C778DD]"> front-end developer</span> based
              in Karachi, driven by a deep passion for{" "}
              <span className="text-[#C778DD]"> programming.</span> My journey
              in tech has been both challenging and rewarding, and I’ve gained
              fluency in key technologies like{" "}
              <span className="text-[#C778DD]">JavaScript</span>,
              <span className="text-[#C778DD]">React.js</span>, and
              <span className="text-[#C778DD]"> Next.js </span>.
              <br />
              <br />
              For over a year, I’ve dedicated myself to creating{" "}
              <span className="text-[#C778DD]">responsive websites </span>
              that offer modern,
              <span className="text-[#C778DD]">user-friendly experiences</span>.
              I enjoy building innovative web solutions and am particularly
              interested in areas like{" "}
              <span className="text-[#C778DD]">deep learning</span> and{" "}
              <span className="text-[#C778DD]">natural language </span>
              processing.
              <br />
              <br />
              I’m always on the lookout for the latest technologies and
              frameworks to expand my skills. Whenever I can, I immerse myself
              in developing products with cutting-edge JavaScript libraries and
              frameworks like <span className="text-[#C778DD]">React.js</span>
            </p>
            <Link
              href={"about"}
              className="btn-linke inline-flex items-center font-mono justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-[#C778DD] text-white"
            >
              Read More{" "}
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
          <div className="lg:mt-0 lg:ml-20 ml-20 mt-10 -z-5 lg:col-span-5 lg:flex">
            <Image className="moizimg" src={aboutlogo} width={400} height={80} alt="moiz ali" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sectionc;
