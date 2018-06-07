import * as plugins from './tools.plugins';
import * as toolsInstall from './tools.install';

let npmgSmartcli = new plugins.smartcli.Smartcli();

npmgSmartcli.addCommand('install').subscribe(async argvArg => {
  toolsInstall.install('default');
});

npmgSmartcli.addVersion('no version set');
npmgSmartcli.startParse();
