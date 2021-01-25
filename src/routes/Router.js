import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {ProfileUser} from '../components/ProfileUser/ProfileUser';
import {ProfilePage} from '../components/ProfilePage/ProfilePage';
import {ProfileAddress} from '../components/ProfileAddress/ProfileAddress';

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
        </Switch>
        </BrowserRouter>
    </div>
}