
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "D:/Code/starblast-modding-guide/app.config.ts"
import cfg1 from "D:/Code/starblast-modding-guide/node_modules/@nuxt-themes/docus/app.config.ts"
import cfg2 from "D:/Code/starblast-modding-guide/node_modules/@nuxt-themes/typography/app.config.ts"
import cfg3 from "D:/Code/starblast-modding-guide/node_modules/@nuxt-themes/elements/app.config.ts"

export default /*@__PURE__*/ defuFn(cfg0, cfg1, cfg2, cfg3, inlineConfig)