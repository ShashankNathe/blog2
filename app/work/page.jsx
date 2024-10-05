import Link from "next/link";
// import { projectData } from "../db/projectlist";

export const projectData = [
  {
    title: "LinkedAuto",
    description:
      "A LinkedIn post scheduler that lets you create posts using the Gemini API. Built with Next.js, Tailwind CSS, AWS Lambda, and EventBridge, it simplifies your LinkedIn post management.",
    image: "/images/home/LinkedAuto1.png",
    link: "https://linked-auto.vercel.app",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "AWS Lambda",
      "AWS EventBridge",
      "Gemini",
    ],
    width: 1883,
    height: 862,
  },
  {
    title: "Emp Pro",
    description:
      "A business management application covering everything a small business needs. Built on the MERN stack (MongoDB, Express, React, Node.js) for a seamless experience.",
    image: "/images/home/EmpProHome.png",
    link: "https://emp-pro-frontend.vercel.app/",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    width: 1915,
    height: 852,
  },
  {
    title: "Instabooks",
    description:
      "An intuitive bookkeeping app designed for small businesses. Developed with Rails, MongoDB, and Bootstrap for easy financial management.",
    image: "/images/home/Instabooks.png",
    stack: ["Rails", "MongoDB", "Bootstrap"],
    link: "https://instabooks.in/",
    width: 1912,
    height: 820,
  },
  {
    title: "Datyle",
    description:
      "A tool for email verification and discovery with Stripe integration. Built on Rails to ensure accurate and secure email management.",
    image: "/images/home/Datyle.png",
    link: "https://app.datyle.co/",
    stack: ["Rails", "Stripe", "Bootstrap", "MongoDB"],
    width: 1917,
    height: 857,
  },
  {
    title: "PMS",
    description:
      "An appraisal management system for streamlining performance reviews. Built on Rails to support fair and efficient employee evaluations.",
    image: "/images/home/Pms.png",
    stack: ["Rails", "Bootstrap", "MongoDB"],
    width: 1915,
    height: 862,
  },
];

export const metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

async function Stars() {
  let res = await fetch("https://api.github.com/repos/vercel/next.js");
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products users love. Here's a summary of my work
          so far.
        </p>
        {projectData.map((project, i) => {
          return (
            <div key={i * 9}>
              <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
              <div>
                <img
                  className=" rounded p-2 bg-neutral-700"
                  src={project.image}
                  alt=""
                />
              </div>
              <h2 className="font-medium text-xl mb-1 tracking-tighter">
                <a href={project.link} target="_blank">
                  {project.title}
                </a>
              </h2>
              {/* <p className="text-neutral-600 dark:text-neutral-400">
                {project.link}
              </p> */}

              <p>{project.description}</p>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm flex gap-2">
                {project.stack.map((stack, ind) => {
                  return (
                    <span
                      className="border border-gray-500 rounded px-2 py-0.5 text-xs"
                      key={ind * 4}
                    >
                      {stack}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
