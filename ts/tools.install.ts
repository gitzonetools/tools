import plugins = require('./tools.plugins');
import paths = require('./tools.paths');
import { logger } from './tools.logging';

const installExec = async (packageNames: string[]) => {
  const smartshellInstance = new plugins.smartshell.Smartshell({
    executor: 'bash'
  });

  let installString = '';
  for (const packageName of packageNames) {
    logger.log('info', `Found ${packageName}!`);
    installString = installString + `${packageName} `;
  }
  // lets remove old packages
  const uninstallCommand = `npm uninstall -g ${installString}`;
  const installCommand = `npm install -g ${installString}`;
  logger.log('info', `uninstalling old packages with "${uninstallCommand}"`);
  await smartshellInstance.exec(uninstallCommand);
  logger.log('info', `installing tools with ${installCommand}`);
  await smartshellInstance.exec(installCommand);
  logger.log('ok', `installed tools successfully!`);
};

const packageLibrary = plugins.smartfile.fs.toObjectSync(
  plugins.path.join(paths.assetsDir, 'package_library.json')
);

export const install = async (packageSetArg: string) => {
  switch (packageSetArg) {
    case 'default':
      await installExec(packageLibrary.default);
      break;
    default:
      logger.log('warn', 'no set has been specified');
      break;
  }
};
