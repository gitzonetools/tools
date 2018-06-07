import { expect, tap } from 'tapbundle';

import * as npmgInstall from '../ts/tools.install';
import * as smartenv from 'smartenv';

let environment = new smartenv.Smartenv();

tap.test("should install default list globally when parsed 'default' as argument", async () => {
  await npmgInstall.install('default');
});

tap.start();
