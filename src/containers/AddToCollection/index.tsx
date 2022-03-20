import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { FilterList, Flex, PageTitle } from "@components";

interface SearchProps {
  search: string;
  event?: Event;
}

const AddToCollection = () => {
  const { control, handleSubmit } = useForm<SearchProps>();

  // const [, setExpanded] = useState<string | false>(false);
  const [, setSearchValue] = useState<string>("");

  // const handleChange =
  //   (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
  //     setExpanded(isExpanded ? panel : false);
  //   };
  //
  // /**
  //  * @todo add autocomplete
  //  * @param event
  //  */
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(event.target.value);
  //   // autocomplete
  // };

  const onSearchSubmit: SubmitHandler<SearchProps> = ({ search }, event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setSearchValue(search);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start"
      height="2000px"
      width="100%"
      flexDirection="column"
    >
      <PageTitle color="black">Add to Collection</PageTitle>
      <Flex
        my={5}
        flexDirection="column"
        alignItems="center"
        width={[1, 4 / 5, 3 / 5]}
      >
        <FormControl fullWidth onSubmit={handleSubmit(onSearchSubmit)}>
          <Controller
            control={control}
            name="search"
            render={({ field }) => (
              <Paper>
                <TextField
                  fullWidth
                  id="input-with-icon-textfield"
                  label="Search for card"
                  margin="none"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="search"
                          color="default"
                          type="submit"
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              </Paper>
            )}
          />
        </FormControl>
        <FilterList />
      </Flex>
      <Box>No results....</Box>
    </Flex>
  );
};

export default AddToCollection;
