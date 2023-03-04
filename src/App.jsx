import React from "react";
import { createRoot }  from "react-dom";

const Pet = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h2', {}, props.animal),
        React.createElement('h2', {}, props.breed),
        React.createElement('h2', {}, props.age),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement('h1', {}, 'some text'),
            React.createElement(Pet, {
                name: 'Combo',
                animal: 'Dog',
                breed: 'Yorkie-mix',
                age: '3'
            }),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));