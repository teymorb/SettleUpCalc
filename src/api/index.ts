import axios from 'axios'

export default class Api {
    baseURI: string = 'https://settleup.earth/'

    async get(url: string){
       const response = await axios.get(`${this.baseURI}${url}`)
       return response.data
     }

    async post(url: string, data: { [key: string]: any }){
        const response = await axios.post(`${this.baseURI}${url}`, data ? data : null)
        return response.data
    }

    async put(url: string, data: { [key: string]: any }){
      const response =await axios.put(`${this.baseURI}${url}`, data ? data : null)
      return response.data
    }
}