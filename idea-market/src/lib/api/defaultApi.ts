import axios from 'axios';
import { SERVER } from '../../config/config.json';

const defaultApi = axios.create({
  baseURL: SERVER,
});

export default defaultApi;
