# Compatibility

## For...Of

### CoffeeScript to ES5

Source code:

``` coffeescript
items = ['a', 'b', 'c']
for item in items
  console.log(item)
```

Compiled code:

``` javascript
var i, item, items, len;

items = ['a', 'b', 'c'];

for (i = 0, len = items.length; i < len; i++) {
  item = items[i];
  console.log(item);
}
```

#### Compatibility

Compatible with all JavaScript / Node.js / Browser versions.


### Babel to ES2015

Source code:

``` javascript
const items = ['a', 'b', 'c']
for ( const item of items ) {
	console.log(item)
}
```

Compiled code:

``` javascript
'use strict';

var items = ['a', 'b', 'c'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var item = _step.value;

		console.log(item);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}
```

#### Compatibility

Drops Internet Explorer and Edge compatibility:

> ![Screenshot of broken Internet Explorer compatibility](https://cloud.githubusercontent.com/assets/61148/18032614/8c13b884-6d3c-11e6-9bec-17d47c574c84.png) [Test script.](http://balupton.com/misc/babelforof.html)

Also drops Node 0.10 compatibility:

> ![Screenshot of broken Node 0.10 compatibility](https://cloud.githubusercontent.com/assets/61148/18032686/c2ea3f88-6d3f-11e6-8826-93ee0c2cc15f.png)

Corroborates with [Mozilla Developer's Network's symbol compatibility table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility):

> ![Screenshot of Mozilla Developer's Network compatibility table](https://cloud.githubusercontent.com/assets/61148/18032624/e3d06798-6d3c-11e6-9b9f-c7ca5df3c47a.png)

Node 0.12 compatibility likely came with [Google Chrome 36.0.1985](https://en.wikipedia.org/wiki/Google_Chrome_release_history) and [V8 3.25](https://github.com/v8/v8/blob/933195a24c08ed373397c083191a7a5d7f93f7c8/ChangeLog#L8806-L8815):

> ![Screenshot of Chrome 36.0.1985 changelog entry](https://cloud.githubusercontent.com/assets/61148/18032638/7224ea00-6d3d-11e6-8cac-c4a9d9e6d5e1.png)

``` shell
$ nvm use 0.10
Now using node v0.10.46 (npm v2.15.1)
$ node -e 'console.log(process.versions.v8);'
3.14.5.9

$ nvm use 0.12
Now using node v0.12.15 (npm v2.15.1)
$ node -e 'console.log(process.versions.v8);'
3.28.71.19

$ nvm use 4
Now using node v4.5.0 (npm v2.15.9)
$ node -e 'console.log(process.versions.v8);'
4.5.103.37
```


#### Solution

On Node 0.10, using a `try..catch` around the ES2015 edition, with a fallback to the ES5 edition ES5, was not enough, as V8 would forcefully output the following to stderr:

```
node_modules/cson/node_modules/extract-opts/node_modules/typechecker/es6/lib/typechecker.js:29
	for ( let type of types ) {
```

Arising in [this error report](https://github.com/bevry/cson/issues/68 "cson: package.json node engine >=0.8 might be incorrect") in the [CSON package](https://www.npmjs.com/package/cson).

The offending `for...of` loop existed in the [typechecker dependency](https://www.npmjs.com/package/typechecker), which in [v4.0.0](https://github.com/bevry/typechecker/commit/72321e8e2ce98bdfebddb05f347e1511b57293fc#diff-105fa7fd0d9a64ffb6c375deccf3d510L30) was converted to the ES5 `for;;` loop:

``` javascript
for ( let type of types ) {
  /* iterate through an array */
}
```

``` javascript
for ( let i = 0, n = types.length, type; i < n; ++i ) {
  /* iterate through an array */
}
```

> However, what if you actually wanted to support symbols properly on ES6 environments? Well, you would need symbols, so you would run into the same issue, unless you didn't bother requiring ES6 code on ES5 environments, but that would involve pre-emptive detection.

The edition autoloader [esnextguardian](https://www.npmjs.com/package/esnextguardian) implements pre-emptive detection by checking the v8 version if it exists, thus avoiding the problematic loading ES6 code on ES5 environments that caused the stderr message. It works via [this check](https://github.com/bevry/esnextguardian/blob/v1.2.1/lib/index.js#L28-L29):

``` javascript
if ( process.versions.v8 && process.versions.v8.split('.')[0] < 4 ) {
  /* load ES5 version without trying ES6 version */
}
else {
  /* attempt to load ES6 version, otherwise fallback to ES5 version */
}
```
