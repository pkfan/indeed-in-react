import { Typography, Link } from '@mui/material';

function FindJobsTextBelow() {
  return (
    <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
      <Link sx={{ fontWeight: '600' }} href="#" underline="hover">
        Employers: Post a job
      </Link>
      <span>&ensp; &#8211; Your next hire is here</span>
    </Typography>
  );
}

export default FindJobsTextBelow;
