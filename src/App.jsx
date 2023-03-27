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
    <div className="m-0 p-0" style={{ background: "url(/images/paws.png" }}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
              <Link className="text-6xl text-white hover:text-gray-200" to="/">
                {" "}
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
