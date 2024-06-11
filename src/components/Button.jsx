export default function Button({ onClick, icon }) {
  return (
    <button onClick={onClick}>
      <img className="icon" src={icon.src} alt={icon.alt} />
    </button>
  );
}
