import type { PropsWithChildren, ReactElement, SyntheticEvent } from "react";
import { type Game } from "../mocks/fetchGames";
import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import SearchTab from "./tabs/SearchTab"

import Search from "../assets/search-icon.png";
import Start from "../assets/start-icon.png";
import New from "../assets/new-icon.png";
import Slots from "../assets/slots-icon.png";
import Live from "../assets/live-icon.png";
import Jackpot from "../assets/jackpot-icon.png";
import Table from "../assets/table-icon.png";
import Bingo from "../assets/bingo-icon.png";
import Others from "../assets/others-icon.png";

import StartTab from './tabs/Start'

interface TabMenuProps {
  games: Game[]
}

interface TabPanelProps {
  index: number;
  value: number;
}

const TabPanel = ({
  value,
  index,
  children,
}: PropsWithChildren<TabPanelProps>): ReactElement => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const TabMenu = (props: TabMenuProps): ReactElement => {
  const tabs = [
    { label: "SEARCH", icon: <img src={Search} />, content: <SearchTab /> },
    { label: "START", icon: <img src={Start} />, content: <StartTab games={props.games} /> },
    { label: "NEW", icon: <img src={New} />, content: <h1>NEW</h1> },
    { label: "SLOTS", icon: <img src={Slots} />, content: <h1>SLOTS</h1> },
    { label: "LIVE", icon: <img src={Live} />, content: <h1>LIVE</h1> },
    {
      label: "JACKPOT",
      icon: <img src={Jackpot} />,
      content: <h1>JACKPOT</h1>,
    },
    {
      label: "TABLE GAMES",
      icon: <img src={Table} />,
      content: <h1>TABLE GAMES</h1>,
    },
    { label: "BINGO", icon: <img src={Bingo} />, content: <h1>BINGO</h1> },
    { label: "OTHERS", icon: <img src={Others} />, content: <h1>OTHERS</h1> },
  ];
  const [value, setValue] = useState(1);

  const handleChange = (_e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "inherit",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} icon={tab.icon} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.label} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default TabMenu;
