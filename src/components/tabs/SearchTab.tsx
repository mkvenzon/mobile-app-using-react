import { type ReactElement, useState } from 'react';
import { TextField, InputAdornment, ImageList, ImageListItem } from '@mui/material';

import { Game } from '../../mocks/fetchGames';

import searchicon from '../../assets/search-icon.png'
import provider from '../../assets/provider-icon.png'

interface SearchTabProps {
  games: Game[]
}

const SearchTab = (props:SearchTabProps) : ReactElement => {
  const [searchItem, setSearchItem] = useState<string>(''); 
 
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchItem(searchValue);

  }
    
    const filteredItems = props.games.filter((game) =>
      game.title.toLowerCase().includes(searchItem)
    );
  
  return (
   <>
      <TextField                
        variant="outlined"
        value={searchItem}
        onChange={handleSearch}
        fullWidth
        style={{ marginBottom: '20px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                src={searchicon }
                alt="search"
                style={{ width: '15px', height: '15px' }} 
              />
            </InputAdornment>
          ),
        }}     
      />     
      <img src={provider } />
        <ImageList cols={3} gap={10} style={{ width: '100%', margin: 'auto' }}>
          {filteredItems.map((game) => (
          <ImageListItem key={game.id}>
            <img src={game.image} alt={game.title} loading="lazy" style={{ width: '100%', height: 'auto' }} />
          </ImageListItem>
        ))}
      </ImageList>
      </>
  );
};

export default SearchTab;
