import "./style.css"

function Card({name, image}) {
  return (
    <div className="card">
      <img src={image} />
      <div className="title-container">
        <p className="title">{name}</p>
        <button>View Recipe</button>
      </div>
    </div>
  );
}

export default Card;
