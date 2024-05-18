import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: 1,
            minHeight: '200px',
            mt: 2,
            mx: 'auto',
            maxWidth: '80%',
            backgroundImage: 'url(https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/f/q/1/small-pack-of-1-naruto-poster-anime-poster-hd-photos-for-wall-original-imaeg638g5ugeakj.jpeg?q=20&crop=false)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
          }} 
        >
          <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 'bold' }}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Main() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            '.MuiTabs-indicator': {
              backgroundColor: '#1976d2',
            },
            '.MuiTab-root': {
              flex: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              borderRight: 1,
              borderColor: 'divider',
              '&:last-child': {
                borderRight: 0,
              },
              '&.Mui-selected': {
                color: '#1976d2',
              },
            },
          }}
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Content for Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Content for Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Content for Item Three
      </CustomTabPanel>
    </Box>
  );
}
