import Link from "next/link";
import SocialIcon from "./social-icons";
export default function Footer() {
  return (
    <footer className="my-5">
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:shashanknathe@gmail.com`}
            size={6}
          />
          <SocialIcon
            kind="github"
            href="https://github.com/ShashankNathe/"
            size={6}
          />
          <SocialIcon
            kind="linkedin"
            href="https://www.linkedin.com/in/shashank-nathe-6730b2205/"
            size={6}
          />
        </div>

        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Shashank Nathe</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">Portfolio</Link>
        </div>
      </div>
    </footer>
  );
}
