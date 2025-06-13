import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center">
      {/* hero section */}
      <div className="container mx-auto">
        <div className="grid grid-cols-4">
          <div className="grid grid-row-5 gap-y-5 px-10 py-10 col-span-3">
            <h5 className="px-2 text-lg">Hi, I'm </h5>

            <h1 className="text-7xl font-bold">Omar Faruk.</h1>
            <h3 className="text-5xl font-semibold text-gray-500">
              Software Engineer.
            </h3>

            <p className="text-gray-500 text-lg">Dhaka, Bangladesh</p>

            <p className="text-gray-500 text-xl">
              I'm a Software Engineer with a focus on{" "}
              <span>backend development</span>, with professional experience in{" "}
              <span>Laravel</span> and <span>PHP</span>. I'm also exploring{" "}
              <span>Go</span> to build high-performance backend services.
            </p>
          </div>
          <div className="py-20">
            <Image
              src="/compressed-profile.jpg"
              alt="profile-picture"
              width={200}
              height={200}
              className="rounded-full border-2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
