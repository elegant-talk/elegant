## References

### Patreon API Exports
* [patreon: api is incorrect: babel compiles `export default` to `module.exports.default`](https://github.com/Patreon/patreon-js/issues/4)


### ES6 Modules in Node
* [node wg: NG Modules](https://github.com/nodejs/NG/issues/5)
* [node wg: ES6 module interop issue](https://github.com/nodejs/node-eps/pull/3)
* [node wg: ES module detection issue](https://github.com/nodejs/node-eps/issues/13)
* [node wg: ES module detection summary](https://github.com/nodejs/node/wiki/ES6-Module-Detection-in-Node)

* [node wg: Supporting multiple node versions in a single package](https://github.com/nodejs/node/issues/3993)
* [node wg: npm and iojs with new es6 features](https://github.com/nodejs/node/issues/269)


### Classes Interop
* https://github.com/balupton/babel-extend-native-class-issue
* https://github.com/balupton/javascript-coffeescript-class-interop


### Node 0.10 / for...of
* [babel bug report](https://phabricator.babeljs.io/T6987) <-- this is the crux
  * [forof in extendr broke node 0.10 support, breaking taskgroup, breaking safeps, breaking lazy-require](https://github.com/bevry/lazy-require/issues/6)
    * [extendr forof removal](https://github.com/bevry/extendr/commit/8c0bb253915ab68c65f99863284ea03af74be589#diff-c60c67bd505d9618ebf77a7f130903d0L9)
  * [forof in typechecker broke node 0.10 support, breaking extract-opts, breaking cson](https://github.com/bevry/cson/issues/68)
    * [typechecker forof removal](https://github.com/bevry/typechecker/commit/72321e8e2ce98bdfebddb05f347e1511b57293fc#diff-105fa7fd0d9a64ffb6c375deccf3d510L30)
  * [forof in extract-opts broke node 0.10 support, breaking cson, breaking meteor](https://github.com/bevry/cson/pull/69)
    * [extract-opts forof removal](https://github.com/bevry/extract-opts/commit/bfb63aed7fe9472149a4b63db7d6192d86792da1#diff-b8c3b893ab08e2f4e005cda989ce998bL29)
* [solution options discussion](https://github.com/bevry/base/issues/20)
  * [legacy es5 forof plugin](https://github.com/webconnex/babel-plugin-for-of-array-only/issues/1)
  * [loose mode introduction](http://www.2ality.com/2015/12/babel6-loose-mode.html)
  * [loose mode forof configuration](http://babeljs.io/docs/plugins/transform-es2015-for-of/)
  * [loose mode preset](https://github.com/bkonkle/babel-preset-es2015-loose)
  * [babel polyfill](https://babeljs.io/docs/usage/polyfill/)


### Node 0.10 / meteor
* [meteor <v1.4 uses node 0.10 and cson](https://github.com/bevry/cson/pull/69#issuecomment-171873371)
* [meteor finally upgraded from node 0.10 to node 4 only on 25th July 2016 with v1.4](https://github.com/meteor/meteor/issues/5124), [pull request](https://github.com/meteor/meteor/pull/7218), [announcement](http://info.meteor.com/blog/announcing-meteor-1.4)


### React
* https://github.com/balupton/minimal-react
* https://gitlab.com/balupton/keybase-assignment
* https://gitlab.com/balupton/tesla-configurator
  * [webpack to rollup](https://gitlab.com/balupton/tesla-configurator/commit/d07bfb3f627339a47246425bb0378578a4529fff)


### Webpack
* [rollup-plugin-commonjs: babel-converted module with default comes out wrong](https://github.com/rollup/rollup-plugin-commonjs/issues/29#issuecomment-213552619)
* [react-refetch: default vs named exports cause error in rollup](https://github.com/heroku/react-refetch/issues/114)
* [react-refetch: no compiled version of react-refetch provided](https://github.com/heroku/react-refetch/issues/56)

* [react-element-to-jsx-string: sortobject update (1.1.0) broke webpack](https://github.com/algolia/react-element-to-jsx-string/issues/25)
* [sortobject: Problem with 1.1.0 release (with webpack)](https://github.com/bevry/sortobject/issues/3)


These could assist with a webpack editions plugin:

- https://github.com/babel/babel-loader
- https://github.com/webpack/component-webpack-plugin
- http://webpack.github.io/docs/list-of-plugins.html#defineplugin


### Rolllup
* [rollup: Isn’t jsnext:main too broad?](https://github.com/rollup/rollup/issues/337)
* [react-refetch: Can't seem to get to work with rollup](https://github.com/heroku/react-refetch/issues/114)
* [rollup-plugin-commonjs: babel-converted module with default comes out wrong](https://github.com/rollup/rollup-plugin-commonjs/issues/29)

These could assist with a rollup editions plugin:

- https://github.com/calvinmetcalf/rollup-plugin-auto-transform
- https://github.com/rollup/rollup-plugin-node-resolve
- http://webpack.github.io/docs/list-of-plugins.html#defineplugin


### JSPM
* [domain-browser: add jspm configuration](https://github.com/bevry/domain-browser/pull/7)
