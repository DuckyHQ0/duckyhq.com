import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import LinkButton from "./LinkButton";

export default function Footer() {
  return (
    <footer className="flex p-64 place-content-between max-w-[1300px] w-full border border-stroke-1 rounded-out place-items-center max-[450px]:items-center max-[450px]:flex-col max-[450px]:gap-48">
      <Link
        href={"/"}
        className="flex flex-col gap-12 max-[450px]:items-center"
      >
        <Image
          src={"/logo.svg"}
          width={50}
          height={50}
          alt="DuckyHQ Logo"
          className="hover-active-effect"
        />
        <p className="text-sub">DuckyHQ 2024</p>
      </Link>
      <div className="flex flex-col gap-8 items-end max-[450px]:items-center">
        <div className="flex gap-24">
          <div className="flex flex-col gap-12 items-end">
            <h3 className="text-3 font-medium">Links</h3>
            <LinkButton text="GitHub" link="https://github.com/DuckyHQ0" />
            <LinkButton text="By dukc" link="https://dukc.dev" />
          </div>
        </div>
      </div>
    </footer>
  );
}
