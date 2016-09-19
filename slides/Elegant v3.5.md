# Elegantly Produce & Consume Compiled Packages

By [Benjamin Lupton](https://balupton.com), @balupton

https://balupton.com/elegant















---

## firstly

Founded [Bevry](https://bevry.me), made [DocPad](https://docpad.org)

Node.js developer since v0.3 / 2010

JavaScript-only since 2009

Web developer since 2006

Projects used over time by companies like Adobe, Microsoft, GitHub, Atlassian
… and projects like Atom, Browserify, Basecamp

260 open-source projects on github

180 npm packages

4 million downloads a month

---

Two of them we'll cover in this talk, [projectz](https://npmjs.com/package/projectz) and [editions](https://npmjs.com/package/editions).
Editions now gets 600,000 downloads a month
Projectz we use in [110 packages](https://github.com/search?utf8=✓&q=%22projectz+compile%22+user%3Adocpad+user%3Abevry&type=Code&ref=searchresults)
Editions we use in [38 packages](https://github.com/search?p=1&q=%22editions+description%22+user%3Adocpad+user%3Abevry&ref=searchresults&type=Code&utf8=✓)

---

[3 mins in]

## value

Through maintenance of all these packages, got a battle tested workflow, that saves producers and consumers time, while looking great, and allows for optimum tech.

As a community, package production and consumption is currently suboptimal:

1. wasted time in manually entering and maintaining redundant meta information into readme and package files - name, description, badges
2. this tedium ends up with meta information being inconsistent and incomplete
   1. correct licensing information
   2. consistent and wide installation and usage instructions
   3. tech stack information so consumers are aware for production builds and debugging
   4. source code published and burdens consumers with environment support
   5. compiled code published and provides non-optimal production bundles
3. all of this can be automated and solved

Solution comprises of four independent steps that compliment each other:

1. **a meta builder that automates your meta files**
   1. involves
      1. install and use a meta builder instead of manually writing and maintaining redundant parts of meta files
   2. gains
      1. automates most of setup and maintenance of packages, saving time
      2. less time inside data and meta files, more time inside your code
         1. meta data files: `package.json`, `bower.json`, `component.json`
         2. meta info files: `readme.md`, `contributing.md`, `backers.md`, `license.md`
      3. achieves beautiful, consistent, resourceful, informative meta files
         1. resourceful as pulls in contributor, maintainer data
2. **modern packages should provide at least two editions**
   1. involves
      1. source code for the highest common denominator, and for overrides
      2. compiled code for the lowest common denominator
   2. gains
      1. full-spectrum environment support
      2. optimal production bundles without double compiles
3. **combine the edition standard with a meta builder to inform consumers of editions**
   1. involves
      1. specify `editions` field inside `package.json`
   2. gains
      1. meta builder auto updates readme file to inform consumers of this power
      2. results in less support issues as consumers have power to debug and override
4. **an edition autoloader that automates edition selection for the consumer**
   1. invoves
      1. point `main` to autoloader
      2. point `module` to highest common denominator
      3. point `browser` to lowest common denominator
   2. gains
      1. automatically selects best edition based on consumers environment
      2. consumer can skip and configure autoloader if need be

This combination provides minimal overheads to achieve optimum support.

Same effort for producers.
Less effort for consumers.

Really is optimal.

---

## implementation

### Creation

Let's setup our project for development.

- Title: `foreach-elegant`
- Description:

  >  A foreach that supports arrays and objects, provides the value and key/index, as well as break support on return false

Via [GitHub](https://github.com/new)

- name
- description
- readme
- node `.gitignore`
- license - generated with org name and url

Via [`npm init`](https://docs.npmjs.com/cli/init)

- name
- version
- description
- entry
- test
- git repo
- keywords
- author
- license

Duplicated:

- name
- description
- license

Missing:

- changelog

  ```
  gdown bevry/base/master/HISTORY.md
  ```

- contributing

  ```
  gdown bevry/base/master/CONTRIBUTING.md
  ```

- `.editorconfig`

  ```
  gdown bevry/base/master/.editorconfig
  ```

- `.eslintrc`

  ```
  gdown bevry/base/master/.eslintrc.js
  ```

- `.npmignore`

  ```
  gdown bevry/base/master/.npmignore
  ```

- our `.gitignore`

  ```
  gdown bevry/base/master/.gitignore
  ```



Automate:

- package
  - issues
  - contributors
- readme
  - badges
  - install
  - usage
  - contributing
  - backers
  - history
  - license
    - correct consistent copyright details
- backers
- license
  - correct consitent copyright details


### Code

Let's write our module:

``` javascript
module.exports = function foreachElegant (list, iterator) {
	var key, value
	if ( Array.isArray(list) ) {
		for ( key = 0; key < list.length; ++key ) {
			value = list[key]
			if ( iterator.call(list, value, key, list) === false ) {
				return false
			}
		}
	}
	else {
		for ( key in list ) {
			value = list[key]
			if ( iterator.call(list, value, key, list) === false ) {
				return false
			}
		}
	}
}

```

And it's test:

Enable travis:




### Compilation


### Editions

### Production



### Selection




