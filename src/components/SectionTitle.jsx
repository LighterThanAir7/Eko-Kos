export default function SectionTitle({ title, type, white = null }) {
  let className = null;
  if (white) {
    className = `section-${type} color-white`;
  }

  return (
    <>
      {type === "normal" ? (
        <h2 className={`section-title section-title--${type}`}>{title}</h2>
      ) : (
        <div className={`section-${type} ${className}`}>
          <h2 className={`section-title--${type}`}>{title}</h2>
          <div className="section-title__decoration">
            <div className="section-title__line section-title__line--left"></div>
            <i className="icon-lawn-mower"></i>
            <div className="section-title__line section-title__line--right"></div>
          </div>
        </div>
      )}
    </>
  );
}