import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to handle selecting a recipe
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} />
      ) : (
        <RecipeListPage onSelectRecipe={handleSelectRecipe} />
      )}
    </div>
  );
};
