import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateRecipeApi = () => {
  const contentDir = `${rootDir}/content/recipes`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/recipes.json`
  const metaFile = `${apiDir}/recipes-meta.json`
  const pages = siteConfig.recipes.perPage
  const doneMessage = `{totalNumber} recipes generated in recipes API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/recipes`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateRecipeApi
