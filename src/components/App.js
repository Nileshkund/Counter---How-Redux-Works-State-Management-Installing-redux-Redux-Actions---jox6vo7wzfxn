// import React, { Component } from "react";
// import Counter from "./counterContainer";

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <Counter />
//                 </header>
//             </div>
//         );
//     }
// }
// export default App;

import { connect } from "react-redux";

import Counter from "./counter";

import { increment, decrement, reset } from "../actions";

const mapStateToProps = (state) => {

return {

counter: state,

};

};

const mapDispatchToProps = (dispatch) => {

return {

increment: () => dispatch(increment()),

decrement: () => dispatch(decrement()),

reset: () => dispatch(reset()),

};

};

// add code here
