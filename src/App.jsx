import GridLayout from './layout/GridLayout';
import Providers from './services/Providers';
import IndeedLayout from './layout/IndeedLayout';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <Providers>
        <IndeedLayout>
          <GridLayout></GridLayout>
        </IndeedLayout>
      </Providers>
    </>
  );
}

export default App;
