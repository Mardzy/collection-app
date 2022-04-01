import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { CardItem, FilterList, Flex, PageTitle } from "@components";

import { RootState } from "@store";
import { getDBItems } from "@slices";
import { Card, CollectionCard, Filters, ProductDB } from "@types";
import { useAppDispatch } from "@hooks";
import { getDBItemsByKeyAndValue } from "@selectors";

interface SearchProps {
  search: string;
  event?: Event;
}

interface AddToCollectionProps {
  productDB: ProductDB;
}

const AddToCollection: FC<AddToCollectionProps> = ({ productDB }) => {
  const dispatch = useAppDispatch();

  const filterItems: string[] = [
    "year",
    "productName",
    "setName",
    "manufacturer"
  ];

  useEffect(() => {
    dispatch(getDBItems());
  }, []);

  const { control, handleSubmit } = useForm<SearchProps>();
  const [, setSearchValue] = useState<string>("");
  const [filterProps, setFilterProps] = useState<{
    key: keyof Card;
    value: string | number;
  }>({ key: "" as keyof Card, value: "" });
  const filterResults = getDBItemsByKeyAndValue(filterProps);

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
                    )
                  }}
                  {...field}
                />
              </Paper>
            )}
          />
        </FormControl>
        <FilterList filterItemKeys={filterItems} itemList={productDB.items} />
      </Flex>
      <Grid
        container
        columnSpacing={{ xs: 2, sm: 3, md: 3 }}
        rowSpacing={2}
        mt={0.5}
      >
        {(filterResults as CollectionCard[]).map((card: CollectionCard) => (
          <Grid key={card.id} item xs={6} sm={4} md={4} lg={2} xl={2}>
            <CardItem {...card} />
          </Grid>
        ))}
        {/*  load more button to integrate with fetch inventory*/}
      </Grid>
    </Flex>
  );
};

const mapStateToProps = ({ productDB }: RootState) => ({
  productDB
});

export default connect(mapStateToProps)(AddToCollection);
