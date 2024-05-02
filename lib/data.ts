import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quizupImg from "@/public/quizup.png";
import instaplayImg from "@/public/instaplay.png";
import sanityImg from "@/public/sanity.png";
import artPortfolioImg from "@/public/art-portfolio.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Pesto Tech",
		location: "Remote",
		description:
			"Bootcamp with Pesto Tech after which I immediately found a job as a software developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2022",
	},
	{
		title: "Software Developer",
		location: "Remote",
		description:
			"I worked as a software developer in this company and upskilled to the full stack.",
		icon: React.createElement(CgWorkAlt),
		date: "2023",
	},
	{
		title: "Full-Stack Developer",
		location: "Remote",
		description:
			"I'm now a full-stack developer working in MagicCraft. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, MongoDB, PostgreSQL. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2023 - present",
	},
] as const;

export const projectsData = [
	{
		title: "QuizUp",
		description:
			"A platform where users can give Mock Tests and Quizzes and prepare for various exams.",
		tags: ["React", "Styled Components", "Redux", "MongoDB", "Express"],
		imageUrl: quizupImg,
	},
	{
		title: "Instaplay",
		description:
			"A video streaming app with Built in live chat functionality fetching the video data from Youtube APIs",
		tags: [
			"React",
			"React Router",
			"Tailwind",
			"Redux Toolkit",
			"Live YT APIs",
		],
		imageUrl: instaplayImg,
	},
	{
		title: "Art Portfolio",
		description:
			"An immersive art porfolio with multiple projects and stunning visuals.",
		tags: ["React", "Next.js", "Resend", "Tailwind"],
		imageUrl: artPortfolioImg,
	},
	{
		title: "Photo gallery app",
		description:
			"A web app to show photo gallery which gets data from the Sanity CMS.",
		tags: ["React", "Next.js", "Sanity", "Tailwind"],
		imageUrl: sanityImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Styled Components",
	"MongoDB",
	"SQL",
	"Redux",
	"Express",
	"Framer Motion",
] as const;
