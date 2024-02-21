import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function LinkButton({
  link,
  text,
  sub = false,
}: {
  link: string;
  text: string;
  sub?: boolean;
}) {
  return (
    <Link
      href={link}
      className={`flex gap-8 w-fit group place-items-center hover:text-brand-blue ease-out duration-500 ${
        sub ? "text-sub font-normal" : "text-body font-medium"
      }`}
    >
      <p>{text}</p>
      <HiMiniArrowUpRight className="group-hover:rotate-45 ease-out duration-500 text-strong-body" />
    </Link>
  );
}
