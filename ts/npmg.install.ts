import plugins = require('./npmg.plugins');
import paths = require('./npmg.paths');

let installExec = async (packageNames: string[]) => {
  let installString = ''
  for (let packageName of packageNames) {
    installString = installString + `${packageName} `
  }
  await plugins.smartshell.exec(`yarn global remove ${installString}`)
  for (let packageName of packageNames) {
    plugins.beautylog.info(`now preparing ${packageName}`)
    await plugins.smartshell.exec(`yarn global remove ${packageName}`)
  }
  await plugins.smartshell.exec(`yarn global add ${installString}`)
}

let packageLibrary = plugins.smartfile.fs.toObjectSync(
  plugins.path.join(paths.packageBase, 'package_library.json')
);

export let install = async (packageSetArg: String) => {
  switch (packageSetArg) {
    case 'default':
      await installExec(packageLibrary.default)
      break
    default:
      plugins.beautylog.warn('no set has been specified');
      break
  }
}
