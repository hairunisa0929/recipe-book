import { useState } from "react";
import Detail from "../detail/Detail";
import "./style.css";

function Card(props) {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div>
      <div className="card">
        <img src={props.recipe.image} />
        <div className="title-container">
          <span className="title">{props.recipe.name}</span>
          <button onClick={() => setOpenDetail(!openDetail)}>
            {openDetail ? "Hide" : "View"} Recipe
          </button>
        </div>
      </div>

      {openDetail && (
        <Detail
          ingredients={props.recipe.ingredients}
          steps={props.recipe.steps}
        />
      )}
    </div>
  );
}

export default Card;
