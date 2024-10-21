import type { ReactElement } from "react";
import NavBar from "./components/NavBar";
import TabMenu from "./components/TabMenu";

const App = (): ReactElement => {
  return (
    <>
      <NavBar />
      <TabMenu />
    </>
  );
};

export default App;
