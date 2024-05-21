import axios from 'axios';

import type { AxiosInstance } from 'axios';

class Api {
  baseURL: string;
  axiosInstance: AxiosInstance;

  constructor() {
    this.baseURL = 'http://localhost:5108/api';
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  async get(url: string) {
      const response = await this.axiosInstance.get(url);
      return response;
  }

  async post(url: string, data: any) {
      const response = await this.axiosInstance.post(url, data);
      return response;
  }
}

export default Api;
