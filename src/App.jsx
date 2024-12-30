import { ChakraBaseProvider } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./components/RecipePage";
import { data } from "./utils/data";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelectRecipe = (recipeLabel) => {
    const selected = data.hits.find((hit) => hit.recipe.label === recipeLabel);
    setSelectedRecipe(selected ? selected.recipe : null);
  };

  const handleBackToList = () => {
    setSelectedRecipe(null); // Zet het geselecteerde recept op null om terug te gaan naar de lijst
  };

  return (
    <ChakraBaseProvider>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBack={handleBackToList} />
      ) : (
        <RecipeListPage onSelectRecipe={handleSelectRecipe} />
      )}
    </ChakraBaseProvider>
  );
};
