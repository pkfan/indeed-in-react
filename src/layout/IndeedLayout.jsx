import { FullWidthContainer } from '@/components/common/containers';
import NavBar from '@/components/common/NavBar';

import FindJobs from '@/components/FindJobs';
import { Container } from '@mui/material';

function IndeedLayout({ children }) {
  return (
    <FullWidthContainer>
      <NavBar />
      <Container maxWidth="lg">
        <FindJobs />
        {children}
      </Container>
    </FullWidthContainer>
  );
}

export default IndeedLayout;
