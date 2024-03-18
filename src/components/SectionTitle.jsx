export default function SectionTitle({ title, type, white = null }) {
  const isNormalType = type === "normal";
  const titleClass = `section-title--${type}`;

  // Append 'white' to containerClass if white prop is provided
  const containerClass = `${isNormalType ? "margin-bottom-48" : `section-${type} margin-bottom-48`}${white ? " color-white" : ""}`;

  return (
    <div className={containerClass.trim()}>
      <h2 className={titleClass}>{title}</h2>
      {!isNormalType && <i className="icon-lawn-mower"></i>}
    </div>
  );
}
