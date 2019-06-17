import { expect, tap } from '@pushrocks/tapbundle';

import * as tools from '../ts/tools.install';


tap.test("should install default list globally when parsed 'default' as argument", async () => {
  await tools.install('default');
});

tap.start();
