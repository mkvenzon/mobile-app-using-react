import { useEffect, useState, type ReactElement } from "react";

import { styled } from '@mui/material'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

import CloseIcon from '@mui/icons-material/Close';

import NavBar from "./components/NavBar";
import TabMenu from "./components/TabMenu";
import Slider from "./components/Slider"
import Footer from "./components/Footer"
import Notification from "./components/Notification";

import { fetchGames, type Game } from "./mocks/fetchGames";
import { fetchProvider, type Provider } from "./mocks/fetchProvider";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  minHeight: '48px',
  backgroundColor: '#00a6ff',
  color: '#ffffff'
}));

const ProviderWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  backgroundColor: '#d9d9d9',
  maxWidth: '200px',
  maxHeight: '100px',
  minHeight: '50px',
  width: 'auto',
  height: 'auto'
}))

const App = (): ReactElement => {
  const [games, setGames] = useState<Game[]>([])
  const [providers, setProviders] = useState<Provider[]>([])
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    fetchGames().then((data) => setGames(data));
    fetchProvider().then((data) => setProviders(data))

    alert("Welcome to the app! For the best experience, please view this in mobile mode by switching to mobile view in your browser's developer tools.");
  }, [])

  return (
    <>
      <NavBar setOpen={(flag) => setOpen(flag)} />
      <Slider />
      <Notification />     
      <TabMenu games={games} setGames={setGames} />
      <Footer  /> 
      <Drawer
        anchor='bottom'
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <DrawerHeader>
          <Typography>Game Provider</Typography>
          <Box flexGrow={1}></Box>
          <IconButton color="inherit" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
        <Grid2 container spacing={2} padding={2}>
          {providers.map((provider) => 
          <Grid2 size={6}>
            <ProviderWrapper>
              <img src={provider.image} />
            </ProviderWrapper>
          </Grid2>)}
        </Grid2>
      </Drawer>
    </>
  );
};

export default App;
