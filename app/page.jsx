import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";
// import LinkedAuto1 from ''
import LinkedAuto1 from "../public/images/home/LinkedAuto1.png";
import Datyle from "../public/images/home/Datyle.png";
import EmpProHome from "../public/images/home/EmpProHome.png";
import Instabooks from "../public/images/home/Instabooks.png";
import vercel from "../public/images/home/vercel.jpg";
import react from "../public/images/home/react.svg";
import node from "../public/images/home/node.svg";
import expressjs from "../public/images/home/expressjs.svg";
import mongodb from "../public/images/home/mongodb.svg";
import ruby from "../public/images/home/ruby.svg";
import rails from "../public/images/home/rails.svg";
import electron from "../public/images/home/electron.svg";
import tailwind from "../public/images/home/tailwind.svg";
import bootstrap from "../public/images/home/bootstrap.svg";
// import { projectData } from "./db/projectlist";
import { PreloadResources } from "./preload";
const projectData = [
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
      "A business management application covering everything a small business needs. Built on the MERN stack (MongoDB, Express, React, Node.js) for a seamless experience.",
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
  {
    title: "Datyle",
    description:
      "A tool for email verification and discovery with Stripe integration. Built on Rails to ensure accurate and secure email management.",
    image: Datyle,
    link: "https://app.datyle.co/",
    stack: ["Rails", "Stripe", "Bootstrap", "MongoDB"],
    width: 1917,
    height: 857,
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

function ProjectLink({ img, link, name, width, height, description }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={width}
              width={height}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}></Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
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
        {`, where I help build an innovative no-code app builder.  I love working with `}
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
      <section className="mt-10">
        <Projects />
      </section>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I create educational content for developers, teaching them about web
          development, JavaScript and TypeScript, React and Next.js, and more.
          This comes in all forms: blog posts, videos, tweets, conference talks,
          and workshops. You can watch some of my favorites below.
        </p>
      </div>
      <div className="my-8  w-full gap-3 grid grid-cols-2">
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
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the past decade, I've written content on my blog and newsletter.
          I try to keep things simple. You'll find writing about technologies
          I'm interested in at the time, or how I'm learning and growing in my
          career, sharing knowledge along the way.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel" />
        <BlogLink name="The Story of Heroku" slug="heroku" />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I invest small angel checks into early stage startups building tools
          for developers.
        </p>
      </div>
      <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        <a
          href="https://linear.app"
          className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
        >
          <svg width="78" height="20" role="img" aria-label="Linear logo">
            <use href="/sprite.svg#linear" />
          </svg>
        </a>
        <a
          href="https://supabase.com"
          className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
        >
          <svg width="100" height="19" role="img" aria-label="Supabase logo">
            <use href="/sprite.svg#supabase" />
          </svg>
        </a>
        <a
          href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce"
          className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
        >
          <svg width="96" height="19" role="img" aria-label="Makeswift logo">
            <use href="/sprite.svg#makeswift" />
          </svg>
        </a>
        <a
          href="https://resend.com"
          className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
        >
          <svg width="70" height="17" role="img" aria-label="Resend logo">
            <use href="/sprite.svg#resend" />
          </svg>
        </a>
        <a
          href="https://bun.sh"
          className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
        >
          <svg width="35" height="27" role="img" aria-label="Bun logo">
            <use href="/sprite.svg#bun" />
          </svg>
        </a>
        <a
          href="https://roboflow.com"
          className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
        >
          <svg width="35" height="27" role="img" aria-label="Roboflow logo">
            <use href="/sprite.svg#roboflow" />
          </svg>
        </a>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've worked with and advised companies on{" "}
          <Link href="/blog/developer-marketing">developer marketing</Link>,{" "}
          <Link href="/blog/devrel">developer relations</Link>, building
          open-source communities, product-led growth, and more.
        </p>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li>
      </ul>
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

const Projects = () => {
  const data = [
    {
      title: "LinkedAuto",
      description:
        "A LinkedIn post scheduler that lets you create posts using the Gemini API. Built with Next.js, Tailwind CSS, AWS Lambda, and EventBridge, it simplifies your LinkedIn post management.",
      image: "../public/images/home/LinkedAuto1.png",
      link: "https://linked-auto.vercel.app",
      width: 1883,
      height: 862,
    },
    {
      title: "Emp Pro",
      description:
        "A business management application covering everything a small business needs. Built on the MERN stack (MongoDB, Express, React, Node.js) for a seamless experience.",
      image: "/EmpProHome.png",
      link: "https://emp-pro-frontend.vercel.app/",
      stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      width: 1915,
      height: 852,
    },
    {
      title: "Instabooks",
      description:
        "An intuitive bookkeeping app designed for small businesses. Developed with Rails, MongoDB, and Bootstrap for easy financial management.",
      image: "/Instabooks.png",
      stack: ["Rails", "MongoDB", "Bootstrap"],
      link: "https://instabooks.in/",
      width: 1912,
      height: 820,
    },
    {
      title: "Datyle",
      description:
        "A tool for email verification and discovery with Stripe integration. Built on Rails to ensure accurate and secure email management.",
      image: "/Datyle.png",
      link: "https://app.datyle.co/",
      stack: ["Rails", "Stripe", "Bootstrap", "MongoDB"],
      width: 1917,
      height: 857,
    },
  ];

  return (
    <>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {data.map((project) => (
          <Link
            key={project.title}
            href={`${project.link}`}
            target="_blank"
            className="flex flex-col items-center py-5 p-3 rounded border group border-neutral-200 bg-neutral-50 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:[background:linear-gradient(45deg,#262626,theme(colors.neutral.800)_50%,#262626)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.neutral.500)_86%,_theme(colors.neutral.300)_90%,_theme(colors.neutral.500)_94%,_theme(colors.slate.600/.48))_border-box] hover:border-transparent hover:animate-border ease-in cursor-pointer"
          >
            <div className="w-11/12">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium tracking-tighter">
                  {project.title}
                </h2>
                <ArrowIcon />
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-base">
                {project.description}
              </p>
            </div>
            <div className="w-11/12 mt-3">
              <img
                src={project.image}
                alt={`Project ${project.title} Home Page`}
                className="w-full h-52 rounded"
                width={project.width}
                height={project.height}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
