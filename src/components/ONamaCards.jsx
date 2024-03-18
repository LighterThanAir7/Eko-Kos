import CardData from "../data/oNamaCardData.json";
import ONamaCard from "./ONamaCard.jsx";

export default function ONamaCards () {
  return (
    <div className="cards">
      {CardData.map((card, index) => (
        <ONamaCard
          key={index}
          icon={`icon-${card.icon}`}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  )
}