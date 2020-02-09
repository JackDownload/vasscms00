import { getMixins } from './mixins'

class Page {
  constructor(axios) {
    this.slug = 'page'
    this.slugPlural = 'pages'
    this.pretty = 'Page'
    this.plural = 'Posts'
    this.axios = axios
    this.editUrl = '/admin/#/collections/posts/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Page.prototype, getMixins)

export default Page
