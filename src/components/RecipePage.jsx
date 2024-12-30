import React from "react";
import {
  Center,
  Heading,
  Text,
  List,
  ListItem,
  Box,
  Image,
  Grid,
  GridItem,
  VStack,
  Button,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, onBack }) => {
  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    dietLabels,
    healthLabels,
    cautions,
    ingredients,
    yield: servings,
    totalNutrients,
  } = recipe;

  return (
    <Center h="auto" flexDir="column" p={4} overflowY="auto" bg="purple.100">
      <VStack spacing={4} align="stretch" width="full">
        {/* Button om terug te gaan */}
        <Button
          onClick={onBack}
          mb={4}
          border="1px solid "
          width="auto"
          size="lg"
          mx="auto"
          borderRadius="5px"
          p="5px"
          bg="purple.200"
        >
          Back to Recipe List
        </Button>
        {/* Gerecht naam */}
        <Heading as="h1" fontSize="4xl" textAlign="center" mb={4}>
          {label}
        </Heading>

        {/* Grid voor afbeelding, ingrediënten, voedingsstoffen en gezondheidslabels */}
        <Grid
          templateColumns={{ base: "1fr", md: "300px 1fr" }}
          gap={6}
          width="full"
        >
          {/* Afbeelding onder de titel */}
          <GridItem>
            <Image
              src={image}
              alt={label}
              boxSize={{ base: "300px", md: "300px" }}
              objectFit="cover"
              borderRadius="md"
              mb={6}
              ml={4}
            />
          </GridItem>

          {/* Ingrediënten rechts van de afbeelding */}
          <GridItem>
            <Text fontWeight="bold" mb={2}>
              Ingredients:
            </Text>
            <List>
              {ingredients.map((ingredient, index) => (
                <ListItem key={index}>{ingredient.text}</ListItem>
              ))}
            </List>
          </GridItem>
        </Grid>

        {/* Grid voor Total Nutrients en overige info */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }} // Onder de afbeelding, 2 kolommen op grotere schermen
          gap={6}
          width="full"
        >
          {/* Voedingsstoffen */}
          <GridItem>
            <Text fontWeight="bold" mb={2}>
              Total Nutrients:
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <GridItem>
                <strong>Energy (kcal):</strong>{" "}
                {totalNutrients.ENERC_KCAL.quantity}
              </GridItem>
              <GridItem>
                <strong>Protein:</strong> {totalNutrients.PROCNT.quantity} g
              </GridItem>
              <GridItem>
                <strong>Fat:</strong> {totalNutrients.FAT.quantity} g
              </GridItem>
              <GridItem>
                <strong>Carbs:</strong> {totalNutrients.CHOCDF.quantity} g
              </GridItem>
              <GridItem>
                <strong>Cholesterol:</strong> {totalNutrients.CHOLE.quantity} mg
              </GridItem>
              <GridItem>
                <strong>Sodium:</strong> {totalNutrients.NA.quantity} mg
              </GridItem>
            </Grid>
          </GridItem>

          {/* Overige informatie */}
          <GridItem>
            <Text>
              <strong>Meal Type:</strong> {mealType.join(", ")}
            </Text>
            <Text>
              <strong>Dish Type:</strong> {dishType.join(", ")}
            </Text>
            <Text>
              <strong>Total Cooking Time:</strong> {totalTime} minutes
            </Text>
            <Text>
              <strong>Diet Labels:</strong> {dietLabels.join(", ") || "None"}
            </Text>
            <Text>
              <strong>Cautions:</strong> {cautions.join(", ") || "None"}
            </Text>
          </GridItem>
        </Grid>

        {/* Gezondheidslabels onder de overige info */}
        <Grid>
          <Text fontWeight="bold" mb={2}>
            Health Labels:
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {healthLabels.map((label, index) => (
              <GridItem key={index}>
                <Text>{label}</Text>
              </GridItem>
            ))}
          </Grid>
        </Grid>
      </VStack>
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
    </Center>
  );
};
