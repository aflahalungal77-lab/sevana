import Link from "next/link";
import { ArrowLeft, Wrench, Zap, Paintbrush, HardHat, ChevronRight } from "lucide-react";
import { workerCategories } from "@/lib/data";

const descriptions: Record<string, string> = {
  "plumbing-wiring": "Plumbers and electricians",
  repair: "Home and appliance repair",
  construction: "Construction and building work",
  painting: "Interior and exterior painting"
};
const icons: Record<string, React.ComponentType<{size?: number}>> = {
  "plumbing-wiring": Zap, repair: Wrench, construction: HardHat, painting: Paintbrush
};

export default function WorkersPage() {
  return <div className="page">
    <header className="back-header"><Link href="/" className="back-button" aria-label="Back"><ArrowLeft size={20}/></Link><div><h1>Local Workers</h1><p>Find skilled help around you</p></div></header>
    <div className="intro-panel"><div className="intro-icon"><Wrench size={22}/></div><div><h2>What do you need help with?</h2><p>Select a service to view worker contacts.</p></div></div>
    <div className="category-list">
      {workerCategories.map((category) => {
        const Icon = icons[category.slug] || Wrench;
        return <Link key={category.id} href={`/workers/${category.slug}`} className="category-row">
          <span className={`category-icon icon-${category.slug}`}><Icon size={20}/></span><span className="category-text"><strong>{category.name}</strong><small>{descriptions[category.slug]}</small></span><ChevronRight size={18} className="row-chevron"/>
        </Link>;
      })}
    </div>
  </div>;
}
