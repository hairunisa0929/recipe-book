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