# sdu

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
* [`sdu ls`](#sdu-ls)
* [`sdu new [FILE]`](#sdu-new-file)
* [`sdu update [PATH_NAME]`](#sdu-update-pathname)
* [`sdu delete [PATH_NAME]`](#sdu-delete-pathname)
* [`sdu help [COMMAND]`](#sdu-help-command)

## `sdu ls`

List Slides

```
USAGE
  $ sdu ls

OPTIONS
  -h, --help       show CLI help
  -a, --all        list all slides
  -j, --json       print by json format

EXAMPLE
  $ sdu ls
  * Foo Title
    * https://speakerdeck.com/sugarshin/foo
    * foo
  * Example
    * https://speakerdeck.com/sugarshin/bar
    * bar
```

_See code: [src/commands/ls.ts](https://github.com/sugarshin/sdu/blob/v0.0.0/src/commands/ls.ts)_

## `sdu new [FILE]`

upload a new slide

```
USAGE
  $ sdu new [FILE]

OPTIONS
  -t, --title      title
  -p, --pathname   pathname
  -f, --force
  -h, --help       show CLI help

EXAMPLE
  $ sdu new /slides/path/example.pdf -t "Example Title"
  https://speakerdeck.com/sugarshin/example-title
```

_See code: [src/commands/new.ts](https://github.com/sugarshin/sdu/blob/v0.0.0/src/commands/new.ts)_

## `sdu update [PATH_NAME]`

update a slide

```
USAGE
  $ sdu update [PATH_NAME]

OPTIONS
  -h, --help       show CLI help

EXAMPLE
  $ sdu update example-title
  https://speakerdeck.com/sugarshin/example-title
```

_See code: [src/commands/update.ts](https://github.com/sugarshin/sdu/blob/v0.0.0/src/commands/update.ts)_

## `sdu delete [PATH_NAME]`

delete a slide

```
USAGE
  $ sdu delete [PATH_NAME]

OPTIONS
  -y, --assume-yes   assume yes
  -h, --help         show CLI help

EXAMPLE
  $ sdu delete example-title
```

_See code: [src/commands/delete.ts](https://github.com/sugarshin/sdu/blob/v0.0.0/src/commands/delete.ts)_

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
