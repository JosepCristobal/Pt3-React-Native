import axios from 'axios'

//https://images-api.nasa.gov/search?q=Atlantis%20landing%2009
// DOC https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
const BASE_URL = 'https://images-api.nasa.gov'

export function configureAxios() {
    console.log('AXIOS configurado correctamente')
    axios.defaults.baseURL = BASE_URL
}

export function fetchData() {
    const url = '/search?q=Atlantis%20landing%2009'
    return axios.get(url)
}

export function fetchDataDetail(nasaId) {
    const url = `/asset/${nasaId}`
    return axios.get(url)
}
