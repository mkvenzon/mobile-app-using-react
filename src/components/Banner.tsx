import HeaderBanner from '../assets/Banner.png'
import Bell from '../assets/bell.png'
import Text from '../assets/text.png'

import {Stack, styled } from '@mui/material'



const StyledImg = styled('img')({
    width: '130%',
    height: 'auto',   
});
  
const StyledBell = styled('img')({
    width: '7%',
    height: 'auto',
})



const StyledText = styled('img')({
    width: '1000%',
    height: 'auto',
})

const Banner = () => {
  return (
      <div>      
          <StyledImg src={HeaderBanner}></StyledImg>
          <Stack direction="row" spacing={2}>
            <StyledBell src={Bell} />
             <StyledText src={Text} />
     </Stack>
     
        
    </div>
  )
}

export default Banner
