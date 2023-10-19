import React from "react";
import data from "../Data/Data";

import Crossword, {
  Grid,
  Cell,
  HiddenInput,
  Controls,
  ConfirmButton,
  AnagramHelper,
  Ring,
  CluePreview,
  Clues,
  Clue,
} from "react-crossword";

function Crosswordcard() {
  const [crosswordData, setCrosswordData] = React.useState(
    data.crossworddata[0]
  );

  React.useEffect(() => {
    if (crosswordData.separatorLocations === undefined) {
      setCrosswordData({
        ...crosswordData,
        separatorLocations: {},
      });
    }
  }, [crosswordData]);

  return (
    <div className="App md:flex md:flex-1">
      <Crossword data={crosswordData}>
        <Grid className="h-[200px] md:h-[100vh]">
          <Cell />
        </Grid>
        <HiddenInput />
        <Controls>
          <ConfirmButton />
        </Controls>
        <AnagramHelper>
          <Ring />
          <CluePreview />
        </AnagramHelper>
        <Clues>
          <Clue />
        </Clues>
      </Crossword>
    </div>
  );
}

export default Crosswordcard;
