import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";
import LinkedAuto1 from "../public/images/home/LinkedAuto1.png";
import EmpProHome from "../public/images/home/EmpProHome.png";
import Instabooks from "../public/images/home/Instabooks.png";
import react from "../public/images/home/react.svg";
import node from "../public/images/home/node.svg";
import expressjs from "../public/images/home/expressjs.svg";
import mongodb from "../public/images/home/mongodb.svg";
import ruby from "../public/images/home/ruby.svg";
import rails from "../public/images/home/rails.svg";
import electron from "../public/images/home/electron.svg";
import tailwind from "../public/images/home/tailwind.svg";
import bootstrap from "../public/images/home/bootstrap.svg";
import Solar from "../public/images/home/Solar.png";
import { PreloadResources } from "./preload";
import ContactForm from "./components/ContactForm";

const projectData = [
  {
    title: "Solar CRM",
    description:
      "A multi-tenant CRM for efficient customer relationship management. Built with Next.js and Tailwind CSS, it features role-based access for secure, tailored user experiences.",
    image: Solar,
    link: "https://solarcrm.vercel.app/",
    stack: ["Next.js", "Tailwind CSS", "Sqlite"],
    width: 1918,
    height: 866,
  },
  {
    title: "LinkedAuto",
    description:
      "A LinkedIn post scheduler that lets you create posts using the Gemini API. Built with Next.js, Tailwind CSS, AWS Lambda, and EventBridge, it simplifies your LinkedIn post management.",
    image: LinkedAuto1,
    link: "https://linked-auto.vercel.app",
    width: 1883,
    height: 862,
  },
  {
    title: "Emp Pro",
    description:
      "A business management application covering everything a small business needs. Built on the MERN stack (MongoDB, Express, React, Node.js).",
    image: EmpProHome,
    link: "https://emp-pro-frontend.vercel.app/",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    width: 1915,
    height: 852,
  },
  {
    title: "Instabooks",
    description:
      "An intuitive bookkeeping app designed for small businesses. Developed with Rails, MongoDB, and Bootstrap for easy financial management.",
    image: Instabooks,
    stack: ["Rails", "MongoDB", "Bootstrap"],
    link: "https://instabooks.in/",
    width: 1912,
    height: 820,
  },
];

PreloadResources;
function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="hover:animate-border inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProjectLink({ img, link, name, width, height, description, stack }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="items-center space-x-3">
          <div className=" relative h-26 col-span-1">
            <Image
              alt={name}
              src={img}
              height={width}
              width={height}
              className="h-26 w-26 border rounded border-neutral-200 dark:border-neutral-700"
              priority
            />
          </div>
          <div className="flex flex-col col-span-2 mt-4">
            <p className="font-medium text-neutral-900 dark:text-neutral-100 flex w-full items-center justify-between mb-2">
              {name}
              <span className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
                <ArrowIcon />
              </span>
            </p>
            <p className="text-neutral-400 me-2">{description}</p>

            <Suspense fallback={<p className="h-6" />}></Suspense>
          </div>
        </div>
      </a>
    </div>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="text-2xl font-medium tracking-tighter">
        Hey, I'm Shashank 👋
      </h1>
      <p className="text-neutral-500 mb-8">Software Developer</p>
      <p className="prose prose-neutral dark:prose-invert text-base">
        {`I currently work as the Lead Developer at `}
        <Link href="/work">Fuzen</Link>
        {`, where I help build an innovative no-code app builder.`}
        <br />
        {`I love working with `}
        <Badge href="https://nextjs.org">
          <img
            alt="Next.js logomark"
            src="/next-logo.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Next.js
        </Badge>
        {` & `}
        <Badge href="https://react.dev">
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge>
        .
      </p>
      <section className="mt-10">
        <Skills />
      </section>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I create a wide range of projects, including web apps, desktop apps,
          and Chrome extensions, using technologies like JavaScript, Ruby,
          React, Next.js, and more. You can explore some of my latest projects
          below.
        </p>
      </div>
      <div className="my-8  w-full gap-4 grid md:grid-cols-2">
        {projectData.map((project, i) => {
          return (
            <ProjectLink
              key={i}
              img={project.image}
              width={project.width}
              height={project.heigth}
              name={project.title}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>
      <div className="flex justify-end">
        <Link
          href="/work"
          className="hover:animate-border inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        >
          View more
        </Link>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Through my blog you'll find writing about technologies I'm interested
          in at the time, or how I'm learning and growing in my career, sharing
          knowledge along the way.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="xAI Developer Guide: Building with the Free Grok API"
          slug="grok-api-free-access"
        />
        <BlogLink
          name="How AI Controls Your Computer"
          slug="how-ai-controls-your-computers"
        />
        <BlogLink
          name="Getting Started With Next Js"
          slug="getting-started-with-next-js"
        />
      </div>
      <div className="flex justify-end">
        <Link
          href="/blog"
          className="hover:animate-border inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
        >
          View more
        </Link>
      </div>

      <ContactForm />
    </section>
  );
}

const Skills = () => {
  const skills = [
    { name: "Next.js", logo: "/next-logo.svg" },
    { name: "React", logo: react },
    { name: "Node Js", logo: node },
    { name: "Express", logo: expressjs },
    { name: "MongoDB", logo: mongodb },
    { name: "Ruby", logo: ruby },
    { name: "Ruby on Rails", logo: rails },
    { name: "Electron Js", logo: electron },
    { name: "Tailwind", logo: tailwind },
    { name: "Bootstrap", logo: bootstrap },
  ];
  return (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Stack</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <Badge key={skill.name}>
            {/* <BorderBeam /> */}
            <div className="flex flex-col items-center justify-center w-full text-lg md:text-2xl py-4 md:py-6">
              <Image
                alt={skill.name}
                src={skill.logo}
                className="!mr-1 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                width="54"
                height="54"
                priority
              />
              <h2 className="text-lg font-medium tracking-tighter mt-4">
                {skill.name}
              </h2>
            </div>
          </Badge>
        ))}
      </div>
    </>
  );
};
