import Post from './post'
import Category from './category'
import LifeCycleHooks from './hooks/lifeCycle'
import Recept from './recipe'

class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.post = new Post(axios)
    this.category = new Category(axios)
    this.recipe = new Recipe(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
