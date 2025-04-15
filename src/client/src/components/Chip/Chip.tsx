import "./chip.css";
function Chip(props: { text: string; className?: string }) {
  return <p className={`chip ${props.className || ""}`}>{props.text}</p>;
}

export { Chip };
