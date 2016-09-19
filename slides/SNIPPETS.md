# Code Snippets

## Readme

``` markdown
# foreach-elegant

An elegant foreach loop that handles objects and arrays

## Install

    npm install --save foreach-elegant

## Usage

    var foreach = require('foreach-elegant')
    function iterator (value, key, list) {
        console.log('received', key, '=', value, 'from', list)
        if ( key === 'b' || value === 'y' ) {
            console.log('ending iteration early')
            return false
        }
    }

    foreach({a:1, b:2, c:3}, iterator)
    foreach(['x', 'y', 'z'], iterator)

    foreach({a:1, c:3}, iterator)
    foreach(['x', 'z'], iterator)

## License

MIT
```

``` markdown
<!-- TITLE -->

<!-- BADGES -->

<!-- DESCRIPTION -->

<!-- INSTALL -->

## Usage

    var foreach = require('foreach-elegant')
    function iterator (value, key, list) {
        console.log('received', key, '=', value, 'from', list)
        if ( key === 'b' || value === 'y' ) {
            console.log('ending iteration early')
            return false
        }
    }

    foreach({a:1, b:2, c:3}, iterator)
    foreach(['x', 'y', 'z'], iterator)

    foreach({a:1, c:3}, iterator)
    foreach(['x', 'z'], iterator)

<!-- HISTORY -->

<!-- BACKERS -->

<!-- LICENSE -->
```

``` markdown
<!-- TITLE/ -->

<h1>foreach-elegant</h1>

<!-- /TITLE -->


<!-- BADGES/ -->



<!-- /BADGES -->


<!-- DESCRIPTION/ -->

A foreach that supports arrays and objects, provides the value and key/index, as well as break support on return false

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>NPM</h3></a><ul>
<li>Install: <code>npm install --save foreach-elegant</code></li>
<li>Module: <code>require('foreach-elegant')</code></li></ul>

<!-- /INSTALL -->


## Usage

    var foreach = require('foreach-elegant')
    function iterator (value, key, list) {
        console.log('received', key, '=', value, 'from', list)
        if ( key === 'b' || value === 'y' ) {
            console.log('ending iteration early')
            return false
        }
    }

    foreach({a:1, b:2, c:3}, iterator)
    foreach(['x', 'y', 'z'], iterator)

    foreach({a:1, c:3}, iterator)
    foreach(['x', 'z'], iterator)

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/bevry/foreach-elegant/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

No maintainers yet! Will you be the first?

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?



<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/foreach-elegant/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/foreach-elegant">view contributions</a></li></ul>



<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2016+ <a href="http://bevry.me">Bevry Pty Ltd</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
```

## Badges

``` javascript
{
  "badges": {
    "list": [
      "travisci",
      "npmversion",
      "npmdownloads",
      "daviddm",
      "daviddmdev",
      "---",
      "slackin",
      "patreon",
      "gratipay",
      "flattr",
      "paypal",
      "bitcoin",
      "wishlist"
    ],
    "config": {
      "patreonUsername": "bevry",
      "gratipayUsername": "bevry",
      "flattrUsername": "balupton",
      "paypalURL": "https://bevry.me/paypal",
      "bitcoinURL": "https://bevry.me/bitcoin",
      "wishlistURL": "https://bevry.me/wishlist",
      "slackinURL": "https://slack.bevry.me"
    }
  },
}
```

``` html
<!-- BADGES/ -->

<!-- /BADGES -->
```

``` html

<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/bevry/projectz" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/bevry/projectz/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/projectz" title="View this project on NPM"><img src="https://img.shields.io/npm/v/projectz.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/projectz" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/projectz.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/bevry/projectz" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/bevry/projectz.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/bevry/projectz#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/bevry/projectz.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-slackin"><a href="https://slack.bevry.me" title="Join this project's slack community"><img src="https://slack.bevry.me/badge.svg" alt="Slack community badge" /></a></span>
<span class="badge-patreon"><a href="http://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-gratipay"><a href="https://www.gratipay.com/bevry" title="Donate weekly to this project using Gratipay"><img src="https://img.shields.io/badge/gratipay-donate-yellow.svg" alt="Gratipay donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-bitcoin"><a href="https://bevry.me/bitcoin" title="Donate once-off to this project using Bitcoin"><img src="https://img.shields.io/badge/bitcoin-donate-yellow.svg" alt="Bitcoin donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->
```

## Contributors

``` javascript
{
  "contributors": [
    "Benjamin Lupton <b@lupton.cc> (http://balupton.com)",
    "Peter Flannery (https://github.com/pflannery)",
    "Rob Loach <robloach@gmail.com> (http://robloach.net)",
    "Zearin (https://github.com/Zearin)",
    "vsopvsop (https://github.com/vsopvsop)",
    "Shahar Or <mightyiampresence@gmail.com> (http://mightyi.am)"
  ],
}
```

``` html

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/projectz/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/projectz">view contributions</a></li>
<li><a href="https://github.com/pflannery">Peter Flannery</a> — <a href="https://github.com/bevry/projectz/commits?author=pflannery" title="View the GitHub contributions of Peter Flannery on repository bevry/projectz">view contributions</a></li>
<li><a href="http://robloach.net">Rob Loach</a> — <a href="https://github.com/bevry/projectz/commits?author=RobLoach" title="View the GitHub contributions of Rob Loach on repository bevry/projectz">view contributions</a></li>
<li><a href="https://github.com/Zearin">Zearin</a> — <a href="https://github.com/bevry/projectz/commits?author=Zearin" title="View the GitHub contributions of Zearin on repository bevry/projectz">view contributions</a></li>
<li><a href="https://github.com/vsopvsop">vsopvsop</a> — <a href="https://github.com/bevry/projectz/commits?author=vsopvsop" title="View the GitHub contributions of vsopvsop on repository bevry/projectz">view contributions</a></li>
<li><a href="http://mightyi.am">Shahar Or</a> — <a href="https://github.com/bevry/projectz/commits?author=mightyiam" title="View the GitHub contributions of Shahar Or on repository bevry/projectz">view contributions</a></li></ul>

<a href="https://github.com/bevry/projectz/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->
```

## Compilation

ES5:

``` javascript
var items = ['a', 'b', 'c']
for ( var i = 0, item; i < items.length; i++ ) {
    item = items[i]
    console.log(item)
}
```

CoffeeScript:

``` coffee
items = ['a', 'b', 'c']
for item in items
    console.log(item)
```

CoffeeScript Compiled:

``` javascript
var i, item, items, len;

items = ['a', 'b', 'c'];

for (i = 0, len = items.length; i < len; i++) {
  item = items[i];
  console.log(item);
}
```

ES6:

``` javascript
var items = ['a', 'b', 'c']
for ( var item of items ) {
    console.log(item)
}
```

Babel:

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



## Add editions

``` javascript
{
  "main": "es2015/index.js",
  "browser": "es2015/index.js",
  "scripts": {
    "setup": "npm install",
    "clean": "rm -Rf ./docs ./es2015",
    "compile": "npm run compile:es2015",
    "compile:es2015": "babel ./source --out-dir ./es2015 --presets es2015",
    "meta": "npm run meta:projectz",
    "meta:projectz": "projectz compile",
    "prepare": "npm run compile && npm run test && npm run meta",
    "release": "npm run prepare && npm run release:publish && npm run release:tag && npm run release:push",
    "release:publish": "npm publish",
    "release:tag": "git tag v$npm_package_version -a",
    "release:push": "git push origin master && git push origin --tags",
    "pretest": "npm run test:eslint && npm run test:flow",
    "test:eslint": "eslint ./source",
    "test:flow": "flow check",
    "test": "node ./es2015/test.js"
  },
}
```

## Add editions standard

``` javascript
{
  "editions": [
    {
      "description": "Source + ESNext + Require + Flow Type Comments",
      "entry": "source/index.js",
      "directory": "source",
      "syntaxes": [
        "javascript",
        "esnext",
        "require",
        "const",
        "let",
        "flow type comments"
      ]
    },
    {
      "description": "Babel Compiled + ES2015 + Require",
      "entry": "es2015/index.js",
      "directory": "es2015",
      "syntaxes": [
        "javascript",
        "es2015",
        "require"
      ]
    }
  ],
}
```
