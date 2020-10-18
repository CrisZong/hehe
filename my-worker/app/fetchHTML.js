import { rewriter, rewriter2 } from './linkTransform'
import { showDisplay, setImage, setText, setTitle, setBg } from './helper'
export var url = 'https://static-links-page.signalnerve.workers.dev'
/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
export async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return JSON.stringify(await response.json())
  } else if (contentType.includes('application/text')) {
    return await response.text()
  } else if (contentType.includes('text/html')) {
    return await response.text()
  } else {
    return await response.text()
  }
}

export async function handleFetch() {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  const response = await fetch(url, init)
  const responseWithLink = rewriter.transform(response)
  const displaywriter = new HTMLRewriter().on('div#profile', new showDisplay())
  const responseWithDisplay = displaywriter.transform(responseWithLink)
  const imagewriter = new HTMLRewriter().on('img#avatar', new setImage())
  const responseWithImage = imagewriter.transform(responseWithDisplay)
  const textwriter = new HTMLRewriter().on('h1#name', new setText())
  const responseWithText = textwriter.transform(responseWithImage)
  // extra credits
  const displaywriter2 = new HTMLRewriter().on('div#social', new showDisplay())
  const responseWithDisplay2 = displaywriter2.transform(responseWithText)
  const rewriteResponse = rewriter2.transform(responseWithDisplay2)
  const titlewriter = new HTMLRewriter().on('title', new setTitle())
  const responseWithTitle = titlewriter.transform(rewriteResponse)
  const bgwriter = new HTMLRewriter().on('body', new setBg())
  const responseWithBg = bgwriter.transform(responseWithTitle)
  return responseWithBg
}
