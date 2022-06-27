import '../styles/components/_card.css';

function Card({ text, type }) {
  return (
    <div className={`card card--${type}`}>
      <p className="card__text">{text}</p>
    </div>
  );
}

export default Card;
