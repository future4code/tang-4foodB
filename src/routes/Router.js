import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditUser } from '../components/EditUser/EditUser';
import { Profile } from '../screens/Profile/Profile';
import { EditAddress } from '../components/EditAddress/EditAddress';
import Cart from '../screens/Cart/Cart';
import {Search} from '../screens/Search/Search'
import {OrderInProgress} from '../components/OrderInProgress/OrderInProgress'
import { RestaurantDetail } from '../screens/RestaurantDetail/RestaurantDetail';
import Error from "../screens/Error/Error";

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
            <Route exact path="/search/:search">
                <Search/>
            </Route>
            <Route exact path="/restaurant/:name">
                <RestaurantDetail/>
            </Route>
            <Route exact path="/order/:order">
                <OrderInProgress />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/profile/edit/user/:user">
                <EditUser />
            </Route>
            <Route exact path="/profile/edit/address/:address">
                <EditAddress />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route >
                <Error />
            </Route>
        </Switch>
        </BrowserRouter>
    </div >
}