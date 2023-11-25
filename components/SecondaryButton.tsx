import Link from "next/link";

interface ButtonProps {
    text: string;
    type: string;
    link: string;
}

export default function SecondaryButton({ text, type, link }: ButtonProps) {
    return (
        <Link href={link} className="border border-stroke-1 rounded-out px-[28px] py-12 text-sub bg-transparent hover:bg-white/10 active:bg-white/5 duration-150">
            {text}
        </Link>
    );
}
