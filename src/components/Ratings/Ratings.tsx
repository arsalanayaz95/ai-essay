import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Rating, TextareaAutosize, Typography } from "@mui/material";

function Ratings() {
  const [essayRating, setEssayRating] = useState<number | null>(null);
  const [websiteRating, setWebsiteRating] = useState<number | null>(null);
  const [displayWebsiteRating, setDisplayWebsiteRating] = useState<
    boolean | null
  >(false);
  const MAX_RATING = 5;
  const onReview = () => {
    //This method can handle the action needed to perform when the user clicks to provide a review
    console.log("User Handed Over To Third Party");
  };
  const onFeedback = () => {
    //This method can handle the action needed to perform when the user provides a written feedback
    console.log("Useful Feedback About The Product");
  };
  return (
    <>
      <Grid mt={2} xs={12}>
        <Typography className="rating-label">
          How Helpful Was The Essay ?
        </Typography>
        <Rating
          name="simple-controlled"
          value={essayRating}
          onChange={(_, rating) => {
            setEssayRating(rating);
            setDisplayWebsiteRating(true);
          }}
        />
      </Grid>
      {displayWebsiteRating ? (
        <Grid mt={2} xs={12}>
          <Typography className="rating-label">
            How Would You Rate Our Website?
          </Typography>
          <Rating
            name="simple-controlled"
            value={websiteRating}
            onChange={(_, rating) => {
              setWebsiteRating(rating);
            }}
          />
        </Grid>
      ) : null}
      {essayRating === MAX_RATING && websiteRating === MAX_RATING ? (
        <Grid mt={2} xs={12}>
          <Button variant="contained" onClick={() => onReview()}>
            Leave Us A Review ❤️
          </Button>
        </Grid>
      ) : websiteRating ? (
        <Grid mt={2} xs={12}>
          <Typography className="rating-label">What Can We Improve?</Typography>
          <Grid mb={2} xs={12}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Improvements That Can Be Done"
              style={{ width: 250 }}
            />
          </Grid>
          <Button variant="outlined" onClick={() => onFeedback()}>
            Submit
          </Button>
        </Grid>
      ) : null}
    </>
  );
}
export default Ratings;
