const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://instagram-react-api.herokuapp.com';

export default { URL };
