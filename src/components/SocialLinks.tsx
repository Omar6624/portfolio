import Image from "next/image";

const SocialLinks = () => {
  return (
    <>
      <div className="fixed left-6 bottom-0 hidden md:block">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate">
          <a
            href="#"
            className="text-slate hover:text-teal hover:-translate-y-1 transition-all"
          >
            <Image src="/github.svg" alt="github" width={20} height={20} />
          </a>
          <a
            href="#"
            className="text-slate hover:text-teal hover:-translate-y-1 transition-all"
          >
            <Image src="/linkedin.svg" alt="github" width={20} height={20} />
          </a>

          <a
            href="#"
            className="text-slate hover:text-teal hover:-translate-y-1 transition-all"
          >
            <Image src="/mail.svg" alt="github" width={20} height={20} />
          </a>
        </div>
      </div>

      {/* <div className="fixed right-3 bottom-0 hidden md:block">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-slate">
          <a
            href="mailto:omarfaruk66150@gmail.com"
            className="font-mono text-slate text-xs tracking-widest hover:text-teal transition-colors py-10 [writing-mode:vertical-rl]"
          >
            omarfaruk66150@gmail.com
          </a>
        </div>
      </div> */}
    </>
  );
};

export default SocialLinks;
