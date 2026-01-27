import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

const IconMap: Record<string, React.ReactNode> = {
  Github: <BsGithub size={18} />,
  Twitter: <BsTwitterX size={18} />,
  Linkedin: <FaLinkedinIn size={18} />,
  Peerlist: <SiPeerlist size={18} />,
};

import { SOCIAL_LINKS } from "@/data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-dashed border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
      <div className="font-mono">
        © {new Date().getFullYear()} Built with React & Tailwind
      </div>
      <div className="flex gap-6">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label={social.name}
          >
            {IconMap[social.icon]}
          </a>
        ))}
      </div>
    </footer>
  );
}
