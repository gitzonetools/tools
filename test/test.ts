import { expect, tap } from '@pushrocks/tapbundle';

import * as npmgInstall from '../ts/tools.install';
import * as smartenv from '@pushrocks/smartenv';

let environment = new smartenv.Smartenv();

tap.test("should install default list globally when parsed 'default' as argument", async () => {
  await npmgInstall.install('default');
});

tap.start();
