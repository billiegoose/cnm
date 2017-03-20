#!/usr/bin/env node
import cnm from '..'

let GITHUB_REPO=process.argv[2]

console.log('Usage: cnm <project-name> [--description \"<description>\"]')
process.exit()

cnm.run()