
import axios from 'axios'

axios.defaults.withCredentials = true

const instance = axios.create({
  
    baseURL: "https://wastebanktest2.herokuapp.com/",
})

export default instance

