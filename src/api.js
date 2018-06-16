/**
 * Created by suzanne on 5/22/18.
 */
let API_URL = ''
//this could be an env variable as well
if (process.env.NODE_ENV === 'production' ){
   API_URL = '/api/resources/'
} else {
   API_URL = 'http://localhost:3001/api/resources/'
}



// export async function getResources () {
//   return fetch(API_URL)
//     .then(resp => {
//       if (!resp.ok) {
//         if (resp.status >= 400 && resp.status < 500) {
//           return resp.json().then(data => {
//             let err = {errorMessage: data.message}
//             throw err
//           })
//         } else {
//           let err = {errorMessage: 'Please try again later, the server is not responding'}
//           throw err
//         }
//       }
//       return resp.json()
//     })
//     }

// export  function getResources () {
//   fetch(API_URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (myJson) {
//       console.log(myJson);
//     });
// }
export function getResources () {
  fetch(API_URL)
    .then(response => response.json())
    .then(json => json)
}

//
// export async function getOneResource (id) {
//   const getURL = API_URL + id
//   console.log("API is fetching " + getURL)
//   return fetch(getURL)
//     .then(resp => {
//       if (!resp.ok) {
//         if (resp.status >= 400 && resp.status < 500) {
//           return resp.json().then(data => {
//             let err = {errorMessage: data.message}
//             throw err
//           })
//         } else {
//           let err = {errorMessage: 'Please try again later, the server is not responding'}
//           throw err
//         }
//       }
//       return resp.json()
//     })
// }

export async function createResource(resource){
  const postURL = API_URL
  return  fetch(postURL, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({resource: resource})
  })
    .then(resp => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message}
            throw err
          })
        } else {
          let err = {errorMessage: 'Please try again later, the server is not responding'}
          throw err
        }
      }
      return resp.json()
    })
}