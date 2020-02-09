import { getMixins } from './mixins'

class Recipe {
  constructor(axios) {
    this.slug = 'recipe'
    this.slugPlural = 'recipes'
    this.pretty = 'Recipe'
    this.plural = 'Recipes'
    this.axios = axios
    this.editUrl = '/admin/#/collections/recipes/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Recipe.prototype, getMixins)

export default Recipe
