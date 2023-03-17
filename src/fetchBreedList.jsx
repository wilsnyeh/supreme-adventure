const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  // if 500 error
  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not okay`);
  }
  // returns promise for async
  return apiRes.json();
};

export default fetchBreedList;
