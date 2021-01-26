import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ProfileUser} from '../components/ProfileUser/ProfileUser';
import {ProfilePage} from '../components/ProfilePage/ProfilePage';
import {ProfileAddress} from '../components/ProfileAddress/ProfileAddress';
import {SearchRestaurant} from '../components/SearchRestaurant/SearchRestaurant'
import {OrderInProgress} from '../components/OrderInProgress/OrderInProgress'

export const Router = () => {
    return <div>
        <BrowserRouter>
        <Switch>
            <Route exact path="/user">
                <ProfileUser/>
            </Route>
            <Route exact path="/page">
                <ProfilePage/>
            </Route>
            <Route exact path="/address">
                <ProfileAddress/>
            </Route>
            <Route exact path="/search-restaurant">
                <SearchRestaurant/>
            </Route>
            <Route exact path="/in-progress">
                <OrderInProgress/>
            </Route>
        </Switch>
        </BrowserRouter>
    </div>
}