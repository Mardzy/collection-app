import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { CardItem, Flex, PageTitle } from "@components";
import { connect } from "react-redux";
import { RootState } from "@store";
import { useAppDispatch } from "@hooks";
import { getDBItems, setUniqueCardPropList } from "@slices";
import { FilterItem } from "../../components/complex/FilterList/components";
import {
  getDBItemsByKeyAndValue,
  getDBItemsPropListSelector
} from "@selectors";
import { Card, CollectionCard } from "@types";
// import { getDBItemsByKeyAndValue } from "@selectors";

interface SearchProps {
  search: string;
  event?: Event;
}

const AddToCollection = () => {
  const dispatch = useAppDispatch();
  const yearsList = getDBItemsPropListSelector("years") as string[];

  const handleFilterItemClick = (prop: keyof Card) => {
    console.log("click", prop);
    dispatch(setUniqueCardPropList(prop));
  };

  const { control, handleSubmit } = useForm<SearchProps>();

  const [, setSearchValue] = useState<string>("");
  const [filterProps, setFilterProps] = useState<{
    key: keyof Card;
    value: string;
  }>({ key: "year", value: "" });
  const filterResults = getDBItemsByKeyAndValue(filterProps);
  console.log(filterResults);
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
        <Box mt={5} width={1}>
          <Typography width={1}>Filters</Typography>
          <FilterItem
            details={
              <>
                {yearsList &&
                  yearsList.map((year: string, i: number) => {
                    return (
                      <Button
                        variant="text"
                        key={i}
                        onClick={() => {
                          setFilterProps({ key: "year", value: year });
                        }}
                      >
                        {year}
                      </Button>
                    );
                  })}
              </>
            }
            handleClick={() => handleFilterItemClick("year")}
            title="Year"
          />
          <FilterItem details="product details" title="Products" />
          <FilterItem details="insert details" title="Insert" />
          <FilterItem details="team details" title="Team" />
        </Box>
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
