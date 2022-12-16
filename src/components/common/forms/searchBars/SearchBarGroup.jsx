import { Box } from '@mui/material';
import ProvideGridContainer from '@/components/common/grids/ProvideGridContainer';

function SearchBarGroup({ children }) {
  return (
    <Box sx={{ margin: '50px 0 20px', gap: '16px' }}>
      <ProvideGridContainer spacing={2}>{children}</ProvideGridContainer>
    </Box>
  );
}

export default SearchBarGroup;
