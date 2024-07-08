import Card from "./components/card/Card";
import { recipes } from "./data/recipes";
import "./app.css";

function App() {
  return (
    <div>
      <h1>Recipe Book</h1>

      <div className="main">
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
