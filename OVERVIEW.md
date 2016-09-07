## 01

For each
npm init
Code - Array, object (without own and foreach)
Publish - readme, license, usage, badges
Consumer - bug report about own
Producer - update for own, changelog, publish
Consumer - update, close bug report

Maintenance
Producer - auto readme updates, travis ci
Consumer - add web pack, or rollup, or browserify

Coffee or babel
Producer - CoffeeScript (for own key, for of), publish compiled code
Consumer - conflict with webpack due to double compile

Babel
Producer - for of, for each
Consumer - compat bug report
Producer - how to have compat and babel, tradeoffs, editions
Consumer - now informed, using default autoloader, bundlers use meta pointer, using custom location

Other notes
Class interop between es5 and es6
Readme/meta updates
Editions features and upcoming features
ES modules vs commonjs


## 02

- What we'll cover
  - Considerations
    - Desires
    - Options
    - Limitations
    - Conclusions
    - Tradeoffs
  - Production
    - Writing
      - Source
      - Features
      - Languages
      - Documentation
    - Compilation / Packaging
      - Pre-processors
        - CoffeeScript
        - Babel (JSX, ES2015)
        - Flow Type
      - Packaging
        - Files
          - README
          - .npmignore
          - package.json
            - main
            - format
              "http://jspm.io/0.17-beta-guide/publishing.html"
            - jsnext:main -> es:next -> module
              "https://github.com/rollup/rollup/issues/337"
            - engines
            - .flowconfig
        - Global / Direct
          - window.QueryEngine
        - Require / CommonJS
        - Require.js
        - System.js
          "https://github.com/systemjs/systemjs"
        - AMD
        - UMD
      - Post-processors
        - Minification
        - Concatenation
        - Documentation
    - Publishing / Hosting
      - Files
        - Direct
        - Zipped
      - Hosted
        - Web server
        - Repo server
        - GitHub Pages
        - CDN
      - Package manager
        - NPM
        - Bower
        - Ender
        - JSPM
        - Browserify
        - Webpack
    - Evangelising
      - Documentation
      - Environments
      - Instructions
  - Consumption
    - Evaluation
      - Features - does it do what I want?
      - Environments - with the constraints I have?
      - Documentation - can I understand it?
    - Downloading - can I get it? can I use it?
      - Does it work with my package manager?
    - Installation - does it have dependencies?
      - Do I need to compile it?
    - Usage - how do I require it, how do I use it?
      - Require it
    - Production - how do I package it nicely?
    - Debugging - how do I debug it?
- A look at history, how things came to be
  - How it was originally done
    - Production
      - Wrote source
      - Packaged source with minified and concatenated editions
      - Published to web server, perhaps with zip download
      - Documented manually
- Where we are now / competing standards
- How editions solves this
- Workflow of use cases
