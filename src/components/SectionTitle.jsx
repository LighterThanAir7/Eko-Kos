export default function SectionTitle ({title, type}) {
  return (
    <>
      {type === "fancy" ? (
        <h2 className="section-title">{title}</h2>
      ) : (
        <div className="section-title--">
          <i></i>
        </div>
      )}
    </>
  )
}