# Go
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of awesome Go frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Tue Jul 11 2023 09:31:33 GMT+0800 (中国标准时间)
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
| [oto](https://github.com/hajimehoshi/oto) | 1287 | ♪ A low-level library to play sound on multiple platforms ♪ | 3 months ago |
| [portaudio](https://github.com/gordonklaus/portaudio) | 607 | Go bindings for the PortAudio audio I/O library | 2 days ago |
| [music-theory](https://github.com/go-music-theory/music-theory) | 417 | Go models of Note, Scale, Chord and Key | 3 years ago |
| [waveform](https://github.com/mdlayher/waveform) | 354 | Go package capable of generating waveform images from audio streams. MIT Licensed. | 3 years ago |
| [id3v2](https://github.com/n10v/id3v2) | 292 | 🎵 ID3 decoding and encoding library for Go | 2 months ago |
| [GoAudio](https://github.com/DylanMeeus/GoAudio) | 287 | Go tools for audio processing & creation 🎶 | a year ago |
| [portmidi](https://github.com/rakyll/portmidi) | 279 | Go bindings for libportmidi | a year ago |
| [flac](https://github.com/mewkiz/flac) | 254 | Package flac provides access to FLAC (Free Lossless Audio Codec) streams. | 3 months ago |
| [malgo](https://github.com/gen2brain/malgo) | 222 | Mini audio library | 5 months ago |
| [mix](https://github.com/go-mix/mix) | 169 | Sequence-based Go-native audio mixer for music apps | 3 years ago |
| [gaad](https://github.com/Comcast/gaad) | 112 | GAAD (Go Advanced Audio Decoder) | 5 months ago |
| [minimp3](https://github.com/tosone/minimp3) | 103 | Decode mp3 base on https://github.com/lieff/minimp3 | 2 years ago |
| [vorbis](https://github.com/mccoyst/vorbis) | 32 | A "native" ogg vorbis decoder for Go (uses inline stb_vorbis) | 9 months ago |
| [gosamplerate](https://github.com/dh1tw/gosamplerate) | 27 | Go Bindings for libsamplerate | 3 years ago |


### [Authentication and OAuth](#authentication-and-oauth)
* Libraries for implementing authentications schemes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [casbin](https://github.com/casbin/casbin) | 15241 | An authorization library that supports access control models like ACL, RBAC, ABAC in Golang: https://discord.gg/S5UjpzGZjN | 2 days ago |
| [oauth2](https://github.com/golang/oauth2) | 4776 | Go OAuth2 | 5 days ago |
| [goth](https://github.com/markbates/goth) | 4211 | Package goth provides a simple, clean, and idiomatic way to write authentication packages for Go web applications. | 8 days ago |
| [authboss](https://github.com/volatiletech/authboss) | 3456 | The boss of http auth. | 4 months ago |
| [go-oauth2-server](https://github.com/RichardKnop/go-oauth2-server) | 2037 | A standalone, specification-compliant,  OAuth2 server written in Golang. | 3 months ago |
| [go-jose](https://github.com/square/go-jose) | 1985 | An implementation of JOSE standards (JWE, JWS, JWT) in Go | 6 months ago |
| [loginsrv](https://github.com/tarent/loginsrv) | 1897 | JWT login microservice with plugable backends such as OAuth2, Google, Github, htpasswd, osiam, .. | 2 years ago |
| [osin](https://github.com/openshift/osin) | 1824 | Golang OAuth2 server library | 7 days ago |
| [gologin](https://github.com/dghubble/gologin) | 1613 | Go login handlers for authentication providers (OAuth1, OAuth2) | a day ago |
| [scs](https://github.com/alexedwards/scs) | 1514 | HTTP Session Management for Go | 5 days ago |
| [gorbac](https://github.com/mikespook/gorbac) | 1473 | goRBAC provides a lightweight role-based access control (RBAC) implementation in Golang. | 6 months ago |
| [paseto](https://github.com/o1egl/paseto) | 720 | Platform-Agnostic Security Tokens implementation in GO (Golang) | 5 months ago |
| [jwt](https://github.com/cristalhq/jwt) | 606 | Safe, simple and fast JSON Web Tokens for Go | 2 months ago |
| [permissions2](https://github.com/xyproto/permissions2) | 483 |   :closed_lock_with_key: Middleware for keeping track of users, login states and permissions | 15 days ago |
| [go-guardian](https://github.com/shaj13/go-guardian) | 477 | Go-Guardian is a golang library that provides a simple, clean, and idiomatic way to create powerful modern API and web authentication. | 4 months ago |
| [jwt](https://github.com/pascaldekloe/jwt) | 337 | JSON Web Token library | 2 months ago |
| [jeff](https://github.com/abraithwaite/jeff) | 256 | 🍍Jeff provides the simplest way to manage web sessions in Go. | 4 months ago |
| [jwt-auth](https://github.com/adam-hanna/jwt-auth) | 229 | This package provides json web token (jwt) middleware for goLang http servers | 2 years ago |
| [httpauth](https://github.com/goji/httpauth) | 219 | HTTP Authentication middlewares | 2 years ago |
| [branca](https://github.com/hako/branca) | 168 | :key: Secure alternative to JWT. Authenticated Encrypted API Tokens for Go. | 3 years ago |
| [otpgen](https://github.com/RijulGulati/otpgen) | 129 | Library to generate TOTP/HOTP codes | 2 years ago |
| [sessionup](https://github.com/swithek/sessionup) | 119 | Straightforward HTTP session management | a year ago |
| [sjwt](https://github.com/brianvoe/sjwt) | 112 | Simple JWT Golang | a year ago |
| [session](https://github.com/icza/session) | 111 | Go session management for web servers (including support for Google App Engine - GAE). | a year ago |
| [rbac](https://github.com/zpatrick/rbac) | 107 | Minimalistic RBAC package for Go applications | 5 years ago |
| [jwt](https://github.com/robbert229/jwt) | 103 | This is an implementation of JWT in golang! | 3 years ago |
| [securecookie](https://github.com/chmike/securecookie) | 75 | Fast, secure and efficient secure cookie encoder/decoder  | 5 months ago |
| [sessions](https://github.com/adam-hanna/sessions) | 74 | A dead simple, highly performant, highly customizable sessions middleware for go http servers. | 3 years ago |
| [otpgo](https://github.com/jltorresm/otpgo) | 58 | Time-Based One-Time Password (TOTP) and HMAC-Based One-Time Password (HOTP) library for Go. | 2 years ago |
| [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) | 55 | Golang library for providing a canonical representation of email address. | 17 days ago |
| [scope](https://github.com/ThundR67/scope) | 31 | Easily Manage OAuth2 Scopes In Go | 2 years ago |
| [cookiestxt](https://github.com/mengzhuo/cookiestxt) | 12 | cookiestxt implement parser of cookies txt format | 8 months ago |
| [sessiongate-go](https://github.com/f0rmiga/sessiongate-go) | 10 | A driver for the SessionGate Redis module - easy session management using the Go language. | 5 years ago |


### [Blockchain](#blockchain)
* Tools for building blockchains.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ethereum](https://github.com/ethereum/go-ethereum) | 42902 | Official Go implementation of the Ethereum protocol | 4 hours ago |
| [tendermint](https://github.com/tendermint/tendermint) | 5527 | ⟁ Tendermint Core (BFT Consensus) in Go | 28 minutes ago |
| [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) | 5282 | :chains: A Framework for Building High Value Public Blockchains :sparkles: | 20 minutes ago |
| [gossamer](https://github.com/ChainSafe/gossamer) | 393 | 🕸️ Go Implementation of the Polkadot Host | 5 hours ago |


### [Bot Building](#bot-building)
* Libraries for building and working with bots.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) | 4752 | Golang bindings for the Telegram Bot API | 5 days ago |
| [olivia](https://github.com/olivia-ai/olivia) | 3555 | 💁‍♀️Your new best friend powered by an artificial neural network | 5 months ago |
| [telebot](https://github.com/tucnak/telebot) | 3147 | Telebot is a Telegram bot framework in Go. | a month ago |
| [kelp](https://github.com/stellar/kelp) | 997 | Kelp is a free and open-source trading bot for the Stellar DEX and 100+ centralized exchanges | 7 months ago |
| [golang-crypto-trading-bot](https://github.com/saniales/golang-crypto-trading-bot) | 918 | A golang implementation of a console-based trading bot for cryptocurrency exchanges | 4 months ago |
| [bot](https://github.com/go-chat-bot/bot) | 783 | IRC, Slack, Telegram and RocketChat bot written in go | 5 months ago |
| [slacker](https://github.com/shomali11/slacker) | 782 | Slack Bot Framework | 17 days ago |
| [tbot](https://github.com/yanzay/tbot) | 336 | Go library for Telegram Bot API | 2 years ago |
| [go-twitch-irc](https://github.com/gempir/go-twitch-irc) | 299 | go irc client for twitch.tv | 6 months ago |
| [echotron](https://github.com/NicoNex/echotron) | 260 | An elegant and concurrent library for the Telegram bot API in Go. | a month ago |
| [go-sarah](https://github.com/oklahomer/go-sarah) | 258 | Simple yet customizable bot framework written in Go. | 8 days ago |
| [tenyks](https://github.com/kyleterry/tenyks) | 175 | The Tenyks IRC bot. | 5 months ago |
| [hanu](https://github.com/sbstjn/hanu) | 144 | Golang Framework for writing Slack bots | 3 months ago |
| [slack-bot](https://github.com/innogames/slack-bot) | 139 | Ready to use Slack bot for lazy developers: start Jenkins jobs, watch Jira tickets, watch pull requests with AI support... | 2 days ago |
| [go-tgbot](https://github.com/olebedev/go-tgbot) | 119 | Golang  telegram bot API wrapper, session-based router and middleware | 5 years ago |
| [margelet](https://github.com/zhulik/margelet) | 80 | Telegram Bot Framework for Go | 10 months ago |
| [ephemeral-roles](https://github.com/ewohltman/ephemeral-roles) | 79 | A Discord bot for managing ephemeral roles based upon voice channel member presence. | 4 months ago |
| [slackscot](https://github.com/alexandre-normand/slackscot) | 54 | Slack bot core/framework written in Go with support for reactions to message updates/deletes | 5 months ago |
| [govkbot](https://github.com/nikepan/govkbot) | 43 | VK bot package for Go | 24 days ago |
| [micha](https://github.com/onrik/micha) | 25 | Client lib for Telegram bot api | 14 days ago |
| [teleterm](https://github.com/alfiankan/teleterm) | 21 | Telegram Bot Exec Terminal Command | 8 days ago |


### [Build Automation](#build-automation)
* Libraries and tools helping with build automation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [task](https://github.com/go-task/task) | 7983 | A task runner / simpler Make alternative written in Go | 2 days ago |
| [realize](https://github.com/oxequa/realize) | 4397 | Realize is the #1 Golang Task Runner which enhance your workflow by automating the most common tasks and using the best performing Golang live reloading. | 2 years ago |
| [mmake](https://github.com/tj/mmake) | 1661 | Modern Make  | 10 days ago |
| [goyek](https://github.com/goyek/goyek) | 386 | Build automation Go library. | 20 days ago |
| [taskctl](https://github.com/taskctl/taskctl) | 254 | Concurrent task runner, developer's routine tasks automation toolkit. Simple modern alternative to GNU Make 🧰 | 2 months ago |
| [1build](https://github.com/gopinath-langote/1build) | 211 | Frictionless way of managing project-specific commands | 3 months ago |
| [gaper](https://github.com/maxcnunes/gaper) | 73 | Builds and restarts a Go project when it crashes or some watched file changes | 2 months ago |
| [anko](https://github.com/GuilhermeCaruso/anko) | 29 | :crystal_ball: Simple application watcher | 2 years ago |


### [Standard CLI](#Standard-CLI)
* Libraries for building standard or basic Command Line applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cobra](https://github.com/spf13/cobra) | 32492 | A Commander for modern Go CLI interactions | 10 hours ago |
| [cli](https://github.com/urfave/cli) | 20390 | A simple, fast, and fun package for building command line apps in Go | a day ago |
| [elvish](https://github.com/elves/elvish) | 5084 | Elvish = Expressive Programming Language + Versatile Interactive Shell | a month ago |
| [andOTP](https://github.com/andOTP/andOTP) | 3692 | [Unmaintained] Open source two-factor authentication for Android | a year ago |
| [kingpin](https://github.com/alecthomas/kingpin) | 3353 | CONTRIBUTIONS ONLY: A Go (golang) command line and flag parser | 2 months ago |
| [dnote](https://github.com/dnote/dnote) | 2538 | A simple command line notebook for programmers | a month ago |
| [go-flags](https://github.com/jessevdk/go-flags) | 2411 | go command line option parser | 4 months ago |
| [pflag](https://github.com/spf13/pflag) | 2128 | Drop-in replacement for Go's flag package, implementing POSIX/GNU-style --flags. | 15 days ago |
| [cli](https://github.com/mitchellh/cli) | 1672 | A Go library for implementing command-line interfaces. | 5 months ago |
| [go-arg](https://github.com/alexflint/go-arg) | 1661 | Struct-based argument parsing in Go | 4 days ago |
| [ops](https://github.com/nanovms/ops) | 1102 | ops - build and run nanos unikernels | 7 days ago |
| [liner](https://github.com/peterh/liner) | 974 | Pure Go line editor with history, inspired by linenoise | 17 days ago |
| [complete](https://github.com/posener/complete) | 887 | bash completion written in go + bash completion for go command | 3 months ago |
| [mow.cli](https://github.com/jawher/mow.cli) | 852 | A versatile library for building CLI applications in Go | a month ago |
| [flaggy](https://github.com/integrii/flaggy) | 831 | Idiomatic Go input parsing with subcommands, positional values, and flags at any position. No required project or package layout and no external dependencies. | 3 months ago |
| [cli](https://github.com/mkideal/cli) | 685 | CLI - A package for building command line app with go | 4 months ago |
| [argparse](https://github.com/akamensky/argparse) | 532 | Argparse for golang. Just because `flag` sucks | 8 months ago |
| [climax](https://github.com/tucnak/climax) | 207 | Climax is an alternative CLI with the human face | 3 years ago |
| [wmenu](https://github.com/dixonwille/wmenu) | 192 | An easy to use menu structure for cli applications that prompts users to make choices. | 2 years ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 179 | hiboot is a high performance web and cli application framework with dependency injection support | 5 months ago |
| [commandeer](https://github.com/jaffee/commandeer) | 168 | Automatically sets up command line flags based on struct fields and tags. | 10 months ago |
| [clir](https://github.com/leaanthony/clir) | 153 | A Simple and Clear CLI library. Dependency free. | 5 months ago |
| [sflags](https://github.com/octago/sflags) | 146 | Generate flags by parsing structures | 2 years ago |
| [flag](https://github.com/cosiner/flag) | 126 | Flag is a simple but powerful command line option parsing library for Go support infinite level subcommand | 3 years ago |
| [job](https://github.com/liujianping/job) | 126 | JOB, make your short-term command as a long-term job. 将命令行规划成任务的工具 | 3 years ago |
| [cmdr](https://github.com/hedzr/cmdr) | 122 | POSIX-compliant command-line UI (CLI) parser and Hierarchical-configuration operations | 25 days ago |
| [clif](https://github.com/ukautz/clif) | 121 | Another CLI framework for Go. It works on my machine. | 4 years ago |
| [cli](https://github.com/teris-io/cli) | 120 | Simple and complete API for building command line applications in Go | 2 years ago |
| [env](https://github.com/codingconcepts/env) | 106 | Tag-based environment configuration for structs | 3 years ago |
| [gocmd](https://github.com/devfacet/gocmd) | 65 | A Go library for building command line applications. | 3 months ago |
| [wlog](https://github.com/dixonwille/wlog) | 59 | A simple logging interface that supports cross-platform color and concurrency. | 2 years ago |
| [strumt](https://github.com/antham/strumt) | 55 | Strumt is a library to create prompt chain | a month ago |
| [go-getoptions](https://github.com/DavidGamba/go-getoptions) | 46 | Fully featured Go (golang) command line option parser with built-in auto-completion support. | 3 months ago |
| [go-command-chain](https://github.com/rainu/go-command-chain) | 43 | A go library for easy configure and run command chains. Such like pipelining in unix shells. | 2 months ago |
| [flagvar](https://github.com/sgreben/flagvar) | 42 | A collection of CLI argument types for the Go `flag` package. | 3 months ago |
| [argv](https://github.com/cosiner/argv) | 38 |  | 3 years ago |
| [cmd](https://github.com/posener/cmd) | 36 | The standard library flag package with its missing features | 3 years ago |
| [go-commander](https://github.com/yitsushi/go-commander) | 33 | Go library to simplify CLI workflow | 3 years ago |
| [go-andotp](https://github.com/RijulGulati/go-andotp) | 23 | CLI program to encrypt/decrypt andOTP files | 3 months ago |
| [sand](https://github.com/Zaba505/sand) | 19 | Package for creating interpreters | 5 years ago |
| [ts](https://github.com/liujianping/ts) | 17 | timestamp convert & compare tool. 时间戳转换与对比工具 | 4 years ago |
| [subcmd](https://github.com/bobg/subcmd) | 4 |  | 7 days ago |


### [Advanced Console UIs](#Advanced-Console-UIs)
* Libraries for building Console Applications and Console User Interfaces.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blessed-contrib](https://github.com/yaronn/blessed-contrib) | 15180 | Build terminal dashboards using ascii/ansi art and javascript | 3 months ago |
| [termui](https://github.com/gizak/termui) | 12558 | Golang terminal dashboard | 2 months ago |
| [gocui](https://github.com/jroimartin/gocui) | 9155 | Minimalist Go package aimed at creating Console User Interfaces. | a month ago |
| [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) | 8447 | Library for building powerful interactive command line applications in Python | 7 days ago |
| [go-prompt](https://github.com/c-bata/go-prompt) | 4942 | Building powerful interactive prompts in Go, inspired by python-prompt-toolkit. | 4 months ago |
| [termbox-go](https://github.com/nsf/termbox-go) | 4542 | Pure Go termbox implementation | a year ago |
| [pterm](https://github.com/pterm/pterm) | 3877 | ✨ #PTerm is a modern Go module to easily beautify console output. Featuring charts, progressbars, tables, trees, text input, select menus and much more 🚀 It's completely configurable and 100% cross-platform compatible. | 5 days ago |
| [progressbar](https://github.com/schollz/progressbar) | 3368 | A really basic thread-safe progress bar for Golang applications | 4 months ago |
| [termdash](https://github.com/mum4k/termdash) | 2336 | Terminal based dashboard. | 5 months ago |
| [asciigraph](https://github.com/guptarohit/asciigraph) | 2259 | Go package to make lightweight ASCII line graph ╭┈╯ in command line apps with no other dependencies. | 2 days ago |
| [mpb](https://github.com/vbauerster/mpb) | 2060 | multi progress bar for Go cli applications | 10 days ago |
| [uiprogress](https://github.com/gosuri/uiprogress) | 2025 | A go library to render progress bars in terminal applications | 2 years ago |
| [uilive](https://github.com/gosuri/uilive) | 1570 | uilive is a go library for updating terminal output in realtime | a year ago |
| [termenv](https://github.com/muesli/termenv) | 1403 | Advanced ANSI style & color support for your terminal applications | 5 days ago |
| [color](https://github.com/gookit/color) | 1342 | 🎨 Terminal color rendering library, support 8/16 colors, 256 colors, RGB color rendering output, support Print/Sprintf methods, compatible with Windows. GO CLI 控制台颜色渲染工具库，支持16色，256色，RGB色彩渲染输出，使用类似于 Print/Sprintf，兼容并支持 Windows 环境的色彩渲染 | 5 days ago |
| [aurora](https://github.com/logrusorgru/aurora) | 1332 | Golang ultimate ANSI-colors that supports Printf/Sprintf methods | 9 months ago |
| [go-isatty](https://github.com/mattn/go-isatty) | 717 |  | 2 months ago |
| [uitable](https://github.com/gosuri/uitable) | 709 | A go library to improve readability in terminal apps using tabular data | 9 months ago |
| [go-colorable](https://github.com/mattn/go-colorable) | 697 |  | 4 months ago |
| [gommon](https://github.com/labstack/gommon) | 496 | Common packages for Go | 4 months ago |
| [simpletable](https://github.com/alexeyco/simpletable) | 457 | Simple tables in terminal with Go | 2 years ago |
| [chalk](https://github.com/ttacon/chalk) | 427 | Intuitive package for prettifying terminal/console output. http://godoc.org/github.com/ttacon/chalk | 4 years ago |
| [yacspin](https://github.com/theckman/yacspin) | 401 | Yet Another CLi Spinner; providing over 80 easy to use and customizable terminal spinners for multiple OSes | 2 years ago |
| [box-cli-maker](https://github.com/Delta456/box-cli-maker) | 365 | Make Highly Customized Boxes for CLI | 2 months ago |
| [tabby](https://github.com/cheynewallace/tabby) | 330 | A tiny library for super simple Golang tables | 3 years ago |
| [go-colortext](https://github.com/daviddengcn/go-colortext) | 215 | Change the color of console text. | 3 years ago |
| [cfmt](https://github.com/mingrammer/cfmt) | 94 | :art: Contextual fmt inspired by bootstrap color classes | 5 years ago |
| [tabular](https://github.com/InVisionApp/tabular) | 70 | Tabular simplifies printing ASCII tables from command line utilities | 2 months ago |
| [cfmt](https://github.com/i582/cfmt) | 57 | Small library for simple and convenient formatted stylized output to the console. | 2 years ago |
| [table](https://github.com/tomlazar/table) | 44 | pretty colorfull tables in go with less effort | 2 months ago |
| [ctc](https://github.com/wzshiming/ctc) | 42 | Console Text Colors - The non-invasive cross-platform terminal color library does not need to modify the Print method | 5 months ago |
| [marker](https://github.com/cyucelen/marker) | 40 |  🖍️ Marker is the easiest way to match and mark strings for colorful terminal outputs! | 8 months ago |
| [colourize](https://github.com/TreyBastian/colourize) | 26 | An ANSI colour terminal package for Go | a year ago |
| [go-ataman](https://github.com/workanator/go-ataman) | 14 | Another Text Attribute Manupulator | 3 years ago |


### [Configuration](#Configuration)
* Libraries for configuration parsing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [viper](https://github.com/spf13/viper) | 23377 | Go configuration with fangs | 4 days ago |
| [godotenv](https://github.com/joho/godotenv) | 6368 | A Go port of Ruby's dotenv library (Loads environment variables from .env files) | a month ago |
| [envconfig](https://github.com/kelseyhightower/envconfig) | 4582 | Golang library for managing configuration data from environment variables | 3 months ago |
| [env](https://github.com/caarlos0/env) | 3680 | A simple and zero-dependencies library to parse environment variables into structs. | 12 days ago |
| [ini](https://github.com/go-ini/ini) | 3259 | Package ini provides INI file read and write functionality in Go | 3 months ago |
| [koanf](https://github.com/knadh/koanf) | 1881 | Simple, extremely lightweight, extensible, configuration management library for Go. Support for JSON, TOML, YAML, env, command line, file, S3 etc. Alternative to viper. | 11 days ago |
| [cleanenv](https://github.com/ilyakaznacheev/cleanenv) | 1055 | ✨Clean and minimalistic environment configuration reader for Golang | 3 days ago |
| [konfig](https://github.com/lalamove/konfig) | 637 | Composable, observable and performant config handling for Go for the distributed processing era | 3 years ago |
| [config](https://github.com/gookit/config) | 471 | 📝 Go configuration manage(load,get,set,export). support JSON, YAML, TOML, Properties, INI, HCL, ENV and Flags. Multi file load, data override merge, parse ENV var. Go应用配置加载管理，支持多种格式，多文件加载，远程文件加载，支持数据合并，解析环境变量名 | 9 days ago |
| [confita](https://github.com/heetch/confita) | 467 | Load configuration in cascade from multiple backends into a struct | 8 months ago |
| [aconfig](https://github.com/cristalhq/aconfig) | 461 | Simple, useful and opinionated config loader. | 2 months ago |
| [xdg](https://github.com/adrg/xdg) | 409 | Go implementation of the XDG Base Directory Specification and XDG user directories | 6 days ago |
| [config](https://github.com/golobby/config) | 334 | A lightweight yet powerful configuration manager for the Go programming language | 6 months ago |
| [config](https://github.com/JeremyLoy/config) | 328 | 12 factor configuration as a typesafe struct in as little as two function calls | a year ago |
| [hjson-go](https://github.com/hjson/hjson-go) | 300 | Hjson for Go | 7 months ago |
| [fig](https://github.com/kkyr/fig) | 273 | A minimalist Go configuration library | 4 months ago |
| [store](https://github.com/tucnak/store) | 268 | A dead simple configuration manager for Go applications | 2 months ago |
| [config](https://github.com/olebedev/config) | 262 | JSON or YAML configuration wrapper with convenient access methods. | a year ago |
| [envconfig](https://github.com/vrischmann/envconfig) | 234 | Small library to read your configuration from environment variables | 2 years ago |
| [config](https://github.com/joshbetz/config) | 214 | 🛠 A configuration library for Go that parses environment variables, JSON files, and reloads automatically on SIGHUP. | 2 years ago |
| [gcfg](https://github.com/go-gcfg/gcfg) | 163 | read INI-style configuration files into Go structs; supports user-defined types and subsections | 2 years ago |
| [harvester](https://github.com/beatlabs/harvester) | 126 | Harvest configuration, watch and notify subscriber | 7 days ago |
| [onion](https://github.com/goraz/onion) | 113 | Layer based configuration for golang | 4 months ago |
| [envcfg](https://github.com/tomazk/envcfg) | 100 | Un-marshaling environment variables to Go structs | 6 years ago |
| [envh](https://github.com/antham/envh) | 96 | Go helpers to manage environment variables | a month ago |
| [configuro](https://github.com/sherifabdlnaby/configuro) | 87 | An opinionated configuration loading framework for Containerized and Cloud-Native applications. | 9 months ago |
| [configuration](https://github.com/BoRuDar/configuration) | 83 | Library for setting values to structs' fields from env, flags, files or default tag | a year ago |
| [xdg](https://github.com/OpenPeeDeeP/xdg) | 75 | A cross platform package that follows the XDG Standard | 3 years ago |
| [gofigure](https://github.com/ian-kent/gofigure) | 66 | Go configuration made easy! | 4 years ago |
| [uconfig](https://github.com/omeid/uconfig) | 62 | Lightweight, zero-dependency, and extendable configuration management library for Go | 6 months ago |
| [hocon](https://github.com/gurkankaymak/hocon) | 60 | go implementation of lightbend's HOCON configuration library https://github.com/lightbend/config | 5 months ago |
| [configure](https://github.com/paked/configure) | 57 | Configure is a Go package that gives you easy configuration of your project through redundancy | 4 years ago |
| [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) | 54 | Go package that interfaces with AWS System Manager | a year ago |
| [gone](https://github.com/One-com/gone) | 46 | Golang packages for writing small daemons and servers. | 2 years ago |
| [go-up](https://github.com/ufoscout/go-up) | 42 | go-up! A simple configuration library with recursive placeholders resolution and no magic. | 3 years ago |
| [ingo](https://github.com/schachmat/ingo) | 36 | persistent storage for flags in go | 6 years ago |
| [mini](https://github.com/sasbury/mini) | 34 | A golang package for parsing ini-style configuration files | 5 years ago |
| [genv](https://github.com/sakirsensoy/genv) | 33 | Genv is a library for Go (golang) that makes it easy to read and use environment variables in your projects. It also allows environment variables to be loaded from the .env file. | 4 years ago |
| [conflate](https://github.com/the4thamigo-uk/conflate) | 27 | Library providing routines to merge and validate JSON, YAML and/or TOML files | 3 years ago |
| [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) | 17 | Go utility for loading configuration parameters from AWS SSM (Parameter Store) | 9 months ago |
| [ini](https://github.com/wlevene/ini) | 12 | ini parser for golang | 2 years ago |
| [envconf](https://github.com/ian-kent/envconf) | 11 | Configure Go applications from the environment | 9 years ago |
| [env](https://github.com/nasermirzaei89/env) | 10 | Golang Get Environment Variables Package | 8 months ago |
| [go-ini](https://github.com/subpop/go-ini) | 9 | automatic mirror of https://git.sr.ht/~spc/go-ini | 2 years ago |
| [typenv](https://github.com/diegomarangoni/typenv) | 9 | Go minimalist typed environment variables library | 6 months ago |
| [go-conf](https://github.com/ThomasObenaus/go-conf) | 8 | Library for easy configuration of a golang service | 2 years ago |
| [swap](https://github.com/oblq/swap) | 8 | Instantiate/configure structs recursively, based on build environment. (YAML, TOML, JSON and env). | 2 years ago |
| [gonfig](https://github.com/miladabc/gonfig) | 6 | Tag based configuration loader from different providers | 2 years ago |
| [config](https://github.com/crgimenes/config) | 3 | Configuration loader to use in Go projects | 4 months ago |


### [Continuous Integration](#Continuous-Integration)
* Tools for help with continuous integration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [drone](https://github.com/harness/drone) | 27041 | Drone is a Container-Native, Continuous Delivery Platform | 12 hours ago |
| [cds](https://github.com/ovh/cds) | 4234 | Enterprise-Grade Continuous Delivery & DevOps Automation Open Source Platform | 10 hours ago |
| [goveralls](https://github.com/mattn/goveralls) | 762 |  | 2 months ago |
| [gotestfmt](https://github.com/GoTestTools/gotestfmt) | 393 | go test output for humans | a month ago |
| [overalls](https://github.com/go-playground/overalls) | 112 | :jeans:Multi-Package go project coverprofile for tools like goveralls | 4 years ago |
| [duci](https://github.com/duck8823/duci) | 74 | The simple ci server  | 4 months ago |
| [gomason](https://github.com/nikogura/gomason) | 57 | A tool for testing, building, signing, and publishing binaries. | 6 months ago |
| [roveralls](https://github.com/lawrencewoodman/roveralls) | 19 | A Go recursive coverage testing tool | 6 years ago |


### [CSS Preprocessors](#CSS-Preprocessors)
* Libraries for preprocessing CSS files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gcss](https://github.com/yosssi/gcss) | 480 | Pure Go CSS Preprocessor | 9 years ago |
| [go-libsass](https://github.com/wellington/go-libsass) | 194 | Go wrapper for libsass, the only Sass 3.5 compiler for Go | 4 months ago |


### [Data Structures](#Data-Structures)
* Generic datastructures and algorithms in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gods](https://github.com/emirpasic/gods) | 13974 | GoDS (Go Data Structures) - Sets, Lists, Stacks, Maps, Trees, Queues, and much more | 3 months ago |
| [go-datastructures](https://github.com/Workiva/go-datastructures) | 7100 | A collection of useful, performant, and threadsafe Go datastructures. | 15 days ago |
| [golang-set](https://github.com/deckarep/golang-set) | 3349 | A simple, battle-tested and generic set type for the Go language. Trusted by Docker, 1Password, Ethereum and Hashicorp. | 8 days ago |
| [gota](https://github.com/go-gota/gota) | 2696 | Gota: DataFrames and data wrangling in Go (Golang) | 5 months ago |
| [roaring](https://github.com/RoaringBitmap/roaring) | 2067 | Roaring bitmaps in Go (golang) | 3 days ago |
| [bloom](https://github.com/bits-and-blooms/bloom) | 1983 | Go package implementing Bloom filters | 13 days ago |
| [gocache](https://github.com/eko/gocache) | 1866 | ☔️ A complete Go cache library that brings you multiple ways of managing your caches | 4 days ago |
| [BoomFilters](https://github.com/tylertreat/BoomFilters) | 1544 | Probabilistic data structures for processing continuous, unbounded streams. | 2 years ago |
| [bitset](https://github.com/bits-and-blooms/bitset) | 1130 | Go package implementing bitsets | 13 days ago |
| [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) | 994 | Cuckoo Filter: Practically Better Than Bloom | a year ago |
| [gostl](https://github.com/liyue201/gostl) | 881 | Data structure and algorithm library for go, designed to provide functions similar to C++ STL | 11 days ago |
| [hyperloglog](https://github.com/axiomhq/hyperloglog) | 863 | HyperLogLog with lots of sugar (Sparse, LogLog-Beta bias correction and TailCut space reduction) brought to you by Axiom | 2 months ago |
| [algorithms](https://github.com/shady831213/algorithms) | 724 | CLRS study. Codes are written with golang. | 2 years ago |
| [ttlcache](https://github.com/jellydator/ttlcache) | 667 | An in-memory cache with item expiration and generics | 12 days ago |
| [trie](https://github.com/derekparker/trie) | 649 | Data structure and relevant algorithms for extremely fast prefix/fuzzy string searching. | 7 months ago |
| [deque](https://github.com/gammazero/deque) | 464 | Fast ring-buffer deque (double-ended queue) | 5 months ago |
| [merkletree](https://github.com/cbergoon/merkletree) | 440 | A Merkle Tree implementation written in Go. | 5 months ago |
| [go-edlib](https://github.com/hbollon/go-edlib) | 392 | 📚 String comparison and edit distance algorithms library, featuring : Levenshtein, LCS, Hamming, Damerau levenshtein (OSA and Adjacent transpositions algorithms), Jaro-Winkler, Cosine, etc... | a year ago |
| [go-geoindex](https://github.com/hailocab/go-geoindex) | 351 | Go native library for fast point tracking and K-Nearest queries | 5 years ago |
| [levenshtein](https://github.com/agnivade/levenshtein) | 293 | Go implementation to calculate Levenshtein Distance. | 5 months ago |
| [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) | 290 | Adaptive Radix Trees implemented in Go | 6 months ago |
| [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) | 284 | Go concurrent-safe, goroutine-safe, thread-safe queue | 2 months ago |
| [hilbert](https://github.com/google/hilbert) | 263 | Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves. | 10 months ago |
| [cuckoo-filter](https://github.com/linvon/cuckoo-filter) | 259 | Cuckoo Filter go implement, better than Bloom Filter, configurable and space optimized  布谷鸟过滤器的Go实现，优于布隆过滤器，可以定制化过滤器参数，并进行了空间优化 | a year ago |
| [skiplist](https://github.com/MauriceGit/skiplist) | 253 | A Go library for an efficient implementation of a skip list: https://godoc.org/github.com/MauriceGit/skiplist | 5 months ago |
| [goskiplist](https://github.com/ryszard/goskiplist) | 237 | A skip list implementation in Go | 4 years ago |
| [bitmap](https://github.com/kelindar/bitmap) | 221 | Simple dense bitmap index in Go with binary operators | 9 days ago |
| [binpacker](https://github.com/zhuangsirui/binpacker) | 208 | A binary stream packer and unpacker | 2 years ago |
| [iter](https://github.com/disksing/iter) | 178 | Go implementation of C++ STL iterators and algorithms. | a year ago |
| [bit](https://github.com/yourbasic/bit) | 149 | Bitset data structure | 6 months ago |
| [bloom](https://github.com/zentures/bloom) | 148 | Bloom filters implemented in Go. | 5 years ago |
| [deque](https://github.com/edwingeng/deque) | 132 | A highly optimized double-ended queue | 8 months ago |
| [encoding](https://github.com/zentures/encoding) | 130 | Integer Compression Libraries for Go | 6 years ago |
| [remember-go](https://github.com/rocketlaunchr/remember-go) | 130 | Cache Slow Database Queries | 2 years ago |
| [ring](https://github.com/tannerryan/ring) | 130 | Package ring provides a high performance and thread safe Go implementation of a bloom filter. | 3 years ago |
| [go-rquad](https://github.com/arl/go-rquad) | 126 | :pushpin: State of the art point location and neighbour finding algorithms for region quadtrees, in Go | a year ago |
| [conjungo](https://github.com/InVisionApp/conjungo) | 115 | A small flexible merge library in go | 2 months ago |
| [crunch](https://github.com/superwhiskers/crunch) | 87 | take bytes out of things easily ✨🍪 | 6 months ago |
| [go-mcache](https://github.com/OrlovEvgeny/go-mcache) | 87 | Fast in-memory key:value store/cache with TTL | 3 years ago |
| [skiplist](https://github.com/gansidui/skiplist) | 82 | skiplist for golang | 9 years ago |
| [bloom](https://github.com/yourbasic/bloom) | 78 | Probabilistic set data structure | 6 years ago |
| [levenshtein](https://github.com/agext/levenshtein) | 77 | Levenshtein distance and similarity metrics with customizable edit costs and Winkler-like bonus for common prefix. | 3 years ago |
| [nan](https://github.com/kak-tus/nan) | 75 | Zero allocation Nullable structures in one library with handy conversion functions, marshallers and unmarshallers | 5 days ago |
| [count-min-log](https://github.com/seiflotfy/count-min-log) | 62 | Go implementation of Count-Min-Log | 6 years ago |
| [timedmap](https://github.com/zekroTJA/timedmap) | 62 | A thread safe map which has expiring key-value pairs. | 4 months ago |
| [cmap](https://github.com/lrita/cmap) | 58 | a thread-safe concurrent map for go | 7 months ago |
| [hide](https://github.com/emvi/hide) | 54 | ID type with marshalling to/from hash to prevent sending IDs to clients. | 2 years ago |
| [goset](https://github.com/zoumo/goset) | 51 | Set is a useful collection but there is no built-in implementation in Go lang. | 3 years ago |
| [concurrent-writer](https://github.com/free/concurrent-writer) | 49 | Highly concurrent drop-in replacement for bufio.Writer | 6 years ago |
| [pipeline](https://github.com/hyfather/pipeline) | 48 | Pipelines using goroutines | 2 years ago |
| [typ](https://github.com/gurukami/typ) | 43 | Null Types, Safe primitive type conversion and fetching value from complex structures. | 2 years ago |
| [dict](https://github.com/srfrog/dict) | 39 | Python-like dictionaries for Go | 3 years ago |
| [ptrie](https://github.com/viant/ptrie) | 33 | A prefix tree implementation in go  | a year ago |
| [null](https://github.com/emvi/null) | 31 | Nullable Go types that can be marshalled/unmarshalled to/from JSON. | 2 years ago |
| [go-ef](https://github.com/amallia/go-ef) | 30 | A Go implementation of the Elias-Fano encoding | 6 years ago |
| [mspm](https://github.com/BlackRabbitt/mspm) | 24 | Multi-String Pattern Matching Algorithm Using TrieNode | 5 years ago |
| [parapipe](https://github.com/nazar256/parapipe) | 23 | Paralleling pipeline | 2 years ago |
| [set](https://github.com/StudioSol/set) | 23 | A simple Set data structure implementation in Go (Golang) using LinkedHashMap. | 10 months ago |
| [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) | 22 | Ordered-concurrently a library for concurrent processing with ordered output in Go. Process work concurrently and returns output in a channel in the order of input. It is useful in concurrently processing items in a queue, and get output in the order provided by the queue. | 3 months ago |
| [treap](https://github.com/perdata/treap) | 22 | golang persistent immutable treap sorted sets | 4 years ago |
| [gofal](https://github.com/xxjwxc/gofal) | 17 | fractional api base on golang . golang math tools fractional molecular denominator 分数计算 分子 分母 运算 | 4 years ago |
| [goterator](https://github.com/yaa110/goterator) | 14 | Lazy iterator implementation for Golang | 3 years ago |
| [hashsplit](https://github.com/bobg/hashsplit) | 14 |  | 2 years ago |
| [bloomfilter](https://github.com/OldPanda/bloomfilter) | 13 | Yet another Bloomfilter implementation in Go, compatible with Java's Guava library | 5 months ago |
| [slices](https://github.com/srfrog/slices) | 13 | Functions that operate on slices. Similar to functions from package strings or package bytes that have been adapted to work with slices. | 3 years ago |
| [dsu](https://github.com/ihebu/dsu) | 11 | Disjoint Set data structure implementation in Go | a year ago |
| [gdcache](https://github.com/ulovecode/gdcache) | 10 | gdcache is a pure non-intrusive cache library implemented by golang, you can use it to implement your own cache. | 2 years ago |
| [merkle](https://github.com/bobg/merkle) | 10 | Merkle hash trees | a year ago |
| [parsefields](https://github.com/MonaxGT/parsefields) | 7 | Tools for parse JSON-like logs for collecting unique fields and events | 4 years ago |


### [Database](#Database)
* Databases in Go.

#### [Databases implemented in Go](#Databases-implemented-in-Go)
* Databases implemented in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [prometheus](https://github.com/prometheus/prometheus) | 48952 | The Prometheus monitoring system and time series database. | 12 minutes ago |
| [tidb](https://github.com/pingcap/tidb) | 34379 | TiDB is an open-source, cloud-native, distributed, MySQL-Compatible database for elastic scale and real-time analytics. Try AI-powered Chat2Query free at : https://tidbcloud.com/free-trial | 17 minutes ago |
| [leveldb](https://github.com/google/leveldb) | 33036 | LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values. | 19 hours ago |
| [cockroach](https://github.com/cockroachdb/cockroach) | 27404 | CockroachDB - the open source, cloud-native distributed SQL database. | 3 minutes ago |
| [influxdb](https://github.com/influxdata/influxdb) | 25777 | Scalable datastore for metrics, events, and real-time analytics | 10 days ago |
| [milvus](https://github.com/milvus-io/milvus) | 21085 | A cloud-native vector database, storage for next generation AI applications | an hour ago |
| [dgraph](https://github.com/dgraph-io/dgraph) | 19431 | Native GraphQL Database with graph backend | 12 hours ago |
| [rqlite](https://github.com/rqlite/rqlite) | 13838 | The lightweight, distributed relational database built on SQLite | 12 hours ago |
| [badger](https://github.com/dgraph-io/badger) | 12451 | Fast key-value DB in Go. | 5 days ago |
| [groupcache](https://github.com/golang/groupcache) | 12178 | groupcache is a caching and cache-filling library, intended as a replacement for memcached in many cases. | 4 months ago |
| [dtm](https://github.com/dtm-labs/dtm) | 8871 | A distributed transaction framework, supports workflow, saga, tcc, xa, 2-phase message, outbox patterns, supports many languages. | 10 days ago |
| [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) | 8858 | VictoriaMetrics: fast, cost-effective monitoring solution and time series database | 4 hours ago |
| [immudb](https://github.com/codenotary/immudb) | 8299 | immudb - immutable database based on zero trust, SQL/Key-Value/Document model, tamperproof, data change history | 4 days ago |
| [go-cache](https://github.com/patrickmn/go-cache) | 7236 | An in-memory key:value store/cache (similar to Memcached) library for Go, suitable for single-machine applications. | 6 months ago |
| [bbolt](https://github.com/etcd-io/bbolt) | 6691 | An embedded key/value database for Go. | 11 hours ago |
| [bigcache](https://github.com/allegro/bigcache) | 6624 | Efficient cache for gigabytes of data written in Go. | 8 days ago |
| [goleveldb](https://github.com/syndtr/goleveldb) | 5776 | LevelDB key/value database in Go. | 4 days ago |
| [buntdb](https://github.com/tidwall/buntdb) | 4154 | BuntDB is an embeddable, in-memory key/value database for Go with custom indexing and geospatial support | 21 days ago |
| [ledisdb](https://github.com/ledisdb/ledisdb) | 3981 | A high performance NoSQL Database Server powered by Go | 17 days ago |
| [rosedb](https://github.com/rosedblabs/rosedb) | 3843 | Lightweight, fast and reliable key/value storage engine based on Bitcask. | 8 days ago |
| [nutsdb](https://github.com/nutsdb/nutsdb) | 2924 | A simple, fast, embeddable, persistent key/value store written in pure Go. It supports fully serializable transactions and many data structures such as  list, set, sorted set. | 2 days ago |
| [godis](https://github.com/HDT3213/godis) | 2878 | A Golang implemented Redis Server and Cluster. Go 语言实现的 Redis 服务器和分布式集群 | 4 days ago |
| [tiedot](https://github.com/HouzuoGuo/tiedot) | 2720 | A rudimentary implementation of a basic document (NoSQL) database in Go | 2 years ago |
| [gcache](https://github.com/bluele/gcache) | 2388 | An in-memory cache library for golang. It supports multiple eviction policies: LRU, LFU, ARC | 7 months ago |
| [cache2go](https://github.com/muesli/cache2go) | 1994 | Concurrency-safe Go caching library with expiration capabilities and access counters | 3 months ago |
| [fastcache](https://github.com/VictoriaMetrics/fastcache) | 1775 | Fast thread-safe inmemory cache for big number of entries in Go. Minimizes GC overhead | 5 months ago |
| [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) | 1434 | A decentralized, trusted, high performance, SQL database with blockchain features | 5 months ago |
| [diskv](https://github.com/peterbourgon/diskv) | 1291 | A disk-backed key-value store. | 2 years ago |
| [column](https://github.com/kelindar/column) | 1223 | High-performance, columnar, in-memory store with bitmap indexing in Go | 7 days ago |
| [databunker](https://github.com/securitybunker/databunker) | 1100 | Secure SDK/vault for personal records/PII built to comply with GDPR | 8 days ago |
| [pogreb](https://github.com/akrylysov/pogreb) | 1054 | Embedded key-value store for read-heavy workloads written in Go | 8 months ago |
| [eliasdb](https://github.com/krotik/eliasdb) | 971 | EliasDB a graph-based database. | a year ago |
| [moss](https://github.com/couchbase/moss) | 927 | moss - a simple, fast, ordered, persistable, key-val storage library for golang | a year ago |
| [levigo](https://github.com/jmhodges/levigo) | 417 | levigo is a Go wrapper for LevelDB | a year ago |
| [pudge](https://github.com/recoilme/pudge) | 343 | Fast and simple key/value store written using Go's standard library | 2 years ago |
| [kivik](https://github.com/go-kivik/kivik) | 274 | Kivik provides a common interface to CouchDB or CouchDB-like databases for Go and GopherJS. | a month ago |
| [vasto](https://github.com/chrislusf/vasto) | 250 | A distributed key-value store. On Disk. Able to grow or shrink without service interruption. | 4 years ago |
| [piladb](https://github.com/fern4lvarez/piladb) | 200 | Lightweight RESTful database engine based on stack data structures | 3 years ago |
| [golang-scribble](https://github.com/nanobox-io/golang-scribble) | 163 | A tiny Golang JSON database | 4 years ago |
| [cache](https://github.com/akyoto/cache) | 135 | :handbag: Cache arbitrary data with an expiration time. | 8 months ago |
| [bcache](https://github.com/iwanbk/bcache) | 122 | Eventually consistent distributed in-memory  cache Go library | 6 months ago |
| [unitdb](https://github.com/unit-io/unitdb) | 108 | Fast specialized time-series database for IoT, real-time internet connected devices and AI analytics. | 4 months ago |
| [slowpoke](https://github.com/recoilme/slowpoke) | 100 | Low-level key/value store in pure Go.  | 4 years ago |
| [hare](https://github.com/jameycribbs/hare) | 77 | Hare is a nimble little database management system for Go. | 2 years ago |
| [couchcache](https://github.com/codingsince1985/couchcache) | 60 | A RESTful caching micro-service in Go backed by Couchbase | 7 months ago |
| [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) | 43 | golang bigcache with clustering as a library. | 5 years ago |
| [coffer](https://github.com/claygod/coffer) | 33 | Simply ACID* key-value database. At the medium or even low latency it tries to provide greater throughput without losing the ACID properties of the database. The database provides the ability to create record headers at own discretion and use them as transactions. The maximum size of stored data is limited by the size of the computer's RAM. | 3 months ago |
| [tempdb](https://github.com/rafaeljesus/tempdb) | 17 | Key-value store for temporary items :memo: | 5 years ago |
| [ttlcache](https://github.com/cheshir/ttlcache) | 9 | Simple in-memory key-value storage with TTL for each record. | 9 months ago |


#### [Database schema migration](#Database-schema-migration)
* Database schema migration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [migrate](https://github.com/golang-migrate/migrate) | 11796 | Database migrations. CLI and Golang library. | 4 days ago |
| [goose](https://github.com/pressly/goose) | 4094 | A database migration tool. Supports SQL migrations and Go functions.  | 6 hours ago |
| [sql-migrate](https://github.com/rubenv/sql-migrate) | 2877 | SQL schema migration tool for Go. | 17 days ago |
| [pop](https://github.com/gobuffalo/pop) | 1343 | A Tasty Treat For All Your Database Needs | a month ago |
| [skeema](https://github.com/skeema/skeema) | 1157 | Declarative pure-SQL schema management for MySQL and MariaDB | 3 days ago |
| [gormigrate](https://github.com/go-gormigrate/gormigrate) | 915 | Minimalistic database migration helper for Gorm ORM | 10 days ago |
| [goavro](https://github.com/linkedin/goavro) | 895 |  | a month ago |
| [migrator](https://github.com/lopezator/migrator) | 153 | Dead simple Go database migration library. | 4 months ago |
| [darwin](https://github.com/GuiaBolso/darwin) | 135 | Database schema evolution library for Go | 5 months ago |
| [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) | 83 | A Go package to help write migrations with go-pg/pg. | 5 months ago |
| [sqlize](https://github.com/sunary/sqlize) | 63 | sql migration schema generate from models | a month ago |
| [avro](https://github.com/khezen/avro) | 43 | Apache AVRO for go | a year ago |
| [go-fixtures](https://github.com/RichardKnop/go-fixtures) | 29 | Django style fixtures for Golang's excellent built-in database/sql library. | 4 years ago |
| [pravasan](https://github.com/pravasan/pravasan) | 29 | Simple Migration Tool - written in Go | 5 years ago |
| [schema](https://github.com/adlio/schema) | 28 | Embedded schema migration package for Go | 3 months ago |
| [migrator](https://github.com/larapulse/migrator) | 24 | MySQL database migrator | a year ago |
| [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) | 10 | CLI-friendly package for pg migrations management. | 7 months ago |


#### [Database tools.](#Database-tools)
* Database-tools.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vitess](https://github.com/vitessio/vitess) | 16476 | Vitess is a database clustering system for horizontal scaling of MySQL. | 25 minutes ago |
| [pgweb](https://github.com/sosedoff/pgweb) | 7952 | Cross-platform client for PostgreSQL databases | 23 days ago |
| [kingshard](https://github.com/flike/kingshard) | 6217 | A high-performance MySQL proxy | 2 years ago |
| [orchestrator](https://github.com/openark/orchestrator) | 5060 | MySQL replication topology management and HA | a month ago |
| [go-mysql](https://github.com/go-mysql-org/go-mysql) | 4128 | a powerful mysql toolset with Go | 10 days ago |
| [go-mysql-elasticsearch](https://github.com/go-mysql-org/go-mysql-elasticsearch) | 3976 | Sync MySQL data into elasticsearch  | a year ago |
| [prest](https://github.com/prest/prest) | 3845 | PostgreSQL ➕ REST, low-code, simplify and accelerate development, ⚡ instant, realtime, high-performance on any Postgres application, existing or new | 24 days ago |
| [chproxy](https://github.com/ContentSquare/chproxy) | 1117 | Open-Source ClickHouse http proxy and load balancer | 17 days ago |
| [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) | 890 | pg_timetable: Advanced scheduling for PostgreSQL | 5 days ago |
| [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) | 423 | Collects many small inserts to ClickHouse and send in big inserts | 5 days ago |
| [myreplication](https://github.com/2tvenom/myreplication) | 190 | Golang MySql binary log replication listener | 5 years ago |
| [octillery](https://github.com/blastrain/octillery) | 183 | Go package for sharding databases ( Supports every ORM or raw SQL ) | 2 years ago |
| [dbbench](https://github.com/sj14/dbbench) | 86 | 🏋️ dbbench is a simple database benchmarking tool which supports several databases and own scripts | 5 days ago |
| [datagen](https://github.com/codingconcepts/datagen) | 56 | A fast data generator that's multi-table aware and supports multi-row DML. | a month ago |
| [prep](https://github.com/hexdigest/prep) | 33 | Prep finds all SQL statements in a Go package and instruments db connection with prepared statements | 6 years ago |
| [rwdb](https://github.com/andizzle/rwdb) | 18 | Database wrapper that manage read write connections | 6 years ago |


#### [SQL query builder](#SQL-query-builder)
* SQL query builder, libraries for building and using SQL.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [squirrel](https://github.com/Masterminds/squirrel) | 5850 | Fluent SQL generation for golang | a month ago |
| [xo](https://github.com/xo/xo) | 3388 | Command line tool to generate idiomatic Go code for SQL databases supporting PostgreSQL, MySQL, SQLite, Oracle, and Microsoft SQL Server | 2 months ago |
| [goqu](https://github.com/doug-martin/goqu) | 1924 | SQL builder and query library for golang | 4 months ago |
| [gendry](https://github.com/didi/gendry) | 1502 | a golang library for sql builder | 2 months ago |
| [jet](https://github.com/go-jet/jet) | 1329 | Type safe SQL builder with code generation and automatic query result data mapping | a month ago |
| [dotsql](https://github.com/qustavo/dotsql) | 676 | A Golang library for using SQL. | a year ago |
| [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) | 602 | A Go (golang) package that enhances the standard database/sql package by providing powerful data retrieval methods as well as DB-agnostic query building capabilities. | 2 months ago |
| [dbq](https://github.com/rocketlaunchr/dbq) | 386 | Zero boilerplate database operations for Go | 2 years ago |
| [sqlingo](https://github.com/lqs/sqlingo) | 323 | 💥 A lightweight DSL & ORM which helps you to write SQL in Go. | 20 days ago |
| [sqrl](https://github.com/elgris/sqrl) | 255 | Fluent SQL generation for golang | a month ago |
| [go-structured-query](https://github.com/bokwoon95/go-structured-query) | 193 | Type safe SQL query builder and struct mapper for Go | 6 months ago |
| [sqlf](https://github.com/leporo/sqlf) | 121 | Fast SQL query builder for Go | 3 months ago |
| [buildsqlx](https://github.com/arthurkushman/buildsqlx) | 109 | Go database query builder library for PostgreSQL | 3 months ago |
| [igor](https://github.com/galeone/igor) | 109 | igor is an abstraction layer for PostgreSQL with a gorm like syntax. | 15 days ago |
| [godbal](https://github.com/xujiajun/godbal) | 58 | Database Abstraction Layer (dbal) for Go. Support SQL builder and get result easily  (now only support mysql) | 4 years ago |
| [gosql](https://github.com/twharmon/gosql) | 30 | SQL query builder for Go | a year ago |
| [qry](https://github.com/HnH/qry) | 29 | Write your SQL queries in raw files with all benefits of modern IDEs, use them in an easy way inside your application with all the profit of compile time constants | 2 years ago |
| [mpath-go](https://github.com/spacetab-io/mpath-go) | 12 | Golang package for MPTT (Modified Preorder Tree Traversal) - materialized path realisation. | 3 years ago |
| [ormlite](https://github.com/pupizoid/ormlite) | 10 | Lightweight package containing some ORM-like features and helpers for sqlite databases. | 5 months ago |


### [Database Drivers](#Database-Drivers)
* Libraries for connecting and operating databases.

#### [Relational Databases](#Relational-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mysql](https://github.com/go-sql-driver/mysql) | 13490 | Go MySQL Driver is a MySQL driver for Go's (golang) database/sql package | 2 days ago |
| [pq](https://github.com/lib/pq) | 8171 | Pure Go Postgres driver for database/sql | 7 hours ago |
| [pgx](https://github.com/jackc/pgx) | 7400 | PostgreSQL driver and toolkit for Go | 4 minutes ago |
| [go-sqlite3](https://github.com/mattn/go-sqlite3) | 6725 | sqlite3 driver for go using database/sql | 12 hours ago |
| [go-mssqldb](https://github.com/denisenkom/go-mssqldb) | 1743 | Microsoft SQL server driver written in go language | a month ago |
| [scany](https://github.com/georgysavva/scany) | 945 | Library for scanning data from a database into Go structs and more | 4 months ago |
| [go-oci8](https://github.com/mattn/go-oci8) | 606 | Oracle driver for Go using database/sql | 2 years ago |
| [godror](https://github.com/godror/godror) | 448 | GO DRiver for ORacle DB | 3 days ago |
| [firebirdsql](https://github.com/nakagami/firebirdsql) | 201 | Firebird RDBMS sql driver for Go (golang) | a month ago |
| [sqinn-go](https://github.com/cvilsmeier/sqinn-go) | 138 | SQLite with pure Go | 2 years ago |
| [go-adodb](https://github.com/mattn/go-adodb) | 132 | Microsoft ActiveX Object DataBase driver for go that using exp/sql | a year ago |
| [calcite-avatica-go](https://github.com/apache/calcite-avatica-go) | 110 | Mirror of Apache Calcite - Avatica Go SQL Driver | 20 days ago |
| [gofreetds](https://github.com/minus5/gofreetds) | 109 | Go Sql Server database driver. | 3 years ago |
| [bgc](https://github.com/viant/bgc) | 20 | Datastore Connectivity for BigQuery in go | 3 years ago |
| [pig](https://github.com/alexeyco/pig) | 13 | Simple pgx wrapper to execute and scan query results | 2 years ago |


#### [NoSQL Databases](#NoSQL-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-redis](https://github.com/redis/go-redis) | 17524 | Redis Go client | 12 hours ago |
| [redigo](https://github.com/gomodule/redigo) | 9562 | Go client for Redis | a month ago |
| [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) | 7500 | The Official Golang driver for MongoDB | 4 hours ago |
| [mgo](https://github.com/globalsign/mgo) | 1961 | The MongoDB driver for Go | 2 years ago |
| [rethinkdb-go](https://github.com/rethinkdb/rethinkdb-go) | 1635 | Go language driver for RethinkDB | a year ago |
| [gomemcache](https://github.com/bradfitz/gomemcache) | 1619 | Go Memcached client library #golang | a month ago |
| [qmgo](https://github.com/qiniu/qmgo) | 1153 | Qmgo - The Go driver for MongoDB. It‘s based on official mongo-go-driver but easier to use like Mgo. | 6 days ago |
| [mgm](https://github.com/Kamva/mgm) | 670 | Mongo Go Models (mgm) is a fast and simple MongoDB ODM for Go (based on official Mongo Go Driver) | 5 months ago |
| [redeo](https://github.com/bsm/redeo) | 424 | High-performance framework for building redis-protocol compatible TCP servers/services | 6 months ago |
| [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) | 410 | Aerospike Client Go  | 11 hours ago |
| [neoism](https://github.com/jmcvetta/neoism) | 389 | Neo4j client for Golang | 3 years ago |
| [gocb](https://github.com/couchbase/gocb) | 342 | The Couchbase Go SDK | 12 days ago |
| [go-rejson](https://github.com/nitishm/go-rejson) | 317 | Golang client for redislabs' ReJSON module with support for multilple redis clients (redigo, go-redis) | 3 months ago |
| [go-couchbase](https://github.com/couchbase/go-couchbase) | 314 | Couchbase client in Go | 7 months ago |
| [godis](https://github.com/piaohao/godis) | 109 | redis client implement by golang, inspired by jedis. | 3 years ago |
| [Neo4j-GO](https://github.com/davemeehan/Neo4j-GO) | 76 | Neo4j REST Client in golang | 5 years ago |
| [arangolite](https://github.com/solher/arangolite) | 73 | Lightweight Golang driver for ArangoDB | 2 years ago |
| [go-pilosa](https://github.com/FeatureBaseDB/go-pilosa) | 58 | Go client library for Pilosa | 9 months ago |
| [goforestdb](https://github.com/couchbase/goforestdb) | 33 | Go bindings for ForestDB | 7 years ago |
| [goriak](https://github.com/zegl/goriak) | 30 | goriak - Go language driver for Riak KV | 2 years ago |
| [neo4j](https://github.com/cihangir/neo4j) | 27 | Neo4j Rest API Client for Go lang | 8 years ago |
| [xredis](https://github.com/shomali11/xredis) | 19 | Go Redis Client | 4 years ago |
| [gocosmos](https://github.com/btnguyen2k/gocosmos) | 17 | Go database/sql driver for Azure Cosmos DB SQL API | 24 days ago |
| [godscache](https://github.com/defcronyke/godscache) | 11 | An unofficial Google Cloud Platform Go Datastore wrapper that adds caching using memcached. For App Engine Flexible, Compute Engine, Kubernetes Engine, and more. | 4 years ago |
| [asc](https://github.com/viant/asc) | 9 | Datastore Connectivity for Aerospike for go | 4 years ago |


#### [Search and Analytic Databases](#Search-and-Analytic-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bleve](https://github.com/blevesearch/bleve) | 9142 | A modern text indexing library for go | 2 days ago |
| [elastic](https://github.com/olivere/elastic) | 7183 | Deprecated: Use the official Elasticsearch client for Go at https://github.com/elastic/go-elasticsearch | a month ago |
| [riot](https://github.com/go-ego/riot) | 6096 | Go Open Source, Distributed, Simple and efficient Search Engine; Warning: This is V1 and beta version, because of big memory consume, and the V2 will be rewrite all code. | 3 years ago |
| [go-elasticsearch](https://github.com/elastic/go-elasticsearch) | 5030 | The official Go client for Elasticsearch | 2 days ago |
| [elasticsql](https://github.com/cch123/elasticsql) | 1063 | convert sql to elasticsearch DSL in golang(go) | a year ago |
| [elastigo](https://github.com/mattbaird/elastigo) | 950 | A Go (golang) based Elasticsearch client library. | 4 years ago |
| [skizze](https://github.com/seiflotfy/skizze) | 88 | A probabilistic data structure service and storage | 7 years ago |
| [goes](https://github.com/OwnLocal/goes) | 29 | A library to interact with Elasticsearch in Go! | 3 years ago |


#### [Multiple Backends](#Multiple-Backends)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cayley](https://github.com/cayleygraph/cayley) | 14597 | An open-source graph database | 7 days ago |
| [gokv](https://github.com/philippgille/gokv) | 564 | Simple key-value store abstraction and implementations for Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB and many more) | 5 months ago |
| [cachego](https://github.com/faabiosr/cachego) | 280 | Golang Cache component - Multiple drivers | 18 days ago |
| [dsc](https://github.com/viant/dsc) | 26 | Datastore Connectivity in go | a month ago |


### [Date and Time](#Date-and-Time)
* Libraries for working with dates and times.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [now](https://github.com/jinzhu/now) | 4174 | Now is a time toolkit for golang | 2 months ago |
| [carbon](https://github.com/golang-module/carbon) | 3317 | A simple, semantic and developer-friendly golang package for datetime | 2 months ago |
| [dateparse](https://github.com/araddon/dateparse) | 1879 | GoLang Parse many date strings without knowing format in advance. | 5 months ago |
| [carbon](https://github.com/uniplaces/carbon) | 761 | Carbon for Golang, an extension for Time | a year ago |
| [durafmt](https://github.com/hako/durafmt) | 462 | :clock8:  Better time duration formatting in Go!  | 2 years ago |
| [timeutil](https://github.com/leekchan/timeutil) | 192 | timeutil - useful extensions (Timedelta, Strftime, ...) to the golang's time package | 4 years ago |
| [gostradamus](https://github.com/bykof/gostradamus) | 181 | Gostradamus: Better DateTimes for Go 🕰️ | 7 months ago |
| [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) | 161 | The implementation of Persian (Solar Hijri) Calendar in Go | 2 months ago |
| [iso8601](https://github.com/relvacode/iso8601) | 125 | A fast ISO8601 date parser for Go | 15 days ago |
| [date](https://github.com/rickb777/date) | 112 | A Go package for working with dates | 6 days ago |
| [timespan](https://github.com/SaidinWoT/timespan) | 82 | Golang package to manipulate time intervals. | 4 years ago |
| [go-str2duration](https://github.com/xhit/go-str2duration) | 74 | Convert string to duration in golang | 7 months ago |
| [go-sunrise](https://github.com/nathan-osman/go-sunrise) | 72 | Go package for calculating the sunrise and sunset times for a given location | 2 months ago |
| [feiertage](https://github.com/wlbr/feiertage) | 43 | Gesetzliche Feiertage und mehr in Deutschland und Österreich (Bank holidays/public holidays in Austria and Germany) | 9 months ago |
| [kair](https://github.com/GuilhermeCaruso/kair) | 25 | :clock1: Date and Time - Golang Formatting Library | 3 years ago |
| [cronrange](https://github.com/1set/cronrange) | 18 | time range expression in cron style | 10 months ago |
| [nulltime](https://github.com/kirillDanshin/nulltime) | 14 |  | 6 years ago |
| [strftime](https://github.com/awoodbeck/strftime) | 12 | C99-compatible strftime formatter for use with Go time.Time instances. | 5 years ago |
| [tuesday](https://github.com/osteele/tuesday) | 12 | Ruby-compatible strftime for golang | 2 years ago |
| [go-week](https://github.com/stoewer/go-week) | 8 | A Go package to work with ISO 8601 week dates | 2 years ago |


### [Distributed Systems](#Distributed-Systems)
* Packages that help with building Distributed Systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [etcd](https://github.com/etcd-io/etcd) | 43922 | Distributed reliable key-value store for the most critical data of a distributed system | 6 hours ago |
| [kit](https://github.com/go-kit/kit) | 25163 | A standard library for microservices. | a month ago |
| [go-zero](https://github.com/zeromicro/go-zero) | 24817 | A cloud-native Go microservices framework with cli tool for productivity. | 16 hours ago |
| [kratos](https://github.com/go-kratos/kratos) | 20962 | Your ultimate Go microservices framework for the cloud-native era. | 7 hours ago |
| [go-micro](https://github.com/go-micro/go-micro) | 20621 | A Go microservices framework | a month ago |
| [grpc-go](https://github.com/grpc/grpc-go) | 18429 | The Go language implementation of gRPC. HTTP/2 based RPC | 2 hours ago |
| [nats-server](https://github.com/nats-io/nats-server) | 13018 | High-Performance server for NATS.io, the cloud and edge native messaging system. | 4 hours ago |
| [micro](https://github.com/micro/micro) | 11798 | API first development platform | 14 hours ago |
| [libzmq](https://github.com/zeromq/libzmq) | 8615 | ZeroMQ core engine in C++, implements ZMTP/3.1 | 20 days ago |
| [rpcx](https://github.com/smallnest/rpcx) | 7654 | Best microservices framework in Go, like alibaba Dubbo, but with more features, Scale easily. Try it. Test it. If you feel it's better, use it! 𝐉𝐚𝐯𝐚有𝐝𝐮𝐛𝐛𝐨, 𝐆𝐨𝐥𝐚𝐧𝐠有𝐫𝐩𝐜𝐱! build for cloud! | 2 days ago |
| [raft](https://github.com/hashicorp/raft) | 7241 | Golang implementation of the Raft consensus protocol | 10 hours ago |
| [lura](https://github.com/luraproject/lura) | 5630 | Ultra performant API Gateway with middlewares. A project hosted at The Linux Foundation | 8 hours ago |
| [torrent](https://github.com/anacrolix/torrent) | 4840 | Full-featured BitTorrent client package and utilities | a day ago |
| [dragonboat](https://github.com/lni/dragonboat) | 4659 | A feature complete and high performance multi-group Raft library in Go.   | 2 days ago |
| [emitter](https://github.com/emitter-io/emitter) | 3578 | High performance, distributed and low latency publish-subscribe platform. | a day ago |
| [gleam](https://github.com/chrislusf/gleam) | 3221 | Fast, efficient, and scalable distributed map/reduce system, DAG execution, in memory or on disk, written in pure Go, runs standalone or distributedly. | 2 years ago |
| [glow](https://github.com/chrislusf/glow) | 3142 | Glow is an easy-to-use distributed computation system written in Go, similar to Hadoop Map Reduce, Spark, Flink, Storm, etc. I am also working on another similar pure Go system, https://github.com/chrislusf/gleam , which is more flexible and more performant. | 5 years ago |
| [liftbridge](https://github.com/liftbridge-io/liftbridge) | 2460 | Lightweight, fault-tolerant message streams. | 5 months ago |
| [hprose-golang](https://github.com/hprose/hprose-golang) | 1237 | Hprose is a cross-language RPC. This project is Hprose for Golang. | 5 months ago |
| [go-doudou](https://github.com/unionj-cloud/go-doudou) | 1199 | go-doudou（doudou pronounce /dəudəu/）is OpenAPI 3.0 (for REST) spec and Protobuf v3 (for grpc) based lightweight microservice framework. It supports monolith service application as well. | 5 hours ago |
| [redislock](https://github.com/bsm/redislock) | 1057 | Simplified distributed locking implementation using Redis | 2 months ago |
| [rain](https://github.com/cenkalti/rain) | 848 | 🌧 BitTorrent client and library in Go | 5 hours ago |
| [ringpop-go](https://github.com/uber/ringpop-go) | 785 | Scalable, fault-tolerant application-layer sharding for Go applications | 4 months ago |
| [arpc](https://github.com/lesismal/arpc) | 771 | More effective network communication, two-way calling, notify and broadcast supported. | a month ago |
| [go-health](https://github.com/InVisionApp/go-health) | 687 | Library for enabling asynchronous health checks in your service | 2 months ago |
| [gorpc](https://github.com/valyala/gorpc) | 680 | Simple, fast and scalable golang rpc library for high load | 9 months ago |
| [consistent](https://github.com/buraksezer/consistent) | 601 | Consistent hashing with bounded loads in Golang | 7 months ago |
| [go-sundheit](https://github.com/AppsFlyer/go-sundheit) | 513 | A library built to provide support for defining service health for golang services. It allows you to register async health checks for your dependencies and the service itself, provides a health endpoint that exposes their status, and health metrics. | 2 months ago |
| [digota](https://github.com/digota/digota) | 477 | ecommerce microservice | 2 years ago |
| [sleuth](https://github.com/ursiform/sleuth) | 366 | A Go library for master-less peer-to-peer autodiscovery and RPC between HTTP services | 2 days ago |
| [go-jump](https://github.com/dgryski/go-jump) | 365 | go-jump: Jump consistent hashing | 2 years ago |
| [jsonrpc](https://github.com/ybbus/jsonrpc) | 277 | A simple go implementation of json rpc 2.0 client over http | 4 months ago |
| [dht](https://github.com/anacrolix/dht) | 266 | dht is used by anacrolix/torrent, and is intended for use as a library in other projects both torrent related and otherwise | 3 months ago |
| [jsonrpc](https://github.com/osamingo/jsonrpc) | 179 | The jsonrpc package helps implement of JSON-RPC 2.0 | 2 months ago |
| [outboxer](https://github.com/italolelis/outboxer) | 135 | A library that implements the outboxer pattern in go | 14 hours ago |
| [doublejump](https://github.com/edwingeng/doublejump) | 88 | A revamped Google's jump consistent hash | 9 months ago |
| [semaphore](https://github.com/jexia/semaphore) | 84 | Take control of your data, connect with anything, and expose it anywhere through protocols such as HTTP, GraphQL, and gRPC. | 4 months ago |
| [dot](https://github.com/dotchain/dot) | 80 | distributed data sync with operational transformation/transforms  | 4 years ago |
| [celeriac.v1](https://github.com/svcavallar/celeriac.v1) | 71 | Golang client library for adding support for interacting and monitoring Celery workers, tasks and events. | 2 months ago |
| [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) | 53 | MySQL Backed Locking Primitive | a month ago |
| [flowgraph](https://github.com/vectaport/flowgraph) | 52 | Flowgraph package for scalable asynchronous system development | 2 years ago |
| [go-pdu](https://github.com/pdupub/go-pdu) | 46 | Go implementation of PDU - A decentralized SNS backbone | 16 days ago |
| [drmaa](https://github.com/dgruber/drmaa) | 44 | Compute cluster (HPC) job submission library for Go (#golang) based on the open DRMAA standard. | a year ago |
| [micro](https://github.com/gmsec/micro) | 22 | A Go distributed systems development framework | a month ago |
| [consistenthash](https://github.com/mbrostami/consistenthash) | 19 | A Go library that implements Consistent Hashing | a year ago |
| [dynatomic](https://github.com/tylfin/dynatomic) | 15 | Dynatomic is a library for using dynamodb as an atomic counter | 3 years ago |
| [failured](https://github.com/andy2046/failured) | 10 | Adaptive Accrual Failure Detector | 2 years ago |


### [Dynamic DNS](#Dynamic-DNS)
* Tools for updating dynamic DNS records.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [godns](https://github.com/TimothyYe/godns) | 1327 | A dynamic DNS client tool supports AliDNS, Cloudflare, Google Domains, DNSPod, HE.net & DuckDNS & DreamHost, etc, written in Go. | 2 months ago |
| [ddns](https://github.com/skibish/ddns) | 237 | Personal DDNS client with Digital Ocean Networking DNS as backend. | 5 months ago |


### [Email](#Email)
* Libraries and tools that implement email creation and sending.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [MailHog](https://github.com/mailhog/MailHog) | 12224 | Web and API based SMTP testing | 2 months ago |
| [hermes](https://github.com/matcornic/hermes) | 2644 | Golang package that generates clean, responsive HTML e-mails for sending transactional mail | a month ago |
| [email](https://github.com/jordan-wright/email) | 2368 | Robust and flexible email library for Go | 9 months ago |
| [go-imap](https://github.com/emersion/go-imap) | 1801 |  :inbox_tray: An IMAP library for clients and servers | 6 days ago |
| [email-verifier](https://github.com/AfterShip/email-verifier) | 907 | :white_check_mark: A Go library for email verification without sending any emails. | 5 days ago |
| [sendgrid-go](https://github.com/sendgrid/sendgrid-go) | 905 | The Official Twilio SendGrid Golang API Library | 25 days ago |
| [mailgun-go](https://github.com/mailgun/mailgun-go) | 649 | Go library for sending mail with the Mailgun API. | 7 days ago |
| [go-simple-mail](https://github.com/xhit/go-simple-mail) | 477 | Golang package for send email. Support keep alive connection, TLS and SSL. Easy for bulk SMTP. | 3 days ago |
| [go-message](https://github.com/emersion/go-message) | 319 | :envelope: A streaming Go library for the Internet Message Format and mail messages | a month ago |
| [douceur](https://github.com/aymerick/douceur) | 229 | A simple CSS parser and inliner in Go | 10 months ago |
| [hectane](https://github.com/hectane/hectane) | 220 | Lightweight SMTP client written in Go | 3 years ago |
| [mailchain-legacy](https://github.com/mailchain/mailchain-legacy) | 138 | Using Mailchain, blockchain users can now send and receive rich-media HTML messages with attachments via a blockchain address. | a year ago |
| [go-premailer](https://github.com/vanng822/go-premailer) | 112 | Inline styling for html mail in golang | 3 months ago |
| [go-dkim](https://github.com/toorop/go-dkim) | 90 | DKIM package for golang | 3 years ago |
| [smtp](https://github.com/mailhog/smtp) | 75 | MailHog SMTP Protocol | 2 years ago |
| [go-email-validator](https://github.com/go-email-validator/go-email-validator) | 52 | 📧 Golang Email address validator | 2 months ago |


### [Embeddable Scripting Languages](#Embeddable-Scripting-Languages)
* Embedding other languages inside your go code.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopher-lua](https://github.com/yuin/gopher-lua) | 5534 | GopherLua: VM and compiler for Lua in Go | 3 days ago |
| [goja](https://github.com/dop251/goja) | 3998 | ECMAScript/JavaScript engine in pure Go | 3 days ago |
| [expr](https://github.com/antonmedv/expr) | 3879 | Expression language and expression evaluation for Go | a day ago |
| [tengo](https://github.com/d5/tengo) | 3226 | A fast script language for Go | 14 days ago |
| [go-lua](https://github.com/Shopify/go-lua) | 2732 | A Lua VM in Go | 4 months ago |
| [cel-go](https://github.com/google/cel-go) | 1662 | Fast, portable, non-Turing complete expression evaluation with gradual typing (Go) | 3 hours ago |
| [go-python](https://github.com/sbinet/go-python) | 1503 | naive go bindings to the CPython2 C-API | 2 years ago |
| [anko](https://github.com/mattn/anko) | 1340 | Scriptable interpreter written in golang | a month ago |
| [core](https://github.com/metacall/core) | 1303 | MetaCall: The ultimate polyglot programming experience. | 5 days ago |
| [go-php](https://github.com/deuill/go-php) | 897 | PHP bindings for the Go programming language (Golang) | 2 years ago |
| [go-duktape](https://github.com/olebedev/go-duktape) | 779 | [abandoned] Duktape JavaScript engine bindings for Go | 2 years ago |
| [gval](https://github.com/PaesslerAG/gval) | 633 | Expression evaluation in golang | 4 months ago |
| [golua](https://github.com/aarzilli/golua) | 615 | Go bindings for Lua C API - in progress | 2 years ago |
| [gisp](https://github.com/jcla1/gisp) | 501 | Simple LISP in Go | 6 years ago |
| [gentee](https://github.com/gentee/gentee) | 111 | Gentee - script programming language for automation. It uses VM and compiler written in Go (Golang). | 5 months ago |
| [binder](https://github.com/alexeyco/binder) | 66 | High level go to Lua binder. Write less, do more. | a year ago |
| [purl](https://github.com/ian-kent/purl) | 38 | Perl, but fluffy like a cat! | 9 years ago |
| [ecal](https://github.com/krotik/ecal) | 34 | A simple embeddable scripting language which supports concurrent event processing. | 2 years ago |
| [ngaro](https://github.com/db47h/ngaro) | 25 | An embeddable implementation of the Ngaro Virtual Machine for Go programs | 5 years ago |


### [Error Handling](#Error-Handling)
* Libraries for handling errors.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [errors](https://github.com/pkg/errors) | 8050 | Simple error handling primitives | 2 years ago |
| [go-multierror](https://github.com/hashicorp/go-multierror) | 1986 | A Go (golang) package for representing a list of errors as a single error. | a month ago |
| [eris](https://github.com/rotisserie/eris) | 1306 | Error handling library with readable stack traces and flexible formatting support 🎆 | 5 months ago |
| [errorx](https://github.com/joomcode/errorx) | 986 | A comprehensive error handling library for Go | 7 days ago |
| [tracerr](https://github.com/ztrue/tracerr) | 795 | Golang errors with stack trace and source fragments. | 2 months ago |
| [errlog](https://github.com/snwfdhmp/errlog) | 450 | Reduce debugging time while programming Go. Use static and stack-trace analysis to determine which func call causes the error. | 13 days ago |
| [emperror](https://github.com/emperror/emperror) | 305 | The Emperor takes care of all errors personally | 3 years ago |
| [errors](https://github.com/emperror/errors) | 177 | Drop-in replacement for the standard library errors package and github.com/pkg/errors | a year ago |
| [errors](https://github.com/bnkamalesh/errors) | 51 | A drop-in replacement for Go errors, with some added sugar! Unwrap user-friendly messages, HTTP status code, easy wrapping with multiple error types. | a month ago |
| [falcon](https://github.com/ThundR67/falcon) | 9 | A Simple Yet Highly Powerful Package For Error Handling | 4 years ago |
| [errors](https://github.com/PumpkinSeed/errors) | 8 | Simple and efficient error package  | a year ago |
| [errors](https://github.com/neuronlabs/errors) | 5 | Simple golang error handling with classification primitives. | 4 years ago |


### [File Handling](#File-Handling)
* Libraries for handling files and file systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [afero](https://github.com/spf13/afero) | 5240 | A FileSystem Abstraction System for Go | a day ago |
| [pdfcpu](https://github.com/pdfcpu/pdfcpu) | 5080 | A PDF processor written in Go. | 2 days ago |
| [gdu](https://github.com/dundee/gdu) | 2616 | Fast disk usage analyzer with console interface written in Go | 6 days ago |
| [todo.txt](https://github.com/todotxt/todo.txt) | 1925 | ‼️ A complete primer on the whys and hows of todo.txt. | a month ago |
| [notify](https://github.com/rjeczalik/notify) | 826 | File system event notification library on steroids. | 5 months ago |
| [copy](https://github.com/otiai10/copy) | 569 | Go copy directory recursively | 6 days ago |
| [afs](https://github.com/viant/afs) | 250 | Abstract File Storage | 7 days ago |
| [vfs](https://github.com/C2FO/vfs) | 244 | Pluggable, extensible virtual file system for Go | 11 days ago |
| [bigfile](https://github.com/bigfile/bigfile) | 241 | Bigfile -- a file transfer system that supports http, rpc and ftp protocol   https://bigfile.site   | 5 months ago |
| [go-exiftool](https://github.com/barasher/go-exiftool) | 174 | Golang wrapper for Exiftool : extract as much metadata as possible (EXIF, ...) from files (pictures, pdf, office documents, ...) | 20 days ago |
| [fs](https://github.com/kr/fs) | 131 | Package fs provides filesystem-related functions. | 2 years ago |
| [go-csv-tag](https://github.com/artonge/go-csv-tag) | 107 | Read csv file from go using tags | 23 days ago |
| [skywalker](https://github.com/dixonwille/skywalker) | 90 | A package to allow one to concurrently go through a filesystem with ease | 2 years ago |
| [checksum](https://github.com/codingsince1985/checksum) | 88 | Compute message digest for large files in Go | 4 months ago |
| [parquet](https://github.com/parsyl/parquet) | 81 | A library for reading and writing parquet files. | a month ago |
| [opc](https://github.com/qmuntal/opc) | 74 | Go implementation of the Open Packaging Conventions (OPC) | 2 years ago |
| [tarfs](https://github.com/posener/tarfs) | 56 | An implementation of the FileSystem interface for tar files. | 3 years ago |
| [baraka](https://github.com/xis/baraka) | 50 | a tool for handling file uploads simple | 9 months ago |
| [go-gtfs](https://github.com/artonge/go-gtfs) | 36 | Load GTFS files in golang | 2 months ago |
| [flop](https://github.com/homedepot/flop) | 34 | Go file operations library chasing GNU APIs. | 2 years ago |
| [gut](https://github.com/1set/gut) | 26 | 🍱 yet another collection of go utilities & tools | 3 years ago |
| [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) | 19 | copy files for humans | 4 years ago |
| [todotxt](https://github.com/1set/todotxt) | 19 | Parser for todo.txt files in Go ✅ | a month ago |
| [higgs](https://github.com/dastoori/higgs) | 16 | A tiny cross-platform Go library to hide/unhide files and directories | a year ago |
| [pathtype](https://github.com/jonchun/pathtype) | 12 | Add a type for paths in Go. | 2 years ago |


### [Financial](#Financial)
* Packages for accounting and finance.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [decimal](https://github.com/shopspring/decimal) | 5173 | Arbitrary-precision fixed-point decimal numbers in go | a month ago |
| [ticker](https://github.com/achannarasappa/ticker) | 4600 | Terminal stock ticker with live updates and position tracking | a month ago |
| [go-money](https://github.com/Rhymond/go-money) | 1317 | Go implementation of Fowler's Money pattern | a month ago |
| [accounting](https://github.com/leekchan/accounting) | 811 | money and currency formatting for golang | a year ago |
| [techan](https://github.com/sdcoffey/techan) | 729 | Technical Analysis Library for Golang | a year ago |
| [currency](https://github.com/bojanz/currency) | 407 | Currency handling for Go. | 3 months ago |
| [ach](https://github.com/moov-io/ach) | 374 | ACH implements a reader, writer, and validator for Automated Clearing House (ACH) files. The HTTP server is available in a Docker image and the Go package is available. | 4 days ago |
| [orderbook](https://github.com/i25959341/orderbook) | 339 | Matching Engine for Limit Order Book in Golang | 7 days ago |
| [go-finance](https://github.com/alpeb/go-finance) | 149 | Go library containing a collection of financial functions for time value of money (annuities), cash flow, interest rate conversions, bonds and depreciation calculations. | 2 years ago |
| [transaction](https://github.com/claygod/transaction) | 122 | Embedded database for accounts transactions. | 10 months ago |
| [sleet](https://github.com/BoltApp/sleet) | 118 | Payment abstraction library - one interface for multiple payment processors ( inspired by Ruby's ActiveMerchant ) | 11 days ago |
| [ofxgo](https://github.com/aclindsa/ofxgo) | 117 | Golang library for querying and parsing OFX | 4 months ago |
| [vat](https://github.com/dannyvankooten/vat) | 101 | Go package for dealing with EU VAT. Does VAT number validation & rates retrieval. | a year ago |
| [go-finnhub](https://github.com/m1/go-finnhub) | 79 | Simple and easy to use client for stock market, forex and crypto data from finnhub.io written in Go. Access real-time financial market data from 60+ stock exchanges, 10 forex brokers, and 15+ crypto exchanges | 3 years ago |
| [currency](https://github.com/bnkamalesh/currency) | 51 | A currency computations package. | 2 years ago |
| [payme](https://github.com/jovandeginste/payme) | 21 | QR code generator (ASCII & PNG) for SEPA payments | 6 months ago |
| [go-finance](https://github.com/pieterclaerhout/go-finance) | 12 | Finance related Go functions (e.g. exchange rates, VAT number checking, …) | a month ago |


### [Forms](#Forms)
* Libraries for working with forms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nosurf](https://github.com/justinas/nosurf) | 1413 | CSRF protection middleware for Go. | 8 months ago |
| [csrf](https://github.com/gorilla/csrf) | 888 | gorilla/csrf provides Cross Site Request Forgery (CSRF) prevention middleware for Go web applications & services 🔒 | 7 hours ago |
| [binding](https://github.com/mholt/binding) | 794 | Reflectionless data binding for Go's net/http (not actively maintained) | 5 years ago |
| [form](https://github.com/go-playground/form) | 607 | :steam_locomotive: Decodes url.Values into Go value(s) and Encodes Go value(s) into url.Values. Dual Array and Full map support. | 2 years ago |
| [conform](https://github.com/leebenson/conform) | 305 | Trims, sanitizes & scrubs data based on struct tags (go, golang) | 7 months ago |
| [formam](https://github.com/monoculum/formam) | 179 | a package for decode form's values into struct in Go | 8 months ago |
| [forms](https://github.com/albrow/forms) | 132 | A lightweight go library for parsing form data or json from an http.Request. | 7 months ago |
| [qs](https://github.com/sonh/qs) | 67 | Go module for encoding structs into URL query parameters | 7 months ago |
| [bind](https://github.com/robfig/bind) | 28 |  | 9 years ago |
| [queryparam](https://github.com/TomWright/queryparam) | 17 | Go package to easily convert a URL's query parameters/values into usable struct values of the correct types. | 3 years ago |


### [Functional](#Functional)
* Packages to support functional programming in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-underscore](https://github.com/tobyhede/go-underscore) | 1290 |  Helpfully Functional Go -  A useful collection of Go utilities. Designed for programmer happiness.  | 4 months ago |
| [fpGo](https://github.com/TeaEntityLab/fpGo) | 323 | Monad, Functional Programming features for Golang | a year ago |
| [fuego](https://github.com/seborama/fuego) | 140 | Functional Experiment in Golang | 4 months ago |
| [gofp](https://github.com/rbrahul/gofp) | 138 | A super simple Lodash like utility library with essential functions that empowers the development in Go | 2 years ago |


### [Game Development](#Game-Development)
* Awesome game development libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ebiten](https://github.com/hajimehoshi/ebiten) | 8450 | Ebitengine - A dead simple 2D game engine for Go | 9 hours ago |
| [leaf](https://github.com/name5566/leaf) | 4900 | A game server framework in Go (golang) | 9 months ago |
| [pixel](https://github.com/faiface/pixel) | 4263 | A hand-crafted 2D game library in Go | 3 months ago |
| [nano](https://github.com/lonng/nano) | 2407 | Lightweight, facility, high performance golang based game server framework | a month ago |
| [engine](https://github.com/g3n/engine) | 2373 | Go 3D Game Engine (http://g3n.rocks) | a month ago |
| [goworld](https://github.com/xiaonanln/goworld) | 2363 | Scalable Distributed Game Server Engine with Hot Swapping in Golang | a year ago |
| [go-sdl2](https://github.com/veandco/go-sdl2) | 1993 | SDL2 binding for Go | 2 months ago |
| [pitaya](https://github.com/topfreegames/pitaya) | 1863 | Scalable game server framework with clustering support and client libraries for iOS, Android, Unity and others through the C SDK. | 6 days ago |
| [engo](https://github.com/EngoEngine/engo) | 1622 | Engo is an open-source 2D game engine written in Go. | 4 months ago |
| [oak](https://github.com/oakmound/oak) | 1413 | A pure Go game engine | 5 months ago |
| [termloop](https://github.com/JoelOtter/termloop) | 1356 | Terminal-based game engine for Go, built on top of Termbox | 2 years ago |
| [gonet](https://github.com/xtaci/gonet) | 1224 | A Game Server Skeleton in golang. | 6 years ago |
| [raylib-go](https://github.com/gen2brain/raylib-go) | 1014 | Go bindings for raylib, a simple and easy-to-use library to enjoy videogames programming. | 10 days ago |
| [engine](https://github.com/azul3d/engine) | 581 | Azul3D - A 3D game engine written in Go! | 2 years ago |
| [go-astar](https://github.com/beefsack/go-astar) | 554 | Go implementation of the A* search algorithm | a year ago |
| [go3d](https://github.com/ungerik/go3d) | 283 | A performance oriented 2D/3D math package for Go | a year ago |
| [tile](https://github.com/kelindar/tile) | 106 | Tile is a 2D grid engine, built with data and cache friendly ways, includes pathfinding and observers. | 7 months ago |
| [prototype](https://github.com/gonutz/prototype) | 81 | Simple 2D game prototyping framework. | 9 months ago |


### [Generation and Generics](#Generation-and-Generics)
* Tools to enhance the language with features like generics via code generation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-linq](https://github.com/ahmetb/go-linq) | 3320 | .NET LINQ capabilities in Go | a year ago |
| [jennifer](https://github.com/dave/jennifer) | 2923 | Jennifer is a code generator for Go | 3 months ago |
| [gen](https://github.com/clipperhouse/gen) | 1428 | Type-driven code generation for Go | 4 years ago |
| [goderive](https://github.com/awalterschulze/goderive) | 1115 | Derives and generates mundane golang functions that you do not want to maintain yourself | 3 months ago |
| [gowrap](https://github.com/hexdigest/gowrap) | 779 | GoWrap is a command line tool for generating decorators for Go interfaces | 5 days ago |
| [go-enum](https://github.com/abice/go-enum) | 518 | An enum generator for go | 13 hours ago |
| [interfaces](https://github.com/rjeczalik/interfaces) | 387 | Code generation tools for Go. | 14 days ago |
| [goverter](https://github.com/jmattheis/goverter) | 271 | Generate type-safe Go converters by simply defining an interface | 2 months ago |
| [pkgreflect](https://github.com/ungerik/pkgreflect) | 103 | A Go preprocessor for package scoped reflection | 6 years ago |
| [gotype](https://github.com/wzshiming/gotype) | 54 | Golang source code parsing, usage like reflect package | a year ago |
| [efaceconv](https://github.com/vlegio/efaceconv) | 48 |  | 6 years ago |
| [GENERIS](https://github.com/senselogic/GENERIS) | 40 | Versatile Go code generator. | a year ago |
| [go-xray](https://github.com/pieterclaerhout/go-xray) | 26 | Helpers for making the use of reflection easier | 5 months ago |
| [typeregistry](https://github.com/xiaoxin01/typeregistry) | 18 | create type dynamically in Golang | 3 years ago |


### [Geographic](#Geographic)
* Geographic tools and servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tile38](https://github.com/tidwall/tile38) | 8613 | Real-time Geospatial and Geofencing | 4 days ago |
| [geo](https://github.com/golang/geo) | 1545 | S2 geometry library in Go | 3 months ago |
| [mbtileserver](https://github.com/consbio/mbtileserver) | 510 | Basic Go server for mbtiles | 4 months ago |
| [osm](https://github.com/paulmach/osm) | 277 | General purpose library for reading, writing and working with OpenStreetMap data | 7 months ago |
| [wgs84](https://github.com/wroge/wgs84) | 99 | A zero-dependency Go package for coordinate transformations. | 2 months ago |
| [godal](https://github.com/airbusgeo/godal) | 98 | golang wrapper for github.com/OSGEO/gdal | 3 months ago |
| [simplefeatures](https://github.com/peterstace/simplefeatures) | 86 | Simple Features is a pure Go Implementation of the OpenGIS Simple Feature Access Specification | 13 days ago |
| [geoserver](https://github.com/hishamkaram/geoserver) | 82 | geoserver is a Go library for manipulating a GeoServer instance via the GeoServer REST API. | 4 months ago |
| [gismanager](https://github.com/hishamkaram/gismanager) | 50 | Publish Your GIS Data(Vector Data) to PostGIS and Geoserver | 5 years ago |
| [pbf](https://github.com/maguro/pbf) | 45 | OpenStreetMap PBF golang parser | 9 months ago |
| [s2-geojson](https://github.com/pantrif/s2-geojson) | 23 | Draw a polygon on the map or paste a geoJSON and explore how the s2.RegionCoverer covers it with S2 cells depending on the min and max levels | 3 years ago |


### [Go Compilers](#Go-Compilers)
* Tools for compiling Go to other languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopherjs](https://github.com/gopherjs/gopherjs) | 12008 | A compiler from Go to JavaScript for running Go code in a browser | 13 days ago |
| [tardisgo](https://github.com/tardisgo/tardisgo) | 424 | Golang->Haxe->CPP/CSharp/Java/JavaScript transpiler   | 7 years ago |
| [c4go](https://github.com/Konstantin8105/c4go) | 333 | Transpiling C code to Go code | 5 months ago |
| [f4go](https://github.com/Konstantin8105/f4go) | 36 | Transpiling fortran code to golang code | 9 months ago |


### [Goroutines](#Goroutines)
* Tools for managing and working with Goroutines.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ants](https://github.com/panjf2000/ants) | 10654 | 🐜🐜🐜 ants is a high-performance and low-cost goroutine pool in Go./ ants 是一个高性能且低损耗的 goroutine 池。 | 19 hours ago |
| [tunny](https://github.com/Jeffail/tunny) | 3636 | A goroutine pool for Go | 4 months ago |
| [goworker](https://github.com/benmanns/goworker) | 2736 | goworker is a Go-based background worker that runs 10 to 100,000* times faster than Ruby-based workers. | a year ago |
| [workerpool](https://github.com/gammazero/workerpool) | 1100 | Concurrency limiting goroutine pool | 15 days ago |
| [pond](https://github.com/alitto/pond) | 916 | 🔘 Minimalistic and High-performance goroutine worker pool written in Go | 3 months ago |
| [grpool](https://github.com/ivpusic/grpool) | 729 | Lightweight Goroutine pool | 4 years ago |
| [pool](https://github.com/go-playground/pool) | 715 | :speedboat: a limited consumer goroutine or unlimited goroutine pool for easier goroutine handling and cancellation | 2 years ago |
| [gowp](https://github.com/xxjwxc/gowp) | 469 | golang worker pool , Concurrency limiting goroutine pool | a month ago |
| [go-floc](https://github.com/workanator/go-floc) | 262 | Floc: Orchestrate goroutines with ease. | 2 years ago |
| [go-flow](https://github.com/kamildrazkiewicz/go-flow) | 212 | Simply way to control goroutines execution order based on dependencies | 4 years ago |
| [artifex](https://github.com/mborders/artifex) | 172 | Simple in-memory job queue for Golang using worker-based dispatching | 8 months ago |
| [semaphore](https://github.com/marusama/semaphore) | 160 | Fast resizable golang semaphore primitive | 2 years ago |
| [go-workers](https://github.com/catmullet/go-workers) | 159 | 👷 Library for safely running groups of workers concurrently or consecutively that require input and output through channels | a year ago |
| [errgroup](https://github.com/neilotoole/errgroup) | 148 | errgroup with goroutine worker limits | 6 months ago |
| [cyclicbarrier](https://github.com/marusama/cyclicbarrier) | 124 | CyclicBarrier golang implementation | 3 years ago |
| [async](https://github.com/StudioSol/async) | 120 | A safe way to execute functions asynchronously, recovering them in case of panic. It also provides an error stack aiming to facilitate fail causes discovery. | 3 years ago |
| [async](https://github.com/reugn/async) | 119 | Synchronization and asynchronous computation package for Go | 7 months ago |
| [gollback](https://github.com/vardius/gollback) | 110 | Go asynchronous simple function utilities, for managing execution of closures and callbacks | 5 months ago |
| [semaphore](https://github.com/kamilsk/semaphore) | 96 | 🚦 Semaphore pattern implementation with timeout of lock/unlock operations. | 3 years ago |
| [Hunch](https://github.com/AaronJan/Hunch) | 95 | Hunch provides functions like: All, First, Retry, Waterfall etc., that makes asynchronous flow control more intuitive. | a year ago |
| [threadpool](https://github.com/shettyh/threadpool) | 93 | Golang simple thread pool implementation | 3 years ago |
| [worker-pool](https://github.com/vardius/worker-pool) | 87 | Go simple async worker pool | 2 years ago |
| [gpool](https://github.com/sherifabdlnaby/gpool) | 86 | gpool - a generic context-aware resizable goroutines pool to bound concurrency based on semaphore.  | 4 years ago |
| [goccm](https://github.com/zenthangplus/goccm) | 65 | Limits the number of goroutines that are allowed to run concurrently | 6 months ago |
| [nursery](https://github.com/arunsworld/nursery) | 63 | Structured Concurrency in Go | 2 years ago |
| [gowl](https://github.com/hmdsefi/gowl) | 57 | Gowl is a process management and process monitoring tool at once. An infinite worker pool gives you the ability to control the pool and processes and monitor their status. | 4 months ago |
| [routine](https://github.com/x-mod/routine) | 57 | go routine control, abstraction of the Main and some useful Executors.如果你不会管理Goroutine的话，用它 | 3 years ago |
| [gohive](https://github.com/loveleshsharma/gohive) | 44 | 🐝 A Highly Performant and easy to use goroutine pool for Go | 2 years ago |
| [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) | 41 | A sync.WaitGroup with error handling and concurrency control | a month ago |
| [kyoo](https://github.com/dirkaholic/kyoo) | 41 | Unlimited job queue for go, using a pool of concurrent workers processing the job queue entries | 5 months ago |
| [parallel-fn](https://github.com/rafaeljesus/parallel-fn) | 35 | Run functions in parallel :comet: | 6 years ago |
| [go-trylock](https://github.com/subchen/go-trylock) | 33 | TryLock support on read-write lock for Golang | 2 years ago |
| [channelify](https://github.com/ddelizia/channelify) | 27 | Make functions return a channel for parallel processing via go routines. | 2 years ago |
| [stl](https://github.com/ssgreg/stl) | 26 | Software Transactional Locks | 3 years ago |
| [breaker](https://github.com/kamilsk/breaker) | 14 | 🚧 Flexible mechanism to make execution flow interruptible. | 2 years ago |
| [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) | 14 |  | 6 months ago |
| [execpool](https://github.com/hexdigest/execpool) | 14 | A pool that spins up a given number of processes in advance and attaches stdin and stdout when needed. Very similar to FastCGI but works for any command. | 2 years ago |
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
| [fyne](https://github.com/fyne-io/fyne) | 20756 | Cross platform GUI toolkit in Go inspired by Material Design | 3 hours ago |
| [webview](https://github.com/webview/webview) | 11264 | Tiny cross-platform webview library for C/C++/Golang. Uses WebKit (Gtk/Cocoa) and Edge (Windows) | 20 days ago |
| [qt](https://github.com/therecipe/qt) | 9883 | Qt binding for Go (Golang) with support for Windows / macOS / Linux / FreeBSD / Android / iOS / Sailfish OS / Raspberry Pi / AsteroidOS / Ubuntu Touch / JavaScript / WebAssembly | 3 months ago |
| [ui](https://github.com/andlabs/ui) | 8276 | Platform-native GUI library for Go. | a year ago |
| [go-app](https://github.com/maxence-charriere/go-app) | 7126 | A package to build progressive web apps with Go programming language and WebAssembly. | 15 hours ago |
| [walk](https://github.com/lxn/walk) | 6476 | A Windows GUI toolkit for the Go Programming Language | 10 months ago |
| [go-astilectron](https://github.com/asticode/go-astilectron) | 4776 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by Electron) | 21 days ago |
| [go-sciter](https://github.com/sciter-sdk/go-sciter) | 2523 | Golang bindings of Sciter: the Embeddable HTML/CSS/script engine for modern UI development | 2 months ago |
| [gotk3](https://github.com/gotk3/gotk3) | 1919 | Go bindings for GTK3 | 2 months ago |
| [gowd](https://github.com/dtylman/gowd) | 400 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by nwjs) | 5 months ago |


#### [Interaction](#Interaction)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [robotgo](https://github.com/go-vgo/robotgo) | 8514 | RobotGo, Go Native cross-platform GUI automation  @vcaesar | 4 days ago |
| [systray](https://github.com/getlantern/systray) | 2833 | a cross platfrom Go library to place an icon and menu in the notification area | a month ago |
| [gosx-notifier](https://github.com/deckarep/gosx-notifier) | 578 | gosx-notifier is a Go framework for sending desktop notifications to OSX 10.8 or higher | 3 years ago |
| [zenity](https://github.com/ncruces/zenity) | 507 | Zenity dialogs for Golang, Windows, macOS | 5 days ago |
| [trayhost](https://github.com/shurcooL/trayhost) | 240 | Cross-platform Go library to place an icon in the host operating system's taskbar. | 8 months ago |
| [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) | 29 | macOS Sleep/ Wake notifications in golang | 4 years ago |
| [activity-tracker](https://github.com/prashantgupta24/activity-tracker) | 25 | A library to notify about any (pluggable) activity on your machine, and let you take action as needed | 4 years ago |
| [go-appindicator](https://github.com/dawidd6/go-appindicator) | 19 | :traffic_light: Go bindings for libappindicator3 C library | 3 years ago |


### [Hardware](#Hardware)
* Libraries, tools, and tutorials for interacting with hardware.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [arduino-cli](https://github.com/arduino/arduino-cli) | 3937 | Arduino command line tool | a day ago |
| [go-rpio](https://github.com/stianeikeland/go-rpio) | 2028 | :electric_plug: Raspberry Pi GPIO library for go-lang | a year ago |
| [ghw](https://github.com/jaypipes/ghw) | 1349 | Golang hardware discovery/inspection library | 12 hours ago |
| [emgo](https://github.com/ziutek/emgo) | 1028 | Emgo: Bare metal Go (language for programming embedded systems) | 2 years ago |
| [sysinfo](https://github.com/zcalusic/sysinfo) | 437 | Sysinfo is a Go library providing Linux OS / kernel / hardware system information. | 12 days ago |
| [goroslib](https://github.com/bluenviron/goroslib) | 269 | ROS client library for the Go programming language | 19 days ago |
| [go-osc](https://github.com/hypebeast/go-osc) | 172 | Open Sound Control (OSC) library for Golang. Implemented in pure Go. | 6 months ago |
| [joystick](https://github.com/0xcafed00d/joystick) | 45 | Go Joystick API | 3 months ago |


### [Images](#Images)
* Libraries for manipulating images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocv](https://github.com/hybridgroup/gocv) | 5608 | Go package for computer vision using OpenCV 4 and beyond. | 20 days ago |
| [imaginary](https://github.com/h2non/imaginary) | 5031 | Fast, simple, scalable, Docker-ready HTTP microservice for high-level image processing | a month ago |
| [imaging](https://github.com/disintegration/imaging) | 4764 | Imaging is a simple image processing package for Go | 2 months ago |
| [gg](https://github.com/fogleman/gg) | 3958 | Go Graphics - 2D rendering in Go with a simple API. | 3 months ago |
| [bild](https://github.com/anthonynsimon/bild) | 3794 | Image processing algorithms in pure Go | 18 hours ago |
| [ln](https://github.com/fogleman/ln) | 3178 | 3D line art engine. | 4 years ago |
| [resize](https://github.com/nfnt/resize) | 2944 | Pure golang image resizing  | a year ago |
| [bimg](https://github.com/h2non/bimg) | 2305 | Go package for fast high-level image processing powered by libvips C library | 3 months ago |
| [gowitness](https://github.com/sensepost/gowitness) | 2258 | 🔍 gowitness - a golang, web screenshot utility using Chrome Headless | 3 days ago |
| [pt](https://github.com/fogleman/pt) | 2055 | A path tracer written in Go. | 4 years ago |
| [svgo](https://github.com/ajstarks/svgo) | 2022 | Go Language Library for SVG generation | 7 months ago |
| [picfit](https://github.com/thoas/picfit) | 1859 | An image resizing server written in Go | 4 days ago |
| [smartcrop](https://github.com/muesli/smartcrop) | 1735 | smartcrop finds good image crops for arbitrary crop sizes | 5 days ago |
| [gift](https://github.com/disintegration/gift) | 1662 | Go Image Filtering Toolkit | 3 years ago |
| [imagick](https://github.com/gographics/imagick) | 1593 | Go binding to ImageMagick's MagickWand C API | 10 months ago |
| [go-opencv](https://github.com/go-opencv/go-opencv) | 1304 | Go bindings for OpenCV / 2.x API in gocv / 1.x API in opencv | 3 months ago |
| [canvas](https://github.com/tdewolff/canvas) | 1279 | Cairo in Go: vector to raster, SVG, PDF, EPS, WASM, OpenGL, Gio, etc. | 2 months ago |
| [geopattern](https://github.com/pravj/geopattern) | 1244 | :triangular_ruler: Create beautiful generative image patterns from a string in golang. | 5 years ago |
| [stegify](https://github.com/DimitarPetrov/stegify) | 1113 | 🔍 Go tool for LSB steganography, capable of hiding any file within an image. | 3 months ago |
| [govips](https://github.com/davidbyttow/govips) | 925 | A lightning fast image processing and resizing library for Go | 11 days ago |
| [image2ascii](https://github.com/qeesung/image2ascii) | 777 | :foggy: Convert image to ASCII | 10 months ago |
| [goimagehash](https://github.com/corona10/goimagehash) | 617 | Go Perceptual image hashing package | 2 months ago |
| [draft](https://github.com/lucasepe/draft) | 566 | Generate High Level Cloud Architecture diagrams using YAML syntax. | 2 years ago |
| [govatar](https://github.com/o1egl/govatar) | 564 | Avatar generation library for GO language | 9 months ago |
| [mort](https://github.com/aldor007/mort) | 482 | Storage and image processing server written in Go | 2 months ago |
| [go-nude](https://github.com/koyachi/go-nude) | 378 | Nudity detection with Go. | a year ago |
| [steganography](https://github.com/auyer/steganography) | 246 | Pure Golang Library that allows LSB steganography on images using ZERO dependencies | 3 months ago |
| [darkroom](https://github.com/gojek/darkroom) | 212 |  | 7 days ago |
| [rez](https://github.com/bamiaux/rez) | 208 | Image resizing in pure Go and SIMD | 6 years ago |
| [mergi](https://github.com/noelyahan/mergi) | 205 | go library for image programming (merge, crop, resize, watermark, animate, ease, transit) | 3 years ago |
| [gltf](https://github.com/qmuntal/gltf) | 204 | :eyeglasses: Go library for encoding glTF 2.0 files | 6 days ago |
| [img](https://github.com/hawx/img) | 148 | A selection of image manipulation tools | 8 years ago |
| [go-webp](https://github.com/kolesa-team/go-webp) | 139 | Simple and fast webp library for golang | 3 months ago |
| [go-cairo](https://github.com/ungerik/go-cairo) | 135 | Go binding for the cairo graphics library | 2 months ago |
| [cameron](https://github.com/aofei/cameron) | 102 | An avatar generator for Go. | a year ago |
| [gridder](https://github.com/shomali11/gridder) | 65 | A Grid based 2D Graphics library | 2 years ago |
| [webp-server](https://github.com/mehdipourfar/webp-server) | 59 | Simple and minimal image server capable of storing, resizing, converting and caching images. | 2 years ago |
| [go-gd](https://github.com/bolknote/go-gd) | 58 | Go bingings for GD (http://www.boutell.com/gd/) | 5 years ago |
| [goimghdr](https://github.com/corona10/goimghdr) | 40 | The imghdr module determines the type of image contained in a file for go | 4 years ago |
| [tga](https://github.com/ftrvxmtrx/tga) | 33 | Go package for decoding and encoding TARGA image format | 8 years ago |
| [go-webcolors](https://github.com/jyotiska/go-webcolors) | 27 | Port of webcolors library from Python to Go | 8 years ago |
| [mpo](https://github.com/donatj/mpo) | 11 | JPEG-MPO Decoder / Converter Library and CLI Tool | 3 months ago |
| [scout](https://github.com/jonoton/scout) | 10 | Scout is a standalone open source software solution for DIY video security. | 6 months ago |


### [IoT -> Internet of Things](#IoT)
* Libraries for programming devices of the IoT.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gobot](https://github.com/hybridgroup/gobot) | 8325 | Golang framework for robotics, drones, and the Internet of Things (IoT) | 4 hours ago |
| [flogo](https://github.com/TIBCOSoftware/flogo) | 2277 | Project Flogo is an open source ecosystem of opinionated  event-driven capabilities to simplify building efficient & modern serverless functions, microservices & edge apps. | 4 months ago |
| [mainflux](https://github.com/mainflux/mainflux) | 2091 | Industrial IoT Messaging and Device Management Platform | 4 hours ago |
| [gatt](https://github.com/paypal/gatt) | 1074 | Gatt is a Go package for building Bluetooth Low Energy peripherals | a year ago |
| [heedy](https://github.com/heedy/heedy) | 367 | An aggregator for personal metrics, and an extensible analysis engine | a year ago |
| [devices](https://github.com/goiot/devices) | 260 | Suite of libraries for IoT devices (written in Go), experimental for x/exp/io | 7 years ago |
| [huego](https://github.com/amimof/huego) | 233 | An extensive Philips Hue client library for Go with an emphasis on simplicity | 11 days ago |
| [sensorbee](https://github.com/sensorbee/sensorbee) | 221 | Lightweight stream processing engine for IoT | 4 years ago |
| [iot](https://github.com/vaelen/iot) | 63 | A Go client for Google IoT Core | 4 years ago |
| [eywa](https://github.com/xcodersun/eywa) | 60 | Make IoT a lot more fun with data.  | 6 years ago |


### [Job Scheduler](#Job-Scheduler)
* Libraries for scheduling jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocron](https://github.com/go-co-op/gocron) | 3617 | Easy and fluent Go cron scheduling. This is a fork from https://github.com/jasonlvhit/gocron | 10 days ago |
| [gocron](https://github.com/jasonlvhit/gocron) | 3255 | A Golang Job Scheduling Package. | 2 years ago |
| [go-quartz](https://github.com/reugn/go-quartz) | 1298 | Minimalist and zero-dependency scheduling library for Go | 17 hours ago |
| [gron](https://github.com/roylee0704/gron) | 978 | gron, Cron Jobs in Go. | 2 months ago |
| [jobrunner](https://github.com/bamzi/jobrunner) | 971 | Framework for performing work asynchronously, outside of the request flow | 3 years ago |
| [jobs](https://github.com/albrow/jobs) | 495 | A persistent and flexible background jobs library for go. | 5 years ago |
| [scheduler](https://github.com/carlescere/scheduler) | 429 | Job scheduling made easy. | a year ago |
| [gronx](https://github.com/adhocore/gronx) | 284 | Lightweight, fast and dependency-free Cron expression parser (due checker, next/prev due date finder), task runner, job scheduler and/or daemon for Golang (tested on v1.13+) and standalone usage. If you are bold, use it to replace crontab entirely. | a month ago |
| [go-cron](https://github.com/rk/go-cron) | 216 | A simple Cron library for go that can execute closures or functions at varying intervals, from once a second to once a year on a specific date and time. Primarily for web applications and long running daemons. | 3 years ago |
| [tasks](https://github.com/madflojo/tasks) | 158 | Package tasks is an easy to use in-process scheduler for recurring tasks in Go | 16 days ago |
| [clockwerk](https://github.com/onatm/clockwerk) | 139 | Job Scheduling Library | 4 years ago |
| [leprechaun](https://github.com/kilgaloon/leprechaun) | 99 | You had one job, or more then one, which can be done in steps | a year ago |
| [sched](https://github.com/romshark/sched) | 26 | A job scheduler for Go with the ability to fast-forward time. | 2 years ago |
| [cronticker](https://github.com/krayzpipes/cronticker) | 10 | Golang ticker that works with Cron scheduling. | 3 years ago |


### [JSON](#JSON)
* Libraries for working with JSON.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gjson](https://github.com/tidwall/gjson) | 12526 | Get JSON values quickly - JSON parser for Go | 4 months ago |
| [gojson](https://github.com/ChimeraCoder/gojson) | 2610 | Automatically generate Go (golang) struct definitions from example JSON | 2 years ago |
| [fastjson](https://github.com/valyala/fastjson) | 1930 | Fast JSON parser and validator for Go. No custom structs, no code generation, no reflection | 5 months ago |
| [ojg](https://github.com/ohler55/ojg) | 618 | Optimized JSON for Go | 5 days ago |
| [kazaam](https://github.com/qntfy/kazaam) | 259 | Arbitrary transformations of JSON in Golang | a year ago |
| [jsondiff](https://github.com/wI2L/jsondiff) | 257 | Compute the diff between two JSON documents as a series of RFC6902 (JSON Patch) operations | 15 days ago |
| [gojq](https://github.com/elgs/gojq) | 187 | JSON query in Golang | 12 days ago |
| [ajson](https://github.com/spyzhov/ajson) | 172 | Abstract JSON for Golang with JSONPath support  | 3 months ago |
| [jettison](https://github.com/wI2L/jettison) | 148 | Highly configurable, fast JSON encoder for Go | 6 months ago |
| [gjo](https://github.com/skanehira/gjo) | 120 | Small utility to create JSON objects | 2 years ago |
| [json2go](https://github.com/m-zajac/json2go) | 119 | Create go type representation from json | 2 years ago |
| [jsongo](https://github.com/ricardolonga/jsongo) | 109 | Fluent API to make it easier to create Json objects. | 2 years ago |
| [jaydiff](https://github.com/yazgazan/jaydiff) | 98 | A JSON diff utility | 2 years ago |
| [ujson](https://github.com/iOliverNguyen/ujson) | 66 | µjson - A fast and minimal JSON parser and transformer that works on unstructured JSON | 2 years ago |
| [jsonf](https://github.com/miolini/jsonf) | 64 | Console JSON formatter with query feature | 3 years ago |
| [go-respond](https://github.com/nicklaw5/go-respond) | 51 | A Go package for handling common HTTP JSON responses. | 2 years ago |
| [mp](https://github.com/sanbornm/mp) | 46 | Simple Email Parser | 7 years ago |
| [vjson](https://github.com/miladibra10/vjson) | 34 | vjson is a golang package that helps to validate JSON objects | 9 months ago |
| [jsoncolor](https://github.com/neilotoole/jsoncolor) | 33 | Colorized JSON output for Go | a year ago |
| [ask](https://github.com/simonnilsson/ask) | 25 | A Go package that provides a simple way of accessing nested properties in maps and slices. | a year ago |
| [dynjson](https://github.com/cocoonspace/dynjson) | 15 | Client-customizable JSON formats for dynamic APIs | 3 months ago |
| [mapslice-json](https://github.com/ake-persson/mapslice-json) | 15 | Go MapSlice for ordered marshal/ unmarshal of maps in JSON | 5 months ago |
| [go-jsonerror](https://github.com/ddymko/go-jsonerror) | 13 | Small package which wraps error responses to follow jsonapi.org | 4 years ago |
| [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) | 13 | Go bindings based on the JSON API errors reference | 7 years ago |
| [jsonhal](https://github.com/RichardKnop/jsonhal) | 13 | A simple Go package to make custom structs marshal into HAL compatible JSON responses. | 3 years ago |
| [epoch](https://github.com/vtopc/epoch) | 12 | Contains primitives for marshaling/unmarshaling Unix timestamp/epoch to/from built-in time.Time type in JSON | a year ago |
| [jzon](https://github.com/zerosnake0/jzon) | 11 | A golang json library inspired by jsoniter | a year ago |
| [ej](https://github.com/lucassscaravelli/ej) | 9 | Write and read JSON from different sources in one line | 3 years ago |
| [jsonic](https://github.com/sinhashubham95/jsonic) | 9 | All you need with JSON | 2 years ago |
| [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) | 4 | The simple JSON parser with validation by condition | 2 years ago |


### [Logging](#Logging)
* Libraries for generating and working with log files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kit](https://github.com/go-kit/kit) | 25163 | A standard library for microservices. | a month ago |
| [logrus](https://github.com/sirupsen/logrus) | 22907 | Structured, pluggable logging for Go. | 20 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 22907 | Structured, pluggable logging for Go. | 20 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 22907 | Structured, pluggable logging for Go. | 20 days ago |
| [zap](https://github.com/uber-go/zap) | 19071 | Blazing fast, structured, leveled logging in Go. | 8 days ago |
| [debug](https://github.com/debug-js/debug) | 10756 | A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers | a month ago |
| [zerolog](https://github.com/rs/zerolog) | 8470 | Zero Allocation JSON Logger | 5 days ago |
| [go-spew](https://github.com/davecgh/go-spew) | 5633 | Implements a deep pretty printer for Go data structures to aid in debugging | a year ago |
| [lumberjack](https://github.com/natefinch/lumberjack) | 4128 | lumberjack is a log rolling package for Go | 2 months ago |
| [glog](https://github.com/golang/glog) | 3397 | Leveled execution logs for Go | 3 months ago |
| [tail](https://github.com/hpcloud/tail) | 2574 | Go package for reading from continously updated files (tail -f) | 9 months ago |
| [seelog](https://github.com/cihub/seelog) | 1634 | Seelog is a native Go logging library that provides flexible asynchronous dispatching, filtering, and formatting. | 4 years ago |
| [log](https://github.com/apex/log) | 1318 | Structured logging package for Go. | 3 months ago |
| [log15](https://github.com/inconshreveable/log15) | 1092 | Structured, composable logging for Go | 5 months ago |
| [log](https://github.com/phuslu/log) | 498 | High performance structured logging | a month ago |
| [onelog](https://github.com/francoispqt/onelog) | 411 | Dead simple, super fast, zero allocation logger for Golang | 4 years ago |
| [logutils](https://github.com/hashicorp/logutils) | 354 | Utilities for slightly better logging in Go (Golang). | 5 months ago |
| [logxi](https://github.com/mgutz/logxi) | 349 | A 12-factor app logger built for performance and happy development | 3 years ago |
| [sqldb-logger](https://github.com/simukti/sqldb-logger) | 308 | A logger for Go SQL database driver without modifying existing *sql.DB stdlib usage. | 6 months ago |
| [httpretty](https://github.com/henvic/httpretty) | 301 | Package httpretty prints the HTTP requests you make with Go pretty on your terminal. | a month ago |
| [log](https://github.com/go-playground/log) | 289 | :green_book: Simple, configurable and scalable Structured Logging for Go. | 12 days ago |
| [go-logger](https://github.com/apsdehal/go-logger) | 287 | Simple logger for Go programs. Allows custom formats for messages. | 4 years ago |
| [rollingwriter](https://github.com/arthurkiller/rollingwriter) | 280 | Rolling writer is an IO util for auto rolling write in go. | 5 months ago |
| [logur](https://github.com/logur/logur) | 195 | Logur is an opinionated collection of logging best practices | 3 years ago |
| [glg](https://github.com/kpango/glg) | 183 | Simple and blazing fast lockfree logging library for golang | 2 months ago |
| [logger](https://github.com/azer/logger) | 157 | Minimalistic logging library for Go. | 2 years ago |
| [xlog](https://github.com/rs/xlog) | 137 | xlog is a logger for net/context aware HTTP applications | 2 years ago |
| [ozzo-log](https://github.com/go-ozzo/ozzo-log) | 122 | A Go (golang) package providing high-performance asynchronous logging, message filtering by severity and category, and multiple message targets. | 3 years ago |
| [logvoyage](https://github.com/firstrow/logvoyage) | 94 | LogVoyage - logging SaaS written in GoLang | 6 years ago |
| [go-cronowriter](https://github.com/utahta/go-cronowriter) | 55 | Time based rotating file writer | 2 years ago |
| [log](https://github.com/alexcesaro/log) | 47 | Logging packages for Go | 8 years ago |
| [gone](https://github.com/One-com/gone) | 46 | Golang packages for writing small daemons and servers. | 2 years ago |
| [noodlog](https://github.com/gyozatech/noodlog) | 44 | 🍜 Parametrized JSON logging library in Golang which lets you obfuscate sensitive data and marshal any kind of content. | 3 months ago |
| [go-log](https://github.com/ian-kent/go-log) | 42 | A logger, for Go | 5 years ago |
| [gologger](https://github.com/sadlil/gologger) | 41 | The Simplest and worst logging library ever written | 5 years ago |
| [logex](https://github.com/chzyer/logex) | 41 | An golang log lib, supports tracking and level, wrap by standard log lib | a year ago |
| [journald](https://github.com/ssgreg/journald) | 36 | Go implementation of systemd Journal's native API for logging | 2 years ago |
| [go-log](https://github.com/siddontang/go-log) | 33 | a golang log lib supports level and multi handlers | 4 years ago |
| [mlog](https://github.com/jbrodriguez/mlog) | 33 | A simple logging module for go, with a rotating file feature and console logging. | 5 years ago |
| [distillog](https://github.com/amoghe/distillog) | 31 | Logging, distilled | 5 years ago |
| [logrusly](https://github.com/sebest/logrusly) | 28 | Loggly Hooks for GO Logrus logger | 2 years ago |
| [log](https://github.com/teris-io/log) | 26 | Structured log interface | 6 years ago |
| [zkits-logger](https://github.com/edoger/zkits-logger) | 24 | A powerful zero-dependency json logger. | 2 months ago |
| [gomol](https://github.com/aphistic/gomol) | 19 | Gomol is a library for structured, multiple-output logging for Go with extensible logging outputs | 4 years ago |
| [logmatic](https://github.com/mborders/logmatic) | 16 | Colorized logger for Golang with dynamic log level configuration | 2 years ago |
| [glo](https://github.com/lajosbencz/glo) | 15 | Logging library for Golang | 4 years ago |
| [go-log](https://github.com/subchen/go-log) | 14 | Simple and configurable Logging in Go, with level, formatters and writers | 5 years ago |
| [logrusiowriter](https://github.com/cabify/logrusiowriter) | 14 | io.Writer implementation using logrus logger | 3 years ago |
| [logdump](https://github.com/ewwwwwqm/logdump) | 11 | Package for multi-level logging | 5 years ago |
| [logo](https://github.com/mbndr/logo) | 11 | Golang logger to different configurable writers. | 3 years ago |
| [go-log](https://github.com/pieterclaerhout/go-log) | 10 | A logging library with strack traces, object dumping and optional timestamps | a month ago |
| [kemba](https://github.com/clok/kemba) | 10 | A tiny debug logging tool. Ideal for CLI tools and command applications. Inspired by https://github.com/visionmedia/debug | a month ago |
| [log](https://github.com/aerogo/log) | 10 | :memo: Logging with multiple output targets. | 4 years ago |
| [xlog](https://github.com/xfxdev/xlog) | 8 | plugin architecture and flexible log system for golang | 4 years ago |
| [yell](https://github.com/jfcg/yell) | 1 | :ledger: Yet another minimalist logging library | a year ago |


### [Machine Learning](#Machine-Learning)
* Libraries for Machine Learning.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [golearn](https://github.com/sjwhitworth/golearn) | 8945 | Machine Learning for Go | 4 months ago |
| [gorse](https://github.com/gorse-io/gorse) | 6958 | Gorse open source recommender system engine | 6 days ago |
| [gorgonia](https://github.com/gorgonia/gorgonia) | 5052 | Gorgonia is a library that helps facilitate machine learning in Go. | a month ago |
| [m2cgen](https://github.com/BayesWitnesses/m2cgen) | 2574 | Transform ML models into a native code (Java, C, Python, Go, JavaScript, Visual Basic, C#, R, PowerShell, PHP, Dart, Haskell, Ruby, F#, Rust) with zero dependencies | 4 months ago |
| [tfgo](https://github.com/galeone/tfgo) | 2262 | Tensorflow + Go, the gopher way | 5 months ago |
| [gosseract](https://github.com/otiai10/gosseract) | 2149 | Go package for OCR (Optical Character Recognition), by using Tesseract C++ library | 8 days ago |
| [goml](https://github.com/cdipaolo/goml) | 1481 | On-line Machine Learning in Go (and so much more) | a year ago |
| [eaopt](https://github.com/MaxHalford/eaopt) | 843 | :four_leaf_clover: Evolutionary optimization library for Go (genetic algorithm, partical swarm optimization, differential evolution) | 4 months ago |
| [bayesian](https://github.com/jbrukh/bayesian) | 764 | Naive Bayesian Classification for Golang. | 3 months ago |
| [CloudForest](https://github.com/ryanbressler/CloudForest) | 728 | Ensembles of decision trees in go/golang. | a year ago |
| [ocrserver](https://github.com/otiai10/ocrserver) | 584 | A simple OCR API server, seriously easy to be deployed by Docker, on Heroku as well | 2 years ago |
| [gobrain](https://github.com/goml/gobrain) | 545 | Neural Networks written in go | 3 years ago |
| [onnx-go](https://github.com/owulveryck/onnx-go) | 516 | onnx-go gives the ability to import a pre-trained neural network within Go without being linked to a framework or library. | 2 months ago |
| [go-deep](https://github.com/patrikeh/go-deep) | 458 | Artificial Neural Network | 2 months ago |
| [regommend](https://github.com/muesli/regommend) | 302 | Recommendation engine for Go | 4 years ago |
| [goptuna](https://github.com/c-bata/goptuna) | 238 | A hyperparameter optimization framework, inspired by Optuna. | 4 months ago |
| [go-galib](https://github.com/thoj/go-galib) | 195 | Genetic Algorithms library written in Go / golang | 8 years ago |
| [goga](https://github.com/tomcraven/goga) | 193 | Golang Genetic Algorithm | a year ago |
| [goRecommend](https://github.com/timkaye11/goRecommend) | 193 | Collaborative Filtering (CF) Algorithms in Go!  | 9 years ago |
| [shield](https://github.com/eaigner/shield) | 154 | Bayesian text classifier with flexible tokenizers and storage backends for Go | 3 years ago |
| [go-fann](https://github.com/vksnk/go-fann) | 114 | Go bindings for FANN, library for artificial neural networks | 8 years ago |
| [go-featureprocessing](https://github.com/nikolaydubina/go-featureprocessing) | 98 | 🔥 Fast, simple sklearn-like feature processing for Go | 20 days ago |
| [goscore](https://github.com/asafschers/goscore) | 88 | Go Scoring API for PMML | 4 years ago |
| [gonet](https://github.com/dathoangnd/gonet) | 79 | Neural Network for Go. | 3 years ago |
| [fonet](https://github.com/Fontinalis/fonet) | 77 | fonet is a deep neural network package for Go. | 2 years ago |
| [libsvm](https://github.com/datastream/libsvm) | 73 | libsvm go version | 7 years ago |
| [neat](https://github.com/jinyeom/neat) | 67 | NEAT (NeuroEvolution of Augmenting Topologies) implemented in Go | 5 years ago |
| [neural-go](https://github.com/schuyler/neural-go) | 65 | A multilayer perceptron network implemented in Go, with training via backpropagation. | 3 years ago |
| [go-pr](https://github.com/daviddengcn/go-pr) | 62 | Pattern recognition package in Go lang. | 10 years ago |
| [gomind](https://github.com/surenderthakran/gomind) | 57 | A simplistic Neural Network Library in Go | a year ago |
| [Varis](https://github.com/Xamber/Varis) | 52 | Golang Neural Network  | 5 years ago |
| [golinear](https://github.com/danieldk/golinear) | 45 | liblinear bindings for Go | 5 years ago |
| [go-cluster](https://github.com/e-XpertSolutions/go-cluster) | 39 | k-modes and k-prototypes clustering algorithms implementation in Go | 7 months ago |
| [godist](https://github.com/e-dard/godist) | 35 | Probability distributions and associated methods in Go | 8 years ago |
| [randomForest](https://github.com/malaschitz/randomForest) | 32 | Random Forest implementation in golang | a year ago |
| [ddt](https://github.com/sgrodriguez/ddt) | 29 | Golang Dynamic Decision Tree | 2 years ago |
| [evoli](https://github.com/khezen/evoli) | 26 | Genetic Algorithm and Particle Swarm Optimization | 2 years ago |
| [probab](https://github.com/ThePaw/probab) | 18 | Automatically exported from code.google.com/p/probab | 8 years ago |


### [Messaging](#Messaging)
* Libraries that implement messaging systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sarama](https://github.com/markrcote/sarama) | 10105 | Sarama is a Go library for Apache Kafka. | a day ago |
| [centrifugo](https://github.com/centrifugal/centrifugo) | 7182 | Scalable real-time messaging server in a language-agnostic way. Set up once and forever. | 4 days ago |
| [gorush](https://github.com/appleboy/gorush) | 7134 | A push notification server written in Go (Golang). | 2 days ago |
| [machinery](https://github.com/RichardKnop/machinery) | 6899 | Machinery is an asynchronous task queue/job queue based on distributed message passing. | 6 days ago |
| [asynq](https://github.com/hibiken/asynq) | 6328 | Simple, reliable, and efficient distributed task queue in Go | 5 hours ago |
| [benthos](https://github.com/benthosdev/benthos) | 6328 | Fancy stream processing made operationally mundane | 5 hours ago |
| [go-socket.io](https://github.com/googollee/go-socket.io) | 5228 | socket.io library for golang, a realtime application framework. | a month ago |
| [nats.go](https://github.com/nats-io/nats.go) | 4630 | Golang client for NATS, the cloud native messaging system. | 14 hours ago |
| [confluent-kafka-go](https://github.com/confluentinc/confluent-kafka-go) | 4016 | Confluent's Apache Kafka Golang client | 3 hours ago |
| [mercure](https://github.com/dunglas/mercure) | 3421 | An open, easy, fast, reliable and battery-efficient solution for real-time communications | 21 days ago |
| [melody](https://github.com/olahol/melody) | 3188 | :notes: Minimalist websocket framework for Go | 10 days ago |
| [apns2](https://github.com/sideshow/apns2) | 2826 | ⚡ HTTP/2 Apple Push Notification Service (APNs) push provider for Go — Send push notifications to iOS, tvOS, Safari and OSX apps, using the APNs HTTP/2 protocol. | 3 days ago |
| [go-nsq](https://github.com/nsqio/go-nsq) | 2436 | The official Go package for NSQ | a month ago |
| [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) | 2075 | Golang push server cluster | 6 years ago |
| [uniqush-push](https://github.com/uniqush/uniqush-push) | 1498 | Uniqush is a free and open source software system which provides a unified push service for server side notification to apps on mobile devices. | 3 years ago |
| [EventBus](https://github.com/asaskevich/EventBus) | 1463 | [Go] Lightweight eventbus with async compatibility for Go | 10 months ago |
| [Beaver](https://github.com/Clivern/Beaver) | 1449 | 💨 A real time messaging system to build a scalable in-app notifications, multiplayer games, chat apps in web and mobile apps. | 25 days ago |
| [chanify](https://github.com/chanify/chanify) | 1085 | Chanify is a safe and simple notification tools. This repository is command line tools for Chanify. | a month ago |
| [zmq4](https://github.com/pebbe/zmq4) | 1064 | A Go interface to ZeroMQ version 4 | a month ago |
| [gollum](https://github.com/trivago/gollum) | 931 | An n:m message multiplexer written in Go | 5 months ago |
| [amqp091-go](https://github.com/rabbitmq/amqp091-go) | 899 | An AMQP 0-9-1 Go client maintained by the RabbitMQ team. Originally by @streadway: `streadway/amqp` | 19 days ago |
| [dbus](https://github.com/godbus/dbus) | 864 | Native Go bindings for D-Bus | 24 days ago |
| [golongpoll](https://github.com/jcuga/golongpoll) | 635 | golang long polling library.  Makes web pub-sub easy via HTTP long-poll servers and clients :smiley: :coffee: :computer: | a year ago |
| [mangos](https://github.com/nanomsg/mangos) | 599 | mangos is a pure Golang implementation of nanomsg's "Scalablilty Protocols" | 2 months ago |
| [emitter](https://github.com/olebedev/emitter) | 467 | Emits events in Go way, with wildcard, predicates, cancellation possibilities and many other good wins | 3 months ago |
| [glue](https://github.com/desertbit/glue) | 408 | Glue - Robust Go and Javascript Socket Library (Alternative to Socket.io) | 3 years ago |
| [pubsub](https://github.com/cskr/pubsub) | 392 | A simple pubsub package for go. | a year ago |
| [bus](https://github.com/mustafaturan/bus) | 301 | 🔊Minimalist message bus implementation for internal communication with zero-allocation magic on Emit | 2 months ago |
| [message-bus](https://github.com/vardius/message-bus) | 249 | Go simple async message bus | 2 years ago |
| [rabtap](https://github.com/jandelgado/rabtap) | 241 | RabbitMQ wire tap and swiss army knife | 5 months ago |
| [guble](https://github.com/smancke/guble) | 155 | websocket based messaging server written in golang | 6 years ago |
| [zmq3](https://github.com/pebbe/zmq3) | 132 | A Go interface to ZeroMQ version 3 | 2 years ago |
| [hub](https://github.com/leandro-lugaresi/hub) | 130 | :incoming_envelope: A fast Message/Event Hub using publish/subscribe pattern with support for topics like* rabbitMQ exchanges for Go applications | 3 years ago |
| [oplog](https://github.com/dailymotion/oplog) | 114 | A generic oplog/replication system for microservices | 8 years ago |
| [redisqueue](https://github.com/robinjoseph08/redisqueue) | 114 | redisqueue provides a producer and consumer of a queue that uses Redis streams | 9 months ago |
| [go-gcm](https://github.com/googlearchive/go-gcm) | 103 | GCM library for Go. | 4 years ago |
| [rabbus](https://github.com/rafaeljesus/rabbus) | 97 | A tiny wrapper over amqp exchanges and queues 🚌 ✨ | 4 years ago |
| [go-mq](https://github.com/cheshir/go-mq) | 87 | Declare AMQP entities like queues, producers, and consumers in a declarative way. Can be used to work with RabbitMQ. | 2 months ago |
| [drone-line](https://github.com/appleboy/drone-line) | 79 | Sending line notifications using a binary, docker or Drone CI. | 5 months ago |
| [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) | 77 | A tiny wrapper around NSQ topic and channel :rocket: | 5 years ago |
| [go-notify](https://github.com/TheCreeper/go-notify) | 67 | Package notify provides an implementation of the Gnome DBus Notifications Specification. | 3 years ago |
| [commander](https://github.com/jeroenrinzema/commander) | 65 | Build event-driven and event streaming applications with ease | 2 years ago |
| [RapidMQ](https://github.com/sybrexsys/RapidMQ) | 65 | RapidMQ is a pure, extremely productive, lightweight and reliable library for managing of the local messages queue | 6 years ago |
| [go-res](https://github.com/jirenius/go-res) | 63 | RES Service protocol library for Go | a year ago |
| [event](https://github.com/agoalofalife/event) | 53 | The implementation of the pattern observer | 5 years ago |
| [hare](https://github.com/leozz37/hare) | 53 | 🐇  CLI tool for websockets and Go package | 10 months ago |
| [ami](https://github.com/kak-tus/ami) | 26 | Go client to reliable queues based on Redis Cluster Streams | 3 years ago |
| [go-vitotrol](https://github.com/maxatome/go-vitotrol) | 22 | golang client library to Viessmann Vitotrol web service | a year ago |
| [gosd](https://github.com/alexsniffin/gosd) | 22 | A library for scheduling when to dispatch a message to a channel | a year ago |
| [rmqconn](https://github.com/sbabiv/rmqconn) | 20 | RabbitMQ Reconnection client | 3 years ago |
| [jazz](https://github.com/socifi/jazz) | 18 | Abstraction layer for simple rabbitMQ connection, messaging and administration | 4 years ago |
| [zmq2](https://github.com/pebbe/zmq2) | 18 | A Go interface to ZeroMQ version 2 | 2 years ago |
| [gaurun-client](https://github.com/osamingo/gaurun-client) | 11 | Gaurun Client written in Go | 2 years ago |


### [Microsoft Office](#Microsoft-Office)
* Office

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [unioffice](https://github.com/unidoc/unioffice) | 3880 | Pure go library for creating and processing Office Word (.docx), Excel (.xlsx) and Powerpoint (.pptx) documents | 7 days ago |


### [Microsoft Excel](#Microsoft-Excel)
* Libraries for working with Microsoft Excel.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [excelize](https://github.com/qax-os/excelize) | 15476 | Go language library for reading and writing Microsoft Excel™ (XLAM / XLSM / XLSX / XLTM / XLTX) spreadsheets | 2 days ago |
| [xlsx](https://github.com/tealeg/xlsx) | 5510 | (No longer maintained!) Go (golang) library for reading and writing XLSX files.  | 14 days ago |
| [go-excel](https://github.com/szyhf/go-excel) | 174 | A simple and light excel file reader to read a standard excel as a table faster , 一个轻量级的Excel数据读取库，用一种更`关系数据库`的方式解析Excel。 | 8 months ago |
| [xlsx](https://github.com/plandem/xlsx) | 163 | Fast and reliable way to work with Microsoft Excel™ [xlsx] files in Golang | 3 years ago |
| [goxlsxwriter](https://github.com/fterrag/goxlsxwriter) | 20 | Golang bindings for libxlsxwriter for writing XLSX files | a year ago |


### [Miscellaneous](#Miscellaneous)
* 

#### [Dependency Injection](#Dependency-Injection)
* Libraries for working with dependency injection.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fx](https://github.com/uber-go/fx) | 4121 | A dependency injection based application framework for Go. | 9 hours ago |
| [dig](https://github.com/uber-go/dig) | 3265 | A reflection based dependency injection toolkit for Go. | a month ago |
| [container](https://github.com/golobby/container) | 472 | A lightweight yet powerful IoC dependency injection container for the Go programming language | 3 months ago |
| [di](https://github.com/goioc/di) | 284 | Simple and yet powerful Dependency Injection for Go | 7 days ago |
| [di](https://github.com/defval/di) | 196 | 🛠 A full-featured dependency injection container for go programming language. | 13 days ago |
| [dingo](https://github.com/i-love-flamingo/dingo) | 163 | Go Dependency Injection Framework | a month ago |
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
| [project-layout](https://github.com/golang-standards/project-layout) | 40425 | Standard Go Project Layout | a day ago |
| [service](https://github.com/ardanlabs/service) | 2791 | Starter code for writing web services in Go using Kubernetes. | 5 hours ago |
| [modern-go-application](https://github.com/sagikazarmark/modern-go-application) | 1585 | Modern Go Application example | 5 days ago |
| [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) | 617 | A Go project template | a year ago |
| [seed](https://github.com/golang-templates/seed) | 385 | Go application GitHub repository template. | 19 hours ago |
| [go-starter](https://github.com/allaboutapps/go-starter) | 352 | An opinionated production-ready SQL-/Swagger-first RESTful JSON API written in Go, highly integrated with VSCode DevContainers by allaboutapps. | 20 days ago |
| [go-todo-backend](https://github.com/Fs02/go-todo-backend) | 233 | Go Todo Backend example using modular project layout for product microservice. | a month ago |
| [scaffold](https://github.com/catchplay/scaffold) | 141 | Generate scaffold project layout for Go. | 5 years ago |
| [go-sample](https://github.com/zitryss/go-sample) | 125 | Go Project Sample Layout | 4 years ago |
| [gobase](https://github.com/wajox/gobase) | 47 | This is a simple skeleton for golang applications | 19 days ago |
| [go-project-layout](https://github.com/wangyoucao577/go-project-layout) | 21 | My understanding of how to structure a golang project.  | 2 years ago |
| [inizio](https://github.com/insidieux/inizio) | 16 | Golang project standard layout generator | 4 months ago |


#### [Strings](#Strings)
* Libraries for working with strings.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xstrings](https://github.com/huandu/xstrings) | 1218 | Implements string functions widely used in other languages but absent in Go. | 7 months ago |
| [sttr](https://github.com/abhimanyu003/sttr) | 729 | cross-platform, cli app to perform various operations on string | 3 months ago |
| [strutil](https://github.com/ozgio/strutil) | 194 | String utilities for Go | a year ago |
| [stringy](https://github.com/gobeam/stringy) | 178 | Convert string to camel case, snake case, kebab case / slugify, custom delimiter, pad string, tease string and many other functionalities with help of by Stringy package. | 6 months ago |
| [bexp](https://github.com/mkungla/bexp) | 0 | Go implementation of Brace Expansion mechanism to generate arbitrary strings. | 4 months ago |


#### [Uncategorized](#Uncategorized)
* These libraries were placed here because none of the other categories seemed to fit.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopsutil](https://github.com/shirou/gopsutil) | 9229 | psutil for golang | 2 days ago |
| [archiver](https://github.com/mholt/archiver) | 4005 | Easily create & extract archives, and compress & decompress files of various formats | 2 months ago |
| [gatus](https://github.com/TwiN/gatus) | 3837 | ⛑ Automated developer-oriented status page | 19 hours ago |
| [oapi-codegen](https://github.com/deepmap/oapi-codegen) | 3713 | Generate Go client and server boilerplate from OpenAPI 3 specifications | 13 hours ago |
| [gofakeit](https://github.com/brianvoe/gofakeit) | 3186 | Random fake data generator written in go | 4 days ago |
| [go-resiliency](https://github.com/eapache/go-resiliency) | 1829 | Resiliency patterns for golang | 5 months ago |
| [base64Captcha](https://github.com/mojocn/base64Captcha) | 1802 | captcha of base64 image string | 2 months ago |
| [gosms](https://github.com/haxpax/gosms) | 1430 | :mailbox_closed: Your own local SMS gateway in Go | 2 years ago |
| [go-commons-pool](https://github.com/jolestar/go-commons-pool) | 1165 | a generic object pool for golang | a month ago |
| [llvm](https://github.com/llir/llvm) | 1067 | Library for interacting with LLVM IR in pure Go. | 5 months ago |
| [shortid](https://github.com/teris-io/shortid) | 860 | Super short, fully unique, non-sequential and URL friendly Ids | a year ago |
| [health](https://github.com/alexliesenfeld/health) | 681 | A simple and flexible health check library for Go. | 7 days ago |
| [shoutrrr](https://github.com/containrrr/shoutrrr) | 663 | Notification library for gophers and their furry friends. | a day ago |
| [stateless](https://github.com/qmuntal/stateless) | 636 | Go library for creating finite state machines | 4 days ago |
| [health](https://github.com/dimiro1/health) | 444 | An easy to use, extensible health check library for Go applications. | a year ago |
| [banner](https://github.com/dimiro1/banner) | 435 | An easy way to add useful startup banners into your Go applications | 3 years ago |
| [gountries](https://github.com/pariz/gountries) | 388 | Gountries provides: Countries (ISO-3166-1), Country Subdivisions(ISO-3166-2), Currencies (ISO 4217), Geo Coordinates(ISO-6709) as well as translations, country borders and other stuff exposed as struct data. | 2 months ago |
| [go-conv](https://github.com/cstockton/go-conv) | 386 | Fast conversions across various Go types with a simple API. | 2 years ago |
| [lk](https://github.com/hyperboloide/lk) | 299 | Simple licensing library for golang. | 4 months ago |
| [ffmt](https://github.com/go-ffmt/ffmt) | 291 | Golang beautify data display for Humans | 2 years ago |
| [healthcheck](https://github.com/etherlabsio/healthcheck) | 256 | An simple, easily extensible and concurrent health-check library for Go services | 10 months ago |
| [antch](https://github.com/antchfx/antch) | 250 | Antch, a fast, powerful and extensible web crawling & scraping framework for Go | 3 years ago |
| [go-unarr](https://github.com/gen2brain/go-unarr) | 238 | Go bindings for unarr (decompression library for RAR, TAR, ZIP and 7z archives) | a month ago |
| [battery](https://github.com/distatus/battery) | 225 | cross-platform, normalized battery information library | 18 days ago |
| [bitio](https://github.com/icza/bitio) | 220 | Optimized bit-level Reader and Writer for Go. | 3 months ago |
| [stats](https://github.com/go-playground/stats) | 166 | :chart_with_upwards_trend: Monitors Go MemStats + System stats such as Memory, Swap and CPU and sends via UDP anywhere you want for logging etc... | 7 years ago |
| [turtle](https://github.com/hackebrot/turtle) | 152 | Emojis for Go 😄🐢🚀 | 2 years ago |
| [captcha](https://github.com/steambap/captcha) | 133 | :sunglasses:Package captcha provides an easy to use, unopinionated API for captcha generation | 4 months ago |
| [gotoprom](https://github.com/cabify/gotoprom) | 106 | Type-safe Prometheus metrics builder library for golang | 5 months ago |
| [gommit](https://github.com/antham/gommit) | 103 | Enforce git message commit consistency | 6 days ago |
| [indigo](https://github.com/osamingo/indigo) | 103 | A distributed unique ID generator of using Sonyflake and encoded by Base58 | 2 months ago |
| [morse](https://github.com/alwindoss/morse) | 78 | Morse Code Library in Go | 10 months ago |
| [faker](https://github.com/pioz/faker) | 76 | Random fake data and struct generator for Go. | 9 months ago |
| [persian](https://github.com/mavihq/persian) | 73 | Some utilities for Persian language in Go (Golang) | 2 years ago |
| [pdfgen](https://github.com/hyperboloide/pdfgen) | 61 | HTTP service to generate PDF from Json requests | 5 years ago |
| [xkg](https://github.com/go-xkg/xkg) | 56 | User level X Keyboard Grabber | 9 years ago |
| [datacounter](https://github.com/miolini/datacounter) | 45 | Golang counters for readers/writers | 3 months ago |
| [browscap_go](https://github.com/digitalcrab/browscap_go) | 44 | GoLang Library for Browser Capabilities Project | 20 days ago |
| [url-shortener](https://github.com/pantrif/url-shortener) | 42 | A golang URL Shortener | 5 months ago |
| [sandid](https://github.com/aofei/sandid) | 40 | Every grain of sand on Earth has its own ID. | a year ago |
| [autoflags](https://github.com/artyom/autoflags) | 39 | Populate go command line app flags from config struct | a year ago |
| [gosh](https://github.com/osamingo/gosh) | 34 | Provide Go Statistics Handler, Struct, Measure Method | 2 months ago |
| [xdg](https://github.com/rkoesters/xdg) | 32 | FreeDesktop.org (xdg) Specs implemented in Go | 4 months ago |
| [metrics](https://github.com/pascaldekloe/metrics) | 26 | atomic measures + Prometheus exposition library | 4 months ago |
| [shellwords](https://github.com/Wing924/shellwords) | 20 | A Golang library to manipulate strings according to the word parsing rules of the UNIX Bourne shell. | 3 months ago |
| [numa](https://github.com/lrita/numa) | 16 | NUMA is a utility library, which is written in go. It help us to write some NUMA-AWARED code. | 4 months ago |
| [anagent](https://github.com/mudler/anagent) | 14 | Minimalistic, pluggable Golang evloop/timer handler with dependency-injection | 5 years ago |
| [avgRating](https://github.com/kirillDanshin/avgRating) | 14 | Calculate average score and rating based on Wilson Score Equation | 6 years ago |
| [hostutils](https://github.com/Wing924/hostutils) | 12 | A golang library for packing and unpacking hosts list | 3 months ago |
| [go-commandbus](https://github.com/lana/go-commandbus) | 10 | Simple command bus for GO | a year ago |
| [generators](https://github.com/azr/generators) | 5 | #golang generator | 7 years ago |
| [basexx](https://github.com/bobg/basexx) | 4 | Convert digit strings between arbitrary bases. | a day ago |


### [Natural Language Processing](#Natural-Language-Processing)
* Libraries for working with human languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jieba](https://github.com/fxsjy/jieba) | 30883 | 结巴中文分词 | a year ago |
| [vaderSentiment](https://github.com/cjhutto/vaderSentiment) | 4000 | VADER Sentiment Analysis. VADER (Valence Aware Dictionary and sEntiment Reasoner) is a lexicon and rule-based sentiment analysis tool that is specifically attuned to sentiments expressed in social media, and works well on texts from other domains.  | 8 months ago |
| [prose](https://github.com/jdkato/prose) | 3001 | :book: A Golang library for text processing, including tokenization, part-of-speech tagging, and named-entity extraction. | 2 months ago |
| [go-i18n](https://github.com/nicksnyder/go-i18n) | 2443 | Translate your Go program into multiple languages. | a month ago |
| [gse](https://github.com/go-ego/gse) | 2263 | Go efficient multilingual NLP and text segmentation; support English, Chinese, Japanese and others. | 5 months ago |
| [gojieba](https://github.com/yanyiwu/gojieba) | 2164 | "结巴"中文分词的Golang版本 | 2 months ago |
| [spago](https://github.com/nlpodyssey/spago) | 1537 | Self-contained Machine Learning and Natural Language Processing library in Go | 20 days ago |
| [go-pinyin](https://github.com/mozillazg/go-pinyin) | 1425 | 汉字转拼音 | 2 months ago |
| [when](https://github.com/olebedev/when) | 1281 | A natural language date/time parser with pluggable rules | a month ago |
| [kagome](https://github.com/ikawaha/kagome) | 738 | Self-contained Japanese Morphological Analyzer written in pure Go | 2 months ago |
| [whatlanggo](https://github.com/abadojack/whatlanggo) | 591 | Natural language detection library for Go | 3 months ago |
| [nlp](https://github.com/james-bowman/nlp) | 411 | Selected Machine Learning algorithms for natural language processing and semantic analysis in Golang | 2 years ago |
| [nlp](https://github.com/shixzie/nlp) | 381 | [UNMANTEINED] Extract values from strings and fill your structs with nlp. | 6 years ago |
| [sentences](https://github.com/neurosnap/sentences) | 366 | A multilingual command line sentence tokenizer in Golang | 5 months ago |
| [getlang](https://github.com/rylans/getlang) | 155 | Natural language detection package in pure Go | 3 years ago |
| [go-unidecode](https://github.com/mozillazg/go-unidecode) | 108 | ASCII transliterations of Unicode text. | 2 months ago |
| [RAKE.Go](https://github.com/afjoseph/RAKE.Go) | 99 | A Go port of the Rapid Automatic Keyword Extraction algorithm (RAKE) | 3 years ago |
| [go-nlp](https://github.com/nuance/go-nlp) | 95 | Utilities for working with discrete probability distributions and other tools useful for doing NLP work | 12 years ago |
| [gounidecode](https://github.com/fiam/gounidecode) | 78 | Unicode transliterator for #golang | 8 years ago |
| [segment](https://github.com/blevesearch/segment) | 78 | A Go library for performing Unicode Text Segmentation as described in Unicode Standard Annex #29 | 7 months ago |
| [go-stem](https://github.com/agonopol/go-stem) | 75 | Word Stemming in Go | 5 years ago |
| [textcat](https://github.com/pebbe/textcat) | 70 | A Go package for n-gram based text categorization, with support for utf-8 and raw text | 2 years ago |
| [address](https://github.com/bojanz/address) | 64 | Address handling for Go. | 9 days ago |
| [MMSEGO](https://github.com/awsong/MMSEGO) | 62 | Chinese word splitting algorithm MMSEG in GO | 11 years ago |
| [go-localize](https://github.com/m1/go-localize) | 54 | i18n (Internationalization and localization) engine written in Go, used for translating locale strings.  | 2 years ago |
| [go2vec](https://github.com/danieldk/go2vec) | 52 | Read and use word2vec vectors in Go | 5 years ago |
| [stemmer](https://github.com/dchest/stemmer) | 51 | Stemmer packages for Go programming language. Includes English, German and Dutch stemmers. | 7 years ago |
| [porter2](https://github.com/zentures/porter2) | 46 | High Performance Porter2 Stemmer | 3 years ago |
| [petrovich](https://github.com/striker2000/petrovich) | 43 | Golang port of Petrovich - an inflector for Russian anthroponyms. | 2 years ago |
| [iuliia-go](https://github.com/mehanizm/iuliia-go) | 39 | Transliterate Cyrillic → Latin in every possible way | 2 years ago |
| [govader](https://github.com/jonreiter/govader) | 35 | vader sentiment analysis in go | 5 months ago |
| [snowball](https://github.com/goodsign/snowball) | 35 | Cgo binding for Snowball C library | 6 years ago |
| [transliterator](https://github.com/alexsergivan/transliterator) | 35 | Golang text Transliterator (i.e München -> Muenchen) | 10 months ago |
| [mystem](https://github.com/dveselov/mystem) | 30 | CGo bindings to Yandex.Mystem | 7 years ago |
| [paicehusk](https://github.com/rookii/paicehusk) | 28 | Golang implementation of the Paice/Husk Stemming Algorithm | 10 years ago |
| [detectlanguage-go](https://github.com/detectlanguage/detectlanguage-go) | 22 | Detect Language API Go Client | a year ago |
| [icu](https://github.com/goodsign/icu) | 21 | Cgo binding for icu4c library | 6 years ago |
| [golibstemmer](https://github.com/rjohnsondev/golibstemmer) | 20 | Go bindings for the snowball libstemmer library including porter 2 | 9 years ago |
| [gotokenizer](https://github.com/xujiajun/gotokenizer) | 17 | A tokenizer based on the dictionary and Bigram language models for Go. (Now only support chinese segmentation) | 4 years ago |
| [t](https://github.com/youthlin/t) | 15 | t: translation util for go, using GNU gettext | 16 days ago |
| [shamoji](https://github.com/osamingo/shamoji) | 13 | The shamoji (杓文字) is a word filtering package | 7 months ago |
| [libtextcat](https://github.com/goodsign/libtextcat) | 12 | Cgo binding for libtextcat C library | 11 years ago |
| [porter](https://github.com/a2800276/porter) | 12 | porter stemmer | 10 years ago |
| [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) | 10 | 💬 Sentiment analyzer library using SentiWordnet in Go | 2 years ago |


### [Networking](#Networking)
* Libraries for working with various layers of the network.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fasthttp](https://github.com/valyala/fasthttp) | 19801 | Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http | 3 days ago |
| [kcptun](https://github.com/xtaci/kcptun) | 13405 | A Stable & Secure Tunnel based on KCP with N:M multiplexing and FEC. Available for ARM, MIPS, 386 and AMD64。N:M 多重化と FEC を備えた KCP に基づく安定した安全なトンネル。 N:M 다중화 및 FEC를 사용하는 KCP 기반의 안정적이고 안전한 터널입니다.  Un tunnel stable et sécurisé basé sur KCP avec multiplexage N:M et FEC. | 4 months ago |
| [webrtc](https://github.com/pion/webrtc) | 11394 | Pure Go implementation of the WebRTC API | 6 hours ago |
| [quic-go](https://github.com/quic-go/quic-go) | 8420 | A QUIC implementation in pure go | 7 hours ago |
| [gnet](https://github.com/panjf2000/gnet) | 7831 | 🚀 gnet is a high-performance, lightweight, non-blocking, event-driven networking framework written in pure Go./ gnet 是一个高性能、轻量级、非阻塞的事件驱动 Go 网络框架。 | 9 days ago |
| [dns](https://github.com/miekg/dns) | 7082 | DNS library in Go | 6 days ago |
| [gopacket](https://github.com/google/gopacket) | 5701 | Provides packet processing capabilities for Go | 4 days ago |
| [httplab](https://github.com/qustavo/httplab) | 3903 | The interactive web server | 2 months ago |
| [kcp-go](https://github.com/xtaci/kcp-go) | 3683 |  A Crypto-Secure, Production-Grade Reliable-UDP Library for golang with FEC  | 2 months ago |
| [gobgp](https://github.com/osrg/gobgp) | 3251 | BGP implemented in the Go Programming Language | 4 days ago |
| [ssh](https://github.com/gliderlabs/ssh) | 3073 | Easy SSH servers in Golang | a day ago |
| [fortio](https://github.com/fortio/fortio) | 2951 | Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats. | 12 hours ago |
| [water](https://github.com/songgao/water) | 1698 | A simple TUN/TAP library written in native Go. | 3 months ago |
| [gev](https://github.com/Allenxuxu/gev) | 1649 | 🚀Gev is a lightweight, fast non-blocking TCP network library / websocket server based on Reactor mode. Support custom protocols to quickly and easily build high-performance servers.  | 5 months ago |
| [nbio](https://github.com/lesismal/nbio) | 1647 | Pure Go 1000k+ connections solution, support tls/http1.x/websocket and basically compatible with net/http, with high-performance and low memory cost, non-blocking, event-driven, easy-to-use. | 13 days ago |
| [go-getter](https://github.com/hashicorp/go-getter) | 1496 | Package for downloading things from a string URL using a variety of protocols. | a month ago |
| [sftp](https://github.com/pkg/sftp) | 1364 | SFTP support for the go.crypto/ssh package | 2 months ago |
| [nff-go](https://github.com/aregm/nff-go) | 1308 | NFF-Go -Network Function Framework for GO (former YANFF) | 8 months ago |
| [grab](https://github.com/cavaliergopher/grab) | 1265 | A download manager package for Go | 7 days ago |
| [ftp](https://github.com/jlaffaye/ftp) | 1137 | FTP client package for Go | 10 days ago |
| [mdns](https://github.com/hashicorp/mdns) | 989 | Simple mDNS client/server library in Golang | 7 days ago |
| [gosnmp](https://github.com/gosnmp/gosnmp) | 973 | An SNMP library written in Go | 11 days ago |
| [vssh](https://github.com/yahoo/vssh) | 904 | Go Library to Execute Commands Over SSH at Scale | 2 months ago |
| [gmqtt](https://github.com/DrmagicE/gmqtt) | 880 | Gmqtt is a flexible, high-performance MQTT broker library that fully implements the MQTT protocol V3.x and V5 in golang | 20 days ago |
| [cidranger](https://github.com/yl2chen/cidranger) | 839 | Fast IP to CIDR lookup in Golang | a month ago |
| [lhttp](https://github.com/fanux/lhttp) | 686 | go websocket, a better way to buid your IM server | 5 years ago |
| [easytcp](https://github.com/DarthPestilane/easytcp) | 683 | :sparkles: :rocket: EasyTCP is a light-weight TCP framework written in Go (Golang), built with message router. EasyTCP helps you build a TCP server easily fast and less painful. | 4 months ago |
| [peerdiscovery](https://github.com/schollz/peerdiscovery) | 594 | Pure-Go library for cross-platform local peer discovery using UDP multicast :woman: :repeat: :woman: | 4 months ago |
| [go-stun](https://github.com/ccding/go-stun) | 586 | A go implementation of the STUN client (RFC 3489 and RFC 5389) | 3 months ago |
| [gotcp](https://github.com/gansidui/gotcp) | 508 | A Go package for quickly building tcp servers | 6 years ago |
| [gaio](https://github.com/xtaci/gaio) | 502 | High performance async-io(proactor) networking for Golang。golangのための高性能非同期io(proactor)ネットワーキング | a year ago |
| [stun](https://github.com/gortc/stun) | 488 | Fast RFC 5389 STUN implementation in go | 2 years ago |
| [gopcap](https://github.com/akrennmair/gopcap) | 472 | A simple wrapper around libpcap for the Go programming language | 2 years ago |
| [raw](https://github.com/mdlayher/raw) | 421 | Package raw enables reading and writing data at the device driver level for a network interface.  MIT Licensed. | a year ago |
| [tcp_server](https://github.com/firstrow/tcp_server) | 421 | golang tcp server | 2 years ago |
| [winrm](https://github.com/masterzen/winrm) | 403 | Command-line tool and library for Windows remote command execution in Go | 4 months ago |
| [ftpserverlib](https://github.com/fclairamb/ftpserverlib) | 366 | golang ftp server library | 6 days ago |
| [arp](https://github.com/mdlayher/arp) | 325 | Package arp implements the ARP protocol, as described in RFC 826. MIT Licensed. | 7 months ago |
| [ethernet](https://github.com/mdlayher/ethernet) | 268 | Package ethernet implements marshaling and unmarshaling of IEEE 802.3 Ethernet II frames and IEEE 802.1Q VLAN tags. MIT Licensed. | a year ago |
| [buffstreams](https://github.com/StabbyCutyou/buffstreams) | 253 | A library to simplify writing applications using TCP sockets to stream protobuff messages | 3 years ago |
| [gnxi](https://github.com/google/gnxi) | 238 | gNXI Tools - gRPC Network Management/Operations Interface Tools | a month ago |
| [jazigo](https://github.com/udhos/jazigo) | 194 | Jazigo is a tool written in Go for retrieving configuration for multiple devices, similar to rancid, fetchconfig, oxidized, Sweet. | 2 months ago |
| [utp](https://github.com/anacrolix/utp) | 168 | Use anacrolix/go-libutp instead | 2 months ago |
| [canopus](https://github.com/zubairhamed/canopus) | 152 | CoAP Client/Server implementing RFC 7252 for the Go Language | 5 years ago |
| [sslb](https://github.com/eduardonunesp/sslb) | 143 | Golang Super Simple Load Balance | 6 months ago |
| [xtcp](https://github.com/xfxdev/xtcp) | 143 | A TCP Server Framework with graceful shutdown, custom protocol. | 3 years ago |
| [iplib](https://github.com/c-robinson/iplib) | 114 | A library  for working with IP addresses and networks in Go | 6 months ago |
| [ether](https://github.com/songgao/ether) | 79 | A Go package for sending and receiving ethernet frames. Currently supporting Linux, Freebsd, and OS X. | 7 years ago |
| [dhcp6](https://github.com/mdlayher/dhcp6) | 76 | Package dhcp6 implements a DHCPv6 server, as described in RFC 3315. MIT Licensed. | 5 months ago |
| [packet](https://github.com/aerogo/packet) | 73 | :package: Send network packets over a TCP or UDP connection. | 4 years ago |
| [go-powerdns](https://github.com/joeig/go-powerdns) | 71 | Go PowerDNS 4.x API Client | 9 days ago |
| [portproxy](https://github.com/aybabtme/portproxy) | 53 | TCP proxy, highjacks HTTP to allow CORS | 9 years ago |
| [linkio](https://github.com/ian-kent/linkio) | 52 | Simulate network link speed | 6 years ago |
| [panoptes-stream](https://github.com/yahoo/panoptes-stream) | 39 | A cloud native distributed streaming network telemetry. | 2 years ago |
| [golibwireshark](https://github.com/sunwxg/golibwireshark) | 29 |  | 6 years ago |
| [graval](https://github.com/koofr/graval) | 28 | An experimental go FTP server framework | 3 years ago |
| [publicip](https://github.com/polera/publicip) | 26 | Go pkg for returning your public facing IP address. | 7 years ago |
| [httpproxy](https://github.com/wzshiming/httpproxy) | 21 | HTTP proxy handler and dialer | 3 months ago |
| [goshark](https://github.com/sunwxg/goshark) | 16 |  | 6 years ago |
| [llb](https://github.com/kirillDanshin/llb) | 14 |  | 7 years ago |
| [tspool](https://github.com/two/tspool) | 14 | tcp server pool | 5 years ago |


### [HTTP Clients](#HTTP-Clients)
* Libraries for making HTTP requests.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [resty](https://github.com/go-resty/resty) | 8027 | Simple HTTP and REST client library for Go | 14 days ago |
| [heimdall](https://github.com/gojek/heimdall) | 2455 | An enhanced HTTP client for Go | 4 months ago |
| [grequests](https://github.com/levigross/grequests) | 1977 | A Go "clone" of the great and famous Requests library | 4 months ago |
| [sling](https://github.com/dghubble/sling) | 1586 | A Go HTTP client library for creating and sending API requests | 18 hours ago |
| [requests](https://github.com/carlmjohnson/requests) | 1059 | HTTP requests for Gophers | a month ago |
| [gentleman](https://github.com/h2non/gentleman) | 1009 | Plugin-driven, extensible HTTP client toolkit for Go | 2 years ago |
| [pester](https://github.com/sethgrid/pester) | 618 | Go (golang) http calls with retries and backoff  | a year ago |
| [request](https://github.com/monaco-io/request) | 243 | go request, go http client | 9 days ago |
| [go-http-client](https://github.com/bozd4g/go-http-client) | 59 | An enhanced http client for Golang | 7 months ago |
| [rq](https://github.com/ddo/rq) | 48 | A nicer interface for golang stdlib HTTP client | 4 years ago |
| [httpretry](https://github.com/ybbus/httpretry) | 37 | Enriches the standard go http client with retry functionality. | 5 months ago |
| [go-req](https://github.com/wenerme/go-req) | 20 | Declarative golang HTTP client | a year ago |
| [httpc](https://github.com/valord577/httpc) | 5 | A customizable and simple HTTP client library. Only depend on the stdlib HTTP client. | 2 years ago |


### [OpenGL](#OpenGL)
* Libraries for using OpenGL in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glfw](https://github.com/go-gl/glfw) | 1409 | Go bindings for GLFW 3 | 4 months ago |
| [gl](https://github.com/go-gl/gl) | 979 | Go bindings for OpenGL (generated via glow) | 2 years ago |
| [mathgl](https://github.com/go-gl/mathgl) | 499 | A pure Go 3D math library. | 3 months ago |
| [gl](https://github.com/goxjs/gl) | 164 | Go cross-platform OpenGL bindings. | 6 days ago |
| [glfw](https://github.com/goxjs/glfw) | 77 | Go cross-platform glfw library for creating an OpenGL context and receiving events. | 7 days ago |
| [go-glmatrix](https://github.com/technohippy/go-glmatrix) | 7 | go-glmatrix is a golang version of glMatrix, which is "designed to perform vector and matrix operations stupidly fast". | 2 years ago |


### [ORM](#ORM)
* Libraries that implement Object-Relational Mapping or datamapping techniques.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gorm](https://github.com/go-gorm/gorm) | 32938 | The fantastic ORM library for Golang, aims to be developer friendly | 2 days ago |
| [beego](https://github.com/beego/beego) | 29952 | beego is an open-source, high-performance web framework for the Go programming language. | 12 hours ago |
| [ent](https://github.com/ent/ent) | 13736 | An entity framework for Go | 2 hours ago |
| [sqlboiler](https://github.com/volatiletech/sqlboiler) | 5880 | Generate a Go ORM tailored to your database schema. | 4 days ago |
| [pg](https://github.com/go-pg/pg) | 5424 | Golang ORM with focus on PostgreSQL features and performance | 2 days ago |
| [gorp](https://github.com/go-gorp/gorp) | 3673 | Go Relational Persistence - an ORM-ish library for Go | 4 days ago |
| [db](https://github.com/upper/db) | 3348 | Data access layer for PostgreSQL, CockroachDB, MySQL, SQLite and MongoDB with ORM-like features. | 4 months ago |
| [gormt](https://github.com/xxjwxc/gormt) | 2210 | database to golang struct | 2 months ago |
| [reform](https://github.com/go-reform/reform) | 1419 | A better ORM for Go, based on non-empty interfaces and code generation. | 4 months ago |
| [pop](https://github.com/gobuffalo/pop) | 1343 | A Tasty Treat For All Your Database Needs | a month ago |
| [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) | 1042 | A flexible and powerful SQL string builder library plus a zero-config ORM. | 2 months ago |
| [go-queryset](https://github.com/jirfag/go-queryset) | 699 | 100% type-safe ORM for Go (Golang) with code generation and MySQL, PostgreSQL, Sqlite3, SQL Server support. GORM under the hood. | 5 months ago |
| [rel](https://github.com/go-rel/rel) | 648 | :gem: Modern ORM for Golang - Testable, Extendable and Crafted Into a Clean and Elegant API | 2 months ago |
| [zoom](https://github.com/albrow/zoom) | 299 | A blazing-fast datastore and querying engine for Go built on Redis. | 5 months ago |
| [gosql](https://github.com/rushteam/gosql) | 171 | golang orm and sql builder | a year ago |
| [grimoire](https://github.com/Fs02/grimoire) | 159 | Database access layer for golang | 2 years ago |
| [go-store](https://github.com/gosuri/go-store) | 110 | A simple and fast Redis backed key-value store library for Go | 6 years ago |
| [go-firestorm](https://github.com/jschoedt/go-firestorm) | 45 | Simple Go ORM for Google/Firebase Cloud Firestore | 2 years ago |
| [marlow](https://github.com/marlow/marlow) | 13 | persistence layer code generation for golang | 3 years ago |
| [lore](https://github.com/abrahambotros/lore) | 12 | Light Object-Relational Environment (LORE) provides a simple and lightweight pseudo-ORM/pseudo-struct-mapping environment for Go | 6 years ago |


### [Package Management](#Package-Management)
* 

#### [Official experimental tooling for package management](#Official-experimental-tooling-for-package-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dep](https://github.com/golang/dep) | 12961 | Go dependency management tool experiment (deprecated) | 3 years ago |


#### [Unofficial libraries for package and dependency management](#Official-libraries-for-package-and-dependency-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glide](https://github.com/Masterminds/glide) | 8175 | Package Management for Golang | 10 months ago |
| [godep](https://github.com/tools/godep) | 5579 | dependency tool for go | 5 years ago |
| [govendor](https://github.com/kardianos/govendor) | 4949 | Use Go Modules. | 3 years ago |
| [gopm](https://github.com/gpmgo/gopm) | 2474 | Go Package Manager (gopm) is a package manager and build tool for Go. | 4 years ago |
| [gom](https://github.com/mattn/gom) | 1391 | Go Manager - bundle for go | 4 years ago |
| [gpm](https://github.com/pote/gpm) | 1198 | Barebones dependency manager for Go. | 6 years ago |
| [goop](https://github.com/petejkim/goop) | 780 | A simple dependency manager for Go (golang), inspired by Bundler. | 8 years ago |
| [modgv](https://github.com/lucasepe/modgv) | 464 | Converts 'go mod graph' output into Graphviz's DOT language | 5 months ago |
| [nut](https://github.com/owenthereal/nut) | 235 | Vendor Go dependencies | 8 years ago |
| [johnny-deps](https://github.com/VividCortex/johnny-deps) | 214 | Barebones dependency manager for Go. | 3 years ago |
| [mvn-golang](https://github.com/raydac/mvn-golang) | 155 | maven plugin to automate GoSDK load and build of projects | a month ago |
| [VenGO](https://github.com/DamnWidget/VenGO) | 123 | Create and manage Isolated Virtual Environments for Go | 7 years ago |
| [gop](https://github.com/lunny/gop) | 50 | Moved to https://gitea.com/lunny/gop | 4 years ago |


### [Performance](#Performance)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jaeger](https://github.com/jaegertracing/jaeger) | 17912 | CNCF Jaeger, a Distributed Tracing Platform | 9 hours ago |
| [pixie](https://github.com/pixie-io/pixie) | 4716 | Instant Kubernetes-Native Application Observability | 3 hours ago |
| [statsviz](https://github.com/arl/statsviz) | 2899 | :rocket: Visualise Go program runtime metrics in real time in your browser | 9 days ago |
| [profile](https://github.com/pkg/profile) | 1887 | Simple profiling for Go | 9 months ago |
| [tracer](https://github.com/kamilsk/tracer) | 77 | 🪡 Dead simple, lightweight tracing. | 2 years ago |


### [Query Language](#Query-Language)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphql](https://github.com/graphql-go/graphql) | 9299 | An implementation of GraphQL for Go / Golang | a month ago |
| [gqlgen](https://github.com/99designs/gqlgen) | 9010 | go generate based graphql server library | 6 hours ago |
| [graphql-go](https://github.com/graph-gophers/graphql-go) | 4502 | GraphQL server with a focus on ease of use | 4 days ago |
| [dasel](https://github.com/TomWright/dasel) | 4415 | Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package. | 18 hours ago |
| [gojsonq](https://github.com/thedevsaddam/gojsonq) | 2070 | A simple Go package to Query over JSON/YAML/XML/CSV Data  | 7 months ago |
| [rql](https://github.com/a8m/rql) | 292 | Resource Query Language for REST | 9 months ago |
| [jsonql](https://github.com/elgs/jsonql) | 267 | JSON query expression library in Golang. | 3 years ago |
| [jsonslice](https://github.com/bhmj/jsonslice) | 78 | json slicer | 2 months ago |
| [graphql](https://github.com/tmc/graphql) | 58 | graphql parser + utilities | 6 years ago |
| [rest-query-parser](https://github.com/timsolov/rest-query-parser) | 55 | Query Parser for REST | 2 months ago |
| [api-fu](https://github.com/ccbrown/api-fu) | 50 | A collection of Go packages for creating robust GraphQL APIs | 2 months ago |
| [straf](https://github.com/ThundR67/straf) | 34 | Convert Golang Struct To GraphQL Object On The Fly | 3 years ago |
| [jsonpath](https://github.com/AsaiYusuke/jsonpath) | 18 | A query library for retrieving part of JSON based on JSONPath syntax. | 4 months ago |
| [gws](https://github.com/Zaba505/gws) | 7 | A WebSocket client and server for GraphQL | 3 years ago |


### [Resource Embedding](#Resource-Embedding)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [statik](https://github.com/rakyll/statik) | 3633 | Embed files into a Go executable | 2 months ago |
| [packr](https://github.com/gobuffalo/packr) | 3412 | The simple and easy way to embed static files into Go binaries. | 2 years ago |
| [go.rice](https://github.com/GeertJohan/go.rice) | 2361 | go.rice is a Go package that makes working with resources such as html,js,css,images,templates, etc very easy. | 8 months ago |
| [vfsgen](https://github.com/shurcooL/vfsgen) | 974 | Takes an input http.FileSystem (likely at go generate time) and generates Go code that statically implements it. | 7 days ago |
| [esc](https://github.com/mjibson/esc) | 633 | A simple file embedder for Go | 4 years ago |
| [fileb0x](https://github.com/UnnoTed/fileb0x) | 630 | a better customizable tool to embed files in go; also update embedded files remotely without restarting the server | 4 months ago |
| [go-resources](https://github.com/omeid/go-resources) | 175 | Unfancy resources embedding for Go with out of box http.FileSystem support. | 9 months ago |
| [statics](https://github.com/go-playground/statics) | 66 | :file_folder: Embeds static resources into go files for single binary compilation + works with http.FileSystem + symlinks | 7 years ago |
| [templify](https://github.com/wlbr/templify) | 29 | A tool to be used with 'go generate' to embed external template files into Go code. | 2 years ago |
| [rebed](https://github.com/soypat/rebed) | 26 | Recreates directory and files from embedded filesystem using Go 1.16 embed.FS type. | a year ago |
| [debme](https://github.com/leaanthony/debme) | 24 | embed.FS wrapper providing additional functionality | 2 years ago |
| [mule](https://github.com/wlbr/mule) | 12 | mule is a tool to be used with 'go generate' to embed external resources files into Go code. | 2 years ago |


### [Science and Data Analysis](#Science-and-Data-Analysis)
* Libraries for scientific computing and data analyzing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gonum](https://github.com/gonum/gonum) | 6682 | Gonum is a set of numeric libraries for the Go programming language. It contains libraries for matrices, statistics, optimization, and more | 3 days ago |
| [stats](https://github.com/montanaflynn/stats) | 2776 | A well tested and comprehensive Golang statistics library package with no dependencies. | a month ago |
| [plot](https://github.com/gonum/plot) | 2465 | A repository for plotting and visualizing data | a month ago |
| [gosl](https://github.com/cpmech/gosl) | 1759 | Linear algebra, eigenvalues, FFT, Bessel, elliptic, orthogonal polys, geometry, NURBS, numerical quadrature, 3D transfinite interpolation, random numbers, Mersenne twister, probability distributions, optimisation, differential equations. | a month ago |
| [streamtools](https://github.com/nytlabs/streamtools) | 1313 | tools for working with streams of data | 8 years ago |
| [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) | 1019 | DataFrames for Go: For statistics, machine-learning, and data manipulation/exploration | a year ago |
| [go-dsp](https://github.com/mjibson/go-dsp) | 823 | Digital Signal Processing for Go | a year ago |
| [chart](https://github.com/vdobler/chart) | 755 | Provide basic charts in go | 2 years ago |
| [goraph](https://github.com/gyuho/goraph) | 720 | Package goraph implements graph data structure and algorithms. | a year ago |
| [orb](https://github.com/paulmach/orb) | 686 | Types and utilities for working with 2d geometry in Golang | 5 days ago |
| [graph](https://github.com/yourbasic/graph) | 646 | Graph algorithms and data structures | 2 months ago |
| [ewma](https://github.com/VividCortex/ewma) | 409 | Exponentially Weighted Moving Average algorithms for Go. | 2 years ago |
| [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) | 375 | 📅 Calendar heatmap inspired by GitHub contribution activity  | 2 months ago |
| [TextRank](https://github.com/DavidBelicza/TextRank) | 182 | :wink: :cyclone: :strawberry: TextRank implementation in Golang with extendable features (summarization, phrase extraction) and multithreading (goroutine). | 2 years ago |
| [gohistogram](https://github.com/VividCortex/gohistogram) | 172 | Streaming approximate histograms in Go | 3 years ago |
| [sparse](https://github.com/james-bowman/sparse) | 143 | Sparse matrix formats for linear algebra supporting scientific and machine learning applications | 2 years ago |
| [go-estimate](https://github.com/milosgajdos/go-estimate) | 104 | State estimation and filtering algorithms in Go | 5 months ago |
| [pagerank](https://github.com/alixaxel/pagerank) | 77 | Weighted PageRank implementation in Go | 2 years ago |
| [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) | 64 | 🏝 JSONL Graph Tools | 8 months ago |
| [geom](https://github.com/skelterjohn/geom) | 55 | 2d geometry for golang | 6 years ago |
| [evaler](https://github.com/soniah/evaler) | 53 | Implements a simple floating point arithmetic expression evaluator in Go (golang). | 5 years ago |
| [decimal](https://github.com/db47h/decimal) | 36 | An arbitrary-precision decimal floating-point arithmetic package for Go | a year ago |
| [triangolatte](https://github.com/tchayen/triangolatte) | 35 | 2D triangulation library. Allows translating lines and polygons (both based on points) to the language of GPUs. | 2 years ago |
| [goent](https://github.com/kzahedi/goent) | 33 | GO Implementation of Entropy Measures | 4 years ago |
| [piecewiselinear](https://github.com/sgreben/piecewiselinear) | 26 | tiny linear interpolation library for go (factored out from https://github.com/sgreben/yeetgif) | 3 years ago |
| [godesim](https://github.com/soypat/godesim) | 21 | ODE system solver made simple. For IVPs (initial value problems). | a year ago |
| [ode](https://github.com/ChristopherRabotin/ode) | 21 | An ordinary differential equation solving library in golang. | 6 years ago |
| [PiHex](https://github.com/claygod/PiHex) | 20 | PiHex Library, written in Go, generates a hexadecimal number sequence in the number Pi in the range from 0 to 10,000,000. | 8 months ago |
| [GoStats](https://github.com/OGFris/GoStats) | 19 | GoStats is a go library for math statistics mostly used in ML domains, it covers most of the statistical measures functions. | 4 years ago |
| [assocentity](https://github.com/ndabAP/assocentity) | 12 | Package assocentity returns the mean distance from tokens to an entity and its synonyms | a month ago |
| [go-gt](https://github.com/ThePaw/go-gt) | 10 | Automatically exported from code.google.com/p/go-gt | 8 years ago |
| [rootfinding](https://github.com/khezen/rootfinding) | 10 | root-finding library | 3 years ago |
| [bradleyterry](https://github.com/seanhagen/bradleyterry) | 8 | Package to do Bradley-Terry Model pairwise compairsons | 4 years ago |


### [Security](#Security)
* Libraries that are used to help make your application more secure.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 13717 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 10 days ago |
| [lego](https://github.com/go-acme/lego) | 6274 | Let's Encrypt/ACME client and library written in Go | 5 days ago |
| [certmagic](https://github.com/caddyserver/certmagic) | 4560 | Automatic HTTPS for any Go program: fully-managed TLS certificate issuance and renewal | 7 hours ago |
| [cameradar](https://github.com/Ullaakut/cameradar) | 3396 | Cameradar hacks its way into RTSP videosurveillance cameras | 16 days ago |
| [memguard](https://github.com/awnumar/memguard) | 2367 | Secure software enclave for storage of sensitive information in memory. | a month ago |
| [secure](https://github.com/unrolled/secure) | 2129 | HTTP middleware for Go that facilitates some quick security wins. | 7 months ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1996 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | a month ago |
| [themis](https://github.com/cossacklabs/themis) | 1719 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | 6 hours ago |
| [acra](https://github.com/cossacklabs/acra) | 1178 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 15 hours ago |
| [dongle](https://github.com/golang-module/dongle) | 727 | A simple, semantic and developer-friendly golang package for encoding&decoding and encryption&decryption | 5 months ago |
| [nacl](https://github.com/kevinburke/nacl) | 535 | Pure Go implementation of the NaCL set of API's | a year ago |
| [go-password-validator](https://github.com/wagslane/go-password-validator) | 409 | Validate the Strength of a Password in Go | 10 months ago |
| [ssh-vault](https://github.com/ssh-vault/ssh-vault) | 384 | 🌰  encrypt/decrypt using ssh keys | 2 months ago |
| [optimus-go](https://github.com/pjebs/optimus-go) | 347 | ID hashing and Obfuscation using Knuth's Algorithm | 3 years ago |
| [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) | 329 | A rest application to update firewalld rules on a linux server  | 3 years ago |
| [badactor](https://github.com/jaredfolkins/badactor) | 315 | BadActor.org An in-memory application driven jailer written in Go | 3 years ago |
| [go-yara](https://github.com/hillu/go-yara) | 307 | Go bindings for YARA | 13 days ago |
| [passlib](https://github.com/hlandau/passlib) | 284 | :key: Idiotproof golang password validation library inspired by Python's passlib | 2 years ago |
| [simple-scrypt](https://github.com/elithrar/simple-scrypt) | 187 | A convenience library for generating, comparing and inspecting password hashes using the scrypt KDF in Go 🔑 | 2 years ago |
| [yara](https://github.com/plusvic/yara) | 132 | The pattern matching swiss knife | 3 years ago |
| [argon2pw](https://github.com/raja/argon2pw) | 89 | Argon2 password hashing package for go with constant time hash comparison | 2 years ago |
| [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) | 54 | A probably paranoid Golang utility library for securely hashing and encrypting passwords based on the Dropbox method. This implementation uses Blake2b, Scrypt and XSalsa20-Poly1305 (via NaCl SecretBox) to create secure password hashes that are also encrypted using a master passphrase. | 10 months ago |
| [go-generate-password](https://github.com/m1/go-generate-password) | 48 | Password generator written in Go | a year ago |
| [certificates](https://github.com/mvmaasakkers/certificates) | 37 | An opinionated helper for generating tls certificates | 6 months ago |
| [secureio](https://github.com/xaionaro-go/secureio) | 30 | An easy-to-use XChaCha20-encryption wrapper for io.ReadWriteCloser (even lossy UDP) using ECDH key exchange algorithm, ED25519 signatures and Blake3+Poly1305 checksums/message-authentication for Go (golang). Also a multiplexer. | 3 years ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 19 | A light package for generating and comparing password hashing with argon2 in Go | 3 months ago |
| [sslmgr](https://github.com/adrianosela/sslmgr) | 18 | A layer of abstraction the around acme/autocert certificate manager (Golang) | 9 months ago |
| [goArgonPass](https://github.com/dwin/goArgonPass) | 16 | goArgonPass is a Argon2 Password utility package for Go using the crypto library package Argon2 designed to be compatible with Passlib for Python and Argon2 PHP. Argon2 was the winner of the most recent Password Hashing Competition. This is designed for use anywhere password hashing and verification might be needed and is intended to replace implementations using bcrypt or Scrypt. | 3 years ago |


### [Serialization](#Serialization)
* Libraries and tools for binary serialization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 13717 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 10 days ago |
| [go](https://github.com/json-iterator/go) | 12404 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 25 days ago |
| [protobuf](https://github.com/golang/protobuf) | 9129 | Go support for Google's protocol buffers | 2 months ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 6936 | Go library for decoding generic map values into native Go structures and vice versa. | a month ago |
| [protobuf](https://github.com/gogo/protobuf) | 5561 | [Deprecated] Protocol Buffers for Go with Gadgets | a month ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1996 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | a month ago |
| [go](https://github.com/ugorji/go) | 1758 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 6 days ago |
| [acra](https://github.com/cossacklabs/acra) | 1178 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 15 hours ago |
| [csvutil](https://github.com/jszwec/csvutil) | 813 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 3 months ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 707 | binary serialization format | 3 months ago |
| [cbor](https://github.com/fxamacker/cbor) | 580 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | 15 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 288 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 3 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 158 | PHP session encoder/decoder written in Go | 5 years ago |
| [structomap](https://github.com/danhper/structomap) | 140 | Easily and dynamically generate maps from Go static structures | 4 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 75 | Golang binary decoder for mapping data into the structure | a year ago |
| [bambam](https://github.com/glycerine/bambam) | 66 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 7 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 53 | Asn.1 BER and DER encoding library for golang. | 4 years ago |
| [bel](https://github.com/csweichel/bel) | 35 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | a month ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 25 | Fixed width file parser (encoder/decoder) in GO (golang) | 2 months ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 24 | Converts go types no matter what | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 20 | A standard way to wrap a proto message | 8 days ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 19 | A light package for generating and comparing password hashing with argon2 in Go | 3 months ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 8 | A Go package for encode/decode fixed-width data | 4 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 6 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | 2 days ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 4 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 3 years ago |


### [Server Applications](#Server-Applications)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 13717 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 10 days ago |
| [go](https://github.com/json-iterator/go) | 12404 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 25 days ago |
| [protobuf](https://github.com/golang/protobuf) | 9129 | Go support for Google's protocol buffers | 2 months ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 6936 | Go library for decoding generic map values into native Go structures and vice versa. | a month ago |
| [protobuf](https://github.com/gogo/protobuf) | 5561 | [Deprecated] Protocol Buffers for Go with Gadgets | a month ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1996 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | a month ago |
| [go](https://github.com/ugorji/go) | 1758 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 6 days ago |
| [acra](https://github.com/cossacklabs/acra) | 1178 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 15 hours ago |
| [csvutil](https://github.com/jszwec/csvutil) | 813 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 3 months ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 707 | binary serialization format | 3 months ago |
| [cbor](https://github.com/fxamacker/cbor) | 580 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | 15 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 288 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 3 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 158 | PHP session encoder/decoder written in Go | 5 years ago |
| [structomap](https://github.com/danhper/structomap) | 140 | Easily and dynamically generate maps from Go static structures | 4 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 75 | Golang binary decoder for mapping data into the structure | a year ago |
| [bambam](https://github.com/glycerine/bambam) | 66 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 7 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 53 | Asn.1 BER and DER encoding library for golang. | 4 years ago |
| [bel](https://github.com/csweichel/bel) | 35 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | a month ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 25 | Fixed width file parser (encoder/decoder) in GO (golang) | 2 months ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 24 | Converts go types no matter what | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 20 | A standard way to wrap a proto message | 8 days ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 19 | A light package for generating and comparing password hashing with argon2 in Go | 3 months ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 8 | A Go package for encode/decode fixed-width data | 4 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 6 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | 2 days ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 4 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 3 years ago |


### [Stream Processing](#Stream-Processing)
* Libraries and tools for stream processing and reactive programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-streams](https://github.com/reugn/go-streams) | 1485 | A lightweight stream processing library for Go | 23 days ago |
| [machine](https://github.com/whitaker-io/machine) | 131 | Machine is a workflow/pipeline library for processing data | 13 days ago |
| [stream](https://github.com/youthlin/stream) | 79 | Go Stream, like Java 8 Stream. | 3 years ago |


### [Template Engines](#Template-Engines)
* Libraries and tools for templating and lexing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gofpdf](https://github.com/jung-kurt/gofpdf) | 4157 | A PDF document generator with high level support for text, drawing and images | 2 years ago |
| [sprig](https://github.com/Masterminds/sprig) | 3640 | Useful template functions for Go templates. | 7 days ago |
| [quicktemplate](https://github.com/valyala/quicktemplate) | 2788 | Fast, powerful, yet easy to use template engine for Go. Optimized for speed, zero memory allocations in hot paths. Up to 20x faster than html/template | 22 days ago |
| [pongo2](https://github.com/flosch/pongo2) | 2578 | Django-syntax like template-engine for Go | 15 days ago |
| [hero](https://github.com/shiyanhui/hero) | 1542 | A handy, fast and powerful go template engine. | 4 years ago |
| [mustache](https://github.com/hoisie/mustache) | 1074 | The mustache template language in Go | a month ago |
| [jet](https://github.com/CloudyKit/jet) | 1057 | Jet  template engine | 7 months ago |
| [maroto](https://github.com/johnfercher/maroto) | 1035 | A maroto way to create PDFs. Maroto is inspired in Bootstrap and uses gofpdf. Fast and simple. | 2 months ago |
| [amber](https://github.com/eknkc/amber) | 903 | Amber is an elegant templating engine for Go Programming Language, inspired from HAML and Jade | 3 years ago |
| [ace](https://github.com/yosssi/ace) | 826 | HTML template engine for Go | 5 years ago |
| [gorazor](https://github.com/sipin/gorazor) | 818 | Razor view engine for go | 3 years ago |
| [fasttemplate](https://github.com/valyala/fasttemplate) | 726 | Simple and fast template engine for Go | 9 months ago |
| [ego](https://github.com/benbjohnson/ego) | 559 | An ERB-style templating language for Go. | 4 months ago |
| [raymond](https://github.com/aymerick/raymond) | 536 | Handlebars for golang | 8 months ago |
| [goview](https://github.com/foolin/goview) | 351 | Goview is a lightweight, minimalist and idiomatic template library based on golang html/template for building Go web application. | 4 months ago |
| [liquid](https://github.com/osteele/liquid) | 216 | A Liquid template engine in Go | 12 days ago |
| [soy](https://github.com/robfig/soy) | 168 | Go implementation for Soy templates (Google Closure templates) | 5 months ago |
| [kasia.go](https://github.com/ziutek/kasia.go) | 74 | Templating system for HTML and other text documents - go implementation | 8 years ago |
| [velvet](https://github.com/gobuffalo/velvet) | 72 | A sweet velvety templating package | 6 years ago |
| [extemplate](https://github.com/dannyvankooten/extemplate) | 53 | Wrapper package for Go's template/html to allow for easy file-based template inheritance. | 7 months ago |
| [gospin](https://github.com/m1/gospin) | 46 | Article spinning and spintax/spinning syntax engine written in Go, useful for A/B, testing pieces of text/articles and creating more natural conversations | 2 years ago |
| [damsel](https://github.com/dskinner/damsel) | 23 | Package damsel provides html outlining via css-selectors and common template functionality. | 7 years ago |
| [tbd](https://github.com/lucasepe/tbd) | 23 | "to be defined" - a really simple way to create text templates with placeholders | 2 years ago |


### [Testing](#Testing)
* Libraries for testing codebases and generating test data.

#### [Testing Frameworks](#Testing-Frameworks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testify](https://github.com/stretchr/testify) | 20067 | A toolkit with common assertions and mocks that plays nicely with the standard library | 5 hours ago |
| [goconvey](https://github.com/smartystreets/goconvey) | 7814 | Go testing in the browser. Integrates with `go test`. Write behavioral tests in Go. | 12 hours ago |
| [go-cmp](https://github.com/google/go-cmp) | 3597 | Package for comparing Go values in tests | a month ago |
| [httpexpect](https://github.com/gavv/httpexpect) | 2235 | End-to-end HTTP and REST API testing for Go. | 19 days ago |
| [godog](https://github.com/cucumber/godog) | 2003 | Cucumber for golang | 3 days ago |
| [gnomock](https://github.com/orlangure/gnomock) | 1204 | Test your code without writing mocks with ephemeral Docker containers 📦 Setup popular services with just a couple lines of code ⏱️ No bash, no yaml, only code 💻 | 17 hours ago |
| [go-vcr](https://github.com/dnaeon/go-vcr) | 1023 | Record and replay your HTTP interactions for fast, deterministic and accurate tests | 8 days ago |
| [testfixtures](https://github.com/go-testfixtures/testfixtures) | 957 | Ruby on Rails like test fixtures for Go. Write tests against a real database | 12 days ago |
| [goblin](https://github.com/franela/goblin) | 888 | Minimal and Beautiful Go testing framework | 7 months ago |
| [baloo](https://github.com/h2non/baloo) | 760 | Expressive end-to-end HTTP API testing made easy in Go | a year ago |
| [goc](https://github.com/qiniu/goc) | 685 | A Comprehensive Coverage Testing System for The Go Programming Language | a month ago |
| [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) | 614 | Run a real Postgres database locally on Linux, OSX or Windows as part of another Go application or test | 17 days ago |
| [go-mutesting](https://github.com/zimmski/go-mutesting) | 590 | Mutation testing for Go source code | 21 days ago |
| [gotest.tools](https://github.com/gotestyourself/gotest.tools) | 440 | A collection of packages to augment the go testing package and support common patterns. | 7 days ago |
| [gofight](https://github.com/appleboy/gofight) | 436 | Testing API Handler written in Golang. | 2 years ago |
| [testza](https://github.com/MarvinJWendt/testza) | 410 | Full-featured test framework for Go! Assertions, fuzzing, input testing, output capturing, and much more! 🍕 | a month ago |
| [go-testdeep](https://github.com/maxatome/go-testdeep) | 391 | Extremely flexible golang deep comparison, extends the go testing package, tests HTTP APIs and provides tests suite | 18 days ago |
| [frisby](https://github.com/hofstadter-io/frisby) | 274 | API testing framework inspired by frisby-js | 3 years ago |
| [cupaloy](https://github.com/bradleyjkemp/cupaloy) | 267 | Simple Go snapshot testing | 2 months ago |
| [endly](https://github.com/viant/endly) | 243 | End to end functional test and automation framework | a month ago |
| [go-carpet](https://github.com/msoap/go-carpet) | 239 | Tool for show test coverage in terminal for Go source files | 25 days ago |
| [go-hit](https://github.com/Eun/go-hit) | 223 | http integration test framework | 5 days ago |
| [commander](https://github.com/commander-cli/commander) | 213 | Test your command line interfaces on windows, linux and osx and nodes viá ssh and docker | 2 months ago |
| [charlatan](https://github.com/percolate/charlatan) | 199 | Go Interface Mocking Tool | 4 months ago |
| [dbcleaner](https://github.com/khaiql/dbcleaner) | 156 | Clean database for testing, inspired by database_cleaner for Ruby | 2 years ago |
| [gospec](https://github.com/luontola/gospec) | 113 | Testing framework for Go. Allows writing self-documenting tests/specifications, and executes them concurrently and safely isolated. [UNMAINTAINED] | 9 years ago |
| [jsonassert](https://github.com/kinbiko/jsonassert) | 111 | A Go test assertion library for verifying that two representations of JSON are semantically equal | 17 days ago |
| [testcase](https://github.com/adamluzsi/testcase) | 110 | testcase is an opinionated testing framework to support test driven design. | 6 days ago |
| [wstest](https://github.com/posener/wstest) | 99 | go websocket client for unit testing of a websocket handler | 3 years ago |
| [gocrest](https://github.com/corbym/gocrest) | 94 | GoCrest - Hamcrest-like matchers for Go | 3 months ago |
| [assert](https://github.com/go-playground/assert) | 57 | :exclamation:Basic Assertion Library used along side native go testing, with building blocks for custom assertions | 10 months ago |
| [covergates](https://github.com/covergates/covergates) | 57 | The portal gates to coverage reports | 2 months ago |
| [restit](https://github.com/go-restit/restit) | 56 | A Go library help testing your RESTful API application | 4 years ago |
| [gospecify](https://github.com/stesla/gospecify) | 53 | A BDD library for Go | 12 years ago |
| [gomatch](https://github.com/jfilipczyk/gomatch) | 46 | Library created for testing JSON against patterns. | 2 years ago |
| [dsunit](https://github.com/viant/dsunit) | 42 | Datastore Testibility | a month ago |
| [hamcrest](https://github.com/rdrdr/hamcrest) | 28 | Hamcrest matchers for the Go programming language | 3 years ago |
| [schema](https://github.com/jgroeneveld/schema) | 20 | Quick and easy expression matching for JSON schemas used in requests and responses | 4 years ago |
| [fixenv](https://github.com/rekby/fixenv) | 17 |  | 2 months ago |
| [flute](https://github.com/suzuki-shunsuke/flute) | 17 | Golang HTTP client testing framework | 8 months ago |
| [gogiven](https://github.com/corbym/gogiven) | 16 | gogiven - BDD testing framework for go that generates readable output directly from source code | 3 months ago |
| [testsql](https://github.com/zhulongcheng/testsql) | 16 | Generate test data from SQL files before testing and clear it after finished. | 4 years ago |
| [biff](https://github.com/fulldump/biff) | 12 | Bifurcation Framework for testing and use cases | 6 months ago |
| [gosuite](https://github.com/pavlo/gosuite) | 12 | Test suites support for standard Go1.7 "testing" by leveraging Subtests feature | 7 years ago |
| [badio](https://github.com/cavaliergopher/badio) | 10 | Extensions to Go's testing/iotest package | 7 years ago |
| [stop-and-go](https://github.com/elgohr/stop-and-go) | 9 | Testing helper for concurrency | a month ago |
| [test](https://github.com/tvastar/test) | 8 | test utilities for golang | 4 years ago |
| [trial](https://github.com/jgroeneveld/trial) | 6 | A simple assertion library for go | 9 months ago |
| [tt](https://github.com/vcaesar/tt) | 6 | Simple and colorful test tools | 4 months ago |


#### [Mock](#Mock)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mock](https://github.com/golang/mock) | 9018 | GoMock is a mocking framework for the Go programming language. | 5 hours ago |
| [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) | 5350 | Sql mock driver for golang to test database interactions | 2 months ago |
| [mockery](https://github.com/vektra/mockery) | 4796 | A mock code autogenerator for Go | 4 hours ago |
| [hoverfly](https://github.com/SpectoLabs/hoverfly) | 2204 | Lightweight service virtualization/ API simulation / API mocking tool for developers and testers | 18 days ago |
| [gock](https://github.com/h2non/gock) | 1885 | HTTP traffic mocking and testing made easy in Go ༼ʘ̚ل͜ʘ̚༽ | 4 days ago |
| [httpmock](https://github.com/jarcoal/httpmock) | 1688 | HTTP mocking for Golang | a month ago |
| [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) | 847 | A tool for generating self-contained, type-safe test doubles in go | 5 days ago |
| [go-txdb](https://github.com/DATA-DOG/go-txdb) | 549 | Immutable transaction isolated sql driver for golang | a month ago |
| [minimock](https://github.com/gojuno/minimock) | 504 | Powerful mock generation tool for Go programming language | 3 months ago |
| [govcr](https://github.com/seborama/govcr) | 152 | HTTP mock for Golang: record and replay HTTP/HTTPS interactions for offline testing | 4 months ago |
| [go-localstack](https://github.com/elgohr/go-localstack) | 71 | Go Wrapper for using localstack | a day ago |
| [timex](https://github.com/cabify/timex) | 69 | A test-friendly replacement for golang's time package | 3 years ago |
| [mockhttp](https://github.com/tv42/mockhttp) | 22 | Mock object for Go http.ResponseWriter | 9 years ago |
| [mockit](https://github.com/pasdam/mockit) | 16 | Library that make mocking of Go functions/methods easy | 2 months ago |


#### [Fuzzing and delta-debugging/reducing/shrinking](#Fuzzing-and-delta-debugging)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-fuzz](https://github.com/dvyukov/go-fuzz) | 4633 | Randomized testing for Go | a month ago |
| [gofuzz](https://github.com/google/gofuzz) | 1425 | Fuzz testing for go. | 8 months ago |
| [tavor](https://github.com/zimmski/tavor) | 242 | A generic fuzzing and delta-debugging framework | 5 years ago |


#### [Selenium and browser control tools](#Selenium-and-browser-control-tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [chromedp](https://github.com/chromedp/chromedp) | 9260 | A faster, simpler way to drive browsers supporting the Chrome DevTools Protocol. | a month ago |
| [rod](https://github.com/go-rod/rod) | 3940 | A Devtools driver for web automation and scraping | 17 hours ago |
| [selenoid](https://github.com/aerokube/selenoid) | 2379 | Selenium Hub successor running browsers within containers. Scalable, immutable, self hosted Selenium-Grid on any platform with single binary. | 5 days ago |
| [playwright-go](https://github.com/playwright-community/playwright-go) | 1354 | Playwright for Go a browser automation library to control Chromium, Firefox and WebKit with a single API. | 11 days ago |
| [cdp](https://github.com/mafredri/cdp) | 675 | Package cdp provides type-safe bindings for the Chrome DevTools Protocol (CDP), written in the Go programming language. | 3 months ago |
| [ggr](https://github.com/aerokube/ggr) | 301 | A lightweight load balancer used to create big Selenium clusters | 5 days ago |


#### [Fail injection](#Fail-injection)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [failpoint](https://github.com/pingcap/failpoint) | 778 | An implementation of failpoints for Golang. | a year ago |


### [Text Processing](#Text-Processing)
* Libraries for parsing and manipulating texts.

#### [Specific Formats](#Specific-Formats)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [colly](https://github.com/gocolly/colly) | 19908 | Elegant Scraper and Crawler Framework for Golang | 18 days ago |
| [goquery](https://github.com/PuerkitoBio/goquery) | 12729 | A little like that j-thing, only in Go. | 9 hours ago |
| [sh](https://github.com/mvdan/sh) | 5989 | A shell parser, formatter, and interpreter with bash support; includes shfmt | 4 days ago |
| [blackfriday](https://github.com/russross/blackfriday) | 5186 | Blackfriday: a markdown processor for Go | 10 months ago |
| [toml](https://github.com/BurntSushi/toml) | 4234 | TOML parser for Golang with reflection. | a month ago |
| [go-humanize](https://github.com/dustin/go-humanize) | 3669 | Go Humans! (formatters for units to human friendly sizes) | 2 months ago |
| [bluemonday](https://github.com/microcosm-cc/bluemonday) | 2725 | bluemonday: a fast golang HTML sanitizer (inspired by the OWASP Java HTML Sanitizer) to scrub user generated content of XSS | 4 days ago |
| [gofeed](https://github.com/mmcdole/gofeed) | 2198 | Parse RSS, Atom and JSON feeds in Go | 2 months ago |
| [go-toml](https://github.com/pelletier/go-toml) | 1466 | Go library for the TOML file format | a month ago |
| [inject](https://github.com/facebookarchive/inject) | 1394 | Package inject provides a reflect based injector. | 4 years ago |
| [slug](https://github.com/gosimple/slug) | 975 | URL-friendly slugify with multiple languages support. | 3 days ago |
| [commonregex](https://github.com/mingrammer/commonregex) | 862 | 🍫 A collection of common regular expressions for Go | 4 years ago |
| [htmlquery](https://github.com/antchfx/htmlquery) | 615 | htmlquery is golang XPath package for HTML query. | 4 months ago |
| [dataflowkit](https://github.com/slotix/dataflowkit) | 597 | Extract structured data from web sites. Web sites scraping.   | 4 months ago |
| [omniparser](https://github.com/jf-tech/omniparser) | 581 | omniparser: a native Golang ETL streaming parser and transform library for CSV, JSON, XML, EDI, text, etc. | 11 days ago |
| [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) | 566 | ⚙️ Convert HTML to Markdown. Even works with entire websites and can be extended through rules. | 15 hours ago |
| [mxj](https://github.com/clbanning/mxj) | 559 | Decode / encode XML to/from map[string]interface{} (or JSON); extract values with dot-notation paths and wildcards.  Replaces x2j and j2x packages. | a month ago |
| [go-runewidth](https://github.com/mattn/go-runewidth) | 531 | wcwidth for golang | 9 months ago |
| [gographviz](https://github.com/awalterschulze/gographviz) | 523 | Parses the Graphviz DOT language in golang | 4 months ago |
| [gommon](https://github.com/labstack/gommon) | 496 | Common packages for Go | 4 months ago |
| [gotext](https://github.com/leonelquinteros/gotext) | 385 | Go (Golang) GNU gettext utilities package  | a month ago |
| [goq](https://github.com/andrewstuart/goq) | 242 | A declarative struct-tag-based HTML unmarshaling or scraping package for Go built on top of the goquery library | 2 years ago |
| [goribot](https://github.com/zhshch2002/goribot) | 211 | [Crawler/Scraper for Golang]🕷A lightweight distributed friendly Golang crawler framework.一个轻量的分布式友好的 Golang 爬虫框架。 | 3 years ago |
| [gospider](https://github.com/zhshch2002/gospider) | 195 | ⚡ Light weight Golang spider framework , 轻量的 Golang 爬虫框架 | 2 years ago |
| [go-nmea](https://github.com/adrianmo/go-nmea) | 194 | A NMEA parser library in pure Go | 8 days ago |
| [github_flavored_markdown](https://github.com/shurcooL/github_flavored_markdown) | 158 | GitHub Flavored Markdown renderer with fenced code block highlighting, clickable header anchor links. | 2 years ago |
| [podcast](https://github.com/eduncan911/podcast) | 125 | iTunes and RSS 2.0 Podcast Generator in Golang | 3 years ago |
| [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) | 119 | EditorConfig Core written in Go | 18 hours ago |
| [sdp](https://github.com/gortc/sdp) | 112 | RFC 4566 SDP implementation in go | 3 years ago |
| [go-zero-width](https://github.com/trubitsyn/go-zero-width) | 110 | Zero-width character detection and removal for Go | 3 years ago |
| [go-vcard](https://github.com/emersion/go-vcard) | 88 | A Go library to parse and format vCard | 15 days ago |
| [go-slugify](https://github.com/mozillazg/go-slugify) | 86 | Pretty Slug. | 3 years ago |
| [goregen](https://github.com/zach-klippenstein/goregen) | 84 | randexp for Go. | a year ago |
| [pagser](https://github.com/foolin/pagser) | 84 | Pagser is a simple, extensible, configurable parse and deserialize html page to struct based on goquery and struct tags for golang crawler | 2 years ago |
| [align](https://github.com/Guitarbum722/align) | 80 | A general purpose application and library for aligning text. | 2 years ago |
| [bafi](https://github.com/mmalcek/bafi) | 76 | Universal JSON, BSON, YAML, CSV, XML converter with templates | 9 months ago |
| [did](https://github.com/build-trust/did) | 76 | A golang package to work with Decentralized Identifiers (DIDs)  | 6 months ago |
| [genex](https://github.com/alixaxel/genex) | 75 | Genex package for Go | 4 years ago |
| [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) | 75 | Encoding and decoding for fixed-width formatted data | 2 months ago |
| [guesslanguage](https://github.com/endeveit/guesslanguage) | 57 | Guess the natural language of a text in Go | 6 years ago |
| [allot](https://github.com/sbstjn/allot) | 56 | Parse placeholder and wildcard text commands | a year ago |
| [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) | 46 | 🚀 Fast and light wildcard pattern matching. | 2 months ago |
| [gonameparts](https://github.com/polera/gonameparts) | 38 | Takes a full name and splits it into individual name parts | 4 years ago |
| [normalize](https://github.com/avito-tech/normalize) | 35 |  | 2 years ago |
| [slugify](https://github.com/avelino/slugify) | 32 | A Go slugify application that handles string | 5 years ago |
| [codetree](https://github.com/aerogo/codetree) | 22 | :evergreen_tree: Parses indented code and returns a tree structure. | 4 years ago |
| [enca](https://github.com/endeveit/enca) | 15 | Minimal cgo bindings for libenca | 7 years ago |
| [syndfeed](https://github.com/zhengchun/syndfeed) | 11 | A syndication feed parser for Atom 1.0 and RSS 2.0 in Go | 5 years ago |
| [gout](https://github.com/drewstinnett/gout) | 10 | Output go objects in standard formats, such as YAML, JSON, etc | 6 months ago |
| [doi](https://github.com/hscells/doi) | 8 | Parse and check doi objects in go. | 6 years ago |
| [encoding](https://github.com/ake-persson/encoding) | 8 | Go package provides a generic interface to encoders and decoders | 4 years ago |
| [ltsv](https://github.com/Wing924/ltsv) | 8 | High performance LTSV (Labeled Tab Separeted Value) reader for Go. | 4 years ago |
| [bbConvert](https://github.com/CalebQ42/bbConvert) | 7 | Converter from BBCode to HTML | 7 years ago |


#### [Utility](#Utility)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xurls](https://github.com/mvdan/xurls) | 1060 | Extract urls from text | a month ago |
| [gotabulate](https://github.com/bndr/gotabulate) | 297 | Gotabulate - Easily pretty-print your tabular data with Go | 2 years ago |
| [radix](https://github.com/yourbasic/radix) | 185 | A fast string sorting algorithm (MSD radix sort) | 5 years ago |
| [regroup](https://github.com/oriser/regroup) | 131 | Match regex group into go struct using struct tags and automatic parsing | a month ago |
| [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) | 56 | A sanitization-based swear filter for Go. | 3 months ago |
| [parth](https://github.com/codemodus/parth) | 43 | Path parsing for segment unmarshaling and slicing. | 4 years ago |
| [tagify](https://github.com/zoomio/tagify) | 32 | Tagify produces a set of tags from a given source. Source can be either an HTML page, a Markdown document or a plain text. Supports English, Russian, Chinese, Hindi, Spanish, Arabic, Japanese, German, Hebrew, French and Korean languages. | 3 days ago |
| [xj2go](https://github.com/cgxxv/xj2go) | 31 | Convert xml and json to go struct | 2 years ago |
| [kace](https://github.com/codemodus/kace) | 19 | Common case conversions covering common initialisms. | 5 years ago |
| [TySug](https://github.com/Dynom/TySug) | 15 | A project around helping to prevent typing typos. TySug (Typo Suggestions) suggests alternative words with respect to keyboard layouts | 4 months ago |
| [parseargs-go](https://github.com/txgruppi/parseargs-go) | 9 | A string argument parser that understands quotes and backslashes | 6 years ago |
| [textwrap](https://github.com/isbm/textwrap) | 4 | Port of Python's "textwrap" module to Go | 4 years ago |


### [Third-party APIs](#Third-party-APIs)
* Libraries for accessing third party APIs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-github](https://github.com/google/go-github) | 9454 | Go library for accessing the GitHub v3 API | a day ago |
| [aws-sdk-go](https://github.com/aws/aws-sdk-go) | 8348 | AWS SDK for the Go programming language. | 3 days ago |
| [slack](https://github.com/slack-go/slack) | 4348 | Slack API in Go - community-maintained fork created by the original author, @nlopes | a day ago |
| [discordgo](https://github.com/bwmarrin/discordgo) | 4103 |  (Golang) Go bindings for Discord | 6 days ago |
| [google-api-go-client](https://github.com/googleapis/google-api-go-client) | 3508 | Auto-generated Google APIs for Go. | 10 hours ago |
| [google-cloud-go](https://github.com/googleapis/google-cloud-go) | 3325 | Google Cloud Client Libraries for Go. | 3 hours ago |
| [minio-go](https://github.com/minio/minio-go) | 1978 | MinIO Go client SDK for S3 compatible object storage | an hour ago |
| [stripe-go](https://github.com/stripe/stripe-go) | 1812 | Go library for the Stripe API.     | 28 minutes ago |
| [go-twitter](https://github.com/dghubble/go-twitter) | 1589 | Go Twitter REST and Streaming API v1.1 | 8 months ago |
| [go-jira](https://github.com/andygrunwald/go-jira) | 1328 | Go client library for Atlassian Jira | a day ago |
| [facebook](https://github.com/huandu/facebook) | 1163 | A Facebook Graph API SDK For Go. | 7 days ago |
| [anaconda](https://github.com/ChimeraCoder/anaconda) | 1137 | A Go client library for the Twitter 1.1 API | a year ago |
| [githubv4](https://github.com/shurcooL/githubv4) | 1024 | Package githubv4 is a client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql). | 7 days ago |
| [webhooks](https://github.com/go-playground/webhooks) | 843 | :fishing_pole_and_fish: Webhook receiver for GitHub, Bitbucket, GitLab, Gogs | 6 days ago |
| [twitter-scraper](https://github.com/n0madic/twitter-scraper) | 591 | Scrape the Twitter frontend API without authentication with Golang. | 3 days ago |
| [paypal](https://github.com/plutov/paypal) | 583 | Golang client for PayPal REST API | 5 months ago |
| [geo-golang](https://github.com/codingsince1985/geo-golang) | 472 | Go library to access geocoding and reverse geocoding APIs | 7 months ago |
| [ethrpc](https://github.com/onrik/ethrpc) | 254 | Golang client for ethereum json rpc api | 14 days ago |
| [trello](https://github.com/adlio/trello) | 209 | Trello API wrapper for Go | a year ago |
| [go-marathon](https://github.com/gambol99/go-marathon) | 201 | A GO API library for working with Marathon | 3 years ago |
| [wit-go](https://github.com/wit-ai/wit-go) | 142 | Go client for wit.ai HTTP API | 9 months ago |
| [medium-sdk-go](https://github.com/Medium/medium-sdk-go) | 138 | A Golang SDK for Medium's OAuth2 API | 5 years ago |
| [pushover](https://github.com/gregdel/pushover) | 134 | Go wrapper for the Pushover API | 2 months ago |
| [gostorm](https://github.com/jsgilmore/gostorm) | 130 | GoStorm is a Go library that implements the communications protocol required to write Storm spouts and Bolts in Go that communicate with the Storm shells. | 6 years ago |
| [go-trending](https://github.com/andygrunwald/go-trending) | 128 | Go library for accessing trending repositories and developers at Github. | 2 months ago |
| [simples3](https://github.com/rhnvrm/simples3) | 115 | Simple no frills AWS S3 Golang Library using REST with V4 Signing (without AWS Go SDK) | a year ago |
| [gosip](https://github.com/koltyakov/gosip) | 112 | ⚡️ SharePoint SDK for Go | 3 months ago |
| [hipchat](https://github.com/daneharrigan/hipchat) | 110 | A golang package to communicate with HipChat over XMPP | 6 years ago |
| [hipchat](https://github.com/andybons/hipchat) | 104 | This project implements a Go client library for the Hipchat API. | 7 years ago |
| [cachet](https://github.com/andygrunwald/cachet) | 91 | Go(lang) client library for Cachet (open source status page system). | 2 years ago |
| [golang-tmdb](https://github.com/cyruzin/golang-tmdb) | 80 | This is a Golang wrapper for working with TMDb API. It aims to support version 3. | a month ago |
| [igdb](https://github.com/Henry-Sarabia/igdb) | 77 | Go client for the Internet Game Database API | 5 months ago |
| [go-unsplash](https://github.com/hbagdi/go-unsplash) | 72 | Go Client for the Unsplash API  | 3 months ago |
| [gogtrends](https://github.com/groovili/gogtrends) | 72 | Unofficial Google Trends API for Go | 6 months ago |
| [go-postman-collection](https://github.com/rbretecher/go-postman-collection) | 68 | Go module to work with Postman Collections | 10 months ago |
| [google-play-scraper](https://github.com/n0madic/google-play-scraper) | 66 | Golang scraper to get data from Google Play Store | 3 months ago |
| [go-circleci](https://github.com/jszwedko/go-circleci) | 64 | Go library for interacting with CircleCI | 4 years ago |
| [airtable](https://github.com/mehanizm/airtable) | 61 | Simple golang airtable API wrapper | a day ago |
| [mixpanel](https://github.com/dukex/mixpanel) | 60 | Golang Mixpanel Client | 2 months ago |
| [ynab.go](https://github.com/brunomvsouza/ynab.go) | 58 | Go client for the YNAB API. Unofficial. It covers 100% of the resources made available by the YNAB API. | 6 months ago |
| [go-amazon-product-advertising-api](https://github.com/ngs/go-amazon-product-advertising-api) | 56 | Go Client Library for Amazon Product Advertising API | 5 years ago |
| [clarifai-go](https://github.com/Clarifai/clarifai-go) | 56 | DEPRECATED: please use https://github.com/Clarifai/clarifai-go-grpc | 6 years ago |
| [uptimerobot](https://github.com/bitfield/uptimerobot) | 56 | Client library for UptimeRobot v2 API | 3 months ago |
| [megos](https://github.com/andygrunwald/megos) | 54 | Go(lang) client library for accessing information of an Apache Mesos cluster. | 2 years ago |
| [go-xkcd](https://github.com/nishanths/go-xkcd) | 51 | xkcd.com API client in Go | 9 months ago |
| [fcm](https://github.com/maddevsio/fcm) | 50 | Firebase Cloud Messaging for application servers implemented using the Go programming language. | 3 years ago |
| [gads](https://github.com/emiddleton/gads) | 50 | Google Adwords API for Go | 2 years ago |
| [gomusicbrainz](https://github.com/michiwend/gomusicbrainz) | 49 | a Go (Golang) MusicBrainz WS2 client library - work in progress | 2 months ago |
| [go-spotify](https://github.com/rapito/go-spotify) | 47 | Go library for the Spotify Web API | 3 years ago |
| [golyrics](https://github.com/mamal72/golyrics) | 40 | A simple Go package to fetch lyrics from Wikia | 5 years ago |
| [go-myanimelist](https://github.com/nstratos/go-myanimelist) | 36 | Go library for accessing the MyAnimeList API: https://myanimelist.net/apiconfig/references/api/v2 | 3 months ago |
| [patreon-go](https://github.com/mxpv/patreon-go) | 36 | Patreon Go API client | 10 months ago |
| [translate](https://github.com/nuveo/translate) | 33 | Go online translation package | 7 years ago |
| [gami](https://github.com/bit4bit/gami) | 31 | GO - Asterisk AMI Interface | 5 years ago |
| [gcm](https://github.com/TheOrioli/gcm) | 31 | Google Cloud Messaging for application servers implemented using the Go programming language. | 8 years ago |
| [lastpass-go](https://github.com/ansd/lastpass-go) | 30 | Golang client for LastPass | 2 months ago |
| [go-steam](https://github.com/sostronk/go-steam) | 30 | Go library for querying Source servers | 2 years ago |
| [go-imgur](https://github.com/koffeinsource/go-imgur) | 25 | Go library to use the imgur.com API | a month ago |
| [go-shopify](https://github.com/rapito/go-shopify) | 25 | Simple Shopify API for the Go Programming Language | 3 years ago |
| [coinpaprika-api-go-client](https://github.com/coinpaprika/coinpaprika-api-go-client) | 20 | Go client library for interacting with Coinpaprika's API | 2 months ago |
| [device-check-go](https://github.com/rinchsan/device-check-go) | 20 | :iphone: iOS DeviceCheck SDK for Go - query and modify the per-device bits | 4 months ago |
| [brewerydb](https://github.com/naegelejd/brewerydb) | 19 | Go library for http://www.brewerydb.com/ API | 8 years ago |
| [codeship-go](https://github.com/codeship/codeship-go) | 19 | Go library for accessing the Codeship API v2 | 3 years ago |
| [textbelt](https://github.com/farmergreg/textbelt) | 19 | golang library for textbelt.com | 8 years ago |
| [go-aws-news](https://github.com/circa10a/go-aws-news) | 17 | Go app + library to fetch what's new from AWS | 4 months ago |
| [go-hacknews](https://github.com/PaulRosset/go-hacknews) | 16 | 📟  Tiny utility Go client for HackerNews API. | 6 years ago |
| [gopaapi5](https://github.com/utekaravinash/gopaapi5) | 14 | Go Client Library for Amazon's Product Advertising API 5.0 | 3 years ago |
| [go-openproject](https://github.com/manuelbcd/go-openproject) | 13 | Go client library for OpenProject | 8 months ago |
| [go-sophos](https://github.com/esurdam/go-sophos) | 13 | Sophos UTM 9 REST API Client in Golang | a year ago |
| [go-google-analytics](https://github.com/chonthu/go-google-analytics) | 13 | Simple Reporting for Google Analytics | 8 years ago |
| [go-here](https://github.com/abdullahselek/go-here) | 12 | Go client library around the HERE location based APIs. | 3 years ago |
| [smitego](https://github.com/sergiotapia/smitego) | 12 | SmiteGo is an API wrapper for the Smite game from HiRez. It is written in Go! | 9 years ago |
| [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) | 11 | Golang package which provides http Handlers to serve the swagger ui | 9 months ago |
| [gomalshare](https://github.com/MonaxGT/gomalshare) | 10 | Go library MalShare API | 4 years ago |
| [libgoffi](https://github.com/noctarius/libgoffi) | 9 | libgoffi - libffi adapter library for Go | 3 years ago |
| [rrdaclient](https://github.com/Omie/rrdaclient) | 9 | Go bindings for RRDA https://github.com/fcambus/rrda | 9 years ago |
| [go-chronos](https://github.com/axelspringer/go-chronos) | 8 | :dancers: Go Chronos 3.x REST API Client | 5 years ago |
| [go-sptrans](https://github.com/sergioaugrod/go-sptrans) | 8 | Go client library for the SPTrans Olho Vivo API. :bus: | 3 years ago |
| [go-google-email-audit-api](https://github.com/ngs/go-google-email-audit-api) | 8 | Go Client Library for G Suite Email Audit API | 7 years ago |
| [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) | 8 | This is RAWG SDK GO. This library contains methods for interacting with RAWG API. | a year ago |
| [gumblr](https://github.com/mattcunningham/gumblr) | 8 | A Go Wrapper for the Tumblr v2 API | 7 years ago |
| [go-zooz](https://github.com/gojuno/go-zooz) | 7 | Zooz API client for Go | 7 months ago |
| [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) | 3 | Golang SDK for AppStore Connect API (Unofficial) | 4 months ago |
| [go-restcountries](https://github.com/chriscross0/go-restcountries) | 3 | Go wrapper for the REST Countries API. | 2 years ago |
| [kanka](https://github.com/Henry-Sarabia/kanka) | 3 | Go client for the Kanka API | 3 years ago |
| [playlyfe-go-sdk](https://github.com/playlyfe/playlyfe-go-sdk) | 2 | This is the official Playlyfe Golang Sdk | 7 years ago |
| [tripadvisor-golang](https://github.com/mrbenosborne/tripadvisor-golang) | 2 | A TripAdvisor API wrapper for Golang. | 4 years ago |
| [vl-go](https://github.com/verifid/vl-go) | 2 | Go client library around the VerifID identity verification layer API. | 2 years ago |


### [Utilities](#Utilities)
* General utilities and tools to make your life easier.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fzf](https://github.com/junegunn/fzf) | 53131 | :cherry_blossom: A command-line fuzzy finder | 10 hours ago |
| [hub](https://github.com/mislav/hub) | 22492 | A command-line tool that makes git easier to use with GitHub. | 7 days ago |
| [ctop](https://github.com/bcicen/ctop) | 14424 | Top-like interface for container metrics | 2 months ago |
| [sqlx](https://github.com/jmoiron/sqlx) | 13904 | general purpose extensions to golang's database/sql | a day ago |
| [goreleaser](https://github.com/goreleaser/goreleaser) | 11856 | Deliver Go binaries as fast and easily as possible | 13 hours ago |
| [wuzz](https://github.com/asciimoo/wuzz) | 10330 | Interactive cli tool for HTTP inspection | 7 months ago |
| [usql](https://github.com/xo/usql) | 8123 | Universal command-line interface for SQL databases | 5 days ago |
| [peco](https://github.com/peco/peco) | 7384 | Simplistic interactive filtering tool | 4 months ago |
| [go-funk](https://github.com/thoas/go-funk) | 4303 | A modern Go utility library which provides helpers (map, find, contains, filter, ...) | 21 days ago |
| [godropbox](https://github.com/dropbox/godropbox) | 4129 | Common libraries for writing Go services/applications. | 17 days ago |
| [hystrix-go](https://github.com/afex/hystrix-go) | 3991 | Netflix's Hystrix latency and fault tolerance library, for Go  | 5 months ago |
| [panicparse](https://github.com/maruel/panicparse) | 3388 | Crash your app in style (Golang) | 7 days ago |
| [minify](https://github.com/tdewolff/minify) | 3357 | Go minifiers for web formats | 9 days ago |
| [goreporter](https://github.com/qax-os/goreporter) | 3070 | A Golang tool that does static analysis, unit testing, code review and generate code quality report. | 5 years ago |
| [mergo](https://github.com/imdario/mergo) | 2497 | Mergo: merging Go structs and maps since 2013 | 21 days ago |
| [mc](https://github.com/minio/mc) | 2495 | Simple , Fast tool to manage MinIO clusters :cloud: | 18 hours ago |
| [spinner](https://github.com/briandowns/spinner) | 2114 | Go (golang) package with 90 configurable terminal spinner/progress indicators. | a month ago |
| [cli](https://github.com/create-go-app/cli) | 2099 | ✨ A complete and self-contained solution for developers of any qualification to create a production-ready project with backend (Go), frontend (JavaScript, TypeScript) and deploy automation (Ansible, Docker) by running only one CLI command. | a day ago |
| [storm](https://github.com/asdine/storm) | 1999 | Simple and powerful toolkit for BoltDB | 2 years ago |
| [filetype](https://github.com/h2non/filetype) | 1857 | Fast, dependency-free Go package to infer binary file types based on the magic numbers header signature | 4 months ago |
| [mole](https://github.com/davrodpin/mole) | 1652 | CLI application to create ssh tunnels focused on resiliency and user experience. | 3 months ago |
| [boilr](https://github.com/tmrts/boilr) | 1630 | :zap: boilerplate template manager that generates files or directories from template repositories | 4 months ago |
| [jump](https://github.com/gsamokovarov/jump) | 1624 | Jump helps you navigate faster by learning your habits. ✌️ | 2 months ago |
| [mimetype](https://github.com/gabriel-vasile/mimetype) | 1145 | A fast Golang library for media type and file extension detection, based on magic numbers | 4 days ago |
| [circuitbreaker](https://github.com/rubyist/circuitbreaker) | 1076 | Circuit Breakers in Go | a year ago |
| [scany](https://github.com/georgysavva/scany) | 945 | Library for scanning data from a database into Go structs and more | 4 months ago |
| [gtm](https://github.com/git-time-metric/gtm) | 944 | Simple, seamless, lightweight time tracking for Git | a year ago |
| [hostctl](https://github.com/guumaster/hostctl) | 912 | Your dev tool to manage /etc/hosts like a pro! | 2 months ago |
| [immortal](https://github.com/immortal/immortal) | 766 | ⭕  A *nix cross-platform (OS agnostic) supervisor | a year ago |
| [circuit](https://github.com/cep21/circuit) | 706 | An efficient and feature complete Hystrix like Go implementation of the circuit breaker pattern. | 4 months ago |
| [delve](https://github.com/derekparker/delve) | 590 | Delve is a debugger for the Go programming language. | 3 days ago |
| [ergo](https://github.com/cristianoliveira/ergo) | 572 | The management of multiple apps running over different ports made easy | 11 days ago |
| [htcat](https://github.com/htcat/htcat) | 552 | Parallel and Pipelined HTTP GET Utility | 4 years ago |
| [koazee](https://github.com/wesovilabs/koazee) | 521 | A StreamLike, Immutable, Lazy Loading and smart Golang Library to deal with slices. | 3 years ago |
| [clockwork](https://github.com/jonboulle/clockwork) | 497 | a fake clock for golang | 10 hours ago |
| [godaemon](https://github.com/VividCortex/godaemon) | 490 | Daemonize Go applications deviously. | 2 years ago |
| [go-dry](https://github.com/ungerik/go-dry) | 488 | DRY (don't repeat yourself) package for Go | a year ago |
| [changie](https://github.com/miniscruff/changie) | 470 | Automated changelog tool for preparing releases with lots of customization options | 3 days ago |
| [gopencils](https://github.com/bndr/gopencils) | 445 | Easily consume REST APIs with Go (golang) | 4 years ago |
| [gubrak](https://github.com/novalagung/gubrak) | 441 | ⚙️ Golang functional utility library with syntactic sugar. It's like lodash, but for Go | 4 months ago |
| [request](https://github.com/mozillazg/request) | 427 | A developer-friendly HTTP request library for Gopher. | 4 years ago |
| [deepcopier](https://github.com/ulule/deepcopier) | 413 | simple struct copying for golang | 3 years ago |
| [clipboard](https://github.com/golang-design/clipboard) | 411 | 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)  | a month ago |
| [scan](https://github.com/blockloop/scan) | 408 | Tiny lib to scan SQL rows directly to structs, slices, and primitive types | 3 days ago |
| [go-rate](https://github.com/beefsack/go-rate) | 387 | A timed rate limiter for Go | a year ago |
| [mani](https://github.com/alajmo/mani) | 374 | :robot: CLI tool to help you manage repositories | a month ago |
| [retry](https://github.com/kamilsk/retry) | 334 | ♻️ The most advanced interruptible mechanism to perform actions repetitively until successful. | 2 years ago |
| [serve](https://github.com/syntaqx/serve) | 299 | 🍽️ a static http server anywhere you need one. | a month ago |
| [grofer](https://github.com/pesos/grofer) | 274 | A system and resource monitoring tool written in Golang! | 3 months ago |
| [util](https://github.com/shomali11/util) | 274 | A collection of useful utility functions | a year ago |
| [gotenv](https://github.com/subosito/gotenv) | 262 | Load environment variables from `.env` or `io.Reader` in Go. | 2 months ago |
| [countries](https://github.com/biter777/countries) | 261 | Countries - ISO-639, ISO-3166 countries codes with subdivisions and names, ISO-4217 currency designators, ITU-T E.164 IDD phone codes, countries capitals, UN M.49 codes, IANA ccTLD countries domains, IOC/NOC and FIFA codes, VERY VERY FAST, compatible with Databases/JSON/BSON/GOB/XML/CSV, Emoji countries flags and currencies support, Unicode CLDR. | 7 days ago |
| [gohper](https://github.com/cosiner/gohper) | 255 | [UNMATAINED] common libs here. | 6 years ago |
| [go-trigger](https://github.com/sadlil/go-trigger) | 233 | A Global event triggerer for golang. Defines functions as event with id string. Trigger the event anywhere from your project. | 6 years ago |
| [rospo](https://github.com/ferama/rospo) | 231 | 🐸 Simple, reliable, persistent ssh tunnels with embedded ssh server | 15 hours ago |
| [go-pattern-match](https://github.com/alexpantyukhin/go-pattern-match) | 226 | Pattern matchings for Go. | 4 months ago |
| [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) | 202 | go-sitemap-generator is the easiest way to generate Sitemaps in Go | 6 days ago |
| [toolbox](https://github.com/viant/toolbox) | 192 | Toolbox - go utility library | 2 months ago |
| [death](https://github.com/vrecan/death) | 190 | Managing go application shutdown with signals. | a year ago |
| [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) | 183 | go-bind-plugin generates API for exported plugin symbols (-buildmode=plugin) - go1.8+ only (http://golang.org/pkg/plugin) | 4 years ago |
| [limiters](https://github.com/mennanov/limiters) | 168 | Golang rate limiters for distributed applications | 3 months ago |
| [moldova](https://github.com/StabbyCutyou/moldova) | 166 | A lightweight templating system for generating random data | 6 years ago |
| [rerun](https://github.com/ivpusic/rerun) | 165 | Configurable recompiling and rerunning go apps when source changes | 5 years ago |
| [apm](https://github.com/topfreegames/apm) | 164 | APM is a process manager for Golang applications. | 7 years ago |
| [robustly](https://github.com/VividCortex/robustly) | 156 | Run functions resiliently in Go, catching and restarting panics | 2 years ago |
| [chyle](https://github.com/antham/chyle) | 150 | Changelog generator : use a git repository and various data sources and publish the result on external services | a month ago |
| [go-bsdiff](https://github.com/gabstv/go-bsdiff) | 144 | Pure Go bsdiff and bspatch libraries and CLI tools. | 4 years ago |
| [nostromo](https://github.com/pokanop/nostromo) | 135 | 👽 CLI for building powerful aliases and tools | 5 months ago |
| [cryptgo](https://github.com/Gituser143/cryptgo) | 134 | A terminal application to watch crypto prices! | 2 years ago |
| [cmd](https://github.com/commander-cli/cmd) | 132 | A simple package to execute shell commands on linux, windows and osx | 3 months ago |
| [onecache](https://github.com/adelowo/onecache) | 132 | One caching API, Multiple backends | 3 years ago |
| [filter](https://github.com/gookit/filter) | 130 | ⏳ Provide filtering, sanitizing, and conversion of Golang data. 提供对Golang数据的过滤，净化，转换。 | 6 days ago |
| [lrserver](https://github.com/jaschaephraim/lrserver) | 124 | LiveReload server for Go [golang] | 2 months ago |
| [sorty](https://github.com/jfcg/sorty) | 122 | :zap: Fast Concurrent / Parallel Sorting in Go | 5 months ago |
| [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) | 121 | Golang Mongodb Pagination for official mongodb/mongo-go-driver package which supports both normal queries and Aggregation pipelines with all information like Total records, Page, Per Page, Previous, Next, Total Page and query results. | 4 months ago |
| [goval](https://github.com/maja42/goval) | 119 | Expression evaluation in golang | 8 months ago |
| [goseaweedfs](https://github.com/linxGnu/goseaweedfs) | 101 | A complete Golang client for SeaweedFS | 8 months ago |
| [mssqlx](https://github.com/linxGnu/mssqlx) | 101 | Database client library, proxy for any master slave, master master structures. Lightweight, performant and auto balancing in mind. | a month ago |
| [xferspdy](https://github.com/monmohan/xferspdy) | 96 | Xferspdy provides binary diff and patch library in golang. [Mentioned in Awesome Go, https://github.com/avelino/awesome-go] | 2 years ago |
| [go-health](https://github.com/Talento90/go-health) | 92 | :heart: Health check your applications and dependencies | a year ago |
| [mimemagic](https://github.com/zRedShift/mimemagic) | 90 | Powerful and versatile MIME sniffing package using pre-compiled glob patterns, magic number signatures, XML document namespaces, and tree magic for mounted volumes, generated from the XDG shared-mime-info database. | 4 months ago |
| [go-lock](https://github.com/viney-shih/go-lock) | 88 | go-lock is a lock library implementing read-write mutex and read-write trylock without starvation | a year ago |
| [pgo](https://github.com/arthurkushman/pgo) | 81 | Go library for PHP community with convenient functions | 2 months ago |
| [repeat](https://github.com/ssgreg/repeat) | 81 | Go implementation of different backoff strategies useful for retrying operations and heartbeating. | 3 years ago |
| [pm](https://github.com/VividCortex/pm) | 78 | Processlist manager with TCP listener | 3 years ago |
| [handy](https://github.com/miguelpragier/handy) | 73 | GO Golang Utilities and helpers like validators and string formatters | 3 years ago |
| [netbug](https://github.com/e-dard/netbug) | 72 | Package netbug provides a handler for registering profilers on your own ServeMux. | 8 years ago |
| [unis](https://github.com/esemplastic/unis) | 70 | UNIS: A Common Architecture for String Utilities within the Go Programming Language. | 6 years ago |
| [multitick](https://github.com/VividCortex/multitick) | 67 | A multiplexor for aligned time.Time tickers in Go | 2 years ago |
| [goreadability](https://github.com/philipjkim/goreadability) | 66 | Webpage summary extractor using Facebook Open Graph and arc90's readability | 4 years ago |
| [retry](https://github.com/thedevsaddam/retry) | 63 | Simple and easy retry mechanism package for Go | 2 years ago |
| [go-astitodo](https://github.com/asticode/go-astitodo) | 60 | Parse TODOs in your GO code | 5 months ago |
| [minquery](https://github.com/icza/minquery) | 60 | MongoDB / mgo query that supports efficient pagination (cursors to continue listing documents where we left off). | 3 months ago |
| [golog](https://github.com/mlimaloureiro/golog) | 59 | Easy and simple CLI time tracker for your tasks | 4 years ago |
| [dbt](https://github.com/nikogura/dbt) | 57 | A delivery system for running self-updating, signed tools. | 4 months ago |
| [beyond](https://github.com/wesovilabs/beyond) | 53 | The Go library that will drive you to AOP world! | 3 months ago |
| [shutdown](https://github.com/ztrue/shutdown) | 51 | Golang app shutdown hooks. | a year ago |
| [slice](https://github.com/psampaz/slice) | 51 | Type-safe functions for common Go slice operations | 3 years ago |
| [copy-pasta](https://github.com/jutkko/copy-pasta) | 50 | Universal copy paste service, works across different machines! | 3 years ago |
| [golarm](https://github.com/msempere/golarm) | 50 | Fire alarms with system events | 8 years ago |
| [goback](https://github.com/carlescere/goback) | 48 | Golang simple exponential backoff package. | 2 years ago |
| [retry-go](https://github.com/rafaeljesus/retry-go) | 47 | Retrying made simple and easy for golang :repeat:  | 5 years ago |
| [backscanner](https://github.com/icza/backscanner) | 46 | A scanner similar to bufio.Scanner, but it reads and returns lines in reverse order, starting at a given position and going backward. | 3 months ago |
| [intrinsic](https://github.com/mengzhuo/intrinsic) | 46 | Provide Golang native SIMD intrinsics on x86/amd64 platform | 6 years ago |
| [set](https://github.com/nofeaturesonlybugs/set) | 44 | Package set is a small wrapper around the official reflect package that facilitates loose type conversion and assignment into native Go types. | a year ago |
| [sshman](https://github.com/shoobyban/sshman) | 44 | SSH Manager - manage users through authorized_keys files | 8 months ago |
| [go-httpheader](https://github.com/mozillazg/go-httpheader) | 43 | A Go library for encoding structs into Header fields. | 11 days ago |
| [slicer](https://github.com/leaanthony/slicer) | 43 | Utility class for handling slices | 2 years ago |
| [equalizer](https://github.com/reugn/equalizer) | 42 | A rate limiters package for Go | 2 years ago |
| [gostrutils](https://github.com/ik5/gostrutils) | 40 | Collections of string utils I have created over the years | 4 months ago |
| [gpath](https://github.com/tenntenn/gpath) | 40 | gpath is a Go package to access a field by a path using reflect pacakge | 6 years ago |
| [evaluator](https://github.com/nullne/evaluator) | 37 |  | 3 months ago |
| [ghokin](https://github.com/antham/ghokin) | 35 | Parallelized formatter with no external dependencies for gherkin (cucumber, behat...) | a month ago |
| [myhttp](https://github.com/inancgumus/myhttp) | 35 | Simplest HTTP GET requester for Go with timeout support | 5 years ago |
| [rclient](https://github.com/zpatrick/rclient) | 35 | Minimalistic REST client for Go applications | 4 years ago |
| [tome](https://github.com/cyruzin/tome) | 34 | Package tome was designed to paginate simple RESTful APIs. | a year ago |
| [throttle](https://github.com/yudppp/throttle) | 33 | lodash throttle like Go library | 2 years ago |
| [copy](https://github.com/gotidy/copy) | 32 | Package for fast copying structs of different types | 3 years ago |
| [generate](https://github.com/go-playground/generate) | 29 | :runner:runs go generate recursively on a specified path or environment variable and can filter by regex | 7 years ago |
| [mimesniffer](https://github.com/aofei/mimesniffer) | 28 | A MIME type sniffer for Go. | a year ago |
| [ugo](https://github.com/alxrm/ugo) | 27 | Simple and expressive toolbox written in Go | 7 years ago |
| [goplaceholder](https://github.com/michiwend/goplaceholder) | 26 | a small golang lib to generate placeholder images | 7 years ago |
| [rerate](https://github.com/abo/rerate) | 24 | redis-based rate counter and rate limiter | 6 years ago |
| [ctxutil](https://github.com/posener/ctxutil) | 22 | utils for Go context | 3 years ago |
| [structs](https://github.com/PumpkinSeed/structs) | 22 | Golang struct operations. | 6 years ago |
| [ptr](https://github.com/gotidy/ptr) | 21 | Contains functions for simplified creation of pointers from constants of basic types | a month ago |
| [go-convert](https://github.com/Eun/go-convert) | 20 | Convert a value into another type | a month ago |
| [jsend](https://github.com/clevergo/jsend) | 19 | :100: JSend's implementation writen in Go(golang) | 2 years ago |
| [dlog](https://github.com/kirillDanshin/dlog) | 17 | Simple build-time controlled debug log with ability to log where the logger was called | 6 years ago |
| [filler](https://github.com/yaronsumel/filler) | 17 | fill struct data easily with fill tags | 6 years ago |
| [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) | 17 | Problem json implementation (https://tools.ietf.org/html/rfc7807) package for go | 3 years ago |
| [okrun](https://github.com/xta/okrun) | 16 | ok, run your gofile | 9 years ago |
| [rest-go](https://github.com/edermanoel94/rest-go) | 16 | A package that provide many helpful methods for working with rest api. | 3 years ago |
| [go-types](https://github.com/mikekonan/go-types) | 15 | Library providing opanapi3 and Go types for store/validation and transfer of ISO-4217, ISO-3166, and other types. | 21 days ago |
| [command](https://github.com/txgruppi/command) | 14 | Command pattern for Go with thread safe serial and parallel dispatcher | 7 years ago |
| [go-actuator](https://github.com/sinhashubham95/go-actuator) | 14 | Golang production-ready features | a year ago |
| [go-clip](https://github.com/prashantgupta24/go-clip) | 12 | A minimalistic clipboard manager for Mac. | 2 years ago |
| [silk](https://github.com/chrispassas/silk) | 12 | Silk File Reader | a year ago |
| [retry](https://github.com/shafreeck/retry) | 11 | A pretty simple library to ensure your work to be done | 3 years ago |
| [blank](https://github.com/Henry-Sarabia/blank) | 10 | Detect blank strings or remove whitespace from strings | 4 years ago |
| [go-countries](https://github.com/mikekonan/go-countries) | 10 |  | 3 years ago |
| [statiks](https://github.com/janiltonmaciel/statiks) | 10 | Fast, zero-configuration, static HTTP filer server. | 3 years ago |
| [bleep](https://github.com/sinhashubham95/bleep) | 9 | OS Signal Handlers in Go | 3 years ago |
| [retry](https://github.com/percolate/retry) | 9 | Percolate's Go retry package | 4 months ago |
| [nfdump](https://github.com/chrispassas/nfdump) | 8 | NFDump File Reader | 5 months ago |
| [sliceconv](https://github.com/Henry-Sarabia/sliceconv) | 8 | Slice conversion between primitive types | 3 years ago |
| [lets-go](https://github.com/aplescia/lets-go) | 6 | Go module that provides common utilities for Cloud Native development | 2 years ago |
| [olaf](https://github.com/btnguyen2k/olaf) | 5 | Twitter Snowflake implemented in Go | 4 years ago |
| [tik](https://github.com/andy2046/tik) | 5 | hierarchical timing wheel | 3 years ago |
| [goctx](https://github.com/zerosnake0/goctx) | 4 | Get your context value faster | 3 years ago |


### [UUID](#UUID)
* Libraries for working with UUIDs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [uuid](https://github.com/google/uuid) | 4420 | Go package for UUIDs based on RFC 4122 and DCE 1.1: Authentication and Security Services. | a month ago |
| [ulid](https://github.com/oklog/ulid) | 3531 | Universally Unique Lexicographically Sortable Identifier (ULID) in Go | 6 days ago |
| [uuid](https://github.com/gofrs/uuid) | 1378 | A UUID package originally forked from github.com/satori/go.uuid | 12 days ago |
| [wuid](https://github.com/edwingeng/wuid) | 499 | An extremely fast globally unique number generator. | 5 months ago |
| [sno](https://github.com/muyo/sno) | 85 | Compact, sortable and fast unique IDs with embedded metadata. | 2 years ago |
| [nanoid](https://github.com/aidarkhanov/nanoid) | 58 | A tiny and fast Go unique string generator | 10 months ago |
| [Goid](https://github.com/jakehl/Goid) | 38 | A UUIDv4 generation package written in go | 4 years ago |
| [gouid](https://github.com/twharmon/gouid) | 20 | Fast, dependable universally unique ids | a year ago |
| [uuid](https://github.com/agext/uuid) | 15 | Generate, encode, and decode UUIDs v1 with fast or cryptographic-quality random node identifier. | 3 years ago |


### [Validation](#Validation)
* Libraries for validation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [joi](https://github.com/hapijs/joi) | 20059 | The most powerful data validation library for JS | 5 days ago |
| [validator](https://github.com/go-playground/validator) | 13463 | :100:Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving | 6 days ago |
| [govalidator](https://github.com/asaskevich/govalidator) | 5726 | [Go] Package of validators and sanitizers for strings, numerics, slices and structs | a month ago |
| [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) | 3246 | An idiomatic Go (golang) validation package. Supports configurable and extensible validation rules (validators) using normal language constructs instead of error-prone struct tags. | 3 months ago |
| [govalidator](https://github.com/thedevsaddam/govalidator) | 1228 | Validate Golang request data with simple rules. Highly inspired by Laravel's request validation. | 2 months ago |
| [validate](https://github.com/gookit/validate) | 903 | ⚔ Go package for data validation and filtering. support Map, Struct, Form data. Go通用的数据验证与过滤库，使用简单，内置大部分常用验证、过滤器，支持自定义验证器、自定义消息、字段翻译。 | 5 days ago |
| [checkdigit](https://github.com/osamingo/checkdigit) | 100 | Provide check digit algorithms and calculators written in Go | 2 months ago |
| [validate](https://github.com/gobuffalo/validate) | 84 | This package provides a framework for writing validations for Go applications. | 9 months ago |
| [jio](https://github.com/faceair/jio) | 83 | jio is a json schema validator similar to joi | 3 years ago |
| [terraform-validator](https://github.com/thazelart/terraform-validator) | 79 | A norms and conventions validator for Terraform | a year ago |
| [gody](https://github.com/guiferpa/gody) | 63 | :balloon: A lightweight struct validator for Go | 2 years ago |
| [govalid](https://github.com/twharmon/govalid) | 33 | Struct validation using tags | 2 years ago |


### [Version Control](#Version-Control)
* Libraries for version control.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-git](https://github.com/go-git/go-git) | 4743 | A highly extensible Git implementation in pure Go. | 2 days ago |
| [glab](https://github.com/profclems/glab) | 2084 | The GitLab CLI tool. Archived: now officially adopted by GitLab as the official CLI tool and maintained at https://gitlab.com/gitlab-org/cli. See https://github.com/profclems/glab/issues/983 | 9 months ago |
| [hercules](https://github.com/src-d/hercules) | 1905 | Gaining advanced insights from Git repository history. | 5 months ago |
| [git2go](https://github.com/libgit2/git2go) | 1855 | Git to Go; bindings for libgit2. Like McDonald's but tastier. | 3 months ago |
| [gh](https://github.com/rjeczalik/gh) | 79 | Scriptable server and net/http middleware for GitHub Webhooks. | 5 years ago |
| [go-vcs](https://github.com/sourcegraph/go-vcs) | 75 | manipulate and inspect VCS repositories in Go | 2 months ago |
| [Githooks](https://github.com/gabyx/Githooks) | 74 | 🦎 Githooks: per-repo and shared Git hooks with version control and auto update.  | 13 hours ago |
| [hgo](https://github.com/beyang/hgo) | 15 | Hgo is a collection of Go packages providing read-access to local Mercurial repositories. | 8 years ago |


### [Video](#Video)
* Libraries for manipulating video.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [goav](https://github.com/giorgisio/goav) | 2005 | Golang bindings for FFmpeg (This repository is no longer maintained) | a year ago |
| [m3u8](https://github.com/grafov/m3u8) | 1050 | Parser and generator of M3U8-playlists for Apple HLS. Library for Go language. :cinema: | 3 months ago |
| [gmf](https://github.com/3d0c/gmf) | 845 | Go Media Framework | 10 months ago |
| [go-astits](https://github.com/asticode/go-astits) | 483 | Demux and mux MPEG Transport Streams (.ts) natively in GO | 4 months ago |
| [go-astisub](https://github.com/asticode/go-astisub) | 472 | Manipulate subtitles in GO (.srt, .ssa/.ass, .stl, .ttml, .vtt (webvtt), teletext, etc.) | 7 days ago |
| [gortsplib](https://github.com/bluenviron/gortsplib) | 444 | RTSP 1.0 client and server library for the Go programming language | 2 days ago |
| [libvlc-go](https://github.com/adrg/libvlc-go) | 356 | Go bindings for libVLC and high-level media player interface | 4 months ago |
| [gst](https://github.com/ziutek/gst) | 166 | Go bindings for GStreamer (retired: currently I don't use/develop this package) | 3 years ago |
| [go-m3u8](https://github.com/quangngotan95/go-m3u8) | 104 | Parse and generate m3u8 playlists for Apple HTTP Live Streaming (HLS) in Golang (ported from gem https://github.com/sethdeckard/m3u8) | 7 months ago |
| [v4l](https://github.com/korandiz/v4l) | 75 | Facade to the Video4Linux video capture interface.  | 2 years ago |
| [libgosubs](https://github.com/wargarblgarbl/libgosubs) | 23 | golang library to read and write various subtitle formats | 3 years ago |
| [go-mpd](https://github.com/unki2aut/go-mpd) | 16 | Go library for parsing and generating MPEG-DASH Media Presentation Description (MPD) files | 3 years ago |


### [Web Frameworks](#Web-Frameworks)
* 

#### [Full stack web frameworks](#Full-stack-web-frameworks.)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gin](https://github.com/gin-gonic/gin) | 69961 | Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin. | 3 hours ago |
| [fiber](https://github.com/gofiber/fiber) | 27190 | ⚡️ Express inspired web framework written in Go | 5 hours ago |
| [echo](https://github.com/labstack/echo) | 26034 | High performance, minimalist Go web framework | 16 hours ago |
| [revel](https://github.com/revel/revel) | 12942 | A high productivity, full-stack web framework for the Go language. | 4 months ago |
| [goa](https://github.com/goadesign/goa) | 5220 | Design-based APIs and microservices in Go | 11 minutes ago |
| [gizmo](https://github.com/nytimes/gizmo) | 3716 | A Microservice Toolkit from The New York Times | 5 days ago |
| [go-json-rest](https://github.com/ant0ine/go-json-rest) | 3511 | A quick and easy way to setup a RESTful JSON API | 2 years ago |
| [macaron](https://github.com/go-macaron/macaron) | 3397 | Package macaron is a high productive and modular web framework in Go. | a day ago |
| [utron](https://github.com/gernest/utron) | 2219 | A lightweight MVC framework for Go(Golang) | 5 years ago |
| [goyave](https://github.com/go-goyave/goyave) | 1304 | 🍐 Elegant Golang REST API Framework (v5 preview available) | 11 days ago |
| [go-tigertonic](https://github.com/rcrowley/go-tigertonic) | 998 | A Go framework for building JSON web services inspired by Dropwizard | 5 years ago |
| [tango](https://github.com/lunny/tango) | 834 | This is only a mirror and Moved to https://gitea.com/lunny/tango | 4 years ago |
| [gearbox](https://github.com/gogearbox/gearbox) | 715 | Gearbox :gear: is a web framework written in Go with a focus on high performance | 20 days ago |
| [beego](https://github.com/astaxie/beego) | 644 | beego is an open-source, high-performance web framework for the Go programming language. | a year ago |
| [aero](https://github.com/aerogo/aero) | 530 | :bullettrain_side: High-performance web server for Go. | 10 months ago |
| [gongular](https://github.com/mustafaakin/gongular) | 503 | A different approach to Go web frameworks | 3 years ago |
| [flamingo-commerce](https://github.com/i-love-flamingo/flamingo-commerce) | 441 | Flexible E-Commerce Framework on top of Flamingo. Used to build E-Commerce "Portals" and connect it with the help of individual Adapters to other services.  | 2 hours ago |
| [air](https://github.com/aofei/air) | 430 | An ideally refined web framework for Go. | 4 months ago |
| [neo](https://github.com/ivpusic/neo) | 418 | Go Web Framework | 8 months ago |
| [rk-boot](https://github.com/rookie-ninja/rk-boot) | 411 | Build microservice with rk-boot and let the team take over clean and tidy code. | 2 months ago |
| [flamingo](https://github.com/i-love-flamingo/flamingo) | 387 | Flamingo Framework and Core Library. Flamingo is a go based framework to build pluggable applications. Focus is on clean architecture, maintainability and operation readiness. | 14 hours ago |
| [mango](https://github.com/paulbellamy/mango) | 372 | Mango is a modular web-application framework for Go, inspired by Rack, and PEP333. | 6 years ago |
| [gondola](https://github.com/rainycape/gondola) | 310 | The web framework for writing faster sites, faster | 4 years ago |
| [webgo](https://github.com/bnkamalesh/webgo) | 280 | A microframework to build web apps; with handler chaining, middleware support, and most of all; standard library compliant HTTP handlers(i.e. http.HandlerFunc). | 4 months ago |
| [uadmin](https://github.com/uadmin/uadmin) | 279 | The web framework for Golang | 2 days ago |
| [ginrpc](https://github.com/xxjwxc/ginrpc) | 275 | gin auto binding,grpc, and annotated route,gin 注解路由, grpc,自动参数绑定工具 | a month ago |
| [golf](https://github.com/dinever/golf) | 265 | :golf: The Golf web framework | 2 years ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 179 | hiboot is a high performance web and cli application framework with dependency injection support | 5 months ago |
| [appy](https://github.com/appist/appy) | 128 | An opinionated productive web framework that helps scaling business easier. | 2 months ago |
| [go-rest](https://github.com/ungerik/go-rest) | 127 | A small and evil REST framework for Go | 6 years ago |
| [patron](https://github.com/beatlabs/patron) | 124 | Microservice framework following best cloud practices with a focus on productivity. | 20 hours ago |
| [microservice](https://github.com/claygod/microservice) | 111 | This library provides a simple microservice framework based on clean architecture principles with a working example implemented. | 6 months ago |
| [rux](https://github.com/gookit/rux) | 91 | ⚡ Rux is an simple and fast web framework. support route group, param route binding, middleware, compatible http.Handler interface. 简单且快速的 Go api/web 框架，支持路由分组，路由参数绑定，中间件，兼容 http.Handler 接口 | 15 days ago |
| [vox](https://github.com/aisk/vox) | 80 | Simple and lightweight Go web framework inspired by koa | 7 months ago |
| [golax](https://github.com/fulldump/golax) | 76 | Golax, a go implementation for the Lax framework. | 6 months ago |
| [yarf](https://github.com/yarf-framework/yarf) | 65 | Yet Another REST Framework | 4 years ago |
| [fireball](https://github.com/ridgelines/fireball) | 59 | Go web framework with a natural feel | 5 years ago |
| [goa](https://github.com/goa-go/goa) | 49 | Goa is a  web framework based on middleware, like koa.js. | 4 years ago |
| [gotuna](https://github.com/gotuna/gotuna) | 43 | GoTuna a lightweight web framework for Go with mux router, middlewares, user sessions, templates, embedded views, and static file server. | a year ago |
| [goweb](https://github.com/twharmon/goweb) | 35 | Lightweight web framework based on net/http. | 10 months ago |
| [api](https://github.com/resoursea/api) | 33 | A REST framework for quickly writing resource based services in Golang. | 8 years ago |
| [rex](https://github.com/goanywhere/rex) | 33 | Pleasures for Web in Golang | 6 years ago |
| [banjo](https://github.com/gdwrd/banjo) | 21 | BANjO is a simple web framework written in Go (golang) | 5 years ago |


#### [Actual middlewares](#Actual-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tollbooth](https://github.com/didip/tollbooth) | 2443 | Simple middleware to rate-limit HTTP requests. | 7 months ago |
| [cors](https://github.com/rs/cors) | 2385 | Go net/http configurable handler to handle CORS requests | a month ago |
| [limiter](https://github.com/ulule/limiter) | 1792 | Dead simple rate limit middleware for Go. | 21 days ago |
| [go-server-timing](https://github.com/mitchellh/go-server-timing) | 852 | Go (golang) library for creating and consuming HTTP Server-Timing headers | a year ago |
| [go-fault](https://github.com/lingrino/go-fault) | 479 | Fault injection library in Go using standard http middleware | a month ago |
| [ln-paywall](https://github.com/philippgille/ln-paywall) | 135 | Go middleware for monetizing your API on a per-request basis with Bitcoin and Lightning ⚡️ | 4 years ago |
| [xff](https://github.com/sebest/xff) | 97 | A Golang Middleware to handle X-Forwarded-For Header | a year ago |
| [rk-grpc](https://github.com/rookie-ninja/rk-grpc) | 64 | Start gRPC microservice from YAML, plugin of rk-boot | 5 months ago |
| [rk-gin](https://github.com/rookie-ninja/rk-gin) | 40 | Start gin microservice from YAML, plugin of rk-boot | 5 months ago |
| [formjson](https://github.com/rs/formjson) | 38 | Go net/http handler to transparently manage posted JSON | 8 years ago |
| [client-timing](https://github.com/posener/client-timing) | 24 | An HTTP client for go-server-timing middleware. Enables automatic timing propagation through HTTP calls between servers. | 3 years ago |
| [mid](https://github.com/bobg/mid) | 7 | Middleware for HTTP services in Go | a year ago |


#### [Libraries for creating HTTP middlewares](#Libraries-for-creating-HTTP-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [negroni](https://github.com/urfave/negroni) | 7334 | Idiomatic HTTP Middleware for Golang | 4 months ago |
| [alice](https://github.com/justinas/alice) | 2825 | Painless middleware chaining for Go | a year ago |
| [render](https://github.com/unrolled/render) | 1806 | Go package for easily rendering JSON, XML, binary data, and HTML templates responses. | 4 months ago |
| [stats](https://github.com/thoas/stats) | 591 | A Go middleware that stores various information about your web application (response time, status code count, etc.) | 7 months ago |
| [interpose](https://github.com/carbocation/interpose) | 295 | Minimalist net/http middleware for golang | 7 years ago |
| [renderer](https://github.com/thedevsaddam/renderer) | 254 | Simple, lightweight and faster response (JSON, JSONP, XML, YAML, HTML, File) rendering package for Go | 2 years ago |
| [muxchain](https://github.com/stephens2424/muxchain) | 208 | Lightweight Middleware for net/http | 4 years ago |
| [rye](https://github.com/InVisionApp/rye) | 101 | A tiny http middleware for Golang with added handlers for common needs. | 2 months ago |
| [gores](https://github.com/alioygur/gores) | 100 | Go package that handles HTML, JSON, XML and etc. responses | 3 years ago |
| [mediary](https://github.com/HereMobilityDevelopers/mediary) | 86 | Add interceptors to GO http.Client | 3 years ago |
| [chain](https://github.com/codemodus/chain) | 64 | Composable chains of nested http.Handler instances. | 5 years ago |
| [catena](https://github.com/codemodus/catena) | 9 | gRPC interceptor catenation. | 5 years ago |


#### [Routers](#Routers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mux](https://github.com/gorilla/mux) | 18251 | A powerful HTTP router and URL matcher for building Go web servers with 🦍 | 8 hours ago |
| [httprouter](https://github.com/julienschmidt/httprouter) | 15517 | A high performance HTTP request router that scales well | 2 months ago |
| [chi](https://github.com/go-chi/chi) | 14631 | lightweight, idiomatic and composable router for building Go HTTP services | 19 hours ago |
| [web](https://github.com/gocraft/web) | 1505 | Go Router + Middleware. Your Contexts. | 3 years ago |
| [bone](https://github.com/go-zoo/bone) | 1294 | Lightning Fast HTTP Multiplexer | 4 years ago |
| [goji](https://github.com/goji/goji) | 943 | Goji is a minimalistic and flexible HTTP request multiplexer for Go (golang) | a year ago |
| [fasthttprouter](https://github.com/buaazp/fasthttprouter) | 874 | A high performance fasthttp request router that scales well | 4 years ago |
| [httptreemux](https://github.com/dimfeld/httptreemux) | 598 | High-speed, flexible tree-based HTTP router for Go. | 5 months ago |
| [gorouter](https://github.com/xujiajun/gorouter) | 532 | xujiajun/gorouter is a simple and fast HTTP router for Go. It is easy to build RESTful APIs and your web framework. | 4 years ago |
| [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) | 446 | An extremely fast Go (golang) HTTP router that supports regular expression route matching. Comes with full support for building RESTful APIs. | a year ago |
| [lars](https://github.com/go-playground/lars) | 390 | :rotating_light: Is a lightweight, fast and extensible zero allocation HTTP router for Go used to create customizable frameworks. | 4 years ago |
| [siesta](https://github.com/VividCortex/siesta) | 351 | Composable framework for writing HTTP handlers in Go. | 2 years ago |
| [vestigo](https://github.com/husobee/vestigo) | 269 | Echo Inspired Stand Alone URL Router | 3 years ago |
| [router](https://github.com/gowww/router) | 166 | ⚡️ A lightning fast HTTP router | 3 years ago |
| [gorouter](https://github.com/vardius/gorouter) | 148 | Go Server/API micro framework, HTTP request router, multiplexer, mux | 6 months ago |
| [pure](https://github.com/go-playground/pure) | 139 | :non-potable_water: Is a lightweight  HTTP router that sticks to the std "net/http" implementation | 3 years ago |
| [alien](https://github.com/gernest/alien) | 127 | A lightweight and  fast http router from outer space | 8 months ago |
| [violetear](https://github.com/nbari/violetear) | 106 | Go HTTP router | 9 months ago |
| [Bxog](https://github.com/claygod/Bxog) | 104 | Bxog is a simple and fast HTTP router for Go (HTTP request multiplexer). | 10 months ago |
| [xmux](https://github.com/rs/xmux) | 95 | xmux is a httprouter fork on top of xhandler (net/context aware) | 6 years ago |
| [ngamux](https://github.com/ngamux/ngamux) | 59 | Simple HTTP router for Go | 3 months ago |
| [bellt](https://github.com/GuilhermeCaruso/bellt) | 54 | :bell: A simple Go router | a year ago |
| [fastrouter](https://github.com/razonyang/fastrouter) | 22 | FastRouter is a fast, flexible HTTP router written in Go. | 6 years ago |
| [route](https://github.com/goroute/route) | 8 | Go Route - Simple yet powerful HTTP request multiplexer | 4 years ago |


### [WebAssembly](#WebAssembly)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tinygo](https://github.com/tinygo-org/tinygo) | 13124 | Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM. | 2 days ago |
| [dom](https://github.com/dennwc/dom) | 477 | DOM library for Go and WASM | 4 years ago |
| [go-canvas](https://github.com/markfarnan/go-canvas) | 210 | Library to use HTML5 Canvas  from Go-WASM, with all drawing within go code | 3 years ago |
| [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) | 145 | Run WASM tests inside your browser | 3 months ago |
| [webapi](https://github.com/gowebapi/webapi) | 142 | Go Lang Web Assembly bindings for DOM, HTML etc | 7 months ago |
| [vert](https://github.com/norunners/vert) | 88 | WebAssembly interop between Go and JS values. | 7 months ago |


### [Windows](#Windows)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ole](https://github.com/go-ole/go-ole) | 992 | win32 ole implementation for golang | 4 months ago |
| [d3d9](https://github.com/gonutz/d3d9) | 144 | Direct3D9 wrapper for Go. | 3 months ago |
| [gosddl](https://github.com/MonaxGT/gosddl) | 10 | GoSDDL converter | 4 years ago |


### [XML](#XML)
* Libraries and tools for manipulating XML.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zek](https://github.com/miku/zek) | 675 | Generate a Go struct from XML. | 3 months ago |
| [xpath](https://github.com/antchfx/xpath) | 587 | XPath package for Golang, supports HTML, XML, JSON document query. | 2 months ago |
| [xquery](https://github.com/antchfx/xquery) | 156 | Extract data or evaluate value from HTML/XML documents using XPath | 5 years ago |
| [xml2map](https://github.com/sbabiv/xml2map) | 51 | XML to MAP converter written Golang | 2 years ago |
| [xmlwriter](https://github.com/shabbyrobe/xmlwriter) | 24 | xmlwriter is a pure-Go library providing procedural XML generation based on libxml2's xmlwriter module | 2 months ago |
| [XML-Comp](https://github.com/XML-Comp/XML-Comp) | 20 | Compare ANY markup documents. | 5 years ago |


## [Tools](#Tools)
* Go software and plugins.

### [Code Analysis](#Code-Analysis)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-tools](https://github.com/dominikh/go-tools) | 5452 | Staticcheck - The advanced Go linter | 2 days ago |
| [go-tools](https://github.com/dominikh/go-tools) | 5452 | Staticcheck - The advanced Go linter | 2 days ago |
| [lint](https://github.com/golang/lint) | 3974 | [mirror] This is a linter for Go source code. (deprecated) | 2 years ago |
| [errcheck](https://github.com/kisielk/errcheck) | 2095 | errcheck checks that you checked errors. | a month ago |
| [go-critic](https://github.com/go-critic/go-critic) | 1645 | The most opinionated Go source code linter for code audit. | 5 days ago |
| [goplantuml](https://github.com/jfeliu007/goplantuml) | 1453 | PlantUML Class Diagram Generator for golang projects | 2 months ago |
| [gcvis](https://github.com/davecheney/gcvis) | 1084 | Visualise Go program GC trace data in real time | 4 years ago |
| [php-parser](https://github.com/z7zmey/php-parser) | 927 | PHP parser written in Go | 2 years ago |
| [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) | 747 | Clean architecture validator for go, like a The Dependency Rule and interaction between packages in your Go projects. | 2 years ago |
| [goast-viewer](https://github.com/yuroyoro/goast-viewer) | 712 | Golang AST visualizer | a year ago |
| [golines](https://github.com/segmentio/golines) | 648 | A golang formatter that fixes long lines | a month ago |
| [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) | 638 | Find outdated dependencies of your Go projects. go-mod-outdated provides a table view of the go list -u -m -json all command which lists all dependencies of a Go project and their available minor and patch updates. It also provides a way to filter indirect dependencies and dependencies without updates. | 5 months ago |
| [goreturns](https://github.com/sqs/goreturns) | 519 | A gofmt/goimports-like tool for Go programmers that fills in Go return statements with zero values to match the func return types | 3 years ago |
| [todocheck](https://github.com/preslavmihaylov/todocheck) | 398 | A static code analyser for annotated TODO comments | 6 months ago |
| [unconvert](https://github.com/mdempsky/unconvert) | 358 | Remove unnecessary type conversions from Go source | 5 months ago |
| [dupl](https://github.com/mibk/dupl) | 314 | a tool for code clone detection | 3 years ago |
| [tickgit](https://github.com/augmentable-dev/tickgit) | 307 | Manage your repository's TODOs, tickets and checklists as config in your codebase. | 5 months ago |
| [gostatus](https://github.com/shurcooL/gostatus) | 244 | A command line tool that shows the status of Go repositories. | a day ago |
| [apicompat](https://github.com/bradleyfalzon/apicompat) | 178 | apicompat checks recent changes to a Go project for backwards incompatible changes | 6 years ago |
| [checkstyle](https://github.com/qiniu/checkstyle) | 128 | checkstyle for go | 2 years ago |
| [lint](https://github.com/surullabs/lint) | 67 | Run linters from Go code -  | 5 years ago |
| [validate](https://github.com/mccoyst/validate) | 60 | A Go package to automatically validate fields with tags | 9 months ago |
| [go-outdated](https://github.com/firstrow/go-outdated) | 45 | Find outdated golang packages | 4 years ago |
| [blanket](https://github.com/verygoodsoftwarenotvirus/blanket) | 17 | MOVED TO GITLAB | 5 years ago |
| [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) | 10 | Golang Ifood API SDK  | 10 months ago |


### [Editor Plugins](#Editor-Plugins)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vim-go](https://github.com/fatih/vim-go) | 15506 | Go development plugin for Vim | 18 days ago |
| [tools](https://github.com/golang/tools) | 6898 | [mirror] Go Tools | 5 hours ago |
| [gocode](https://github.com/nsf/gocode) | 5000 | An autocompletion daemon for the Go programming language | 4 months ago |
| [vscode-go](https://github.com/golang/vscode-go) | 3456 | Go extension for Visual Studio Code | 5 days ago |
| [GoSublime](https://github.com/DisposaBoy/GoSublime) | 3426 | A Golang plugin collection for SublimeText 3, providing code completion and other IDE-like features. | 3 years ago |
| [go-plus](https://github.com/joefitzgerald/go-plus) | 1508 | An Enhanced Go Experience For The Atom Editor | 2 years ago |
| [go-mode.el](https://github.com/dominikh/go-mode.el) | 1326 | Emacs mode for the Go programming language | 16 days ago |
| [coc-go](https://github.com/josa42/coc-go) | 540 | Go language server extension using gopls for coc.nvim. | 2 months ago |
| [goimports-reviser](https://github.com/incu6us/goimports-reviser) | 366 | Right imports sorting & code formatting tool (goimports alternative) | 2 months ago |
| [Watch](https://github.com/eaburns/Watch) | 200 | Watches for changes in a directory tree and reruns a command in an acme win or just on the terminal. | 4 months ago |
| [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) | 87 | Vim compiler plugin for Go (golang) | 7 years ago |
| [go-language-server](https://github.com/theia-ide/go-language-server) | 31 | A Go language server. | 4 years ago |
| [gounit-vim](https://github.com/hexdigest/gounit-vim) | 23 | Vim plugin for https://github.com/hexdigest/gounit | 5 years ago |
| [theia-go-extension](https://github.com/theia-ide/theia-go-extension) | 15 | Theia Go Extension | 4 years ago |
| [vscode-go-doc](https://github.com/msyrus/vscode-go-doc) | 6 | An Microsoft Visual Code extension for Golang to print symbol definition to output | 6 months ago |


### [Go Generate Tools](#Go-Generate-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gotests](https://github.com/cweill/gotests) | 4623 | Automatically generate Go test boilerplate from your source code. | a month ago |
| [genny](https://github.com/cheekybits/genny) | 1680 | Elegant generics for Go | 2 years ago |
| [xgen](https://github.com/xuri/xgen) | 253 | XSD (XML Schema Definition) parser and Go/C/Java/Rust/TypeScript code generator | 9 days ago |
| [re2dfa](https://github.com/opennota/re2dfa) | 193 | Transform regular expressions into finite state machines and output Go source code. This repository has migrated to https://gitlab.com/opennota/re2dfa | 5 years ago |
| [hasgo](https://github.com/DylanMeeus/hasgo) | 128 | Haskell-flavoured functions for Go :smiley: | 2 years ago |
| [gonerics](https://github.com/bouk/gonerics) | 114 | Generics for go | 9 years ago |
| [gocontracts](https://github.com/Parquery/gocontracts) | 98 | A tool for design-by-contract in Go | 4 years ago |
| [gounit](https://github.com/hexdigest/gounit) | 72 | Unit tests generator for Go programming language | 5 years ago |
| [generic](https://github.com/usk81/generic) | 47 | flexible data type for Go | 2 years ago |
| [godal](https://github.com/mafulong/godal) | 17 | godal provides the ability to generate specific golang code. The godal is to enable developers to write fast code in an expressive way. | 2 years ago |


### [Go Tools](#Go-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-swagger](https://github.com/go-swagger/go-swagger) | 8740 | Swagger 2.0 implementation for go | 10 days ago |
| [go-callvis](https://github.com/ofabry/go-callvis) | 5293 | Visualize call graph of a Go program using Graphviz | 2 months ago |
| [OctoLinker](https://github.com/OctoLinker/OctoLinker) | 5158 | OctoLinker — Links together, what belongs together | 13 hours ago |
| [depth](https://github.com/KyleBanks/depth) | 838 | Visualize Go Dependency Trees | a year ago |
| [richgo](https://github.com/kyoh86/richgo) | 797 | Enrich `go test` outputs with text decorations. | 2 days ago |
| [rts](https://github.com/galeone/rts) | 244 | RTS: request to struct. Generates Go structs from JSON server responses. | 8 months ago |
| [godbg](https://github.com/tylerwince/godbg) | 196 | Go implementation of the Rust `dbg` macro | 4 years ago |
| [typex](https://github.com/dtgorski/typex) | 179 | [TOOL, CLI] - Filter and examine Go type structures, interfaces and their transitive dependencies and relationships. Export structural types as TypeScript value object or bare type representations. | 6 months ago |
| [roumon](https://github.com/becheran/roumon) | 145 | Universal goroutine monitor using pprof and termui  | 5 months ago |
| [gothanks](https://github.com/psampaz/gothanks) | 118 | GoThanks automatically stars Go's official repository and your go.mod github dependencies, providing a simple way  to say thanks to the maintainers of the modules you use and the contributors of Go itself. | 5 months ago |
| [colorgo](https://github.com/songgao/colorgo) | 112 | Colorize (highlight) `go build` command output | 3 years ago |
| [go-james](https://github.com/pieterclaerhout/go-james) | 59 | James is your butler and helps you to create, build, debug, test and run your Go projects | 2 months ago |
| [igo](https://github.com/rocketlaunchr/igo) | 59 | Improved Go Syntax (transpiler) | 3 years ago |
| [go-pkg-complete](https://github.com/skelterjohn/go-pkg-complete) | 42 | bash completion for go and wgo | 6 years ago |
| [gomodrun](https://github.com/dustinblackman/gomodrun) | 26 | The forgotten go tool that executes and caches binaries included in go.mod files. | 6 months ago |
| [docs](https://github.com/go-oas/docs) | 23 | Automatically generate RESTful API documentation for GO projects - aligned with Open API Specification standard | 2 months ago |
| [modver](https://github.com/bobg/modver) | 8 |  | 9 days ago |


### [DevOps Tools](#DevOps-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kubernetes](https://github.com/kubernetes/kubernetes) | 99859 | Production-Grade Container Scheduling and Management | 3 minutes ago |
| [moby](https://github.com/moby/moby) | 66244 | Moby Project - a collaborative project for the container ecosystem to assemble container-based systems | 3 hours ago |
| [traefik](https://github.com/traefik/traefik) | 43759 | The Cloud Native Application Proxy | 14 hours ago |
| [gitea](https://github.com/go-gitea/gitea) | 37425 | Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD | 6 minutes ago |
| [vegeta](https://github.com/tsenart/vegeta) | 21422 | HTTP load testing tool and library. It's over 9000! | 7 hours ago |
| [hey](https://github.com/rakyll/hey) | 15929 | HTTP load generator, ApacheBench (ab) replacement | 15 days ago |
| [packer](https://github.com/hashicorp/packer) | 14496 | Packer is a tool for creating identical machine images for multiple platforms from a single source configuration. | an hour ago |
| [webhook](https://github.com/adnanh/webhook) | 9075 | webhook is a lightweight incoming webhook server to run shell commands | 5 days ago |
| [gvm](https://github.com/moovweb/gvm) | 8599 | Go Version Manager | 19 days ago |
| [ddosify](https://github.com/ddosify/ddosify) | 7469 | Comprehensive Performance Testing Platform. Available on CLI, Self-Hosted, and Cloud - https://ddosify.com 🚀 | 5 days ago |
| [gaia](https://github.com/gaia-pipeline/gaia) | 5083 | Build powerful pipelines in any programming language. | 4 months ago |
| [gox](https://github.com/mitchellh/gox) | 4542 | A dead simple, no frills Go cross compile tool | 2 months ago |
| [bombardier](https://github.com/codesenberg/bombardier) | 4416 | Fast cross-platform HTTP benchmarking tool written in Go | a month ago |
| [script](https://github.com/bitfield/script) | 4173 | Making it easy to write shell-like scripts in Go | a month ago |
| [pomerium](https://github.com/pomerium/pomerium) | 3597 | Pomerium is an identity and context-aware access proxy. | 2 hours ago |
| [bosun](https://github.com/bosun-monitor/bosun) | 3357 | Time Series Alerting Framework | 5 months ago |
| [kala](https://github.com/ajvb/kala) | 2006 | Modern Job Scheduler | a month ago |
| [fac](https://github.com/mkchoi212/fac) | 1807 | Easy-to-use CUI for fixing git conflicts | a year ago |
| [s5cmd](https://github.com/peak/s5cmd) | 1767 | Parallel S3 and local filesystem execution tool. | 14 hours ago |
| [goxc](https://github.com/laher/goxc) | 1682 | a build tool for Go, with a focus on cross-compiling, packaging and deployment | 4 years ago |
| [statusok](https://github.com/sanathp/statusok) | 1584 | Monitor your Website and APIs from your Computer. Get Notified through Slack, E-mail when your server is down or response time is more than expected.  | 2 years ago |
| [ghorg](https://github.com/gabrie30/ghorg) | 1302 | Quickly clone an entire org/users repositories into one directory - Supports GitHub, GitLab, Bitbucket, and more 🥚 | 9 days ago |
| [go-selfupdate](https://github.com/sanbornm/go-selfupdate) | 1225 | Enable your Go applications to self update | 10 hours ago |
| [s3gof3r](https://github.com/rlmcpherson/s3gof3r) | 1136 | Fast, concurrent, streaming access to Amazon S3, including gof3r, a CLI. http://godoc.org/github.com/rlmcpherson/s3gof3r | 2 years ago |
| [utask](https://github.com/ovh/utask) | 926 | µTask is an automation engine that models and executes business processes declared in yaml. ✏️📋 | 13 days ago |
| [skm](https://github.com/TimothyYe/skm) | 877 | A simple and powerful SSH keys manager | 2 months ago |
| [scaleway-cli](https://github.com/scaleway/scaleway-cli) | 826 | Command Line Interface for Scaleway | 11 hours ago |
| [cassowary](https://github.com/rogerwelin/cassowary) | 676 | :rocket: Modern cross-platform HTTP load-testing tool written in Go | 2 months ago |
| [kool](https://github.com/kool-dev/kool) | 628 | From local development to the cloud: development workflow made easy. | 25 days ago |
| [aurora](https://github.com/xuri/aurora) | 579 | Cross-platform beanstalkd queue server admin console. | 2 years ago |
| [govvv](https://github.com/ahmetb/govvv) | 534 | "go build" wrapper to add version info to Golang applications | 4 months ago |
| [pewpew](https://github.com/bengadbois/pewpew) | 381 | Flexible HTTP command line stress tester for websites and web services | a year ago |
| [jenkins-cli](https://github.com/jenkins-zh/jenkins-cli) | 362 | Jenkins CLI allows you to manage your Jenkins in an easy way. Jenkins 命令行客户端 | 4 months ago |
| [gonative](https://github.com/inconshreveable/gonative) | 334 | Build Go Toolchains /w native libs for cross-compilation | 7 years ago |
| [trubka](https://github.com/xitonix/trubka) | 330 | A CLI tool for Kafka | 4 months ago |
| [mora](https://github.com/emicklei/mora) | 311 | MongoDB generic REST server in Go | 8 months ago |
| [lstags](https://github.com/ivanilves/lstags) | 306 | Explore Docker registries and manipulate Docker images! | 2 months ago |
| [balerter](https://github.com/balerter/balerter) | 289 | Script Based Alerting Manager | 4 months ago |
| [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) | 285 | easyssh-proxy provides a simple implementation of some SSH protocol features in Go | 4 days ago |
| [manssh](https://github.com/xwjdsh/manssh) | 284 | Manage your ssh alias configs easily. | a year ago |
| [dogo](https://github.com/liudng/dogo) | 257 | Monitoring changes in the source file and automatically compile and run (restart). | 4 years ago |
| [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) | 250 | OpenAPI Terraform Provider that configures itself at runtime with the resources exposed by the service provider (defined in a swagger file) | 3 months ago |
| [godbg](https://github.com/sirnewton01/godbg) | 226 | Web-based gdb front-end application | 5 years ago |
| [blast](https://github.com/dave/blast) | 210 | Blast is a simple tool for API load testing and batch jobs | 5 years ago |
| [abbreviate](https://github.com/dnnrly/abbreviate) | 203 | Supporting your devops by shortening your strings using common abbreviations and clever guesswork | 5 months ago |
| [kcli](https://github.com/cswank/kcli) | 196 | A kafka command line browser | 4 years ago |
| [gobrew](https://github.com/cryptojuice/gobrew) | 193 | Shell script to download and set GO environmental paths to allow multiple versions. | 3 years ago |
| [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) | 193 | S3 Reverse Proxy with GET, PUT and DELETE methods and authentication (OpenID Connect and Basic Auth) | 5 days ago |
| [ostent](https://github.com/ostrost/ostent) | 177 | Ostent is a server tool to collect, display and report system metrics. | 7 months ago |
| [grapes](https://github.com/yaronsumel/grapes) | 162 | easy way to distribute commands over ssh. | 5 days ago |
| [winrm-cli](https://github.com/masterzen/winrm-cli) | 154 | Command-line tool to remotely execute commands on Windows machines through WinRM | 2 years ago |
| [dockerfile-generator](https://github.com/ozankasikci/dockerfile-generator) | 151 | dfg - Generates dockerfiles based on various input channels.  | a year ago |
| [drone-scp](https://github.com/appleboy/drone-scp) | 122 | Copy files and artifacts via SSH using a binary, docker or Drone CI. | a month ago |
| [go-furnace](https://github.com/go-furnace/go-furnace) | 97 | Go Hosting Solution for AWS, Google Cloud and Digital Ocean | 2 years ago |
| [dropship](https://github.com/ChrisMcKenzie/dropship) | 63 | Super simple deployment tool | 5 years ago |
| [drone-jenkins](https://github.com/appleboy/drone-jenkins) | 37 | Drone plugin for trigger Jenkins jobs. | a year ago |
| [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) | 36 | Docker image for building Go binaries with MinGW toolchain | 4 months ago |
| [rodent](https://github.com/alouche/rodent) | 34 | Manage Go Versions/Projects/Dependencies | 6 years ago |
| [awsenv](https://github.com/soniah/awsenv) | 33 | AWS environment config loader | 5 years ago |
| [httpref](https://github.com/dnnrly/httpref) | 30 | Command line, offline, access to HTTP status code, common header, and port references | 15 days ago |
| [lwc](https://github.com/timdp/lwc) | 29 | A live-updating version of the UNIX wc command. | a year ago |
| [depcharge](https://github.com/centerorbit/depcharge) | 23 | DepCharge is a tool designed to help orchestrate the execution of commands across many directories at once. | 2 years ago |
| [aptly-fork](https://github.com/smira/aptly-fork) | 9 | aptly - Debian repository management tool (fork of aptly-dev/aptly) | 4 years ago |
| [sg](https://github.com/ChristopherRabotin/sg) | 8 | Stress gauge allows one to gauge response times of an HTTP service under stress. | 7 years ago |


### [Other Software](#Other-Software)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [croc](https://github.com/schollz/croc) | 23112 | Easily and securely send things from one computer to another :crocodile: :package: | 3 days ago |
| [restic](https://github.com/restic/restic) | 20636 | Fast, secure, efficient backup program | 4 hours ago |
| [seaweedfs](https://github.com/seaweedfs/seaweedfs) | 17802 | SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding. | 10 hours ago |
| [goreplay](https://github.com/buger/goreplay) | 17556 | GoReplay is an open-source tool for capturing and replaying live HTTP traffic into a test environment in order to continuously test your system with real data. It can be used to increase confidence in code deployments, configuration changes and infrastructure changes. | 18 hours ago |
| [comcast](https://github.com/tylertreat/comcast) | 9986 | Simulating shitty network connections so you can build better systems. | 6 days ago |
| [toxiproxy](https://github.com/Shopify/toxiproxy) | 9214 | :alarm_clock: :fire: A TCP proxy to simulate network and system conditions for chaos and resiliency testing | 18 hours ago |
| [confd](https://github.com/kelseyhightower/confd) | 8120 | Manage local application configuration files using templates and data from etcd or consul | 5 months ago |
| [liteide](https://github.com/visualfc/liteide) | 7239 | LiteIDE is a simple, open source, cross-platform Go IDE.  | 2 days ago |
| [drive](https://github.com/odeke-em/drive) | 6544 | Google Drive client for the commandline | 6 months ago |
| [nes](https://github.com/fogleman/nes) | 5259 | NES emulator written in Go. | 6 months ago |
| [scc](https://github.com/boyter/scc) | 4865 | Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go | a day ago |
| [duplicacy](https://github.com/gilbertchen/duplicacy) | 4696 | A new generation cloud backup tool  | 5 days ago |
| [blocky](https://github.com/0xERR0R/blocky) | 2731 | Fast and lightweight DNS proxy as ad-blocker for local network with many features | a day ago |
| [mylg](https://github.com/mehrdadrad/mylg) | 2657 | Network Diagnostic Tool | 3 years ago |
| [goboy](https://github.com/Humpheh/goboy) | 2523 | Multi-platform Nintendo Game Boy Color emulator written in Go | 4 months ago |
| [sup](https://github.com/pressly/sup) | 2429 | Super simple deployment tool - think of it like 'make' for a network of servers | 4 months ago |
| [lgo](https://github.com/yunabe/lgo) | 2317 | Interactive Go programming with Jupyter | 3 years ago |
| [circuit](https://github.com/gocircuit/circuit) | 1968 | Circuit: Dynamic cloud orchestration http://gocircuit.org | 3 years ago |
| [community](https://github.com/documize/community) | 1889 | Modern Confluence alternative designed for internal & external docs, built with Go + EmberJS | a month ago |
| [snap](https://github.com/intelsdi-x/snap) | 1798 | The open telemetry framework | 8 months ago |
| [borg](https://github.com/ok-borg/borg) | 1580 | Search and save shell snippets without leaving your terminal | 5 years ago |
| [shell2http](https://github.com/msoap/shell2http) | 1130 | Executing shell commands via HTTP server | 3 months ago |
| [vflow](https://github.com/Edgio/vflow) | 997 |  Enterprise Network Flow Collector (IPFIX, sFlow, Netflow)  | 2 months ago |
| [peg](https://github.com/pointlander/peg) | 918 | Peg, Parsing Expression Grammar, is an implementation of a Packrat parser generator. | 4 months ago |
| [Go-Package-Store](https://github.com/shurcooL/Go-Package-Store) | 896 | An app that displays updates for the Go packages in your GOPATH. | 3 years ago |
| [leaps](https://github.com/Jeffail/leaps) | 736 | A pair programming service using operational transforms | 4 months ago |
| [gfile](https://github.com/Antonito/gfile) | 705 | Direct file transfer over WebRTC | 5 months ago |
| [guora](https://github.com/meloalright/guora) | 653 | 🖖🏻 A self-hosted Quora like web application written in Go  基于 Golang 类似知乎的私有部署问答应用 包含问答、评论、点赞、管理后台等功能 | 5 months ago |
| [gebug](https://github.com/moshebe/gebug) | 619 | Debug Dockerized Go applications better | 2 hours ago |
| [gocc](https://github.com/goccmack/gocc) | 576 | Parser / Scanner Generator | 4 months ago |
| [mockingjay-server](https://github.com/quii/mockingjay-server) | 542 | Fake server, Consumer Driven Contracts and help with testing performance from one configuration file with zero system dependencies and no coding whatsoever | a year ago |
| [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) | 455 | Go Peerflix | 4 months ago |
| [woke](https://github.com/get-woke/woke) | 383 | Detect non-inclusive language in your source code. | 4 months ago |
| [ipe](https://github.com/dimiro1/ipe) | 367 | An open source Pusher server implementation compatible with Pusher client libraries written in GO | 2 years ago |
| [IDE](https://github.com/thestrukture/IDE) | 352 | A Go code editor. With debugging and Autocomplete. 一个 Go 代码编辑器，具有 DEBUGGING 和 AUTOCOMPLETE | 8 months ago |
| [tcpprobe](https://github.com/mehrdadrad/tcpprobe) | 336 | Modern TCP tool and service for network performance observability. | 2 years ago |
| [wellington](https://github.com/wellington/wellington) | 303 | Spriting that sass has been missing | 5 months ago |
| [cherry](https://github.com/rafael-santiago/cherry) | 290 | A tiny webchat server in Go. | 6 years ago |
| [tcpdog](https://github.com/mehrdadrad/tcpdog) | 231 | eBPF based TCP observability. | 2 years ago |
| [joincap](https://github.com/assafmo/joincap) | 191 | Merge multiple pcap files together, gracefully. | 2 years ago |
| [orbit](https://github.com/gulien/orbit) | 177 | :satellite: A cross-platform task runner for executing commands and generating files from templates | 2 years ago |
| [vaku](https://github.com/lingrino/vaku) | 148 | Vaku extends the Vault API & CLI | 7 hours ago |
| [dp](https://github.com/scryinfo/dp) | 84 | Scry Data Protocol | 6 months ago |
| [boxed](https://github.com/tejo/boxed) | 78 | dropbox based blog engine, written in go. | 5 years ago |
| [term-quiz](https://github.com/crazcalm/term-quiz) | 24 | Terminal Quiz Application Written in Go | 5 years ago |
| [naclpipe](https://github.com/unix4fun/naclpipe) | 23 | NaCL pipe | 5 years ago |
| [snitch](https://github.com/lucasgomide/snitch) | 16 | Keep updated about all deploys on Tsuru | 5 years ago |
| [GoDocTooltip](https://github.com/diankong/GoDocTooltip) | 13 | A Chrome extension for golang users.When you're at golang's official doc site, it will show function's description as tooltip on function list | 7 months ago |
| [hoofli](https://github.com/dnnrly/hoofli) | 6 | Generate PlantUML diagrams from Chrome or Firefox network inspections | 7 months ago |


## [Resources](#resources)
* Where to discover new Go libraries.

### [Benchmarks](#Benchmarks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) | 1890 | :zap: Go web framework benchmark | 2 months ago |
| [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) | 1612 | Go HTTP request router and web framework benchmark | 9 months ago |
| [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) | 1460 | Benchmarks of Go serialization methods | 2 months ago |
| [skynet](https://github.com/atemerev/skynet) | 1025 | Skynet 1M threads microbenchmark | a year ago |
| [speedtest-resize](https://github.com/fawick/speedtest-resize) | 235 | Compare various Image resize algorithms for the Go language | 3 years ago |
| [go-benchmarks](https://github.com/tylertreat/go-benchmarks) | 147 | A few miscellaneous Go microbenchmarks. | 7 years ago |
| [gospeed](https://github.com/feyeleanor/gospeed) | 111 | Go micro-benchmarks for calculating the speed of language constructs | a year ago |
| [autobench](https://github.com/davecheney/autobench) | 96 | Go benchmark harness.  | 9 years ago |
| [golang-sql-benchmark](https://github.com/tyler-smith/golang-sql-benchmark) | 65 | A benchmarking shootout of various db/SQL utilities for Go | a year ago |
| [gocostmodel](https://github.com/mna/gocostmodel) | 60 | Benchmarks of common basic operations for the Go language. | 2 years ago |
| [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) | 28 | ⏱ Benchmarks of machine learning inference for Go | 5 days ago |
| [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) | 26 | Application for HTTP benchmarking via different rules and configs | 6 years ago |
| [kvbench](https://github.com/jimrobinson/kvbench) | 25 | Key/Value database benchmark | 4 years ago |
| [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) | 8 | Benchmark of Golang JSON Libraries | 3 years ago |


### [E-Books](#E-Books)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [GoBooks](https://github.com/dariubs/GoBooks) | 14418 | List of Golang books | 11 days ago |
| [The-Golang-Standard-Library-by-Example](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example) | 9259 | Golang标准库。对于程序员而言，标准库与语言本身同样重要，它好比一个百宝箱，能为各种常见的任务提供完美的解决方案。以示例驱动的方式讲解Golang的标准库。 | 3 months ago |
| [web-dev-golang-anti-textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook) | 3115 | Learn how to write webapps without a framework in Go. | 2 years ago |
| [gosuccinctly](https://github.com/thedevsir/gosuccinctly) | 23 |  This is the companion repo for Go Succinctly by Amir Irani. | 5 years ago |


### [Gophers](#Gophers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gophers](https://github.com/egonelbre/gophers) | 3181 | Free gophers | a year ago |
| [free-gophers-pack](https://github.com/MariaLetta/free-gophers-pack) | 3005 | ✨ This pack of 100+ gopher pictures and elements will help you to build own design of almost anything related to Go Programming Language: presentations, posts in blogs or social media, courses, videos and many, many more. | 7 months ago |
| [gophers](https://github.com/ashleymcnamara/gophers) | 2829 | Gopher Artwork by Ashley McNamara | 4 years ago |
| [gopherize.me](https://github.com/matryer/gopherize.me) | 648 | Gopherize.me app | 2 years ago |
| [gophericons](https://github.com/shalakhin/gophericons) | 610 | 34 gopher images for Go developers community | 5 years ago |
| [gopher-stickers](https://github.com/tenntenn/gopher-stickers) | 560 | gopher stickers | 4 years ago |
| [go-gopher](https://github.com/sillecelik/go-gopher) | 119 | The Go Gopher Amigurumi Pattern | 2 months ago |
| [gopher-logos](https://github.com/GolangUA/gopher-logos) | 114 | adorable gopher logos | 2 years ago |
| [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) | 64 | Go gopher Vector Data [.ai, .svg] | 5 years ago |
| [gophers](https://github.com/rogeralsing/gophers) | 58 | random gopher graphics | 3 years ago |
| [gophers](https://github.com/scraly/gophers) | 24 | Gopher artwork (Golang mascot) | 4 months ago |


### [Style Guides](#Style-Guides)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cockroach](https://github.com/cockroachdb/cockroach) | 27404 | CockroachDB - the open source, cloud-native distributed SQL database. | 17 minutes ago |
| [fabric](https://github.com/hyperledger/fabric) | 14674 | Hyperledger Fabric is an enterprise-grade permissioned distributed ledger framework for developing solutions and applications. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy. | 2 days ago |
| [guide](https://github.com/uber-go/guide) | 14007 | The Uber Go Style Guide. | a month ago |
| [magnetico](https://github.com/boramalper/magnetico) | 2948 | Autonomous (self-hosted) BitTorrent DHT search engine suite. | a year ago |
| [go-styleguide](https://github.com/bahlo/go-styleguide) | 1447 | 🏆 Opinionated Styleguide for the Go language | 6 months ago |


### [Websites](#Websites)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/golang/go) | 112677 | The Go programming language | an hour ago |
| [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) | 30375 | A curated list of awesome awesomeness | 8 days ago |
| [awesome-remote-job](https://github.com/lukasz-madon/awesome-remote-job) | 25921 | A curated list of awesome remote jobs and resources. Inspired by https://github.com/vinta/awesome-python | 12 days ago |
| [awesome-golang-workshops](https://github.com/amit-davidson/awesome-golang-workshops) | 486 | A curated list of awesome golang workshops. | 2 years ago |
| [golang-graphics](https://github.com/mholt/golang-graphics) | 139 | Community-contributed Go graphics files | 8 years ago |
| [gocryforhelp](https://github.com/ninedraft/gocryforhelp) | 41 | List of opensource projects looking for help | 6 years ago |
| [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) | 21 | Parse awesome-go README file and generate a new README file with repo info. | 10 months ago |


### [Tutorials](#Tutorials)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [build-web-application-with-golang](https://github.com/astaxie/build-web-application-with-golang) | 42142 | A golang ebook intro how to build a web with golang | 3 months ago |
| [go-patterns](https://github.com/tmrts/go-patterns) | 22461 | Curated list of Go design patterns, recipes and idioms | 2 months ago |
| [learn-go-with-tests](https://github.com/quii/learn-go-with-tests) | 19814 | Learn Go with test-driven development | 2 days ago |
| [learngo](https://github.com/inancgumus/learngo) | 17473 | ❤️ 1000+ Hand-Crafted Go Examples, Exercises, and Quizzes. 🚀 Learn Go by fixing 1000+ tiny programs. | a month ago |
| [golang-cheat-sheet](https://github.com/a8m/golang-cheat-sheet) | 7639 | An overview of Go syntax and features. | 7 months ago |
| [go-clean-template](https://github.com/evrone/go-clean-template) | 5259 | Clean Architecture template for Golang services | a month ago |
| [golang-for-nodejs-developers](https://github.com/miguelmota/golang-for-nodejs-developers) | 3945 | Examples of Golang compared to Node.js for learning 🤓 | 5 months ago |
| [ethereum-development-with-go-book](https://github.com/miguelmota/ethereum-development-with-go-book) | 1603 | 📖 A little guide book on Ethereum Development with Go (golang) | 8 months ago |
| [working-with-go](https://github.com/mkaz/working-with-go) | 1159 | A set of example golang code to start learning Go | 3 years ago |
| [goapp](https://github.com/bnkamalesh/goapp) | 632 | An opinionated guideline to structure & develop a Go web application/service | 5 months ago |
| [design-patterns](https://github.com/shubhamzanwar/design-patterns) | 103 | common creational, behavioural and structural patterns implemented in go 🤩 | 4 months ago |
| [go-patterns](https://github.com/janosdebugs/go-patterns) | 10 |  | 2 years ago |


