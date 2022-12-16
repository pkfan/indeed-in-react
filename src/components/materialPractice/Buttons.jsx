import { Button, Typography, IconButton } from '@mui/material';

// import { DeleteIcon, AlarmIcon, AddShoppingCartIcon } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';

function Buttons() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <div style={{ border: '1px solid red', margin: '10px', padding: '10px' }}>
        <Typography component="h6" variant="h6" gutterBottom>
          Text button
        </Typography>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </div>
      <Typography component="h6" variant="h6" gutterBottom>
        Contained button
      </Typography>
      <div
        style={{
          border: '1px solid red',
          margin: '10px',
          padding: '10px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
      </div>
      <Typography component="h6" variant="h6" gutterBottom>
        outlined button
      </Typography>
      <div
        style={{
          border: '1px solid red',
          margin: '10px',
          padding: '10px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </div>
      <Typography component="h6" variant="h6" gutterBottom>
        icon button
      </Typography>
      <div
        style={{
          border: '1px solid red',
          margin: '10px',
          padding: '10px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        {/* <IconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton> */}
      </div>
    </>
  );
}

export default Buttons;
