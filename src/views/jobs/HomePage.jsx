import { FullWidthContainer } from '@/components/common/containers';
import { Container } from '@mui/material';
import FindJobs from '@/views/jobs/components/FindJobs';
import TabNavigation from '@/components/common/tabs/TabNavigation';
import JobsContainer from '@/views/jobs/components/JobsContainer';
import RecipeReviewCard from '@/components/common/Card';

const componentRenderedList = [JobsContainer, RecipeReviewCard].map((Component, index) => {
  return <Component key={index} />;
});

function HomePage() {
  return (
    <>
      <FullWidthContainer>
        {/* find jobs container */}
        <Container maxWidth="lg">
          <FindJobs />
          {/* main container */}
        </Container>
      </FullWidthContainer>
      <FullWidthContainer>
        <TabNavigation
          tabNameList={['Job Feed', 'Recent Searches']}
          components={componentRenderedList}
        />
      </FullWidthContainer>
    </>
  );
}

export default HomePage;
