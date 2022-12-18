import { Container, Grid } from '@mui/material';

import JobDetail from './JobDetail';
import Jobs from '@/views/jobs/components/Jobs';
import Job from '@/views/jobs/components/Job';

function JobsContainer() {
  return (
    <Container maxWidth="lg" sx={{ margin: '30px', mx: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Jobs>
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </Jobs>
        </Grid>
        <Grid md={6} sx={{ position: 'relative', px: '12px', display: { xs: 'none', md: 'flex' } }}>
          <JobDetail />
        </Grid>
      </Grid>
    </Container>
  );
}

export default JobsContainer;
