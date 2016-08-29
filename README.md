# Elegantly Produce & Consume Compiled Packages

## Abstract

JavaScript production use to be as easy as publishing your source code, which worked across all environments, with a few minor tweaks. Consumption was as easy as downloading and requiring the package.

These days, code may be run anywhere, in all sorts of browsers, desktops, and devices, with varying capabilities, not always known by the producer. JavaScript has evolved, incorporating new features that save developers time, although not supported accross all possible environments - with requires either abstinence of time saving features, or reducing environment support, or compiling on the producer or consumer side, all of which is complex and difficult.

Editions solves this problem elegantly in a standardised way. Producers produce their packages in their ideal configurations, then publish the package with multiple editions for the consumers to consume at their digression. Consumers are made aware of this through automated README updates, can select the exact edition that meets their exact needs - or by default, have the best edition for their environment loaded automatically. All the complexity of modern JavaScript publishing is solved, for the consumer and publisher.


### Benefits to the Ecosystem

If this gains popularity, it will greatly reduce the complexity and difficulty of consuming and producing compiled packages, which is becoming ever increasingly common thanks to accepted power of tools like Babel, TypeScript, JSX, and traditional tools like CoffeeScript.

Currently most people are publishing their compiled code, that may not target all environments, may not mention this, and will need to be recompiled and repackaged, ineffective for runtime by bundlers like rollup, webpack, and browserify. Consumers often have no power over this, and if a hickup occurs, they have to delve into the package, of which none of this was documented, and figure out what overrides and recompilations need to occur.

By publishing multiple editions, with optional autoloader and readme updater - the power stays with the producer and the consumer. We've implemented this over at https://www.npmjs.com/package/editions (see dependents) and it has worked terrifically well for our use cases. Editions range from Babel, JSX, Flow Type, and CoffeeScript.


## Technical Requirements

Nothing extra needed. Topic is mostly theory with some demonstrations that will be useful to first time node.js javascript developers through to more seasoned ones.


## Submissions

- [Node.js Interactive Europe 2016](http://events.linuxfoundation.org/events/node-interactive-europe) - [ACCEPTED!](https://eventmobi.com/nieu16/agenda/176233/928552)
- NodeConf Argentina 2016 - declined
- Node Summit 2016 - declined
