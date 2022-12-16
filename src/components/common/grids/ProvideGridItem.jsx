import { Grid } from '@mui/material';

function ProvideGridItem({ children, grid }) {
  return (
    <Grid item {...grid}>
      {children}
    </Grid>
  );
}

export default ProvideGridItem;
