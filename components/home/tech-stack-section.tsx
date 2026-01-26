import CornerBorder from "@/components/ui/corner-border";
import { BsCpu } from "react-icons/bs";
import { TECH_STACK } from "@/data";

const TechStackSection = () => (
  <section>
    <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
      <BsCpu className="text-primary" />
      Tech Stack
    </h2>

    <CornerBorder>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.values(TECH_STACK).map((category) => (
          <StackColumn
            key={category.title}
            title={category.title}
            items={category.items}
          />
        ))}
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
