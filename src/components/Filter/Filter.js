import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useStyles, TabBox } from "./styled";
import { RestaurantCard } from '../RestaurantCard.js/RestaurantCard';
import GlobalStateContext from "../../global/GlobalStateContext";
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
                <TabBox div={3}>
                    {children}
                </TabBox>
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
    //funcionalidade da Tab, vinda do Material-UI
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        if (value !== newValue) {
            setValue(newValue)
        } else {
            setValue(0);
        }
    };

    const { states } = useContext(GlobalStateContext);

    const restaurants = (category) => {
        const filter = states.restaurants.filter((restaurant) => {
            return restaurant.category === category
        })

        return filter
    }

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
                    <Tab aria-label="" {...a11yProps(0)} />
                    <Tab className={classes.tab} label={"Burguer"} aria-label="cat1" {...a11yProps(1)} />
                    <Tab className={classes.tab} label={"Asiática"} aria-label="cat2" {...a11yProps(2)} />
                    <Tab className={classes.tab} label={"Massas"} aria-label="cat3" {...a11yProps(3)} />
                    <Tab className={classes.tab} label={"Sorvetes"} aria-label="cat4" {...a11yProps(4)} />
                    <Tab className={classes.tab} label={"Árabe"} aria-label="cat5" {...a11yProps(5)} />
                    <Tab className={classes.tab} label={"Carnes"} aria-label="cat6" {...a11yProps(6)} />
                    <Tab className={classes.tab} label={"Baiana"} aria-label="cat7" {...a11yProps(7)} />
                    <Tab className={classes.tab} label={"Petiscos"} aria-label="cat7" {...a11yProps(8)} />
                    <Tab className={classes.tab} label={"Mexicana"} aria-label="cat7" {...a11yProps(9)} />
                </Tabs>
            </AppBar>

            <TabPanel className={classes.tabPanel} value={value} index={0}>
                <p>Todos</p>
                {states.restaurants.map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
                <p>Burguer</p>
                {restaurants('Hamburguer').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                <p>Asiática</p>
                {restaurants('Asiática').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
                <p>Massas</p>
                {restaurants('Italiana').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={4}>
                <p>Sorvete</p>
                {restaurants('Sorvetes').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={5}>
                <p>Árabe</p>
                {restaurants('Árabe').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={6}>
                <p>Carnes</p>
                {restaurants('Carnes').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={7}>
                <p>Baiana</p>
                {restaurants('Baiana').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={8}>
                <p>Petiscos</p>
                {restaurants('Petiscos').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={9}>
                <p>Mexicana</p>
                {restaurants('Mexicana').map(
                    (rest) => {
                        return <RestaurantCard rest={rest} key={rest.id}/>
                    })}
            </TabPanel>
        </div>
    );
}
