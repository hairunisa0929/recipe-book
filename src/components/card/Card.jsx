import { useState } from "react";
import Detail from "../detail/Detail";
import "./style.css";

function Card({ recipe }) {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div>
      <div className="card">
        <img src={recipe.image} />
        <div className="title-container">
          <p className="title">{recipe.name}</p>
          <button onClick={() => setOpenDetail(!openDetail)}>
            {openDetail ? "Hide" : "View"} Recipe
          </button>
        </div>
      </div>

      {openDetail && (
        <Detail ingredients={recipe.ingredients} steps={recipe.steps} />
      )}
    </div>
  );
}

export default Card;
