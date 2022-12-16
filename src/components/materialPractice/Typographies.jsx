import { Typography } from '@mui/material';

function Typographies() {
  return (
    <>
      <Typography variant="h1" component="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Typography marginTop="8" variant="h2" component="h2">
        h2. Heading
      </Typography>
      <Typography variant="h3" component="h3">
        h3. Heading
      </Typography>
      <Typography variant="h4" component="h4">
        h4. Heading
      </Typography>
      <Typography variant="h5" component="h5">
        h5. Heading
      </Typography>
      <Typography variant="h6" component="h6">
        h6. Heading
      </Typography>
      <Typography variant="h6" component="h6">
        h6. Heading
      </Typography>
      <Typography variant="subtitle" component="div">
        subtitle 1
      </Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>
      <Typography variant="body1">body 1</Typography>
      <Typography variant="body2">body 2</Typography>
    </>
  );
}

export default Typographies;
