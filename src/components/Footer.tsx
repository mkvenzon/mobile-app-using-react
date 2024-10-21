import type {  ReactElement, SyntheticEvent } from "react";
import { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";


import Sport from "../assets/sports-icon.png";
import Favorites from "../assets/favorite-icon.png";
import Invite from "../assets/invite-icon.png";
import Casino from "../assets/casino-icon.png";
import Cashier from "../assets/cashier-icon.png";

const Footer = (): ReactElement => {
  const tabs = [
    { label: "SPORTS", icon: <img src={Sport} alt="Sports" /> },
    { label: "FAVORITES", icon: <img src={Favorites} alt="Favorites" /> },
    { label: "INVITE", icon: <img src={Invite} alt="Invite" /> },
    { label: "CASINO LIVE", icon: <img src={Casino} alt="Casino Live" /> },
    { label: "CASHIER", icon: <img src={Cashier} alt="Cashier" /> },
  ];

  const [value, setValue] = useState(1);

  const handleChange = (_e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position: "fixed",  
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "background.paper",
        zIndex: 1000,     
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
    </Box>
  );
};

export default Footer;
