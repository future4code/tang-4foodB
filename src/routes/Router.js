import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditUser } from '../components/EditUser/EditUser';
import { Profile } from '../screens/Profile/Profile';
import { EditAddress } from '../components/EditAddress/EditAddress';
import Cart from '../screens/Cart/Cart';
import {LoginUser} from '../screens/LoginUser/LoginUser';
import { SignUp } from '../screens/Signup/SignUp';
import { Address } from '../screens/Address/Address';
import { Splash } from '../screens/Splash/Splash';
import {Search} from '../screens/Search/Search'
import {OrderInProgress} from '../components/OrderInProgress/OrderInProgress'
import { RestaurantDetail } from '../screens/RestaurantDetail/RestaurantDetail';
import Error from "../screens/Error/Error";

export const Router = () => {
    return <div>
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Splash/>
            </Route>
            <Route exact path="/login">
                <LoginUser/>
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
            <Route exact path="/address">
                <Address/>
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