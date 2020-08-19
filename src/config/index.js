const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://instagram-api.herokuapp.com';

export default { URL };
