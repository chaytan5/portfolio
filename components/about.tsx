"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3 text-lg">
				I am a full stack engineer with experience in building full stack apps
				using React, Next.js, Express, and MongoDB. Currently working as a
				frontend intern at Amazetrac Pvt Ltd, where I have built multiple
				production-ready user-facing products from scratch. I am driven by my
				curiosity for learning new technologies and constantly strive to expand
				my skill set. I am currently learning multiple{" "}
				<span className="italic">web3 technologies</span> such as Solidity and
				Blockchain. As of now, I am looking for a full time or internship role
				to contribute and grow as a full stack engineer.
			</p>
		</motion.section>
	);
}
