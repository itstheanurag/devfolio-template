// components/home/tech-stack-section.tsx
import CornerBorder from "@/components/ui/corner-border";
import { BsCpu } from "react-icons/bs";

const TechStackSection = () => (
  <section>
    <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
      <BsCpu className="text-primary" />
      Tech Stack
    </h2>

    <CornerBorder>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StackColumn
          title="Frontend"
          items={[
            "React / Next.js",
            "TypeScript",
            "Tailwind CSS",
            "WebGL / Three.js",
          ]}
        />
        <StackColumn
          title="Backend"
          items={["Node.js", "Go", "PostgreSQL", "Redis"]}
        />
        <StackColumn
          title="Tools"
          items={["Docker", "AWS / GCP", "Git", "Figma"]}
        />
        <StackColumn
          title="AI / ML"
          items={["Google Gemini API", "TensorFlow.js", "LangChain"]}
        />
      </div>
    </CornerBorder>
  </section>
);

const StackColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-4">
    <h3 className="font-mono text-sm text-zinc-500 uppercase tracking-wider">
      {title}
    </h3>
    <ul className="space-y-2 text-zinc-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

export default TechStackSection;
