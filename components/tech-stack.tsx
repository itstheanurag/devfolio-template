import CornerBorder from "@/components/ui/corner-border";
import { BsCpuFill } from "react-icons/bs";

const TechStack = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
        <BsCpuFill className="text-primary" />
        Tech Stack
      </h2>
      <CornerBorder>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-wider">
              Frontend
            </h3>
            <ul className="space-y-2 text-zinc-300">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>WebGL / Three.js</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-wider">
              Backend
            </h3>
            <ul className="space-y-2 text-zinc-300">
              <li>Node.js</li>
              <li>Go</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-wider">
              Tools
            </h3>
            <ul className="space-y-2 text-zinc-300">
              <li>Docker</li>
              <li>AWS / GCP</li>
              <li>Git</li>
              <li>Figma</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-wider">
              AI / ML
            </h3>
            <ul className="space-y-2 text-zinc-300">
              <li>Google Gemini API</li>
              <li>TensorFlow.js</li>
              <li>LangChain</li>
            </ul>
          </div>
        </div>
      </CornerBorder>
    </section>
  );
};

export default TechStack;
