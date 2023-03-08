import { createRoot }  from "react-dom";
import Pet from "./Pet";

// const App = () => {
//     return React.createElement(
//         "div",
//         {},
//         [
//             React.createElement('h1', {}, 'some text'),
//             React.createElement(Pet, {
//                 name: 'Combo',
//                 animal: 'Dog',
//                 breed: 'Yorkie-mix',
//             }),
//             React.createElement(Pet),
//             React.createElement(Pet),
//         ]
//     )
// };

const App = () => {
    <div>
        <h1>Adopt Me!</h1>
        <Pet name = 'Combo' animal = 'dog' breed = 'yorkie-mix' />
        <Pet name = 'Sooter' animal = 'dog' breed = 'jack russell terrier' />
    </div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);