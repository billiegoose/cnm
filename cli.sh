#!/usr/bin/env bash
set -eu
PROJECT="$1"
FLAG="$2"
DESCRIPTION="$3"
if [ -z "$PROJECT" ]; then
  echo 'Usage: newnpm <project-name> [--description \"<description>\"]'
  echo "depends on git, gh, npm, ava, readme, projectz"
  exit 0
fi
echo "Creating $PROJECT..."
mkdir "$PROJECT"
cd "$PROJECT"

echo "Gathering requirements..."
GITHUB_USER="$(gh me | head -n 2 | tail -n 1)"
GITHUB_REPO="$PROJECT"
AUTHOR_NAME=${AUTHOR_NAME:-"$(npm config get init-author-name)"}
AUTHOR_NAME=${AUTHOR_NAME:-"$(git config user.name)"}
AUTHOR_EMAIL=${AUTHOR_EMAIL:-"$(npm config get init-author-email)"}
AUTHOR_EMAIL=${AUTHOR_EMAIL:-"$(git config user.email)"}
LICENSE="$(npm config get init-license)"


echo "Generating git repo..."
gh create-repo "$PROJECT" -d "$DESCRIPTION"
git init
git remote add origin "https://github.com/$GITHUB_USER/$GITHUB_REPO"
echo "node_modules" > .gitignore

echo "Generating package.json..."
echo '{
  "name": "'"$PROJECT"'",
  "version": "0.0.0",
  "description": "'"$DESCRIPTION"'",
  "main": "'"$PROJECT"'.js",
  "scripts": {
    "docs": "projectz && mos"
  },
  "keywords": [],
  "author": "'"$AUTHOR_NAME <$AUTHOR_EMAIL>"'",
  "license": "'"$LICENSE"'"
}' > package.json

echo 'Generating test directory...'
#ava --init # Takes too long
mkdir test
echo "import test from 'ava'

test('foo', t => {
    t.is(2+2, 5)
})" > "test/$PROJECT.test.js"
echo '"use strict"
' > "$PROJECT.js"

echo 'Generating README.md and LICENSE.md'
echo '
<!-- TITLE -->
<!-- BADGES -->
<!-- DESCRIPTION -->

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven'"'"'t already.

Then in the terminal, run:

```sh
npm install '"$PROJECT"' --save
```

## Tests

First clone this repository to get the source code. Then in the topmost repo
directory run:

```sh
npm install
npm test
```

<!-- LICENSE -->

_Parts of this file are based on [package-json-to-readme](https://github.com/zeke/package-json-to-readme)_

_README.md (and other files) are maintained using [mos](https://github.com/mosjs/mos) and [projectz](https://github.com/bevry/projectz)_

' > README.md
echo '<!-- LICENSEFILE/ -->
<!-- /LICENSEFILE -->' > LICENSE.md
projectz compile

git add -A
git commit -m 'Initial commit'