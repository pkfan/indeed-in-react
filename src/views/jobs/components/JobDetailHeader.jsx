import { Stack, Typography } from '@mui/material';
import Button from '@/components/common/buttons/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { grey } from '@mui/material/colors';

function JobDetailHeader() {
  return (
    <Stack>
      <Typography variant="h6" component="h6" sx={{ fontWeight: '600' }}>
        React Native adroid and ios developer
      </Typography>
      <Typography variant="body1">Stackup solution</Typography>
      <Typography variant="body1">Babra Lahore</Typography>
      <Typography variant="body1">Rs: 10,000 a month</Typography>
      <Stack direction="row" gap={2} mt={1}>
        <Button variant="contained" color="primary" sx={{ maxWidth: 'max-content' }}>
          Apply Now
        </Button>
        <Button sx={{ background: `${grey[300]}`, maxWidth: 'max-content', color: 'black' }}>
          <FavoriteBorderIcon />
        </Button>
      </Stack>
    </Stack>
  );
}

export default JobDetailHeader;
