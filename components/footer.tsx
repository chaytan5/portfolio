import React from "react";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
	return (
		<footer className="mb-10 px-4 text-center text-zinc-500">
			<p className="text-xs">
				<span className="font-semibold flex items-center justify-center gap-1">
					Made with <AiFillHeart className="fill-red-700" /> using
				</span>
				<span>
					React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email
					& Resend.
				</span>
			</p>
		</footer>
	);
}
