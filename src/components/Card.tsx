import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Header from '../components/Header'

const card = (
  <>
    <CardContent>
            <Header />       
    </CardContent>
  </>
);

export default function OutlinedCard() {
  return (
      <Card variant="outlined" sx={{
          height: 1000,
          width: 500,          
      }}>{card}</Card>
  );
}