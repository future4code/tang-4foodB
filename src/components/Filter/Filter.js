import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useStyles } from "./styled";
import { RestaurantCard } from '../RestaurantCard.js/RestaurantCard';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box div={3}>
                    {children}
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
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}


export const Filter = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="off"
                    aria-label="scrollable prevent tabs example"
                >
                    <Tab label={"Burguer"} aria-label="phone" {...a11yProps(0)} />
                    <Tab label={"Asiática"} aria-label="favorite" {...a11yProps(1)} />
                    <Tab label={"Massas"} aria-label="person" {...a11yProps(2)} />
                    <Tab label={"Saudável"} aria-label="help" {...a11yProps(3)} />
                    <Tab label={"Teste"} aria-label="shopping" {...a11yProps(4)} />
                    <Tab label={"Teste"} aria-label="up" {...a11yProps(5)} />
                    <Tab label={"Teste"} aria-label="down" {...a11yProps(6)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <p>Burguer</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <p>Asiática</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel value={value} index={2}>
            <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel value={value} index={3}>
            <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel value={value} index={4}>
            <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel value={value} index={5}>
            <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel value={value} index={6}>
            <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
        </div>
    );
}
