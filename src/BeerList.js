import React, { useState, useEffect } from "react";
import { Grid, Typography, Container, TextField } from "@material-ui/core";
import BeerCard from "./BeerCard";
import axios from "axios";

function BeerList() {
  const [beerList, setBeerList] = useState([]);
  const [filteredBeerList, setFilteredBeerList] = useState([]);

  const GetBeerList = React.useCallback(async () => {
    const response = await axios.get("https://api.punkapi.com/v2/beers");
    setBeerList(response.data);
    setFilteredBeerList(response.data);
  }, []);

  const SearchBeerHandler = (e) => {
    const searchResults = beerList.filter((beer) => {
      const beerName = beer.name.toLowerCase();
      const searchedName = e.target.value.toLowerCase();
      return beerName.startsWith(searchedName);
    });
    setFilteredBeerList(searchResults);
  };

  useEffect(() => {
    // GET request using axios with async/await
    GetBeerList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      style={{
        maxWidth: "90%",
        marginTop: "100px",
      }}
    >
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Beer Factory
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} xl={12}>
          <TextField
            placeholder={"Search Beer"}
            onChange={SearchBeerHandler}
            fullwidth="true"
            variant="filled"
            style={{ width: "100%" }}
          />
        </Grid>

        <Grid item lg={12} md={12} xl={12}>
          {filteredBeerList?.map((data, i) => (
            <BeerCard data={data} key={i} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default BeerList;
