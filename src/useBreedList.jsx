// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState('unloaded');

  // useEffect(() => {
  //     if (!animal) {
  //         setBreedList([]);
  //     } else if (localCache[animal]) {
  //         setBreedList(localCache[animal])
  //     } else {
  //         requestBreedList();
  //     }

  //     async function requestBreedList() {
  //         setBreedList([]);
  //         setStatus('loading');

  //         const res = await fetch(
  //             `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //         )
  //         const json = await res.json();
  //         localCache[animal] = json.breeds || [];
  //         setBreedList(localCache[animal]);
  //         setStatus("loaded");
  //     }
  // }, [animal]);

  // the .? if results is available - ?? is ternary, where if results/data fails, return empty array
  return [results?.data?.breeds ?? [], results.status];
}
