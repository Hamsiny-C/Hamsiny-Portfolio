export default function Tags({ items }) {
  return <div className="tags">{items.map((x) => <span key={x}>{x}</span>)}</div>;
}
