import axios from 'axios'

const api = axios.create({ baseURL: 'https://jsonplaceholder.cypress.io' })

export default api