This repo is a minimal repro case for an issue I am running into with Jest,
ESLint, and Node 6.

To run this, make sure you are on Node 6, clone this repo, and run `npm
install`.

If you run `node index.js` you'll noticed that everything works just fine. If
you run `npm test`, we end up with an error like:

```
Using Jest CLI v12.1.0, jasmine2
 FAIL  __tests__/index-test.js
● Runtime Error
  - TypeError: Cannot read config file: /Users/joe/jest-eslint-node6-bug/.eslintrc.js
    Error: Path must be a string. Received undefined
        at assertPath (path.js:7:11)
        at Object.dirname (path.js:1324:5)
        at module.exports (node_modules/require-uncached/index.js:11:34)
        at loadJSConfigFile (node_modules/eslint/lib/config/config-file.js:161:16)
        at loadConfigFile (node_modules/eslint/lib/config/config-file.js:200:22)
        at Object.load (node_modules/eslint/lib/config/config-file.js:494:18)
        at loadConfig (node_modules/eslint/lib/config.js:64:33)
        at getLocalConfig (node_modules/eslint/lib/config.js:126:23)
        at Config.getConfig (node_modules/eslint/lib/config.js:227:22)
        at CLIEngine.getConfigForFile (node_modules/eslint/lib/cli-engine.js:777:29)
1 test suite failed, 0 tests passed (0 total in 1 test suite, run time 0.823s)
```

This problem goes away if you rename `.eslintrc.js` to `.eslintrc` and convert
it to JSON (remove `module.exports =`).

This problem seems to affect Node 6.0.0+.
