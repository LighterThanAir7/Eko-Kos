import UslugeCardData from "../data/uslugeCardData.json";
import UslugeCard from "./UslugeCard.jsx";

export default function UslugeCards () {
  return (
    <div className="cards">
      {UslugeCardData.map((card, index) => (
        <UslugeCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  )
}