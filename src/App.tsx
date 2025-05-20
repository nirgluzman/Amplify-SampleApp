import './App.css';

// import the Amplify API client generator for making GraphQL API calls.
import { generateClient } from 'aws-amplify/api';

// import the GraphQL schema type definitions for type safety when using the API.
import type { Schema } from '../amplify/data/resource';

import { Auth } from './Auth';

const client = generateClient<Schema>();

async function sayHello() {
  const response = await client.queries.sayHello({
    name: 'Nir',
  });

  console.log(response);
}

function App() {
  return (
    <>
      <button onClick={sayHello}>Click Me!</button>
      <Auth />
    </>
  );
}

export default App;
