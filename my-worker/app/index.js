import { linksToReturn } from './linkObjects'
import { handleFetch } from './fetchHTML'
addEventListener('fetch', event => {
  console.log('Handling fetch event for', event.request.url)
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  if (request.url.endsWith('/links')) {
    return new Response(JSON.stringify(linksToReturn), {
      headers: { 'content-type': 'application/json;charset=UTF-8' },
    })
  }
  return handleFetch()
}
