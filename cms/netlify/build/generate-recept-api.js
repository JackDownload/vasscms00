import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateReceptApi = () => {
  const contentDir = `${rootDir}/content/receptek`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/receptek.json`
  const metaFile = `${apiDir}/receptek-meta.json`
  const pages = siteConfig.receptek.perPage
  const doneMessage = `{totalNumber} receptek generated in receptek API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/receptek`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateReceptApi
