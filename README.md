sdu
===

A CLI that Speaker Deck

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sdu.svg)](https://npmjs.org/package/sdu)
[![CircleCI](https://circleci.com/gh/sugarshin/sdu/tree/master.svg?style=shield)](https://circleci.com/gh/sugarshin/sdu/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/sdu.svg)](https://npmjs.org/package/sdu)
[![License](https://img.shields.io/npm/l/sdu.svg)](https://github.com/sugarshin/sdu/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sdu
$ sdu COMMAND
running command...
$ sdu (-v|--version|version)
sdu/0.0.0 darwin-x64 node-v12.4.0
$ sdu --help [COMMAND]
USAGE
  $ sdu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sdu hello [FILE]`](#sdu-hello-file)
* [`sdu help [COMMAND]`](#sdu-help-command)

## `sdu hello [FILE]`

describe the command here

```
USAGE
  $ sdu hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sdu hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/sugarshin/sdu/blob/v0.0.0/src/commands/hello.ts)_

## `sdu help [COMMAND]`

display help for sdu

```
USAGE
  $ sdu help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
