import Vector from '../assets/Vector.png'
import Fun from '../assets/Fun.png'
import Cart from '../assets/Cart.png'
import Price from '../assets/Price.png'
import Acc from '../assets/Acc.png'
import Line from '../assets/Line.png'

import Grid from '@mui/material/Grid2';
import Banner from './Banner'

const Header = () => {
  return (
      <div>
          <Grid container spacing={2}>
              <Grid size={1}>
                  <img src={Vector} />
              </Grid>
              <Grid size={6.7}>
                  <img src={Fun} />
             </Grid>
                <img src={Cart} />
                <img src={Price} />
                <img src={Line} />
                <img src={Acc} />    
              <Banner />
        </Grid>
    </div>
  )
}

export default Header
