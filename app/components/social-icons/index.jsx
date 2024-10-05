import { Mail, Github, Linkedin, X } from "./icons";

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  x: X,
};

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === "mail" && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))) return null;

  const SocialSvg = components[kind];

  return (
    <a className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`fill-current text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 h-5 w-5`} />
    </a>
  );
};

export default SocialIcon;
