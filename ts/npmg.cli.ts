import * as plugins from './npmg.plugins'
import * as install from './npmg.install'

let npmgSmartcli = new plugins.smartcli.Smartcli()

export let run = async () => {
  npmgSmartcli.addCommand('install').then(async (argvArg) => {

  })
}