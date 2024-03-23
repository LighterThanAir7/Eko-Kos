export default function SectionTitle({ title, type, white = null }) {
  return (
    <div className="margin-bottom-80">
      {type === "normal" ? (
        <h2 className={`section-title--${type}`}>{title}</h2>
      ) : (
        <div className={`section-${type}`}>
          <h2 className={`section-title--${type}`}>{title}</h2>
          <i className="icon-lawn-mower"></i>
        </div>
      )}
    </div>
  );
}