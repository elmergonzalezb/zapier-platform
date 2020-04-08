const listExample = (z, bundle) => {
  const customHttpOptions = {
    headers: {
      'my-header': 'from zapier'
    }
  };

  return z
    .request('https://example.com/api/v2/recipes.json', customHttpOptions)
    .then(response => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error(`Unexpected status code ${response.status}`);
      }

      const recipes = z.JSON.parse(response.content);
      // do any custom processing of recipes here...

      return recipes;
    });
};

const App = {
  // ...
  triggers: {
    example: {
      // ...
      operation: {
        // ...
        perform: listExample
      }
    }
  }
};
