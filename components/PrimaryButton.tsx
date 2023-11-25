import Link from "next/link";

interface ButtonProps {
    text: string;
    type: string;
    link: string;
}

export default function PrimaryButton({ text, type, link }: ButtonProps) {
    return (
        <Link href={link} className="border border-stroke-1 rounded-in px-[28px] py-12 text-sub bg-brand-blue/75 hover:bg-brand-blue/100 active:bg-brand-blue/50 duration-150">
            {text}
        </Link>
    );
}
