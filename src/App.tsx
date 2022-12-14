import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import Essay from "./components/Essay/Essay";
import Ratings from "./components/Ratings/Ratings";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Essay />
        <Ratings />
      </Grid>
    </div>
  );
}

export default App;
