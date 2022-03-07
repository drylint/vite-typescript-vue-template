import fs from 'fs'
export default (rootAbPath: string, VITE_APP_RUN_APPS?: string): Record<string, string> => {
  // 获取实际存在的所有应用列表
  const appFileList = fs.readdirSync(rootAbPath).filter(item => item.endsWith('.html'))
  const appNameList = appFileList.map(fileName => fileName.replace(/.html$/u, ''))
  console.log('发现的应用列表: ', appNameList)
  const customRunApps = VITE_APP_RUN_APPS ? VITE_APP_RUN_APPS.split(/\s*,\s*/iu).filter(Boolean) : null
  console.log('指定运行的应用列表: ', customRunApps)
  // 获取指定构建的应用列表，若未指定，默认构建所有应用
  const runApps = customRunApps ?? appNameList
  // 指定的应用列表中，哪些是有效指定
  const existAppList = runApps.filter(runApp => appNameList.includes(runApp))
  const rollupInput: Record<string, string> = {}
  if (!existAppList.length) {
    throw new Error('指定构建的应用均不存在！')
  }
  console.log('当前构建的应用列表: ', existAppList)
  existAppList.forEach(appName => {
    rollupInput[appName] = `${rootAbPath}/${appName}.html`
  })
  return rollupInput
}
