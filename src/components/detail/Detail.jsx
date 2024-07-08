import "./style.css";

function Detail({ ingredients, steps }) {
  return (
    <div className="container">
      <p>Ingredients</p>
      <ul>
        {ingredients.map((item, index) => (
          <li key={`ingredient-${index}`}>
            {item.qty} {item.name}
          </li>
        ))}
      </ul>
      <p>Directions</p>
      <ol>
        {steps.map((item, index) => (
          <li key={`step-${index}`}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default Detail;
