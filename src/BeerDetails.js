import { Typography } from "@material-ui/core";

function BeerDetails({ beerDetails }) {
  return (
    <>
      <Typography>• boil volume: {beerDetails.boil_volume.value}</Typography>
      <Typography>• brewers tips: {beerDetails.brewers_tips}</Typography>
      <Typography>• contributed by: {beerDetails.contributed_by}</Typography>
      <Typography>• description: {beerDetails.description}</Typography>
      <Typography>• first brewed: {beerDetails.first_brewed}</Typography>
      <Typography>• food_pairing:</Typography>
      {beerDetails.food_pairing.map((food, i) => (
        <Typography key={i}>{food}</Typography>
      ))}
      <Typography>• tagline: {beerDetails.tagline} </Typography>
      <Typography>• volume: {beerDetails.volume.value} </Typography>
    </>
  );
}

export default BeerDetails;
