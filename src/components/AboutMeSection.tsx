import { useState } from "react";
import purpleDragon from "@/assets/purple-dragon.png";
import purpleDragonBig from "@/assets/purple-dragon-big.png";

const skillsText = [
  "Logical thinking",
  "Analytical problem solving",
  "Experience with HTML, CSS, JS, and C# programming",
  "Working with APIs and integrations",
];

const expText = [
  "Work on school and personal programming projects focused on web development and backend development",
  "Internship or self-study through online courses and tutorials",
];

const eduText = [
  "Completed secondary technical school (electrical engineering) in Serbia",
  "Completed a 2-week Erasmus+ program focused on 3D modeling and 3D programming",
  "Continuous learning through online courses and self-study",
];

type CardType = "skills" | "experience" | "education";

const cards: { type: CardType; title: string; items: string[] }[] = [
  { type: "skills", title: "Skills", items: skillsText },
  { type: "experience", title: "Experience", items: expText },
  { type: "education", title: "Education", items: eduText },
];

const AboutMeSection = () => {
  const [expandedCard, setExpandedCard] = useState<CardType | null>(null);

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
        About me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-12 items-center xl:items-start">
        {/* Profile image */}
        <div className="flex-shrink-0">
          <img
            src={purpleDragon}
            alt="Profile avatar"
            loading="lazy"
            className="w-48 h-48 xl:w-72 xl:h-[28rem] rounded-full xl:rounded-lg border-[3px] border-primary object-cover"
          />
        </div>

        {/* Cards */}
        <div className="flex flex-col xl:flex-row xl:items-start gap-6 w-full xl:flex-1">
          {cards.map((card) => {
            const isActive = expandedCard === card.type;
            return (
              <div
                key={card.type}
                onClick={() =>
                  setExpandedCard(isActive ? null : card.type)
                }
                className={`border-[3px] border-primary rounded-lg p-6 cursor-pointer transition-colors duration-300 hover:border-primary-dark hover:bg-muted xl:w-1/3 ${
                  isActive ? "bg-muted" : ""
                }`}
              >
                <h3 className="text-2xl font-bold text-center text-primary mb-2">
                  {card.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isActive
                      ? "max-h-96 opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
