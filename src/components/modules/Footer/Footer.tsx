import { UiWrapper } from "@/components/shared";
import DownloadResumeBtn from "@/components/shared/DownloadResumeBtn";
import TryVar2Btn from "@/components/shared/TryVar2Btn";
import Link from "next/link";

const Footer = () => {
  return (
    <UiWrapper>
      <footer className="md:px-8 md:py-4 pb-4 text-zinc-500">
        <div className="container flex justify-between text-center flex-col md:flex-row mb-10 md:mb-0">
          <div className="w-full flex md:justify-start justify-center py-5 md:py-0">
            <DownloadResumeBtn />
          </div>
          <div className="w-full">
            <div className="text-sm px-16 md:px-4 flex justify-center items-center text-center flex-col md:flex-row ">
              &copy; {new Date().getFullYear()} Made with ❤️‍🔥{" "}
              <Link href={"https://www.faizanahmed.in"}>
                <div className="hover:text-white">by Faizanahmed Saiyed</div>
              </Link>
            </div>
            <div className="mt-4 text-zinc-400">
              <Link
                href="https://github.com/Faizanahmedsy"
                className="mx-2 text-sm  hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/faizanahmed-saiyed/"
                className="mx-2 text-sm  hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="mailto:saiyed.faizanahmed1@gmail.com"
                className="mx-2 text-sm  hover:text-white"
              >
                Gmail
              </Link>
            </div>
          </div>
          <div className="w-full flex md:justify-end justify-center py-5 md:py-0">
            <TryVar2Btn />
          </div>
        </div>
      </footer>
    </UiWrapper>
  );
};

export default Footer;
