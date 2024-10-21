import { useEffect, useState, type ReactElement } from "react";
import NavBar from "./components/NavBar";
import TabMenu from "./components/TabMenu";
import Slider from "./components/Slider"
import { Notification } from "./components/Notification";

import { fetchGames, type Game } from "./mocks/fetchGames";

const App = (): ReactElement => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetchGames().then((data) => setGames(data));
  }, [])

  return (
    <>
      <NavBar />
      <Slider />
      <Notification />
      <TabMenu games={games} />  
    </>
  );
};

export default App;
