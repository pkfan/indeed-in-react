import { Box } from '@mui/system';
import { grey } from '@mui/material/colors';

const JobCardStyle = {
  border: `1px solid ${grey[300]}`,
  padding: '16px',
  borderRadius: '8px',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: `0 5px 5px ${grey[300]}`,
  },
};

function JobCard({ children }) {
  return <Box sx={JobCardStyle}>{children}</Box>;
}

export default JobCard;
