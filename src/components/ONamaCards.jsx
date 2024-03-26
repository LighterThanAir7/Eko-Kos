import ONamaCard from "./ONamaCard.jsx";

export default function ONamaCards ({data}) {
  return (
    <div className="cards">
      {data.map((card, index) => (
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