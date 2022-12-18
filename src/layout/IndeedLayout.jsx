import { FullWidthContainer } from '@/components/common/containers';
import NavBar from '@/components/common/NavBar';
import Footer from '@/components/common/Footer';
import HomePage from '@/views/jobs/HomePage';

function IndeedLayout() {
  return (
    <>
      <FullWidthContainer>
        <NavBar />
      </FullWidthContainer>
      <FullWidthContainer>
        {/* Outlet of react router will render here */}
        <HomePage />
      </FullWidthContainer>
      <FullWidthContainer>
        <Footer />
      </FullWidthContainer>
    </>
  );
}

export default IndeedLayout;
