import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateReceptApi = () => {
  const contentDir = `${rootDir}/content/receptek`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/receptek.json`
  const metaFile = `${apiDir}/receptek-meta.json`
  const receptek = siteConfig.receptek.perRecept
  const doneMessage = `{totalNumber} receptek generated in receptek API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalReceptek = createPagination(receptek, all, `${apiDir}/receptek`)
      createMeta({ totalReceptek: totalReceptek }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateReceptApi
