import { type ReactElement, useState } from 'react';
import { TextField, Card, CardMedia, Paper, InputAdornment, ListItem} from '@mui/material';



import searchicon from '../../assets/search-icon.png'
import { Game } from '../../mocks/fetchGames';

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
    <Paper elevation={3} style={{ padding: '20px' }}>     
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

      
      
        {filteredItems.map((game) => (
          <ListItem key={game.id}>
            <Card>             
              <CardMedia
                component="img"
                height="140"
                image={game.image}
                alt={game.title}
                style={{ objectFit: 'cover' }}
              />          
            </Card>
          </ListItem >
        ))}
      
    </Paper>
  );
};

export default SearchTab;
