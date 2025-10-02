export function Card({ id, title, img, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={img} height={160} width={160} />
      <p>{title}</p>
    </div>
  );
}
