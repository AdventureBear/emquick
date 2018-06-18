/**
 * Created by suzanne on 5/22/18.
 */
const log = require('./helpers/logger')('api')

const port = process.env.REACT_APP_BACKEND_PORT || 8080

const API_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${port}/api/resources/`
    : '/api/resources/'

export async function getResources() {
  // return fetch(API_URL).then((resp) => {
  //   if (!resp.ok) {
  //     if (resp.status >= 400 && resp.status < 500) {
  //       return resp.json().then((data) => {
  //         const err = { errorMessage: data.message }
  //         throw err
  //       })
  //     }
  //     const err = {
  //       errorMessage: 'Please try again later, the server is not responding',
  //     }
  //     throw err
  //   }
  //   return resp.json()
  // })

  try {
    log.info('attempting to fetch resources from:', API_URL)

    const resp = await fetch(API_URL)

    if (!resp.ok) {
      log.warn(`received '${resp.statusText}' response from server`, resp)
      return { ok: resp.ok, status: resp.status }
    }

    const json = await resp.json()
    log.info('extracted body text from server response:', json)

    /**
     * we need to add the ok prop back to the json response
     * since we are handling this error with react
     */
    return { ...json, ok: true }
  } catch (e) {
    return log.error('critical error fetching resources:', e)
  }
}

export async function getOneResource(id) {
  const getURL = API_URL + id

  return fetch(getURL).then((resp) => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then((data) => {
          const err = { errorMessage: data.message }
          throw err
        })
      }
      const err = {
        errorMessage: 'Please try again later, the server is not responding',
      }
      throw err
    }
    return resp.json()
  })
}

export async function createResource(resource) {
  const postURL = API_URL
  return fetch(postURL, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ resource }),
  }).then((resp) => {
    if (!resp.ok) {
      if (resp.status >= 400 && resp.status < 500) {
        return resp.json().then((data) => {
          const err = { errorMessage: data.message }
          throw err
        })
      }
      const err = {
        errorMessage: 'Please try again later, the server is not responding',
      }
      throw err
    }
    // console.log(resp.json())
    return resp.json()
  })
}
