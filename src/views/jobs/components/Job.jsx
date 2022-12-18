import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DoneIcon from '@mui/icons-material/Done';

import JobCardHeader from './JobCardHeader';
import JobCard from './JobCard';
import JobCardLabel from './JobCardLabel';
import JobCriteria from './JobCriteria';
import JobPostedDetail from './JobPostedDetail';
import JobRequirements from './JobRequirements';

function Job() {
  return (
    <JobCard>
      <JobCardHeader title="Full Stack Developer" company="Delve Health" location="lahore" />
      <JobCardLabel StartIcon={BusinessCenterIcon} EndIcon={DoneIcon} textLabel="Full-time" />
      <JobCriteria />
      <JobRequirements />
      <JobPostedDetail />
    </JobCard>
  );
}

export default Job;
