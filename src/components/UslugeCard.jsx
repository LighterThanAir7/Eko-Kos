export default function UslugeCard ({ icon, title, description }) {
  return (
    <div className="card-2">
      <i className={`card-2__icon icon-${icon}`}></i>
      <div className="card-2__content">
        <h4 className="card-2__title">{title}</h4>
        <p className="card-2__text">{description}</p>
      </div>
    </div>
  )
}