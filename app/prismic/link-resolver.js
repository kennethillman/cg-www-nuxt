/**
 * To learn more about Link Resolving check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/link-resolving
 */

export default function (doc) {

  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'start') {
    return '/'
  }

  if (doc.type === 'case') {
    return '/cases/' + doc.uid
  }

  if (doc.type === 'cases') {
    return '/cases'
  }

  if (doc.type === 'hello') {
    return '/hello'
  }

  if (doc.type === 'expertise') {
    return '/expertise'
  }

  if (doc.type === 'play') {
    return '/playground/' + doc.uid
  }

  if (doc.type === 'page') {
    return '/page/' + doc.uid
  }

  if (doc.type === 'playground') {
    return '/playground'
  }

  return '/not-found'
}
