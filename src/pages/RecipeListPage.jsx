import React, { useState } from "react";
import {
  Center,
  Heading,
  SimpleGrid,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { SearchAndFilter } from "../components/SearchAndFilter";

export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    Vegan: false,
    Vegetarian: false,
    "Gluten-Free": false,
    "Sesame-Free": false,
  });

  const handleFilterChange = (label) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [label]: !prevFilters[label],
    }));
  };

  const filteredRecipes = data.hits.filter((hit) => {
    const recipe = hit.recipe;

    const matchesName = recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesHealthLabels = Object.keys(filters).every(
      (label) => !filters[label] || recipe.healthLabels.includes(label)
    );

    return matchesName && matchesHealthLabels;
  });

  const handleRecipeClick = (recipeLabel) => {
    onSelectRecipe(recipeLabel);
  };

  return (
    <Box bg="purple.100" minH="100vh" w="100%" px={4} py={6}>
      <Center flexDir="column" mb={6} minH="20vh">
        <Heading
          as="h1"
          color="purple.900"
          fontFamily="Arial, sans-serif"
          fontSize="7xl"
          textAlign="center"
          mb={4}
        >
          Recipe App
        </Heading>
        <Box w="100%" display="flex" justifyContent="center" maxW="800px">
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </Box>
      </Center>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {filteredRecipes.map((hit) => {
          const recipe = hit.recipe;
          return (
            <Box
              key={recipe.label}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              cursor="pointer"
              onClick={() => handleRecipeClick(recipe.label)}
              bg="white"
              width="100%"
              maxW="300px"
              mx="auto"
            >
              <Heading
                fontWeight="bold"
                as="h2"
                size="md"
                mb={4}
                color="purple.900"
                textAlign="center"
              >
                {recipe.label}
              </Heading>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="200px"
                mb={4}
              >
                <Image
                  src={recipe.image}
                  alt={recipe.label}
                  borderRadius="md"
                  objectFit="contain"
                  maxH="100%"
                  maxW="100%"
                />
              </Box>
              <Text color="purple.700">
                Diet Labels: {recipe.dietLabels.join(", ") || "None"}
              </Text>
              <Text color="purple.700">
                Cautions: {recipe.cautions.join(", ") || "None"}
              </Text>
              <Text color="purple.700">
                Meal Type: {recipe.mealType.join(", ")}
              </Text>
              <Text color="purple.700">
                Dish Type: {recipe.dishType.join(", ")}
              </Text>
              <Text color="purple.700">
                Health Labels:{" "}
                {recipe.healthLabels.includes("Vegan") && "Vegan "}
                {recipe.healthLabels.includes("Vegetarian") && "Vegetarian"}
              </Text>
            </Box>
          );
        })}
      </SimpleGrid>
      <Box
        as="footer"
        bg="purple.200"
        color="white"
        py={4}
        position="relative"
        bottom={0}
        width="100%"
        borderRadius="5px"
      >
        <Center>
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Recipe App.
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
