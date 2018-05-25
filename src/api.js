/**
 * Created by suzanne on 5/22/18.
 */

const API_URL = 'http://localhost:3001/api/resources/' //this could be an env variable as well



export async function getResources () {
  return fetch(API_URL)
    .then(resp => {
      // if (!resp.ok) {
      //   if (resp.status >= 400 && resp.status < 500) {
      //     return resp.json().then(data => {
      //       let err = {errorMessage: data.message}
      //       throw err
      //     })
      //   } else {
      //     let err = {errorMessage: 'Please try again later, the server is not responding'}
      //     throw err
      //   }
      // }
      return resp.json()


    })
    }

export async function getOneResource (id) {
  return fetch(API_URL + id)
    .then(resp => {
      // if (!resp.ok) {
      //   if (resp.status >= 400 && resp.status < 500) {
      //     return resp.json().then(data => {
      //       let err = {errorMessage: data.message}
      //       throw err
      //     })
      //   } else {
      //     let err = {errorMessage: 'Please try again later, the server is not responding'}
      //     throw err
      //   }
      // }
      return resp.json()


    })
}