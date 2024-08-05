import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./../src/App";
import Card from "./../src/components/card/Card";
import { recipes } from "./../src/data/recipes";

it("Renders 3 cards", () => {
  render(<App />);

  const cards = screen.getAllByRole("img");
  expect(cards).toHaveLength(recipes.length);
});

it("Card component receives and renders the correct image", () => {
  render(<Card recipe={recipes[0]} />);

  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", recipes[0].image);
});

it("Card component receives and renders the correct name", () => {
  render(<Card recipe={recipes[0]} />);
  expect(screen.getByText(recipes[0].name)).toBeInTheDocument();
});

it("Card component receives and renders the ingredients", () => {
  render(<Card recipe={recipes[0]} />);

  recipes[0].ingredients.forEach(ingredient => {
    expect(screen.getByText(`${ingredient.qty} ${ingredient.name}`)).toBeInTheDocument();
  });
});

it("Card component receives and renders the steps", () => {
  render(<Card recipe={recipes[0]} />);

  recipes[0].steps.forEach(step => {
    expect(screen.getByText(step)).toBeInTheDocument();
  });
});

it("Check if the View Recipe button is rendered",  () => {
    render(<Card recipe={recipes[0]} />);
    const buttonElement = screen.getByText('View Recipe');
    expect(buttonElement).toBeInTheDocument();
  })
  
  it("Check Detail component is not rendered initially",  () => {
    render(<Card recipe={recipes[0]} />);
    expect(screen.queryByText('Ingredients')).not.toBeInTheDocument();
  })
  
  it("toggles the Detail component when button is clicked", () => {
    render(<Card recipe={recipes[0]} />);
  
    const buttonView = screen.getByText('View Recipe');
  
    // Click to show the Detail component
    fireEvent.click(buttonView);
    expect(screen.getByText('Hide Recipe')).toBeInTheDocument();
    expect(screen.getByText('Ingredients')).toBeInTheDocument();
  
    const buttonHide = screen.getByText('Hide Recipe');
  
    // Click to hide the Detail component
    fireEvent.click(buttonHide);
    expect(screen.getByText('View Recipe')).toBeInTheDocument();
    expect(screen.queryByText('Ingredients')).not.toBeInTheDocument();
  });