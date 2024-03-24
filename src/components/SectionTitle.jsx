export default function SectionTitle({ title, type, white = null }) {
  return (
    <>
      {type === "normal" ? (
        <h2 className={`section-title section-title--${type}`}>{title}</h2>
      ) : (
        <div className={`section-${type}`}>
          <h2 className={`section-title--${type}`}>{title}</h2>
          <i className="icon-lawn-mower"></i>
        </div>
      )}
    </>
  );
}