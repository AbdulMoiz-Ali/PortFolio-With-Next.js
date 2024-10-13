import Link from "next/link";
import Typewriter from "./typewriter";
import "@/app/style/section.css";
import moiz from "@/app/public/InShot_20241008_191517656.png";
import Image from "next/image";
function Sectiona() {
  return (
    <>
      <section className="z-10 bg-trasparent">
        <div className="grid max-w-screen-xl gap-50 px-10 md:px-20 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="flex text-2xl items-center gap-3 max-w-2xl mb-4 font-semibold tracking-tight leading-none dark:text-white">
              <p className="text-[#C778DD]">HELLO !</p>
              <span className="linehello"></span>
            </h1>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              I AM <span className="text-[#C778DD]">ABDUL MOIZ</span>
            </h1>
            <h1 className="max-w-2xl mt-10 text-1xl font-mono mb-6 text-[#C778DD] mt-10 font-extrabold lg:mb-8 md:text-5xl">
              <Typewriter />
            </h1>
            <Link
              href={"about"}
              className="inline-flex btn-linke items-center font-mono justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-[#C778DD] text-white"
            >
              Contact me !!
            </Link>
          </div>
          <div className="lg:mt-0 lg:ml-20 ml-20 mt-10 -z-5 lg:col-span-5 lg:flex">
            <Image className="moizimg" src={moiz} width={300} height={150} alt="moiz ali" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sectiona;
