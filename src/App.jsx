import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

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
  return (
    <BrowserRouter>
      <header>
        <Link to="/"> Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
