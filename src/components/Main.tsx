import React from "react";

const MyContext = React.createContext("defaultValue");

function Main() {
  return (
    <div>
      <label>Main provided context to child: </label>
      <MyContext.Provider value={"Context Value!"}>
        <ul>
          <li>
            <Child></Child>
          </li>
          <li>
            <Middle></Middle>
          </li>
          <li>
            <Middle></Middle>
          </li>
        </ul>
      </MyContext.Provider>
    </div>
  );
}

function Middle() {
  return (
    <div>
      <label>Middle: </label>
      <Child></Child>
      <Child></Child>
    </div>
  );
}

function Child() {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <label>Child: </label>
          <label>
            <b>{context} </b>
          </label>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Main;
