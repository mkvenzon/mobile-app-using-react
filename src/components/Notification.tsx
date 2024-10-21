import { Stack } from '@mui/material'

import text from '../assets/text.png'
import bell from '../assets/bell.png'

const Notification = () => {
  return (
      <div>
          <Stack
              justifyContent="center"
              alignItems="center"
              gap={2}
              direction="row"
            >
                <img src={bell } />
                <img src={text} />
            </Stack>
     </div>
  )
}

export default Notification
