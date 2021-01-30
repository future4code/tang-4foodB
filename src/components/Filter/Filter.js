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
                    aria-label="scrollable prevent tabs"
                >
                    <Tab className={classes.tab} label={"Burguer"} aria-label="cat1" {...a11yProps(0)} />
                    <Tab className={classes.tab} label={"Asiática"} aria-label="cat2" {...a11yProps(1)} />
                    <Tab className={classes.tab} label={"Massas"} aria-label="cat3" {...a11yProps(2)} />
                    <Tab className={classes.tab} label={"Saudável"} aria-label="cat4" {...a11yProps(3)} />
                    <Tab className={classes.tab} label={"Teste"} aria-label="cat5" {...a11yProps(4)} />
                    <Tab className={classes.tab} label={"Teste"} aria-label="cat6" {...a11yProps(5)} />
                    <Tab className={classes.tab} label={"Teste"} aria-label="cat7" {...a11yProps(6)} />
                </Tabs>
            </AppBar>

            <TabPanel className={classes.tabPanel} value={value} index={0}>
                <p>Burguer</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
                <p>Asiática</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
                <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={4}>
                <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={5}>
                <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={6}>
                <p>Teste</p>
                <RestaurantCard />
            </TabPanel>
        </div>
    );
}
