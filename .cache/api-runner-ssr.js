var plugins = [{
      plugin: require('/Users/nickyevers/Desktop/WEB/PERSONAL-PROJECTS/steady-hand-tea/node_modules/gatsby-plugin-favicon/gatsby-ssr'),
      options: {"plugins":[],"logo":"./public/assets/img/tea-favicon.png","appName":null,"appDescription":null,"developerName":null,"developerURL":null,"dir":"auto","lang":"en-US","background":"#fff","theme_color":"#fff","display":"standalone","orientation":"any","start_url":"/?homescreen=1","version":"1.0"},
    },{
      plugin: require('/Users/nickyevers/Desktop/WEB/PERSONAL-PROJECTS/steady-hand-tea/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-134726933-2","head":true},
    },{
      plugin: require('/Users/nickyevers/Desktop/WEB/PERSONAL-PROJECTS/steady-hand-tea/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
