import generatePostApi from '../build/generate-post-api'
import generateCategoryApi from '../build/generate-category-api'
import generateCategoryApi from '../build/generate-page-api
import generateCategoryApi from '../build/generate-recept-api

export default () => {
  generatePostApi()
  generateCategoryApi()
  generatePageApi()
  generateReceptApi()
}
