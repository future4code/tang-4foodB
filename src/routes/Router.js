import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditUser } from '../components/EditUser/EditUser';
import { Profile } from '../screens/Profile/Profile';
import { EditAddress } from '../components/EditAddress/EditAddress';
import Cart from '../screens/Cart/Cart';
import {LoginUser} from '../screens/LoginUser/LoginUser';
import { SignUp } from '../screens/SignUp/SignUp';
import { Address } from '../screens/Address/Address';
import { Splash } from '../screens/Splash/Splash';
import {Search} from '../screens/Search/Search'
import Feed from '../screens/Feed/Feed'
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
                {/* Helena */}
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
            <Route exact path="/address">
                <Address/>
            </Route>
            <Route exact path="/feed">
                <Feed />
                {/* Paula */}
            </Route>
            <Route exact path="/search">
                <Search/> 
            </Route>
            <Route exact path="/restaurant/:id">
                <RestaurantDetail/>
            </Route>
            <Route exact path="/order/:order">
                <OrderInProgress />
            </Route>
            <Route exact path="/profile">
                {/* Lê */}
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
                {/* Helena */}
            </Route>
            <Route >
                <Error />
            </Route>
        </Switch>
        </BrowserRouter>
    </div >
}