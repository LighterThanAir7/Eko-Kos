export default function ONamaCard ({icon, title, description}) {
  return (
    <div className="card">
      <i className={`card__icon ${icon}`}></i>
      <h4 className="card__title">{title}</h4>
      <p className="card__text">{description}</p>
    </div>
  )
}