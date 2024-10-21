import type { ReactElement } from "react";
import NavBar from "./components/NavBar";
import TabMenu from "./components/TabMenu";
import Slider from "./components/Slider"
import { Notification } from "./components/Notification";

const App = (): ReactElement => {
  return (
    <>
      <NavBar />
      <Slider />
      <Notification />
      <TabMenu />  
    </>
  );
};

export default App;
