import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Slider from '../slider'
import { Pics,Monitor } from '../../utils/gamePr';
import '../../style/components/tabs.scss'

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    direction:"rtl",
    
  },
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className="appbar" position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className="tabLable" label="کنسول های بازی" {...a11yProps(0)} />
          <Tab className="tabLable" label="مانیتور" {...a11yProps(1)} />
          <Tab className="tabLable" label="لوازم جانبی" {...a11yProps(2)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Slider  products={Pics} /> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Slider products={Monitor} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Slider products={Pics} />
      </TabPanel>
    </div>
  );
}