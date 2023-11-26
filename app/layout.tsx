import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";
import {Viewport} from "next";
import Nav from "@/components/Nav";

const outfit = Outfit({subsets: ["latin"]});

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL('https://duckyhq.com'),
	title: "DuckyHQ",
	description: "Unique open source software for the world.",
	keywords: [
		"Software",
		"Open source",
		"JavaScript",
		"Rust",
		"Minecraft",
		"dukc",
		"HQLauncher",
		"HQDesign",
	],
	authors: [{name: "dukc", url: "https://dukc.dev"}],
	creator: "dukc",
	publisher: "dukc",
	openGraph: {
		title: "DuckyHQ",
		description: "Unique open source software for the world.",
		url: "https://duckyhq.com",
		siteName: "DuckyHQ",
		images: [
			{
				url: "/seoCover.png",
			},
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" className={outfit.className}>
			<body className="bg-[#050505] text-white flex flex-col ">
				<Nav />
				<div id="wrapper" className="overflow-x-hidden">
					<div className="flex align-middle place-content-center bg-transparent">
						<div className="max-w-[1300px] w-full flex flex-col gap-24 p-48 max-[630px]:px-[20px]">
							{children}
							<footer className="flex p-64 place-content-between border border-stroke-1 rounded-out place-items-center max-[450px]:align-middle max-[450px]:place-content-center">
								<Link href={"/"} className="max-[450px]:hidden">
									<Image
										src={"/logo.svg"}
										width={50}
										height={50}
										alt="DuckyHQ Logo"
										className="hover-active-effect"
									/>
								</Link>
								<div className="flex flex-col gap-8 place-items-end max-[450px]:place-items-center">
									<Link href={"https://github.com/DuckyHQ0"}>
										<div className="w-48 h-48 bg-[#eeeeee] flex place-content-center align-middle place-items-center rounded-full hover-active-effect">
											<FaGithub className="text-black w-24 h-24" />
										</div>
									</Link>
									<Link
										href={"https://dukc.dev"}
										className="text-sub hover:text-selected active:text-selected/75 duration-150 max-[450px]:text-center"
									>
										an organization by dukc
									</Link>
								</div>
							</footer>
						</div>
					</div>
					<div className="w-[20rem] h-[30rem] animate-spin-slow bg-gradient-to-b from-brand-purple to-brand-blue opacity-80 blur-[250px] relative bottom-[120vh] left-[60vw] -z-50"></div>
				</div>
			</body>
		</html>
	);
}
