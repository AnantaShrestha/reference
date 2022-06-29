require('./bootstrap');


axios.defaults.withCredentials = true
axios.defaults.baseURL= 'http://developed.test/api/'
let getToken=localStorage.getItem('token')
if(getToken){
    let token=JSON.parse(getToken).token
    if(token){
      axios.defaults.headers.common['Authorization'] =`Bearer ${token}` 
    }
}

import Api from './core/api'
window.Api = new Api

require('./main')