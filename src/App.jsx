import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
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

// queryclient configuration
// how long do we want to keep things cached?
// infinty = is fine so long as user is within session
// can also change 'infinity' into actual time, ie. 60 seconds
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/"> Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
