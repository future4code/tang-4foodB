import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditUser } from '../components/EditUser/EditUser';
import { Profile } from '../screens/Profile/Profile';
import { EditAddress } from '../components/EditAddress/EditAddress';

export const Router = () => {
    return <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <p>Splash</p>
                </Route>
                <Route exact path="/login">
                    <p>Login</p>
                </Route>
                <Route exact path="/signup">
                    <p>Sign up</p>
                </Route>
                <Route exact path="/address">
                    <p>Address</p>
                </Route>
                <Route exact path="/feed">
                    <p>Feed</p>
                </Route>
                <Route exact path="/search">
                    <p>Search</p>
                </Route>
                <Route exact path="/search/results">
                    <p>Search Results</p>
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/profile/edit/user">
                    <EditUser />
                </Route>
                <Route exact path="/profile/edit/address">
                    <EditAddress />
                </Route>
                <Route exact path="/cart">
                    <p>Carrinho</p>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
}