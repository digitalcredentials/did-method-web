mkdir ./dist/esm

cat >dist/esm/index.js <<!EOF
import cjsModule from '../index.js';
export const createFromMultibase = cjsModule.createFromMultibase;
export const driver = cjsModule.driver;
export const DidWebDriver = cjsModule.DidWebDriver;
export const didUrlToHttpsUrl = cjsModule.didUrlToHttpsUrl;
export const httpsUrlToDidUrl = cjsModule.httpsUrlToDidUrl;
!EOF

cat >dist/esm/package.json <<!EOF
{
  "type": "module"
}
!EOF
