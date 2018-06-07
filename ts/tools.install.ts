import plugins = require('./tools.plugins');
import paths = require('./tools.paths');

const installExec = async (packageNames: string[]) => {
  let installString = '';
  for (let packageName of packageNames) {
    installString = installString + `${packageName} `;
  }
  await plugins.smartshell.exec(`yarn global remove ${installString}`);
  for (let packageName of packageNames) {
    plugins.beautylog.info(`now preparing ${packageName}`);
    plugins.beautylog.log(`Installing ${packageName}`);
  }
  await plugins.smartshell.exec(`npm install -g ${installString}`);
};

let packageLibrary = plugins.smartfile.fs.toObjectSync(
  plugins.path.join(paths.packageBase, 'package_library.json')
);

export const install = async (packageSetArg: String) => {
  switch (packageSetArg) {
    case 'default':
      await installExec(packageLibrary.default);
      break;
    default:
      plugins.beautylog.warn('no set has been specified');
      break;
  }
};
