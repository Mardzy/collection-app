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

import {
  CardItem,
  FilterItemProps,
  FilterList,
  Flex,
  PageTitle
} from "@components";

import { RootState } from "@store";
import { getDBItems, setUniqueCardPropList } from "@slices";
import { Card, CollectionCard, ProductDB } from "@types";
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
  const { years, manufacturers, productNames, setNames, teamNames } = productDB;
  const dispatch = useAppDispatch();
  const filterItems: FilterItemProps[] = [
    {
      key: "year",
      filterItemsList: years
    },
    {
      key: "productName",
      filterItemsList: productNames
    },
    {
      key: "teamName",
      filterItemsList: teamNames
    },
    {
      key: "setName",
      filterItemsList: setNames
    },
    {
      key: "manufacturer",
      filterItemsList: manufacturers
    }
  ];

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const { control, handleSubmit } = useForm<SearchProps>();
  const [, setSearchValue] = useState<string>("");
  const [filterProps, setFilterProps] = useState<{
    key: keyof Card;
    value: string | number;
  }>({ key: "" as keyof Card, value: "" });
  const filterResults = getDBItemsByKeyAndValue(filterProps);

  const handleFilterItemClick = (key: keyof Card) => {
    console.log("key", key);
    dispatch(setUniqueCardPropList(key as keyof Card));
  };

  // const [, setExpanded] = useState<string | false>(false);

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

  useEffect(() => {
    dispatch(getDBItems());
  }, []);

  // console.log("activeFilters: ", activeFilters);

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
        <FilterList
          filterItems={filterItems}
          handleFilterItemClick={handleFilterItemClick}
        />
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
