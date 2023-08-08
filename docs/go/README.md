# Go
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of awesome Go frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Tue Aug 08 2023 16:03:18 GMT+0800 (中国标准时间)
* Synchronize Every Week.
#### Order by alphabetical and star count.

- [Awesome Go](#awesome-go)
  - [Audio and Music](#audio-and-music)
  - [Authentication and OAuth](#authentication-and-oauth)
  - [Blockchain](#blockchain)
  - [Bot Building](#bot-building)
  - [Build Automation](#build-automation)
  - [Standard CLI](#Standard-CLI)
  - [Advanced Console UIs](#Advanced-Console-UIs)
  - [Configuration](#Configuration)
  - [Continuous Integration](#Continuous-Integration)
  - [CSS Preprocessors](#CSS-Preprocessors)
  - [Data Structures](#Data-Structures)
  - [Database](#Database)
    - [Databases implemented in Go](#Databases-implemented-in-Go)
    - [Database schema migration](#Database-schema-migration)
    - [Database tools.](#Database-tools)
    - [SQL query builder](#SQL-query-builder)
  - [Database Drivers](#Database-Drivers)
    - [Relational Databases](#Relational-Databases)
    - [NoSQL Databases](#NoSQL-Databases)
    - [Search and Analytic Databases](#Search-and-Analytic-Databases)
    - [Multiple Backends](#Multiple-Backends)
  - [Date and Time](#Date-and-Time)
  - [Distributed Systems](#Distributed-Systems)
  - [Dynamic DNS](#Dynamic-DNS)
  - [Email](#Email)
  - [Embeddable Scripting Languages](#Embeddable-Scripting-Languages)
  - [Error Handling](#Error-Handling)
  - [File Handling](#File-Handling)
  - [Financial](#Financial)
  - [Forms](#Forms)
  - [Functional](#Functional)
  - [Game Development](#Game-Development)
  - [Generation and Generics](#Generation-and-Generics)
  - [Geographic](#Geographic)
  - [Go Compilers](#Go-Compilers)
  - [Goroutines](#Goroutines)
  - [GUI](#GUI)
    - [Toolkits](#Toolkits)
    - [Interaction](#Interaction)
  - [Hardware](#Hardware)
  - [Images](#Images)
  - [IoT -> Internet of Things](#IoT)
  - [Job Scheduler](#Job-Scheduler)
  - [JSON](#JSON)
  - [Logging](#Logging)
  - [Machine Learning](#Machine-Learning)
  - [Messaging](#Messaging)
  - [Microsoft Office](#Microsoft-Office)
  - [Microsoft Excel](#Microsoft-Excel)
  - [Miscellaneous](#Miscellaneous)
    - [Dependency Injection](#Dependency-Injection)
    - [Project Layout](#Project-Layout)
    - [Strings](#Strings)
    - [Uncategorized](#Uncategorized)
  - [Natural Language Processing](#Natural-Language-Processing)
  - [Networking](#Networking)
  - [HTTP Clients](#HTTP-Clients)
  - [OpenGL](#OpenGL)
  - [ORM](#ORM)
  - [Package Management](#Package-Management)
    - [Official experimental tooling for package management](#Official-experimental-tooling-for-package-management)
    - [Unofficial libraries for package and dependency management](#Official-libraries-for-package-and-dependency-management)
  - [Performance](#Performance)
  - [Query Language](#Query-Language)
  - [Resource Embedding](#Resource-Embedding)
  - [Science and Data Analysis](#Science-and-Data-Analysis)
  - [Security](#Security)
  - [Serialization](#Serialization)
  - [Server Applications](#Server-Applications)
  - [Stream Processing](#Stream-Processing)
  - [Template Engines](#Template-Engines)
  - [Testing](#Testing)
    - [Testing Frameworks](#Testing-Frameworks)
    - [Mock](#Mock)
    - [Fuzzing and delta-debugging/reducing/shrinking](#Fuzzing-and-delta-debugging)
    - [Selenium and browser control tools](#Selenium-and-browser-control-tools)
    - [Fail injection](#Fail-injection)
  - [Text Processing](#Text-Processing)
    - [Specific Formats](#Specific-Formats)
    - [Utility](#Utility)
  - [Third-party APIs](#Third-party-APIs)
  - [Utilities](#Utilities)
  - [UUID](#UUID)
  - [Validation](#Validation)
  - [Version Control](#Version-Control)
  - [Video](#Video)
  - [Web Frameworks](#Web-Frameworks)
    - [Full stack web frameworks](#Full-stack-web-frameworks.)
    - [Actual middlewares](#Actual-middlewares)
    - [Libraries for creating HTTP middlewares](#Libraries-for-creating-HTTP-middlewares)
    - [Routers](#Routers)
  - [WebAssembly](#WebAssembly)
  - [Windows](#Windows)
  - [XML](#XML)
- [Tools](#Tools)
  - [Code Analysis](#Code-Analysis)
  - [Editor Plugins](#Editor-Plugins)
  - [Go Generate Tools](#Go-Generate-Tools)
  - [Go Tools](#Go-Tools)
  - [DevOps Tools](#DevOps-Tools)
  - [Other Software](#Other-Software)
- [Resources](#resources)
  - [Benchmarks](#Benchmarks)
  - [E-Books](#E-Books)
  - [Gophers](#Gophers)
  - [Style Guides](#Style-Guides)
  - [Websites](#Websites)
  - [Tutorials](#Tutorials)

---

## [Awesome Go](#awesome-go)
* A curated list of awesome Go frameworks, libraries, software and resources.

### [Audio and Music](#audio-and-music)
* Libraries for manipulating audio.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [oto](https://github.com/ebitengine/oto) | 1300 | ♪ A low-level library to play sound on multiple platforms ♪ | 15 hours ago |
| [portaudio](https://github.com/gordonklaus/portaudio) | 608 | Go bindings for the PortAudio audio I/O library | a month ago |
| [music-theory](https://github.com/go-music-theory/music-theory) | 415 | Go models of Note, Scale, Chord and Key | 3 years ago |
| [waveform](https://github.com/mdlayher/waveform) | 354 | Go package capable of generating waveform images from audio streams. MIT Licensed. | 3 years ago |
| [id3v2](https://github.com/n10v/id3v2) | 293 | 🎵 ID3 decoding and encoding library for Go | 3 months ago |
| [GoAudio](https://github.com/DylanMeeus/GoAudio) | 292 | Go tools for audio processing & creation 🎶 | a year ago |
| [portmidi](https://github.com/rakyll/portmidi) | 279 | Go bindings for libportmidi | a year ago |
| [flac](https://github.com/mewkiz/flac) | 255 | Package flac provides access to FLAC (Free Lossless Audio Codec) streams. | 4 months ago |
| [malgo](https://github.com/gen2brain/malgo) | 223 | Mini audio library | 6 months ago |
| [mix](https://github.com/go-mix/mix) | 170 | Sequence-based Go-native audio mixer for music apps | 3 years ago |
| [gaad](https://github.com/Comcast/gaad) | 112 | GAAD (Go Advanced Audio Decoder) | 6 months ago |
| [minimp3](https://github.com/tosone/minimp3) | 108 | Decode mp3 base on https://github.com/lieff/minimp3 | 6 days ago |
| [vorbis](https://github.com/mccoyst/vorbis) | 32 | A "native" ogg vorbis decoder for Go (uses inline stb_vorbis) | 10 months ago |
| [gosamplerate](https://github.com/dh1tw/gosamplerate) | 29 | Go Bindings for libsamplerate | 3 years ago |


### [Authentication and OAuth](#authentication-and-oauth)
* Libraries for implementing authentications schemes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [casbin](https://github.com/casbin/casbin) | 15473 | An authorization library that supports access control models like ACL, RBAC, ABAC in Golang: https://discord.gg/S5UjpzGZjN | 2 hours ago |
| [oauth2](https://github.com/golang/oauth2) | 4813 | Go OAuth2 | 3 days ago |
| [goth](https://github.com/markbates/goth) | 4271 | Package goth provides a simple, clean, and idiomatic way to write authentication packages for Go web applications. | 4 days ago |
| [authboss](https://github.com/volatiletech/authboss) | 3471 | The boss of http auth. | 16 days ago |
| [go-oauth2-server](https://github.com/RichardKnop/go-oauth2-server) | 2040 | A standalone, specification-compliant,  OAuth2 server written in Golang. | 4 months ago |
| [go-jose](https://github.com/square/go-jose) | 1984 | An implementation of JOSE standards (JWE, JWS, JWT) in Go | 7 months ago |
| [loginsrv](https://github.com/tarent/loginsrv) | 1901 | JWT login microservice with plugable backends such as OAuth2, Google, Github, htpasswd, osiam, .. | 2 years ago |
| [osin](https://github.com/openshift/osin) | 1826 | Golang OAuth2 server library | 15 days ago |
| [gologin](https://github.com/dghubble/gologin) | 1626 | Go login handlers for authentication providers (OAuth1, OAuth2) | 15 hours ago |
| [scs](https://github.com/alexedwards/scs) | 1538 | HTTP Session Management for Go | 14 hours ago |
| [gorbac](https://github.com/mikespook/gorbac) | 1480 | goRBAC provides a lightweight role-based access control (RBAC) implementation in Golang. | 16 days ago |
| [paseto](https://github.com/o1egl/paseto) | 736 | Platform-Agnostic Security Tokens implementation in GO (Golang) | 5 months ago |
| [jwt](https://github.com/cristalhq/jwt) | 611 | Safe, simple and fast JSON Web Tokens for Go | 10 days ago |
| [permissions2](https://github.com/xyproto/permissions2) | 486 |   :closed_lock_with_key: Middleware for keeping track of users, login states and permissions | a month ago |
| [go-guardian](https://github.com/shaj13/go-guardian) | 483 | Go-Guardian is a golang library that provides a simple, clean, and idiomatic way to create powerful modern API and web authentication. | 5 months ago |
| [jwt](https://github.com/pascaldekloe/jwt) | 337 | JSON Web Token library | 3 months ago |
| [jeff](https://github.com/abraithwaite/jeff) | 257 | 🍍Jeff provides the simplest way to manage web sessions in Go. | 5 months ago |
| [jwt-auth](https://github.com/adam-hanna/jwt-auth) | 229 | This package provides json web token (jwt) middleware for goLang http servers | 2 years ago |
| [httpauth](https://github.com/goji/httpauth) | 219 | HTTP Authentication middlewares | 2 years ago |
| [branca](https://github.com/hako/branca) | 168 | :key: Secure alternative to JWT. Authenticated Encrypted API Tokens for Go. | 3 years ago |
| [otpgen](https://github.com/RijulGulati/otpgen) | 130 | Library to generate TOTP/HOTP codes | 2 years ago |
| [sessionup](https://github.com/swithek/sessionup) | 120 | Straightforward HTTP session management | a year ago |
| [sjwt](https://github.com/brianvoe/sjwt) | 112 | Simple JWT Golang | a year ago |
| [session](https://github.com/icza/session) | 111 | Go session management for web servers (including support for Google App Engine - GAE). | a year ago |
| [rbac](https://github.com/zpatrick/rbac) | 107 | Minimalistic RBAC package for Go applications | 5 years ago |
| [jwt](https://github.com/robbert229/jwt) | 104 | This is an implementation of JWT in golang! | 3 years ago |
| [securecookie](https://github.com/chmike/securecookie) | 75 | Fast, secure and efficient secure cookie encoder/decoder  | 6 months ago |
| [sessions](https://github.com/adam-hanna/sessions) | 75 | A dead simple, highly performant, highly customizable sessions middleware for go http servers. | 21 days ago |
| [otpgo](https://github.com/jltorresm/otpgo) | 58 | Time-Based One-Time Password (TOTP) and HMAC-Based One-Time Password (HOTP) library for Go. | 2 years ago |
| [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) | 57 | Golang library for providing a canonical representation of email address. | 2 months ago |
| [scope](https://github.com/ThundR67/scope) | 32 | Easily Manage OAuth2 Scopes In Go | 2 years ago |
| [cookiestxt](https://github.com/mengzhuo/cookiestxt) | 12 | cookiestxt implement parser of cookies txt format | 9 months ago |
| [sessiongate-go](https://github.com/f0rmiga/sessiongate-go) | 10 | A driver for the SessionGate Redis module - easy session management using the Go language. | 5 years ago |


### [Blockchain](#blockchain)
* Tools for building blockchains.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ethereum](https://github.com/ethereum/go-ethereum) | 43204 | Official Go implementation of the Ethereum protocol | 17 minutes ago |
| [tendermint](https://github.com/tendermint/tendermint) | 5532 | ⟁ Tendermint Core (BFT Consensus) in Go | 19 hours ago |
| [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) | 5366 | :chains: A Framework for Building High Value Public Blockchains :sparkles: | 12 minutes ago |
| [gossamer](https://github.com/ChainSafe/gossamer) | 391 | 🕸️ Go Implementation of the Polkadot Host | 12 hours ago |


### [Bot Building](#bot-building)
* Libraries for building and working with bots.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) | 4831 | Golang bindings for the Telegram Bot API | 7 days ago |
| [olivia](https://github.com/olivia-ai/olivia) | 3570 | 💁‍♀️Your new best friend powered by an artificial neural network | a month ago |
| [telebot](https://github.com/tucnak/telebot) | 3195 | Telebot is a Telegram bot framework in Go. | 2 days ago |
| [kelp](https://github.com/stellar/kelp) | 1006 | Kelp is a free and open-source trading bot for the Stellar DEX and 100+ centralized exchanges | 8 months ago |
| [golang-crypto-trading-bot](https://github.com/saniales/golang-crypto-trading-bot) | 927 | A golang implementation of a console-based trading bot for cryptocurrency exchanges | 13 days ago |
| [slacker](https://github.com/shomali11/slacker) | 791 | Slack Bot Framework | 9 days ago |
| [bot](https://github.com/go-chat-bot/bot) | 786 | IRC, Slack, Telegram and RocketChat bot written in go | 5 months ago |
| [tbot](https://github.com/yanzay/tbot) | 336 | Go library for Telegram Bot API | 2 years ago |
| [go-twitch-irc](https://github.com/gempir/go-twitch-irc) | 302 | go irc client for twitch.tv | 7 months ago |
| [echotron](https://github.com/NicoNex/echotron) | 261 | An elegant and concurrent library for the Telegram bot API in Go. | 2 months ago |
| [go-sarah](https://github.com/oklahomer/go-sarah) | 259 | Simple yet customizable bot framework written in Go. | a month ago |
| [tenyks](https://github.com/kyleterry/tenyks) | 175 | The Tenyks IRC bot. | 6 months ago |
| [hanu](https://github.com/sbstjn/hanu) | 147 | Golang Framework for writing Slack bots | 4 months ago |
| [slack-bot](https://github.com/innogames/slack-bot) | 141 | Ready to use Slack bot for lazy developers: start Jenkins jobs, watch Jira tickets, watch pull requests with AI support... | 3 days ago |
| [go-tgbot](https://github.com/olebedev/go-tgbot) | 119 | Golang  telegram bot API wrapper, session-based router and middleware | 5 years ago |
| [ephemeral-roles](https://github.com/ewohltman/ephemeral-roles) | 80 | A Discord bot for managing ephemeral roles based upon voice channel member presence. | 5 months ago |
| [margelet](https://github.com/zhulik/margelet) | 80 | Telegram Bot Framework for Go | a year ago |
| [slackscot](https://github.com/alexandre-normand/slackscot) | 55 | Slack bot core/framework written in Go with support for reactions to message updates/deletes | 5 months ago |
| [govkbot](https://github.com/nikepan/govkbot) | 43 | VK bot package for Go | 23 days ago |
| [teleterm](https://github.com/alfiankan/teleterm) | 26 | Telegram Bot Exec Terminal Command | a month ago |
| [micha](https://github.com/onrik/micha) | 25 | Client lib for Telegram bot api | a month ago |


### [Build Automation](#build-automation)
* Libraries and tools helping with build automation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [task](https://github.com/go-task/task) | 8251 | A task runner / simpler Make alternative written in Go | 3 days ago |
| [realize](https://github.com/oxequa/realize) | 4408 | Realize is the #1 Golang Task Runner which enhance your workflow by automating the most common tasks and using the best performing Golang live reloading. | 2 years ago |
| [mmake](https://github.com/tj/mmake) | 1663 | Modern Make  | a month ago |
| [goyek](https://github.com/goyek/goyek) | 391 | Build automation Go library. | 2 months ago |
| [taskctl](https://github.com/taskctl/taskctl) | 258 | Concurrent task runner, developer's routine tasks automation toolkit. Simple modern alternative to GNU Make 🧰 | 3 months ago |
| [1build](https://github.com/gopinath-langote/1build) | 214 | Frictionless way of managing project-specific commands | 4 months ago |
| [gaper](https://github.com/maxcnunes/gaper) | 74 | Builds and restarts a Go project when it crashes or some watched file changes | 17 hours ago |
| [anko](https://github.com/GuilhermeCaruso/anko) | 30 | :crystal_ball: Simple application watcher | 2 years ago |


### [Standard CLI](#Standard-CLI)
* Libraries for building standard or basic Command Line applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cobra](https://github.com/spf13/cobra) | 32835 | A Commander for modern Go CLI interactions | 6 hours ago |
| [cli](https://github.com/urfave/cli) | 20515 | A simple, fast, and fun package for building command line apps in Go | 16 days ago |
| [elvish](https://github.com/elves/elvish) | 5113 | Elvish = Expressive Programming Language + Versatile Interactive Shell | 4 hours ago |
| [andOTP](https://github.com/andOTP/andOTP) | 3698 | [Unmaintained] Open source two-factor authentication for Android | a year ago |
| [kingpin](https://github.com/alecthomas/kingpin) | 3361 | CONTRIBUTIONS ONLY: A Go (golang) command line and flag parser | 3 months ago |
| [dnote](https://github.com/dnote/dnote) | 2553 | A simple command line notebook for programmers | 2 months ago |
| [go-flags](https://github.com/jessevdk/go-flags) | 2421 | go command line option parser | 5 months ago |
| [pflag](https://github.com/spf13/pflag) | 2147 | Drop-in replacement for Go's flag package, implementing POSIX/GNU-style --flags. | a month ago |
| [go-arg](https://github.com/alexflint/go-arg) | 1683 | Struct-based argument parsing in Go | 19 hours ago |
| [cli](https://github.com/mitchellh/cli) | 1679 | A Go library for implementing command-line interfaces. | 5 months ago |
| [ops](https://github.com/nanovms/ops) | 1110 | ops - build and run nanos unikernels | 4 days ago |
| [liner](https://github.com/peterh/liner) | 985 | Pure Go line editor with history, inspired by linenoise | 2 months ago |
| [complete](https://github.com/posener/complete) | 891 | bash completion written in go + bash completion for go command | 20 days ago |
| [mow.cli](https://github.com/jawher/mow.cli) | 854 | A versatile library for building CLI applications in Go | 2 months ago |
| [flaggy](https://github.com/integrii/flaggy) | 832 | Idiomatic Go input parsing with subcommands, positional values, and flags at any position. No required project or package layout and no external dependencies. | 4 months ago |
| [cli](https://github.com/mkideal/cli) | 689 | CLI - A package for building command line app with go | 5 months ago |
| [argparse](https://github.com/akamensky/argparse) | 537 | Argparse for golang. Just because `flag` sucks | 9 months ago |
| [climax](https://github.com/tucnak/climax) | 207 | Climax is an alternative CLI with the human face | 3 years ago |
| [wmenu](https://github.com/dixonwille/wmenu) | 194 | An easy to use menu structure for cli applications that prompts users to make choices. | 2 years ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 179 | hiboot is a high performance web and cli application framework with dependency injection support | 5 months ago |
| [commandeer](https://github.com/jaffee/commandeer) | 170 | Automatically sets up command line flags based on struct fields and tags. | a year ago |
| [clir](https://github.com/leaanthony/clir) | 155 | A Simple and Clear CLI library. Dependency free. | 6 months ago |
| [sflags](https://github.com/octago/sflags) | 146 | Generate flags by parsing structures | 2 years ago |
| [job](https://github.com/liujianping/job) | 128 | JOB, make your short-term command as a long-term job. 将命令行规划成任务的工具 | 3 years ago |
| [flag](https://github.com/cosiner/flag) | 126 | Flag is a simple but powerful command line option parsing library for Go support infinite level subcommand | 3 years ago |
| [cmdr](https://github.com/hedzr/cmdr) | 123 | POSIX-compliant command-line UI (CLI) parser and Hierarchical-configuration operations | 18 days ago |
| [clif](https://github.com/ukautz/clif) | 123 | Another CLI framework for Go. It works on my machine. | 4 years ago |
| [cli](https://github.com/teris-io/cli) | 120 | Simple and complete API for building command line applications in Go | 2 years ago |
| [env](https://github.com/codingconcepts/env) | 106 | Tag-based environment configuration for structs | 3 years ago |
| [gocmd](https://github.com/devfacet/gocmd) | 65 | A Go library for building command line applications. | 4 months ago |
| [wlog](https://github.com/dixonwille/wlog) | 59 | A simple logging interface that supports cross-platform color and concurrency. | 2 years ago |
| [strumt](https://github.com/antham/strumt) | 55 | Strumt is a library to create prompt chain | 2 months ago |
| [go-getoptions](https://github.com/DavidGamba/go-getoptions) | 47 | Fully featured Go (golang) command line option parser with built-in auto-completion support. | 10 days ago |
| [go-command-chain](https://github.com/rainu/go-command-chain) | 44 | A go library for easy configure and run command chains. Such like pipelining in unix shells. | 3 months ago |
| [flagvar](https://github.com/sgreben/flagvar) | 42 | A collection of CLI argument types for the Go `flag` package. | 4 months ago |
| [argv](https://github.com/cosiner/argv) | 38 |  | 3 years ago |
| [cmd](https://github.com/posener/cmd) | 37 | The standard library flag package with its missing features | 3 years ago |
| [go-commander](https://github.com/yitsushi/go-commander) | 33 | Go library to simplify CLI workflow | 3 years ago |
| [go-andotp](https://github.com/RijulGulati/go-andotp) | 23 | CLI program to encrypt/decrypt andOTP files | 4 months ago |
| [sand](https://github.com/Zaba505/sand) | 20 | Package for creating interpreters | 5 years ago |
| [ts](https://github.com/liujianping/ts) | 17 | timestamp convert & compare tool. 时间戳转换与对比工具 | 4 years ago |
| [subcmd](https://github.com/bobg/subcmd) | 4 |  | a month ago |


### [Advanced Console UIs](#Advanced-Console-UIs)
* Libraries for building Console Applications and Console User Interfaces.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blessed-contrib](https://github.com/yaronn/blessed-contrib) | 15203 | Build terminal dashboards using ascii/ansi art and javascript | 4 months ago |
| [termui](https://github.com/gizak/termui) | 12594 | Golang terminal dashboard | 3 months ago |
| [gocui](https://github.com/jroimartin/gocui) | 9313 | Minimalist Go package aimed at creating Console User Interfaces. | 2 months ago |
| [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) | 8503 | Library for building powerful interactive command line applications in Python | 10 days ago |
| [go-prompt](https://github.com/c-bata/go-prompt) | 4971 | Building powerful interactive prompts in Go, inspired by python-prompt-toolkit. | 23 days ago |
| [termbox-go](https://github.com/nsf/termbox-go) | 4559 | Pure Go termbox implementation | 2 years ago |
| [pterm](https://github.com/pterm/pterm) | 3932 | ✨ #PTerm is a modern Go module to easily beautify console output. Featuring charts, progressbars, tables, trees, text input, select menus and much more 🚀 It's completely configurable and 100% cross-platform compatible. | a day ago |
| [progressbar](https://github.com/schollz/progressbar) | 3418 | A really basic thread-safe progress bar for Golang applications | 11 days ago |
| [termdash](https://github.com/mum4k/termdash) | 2351 | Terminal based dashboard. | 6 months ago |
| [asciigraph](https://github.com/guptarohit/asciigraph) | 2287 | Go package to make lightweight ASCII line graph ╭┈╯ in command line apps with no other dependencies. | 23 days ago |
| [mpb](https://github.com/vbauerster/mpb) | 2075 | multi progress bar for Go cli applications | 5 days ago |
| [uiprogress](https://github.com/gosuri/uiprogress) | 2037 | A go library to render progress bars in terminal applications | 2 years ago |
| [uilive](https://github.com/gosuri/uilive) | 1587 | uilive is a go library for updating terminal output in realtime | 17 days ago |
| [termenv](https://github.com/muesli/termenv) | 1427 | Advanced ANSI style & color support for your terminal applications | a day ago |
| [color](https://github.com/gookit/color) | 1357 | 🎨 Terminal color rendering library, support 8/16 colors, 256 colors, RGB color rendering output, support Print/Sprintf methods, compatible with Windows. GO CLI 控制台颜色渲染工具库，支持16色，256色，RGB色彩渲染输出，使用类似于 Print/Sprintf，兼容并支持 Windows 环境的色彩渲染 | 5 hours ago |
| [aurora](https://github.com/logrusorgru/aurora) | 1340 | Golang ultimate ANSI-colors that supports Printf/Sprintf methods | 10 months ago |
| [go-isatty](https://github.com/mattn/go-isatty) | 724 |  | 3 months ago |
| [uitable](https://github.com/gosuri/uitable) | 711 | A go library to improve readability in terminal apps using tabular data | 10 months ago |
| [go-colorable](https://github.com/mattn/go-colorable) | 706 |  | 5 months ago |
| [gommon](https://github.com/labstack/gommon) | 498 | Common packages for Go | 5 months ago |
| [simpletable](https://github.com/alexeyco/simpletable) | 461 | Simple tables in terminal with Go | 2 years ago |
| [chalk](https://github.com/ttacon/chalk) | 429 | Intuitive package for prettifying terminal/console output. http://godoc.org/github.com/ttacon/chalk | 4 years ago |
| [yacspin](https://github.com/theckman/yacspin) | 404 | Yet Another CLi Spinner; providing over 80 easy to use and customizable terminal spinners for multiple OSes | 2 years ago |
| [box-cli-maker](https://github.com/Delta456/box-cli-maker) | 372 | Make Highly Customized Boxes for CLI | 2 months ago |
| [tabby](https://github.com/cheynewallace/tabby) | 331 | A tiny library for super simple Golang tables | 3 years ago |
| [go-colortext](https://github.com/daviddengcn/go-colortext) | 214 | Change the color of console text. | 3 years ago |
| [cfmt](https://github.com/mingrammer/cfmt) | 95 | :art: Contextual fmt inspired by bootstrap color classes | 5 years ago |
| [tabular](https://github.com/InVisionApp/tabular) | 70 | Tabular simplifies printing ASCII tables from command line utilities | 3 months ago |
| [cfmt](https://github.com/i582/cfmt) | 58 | Small library for simple and convenient formatted stylized output to the console. | 2 years ago |
| [ctc](https://github.com/wzshiming/ctc) | 44 | Console Text Colors - The non-invasive cross-platform terminal color library does not need to modify the Print method | 5 months ago |
| [table](https://github.com/tomlazar/table) | 44 | pretty colorfull tables in go with less effort | 3 months ago |
| [marker](https://github.com/cyucelen/marker) | 40 |  🖍️ Marker is the easiest way to match and mark strings for colorful terminal outputs! | 9 months ago |
| [colourize](https://github.com/TreyBastian/colourize) | 26 | An ANSI colour terminal package for Go | a year ago |
| [go-ataman](https://github.com/workanator/go-ataman) | 14 | Another Text Attribute Manupulator | 3 years ago |


### [Configuration](#Configuration)
* Libraries for configuration parsing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [viper](https://github.com/spf13/viper) | 23642 | Go configuration with fangs | 4 days ago |
| [godotenv](https://github.com/joho/godotenv) | 6464 | A Go port of Ruby's dotenv library (Loads environment variables from .env files) | 2 months ago |
| [envconfig](https://github.com/kelseyhightower/envconfig) | 4619 | Golang library for managing configuration data from environment variables | 3 months ago |
| [env](https://github.com/caarlos0/env) | 3738 | A simple and zero-dependencies library to parse environment variables into structs | 19 hours ago |
| [ini](https://github.com/go-ini/ini) | 3279 | Package ini provides INI file read and write functionality in Go | 21 days ago |
| [koanf](https://github.com/knadh/koanf) | 1930 | Simple, extremely lightweight, extensible, configuration management library for Go. Support for JSON, TOML, YAML, env, command line, file, S3 etc. Alternative to viper. | 18 days ago |
| [cleanenv](https://github.com/ilyakaznacheev/cleanenv) | 1102 | ✨Clean and minimalistic environment configuration reader for Golang | 8 days ago |
| [konfig](https://github.com/lalamove/konfig) | 639 | Composable, observable and performant config handling for Go for the distributed processing era | 3 years ago |
| [config](https://github.com/gookit/config) | 475 | 📝 Go configuration manage(load,get,set,export). support JSON, YAML, TOML, Properties, INI, HCL, ENV and Flags. Multi file load, data override merge, parse ENV var. Go应用配置加载管理，支持多种格式，多文件加载，远程文件加载，支持数据合并，解析环境变量名 | 2 days ago |
| [confita](https://github.com/heetch/confita) | 471 | Load configuration in cascade from multiple backends into a struct | 9 months ago |
| [aconfig](https://github.com/cristalhq/aconfig) | 469 | Simple, useful and opinionated config loader. | 3 months ago |
| [xdg](https://github.com/adrg/xdg) | 423 | Go implementation of the XDG Base Directory Specification and XDG user directories | a day ago |
| [config](https://github.com/golobby/config) | 336 | A lightweight yet powerful configuration manager for the Go programming language | 7 months ago |
| [config](https://github.com/JeremyLoy/config) | 329 | 12 factor configuration as a typesafe struct in as little as two function calls | a year ago |
| [hjson-go](https://github.com/hjson/hjson-go) | 303 | Hjson for Go | 8 months ago |
| [fig](https://github.com/kkyr/fig) | 275 | A minimalist Go configuration library | 12 days ago |
| [store](https://github.com/tucnak/store) | 271 | A dead simple configuration manager for Go applications | 25 days ago |
| [config](https://github.com/olebedev/config) | 265 | JSON or YAML configuration wrapper with convenient access methods. | a year ago |
| [envconfig](https://github.com/vrischmann/envconfig) | 234 | Small library to read your configuration from environment variables | 2 years ago |
| [config](https://github.com/joshbetz/config) | 215 | 🛠 A configuration library for Go that parses environment variables, JSON files, and reloads automatically on SIGHUP. | 2 years ago |
| [gcfg](https://github.com/go-gcfg/gcfg) | 164 | read INI-style configuration files into Go structs; supports user-defined types and subsections | 2 years ago |
| [harvester](https://github.com/beatlabs/harvester) | 126 | Harvest configuration, watch and notify subscriber | a day ago |
| [onion](https://github.com/goraz/onion) | 113 | Layer based configuration for golang | 5 months ago |
| [envcfg](https://github.com/tomazk/envcfg) | 100 | Un-marshaling environment variables to Go structs | 6 years ago |
| [envh](https://github.com/antham/envh) | 96 | Go helpers to manage environment variables | 2 months ago |
| [configuro](https://github.com/sherifabdlnaby/configuro) | 87 | An opinionated configuration loading framework for Containerized and Cloud-Native applications. | 10 months ago |
| [configuration](https://github.com/BoRuDar/configuration) | 84 | Library for setting values to structs' fields from env, flags, files or default tag | 15 days ago |
| [xdg](https://github.com/OpenPeeDeeP/xdg) | 76 | A cross platform package that follows the XDG Standard | 3 years ago |
| [gofigure](https://github.com/ian-kent/gofigure) | 66 | Go configuration made easy! | 4 years ago |
| [uconfig](https://github.com/omeid/uconfig) | 62 | Lightweight, zero-dependency, and extendable configuration management library for Go | 7 months ago |
| [hocon](https://github.com/gurkankaymak/hocon) | 60 | go implementation of lightbend's HOCON configuration library https://github.com/lightbend/config | 6 months ago |
| [configure](https://github.com/paked/configure) | 57 | Configure is a Go package that gives you easy configuration of your project through redundancy | 4 years ago |
| [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) | 54 | Go package that interfaces with AWS System Manager | a year ago |
| [gone](https://github.com/One-com/gone) | 46 | Golang packages for writing small daemons and servers. | 2 years ago |
| [go-up](https://github.com/ufoscout/go-up) | 42 | go-up! A simple configuration library with recursive placeholders resolution and no magic. | 4 years ago |
| [ingo](https://github.com/schachmat/ingo) | 36 | persistent storage for flags in go | 6 years ago |
| [mini](https://github.com/sasbury/mini) | 34 | A golang package for parsing ini-style configuration files | 5 years ago |
| [genv](https://github.com/sakirsensoy/genv) | 33 | Genv is a library for Go (golang) that makes it easy to read and use environment variables in your projects. It also allows environment variables to be loaded from the .env file. | 4 years ago |
| [conflate](https://github.com/the4thamigo-uk/conflate) | 27 | Library providing routines to merge and validate JSON, YAML and/or TOML files | 13 days ago |
| [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) | 17 | Go utility for loading configuration parameters from AWS SSM (Parameter Store) | 10 months ago |
| [ini](https://github.com/wlevene/ini) | 12 | ini parser for golang | 25 days ago |
| [envconf](https://github.com/ian-kent/envconf) | 11 | Configure Go applications from the environment | 9 years ago |
| [env](https://github.com/nasermirzaei89/env) | 10 | Golang Get Environment Variables Package | 9 months ago |
| [go-ini](https://github.com/subpop/go-ini) | 9 | automatic mirror of https://git.sr.ht/~spc/go-ini | 25 days ago |
| [typenv](https://github.com/diegomarangoni/typenv) | 9 | Go minimalist typed environment variables library | 7 months ago |
| [go-conf](https://github.com/ThomasObenaus/go-conf) | 8 | Library for easy configuration of a golang service | 2 years ago |
| [swap](https://github.com/oblq/swap) | 8 | Instantiate/configure structs recursively, based on build environment. (YAML, TOML, JSON and env). | 2 years ago |
| [gonfig](https://github.com/miladabc/gonfig) | 6 | Tag based configuration loader from different providers | 2 years ago |
| [config](https://github.com/crgimenes/config) | 3 | Configuration loader to use in Go projects | 5 months ago |


### [Continuous Integration](#Continuous-Integration)
* Tools for help with continuous integration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [drone](https://github.com/harness/drone) | 27133 | Drone is a Container-Native, Continuous Delivery Platform | 7 days ago |
| [cds](https://github.com/ovh/cds) | 4256 | Enterprise-Grade Continuous Delivery & DevOps Automation Open Source Platform | a day ago |
| [goveralls](https://github.com/mattn/goveralls) | 765 |  | 3 months ago |
| [gotestfmt](https://github.com/GoTestTools/gotestfmt) | 411 | go test output for humans | 2 months ago |
| [overalls](https://github.com/go-playground/overalls) | 112 | :jeans:Multi-Package go project coverprofile for tools like goveralls | 4 years ago |
| [duci](https://github.com/duck8823/duci) | 74 | The simple ci server  | 5 months ago |
| [gomason](https://github.com/nikogura/gomason) | 57 | A tool for testing, building, signing, and publishing binaries. | 6 months ago |
| [roveralls](https://github.com/lawrencewoodman/roveralls) | 19 | A Go recursive coverage testing tool | 6 years ago |


### [CSS Preprocessors](#CSS-Preprocessors)
* Libraries for preprocessing CSS files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gcss](https://github.com/yosssi/gcss) | 483 | Pure Go CSS Preprocessor | 9 years ago |
| [go-libsass](https://github.com/wellington/go-libsass) | 196 | Go wrapper for libsass, the only Sass 3.5 compiler for Go | 5 months ago |


### [Data Structures](#Data-Structures)
* Generic datastructures and algorithms in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gods](https://github.com/emirpasic/gods) | 14101 | GoDS (Go Data Structures) - Sets, Lists, Stacks, Maps, Trees, Queues, and much more | 13 days ago |
| [go-datastructures](https://github.com/Workiva/go-datastructures) | 7131 | A collection of useful, performant, and threadsafe Go datastructures. | a month ago |
| [golang-set](https://github.com/deckarep/golang-set) | 3401 | A simple, battle-tested and generic set type for the Go language. Trusted by Docker, 1Password, Ethereum and Hashicorp. | 5 days ago |
| [gota](https://github.com/go-gota/gota) | 2725 | Gota: DataFrames and data wrangling in Go (Golang) | a day ago |
| [roaring](https://github.com/RoaringBitmap/roaring) | 2097 | Roaring bitmaps in Go (golang) | 5 hours ago |
| [bloom](https://github.com/bits-and-blooms/bloom) | 2006 | Go package implementing Bloom filters | 5 hours ago |
| [gocache](https://github.com/eko/gocache) | 1887 | ☔️ A complete Go cache library that brings you multiple ways of managing your caches | an hour ago |
| [BoomFilters](https://github.com/tylertreat/BoomFilters) | 1548 | Probabilistic data structures for processing continuous, unbounded streams. | 2 years ago |
| [bitset](https://github.com/bits-and-blooms/bitset) | 1140 | Go package implementing bitsets | a month ago |
| [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) | 999 | Cuckoo Filter: Practically Better Than Bloom | a year ago |
| [gostl](https://github.com/liyue201/gostl) | 899 | Data structure and algorithm library for go, designed to provide functions similar to C++ STL | a month ago |
| [hyperloglog](https://github.com/axiomhq/hyperloglog) | 868 | HyperLogLog with lots of sugar (Sparse, LogLog-Beta bias correction and TailCut space reduction) brought to you by Axiom | 3 months ago |
| [algorithms](https://github.com/shady831213/algorithms) | 734 | CLRS study. Codes are written with golang. | 2 years ago |
| [ttlcache](https://github.com/jellydator/ttlcache) | 685 | An in-memory cache with item expiration and generics | 9 days ago |
| [trie](https://github.com/derekparker/trie) | 655 | Data structure and relevant algorithms for extremely fast prefix/fuzzy string searching. | 8 months ago |
| [deque](https://github.com/gammazero/deque) | 475 | Fast ring-buffer deque (double-ended queue) | 6 months ago |
| [merkletree](https://github.com/cbergoon/merkletree) | 443 | A Merkle Tree implementation written in Go. | 6 months ago |
| [go-edlib](https://github.com/hbollon/go-edlib) | 397 | 📚 String comparison and edit distance algorithms library, featuring : Levenshtein, LCS, Hamming, Damerau levenshtein (OSA and Adjacent transpositions algorithms), Jaro-Winkler, Cosine, etc... | a year ago |
| [go-geoindex](https://github.com/hailocab/go-geoindex) | 350 | Go native library for fast point tracking and K-Nearest queries | 5 years ago |
| [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) | 299 | Go concurrent-safe, goroutine-safe, thread-safe queue | 3 months ago |
| [levenshtein](https://github.com/agnivade/levenshtein) | 295 | Go implementation to calculate Levenshtein Distance. | 6 months ago |
| [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) | 293 | Adaptive Radix Trees implemented in Go | 7 months ago |
| [hilbert](https://github.com/google/hilbert) | 266 | Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves. | a year ago |
| [cuckoo-filter](https://github.com/linvon/cuckoo-filter) | 262 | Cuckoo Filter go implement, better than Bloom Filter, configurable and space optimized  布谷鸟过滤器的Go实现，优于布隆过滤器，可以定制化过滤器参数，并进行了空间优化 | a year ago |
| [skiplist](https://github.com/MauriceGit/skiplist) | 254 | A Go library for an efficient implementation of a skip list: https://godoc.org/github.com/MauriceGit/skiplist | 6 months ago |
| [goskiplist](https://github.com/ryszard/goskiplist) | 237 | A skip list implementation in Go | 4 years ago |
| [bitmap](https://github.com/kelindar/bitmap) | 224 | Simple dense bitmap index in Go with binary operators | a month ago |
| [binpacker](https://github.com/zhuangsirui/binpacker) | 210 | A binary stream packer and unpacker | 2 years ago |
| [iter](https://github.com/disksing/iter) | 180 | Go implementation of C++ STL iterators and algorithms. | a year ago |
| [bit](https://github.com/yourbasic/bit) | 150 | Bitset data structure | 7 months ago |
| [bloom](https://github.com/zentures/bloom) | 148 | Bloom filters implemented in Go. | 5 years ago |
| [deque](https://github.com/edwingeng/deque) | 135 | A highly optimized double-ended queue | 9 months ago |
| [remember-go](https://github.com/rocketlaunchr/remember-go) | 133 | Cache Slow Database Queries | 2 years ago |
| [ring](https://github.com/tannerryan/ring) | 130 | Package ring provides a high performance and thread safe Go implementation of a bloom filter. | 3 years ago |
| [encoding](https://github.com/zentures/encoding) | 129 | Integer Compression Libraries for Go | 6 years ago |
| [go-rquad](https://github.com/arl/go-rquad) | 126 | :pushpin: State of the art point location and neighbour finding algorithms for region quadtrees, in Go | a year ago |
| [conjungo](https://github.com/InVisionApp/conjungo) | 116 | A small flexible merge library in go | 3 months ago |
| [crunch](https://github.com/superwhiskers/crunch) | 88 | take bytes out of things easily ✨🍪 | 7 months ago |
| [go-mcache](https://github.com/OrlovEvgeny/go-mcache) | 88 | Fast in-memory key:value store/cache with TTL | 4 years ago |
| [skiplist](https://github.com/gansidui/skiplist) | 82 | skiplist for golang | 9 years ago |
| [bloom](https://github.com/yourbasic/bloom) | 79 | Probabilistic set data structure | 6 years ago |
| [levenshtein](https://github.com/agext/levenshtein) | 77 | Levenshtein distance and similarity metrics with customizable edit costs and Winkler-like bonus for common prefix. | 3 years ago |
| [nan](https://github.com/kak-tus/nan) | 75 | Zero allocation Nullable structures in one library with handy conversion functions, marshallers and unmarshallers | a month ago |
| [timedmap](https://github.com/zekroTJA/timedmap) | 64 | A thread safe map which has expiring key-value pairs. | 4 months ago |
| [count-min-log](https://github.com/seiflotfy/count-min-log) | 63 | Go implementation of Count-Min-Log | 6 years ago |
| [cmap](https://github.com/lrita/cmap) | 61 | a thread-safe concurrent map for go | 8 months ago |
| [hide](https://github.com/emvi/hide) | 54 | ID type with marshalling to/from hash to prevent sending IDs to clients. | 2 years ago |
| [goset](https://github.com/zoumo/goset) | 51 | Set is a useful collection but there is no built-in implementation in Go lang. | 3 years ago |
| [pipeline](https://github.com/hyfather/pipeline) | 50 | Pipelines using goroutines | 2 years ago |
| [concurrent-writer](https://github.com/free/concurrent-writer) | 49 | Highly concurrent drop-in replacement for bufio.Writer | 6 years ago |
| [typ](https://github.com/gurukami/typ) | 42 | Null Types, Safe primitive type conversion and fetching value from complex structures. | 2 years ago |
| [dict](https://github.com/srfrog/dict) | 39 | Python-like dictionaries for Go | 3 years ago |
| [ptrie](https://github.com/viant/ptrie) | 33 | A prefix tree implementation in go  | a year ago |
| [null](https://github.com/emvi/null) | 31 | Nullable Go types that can be marshalled/unmarshalled to/from JSON. | 2 years ago |
| [go-ef](https://github.com/amallia/go-ef) | 30 | A Go implementation of the Elias-Fano encoding | 6 years ago |
| [mspm](https://github.com/BlackRabbitt/mspm) | 24 | Multi-String Pattern Matching Algorithm Using TrieNode | 5 years ago |
| [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) | 23 | Ordered-concurrently a library for concurrent processing with ordered output in Go. Process work concurrently and returns output in a channel in the order of input. It is useful in concurrently processing items in a queue, and get output in the order provided by the queue. | 3 months ago |
| [parapipe](https://github.com/nazar256/parapipe) | 23 | Paralleling pipeline | 2 years ago |
| [set](https://github.com/StudioSol/set) | 23 | A simple Set data structure implementation in Go (Golang) using LinkedHashMap. | a year ago |
| [treap](https://github.com/perdata/treap) | 22 | golang persistent immutable treap sorted sets | 4 years ago |
| [gofal](https://github.com/xxjwxc/gofal) | 17 | fractional api base on golang . golang math tools fractional molecular denominator 分数计算 分子 分母 运算 | 4 years ago |
| [hashsplit](https://github.com/bobg/hashsplit) | 16 |  | 2 years ago |
| [goterator](https://github.com/yaa110/goterator) | 14 | Lazy iterator implementation for Golang | 3 years ago |
| [bloomfilter](https://github.com/OldPanda/bloomfilter) | 13 | Yet another Bloomfilter implementation in Go, compatible with Java's Guava library | 6 months ago |
| [slices](https://github.com/srfrog/slices) | 13 | Functions that operate on slices. Similar to functions from package strings or package bytes that have been adapted to work with slices. | 3 years ago |
| [dsu](https://github.com/ihebu/dsu) | 11 | Disjoint Set data structure implementation in Go | 2 years ago |
| [gdcache](https://github.com/ulovecode/gdcache) | 10 | gdcache is a pure non-intrusive cache library implemented by golang, you can use it to implement your own cache. | 2 years ago |
| [merkle](https://github.com/bobg/merkle) | 10 | Merkle hash trees | a year ago |
| [parsefields](https://github.com/MonaxGT/parsefields) | 7 | Tools for parse JSON-like logs for collecting unique fields and events | 4 years ago |


### [Database](#Database)
* Databases in Go.

#### [Databases implemented in Go](#Databases-implemented-in-Go)
* Databases implemented in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [prometheus](https://github.com/prometheus/prometheus) | 49381 | The Prometheus monitoring system and time series database. | 22 minutes ago |
| [tidb](https://github.com/pingcap/tidb) | 34555 | TiDB is an open-source, cloud-native, distributed, MySQL-Compatible database for elastic scale and real-time analytics. Try AI-powered Chat2Query free at : https://tidbcloud.com/free-trial | 9 minutes ago |
| [leveldb](https://github.com/google/leveldb) | 33261 | LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values. | a month ago |
| [cockroach](https://github.com/cockroachdb/cockroach) | 27557 | CockroachDB - the open source, cloud-native distributed SQL database. | 3 hours ago |
| [influxdb](https://github.com/influxdata/influxdb) | 25920 | Scalable datastore for metrics, events, and real-time analytics | a day ago |
| [milvus](https://github.com/milvus-io/milvus) | 21961 | A cloud-native vector database, storage for next generation AI applications | 14 minutes ago |
| [dgraph](https://github.com/dgraph-io/dgraph) | 19508 | Native GraphQL Database with graph backend | 13 minutes ago |
| [rqlite](https://github.com/rqlite/rqlite) | 13911 | The lightweight, distributed relational database built on SQLite | 6 hours ago |
| [badger](https://github.com/dgraph-io/badger) | 12548 | Fast key-value DB in Go. | 7 hours ago |
| [groupcache](https://github.com/golang/groupcache) | 12245 | groupcache is a caching and cache-filling library, intended as a replacement for memcached in many cases. | 5 months ago |
| [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) | 9018 | VictoriaMetrics: fast, cost-effective monitoring solution and time series database | an hour ago |
| [dtm](https://github.com/dtm-labs/dtm) | 8977 | A distributed transaction framework, supports workflow, saga, tcc, xa, 2-phase message, outbox patterns, supports many languages. | 16 days ago |
| [immudb](https://github.com/codenotary/immudb) | 8315 | immudb - immutable database based on zero trust, SQL/Key-Value/Document model, tamperproof, data change history | 10 hours ago |
| [go-cache](https://github.com/patrickmn/go-cache) | 7311 | An in-memory key:value store/cache (similar to Memcached) library for Go, suitable for single-machine applications. | 7 months ago |
| [bbolt](https://github.com/etcd-io/bbolt) | 6772 | An embedded key/value database for Go. | 17 hours ago |
| [bigcache](https://github.com/allegro/bigcache) | 6695 | Efficient cache for gigabytes of data written in Go. | a month ago |
| [goleveldb](https://github.com/syndtr/goleveldb) | 5798 | LevelDB key/value database in Go. | 7 days ago |
| [buntdb](https://github.com/tidwall/buntdb) | 4167 | BuntDB is an embeddable, in-memory key/value database for Go with custom indexing and geospatial support | 2 months ago |
| [ledisdb](https://github.com/ledisdb/ledisdb) | 3989 | A high performance NoSQL Database Server powered by Go | 2 months ago |
| [rosedb](https://github.com/rosedblabs/rosedb) | 3908 | Lightweight, fast and reliable key/value storage engine based on Bitcask. | 20 hours ago |
| [nutsdb](https://github.com/nutsdb/nutsdb) | 2963 | A simple, fast, embeddable, persistent key/value store written in pure Go. It supports fully serializable transactions and many data structures such as  list, set, sorted set. | 5 hours ago |
| [godis](https://github.com/HDT3213/godis) | 2944 | A Golang implemented Redis Server and Cluster. Go 语言实现的 Redis 服务器和分布式集群 | 3 days ago |
| [tiedot](https://github.com/HouzuoGuo/tiedot) | 2715 | A rudimentary implementation of a basic document (NoSQL) database in Go | 2 years ago |
| [gcache](https://github.com/bluele/gcache) | 2404 | An in-memory cache library for golang. It supports multiple eviction policies: LRU, LFU, ARC | 8 months ago |
| [cache2go](https://github.com/muesli/cache2go) | 2000 | Concurrency-safe Go caching library with expiration capabilities and access counters | 4 months ago |
| [fastcache](https://github.com/VictoriaMetrics/fastcache) | 1808 | Fast thread-safe inmemory cache for big number of entries in Go. Minimizes GC overhead | an hour ago |
| [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) | 1445 | A decentralized, trusted, high performance, SQL database with blockchain features | 5 months ago |
| [diskv](https://github.com/peterbourgon/diskv) | 1293 | A disk-backed key-value store. | 2 years ago |
| [column](https://github.com/kelindar/column) | 1276 | High-performance, columnar, in-memory store with bitmap indexing in Go | a month ago |
| [databunker](https://github.com/securitybunker/databunker) | 1106 | Secure SDK/vault for personal records/PII built to comply with GDPR | 22 days ago |
| [pogreb](https://github.com/akrylysov/pogreb) | 1095 | Embedded key-value store for read-heavy workloads written in Go | 6 hours ago |
| [eliasdb](https://github.com/krotik/eliasdb) | 972 | EliasDB a graph-based database. | a year ago |
| [moss](https://github.com/couchbase/moss) | 929 | moss - a simple, fast, ordered, persistable, key-val storage library for golang | a year ago |
| [levigo](https://github.com/jmhodges/levigo) | 417 | levigo is a Go wrapper for LevelDB | a year ago |
| [pudge](https://github.com/recoilme/pudge) | 343 | Fast and simple key/value store written using Go's standard library | 2 years ago |
| [kivik](https://github.com/go-kivik/kivik) | 276 | Kivik provides a common interface to CouchDB or CouchDB-like databases for Go and GopherJS. | 9 days ago |
| [vasto](https://github.com/chrislusf/vasto) | 249 | A distributed key-value store. On Disk. Able to grow or shrink without service interruption. | 4 years ago |
| [piladb](https://github.com/fern4lvarez/piladb) | 201 | Lightweight RESTful database engine based on stack data structures | 3 years ago |
| [golang-scribble](https://github.com/nanobox-io/golang-scribble) | 164 | A tiny Golang JSON database | 4 years ago |
| [cache](https://github.com/akyoto/cache) | 140 | :handbag: Cache arbitrary data with an expiration time. | 9 months ago |
| [bcache](https://github.com/iwanbk/bcache) | 125 | Eventually consistent distributed in-memory  cache Go library | 7 months ago |
| [unitdb](https://github.com/unit-io/unitdb) | 108 | Fast specialized time-series database for IoT, real-time internet connected devices and AI analytics. | 5 months ago |
| [slowpoke](https://github.com/recoilme/slowpoke) | 100 | Low-level key/value store in pure Go.  | 4 years ago |
| [hare](https://github.com/jameycribbs/hare) | 78 | Hare is a nimble little database management system for Go. | 2 years ago |
| [couchcache](https://github.com/codingsince1985/couchcache) | 60 | A RESTful caching micro-service in Go backed by Couchbase | 8 months ago |
| [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) | 43 | golang bigcache with clustering as a library. | 6 years ago |
| [coffer](https://github.com/claygod/coffer) | 34 | Simply ACID* key-value database. At the medium or even low latency it tries to provide greater throughput without losing the ACID properties of the database. The database provides the ability to create record headers at own discretion and use them as transactions. The maximum size of stored data is limited by the size of the computer's RAM. | 4 months ago |
| [tempdb](https://github.com/rafaeljesus/tempdb) | 17 | Key-value store for temporary items :memo: | 5 years ago |
| [ttlcache](https://github.com/cheshir/ttlcache) | 9 | Simple in-memory key-value storage with TTL for each record. | 10 months ago |


#### [Database schema migration](#Database-schema-migration)
* Database schema migration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [migrate](https://github.com/golang-migrate/migrate) | 11977 | Database migrations. CLI and Golang library. | 2 days ago |
| [goose](https://github.com/pressly/goose) | 4215 | A database migration tool. Supports SQL migrations and Go functions.  | 3 days ago |
| [sql-migrate](https://github.com/rubenv/sql-migrate) | 2906 | SQL schema migration tool for Go. | 19 days ago |
| [pop](https://github.com/gobuffalo/pop) | 1360 | A Tasty Treat For All Your Database Needs | 14 days ago |
| [skeema](https://github.com/skeema/skeema) | 1162 | Declarative pure-SQL schema management for MySQL and MariaDB | 4 days ago |
| [gormigrate](https://github.com/go-gormigrate/gormigrate) | 918 | Minimalistic database migration helper for Gorm ORM | a month ago |
| [goavro](https://github.com/linkedin/goavro) | 903 |  | 24 days ago |
| [migrator](https://github.com/lopezator/migrator) | 154 | Dead simple Go database migration library. | 5 months ago |
| [darwin](https://github.com/GuiaBolso/darwin) | 135 | Database schema evolution library for Go | 5 months ago |
| [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) | 83 | A Go package to help write migrations with go-pg/pg. | 5 months ago |
| [sqlize](https://github.com/sunary/sqlize) | 64 | sql migration schema generate from models | 2 months ago |
| [avro](https://github.com/khezen/avro) | 43 | Apache AVRO for go | 2 years ago |
| [go-fixtures](https://github.com/RichardKnop/go-fixtures) | 29 | Django style fixtures for Golang's excellent built-in database/sql library. | 4 years ago |
| [pravasan](https://github.com/pravasan/pravasan) | 29 | Simple Migration Tool - written in Go | 5 years ago |
| [schema](https://github.com/adlio/schema) | 29 | Embedded schema migration package for Go | 4 months ago |
| [migrator](https://github.com/larapulse/migrator) | 24 | MySQL database migrator | a year ago |
| [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) | 11 | CLI-friendly package for pg migrations management. | 8 months ago |


#### [Database tools.](#Database-tools)
* Database-tools.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vitess](https://github.com/vitessio/vitess) | 16605 | Vitess is a database clustering system for horizontal scaling of MySQL. | a minute ago |
| [pgweb](https://github.com/sosedoff/pgweb) | 7989 | Cross-platform client for PostgreSQL databases | 20 days ago |
| [kingshard](https://github.com/flike/kingshard) | 6230 | A high-performance MySQL proxy | 2 years ago |
| [orchestrator](https://github.com/openark/orchestrator) | 5110 | MySQL replication topology management and HA | 2 months ago |
| [go-mysql](https://github.com/go-mysql-org/go-mysql) | 4163 | a powerful mysql toolset with Go | 4 hours ago |
| [go-mysql-elasticsearch](https://github.com/go-mysql-org/go-mysql-elasticsearch) | 3986 | Sync MySQL data into elasticsearch  | a year ago |
| [prest](https://github.com/prest/prest) | 3864 | PostgreSQL ➕ REST, low-code, simplify and accelerate development, ⚡ instant, realtime, high-performance on any Postgres application, existing or new | 2 months ago |
| [chproxy](https://github.com/ContentSquare/chproxy) | 1126 | Open-Source ClickHouse http proxy and load balancer | 6 days ago |
| [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) | 895 | pg_timetable: Advanced scheduling for PostgreSQL | a day ago |
| [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) | 427 | Collects many small inserts to ClickHouse and send in big inserts | 19 days ago |
| [myreplication](https://github.com/2tvenom/myreplication) | 190 | Golang MySql binary log replication listener | 5 years ago |
| [octillery](https://github.com/blastrain/octillery) | 183 | Go package for sharding databases ( Supports every ORM or raw SQL ) | 2 years ago |
| [dbbench](https://github.com/sj14/dbbench) | 88 | 🏋️ dbbench is a simple database benchmarking tool which supports several databases and own scripts | 3 hours ago |
| [datagen](https://github.com/codingconcepts/datagen) | 56 | A fast data generator that's multi-table aware and supports multi-row DML. | 2 months ago |
| [prep](https://github.com/hexdigest/prep) | 33 | Prep finds all SQL statements in a Go package and instruments db connection with prepared statements | 6 years ago |
| [rwdb](https://github.com/andizzle/rwdb) | 18 | Database wrapper that manage read write connections | 6 years ago |


#### [SQL query builder](#SQL-query-builder)
* SQL query builder, libraries for building and using SQL.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [squirrel](https://github.com/Masterminds/squirrel) | 5938 | Fluent SQL generation for golang | 2 months ago |
| [xo](https://github.com/xo/xo) | 3409 | Command line tool to generate idiomatic Go code for SQL databases supporting PostgreSQL, MySQL, SQLite, Oracle, and Microsoft SQL Server | 8 days ago |
| [goqu](https://github.com/doug-martin/goqu) | 1940 | SQL builder and query library for golang | 5 days ago |
| [gendry](https://github.com/didi/gendry) | 1508 | a golang library for sql builder | 3 months ago |
| [jet](https://github.com/go-jet/jet) | 1379 | Type safe SQL builder with code generation and automatic query result data mapping | 5 days ago |
| [dotsql](https://github.com/qustavo/dotsql) | 677 | A Golang library for using SQL. | a year ago |
| [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) | 607 | A Go (golang) package that enhances the standard database/sql package by providing powerful data retrieval methods as well as DB-agnostic query building capabilities. | 3 months ago |
| [dbq](https://github.com/rocketlaunchr/dbq) | 387 | Zero boilerplate database operations for Go | 2 years ago |
| [sqlingo](https://github.com/lqs/sqlingo) | 328 | 💥 A lightweight DSL & ORM which helps you to write SQL in Go. | 5 days ago |
| [sqrl](https://github.com/elgris/sqrl) | 257 | Fluent SQL generation for golang | 2 months ago |
| [go-structured-query](https://github.com/bokwoon95/go-structured-query) | 193 | Type safe SQL query builder and struct mapper for Go | 7 months ago |
| [sqlf](https://github.com/leporo/sqlf) | 124 | Fast SQL query builder for Go | 4 months ago |
| [buildsqlx](https://github.com/arthurkushman/buildsqlx) | 122 | Go database query builder library for PostgreSQL | 24 days ago |
| [igor](https://github.com/galeone/igor) | 111 | igor is an abstraction layer for PostgreSQL with a gorm like syntax. | a month ago |
| [godbal](https://github.com/xujiajun/godbal) | 58 | Database Abstraction Layer (dbal) for Go. Support SQL builder and get result easily  (now only support mysql) | 5 years ago |
| [gosql](https://github.com/twharmon/gosql) | 30 | SQL query builder for Go | a year ago |
| [qry](https://github.com/HnH/qry) | 29 | Write your SQL queries in raw files with all benefits of modern IDEs, use them in an easy way inside your application with all the profit of compile time constants | 2 years ago |
| [mpath-go](https://github.com/spacetab-io/mpath-go) | 12 | Golang package for MPTT (Modified Preorder Tree Traversal) - materialized path realisation. | 4 years ago |
| [ormlite](https://github.com/pupizoid/ormlite) | 11 | Lightweight package containing some ORM-like features and helpers for sqlite databases. | 6 months ago |


### [Database Drivers](#Database-Drivers)
* Libraries for connecting and operating databases.

#### [Relational Databases](#Relational-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mysql](https://github.com/go-sql-driver/mysql) | 13563 | Go MySQL Driver is a MySQL driver for Go's (golang) database/sql package | a day ago |
| [pq](https://github.com/lib/pq) | 8220 | Pure Go Postgres driver for database/sql | a month ago |
| [pgx](https://github.com/jackc/pgx) | 7535 | PostgreSQL driver and toolkit for Go | 3 days ago |
| [go-sqlite3](https://github.com/mattn/go-sqlite3) | 6773 | sqlite3 driver for go using database/sql | 24 days ago |
| [go-mssqldb](https://github.com/denisenkom/go-mssqldb) | 1750 | Microsoft SQL server driver written in go language | 2 months ago |
| [scany](https://github.com/georgysavva/scany) | 968 | Library for scanning data from a database into Go structs and more | 5 months ago |
| [go-oci8](https://github.com/mattn/go-oci8) | 608 | Oracle driver for Go using database/sql | 2 years ago |
| [godror](https://github.com/godror/godror) | 450 | GO DRiver for ORacle DB | 21 days ago |
| [firebirdsql](https://github.com/nakagami/firebirdsql) | 201 | Firebird RDBMS sql driver for Go (golang) | 2 months ago |
| [sqinn-go](https://github.com/cvilsmeier/sqinn-go) | 139 | SQLite with pure Go | 2 years ago |
| [go-adodb](https://github.com/mattn/go-adodb) | 133 | Microsoft ActiveX Object DataBase driver for go that using exp/sql | a year ago |
| [calcite-avatica-go](https://github.com/apache/calcite-avatica-go) | 109 | Mirror of Apache Calcite - Avatica Go SQL Driver | 22 days ago |
| [gofreetds](https://github.com/minus5/gofreetds) | 109 | Go Sql Server database driver. | 3 years ago |
| [bgc](https://github.com/viant/bgc) | 20 | Datastore Connectivity for BigQuery in go | 3 years ago |
| [pig](https://github.com/alexeyco/pig) | 13 | Simple pgx wrapper to execute and scan query results | 2 years ago |


#### [NoSQL Databases](#NoSQL-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-redis](https://github.com/redis/go-redis) | 17697 | Redis Go client | a day ago |
| [redigo](https://github.com/gomodule/redigo) | 9578 | Go client for Redis | 2 months ago |
| [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) | 7548 | The Official Golang driver for MongoDB | 10 hours ago |
| [mgo](https://github.com/globalsign/mgo) | 1963 | The MongoDB driver for Go | 2 years ago |
| [rethinkdb-go](https://github.com/rethinkdb/rethinkdb-go) | 1635 | Go language driver for RethinkDB | 20 days ago |
| [gomemcache](https://github.com/bradfitz/gomemcache) | 1630 | Go Memcached client library #golang | 2 months ago |
| [qmgo](https://github.com/qiniu/qmgo) | 1163 | Qmgo - The Go driver for MongoDB. It‘s based on official mongo-go-driver but easier to use like Mgo. | a month ago |
| [mgm](https://github.com/Kamva/mgm) | 679 | Mongo Go Models (mgm) is a fast and simple MongoDB ODM for Go (based on official Mongo Go Driver) | 6 months ago |
| [redeo](https://github.com/bsm/redeo) | 426 | High-performance framework for building redis-protocol compatible TCP servers/services | 7 months ago |
| [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) | 411 | Aerospike Client Go  | 8 days ago |
| [neoism](https://github.com/jmcvetta/neoism) | 389 | Neo4j client for Golang | 3 years ago |
| [gocb](https://github.com/couchbase/gocb) | 344 | The Couchbase Go SDK | 36 minutes ago |
| [go-rejson](https://github.com/nitishm/go-rejson) | 321 | Golang client for redislabs' ReJSON module with support for multilple redis clients (redigo, go-redis) | 4 months ago |
| [go-couchbase](https://github.com/couchbase/go-couchbase) | 315 | Couchbase client in Go | 8 months ago |
| [godis](https://github.com/piaohao/godis) | 109 | redis client implement by golang, inspired by jedis. | 3 years ago |
| [Neo4j-GO](https://github.com/davemeehan/Neo4j-GO) | 76 | Neo4j REST Client in golang | 5 years ago |
| [arangolite](https://github.com/solher/arangolite) | 73 | Lightweight Golang driver for ArangoDB | 2 years ago |
| [go-pilosa](https://github.com/FeatureBaseDB/go-pilosa) | 58 | Go client library for Pilosa | 10 months ago |
| [goforestdb](https://github.com/couchbase/goforestdb) | 33 | Go bindings for ForestDB | 7 years ago |
| [goriak](https://github.com/zegl/goriak) | 30 | goriak - Go language driver for Riak KV | 2 years ago |
| [neo4j](https://github.com/cihangir/neo4j) | 27 | Neo4j Rest API Client for Go lang | 8 years ago |
| [xredis](https://github.com/shomali11/xredis) | 19 | Go Redis Client | 4 years ago |
| [gocosmos](https://github.com/btnguyen2k/gocosmos) | 17 | Go database/sql driver for Azure Cosmos DB SQL API | 15 days ago |
| [godscache](https://github.com/defcronyke/godscache) | 11 | An unofficial Google Cloud Platform Go Datastore wrapper that adds caching using memcached. For App Engine Flexible, Compute Engine, Kubernetes Engine, and more. | 5 years ago |
| [asc](https://github.com/viant/asc) | 9 | Datastore Connectivity for Aerospike for go | 4 years ago |


#### [Search and Analytic Databases](#Search-and-Analytic-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bleve](https://github.com/blevesearch/bleve) | 9187 | A modern text indexing library for go | 5 days ago |
| [elastic](https://github.com/olivere/elastic) | 7198 | Deprecated: Use the official Elasticsearch client for Go at https://github.com/elastic/go-elasticsearch | 15 days ago |
| [riot](https://github.com/go-ego/riot) | 6099 | Go Open Source, Distributed, Simple and efficient Search Engine; Warning: This is V1 and beta version, because of big memory consume, and the V2 will be rewrite all code. | 3 years ago |
| [go-elasticsearch](https://github.com/elastic/go-elasticsearch) | 5077 | The official Go client for Elasticsearch | 12 days ago |
| [elasticsql](https://github.com/cch123/elasticsql) | 1076 | convert sql to elasticsearch DSL in golang(go) | 2 days ago |
| [elastigo](https://github.com/mattbaird/elastigo) | 951 | A Go (golang) based Elasticsearch client library. | 5 years ago |
| [skizze](https://github.com/seiflotfy/skizze) | 88 | A probabilistic data structure service and storage | 7 years ago |
| [goes](https://github.com/OwnLocal/goes) | 29 | A library to interact with Elasticsearch in Go! | 3 years ago |


#### [Multiple Backends](#Multiple-Backends)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cayley](https://github.com/cayleygraph/cayley) | 14609 | An open-source graph database | a day ago |
| [gokv](https://github.com/philippgille/gokv) | 571 | Simple key-value store abstraction and implementations for Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB and many more) | 5 months ago |
| [cachego](https://github.com/faabiosr/cachego) | 285 | Golang Cache component - Multiple drivers | 2 months ago |
| [dsc](https://github.com/viant/dsc) | 27 | Datastore Connectivity in go | 2 months ago |


### [Date and Time](#Date-and-Time)
* Libraries for working with dates and times.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [now](https://github.com/jinzhu/now) | 4205 | Now is a time toolkit for golang | 3 months ago |
| [carbon](https://github.com/golang-module/carbon) | 3370 | A simple, semantic and developer-friendly golang package for datetime | 15 days ago |
| [dateparse](https://github.com/araddon/dateparse) | 1890 | GoLang Parse many date strings without knowing format in advance. | 13 hours ago |
| [carbon](https://github.com/uniplaces/carbon) | 763 | Carbon for Golang, an extension for Time | a year ago |
| [durafmt](https://github.com/hako/durafmt) | 465 | :clock8:  Better time duration formatting in Go!  | 2 years ago |
| [timeutil](https://github.com/leekchan/timeutil) | 193 | timeutil - useful extensions (Timedelta, Strftime, ...) to the golang's time package | 5 years ago |
| [gostradamus](https://github.com/bykof/gostradamus) | 181 | Gostradamus: Better DateTimes for Go 🕰️ | 8 months ago |
| [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) | 165 | The implementation of Persian (Solar Hijri) Calendar in Go | a month ago |
| [iso8601](https://github.com/relvacode/iso8601) | 126 | A fast ISO8601 date parser for Go | a month ago |
| [date](https://github.com/rickb777/date) | 114 | A Go package for working with dates | a month ago |
| [timespan](https://github.com/SaidinWoT/timespan) | 82 | Golang package to manipulate time intervals. | 4 years ago |
| [go-str2duration](https://github.com/xhit/go-str2duration) | 77 | Convert string to duration in golang | 8 months ago |
| [go-sunrise](https://github.com/nathan-osman/go-sunrise) | 74 | Go package for calculating the sunrise and sunset times for a given location | 3 months ago |
| [feiertage](https://github.com/wlbr/feiertage) | 43 | Gesetzliche Feiertage und mehr in Deutschland und Österreich (Bank holidays/public holidays in Austria and Germany) | 9 months ago |
| [kair](https://github.com/GuilhermeCaruso/kair) | 25 | :clock1: Date and Time - Golang Formatting Library | 3 years ago |
| [cronrange](https://github.com/1set/cronrange) | 18 | time range expression in cron style | a year ago |
| [nulltime](https://github.com/kirillDanshin/nulltime) | 14 |  | 6 years ago |
| [strftime](https://github.com/awoodbeck/strftime) | 12 | C99-compatible strftime formatter for use with Go time.Time instances. | 5 years ago |
| [tuesday](https://github.com/osteele/tuesday) | 12 | Ruby-compatible strftime for golang | 2 years ago |
| [go-week](https://github.com/stoewer/go-week) | 8 | A Go package to work with ISO 8601 week dates | 2 years ago |


### [Distributed Systems](#Distributed-Systems)
* Packages that help with building Distributed Systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [etcd](https://github.com/etcd-io/etcd) | 44154 | Distributed reliable key-value store for the most critical data of a distributed system | 12 hours ago |
| [kit](https://github.com/go-kit/kit) | 25278 | A standard library for microservices. | 2 months ago |
| [go-zero](https://github.com/zeromicro/go-zero) | 25120 | A cloud-native Go microservices framework with cli tool for productivity. | 12 hours ago |
| [kratos](https://github.com/go-kratos/kratos) | 21126 | Your ultimate Go microservices framework for the cloud-native era. | 3 hours ago |
| [go-micro](https://github.com/go-micro/go-micro) | 20712 | A Go microservices framework | a day ago |
| [grpc-go](https://github.com/grpc/grpc-go) | 18563 | The Go language implementation of gRPC. HTTP/2 based RPC | 5 hours ago |
| [nats-server](https://github.com/nats-io/nats-server) | 13336 | High-Performance server for NATS.io, the cloud and edge native messaging system. | 34 minutes ago |
| [micro](https://github.com/micro/micro) | 11843 | API first development platform | 11 days ago |
| [libzmq](https://github.com/zeromq/libzmq) | 8670 | ZeroMQ core engine in C++, implements ZMTP/3.1 | 18 days ago |
| [rpcx](https://github.com/smallnest/rpcx) | 7681 | Best microservices framework in Go, like alibaba Dubbo, but with more features, Scale easily. Try it. Test it. If you feel it's better, use it! 𝐉𝐚𝐯𝐚有𝐝𝐮𝐛𝐛𝐨, 𝐆𝐨𝐥𝐚𝐧𝐠有𝐫𝐩𝐜𝐱! build for cloud! | 3 days ago |
| [raft](https://github.com/hashicorp/raft) | 7304 | Golang implementation of the Raft consensus protocol | 21 days ago |
| [lura](https://github.com/luraproject/lura) | 5675 | Ultra performant API Gateway with middlewares. A project hosted at The Linux Foundation | 11 days ago |
| [torrent](https://github.com/anacrolix/torrent) | 4873 | Full-featured BitTorrent client package and utilities | 16 days ago |
| [dragonboat](https://github.com/lni/dragonboat) | 4696 | A feature complete and high performance multi-group Raft library in Go.   | a month ago |
| [emitter](https://github.com/emitter-io/emitter) | 3602 | High performance, distributed and low latency publish-subscribe platform. | 8 days ago |
| [gleam](https://github.com/chrislusf/gleam) | 3226 | Fast, efficient, and scalable distributed map/reduce system, DAG execution, in memory or on disk, written in pure Go, runs standalone or distributedly. | 2 years ago |
| [glow](https://github.com/chrislusf/glow) | 3148 | Glow is an easy-to-use distributed computation system written in Go, similar to Hadoop Map Reduce, Spark, Flink, Storm, etc. I am also working on another similar pure Go system, https://github.com/chrislusf/gleam , which is more flexible and more performant. | 5 years ago |
| [liftbridge](https://github.com/liftbridge-io/liftbridge) | 2470 | Lightweight, fault-tolerant message streams. | 25 days ago |
| [hprose-golang](https://github.com/hprose/hprose-golang) | 1240 | Hprose is a cross-language RPC. This project is Hprose for Golang. | 6 months ago |
| [go-doudou](https://github.com/unionj-cloud/go-doudou) | 1209 | go-doudou（doudou pronounce /dəudəu/）is OpenAPI 3.0 (for REST) spec and Protobuf v3 (for grpc) based lightweight microservice framework. It supports monolith service application as well. | 5 days ago |
| [redislock](https://github.com/bsm/redislock) | 1083 | Simplified distributed locking implementation using Redis | 12 days ago |
| [rain](https://github.com/cenkalti/rain) | 857 | 🌧 BitTorrent client and library in Go | 11 hours ago |
| [arpc](https://github.com/lesismal/arpc) | 788 | More effective network communication, two-way calling, notify and broadcast supported. | 2 months ago |
| [ringpop-go](https://github.com/uber/ringpop-go) | 786 | Scalable, fault-tolerant application-layer sharding for Go applications | 5 months ago |
| [go-health](https://github.com/InVisionApp/go-health) | 703 | Library for enabling asynchronous health checks in your service | 15 days ago |
| [gorpc](https://github.com/valyala/gorpc) | 680 | Simple, fast and scalable golang rpc library for high load | 10 months ago |
| [consistent](https://github.com/buraksezer/consistent) | 608 | Consistent hashing with bounded loads in Golang | 8 months ago |
| [go-sundheit](https://github.com/AppsFlyer/go-sundheit) | 511 | A library built to provide support for defining service health for golang services. It allows you to register async health checks for your dependencies and the service itself, provides a health endpoint that exposes their status, and health metrics. | 3 months ago |
| [digota](https://github.com/digota/digota) | 481 | ecommerce microservice | 2 years ago |
| [go-jump](https://github.com/dgryski/go-jump) | 367 | go-jump: Jump consistent hashing | 2 years ago |
| [sleuth](https://github.com/ursiform/sleuth) | 367 | A Go library for master-less peer-to-peer autodiscovery and RPC between HTTP services | a month ago |
| [jsonrpc](https://github.com/ybbus/jsonrpc) | 280 | A simple go implementation of json rpc 2.0 client over http | 5 months ago |
| [dht](https://github.com/anacrolix/dht) | 268 | dht is used by anacrolix/torrent, and is intended for use as a library in other projects both torrent related and otherwise | 4 months ago |
| [jsonrpc](https://github.com/osamingo/jsonrpc) | 180 | The jsonrpc package helps implement of JSON-RPC 2.0 | 3 months ago |
| [outboxer](https://github.com/italolelis/outboxer) | 137 | A library that implements the outboxer pattern in go | 20 hours ago |
| [doublejump](https://github.com/edwingeng/doublejump) | 88 | A revamped Google's jump consistent hash | 10 months ago |
| [semaphore](https://github.com/jexia/semaphore) | 85 | Take control of your data, connect with anything, and expose it anywhere through protocols such as HTTP, GraphQL, and gRPC. | 5 months ago |
| [dot](https://github.com/dotchain/dot) | 80 | distributed data sync with operational transformation/transforms  | 4 years ago |
| [celeriac.v1](https://github.com/svcavallar/celeriac.v1) | 71 | Golang client library for adding support for interacting and monitoring Celery workers, tasks and events. | 3 months ago |
| [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) | 55 | MySQL Backed Locking Primitive | 2 months ago |
| [flowgraph](https://github.com/vectaport/flowgraph) | 52 | Flowgraph package for scalable asynchronous system development | 2 years ago |
| [go-pdu](https://github.com/pdupub/go-pdu) | 47 | Go implementation of PDU - A decentralized SNS backbone | an hour ago |
| [drmaa](https://github.com/dgruber/drmaa) | 44 | Compute cluster (HPC) job submission library for Go (#golang) based on the open DRMAA standard. | a year ago |
| [micro](https://github.com/gmsec/micro) | 22 | A Go distributed systems development framework | 2 months ago |
| [consistenthash](https://github.com/mbrostami/consistenthash) | 19 | A Go library that implements Consistent Hashing | a year ago |
| [dynatomic](https://github.com/tylfin/dynatomic) | 15 | Dynatomic is a library for using dynamodb as an atomic counter | 3 years ago |
| [failured](https://github.com/andy2046/failured) | 10 | Adaptive Accrual Failure Detector | 2 years ago |


### [Dynamic DNS](#Dynamic-DNS)
* Tools for updating dynamic DNS records.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [godns](https://github.com/TimothyYe/godns) | 1332 | A dynamic DNS client tool supports AliDNS, Cloudflare, Google Domains, DNSPod, HE.net & DuckDNS & DreamHost, etc, written in Go. | 2 months ago |
| [ddns](https://github.com/skibish/ddns) | 237 | Personal DDNS client with Digital Ocean Networking DNS as backend. | 6 months ago |


### [Email](#Email)
* Libraries and tools that implement email creation and sending.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [MailHog](https://github.com/mailhog/MailHog) | 12367 | Web and API based SMTP testing | 3 months ago |
| [hermes](https://github.com/matcornic/hermes) | 2655 | Golang package that generates clean, responsive HTML e-mails for sending transactional mail | 18 days ago |
| [email](https://github.com/jordan-wright/email) | 2390 | Robust and flexible email library for Go | a month ago |
| [go-imap](https://github.com/emersion/go-imap) | 1817 |  :inbox_tray: An IMAP library for clients and servers | 12 hours ago |
| [email-verifier](https://github.com/AfterShip/email-verifier) | 924 | :white_check_mark: A Go library for email verification without sending any emails. | a day ago |
| [sendgrid-go](https://github.com/sendgrid/sendgrid-go) | 916 | The Official Twilio SendGrid Golang API Library | 2 days ago |
| [mailgun-go](https://github.com/mailgun/mailgun-go) | 656 | Go library for sending mail with the Mailgun API. | 7 days ago |
| [go-simple-mail](https://github.com/xhit/go-simple-mail) | 501 | Golang package for send email. Support keep alive connection, TLS and SSL. Easy for bulk SMTP. | 4 days ago |
| [go-message](https://github.com/emersion/go-message) | 322 | :envelope: A streaming Go library for the Internet Message Format and mail messages | 4 days ago |
| [douceur](https://github.com/aymerick/douceur) | 230 | A simple CSS parser and inliner in Go | a year ago |
| [hectane](https://github.com/hectane/hectane) | 220 | Lightweight SMTP client written in Go | 3 years ago |
| [mailchain-legacy](https://github.com/mailchain/mailchain-legacy) | 139 | Using Mailchain, blockchain users can now send and receive rich-media HTML messages with attachments via a blockchain address. | a year ago |
| [go-premailer](https://github.com/vanng822/go-premailer) | 113 | Inline styling for html mail in golang | 4 months ago |
| [go-dkim](https://github.com/toorop/go-dkim) | 90 | DKIM package for golang | 3 years ago |
| [smtp](https://github.com/mailhog/smtp) | 75 | MailHog SMTP Protocol | 2 years ago |
| [go-email-validator](https://github.com/go-email-validator/go-email-validator) | 51 | 📧 Golang Email address validator | 6 days ago |


### [Embeddable Scripting Languages](#Embeddable-Scripting-Languages)
* Embedding other languages inside your go code.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopher-lua](https://github.com/yuin/gopher-lua) | 5583 | GopherLua: VM and compiler for Lua in Go | 5 days ago |
| [goja](https://github.com/dop251/goja) | 4108 | ECMAScript/JavaScript engine in pure Go | 2 days ago |
| [expr](https://github.com/antonmedv/expr) | 3932 | Expression language and expression evaluation for Go | 13 days ago |
| [tengo](https://github.com/d5/tengo) | 3246 | A fast script language for Go | 19 days ago |
| [go-lua](https://github.com/Shopify/go-lua) | 2748 | A Lua VM in Go | 5 months ago |
| [cel-go](https://github.com/google/cel-go) | 1714 | Fast, portable, non-Turing complete expression evaluation with gradual typing (Go) | 13 hours ago |
| [go-python](https://github.com/sbinet/go-python) | 1511 | naive go bindings to the CPython2 C-API | 15 days ago |
| [anko](https://github.com/mattn/anko) | 1356 | Scriptable interpreter written in golang | 18 days ago |
| [core](https://github.com/metacall/core) | 1316 | MetaCall: The ultimate polyglot programming experience. | 6 days ago |
| [go-php](https://github.com/deuill/go-php) | 900 | PHP bindings for the Go programming language (Golang) | 2 years ago |
| [go-duktape](https://github.com/olebedev/go-duktape) | 779 | [abandoned] Duktape JavaScript engine bindings for Go | 2 years ago |
| [gval](https://github.com/PaesslerAG/gval) | 641 | Expression evaluation in golang | 5 months ago |
| [golua](https://github.com/aarzilli/golua) | 617 | Go bindings for Lua C API - in progress | 2 years ago |
| [gisp](https://github.com/jcla1/gisp) | 502 | Simple LISP in Go | 6 years ago |
| [gentee](https://github.com/gentee/gentee) | 112 | Gentee - script programming language for automation. It uses VM and compiler written in Go (Golang). | 6 months ago |
| [binder](https://github.com/alexeyco/binder) | 66 | High level go to Lua binder. Write less, do more. | a year ago |
| [purl](https://github.com/ian-kent/purl) | 38 | Perl, but fluffy like a cat! | 9 years ago |
| [ecal](https://github.com/krotik/ecal) | 34 | A simple embeddable scripting language which supports concurrent event processing. | 2 years ago |
| [ngaro](https://github.com/db47h/ngaro) | 25 | An embeddable implementation of the Ngaro Virtual Machine for Go programs | 5 years ago |


### [Error Handling](#Error-Handling)
* Libraries for handling errors.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [errors](https://github.com/pkg/errors) | 8060 | Simple error handling primitives | 2 years ago |
| [go-multierror](https://github.com/hashicorp/go-multierror) | 2006 | A Go (golang) package for representing a list of errors as a single error. | 8 days ago |
| [eris](https://github.com/rotisserie/eris) | 1323 | Error handling library with readable stack traces and flexible formatting support 🎆 | 6 months ago |
| [errorx](https://github.com/joomcode/errorx) | 995 | A comprehensive error handling library for Go | a month ago |
| [tracerr](https://github.com/ztrue/tracerr) | 811 | Golang errors with stack trace and source fragments. | 3 months ago |
| [errlog](https://github.com/snwfdhmp/errlog) | 452 | Reduce debugging time while programming Go. Use static and stack-trace analysis to determine which func call causes the error. | a month ago |
| [emperror](https://github.com/emperror/emperror) | 310 | The Emperor takes care of all errors personally | 3 years ago |
| [errors](https://github.com/emperror/errors) | 180 | Drop-in replacement for the standard library errors package and github.com/pkg/errors | a year ago |
| [errors](https://github.com/bnkamalesh/errors) | 52 | A drop-in replacement for Go errors, with some added sugar! Unwrap user-friendly messages, HTTP status code, easy wrapping with multiple error types. | 2 months ago |
| [falcon](https://github.com/ThundR67/falcon) | 9 | A Simple Yet Highly Powerful Package For Error Handling | 4 years ago |
| [errors](https://github.com/PumpkinSeed/errors) | 8 | Simple and efficient error package  | a year ago |
| [errors](https://github.com/neuronlabs/errors) | 5 | Simple golang error handling with classification primitives. | 4 years ago |


### [File Handling](#File-Handling)
* Libraries for handling files and file systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [afero](https://github.com/spf13/afero) | 5277 | A FileSystem Abstraction System for Go | 13 hours ago |
| [pdfcpu](https://github.com/pdfcpu/pdfcpu) | 5177 | A PDF processor written in Go. | 18 hours ago |
| [gdu](https://github.com/dundee/gdu) | 2684 | Fast disk usage analyzer with console interface written in Go | 3 days ago |
| [todo.txt](https://github.com/todotxt/todo.txt) | 1954 | ‼️ A complete primer on the whys and hows of todo.txt. | 2 months ago |
| [notify](https://github.com/rjeczalik/notify) | 835 | File system event notification library on steroids. | 5 months ago |
| [copy](https://github.com/otiai10/copy) | 580 | Go copy directory recursively | 3 days ago |
| [afs](https://github.com/viant/afs) | 256 | Abstract File Storage | 5 days ago |
| [vfs](https://github.com/C2FO/vfs) | 248 | Pluggable, extensible virtual file system for Go | a month ago |
| [bigfile](https://github.com/bigfile/bigfile) | 241 | Bigfile -- a file transfer system that supports http, rpc and ftp protocol   https://bigfile.site   | 6 months ago |
| [go-exiftool](https://github.com/barasher/go-exiftool) | 178 | Golang wrapper for Exiftool : extract as much metadata as possible (EXIF, ...) from files (pictures, pdf, office documents, ...) | 2 months ago |
| [fs](https://github.com/kr/fs) | 131 | Package fs provides filesystem-related functions. | 2 years ago |
| [go-csv-tag](https://github.com/artonge/go-csv-tag) | 108 | Read csv file from go using tags | 22 days ago |
| [skywalker](https://github.com/dixonwille/skywalker) | 90 | A package to allow one to concurrently go through a filesystem with ease | 2 years ago |
| [checksum](https://github.com/codingsince1985/checksum) | 88 | Compute message digest for large files in Go | 5 months ago |
| [parquet](https://github.com/parsyl/parquet) | 83 | A library for reading and writing parquet files. | 19 days ago |
| [opc](https://github.com/qmuntal/opc) | 74 | Go implementation of the Open Packaging Conventions (OPC) | 2 years ago |
| [tarfs](https://github.com/posener/tarfs) | 56 | An implementation of the FileSystem interface for tar files. | 3 years ago |
| [baraka](https://github.com/xis/baraka) | 50 | a tool for handling file uploads simple | 10 months ago |
| [go-gtfs](https://github.com/artonge/go-gtfs) | 37 | Load GTFS files in golang | 22 days ago |
| [flop](https://github.com/homedepot/flop) | 34 | Go file operations library chasing GNU APIs. | 2 years ago |
| [gut](https://github.com/1set/gut) | 26 | 🍱 yet another collection of go utilities & tools | 3 years ago |
| [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) | 19 | copy files for humans | 4 years ago |
| [todotxt](https://github.com/1set/todotxt) | 19 | Parser for todo.txt files in Go ✅ | 2 months ago |
| [higgs](https://github.com/dastoori/higgs) | 17 | A tiny cross-platform Go library to hide/unhide files and directories | 2 years ago |
| [pathtype](https://github.com/jonchun/pathtype) | 12 | Add a type for paths in Go. | 2 years ago |


### [Financial](#Financial)
* Packages for accounting and finance.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [decimal](https://github.com/shopspring/decimal) | 5261 | Arbitrary-precision fixed-point decimal numbers in go | 16 days ago |
| [ticker](https://github.com/achannarasappa/ticker) | 4621 | Terminal stock ticker with live updates and position tracking | 2 months ago |
| [go-money](https://github.com/Rhymond/go-money) | 1340 | Go implementation of Fowler's Money pattern | 2 months ago |
| [accounting](https://github.com/leekchan/accounting) | 821 | money and currency formatting for golang | a year ago |
| [techan](https://github.com/sdcoffey/techan) | 736 | Technical Analysis Library for Golang | a year ago |
| [currency](https://github.com/bojanz/currency) | 412 | Currency handling for Go. | 4 months ago |
| [ach](https://github.com/moov-io/ach) | 378 | ACH implements a reader, writer, and validator for Automated Clearing House (ACH) files. The HTTP server is available in a Docker image and the Go package is available. | 14 hours ago |
| [orderbook](https://github.com/i25959341/orderbook) | 346 | Matching Engine for Limit Order Book in Golang | a month ago |
| [go-finance](https://github.com/alpeb/go-finance) | 150 | Go library containing a collection of financial functions for time value of money (annuities), cash flow, interest rate conversions, bonds and depreciation calculations. | 2 years ago |
| [transaction](https://github.com/claygod/transaction) | 123 | Embedded database for accounts transactions. | a year ago |
| [sleet](https://github.com/BoltApp/sleet) | 122 | Payment abstraction library - one interface for multiple payment processors ( inspired by Ruby's ActiveMerchant ) | 6 days ago |
| [ofxgo](https://github.com/aclindsa/ofxgo) | 117 | Golang library for querying and parsing OFX | 5 months ago |
| [vat](https://github.com/dannyvankooten/vat) | 101 | Go package for dealing with EU VAT. Does VAT number validation & rates retrieval. | 2 years ago |
| [go-finnhub](https://github.com/m1/go-finnhub) | 79 | Simple and easy to use client for stock market, forex and crypto data from finnhub.io written in Go. Access real-time financial market data from 60+ stock exchanges, 10 forex brokers, and 15+ crypto exchanges | 4 years ago |
| [currency](https://github.com/bnkamalesh/currency) | 52 | A currency computations package. | 2 years ago |
| [payme](https://github.com/jovandeginste/payme) | 22 | QR code generator (ASCII & PNG) for SEPA payments | 6 months ago |
| [go-finance](https://github.com/pieterclaerhout/go-finance) | 13 | Finance related Go functions (e.g. exchange rates, VAT number checking, …) | 2 months ago |


### [Forms](#Forms)
* Libraries for working with forms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nosurf](https://github.com/justinas/nosurf) | 1427 | CSRF protection middleware for Go. | 9 months ago |
| [csrf](https://github.com/gorilla/csrf) | 900 | Package gorilla/csrf provides Cross Site Request Forgery (CSRF) prevention middleware for Go web applications & services 🔒 | 8 days ago |
| [binding](https://github.com/mholt/binding) | 795 | Reflectionless data binding for Go's net/http (not actively maintained) | 5 years ago |
| [form](https://github.com/go-playground/form) | 617 | :steam_locomotive: Decodes url.Values into Go value(s) and Encodes Go value(s) into url.Values. Dual Array and Full map support. | a month ago |
| [conform](https://github.com/leebenson/conform) | 308 | Trims, sanitizes & scrubs data based on struct tags (go, golang) | 8 months ago |
| [formam](https://github.com/monoculum/formam) | 181 | a package for decode form's values into struct in Go | 9 months ago |
| [forms](https://github.com/albrow/forms) | 133 | A lightweight go library for parsing form data or json from an http.Request. | 8 months ago |
| [qs](https://github.com/sonh/qs) | 67 | Go module for encoding structs into URL query parameters | 8 months ago |
| [bind](https://github.com/robfig/bind) | 28 |  | 9 years ago |
| [queryparam](https://github.com/TomWright/queryparam) | 17 | Go package to easily convert a URL's query parameters/values into usable struct values of the correct types. | 3 years ago |


### [Functional](#Functional)
* Packages to support functional programming in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-underscore](https://github.com/tobyhede/go-underscore) | 1290 |  Helpfully Functional Go -  A useful collection of Go utilities. Designed for programmer happiness.  | 5 months ago |
| [fpGo](https://github.com/TeaEntityLab/fpGo) | 323 | Monad, Functional Programming features for Golang | a year ago |
| [fuego](https://github.com/seborama/fuego) | 141 | Functional Experiment in Golang | 5 months ago |
| [gofp](https://github.com/rbrahul/gofp) | 139 | A super simple Lodash like utility library with essential functions that empowers the development in Go | 2 years ago |


### [Game Development](#Game-Development)
* Awesome game development libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ebiten](https://github.com/hajimehoshi/ebiten) | 8540 | Ebitengine - A dead simple 2D game engine for Go | 2 days ago |
| [leaf](https://github.com/name5566/leaf) | 4938 | A game server framework in Go (golang) | 10 months ago |
| [pixel](https://github.com/faiface/pixel) | 4279 | A hand-crafted 2D game library in Go | 4 months ago |
| [nano](https://github.com/lonng/nano) | 2434 | Lightweight, facility, high performance golang based game server framework | 2 months ago |
| [engine](https://github.com/g3n/engine) | 2401 | Go 3D Game Engine (http://g3n.rocks) | 2 months ago |
| [goworld](https://github.com/xiaonanln/goworld) | 2378 | Scalable Distributed Game Server Engine with Hot Swapping in Golang | a year ago |
| [go-sdl2](https://github.com/veandco/go-sdl2) | 2006 | SDL2 binding for Go | 3 days ago |
| [pitaya](https://github.com/topfreegames/pitaya) | 1901 | Scalable game server framework with clustering support and client libraries for iOS, Android, Unity and others through the C SDK. | 18 hours ago |
| [engo](https://github.com/EngoEngine/engo) | 1630 | Engo is an open-source 2D game engine written in Go. | 11 days ago |
| [oak](https://github.com/oakmound/oak) | 1429 | A pure Go game engine | 17 days ago |
| [termloop](https://github.com/JoelOtter/termloop) | 1361 | Terminal-based game engine for Go, built on top of Termbox | 2 years ago |
| [gonet](https://github.com/xtaci/gonet) | 1229 | A Game Server Skeleton in golang. | 6 years ago |
| [raylib-go](https://github.com/gen2brain/raylib-go) | 1029 | Go bindings for raylib, a simple and easy-to-use library to enjoy videogames programming. | 19 days ago |
| [engine](https://github.com/azul3d/engine) | 586 | Azul3D - A 3D game engine written in Go! | 2 years ago |
| [go-astar](https://github.com/beefsack/go-astar) | 558 | Go implementation of the A* search algorithm | 2 years ago |
| [go3d](https://github.com/ungerik/go3d) | 285 | A performance oriented 2D/3D math package for Go | a year ago |
| [tile](https://github.com/kelindar/tile) | 109 | Tile is a 2D grid engine, built with data and cache friendly ways, includes pathfinding and observers. | 8 months ago |
| [prototype](https://github.com/gonutz/prototype) | 81 | Simple 2D game prototyping framework. | 10 months ago |


### [Generation and Generics](#Generation-and-Generics)
* Tools to enhance the language with features like generics via code generation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-linq](https://github.com/ahmetb/go-linq) | 3337 | .NET LINQ capabilities in Go | a year ago |
| [jennifer](https://github.com/dave/jennifer) | 2966 | Jennifer is a code generator for Go | 6 days ago |
| [gen](https://github.com/clipperhouse/gen) | 1428 | Type-driven code generation for Go | 4 years ago |
| [goderive](https://github.com/awalterschulze/goderive) | 1121 | Derives and generates mundane golang functions that you do not want to maintain yourself | 4 months ago |
| [gowrap](https://github.com/hexdigest/gowrap) | 784 | GoWrap is a command line tool for generating decorators for Go interfaces | a month ago |
| [go-enum](https://github.com/abice/go-enum) | 532 | An enum generator for go | a day ago |
| [interfaces](https://github.com/rjeczalik/interfaces) | 398 | Code generation tools for Go. | a month ago |
| [goverter](https://github.com/jmattheis/goverter) | 293 | Generate type-safe Go converters by simply defining an interface | 15 hours ago |
| [pkgreflect](https://github.com/ungerik/pkgreflect) | 104 | A Go preprocessor for package scoped reflection | 6 years ago |
| [gotype](https://github.com/wzshiming/gotype) | 54 | Golang source code parsing, usage like reflect package | a year ago |
| [efaceconv](https://github.com/vlegio/efaceconv) | 48 |  | 6 years ago |
| [GENERIS](https://github.com/senselogic/GENERIS) | 42 | Versatile Go code generator. | a year ago |
| [go-xray](https://github.com/pieterclaerhout/go-xray) | 26 | Helpers for making the use of reflection easier | 6 months ago |
| [typeregistry](https://github.com/xiaoxin01/typeregistry) | 20 | create type dynamically in Golang | 3 years ago |


### [Geographic](#Geographic)
* Geographic tools and servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tile38](https://github.com/tidwall/tile38) | 8632 | Real-time Geospatial and Geofencing | 3 days ago |
| [geo](https://github.com/golang/geo) | 1556 | S2 geometry library in Go | 20 days ago |
| [mbtileserver](https://github.com/consbio/mbtileserver) | 513 | Basic Go server for mbtiles | 5 months ago |
| [osm](https://github.com/paulmach/osm) | 288 | General purpose library for reading, writing and working with OpenStreetMap data | 8 months ago |
| [godal](https://github.com/airbusgeo/godal) | 100 | golang wrapper for github.com/OSGEO/gdal | 4 months ago |
| [wgs84](https://github.com/wroge/wgs84) | 99 | A zero-dependency Go package for coordinate transformations. | 3 months ago |
| [simplefeatures](https://github.com/peterstace/simplefeatures) | 89 | Simple Features is a pure Go Implementation of the OpenGIS Simple Feature Access Specification | 11 days ago |
| [geoserver](https://github.com/hishamkaram/geoserver) | 83 | geoserver is a Go library for manipulating a GeoServer instance via the GeoServer REST API. | 5 months ago |
| [gismanager](https://github.com/hishamkaram/gismanager) | 50 | Publish Your GIS Data(Vector Data) to PostGIS and Geoserver | 5 years ago |
| [pbf](https://github.com/maguro/pbf) | 45 | OpenStreetMap PBF golang parser | 10 months ago |
| [s2-geojson](https://github.com/pantrif/s2-geojson) | 25 | Draw a polygon on the map or paste a geoJSON and explore how the s2.RegionCoverer covers it with S2 cells depending on the min and max levels | 3 years ago |


### [Go Compilers](#Go-Compilers)
* Tools for compiling Go to other languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopherjs](https://github.com/gopherjs/gopherjs) | 12051 | A compiler from Go to JavaScript for running Go code in a browser | 19 hours ago |
| [tardisgo](https://github.com/tardisgo/tardisgo) | 426 | Golang->Haxe->CPP/CSharp/Java/JavaScript transpiler   | 7 years ago |
| [c4go](https://github.com/Konstantin8105/c4go) | 337 | Transpiling C code to Go code | 5 months ago |
| [f4go](https://github.com/Konstantin8105/f4go) | 36 | Transpiling fortran code to golang code | 10 months ago |


### [Goroutines](#Goroutines)
* Tools for managing and working with Goroutines.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ants](https://github.com/panjf2000/ants) | 10797 | 🐜🐜🐜 ants is a high-performance and low-cost goroutine pool in Go./ ants 是一个高性能且低损耗的 goroutine 池。 | 16 days ago |
| [tunny](https://github.com/Jeffail/tunny) | 3651 | A goroutine pool for Go | 5 months ago |
| [goworker](https://github.com/benmanns/goworker) | 2745 | goworker is a Go-based background worker that runs 10 to 100,000* times faster than Ruby-based workers. | a year ago |
| [workerpool](https://github.com/gammazero/workerpool) | 1116 | Concurrency limiting goroutine pool | a month ago |
| [pond](https://github.com/alitto/pond) | 943 | 🔘 Minimalistic and High-performance goroutine worker pool written in Go | 4 months ago |
| [grpool](https://github.com/ivpusic/grpool) | 731 | Lightweight Goroutine pool | 5 years ago |
| [pool](https://github.com/go-playground/pool) | 720 | :speedboat: a limited consumer goroutine or unlimited goroutine pool for easier goroutine handling and cancellation | 2 years ago |
| [gowp](https://github.com/xxjwxc/gowp) | 471 | golang worker pool , Concurrency limiting goroutine pool | 2 months ago |
| [go-floc](https://github.com/workanator/go-floc) | 262 | Floc: Orchestrate goroutines with ease. | 2 years ago |
| [go-flow](https://github.com/kamildrazkiewicz/go-flow) | 214 | Simply way to control goroutines execution order based on dependencies | 4 years ago |
| [artifex](https://github.com/mborders/artifex) | 175 | Simple in-memory job queue for Golang using worker-based dispatching | 9 months ago |
| [go-workers](https://github.com/catmullet/go-workers) | 160 | 👷 Library for safely running groups of workers concurrently or consecutively that require input and output through channels | 2 years ago |
| [semaphore](https://github.com/marusama/semaphore) | 160 | Fast resizable golang semaphore primitive | 2 years ago |
| [errgroup](https://github.com/neilotoole/errgroup) | 148 | errgroup with goroutine worker limits | 7 months ago |
| [async](https://github.com/reugn/async) | 130 | Synchronization and asynchronous computation package for Go | 9 minutes ago |
| [cyclicbarrier](https://github.com/marusama/cyclicbarrier) | 129 | CyclicBarrier golang implementation | 3 years ago |
| [async](https://github.com/StudioSol/async) | 123 | A safe way to execute functions asynchronously, recovering them in case of panic. It also provides an error stack aiming to facilitate fail causes discovery. | 3 years ago |
| [gollback](https://github.com/vardius/gollback) | 110 | Go asynchronous simple function utilities, for managing execution of closures and callbacks | 6 months ago |
| [semaphore](https://github.com/kamilsk/semaphore) | 96 | 🚦 Semaphore pattern implementation with timeout of lock/unlock operations. | 3 years ago |
| [Hunch](https://github.com/AaronJan/Hunch) | 95 | Hunch provides functions like: All, First, Retry, Waterfall etc., that makes asynchronous flow control more intuitive. | a year ago |
| [threadpool](https://github.com/shettyh/threadpool) | 94 | Golang simple thread pool implementation | 3 years ago |
| [worker-pool](https://github.com/vardius/worker-pool) | 87 | Go simple async worker pool | 3 years ago |
| [gpool](https://github.com/sherifabdlnaby/gpool) | 86 | gpool - a generic context-aware resizable goroutines pool to bound concurrency based on semaphore.  | 4 years ago |
| [goccm](https://github.com/zenthangplus/goccm) | 66 | Limits the number of goroutines that are allowed to run concurrently | 7 months ago |
| [nursery](https://github.com/arunsworld/nursery) | 64 | Structured Concurrency in Go | 2 years ago |
| [gowl](https://github.com/hmdsefi/gowl) | 59 | Gowl is a process management and process monitoring tool at once. An infinite worker pool gives you the ability to control the pool and processes and monitor their status. | 5 months ago |
| [routine](https://github.com/x-mod/routine) | 57 | go routine control, abstraction of the Main and some useful Executors.如果你不会管理Goroutine的话，用它 | 3 years ago |
| [gohive](https://github.com/loveleshsharma/gohive) | 44 | 🐝 A Highly Performant and easy to use goroutine pool for Go | 2 years ago |
| [kyoo](https://github.com/dirkaholic/kyoo) | 42 | Unlimited job queue for go, using a pool of concurrent workers processing the job queue entries | 6 months ago |
| [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) | 41 | A sync.WaitGroup with error handling and concurrency control | 2 months ago |
| [parallel-fn](https://github.com/rafaeljesus/parallel-fn) | 35 | Run functions in parallel :comet: | 6 years ago |
| [go-trylock](https://github.com/subchen/go-trylock) | 33 | TryLock support on read-write lock for Golang | 2 years ago |
| [channelify](https://github.com/ddelizia/channelify) | 27 | Make functions return a channel for parallel processing via go routines. | 2 years ago |
| [stl](https://github.com/ssgreg/stl) | 27 | Software Transactional Locks | 3 years ago |
| [execpool](https://github.com/hexdigest/execpool) | 16 | A pool that spins up a given number of processes in advance and attaches stdin and stdout when needed. Very similar to FastCGI but works for any command. | 2 years ago |
| [breaker](https://github.com/kamilsk/breaker) | 15 | 🚧 Flexible mechanism to make execution flow interruptible. | 2 years ago |
| [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) | 15 |  | 7 months ago |
| [queue](https://github.com/AnikHasibul/queue) | 14 | package queue gives you a queue group accessibility. Helps you to limit goroutines, wait for the end of the all goroutines and much more. | 4 years ago |
| [conexec](https://github.com/ITcathyh/conexec) | 13 | A concurrent toolkit to help execute funcs concurrently in an efficient and safe way. It supports specifying the overall timeout to avoid blocking. | 3 years ago |
| [go-tools](https://github.com/nikhilsaraf/go-tools) | 12 | A collection of tools for Golang | 4 years ago |
| [hands](https://github.com/duanckham/hands) | 10 | Hands is a process controller used to control the execution and return strategies of multiple goroutines. | a year ago |


### [GUI](#GUI)
* Libraries for building GUI Applications.

#### [Toolkits](#Toolkits)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fyne](https://github.com/fyne-io/fyne) | 20983 | Cross platform GUI toolkit in Go inspired by Material Design | 2 days ago |
| [webview](https://github.com/webview/webview) | 11362 | Tiny cross-platform webview library for C/C++/Golang. Uses WebKit (Gtk/Cocoa) and Edge (Windows) | 4 days ago |
| [qt](https://github.com/therecipe/qt) | 9913 | Qt binding for Go (Golang) with support for Windows / macOS / Linux / FreeBSD / Android / iOS / Sailfish OS / Raspberry Pi / AsteroidOS / Ubuntu Touch / JavaScript / WebAssembly | 4 months ago |
| [ui](https://github.com/andlabs/ui) | 8285 | Platform-native GUI library for Go. | a year ago |
| [go-app](https://github.com/maxence-charriere/go-app) | 7172 | A package to build progressive web apps with Go programming language and WebAssembly. | 8 days ago |
| [walk](https://github.com/lxn/walk) | 6509 | A Windows GUI toolkit for the Go Programming Language | a year ago |
| [go-astilectron](https://github.com/asticode/go-astilectron) | 4795 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by Electron) | 12 days ago |
| [go-sciter](https://github.com/sciter-sdk/go-sciter) | 2529 | Golang bindings of Sciter: the Embeddable HTML/CSS/script engine for modern UI development | 3 months ago |
| [gotk3](https://github.com/gotk3/gotk3) | 1934 | Go bindings for GTK3 | 3 months ago |
| [gowd](https://github.com/dtylman/gowd) | 402 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by nwjs) | 5 months ago |


#### [Interaction](#Interaction)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [robotgo](https://github.com/go-vgo/robotgo) | 8567 | RobotGo, Go Native cross-platform GUI automation  @vcaesar | a month ago |
| [systray](https://github.com/getlantern/systray) | 2854 | a cross platfrom Go library to place an icon and menu in the notification area | 12 days ago |
| [gosx-notifier](https://github.com/deckarep/gosx-notifier) | 578 | gosx-notifier is a Go framework for sending desktop notifications to OSX 10.8 or higher | 3 years ago |
| [zenity](https://github.com/ncruces/zenity) | 525 | Zenity dialogs for Golang, Windows, macOS | 14 hours ago |
| [trayhost](https://github.com/shurcooL/trayhost) | 241 | Cross-platform Go library to place an icon in the host operating system's taskbar. | a month ago |
| [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) | 29 | macOS Sleep/ Wake notifications in golang | 4 years ago |
| [activity-tracker](https://github.com/prashantgupta24/activity-tracker) | 25 | A library to notify about any (pluggable) activity on your machine, and let you take action as needed | 4 years ago |
| [go-appindicator](https://github.com/dawidd6/go-appindicator) | 19 | :traffic_light: Go bindings for libappindicator3 C library | 3 years ago |


### [Hardware](#Hardware)
* Libraries, tools, and tutorials for interacting with hardware.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [arduino-cli](https://github.com/arduino/arduino-cli) | 3974 | Arduino command line tool | a day ago |
| [go-rpio](https://github.com/stianeikeland/go-rpio) | 2037 | :electric_plug: Raspberry Pi GPIO library for go-lang | a year ago |
| [ghw](https://github.com/jaypipes/ghw) | 1456 | Go HardWare discovery/inspection library | 13 days ago |
| [emgo](https://github.com/ziutek/emgo) | 1029 | Emgo: Bare metal Go (language for programming embedded systems) | 2 years ago |
| [sysinfo](https://github.com/zcalusic/sysinfo) | 442 | Sysinfo is a Go library providing Linux OS / kernel / hardware system information. | a month ago |
| [goroslib](https://github.com/bluenviron/goroslib) | 270 | ROS client library for the Go programming language | 13 days ago |
| [go-osc](https://github.com/hypebeast/go-osc) | 175 | Open Sound Control (OSC) library for Golang. Implemented in pure Go. | 7 months ago |
| [joystick](https://github.com/0xcafed00d/joystick) | 45 | Go Joystick API | 4 months ago |


### [Images](#Images)
* Libraries for manipulating images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocv](https://github.com/hybridgroup/gocv) | 5651 | Go package for computer vision using OpenCV 4 and beyond. | a day ago |
| [imaginary](https://github.com/h2non/imaginary) | 5048 | Fast, simple, scalable, Docker-ready HTTP microservice for high-level image processing | 12 days ago |
| [imaging](https://github.com/disintegration/imaging) | 4797 | Imaging is a simple image processing package for Go | 2 months ago |
| [gg](https://github.com/fogleman/gg) | 3993 | Go Graphics - 2D rendering in Go with a simple API. | 15 days ago |
| [bild](https://github.com/anthonynsimon/bild) | 3815 | Image processing algorithms in pure Go | a month ago |
| [ln](https://github.com/fogleman/ln) | 3187 | 3D line art engine. | 4 years ago |
| [resize](https://github.com/nfnt/resize) | 2955 | Pure golang image resizing  | a year ago |
| [bimg](https://github.com/h2non/bimg) | 2330 | Go package for fast high-level image processing powered by libvips C library | 15 days ago |
| [gowitness](https://github.com/sensepost/gowitness) | 2297 | 🔍 gowitness - a golang, web screenshot utility using Chrome Headless | 14 days ago |
| [pt](https://github.com/fogleman/pt) | 2056 | A path tracer written in Go. | 4 years ago |
| [svgo](https://github.com/ajstarks/svgo) | 2030 | Go Language Library for SVG generation | 8 months ago |
| [picfit](https://github.com/thoas/picfit) | 1874 | An image resizing server written in Go | 25 days ago |
| [smartcrop](https://github.com/muesli/smartcrop) | 1747 | smartcrop finds good image crops for arbitrary crop sizes | a month ago |
| [gift](https://github.com/disintegration/gift) | 1666 | Go Image Filtering Toolkit | 3 years ago |
| [imagick](https://github.com/gographics/imagick) | 1601 | Go binding to ImageMagick's MagickWand C API | 23 days ago |
| [go-opencv](https://github.com/go-opencv/go-opencv) | 1306 | Go bindings for OpenCV / 2.x API in gocv / 1.x API in opencv | 4 months ago |
| [canvas](https://github.com/tdewolff/canvas) | 1296 | Cairo in Go: vector to raster, SVG, PDF, EPS, WASM, OpenGL, Gio, etc. | 14 days ago |
| [geopattern](https://github.com/pravj/geopattern) | 1244 | :triangular_ruler: Create beautiful generative image patterns from a string in golang. | 5 years ago |
| [stegify](https://github.com/DimitarPetrov/stegify) | 1117 | 🔍 Go tool for LSB steganography, capable of hiding any file within an image. | 4 months ago |
| [govips](https://github.com/davidbyttow/govips) | 949 | A lightning fast image processing and resizing library for Go | 7 days ago |
| [image2ascii](https://github.com/qeesung/image2ascii) | 785 | :foggy: Convert image to ASCII | a year ago |
| [goimagehash](https://github.com/corona10/goimagehash) | 630 | Go Perceptual image hashing package | 3 months ago |
| [draft](https://github.com/lucasepe/draft) | 570 | Generate High Level Cloud Architecture diagrams using YAML syntax. | 2 years ago |
| [govatar](https://github.com/o1egl/govatar) | 568 | Avatar generation library for GO language | 10 months ago |
| [mort](https://github.com/aldor007/mort) | 483 | Storage and image processing server written in Go | 3 months ago |
| [go-nude](https://github.com/koyachi/go-nude) | 377 | Nudity detection with Go. | a year ago |
| [steganography](https://github.com/auyer/steganography) | 252 | Pure Golang Library that allows LSB steganography on images using ZERO dependencies | 4 months ago |
| [darkroom](https://github.com/gojek/darkroom) | 215 |  | a month ago |
| [rez](https://github.com/bamiaux/rez) | 210 | Image resizing in pure Go and SIMD | 6 years ago |
| [mergi](https://github.com/noelyahan/mergi) | 205 | go library for image programming (merge, crop, resize, watermark, animate, ease, transit) | 3 years ago |
| [gltf](https://github.com/qmuntal/gltf) | 203 | :eyeglasses: Go library for encoding glTF 2.0 files | 15 days ago |
| [img](https://github.com/hawx/img) | 150 | A selection of image manipulation tools | 8 years ago |
| [go-webp](https://github.com/kolesa-team/go-webp) | 145 | Simple and fast webp library for golang | a month ago |
| [go-cairo](https://github.com/ungerik/go-cairo) | 135 | Go binding for the cairo graphics library | 3 months ago |
| [cameron](https://github.com/aofei/cameron) | 102 | An avatar generator for Go. | a year ago |
| [gridder](https://github.com/shomali11/gridder) | 64 | A Grid based 2D Graphics library | 2 years ago |
| [webp-server](https://github.com/mehdipourfar/webp-server) | 62 | Simple and minimal image server capable of storing, resizing, converting and caching images. | 3 years ago |
| [go-gd](https://github.com/bolknote/go-gd) | 59 | Go bingings for GD (http://www.boutell.com/gd/) | 5 years ago |
| [goimghdr](https://github.com/corona10/goimghdr) | 41 | The imghdr module determines the type of image contained in a file for go | 4 years ago |
| [tga](https://github.com/ftrvxmtrx/tga) | 33 | Go package for decoding and encoding TARGA image format | 8 years ago |
| [go-webcolors](https://github.com/jyotiska/go-webcolors) | 27 | Port of webcolors library from Python to Go | 8 years ago |
| [mpo](https://github.com/donatj/mpo) | 11 | JPEG-MPO Decoder / Converter Library and CLI Tool | 4 months ago |
| [scout](https://github.com/jonoton/scout) | 10 | Scout is a standalone open source software solution for DIY video security. | 7 months ago |


### [IoT -> Internet of Things](#IoT)
* Libraries for programming devices of the IoT.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gobot](https://github.com/hybridgroup/gobot) | 8364 | Golang framework for robotics, drones, and the Internet of Things (IoT) | 11 hours ago |
| [flogo](https://github.com/TIBCOSoftware/flogo) | 2295 | Project Flogo is an open source ecosystem of opinionated  event-driven capabilities to simplify building efficient & modern serverless functions, microservices & edge apps. | 4 months ago |
| [mainflux](https://github.com/mainflux/mainflux) | 2114 | Industrial IoT Messaging and Device Management Platform | 30 minutes ago |
| [gatt](https://github.com/paypal/gatt) | 1076 | Gatt is a Go package for building Bluetooth Low Energy peripherals | a year ago |
| [heedy](https://github.com/heedy/heedy) | 370 | An aggregator for personal metrics, and an extensible analysis engine | a year ago |
| [devices](https://github.com/goiot/devices) | 260 | Suite of libraries for IoT devices (written in Go), experimental for x/exp/io | 7 years ago |
| [huego](https://github.com/amimof/huego) | 235 | An extensive Philips Hue client library for Go with an emphasis on simplicity | a month ago |
| [sensorbee](https://github.com/sensorbee/sensorbee) | 221 | Lightweight stream processing engine for IoT | 4 years ago |
| [iot](https://github.com/vaelen/iot) | 63 | A Go client for Google IoT Core | 4 years ago |
| [eywa](https://github.com/xcodersun/eywa) | 60 | Make IoT a lot more fun with data.  | 6 years ago |


### [Job Scheduler](#Job-Scheduler)
* Libraries for scheduling jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocron](https://github.com/go-co-op/gocron) | 3753 | Easy and fluent Go cron scheduling. This is a fork from https://github.com/jasonlvhit/gocron | 8 days ago |
| [gocron](https://github.com/jasonlvhit/gocron) | 3263 | A Golang Job Scheduling Package. | 2 years ago |
| [go-quartz](https://github.com/reugn/go-quartz) | 1325 | Minimalist and zero-dependency scheduling library for Go | 2 days ago |
| [gron](https://github.com/roylee0704/gron) | 983 | gron, Cron Jobs in Go. | 3 months ago |
| [jobrunner](https://github.com/bamzi/jobrunner) | 974 | Framework for performing work asynchronously, outside of the request flow | 3 years ago |
| [jobs](https://github.com/albrow/jobs) | 495 | A persistent and flexible background jobs library for go. | 5 years ago |
| [scheduler](https://github.com/carlescere/scheduler) | 430 | Job scheduling made easy. | a year ago |
| [gronx](https://github.com/adhocore/gronx) | 289 | Lightweight, fast and dependency-free Cron expression parser (due checker, next/prev due date finder), task runner, job scheduler and/or daemon for Golang (tested on v1.13+) and standalone usage. If you are bold, use it to replace crontab entirely. | 12 days ago |
| [go-cron](https://github.com/rk/go-cron) | 218 | A simple Cron library for go that can execute closures or functions at varying intervals, from once a second to once a year on a specific date and time. Primarily for web applications and long running daemons. | 3 years ago |
| [tasks](https://github.com/madflojo/tasks) | 167 | Package tasks is an easy to use in-process scheduler for recurring tasks in Go | a month ago |
| [clockwerk](https://github.com/onatm/clockwerk) | 139 | Job Scheduling Library | 4 years ago |
| [leprechaun](https://github.com/kilgaloon/leprechaun) | 99 | You had one job, or more then one, which can be done in steps | a year ago |
| [sched](https://github.com/romshark/sched) | 26 | A job scheduler for Go with the ability to fast-forward time. | 2 years ago |
| [cronticker](https://github.com/krayzpipes/cronticker) | 10 | Golang ticker that works with Cron scheduling. | 3 years ago |


### [JSON](#JSON)
* Libraries for working with JSON.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gjson](https://github.com/tidwall/gjson) | 12658 | Get JSON values quickly - JSON parser for Go | 12 days ago |
| [gojson](https://github.com/ChimeraCoder/gojson) | 2616 | Automatically generate Go (golang) struct definitions from example JSON | 2 years ago |
| [fastjson](https://github.com/valyala/fastjson) | 1957 | Fast JSON parser and validator for Go. No custom structs, no code generation, no reflection | 6 months ago |
| [ojg](https://github.com/ohler55/ojg) | 628 | Optimized JSON for Go | 8 hours ago |
| [jsondiff](https://github.com/wI2L/jsondiff) | 262 | Compute the diff between two JSON documents as a series of RFC6902 (JSON Patch) operations | a month ago |
| [kazaam](https://github.com/qntfy/kazaam) | 259 | Arbitrary transformations of JSON in Golang | a year ago |
| [gojq](https://github.com/elgs/gojq) | 187 | JSON query in Golang | a month ago |
| [ajson](https://github.com/spyzhov/ajson) | 181 | Abstract JSON for Golang with JSONPath support  | 14 days ago |
| [jettison](https://github.com/wI2L/jettison) | 154 | Highly configurable, fast JSON encoder for Go | 11 days ago |
| [gjo](https://github.com/skanehira/gjo) | 119 | Small utility to create JSON objects | 2 years ago |
| [json2go](https://github.com/m-zajac/json2go) | 119 | Create go type representation from json | 2 years ago |
| [jsongo](https://github.com/ricardolonga/jsongo) | 109 | Fluent API to make it easier to create Json objects. | 2 years ago |
| [jaydiff](https://github.com/yazgazan/jaydiff) | 99 | A JSON diff utility | 3 years ago |
| [ujson](https://github.com/iOliverNguyen/ujson) | 68 | µjson - A fast and minimal JSON parser and transformer that works on unstructured JSON | 2 years ago |
| [jsonf](https://github.com/miolini/jsonf) | 64 | Console JSON formatter with query feature | 3 years ago |
| [go-respond](https://github.com/nicklaw5/go-respond) | 51 | A Go package for handling common HTTP JSON responses. | 2 years ago |
| [mp](https://github.com/sanbornm/mp) | 46 | Simple Email Parser | 7 years ago |
| [vjson](https://github.com/miladibra10/vjson) | 34 | vjson is a golang package that helps to validate JSON objects | 10 months ago |
| [jsoncolor](https://github.com/neilotoole/jsoncolor) | 33 | Colorized JSON output for Go | a year ago |
| [ask](https://github.com/simonnilsson/ask) | 25 | A Go package that provides a simple way of accessing nested properties in maps and slices. | a year ago |
| [dynjson](https://github.com/cocoonspace/dynjson) | 15 | Client-customizable JSON formats for dynamic APIs | 4 months ago |
| [mapslice-json](https://github.com/ake-persson/mapslice-json) | 15 | Go MapSlice for ordered marshal/ unmarshal of maps in JSON | 5 months ago |
| [go-jsonerror](https://github.com/ddymko/go-jsonerror) | 13 | Small package which wraps error responses to follow jsonapi.org | 4 years ago |
| [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) | 13 | Go bindings based on the JSON API errors reference | 7 years ago |
| [jsonhal](https://github.com/RichardKnop/jsonhal) | 13 | A simple Go package to make custom structs marshal into HAL compatible JSON responses. | 3 years ago |
| [epoch](https://github.com/vtopc/epoch) | 12 | Contains primitives for marshaling/unmarshaling Unix timestamp/epoch to/from built-in time.Time type in JSON | a year ago |
| [jzon](https://github.com/zerosnake0/jzon) | 11 | A golang json library inspired by jsoniter | 7 days ago |
| [ej](https://github.com/lucassscaravelli/ej) | 9 | Write and read JSON from different sources in one line | 3 years ago |
| [jsonic](https://github.com/sinhashubham95/jsonic) | 9 | All you need with JSON | 3 years ago |
| [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) | 4 | The simple JSON parser with validation by condition | 2 years ago |


### [Logging](#Logging)
* Libraries for generating and working with log files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kit](https://github.com/go-kit/kit) | 25278 | A standard library for microservices. | 2 months ago |
| [logrus](https://github.com/sirupsen/logrus) | 23058 | Structured, pluggable logging for Go. | 18 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 23058 | Structured, pluggable logging for Go. | 18 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 23058 | Structured, pluggable logging for Go. | 18 days ago |
| [zap](https://github.com/uber-go/zap) | 19251 | Blazing fast, structured, leveled logging in Go. | 5 days ago |
| [debug](https://github.com/debug-js/debug) | 10782 | A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers | 19 days ago |
| [zerolog](https://github.com/rs/zerolog) | 8658 | Zero Allocation JSON Logger | 6 days ago |
| [go-spew](https://github.com/davecgh/go-spew) | 5670 | Implements a deep pretty printer for Go data structures to aid in debugging | a year ago |
| [lumberjack](https://github.com/natefinch/lumberjack) | 4181 | lumberjack is a log rolling package for Go | 3 months ago |
| [glog](https://github.com/golang/glog) | 3403 | Leveled execution logs for Go | 4 months ago |
| [tail](https://github.com/hpcloud/tail) | 2578 | Go package for reading from continously updated files (tail -f) | 9 months ago |
| [seelog](https://github.com/cihub/seelog) | 1637 | Seelog is a native Go logging library that provides flexible asynchronous dispatching, filtering, and formatting. | 4 years ago |
| [log](https://github.com/apex/log) | 1325 | Structured logging package for Go. | 4 months ago |
| [log15](https://github.com/inconshreveable/log15) | 1092 | Structured, composable logging for Go | 6 months ago |
| [log](https://github.com/phuslu/log) | 501 | High performance structured logging | 2 months ago |
| [onelog](https://github.com/francoispqt/onelog) | 414 | Dead simple, super fast, zero allocation logger for Golang | 4 years ago |
| [logutils](https://github.com/hashicorp/logutils) | 355 | Utilities for slightly better logging in Go (Golang). | 6 months ago |
| [logxi](https://github.com/mgutz/logxi) | 351 | A 12-factor app logger built for performance and happy development | 3 years ago |
| [sqldb-logger](https://github.com/simukti/sqldb-logger) | 313 | A logger for Go SQL database driver without modifying existing *sql.DB stdlib usage. | 7 months ago |
| [httpretty](https://github.com/henvic/httpretty) | 302 | Package httpretty prints the HTTP requests you make with Go pretty on your terminal. | 2 months ago |
| [log](https://github.com/go-playground/log) | 289 | :green_book: Simple, configurable and scalable Structured Logging for Go. | a month ago |
| [go-logger](https://github.com/apsdehal/go-logger) | 286 | Simple logger for Go programs. Allows custom formats for messages. | 4 years ago |
| [rollingwriter](https://github.com/arthurkiller/rollingwriter) | 281 | Rolling writer is an IO util for auto rolling write in go. | 6 months ago |
| [logur](https://github.com/logur/logur) | 197 | Logur is an opinionated collection of logging best practices | 3 years ago |
| [glg](https://github.com/kpango/glg) | 188 | Simple and blazing fast lockfree logging library for golang | 3 months ago |
| [logger](https://github.com/azer/logger) | 157 | Minimalistic logging library for Go. | 2 years ago |
| [xlog](https://github.com/rs/xlog) | 137 | xlog is a logger for net/context aware HTTP applications | 2 years ago |
| [ozzo-log](https://github.com/go-ozzo/ozzo-log) | 122 | A Go (golang) package providing high-performance asynchronous logging, message filtering by severity and category, and multiple message targets. | 3 years ago |
| [logvoyage](https://github.com/firstrow/logvoyage) | 94 | LogVoyage - logging SaaS written in GoLang | 6 years ago |
| [go-cronowriter](https://github.com/utahta/go-cronowriter) | 56 | Time based rotating file writer | 2 years ago |
| [log](https://github.com/alexcesaro/log) | 47 | Logging packages for Go | 8 years ago |
| [gone](https://github.com/One-com/gone) | 46 | Golang packages for writing small daemons and servers. | 2 years ago |
| [noodlog](https://github.com/gyozatech/noodlog) | 44 | 🍜 Parametrized JSON logging library in Golang which lets you obfuscate sensitive data and marshal any kind of content. | 4 months ago |
| [go-log](https://github.com/ian-kent/go-log) | 42 | A logger, for Go | 5 years ago |
| [gologger](https://github.com/sadlil/gologger) | 41 | The Simplest and worst logging library ever written | 6 years ago |
| [logex](https://github.com/chzyer/logex) | 41 | An golang log lib, supports tracking and level, wrap by standard log lib | a year ago |
| [journald](https://github.com/ssgreg/journald) | 37 | Go implementation of systemd Journal's native API for logging | 2 years ago |
| [go-log](https://github.com/siddontang/go-log) | 33 | a golang log lib supports level and multi handlers | 4 years ago |
| [mlog](https://github.com/jbrodriguez/mlog) | 33 | A simple logging module for go, with a rotating file feature and console logging. | 5 years ago |
| [distillog](https://github.com/amoghe/distillog) | 32 | Logging, distilled | 5 years ago |
| [logrusly](https://github.com/sebest/logrusly) | 28 | Loggly Hooks for GO Logrus logger | 2 years ago |
| [log](https://github.com/teris-io/log) | 26 | Structured log interface | 6 years ago |
| [zkits-logger](https://github.com/edoger/zkits-logger) | 24 | A powerful zero-dependency json logger. | 3 months ago |
| [gomol](https://github.com/aphistic/gomol) | 19 | Gomol is a library for structured, multiple-output logging for Go with extensible logging outputs | 4 years ago |
| [logmatic](https://github.com/mborders/logmatic) | 16 | Colorized logger for Golang with dynamic log level configuration | 3 years ago |
| [glo](https://github.com/lajosbencz/glo) | 15 | Logging library for Golang | 5 years ago |
| [go-log](https://github.com/subchen/go-log) | 14 | Simple and configurable Logging in Go, with level, formatters and writers | 5 years ago |
| [logrusiowriter](https://github.com/cabify/logrusiowriter) | 14 | io.Writer implementation using logrus logger | 3 years ago |
| [logdump](https://github.com/ewwwwwqm/logdump) | 11 | Package for multi-level logging | 5 years ago |
| [logo](https://github.com/mbndr/logo) | 11 | Golang logger to different configurable writers. | 3 years ago |
| [go-log](https://github.com/pieterclaerhout/go-log) | 10 | A logging library with strack traces, object dumping and optional timestamps | 2 months ago |
| [kemba](https://github.com/clok/kemba) | 10 | A tiny debug logging tool. Ideal for CLI tools and command applications. Inspired by https://github.com/visionmedia/debug | 19 days ago |
| [log](https://github.com/aerogo/log) | 10 | :memo: Logging with multiple output targets. | 4 years ago |
| [xlog](https://github.com/xfxdev/xlog) | 8 | plugin architecture and flexible log system for golang | 5 years ago |
| [yell](https://github.com/jfcg/yell) | 1 | :ledger: Yet another minimalist logging library | a year ago |


### [Machine Learning](#Machine-Learning)
* Libraries for Machine Learning.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [golearn](https://github.com/sjwhitworth/golearn) | 8982 | Machine Learning for Go | 5 months ago |
| [gorse](https://github.com/gorse-io/gorse) | 7517 | Gorse open source recommender system engine | 18 hours ago |
| [gorgonia](https://github.com/gorgonia/gorgonia) | 5083 | Gorgonia is a library that helps facilitate machine learning in Go. | 2 months ago |
| [m2cgen](https://github.com/BayesWitnesses/m2cgen) | 2590 | Transform ML models into a native code (Java, C, Python, Go, JavaScript, Visual Basic, C#, R, PowerShell, PHP, Dart, Haskell, Ruby, F#, Rust) with zero dependencies | 5 months ago |
| [tfgo](https://github.com/galeone/tfgo) | 2284 | Tensorflow + Go, the gopher way | 24 days ago |
| [gosseract](https://github.com/otiai10/gosseract) | 2181 | Go package for OCR (Optical Character Recognition), by using Tesseract C++ library | a month ago |
| [goml](https://github.com/cdipaolo/goml) | 1488 | On-line Machine Learning in Go (and so much more) | a year ago |
| [eaopt](https://github.com/MaxHalford/eaopt) | 846 | :four_leaf_clover: Evolutionary optimization library for Go (genetic algorithm, partical swarm optimization, differential evolution) | 5 months ago |
| [bayesian](https://github.com/jbrukh/bayesian) | 769 | Naive Bayesian Classification for Golang. | 4 months ago |
| [CloudForest](https://github.com/ryanbressler/CloudForest) | 728 | Ensembles of decision trees in go/golang. | 2 years ago |
| [ocrserver](https://github.com/otiai10/ocrserver) | 587 | A simple OCR API server, seriously easy to be deployed by Docker, on Heroku as well | 2 years ago |
| [gobrain](https://github.com/goml/gobrain) | 544 | Neural Networks written in go | 3 years ago |
| [onnx-go](https://github.com/owulveryck/onnx-go) | 522 | onnx-go gives the ability to import a pre-trained neural network within Go without being linked to a framework or library. | 3 months ago |
| [go-deep](https://github.com/patrikeh/go-deep) | 464 | Artificial Neural Network | 3 months ago |
| [regommend](https://github.com/muesli/regommend) | 302 | Recommendation engine for Go | 4 years ago |
| [goptuna](https://github.com/c-bata/goptuna) | 238 | A hyperparameter optimization framework, inspired by Optuna. | 9 days ago |
| [goga](https://github.com/tomcraven/goga) | 197 | Golang Genetic Algorithm | a year ago |
| [go-galib](https://github.com/thoj/go-galib) | 195 | Genetic Algorithms library written in Go / golang | 8 years ago |
| [goRecommend](https://github.com/timkaye11/goRecommend) | 194 | Collaborative Filtering (CF) Algorithms in Go!  | 9 years ago |
| [shield](https://github.com/eaigner/shield) | 154 | Bayesian text classifier with flexible tokenizers and storage backends for Go | 3 years ago |
| [go-fann](https://github.com/vksnk/go-fann) | 114 | Go bindings for FANN, library for artificial neural networks | 9 years ago |
| [go-featureprocessing](https://github.com/nikolaydubina/go-featureprocessing) | 100 | 🔥 Fast, simple sklearn-like feature processing for Go | 2 months ago |
| [goscore](https://github.com/asafschers/goscore) | 89 | Go Scoring API for PMML | 4 years ago |
| [gonet](https://github.com/dathoangnd/gonet) | 79 | Neural Network for Go. | 3 years ago |
| [fonet](https://github.com/Fontinalis/fonet) | 77 | fonet is a deep neural network package for Go. | 2 years ago |
| [libsvm](https://github.com/datastream/libsvm) | 73 | libsvm go version | 7 years ago |
| [neat](https://github.com/jinyeom/neat) | 67 | NEAT (NeuroEvolution of Augmenting Topologies) implemented in Go | 5 years ago |
| [neural-go](https://github.com/schuyler/neural-go) | 65 | A multilayer perceptron network implemented in Go, with training via backpropagation. | 3 years ago |
| [go-pr](https://github.com/daviddengcn/go-pr) | 62 | Pattern recognition package in Go lang. | 10 years ago |
| [gomind](https://github.com/surenderthakran/gomind) | 60 | A simplistic Neural Network Library in Go | a year ago |
| [Varis](https://github.com/Xamber/Varis) | 52 | Golang Neural Network  | 5 years ago |
| [golinear](https://github.com/danieldk/golinear) | 45 | liblinear bindings for Go | 5 years ago |
| [go-cluster](https://github.com/e-XpertSolutions/go-cluster) | 39 | k-modes and k-prototypes clustering algorithms implementation in Go | 8 months ago |
| [godist](https://github.com/e-dard/godist) | 35 | Probability distributions and associated methods in Go | 8 years ago |
| [randomForest](https://github.com/malaschitz/randomForest) | 33 | Random Forest implementation in golang | a year ago |
| [ddt](https://github.com/sgrodriguez/ddt) | 29 | Golang Dynamic Decision Tree | 2 years ago |
| [evoli](https://github.com/khezen/evoli) | 26 | Genetic Algorithm and Particle Swarm Optimization | 2 years ago |
| [probab](https://github.com/ThePaw/probab) | 18 | Automatically exported from code.google.com/p/probab | 8 years ago |


### [Messaging](#Messaging)
* Libraries that implement messaging systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sarama](https://github.com/IBM/sarama) | 10204 | Sarama is a Go library for Apache Kafka. | 41 minutes ago |
| [centrifugo](https://github.com/centrifugal/centrifugo) | 7267 | Scalable real-time messaging server in a language-agnostic way. Set up once and forever. | 3 hours ago |
| [gorush](https://github.com/appleboy/gorush) | 7170 | A push notification server written in Go (Golang). | a month ago |
| [machinery](https://github.com/RichardKnop/machinery) | 6942 | Machinery is an asynchronous task queue/job queue based on distributed message passing. | 21 days ago |
| [asynq](https://github.com/hibiken/asynq) | 6530 | Simple, reliable, and efficient distributed task queue in Go | 5 hours ago |
| [benthos](https://github.com/benthosdev/benthos) | 6457 | Fancy stream processing made operationally mundane | 5 hours ago |
| [go-socket.io](https://github.com/googollee/go-socket.io) | 5257 | socket.io library for golang, a realtime application framework. | 6 days ago |
| [nats.go](https://github.com/nats-io/nats.go) | 4671 | Golang client for NATS, the cloud native messaging system. | 4 days ago |
| [confluent-kafka-go](https://github.com/confluentinc/confluent-kafka-go) | 4062 | Confluent's Apache Kafka Golang client | 4 hours ago |
| [mercure](https://github.com/dunglas/mercure) | 3445 | An open, easy, fast, reliable and battery-efficient solution for real-time communications | 11 hours ago |
| [melody](https://github.com/olahol/melody) | 3230 | :notes: Minimalist websocket framework for Go | a month ago |
| [apns2](https://github.com/sideshow/apns2) | 2841 | ⚡ HTTP/2 Apple Push Notification Service (APNs) push provider for Go — Send push notifications to iOS, tvOS, Safari and OSX apps, using the APNs HTTP/2 protocol. | 13 days ago |
| [go-nsq](https://github.com/nsqio/go-nsq) | 2450 | The official Go package for NSQ | 11 days ago |
| [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) | 2077 | Golang push server cluster | 6 years ago |
| [uniqush-push](https://github.com/uniqush/uniqush-push) | 1504 | Uniqush is a free and open source software system which provides a unified push service for server side notification to apps on mobile devices. | 3 years ago |
| [EventBus](https://github.com/asaskevich/EventBus) | 1476 | [Go] Lightweight eventbus with async compatibility for Go | a year ago |
| [Beaver](https://github.com/Clivern/Beaver) | 1455 | 💨 A real time messaging system to build a scalable in-app notifications, multiplayer games, chat apps in web and mobile apps. | 2 months ago |
| [chanify](https://github.com/chanify/chanify) | 1107 | Chanify is a safe and simple notification tools. This repository is command line tools for Chanify. | 2 months ago |
| [zmq4](https://github.com/pebbe/zmq4) | 1074 | A Go interface to ZeroMQ version 4 | 2 months ago |
| [amqp091-go](https://github.com/rabbitmq/amqp091-go) | 945 | An AMQP 0-9-1 Go client maintained by the RabbitMQ team. Originally by @streadway: `streadway/amqp` | 10 days ago |
| [gollum](https://github.com/trivago/gollum) | 930 | An n:m message multiplexer written in Go | 6 months ago |
| [dbus](https://github.com/godbus/dbus) | 873 | Native Go bindings for D-Bus | 2 months ago |
| [golongpoll](https://github.com/jcuga/golongpoll) | 636 | golang long polling library.  Makes web pub-sub easy via HTTP long-poll servers and clients :smiley: :coffee: :computer: | a year ago |
| [mangos](https://github.com/nanomsg/mangos) | 602 | mangos is a pure Golang implementation of nanomsg's "Scalablilty Protocols" | 3 months ago |
| [emitter](https://github.com/olebedev/emitter) | 471 | Emits events in Go way, with wildcard, predicates, cancellation possibilities and many other good wins | 4 months ago |
| [glue](https://github.com/desertbit/glue) | 409 | Glue - Robust Go and Javascript Socket Library (Alternative to Socket.io) | 3 years ago |
| [pubsub](https://github.com/cskr/pubsub) | 391 | A simple pubsub package for go. | a year ago |
| [bus](https://github.com/mustafaturan/bus) | 306 | 🔊Minimalist message bus implementation for internal communication with zero-allocation magic on Emit | 3 months ago |
| [message-bus](https://github.com/vardius/message-bus) | 252 | Go simple async message bus | 3 years ago |
| [rabtap](https://github.com/jandelgado/rabtap) | 242 | RabbitMQ wire tap and swiss army knife | 5 months ago |
| [guble](https://github.com/smancke/guble) | 155 | websocket based messaging server written in golang | 6 years ago |
| [zmq3](https://github.com/pebbe/zmq3) | 133 | A Go interface to ZeroMQ version 3 | 2 years ago |
| [hub](https://github.com/leandro-lugaresi/hub) | 132 | :incoming_envelope: A fast Message/Event Hub using publish/subscribe pattern with support for topics like* rabbitMQ exchanges for Go applications | 3 years ago |
| [oplog](https://github.com/dailymotion/oplog) | 114 | A generic oplog/replication system for microservices | 8 years ago |
| [redisqueue](https://github.com/robinjoseph08/redisqueue) | 114 | redisqueue provides a producer and consumer of a queue that uses Redis streams | 5 days ago |
| [go-gcm](https://github.com/googlearchive/go-gcm) | 103 | GCM library for Go. | 4 years ago |
| [rabbus](https://github.com/rafaeljesus/rabbus) | 97 | A tiny wrapper over amqp exchanges and queues 🚌 ✨ | 4 years ago |
| [go-mq](https://github.com/cheshir/go-mq) | 87 | Declare AMQP entities like queues, producers, and consumers in a declarative way. Can be used to work with RabbitMQ. | 3 months ago |
| [drone-line](https://github.com/appleboy/drone-line) | 79 | Sending line notifications using a binary, docker or Drone CI. | 5 months ago |
| [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) | 77 | A tiny wrapper around NSQ topic and channel :rocket: | 5 years ago |
| [go-notify](https://github.com/TheCreeper/go-notify) | 67 | Package notify provides an implementation of the Gnome DBus Notifications Specification. | 3 years ago |
| [commander](https://github.com/jeroenrinzema/commander) | 65 | Build event-driven and event streaming applications with ease | 2 years ago |
| [RapidMQ](https://github.com/sybrexsys/RapidMQ) | 65 | RapidMQ is a pure, extremely productive, lightweight and reliable library for managing of the local messages queue | 6 years ago |
| [go-res](https://github.com/jirenius/go-res) | 63 | RES Service protocol library for Go | 2 years ago |
| [event](https://github.com/agoalofalife/event) | 54 | The implementation of the pattern observer | 5 years ago |
| [hare](https://github.com/leozz37/hare) | 52 | 🐇  CLI tool for websockets and Go package | a year ago |
| [ami](https://github.com/kak-tus/ami) | 26 | Go client to reliable queues based on Redis Cluster Streams | 3 years ago |
| [go-vitotrol](https://github.com/maxatome/go-vitotrol) | 22 | golang client library to Viessmann Vitotrol web service | a year ago |
| [gosd](https://github.com/alexsniffin/gosd) | 22 | A library for scheduling when to dispatch a message to a channel | a year ago |
| [rmqconn](https://github.com/sbabiv/rmqconn) | 20 | RabbitMQ Reconnection client | 4 years ago |
| [zmq2](https://github.com/pebbe/zmq2) | 19 | A Go interface to ZeroMQ version 2 | 2 years ago |
| [jazz](https://github.com/socifi/jazz) | 18 | Abstraction layer for simple rabbitMQ connection, messaging and administration | 4 years ago |
| [gaurun-client](https://github.com/osamingo/gaurun-client) | 11 | Gaurun Client written in Go | 2 years ago |


### [Microsoft Office](#Microsoft-Office)
* Office

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [unioffice](https://github.com/unidoc/unioffice) | 3915 | Pure go library for creating and processing Office Word (.docx), Excel (.xlsx) and Powerpoint (.pptx) documents | a day ago |


### [Microsoft Excel](#Microsoft-Excel)
* Libraries for working with Microsoft Excel.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [excelize](https://github.com/qax-os/excelize) | 15633 | Go language library for reading and writing Microsoft Excel™ (XLAM / XLSM / XLSX / XLTM / XLTX) spreadsheets | 3 days ago |
| [xlsx](https://github.com/tealeg/xlsx) | 5515 | (No longer maintained!) Go (golang) library for reading and writing XLSX files.  | 3 hours ago |
| [go-excel](https://github.com/szyhf/go-excel) | 175 | A simple and light excel file reader to read a standard excel as a table faster , 一个轻量级的Excel数据读取库，用一种更`关系数据库`的方式解析Excel。 | 9 months ago |
| [xlsx](https://github.com/plandem/xlsx) | 165 | Fast and reliable way to work with Microsoft Excel™ [xlsx] files in Golang | 3 years ago |
| [goxlsxwriter](https://github.com/fterrag/goxlsxwriter) | 21 | Golang bindings for libxlsxwriter for writing XLSX files | a year ago |


### [Miscellaneous](#Miscellaneous)
* 

#### [Dependency Injection](#Dependency-Injection)
* Libraries for working with dependency injection.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fx](https://github.com/uber-go/fx) | 4215 | A dependency injection based application framework for Go. | 8 days ago |
| [dig](https://github.com/uber-go/dig) | 3315 | A reflection based dependency injection toolkit for Go. | 4 days ago |
| [container](https://github.com/golobby/container) | 478 | A lightweight yet powerful IoC dependency injection container for the Go programming language | 4 months ago |
| [di](https://github.com/goioc/di) | 290 | Simple and yet powerful Dependency Injection for Go | a month ago |
| [di](https://github.com/defval/di) | 197 | 🛠 A full-featured dependency injection container for go programming language. | a month ago |
| [dingo](https://github.com/i-love-flamingo/dingo) | 164 | Go Dependency Injection Framework | 2 months ago |
| [alice](https://github.com/magic003/alice) | 51 | An additive dependency injection container for Golang. | 6 years ago |
| [wire](https://github.com/Fs02/wire) | 38 | Strict Runtime Dependency Injection for Golang | 2 years ago |
| [linker](https://github.com/logrange/linker) | 35 | Dependency Injection and Inversion of Control package | 3 years ago |
| [gocontainer](https://github.com/vardius/gocontainer) | 18 | Simple Dependency Injection Container | 3 years ago |
| [kinit](https://github.com/go-kata/kinit) | 8 | GO Dependency Injection | 2 years ago |
| [nject](https://github.com/BlueOwlOpenSource/nject) | 3 | Go dependency injection: nject & npoint | 2 years ago |


#### [Project Layout](#Project-Layout)
* Unofficial set of patterns for structuring projects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [project-layout](https://github.com/golang-standards/project-layout) | 41030 | Standard Go Project Layout | 13 days ago |
| [service](https://github.com/ardanlabs/service) | 2815 | Starter code for writing web services in Go using Kubernetes. | 4 days ago |
| [modern-go-application](https://github.com/sagikazarmark/modern-go-application) | 1631 | Modern Go Application example | a month ago |
| [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) | 622 | A Go project template | a year ago |
| [seed](https://github.com/golang-templates/seed) | 391 | Go application GitHub repository template. | a month ago |
| [go-starter](https://github.com/allaboutapps/go-starter) | 362 | An opinionated production-ready SQL-/Swagger-first RESTful JSON API written in Go, highly integrated with VSCode DevContainers by allaboutapps. | 2 months ago |
| [go-todo-backend](https://github.com/Fs02/go-todo-backend) | 240 | Go Todo Backend example using modular project layout for product microservice. | 2 months ago |
| [scaffold](https://github.com/catchplay/scaffold) | 142 | Generate scaffold project layout for Go. | 5 years ago |
| [go-sample](https://github.com/zitryss/go-sample) | 125 | Go Project Sample Layout | 5 years ago |
| [gobase](https://github.com/wajox/gobase) | 48 | This is a simple skeleton for golang applications | 2 months ago |
| [go-project-layout](https://github.com/wangyoucao577/go-project-layout) | 22 | My understanding of how to structure a golang project.  | 2 years ago |
| [inizio](https://github.com/insidieux/inizio) | 16 | Golang project standard layout generator | 5 months ago |


#### [Strings](#Strings)
* Libraries for working with strings.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xstrings](https://github.com/huandu/xstrings) | 1240 | Implements string functions widely used in other languages but absent in Go. | 8 months ago |
| [sttr](https://github.com/abhimanyu003/sttr) | 735 | cross-platform, cli app to perform various operations on string | 4 months ago |
| [strutil](https://github.com/ozgio/strutil) | 196 | String utilities for Go | a year ago |
| [stringy](https://github.com/gobeam/stringy) | 188 | Convert string to camel case, snake case, kebab case / slugify, custom delimiter, pad string, tease string and many other functionalities with help of by Stringy package. | 7 months ago |
| [bexp](https://github.com/mkungla/bexp) | 0 | Go implementation of Brace Expansion mechanism to generate arbitrary strings. | 5 months ago |


#### [Uncategorized](#Uncategorized)
* These libraries were placed here because none of the other categories seemed to fit.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopsutil](https://github.com/shirou/gopsutil) | 9316 | psutil for golang | 16 hours ago |
| [archiver](https://github.com/mholt/archiver) | 4032 | Easily create & extract archives, and compress & decompress files of various formats | 3 months ago |
| [gatus](https://github.com/TwiN/gatus) | 3942 | ⛑ Automated developer-oriented status page | 6 hours ago |
| [oapi-codegen](https://github.com/deepmap/oapi-codegen) | 3823 | Generate Go client and server boilerplate from OpenAPI 3 specifications | 7 hours ago |
| [gofakeit](https://github.com/brianvoe/gofakeit) | 3227 | Random fake data generator written in go | 5 days ago |
| [go-resiliency](https://github.com/eapache/go-resiliency) | 1838 | Resiliency patterns for golang | 6 months ago |
| [base64Captcha](https://github.com/mojocn/base64Captcha) | 1826 | captcha of base64 image string | 3 months ago |
| [gosms](https://github.com/haxpax/gosms) | 1429 | :mailbox_closed: Your own local SMS gateway in Go | 3 years ago |
| [go-commons-pool](https://github.com/jolestar/go-commons-pool) | 1170 | a generic object pool for golang | 2 months ago |
| [llvm](https://github.com/llir/llvm) | 1078 | Library for interacting with LLVM IR in pure Go. | 6 months ago |
| [shortid](https://github.com/teris-io/shortid) | 879 | Super short, fully unique, non-sequential and URL friendly Ids | a year ago |
| [health](https://github.com/alexliesenfeld/health) | 686 | A simple and flexible health check library for Go. | 20 days ago |
| [shoutrrr](https://github.com/containrrr/shoutrrr) | 680 | Notification library for gophers and their furry friends. | 6 days ago |
| [stateless](https://github.com/qmuntal/stateless) | 655 | Go library for creating finite state machines | 15 days ago |
| [health](https://github.com/dimiro1/health) | 444 | An easy to use, extensible health check library for Go applications. | a year ago |
| [banner](https://github.com/dimiro1/banner) | 437 | An easy way to add useful startup banners into your Go applications | 3 years ago |
| [gountries](https://github.com/pariz/gountries) | 392 | Gountries provides: Countries (ISO-3166-1), Country Subdivisions(ISO-3166-2), Currencies (ISO 4217), Geo Coordinates(ISO-6709) as well as translations, country borders and other stuff exposed as struct data. | 3 months ago |
| [go-conv](https://github.com/cstockton/go-conv) | 386 | Fast conversions across various Go types with a simple API. | 2 years ago |
| [lk](https://github.com/hyperboloide/lk) | 307 | Simple licensing library for golang. | 4 months ago |
| [ffmt](https://github.com/go-ffmt/ffmt) | 295 | Golang beautify data display for Humans | 2 years ago |
| [healthcheck](https://github.com/etherlabsio/healthcheck) | 256 | An simple, easily extensible and concurrent health-check library for Go services | a year ago |
| [antch](https://github.com/antchfx/antch) | 252 | Antch, a fast, powerful and extensible web crawling & scraping framework for Go | 3 years ago |
| [go-unarr](https://github.com/gen2brain/go-unarr) | 246 | Go bindings for unarr (decompression library for RAR, TAR, ZIP and 7z archives) | 2 months ago |
| [battery](https://github.com/distatus/battery) | 225 | cross-platform, normalized battery information library | 2 months ago |
| [bitio](https://github.com/icza/bitio) | 221 | Optimized bit-level Reader and Writer for Go. | 4 months ago |
| [stats](https://github.com/go-playground/stats) | 166 | :chart_with_upwards_trend: Monitors Go MemStats + System stats such as Memory, Swap and CPU and sends via UDP anywhere you want for logging etc... | 7 years ago |
| [turtle](https://github.com/hackebrot/turtle) | 152 | Emojis for Go 😄🐢🚀 | 2 years ago |
| [captcha](https://github.com/steambap/captcha) | 135 | :sunglasses:Package captcha provides an easy to use, unopinionated API for captcha generation | 13 days ago |
| [gotoprom](https://github.com/cabify/gotoprom) | 106 | Type-safe Prometheus metrics builder library for golang | 6 months ago |
| [indigo](https://github.com/osamingo/indigo) | 104 | A distributed unique ID generator of using Sonyflake and encoded by Base58 | 3 months ago |
| [gommit](https://github.com/antham/gommit) | 103 | Enforce git message commit consistency | a day ago |
| [morse](https://github.com/alwindoss/morse) | 78 | Morse Code Library in Go | a year ago |
| [faker](https://github.com/pioz/faker) | 76 | Random fake data and struct generator for Go. | 10 months ago |
| [persian](https://github.com/mavihq/persian) | 75 | Some utilities for Persian language in Go (Golang) | 2 years ago |
| [pdfgen](https://github.com/hyperboloide/pdfgen) | 62 | HTTP service to generate PDF from Json requests | 5 years ago |
| [xkg](https://github.com/go-xkg/xkg) | 56 | User level X Keyboard Grabber | 9 years ago |
| [datacounter](https://github.com/miolini/datacounter) | 45 | Golang counters for readers/writers | 4 months ago |
| [browscap_go](https://github.com/digitalcrab/browscap_go) | 44 | GoLang Library for Browser Capabilities Project | 2 months ago |
| [url-shortener](https://github.com/pantrif/url-shortener) | 42 | A golang URL Shortener | 6 months ago |
| [sandid](https://github.com/aofei/sandid) | 40 | Every grain of sand on Earth has its own ID. | a year ago |
| [autoflags](https://github.com/artyom/autoflags) | 39 | Populate go command line app flags from config struct | a year ago |
| [gosh](https://github.com/osamingo/gosh) | 34 | Provide Go Statistics Handler, Struct, Measure Method | 3 months ago |
| [xdg](https://github.com/rkoesters/xdg) | 33 | FreeDesktop.org (xdg) Specs implemented in Go | 5 months ago |
| [metrics](https://github.com/pascaldekloe/metrics) | 26 | atomic measures + Prometheus exposition library | 5 months ago |
| [shellwords](https://github.com/Wing924/shellwords) | 21 | A Golang library to manipulate strings according to the word parsing rules of the UNIX Bourne shell. | 4 months ago |
| [numa](https://github.com/lrita/numa) | 17 | NUMA is a utility library, which is written in go. It help us to write some NUMA-AWARED code. | 5 months ago |
| [anagent](https://github.com/mudler/anagent) | 14 | Minimalistic, pluggable Golang evloop/timer handler with dependency-injection | 5 years ago |
| [avgRating](https://github.com/kirillDanshin/avgRating) | 14 | Calculate average score and rating based on Wilson Score Equation | 6 years ago |
| [hostutils](https://github.com/Wing924/hostutils) | 12 | A golang library for packing and unpacking hosts list | 4 months ago |
| [go-commandbus](https://github.com/lana/go-commandbus) | 10 | Simple command bus for GO | 2 years ago |
| [generators](https://github.com/azr/generators) | 5 | #golang generator | 7 years ago |
| [basexx](https://github.com/bobg/basexx) | 4 | Convert digit strings between arbitrary bases. | a month ago |


### [Natural Language Processing](#Natural-Language-Processing)
* Libraries for working with human languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jieba](https://github.com/fxsjy/jieba) | 31042 | 结巴中文分词 | a year ago |
| [vaderSentiment](https://github.com/cjhutto/vaderSentiment) | 4022 | VADER Sentiment Analysis. VADER (Valence Aware Dictionary and sEntiment Reasoner) is a lexicon and rule-based sentiment analysis tool that is specifically attuned to sentiments expressed in social media, and works well on texts from other domains.  | 9 months ago |
| [prose](https://github.com/jdkato/prose) | 3008 | :book: A Golang library for text processing, including tokenization, part-of-speech tagging, and named-entity extraction. | 3 months ago |
| [go-i18n](https://github.com/nicksnyder/go-i18n) | 2480 | Translate your Go program into multiple languages. | 2 months ago |
| [gse](https://github.com/go-ego/gse) | 2285 | Go efficient multilingual NLP and text segmentation; support English, Chinese, Japanese and others. | 5 months ago |
| [gojieba](https://github.com/yanyiwu/gojieba) | 2192 | "结巴"中文分词的Golang版本 | 3 months ago |
| [spago](https://github.com/nlpodyssey/spago) | 1549 | Self-contained Machine Learning and Natural Language Processing library in Go | 2 months ago |
| [go-pinyin](https://github.com/mozillazg/go-pinyin) | 1441 | 汉字转拼音 | a month ago |
| [when](https://github.com/olebedev/when) | 1285 | A natural language date/time parser with pluggable rules | 2 months ago |
| [kagome](https://github.com/ikawaha/kagome) | 743 | Self-contained Japanese Morphological Analyzer written in pure Go | 3 months ago |
| [whatlanggo](https://github.com/abadojack/whatlanggo) | 593 | Natural language detection library for Go | 4 months ago |
| [nlp](https://github.com/james-bowman/nlp) | 416 | Selected Machine Learning algorithms for natural language processing and semantic analysis in Golang | 2 years ago |
| [nlp](https://github.com/shixzie/nlp) | 383 | [UNMANTEINED] Extract values from strings and fill your structs with nlp. | 6 years ago |
| [sentences](https://github.com/neurosnap/sentences) | 374 | A multilingual command line sentence tokenizer in Golang | 6 months ago |
| [getlang](https://github.com/rylans/getlang) | 155 | Natural language detection package in pure Go | 3 years ago |
| [go-unidecode](https://github.com/mozillazg/go-unidecode) | 109 | ASCII transliterations of Unicode text. | 3 months ago |
| [RAKE.Go](https://github.com/afjoseph/RAKE.Go) | 100 | A Go port of the Rapid Automatic Keyword Extraction algorithm (RAKE) | 3 years ago |
| [go-nlp](https://github.com/nuance/go-nlp) | 95 | Utilities for working with discrete probability distributions and other tools useful for doing NLP work | 12 years ago |
| [gounidecode](https://github.com/fiam/gounidecode) | 79 | Unicode transliterator for #golang | 8 years ago |
| [segment](https://github.com/blevesearch/segment) | 78 | A Go library for performing Unicode Text Segmentation as described in Unicode Standard Annex #29 | 8 months ago |
| [go-stem](https://github.com/agonopol/go-stem) | 75 | Word Stemming in Go | 5 years ago |
| [textcat](https://github.com/pebbe/textcat) | 70 | A Go package for n-gram based text categorization, with support for utf-8 and raw text | 2 years ago |
| [address](https://github.com/bojanz/address) | 67 | Address handling for Go. | a month ago |
| [MMSEGO](https://github.com/awsong/MMSEGO) | 62 | Chinese word splitting algorithm MMSEG in GO | 11 years ago |
| [go-localize](https://github.com/m1/go-localize) | 54 | i18n (Internationalization and localization) engine written in Go, used for translating locale strings.  | 2 years ago |
| [go2vec](https://github.com/danieldk/go2vec) | 52 | Read and use word2vec vectors in Go | 5 years ago |
| [stemmer](https://github.com/dchest/stemmer) | 51 | Stemmer packages for Go programming language. Includes English, German and Dutch stemmers. | 7 years ago |
| [porter2](https://github.com/zentures/porter2) | 46 | High Performance Porter2 Stemmer | 3 years ago |
| [petrovich](https://github.com/striker2000/petrovich) | 44 | Golang port of Petrovich - an inflector for Russian anthroponyms. | 2 years ago |
| [iuliia-go](https://github.com/mehanizm/iuliia-go) | 38 | Transliterate Cyrillic → Latin in every possible way | 2 years ago |
| [snowball](https://github.com/goodsign/snowball) | 36 | Cgo binding for Snowball C library | 6 years ago |
| [govader](https://github.com/jonreiter/govader) | 35 | vader sentiment analysis in go | 6 months ago |
| [transliterator](https://github.com/alexsergivan/transliterator) | 35 | Golang text Transliterator (i.e München -> Muenchen) | a year ago |
| [mystem](https://github.com/dveselov/mystem) | 30 | CGo bindings to Yandex.Mystem | 7 years ago |
| [paicehusk](https://github.com/rookii/paicehusk) | 29 | Golang implementation of the Paice/Husk Stemming Algorithm | 10 years ago |
| [detectlanguage-go](https://github.com/detectlanguage/detectlanguage-go) | 22 | Detect Language API Go Client | a year ago |
| [icu](https://github.com/goodsign/icu) | 21 | Cgo binding for icu4c library | 6 years ago |
| [golibstemmer](https://github.com/rjohnsondev/golibstemmer) | 20 | Go bindings for the snowball libstemmer library including porter 2 | 9 years ago |
| [gotokenizer](https://github.com/xujiajun/gotokenizer) | 18 | A tokenizer based on the dictionary and Bigram language models for Go. (Now only support chinese segmentation) | 4 years ago |
| [t](https://github.com/youthlin/t) | 15 | t: translation util for go, using GNU gettext | a month ago |
| [libtextcat](https://github.com/goodsign/libtextcat) | 13 | Cgo binding for libtextcat C library | 11 years ago |
| [shamoji](https://github.com/osamingo/shamoji) | 13 | The shamoji (杓文字) is a word filtering package | 8 months ago |
| [porter](https://github.com/a2800276/porter) | 12 | porter stemmer | 10 years ago |
| [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) | 10 | 💬 Sentiment analyzer library using SentiWordnet in Go | 2 years ago |


### [Networking](#Networking)
* Libraries for working with various layers of the network.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fasthttp](https://github.com/valyala/fasthttp) | 19942 | Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http | 5 hours ago |
| [kcptun](https://github.com/xtaci/kcptun) | 13424 | A Stable & Secure Tunnel based on KCP with N:M multiplexing and FEC. Available for ARM, MIPS, 386 and AMD64。N:M 多重化と FEC を備えた KCP に基づく安定した安全なトンネル。 N:M 다중화 및 FEC를 사용하는 KCP 기반의 안정적이고 안전한 터널입니다.  Un tunnel stable et sécurisé basé sur KCP avec multiplexage N:M et FEC. | 12 days ago |
| [webrtc](https://github.com/pion/webrtc) | 11513 | Pure Go implementation of the WebRTC API | a day ago |
| [quic-go](https://github.com/quic-go/quic-go) | 8503 | A QUIC implementation in pure go | 10 hours ago |
| [gnet](https://github.com/panjf2000/gnet) | 7918 | 🚀 gnet is a high-performance, lightweight, non-blocking, event-driven networking framework written in pure Go./ gnet 是一个高性能、轻量级、非阻塞的事件驱动 Go 网络框架。 | 17 days ago |
| [dns](https://github.com/miekg/dns) | 7130 | DNS library in Go | 17 days ago |
| [gopacket](https://github.com/google/gopacket) | 5749 | Provides packet processing capabilities for Go | 16 days ago |
| [httplab](https://github.com/qustavo/httplab) | 3913 | The interactive web server | 3 months ago |
| [kcp-go](https://github.com/xtaci/kcp-go) | 3705 |  A Crypto-Secure, Production-Grade Reliable-UDP Library for golang with FEC  | 3 months ago |
| [gobgp](https://github.com/osrg/gobgp) | 3275 | BGP implemented in the Go Programming Language | 15 hours ago |
| [ssh](https://github.com/gliderlabs/ssh) | 3106 | Easy SSH servers in Golang | 8 days ago |
| [fortio](https://github.com/fortio/fortio) | 2982 | Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats. | 9 hours ago |
| [water](https://github.com/songgao/water) | 1714 | A simple TUN/TAP library written in native Go. | 4 months ago |
| [nbio](https://github.com/lesismal/nbio) | 1693 | Pure Go 1000k+ connections solution, support tls/http1.x/websocket and basically compatible with net/http, with high-performance and low memory cost, non-blocking, event-driven, easy-to-use. | 3 days ago |
| [gev](https://github.com/Allenxuxu/gev) | 1657 | 🚀Gev is a lightweight, fast non-blocking TCP network library / websocket server based on Reactor mode. Support custom protocols to quickly and easily build high-performance servers.  | 5 months ago |
| [go-getter](https://github.com/hashicorp/go-getter) | 1510 | Package for downloading things from a string URL using a variety of protocols. | 13 days ago |
| [sftp](https://github.com/pkg/sftp) | 1375 | SFTP support for the go.crypto/ssh package | 18 days ago |
| [nff-go](https://github.com/aregm/nff-go) | 1311 | NFF-Go -Network Function Framework for GO (former YANFF) | 9 months ago |
| [grab](https://github.com/cavaliergopher/grab) | 1280 | A download manager package for Go | a month ago |
| [ftp](https://github.com/jlaffaye/ftp) | 1148 | FTP client package for Go | a month ago |
| [mdns](https://github.com/hashicorp/mdns) | 1005 | Simple mDNS client/server library in Golang | 7 days ago |
| [gosnmp](https://github.com/gosnmp/gosnmp) | 977 | An SNMP library written in Go | a month ago |
| [vssh](https://github.com/yahoo/vssh) | 910 | Go Library to Execute Commands Over SSH at Scale | 3 months ago |
| [gmqtt](https://github.com/DrmagicE/gmqtt) | 892 | Gmqtt is a flexible, high-performance MQTT broker library that fully implements the MQTT protocol V3.x and V5 in golang | 2 months ago |
| [cidranger](https://github.com/yl2chen/cidranger) | 849 | Fast IP to CIDR lookup in Golang | 2 months ago |
| [easytcp](https://github.com/DarthPestilane/easytcp) | 704 | :sparkles: :rocket: EasyTCP is a light-weight TCP framework written in Go (Golang), built with message router. EasyTCP helps you build a TCP server easily fast and less painful. | 5 months ago |
| [lhttp](https://github.com/fanux/lhttp) | 691 | go websocket, a better way to buid your IM server | 5 years ago |
| [peerdiscovery](https://github.com/schollz/peerdiscovery) | 598 | Pure-Go library for cross-platform local peer discovery using UDP multicast :woman: :repeat: :woman: | 24 days ago |
| [go-stun](https://github.com/ccding/go-stun) | 592 | A go implementation of the STUN client (RFC 3489 and RFC 5389) | 4 months ago |
| [gaio](https://github.com/xtaci/gaio) | 508 | High performance async-io(proactor) networking for Golang。golangのための高性能非同期io(proactor)ネットワーキング | a year ago |
| [gotcp](https://github.com/gansidui/gotcp) | 508 | A Go package for quickly building tcp servers | 5 hours ago |
| [stun](https://github.com/gortc/stun) | 487 | Fast RFC 5389 STUN implementation in go | 2 years ago |
| [gopcap](https://github.com/akrennmair/gopcap) | 473 | A simple wrapper around libpcap for the Go programming language | 2 years ago |
| [tcp_server](https://github.com/firstrow/tcp_server) | 424 | golang tcp server | 2 years ago |
| [raw](https://github.com/mdlayher/raw) | 420 | Package raw enables reading and writing data at the device driver level for a network interface.  MIT Licensed. | a year ago |
| [winrm](https://github.com/masterzen/winrm) | 406 | Command-line tool and library for Windows remote command execution in Go | 5 months ago |
| [ftpserverlib](https://github.com/fclairamb/ftpserverlib) | 371 | golang ftp server library | 4 days ago |
| [arp](https://github.com/mdlayher/arp) | 328 | Package arp implements the ARP protocol, as described in RFC 826. MIT Licensed. | 8 months ago |
| [ethernet](https://github.com/mdlayher/ethernet) | 269 | Package ethernet implements marshaling and unmarshaling of IEEE 802.3 Ethernet II frames and IEEE 802.1Q VLAN tags. MIT Licensed. | a year ago |
| [buffstreams](https://github.com/StabbyCutyou/buffstreams) | 253 | A library to simplify writing applications using TCP sockets to stream protobuff messages | 3 years ago |
| [gnxi](https://github.com/google/gnxi) | 242 | gNXI Tools - gRPC Network Management/Operations Interface Tools | a day ago |
| [jazigo](https://github.com/udhos/jazigo) | 195 | Jazigo is a tool written in Go for retrieving configuration for multiple devices, similar to rancid, fetchconfig, oxidized, Sweet. | 4 days ago |
| [utp](https://github.com/anacrolix/utp) | 170 | Use anacrolix/go-libutp instead | 3 months ago |
| [canopus](https://github.com/zubairhamed/canopus) | 152 | CoAP Client/Server implementing RFC 7252 for the Go Language | 5 years ago |
| [xtcp](https://github.com/xfxdev/xtcp) | 144 | A TCP Server Framework with graceful shutdown, custom protocol. | 3 years ago |
| [sslb](https://github.com/eduardonunesp/sslb) | 143 | Golang Super Simple Load Balance | 7 months ago |
| [iplib](https://github.com/c-robinson/iplib) | 116 | A library  for working with IP addresses and networks in Go | 16 days ago |
| [ether](https://github.com/songgao/ether) | 79 | A Go package for sending and receiving ethernet frames. Currently supporting Linux, Freebsd, and OS X. | 7 years ago |
| [dhcp6](https://github.com/mdlayher/dhcp6) | 76 | Package dhcp6 implements a DHCPv6 server, as described in RFC 3315. MIT Licensed. | 5 months ago |
| [packet](https://github.com/aerogo/packet) | 74 | :package: Send network packets over a TCP or UDP connection. | 4 years ago |
| [go-powerdns](https://github.com/joeig/go-powerdns) | 71 | Go PowerDNS 4.x API Client | a month ago |
| [portproxy](https://github.com/aybabtme/portproxy) | 53 | TCP proxy, highjacks HTTP to allow CORS | 9 years ago |
| [linkio](https://github.com/ian-kent/linkio) | 52 | Simulate network link speed | 6 years ago |
| [panoptes-stream](https://github.com/yahoo/panoptes-stream) | 39 | A cloud native distributed streaming network telemetry. | 15 days ago |
| [golibwireshark](https://github.com/sunwxg/golibwireshark) | 29 |  | 6 years ago |
| [graval](https://github.com/koofr/graval) | 28 | An experimental go FTP server framework | 3 years ago |
| [publicip](https://github.com/polera/publicip) | 26 | Go pkg for returning your public facing IP address. | 7 years ago |
| [httpproxy](https://github.com/wzshiming/httpproxy) | 21 | HTTP proxy handler and dialer | 4 months ago |
| [goshark](https://github.com/sunwxg/goshark) | 16 |  | 6 years ago |
| [llb](https://github.com/kirillDanshin/llb) | 14 |  | 7 years ago |
| [tspool](https://github.com/two/tspool) | 14 | tcp server pool | 5 years ago |


### [HTTP Clients](#HTTP-Clients)
* Libraries for making HTTP requests.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [resty](https://github.com/go-resty/resty) | 8145 | Simple HTTP and REST client library for Go | 11 days ago |
| [heimdall](https://github.com/gojek/heimdall) | 2466 | An enhanced HTTP client for Go | 5 months ago |
| [grequests](https://github.com/levigross/grequests) | 1981 | A Go "clone" of the great and famous Requests library | 5 months ago |
| [sling](https://github.com/dghubble/sling) | 1592 | A Go HTTP client library for creating and sending API requests | 16 hours ago |
| [requests](https://github.com/carlmjohnson/requests) | 1098 | HTTP requests for Gophers | 3 days ago |
| [gentleman](https://github.com/h2non/gentleman) | 1012 | Plugin-driven, extensible HTTP client toolkit for Go | 2 years ago |
| [pester](https://github.com/sethgrid/pester) | 621 | Go (golang) http calls with retries and backoff  | a year ago |
| [request](https://github.com/monaco-io/request) | 245 | go request, go http client | a month ago |
| [go-http-client](https://github.com/bozd4g/go-http-client) | 61 | An enhanced http client for Golang | 8 months ago |
| [rq](https://github.com/ddo/rq) | 49 | A nicer interface for golang stdlib HTTP client | 4 years ago |
| [httpretry](https://github.com/ybbus/httpretry) | 39 | Enriches the standard go http client with retry functionality. | 6 months ago |
| [go-req](https://github.com/wenerme/go-req) | 20 | Declarative golang HTTP client | a year ago |
| [httpc](https://github.com/valord577/httpc) | 5 | A customizable and simple HTTP client library. Only depend on the stdlib HTTP client. | 2 years ago |


### [OpenGL](#OpenGL)
* Libraries for using OpenGL in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glfw](https://github.com/go-gl/glfw) | 1420 | Go bindings for GLFW 3 | 5 months ago |
| [gl](https://github.com/go-gl/gl) | 983 | Go bindings for OpenGL (generated via glow) | 2 years ago |
| [mathgl](https://github.com/go-gl/mathgl) | 500 | A pure Go 3D math library. | 4 months ago |
| [gl](https://github.com/goxjs/gl) | 165 | Go cross-platform OpenGL bindings. | a month ago |
| [glfw](https://github.com/goxjs/glfw) | 78 | Go cross-platform glfw library for creating an OpenGL context and receiving events. | a month ago |
| [go-glmatrix](https://github.com/technohippy/go-glmatrix) | 7 | go-glmatrix is a golang version of glMatrix, which is "designed to perform vector and matrix operations stupidly fast". | 3 years ago |


### [ORM](#ORM)
* Libraries that implement Object-Relational Mapping or datamapping techniques.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gorm](https://github.com/go-gorm/gorm) | 33214 | The fantastic ORM library for Golang, aims to be developer friendly | a day ago |
| [beego](https://github.com/beego/beego) | 30049 | beego is an open-source, high-performance web framework for the Go programming language. | 19 hours ago |
| [ent](https://github.com/ent/ent) | 13879 | An entity framework for Go | 32 minutes ago |
| [sqlboiler](https://github.com/volatiletech/sqlboiler) | 5937 | Generate a Go ORM tailored to your database schema. | 2 days ago |
| [pg](https://github.com/go-pg/pg) | 5451 | Golang ORM with focus on PostgreSQL features and performance | a month ago |
| [gorp](https://github.com/go-gorp/gorp) | 3676 | Go Relational Persistence - an ORM-ish library for Go | a month ago |
| [db](https://github.com/upper/db) | 3365 | Data access layer for PostgreSQL, CockroachDB, MySQL, SQLite and MongoDB with ORM-like features. | a month ago |
| [gormt](https://github.com/xxjwxc/gormt) | 2223 | database to golang struct | 2 months ago |
| [reform](https://github.com/go-reform/reform) | 1419 | A better ORM for Go, based on non-empty interfaces and code generation. | 5 months ago |
| [pop](https://github.com/gobuffalo/pop) | 1360 | A Tasty Treat For All Your Database Needs | 14 days ago |
| [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) | 1063 | A flexible and powerful SQL string builder library plus a zero-config ORM. | 5 hours ago |
| [go-queryset](https://github.com/jirfag/go-queryset) | 700 | 100% type-safe ORM for Go (Golang) with code generation and MySQL, PostgreSQL, Sqlite3, SQL Server support. GORM under the hood. | 5 months ago |
| [rel](https://github.com/go-rel/rel) | 659 | :gem: Modern ORM for Golang - Testable, Extendable and Crafted Into a Clean and Elegant API | 3 days ago |
| [zoom](https://github.com/albrow/zoom) | 300 | A blazing-fast datastore and querying engine for Go built on Redis. | 6 months ago |
| [gosql](https://github.com/rushteam/gosql) | 175 | golang orm and sql builder | a year ago |
| [grimoire](https://github.com/Fs02/grimoire) | 159 | Database access layer for golang | 2 years ago |
| [go-store](https://github.com/gosuri/go-store) | 111 | A simple and fast Redis backed key-value store library for Go | 6 years ago |
| [go-firestorm](https://github.com/jschoedt/go-firestorm) | 46 | Simple Go ORM for Google/Firebase Cloud Firestore | 2 years ago |
| [marlow](https://github.com/marlow/marlow) | 13 | persistence layer code generation for golang | 3 years ago |
| [lore](https://github.com/abrahambotros/lore) | 12 | Light Object-Relational Environment (LORE) provides a simple and lightweight pseudo-ORM/pseudo-struct-mapping environment for Go | 6 years ago |


### [Package Management](#Package-Management)
* 

#### [Official experimental tooling for package management](#Official-experimental-tooling-for-package-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dep](https://github.com/golang/dep) | 12957 | Go dependency management tool experiment (deprecated) | 3 years ago |


#### [Unofficial libraries for package and dependency management](#Official-libraries-for-package-and-dependency-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glide](https://github.com/Masterminds/glide) | 8176 | Package Management for Golang | a year ago |
| [godep](https://github.com/tools/godep) | 5575 | dependency tool for go | 5 years ago |
| [govendor](https://github.com/kardianos/govendor) | 4949 | Use Go Modules. | 3 years ago |
| [gopm](https://github.com/gpmgo/gopm) | 2475 | Go Package Manager (gopm) is a package manager and build tool for Go. | 4 years ago |
| [gom](https://github.com/mattn/gom) | 1389 | Go Manager - bundle for go | 4 years ago |
| [gpm](https://github.com/pote/gpm) | 1198 | Barebones dependency manager for Go. | 6 years ago |
| [goop](https://github.com/petejkim/goop) | 780 | A simple dependency manager for Go (golang), inspired by Bundler. | 8 years ago |
| [modgv](https://github.com/lucasepe/modgv) | 464 | Converts 'go mod graph' output into Graphviz's DOT language | 6 months ago |
| [nut](https://github.com/owenthereal/nut) | 235 | Vendor Go dependencies | 8 years ago |
| [johnny-deps](https://github.com/VividCortex/johnny-deps) | 214 | Barebones dependency manager for Go. | 3 years ago |
| [mvn-golang](https://github.com/raydac/mvn-golang) | 157 | maven plugin to automate GoSDK load and build of projects | 25 days ago |
| [VenGO](https://github.com/DamnWidget/VenGO) | 122 | Create and manage Isolated Virtual Environments for Go | 7 years ago |
| [gop](https://github.com/lunny/gop) | 50 | Moved to https://gitea.com/lunny/gop | 4 years ago |


### [Performance](#Performance)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jaeger](https://github.com/jaegertracing/jaeger) | 18052 | CNCF Jaeger, a Distributed Tracing Platform | 12 hours ago |
| [pixie](https://github.com/pixie-io/pixie) | 4764 | Instant Kubernetes-Native Application Observability | 7 hours ago |
| [statsviz](https://github.com/arl/statsviz) | 2921 | :rocket: Visualise Go program runtime metrics in real time in your browser | a month ago |
| [profile](https://github.com/pkg/profile) | 1889 | Simple profiling for Go | 10 months ago |
| [tracer](https://github.com/kamilsk/tracer) | 79 | 🪡 Dead simple, lightweight tracing. | 2 years ago |


### [Query Language](#Query-Language)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphql](https://github.com/graphql-go/graphql) | 9336 | An implementation of GraphQL for Go / Golang | 17 days ago |
| [gqlgen](https://github.com/99designs/gqlgen) | 9074 | go generate based graphql server library | 5 hours ago |
| [graphql-go](https://github.com/graph-gophers/graphql-go) | 4512 | GraphQL server with a focus on ease of use | a month ago |
| [dasel](https://github.com/TomWright/dasel) | 4469 | Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package. | a day ago |
| [gojsonq](https://github.com/thedevsaddam/gojsonq) | 2082 | A simple Go package to Query over JSON/YAML/XML/CSV Data  | 8 months ago |
| [rql](https://github.com/a8m/rql) | 294 | Resource Query Language for REST | 11 hours ago |
| [jsonql](https://github.com/elgs/jsonql) | 269 | JSON query expression library in Golang. | 3 years ago |
| [jsonslice](https://github.com/bhmj/jsonslice) | 79 | json slicer | 3 months ago |
| [graphql](https://github.com/tmc/graphql) | 57 | graphql parser + utilities | 6 years ago |
| [rest-query-parser](https://github.com/timsolov/rest-query-parser) | 56 | Query Parser for REST | 20 days ago |
| [api-fu](https://github.com/ccbrown/api-fu) | 50 | A collection of Go packages for creating robust GraphQL APIs | 14 days ago |
| [straf](https://github.com/ThundR67/straf) | 34 | Convert Golang Struct To GraphQL Object On The Fly | 3 years ago |
| [jsonpath](https://github.com/AsaiYusuke/jsonpath) | 18 | A query library for retrieving part of JSON based on JSONPath syntax. | 5 months ago |
| [gws](https://github.com/Zaba505/gws) | 7 | A WebSocket client and server for GraphQL | 3 years ago |


### [Resource Embedding](#Resource-Embedding)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [statik](https://github.com/rakyll/statik) | 3639 | Embed files into a Go executable | 3 months ago |
| [packr](https://github.com/gobuffalo/packr) | 3411 | The simple and easy way to embed static files into Go binaries. | 2 years ago |
| [go.rice](https://github.com/GeertJohan/go.rice) | 2367 | go.rice is a Go package that makes working with resources such as html,js,css,images,templates, etc very easy. | 9 months ago |
| [vfsgen](https://github.com/shurcooL/vfsgen) | 976 | Takes an input http.FileSystem (likely at go generate time) and generates Go code that statically implements it. | a month ago |
| [esc](https://github.com/mjibson/esc) | 636 | A simple file embedder for Go | 4 years ago |
| [fileb0x](https://github.com/UnnoTed/fileb0x) | 630 | a better customizable tool to embed files in go; also update embedded files remotely without restarting the server | 5 months ago |
| [go-resources](https://github.com/omeid/go-resources) | 176 | Unfancy resources embedding for Go with out of box http.FileSystem support. | 10 months ago |
| [statics](https://github.com/go-playground/statics) | 66 | :file_folder: Embeds static resources into go files for single binary compilation + works with http.FileSystem + symlinks | 7 years ago |
| [templify](https://github.com/wlbr/templify) | 30 | A tool to be used with 'go generate' to embed external template files into Go code. | 2 years ago |
| [rebed](https://github.com/soypat/rebed) | 27 | Recreates directory and files from embedded filesystem using Go 1.16 embed.FS type. | a year ago |
| [debme](https://github.com/leaanthony/debme) | 25 | embed.FS wrapper providing additional functionality | 2 years ago |
| [mule](https://github.com/wlbr/mule) | 12 | mule is a tool to be used with 'go generate' to embed external resources files into Go code. | 2 years ago |


### [Science and Data Analysis](#Science-and-Data-Analysis)
* Libraries for scientific computing and data analyzing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gonum](https://github.com/gonum/gonum) | 6748 | Gonum is a set of numeric libraries for the Go programming language. It contains libraries for matrices, statistics, optimization, and more | 2 days ago |
| [stats](https://github.com/montanaflynn/stats) | 2794 | A well tested and comprehensive Golang statistics library package with no dependencies. | 2 months ago |
| [plot](https://github.com/gonum/plot) | 2492 | A repository for plotting and visualizing data | 14 days ago |
| [gosl](https://github.com/cpmech/gosl) | 1761 | Linear algebra, eigenvalues, FFT, Bessel, elliptic, orthogonal polys, geometry, NURBS, numerical quadrature, 3D transfinite interpolation, random numbers, Mersenne twister, probability distributions, optimisation, differential equations. | 2 months ago |
| [streamtools](https://github.com/nytlabs/streamtools) | 1314 | tools for working with streams of data | 8 years ago |
| [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) | 1027 | DataFrames for Go: For statistics, machine-learning, and data manipulation/exploration | a year ago |
| [go-dsp](https://github.com/mjibson/go-dsp) | 825 | Digital Signal Processing for Go | 2 years ago |
| [chart](https://github.com/vdobler/chart) | 755 | Provide basic charts in go | 2 years ago |
| [goraph](https://github.com/gyuho/goraph) | 720 | Package goraph implements graph data structure and algorithms. | a year ago |
| [orb](https://github.com/paulmach/orb) | 704 | Types and utilities for working with 2d geometry in Golang | 23 days ago |
| [graph](https://github.com/yourbasic/graph) | 650 | Graph algorithms and data structures | 3 months ago |
| [ewma](https://github.com/VividCortex/ewma) | 412 | Exponentially Weighted Moving Average algorithms for Go. | 2 years ago |
| [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) | 376 | 📅 Calendar heatmap inspired by GitHub contribution activity  | 3 months ago |
| [TextRank](https://github.com/DavidBelicza/TextRank) | 183 | :wink: :cyclone: :strawberry: TextRank implementation in Golang with extendable features (summarization, phrase extraction) and multithreading (goroutine). | 2 years ago |
| [gohistogram](https://github.com/VividCortex/gohistogram) | 172 | Streaming approximate histograms in Go | 3 years ago |
| [sparse](https://github.com/james-bowman/sparse) | 146 | Sparse matrix formats for linear algebra supporting scientific and machine learning applications | 2 years ago |
| [go-estimate](https://github.com/milosgajdos/go-estimate) | 104 | State estimation and filtering algorithms in Go | 6 months ago |
| [pagerank](https://github.com/alixaxel/pagerank) | 77 | Weighted PageRank implementation in Go | 2 years ago |
| [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) | 68 | 🏝 JSONL Graph Tools | 9 months ago |
| [geom](https://github.com/skelterjohn/geom) | 55 | 2d geometry for golang | 6 years ago |
| [evaler](https://github.com/soniah/evaler) | 52 | Implements a simple floating point arithmetic expression evaluator in Go (golang). | 5 years ago |
| [decimal](https://github.com/db47h/decimal) | 37 | An arbitrary-precision decimal floating-point arithmetic package for Go | a year ago |
| [triangolatte](https://github.com/tchayen/triangolatte) | 35 | 2D triangulation library. Allows translating lines and polygons (both based on points) to the language of GPUs. | 2 years ago |
| [goent](https://github.com/kzahedi/goent) | 33 | GO Implementation of Entropy Measures | 4 years ago |
| [piecewiselinear](https://github.com/sgreben/piecewiselinear) | 26 | tiny linear interpolation library for go (factored out from https://github.com/sgreben/yeetgif) | 3 years ago |
| [godesim](https://github.com/soypat/godesim) | 21 | ODE system solver made simple. For IVPs (initial value problems). | a year ago |
| [ode](https://github.com/ChristopherRabotin/ode) | 21 | An ordinary differential equation solving library in golang. | 6 years ago |
| [PiHex](https://github.com/claygod/PiHex) | 20 | PiHex Library, written in Go, generates a hexadecimal number sequence in the number Pi in the range from 0 to 10,000,000. | 9 months ago |
| [GoStats](https://github.com/OGFris/GoStats) | 19 | GoStats is a go library for math statistics mostly used in ML domains, it covers most of the statistical measures functions. | 5 years ago |
| [assocentity](https://github.com/ndabAP/assocentity) | 12 | Package assocentity returns the mean distance from tokens to an entity and its synonyms | 2 months ago |
| [go-gt](https://github.com/ThePaw/go-gt) | 10 | Automatically exported from code.google.com/p/go-gt | 8 years ago |
| [rootfinding](https://github.com/khezen/rootfinding) | 10 | root-finding library | 3 years ago |
| [bradleyterry](https://github.com/seanhagen/bradleyterry) | 8 | Package to do Bradley-Terry Model pairwise compairsons | 4 years ago |


### [Security](#Security)
* Libraries that are used to help make your application more secure.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 13871 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 9 hours ago |
| [lego](https://github.com/go-acme/lego) | 6367 | Let's Encrypt/ACME client and library written in Go | 3 days ago |
| [certmagic](https://github.com/caddyserver/certmagic) | 4580 | Automatic HTTPS for any Go program: fully-managed TLS certificate issuance and renewal | 17 days ago |
| [cameradar](https://github.com/Ullaakut/cameradar) | 3447 | Cameradar hacks its way into RTSP videosurveillance cameras | a month ago |
| [memguard](https://github.com/awnumar/memguard) | 2378 | Secure software enclave for storage of sensitive information in memory. | 21 days ago |
| [secure](https://github.com/unrolled/secure) | 2135 | HTTP middleware for Go that facilitates some quick security wins. | 8 months ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1995 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 2 months ago |
| [themis](https://github.com/cossacklabs/themis) | 1729 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | a month ago |
| [acra](https://github.com/cossacklabs/acra) | 1205 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 12 minutes ago |
| [dongle](https://github.com/golang-module/dongle) | 736 | A simple, semantic and developer-friendly golang package for encoding&decoding and encryption&decryption | 6 months ago |
| [nacl](https://github.com/kevinburke/nacl) | 535 | Pure Go implementation of the NaCL set of API's | a year ago |
| [go-password-validator](https://github.com/wagslane/go-password-validator) | 420 | Validate the Strength of a Password in Go | a year ago |
| [ssh-vault](https://github.com/ssh-vault/ssh-vault) | 385 | 🌰  encrypt/decrypt using ssh keys | 3 months ago |
| [optimus-go](https://github.com/pjebs/optimus-go) | 349 | ID hashing and Obfuscation using Knuth's Algorithm | 3 years ago |
| [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) | 330 | A rest application to update firewalld rules on a linux server  | 3 years ago |
| [badactor](https://github.com/jaredfolkins/badactor) | 315 | BadActor.org An in-memory application driven jailer written in Go | 3 years ago |
| [go-yara](https://github.com/hillu/go-yara) | 311 | Go bindings for YARA | a month ago |
| [passlib](https://github.com/hlandau/passlib) | 285 | :key: Idiotproof golang password validation library inspired by Python's passlib | 2 years ago |
| [simple-scrypt](https://github.com/elithrar/simple-scrypt) | 189 | A convenience library for generating, comparing and inspecting password hashes using the scrypt KDF in Go 🔑 | 2 years ago |
| [yara](https://github.com/plusvic/yara) | 132 | The pattern matching swiss knife | 3 years ago |
| [argon2pw](https://github.com/raja/argon2pw) | 89 | Argon2 password hashing package for go with constant time hash comparison | 2 years ago |
| [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) | 55 | A probably paranoid Golang utility library for securely hashing and encrypting passwords based on the Dropbox method. This implementation uses Blake2b, Scrypt and XSalsa20-Poly1305 (via NaCl SecretBox) to create secure password hashes that are also encrypted using a master passphrase. | a year ago |
| [go-generate-password](https://github.com/m1/go-generate-password) | 48 | Password generator written in Go | a year ago |
| [certificates](https://github.com/mvmaasakkers/certificates) | 37 | An opinionated helper for generating tls certificates | 7 months ago |
| [secureio](https://github.com/xaionaro-go/secureio) | 30 | An easy-to-use XChaCha20-encryption wrapper for io.ReadWriteCloser (even lossy UDP) using ECDH key exchange algorithm, ED25519 signatures and Blake3+Poly1305 checksums/message-authentication for Go (golang). Also a multiplexer. | 3 years ago |
| [sslmgr](https://github.com/adrianosela/sslmgr) | 20 | A layer of abstraction the around acme/autocert certificate manager (Golang) | 10 months ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 19 | A light package for generating and comparing password hashing with argon2 in Go | 3 months ago |
| [goArgonPass](https://github.com/dwin/goArgonPass) | 16 | goArgonPass is a Argon2 Password utility package for Go using the crypto library package Argon2 designed to be compatible with Passlib for Python and Argon2 PHP. Argon2 was the winner of the most recent Password Hashing Competition. This is designed for use anywhere password hashing and verification might be needed and is intended to replace implementations using bcrypt or Scrypt. | 3 years ago |


### [Serialization](#Serialization)
* Libraries and tools for binary serialization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 13871 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 9 hours ago |
| [go](https://github.com/json-iterator/go) | 12480 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 2 months ago |
| [protobuf](https://github.com/golang/protobuf) | 9184 | Go support for Google's protocol buffers | 2 months ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 7018 | Go library for decoding generic map values into native Go structures and vice versa. | 13 days ago |
| [protobuf](https://github.com/gogo/protobuf) | 5581 | [Deprecated] Protocol Buffers for Go with Gadgets | 12 days ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1995 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 2 months ago |
| [go](https://github.com/ugorji/go) | 1762 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | a month ago |
| [acra](https://github.com/cossacklabs/acra) | 1205 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 13 minutes ago |
| [csvutil](https://github.com/jszwec/csvutil) | 820 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 4 months ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 713 | binary serialization format | 16 days ago |
| [cbor](https://github.com/fxamacker/cbor) | 593 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | a day ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 289 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 4 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 159 | PHP session encoder/decoder written in Go | 5 years ago |
| [structomap](https://github.com/danhper/structomap) | 140 | Easily and dynamically generate maps from Go static structures | 4 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 75 | Golang binary decoder for mapping data into the structure | a year ago |
| [bambam](https://github.com/glycerine/bambam) | 67 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 7 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 53 | Asn.1 BER and DER encoding library for golang. | 4 years ago |
| [bel](https://github.com/csweichel/bel) | 35 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | 2 months ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 25 | Fixed width file parser (encoder/decoder) in GO (golang) | 3 months ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 24 | Converts go types no matter what | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 20 | A standard way to wrap a proto message | a day ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 19 | A light package for generating and comparing password hashing with argon2 in Go | 3 months ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 8 | A Go package for encode/decode fixed-width data | 4 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 6 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | a month ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 4 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 3 years ago |


### [Server Applications](#Server-Applications)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 13871 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 9 hours ago |
| [go](https://github.com/json-iterator/go) | 12480 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 2 months ago |
| [protobuf](https://github.com/golang/protobuf) | 9184 | Go support for Google's protocol buffers | 2 months ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 7018 | Go library for decoding generic map values into native Go structures and vice versa. | 13 days ago |
| [protobuf](https://github.com/gogo/protobuf) | 5581 | [Deprecated] Protocol Buffers for Go with Gadgets | 12 days ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1995 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 2 months ago |
| [go](https://github.com/ugorji/go) | 1762 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | a month ago |
| [acra](https://github.com/cossacklabs/acra) | 1205 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 13 minutes ago |
| [csvutil](https://github.com/jszwec/csvutil) | 820 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 4 months ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 713 | binary serialization format | 16 days ago |
| [cbor](https://github.com/fxamacker/cbor) | 593 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | a day ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 289 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 4 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 159 | PHP session encoder/decoder written in Go | 5 years ago |
| [structomap](https://github.com/danhper/structomap) | 140 | Easily and dynamically generate maps from Go static structures | 4 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 75 | Golang binary decoder for mapping data into the structure | a year ago |
| [bambam](https://github.com/glycerine/bambam) | 67 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 7 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 53 | Asn.1 BER and DER encoding library for golang. | 4 years ago |
| [bel](https://github.com/csweichel/bel) | 35 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | 2 months ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 25 | Fixed width file parser (encoder/decoder) in GO (golang) | 3 months ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 24 | Converts go types no matter what | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 20 | A standard way to wrap a proto message | a day ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 19 | A light package for generating and comparing password hashing with argon2 in Go | 3 months ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 8 | A Go package for encode/decode fixed-width data | 4 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 6 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | a month ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 4 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 3 years ago |


### [Stream Processing](#Stream-Processing)
* Libraries and tools for stream processing and reactive programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-streams](https://github.com/reugn/go-streams) | 1514 | A lightweight stream processing library for Go | 2 months ago |
| [machine](https://github.com/whitaker-io/machine) | 133 | Machine is a workflow/pipeline library for processing data | 18 days ago |
| [stream](https://github.com/youthlin/stream) | 80 | Go Stream, like Java 8 Stream. | 3 years ago |


### [Template Engines](#Template-Engines)
* Libraries and tools for templating and lexing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gofpdf](https://github.com/jung-kurt/gofpdf) | 4169 | A PDF document generator with high level support for text, drawing and images | 2 years ago |
| [sprig](https://github.com/Masterminds/sprig) | 3680 | Useful template functions for Go templates. | 8 days ago |
| [quicktemplate](https://github.com/valyala/quicktemplate) | 2817 | Fast, powerful, yet easy to use template engine for Go. Optimized for speed, zero memory allocations in hot paths. Up to 20x faster than html/template | 2 months ago |
| [pongo2](https://github.com/flosch/pongo2) | 2602 | Django-syntax like template-engine for Go | a month ago |
| [hero](https://github.com/shiyanhui/hero) | 1543 | A handy, fast and powerful go template engine. | 4 years ago |
| [mustache](https://github.com/hoisie/mustache) | 1081 | The mustache template language in Go | 2 months ago |
| [jet](https://github.com/CloudyKit/jet) | 1064 | Jet  template engine | 8 months ago |
| [maroto](https://github.com/johnfercher/maroto) | 1050 | A maroto way to create PDFs. Maroto is inspired in Bootstrap and uses gofpdf. Fast and simple. | 3 months ago |
| [amber](https://github.com/eknkc/amber) | 903 | Amber is an elegant templating engine for Go Programming Language, inspired from HAML and Jade | 3 years ago |
| [ace](https://github.com/yosssi/ace) | 826 | HTML template engine for Go | 5 years ago |
| [gorazor](https://github.com/sipin/gorazor) | 824 | Razor view engine for go | 12 days ago |
| [fasttemplate](https://github.com/valyala/fasttemplate) | 733 | Simple and fast template engine for Go | 10 months ago |
| [ego](https://github.com/benbjohnson/ego) | 561 | An ERB-style templating language for Go. | 5 months ago |
| [raymond](https://github.com/aymerick/raymond) | 545 | Handlebars for golang | 9 months ago |
| [goview](https://github.com/foolin/goview) | 357 | Goview is a lightweight, minimalist and idiomatic template library based on golang html/template for building Go web application. | 5 months ago |
| [liquid](https://github.com/osteele/liquid) | 221 | A Liquid template engine in Go | a month ago |
| [soy](https://github.com/robfig/soy) | 169 | Go implementation for Soy templates (Google Closure templates) | 5 months ago |
| [kasia.go](https://github.com/ziutek/kasia.go) | 74 | Templating system for HTML and other text documents - go implementation | 8 years ago |
| [velvet](https://github.com/gobuffalo/velvet) | 72 | A sweet velvety templating package | 6 years ago |
| [extemplate](https://github.com/dannyvankooten/extemplate) | 53 | Wrapper package for Go's template/html to allow for easy file-based template inheritance. | 8 months ago |
| [gospin](https://github.com/m1/gospin) | 46 | Article spinning and spintax/spinning syntax engine written in Go, useful for A/B, testing pieces of text/articles and creating more natural conversations | 2 years ago |
| [tbd](https://github.com/lucasepe/tbd) | 24 | "to be defined" - a really simple way to create text templates with placeholders | 2 years ago |
| [damsel](https://github.com/dskinner/damsel) | 23 | Package damsel provides html outlining via css-selectors and common template functionality. | 7 years ago |


### [Testing](#Testing)
* Libraries for testing codebases and generating test data.

#### [Testing Frameworks](#Testing-Frameworks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testify](https://github.com/stretchr/testify) | 20303 | A toolkit with common assertions and mocks that plays nicely with the standard library | 2 days ago |
| [goconvey](https://github.com/smartystreets/goconvey) | 7852 | Go testing in the browser. Integrates with `go test`. Write behavioral tests in Go. | 12 days ago |
| [go-cmp](https://github.com/google/go-cmp) | 3643 | Package for comparing Go values in tests | 2 months ago |
| [httpexpect](https://github.com/gavv/httpexpect) | 2270 | End-to-end HTTP and REST API testing for Go. | a month ago |
| [godog](https://github.com/cucumber/godog) | 2023 | Cucumber for golang | a month ago |
| [gnomock](https://github.com/orlangure/gnomock) | 1216 | Test your code without writing mocks with ephemeral Docker containers 📦 Setup popular services with just a couple lines of code ⏱️ No bash, no yaml, only code 💻 | a day ago |
| [go-vcr](https://github.com/dnaeon/go-vcr) | 1031 | Record and replay your HTTP interactions for fast, deterministic and accurate tests | 19 days ago |
| [testfixtures](https://github.com/go-testfixtures/testfixtures) | 968 | Ruby on Rails like test fixtures for Go. Write tests against a real database | 3 days ago |
| [goblin](https://github.com/franela/goblin) | 889 | Minimal and Beautiful Go testing framework | 8 months ago |
| [baloo](https://github.com/h2non/baloo) | 762 | Expressive end-to-end HTTP API testing made easy in Go | a year ago |
| [goc](https://github.com/qiniu/goc) | 701 | A Comprehensive Coverage Testing System for The Go Programming Language | 2 months ago |
| [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) | 624 | Run a real Postgres database locally on Linux, OSX or Windows as part of another Go application or test | 20 days ago |
| [go-mutesting](https://github.com/zimmski/go-mutesting) | 601 | Mutation testing for Go source code | 2 months ago |
| [gotest.tools](https://github.com/gotestyourself/gotest.tools) | 448 | A collection of packages to augment the go testing package and support common patterns. | 9 days ago |
| [gofight](https://github.com/appleboy/gofight) | 436 | Testing API Handler written in Golang. | 2 years ago |
| [testza](https://github.com/MarvinJWendt/testza) | 411 | Full-featured test framework for Go! Assertions, fuzzing, input testing, output capturing, and much more! 🍕 | 16 hours ago |
| [go-testdeep](https://github.com/maxatome/go-testdeep) | 396 | Extremely flexible golang deep comparison, extends the go testing package, tests HTTP APIs and provides tests suite | 9 days ago |
| [frisby](https://github.com/hofstadter-io/frisby) | 275 | API testing framework inspired by frisby-js | 3 years ago |
| [cupaloy](https://github.com/bradleyjkemp/cupaloy) | 273 | Simple Go snapshot testing | 3 months ago |
| [endly](https://github.com/viant/endly) | 244 | End to end functional test and automation framework | 12 hours ago |
| [go-carpet](https://github.com/msoap/go-carpet) | 240 | Tool for show test coverage in terminal for Go source files | 6 days ago |
| [go-hit](https://github.com/Eun/go-hit) | 231 | http integration test framework | 4 hours ago |
| [commander](https://github.com/commander-cli/commander) | 213 | Test your command line interfaces on windows, linux and osx and nodes viá ssh and docker | 3 months ago |
| [charlatan](https://github.com/percolate/charlatan) | 199 | Go Interface Mocking Tool | 5 months ago |
| [dbcleaner](https://github.com/khaiql/dbcleaner) | 156 | Clean database for testing, inspired by database_cleaner for Ruby | 2 years ago |
| [gospec](https://github.com/luontola/gospec) | 113 | Testing framework for Go. Allows writing self-documenting tests/specifications, and executes them concurrently and safely isolated. [UNMAINTAINED] | 9 years ago |
| [jsonassert](https://github.com/kinbiko/jsonassert) | 113 | A Go test assertion library for verifying that two representations of JSON are semantically equal | 2 months ago |
| [testcase](https://github.com/adamluzsi/testcase) | 111 | testcase is an opinionated testing framework to support test driven design. | a month ago |
| [wstest](https://github.com/posener/wstest) | 100 | go websocket client for unit testing of a websocket handler | 3 years ago |
| [gocrest](https://github.com/corbym/gocrest) | 94 | GoCrest - Hamcrest-like matchers for Go | 4 months ago |
| [assert](https://github.com/go-playground/assert) | 59 | :exclamation:Basic Assertion Library used along side native go testing, with building blocks for custom assertions | a year ago |
| [covergates](https://github.com/covergates/covergates) | 57 | The portal gates to coverage reports | 3 months ago |
| [restit](https://github.com/go-restit/restit) | 56 | A Go library help testing your RESTful API application | 4 years ago |
| [gospecify](https://github.com/stesla/gospecify) | 53 | A BDD library for Go | 12 years ago |
| [gomatch](https://github.com/jfilipczyk/gomatch) | 46 | Library created for testing JSON against patterns. | 3 years ago |
| [dsunit](https://github.com/viant/dsunit) | 43 | Datastore Testibility | 12 hours ago |
| [hamcrest](https://github.com/rdrdr/hamcrest) | 28 | Hamcrest matchers for the Go programming language | 3 years ago |
| [schema](https://github.com/jgroeneveld/schema) | 20 | Quick and easy expression matching for JSON schemas used in requests and responses | 4 years ago |
| [fixenv](https://github.com/rekby/fixenv) | 19 |  | 3 months ago |
| [flute](https://github.com/suzuki-shunsuke/flute) | 17 | Golang HTTP client testing framework | 9 months ago |
| [gogiven](https://github.com/corbym/gogiven) | 16 | gogiven - BDD testing framework for go that generates readable output directly from source code | 4 months ago |
| [testsql](https://github.com/zhulongcheng/testsql) | 16 | Generate test data from SQL files before testing and clear it after finished. | 4 years ago |
| [biff](https://github.com/fulldump/biff) | 12 | Bifurcation Framework for testing and use cases | 7 months ago |
| [gosuite](https://github.com/pavlo/gosuite) | 12 | Test suites support for standard Go1.7 "testing" by leveraging Subtests feature | 7 years ago |
| [badio](https://github.com/cavaliergopher/badio) | 10 | Extensions to Go's testing/iotest package | 7 years ago |
| [stop-and-go](https://github.com/elgohr/stop-and-go) | 9 | Testing helper for concurrency | 2 months ago |
| [test](https://github.com/tvastar/test) | 8 | test utilities for golang | 4 years ago |
| [trial](https://github.com/jgroeneveld/trial) | 6 | A simple assertion library for go | 10 months ago |
| [tt](https://github.com/vcaesar/tt) | 6 | Simple and colorful test tools | 5 months ago |


#### [Mock](#Mock)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mock](https://github.com/golang/mock) | 9046 | GoMock is a mocking framework for the Go programming language. | 25 days ago |
| [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) | 5402 | Sql mock driver for golang to test database interactions | 3 months ago |
| [mockery](https://github.com/vektra/mockery) | 4863 | A mock code autogenerator for Go | 3 days ago |
| [hoverfly](https://github.com/SpectoLabs/hoverfly) | 2226 | Lightweight service virtualization/ API simulation / API mocking tool for developers and testers | a day ago |
| [gock](https://github.com/h2non/gock) | 1900 | HTTP traffic mocking and testing made easy in Go ༼ʘ̚ل͜ʘ̚༽ | a month ago |
| [httpmock](https://github.com/jarcoal/httpmock) | 1716 | HTTP mocking for Golang | 15 days ago |
| [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) | 855 | A tool for generating self-contained, type-safe test doubles in go | 7 days ago |
| [go-txdb](https://github.com/DATA-DOG/go-txdb) | 556 | Immutable transaction isolated sql driver for golang | 8 days ago |
| [minimock](https://github.com/gojuno/minimock) | 506 | Powerful mock generation tool for Go programming language | 4 months ago |
| [govcr](https://github.com/seborama/govcr) | 154 | HTTP mock for Golang: record and replay HTTP/HTTPS interactions for offline testing | 9 days ago |
| [go-localstack](https://github.com/elgohr/go-localstack) | 72 | Go Wrapper for using localstack | a day ago |
| [timex](https://github.com/cabify/timex) | 69 | A test-friendly replacement for golang's time package | 3 years ago |
| [mockhttp](https://github.com/tv42/mockhttp) | 22 | Mock object for Go http.ResponseWriter | 9 years ago |
| [mockit](https://github.com/pasdam/mockit) | 16 | Library that make mocking of Go functions/methods easy | 3 months ago |


#### [Fuzzing and delta-debugging/reducing/shrinking](#Fuzzing-and-delta-debugging)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-fuzz](https://github.com/dvyukov/go-fuzz) | 4638 | Randomized testing for Go | 2 months ago |
| [gofuzz](https://github.com/google/gofuzz) | 1443 | Fuzz testing for go. | 9 months ago |
| [tavor](https://github.com/zimmski/tavor) | 242 | A generic fuzzing and delta-debugging framework | 5 years ago |


#### [Selenium and browser control tools](#Selenium-and-browser-control-tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [chromedp](https://github.com/chromedp/chromedp) | 9381 | A faster, simpler way to drive browsers supporting the Chrome DevTools Protocol. | 3 days ago |
| [rod](https://github.com/go-rod/rod) | 4025 | A Devtools driver for web automation and scraping | 7 days ago |
| [selenoid](https://github.com/aerokube/selenoid) | 2398 | Selenium Hub successor running browsers within containers. Scalable, immutable, self hosted Selenium-Grid on any platform with single binary. | a day ago |
| [playwright-go](https://github.com/playwright-community/playwright-go) | 1383 | Playwright for Go a browser automation library to control Chromium, Firefox and WebKit with a single API. | 4 days ago |
| [cdp](https://github.com/mafredri/cdp) | 679 | Package cdp provides type-safe bindings for the Chrome DevTools Protocol (CDP), written in the Go programming language. | 4 months ago |
| [ggr](https://github.com/aerokube/ggr) | 302 | A lightweight load balancer used to create big Selenium clusters | a month ago |


#### [Fail injection](#Fail-injection)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [failpoint](https://github.com/pingcap/failpoint) | 783 | An implementation of failpoints for Golang. | a year ago |


### [Text Processing](#Text-Processing)
* Libraries for parsing and manipulating texts.

#### [Specific Formats](#Specific-Formats)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [colly](https://github.com/gocolly/colly) | 20122 | Elegant Scraper and Crawler Framework for Golang | 19 days ago |
| [goquery](https://github.com/PuerkitoBio/goquery) | 12817 | A little like that j-thing, only in Go. | a month ago |
| [sh](https://github.com/mvdan/sh) | 6076 | A shell parser, formatter, and interpreter with bash support; includes shfmt | 7 days ago |
| [blackfriday](https://github.com/russross/blackfriday) | 5202 | Blackfriday: a markdown processor for Go | a year ago |
| [toml](https://github.com/BurntSushi/toml) | 4248 | TOML parser for Golang with reflection. | 2 months ago |
| [go-humanize](https://github.com/dustin/go-humanize) | 3701 | Go Humans! (formatters for units to human friendly sizes) | 3 hours ago |
| [bluemonday](https://github.com/microcosm-cc/bluemonday) | 2759 | bluemonday: a fast golang HTML sanitizer (inspired by the OWASP Java HTML Sanitizer) to scrub user generated content of XSS | 18 hours ago |
| [gofeed](https://github.com/mmcdole/gofeed) | 2221 | Parse RSS, Atom and JSON feeds in Go | 11 days ago |
| [go-toml](https://github.com/pelletier/go-toml) | 1473 | Go library for the TOML file format | 22 days ago |
| [inject](https://github.com/facebookarchive/inject) | 1394 | Package inject provides a reflect based injector. | 5 years ago |
| [slug](https://github.com/gosimple/slug) | 983 | URL-friendly slugify with multiple languages support. | a month ago |
| [commonregex](https://github.com/mingrammer/commonregex) | 864 | 🍫 A collection of common regular expressions for Go | 4 years ago |
| [htmlquery](https://github.com/antchfx/htmlquery) | 623 | htmlquery is golang XPath package for HTML query. | 5 months ago |
| [dataflowkit](https://github.com/slotix/dataflowkit) | 605 | Extract structured data from web sites. Web sites scraping.   | 5 months ago |
| [omniparser](https://github.com/jf-tech/omniparser) | 589 | omniparser: a native Golang ETL streaming parser and transform library for CSV, JSON, XML, EDI, text, etc. | 14 days ago |
| [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) | 581 | ⚙️ Convert HTML to Markdown. Even works with entire websites and can be extended through rules. | 21 hours ago |
| [mxj](https://github.com/clbanning/mxj) | 568 | Decode / encode XML to/from map[string]interface{} (or JSON); extract values with dot-notation paths and wildcards.  Replaces x2j and j2x packages. | 15 days ago |
| [go-runewidth](https://github.com/mattn/go-runewidth) | 539 | wcwidth for golang | 5 hours ago |
| [gographviz](https://github.com/awalterschulze/gographviz) | 527 | Parses the Graphviz DOT language in golang | 5 months ago |
| [gommon](https://github.com/labstack/gommon) | 498 | Common packages for Go | 5 months ago |
| [gotext](https://github.com/leonelquinteros/gotext) | 388 | Go (Golang) GNU gettext utilities package  | 13 days ago |
| [goq](https://github.com/andrewstuart/goq) | 243 | A declarative struct-tag-based HTML unmarshaling or scraping package for Go built on top of the goquery library | 2 years ago |
| [goribot](https://github.com/zhshch2002/goribot) | 211 | [Crawler/Scraper for Golang]🕷A lightweight distributed friendly Golang crawler framework.一个轻量的分布式友好的 Golang 爬虫框架。 | 3 years ago |
| [go-nmea](https://github.com/adrianmo/go-nmea) | 197 | A NMEA parser library in pure Go | a month ago |
| [gospider](https://github.com/zhshch2002/gospider) | 196 | ⚡ Light weight Golang spider framework , 轻量的 Golang 爬虫框架 | 2 years ago |
| [github_flavored_markdown](https://github.com/shurcooL/github_flavored_markdown) | 158 | GitHub Flavored Markdown renderer with fenced code block highlighting, clickable header anchor links. | 2 years ago |
| [podcast](https://github.com/eduncan911/podcast) | 125 | iTunes and RSS 2.0 Podcast Generator in Golang | 3 years ago |
| [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) | 120 | EditorConfig Core written in Go | a month ago |
| [sdp](https://github.com/gortc/sdp) | 112 | RFC 4566 SDP implementation in go | 3 years ago |
| [go-zero-width](https://github.com/trubitsyn/go-zero-width) | 110 | Zero-width character detection and removal for Go | 3 years ago |
| [go-vcard](https://github.com/emersion/go-vcard) | 89 | A Go library to parse and format vCard | a month ago |
| [go-slugify](https://github.com/mozillazg/go-slugify) | 87 | Pretty Slug. | 3 years ago |
| [pagser](https://github.com/foolin/pagser) | 85 | Pagser is a simple, extensible, configurable parse and deserialize html page to struct based on goquery and struct tags for golang crawler | 2 years ago |
| [goregen](https://github.com/zach-klippenstein/goregen) | 84 | randexp for Go. | a year ago |
| [align](https://github.com/Guitarbum722/align) | 80 | A general purpose application and library for aligning text. | 2 years ago |
| [bafi](https://github.com/mmalcek/bafi) | 78 | Universal JSON, BSON, YAML, CSV, XML converter with templates | 10 months ago |
| [did](https://github.com/build-trust/did) | 77 | A golang package to work with Decentralized Identifiers (DIDs)  | 7 months ago |
| [genex](https://github.com/alixaxel/genex) | 75 | Genex package for Go | 4 years ago |
| [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) | 75 | Encoding and decoding for fixed-width formatted data | 3 months ago |
| [allot](https://github.com/sbstjn/allot) | 58 | Parse placeholder and wildcard text commands | 2 years ago |
| [guesslanguage](https://github.com/endeveit/guesslanguage) | 57 | Guess the natural language of a text in Go | 6 years ago |
| [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) | 48 | 🚀 Fast and light wildcard pattern matching. | 3 months ago |
| [gonameparts](https://github.com/polera/gonameparts) | 38 | Takes a full name and splits it into individual name parts | 4 years ago |
| [normalize](https://github.com/avito-tech/normalize) | 36 |  | 2 years ago |
| [slugify](https://github.com/avelino/slugify) | 32 | A Go slugify application that handles string | 5 years ago |
| [codetree](https://github.com/aerogo/codetree) | 22 | :evergreen_tree: Parses indented code and returns a tree structure. | 4 years ago |
| [enca](https://github.com/endeveit/enca) | 15 | Minimal cgo bindings for libenca | 7 years ago |
| [gout](https://github.com/drewstinnett/gout) | 11 | Output go objects in standard formats, such as YAML, JSON, etc | 7 months ago |
| [syndfeed](https://github.com/zhengchun/syndfeed) | 11 | A syndication feed parser for Atom 1.0 and RSS 2.0 in Go | 5 years ago |
| [doi](https://github.com/hscells/doi) | 8 | Parse and check doi objects in go. | 6 years ago |
| [encoding](https://github.com/ake-persson/encoding) | 8 | Go package provides a generic interface to encoders and decoders | 4 years ago |
| [ltsv](https://github.com/Wing924/ltsv) | 8 | High performance LTSV (Labeled Tab Separeted Value) reader for Go. | 4 years ago |
| [bbConvert](https://github.com/CalebQ42/bbConvert) | 7 | Converter from BBCode to HTML | 7 years ago |


#### [Utility](#Utility)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xurls](https://github.com/mvdan/xurls) | 1066 | Extract urls from text | 17 days ago |
| [gotabulate](https://github.com/bndr/gotabulate) | 299 | Gotabulate - Easily pretty-print your tabular data with Go | 2 years ago |
| [radix](https://github.com/yourbasic/radix) | 186 | A fast string sorting algorithm (MSD radix sort) | 5 years ago |
| [regroup](https://github.com/oriser/regroup) | 132 | Match regex group into go struct using struct tags and automatic parsing | 2 months ago |
| [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) | 57 | A sanitization-based swear filter for Go. | 4 months ago |
| [parth](https://github.com/codemodus/parth) | 43 | Path parsing for segment unmarshaling and slicing. | 5 years ago |
| [tagify](https://github.com/zoomio/tagify) | 33 | Tagify produces a set of tags from a given source. Source can be either an HTML page, a Markdown document or a plain text. Supports English, Russian, Chinese, Hindi, Spanish, Arabic, Japanese, German, Hebrew, French and Korean languages. | a month ago |
| [xj2go](https://github.com/cgxxv/xj2go) | 31 | Convert xml and json to go struct | 2 years ago |
| [kace](https://github.com/codemodus/kace) | 20 | Common case conversions covering common initialisms. | 5 years ago |
| [TySug](https://github.com/Dynom/TySug) | 17 | A project around helping to prevent typing typos. TySug (Typo Suggestions) suggests alternative words with respect to keyboard layouts | 5 months ago |
| [parseargs-go](https://github.com/txgruppi/parseargs-go) | 9 | A string argument parser that understands quotes and backslashes | 7 years ago |
| [textwrap](https://github.com/isbm/textwrap) | 4 | Port of Python's "textwrap" module to Go | 4 years ago |


### [Third-party APIs](#Third-party-APIs)
* Libraries for accessing third party APIs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-github](https://github.com/google/go-github) | 9572 | Go library for accessing the GitHub v3 API | a minute ago |
| [aws-sdk-go](https://github.com/aws/aws-sdk-go) | 8380 | AWS SDK for the Go programming language. | 14 hours ago |
| [slack](https://github.com/slack-go/slack) | 4373 | Slack API in Go - community-maintained fork created by the original author, @nlopes | a day ago |
| [discordgo](https://github.com/bwmarrin/discordgo) | 4157 |  (Golang) Go bindings for Discord | 13 hours ago |
| [google-api-go-client](https://github.com/googleapis/google-api-go-client) | 3528 | Auto-generated Google APIs for Go. | an hour ago |
| [google-cloud-go](https://github.com/googleapis/google-cloud-go) | 3342 | Google Cloud Client Libraries for Go. | 4 hours ago |
| [minio-go](https://github.com/minio/minio-go) | 2006 | MinIO Go client SDK for S3 compatible object storage | 16 hours ago |
| [stripe-go](https://github.com/stripe/stripe-go) | 1832 | Go library for the Stripe API.     | 4 hours ago |
| [go-twitter](https://github.com/dghubble/go-twitter) | 1588 | Go Twitter REST and Streaming API v1.1 | 9 months ago |
| [go-jira](https://github.com/andygrunwald/go-jira) | 1342 | Go client library for Atlassian Jira | a month ago |
| [facebook](https://github.com/huandu/facebook) | 1173 | A Facebook Graph API SDK For Go. | 13 days ago |
| [anaconda](https://github.com/ChimeraCoder/anaconda) | 1139 | A Go client library for the Twitter 1.1 API | a year ago |
| [githubv4](https://github.com/shurcooL/githubv4) | 1030 | Package githubv4 is a client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql). | a month ago |
| [webhooks](https://github.com/go-playground/webhooks) | 854 | :fishing_pole_and_fish: Webhook receiver for GitHub, Bitbucket, GitLab, Gogs | 17 hours ago |
| [twitter-scraper](https://github.com/n0madic/twitter-scraper) | 641 | Scrape the Twitter frontend API without authentication with Golang. | a month ago |
| [paypal](https://github.com/plutov/paypal) | 588 | Golang client for PayPal REST API | 6 months ago |
| [geo-golang](https://github.com/codingsince1985/geo-golang) | 473 | Go library to access geocoding and reverse geocoding APIs | 8 months ago |
| [ethrpc](https://github.com/onrik/ethrpc) | 256 | Golang client for ethereum json rpc api | a month ago |
| [trello](https://github.com/adlio/trello) | 211 | Trello API wrapper for Go | a year ago |
| [go-marathon](https://github.com/gambol99/go-marathon) | 201 | A GO API library for working with Marathon | 3 years ago |
| [wit-go](https://github.com/wit-ai/wit-go) | 144 | Go client for wit.ai HTTP API | 10 months ago |
| [medium-sdk-go](https://github.com/Medium/medium-sdk-go) | 138 | A Golang SDK for Medium's OAuth2 API | 5 years ago |
| [go-trending](https://github.com/andygrunwald/go-trending) | 135 | Go library for accessing trending repositories and developers at Github. | 3 months ago |
| [pushover](https://github.com/gregdel/pushover) | 135 | Go wrapper for the Pushover API | 3 months ago |
| [gostorm](https://github.com/jsgilmore/gostorm) | 130 | GoStorm is a Go library that implements the communications protocol required to write Storm spouts and Bolts in Go that communicate with the Storm shells. | 6 years ago |
| [simples3](https://github.com/rhnvrm/simples3) | 115 | Simple no frills AWS S3 Golang Library using REST with V4 Signing (without AWS Go SDK) | a year ago |
| [gosip](https://github.com/koltyakov/gosip) | 113 | ⚡️ SharePoint SDK for Go | 4 months ago |
| [hipchat](https://github.com/daneharrigan/hipchat) | 110 | A golang package to communicate with HipChat over XMPP | 6 years ago |
| [hipchat](https://github.com/andybons/hipchat) | 104 | This project implements a Go client library for the Hipchat API. | 7 years ago |
| [cachet](https://github.com/andygrunwald/cachet) | 91 | Go(lang) client library for Cachet (open source status page system). | 2 years ago |
| [golang-tmdb](https://github.com/cyruzin/golang-tmdb) | 81 | This is a Golang wrapper for working with TMDb API. It aims to support version 3. | a month ago |
| [igdb](https://github.com/Henry-Sarabia/igdb) | 77 | Go client for the Internet Game Database API | 6 months ago |
| [go-unsplash](https://github.com/hbagdi/go-unsplash) | 72 | Go Client for the Unsplash API  | 4 months ago |
| [gogtrends](https://github.com/groovili/gogtrends) | 72 | Unofficial Google Trends API for Go | 7 months ago |
| [go-postman-collection](https://github.com/rbretecher/go-postman-collection) | 70 | Go module to work with Postman Collections | a year ago |
| [google-play-scraper](https://github.com/n0madic/google-play-scraper) | 68 | Golang scraper to get data from Google Play Store | 4 months ago |
| [go-circleci](https://github.com/jszwedko/go-circleci) | 64 | Go library for interacting with CircleCI | 4 years ago |
| [airtable](https://github.com/mehanizm/airtable) | 63 | Simple golang airtable API wrapper | a month ago |
| [mixpanel](https://github.com/dukex/mixpanel) | 60 | Golang Mixpanel Client | 3 months ago |
| [ynab.go](https://github.com/brunomvsouza/ynab.go) | 59 | Go client for the YNAB API. Unofficial. It covers 100% of the resources made available by the YNAB API. | 9 days ago |
| [go-amazon-product-advertising-api](https://github.com/ngs/go-amazon-product-advertising-api) | 57 | Go Client Library for Amazon Product Advertising API | 5 years ago |
| [clarifai-go](https://github.com/Clarifai/clarifai-go) | 56 | DEPRECATED: please use https://github.com/Clarifai/clarifai-go-grpc | 6 years ago |
| [uptimerobot](https://github.com/bitfield/uptimerobot) | 56 | Client library for UptimeRobot v2 API | 4 months ago |
| [megos](https://github.com/andygrunwald/megos) | 54 | Go(lang) client library for accessing information of an Apache Mesos cluster. | 2 years ago |
| [go-xkcd](https://github.com/nishanths/go-xkcd) | 51 | xkcd.com API client in Go | 10 months ago |
| [fcm](https://github.com/maddevsio/fcm) | 50 | Firebase Cloud Messaging for application servers implemented using the Go programming language. | 3 years ago |
| [gads](https://github.com/emiddleton/gads) | 50 | Google Adwords API for Go | 2 years ago |
| [gomusicbrainz](https://github.com/michiwend/gomusicbrainz) | 50 | a Go (Golang) MusicBrainz WS2 client library - work in progress | 3 months ago |
| [go-spotify](https://github.com/rapito/go-spotify) | 47 | Go library for the Spotify Web API | 3 years ago |
| [golyrics](https://github.com/mamal72/golyrics) | 40 | A simple Go package to fetch lyrics from Wikia | 5 years ago |
| [go-myanimelist](https://github.com/nstratos/go-myanimelist) | 36 | Go library for accessing the MyAnimeList API: https://myanimelist.net/apiconfig/references/api/v2 | 4 months ago |
| [patreon-go](https://github.com/mxpv/patreon-go) | 36 | Patreon Go API client | a year ago |
| [translate](https://github.com/nuveo/translate) | 33 | Go online translation package | 7 years ago |
| [gami](https://github.com/bit4bit/gami) | 31 | GO - Asterisk AMI Interface | 5 years ago |
| [gcm](https://github.com/TheOrioli/gcm) | 31 | Google Cloud Messaging for application servers implemented using the Go programming language. | 8 years ago |
| [lastpass-go](https://github.com/ansd/lastpass-go) | 31 | Golang client for LastPass | 2 months ago |
| [go-steam](https://github.com/sostronk/go-steam) | 30 | Go library for querying Source servers | 2 years ago |
| [go-imgur](https://github.com/koffeinsource/go-imgur) | 25 | Go library to use the imgur.com API | 2 months ago |
| [go-shopify](https://github.com/rapito/go-shopify) | 25 | Simple Shopify API for the Go Programming Language | 3 years ago |
| [device-check-go](https://github.com/rinchsan/device-check-go) | 21 | :iphone: iOS DeviceCheck SDK for Go - query and modify the per-device bits | 4 months ago |
| [coinpaprika-api-go-client](https://github.com/coinpaprika/coinpaprika-api-go-client) | 20 | Go client library for interacting with Coinpaprika's API | 3 months ago |
| [brewerydb](https://github.com/naegelejd/brewerydb) | 19 | Go library for http://www.brewerydb.com/ API | 8 years ago |
| [codeship-go](https://github.com/codeship/codeship-go) | 19 | Go library for accessing the Codeship API v2 | 3 years ago |
| [textbelt](https://github.com/farmergreg/textbelt) | 19 | golang library for textbelt.com | 8 years ago |
| [go-aws-news](https://github.com/circa10a/go-aws-news) | 18 | Go app + library to fetch what's new from AWS | 5 months ago |
| [go-hacknews](https://github.com/PaulRosset/go-hacknews) | 16 | 📟  Tiny utility Go client for HackerNews API. | 6 years ago |
| [go-google-analytics](https://github.com/chonthu/go-google-analytics) | 15 | Simple Reporting for Google Analytics | 8 years ago |
| [gopaapi5](https://github.com/utekaravinash/gopaapi5) | 14 | Go Client Library for Amazon's Product Advertising API 5.0 | 3 years ago |
| [go-openproject](https://github.com/manuelbcd/go-openproject) | 13 | Go client library for OpenProject | 9 months ago |
| [go-sophos](https://github.com/esurdam/go-sophos) | 13 | Sophos UTM 9 REST API Client in Golang | a year ago |
| [go-here](https://github.com/abdullahselek/go-here) | 12 | Go client library around the HERE location based APIs. | 3 years ago |
| [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) | 11 | Golang package which provides http Handlers to serve the swagger ui | 10 months ago |
| [gomalshare](https://github.com/MonaxGT/gomalshare) | 11 | Go library MalShare API | 4 years ago |
| [smitego](https://github.com/sergiotapia/smitego) | 11 | SmiteGo is an API wrapper for the Smite game from HiRez. It is written in Go! | 9 years ago |
| [libgoffi](https://github.com/noctarius/libgoffi) | 9 | libgoffi - libffi adapter library for Go | 3 years ago |
| [rrdaclient](https://github.com/Omie/rrdaclient) | 9 | Go bindings for RRDA https://github.com/fcambus/rrda | 9 years ago |
| [gumblr](https://github.com/mattcunningham/gumblr) | 9 | A Go Wrapper for the Tumblr v2 API | 7 years ago |
| [go-chronos](https://github.com/axelspringer/go-chronos) | 8 | :dancers: Go Chronos 3.x REST API Client | 6 years ago |
| [go-sptrans](https://github.com/sergioaugrod/go-sptrans) | 8 | Go client library for the SPTrans Olho Vivo API. :bus: | 3 years ago |
| [go-google-email-audit-api](https://github.com/ngs-archives/go-google-email-audit-api) | 8 | Go Client Library for G Suite Email Audit API | 7 years ago |
| [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) | 8 | This is RAWG SDK GO. This library contains methods for interacting with RAWG API. | a year ago |
| [go-zooz](https://github.com/gojuno/go-zooz) | 7 | Zooz API client for Go | 8 months ago |
| [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) | 3 | Golang SDK for AppStore Connect API (Unofficial) | 5 months ago |
| [go-restcountries](https://github.com/chriscross0/go-restcountries) | 3 | Go wrapper for the REST Countries API. | 2 years ago |
| [kanka](https://github.com/Henry-Sarabia/kanka) | 3 | Go client for the Kanka API | 3 years ago |
| [playlyfe-go-sdk](https://github.com/playlyfe/playlyfe-go-sdk) | 2 | This is the official Playlyfe Golang Sdk | 7 years ago |
| [tripadvisor-golang](https://github.com/mrbenosborne/tripadvisor-golang) | 2 | A TripAdvisor API wrapper for Golang. | 4 years ago |
| [vl-go](https://github.com/verifid/vl-go) | 2 | Go client library around the VerifID identity verification layer API. | 2 years ago |


### [Utilities](#Utilities)
* General utilities and tools to make your life easier.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fzf](https://github.com/junegunn/fzf) | 53635 | :cherry_blossom: A command-line fuzzy finder | 3 hours ago |
| [hub](https://github.com/mislav/hub) | 22511 | A command-line tool that makes git easier to use with GitHub. | 14 days ago |
| [ctop](https://github.com/bcicen/ctop) | 14520 | Top-like interface for container metrics | 3 months ago |
| [sqlx](https://github.com/jmoiron/sqlx) | 14013 | general purpose extensions to golang's database/sql | 3 days ago |
| [goreleaser](https://github.com/goreleaser/goreleaser) | 11942 | Deliver Go binaries as fast and easily as possible | 7 minutes ago |
| [wuzz](https://github.com/asciimoo/wuzz) | 10342 | Interactive cli tool for HTTP inspection | 8 months ago |
| [usql](https://github.com/xo/usql) | 8161 | Universal command-line interface for SQL databases | 5 days ago |
| [peco](https://github.com/peco/peco) | 7400 | Simplistic interactive filtering tool | 5 months ago |
| [go-funk](https://github.com/thoas/go-funk) | 4342 | A modern Go utility library which provides helpers (map, find, contains, filter, ...) | 3 hours ago |
| [godropbox](https://github.com/dropbox/godropbox) | 4133 | Common libraries for writing Go services/applications. | 2 months ago |
| [hystrix-go](https://github.com/afex/hystrix-go) | 4012 | Netflix's Hystrix latency and fault tolerance library, for Go  | 6 months ago |
| [panicparse](https://github.com/maruel/panicparse) | 3431 | Crash your app in style (Golang) | a month ago |
| [minify](https://github.com/tdewolff/minify) | 3395 | Go minifiers for web formats | 13 hours ago |
| [goreporter](https://github.com/qax-os/goreporter) | 3078 | A Golang tool that does static analysis, unit testing, code review and generate code quality report. | 5 years ago |
| [mc](https://github.com/minio/mc) | 2514 | Simple , Fast tool to manage MinIO clusters :cloud: | 22 minutes ago |
| [cli](https://github.com/create-go-app/cli) | 2139 | ✨ A complete and self-contained solution for developers of any qualification to create a production-ready project with backend (Go), frontend (JavaScript, TypeScript) and deploy automation (Ansible, Docker) by running only one CLI command. | 6 days ago |
| [spinner](https://github.com/briandowns/spinner) | 2131 | Go (golang) package with 90 configurable terminal spinner/progress indicators. | 2 months ago |
| [storm](https://github.com/asdine/storm) | 1999 | Simple and powerful toolkit for BoltDB | 2 years ago |
| [filetype](https://github.com/h2non/filetype) | 1879 | Fast, dependency-free Go package to infer binary file types based on the magic numbers header signature | 5 months ago |
| [mole](https://github.com/davrodpin/mole) | 1658 | CLI application to create ssh tunnels focused on resiliency and user experience. | 4 months ago |
| [jump](https://github.com/gsamokovarov/jump) | 1652 | Jump helps you navigate faster by learning your habits. ✌️ | 23 days ago |
| [boilr](https://github.com/tmrts/boilr) | 1637 | :zap: boilerplate template manager that generates files or directories from template repositories | 5 months ago |
| [mimetype](https://github.com/gabriel-vasile/mimetype) | 1173 | A fast Golang library for media type and file extension detection, based on magic numbers | 21 hours ago |
| [circuitbreaker](https://github.com/rubyist/circuitbreaker) | 1077 | Circuit Breakers in Go | a year ago |
| [scany](https://github.com/georgysavva/scany) | 968 | Library for scanning data from a database into Go structs and more | 5 months ago |
| [gtm](https://github.com/git-time-metric/gtm) | 947 | Simple, seamless, lightweight time tracking for Git | 2 years ago |
| [hostctl](https://github.com/guumaster/hostctl) | 918 | Your dev tool to manage /etc/hosts like a pro! | 3 months ago |
| [immortal](https://github.com/immortal/immortal) | 766 | ⭕  A *nix cross-platform (OS agnostic) supervisor | a year ago |
| [circuit](https://github.com/cep21/circuit) | 708 | An efficient and feature complete Hystrix like Go implementation of the circuit breaker pattern. | 5 months ago |
| [delve](https://github.com/derekparker/delve) | 597 | Delve is a debugger for the Go programming language. | a month ago |
| [ergo](https://github.com/cristianoliveira/ergo) | 574 | The management of multiple apps running over different ports made easy | a day ago |
| [htcat](https://github.com/htcat/htcat) | 552 | Parallel and Pipelined HTTP GET Utility | 4 years ago |
| [koazee](https://github.com/wesovilabs/koazee) | 521 | A StreamLike, Immutable, Lazy Loading and smart Golang Library to deal with slices. | 3 years ago |
| [clockwork](https://github.com/jonboulle/clockwork) | 508 | a fake clock for golang | 22 days ago |
| [changie](https://github.com/miniscruff/changie) | 490 | Automated changelog tool for preparing releases with lots of customization options | a day ago |
| [godaemon](https://github.com/VividCortex/godaemon) | 490 | Daemonize Go applications deviously. | 2 years ago |
| [go-dry](https://github.com/ungerik/go-dry) | 486 | DRY (don't repeat yourself) package for Go | 3 days ago |
| [gopencils](https://github.com/bndr/gopencils) | 446 | Easily consume REST APIs with Go (golang) | 4 years ago |
| [gubrak](https://github.com/novalagung/gubrak) | 441 | ⚙️ Golang functional utility library with syntactic sugar. It's like lodash, but for Go | 5 months ago |
| [clipboard](https://github.com/golang-design/clipboard) | 429 | 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)  | 2 months ago |
| [request](https://github.com/mozillazg/request) | 428 | A developer-friendly HTTP request library for Gopher. | 4 years ago |
| [scan](https://github.com/blockloop/scan) | 423 | Tiny lib to scan SQL rows directly to structs, slices, and primitive types | 21 hours ago |
| [deepcopier](https://github.com/ulule/deepcopier) | 417 | simple struct copying for golang | 3 years ago |
| [go-rate](https://github.com/beefsack/go-rate) | 389 | A timed rate limiter for Go | a year ago |
| [mani](https://github.com/alajmo/mani) | 377 | :robot: CLI tool to help you manage repositories | 2 months ago |
| [retry](https://github.com/kamilsk/retry) | 334 | ♻️ The most advanced interruptible mechanism to perform actions repetitively until successful. | 2 years ago |
| [serve](https://github.com/syntaqx/serve) | 305 | 🍽️ a static http server anywhere you need one. | 2 months ago |
| [grofer](https://github.com/pesos/grofer) | 278 | A system and resource monitoring tool written in Golang! | 4 months ago |
| [util](https://github.com/shomali11/util) | 278 | A collection of useful utility functions | a year ago |
| [countries](https://github.com/biter777/countries) | 270 | Countries - ISO-639, ISO-3166 countries codes with subdivisions and names, ISO-4217 currency designators, ITU-T E.164 IDD phone codes, countries capitals, UN M.49 codes, IANA ccTLD countries domains, IOC/NOC and FIFA codes, VERY VERY FAST, compatible with Databases/JSON/BSON/GOB/XML/CSV, Emoji countries flags and currencies support, Unicode CLDR. | 6 days ago |
| [gotenv](https://github.com/subosito/gotenv) | 266 | Load environment variables from `.env` or `io.Reader` in Go. | 12 days ago |
| [gohper](https://github.com/cosiner/gohper) | 255 | [UNMATAINED] common libs here. | 6 years ago |
| [go-trigger](https://github.com/sadlil/go-trigger) | 234 | A Global event triggerer for golang. Defines functions as event with id string. Trigger the event anywhere from your project. | 6 years ago |
| [rospo](https://github.com/ferama/rospo) | 232 | 🐸 Simple, reliable, persistent ssh tunnels with embedded ssh server | 21 hours ago |
| [go-pattern-match](https://github.com/alexpantyukhin/go-pattern-match) | 229 | Pattern matchings for Go. | 5 months ago |
| [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) | 204 | go-sitemap-generator is the easiest way to generate Sitemaps in Go | a month ago |
| [toolbox](https://github.com/viant/toolbox) | 192 | Toolbox - go utility library | 21 days ago |
| [death](https://github.com/vrecan/death) | 190 | Managing go application shutdown with signals. | a year ago |
| [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) | 183 | go-bind-plugin generates API for exported plugin symbols (-buildmode=plugin) - go1.8+ only (http://golang.org/pkg/plugin) | 4 years ago |
| [limiters](https://github.com/mennanov/limiters) | 180 | Golang rate limiters for distributed applications | 4 months ago |
| [moldova](https://github.com/StabbyCutyou/moldova) | 166 | A lightweight templating system for generating random data | 6 years ago |
| [rerun](https://github.com/ivpusic/rerun) | 165 | Configurable recompiling and rerunning go apps when source changes | 5 years ago |
| [apm](https://github.com/topfreegames/apm) | 163 | APM is a process manager for Golang applications. | 7 years ago |
| [robustly](https://github.com/VividCortex/robustly) | 156 | Run functions resiliently in Go, catching and restarting panics | 2 years ago |
| [chyle](https://github.com/antham/chyle) | 150 | Changelog generator : use a git repository and various data sources and publish the result on external services | 11 days ago |
| [go-bsdiff](https://github.com/gabstv/go-bsdiff) | 145 | Pure Go bsdiff and bspatch libraries and CLI tools. | 4 years ago |
| [cryptgo](https://github.com/Gituser143/cryptgo) | 136 | A terminal application to watch crypto prices! | 2 years ago |
| [nostromo](https://github.com/pokanop/nostromo) | 135 | 👽 CLI for building powerful aliases and tools | 5 months ago |
| [cmd](https://github.com/commander-cli/cmd) | 134 | A simple package to execute shell commands on linux, windows and osx | 4 months ago |
| [onecache](https://github.com/adelowo/onecache) | 133 | One caching API, Multiple backends | 3 years ago |
| [filter](https://github.com/gookit/filter) | 132 | ⏳ Provide filtering, sanitizing, and conversion of Golang data. 提供对Golang数据的过滤，净化，转换。 | 4 days ago |
| [lrserver](https://github.com/jaschaephraim/lrserver) | 124 | LiveReload server for Go [golang] | 3 months ago |
| [goval](https://github.com/maja42/goval) | 123 | Expression evaluation in golang | 9 months ago |
| [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) | 123 | Golang Mongodb Pagination for official mongodb/mongo-go-driver package which supports both normal queries and Aggregation pipelines with all information like Total records, Page, Per Page, Previous, Next, Total Page and query results. | 5 months ago |
| [sorty](https://github.com/jfcg/sorty) | 122 | :zap: Fast Concurrent / Parallel Sorting in Go | 6 months ago |
| [goseaweedfs](https://github.com/linxGnu/goseaweedfs) | 102 | A complete Golang client for SeaweedFS | 9 months ago |
| [mssqlx](https://github.com/linxGnu/mssqlx) | 101 | Database client library, proxy for any master slave, master master structures. Lightweight, performant and auto balancing in mind. | 2 months ago |
| [xferspdy](https://github.com/monmohan/xferspdy) | 99 | Xferspdy provides binary diff and patch library in golang. [Mentioned in Awesome Go, https://github.com/avelino/awesome-go] | 2 years ago |
| [go-lock](https://github.com/viney-shih/go-lock) | 93 | go-lock is a lock library implementing read-write mutex and read-write trylock without starvation | a year ago |
| [go-health](https://github.com/Talento90/go-health) | 92 | :heart: Health check your applications and dependencies | 2 years ago |
| [mimemagic](https://github.com/zRedShift/mimemagic) | 91 | Powerful and versatile MIME sniffing package using pre-compiled glob patterns, magic number signatures, XML document namespaces, and tree magic for mounted volumes, generated from the XDG shared-mime-info database. | 5 months ago |
| [pgo](https://github.com/arthurkushman/pgo) | 82 | Go library for PHP community with convenient functions | 3 months ago |
| [repeat](https://github.com/ssgreg/repeat) | 81 | Go implementation of different backoff strategies useful for retrying operations and heartbeating. | 3 years ago |
| [pm](https://github.com/VividCortex/pm) | 78 | Processlist manager with TCP listener | 3 years ago |
| [handy](https://github.com/miguelpragier/handy) | 74 | GO Golang Utilities and helpers like validators and string formatters | 3 years ago |
| [netbug](https://github.com/e-dard/netbug) | 72 | Package netbug provides a handler for registering profilers on your own ServeMux. | 8 years ago |
| [unis](https://github.com/esemplastic/unis) | 70 | UNIS: A Common Architecture for String Utilities within the Go Programming Language. | 6 years ago |
| [multitick](https://github.com/VividCortex/multitick) | 67 | A multiplexor for aligned time.Time tickers in Go | 2 years ago |
| [goreadability](https://github.com/philipjkim/goreadability) | 66 | Webpage summary extractor using Facebook Open Graph and arc90's readability | 4 years ago |
| [retry](https://github.com/thedevsaddam/retry) | 63 | Simple and easy retry mechanism package for Go | 2 years ago |
| [go-astitodo](https://github.com/asticode/go-astitodo) | 60 | Parse TODOs in your GO code | 12 days ago |
| [minquery](https://github.com/icza/minquery) | 60 | MongoDB / mgo query that supports efficient pagination (cursors to continue listing documents where we left off). | 4 months ago |
| [golog](https://github.com/mlimaloureiro/golog) | 59 | Easy and simple CLI time tracker for your tasks | 5 years ago |
| [dbt](https://github.com/nikogura/dbt) | 57 | A delivery system for running self-updating, signed tools. | 5 months ago |
| [beyond](https://github.com/wesovilabs/beyond) | 53 | The Go library that will drive you to AOP world! | 4 months ago |
| [shutdown](https://github.com/ztrue/shutdown) | 52 | Golang app shutdown hooks. | 2 years ago |
| [slice](https://github.com/psampaz/slice) | 51 | Type-safe functions for common Go slice operations | 3 years ago |
| [copy-pasta](https://github.com/jutkko/copy-pasta) | 50 | Universal copy paste service, works across different machines! | 3 years ago |
| [golarm](https://github.com/msempere/golarm) | 50 | Fire alarms with system events | 8 years ago |
| [goback](https://github.com/carlescere/goback) | 48 | Golang simple exponential backoff package. | 2 years ago |
| [retry-go](https://github.com/rafaeljesus/retry-go) | 48 | Retrying made simple and easy for golang :repeat:  | 5 years ago |
| [backscanner](https://github.com/icza/backscanner) | 46 | A scanner similar to bufio.Scanner, but it reads and returns lines in reverse order, starting at a given position and going backward. | 4 months ago |
| [intrinsic](https://github.com/mengzhuo/intrinsic) | 46 | Provide Golang native SIMD intrinsics on x86/amd64 platform | 6 years ago |
| [set](https://github.com/nofeaturesonlybugs/set) | 44 | Package set is a small wrapper around the official reflect package that facilitates loose type conversion and assignment into native Go types. | a year ago |
| [sshman](https://github.com/shoobyban/sshman) | 44 | SSH Manager - manage users through authorized_keys files | 9 months ago |
| [equalizer](https://github.com/reugn/equalizer) | 43 | A rate limiters package for Go | 2 years ago |
| [go-httpheader](https://github.com/mozillazg/go-httpheader) | 43 | A Go library for encoding structs into Header fields. | 24 days ago |
| [slicer](https://github.com/leaanthony/slicer) | 43 | Utility class for handling slices | 2 years ago |
| [gostrutils](https://github.com/ik5/gostrutils) | 41 | Collections of string utils I have created over the years | 4 months ago |
| [gpath](https://github.com/tenntenn/gpath) | 40 | gpath is a Go package to access a field by a path using reflect pacakge | 6 years ago |
| [evaluator](https://github.com/nullne/evaluator) | 37 |  | 4 months ago |
| [ghokin](https://github.com/antham/ghokin) | 35 | Parallelized formatter with no external dependencies for gherkin (cucumber, behat...) | 2 months ago |
| [myhttp](https://github.com/inancgumus/myhttp) | 35 | Simplest HTTP GET requester for Go with timeout support | 5 years ago |
| [rclient](https://github.com/zpatrick/rclient) | 35 | Minimalistic REST client for Go applications | 4 years ago |
| [tome](https://github.com/cyruzin/tome) | 34 | Package tome was designed to paginate simple RESTful APIs. | a year ago |
| [copy](https://github.com/gotidy/copy) | 33 | Package for fast copying structs of different types | 3 years ago |
| [throttle](https://github.com/yudppp/throttle) | 33 | lodash throttle like Go library | 2 years ago |
| [generate](https://github.com/go-playground/generate) | 29 | :runner:runs go generate recursively on a specified path or environment variable and can filter by regex | 7 years ago |
| [mimesniffer](https://github.com/aofei/mimesniffer) | 28 | A MIME type sniffer for Go. | a year ago |
| [ugo](https://github.com/alxrm/ugo) | 27 | Simple and expressive toolbox written in Go | 7 years ago |
| [goplaceholder](https://github.com/michiwend/goplaceholder) | 26 | a small golang lib to generate placeholder images | 8 years ago |
| [rerate](https://github.com/abo/rerate) | 25 | redis-based rate counter and rate limiter | 6 years ago |
| [ctxutil](https://github.com/posener/ctxutil) | 23 | utils for Go context | 3 years ago |
| [structs](https://github.com/PumpkinSeed/structs) | 22 | Golang struct operations. | 6 years ago |
| [ptr](https://github.com/gotidy/ptr) | 21 | Contains functions for simplified creation of pointers from constants of basic types | 2 months ago |
| [go-convert](https://github.com/Eun/go-convert) | 20 | Convert a value into another type | 2 months ago |
| [jsend](https://github.com/clevergo/jsend) | 19 | :100: JSend's implementation writen in Go(golang) | 2 years ago |
| [dlog](https://github.com/kirillDanshin/dlog) | 17 | Simple build-time controlled debug log with ability to log where the logger was called | 6 years ago |
| [filler](https://github.com/yaronsumel/filler) | 17 | fill struct data easily with fill tags | 6 years ago |
| [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) | 17 | Problem json implementation (https://tools.ietf.org/html/rfc7807) package for go | 3 years ago |
| [okrun](https://github.com/xta/okrun) | 16 | ok, run your gofile | 9 years ago |
| [rest-go](https://github.com/edermanoel94/rest-go) | 16 | A package that provide many helpful methods for working with rest api. | 3 years ago |
| [go-types](https://github.com/mikekonan/go-types) | 15 | Library providing opanapi3 and Go types for store/validation and transfer of ISO-4217, ISO-3166, and other types. | 15 days ago |
| [command](https://github.com/txgruppi/command) | 14 | Command pattern for Go with thread safe serial and parallel dispatcher | 7 years ago |
| [go-actuator](https://github.com/sinhashubham95/go-actuator) | 14 | Golang production-ready features | a year ago |
| [go-clip](https://github.com/prashantgupta24/go-clip) | 12 | A minimalistic clipboard manager for Mac. | 3 years ago |
| [silk](https://github.com/chrispassas/silk) | 12 | Silk File Reader | a year ago |
| [retry](https://github.com/shafreeck/retry) | 11 | A pretty simple library to ensure your work to be done | 3 years ago |
| [blank](https://github.com/Henry-Sarabia/blank) | 10 | Detect blank strings or remove whitespace from strings | 4 years ago |
| [go-countries](https://github.com/mikekonan/go-countries) | 10 |  | 3 years ago |
| [statiks](https://github.com/janiltonmaciel/statiks) | 10 | Fast, zero-configuration, static HTTP filer server. | 3 years ago |
| [bleep](https://github.com/sinhashubham95/bleep) | 9 | OS Signal Handlers in Go | 3 years ago |
| [retry](https://github.com/percolate/retry) | 9 | Percolate's Go retry package | 5 months ago |
| [nfdump](https://github.com/chrispassas/nfdump) | 8 | NFDump File Reader | 6 months ago |
| [sliceconv](https://github.com/Henry-Sarabia/sliceconv) | 8 | Slice conversion between primitive types | 4 years ago |
| [lets-go](https://github.com/aplescia/lets-go) | 6 | Go module that provides common utilities for Cloud Native development | 2 years ago |
| [olaf](https://github.com/btnguyen2k/olaf) | 5 | Twitter Snowflake implemented in Go | 4 years ago |
| [tik](https://github.com/andy2046/tik) | 5 | hierarchical timing wheel | 3 years ago |
| [goctx](https://github.com/zerosnake0/goctx) | 4 | Get your context value faster | 3 years ago |
| [mergo](https://github.com/imdario/mergo) | 0 | Mergo: merging Go structs and maps since 2013 | 10 days ago |


### [UUID](#UUID)
* Libraries for working with UUIDs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [uuid](https://github.com/google/uuid) | 4477 | Go package for UUIDs based on RFC 4122 and DCE 1.1: Authentication and Security Services. | 5 days ago |
| [ulid](https://github.com/oklog/ulid) | 3590 | Universally Unique Lexicographically Sortable Identifier (ULID) in Go | a month ago |
| [uuid](https://github.com/gofrs/uuid) | 1393 | A UUID package originally forked from github.com/satori/go.uuid | a month ago |
| [wuid](https://github.com/edwingeng/wuid) | 499 | An extremely fast globally unique number generator. | 6 months ago |
| [sno](https://github.com/muyo/sno) | 86 | Compact, sortable and fast unique IDs with embedded metadata. | 2 years ago |
| [nanoid](https://github.com/aidarkhanov/nanoid) | 58 | A tiny and fast Go unique string generator | a year ago |
| [Goid](https://github.com/jakenvac/Goid) | 38 | A UUIDv4 generation package written in go | 4 years ago |
| [gouid](https://github.com/twharmon/gouid) | 21 | Fast, dependable universally unique ids | a year ago |
| [uuid](https://github.com/agext/uuid) | 15 | Generate, encode, and decode UUIDs v1 with fast or cryptographic-quality random node identifier. | 3 years ago |


### [Validation](#Validation)
* Libraries for validation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [joi](https://github.com/hapijs/joi) | 20129 | The most powerful data validation library for JS | a month ago |
| [validator](https://github.com/go-playground/validator) | 13669 | :100:Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving | 11 hours ago |
| [govalidator](https://github.com/asaskevich/govalidator) | 5750 | [Go] Package of validators and sanitizers for strings, numerics, slices and structs | 2 months ago |
| [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) | 3281 | An idiomatic Go (golang) validation package. Supports configurable and extensible validation rules (validators) using normal language constructs instead of error-prone struct tags. | 4 months ago |
| [govalidator](https://github.com/thedevsaddam/govalidator) | 1232 | Validate Golang request data with simple rules. Highly inspired by Laravel's request validation. | 3 months ago |
| [validate](https://github.com/gookit/validate) | 921 | ⚔ Go package for data validation and filtering. support Map, Struct, Form data. Go通用的数据验证与过滤库，使用简单，内置大部分常用验证、过滤器，支持自定义验证器、自定义消息、字段翻译。 | 2 days ago |
| [checkdigit](https://github.com/osamingo/checkdigit) | 101 | Provide check digit algorithms and calculators written in Go | 3 months ago |
| [jio](https://github.com/faceair/jio) | 86 | jio is a json schema validator similar to joi | 3 years ago |
| [validate](https://github.com/gobuffalo/validate) | 86 | This package provides a framework for writing validations for Go applications. | 10 months ago |
| [terraform-validator](https://github.com/thazelart/terraform-validator) | 79 | A norms and conventions validator for Terraform | a year ago |
| [gody](https://github.com/guiferpa/gody) | 64 | :balloon: A lightweight struct validator for Go | 3 years ago |
| [govalid](https://github.com/twharmon/govalid) | 34 | Struct validation using tags | 2 years ago |


### [Version Control](#Version-Control)
* Libraries for version control.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-git](https://github.com/go-git/go-git) | 4837 | A highly extensible Git implementation in pure Go. | a day ago |
| [glab](https://github.com/profclems/glab) | 2082 | The GitLab CLI tool. Archived: now officially adopted by GitLab as the official CLI tool and maintained at https://gitlab.com/gitlab-org/cli. See https://github.com/profclems/glab/issues/983 | 10 months ago |
| [hercules](https://github.com/src-d/hercules) | 1911 | Gaining advanced insights from Git repository history. | 6 months ago |
| [git2go](https://github.com/libgit2/git2go) | 1860 | Git to Go; bindings for libgit2. Like McDonald's but tastier. | 4 months ago |
| [gh](https://github.com/rjeczalik/gh) | 79 | Scriptable server and net/http middleware for GitHub Webhooks. | 5 years ago |
| [Githooks](https://github.com/gabyx/Githooks) | 76 | 🦎 Githooks: per-repo and shared Git hooks with version control and auto update.  | 19 days ago |
| [go-vcs](https://github.com/sourcegraph/go-vcs) | 75 | manipulate and inspect VCS repositories in Go | 22 days ago |
| [hgo](https://github.com/beyang/hgo) | 15 | Hgo is a collection of Go packages providing read-access to local Mercurial repositories. | 8 years ago |


### [Video](#Video)
* Libraries for manipulating video.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [goav](https://github.com/giorgisio/goav) | 2009 | Golang bindings for FFmpeg (This repository is no longer maintained) | a year ago |
| [m3u8](https://github.com/grafov/m3u8) | 1059 | Parser and generator of M3U8-playlists for Apple HLS. Library for Go language. :cinema: | 8 days ago |
| [gmf](https://github.com/3d0c/gmf) | 855 | Go Media Framework | a year ago |
| [go-astits](https://github.com/asticode/go-astits) | 492 | Demux and mux MPEG Transport Streams (.ts) natively in GO | 4 hours ago |
| [go-astisub](https://github.com/asticode/go-astisub) | 482 | Manipulate subtitles in GO (.srt, .ssa/.ass, .stl, .ttml, .vtt (webvtt), teletext, etc.) | 3 days ago |
| [gortsplib](https://github.com/bluenviron/gortsplib) | 460 | RTSP 1.0 client and server library for the Go programming language | an hour ago |
| [libvlc-go](https://github.com/adrg/libvlc-go) | 359 | Go bindings for libVLC and high-level media player interface | 7 days ago |
| [gst](https://github.com/ziutek/gst) | 166 | Go bindings for GStreamer (retired: currently I don't use/develop this package) | 3 years ago |
| [go-m3u8](https://github.com/quangngotan95/go-m3u8) | 106 | Parse and generate m3u8 playlists for Apple HTTP Live Streaming (HLS) in Golang (ported from gem https://github.com/sethdeckard/m3u8) | 7 months ago |
| [v4l](https://github.com/korandiz/v4l) | 75 | Facade to the Video4Linux video capture interface.  | 2 years ago |
| [libgosubs](https://github.com/wargarblgarbl/libgosubs) | 23 | golang library to read and write various subtitle formats | 3 years ago |
| [go-mpd](https://github.com/unki2aut/go-mpd) | 16 | Go library for parsing and generating MPEG-DASH Media Presentation Description (MPD) files | 3 years ago |


### [Web Frameworks](#Web-Frameworks)
* 

#### [Full stack web frameworks](#Full-stack-web-frameworks.)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gin](https://github.com/gin-gonic/gin) | 70619 | Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin. | 3 hours ago |
| [fiber](https://github.com/gofiber/fiber) | 27682 | ⚡️ Express inspired web framework written in Go | 13 hours ago |
| [echo](https://github.com/labstack/echo) | 26234 | High performance, minimalist Go web framework | 19 hours ago |
| [revel](https://github.com/revel/revel) | 12953 | A high productivity, full-stack web framework for the Go language. | 4 months ago |
| [goa](https://github.com/goadesign/goa) | 5251 | Design-based APIs and microservices in Go | 8 hours ago |
| [gizmo](https://github.com/nytimes/gizmo) | 3726 | A Microservice Toolkit from The New York Times | a month ago |
| [go-json-rest](https://github.com/ant0ine/go-json-rest) | 3516 | A quick and easy way to setup a RESTful JSON API | 3 years ago |
| [macaron](https://github.com/go-macaron/macaron) | 3404 | Package macaron is a high productive and modular web framework in Go. | a day ago |
| [utron](https://github.com/gernest/utron) | 2218 | A lightweight MVC framework for Go(Golang) | 5 years ago |
| [goyave](https://github.com/go-goyave/goyave) | 1315 | 🍐 Elegant Golang REST API Framework (v5 preview available) | 4 days ago |
| [go-tigertonic](https://github.com/rcrowley/go-tigertonic) | 997 | A Go framework for building JSON web services inspired by Dropwizard | 5 years ago |
| [tango](https://github.com/lunny/tango) | 834 | This is only a mirror and Moved to https://gitea.com/lunny/tango | 4 years ago |
| [gearbox](https://github.com/gogearbox/gearbox) | 717 | Gearbox :gear: is a web framework written in Go with a focus on high performance | 2 months ago |
| [beego](https://github.com/astaxie/beego) | 648 | beego is an open-source, high-performance web framework for the Go programming language. | a year ago |
| [aero](https://github.com/aerogo/aero) | 531 | :bullettrain_side: High-performance web server for Go. | a year ago |
| [gongular](https://github.com/mustafaakin/gongular) | 502 | A different approach to Go web frameworks | 3 years ago |
| [flamingo-commerce](https://github.com/i-love-flamingo/flamingo-commerce) | 446 | Flexible E-Commerce Framework on top of Flamingo. Used to build E-Commerce "Portals" and connect it with the help of individual Adapters to other services.  | 4 days ago |
| [air](https://github.com/aofei/air) | 431 | An ideally refined web framework for Go. | 5 months ago |
| [rk-boot](https://github.com/rookie-ninja/rk-boot) | 425 | Build microservice with rk-boot and let the team take over clean and tidy code. | 3 months ago |
| [neo](https://github.com/ivpusic/neo) | 418 | Go Web Framework | 9 months ago |
| [flamingo](https://github.com/i-love-flamingo/flamingo) | 394 | Flamingo Framework and Core Library. Flamingo is a go based framework to build pluggable applications. Focus is on clean architecture, maintainability and operation readiness. | 3 days ago |
| [mango](https://github.com/paulbellamy/mango) | 372 | Mango is a modular web-application framework for Go, inspired by Rack, and PEP333. | 6 years ago |
| [gondola](https://github.com/rainycape/gondola) | 310 | The web framework for writing faster sites, faster | 4 years ago |
| [uadmin](https://github.com/uadmin/uadmin) | 286 | The web framework for Golang | 15 hours ago |
| [webgo](https://github.com/bnkamalesh/webgo) | 283 | A microframework to build web apps; with handler chaining, middleware support, and most of all; standard library compliant HTTP handlers(i.e. http.HandlerFunc). | 5 months ago |
| [ginrpc](https://github.com/xxjwxc/ginrpc) | 276 | gin auto binding,grpc, and annotated route,gin 注解路由, grpc,自动参数绑定工具 | 2 months ago |
| [golf](https://github.com/dinever/golf) | 266 | :golf: The Golf web framework | 2 years ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 179 | hiboot is a high performance web and cli application framework with dependency injection support | 5 months ago |
| [appy](https://github.com/appist/appy) | 129 | An opinionated productive web framework that helps scaling business easier. | 3 months ago |
| [go-rest](https://github.com/ungerik/go-rest) | 127 | A small and evil REST framework for Go | 7 years ago |
| [patron](https://github.com/beatlabs/patron) | 124 | Microservice framework following best cloud practices with a focus on productivity. | a month ago |
| [microservice](https://github.com/claygod/microservice) | 111 | This library provides a simple microservice framework based on clean architecture principles with a working example implemented. | 7 months ago |
| [rux](https://github.com/gookit/rux) | 94 | ⚡ Rux is an simple and fast web framework. support route group, param route binding, middleware, compatible http.Handler interface. 简单且快速的 Go api/web 框架，支持路由分组，路由参数绑定，中间件，兼容 http.Handler 接口 | 4 days ago |
| [vox](https://github.com/aisk/vox) | 80 | Simple and lightweight Go web framework inspired by koa | 8 months ago |
| [golax](https://github.com/fulldump/golax) | 76 | Golax, a go implementation for the Lax framework. | 7 months ago |
| [yarf](https://github.com/yarf-framework/yarf) | 65 | Yet Another REST Framework | 4 years ago |
| [fireball](https://github.com/ridgelines/fireball) | 59 | Go web framework with a natural feel | 5 years ago |
| [goa](https://github.com/goa-go/goa) | 49 | Goa is a  web framework based on middleware, like koa.js. | 4 years ago |
| [gotuna](https://github.com/gotuna/gotuna) | 43 | GoTuna a lightweight web framework for Go with mux router, middlewares, user sessions, templates, embedded views, and static file server. | a year ago |
| [goweb](https://github.com/twharmon/goweb) | 35 | Lightweight web framework based on net/http. | a year ago |
| [api](https://github.com/resoursea/api) | 33 | A REST framework for quickly writing resource based services in Golang. | 9 years ago |
| [rex](https://github.com/goanywhere/rex) | 33 | Pleasures for Web in Golang | 6 years ago |
| [banjo](https://github.com/gdwrd/banjo) | 21 | BANjO is a simple web framework written in Go (golang) | 6 years ago |


#### [Actual middlewares](#Actual-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tollbooth](https://github.com/didip/tollbooth) | 2451 | Simple middleware to rate-limit HTTP requests. | 8 months ago |
| [cors](https://github.com/rs/cors) | 2395 | Go net/http configurable handler to handle CORS requests | 6 days ago |
| [limiter](https://github.com/ulule/limiter) | 1813 | Dead simple rate limit middleware for Go. | 2 months ago |
| [go-server-timing](https://github.com/mitchellh/go-server-timing) | 851 | Go (golang) library for creating and consuming HTTP Server-Timing headers | a year ago |
| [go-fault](https://github.com/lingrino/go-fault) | 479 | Fault injection library in Go using standard http middleware | 2 months ago |
| [ln-paywall](https://github.com/philippgille/ln-paywall) | 136 | Go middleware for monetizing your API on a per-request basis with Bitcoin and Lightning ⚡️ | 4 years ago |
| [xff](https://github.com/sebest/xff) | 97 | A Golang Middleware to handle X-Forwarded-For Header | 2 years ago |
| [rk-grpc](https://github.com/rookie-ninja/rk-grpc) | 64 | Start gRPC microservice from YAML, plugin of rk-boot | 6 months ago |
| [rk-gin](https://github.com/rookie-ninja/rk-gin) | 39 | Start gin microservice from YAML, plugin of rk-boot | 6 months ago |
| [formjson](https://github.com/rs/formjson) | 38 | Go net/http handler to transparently manage posted JSON | 8 years ago |
| [client-timing](https://github.com/posener/client-timing) | 24 | An HTTP client for go-server-timing middleware. Enables automatic timing propagation through HTTP calls between servers. | 3 years ago |
| [mid](https://github.com/bobg/mid) | 7 | Middleware for HTTP services in Go | a year ago |


#### [Libraries for creating HTTP middlewares](#Libraries-for-creating-HTTP-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [negroni](https://github.com/urfave/negroni) | 7343 | Idiomatic HTTP Middleware for Golang | 5 months ago |
| [alice](https://github.com/justinas/alice) | 2832 | Painless middleware chaining for Go | a year ago |
| [render](https://github.com/unrolled/render) | 1816 | Go package for easily rendering JSON, XML, binary data, and HTML templates responses. | 5 months ago |
| [stats](https://github.com/thoas/stats) | 593 | A Go middleware that stores various information about your web application (response time, status code count, etc.) | 8 months ago |
| [interpose](https://github.com/carbocation/interpose) | 294 | Minimalist net/http middleware for golang | 7 years ago |
| [renderer](https://github.com/thedevsaddam/renderer) | 255 | Simple, lightweight and faster response (JSON, JSONP, XML, YAML, HTML, File) rendering package for Go | 3 years ago |
| [muxchain](https://github.com/stephens2424/muxchain) | 208 | Lightweight Middleware for net/http | 4 years ago |
| [rye](https://github.com/InVisionApp/rye) | 102 | A tiny http middleware for Golang with added handlers for common needs. | 3 months ago |
| [gores](https://github.com/alioygur/gores) | 100 | Go package that handles HTML, JSON, XML and etc. responses | 3 years ago |
| [mediary](https://github.com/HereMobilityDevelopers/mediary) | 87 | Add interceptors to GO http.Client | 3 years ago |
| [chain](https://github.com/codemodus/chain) | 64 | Composable chains of nested http.Handler instances. | 5 years ago |
| [catena](https://github.com/codemodus/catena) | 9 | gRPC interceptor catenation. | 5 years ago |


#### [Routers](#Routers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mux](https://github.com/gorilla/mux) | 18912 | Package gorilla/mux is a powerful HTTP router and URL matcher for building Go web servers with 🦍 | 6 days ago |
| [httprouter](https://github.com/julienschmidt/httprouter) | 15595 | A high performance HTTP request router that scales well | 3 months ago |
| [chi](https://github.com/go-chi/chi) | 14920 | lightweight, idiomatic and composable router for building Go HTTP services | 20 days ago |
| [web](https://github.com/gocraft/web) | 1501 | Go Router + Middleware. Your Contexts. | 3 years ago |
| [bone](https://github.com/go-zoo/bone) | 1294 | Lightning Fast HTTP Multiplexer | 4 years ago |
| [goji](https://github.com/goji/goji) | 944 | Goji is a minimalistic and flexible HTTP request multiplexer for Go (golang) | a year ago |
| [fasthttprouter](https://github.com/buaazp/fasthttprouter) | 875 | A high performance fasthttp request router that scales well | 4 years ago |
| [httptreemux](https://github.com/dimfeld/httptreemux) | 602 | High-speed, flexible tree-based HTTP router for Go. | 6 months ago |
| [gorouter](https://github.com/xujiajun/gorouter) | 532 | xujiajun/gorouter is a simple and fast HTTP router for Go. It is easy to build RESTful APIs and your web framework. | 4 years ago |
| [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) | 447 | An extremely fast Go (golang) HTTP router that supports regular expression route matching. Comes with full support for building RESTful APIs. | a year ago |
| [lars](https://github.com/go-playground/lars) | 390 | :rotating_light: Is a lightweight, fast and extensible zero allocation HTTP router for Go used to create customizable frameworks. | 4 years ago |
| [siesta](https://github.com/VividCortex/siesta) | 351 | Composable framework for writing HTTP handlers in Go. | 2 years ago |
| [vestigo](https://github.com/husobee/vestigo) | 269 | Echo Inspired Stand Alone URL Router | 3 years ago |
| [router](https://github.com/gowww/router) | 166 | ⚡️ A lightning fast HTTP router | 3 years ago |
| [gorouter](https://github.com/vardius/gorouter) | 149 | Go Server/API micro framework, HTTP request router, multiplexer, mux | 7 months ago |
| [pure](https://github.com/go-playground/pure) | 140 | :non-potable_water: Is a lightweight  HTTP router that sticks to the std "net/http" implementation | a month ago |
| [alien](https://github.com/gernest/alien) | 127 | A lightweight and  fast http router from outer space | 9 months ago |
| [violetear](https://github.com/nbari/violetear) | 106 | Go HTTP router | 10 months ago |
| [Bxog](https://github.com/claygod/Bxog) | 104 | Bxog is a simple and fast HTTP router for Go (HTTP request multiplexer). | a year ago |
| [xmux](https://github.com/rs/xmux) | 97 | xmux is a httprouter fork on top of xhandler (net/context aware) | 6 years ago |
| [ngamux](https://github.com/ngamux/ngamux) | 59 | Simple HTTP router for Go | 4 months ago |
| [bellt](https://github.com/GuilhermeCaruso/bellt) | 54 | :bell: A simple Go router | a year ago |
| [fastrouter](https://github.com/razonyang/fastrouter) | 22 | FastRouter is a fast, flexible HTTP router written in Go. | 6 years ago |
| [route](https://github.com/goroute/route) | 8 | Go Route - Simple yet powerful HTTP request multiplexer | 4 years ago |


### [WebAssembly](#WebAssembly)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tinygo](https://github.com/tinygo-org/tinygo) | 13270 | Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM. | 20 hours ago |
| [dom](https://github.com/dennwc/dom) | 479 | DOM library for Go and WASM | 4 years ago |
| [go-canvas](https://github.com/markfarnan/go-canvas) | 212 | Library to use HTML5 Canvas  from Go-WASM, with all drawing within go code | 3 years ago |
| [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) | 149 | Run WASM tests inside your browser | 18 days ago |
| [webapi](https://github.com/gowebapi/webapi) | 142 | Go Lang Web Assembly bindings for DOM, HTML etc | 8 months ago |
| [vert](https://github.com/norunners/vert) | 89 | WebAssembly interop between Go and JS values. | 8 months ago |


### [Windows](#Windows)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ole](https://github.com/go-ole/go-ole) | 1007 | win32 ole implementation for golang | 4 days ago |
| [d3d9](https://github.com/gonutz/d3d9) | 146 | Direct3D9 wrapper for Go. | 4 months ago |
| [gosddl](https://github.com/MonaxGT/gosddl) | 10 | GoSDDL converter | 4 years ago |


### [XML](#XML)
* Libraries and tools for manipulating XML.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zek](https://github.com/miku/zek) | 680 | Generate a Go struct from XML. | 6 days ago |
| [xpath](https://github.com/antchfx/xpath) | 593 | XPath package for Golang, supports HTML, XML, JSON document query. | 3 months ago |
| [xquery](https://github.com/antchfx/xquery) | 156 | Extract data or evaluate value from HTML/XML documents using XPath | 5 years ago |
| [xml2map](https://github.com/sbabiv/xml2map) | 52 | XML to MAP converter written Golang | 2 years ago |
| [xmlwriter](https://github.com/shabbyrobe/xmlwriter) | 24 | xmlwriter is a pure-Go library providing procedural XML generation based on libxml2's xmlwriter module | 2 months ago |
| [XML-Comp](https://github.com/XML-Comp/XML-Comp) | 20 | Compare ANY markup documents. | 5 years ago |


## [Tools](#Tools)
* Go software and plugins.

### [Code Analysis](#Code-Analysis)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-tools](https://github.com/dominikh/go-tools) | 5499 | Staticcheck - The advanced Go linter | 13 hours ago |
| [go-tools](https://github.com/dominikh/go-tools) | 5499 | Staticcheck - The advanced Go linter | 13 hours ago |
| [lint](https://github.com/golang/lint) | 3974 | [mirror] This is a linter for Go source code. (deprecated) | 2 years ago |
| [errcheck](https://github.com/kisielk/errcheck) | 2107 | errcheck checks that you checked errors. | 2 months ago |
| [go-critic](https://github.com/go-critic/go-critic) | 1651 | The most opinionated Go source code linter for code audit. | 15 minutes ago |
| [goplantuml](https://github.com/jfeliu007/goplantuml) | 1484 | PlantUML Class Diagram Generator for golang projects | 20 days ago |
| [gcvis](https://github.com/davecheney/gcvis) | 1085 | Visualise Go program GC trace data in real time | 4 years ago |
| [php-parser](https://github.com/z7zmey/php-parser) | 929 | PHP parser written in Go | 2 years ago |
| [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) | 752 | Clean architecture validator for go, like a The Dependency Rule and interaction between packages in your Go projects. | 2 years ago |
| [goast-viewer](https://github.com/yuroyoro/goast-viewer) | 719 | Golang AST visualizer | 10 days ago |
| [golines](https://github.com/segmentio/golines) | 659 | A golang formatter that fixes long lines | 2 months ago |
| [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) | 640 | Find outdated dependencies of your Go projects. go-mod-outdated provides a table view of the go list -u -m -json all command which lists all dependencies of a Go project and their available minor and patch updates. It also provides a way to filter indirect dependencies and dependencies without updates. | 6 months ago |
| [goreturns](https://github.com/sqs/goreturns) | 519 | A gofmt/goimports-like tool for Go programmers that fills in Go return statements with zero values to match the func return types | 3 years ago |
| [todocheck](https://github.com/preslavmihaylov/todocheck) | 398 | A static code analyser for annotated TODO comments | 7 months ago |
| [unconvert](https://github.com/mdempsky/unconvert) | 359 | Remove unnecessary type conversions from Go source | 6 months ago |
| [dupl](https://github.com/mibk/dupl) | 316 | a tool for code clone detection | 3 years ago |
| [tickgit](https://github.com/augmentable-dev/tickgit) | 307 | Manage your repository's TODOs, tickets and checklists as config in your codebase. | 5 months ago |
| [gostatus](https://github.com/shurcooL/gostatus) | 243 | A command line tool that shows the status of Go repositories. | a month ago |
| [apicompat](https://github.com/bradleyfalzon/apicompat) | 178 | apicompat checks recent changes to a Go project for backwards incompatible changes | 7 years ago |
| [checkstyle](https://github.com/qiniu/checkstyle) | 128 | checkstyle for go | 2 years ago |
| [lint](https://github.com/surullabs/lint) | 67 | Run linters from Go code -  | 5 years ago |
| [validate](https://github.com/mccoyst/validate) | 61 | A Go package to automatically validate fields with tags | 10 months ago |
| [go-outdated](https://github.com/firstrow/go-outdated) | 45 | Find outdated golang packages | 5 years ago |
| [blanket](https://github.com/verygoodsoftwarenotvirus/blanket) | 17 | MOVED TO GITLAB | 5 years ago |
| [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) | 10 | Golang Ifood API SDK  | a year ago |


### [Editor Plugins](#Editor-Plugins)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vim-go](https://github.com/fatih/vim-go) | 15529 | Go development plugin for Vim | 4 days ago |
| [tools](https://github.com/golang/tools) | 6936 | [mirror] Go Tools | 13 hours ago |
| [gocode](https://github.com/nsf/gocode) | 5004 | An autocompletion daemon for the Go programming language | 5 months ago |
| [vscode-go](https://github.com/golang/vscode-go) | 3495 | Go extension for Visual Studio Code | 3 days ago |
| [GoSublime](https://github.com/DisposaBoy/GoSublime) | 3423 | A Golang plugin collection for SublimeText 3, providing code completion and other IDE-like features. | 3 years ago |
| [go-plus](https://github.com/joefitzgerald/go-plus) | 1509 | An Enhanced Go Experience For The Atom Editor | 2 years ago |
| [go-mode.el](https://github.com/dominikh/go-mode.el) | 1331 | Emacs mode for the Go programming language | 15 days ago |
| [coc-go](https://github.com/josa42/coc-go) | 543 | Go language server extension using gopls for coc.nvim. | 8 hours ago |
| [goimports-reviser](https://github.com/incu6us/goimports-reviser) | 389 | Right imports sorting & code formatting tool (goimports alternative) | 4 days ago |
| [Watch](https://github.com/eaburns/Watch) | 200 | Watches for changes in a directory tree and reruns a command in an acme win or just on the terminal. | 5 months ago |
| [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) | 87 | Vim compiler plugin for Go (golang) | 7 years ago |
| [go-language-server](https://github.com/theia-ide/go-language-server) | 31 | A Go language server. | 4 years ago |
| [gounit-vim](https://github.com/hexdigest/gounit-vim) | 23 | Vim plugin for https://github.com/hexdigest/gounit | 5 years ago |
| [theia-go-extension](https://github.com/theia-ide/theia-go-extension) | 15 | Theia Go Extension | 4 years ago |
| [vscode-go-doc](https://github.com/msyrus/vscode-go-doc) | 7 | An Microsoft Visual Code extension for Golang to print symbol definition to output | 7 months ago |


### [Go Generate Tools](#Go-Generate-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gotests](https://github.com/cweill/gotests) | 4645 | Automatically generate Go test boilerplate from your source code. | 6 days ago |
| [genny](https://github.com/cheekybits/genny) | 1679 | Elegant generics for Go | 2 years ago |
| [xgen](https://github.com/xuri/xgen) | 261 | XSD (XML Schema Definition) parser and Go/C/Java/Rust/TypeScript code generator | a month ago |
| [re2dfa](https://github.com/opennota/re2dfa) | 193 | Transform regular expressions into finite state machines and output Go source code. This repository has migrated to https://gitlab.com/opennota/re2dfa | 5 years ago |
| [hasgo](https://github.com/DylanMeeus/hasgo) | 129 | Haskell-flavoured functions for Go :smiley: | 2 years ago |
| [gonerics](https://github.com/bouk/gonerics) | 114 | Generics for go | 9 years ago |
| [gocontracts](https://github.com/Parquery/gocontracts) | 98 | A tool for design-by-contract in Go | 5 years ago |
| [gounit](https://github.com/hexdigest/gounit) | 72 | Unit tests generator for Go programming language | 5 years ago |
| [generic](https://github.com/usk81/generic) | 48 | flexible data type for Go | 3 years ago |
| [godal](https://github.com/mafulong/godal) | 17 | godal provides the ability to generate specific golang code. The godal is to enable developers to write fast code in an expressive way. | 2 years ago |


### [Go Tools](#Go-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-swagger](https://github.com/go-swagger/go-swagger) | 8793 | Swagger 2.0 implementation for go | 15 days ago |
| [go-callvis](https://github.com/ondrajz/go-callvis) | 5338 | Visualize call graph of a Go program using Graphviz | 3 months ago |
| [OctoLinker](https://github.com/OctoLinker/OctoLinker) | 5165 | OctoLinker — Links together, what belongs together | 20 hours ago |
| [depth](https://github.com/KyleBanks/depth) | 845 | Visualize Go Dependency Trees | 2 years ago |
| [richgo](https://github.com/kyoh86/richgo) | 802 | Enrich `go test` outputs with text decorations. | 4 days ago |
| [rts](https://github.com/galeone/rts) | 245 | RTS: request to struct. Generates Go structs from JSON server responses. | 9 months ago |
| [godbg](https://github.com/tylerwince/godbg) | 196 | Go implementation of the Rust `dbg` macro | 4 years ago |
| [typex](https://github.com/dtgorski/typex) | 180 | [TOOL, CLI] - Filter and examine Go type structures, interfaces and their transitive dependencies and relationships. Export structural types as TypeScript value object or bare type representations. | 7 months ago |
| [roumon](https://github.com/becheran/roumon) | 146 | Universal goroutine monitor using pprof and termui  | 6 months ago |
| [gothanks](https://github.com/psampaz/gothanks) | 118 | GoThanks automatically stars Go's official repository and your go.mod github dependencies, providing a simple way  to say thanks to the maintainers of the modules you use and the contributors of Go itself. | 6 months ago |
| [colorgo](https://github.com/songgao/colorgo) | 112 | Colorize (highlight) `go build` command output | 3 years ago |
| [go-james](https://github.com/pieterclaerhout/go-james) | 59 | James is your butler and helps you to create, build, debug, test and run your Go projects | 3 months ago |
| [igo](https://github.com/rocketlaunchr/igo) | 59 | Improved Go Syntax (transpiler) | 3 years ago |
| [go-pkg-complete](https://github.com/skelterjohn/go-pkg-complete) | 42 | bash completion for go and wgo | 6 years ago |
| [gomodrun](https://github.com/dustinblackman/gomodrun) | 26 | The forgotten go tool that executes and caches binaries included in go.mod files. | 7 months ago |
| [docs](https://github.com/go-oas/docs) | 23 | Automatically generate RESTful API documentation for GO projects - aligned with Open API Specification standard | 3 months ago |
| [modver](https://github.com/bobg/modver) | 8 |  | a month ago |


### [DevOps Tools](#DevOps-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kubernetes](https://github.com/kubernetes/kubernetes) | 100696 | Production-Grade Container Scheduling and Management | 34 minutes ago |
| [moby](https://github.com/moby/moby) | 66408 | Moby Project - a collaborative project for the container ecosystem to assemble container-based systems | 9 minutes ago |
| [traefik](https://github.com/traefik/traefik) | 44110 | The Cloud Native Application Proxy | 18 minutes ago |
| [gitea](https://github.com/go-gitea/gitea) | 37818 | Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD | 24 minutes ago |
| [vegeta](https://github.com/tsenart/vegeta) | 21641 | HTTP load testing tool and library. It's over 9000! | 15 hours ago |
| [hey](https://github.com/rakyll/hey) | 16044 | HTTP load generator, ApacheBench (ab) replacement | 20 days ago |
| [packer](https://github.com/hashicorp/packer) | 14564 | Packer is a tool for creating identical machine images for multiple platforms from a single source configuration. | 7 hours ago |
| [webhook](https://github.com/adnanh/webhook) | 9174 | webhook is a lightweight incoming webhook server to run shell commands | 7 days ago |
| [gvm](https://github.com/moovweb/gvm) | 8673 | Go Version Manager | 3 hours ago |
| [ddosify](https://github.com/ddosify/ddosify) | 7662 | Comprehensive Performance Testing Platform. Available on CLI, Self-Hosted, and Cloud - https://ddosify.com 🚀 | 8 days ago |
| [gaia](https://github.com/gaia-pipeline/gaia) | 5095 | Build powerful pipelines in any programming language. | 5 months ago |
| [gox](https://github.com/mitchellh/gox) | 4557 | A dead simple, no frills Go cross compile tool | 3 months ago |
| [bombardier](https://github.com/codesenberg/bombardier) | 4472 | Fast cross-platform HTTP benchmarking tool written in Go | 2 months ago |
| [script](https://github.com/bitfield/script) | 4245 | Making it easy to write shell-like scripts in Go | 17 days ago |
| [pomerium](https://github.com/pomerium/pomerium) | 3622 | Pomerium is an identity and context-aware access proxy. | 6 hours ago |
| [bosun](https://github.com/bosun-monitor/bosun) | 3360 | Time Series Alerting Framework | a month ago |
| [kala](https://github.com/ajvb/kala) | 2018 | Modern Job Scheduler | 2 months ago |
| [s5cmd](https://github.com/peak/s5cmd) | 1815 | Parallel S3 and local filesystem execution tool. | an hour ago |
| [fac](https://github.com/mkchoi212/fac) | 1811 | Easy-to-use CUI for fixing git conflicts | a year ago |
| [goxc](https://github.com/laher/goxc) | 1681 | a build tool for Go, with a focus on cross-compiling, packaging and deployment | 4 years ago |
| [statusok](https://github.com/sanathp/statusok) | 1584 | Monitor your Website and APIs from your Computer. Get Notified through Slack, E-mail when your server is down or response time is more than expected.  | 2 years ago |
| [ghorg](https://github.com/gabrie30/ghorg) | 1315 | Quickly clone an entire org/users repositories into one directory - Supports GitHub, GitLab, Bitbucket, and more 🥚 | 7 days ago |
| [go-selfupdate](https://github.com/sanbornm/go-selfupdate) | 1247 | Enable your Go applications to self update | 25 days ago |
| [s3gof3r](https://github.com/rlmcpherson/s3gof3r) | 1139 | Fast, concurrent, streaming access to Amazon S3, including gof3r, a CLI. http://godoc.org/github.com/rlmcpherson/s3gof3r | 2 years ago |
| [utask](https://github.com/ovh/utask) | 948 | µTask is an automation engine that models and executes business processes declared in yaml. ✏️📋 | 18 hours ago |
| [skm](https://github.com/TimothyYe/skm) | 885 | A simple and powerful SSH keys manager | 3 months ago |
| [scaleway-cli](https://github.com/scaleway/scaleway-cli) | 839 | Command Line Interface for Scaleway | 17 hours ago |
| [cassowary](https://github.com/rogerwelin/cassowary) | 677 | :rocket: Modern cross-platform HTTP load-testing tool written in Go | 3 months ago |
| [kool](https://github.com/kool-dev/kool) | 629 | From local development to the cloud: development workflow made easy. | 3 days ago |
| [aurora](https://github.com/xuri/aurora) | 580 | Cross-platform beanstalkd queue server admin console. | 2 years ago |
| [govvv](https://github.com/ahmetb/govvv) | 535 | "go build" wrapper to add version info to Golang applications | 4 months ago |
| [pewpew](https://github.com/bengadbois/pewpew) | 384 | Flexible HTTP command line stress tester for websites and web services | a year ago |
| [jenkins-cli](https://github.com/jenkins-zh/jenkins-cli) | 365 | Jenkins CLI allows you to manage your Jenkins in an easy way. Jenkins 命令行客户端 | 5 months ago |
| [gonative](https://github.com/inconshreveable/gonative) | 334 | Build Go Toolchains /w native libs for cross-compilation | 7 years ago |
| [trubka](https://github.com/xitonix/trubka) | 330 | A CLI tool for Kafka | 5 months ago |
| [mora](https://github.com/emicklei/mora) | 312 | MongoDB generic REST server in Go | 9 months ago |
| [lstags](https://github.com/ivanilves/lstags) | 307 | Explore Docker registries and manipulate Docker images! | 3 months ago |
| [balerter](https://github.com/balerter/balerter) | 289 | Script Based Alerting Manager | 5 months ago |
| [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) | 287 | easyssh-proxy provides a simple implementation of some SSH protocol features in Go | a month ago |
| [manssh](https://github.com/xwjdsh/manssh) | 285 | Manage your ssh alias configs easily. | a year ago |
| [dogo](https://github.com/liudng/dogo) | 257 | Monitoring changes in the source file and automatically compile and run (restart). | 4 years ago |
| [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) | 253 | OpenAPI Terraform Provider that configures itself at runtime with the resources exposed by the service provider (defined in a swagger file) | 4 months ago |
| [godbg](https://github.com/sirnewton01/godbg) | 227 | Web-based gdb front-end application | 5 years ago |
| [blast](https://github.com/dave/blast) | 211 | Blast is a simple tool for API load testing and batch jobs | 5 years ago |
| [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) | 204 | S3 Reverse Proxy with GET, PUT and DELETE methods and authentication (OpenID Connect and Basic Auth) | 2 days ago |
| [abbreviate](https://github.com/dnnrly/abbreviate) | 203 | Supporting your devops by shortening your strings using common abbreviations and clever guesswork | 6 months ago |
| [kcli](https://github.com/cswank/kcli) | 196 | A kafka command line browser | 4 years ago |
| [gobrew](https://github.com/cryptojuice/gobrew) | 194 | Shell script to download and set GO environmental paths to allow multiple versions. | 3 years ago |
| [ostent](https://github.com/ostrost/ostent) | 177 | Ostent is a server tool to collect, display and report system metrics. | 8 months ago |
| [grapes](https://github.com/yaronsumel/grapes) | 163 | easy way to distribute commands over ssh. | a month ago |
| [dockerfile-generator](https://github.com/ozankasikci/dockerfile-generator) | 155 | dfg - Generates dockerfiles based on various input channels.  | a year ago |
| [winrm-cli](https://github.com/masterzen/winrm-cli) | 154 | Command-line tool to remotely execute commands on Windows machines through WinRM | 2 years ago |
| [drone-scp](https://github.com/appleboy/drone-scp) | 123 | Copy files and artifacts via SSH using a binary, docker or Drone CI. | 2 months ago |
| [go-furnace](https://github.com/go-furnace/go-furnace) | 97 | Go Hosting Solution for AWS, Google Cloud and Digital Ocean | 2 years ago |
| [dropship](https://github.com/ChrisMcKenzie/dropship) | 64 | Super simple deployment tool | 5 years ago |
| [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) | 37 | Docker image for building Go binaries with MinGW toolchain | 14 days ago |
| [drone-jenkins](https://github.com/appleboy/drone-jenkins) | 37 | Drone plugin for trigger Jenkins jobs. | a year ago |
| [rodent](https://github.com/alouche/rodent) | 34 | Manage Go Versions/Projects/Dependencies | 6 years ago |
| [awsenv](https://github.com/soniah/awsenv) | 33 | AWS environment config loader | 5 years ago |
| [httpref](https://github.com/dnnrly/httpref) | 31 | Command line, offline, access to HTTP status code, common header, and port references | a month ago |
| [lwc](https://github.com/timdp/lwc) | 30 | A live-updating version of the UNIX wc command. | a year ago |
| [depcharge](https://github.com/centerorbit/depcharge) | 23 | DepCharge is a tool designed to help orchestrate the execution of commands across many directories at once. | 2 years ago |
| [aptly-fork](https://github.com/smira/aptly-fork) | 9 | aptly - Debian repository management tool (fork of aptly-dev/aptly) | 4 years ago |
| [sg](https://github.com/ChristopherRabotin/sg) | 8 | Stress gauge allows one to gauge response times of an HTTP service under stress. | 7 years ago |


### [Other Software](#Other-Software)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [croc](https://github.com/schollz/croc) | 23253 | Easily and securely send things from one computer to another :crocodile: :package: | a month ago |
| [restic](https://github.com/restic/restic) | 20874 | Fast, secure, efficient backup program | 3 hours ago |
| [seaweedfs](https://github.com/seaweedfs/seaweedfs) | 18003 | SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding. | 15 hours ago |
| [goreplay](https://github.com/buger/goreplay) | 17696 | GoReplay is an open-source tool for capturing and replaying live HTTP traffic into a test environment in order to continuously test your system with real data. It can be used to increase confidence in code deployments, configuration changes and infrastructure changes. | 19 hours ago |
| [comcast](https://github.com/tylertreat/comcast) | 10000 | Simulating shitty network connections so you can build better systems. | a month ago |
| [toxiproxy](https://github.com/Shopify/toxiproxy) | 9261 | :alarm_clock: :fire: A TCP proxy to simulate network and system conditions for chaos and resiliency testing | 3 days ago |
| [confd](https://github.com/kelseyhightower/confd) | 8141 | Manage local application configuration files using templates and data from etcd or consul | 21 hours ago |
| [liteide](https://github.com/visualfc/liteide) | 7264 | LiteIDE is a simple, open source, cross-platform Go IDE.  | a month ago |
| [drive](https://github.com/odeke-em/drive) | 6559 | Google Drive client for the commandline | 7 months ago |
| [nes](https://github.com/fogleman/nes) | 5264 | NES emulator written in Go. | 5 days ago |
| [scc](https://github.com/boyter/scc) | 4924 | Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go | 4 days ago |
| [duplicacy](https://github.com/gilbertchen/duplicacy) | 4720 | A new generation cloud backup tool  | a month ago |
| [blocky](https://github.com/0xERR0R/blocky) | 2777 | Fast and lightweight DNS proxy as ad-blocker for local network with many features | 4 hours ago |
| [mylg](https://github.com/mehrdadrad/mylg) | 2660 | Network Diagnostic Tool | 3 years ago |
| [goboy](https://github.com/Humpheh/goboy) | 2524 | Multi-platform Nintendo Game Boy Color emulator written in Go | 5 months ago |
| [sup](https://github.com/pressly/sup) | 2430 | Super simple deployment tool - think of it like 'make' for a network of servers | 5 months ago |
| [lgo](https://github.com/yunabe/lgo) | 2316 | Interactive Go programming with Jupyter | 3 years ago |
| [circuit](https://github.com/gocircuit/circuit) | 1970 | Circuit: Dynamic cloud orchestration http://gocircuit.org | 3 years ago |
| [community](https://github.com/documize/community) | 1906 | Modern Confluence alternative designed for internal & external docs, built with Go + EmberJS | 15 days ago |
| [snap](https://github.com/intelsdi-x/snap) | 1797 | The open telemetry framework | 9 months ago |
| [borg](https://github.com/ok-borg/borg) | 1580 | Search and save shell snippets without leaving your terminal | 6 years ago |
| [shell2http](https://github.com/msoap/shell2http) | 1144 | Executing shell commands via HTTP server | 4 months ago |
| [vflow](https://github.com/Edgio/vflow) | 1001 |  Enterprise Network Flow Collector (IPFIX, sFlow, Netflow)  | 3 months ago |
| [peg](https://github.com/pointlander/peg) | 920 | Peg, Parsing Expression Grammar, is an implementation of a Packrat parser generator. | 5 months ago |
| [Go-Package-Store](https://github.com/shurcooL/Go-Package-Store) | 895 | An app that displays updates for the Go packages in your GOPATH. | a month ago |
| [leaps](https://github.com/Jeffail/leaps) | 736 | A pair programming service using operational transforms | 5 months ago |
| [gfile](https://github.com/Antonito/gfile) | 705 | Direct file transfer over WebRTC | 5 months ago |
| [guora](https://github.com/meloalright/guora) | 654 | 🖖🏻 A self-hosted Quora like web application written in Go  基于 Golang 类似知乎的私有部署问答应用 包含问答、评论、点赞、管理后台等功能 | 6 months ago |
| [gebug](https://github.com/moshebe/gebug) | 622 | Debug Dockerized Go applications better | 5 days ago |
| [gocc](https://github.com/goccmack/gocc) | 579 | Parser / Scanner Generator | 5 months ago |
| [mockingjay-server](https://github.com/quii/mockingjay-server) | 543 | Fake server, Consumer Driven Contracts and help with testing performance from one configuration file with zero system dependencies and no coding whatsoever | a year ago |
| [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) | 455 | Go Peerflix | 5 months ago |
| [woke](https://github.com/get-woke/woke) | 388 | Detect non-inclusive language in your source code. | 20 days ago |
| [ipe](https://github.com/dimiro1/ipe) | 367 | An open source Pusher server implementation compatible with Pusher client libraries written in GO | 2 years ago |
| [IDE](https://github.com/thestrukture/IDE) | 354 | A Go code editor. With debugging and Autocomplete. 一个 Go 代码编辑器，具有 DEBUGGING 和 AUTOCOMPLETE | 8 months ago |
| [tcpprobe](https://github.com/mehrdadrad/tcpprobe) | 338 | Modern TCP tool and service for network performance observability. | 2 years ago |
| [wellington](https://github.com/wellington/wellington) | 303 | Spriting that sass has been missing | 5 months ago |
| [cherry](https://github.com/rafael-santiago/cherry) | 289 | A tiny webchat server in Go. | 6 years ago |
| [tcpdog](https://github.com/mehrdadrad/tcpdog) | 235 | eBPF based TCP observability. | 2 years ago |
| [joincap](https://github.com/assafmo/joincap) | 193 | Merge multiple pcap files together, gracefully. | 2 years ago |
| [orbit](https://github.com/gulien/orbit) | 177 | :satellite: A cross-platform task runner for executing commands and generating files from templates | 3 years ago |
| [vaku](https://github.com/lingrino/vaku) | 150 | Vaku extends the Vault API & CLI | 15 hours ago |
| [dp](https://github.com/scryinfo/dp) | 84 | Scry Data Protocol | 7 months ago |
| [boxed](https://github.com/tejo/boxed) | 78 | dropbox based blog engine, written in go. | 5 years ago |
| [term-quiz](https://github.com/crazcalm/term-quiz) | 24 | Terminal Quiz Application Written in Go | 5 years ago |
| [naclpipe](https://github.com/unix4fun/naclpipe) | 23 | NaCL pipe | 5 years ago |
| [snitch](https://github.com/lucasgomide/snitch) | 16 | Keep updated about all deploys on Tsuru | 5 years ago |
| [GoDocTooltip](https://github.com/diankong/GoDocTooltip) | 13 | A Chrome extension for golang users.When you're at golang's official doc site, it will show function's description as tooltip on function list | 8 months ago |
| [hoofli](https://github.com/dnnrly/hoofli) | 6 | Generate PlantUML diagrams from Chrome or Firefox network inspections | 8 months ago |


## [Resources](#resources)
* Where to discover new Go libraries.

### [Benchmarks](#Benchmarks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) | 1905 | :zap: Go web framework benchmark | 3 months ago |
| [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) | 1615 | Go HTTP request router and web framework benchmark | 10 months ago |
| [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) | 1470 | Benchmarks of Go serialization methods | 3 months ago |
| [skynet](https://github.com/atemerev/skynet) | 1026 | Skynet 1M threads microbenchmark | a year ago |
| [speedtest-resize](https://github.com/fawick/speedtest-resize) | 236 | Compare various Image resize algorithms for the Go language | 3 years ago |
| [go-benchmarks](https://github.com/tylertreat/go-benchmarks) | 146 | A few miscellaneous Go microbenchmarks. | 7 years ago |
| [gospeed](https://github.com/feyeleanor/gospeed) | 111 | Go micro-benchmarks for calculating the speed of language constructs | a year ago |
| [autobench](https://github.com/davecheney/autobench) | 96 | Go benchmark harness.  | 9 years ago |
| [golang-sql-benchmark](https://github.com/tyler-smith/golang-sql-benchmark) | 65 | A benchmarking shootout of various db/SQL utilities for Go | a year ago |
| [gocostmodel](https://github.com/mna/gocostmodel) | 60 | Benchmarks of common basic operations for the Go language. | 2 years ago |
| [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) | 28 | ⏱ Benchmarks of machine learning inference for Go | a month ago |
| [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) | 26 | Application for HTTP benchmarking via different rules and configs | 6 years ago |
| [kvbench](https://github.com/jimrobinson/kvbench) | 25 | Key/Value database benchmark | 4 years ago |
| [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) | 8 | Benchmark of Golang JSON Libraries | 3 years ago |


### [E-Books](#E-Books)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [GoBooks](https://github.com/dariubs/GoBooks) | 14542 | List of Golang books | a month ago |
| [The-Golang-Standard-Library-by-Example](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example) | 9291 | Golang标准库。对于程序员而言，标准库与语言本身同样重要，它好比一个百宝箱，能为各种常见的任务提供完美的解决方案。以示例驱动的方式讲解Golang的标准库。 | 3 months ago |
| [web-dev-golang-anti-textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook) | 3123 | Learn how to write webapps without a framework in Go. | 2 years ago |
| [gosuccinctly](https://github.com/thedevsir/gosuccinctly) | 23 |  This is the companion repo for Go Succinctly by Amir Irani. | 5 years ago |


### [Gophers](#Gophers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gophers](https://github.com/egonelbre/gophers) | 3203 | Free gophers | a year ago |
| [free-gophers-pack](https://github.com/MariaLetta/free-gophers-pack) | 3028 | ✨ This pack of 100+ gopher pictures and elements will help you to build own design of almost anything related to Go Programming Language: presentations, posts in blogs or social media, courses, videos and many, many more. | 8 months ago |
| [gophers](https://github.com/ashleymcnamara/gophers) | 2834 | Gopher Artwork by Ashley McNamara | 4 years ago |
| [gopherize.me](https://github.com/matryer/gopherize.me) | 651 | Gopherize.me app | 2 years ago |
| [gophericons](https://github.com/shalakhin/gophericons) | 611 | 34 gopher images for Go developers community | 5 years ago |
| [gopher-stickers](https://github.com/tenntenn/gopher-stickers) | 562 | gopher stickers | 4 years ago |
| [go-gopher](https://github.com/sillecelik/go-gopher) | 120 | The Go Gopher Amigurumi Pattern | 3 months ago |
| [gopher-logos](https://github.com/GolangUA/gopher-logos) | 114 | adorable gopher logos | 2 years ago |
| [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) | 65 | Go gopher Vector Data [.ai, .svg] | 5 years ago |
| [gophers](https://github.com/rogeralsing/gophers) | 58 | random gopher graphics | 3 years ago |
| [gophers](https://github.com/scraly/gophers) | 24 | Gopher artwork (Golang mascot) | 23 days ago |


### [Style Guides](#Style-Guides)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cockroach](https://github.com/cockroachdb/cockroach) | 27558 | CockroachDB - the open source, cloud-native distributed SQL database. | 6 minutes ago |
| [fabric](https://github.com/hyperledger/fabric) | 14738 | Hyperledger Fabric is an enterprise-grade permissioned distributed ledger framework for developing solutions and applications. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy. | a day ago |
| [guide](https://github.com/uber-go/guide) | 14113 | The Uber Go Style Guide. | 13 days ago |
| [magnetico](https://github.com/boramalper/magnetico) | 2955 | Autonomous (self-hosted) BitTorrent DHT search engine suite. | 2 years ago |
| [go-styleguide](https://github.com/bahlo/go-styleguide) | 1446 | 🏆 Opinionated Styleguide for the Go language | 7 months ago |


### [Websites](#Websites)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/golang/go) | 113389 | The Go programming language | 3 hours ago |
| [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) | 30453 | A curated list of awesome awesomeness | a month ago |
| [awesome-remote-job](https://github.com/lukasz-madon/awesome-remote-job) | 26170 | A curated list of awesome remote jobs and resources. Inspired by https://github.com/vinta/awesome-python | 3 days ago |
| [awesome-golang-workshops](https://github.com/amit-davidson/awesome-golang-workshops) | 486 | A curated list of awesome golang workshops. | 2 years ago |
| [golang-graphics](https://github.com/mholt/golang-graphics) | 138 | Community-contributed Go graphics files | 8 years ago |
| [gocryforhelp](https://github.com/ninedraft/gocryforhelp) | 41 | List of opensource projects looking for help | 6 years ago |
| [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) | 21 | Parse awesome-go README file and generate a new README file with repo info. | a year ago |


### [Tutorials](#Tutorials)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [build-web-application-with-golang](https://github.com/astaxie/build-web-application-with-golang) | 42223 | A golang ebook intro how to build a web with golang | 4 months ago |
| [go-patterns](https://github.com/tmrts/go-patterns) | 22594 | Curated list of Go design patterns, recipes and idioms | 3 months ago |
| [learn-go-with-tests](https://github.com/quii/learn-go-with-tests) | 19903 | Learn Go with test-driven development | 7 days ago |
| [learngo](https://github.com/inancgumus/learngo) | 17566 | ❤️ 1000+ Hand-Crafted Go Examples, Exercises, and Quizzes. 🚀 Learn Go by fixing 1000+ tiny programs. | 2 months ago |
| [golang-cheat-sheet](https://github.com/a8m/golang-cheat-sheet) | 7712 | An overview of Go syntax and features. | 8 months ago |
| [go-clean-template](https://github.com/evrone/go-clean-template) | 5336 | Clean Architecture template for Golang services | 2 months ago |
| [golang-for-nodejs-developers](https://github.com/miguelmota/golang-for-nodejs-developers) | 3969 | Examples of Golang compared to Node.js for learning 🤓 | 6 months ago |
| [ethereum-development-with-go-book](https://github.com/miguelmota/ethereum-development-with-go-book) | 1615 | 📖 A little guide book on Ethereum Development with Go (golang) | 9 months ago |
| [working-with-go](https://github.com/mkaz/working-with-go) | 1158 | A set of example golang code to start learning Go | 4 years ago |
| [goapp](https://github.com/bnkamalesh/goapp) | 640 | An opinionated guideline to structure & develop a Go web application/service | 6 months ago |
| [design-patterns](https://github.com/shubhamzanwar/design-patterns) | 105 | common creational, behavioural and structural patterns implemented in go 🤩 | 5 months ago |
| [go-patterns](https://github.com/janosdebugs/go-patterns) | 11 |  | 2 years ago |


