import React from "react";
import { Input, Checkbox, Stack, Box, Center } from "@chakra-ui/react";

export const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
}) => {
  return (
    <Box mb={4}>
      <Center>
        <Input
          border="1px solid"
          borderRadius="5px"
          borderColor="purple.300"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          mb={4}
          width="auto"
          textAlign="center"
          focusBorderColor="purple.500"
        />
      </Center>

      <Stack direction="row" spacing={4}>
        {Object.keys(filters).map((label) => (
          <Checkbox
            key={label}
            isChecked={filters[label]}
            onChange={() => onFilterChange(label)}
          >
            {label}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};
