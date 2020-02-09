import { getMixins } from './mixins'

class Recept {
  constructor(axios) {
    this.slug = 'recept'
    this.slugPlural = 'receptek'
    this.pretty = 'Recept'
    this.plural = 'Receptek'
    this.axios = axios
    this.editUrl = '/admin/#/collections/receptek/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Recept.prototype, getMixins)

export default Recept
