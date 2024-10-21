import React, { useState } from 'react';
import { TextField, List, ListItem, ListItemText, Paper } from '@mui/material';

interface Item {
  
  name: string;
}

const items: Item[] = [
  { name: 'Sugar Rush' },
  { name: 'Shaolin Crew' },
  { name: 'Big Bad Wolf' },
  { name: 'Book of Egypt' },
  { name: 'Pirates Power' },
  { name: 'Crocodile Blitz Extreme FB'},
  { name: 'Anaconda Wild 2 Powerplay Jackpot'},
  { name: 'Maya Jackpot' },
  { name: 'Beach Life'},
  { name: 'Inca Jackpot'},
  { name: 'Pride of Persia' },
  { name: 'Azteca'},
];

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [filteredItems, setFilteredItems] = useState<Item[]>([]); 

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    setFilteredItems(filtered);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px' }}>    
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        style={{ marginBottom: '20px' }}
      />     
      <List>
        {filteredItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SearchComponent;
