# Elegant Talk Walkthrough



Dutch for `elegant`, is `sierlijk` - perhaps can use this for coded talk, so `foreach-sierlijk` as npm no longer lets you publish over things, or unpublish things.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of - for…of doesn't give keys, so not useful for foreach example… unless we are using it for an easier way of iterating through maps, but node 0.10 doesn't have maps, so no point, right?

* http://devdocs.io/javascript/global_objects/object/hasownproperty
* http://devdocs.io/javascript/global_objects/object/getownpropertynames
* http://devdocs.io/javascript/global_objects/object/keys
* [Why is Object.keys faster than hasOwnProperty?](http://stackoverflow.com/a/30326601/130638)
* [esnext-benchmarks](https://github.com/bevry/esnext-benchmarks) - [results](https://travis-ci.org/bevry/esnext-benchmarks/jobs/138680871)


``` javascript
for ( var key in list ) {
    value = list[key]
    if ( iterator.call(list, value, key, list) === false ) {
        return false
    }
}

for ( const key in list ) {
    if ( list.hasOwnProperty(key) ) {
        value = list[key]
        if ( iterator.call(list, value, key, list) === false ) {
            return false
        }
    }
}

for ( const key of Object.keys(list) ) {
    value = list[key]
    if ( iterator.call(list, value, key, list) === false ) {
        return false
    }
}


for ( let i = 0, keys = Object.keys(list); i < keys.length; ++i ) {
    const key = keys[key]
    const value = list[key]
    if ( iterator.call(list, value, key, list) === false ) {
        return false
    }
}
```



## 01 Create Package

1. https://github.com/new
   1. Select owner: `elegant-talk`
   2. Type repo name: `foreach-elegant`
   3. Type description: `An elegant foreach loop that handles objects and arrays`
   4. Init with readme
      * Saves time
        * Generates basic prefilled `README.md` file with title and description
      * Missing
        * Installation
        * Usage
        * License
      * Extras
        * Badges
        * Contributing
        * History
   5. Select node .gitignore
      * Saves time
        * Generates  basic `.gitignore` file for selected language
   6. Select MIT license
      * Saves time
        * Generates `LICENSE` file with copyright details being current year and organisation name (fallback to organisation username if organisation name not defined)
      * Missing
        * Organisation URL
        * Organisation Email
      * Extras
        * Multiple licenses
2. Clone repository
   1. `cd ~/Projects`
   2. `git clone https://github.com/elegant-talk/foreach-elegant.git`
   3. cd `foreach-elegant`
3. [NPM Init](https://docs.npmjs.com/cli/init)
   1. name [default]
   2. version [default]
   3. description [copy paste]
   4. entry point [default]
   5. test command [skip]
   6. git repository [default]
   7. keywords
   8. author
   9. license
   10. confirm
4. Create
   1. `touch index.js`
   2. `edit .`
   3. write `index.js`
   4. update `README.md` with
      1. install instructions
      2. usage instructions
      3. license details

## 02 Publish

1. `npm login`
2. `npm publish`
3. `git commit -a -m "v1.0.0. Initial working release."`
4. `git tag v1.0.0`
5. `git push origin master`
6. `git push origin —tags`


## Meteor

``` shell
# meteor
git clone --recursive git://github.com/meteor/meteor.git --branch release/METEOR@1.3.5.1 --single-branch
cd meteor
./meteor --help
cd ..

# app
./meteor-1.3/meteor create app-meteor-1.3
cd app-meteor-1.3
../meteor-1.3/meteor
open http://localhost:3000/
```
