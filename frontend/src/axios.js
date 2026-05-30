import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000', // Change if your backend URL differs
});
