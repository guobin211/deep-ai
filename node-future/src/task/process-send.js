/**
 * process-send
 *
 * @author GuoBin on 2019-06-30
 */
'use strict';
(async function () {
  process.send('async function send data');
  setTimeout(() => {
    process.send('timeout 2s send data');
    process.exit(0);
  }, 2000);
})();
