export default function Step ({number, title, description, icon}) {
  return (
    <div className="step">
      <span className="step__number">{number}</span>
      <div className="step__content">
        <h4 className="step__title">{title}</h4>
        <p className="step__desc">{description}</p>
      </div>
      <i className={icon}></i>
    </div>
  )
}