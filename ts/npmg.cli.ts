import * as plugins from './npmg.plugins'
import * as npmgInstall from './npmg.install'

let npmgSmartcli = new plugins.smartcli.Smartcli()

export let run = async () => {
  npmgSmartcli.addCommand('install').then(async (argvArg) => {
    npmgInstall.install('default')
  })
  npmgSmartcli.startParse()
}