import axios from 'axios'

export default class Api {
    //baseURI: string = 'https://settleup.earth/'
    baseURI: string = 'https://c48a753e-5320-4d32-babc-b216eba72849.mock.pstmn.io' //Mock Postman Server URL

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