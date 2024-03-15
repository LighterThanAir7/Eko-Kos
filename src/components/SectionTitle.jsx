export default function SectionTitle ({title}) {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <div className="section-title__decoration">
        <i></i>
      </div>
    </div>
  )
}