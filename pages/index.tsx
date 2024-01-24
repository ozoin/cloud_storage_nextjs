import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { TypeAnimation } from "react-type-animation";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main
      className={`flex min-h-screen text-center w-full flex-col items-center justify-evenly p-24 ${inter.className}`}
      id="welcome_main"
    >
      <h1 className="text-3xl font-mono subpixel-antialiased font-semibold  tracking-widest text-center text-white ">
        Cloud storage fullstack application.
        <br />
        Made with ❤
      </h1>
      <TypeAnimation
        sequence={[
          "Next JS 🚀",
          1000,
          "Nest JS 🎁",
          1000,
          "Tailwind CSS 🎄",
          1000,
          "Axios 🔥",
          1000,
          "Fullstack 🎓",
          1000,
          "Full deployment 🎉",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="text-3xl font-mono subpixel-antialiased font-semibold  tracking-widest text-center text-white "
        repeat={Infinity}
      />
      <button
        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        onClick={() => router.push("/dashboard/auth")}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Click to Login!
        </span>
      </button>
      <div className="flex flex-row">
        <h2 className="text-3xl font-mono subpixel-antialiased font-bold  tracking-widest text-center text-white ">
          Hire me! =>  &nbsp;
        </h2>
        <a href="https://github.com/ozoin">
          <FaGithub
            size={40}
            className=" text-white hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-200"
          />
        </a>
        <a href="https://www.linkedin.com/in/arturs-jegorovs/">
          <CiLinkedin
            size={45}
            className="ml-5 text-white hover:cursor-pointer transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-200"
          />
        </a>
      </div>
    </main>
  );
}
