import { Button as MuiButton } from '@mui/material';
import ProvideGridItem from '../grids/ProvideGridItem';

const buttonStyle = {
  padding: '11px 18px',
  borderRadius: '8px',
  textTransform: 'capitalize',
  fontWeight: '700',
  display: 'flex',
  width: { xs: '100%' },
};

function Button({ children, variant, color, grid }) {
  return (
    <>
      {grid ? (
        <ProvideGridItem grid={grid}>
          <MuiButton variant={variant} color={color} sx={buttonStyle} disableRipple>
            {children}
          </MuiButton>
        </ProvideGridItem>
      ) : (
        <MuiButton variant={variant} color={color} sx={buttonStyle} disableRipple>
          {children}
        </MuiButton>
      )}
    </>
  );
}

export default Button;
