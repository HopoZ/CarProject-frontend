import axios from 'axios';

export function getData(carNumber) {
    return axios.get('http://82.156.65.122/getData', {
      params: {
        carNumber: carNumber
      }
    });
  }
