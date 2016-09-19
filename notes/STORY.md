## STORY

### Library

We wrote [CSON](https://www.npmjs.com/package/cson) (CoffeeScript Object Notation). Some of its dependency tree:

* [extract-opts](https://www.npmjs.com/package/extract-opts) (for extracting options and completion callback from arguments)
  * [typechecker](https://www.npmjs.com/package/typechecker) (for type checking)

As part of routine maintenance of our packages, we commenced migration of them from CoffeeScript to ESNext for performance, debugging and contribution improvements. [Reasoning.](https://discuss.bevry.me/t/move-from-coffeescript-to-es6/)

### Conversions

These migrations contained these seemingly harmless conversions.

[extract-opts v3.1.0](https://github.com/bevry/extract-opts/commit/d1aa3a9b172406cdbca2c8d6f6300545e671c9b1#diff-b8c3b893ab08e2f4e005cda989ce998bR29), compiled with Babel 6 and the ES2015 preset:

``` coffeescript
for completionCallbackName in config.completionCallbackNames
```

``` javascript
for ( const completionCallbackName of config.completionCallbackNames ) { /* ... */ }
```

[typechecker v2.1.0](https://github.com/bevry/typechecker/commit/2add790724c1ce2bd0d8b89df039259d5816099c#diff-1abe56727e98abe859b86ac1576e08ceL28), compiled with Babel 5 and the ES2015 preset:

``` coffeescript
for type in types
```

``` javascript
for ( let type of types ) { /* ... */ }
```
