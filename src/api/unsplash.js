import axios from 'axios';

export default axios.create({
  headers: {
    Authorization:
      'Client-ID b61f848aac0c4a23d04e581f1b5268e534def253110df2cf76195356e8565c83'
  },
  baseURL: 'https://api.unsplash.com'
});
