import { Grid } from '@mui/material';
import { Typographies, Buttons } from '@/components/materialPractice';

export default function GridLayout() {
  return (
    <Grid container direction="column" padding={8} spacing={3}>
      <Grid item xs>
        <Typographies />
      </Grid>
      <Grid item sx={{ borderTop: '1px solid black' }}>
        <Buttons></Buttons>
      </Grid>
    </Grid>
  );
}
