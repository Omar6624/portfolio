import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen sm:flex sm:items-center">
        {/* hero section */}
        <div className="container mx-auto sm:px-10">
          <div className="grid sm:grid-cols-4 grid-cols-1 max-w-7xl mx-auto gap-4">
            <div className="grid grid-row-5 gap-y-5 px-4  sm:px-5 py-10 sm:col-span-3 col-span-1">
              <h5 className="px-2 text-lg text-teal-400 heading-font">
                Hi, I'm{" "}
              </h5>

              <h1 className="sm:text-7xl font-bold text-5xl heading-font">
                Omar Faruk.
              </h1>
              <h3 className="sm:text-5xl font-semibold text-gray-500 text-3xl heading-font">
                Software Engineer.
              </h3>

              <p className="text-gray-500 text-lg">Dhaka, Bangladesh</p>

              <p className="text-gray-500 text-xl">
                I'm a Software Engineer with a focus on{" "}
                <span className="text-teal-400">backend development</span>, with
                professional experience in{" "}
                <span className="text-teal-400">Laravel</span> and{" "}
                <span className="text-teal-400">PHP</span>. I'm also exploring{" "}
                <span className="text-teal-400">Go</span> to build
                high-performance backend services.
              </p>
            </div>

            <div className="py-20 sm:block hidden ">
              <Image
                src="/compressed-profile.jpg"
                alt="profile-picture"
                width={200}
                height={200}
                className="rounded-full  border-2 border-teal-400"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <About />
      </div>
    </>
  );
}
