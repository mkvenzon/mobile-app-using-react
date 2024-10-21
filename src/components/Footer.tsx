import type {  PropsWithChildren, ReactElement,  SyntheticEvent } from "react";
import { type Game } from "../mocks/fetchGames";
import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import StartTab from "./tabs/Start";

import Sport from "../assets/sports-icon.png";
import Favorites from "../assets/favorite-icon.png";
import Invite from "../assets/invite-icon.png";
import Casino from "../assets/casino-icon.png";
import Cashier from "../assets/cashier-icon.png";



interface TabMenuProps {
  games: Game[]
  setGames: (games: Game[]) => void
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

const Footer = (props: TabMenuProps): ReactElement => {
  const tabs = [
    { label: "SPORTS", icon: <img src={Sport} />, content: <h1>SPORTS</h1> },
    { label: "FAVORITES", icon: <img src={Favorites} />, content: <StartTab games={props.games} setGames={props.setGames}  /> },
    { label: "INVITE", icon: <img src={Invite} />, content: <h1>INVITE</h1> },
    { label: "CASINO LIVE", icon: <img src={Casino} />, content: <h1>CASINO LIVE</h1> },
    { label: "CASHIER", icon: <img src={Cashier} />, content: <h1>CASHIER</h1> },
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

export default Footer;
