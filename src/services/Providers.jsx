import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import indeedTheme from '@/theme/indeedTheme';

function Providers({ children }) {
  return <MaterialThemeProvider theme={indeedTheme}>{children}</MaterialThemeProvider>;
}

export default Providers;
