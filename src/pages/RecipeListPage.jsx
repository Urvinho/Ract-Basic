import { useState } from "react";
import {
  Center,
  Heading,
  Box,
  Flex,
  Image,
  Text,
  Input,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import RecipePage from "./RecipePage"; // Import the RecipePage component

export const RecipeListPage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleGoBack = () => {
    setSelectedRecipe(null);
  };

  // Filter recipes based on search input
  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.ingredients.some((ingredient) =>
      ingredient.text.toLowerCase().includes(searchInput.toLowerCase())
    )
  );

  return (
    <Center minH="100vh" bg="green.600" px={4}>
      <Box w="100%" maxW="1000px">
        <Heading mb="4" textAlign="center">
          Your Recipe App
        </Heading>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} onGoBack={handleGoBack} />
        ) : (
          <>
            <Heading mb="2" textAlign="center">
              All Recipes
            </Heading>
            <Center>
              <Input
                placeholder="Search ingredients"
                value={searchInput}
                onChange={handleSearchInputChange}
                mb="4"
                variant="filled"
                bg="white"
                color="gray.800"
                _placeholder={{ color: "gray.400" }}
                borderRadius="md"
                boxShadow="md"
                px="4"
                py="2"
                width="100%"
                maxWidth="400px"
              />
            </Center>
            <Flex flexWrap="wrap" justifyContent="center">
              {filteredRecipes.map((hit) => (
                <Box
                  key={hit.recipe.label}
                  onClick={() => handleSelectRecipe(hit.recipe)}
                  cursor="pointer"
                  mb="2"
                  p="2"
                  bg="blue.500"
                  borderRadius="md"
                  _hover={{
                    bg: "blue.200",
                  }}
                  width={{ base: "100%", sm: "45%", md: "30%", lg: "20%" }}
                  maxWidth="500px"
                  mr={{ base: 0, sm: "2", md: "4" }}
                >
                  <Image
                    src={hit.recipe.image}
                    alt={hit.recipe.label}
                    mb="2"
                    boxSize="200px"
                    objectFit="cover"
                    mx="auto" // Center the image horizontally
                  />
                  <Text fontSize="md" fontWeight="bold" textAlign="center">
                    {hit.recipe.label}
                  </Text>
                  {hit.recipe.dietLabels && (
                    <Text fontSize="sm" textAlign="center" color="gray.900">
                      Diet: {hit.recipe.dietLabels.join(", ")}
                    </Text>
                  )}
                  {hit.recipe.cautions && (
                    <Text fontSize="sm" textAlign="center" color="red.600">
                      Cautions: {hit.recipe.cautions.join(", ")}
                    </Text>
                  )}
                  {hit.recipe.mealType && (
                    <Text fontSize="sm" textAlign="center" color="gray.600">
                      {hit.recipe.mealType}
                    </Text>
                  )}
                  {hit.recipe.dishType && (
                    <Text fontSize="sm" textAlign="center" color="gray.600">
                      {hit.recipe.dishType}
                    </Text>
                  )}
                  <Flex justifyContent="center" mt="2">
                    {hit.recipe.healthLabels &&
                      hit.recipe.healthLabels.includes("Vegetarian") && (
                        <Text
                          fontSize="xs"
                          bg="green.200"
                          px="1"
                          py="0.5"
                          borderRadius="md"
                          mr="1"
                        >
                          Vegetarian
                        </Text>
                      )}
                    {hit.recipe.healthLabels &&
                      hit.recipe.healthLabels.includes("Vegan") && (
                        <Text
                          fontSize="xs"
                          bg="green.200"
                          px="1"
                          py="0.5"
                          borderRadius="md"
                          mr="1"
                        >
                          Vegan
                        </Text>
                      )}
                  </Flex>
                </Box>
              ))}
            </Flex>
          </>
        )}
      </Box>
    </Center>
  );
};
