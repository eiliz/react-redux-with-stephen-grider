import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ba21ca8ee8a64528e59c6c5f6fda1f32b8200e556549ea027479655f169fd25c'
  }
});
