<!-- TITLE/ -->

<h1>cnm</h1>

<!-- /TITLE -->


<!-- BADGES/ -->



<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Create Node Module is a cli for getting your new module off to a great start.

<!-- /DESCRIPTION -->


## TODOs

- [x] Initial prototype
- [ ] Port from shell to JavaScript
- [ ] Cache global values (like author name, email) in config file
- [ ] Add proper CLI parser
- [ ] Make interactive with inquirer
- [ ] Create a simpler parser than `projectz`/`mos` that just grabs from `## Identifier` to the next `## or ###` and updates it based on section templates.

## Templates (Planned, not implemented)

```
templates
├── badges.js
├── dependencies.js
├── footer.js
├── header.js
├── installation.js
├── license.js
└── tests.js
```

You could override the default template with a custom template in ~/.cnm or preferably save the override templates in the repo, either in a
predictably named folder or a user-configurable location specified in package.json options.

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

Then in the terminal, run:

```sh
npm install -g cnm
```

## Tests

First clone this repository to get the source code. Then in the topmost repo
directory run:

```sh
npm install
npm test
```

<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; William Hilton</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/Unlicense.html">The Unlicense</a></li></ul>

<!-- /LICENSE -->


_Parts of this file are based on [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_

_README.md (and other files) are maintained using [mos](https://github.com/mosjs/mos) and [projectz](https://github.com/bevry/projectz)_
