import React, { useState } from 'react';
import { TextField, Card, CardMedia, Paper, InputAdornment} from '@mui/material';
import Grid from '@mui/material/Grid';

import searchicon from '../../assets/search-icon.png'


import sugar from '../../assets/sugar-rush-icon.png'
import shaolin from '../../assets/shaolin-crew-icon.png'
import bigbad from '../../assets/big-wolf-icon.png'


interface Item {
  
  name: string;
  img: string;
  
}

const items: Item[] = [
  { name: 'Sugar Rush', img: sugar  },
  { name: 'Shaolin Crew', img: shaolin },
  { name: 'Big Bad Wolf', img:bigbad  },
  // { name: 'Book of Egypt' },
  // { name: 'Pirates Power' },
  // { name: 'Crocodile Blitz Extreme FB'},
  // { name: 'Anaconda Wild 2 Powerplay Jackpot'},
  // { name: 'Maya Jackpot' },
  // { name: 'Beach Life'},
  // { name: 'Inca Jackpot'},
  // { name: 'Pride of Persia' },
  // { name: 'Azteca'},
];

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // State to hold the search term
  const [filteredItems, setFilteredItems] = useState<Item[]>(items); // State for filtered items

  // Function to handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter items based on search term
    const filtered = items.filter((item) =>
     item.name.toLowerCase().includes(searchValue)      
    );
    setFilteredItems(filtered);
  };



  return (
    <Paper elevation={3} style={{ padding: '20px' }}>
      {/* Search input */}
      <TextField
        
        
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        fullWidth
        style={{ marginBottom: '20px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img
                src={searchicon }
                alt="search"
                style={{ width: '15px', height: '15px' }} // Adjust size here
              />
            </InputAdornment>
          ),
        }}
     
      />

      {/* Filtered list */}
      <Grid container spacing={2}>
        {filteredItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              {/* Display image */}
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.name}
                style={{ objectFit: 'cover' }}
              />
            
          
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default SearchComponent;
