import React from "react";
import { Route, Switch } from "react-router";
// import {
//   Reset,
//   SignIn,
//   SignUp,
//   StockEdit,
//   RoundedCardList,
// } from "./templates/index";
import SignUp from "./components/SignUp";
// import { Top } from "./components/index";
import Auth from "./Auth";
import Calendar from "./pages/calendar";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />

      <Auth>
        <Route exact path="(/calendar)?" component={Calendar} />
        {/* <Route exact path="/items/category" component={RoundedCardList} /> */}
        {/* <Route exact path="/product/:id" component={ProductDetail} /> */}
        {/* <Route path="/items/edit(/:id)?" component={StockEdit} /> */}
      </Auth>
    </Switch>
  );
};

export default Router;
