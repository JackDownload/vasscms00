import generatePostApi from '../build/generate-post-api'
import generateCategoryApi from '../build/generate-category-api'
import generateCategoryApi from '../build/generate-page-api

export default () => {
  generatePostApi()
  generateCategoryApi()
  generatePageApi()
}
