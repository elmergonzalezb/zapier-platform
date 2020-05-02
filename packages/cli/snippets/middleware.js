const addHeader = (request, z, bundle) => {
  request.headers['my-header'] = 'from zapier';
  return request;
};

const parseXML = (response, z, bundle) => {
  // Parse content that is not JSON
  // eslint-disable-next-line no-undef
  response.data = xml.parse(response.content);
  return response;
};

const App = {
  // ...
  beforeRequest: [addHeader],
  afterResponse: [parseXML]
  // ...
};
