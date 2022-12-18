import SearchBarGroup from '@/components/common/forms/searchBars/SearchBarGroup';
import SearchBar from '@/components/common/forms/searchBars/SearchBar';
import Button from '@/components/common/buttons/Button';

import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FindJobsTextBelow from './FindJobsTextBelow';

function FindJobs() {
  return (
    <>
      <SearchBarGroup>
        <SearchBar icon={<SearchIcon fontSize="inherit" />} label="What" />
        <SearchBar icon={<LocationOnIcon fontSize="inherit" />} label="Where" />
        <Button variant="contained" color="primary" grid={{ xs: 12, md: 2 }}>
          Find Jobs
        </Button>
      </SearchBarGroup>
      <FindJobsTextBelow />
    </>
  );
}

export default FindJobs;
