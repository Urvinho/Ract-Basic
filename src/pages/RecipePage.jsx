import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";

const RecipePage = ({ recipe, onGoBack }) => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4} textAlign="center">
        {recipe.label}
      </Heading>
      {recipe.image && (
        <Image src={recipe.image} alt={recipe.label} mb={4} mx="auto" />
      )}
      <Text mb={2}>Meal Type: {recipe.mealType}</Text>
      <Text mb={2}>Dish Type: {recipe.dishType}</Text>
      <Text mb={2}>Total Cooking Time: {recipe.totalTime}</Text>
      {recipe.dietLabels && (
        <Text mb={2}>Diet: {recipe.dietLabels.join(", ")}</Text>
      )}
      {recipe.healthLabels && (
        <Text mb={2}>Health Labels: {recipe.healthLabels.join(", ")}</Text>
      )}
      {recipe.cautions && (
        <Text mb={2}>Cautions: {recipe.cautions.join(", ")}</Text>
      )}
      <Heading as="h2" mb={2} textAlign="center">
        Ingredients:
      </Heading>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <Text mb={2} textAlign="center">
        Servings: {recipe.yield}
      </Text>
      <Heading as="h2" mb={2} textAlign="center">
        Total Nutrients:
      </Heading>
      <ul>
        {Object.entries(recipe.totalNutrients).map(([key, nutrient]) => (
          <li key={key}>
            {nutrient.label}: {nutrient.quantity.toFixed(2)} {nutrient.unit}
          </li>
        ))}
      </ul>
      <Box textAlign="center">
        <Button onClick={onGoBack} mt={4}>
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default RecipePage;
