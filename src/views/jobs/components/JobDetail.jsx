import { Section } from '@/components/common/sxHtmlElements';
import { grey } from '@mui/material/colors';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import JobDetailHeader from './JobDetailHeader';

const JobDetailStyle = {
  border: `1px solid ${grey[300]}`,
  borderRadius: '8px',
  position: 'sticky',
  top: '16px',
  marginTop: '16px',
  height: '95vh',
  overflow: 'hidden',
};

function JobDetail() {
  return (
    <Section sx={JobDetailStyle}>
      <Stack direction="column" height="100%" flexWrap="nowrap">
        <Box sx={{ padding: '36px 16px 20px', boxShadow: `0 5px 5px ${grey[300]}` }}>
          <JobDetailHeader />
        </Box>
        <Box sx={{ overflowY: 'scroll', height: '100%', padding: '36px 16px 20px' }}>
          Full Job Description We are seeking a Front-End Developer that is eager to merge the art
          of design with the art of programming. Responsibilities will involve translating the UI/UX
          design wireframes to actual code that will generate visual aspects of the application.
          Responsibilities: Developing front-end web apps and code debugging Ensuring cross-platform
          compatibility Finding errors in applications and troubleshooting them Performing usability
          and performance testing on websites Meeting publication deadlines. Providing user support.
          Requirements: degree in computer science, computer engineering, MIS, or similar. At least
          1 experience as an Front-End Developer. In-depth knowledge of front-end coding languages
          including HTML, CSS, JavaScript, and XML. Ability to troubleshoot coding and application
          errors. Knowledge of web design and user application requirements. Ability to meet strict
          publication deadlines. Excellent communication and interpersonal skills. Strong attention
          to detail. Passionate to learn new skills Job Types: Full-time, Internship Salary: From
          Rs10,000.00 per month Application Deadline: 26/12/2022 Expected Start Date: 02/01/2023
          Full Job Description We are seeking a Front-End Developer that is eager to merge the art
          of design with the art of programming. Responsibilities will involve translating the UI/UX
          design wireframes to actual code that will generate visual aspects of the application.
          Responsibilities: Developing front-end web apps and code debugging Ensuring cross-platform
          compatibility Finding errors in applications and troubleshooting them Performing usability
          and performance testing on websites Meeting publication deadlines. Providing user support.
          Requirements: degree in computer science, computer engineering, MIS, or similar. At least
          1 experience as an Front-End Developer. In-depth knowledge of front-end coding languages
          including HTML, CSS, JavaScript, and XML. Ability to troubleshoot coding and application
          errors. Knowledge of web design and user application requirements. Ability to meet strict
          publication deadlines. Excellent communication and interpersonal skills. Strong attention
          to detail. Passionate to learn new skills Job Types: Full-time, Internship Salary: From
          Rs10,000.00 per month Application Deadline: 26/12/2022 Expected Start Date: 02/01/2023
          Full Job Description We are seeking a Front-End Developer that is eager to merge the art
          of design with the art of programming. Responsibilities will involve translating the UI/UX
          design wireframes to actual code that will generate visual aspects of the application.
          Responsibilities: Developing front-end web apps and code debugging Ensuring cross-platform
          compatibility Finding errors in applications and troubleshooting them Performing usability
          and performance testing on websites Meeting publication deadlines. Providing user support.
          Requirements: degree in computer science, computer engineering, MIS, or similar. At least
          1 experience as an Front-End Developer. In-depth knowledge of front-end coding languages
          including HTML, CSS, JavaScript, and XML. Ability to troubleshoot coding and application
          errors. Knowledge of web design and user application requirements. Ability to meet strict
          publication deadlines. Excellent communication and interpersonal skills. Strong attention
          to detail. Passionate to learn new skills Job Types: Full-time, Internship Salary: From
          Rs10,000.00 per month Application Deadline: 26/12/2022 Expected Start Date: 02/01/2023
        </Box>
      </Stack>
    </Section>
  );
}

export default JobDetail;
