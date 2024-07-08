import "./style.css";

function Detail(props) {
  return (
    <div className="container">
      <p>Ingredients</p>
      <ul>
        {props.ingredients.map((item, index) => (
          <li key={"ingredient " + index}>
            {item.qty} {item.name}
          </li>
        ))}
      </ul>
      <p>Directions</p>
      <ol>
        {props.steps.map((item, index) => (
          <li key={"step " + index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default Detail;
