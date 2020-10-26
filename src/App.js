import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { Home, Order, Schaerfe, Toppings, Error } from "./pages";
import { Header, Modal } from "./components";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const location = useLocation();
  const [rice, setRice] = React.useState({ schaerfe: "", toppings: [] });
  const [showModal, setShowModal] = React.useState(false);

  const addSchärfe = (schaerfe) => {
    setRice({ ...rice, schaerfe });
  };
  const addToppings = (topping) => {
    let newRice;
    if (!rice.toppings.includes(topping)) {
      newRice = [...rice.toppings, topping];
    } else {
      newRice = rice.toppings.filter((item) => item !== topping);
    }
    setRice({ ...rice, toppings: newRice });
  };
  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/schaerfe">
            <Schaerfe rice={rice} addSchärfe={addSchärfe}></Schaerfe>
          </Route>
          <Route path="/toppings">
            <Toppings rice={rice} addToppings={addToppings}></Toppings>
          </Route>
          <Route path="/order">
            <Order rice={rice} setShowModal={setShowModal}></Order>
          </Route>
          <Route path="/*">
            <Error></Error>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}
