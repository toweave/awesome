# Go
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of awesome Go frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Thu Feb 17 2022 14:22:37 GMT+0800 (中国标准时间)
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
| [oto](https://github.com/hajimehoshi/oto) | 959 | ♪ A low-level library to play sound on multiple platforms ♪ | 6 days ago |
| [portaudio](https://github.com/gordonklaus/portaudio) | 493 | Go bindings for the PortAudio audio I/O library | a year ago |
| [music-theory](https://github.com/go-music-theory/music-theory) | 381 | Go models of Note, Scale, Chord and Key | 2 years ago |
| [waveform](https://github.com/mdlayher/waveform) | 345 | Go package capable of generating waveform images from audio streams. MIT Licensed. | 2 years ago |
| [portmidi](https://github.com/rakyll/portmidi) | 265 | Go bindings for libportmidi | a year ago |
| [id3v2](https://github.com/bogem/id3v2) | 233 | 🎵 ID3 decoding and encoding library for Go | 16 days ago |
| [GoAudio](https://github.com/DylanMeeus/GoAudio) | 209 | Go tools for audio processing & creation 🎶 | 11 days ago |
| [flac](https://github.com/mewkiz/flac) | 199 | Package flac provides access to FLAC (Free Lossless Audio Codec) streams. | 2 months ago |
| [malgo](https://github.com/gen2brain/malgo) | 164 | Mini audio library | 5 months ago |
| [mix](https://github.com/go-mix/mix) | 147 | Sequence-based Go-native audio mixer for music apps | 2 years ago |
| [gaad](https://github.com/Comcast/gaad) | 93 | GAAD (Go Advanced Audio Decoder) | 5 months ago |
| [minimp3](https://github.com/tosone/minimp3) | 74 | Decode mp3 base on https://github.com/lieff/minimp3 | a year ago |
| [vorbis](https://github.com/mccoyst/vorbis) | 30 | A "native" ogg vorbis decoder for Go (uses inline stb_vorbis) | 3 years ago |
| [gosamplerate](https://github.com/dh1tw/gosamplerate) | 16 | Go Bindings for libsamplerate | 2 years ago |


### [Authentication and OAuth](#authentication-and-oauth)
* Libraries for implementing authentications schemes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [casbin](https://github.com/casbin/casbin) | 11274 | An authorization library that supports access control models like ACL, RBAC, ABAC in Golang | 19 days ago |
| [oauth2](https://github.com/golang/oauth2) | 3997 | Go OAuth2 | 8 hours ago |
| [goth](https://github.com/markbates/goth) | 3512 | Package goth provides a simple, clean, and idiomatic way to write authentication packages for Go web applications. | 9 days ago |
| [authboss](https://github.com/volatiletech/authboss) | 2993 | The boss of http auth. | 6 months ago |
| [go-jose](https://github.com/square/go-jose) | 1886 | An implementation of JOSE standards (JWE, JWS, JWT) in Go | 4 months ago |
| [go-oauth2-server](https://github.com/RichardKnop/go-oauth2-server) | 1868 | A standalone, specification-compliant,  OAuth2 server written in Golang. | a year ago |
| [loginsrv](https://github.com/tarent/loginsrv) | 1845 | JWT login microservice with plugable backends such as OAuth2, Google, Github, htpasswd, osiam, .. | a year ago |
| [osin](https://github.com/openshift/osin) | 1716 | Golang OAuth2 server library | 9 days ago |
| [gologin](https://github.com/dghubble/gologin) | 1486 | Go login handlers for authentication providers (OAuth1, OAuth2) | 13 hours ago |
| [gorbac](https://github.com/mikespook/gorbac) | 1247 | goRBAC provides a lightweight role-based access control (RBAC) implementation in Golang. | 9 months ago |
| [scs](https://github.com/alexedwards/scs) | 1041 | HTTP Session Management for Go | a day ago |
| [paseto](https://github.com/o1egl/paseto) | 578 | Platform-Agnostic Security Tokens implementation in GO (Golang) | 4 months ago |
| [permissions2](https://github.com/xyproto/permissions2) | 444 |   :closed_lock_with_key: Middleware for keeping track of users, login states and permissions | a month ago |
| [go-guardian](https://github.com/shaj13/go-guardian) | 343 | Go-Guardian is a golang library that provides a simple, clean, and idiomatic way to create powerful modern API and web authentication. | a month ago |
| [jwt](https://github.com/cristalhq/jwt) | 320 | Safe, simple and fast JSON Web Tokens for Go | 7 days ago |
| [jwt](https://github.com/pascaldekloe/jwt) | 279 | JSON Web Token library | 4 months ago |
| [jeff](https://github.com/abraithwaite/jeff) | 235 | 🍍Jeff provides the simplest way to manage web sessions in Go. | 8 months ago |
| [httpauth](https://github.com/goji/httpauth) | 213 | HTTP Authentication middlewares | 5 months ago |
| [jwt-auth](https://github.com/adam-hanna/jwt-auth) | 212 | This package provides json web token (jwt) middleware for goLang http servers | 7 months ago |
| [branca](https://github.com/hako/branca) | 168 | :key: Secure alternative to JWT. Authenticated Encrypted API Tokens for Go. | 2 years ago |
| [otpgen](https://github.com/RijulGulati/otpgen) | 115 | Library to generate TOTP/HOTP codes | 6 months ago |
| [sessionup](https://github.com/swithek/sessionup) | 114 | Straightforward HTTP session management | 6 months ago |
| [session](https://github.com/icza/session) | 107 | Go session management for web servers (including support for Google App Engine - GAE). | 7 months ago |
| [jwt](https://github.com/robbert229/jwt) | 97 | This is an implementation of JWT in golang! | a year ago |
| [sjwt](https://github.com/brianvoe/sjwt) | 97 | Simple JWT Golang | 2 years ago |
| [rbac](https://github.com/zpatrick/rbac) | 90 | Minimalistic RBAC package for Go applications | 3 years ago |
| [sessions](https://github.com/adam-hanna/sessions) | 62 | A dead simple, highly performant, highly customizable sessions middleware for go http servers. | 2 years ago |
| [securecookie](https://github.com/chmike/securecookie) | 55 | Fast, secure and efficient secure cookie encoder/decoder  | 5 months ago |
| [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) | 38 | Golang library for providing a canonical representation of email address. | 5 months ago |
| [otpgo](https://github.com/jltorresm/otpgo) | 27 | Time-Based One-Time Password (TOTP) and HMAC-Based One-Time Password (HOTP) library for Go. | a year ago |
| [scope](https://github.com/ThundR67/scope) | 19 | Easily Manage OAuth2 Scopes In Go | 9 months ago |
| [cookiestxt](https://github.com/mengzhuo/cookiestxt) | 10 | cookiestxt implement parser of cookies txt format | a year ago |
| [sessiongate-go](https://github.com/f0rmiga/sessiongate-go) | 10 | A driver for the SessionGate Redis module - easy session management using the Go language. | 3 years ago |


### [Blockchain](#blockchain)
* Tools for building blockchains.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ethereum](https://github.com/ethereum/go-ethereum) | 35559 | Official Go implementation of the Ethereum protocol | an hour ago |
| [tendermint](https://github.com/tendermint/tendermint) | 4652 | ⟁ Tendermint Core (BFT Consensus) in Go | 7 hours ago |
| [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) | 3413 | :chains: A Framework for Building High Value Public Blockchains :sparkles: | 28 minutes ago |
| [gossamer](https://github.com/ChainSafe/gossamer) | 304 | 🕸️ Gossamer: A Go implementation of the Polkadot Host | 13 minutes ago |


### [Bot Building](#bot-building)
* Libraries for building and working with bots.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) | 3382 | Golang bindings for the Telegram Bot API | a month ago |
| [olivia](https://github.com/olivia-ai/olivia) | 3189 | 💁‍♀️Your new best friend powered by an artificial neural network | a month ago |
| [telebot](https://github.com/tucnak/telebot) | 2384 | Telebot is a Telegram bot framework in Go. | 4 days ago |
| [kelp](https://github.com/stellar/kelp) | 851 | Kelp is a free and open-source trading bot for the Stellar DEX and 100+ centralized exchanges | 6 days ago |
| [bot](https://github.com/go-chat-bot/bot) | 719 | IRC, Slack, Telegram and RocketChat bot written in go | 21 days ago |
| [golang-crypto-trading-bot](https://github.com/saniales/golang-crypto-trading-bot) | 709 | A golang implementation of a console-based trading bot for cryptocurrency exchanges | 14 days ago |
| [slacker](https://github.com/shomali11/slacker) | 578 | Slack Bot Framework | 18 days ago |
| [tbot](https://github.com/yanzay/tbot) | 325 | Go library for Telegram Bot API | a year ago |
| [go-twitch-irc](https://github.com/gempir/go-twitch-irc) | 219 | go irc client for twitch.tv | 18 days ago |
| [go-sarah](https://github.com/oklahomer/go-sarah) | 217 | Simple yet customizable bot framework written in Go. | a month ago |
| [tenyks](https://github.com/kyleterry/tenyks) | 172 | The Tenyks IRC bot. | 2 years ago |
| [hanu](https://github.com/sbstjn/hanu) | 136 | Golang Framework for writing Slack bots | 8 months ago |
| [go-tgbot](https://github.com/olebedev/go-tgbot) | 112 | Golang  telegram bot API wrapper, session-based router and middleware | 4 years ago |
| [slack-bot](https://github.com/innogames/slack-bot) | 80 | Ready to use Slack bot for lazy developers: start Jenkins jobs, watch Jira tickets, watch pull requests... | 2 days ago |
| [echotron](https://github.com/NicoNex/echotron) | 69 | An elegant and concurrent library for Telegram bots in Go. | 7 hours ago |
| [margelet](https://github.com/zhulik/margelet) | 67 | Telegram Bot Framework for Go | 5 years ago |
| [ephemeral-roles](https://github.com/ewohltman/ephemeral-roles) | 55 | A Discord bot for managing ephemeral roles based upon voice channel member presence. | 17 days ago |
| [slackscot](https://github.com/alexandre-normand/slackscot) | 49 | Slack bot core/framework written in Go with support for reactions to message updates/deletes | 3 months ago |
| [govkbot](https://github.com/nikepan/govkbot) | 38 | VK bot package for Go | 6 months ago |
| [micha](https://github.com/onrik/micha) | 18 | Client lib for Telegram bot api | 9 months ago |
| [teleterm](https://github.com/alfiankan/teleterm) | 5 | Telegram Bot Exec Terminal Command | 4 months ago |


### [Build Automation](#build-automation)
* Libraries and tools helping with build automation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [task](https://github.com/go-task/task) | 4652 | A task runner / simpler Make alternative written in Go | 3 days ago |
| [realize](https://github.com/oxequa/realize) | 4207 | Realize is the #1 Golang Task Runner which enhance your workflow by automating the most common tasks and using the best performing Golang live reloading. | 9 months ago |
| [mmake](https://github.com/tj/mmake) | 1600 | Modern Make  | 2 years ago |
| [goyek](https://github.com/goyek/goyek) | 281 | Create build pipelines in Go  | 3 days ago |
| [taskctl](https://github.com/taskctl/taskctl) | 156 | Concurrent task runner, developer's routine tasks automation toolkit. Simple modern alternative to GNU Make 🧰 | 9 months ago |
| [1build](https://github.com/gopinath-langote/1build) | 138 | Frictionless way of managing project-specific commands | 16 days ago |
| [gaper](https://github.com/maxcnunes/gaper) | 51 | Builds and restarts a Go project when it crashes or some watched file changes | 2 months ago |
| [anko](https://github.com/GuilhermeCaruso/anko) | 22 | :crystal_ball: Simple application watcher | a year ago |


### [Standard CLI](#Standard-CLI)
* Libraries for building standard or basic Command Line applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cobra](https://github.com/spf13/cobra) | 25263 | A Commander for modern Go CLI interactions | 8 hours ago |
| [cli](https://github.com/urfave/cli) | 17339 | A simple, fast, and fun package for building command line apps in Go | 4 hours ago |
| [elvish](https://github.com/elves/elvish) | 4642 | Elvish = Expressive Programming Language + Versatile Interactive Shell | 4 days ago |
| [andOTP](https://github.com/andOTP/andOTP) | 3428 | Open source two-factor authentication for Android | 3 days ago |
| [kingpin](https://github.com/alecthomas/kingpin) | 3194 | CONTRIBUTIONS ONLY: A Go (golang) command line and flag parser | 4 months ago |
| [dnote](https://github.com/dnote/dnote) | 2216 | A simple command line notebook for programmers | 4 days ago |
| [go-flags](https://github.com/jessevdk/go-flags) | 2154 | go command line option parser | 2 months ago |
| [pflag](https://github.com/spf13/pflag) | 1701 | Drop-in replacement for Go's flag package, implementing POSIX/GNU-style --flags. | 25 days ago |
| [cli](https://github.com/mitchellh/cli) | 1472 | A Go library for implementing command-line interfaces. | 15 days ago |
| [go-arg](https://github.com/alexflint/go-arg) | 1356 | Struct-based argument parsing in Go | 8 hours ago |
| [ops](https://github.com/nanovms/ops) | 895 | ops - build and run nanos unikernels | 8 hours ago |
| [liner](https://github.com/peterh/liner) | 877 | Pure Go line editor with history, inspired by linenoise | 7 days ago |
| [complete](https://github.com/posener/complete) | 815 | bash completion written in go + bash completion for go command | a month ago |
| [mow.cli](https://github.com/jawher/mow.cli) | 780 | A versatile library for building CLI applications in Go | 4 months ago |
| [flaggy](https://github.com/integrii/flaggy) | 778 | Idiomatic Go input parsing with subcommands, positional values, and flags at any position. No required project or package layout and no external dependencies. | 6 months ago |
| [cli](https://github.com/mkideal/cli) | 642 | CLI - A package for building command line app with go | 5 months ago |
| [argparse](https://github.com/akamensky/argparse) | 400 | Argparse for golang. Just because `flag` sucks | 6 months ago |
| [climax](https://github.com/tucnak/climax) | 194 | Climax is an alternative CLI with the human face | a year ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 163 | hiboot is a high performance web and cli application framework with dependency injection support | a month ago |
| [wmenu](https://github.com/dixonwille/wmenu) | 150 | An easy to use menu structure for cli applications that prompts users to make choices. | 6 months ago |
| [commandeer](https://github.com/jaffee/commandeer) | 147 | Automatically sets up command line flags based on struct fields and tags. | 8 months ago |
| [sflags](https://github.com/octago/sflags) | 131 | Generate flags by parsing structures | 7 months ago |
| [flag](https://github.com/cosiner/flag) | 117 | Flag is a simple but powerful command line option parsing library for Go support infinite level subcommand | a year ago |
| [job](https://github.com/liujianping/job) | 112 | JOB, make your short-term command as a long-term job. 将命令行规划成任务的工具 | 2 years ago |
| [clif](https://github.com/ukautz/clif) | 111 | Another CLI framework for Go. It works on my machine. | 3 years ago |
| [cli](https://github.com/teris-io/cli) | 102 | Simple and complete API for building command line applications in Go | 9 months ago |
| [cmdr](https://github.com/hedzr/cmdr) | 94 | POSIX-compliant command-line UI (CLI) parser and Hierarchical-configuration operations | 21 hours ago |
| [env](https://github.com/codingconcepts/env) | 89 | Tag-based environment configuration for structs | a year ago |
| [clir](https://github.com/leaanthony/clir) | 84 | A Simple and Clear CLI library. Dependency free. | 4 months ago |
| [gocmd](https://github.com/devfacet/gocmd) | 56 | A Go library for building command line applications. | 9 months ago |
| [wlog](https://github.com/dixonwille/wlog) | 55 | A simple logging interface that supports cross-platform color and concurrency. | 6 months ago |
| [strumt](https://github.com/antham/strumt) | 44 | Strumt is a library to create prompt chain | 10 months ago |
| [go-getoptions](https://github.com/DavidGamba/go-getoptions) | 41 | Fully featured Go (golang) command line option parser with built-in auto-completion support. | 16 days ago |
| [flagvar](https://github.com/sgreben/flagvar) | 37 | A collection of CLI argument types for the Go `flag` package. | 2 years ago |
| [cmd](https://github.com/posener/cmd) | 33 | The standard library flag package with its missing features | a year ago |
| [argv](https://github.com/cosiner/argv) | 32 |  | 2 years ago |
| [go-commander](https://github.com/yitsushi/go-commander) | 25 | Go library to simplify CLI workflow | 2 years ago |
| [go-command-chain](https://github.com/rainu/go-command-chain) | 21 | A go library for easy configure and run command chains. Such like pipelining in unix shells. | 8 months ago |
| [sand](https://github.com/Zaba505/sand) | 15 | Package for creating interpreters | 3 years ago |
| [go-andotp](https://github.com/RijulGulati/go-andotp) | 14 | CLI program to encrypt/decrypt andOTP files | 8 months ago |
| [ts](https://github.com/liujianping/ts) | 13 | timestamp convert & compare tool. 时间戳转换与对比工具 | 3 years ago |
| [subcmd](https://github.com/bobg/subcmd) | 1 |  | 5 months ago |


### [Advanced Console UIs](#Advanced-Console-UIs)
* Libraries for building Console Applications and Console User Interfaces.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blessed-contrib](https://github.com/yaronn/blessed-contrib) | 14643 | Build terminal dashboards using ascii/ansi art and javascript | 6 days ago |
| [termui](https://github.com/gizak/termui) | 11579 | Golang terminal dashboard | 3 months ago |
| [gocui](https://github.com/jroimartin/gocui) | 7936 | Minimalist Go package aimed at creating Console User Interfaces. | 3 months ago |
| [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) | 7553 | Library for building powerful interactive command line applications in Python | 6 days ago |
| [go-prompt](https://github.com/c-bata/go-prompt) | 4328 | Building powerful interactive prompts in Go, inspired by python-prompt-toolkit. | 4 months ago |
| [termbox-go](https://github.com/nsf/termbox-go) | 4237 | Pure Go termbox implementation | 9 days ago |
| [pterm](https://github.com/pterm/pterm) | 2406 | ✨ #PTerm is a modern Go module to beautify console output. Featuring charts, progressbars, tables, trees, and much more 🚀 It's completely configurable and 100% cross-platform compatible. | 5 hours ago |
| [progressbar](https://github.com/schollz/progressbar) | 2301 | A really basic thread-safe progress bar for Golang applications | 14 days ago |
| [termdash](https://github.com/mum4k/termdash) | 1897 | Terminal based dashboard. | a month ago |
| [uiprogress](https://github.com/gosuri/uiprogress) | 1891 | A go library to render progress bars in terminal applications | 6 months ago |
| [asciigraph](https://github.com/guptarohit/asciigraph) | 1851 | Go package to make lightweight ASCII line graph ╭┈╯ in command line apps with no other dependencies. | 8 hours ago |
| [mpb](https://github.com/vbauerster/mpb) | 1554 | multi progress bar for Go cli applications | 21 hours ago |
| [uilive](https://github.com/gosuri/uilive) | 1421 | uilive is a go library for updating terminal output in realtime | a month ago |
| [aurora](https://github.com/logrusorgru/aurora) | 1165 | Golang ultimate ANSI-colors that supports Printf/Sprintf methods | a year ago |
| [color](https://github.com/gookit/color) | 1033 | 🎨 Terminal color rendering library, support 8/16 colors, 256 colors, RGB color rendering output, support Print/Sprintf methods, compatible with Windows. GO CLI 控制台颜色渲染工具库，支持16色，256色，RGB色彩渲染输出，使用类似于 Print/Sprintf，兼容并支持 Windows 环境的色彩渲染 | 3 months ago |
| [termenv](https://github.com/muesli/termenv) | 949 | Advanced ANSI style & color support for your terminal applications | 5 days ago |
| [uitable](https://github.com/gosuri/uitable) | 630 | A go library to improve readability in terminal apps using tabular data | a year ago |
| [go-isatty](https://github.com/mattn/go-isatty) | 591 |  | 3 months ago |
| [go-colorable](https://github.com/mattn/go-colorable) | 587 |  | 3 months ago |
| [gommon](https://github.com/labstack/gommon) | 429 | Common packages for Go | 3 months ago |
| [chalk](https://github.com/ttacon/chalk) | 390 | Intuitive package for prettifying terminal/console output. http://godoc.org/github.com/ttacon/chalk | 2 years ago |
| [simpletable](https://github.com/alexeyco/simpletable) | 345 | Simple tables in terminal with Go | 10 months ago |
| [yacspin](https://github.com/theckman/yacspin) | 310 | Yet Another CLi Spinner; providing over 80 easy to use and customizable terminal spinners for multiple OSes | a month ago |
| [tabby](https://github.com/cheynewallace/tabby) | 309 | A tiny library for super simple Golang tables | a year ago |
| [go-colortext](https://github.com/daviddengcn/go-colortext) | 209 | Change the color of console text. | 2 years ago |
| [box-cli-maker](https://github.com/Delta456/box-cli-maker) | 188 | Make Highly Customized Boxes for your CLI | 3 days ago |
| [cfmt](https://github.com/mingrammer/cfmt) | 81 | :art: Contextual fmt inspired by bootstrap color classes | 3 years ago |
| [tabular](https://github.com/InVisionApp/tabular) | 59 | Tabular simplifies printing ASCII tables from command line utilities | 4 years ago |
| [ctc](https://github.com/wzshiming/ctc) | 37 | Console Text Colors - The non-invasive cross-platform terminal color library does not need to modify the Print method | 2 years ago |
| [cfmt](https://github.com/i582/cfmt) | 35 | Small library for simple and convenient formatted stylized output to the console. | 8 months ago |
| [colourize](https://github.com/TreyBastian/colourize) | 25 | An ANSI colour terminal package for Go | 6 years ago |
| [marker](https://github.com/cyucelen/marker) | 25 |  🖍️ Marker is the easiest way to match and mark strings for colorful terminal outputs! | a month ago |
| [table](https://github.com/tomlazar/table) | 15 | pretty colorfull tables in go with less effort | 6 days ago |
| [go-ataman](https://github.com/workanator/go-ataman) | 11 | Another Text Attribute Manupulator | a year ago |


### [Configuration](#Configuration)
* Libraries for configuration parsing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [viper](https://github.com/spf13/viper) | 18271 | Go configuration with fangs | 5 days ago |
| [godotenv](https://github.com/joho/godotenv) | 4592 | A Go port of Ruby's dotenv library (Loads environment variables from `.env`.) | a month ago |
| [envconfig](https://github.com/kelseyhightower/envconfig) | 3987 | Golang library for managing configuration data from environment variables | 2 months ago |
| [ini](https://github.com/go-ini/ini) | 2857 | Package ini provides INI file read and write functionality in Go | 7 days ago |
| [env](https://github.com/caarlos0/env) | 2276 | A simple and zero-dependencies library to parse environment variables into structs. | a month ago |
| [koanf](https://github.com/knadh/koanf) | 849 | Simple, lightweight, extensible, configuration management library for Go. Support for JSON, TOML, YAML, env, command line, file, S3 etc. Alternative to viper. | 4 days ago |
| [konfig](https://github.com/lalamove/konfig) | 620 | Composable, observable and performant config handling for Go for the distributed processing era | a year ago |
| [cleanenv](https://github.com/ilyakaznacheev/cleanenv) | 476 | ✨Clean and minimalistic environment configuration reader for Golang | a month ago |
| [confita](https://github.com/heetch/confita) | 423 | Load configuration in cascade from multiple backends into a struct | 7 months ago |
| [aconfig](https://github.com/cristalhq/aconfig) | 340 | Simple, useful and opinionated config loader. | a month ago |
| [config](https://github.com/gookit/config) | 330 | 📝 Go config manage(load,get,set). support JSON, YAML, TOML, INI, HCL, ENV and Flags. Multi file load, data override merge, parse ENV var. Go应用配置加载管理，支持多种格式，多文件加载，远程文件加载，支持数据合并，解析环境变量名 | 3 months ago |
| [config](https://github.com/JeremyLoy/config) | 292 | 12 factor configuration as a typesafe struct in as little as two function calls | 3 months ago |
| [store](https://github.com/tucnak/store) | 259 | A dead simple configuration manager for Go applications | 4 years ago |
| [hjson-go](https://github.com/hjson/hjson-go) | 257 | Hjson for Go | a month ago |
| [config](https://github.com/golobby/config) | 245 | A lightweight yet powerful configuration manager for Go projects | 13 days ago |
| [config](https://github.com/olebedev/config) | 244 | JSON or YAML configuration wrapper with convenient access methods. | 2 months ago |
| [envconfig](https://github.com/vrischmann/envconfig) | 220 | Small library to read your configuration from environment variables | 4 months ago |
| [config](https://github.com/joshbetz/config) | 209 | 🛠 A configuration library for Go that parses environment variables, JSON files, and reloads automatically on SIGHUP. | 3 months ago |
| [fig](https://github.com/kkyr/fig) | 190 | A minimalist Go configuration library | a month ago |
| [xdg](https://github.com/adrg/xdg) | 180 | Go implementation of the XDG Base Directory Specification and XDG user directories | a month ago |
| [gcfg](https://github.com/go-gcfg/gcfg) | 158 | read INI-style configuration files into Go structs; supports user-defined types and subsections | 7 months ago |
| [goconfig](https://github.com/gosidekick/goconfig) | 150 | goconfig uses a struct as input and populates the fields of this struct with parameters from command line, environment variables and configuration file. | 4 months ago |
| [envcfg](https://github.com/tomazk/envcfg) | 96 | Un-marshaling environment variables to Go structs | 5 years ago |
| [envh](https://github.com/antham/envh) | 96 | Go helpers to manage environment variables | 10 months ago |
| [harvester](https://github.com/beatlabs/harvester) | 95 | Harvest configuration, watch and notify subscriber | a month ago |
| [onion](https://github.com/goraz/onion) | 95 | Layer based configuration for golang | 6 months ago |
| [configuro](https://github.com/sherifabdlnaby/configuro) | 81 | An opinionated configuration loading framework for Containerized and Cloud-Native applications. | a year ago |
| [xdg](https://github.com/OpenPeeDeeP/xdg) | 66 | A cross platform package that follows the XDG Standard | a year ago |
| [gofigure](https://github.com/ian-kent/gofigure) | 61 | Go configuration made easy! | 2 years ago |
| [configure](https://github.com/paked/configure) | 55 | Configure is a Go package that gives you easy configuration of your project through redundancy | 3 years ago |
| [configuration](https://github.com/BoRuDar/configuration) | 45 | Library for setting values to structs' fields from env, flags, files or default tag | a month ago |
| [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) | 45 | Go package that interfaces with AWS System Manager | a year ago |
| [uconfig](https://github.com/omeid/uconfig) | 41 | Lightweight, zero-dependency, and extendable configuration management library for Go | 6 days ago |
| [gone](https://github.com/One-com/gone) | 39 | Golang packages for writing small daemons and servers. | 9 months ago |
| [hocon](https://github.com/gurkankaymak/hocon) | 38 | go implementation of lightbend's HOCON configuration library https://github.com/lightbend/config | 2 days ago |
| [go-up](https://github.com/ufoscout/go-up) | 36 | go-up! A simple configuration library with recursive placeholders resolution and no magic. | 2 years ago |
| [ingo](https://github.com/schachmat/ingo) | 36 | persistent storage for flags in go | 5 years ago |
| [mini](https://github.com/sasbury/mini) | 29 | A golang package for parsing ini-style configuration files | 3 years ago |
| [genv](https://github.com/sakirsensoy/genv) | 26 | Genv is a library for Go (golang) that makes it easy to read and use environment variables in your projects. It also allows environment variables to be loaded from the .env file. | 3 years ago |
| [conflate](https://github.com/the4thamigo-uk/conflate) | 22 | Library providing routines to merge and validate JSON, YAML and/or TOML files | a year ago |
| [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) | 11 | Go utility for loading configuration parameters from AWS SSM (Parameter Store) | a year ago |
| [envconf](https://github.com/ian-kent/envconf) | 10 | Configure Go applications from the environment | 7 years ago |
| [env](https://github.com/nasermirzaei89/env) | 9 | Golang Get Environment Variables Package | 2 months ago |
| [ini](https://github.com/wlevene/ini) | 9 | ini parser for golang | 2 months ago |
| [go-ini](https://github.com/subpop/go-ini) | 7 | automatic mirror of https://git.sr.ht/~spc/go-ini | 10 months ago |
| [swap](https://github.com/oblq/swap) | 5 | Instantiate/configure structs recursively, based on build environment. (YAML, TOML, JSON and env). | 3 months ago |
| [typenv](https://github.com/diegomarangoni/typenv) | 5 | Go minimalist typed environment variables library | 2 years ago |
| [gonfig](https://github.com/miladabc/gonfig) | 3 | Tag based configuration loader from different providers | 6 months ago |
| [go-conf](https://github.com/ThomasObenaus/go-conf) | 2 | Library for easy configuration of a golang service | 4 months ago |


### [Continuous Integration](#Continuous-Integration)
* Tools for help with continuous integration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [drone](https://github.com/harness/drone) | 24506 | Drone is a Container-Native, Continuous Delivery Platform | 2 days ago |
| [cds](https://github.com/ovh/cds) | 3736 | Enterprise-Grade Continuous Delivery & DevOps Automation Open Source Platform | 13 hours ago |
| [goveralls](https://github.com/mattn/goveralls) | 711 |  | a month ago |
| [gotestfmt](https://github.com/haveyoudebuggedit/gotestfmt) | 194 | go test output for humans | 3 days ago |
| [overalls](https://github.com/go-playground/overalls) | 108 | :jeans:Multi-Package go project coverprofile for tools like goveralls | 2 years ago |
| [duci](https://github.com/duck8823/duci) | 70 | The simple ci server  | 5 days ago |
| [gomason](https://github.com/nikogura/gomason) | 51 | A tool for testing, building, signing, and publishing binaries. | 2 months ago |
| [roveralls](https://github.com/lawrencewoodman/roveralls) | 15 | A Go recursive coverage testing tool | 4 years ago |


### [CSS Preprocessors](#CSS-Preprocessors)
* Libraries for preprocessing CSS files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gcss](https://github.com/yosssi/gcss) | 445 | Pure Go CSS Preprocessor | 7 years ago |
| [go-libsass](https://github.com/wellington/go-libsass) | 185 | Go wrapper for libsass, the only Sass 3.5 compiler for Go | a year ago |


### [Data Structures](#Data-Structures)
* Generic datastructures and algorithms in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gods](https://github.com/emirpasic/gods) | 11065 | GoDS (Go Data Structures). Containers (Sets, Lists, Stacks, Maps, Trees), Sets (HashSet, TreeSet, LinkedHashSet), Lists (ArrayList, SinglyLinkedList, DoublyLinkedList), Stacks (LinkedListStack, ArrayStack), Maps (HashMap, TreeMap, HashBidiMap, TreeBidiMap, LinkedHashMap), Trees (RedBlackTree, AVLTree, BTree, BinaryHeap), Comparators, Iterators, Enumerables, Sort, JSON | 3 days ago |
| [go-datastructures](https://github.com/Workiva/go-datastructures) | 6373 | A collection of useful, performant, and threadsafe Go datastructures. | 10 months ago |
| [golang-set](https://github.com/deckarep/golang-set) | 2242 | A simple set type for the Go language. Trusted by Docker, 1Password, Ethereum and Hashicorp. | 2 months ago |
| [gota](https://github.com/go-gota/gota) | 1969 | Gota: DataFrames and data wrangling in Go (Golang) | 3 months ago |
| [roaring](https://github.com/RoaringBitmap/roaring) | 1485 | Roaring bitmaps in Go (golang) | a month ago |
| [bloom](https://github.com/bits-and-blooms/bloom) | 1428 | Go package implementing Bloom filters | 5 months ago |
| [BoomFilters](https://github.com/tylertreat/BoomFilters) | 1407 | Probabilistic data structures for processing continuous, unbounded streams. | a year ago |
| [gocache](https://github.com/eko/gocache) | 1067 | ☔️ A complete Go cache library that brings you multiple ways of managing your caches | 14 days ago |
| [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) | 880 | Cuckoo Filter: Practically Better Than Bloom | 12 days ago |
| [bitset](https://github.com/bits-and-blooms/bitset) | 834 | Go package implementing bitsets | a month ago |
| [hyperloglog](https://github.com/axiomhq/hyperloglog) | 768 | HyperLogLog with lots of sugar (Sparse, LogLog-Beta bias correction and TailCut space reduction) | a month ago |
| [algorithms](https://github.com/shady831213/algorithms) | 614 | CLRS study. Codes are written with golang. | a year ago |
| [gostl](https://github.com/liyue201/gostl) | 607 | Data structure and algorithm library for go, designed to provide functions similar to C++ STL | 13 days ago |
| [trie](https://github.com/derekparker/trie) | 572 | Data structure and relevant algorithms for extremely fast prefix/fuzzy string searching. | 2 years ago |
| [ttlcache](https://github.com/ReneKroon/ttlcache) | 343 | An in-memory string-interface{} map with various expiration options for golang | 6 days ago |
| [go-geoindex](https://github.com/hailocab/go-geoindex) | 335 | Go native library for fast point tracking and K-Nearest queries | 4 years ago |
| [go-edlib](https://github.com/hbollon/go-edlib) | 310 | 📚 String comparison and edit distance algorithms library, featuring : Levenshtein, LCS, Hamming, Damerau levenshtein (OSA and Adjacent transpositions algorithms), Jaro-Winkler, Cosine, etc... | 17 days ago |
| [merkletree](https://github.com/cbergoon/merkletree) | 306 | A Merkle Tree implementation written in Go. | 2 years ago |
| [deque](https://github.com/gammazero/deque) | 300 | Fast ring-buffer deque (double-ended queue) | 6 hours ago |
| [hilbert](https://github.com/google/hilbert) | 244 | Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves. | 3 years ago |
| [goskiplist](https://github.com/ryszard/goskiplist) | 231 | A skip list implementation in Go | 2 years ago |
| [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) | 221 | Adaptive Radix Trees implemented in Go | 2 years ago |
| [cuckoo-filter](https://github.com/linvon/cuckoo-filter) | 200 | Cuckoo Filter go implement, better than Bloom Filter, configurable and space optimized  布谷鸟过滤器的Go实现，优于布隆过滤器，可以定制化过滤器参数，并进行了空间优化 | 4 months ago |
| [skiplist](https://github.com/MauriceGit/skiplist) | 185 | A Go library for an efficient implementation of a skip list: https://godoc.org/github.com/MauriceGit/skiplist | 14 days ago |
| [binpacker](https://github.com/zhuangsirui/binpacker) | 182 | A binary stream packer and unpacker | 4 months ago |
| [levenshtein](https://github.com/agnivade/levenshtein) | 177 | Go implementation to calculate Levenshtein Distance. | 9 months ago |
| [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) | 157 | Go concurrent-safe, goroutine-safe, thread-safe queue | 2 years ago |
| [bloom](https://github.com/zentures/bloom) | 146 | Bloom filters implemented in Go. | 4 years ago |
| [iter](https://github.com/disksing/iter) | 143 | Go implementation of C++ STL iterators and algorithms. | 2 years ago |
| [ring](https://github.com/tannerryan/ring) | 123 | Package ring provides a high performance and thread safe Go implementation of a bloom filter. | a year ago |
| [bitmap](https://github.com/kelindar/bitmap) | 121 | Simple dense bitmap index in Go with binary operators | 25 days ago |
| [go-rquad](https://github.com/arl/go-rquad) | 121 | :pushpin: State of the art point location and neighbour finding algorithms for region quadtrees, in Go | 2 years ago |
| [encoding](https://github.com/zentures/encoding) | 114 | Integer Compression Libraries for Go | 4 years ago |
| [bit](https://github.com/yourbasic/bit) | 111 | Bitset data structure | 4 years ago |
| [remember-go](https://github.com/rocketlaunchr/remember-go) | 108 | Cache Slow Database Queries | 10 months ago |
| [conjungo](https://github.com/InVisionApp/conjungo) | 103 | A small flexible merge library in go | a year ago |
| [go-mcache](https://github.com/OrlovEvgeny/go-mcache) | 77 | Fast in-memory key:value store/cache with TTL | 2 years ago |
| [skiplist](https://github.com/gansidui/skiplist) | 77 | skiplist for golang | 7 years ago |
| [bloom](https://github.com/yourbasic/bloom) | 66 | Probabilistic set data structure | 5 years ago |
| [levenshtein](https://github.com/agext/levenshtein) | 61 | Levenshtein distance and similarity metrics with customizable edit costs and Winkler-like bonus for common prefix. | a year ago |
| [count-min-log](https://github.com/seiflotfy/count-min-log) | 55 | Go implementation of Count-Min-Log | 5 years ago |
| [crunch](https://github.com/superwhiskers/crunch) | 51 | take bytes out of things easily ✨🍪 | 8 days ago |
| [nan](https://github.com/kak-tus/nan) | 48 | Zero allocation Nullable structures in one library with handy conversion functions, marshallers and unmarshallers | 9 days ago |
| [goset](https://github.com/zoumo/goset) | 44 | Set is a useful collection but there is no built-in implementation in Go lang. | a year ago |
| [hide](https://github.com/emvi/hide) | 42 | ID type with marshalling to/from hash to prevent sending IDs to clients. | 3 months ago |
| [concurrent-writer](https://github.com/free/concurrent-writer) | 39 | Highly concurrent drop-in replacement for bufio.Writer | 4 years ago |
| [pipeline](https://github.com/hyfather/pipeline) | 39 | Pipelines using goroutines | 3 months ago |
| [timedmap](https://github.com/zekroTJA/timedmap) | 39 | A thread safe map which has expiring key-value pairs. | 3 months ago |
| [deque](https://github.com/edwingeng/deque) | 37 | A highly optimized double-ended queue | 9 months ago |
| [typ](https://github.com/gurukami/typ) | 30 | Null Types, Safe primitive type conversion and fetching value from complex structures. | 4 months ago |
| [null](https://github.com/emvi/null) | 24 | Nullable Go types that can be marshalled/unmarshalled to/from JSON. | 3 months ago |
| [cmap](https://github.com/lrita/cmap) | 23 | a thread-safe concurrent map for go | a year ago |
| [dict](https://github.com/srfrog/dict) | 23 | Python-like dictionaries for Go | a year ago |
| [go-ef](https://github.com/amallia/go-ef) | 19 | A Go implementation of the Elias-Fano encoding | 4 years ago |
| [ptrie](https://github.com/viant/ptrie) | 18 | A prefix tree implementation in go  | a year ago |
| [set](https://github.com/StudioSol/set) | 18 | A simple Set data structure implementation in Go (Golang) using LinkedHashMap. | 5 months ago |
| [mspm](https://github.com/BlackRabbitt/mspm) | 17 | Multi-String Pattern Matching Algorithm Using TrieHashNode | 4 years ago |
| [treap](https://github.com/perdata/treap) | 15 | golang persistent immutable treap sorted sets | 2 years ago |
| [parapipe](https://github.com/nazar256/parapipe) | 14 | Paralleling pipeline | 8 months ago |
| [gofal](https://github.com/xxjwxc/gofal) | 12 | fractional api base on golang . golang math tools fractional molecular denominator 分数计算 分子 分母 运算 | 2 years ago |
| [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) | 12 | Ordered-concurrently a library for concurrent processing with ordered output in Go. Process work concurrently and returns output in a channel in the order of input. It is useful in concurrently processing items in a queue, and get output in the order provided by the queue. | 3 months ago |
| [bloomfilter](https://github.com/OldPanda/bloomfilter) | 9 | Yet another Bloomfilter implementation in Go, compatible with Java's Guava library | 8 months ago |
| [gdcache](https://github.com/ulovecode/gdcache) | 7 | gdcache is a pure non-intrusive cache library implemented by golang, you can use it to implement your own cache. | 4 months ago |
| [slices](https://github.com/srfrog/slices) | 7 | Functions that operate on slices. Similar to functions from package strings or package bytes that have been adapted to work with slices. | a year ago |
| [dsu](https://github.com/ihebu/dsu) | 6 | Disjoint Set data structure implementation in Go | 19 days ago |
| [goterator](https://github.com/yaa110/goterator) | 6 | Lazy iterator implementation for Golang | a year ago |
| [parsefields](https://github.com/MonaxGT/parsefields) | 6 | Tools for parse JSON-like logs for collecting unique fields and events | 3 years ago |
| [hashsplit](https://github.com/bobg/hashsplit) | 5 |  | 6 months ago |
| [merkle](https://github.com/bobg/merkle) | 2 | Merkle hash trees | 6 months ago |


### [Database](#Database)
* Databases in Go.

#### [Databases implemented in Go](#Databases-implemented-in-Go)
* Databases implemented in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [prometheus](https://github.com/prometheus/prometheus) | 41060 | The Prometheus monitoring system and time series database. | 2 hours ago |
| [tidb](https://github.com/pingcap/tidb) | 30427 | TiDB is an open source distributed HTAP database compatible with the MySQL protocol  | a few seconds ago |
| [leveldb](https://github.com/google/leveldb) | 28395 | LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values. | 3 hours ago |
| [cockroach](https://github.com/cockroachdb/cockroach) | 23698 | CockroachDB - the open source, cloud-native distributed SQL database. | 11 minutes ago |
| [influxdb](https://github.com/influxdata/influxdb) | 22918 | Scalable datastore for metrics, events, and real-time analytics | a day ago |
| [dgraph](https://github.com/dgraph-io/dgraph) | 17655 | Native GraphQL Database with graph backend | 21 days ago |
| [groupcache](https://github.com/golang/groupcache) | 11143 | groupcache is a caching and cache-filling library, intended as a replacement for memcached in many cases. | a month ago |
| [badger](https://github.com/dgraph-io/badger) | 10441 | Fast key-value DB in Go. | 8 days ago |
| [rqlite](https://github.com/rqlite/rqlite) | 9653 | The lightweight, distributed relational database built on SQLite | 6 days ago |
| [milvus](https://github.com/milvus-io/milvus) | 9455 | An open-source vector database for scalable similarity search and AI applications. | 9 minutes ago |
| [immudb](https://github.com/codenotary/immudb) | 7143 | immudb - immutable database based on zero trust, SQL and Key-Value, tamperproof, data change history | a day ago |
| [go-cache](https://github.com/patrickmn/go-cache) | 5860 | An in-memory key:value store/cache (similar to Memcached) library for Go, suitable for single-machine applications. | 2 months ago |
| [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) | 5833 | VictoriaMetrics: fast, cost-effective monitoring solution and time series database | 9 hours ago |
| [bigcache](https://github.com/allegro/bigcache) | 5460 | Efficient cache for gigabytes of data written in Go. | 3 days ago |
| [bbolt](https://github.com/etcd-io/bbolt) | 5276 | An embedded key/value database for Go. | 17 days ago |
| [dtm](https://github.com/dtm-labs/dtm) | 4915 | 🔥A cross-language distributed transaction solution. Support saga, tcc, xa, 2 phases messages.  跨语言分布式事务管理器 | 3 hours ago |
| [goleveldb](https://github.com/syndtr/goleveldb) | 4908 | LevelDB key/value database in Go. | a month ago |
| [ledisdb](https://github.com/ledisdb/ledisdb) | 3808 | A high performance NoSQL Database Server powered by Go | 22 days ago |
| [buntdb](https://github.com/tidwall/buntdb) | 3646 | BuntDB is an embeddable, in-memory key/value database for Go with custom indexing and geospatial support | 2 months ago |
| [tiedot](https://github.com/HouzuoGuo/tiedot) | 2653 | A rudimentary implementation of a basic document (NoSQL) database in Go | 5 months ago |
| [rosedb](https://github.com/flower-corp/rosedb) | 2305 | 🚀A fast, stable and embedded k-v storage in pure Golang, supports string, list, hash, set, sorted set. 一个 Go 语言实现的快速、稳定、内嵌的 k-v 存储引擎。 | a month ago |
| [nutsdb](https://github.com/xujiajun/nutsdb) | 1874 | A simple, fast, embeddable, persistent key/value store written in pure Go. It supports fully serializable transactions and many data structures such as  list, set, sorted set. | 2 months ago |
| [gcache](https://github.com/bluele/gcache) | 1827 | An in-memory cache library for golang. It supports multiple eviction policies: LRU, LFU, ARC | a month ago |
| [cache2go](https://github.com/muesli/cache2go) | 1677 | Concurrency-safe Go caching library with expiration capabilities and access counters | 2 months ago |
| [godis](https://github.com/HDT3213/godis) | 1659 | A Golang implemented Redis Server and Cluster. Go 语言实现的 Redis 服务器和分布式集群 | 2 months ago |
| [fastcache](https://github.com/VictoriaMetrics/fastcache) | 1367 | Fast thread-safe inmemory cache for big number of entries in Go. Minimizes GC overhead | 9 days ago |
| [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) | 1277 | A decentralized, trusted, high performance, SQL database with blockchain features | 6 months ago |
| [diskv](https://github.com/peterbourgon/diskv) | 1136 | A disk-backed key-value store. | 3 months ago |
| [databunker](https://github.com/securitybunker/databunker) | 957 | Secure SDK/vault for personal records/PII built to comply with GDPR | 13 hours ago |
| [column](https://github.com/kelindar/column) | 875 | High-performance, columnar, in-memory store with bitmap indexing in Go | a month ago |
| [eliasdb](https://github.com/krotik/eliasdb) | 873 | EliasDB a graph-based database. | a month ago |
| [pogreb](https://github.com/akrylysov/pogreb) | 865 | Embedded key-value store for read-heavy workloads written in Go | 6 months ago |
| [moss](https://github.com/couchbase/moss) | 857 | moss - a simple, fast, ordered, persistable, key-val storage library for golang | 2 months ago |
| [levigo](https://github.com/jmhodges/levigo) | 403 | levigo is a Go wrapper for LevelDB | 2 months ago |
| [pudge](https://github.com/recoilme/pudge) | 312 | Fast and simple key/value store written using Go's standard library | 7 months ago |
| [vasto](https://github.com/chrislusf/vasto) | 236 | A distributed key-value store. On Disk. Able to grow or shrink without service interruption. | 3 years ago |
| [kivik](https://github.com/go-kivik/kivik) | 225 | Kivik provides a common interface to CouchDB or CouchDB-like databases for Go and GopherJS. | a month ago |
| [piladb](https://github.com/fern4lvarez/piladb) | 194 | Lightweight RESTful database engine based on stack data structures | a year ago |
| [golang-scribble](https://github.com/nanobox-io/golang-scribble) | 145 | A tiny Golang JSON database | 3 years ago |
| [cache](https://github.com/akyoto/cache) | 101 | :handbag: Cache arbitrary data with an expiration time. | 2 years ago |
| [slowpoke](https://github.com/recoilme/slowpoke) | 100 | Low-level key/value store in pure Go.  | 2 years ago |
| [unitdb](https://github.com/unit-io/unitdb) | 84 | Fast specialized time-series database for IoT, real-time internet connected devices and AI analytics. | 4 months ago |
| [bcache](https://github.com/iwanbk/bcache) | 79 | Eventually consistent distributed in-memory  cache Go library | 3 years ago |
| [couchcache](https://github.com/codingsince1985/couchcache) | 56 | A RESTful caching micro-service in Go backed by Couchbase | 4 months ago |
| [hare](https://github.com/jameycribbs/hare) | 50 | Hare is a nimble little database management system for Go. | a year ago |
| [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) | 40 | golang bigcache with clustering as a library. | 4 years ago |
| [coffer](https://github.com/claygod/coffer) | 28 | Simply ACID* key-value database. At the medium or even low latency it tries to provide greater throughput without losing the ACID properties of the database. The database provides the ability to create record headers at own discretion and use them as transactions. The maximum size of stored data is limited by the size of the computer's RAM. | 25 days ago |
| [tempdb](https://github.com/rafaeljesus/tempdb) | 16 | Key-value store for temporary items :memo: | 4 years ago |
| [ttlcache](https://github.com/cheshir/ttlcache) | 5 | Simple in-memory key-value storage with TTL for each record. | a year ago |


#### [Database schema migration](#Database-schema-migration)
* Database schema migration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [migrate](https://github.com/golang-migrate/migrate) | 8088 | Database migrations. CLI and Golang library. | 7 days ago |
| [sql-migrate](https://github.com/rubenv/sql-migrate) | 2391 | SQL schema migration tool for Go. | 7 days ago |
| [goose](https://github.com/pressly/goose) | 2295 | A database migration tool. Supports SQL migrations and Go functions.  | a day ago |
| [pop](https://github.com/gobuffalo/pop) | 1174 | A Tasty Treat For All Your Database Needs | 3 days ago |
| [skeema](https://github.com/skeema/skeema) | 985 | Declarative pure-SQL schema management for MySQL and MariaDB | 5 days ago |
| [goavro](https://github.com/linkedin/goavro) | 780 |  | 10 days ago |
| [gormigrate](https://github.com/go-gormigrate/gormigrate) | 729 | Minimalistic database migration helper for Gorm ORM | 14 days ago |
| [darwin](https://github.com/GuiaBolso/darwin) | 127 | Database schema evolution library for Go | a year ago |
| [migrator](https://github.com/lopezator/migrator) | 118 | Dead simple Go database migration library. | a year ago |
| [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) | 82 | A Go package to help write migrations with go-pg/pg. | 6 months ago |
| [avro](https://github.com/khezen/avro) | 31 | Apache AVRO for go | a month ago |
| [sqlize](https://github.com/sunary/sqlize) | 28 | sql migration schema generate from models | a month ago |
| [go-fixtures](https://github.com/RichardKnop/go-fixtures) | 27 | Django style fixtures for Golang's excellent built-in database/sql library. | 2 years ago |
| [pravasan](https://github.com/pravasan/pravasan) | 27 | Simple Migration Tool - written in Go | 3 years ago |
| [migrator](https://github.com/larapulse/migrator) | 14 | MySQL database migrator | 10 months ago |
| [schema](https://github.com/adlio/schema) | 11 | Embedded schema migration package for Go | 2 months ago |
| [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) | 7 | CLI-friendly package for pg migrations management. | 3 months ago |


#### [Database tools.](#Database-tools)
* Database-tools.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vitess](https://github.com/vitessio/vitess) | 13332 | Vitess is a database clustering system for horizontal scaling of MySQL. | 5 hours ago |
| [pgweb](https://github.com/sosedoff/pgweb) | 7200 | Cross-platform client for PostgreSQL databases | 6 days ago |
| [kingshard](https://github.com/flike/kingshard) | 5942 | A high-performance MySQL proxy | 8 months ago |
| [orchestrator](https://github.com/openark/orchestrator) | 4406 | MySQL replication topology management and HA | 6 days ago |
| [go-mysql-elasticsearch](https://github.com/go-mysql-org/go-mysql-elasticsearch) | 3721 | Sync MySQL data into elasticsearch  | a year ago |
| [go-mysql](https://github.com/go-mysql-org/go-mysql) | 3453 | a powerful mysql toolset with Go | a day ago |
| [prest](https://github.com/prest/prest) | 3102 | PostgreSQL ➕ REST, low-code, simplify and accelerate development, ⚡ instant, realtime, high-performance on any Postgres application, existing or new | 21 days ago |
| [chproxy](https://github.com/ContentSquare/chproxy) | 830 | ClickHouse http proxy and load balancer | 3 days ago |
| [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) | 653 | pg_timetable: Advanced scheduling for PostgreSQL | 2 days ago |
| [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) | 342 | Collects many small inserts to ClickHouse and send in big inserts | 4 months ago |
| [myreplication](https://github.com/2tvenom/myreplication) | 179 | Golang MySql binary log replication listener | 3 years ago |
| [octillery](https://github.com/blastrain/octillery) | 155 | Go package for sharding databases ( Supports every ORM or raw SQL ) | 9 months ago |
| [dbbench](https://github.com/sj14/dbbench) | 64 | 🏋️ dbbench is a simple database benchmarking tool which supports several databases and own scripts | a day ago |
| [datagen](https://github.com/codingconcepts/datagen) | 46 | A fast data generator that's multi-table aware and supports multi-row DML. | 2 years ago |
| [prep](https://github.com/hexdigest/prep) | 31 | Prep finds all SQL statements in a Go package and instruments db connection with prepared statements | 4 years ago |
| [rwdb](https://github.com/andizzle/rwdb) | 14 | Database wrapper that manage read write connections | 4 years ago |


#### [SQL query builder](#SQL-query-builder)
* SQL query builder, libraries for building and using SQL.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [squirrel](https://github.com/Masterminds/squirrel) | 4509 | Fluent SQL generation for golang | 2 months ago |
| [xo](https://github.com/xo/xo) | 3013 | Command line tool to generate idiomatic Go code for SQL databases supporting PostgreSQL, MySQL, SQLite, Oracle, and Microsoft SQL Server | 16 days ago |
| [goqu](https://github.com/doug-martin/goqu) | 1402 | SQL builder and query library for golang | a month ago |
| [gendry](https://github.com/didi/gendry) | 1349 | a golang library for sql builder | 25 days ago |
| [jet](https://github.com/go-jet/jet) | 618 | Type safe SQL builder with code generation and automatic query result data mapping | 3 days ago |
| [dotsql](https://github.com/qustavo/dotsql) | 616 | A Golang library for using SQL. | 6 months ago |
| [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) | 550 | A Go (golang) package that enhances the standard database/sql package by providing powerful data retrieval methods as well as DB-agnostic query building capabilities. | 21 days ago |
| [dbq](https://github.com/rocketlaunchr/dbq) | 330 | Zero boilerplate database operations for Go | a year ago |
| [sqrl](https://github.com/elgris/sqrl) | 237 | Fluent SQL generation for golang | 4 months ago |
| [sqlingo](https://github.com/lqs/sqlingo) | 213 | 💥 A lightweight DSL & ORM which helps you to write SQL in Go. | 9 days ago |
| [go-structured-query](https://github.com/bokwoon95/go-structured-query) | 147 | Type safe SQL query builder and struct mapper for Go | 4 months ago |
| [igor](https://github.com/galeone/igor) | 85 | igor is an abstraction layer for PostgreSQL with a gorm like syntax. | 2 years ago |
| [godbal](https://github.com/xujiajun/godbal) | 53 | Database Abstraction Layer (dbal) for Go. Support SQL builder and get result easily  (now only support mysql) | 3 years ago |
| [buildsqlx](https://github.com/arthurkushman/buildsqlx) | 46 | Go database query builder library for PostgreSQL | a month ago |
| [sqlf](https://github.com/leporo/sqlf) | 41 | Fast SQL query builder for Go | a month ago |
| [qry](https://github.com/HnH/qry) | 20 | Write your SQL queries in raw files with all benefits of modern IDEs, use them in an easy way inside your application with all the profit of compile time constants | 5 months ago |
| [gosql](https://github.com/twharmon/gosql) | 18 | SQL query builder for Go | a year ago |
| [mpath-go](https://github.com/spacetab-io/mpath-go) | 11 | Golang package for MPTT (Modified Preorder Tree Traversal) - materialized path realisation. | 2 years ago |
| [ormlite](https://github.com/pupizoid/ormlite) | 2 | Lightweight package containing some ORM-like features and helpers for sqlite databases. | a year ago |


### [Database Drivers](#Database-Drivers)
* Libraries for connecting and operating databases.

#### [Relational Databases](#Relational-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mysql](https://github.com/go-sql-driver/mysql) | 11898 | Go MySQL Driver is a MySQL driver for Go's (golang) database/sql package | 3 days ago |
| [pq](https://github.com/lib/pq) | 7081 | Pure Go Postgres driver for database/sql | a month ago |
| [go-sqlite3](https://github.com/mattn/go-sqlite3) | 5441 | sqlite3 driver for go using database/sql | 16 days ago |
| [pgx](https://github.com/jackc/pgx) | 5047 | PostgreSQL driver and toolkit for Go | 5 days ago |
| [go-mssqldb](https://github.com/denisenkom/go-mssqldb) | 1518 | Microsoft SQL server driver written in go language | 7 days ago |
| [go-oci8](https://github.com/mattn/go-oci8) | 577 | Oracle driver for Go using database/sql | 4 months ago |
| [scany](https://github.com/georgysavva/scany) | 498 | Library for scanning data from a database into Go structs and more | 15 days ago |
| [godror](https://github.com/godror/godror) | 330 | GO DRiver for ORacle DB | 5 days ago |
| [firebirdsql](https://github.com/nakagami/firebirdsql) | 165 | Firebird RDBMS sql driver for Go (golang) | 6 days ago |
| [go-adodb](https://github.com/mattn/go-adodb) | 126 | Microsoft ActiveX Object DataBase driver for go that using exp/sql | 2 years ago |
| [gofreetds](https://github.com/minus5/gofreetds) | 106 | Go Sql Server database driver. | a year ago |
| [sqinn-go](https://github.com/cvilsmeier/sqinn-go) | 103 | SQLite with pure Go | 9 months ago |
| [calcite-avatica-go](https://github.com/apache/calcite-avatica-go) | 89 | Mirror of Apache Calcite - Avatica Go SQL Driver | a year ago |
| [bgc](https://github.com/viant/bgc) | 16 | Datastore Connectivity for BigQuery in go | 2 years ago |
| [pig](https://github.com/alexeyco/pig) | 8 | Simple pgx wrapper to execute and scan query results | 10 months ago |


#### [NoSQL Databases](#NoSQL-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [redis](https://github.com/go-redis/redis) | 13538 | Type-safe Redis client for Golang | a day ago |
| [redigo](https://github.com/gomodule/redigo) | 8893 | Go client for Redis | 16 days ago |
| [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) | 6438 | The Go driver for MongoDB | 11 hours ago |
| [mgo](https://github.com/globalsign/mgo) | 1934 | The MongoDB driver for Go | 4 months ago |
| [rethinkdb-go](https://github.com/rethinkdb/rethinkdb-go) | 1588 | Go language driver for RethinkDB | 5 months ago |
| [gomemcache](https://github.com/bradfitz/gomemcache) | 1430 | Go Memcached client library #golang | 40 minutes ago |
| [qmgo](https://github.com/qiniu/qmgo) | 796 | Qmgo - The Go driver for MongoDB. It‘s based on official mongo-go-driver but easier to use like Mgo. | 7 days ago |
| [mgm](https://github.com/Kamva/mgm) | 455 | Mongo Go Models (mgm) is a fast and simple MongoDB ODM for Go (based on official Mongo Go Driver) | 12 days ago |
| [redeo](https://github.com/bsm/redeo) | 414 | High-performance framework for building redis-protocol compatible TCP servers/services | a year ago |
| [neoism](https://github.com/jmcvetta/neoism) | 383 | Neo4j client for Golang | 2 years ago |
| [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) | 378 | Aerospike Client Go  | 13 days ago |
| [gocb](https://github.com/couchbase/gocb) | 331 | The Couchbase Go SDK | 9 hours ago |
| [go-couchbase](https://github.com/couchbase/go-couchbase) | 312 | Couchbase client in Go | 7 days ago |
| [go-rejson](https://github.com/nitishm/go-rejson) | 243 | Golang client for redislabs' ReJSON module with support for multilple redis clients (redigo, go-redis) | 12 hours ago |
| [godis](https://github.com/piaohao/godis) | 102 | redis client implement by golang, inspired by jedis. | 2 years ago |
| [Neo4j-GO](https://github.com/davemeehan/Neo4j-GO) | 77 | Neo4j REST Client in golang | 4 years ago |
| [arangolite](https://github.com/solher/arangolite) | 70 | Lightweight Golang driver for ArangoDB | a year ago |
| [go-pilosa](https://github.com/pilosa/go-pilosa) | 51 | Go client library for Pilosa | 2 years ago |
| [goforestdb](https://github.com/couchbase/goforestdb) | 33 | Go bindings for ForestDB | 5 years ago |
| [goriak](https://github.com/zegl/goriak) | 27 | goriak - Go language driver for Riak KV | 5 months ago |
| [neo4j](https://github.com/cihangir/neo4j) | 27 | Neo4j Rest API Client for Go lang | 7 years ago |
| [xredis](https://github.com/shomali11/xredis) | 18 | Go Redis Client | 3 years ago |
| [godscache](https://github.com/defcronyke/godscache) | 10 | An unofficial Google Cloud Platform Go Datastore wrapper that adds caching using memcached. For App Engine Flexible, Compute Engine, Kubernetes Engine, and more. | 3 years ago |
| [asc](https://github.com/viant/asc) | 8 | Datastore Connectivity for Aerospike for go | 3 years ago |
| [gocosmos](https://github.com/btnguyen2k/gocosmos) | 8 | Go driver for Azure CosmosDB SQL API | 18 hours ago |


#### [Search and Analytic Databases](#Search-and-Analytic-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bleve](https://github.com/blevesearch/bleve) | 8184 | A modern text indexing library for go | 25 days ago |
| [elastic](https://github.com/olivere/elastic) | 6556 | Elasticsearch client for Go. | 20 days ago |
| [riot](https://github.com/go-ego/riot) | 6041 | Go Open Source, Distributed, Simple and efficient Search Engine; Warning: This is V1 and beta version, because of big memory consume, and the V2 will be rewrite all code. | a year ago |
| [go-elasticsearch](https://github.com/elastic/go-elasticsearch) | 3903 | The official Go client for Elasticsearch | 3 days ago |
| [elastigo](https://github.com/mattbaird/elastigo) | 947 | A Go (golang) based Elasticsearch client library. | 3 years ago |
| [elasticsql](https://github.com/cch123/elasticsql) | 863 | convert sql to elasticsearch DSL in golang(go) | 3 months ago |
| [skizze](https://github.com/seiflotfy/skizze) | 82 | A probabilistic data structure service and storage | 6 years ago |
| [goes](https://github.com/OwnLocal/goes) | 26 | A library to interact with Elasticsearch in Go! | a year ago |


#### [Multiple Backends](#Multiple-Backends)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cayley](https://github.com/cayleygraph/cayley) | 14081 | An open-source graph database | a month ago |
| [gokv](https://github.com/philippgille/gokv) | 399 | Simple key-value store abstraction and implementations for Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB and many more) | 5 months ago |
| [cachego](https://github.com/faabiosr/cachego) | 161 | Golang Cache component - Multiple drivers | a month ago |
| [dsc](https://github.com/viant/dsc) | 24 | Datastore Connectivity in go | 2 days ago |


### [Date and Time](#Date-and-Time)
* Libraries for working with dates and times.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [now](https://github.com/jinzhu/now) | 3566 | Now is a time toolkit for golang | 2 months ago |
| [carbon](https://github.com/golang-module/carbon) | 1636 | A simple, semantic and developer-friendly golang package for datetime | 3 months ago |
| [dateparse](https://github.com/araddon/dateparse) | 1636 | GoLang Parse many date strings without knowing format in advance. | 16 days ago |
| [carbon](https://github.com/uniplaces/carbon) | 683 | Carbon for Golang, an extension for Time | 3 months ago |
| [durafmt](https://github.com/hako/durafmt) | 420 | :clock8:  Better time duration formatting in Go!  | 8 months ago |
| [timeutil](https://github.com/leekchan/timeutil) | 187 | timeutil - useful extensions (Timedelta, Strftime, ...) to the golang's time package | 3 years ago |
| [gostradamus](https://github.com/bykof/gostradamus) | 159 | Gostradamus: Better DateTimes for Go 🕰️ | 3 months ago |
| [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) | 114 | The implementation of Persian (Solar Hijri) Calendar in Go | 3 months ago |
| [iso8601](https://github.com/relvacode/iso8601) | 98 | A fast ISO8601 date parser for Go | 7 months ago |
| [date](https://github.com/rickb777/date) | 87 | A Go package for working with dates | 15 days ago |
| [timespan](https://github.com/SaidinWoT/timespan) | 78 | Golang package to manipulate time intervals. | 3 years ago |
| [feiertage](https://github.com/wlbr/feiertage) | 41 | Gesetzliche Feiertage und mehr in Deutschland und Österreich (Bank holidays/public holidays in Austria and Germany) | 6 months ago |
| [go-sunrise](https://github.com/nathan-osman/go-sunrise) | 41 | Go package for calculating the sunrise and sunset times for a given location | 8 months ago |
| [go-str2duration](https://github.com/xhit/go-str2duration) | 37 | Convert string to duration in golang | 2 years ago |
| [kair](https://github.com/GuilhermeCaruso/kair) | 22 | :clock1: Date and Time - Golang Formatting Library | 2 years ago |
| [cronrange](https://github.com/1set/cronrange) | 14 | time range expression in cron style | 8 hours ago |
| [nulltime](https://github.com/kirillDanshin/nulltime) | 12 |  | 5 years ago |
| [tuesday](https://github.com/osteele/tuesday) | 11 | Ruby-compatible strftime for golang | 8 months ago |
| [strftime](https://github.com/awoodbeck/strftime) | 8 | C99-compatible strftime formatter for use with Go time.Time instances. | 4 years ago |
| [go-week](https://github.com/stoewer/go-week) | 7 | A Go package to work with ISO 8601 week dates | 3 months ago |


### [Distributed Systems](#Distributed-Systems)
* Packages that help with building Distributed Systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [etcd](https://github.com/etcd-io/etcd) | 38813 | Distributed reliable key-value store for the most critical data of a distributed system | 3 hours ago |
| [kit](https://github.com/go-kit/kit) | 22362 | A standard library for microservices. | 2 days ago |
| [go-micro](https://github.com/asim/go-micro) | 17728 | A framework for distributed systems development | a day ago |
| [kratos](https://github.com/go-kratos/kratos) | 16463 | Your ultimate Go microservices framework for the cloud-native era. | 13 hours ago |
| [grpc-go](https://github.com/grpc/grpc-go) | 15375 | The Go language implementation of gRPC. HTTP/2 based RPC | 4 hours ago |
| [go-zero](https://github.com/zeromicro/go-zero) | 14748 | go-zero is a web and rpc framework written in Go. It's born to ensure the stability of the busy sites with resilient design. Builtin goctl greatly improves the development productivity. | 4 hours ago |
| [micro](https://github.com/micro/micro) | 10924 | A distributed cloud operating system | 15 hours ago |
| [nats-server](https://github.com/nats-io/nats-server) | 10507 | High-Performance server for NATS.io, the cloud and edge native messaging system. | 4 hours ago |
| [libzmq](https://github.com/zeromq/libzmq) | 7560 | ZeroMQ core engine in C++, implements ZMTP/3.1 | 6 days ago |
| [rpcx](https://github.com/smallnest/rpcx) | 6703 | Best microservices framework in Go, like alibaba Dubbo, but with more features, Scale easily. Try it. Test it. If you feel it's better, use it! 𝐉𝐚𝐯𝐚有𝐝𝐮𝐛𝐛𝐨, 𝐆𝐨𝐥𝐚𝐧𝐠有𝐫𝐩𝐜𝐱! | a day ago |
| [raft](https://github.com/hashicorp/raft) | 5664 | Golang implementation of the Raft consensus protocol | 2 days ago |
| [lura](https://github.com/luraproject/lura) | 4866 | Ultra performant API Gateway with middlewares. A project hosted at The Linux Foundation | 10 hours ago |
| [torrent](https://github.com/anacrolix/torrent) | 4221 | Full-featured BitTorrent client package and utilities | 2 days ago |
| [dragonboat](https://github.com/lni/dragonboat) | 4110 | A feature complete and high performance multi-group Raft library in Go.   | 9 days ago |
| [emitter](https://github.com/emitter-io/emitter) | 3175 | High performance, distributed and low latency publish-subscribe platform. | 2 months ago |
| [glow](https://github.com/chrislusf/glow) | 3028 | Glow is an easy-to-use distributed computation system written in Go, similar to Hadoop Map Reduce, Spark, Flink, Storm, etc. I am also working on another similar pure Go system, https://github.com/chrislusf/gleam , which is more flexible and more performant. | 3 years ago |
| [gleam](https://github.com/chrislusf/gleam) | 2986 | Fast, efficient, and scalable distributed map/reduce system, DAG execution, in memory or on disk, written in pure Go, runs standalone or distributedly. | 9 months ago |
| [liftbridge](https://github.com/liftbridge-io/liftbridge) | 2206 | Lightweight, fault-tolerant message streams. | 2 days ago |
| [hprose-golang](https://github.com/hprose/hprose-golang) | 1194 | Hprose is a cross-language RPC. This project is Hprose for Golang. | 3 days ago |
| [ringpop-go](https://github.com/uber/ringpop-go) | 723 | Scalable, fault-tolerant application-layer sharding for Go applications | a year ago |
| [rain](https://github.com/cenkalti/rain) | 675 | 🌧 BitTorrent client and library in Go | 2 months ago |
| [gorpc](https://github.com/valyala/gorpc) | 648 | Simple, fast and scalable golang rpc library for high load | 2 years ago |
| [go-health](https://github.com/InVisionApp/go-health) | 619 | Library for enabling asynchronous health checks in your service | 2 years ago |
| [redislock](https://github.com/bsm/redislock) | 586 | Simplified distributed locking implementation using Redis | a month ago |
| [arpc](https://github.com/lesismal/arpc) | 471 | More effective network communication, two-way calling, notify and broadcast supported. | 12 days ago |
| [go-sundheit](https://github.com/AppsFlyer/go-sundheit) | 460 | A library built to provide support for defining service health for golang services. It allows you to register async health checks for your dependencies and the service itself, provides a health endpoint that exposes their status, and health metrics. | 6 months ago |
| [consistent](https://github.com/buraksezer/consistent) | 450 | Consistent hashing with bounded loads in Golang | 8 months ago |
| [digota](https://github.com/digota/digota) | 426 | ecommerce microservice | a year ago |
| [sleuth](https://github.com/ursiform/sleuth) | 345 | A Go library for master-less peer-to-peer autodiscovery and RPC between HTTP services | 4 years ago |
| [go-jump](https://github.com/dgryski/go-jump) | 337 | go-jump: Jump consistent hashing | 4 months ago |
| [go-doudou](https://github.com/unionj-cloud/go-doudou) | 247 | go-doudou（doudou pronounce /dəudəu/）is a gossip protocol and OpenAPI 3.0 spec based decentralized microservice framework. It supports monolith service application as well. Currently, it supports RESTful service only. | 15 hours ago |
| [dht](https://github.com/anacrolix/dht) | 225 | dht is used by anacrolix/torrent, and is intended for use as a library in other projects both torrent related and otherwise | 14 days ago |
| [jsonrpc](https://github.com/ybbus/jsonrpc) | 207 | A simple go implementation of json rpc 2.0 client over http | 5 months ago |
| [jsonrpc](https://github.com/osamingo/jsonrpc) | 159 | The jsonrpc package helps implement of JSON-RPC 2.0 | 4 months ago |
| [celeriac.v1](https://github.com/svcavallar/celeriac.v1) | 71 | Golang client library for adding support for interacting and monitoring Celery workers, tasks and events. | a year ago |
| [doublejump](https://github.com/edwingeng/doublejump) | 70 | A revamped Google's jump consistent hash | 7 months ago |
| [semaphore](https://github.com/jexia/semaphore) | 68 | Take control of your data, connect with anything, and expose it anywhere through protocols such as HTTP, GraphQL, and gRPC. | 3 days ago |
| [outboxer](https://github.com/italolelis/outboxer) | 65 | A library that implements the outboxer pattern in go | 3 days ago |
| [dot](https://github.com/dotchain/dot) | 64 | distributed data sync with operational transformation/transforms  | 2 years ago |
| [flowgraph](https://github.com/vectaport/flowgraph) | 45 | Flowgraph package for scalable asynchronous system development | 10 months ago |
| [drmaa](https://github.com/dgruber/drmaa) | 37 | Compute cluster (HPC) job submission library for Go (#golang) based on the open DRMAA standard. | a year ago |
| [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) | 36 | MySQL Backed Locking Primitive | 7 months ago |
| [go-pdu](https://github.com/pdupub/go-pdu) | 34 | Parallel Digital Universe - A decentralized identity-based social network | a day ago |
| [micro](https://github.com/gmsec/micro) | 17 | A Go distributed systems development framework | 4 months ago |
| [dynatomic](https://github.com/tylfin/dynatomic) | 14 | Dynatomic is a library for using dynamodb as an atomic counter | a year ago |
| [consistenthash](https://github.com/mbrostami/consistenthash) | 10 | A Go library that implements Consistent Hashing | 2 years ago |
| [failured](https://github.com/andy2046/failured) | 4 | Adaptive Accrual Failure Detector | 6 months ago |


### [Dynamic DNS](#Dynamic-DNS)
* Tools for updating dynamic DNS records.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [godns](https://github.com/TimothyYe/godns) | 962 | A dynamic DNS client tool supports AliDNS, Cloudflare, Google Domains, DNSPod, HE.net & DuckDNS & DreamHost, etc, written in Go. | 16 days ago |
| [ddns](https://github.com/skibish/ddns) | 202 | Personal DDNS client with Digital Ocean Networking DNS as backend. | 4 months ago |


### [Email](#Email)
* Libraries and tools that implement email creation and sending.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [MailHog](https://github.com/mailhog/MailHog) | 9703 | Web and API based SMTP testing | a month ago |
| [hermes](https://github.com/matcornic/hermes) | 2426 | Golang package that generates clean, responsive HTML e-mails for sending transactional mail | 2 months ago |
| [email](https://github.com/jordan-wright/email) | 1944 | Robust and flexible email library for Go | 2 months ago |
| [go-imap](https://github.com/emersion/go-imap) | 1464 |  :inbox_tray: An IMAP library for clients and servers | a month ago |
| [sendgrid-go](https://github.com/sendgrid/sendgrid-go) | 791 | The Official Twilio SendGrid Led, Community Driven Golang API Library | 7 days ago |
| [mailgun-go](https://github.com/mailgun/mailgun-go) | 578 | Go library for sending mail with the Mailgun API. | a month ago |
| [email-verifier](https://github.com/AfterShip/email-verifier) | 376 | :white_check_mark: A Go library for email verification without sending any emails. | 13 days ago |
| [go-simple-mail](https://github.com/xhit/go-simple-mail) | 270 | Golang package for send email. Support keep alive connection, TLS and SSL. Easy for bulk SMTP. | a month ago |
| [go-message](https://github.com/emersion/go-message) | 237 | :envelope: A streaming Go library for the Internet Message Format and mail messages | 2 days ago |
| [hectane](https://github.com/hectane/hectane) | 214 | Lightweight SMTP client written in Go | a year ago |
| [douceur](https://github.com/aymerick/douceur) | 209 | A simple CSS parser and inliner in Go | 8 months ago |
| [mailchain](https://github.com/mailchain/mailchain) | 108 | Using Mailchain, blockchain users can now send and receive rich-media HTML messages with attachments via a blockchain address. | 17 days ago |
| [go-premailer](https://github.com/vanng822/go-premailer) | 82 | Inline styling for html mail in golang | a year ago |
| [go-dkim](https://github.com/toorop/go-dkim) | 75 | DKIM package for golang | a year ago |
| [smtp](https://github.com/mailhog/smtp) | 68 | MailHog SMTP Protocol | 4 months ago |
| [go-email-validator](https://github.com/go-email-validator/go-email-validator) | 19 | 📧 Golang Email address validator | 2 days ago |


### [Embeddable Scripting Languages](#Embeddable-Scripting-Languages)
* Embedding other languages inside your go code.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopher-lua](https://github.com/yuin/gopher-lua) | 4568 | GopherLua: VM and compiler for Lua in Go | a month ago |
| [goja](https://github.com/dop251/goja) | 2715 | ECMAScript/JavaScript engine in pure Go | 3 days ago |
| [tengo](https://github.com/d5/tengo) | 2618 | A fast script language for Go | 8 days ago |
| [expr](https://github.com/antonmedv/expr) | 2411 | Expression language for Go | 12 days ago |
| [go-lua](https://github.com/Shopify/go-lua) | 2267 | A Lua VM in Go | a month ago |
| [go-python](https://github.com/sbinet/go-python) | 1347 | naive go bindings to the CPython2 C-API | 10 months ago |
| [anko](https://github.com/mattn/anko) | 1207 | Scriptable interpreter written in golang | 11 days ago |
| [cel-go](https://github.com/google/cel-go) | 1050 | Fast, portable, non-Turing complete expression evaluation with gradual typing (Go) | 3 hours ago |
| [core](https://github.com/metacall/core) | 890 | MetaCall: The ultimate polyglot programming experience. | 12 hours ago |
| [go-php](https://github.com/deuill/go-php) | 837 | PHP bindings for the Go programming language (Golang) | 3 months ago |
| [go-duktape](https://github.com/olebedev/go-duktape) | 780 | [abandoned] Duktape JavaScript engine bindings for Go | 4 months ago |
| [golua](https://github.com/aarzilli/golua) | 581 | Go bindings for Lua C API - in progress | 3 months ago |
| [gisp](https://github.com/jcla1/gisp) | 479 | Simple LISP in Go | 4 years ago |
| [gval](https://github.com/PaesslerAG/gval) | 453 | Expression evaluation in golang | 2 months ago |
| [gentee](https://github.com/gentee/gentee) | 88 | Gentee - script programming language for automation. It uses VM and compiler written in Go (Golang). | 23 days ago |
| [binder](https://github.com/alexeyco/binder) | 56 | High level go to Lua binder. Write less, do more. | 4 years ago |
| [purl](https://github.com/ian-kent/purl) | 34 | Perl, but fluffy like a cat! | 7 years ago |
| [ngaro](https://github.com/db47h/ngaro) | 22 | An embeddable implementation of the Ngaro Virtual Machine for Go programs | 4 years ago |
| [ecal](https://github.com/krotik/ecal) | 18 | A simple embeddable scripting language which supports concurrent event processing. | 9 months ago |


### [Error Handling](#Error-Handling)
* Libraries for handling errors.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [errors](https://github.com/pkg/errors) | 7602 | Simple error handling primitives | 3 months ago |
| [go-multierror](https://github.com/hashicorp/go-multierror) | 1506 | A Go (golang) package for representing a list of errors as a single error. | a month ago |
| [eris](https://github.com/rotisserie/eris) | 931 | eris provides a better way to handle, trace, and log errors in Go 🎆 | 12 days ago |
| [errorx](https://github.com/joomcode/errorx) | 811 | A comprehensive error handling library for Go | a month ago |
| [tracerr](https://github.com/ztrue/tracerr) | 704 | Golang errors with stack trace and source fragments. | 3 years ago |
| [errlog](https://github.com/snwfdhmp/errlog) | 401 | Reduce debugging time while programming Go. Use static and stack-trace analysis to determine which func call causes the error. | a year ago |
| [emperror](https://github.com/emperror/emperror) | 243 | The Emperor takes care of all errors personally | a year ago |
| [errors](https://github.com/emperror/errors) | 116 | Drop-in replacement for the standard library errors package and github.com/pkg/errors | 22 days ago |
| [errors](https://github.com/bnkamalesh/errors) | 27 | A drop-in replacement for Go errors, with some added sugar! Unwrap user-friendly messages, HTTP status code, easy wrapping with multiple error types. | 2 months ago |
| [falcon](https://github.com/ThundR67/falcon) | 7 | A Simple Yet Highly Powerful Package For Error Handling | 2 years ago |
| [errors](https://github.com/PumpkinSeed/errors) | 4 | Simple and efficient error package  | 2 years ago |
| [errors](https://github.com/neuronlabs/errors) | 3 | Simple golang error handling with classification primitives. | 3 years ago |


### [File Handling](#File-Handling)
* Libraries for handling files and file systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [afero](https://github.com/spf13/afero) | 4252 | A FileSystem Abstraction System for Go | 11 days ago |
| [pdfcpu](https://github.com/pdfcpu/pdfcpu) | 2982 | A PDF processor written in Go. | 5 days ago |
| [gdu](https://github.com/dundee/gdu) | 1633 | Fast disk usage analyzer with console interface written in Go | 4 days ago |
| [todo.txt](https://github.com/todotxt/todo.txt) | 1418 | ‼️ A complete primer on the whys and hows of todo.txt. | 2 months ago |
| [notify](https://github.com/rjeczalik/notify) | 718 | File system event notification library on steroids. | 6 months ago |
| [copy](https://github.com/otiai10/copy) | 394 | Go copy directory recursively | 2 months ago |
| [bigfile](https://github.com/bigfile/bigfile) | 217 | Bigfile -- a file transfer system that supports http, rpc and ftp protocol   https://bigfile.site   | 2 years ago |
| [afs](https://github.com/viant/afs) | 174 | Abstract File Storage | 4 months ago |
| [vfs](https://github.com/C2FO/vfs) | 152 | Pluggable, extensible virtual file system for Go | 41 minutes ago |
| [fs](https://github.com/kr/fs) | 129 | Package fs provides filesystem-related functions. | a year ago |
| [go-exiftool](https://github.com/barasher/go-exiftool) | 101 | Golang wrapper for Exiftool : extract as much metadata as possible (EXIF, ...) from files (pictures, pdf, office documents, ...) | 13 days ago |
| [go-csv-tag](https://github.com/artonge/go-csv-tag) | 95 | Read csv file from go using tags | 3 months ago |
| [opc](https://github.com/qmuntal/opc) | 70 | Go implementation of the Open Packaging Conventions (OPC) | a year ago |
| [skywalker](https://github.com/dixonwille/skywalker) | 70 | A package to allow one to concurrently go through a filesystem with ease | 6 months ago |
| [checksum](https://github.com/codingsince1985/checksum) | 53 | Compute message digest for large files in Go | 3 months ago |
| [tarfs](https://github.com/posener/tarfs) | 49 | An implementation of the FileSystem interface for tar files. | 2 years ago |
| [parquet](https://github.com/parsyl/parquet) | 47 | A library for reading and writing parquet files. | 4 months ago |
| [baraka](https://github.com/xis/baraka) | 40 | a tool for handling file uploads simple | 5 days ago |
| [flop](https://github.com/homedepot/flop) | 31 | Go file operations library chasing GNU APIs. | 2 months ago |
| [go-gtfs](https://github.com/artonge/go-gtfs) | 31 | Load GTFS files in golang | a year ago |
| [gut](https://github.com/1set/gut) | 22 | 🍱 yet another collection of go utilities & tools | a year ago |
| [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) | 15 | copy files for humans | 2 years ago |
| [todotxt](https://github.com/1set/todotxt) | 12 | Parser for todo.txt files in Go ✅ | 18 days ago |
| [higgs](https://github.com/dastoori/higgs) | 8 | A tiny cross-platform Go library to hide/unhide files and directories | 19 days ago |
| [pathtype](https://github.com/jonchun/pathtype) | 8 | Add a type for paths in Go. | 6 months ago |


### [Financial](#Financial)
* Packages for accounting and finance.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ticker](https://github.com/achannarasappa/ticker) | 4108 | Terminal stock ticker with live updates and position tracking | 21 days ago |
| [decimal](https://github.com/shopspring/decimal) | 3725 | Arbitrary-precision fixed-point decimal numbers in go | a month ago |
| [go-money](https://github.com/Rhymond/go-money) | 1050 | Go implementation of Fowler's Money pattern | 15 days ago |
| [accounting](https://github.com/leekchan/accounting) | 709 | money and currency formatting for golang | a month ago |
| [techan](https://github.com/sdcoffey/techan) | 595 | Technical Analysis Library for Golang | 3 months ago |
| [go-finance](https://github.com/FlashBoys/go-finance) | 535 | :warning: Deprecrated in favor of https://github.com/piquette/finance-go  | 4 years ago |
| [ach](https://github.com/moov-io/ach) | 287 | ACH implements a reader, writer, and validator for Automated Clearing House (ACH) files. The HTTP server is available in a Docker image and the Go package is available. | 19 days ago |
| [currency](https://github.com/bojanz/currency) | 275 | Currency handling for Go. | 17 days ago |
| [orderbook](https://github.com/i25959341/orderbook) | 243 | Matching Engine for Limit Order Book in Golang | 9 months ago |
| [go-finance](https://github.com/alpeb/go-finance) | 123 | Go library containing a collection of financial functions for time value of money (annuities), cash flow, interest rate conversions, bonds and depreciation calculations. | 2 months ago |
| [transaction](https://github.com/claygod/transaction) | 103 | Embedded database for accounts transactions. | 7 months ago |
| [ofxgo](https://github.com/aclindsa/ofxgo) | 96 | Golang library for querying and parsing OFX | 4 months ago |
| [vat](https://github.com/dannyvankooten/vat) | 86 | Go package for dealing with EU VAT. Does VAT number validation & rates retrieval. | 22 days ago |
| [sleet](https://github.com/BoltApp/sleet) | 82 | Payment abstraction library - one interface for multiple payment processors ( inspired by Ruby's ActiveMerchant ) | 11 hours ago |
| [go-finnhub](https://github.com/m1/go-finnhub) | 64 | Simple and easy to use client for stock market, forex and crypto data from finnhub.io written in Go. Access real-time financial market data from 60+ stock exchanges, 10 forex brokers, and 15+ crypto exchanges | 2 years ago |
| [currency](https://github.com/bnkamalesh/currency) | 44 | A currency computations package. | 3 months ago |
| [fastme](https://github.com/newity/fastme) | 27 |  | 5 months ago |
| [payme](https://github.com/jovandeginste/payme) | 10 | QR code generator (ASCII & PNG) for SEPA payments | 2 months ago |
| [go-finance](https://github.com/pieterclaerhout/go-finance) | 6 | Finance related Go functions (e.g. exchange rates, VAT number checking, …) | 2 years ago |


### [Forms](#Forms)
* Libraries for working with forms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nosurf](https://github.com/justinas/nosurf) | 1253 | CSRF protection middleware for Go. | a year ago |
| [binding](https://github.com/mholt/binding) | 786 | Reflectionless data binding for Go's net/http (not actively maintained) | 4 years ago |
| [csrf](https://github.com/gorilla/csrf) | 759 | gorilla/csrf provides Cross Site Request Forgery (CSRF) prevention middleware for Go web applications & services 🔒 | a month ago |
| [form](https://github.com/go-playground/form) | 509 | :steam_locomotive: Decodes url.Values into Go value(s) and Encodes Go value(s) into url.Values. Dual Array and Full map support. | 7 months ago |
| [conform](https://github.com/leebenson/conform) | 250 | Trims, sanitizes & scrubs data based on struct tags (go, golang) | 5 months ago |
| [formam](https://github.com/monoculum/formam) | 166 | a package for decode form's values into struct in Go | 4 months ago |
| [forms](https://github.com/albrow/forms) | 129 | A lightweight go library for parsing form data or json from an http.Request. | 5 years ago |
| [qs](https://github.com/sonh/qs) | 60 | Go module for encoding structs into URL query parameters | 8 months ago |
| [bind](https://github.com/robfig/bind) | 27 |  | 8 years ago |
| [queryparam](https://github.com/TomWright/queryparam) | 12 | Go package to easily convert a URL's query parameters/values into usable struct values of the correct types. | a year ago |


### [Functional](#Functional)
* Packages to support functional programming in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-underscore](https://github.com/tobyhede/go-underscore) | 1226 |  Helpfully Functional Go -  A useful collection of Go utilities. Designed for programmer happiness.  | 3 years ago |
| [fpGo](https://github.com/TeaEntityLab/fpGo) | 234 | Monad, Functional Programming features for Golang | a month ago |
| [gofp](https://github.com/rbrahul/gofp) | 109 | A super simple Lodash like utility library with essential functions that empowers the development in Go | a year ago |
| [fuego](https://github.com/seborama/fuego) | 103 | Functional Experiment in Golang | a year ago |


### [Game Development](#Game-Development)
* Awesome game development libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ebiten](https://github.com/hajimehoshi/ebiten) | 6045 | A dead simple 2D game library for Go | 11 hours ago |
| [leaf](https://github.com/name5566/leaf) | 4292 | A game server framework in Go (golang) | 7 months ago |
| [pixel](https://github.com/faiface/pixel) | 3825 | A hand-crafted 2D game library in Go | 4 months ago |
| [goworld](https://github.com/xiaonanln/goworld) | 2045 | Scalable Distributed Game Server Engine with Hot Swapping in Golang | 8 months ago |
| [nano](https://github.com/lonng/nano) | 1946 | Lightweight, facility, high performance golang based game server framework | 7 months ago |
| [engine](https://github.com/g3n/engine) | 1847 | Go 3D Game Engine (http://g3n.rocks) | 11 days ago |
| [go-sdl2](https://github.com/veandco/go-sdl2) | 1710 | SDL2 binding for Go | a month ago |
| [engo](https://github.com/EngoEngine/engo) | 1476 | Engo is an open-source 2D game engine written in Go. | 3 months ago |
| [pitaya](https://github.com/topfreegames/pitaya) | 1336 | Scalable game server framework with clustering support and client libraries for iOS, Android, Unity and others through the C SDK. | 5 days ago |
| [termloop](https://github.com/JoelOtter/termloop) | 1262 | Terminal-based game engine for Go, built on top of Termbox | 6 months ago |
| [gonet](https://github.com/xtaci/gonet) | 1165 | A Game Server Skeleton in golang. | 5 years ago |
| [oak](https://github.com/oakmound/oak) | 1088 | A pure Go game engine | 2 days ago |
| [raylib-go](https://github.com/gen2brain/raylib-go) | 737 | Go bindings for raylib, a simple and easy-to-use library to enjoy videogames programming. | a month ago |
| [engine](https://github.com/azul3d/engine) | 530 | Azul3D - A 3D game engine written in Go! | 4 months ago |
| [go-astar](https://github.com/beefsack/go-astar) | 483 | Go implementation of the A* search algorithm | 21 days ago |
| [go3d](https://github.com/ungerik/go3d) | 222 | A performance oriented 2D/3D math package for Go | a month ago |
| [prototype](https://github.com/gonutz/prototype) | 68 | Simple 2D game prototyping framework. | 2 months ago |
| [tile](https://github.com/kelindar/tile) | 42 | Tile is a 2D grid engine, built with data and cache friendly ways, includes pathfinding and observers. | 2 months ago |


### [Generation and Generics](#Generation-and-Generics)
* Tools to enhance the language with features like generics via code generation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-linq](https://github.com/ahmetb/go-linq) | 2859 | .NET LINQ capabilities in Go | 3 months ago |
| [jennifer](https://github.com/dave/jennifer) | 2312 | Jennifer is a code generator for Go | 2 months ago |
| [gen](https://github.com/clipperhouse/gen) | 1353 | Type-driven code generation for Go | 2 years ago |
| [goderive](https://github.com/awalterschulze/goderive) | 962 | Derives and generates mundane golang functions that you do not want to maintain yourself | 2 months ago |
| [gowrap](https://github.com/hexdigest/gowrap) | 576 | GoWrap is a command line tool for generating decorators for Go interfaces | 18 days ago |
| [interfaces](https://github.com/rjeczalik/interfaces) | 330 | Code generation tools for Go. | 10 months ago |
| [go-enum](https://github.com/abice/go-enum) | 290 | An enum generator for go | 6 days ago |
| [goverter](https://github.com/jmattheis/goverter) | 101 | Generate type-safe Go converters by simply defining an interface | a month ago |
| [pkgreflect](https://github.com/ungerik/pkgreflect) | 99 | A Go preprocessor for package scoped reflection | 4 years ago |
| [efaceconv](https://github.com/t0pep0/efaceconv) | 51 |  | 4 years ago |
| [gotype](https://github.com/wzshiming/gotype) | 36 | Golang source code parsing, usage like reflect package | 6 months ago |
| [GENERIS](https://github.com/senselogic/GENERIS) | 31 | Versatile Go code generator. | 8 hours ago |
| [go-xray](https://github.com/pieterclaerhout/go-xray) | 22 | Helpers for making the use of reflection easier | 2 years ago |
| [typeregistry](https://github.com/xiaoxin01/typeregistry) | 13 | create type dynamically in Golang | 2 years ago |


### [Geographic](#Geographic)
* Geographic tools and servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tile38](https://github.com/tidwall/tile38) | 7979 | Real-time Geospatial and Geofencing | 4 days ago |
| [geo](https://github.com/golang/geo) | 1326 | S2 geometry library in Go | 3 months ago |
| [mbtileserver](https://github.com/consbio/mbtileserver) | 310 | Basic Go server for mbtiles | 19 days ago |
| [osm](https://github.com/paulmach/osm) | 193 | General purpose library for reading, writing and working with OpenStreetMap data | 9 days ago |
| [wgs84](https://github.com/wroge/wgs84) | 72 | A pure Go package for coordinate transformations. | 2 months ago |
| [geoserver](https://github.com/hishamkaram/geoserver) | 67 | geoserver is a Go library for manipulating a GeoServer instance via the GeoServer REST API. | 3 months ago |
| [godal](https://github.com/airbusgeo/godal) | 61 | golang wrapper for github.com/OSGEO/gdal | 8 hours ago |
| [simplefeatures](https://github.com/peterstace/simplefeatures) | 47 | Simple Features is a pure Go Implementation of the OpenGIS Simple Feature Access Specification | 8 days ago |
| [gismanager](https://github.com/hishamkaram/gismanager) | 41 | Publish Your GIS Data(Vector Data) to PostGIS and Geoserver | 3 years ago |
| [pbf](https://github.com/maguro/pbf) | 32 | OpenStreetMap PBF golang parser | 10 months ago |
| [s2-geojson](https://github.com/pantrif/s2-geojson) | 16 | Draw a polygon on the map or paste a geoJSON and explore how the s2.RegionCoverer covers it with S2 cells depending on the min and max levels | 2 years ago |


### [Go Compilers](#Go-Compilers)
* Tools for compiling Go to other languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopherjs](https://github.com/gopherjs/gopherjs) | 10885 | A compiler from Go to JavaScript for running Go code in a browser | 7 hours ago |
| [tardisgo](https://github.com/tardisgo/tardisgo) | 417 | Golang->Haxe->CPP/CSharp/Java/JavaScript transpiler   | 5 years ago |
| [c4go](https://github.com/Konstantin8105/c4go) | 298 | Transpiling C code to Go code | 3 months ago |
| [f4go](https://github.com/Konstantin8105/f4go) | 31 | Transpiling fortran code to golang code | 3 months ago |


### [Goroutines](#Goroutines)
* Tools for managing and working with Goroutines.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ants](https://github.com/panjf2000/ants) | 7652 | 🐜🐜🐜 ants is a high-performance and low-cost goroutine pool in Go, inspired by fasthttp./ ants 是一个高性能且低损耗的 goroutine 池。 | 3 days ago |
| [tunny](https://github.com/Jeffail/tunny) | 2854 | A goroutine pool for Go | 19 days ago |
| [goworker](https://github.com/benmanns/goworker) | 2634 | goworker is a Go-based background worker that runs 10 to 100,000* times faster than Ruby-based workers. | 2 months ago |
| [workerpool](https://github.com/gammazero/workerpool) | 729 | Concurrency limiting goroutine pool | 11 days ago |
| [grpool](https://github.com/ivpusic/grpool) | 676 | Lightweight Goroutine pool | 3 years ago |
| [pool](https://github.com/go-playground/pool) | 671 | :speedboat: a limited consumer goroutine or unlimited goroutine pool for easier goroutine handling and cancellation | 8 months ago |
| [pond](https://github.com/alitto/pond) | 457 | 🔘 Minimalistic and High-performance goroutine worker pool written in Go | a month ago |
| [gowp](https://github.com/xxjwxc/gowp) | 360 | golang worker pool , Concurrency limiting goroutine pool | 9 months ago |
| [go-floc](https://github.com/workanator/go-floc) | 225 | Floc: Orchestrate goroutines with ease. | 6 months ago |
| [go-flow](https://github.com/kamildrazkiewicz/go-flow) | 185 | Simply way to control goroutines execution order based on dependencies | 3 years ago |
| [semaphore](https://github.com/marusama/semaphore) | 139 | Fast resizable golang semaphore primitive | a year ago |
| [go-workers](https://github.com/catmullet/go-workers) | 134 | 👷 Library for safely running groups of workers concurrently or consecutively that require input and output through channels | a month ago |
| [artifex](https://github.com/mborders/artifex) | 126 | Simple in-memory job queue for Golang using worker-based dispatching | a year ago |
| [errgroup](https://github.com/neilotoole/errgroup) | 111 | errgroup with goroutine worker limits | 5 months ago |
| [async](https://github.com/StudioSol/async) | 100 | A safe way to execute functions asynchronously, recovering them in case of panic. It also provides an error stack aiming to facilitate fail causes discovery. | a year ago |
| [cyclicbarrier](https://github.com/marusama/cyclicbarrier) | 93 | CyclicBarrier golang implementation | 2 years ago |
| [semaphore](https://github.com/kamilsk/semaphore) | 90 | 🚦 Semaphore pattern implementation with timeout of lock/unlock operations. | 2 years ago |
| [gpool](https://github.com/sherifabdlnaby/gpool) | 83 | gpool - a generic context-aware resizable goroutines pool to bound concurrency based on semaphore.  | 2 years ago |
| [worker-pool](https://github.com/vardius/worker-pool) | 81 | Go simple async worker pool | a year ago |
| [gollback](https://github.com/vardius/gollback) | 77 | Go asynchronous simple function utilities, for managing execution of closures and callbacks | a month ago |
| [Hunch](https://github.com/AaronJan/Hunch) | 75 | Hunch provides functions like: All, First, Retry, Waterfall etc., that makes asynchronous flow control more intuitive. | a year ago |
| [threadpool](https://github.com/shettyh/threadpool) | 67 | Golang simple thread pool implementation | 2 years ago |
| [routine](https://github.com/x-mod/routine) | 48 | go routine control, abstraction of the Main and some useful Executors.如果你不会管理Goroutine的话，用它 | a year ago |
| [goccm](https://github.com/zenthangplus/goccm) | 44 | Limits the number of goroutines that are allowed to run concurrently | 4 months ago |
| [nursery](https://github.com/arunsworld/nursery) | 39 | Structured Concurrency in Go | 7 months ago |
| [async](https://github.com/reugn/async) | 37 | Synchronization and asynchronous computation utilities library for Go | 3 months ago |
| [kyoo](https://github.com/dirkaholic/kyoo) | 37 | Unlimited job queue for go, using a pool of concurrent workers processing the job queue entries | 2 years ago |
| [parallel-fn](https://github.com/rafaeljesus/parallel-fn) | 32 | Run functions in parallel :comet: | 4 years ago |
| [gohive](https://github.com/loveleshsharma/gohive) | 30 | 🐝 A Highly Performant and easy to use goroutine pool for Go | 3 months ago |
| [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) | 27 | A sync.WaitGroup with error handling and concurrency control | 2 years ago |
| [go-trylock](https://github.com/subchen/go-trylock) | 25 | TryLock support on read-write lock for Golang | 9 months ago |
| [stl](https://github.com/ssgreg/stl) | 23 | Software Transactional Locks | 2 years ago |
| [channelify](https://github.com/ddelizia/channelify) | 17 | Make functions return a channel for parallel processing via go routines. | a year ago |
| [gowl](https://github.com/hamed-yousefi/gowl) | 14 | Gowl is a process management and process monitoring tool at once. An infinite worker pool gives you the ability to control the pool and processes and monitor their status. | 7 months ago |
| [conexec](https://github.com/ITcathyh/conexec) | 12 | A concurrent toolkit to help execute funcs concurrently in an efficient and safe way. It supports specifying the overall timeout to avoid blocking. | 2 years ago |
| [queue](https://github.com/AnikHasibul/queue) | 12 | package queue gives you a queue group accessibility. Helps you to limit goroutines, wait for the end of the all goroutines and much more. | 3 years ago |
| [execpool](https://github.com/hexdigest/execpool) | 8 | A pool that spins up a given number of processes in advance and attaches stdin and stdout when needed. Very similar to FastCGI but works for any command. | 7 months ago |
| [hands](https://github.com/duanckham/hands) | 8 | Hands is a process controller used to control the execution and return strategies of multiple goroutines. | 2 years ago |
| [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) | 7 |  | a year ago |
| [go-tools](https://github.com/nikhilsaraf/go-tools) | 6 | A collection of tools for Golang | 3 years ago |
| [breaker](https://github.com/kamilsk/breaker) | 3 | 🚧 Flexible mechanism to make execution flow interruptible. | 7 months ago |


### [GUI](#GUI)
* Libraries for building GUI Applications.

#### [Toolkits](#Toolkits)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fyne](https://github.com/fyne-io/fyne) | 15699 | Cross platform GUI in Go inspired by Material Design | 2 minutes ago |
| [webview](https://github.com/webview/webview) | 9569 | Tiny cross-platform webview library for C/C++/Golang. Uses WebKit (Gtk/Cocoa) and Edge (Windows) | 2 days ago |
| [qt](https://github.com/therecipe/qt) | 9063 | Qt binding for Go (Golang) with support for Windows / macOS / Linux / FreeBSD / Android / iOS / Sailfish OS / Raspberry Pi / AsteroidOS / Ubuntu Touch / JavaScript / WebAssembly | a year ago |
| [ui](https://github.com/andlabs/ui) | 8074 | Platform-native GUI library for Go. | 7 months ago |
| [walk](https://github.com/lxn/walk) | 5927 | A Windows GUI toolkit for the Go Programming Language | 7 months ago |
| [go-app](https://github.com/maxence-charriere/go-app) | 5870 | A package to build progressive web apps with Go programming language and WebAssembly. | a month ago |
| [go-astilectron](https://github.com/asticode/go-astilectron) | 4239 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by Electron) | 2 months ago |
| [go-sciter](https://github.com/sciter-sdk/go-sciter) | 2326 | Golang bindings of Sciter: the Embeddable HTML/CSS/script engine for modern UI development | 10 hours ago |
| [gotk3](https://github.com/gotk3/gotk3) | 1694 | Go bindings for GTK3 | 2 months ago |
| [gowd](https://github.com/dtylman/gowd) | 344 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by nwjs) | 3 years ago |


#### [Interaction](#Interaction)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [robotgo](https://github.com/go-vgo/robotgo) | 7294 | RobotGo, Go Native cross-platform GUI automation  @vcaesar | a day ago |
| [systray](https://github.com/getlantern/systray) | 2148 | a cross platfrom Go library to place an icon and menu in the notification area | 3 days ago |
| [gosx-notifier](https://github.com/deckarep/gosx-notifier) | 560 | gosx-notifier is a Go framework for sending desktop notifications to OSX 10.8 or higher | 2 years ago |
| [trayhost](https://github.com/shurcooL/trayhost) | 222 | Cross-platform Go library to place an icon in the host operating system's taskbar. | 2 years ago |
| [zenity](https://github.com/ncruces/zenity) | 218 | Zenity dialogs for Golang, Windows, macOS | 4 months ago |
| [go-appindicator](https://github.com/dawidd6/go-appindicator) | 19 | :traffic_light: Go bindings for libappindicator3 C library | a year ago |
| [activity-tracker](https://github.com/prashantgupta24/activity-tracker) | 14 | A library to notify about any (pluggable) activity on your machine, and let you take action as needed | 3 years ago |
| [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) | 12 | macOS Sleep/ Wake notifications in golang | 3 years ago |


### [Hardware](#Hardware)
* Libraries, tools, and tutorials for interacting with hardware.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [arduino-cli](https://github.com/arduino/arduino-cli) | 3273 | Arduino command line tool | 13 hours ago |
| [go-rpio](https://github.com/stianeikeland/go-rpio) | 1809 | :electric_plug: Raspberry Pi GPIO library for go-lang | a month ago |
| [ghw](https://github.com/jaypipes/ghw) | 1113 | Golang hardware discovery/inspection library | 17 days ago |
| [emgo](https://github.com/ziutek/emgo) | 962 | Emgo: Bare metal Go (language for programming embedded systems) | 2 months ago |
| [sysinfo](https://github.com/zcalusic/sysinfo) | 320 | Sysinfo is a Go library providing Linux OS / kernel / hardware system information. | 16 days ago |
| [goroslib](https://github.com/aler9/goroslib) | 160 | ROS client library for the Go programming language | 2 months ago |
| [go-osc](https://github.com/hypebeast/go-osc) | 140 | Open Sound Control (OSC) library for Golang. Implemented in pure Go. | 8 days ago |
| [joystick](https://github.com/0xcafed00d/joystick) | 30 | Go Joystick API | 2 years ago |


### [Images](#Images)
* Libraries for manipulating images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocv](https://github.com/hybridgroup/gocv) | 4625 | Go package for computer vision using OpenCV 4 and beyond. | 9 days ago |
| [imaginary](https://github.com/h2non/imaginary) | 4225 | Fast, simple, scalable, Docker-ready HTTP microservice for high-level image processing | 19 hours ago |
| [imaging](https://github.com/disintegration/imaging) | 4110 | Imaging is a simple image processing package for Go | a year ago |
| [bild](https://github.com/anthonynsimon/bild) | 3473 | Image processing algorithms in pure Go | 2 months ago |
| [gg](https://github.com/fogleman/gg) | 3262 | Go Graphics - 2D rendering in Go with a simple API. | 3 months ago |
| [ln](https://github.com/fogleman/ln) | 3037 | 3D line art engine. | 3 years ago |
| [resize](https://github.com/nfnt/resize) | 2785 | Pure golang image resizing  | a year ago |
| [pt](https://github.com/fogleman/pt) | 1994 | A path tracer written in Go. | 3 years ago |
| [bimg](https://github.com/h2non/bimg) | 1803 | Go package for fast high-level image processing powered by libvips C library | 20 hours ago |
| [svgo](https://github.com/ajstarks/svgo) | 1803 | Go Language Library for SVG generation | 4 months ago |
| [picfit](https://github.com/thoas/picfit) | 1609 | An image resizing server written in Go | a month ago |
| [smartcrop](https://github.com/muesli/smartcrop) | 1605 | smartcrop finds good image crops for arbitrary crop sizes | 24 days ago |
| [gift](https://github.com/disintegration/gift) | 1505 | Go Image Filtering Toolkit | a year ago |
| [imagick](https://github.com/gographics/imagick) | 1402 | Go binding to ImageMagick's MagickWand C API | 5 months ago |
| [gowitness](https://github.com/sensepost/gowitness) | 1366 | 🔍 gowitness - a golang, web screenshot utility using Chrome Headless | 16 days ago |
| [go-opencv](https://github.com/go-opencv/go-opencv) | 1262 | Go bindings for OpenCV / 2.x API in gocv / 1.x API in opencv | 3 years ago |
| [geopattern](https://github.com/pravj/geopattern) | 1165 | :triangular_ruler: Create beautiful generative image patterns from a string in golang. | 3 years ago |
| [stegify](https://github.com/DimitarPetrov/stegify) | 986 | 🔍 Go tool for LSB steganography, capable of hiding any file within an image. | 2 years ago |
| [canvas](https://github.com/tdewolff/canvas) | 913 | Cairo in Go: vector to raster, SVG, PDF, EPS, WASM, OpenGL, Gio, etc. | 20 days ago |
| [govips](https://github.com/davidbyttow/govips) | 635 | A lightning fast image processing and resizing library for Go | a day ago |
| [image2ascii](https://github.com/qeesung/image2ascii) | 632 | :foggy: Convert image to ASCII | 7 months ago |
| [draft](https://github.com/lucasepe/draft) | 520 | Generate High Level Cloud Architecture diagrams using YAML syntax. | 5 months ago |
| [govatar](https://github.com/o1egl/govatar) | 479 | Avatar generation library for GO language | a year ago |
| [goimagehash](https://github.com/corona10/goimagehash) | 467 | Go Perceptual image hashing package | a year ago |
| [mort](https://github.com/aldor007/mort) | 444 | Storage and image processing server written in Go | 4 days ago |
| [go-nude](https://github.com/koyachi/go-nude) | 343 | Nudity detection with Go. | 3 years ago |
| [rez](https://github.com/bamiaux/rez) | 203 | Image resizing in pure Go and SIMD | 5 years ago |
| [darkroom](https://github.com/gojek/darkroom) | 185 |  | 8 months ago |
| [mergi](https://github.com/noelyahan/mergi) | 163 | go library for image programming (merge, crop, resize, watermark, animate, ease, transit) | 2 years ago |
| [gltf](https://github.com/qmuntal/gltf) | 150 | :eyeglasses: Go library for [d]encoding glTF 2.0 files | 4 days ago |
| [img](https://github.com/hawx/img) | 138 | A selection of image manipulation tools | 7 years ago |
| [steganography](https://github.com/auyer/steganography) | 129 | Pure Golang Library that allows simple LSB steganography on images | 7 months ago |
| [go-cairo](https://github.com/ungerik/go-cairo) | 120 | Go binding for the cairo graphics library | a month ago |
| [cameron](https://github.com/aofei/cameron) | 78 | An avatar generator for Go. | 3 months ago |
| [go-gd](https://github.com/bolknote/go-gd) | 53 | Go bingings for GD (http://www.boutell.com/gd/) | 4 years ago |
| [gridder](https://github.com/shomali11/gridder) | 52 | A Grid based 2D Graphics library | 5 months ago |
| [go-webp](https://github.com/kolesa-team/go-webp) | 44 | Simple and fast webp library for golang | 5 months ago |
| [goimghdr](https://github.com/corona10/goimghdr) | 38 | The imghdr module determines the type of image contained in a file for go | 3 years ago |
| [webp-server](https://github.com/mehdipourfar/webp-server) | 33 | Simple and minimal image server capable of storing, resizing, converting and caching images. | a year ago |
| [tga](https://github.com/ftrvxmtrx/tga) | 29 | Go package for decoding and encoding TARGA image format | 7 years ago |
| [go-webcolors](https://github.com/jyotiska/go-webcolors) | 26 | Port of webcolors library from Python to Go | 6 years ago |
| [mpo](https://github.com/donatj/mpo) | 8 | JPEG-MPO Decoder / Converter Library and CLI Tool | 2 years ago |
| [scout](https://github.com/jonoton/scout) | 2 | Scout is a standalone open source software solution for DIY video security. | 4 months ago |


### [IoT -> Internet of Things](#IoT)
* Libraries for programming devices of the IoT.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gobot](https://github.com/hybridgroup/gobot) | 7618 | Golang framework for robotics, drones, and the Internet of Things (IoT) | a month ago |
| [flogo](https://github.com/TIBCOSoftware/flogo) | 1923 | Project Flogo is an open source ecosystem of opinionated  event-driven capabilities to simplify building efficient & modern serverless functions, microservices & edge apps. | a year ago |
| [mainflux](https://github.com/mainflux/mainflux) | 1699 | Industrial IoT Messaging and Device Management Platform | 15 hours ago |
| [gatt](https://github.com/paypal/gatt) | 1008 | Gatt is a Go package for building Bluetooth Low Energy peripherals | 2 years ago |
| [heedy](https://github.com/heedy/heedy) | 322 | An aggregator for personal metrics, and an extensible analysis engine | an hour ago |
| [devices](https://github.com/goiot/devices) | 251 | Suite of libraries for IoT devices (written in Go), experimental for x/exp/io | 6 years ago |
| [sensorbee](https://github.com/sensorbee/sensorbee) | 210 | Lightweight stream processing engine for IoT | 2 years ago |
| [huego](https://github.com/amimof/huego) | 198 | An extensive Philips Hue client library for Go with an emphasis on simplicity | a day ago |
| [iot](https://github.com/vaelen/iot) | 55 | A Go client for Google IoT Core | 2 years ago |
| [eywa](https://github.com/xcodersun/eywa) | 52 | Make IoT a lot more fun with data.  | 5 years ago |


### [Job Scheduler](#Job-Scheduler)
* Libraries for scheduling jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocron](https://github.com/jasonlvhit/gocron) | 2851 | A Golang Job Scheduling Package. | 6 months ago |
| [gocron](https://github.com/go-co-op/gocron) | 1586 | Easy and fluent Go cron scheduling. This is a fork from https://github.com/jasonlvhit/gocron | 12 hours ago |
| [jobrunner](https://github.com/bamzi/jobrunner) | 902 | Framework for performing work asynchronously, outside of the request flow | a year ago |
| [gron](https://github.com/roylee0704/gron) | 883 | gron, Cron Jobs in Go. | a year ago |
| [go-quartz](https://github.com/reugn/go-quartz) | 591 | Minimalist and zero-dependency scheduling library for Go | a month ago |
| [jobs](https://github.com/albrow/jobs) | 487 | A persistent and flexible background jobs library for go. | 4 years ago |
| [scheduler](https://github.com/carlescere/scheduler) | 379 | Job scheduling made easy. | a year ago |
| [go-cron](https://github.com/rk/go-cron) | 209 | A simple Cron library for go that can execute closures or functions at varying intervals, from once a second to once a year on a specific date and time. Primarily for web applications and long running daemons. | 2 years ago |
| [gronx](https://github.com/adhocore/gronx) | 183 | Lightweight, fast and dependency-free Cron expression parser (due checker), task scheduler and/or daemon for Golang (tested on v1.13 and above) and standalone usage | 4 months ago |
| [clockwerk](https://github.com/onatm/clockwerk) | 116 | Job Scheduling Library | 2 years ago |
| [leprechaun](https://github.com/kilgaloon/leprechaun) | 84 | You had one job, or more then one, which can be done in steps | 3 months ago |
| [tasks](https://github.com/madflojo/tasks) | 73 | Package tasks is an easy to use in-process scheduler for recurring tasks in Go | 7 days ago |
| [sched](https://github.com/romshark/sched) | 22 | A job scheduler for Go with the ability to fast-forward time. | 7 months ago |
| [cronticker](https://github.com/krayzpipes/cronticker) | 2 | Golang ticker that works with Cron scheduling. | a year ago |


### [JSON](#JSON)
* Libraries for working with JSON.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gjson](https://github.com/tidwall/gjson) | 9778 | Get JSON values quickly - JSON parser for Go | 15 days ago |
| [gojson](https://github.com/ChimeraCoder/gojson) | 2459 | Automatically generate Go (golang) struct definitions from example JSON | 7 months ago |
| [fastjson](https://github.com/valyala/fastjson) | 1451 | Fast JSON parser and validator for Go. No custom structs, no code generation, no reflection | 7 months ago |
| [ojg](https://github.com/ohler55/ojg) | 453 | Optimized JSON for Go | 2 months ago |
| [kazaam](https://github.com/qntfy/kazaam) | 219 | Arbitrary transformations of JSON in Golang | 7 months ago |
| [gojq](https://github.com/elgs/gojq) | 182 | JSON query in Golang | a year ago |
| [jsondiff](https://github.com/wI2L/jsondiff) | 151 | Compute the diff between two JSON documents as a series of RFC6902 (JSON Patch) operations | 6 months ago |
| [jettison](https://github.com/wI2L/jettison) | 117 | Highly configurable, fast JSON encoder for Go | 2 months ago |
| [ajson](https://github.com/spyzhov/ajson) | 108 | Abstract JSON for Golang with JSONPath support  | 5 hours ago |
| [gjo](https://github.com/skanehira/gjo) | 106 | Small utility to create JSON objects | 10 months ago |
| [jsongo](https://github.com/ricardolonga/jsongo) | 99 | Fluent API to make it easier to create Json objects. | 4 months ago |
| [json2go](https://github.com/m-zajac/json2go) | 96 | Create go type representation from json | 2 months ago |
| [jaydiff](https://github.com/yazgazan/jaydiff) | 84 | A JSON diff utility | a year ago |
| [jsonf](https://github.com/miolini/jsonf) | 63 | Console JSON formatter with query feature | a year ago |
| [ujson](https://github.com/olvrng/ujson) | 53 | µjson - A fast and minimal JSON parser and transformer that works on unstructured JSON | 6 months ago |
| [go-respond](https://github.com/nicklaw5/go-respond) | 45 | A Go package for handling common HTTP JSON responses. | 5 months ago |
| [mp](https://github.com/sanbornm/mp) | 44 | Simple Email Parser | 6 years ago |
| [jsoncolor](https://github.com/neilotoole/jsoncolor) | 27 | Colorized JSON output for Go | 4 months ago |
| [vjson](https://github.com/miladibra10/vjson) | 26 | vjson is a golang package that helps to validate JSON objects | 3 months ago |
| [ask](https://github.com/simonnilsson/ask) | 14 | A Go package that provides a simple way of accessing nested properties in maps and slices. | a year ago |
| [go-jsonerror](https://github.com/ddymko/go-jsonerror) | 12 | Small package which wraps error responses to follow jsonapi.org | 2 years ago |
| [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) | 12 | Go bindings based on the JSON API errors reference | 5 years ago |
| [dynjson](https://github.com/cocoonspace/dynjson) | 10 | Client-customizable JSON formats for dynamic APIs | 4 months ago |
| [jsonhal](https://github.com/RichardKnop/jsonhal) | 10 | A simple Go package to make custom structs marshal into HAL compatible JSON responses. | 2 years ago |
| [mapslice-json](https://github.com/ake-persson/mapslice-json) | 9 | Go MapSlice for ordered marshal/ unmarshal of maps in JSON | 7 months ago |
| [epoch](https://github.com/vtopc/epoch) | 8 | Contains primitives for marshaling/unmarshaling Unix timestamp/epoch to/from built-in time.Time type in JSON | a year ago |
| [ej](https://github.com/lucassscaravelli/ej) | 7 | Write and read JSON from different sources in one line | 2 years ago |
| [jzon](https://github.com/zerosnake0/jzon) | 6 | A golang json library inspired by jsoniter | a year ago |
| [jsonic](https://github.com/sinhashubham95/jsonic) | 5 | All you need with JSON | a year ago |
| [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) | 3 | The simple JSON parser with validation by condition | 4 months ago |


### [Logging](#Logging)
* Libraries for generating and working with log files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kit](https://github.com/go-kit/kit) | 22362 | A standard library for microservices. | 3 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 19898 | Structured, pluggable logging for Go. | 19 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 19898 | Structured, pluggable logging for Go. | 19 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 19898 | Structured, pluggable logging for Go. | 19 days ago |
| [zap](https://github.com/uber-go/zap) | 14951 | Blazing fast, structured, leveled logging in Go. | 2 days ago |
| [debug](https://github.com/debug-js/debug) | 10012 | A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers | a day ago |
| [zerolog](https://github.com/rs/zerolog) | 5878 | Zero Allocation JSON Logger | 13 days ago |
| [go-spew](https://github.com/davecgh/go-spew) | 4863 | Implements a deep pretty printer for Go data structures to aid in debugging | 2 months ago |
| [glog](https://github.com/golang/glog) | 3113 | Leveled execution logs for Go | 6 days ago |
| [lumberjack](https://github.com/natefinch/lumberjack) | 3096 | lumberjack is a log rolling package for Go | 22 days ago |
| [tail](https://github.com/hpcloud/tail) | 2276 | Go package for reading from continously updated files (tail -f) | a month ago |
| [seelog](https://github.com/cihub/seelog) | 1589 | Seelog is a native Go logging library that provides flexible asynchronous dispatching, filtering, and formatting. | 3 years ago |
| [log](https://github.com/apex/log) | 1209 | Structured logging package for Go. | 3 months ago |
| [log15](https://github.com/inconshreveable/log15) | 1037 | Structured, composable logging for Go | 4 months ago |
| [log](https://github.com/phuslu/log) | 416 | Structured Logging Made Easy | 23 days ago |
| [onelog](https://github.com/francoispqt/onelog) | 400 | Dead simple, super fast, zero allocation and modular logger for Golang | 3 years ago |
| [logxi](https://github.com/mgutz/logxi) | 348 | A 12-factor app logger built for performance and happy development | 2 years ago |
| [logutils](https://github.com/hashicorp/logutils) | 309 | Utilities for slightly better logging in Go (Golang). | 3 months ago |
| [log](https://github.com/go-playground/log) | 276 | :green_book: Simple, configurable and scalable Structured Logging for Go. | 2 years ago |
| [go-logger](https://github.com/apsdehal/go-logger) | 274 | Simple logger for Go programs. Allows custom formats for messages. | 3 years ago |
| [httpretty](https://github.com/henvic/httpretty) | 249 | Package httpretty prints the HTTP requests you make with Go pretty on your terminal. | a year ago |
| [rollingwriter](https://github.com/arthurkiller/rollingwriter) | 223 | Rolling writer is an IO util for auto rolling write in go. | 6 days ago |
| [sqldb-logger](https://github.com/simukti/sqldb-logger) | 211 | A logger for Go SQL database driver without modifying existing *sql.DB stdlib usage. | 14 days ago |
| [logur](https://github.com/logur/logur) | 151 | Logur is an opinionated collection of logging best practices | a year ago |
| [logger](https://github.com/azer/logger) | 149 | Minimalistic logging library for Go. | 3 months ago |
| [glg](https://github.com/kpango/glg) | 139 | Simple and blazing fast lockfree logging library for golang | 9 days ago |
| [xlog](https://github.com/rs/xlog) | 135 | xlog is a logger for net/context aware HTTP applications | a year ago |
| [ozzo-log](https://github.com/go-ozzo/ozzo-log) | 118 | A Go (golang) package providing high-performance asynchronous logging, message filtering by severity and category, and multiple message targets. | a year ago |
| [logvoyage](https://github.com/firstrow/logvoyage) | 90 | LogVoyage - logging SaaS written in GoLang | 5 years ago |
| [go-cronowriter](https://github.com/utahta/go-cronowriter) | 47 | Time based rotating file writer | a year ago |
| [log](https://github.com/alexcesaro/log) | 45 | Logging packages for Go | 6 years ago |
| [gologger](https://github.com/sadlil/gologger) | 40 | The Simplest and worst logging library ever written | 4 years ago |
| [gone](https://github.com/One-com/gone) | 39 | Golang packages for writing small daemons and servers. | 9 months ago |
| [go-log](https://github.com/ian-kent/go-log) | 38 | A logger, for Go | 4 years ago |
| [logex](https://github.com/chzyer/logex) | 38 | An golang log lib, supports tracking and level, wrap by standard log lib | 2 months ago |
| [noodlog](https://github.com/gyozatech/noodlog) | 35 | 🍜 Parametrized JSON logging library in Golang which lets you obfuscate sensitive data and marshal any kind of content. | 4 months ago |
| [go-log](https://github.com/siddontang/go-log) | 29 | a golang log lib supports level and multi handlers | 3 years ago |
| [journald](https://github.com/ssgreg/journald) | 29 | Go implementation of systemd Journal's native API for logging | a year ago |
| [logrusly](https://github.com/sebest/logrusly) | 27 | Loggly Hooks for GO Logrus logger | 7 months ago |
| [distillog](https://github.com/amoghe/distillog) | 25 | Logging, distilled | 4 years ago |
| [log](https://github.com/teris-io/log) | 24 | Structured log interface | 4 years ago |
| [mlog](https://github.com/jbrodriguez/mlog) | 24 | A simple logging module for go, with a rotating file feature and console logging. | 4 years ago |
| [gomol](https://github.com/aphistic/gomol) | 18 | Gomol is a library for structured, multiple-output logging for Go with extensible logging outputs | 3 years ago |
| [zkits-logger](https://github.com/edoger/zkits-logger) | 15 | A powerful zero-dependency json logger. | 2 months ago |
| [glo](https://github.com/lajosbencz/glo) | 14 | Logging library for Golang | 3 years ago |
| [logrusiowriter](https://github.com/cabify/logrusiowriter) | 13 | io.Writer implementation using logrus logger | 2 years ago |
| [logmatic](https://github.com/mborders/logmatic) | 12 | Colorized logger for Golang with dynamic log level configuration | a year ago |
| [go-log](https://github.com/subchen/go-log) | 11 | Simple and configurable Logging in Go, with level, formatters and writers | 4 years ago |
| [log](https://github.com/aerogo/log) | 9 | :memo: Logging with multiple output targets. | 2 years ago |
| [logdump](https://github.com/ewwwwwqm/logdump) | 9 | Package for multi-level logging | 4 years ago |
| [logo](https://github.com/mbndr/logo) | 9 | Golang logger to different configurable writers. | a year ago |
| [go-log](https://github.com/pieterclaerhout/go-log) | 8 | A logging library with strack traces, object dumping and optional timestamps | 2 years ago |
| [kemba](https://github.com/clok/kemba) | 7 | A tiny debug logging tool. Ideal for CLI tools and command applications. Inspired by https://github.com/visionmedia/debug | 2 months ago |
| [xlog](https://github.com/xfxdev/xlog) | 6 | plugin architecture and flexible log system for golang | 3 years ago |
| [yell](https://github.com/jfcg/yell) | 0 | Yet another minimalist logging library | 6 months ago |


### [Machine Learning](#Machine-Learning)
* Libraries for Machine Learning.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [golearn](https://github.com/sjwhitworth/golearn) | 8205 | Machine Learning for Go | a month ago |
| [gorse](https://github.com/zhenghaoz/gorse) | 5250 | An open source recommender system service written in Go | 3 days ago |
| [gorgonia](https://github.com/gorgonia/gorgonia) | 4387 | Gorgonia is a library that helps facilitate machine learning in Go. | 20 days ago |
| [m2cgen](https://github.com/BayesWitnesses/m2cgen) | 2018 | Transform ML models into a native code (Java, C, Python, Go, JavaScript, Visual Basic, C#, R, PowerShell, PHP, Dart, Haskell, Ruby, F#, Rust) with zero dependencies | 8 hours ago |
| [tfgo](https://github.com/galeone/tfgo) | 1887 | Tensorflow + Go, the gopher way | 5 months ago |
| [gosseract](https://github.com/otiai10/gosseract) | 1675 | Go package for OCR (Optical Character Recognition), by using Tesseract C++ library | 2 months ago |
| [goml](https://github.com/cdipaolo/goml) | 1309 | On-line Machine Learning in Go (and so much more) | 4 months ago |
| [eaopt](https://github.com/MaxHalford/eaopt) | 772 | :four_leaf_clover: Evolutionary optimization library for Go (genetic algorithm, partical swarm optimization, differential evolution) | 10 months ago |
| [bayesian](https://github.com/jbrukh/bayesian) | 727 | Naive Bayesian Classification for Golang. | 2 years ago |
| [CloudForest](https://github.com/ryanbressler/CloudForest) | 705 | Ensembles of decision trees in go/golang. | 12 days ago |
| [gobrain](https://github.com/goml/gobrain) | 511 | Neural Networks written in go | a year ago |
| [ocrserver](https://github.com/otiai10/ocrserver) | 457 | A simple OCR API server, seriously easy to be deployed by Docker, on Heroku as well | 6 months ago |
| [onnx-go](https://github.com/owulveryck/onnx-go) | 372 | onnx-go gives the ability to import a pre-trained neural network within Go without being linked to a framework or library. | 4 months ago |
| [go-deep](https://github.com/patrikeh/go-deep) | 349 | Artificial Neural Network | 19 days ago |
| [regommend](https://github.com/muesli/regommend) | 299 | Recommendation engine for Go | 3 years ago |
| [goptuna](https://github.com/c-bata/goptuna) | 207 | A hyperparameter optimization framework, inspired by Optuna. | 3 days ago |
| [go-galib](https://github.com/thoj/go-galib) | 189 | Genetic Algorithms library written in Go / golang | 6 years ago |
| [goRecommend](https://github.com/timkaye11/goRecommend) | 183 | Collaborative Filtering (CF) Algorithms in Go!  | 8 years ago |
| [goga](https://github.com/tomcraven/goga) | 150 | Golang Genetic Algorithm | 2 months ago |
| [shield](https://github.com/eaigner/shield) | 149 | Bayesian text classifier with flexible tokenizers and storage backends for Go | 2 years ago |
| [go-fann](https://github.com/vksnk/go-fann) | 106 | Go bindings for FANN, library for artificial neural networks | 7 years ago |
| [goscore](https://github.com/asafschers/goscore) | 74 | Go Scoring API for PMML | 2 years ago |
| [gonet](https://github.com/dathoangnd/gonet) | 71 | Neural Network for Go. | 2 years ago |
| [libsvm](https://github.com/datastream/libsvm) | 71 | libsvm go version | 6 years ago |
| [go-featureprocessing](https://github.com/nikolaydubina/go-featureprocessing) | 69 | 🔥 Fast, simple sklearn-like feature processing for Go | a month ago |
| [neural-go](https://github.com/schuyler/neural-go) | 62 | A multilayer perceptron network implemented in Go, with training via backpropagation. | a year ago |
| [go-pr](https://github.com/daviddengcn/go-pr) | 61 | Pattern recognition package in Go lang. | 9 years ago |
| [neat](https://github.com/jinyeom/neat) | 61 | NEAT (NeuroEvolution of Augmenting Topologies) implemented in Go | 4 years ago |
| [fonet](https://github.com/Fontinalis/fonet) | 60 | fonet is a deep neural network package for Go. | 9 months ago |
| [golinear](https://github.com/danieldk/golinear) | 44 | liblinear bindings for Go | 3 years ago |
| [Varis](https://github.com/Xamber/Varis) | 42 | Golang Neural Network  | 4 years ago |
| [godist](https://github.com/e-dard/godist) | 32 | Probability distributions and associated methods in Go | 7 years ago |
| [go-cluster](https://github.com/e-XpertSolutions/go-cluster) | 30 | k-modes and k-prototypes clustering algorithms implementation in Go | 4 years ago |
| [evoli](https://github.com/khezen/evoli) | 21 | Genetic Algorithm and Particle Swarm Optimization | 4 months ago |
| [gomind](https://github.com/surenderthakran/gomind) | 21 | A simplistic Neural Network Library in Go | 4 years ago |
| [randomForest](https://github.com/malaschitz/randomForest) | 20 | Random Forest implementation in golang | 4 months ago |
| [ddt](https://github.com/sgrodriguez/ddt) | 17 | Golang Dynamic Decision Tree | a year ago |
| [probab](https://github.com/ThePaw/probab) | 17 | Automatically exported from code.google.com/p/probab | 6 years ago |


### [Messaging](#Messaging)
* Libraries that implement messaging systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sarama](https://github.com/Shopify/sarama) | 8171 | Sarama is a Go library for Apache Kafka. | 3 days ago |
| [gorush](https://github.com/appleboy/gorush) | 6098 | A push notification server written in Go (Golang). | 5 days ago |
| [machinery](https://github.com/RichardKnop/machinery) | 5974 | Machinery is an asynchronous task queue/job queue based on distributed message passing. | 5 days ago |
| [centrifugo](https://github.com/centrifugal/centrifugo) | 5821 | Scalable real-time messaging server in a language-agnostic way. Set up once and forever. | 4 days ago |
| [go-socket.io](https://github.com/googollee/go-socket.io) | 4478 | socket.io library for golang, a realtime application framework. | a month ago |
| [benthos](https://github.com/Jeffail/benthos) | 4000 | Fancy stream processing made operationally mundane | 21 hours ago |
| [nats.go](https://github.com/nats-io/nats.go) | 3787 | Golang client for NATS, the cloud native messaging system. | 9 hours ago |
| [confluent-kafka-go](https://github.com/confluentinc/confluent-kafka-go) | 3131 | Confluent's Apache Kafka Golang client | a month ago |
| [asynq](https://github.com/hibiken/asynq) | 2703 | Simple, reliable, and efficient distributed task queue in Go | 2 hours ago |
| [mercure](https://github.com/dunglas/mercure) | 2657 | Server-sent live updates: protocol and reference implementation | a month ago |
| [apns2](https://github.com/sideshow/apns2) | 2591 | ⚡ HTTP/2 Apple Push Notification Service (APNs) push provider for Go — Send push notifications to iOS, tvOS, Safari and OSX apps, using the APNs HTTP/2 protocol. | 5 months ago |
| [melody](https://github.com/olahol/melody) | 2352 | :notes: Minimalist websocket framework for Go | 9 months ago |
| [go-nsq](https://github.com/nsqio/go-nsq) | 2087 | The official Go package for NSQ | 3 months ago |
| [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) | 2022 | Golang push server cluster | 5 years ago |
| [Beaver](https://github.com/Clivern/Beaver) | 1312 | 💨 A real time messaging system to build a scalable in-app notifications, multiplayer games, chat apps in web and mobile apps. | a day ago |
| [uniqush-push](https://github.com/uniqush/uniqush-push) | 1304 | Uniqush is a free and open source software system which provides a unified push service for server side notification to apps on mobile devices. | 2 years ago |
| [EventBus](https://github.com/asaskevich/EventBus) | 1090 | [Go] Lightweight eventbus with async compatibility for Go | 8 months ago |
| [zmq4](https://github.com/pebbe/zmq4) | 962 | A Go interface to ZeroMQ version 4 | 5 months ago |
| [gollum](https://github.com/trivago/gollum) | 914 | An n:m message multiplexer written in Go | 8 months ago |
| [chanify](https://github.com/chanify/chanify) | 756 | Chanify is a safe and simple notification tools. This repository is command line tools for Chanify. | 23 days ago |
| [dbus](https://github.com/godbus/dbus) | 676 | Native Go bindings for D-Bus | 5 hours ago |
| [golongpoll](https://github.com/jcuga/golongpoll) | 590 | golang long polling library.  Makes web pub-sub easy via HTTP long-poll servers and clients :smiley: :coffee: :computer: | 10 months ago |
| [mangos](https://github.com/nanomsg/mangos) | 481 | mangos is a pure Golang implementation of nanomsg's "Scalablilty Protocols" | a day ago |
| [emitter](https://github.com/olebedev/emitter) | 417 | Emits events in Go way, with wildcard, predicates, cancellation possibilities and many other good wins | 2 years ago |
| [glue](https://github.com/desertbit/glue) | 400 | Glue - Robust Go and Javascript Socket Library (Alternative to Socket.io) | 2 years ago |
| [pubsub](https://github.com/cskr/pubsub) | 367 | A simple pubsub package for go. | 23 days ago |
| [bus](https://github.com/mustafaturan/bus) | 246 | 🔊Minimalist message bus implementation for internal communication with zero-allocation magic on Emit | 9 months ago |
| [amqp091-go](https://github.com/rabbitmq/amqp091-go) | 236 | An AMQP 0-9-1 Go client maintained by the RabbitMQ team. Originally by @streadway: `streadway/amqp` | a day ago |
| [rabtap](https://github.com/jandelgado/rabtap) | 208 | RabbitMQ wire tap and swiss army knife | 2 months ago |
| [message-bus](https://github.com/vardius/message-bus) | 207 | Go simple async message bus | a year ago |
| [guble](https://github.com/smancke/guble) | 151 | websocket based messaging server written in golang | 4 years ago |
| [zmq3](https://github.com/pebbe/zmq3) | 131 | A Go interface to ZeroMQ version 3 | a year ago |
| [hub](https://github.com/leandro-lugaresi/hub) | 116 | :incoming_envelope: A fast Message/Event Hub using publish/subscribe pattern with support for topics like* rabbitMQ exchanges for Go applications | a year ago |
| [oplog](https://github.com/dailymotion/oplog) | 111 | A generic oplog/replication system for microservices | 6 years ago |
| [go-gcm](https://github.com/googlearchive/go-gcm) | 104 | GCM library for Go. | 3 years ago |
| [rabbus](https://github.com/rafaeljesus/rabbus) | 94 | A tiny wrapper over amqp exchanges and queues 🚌 ✨ | 3 years ago |
| [drone-line](https://github.com/appleboy/drone-line) | 76 | Sending line notifications using a binary, docker or Drone CI. | 8 months ago |
| [redisqueue](https://github.com/robinjoseph08/redisqueue) | 76 | redisqueue provides a producer and consumer of a queue that uses Redis streams | 14 days ago |
| [go-mq](https://github.com/cheshir/go-mq) | 74 | Declare AMQP entities like queues, producers, and consumers in a declarative way. Can be used to work with RabbitMQ. | 3 months ago |
| [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) | 71 | A tiny wrapper around NSQ topic and channel :rocket: | 4 years ago |
| [RapidMQ](https://github.com/sybrexsys/RapidMQ) | 64 | RapidMQ is a pure, extremely productive, lightweight and reliable library for managing of the local messages queue | 4 years ago |
| [commander](https://github.com/jeroenrinzema/commander) | 59 | Build event-driven and event streaming applications with ease | 10 months ago |
| [go-notify](https://github.com/TheCreeper/go-notify) | 59 | Package notify provides an implementation of the Gnome DBus Notifications Specification. | a year ago |
| [go-res](https://github.com/jirenius/go-res) | 54 | RES Service protocol library for Go | a month ago |
| [event](https://github.com/agoalofalife/event) | 45 | The implementation of the pattern observer | 4 years ago |
| [hare](https://github.com/leozz37/hare) | 34 | 🐇  CLI tool for websockets and easy to use Golang package | 2 months ago |
| [ami](https://github.com/kak-tus/ami) | 22 | Go client to reliable queues based on Redis Cluster Streams | 2 years ago |
| [gosd](https://github.com/alexsniffin/gosd) | 19 | A library for scheduling when to dispatch a message to a channel | a year ago |
| [zmq2](https://github.com/pebbe/zmq2) | 18 | A Go interface to ZeroMQ version 2 | a year ago |
| [go-vitotrol](https://github.com/maxatome/go-vitotrol) | 17 | golang client library to Viessmann Vitotrol web service | a year ago |
| [rmqconn](https://github.com/sbabiv/rmqconn) | 16 | RabbitMQ Reconnection client | 2 years ago |
| [jazz](https://github.com/socifi/jazz) | 14 | Abstraction layer for simple rabbitMQ connection, messaging and administration | 3 years ago |
| [gaurun-client](https://github.com/osamingo/gaurun-client) | 10 | Gaurun Client written in Go | 6 months ago |


### [Microsoft Office](#Microsoft-Office)
* Office

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [unioffice](https://github.com/unidoc/unioffice) | 3172 | Pure go library for creating and processing Office Word (.docx), Excel (.xlsx) and Powerpoint (.pptx) documents | 12 days ago |


### [Microsoft Excel](#Microsoft-Excel)
* Libraries for working with Microsoft Excel.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [excelize](https://github.com/qax-os/excelize) | 10862 | Golang library for reading and writing Microsoft Excel™ (XLSX) files. | 14 hours ago |
| [xlsx](https://github.com/tealeg/xlsx) | 5230 | Go (golang) library for reading and writing XLSX files.  | 17 days ago |
| [xlsx](https://github.com/plandem/xlsx) | 147 | Fast and reliable way to work with Microsoft Excel™ [xlsx] files in Golang | a year ago |
| [go-excel](https://github.com/szyhf/go-excel) | 136 | A simple and light excel file reader to read a standard excel as a table faster , 一个轻量级的Excel数据读取库，用一种更`关系数据库`的方式解析Excel。 | 2 months ago |
| [goxlsxwriter](https://github.com/fterrag/goxlsxwriter) | 18 | Golang bindings for libxlsxwriter for writing XLSX files | 4 years ago |


### [Miscellaneous](#Miscellaneous)
* 

#### [Dependency Injection](#Dependency-Injection)
* Libraries for working with dependency injection.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fx](https://github.com/uber-go/fx) | 2514 | A dependency injection based application framework for Go. | 2 days ago |
| [dig](https://github.com/uber-go/dig) | 2353 | A reflection based dependency injection toolkit for Go. | 11 hours ago |
| [container](https://github.com/golobby/container) | 300 | A lightweight yet powerful IoC dependency injection container for Go projects | 18 days ago |
| [di](https://github.com/goioc/di) | 150 | Simple and yet powerful Dependency Injection for Go | a month ago |
| [di](https://github.com/goava/di) | 140 | 🛠 A full-featured dependency injection container for go programming language. | 3 months ago |
| [dingo](https://github.com/i-love-flamingo/dingo) | 123 | Go Dependency Injection Framework | 10 months ago |
| [alice](https://github.com/magic003/alice) | 43 | An additive dependency injection container for Golang. | 5 years ago |
| [wire](https://github.com/Fs02/wire) | 34 | Strict Runtime Dependency Injection for Golang | 6 months ago |
| [linker](https://github.com/logrange/linker) | 32 | Dependency Injection and Inversion of Control package | 2 years ago |
| [gocontainer](https://github.com/vardius/gocontainer) | 14 | Simple Dependency Injection Container | 2 years ago |
| [kinit](https://github.com/go-kata/kinit) | 5 | GO Dependency Injection | 8 months ago |
| [nject](https://github.com/BlueOwlOpenSource/nject) | 3 | Go dependency injection: nject & npoint | 6 months ago |


#### [Project Layout](#Project-Layout)
* Unofficial set of patterns for structuring projects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [project-layout](https://github.com/golang-standards/project-layout) | 29581 | Standard Go Project Layout | 6 days ago |
| [service](https://github.com/ardanlabs/service) | 2183 | Starter code for writing web services in Go using Kubernetes. | 5 days ago |
| [modern-go-application](https://github.com/sagikazarmark/modern-go-application) | 1137 | Modern Go Application example | 2 months ago |
| [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) | 498 | A Go project template | a year ago |
| [seed](https://github.com/golang-templates/seed) | 243 | Go application GitHub repository template. | 3 days ago |
| [go-starter](https://github.com/allaboutapps/go-starter) | 122 | An opinionated production-ready SQL-/Swagger-first RESTful JSON API written in Go, highly integrated with VSCode DevContainers by allaboutapps. | a day ago |
| [go-todo-backend](https://github.com/Fs02/go-todo-backend) | 120 | Go Todo Backend example using modular project layout for product microservice. | a day ago |
| [scaffold](https://github.com/catchplay/scaffold) | 106 | Generate scaffold project layout for Go. | 3 years ago |
| [go-sample](https://github.com/zitryss/go-sample) | 96 | Go Project Sample Layout | 3 years ago |
| [gobase](https://github.com/wajox/gobase) | 19 | This is a simple skeleton for golang applications | 5 months ago |
| [go-project-layout](https://github.com/wangyoucao577/go-project-layout) | 14 | My understanding of how to structure a golang project.  | 9 months ago |
| [inizio](https://github.com/insidieux/inizio) | 9 | Golang project standard layout generator | 9 months ago |


#### [Strings](#Strings)
* Libraries for working with strings.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xstrings](https://github.com/huandu/xstrings) | 987 | Implements string functions widely used in other languages but absent in Go. | 2 months ago |
| [sttr](https://github.com/abhimanyu003/sttr) | 347 | cross-platform, cli app to perform various operations on string | 2 months ago |
| [strutil](https://github.com/ozgio/strutil) | 155 | String utilities for Go | 4 months ago |
| [stringy](https://github.com/gobeam/stringy) | 108 | Convert string to camel case, snake case, kebab case / slugify, custom delimiter, pad string, tease string and many other functionalities with help of by Stringy package. | 3 months ago |
| [bexp](https://github.com/mkungla/bexp) | 4 | Go implementation of Brace Expansion mechanism to generate arbitrary strings. | 5 months ago |


#### [Uncategorized](#Uncategorized)
* These libraries were placed here because none of the other categories seemed to fit.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopsutil](https://github.com/shirou/gopsutil) | 7342 | psutil for golang | 2 days ago |
| [archiver](https://github.com/mholt/archiver) | 3473 | Easily create & extract archives, and compress & decompress files of various formats | 7 days ago |
| [gofakeit](https://github.com/brianvoe/gofakeit) | 2287 | Random fake data generator written in go | 14 days ago |
| [gatus](https://github.com/TwiN/gatus) | 2148 | ⛑ Gatus - Automated service health dashboard | 2 days ago |
| [oapi-codegen](https://github.com/deepmap/oapi-codegen) | 1671 | Generate Go client and server boilerplate from OpenAPI 3 specifications | 2 days ago |
| [gosms](https://github.com/haxpax/gosms) | 1368 | :mailbox_closed: Your own local SMS gateway in Go | a year ago |
| [base64Captcha](https://github.com/mojocn/base64Captcha) | 1348 | captcha of base64 image string | 2 months ago |
| [go-resiliency](https://github.com/eapache/go-resiliency) | 1325 | Resiliency patterns for golang | 5 months ago |
| [go-commons-pool](https://github.com/jolestar/go-commons-pool) | 1006 | a generic object pool for golang | 10 months ago |
| [llvm](https://github.com/llir/llvm) | 853 | Library for interacting with LLVM IR in pure Go. | a month ago |
| [shortid](https://github.com/teris-io/shortid) | 740 | Super short, fully unique, non-sequential and URL friendly Ids | a year ago |
| [health](https://github.com/alexliesenfeld/health) | 487 | A simple and flexible health check library for Go. | a month ago |
| [health](https://github.com/dimiro1/health) | 428 | An easy to use, extensible health check library for Go applications. | 2 years ago |
| [stateless](https://github.com/qmuntal/stateless) | 397 | Go library for creating state machines | 10 days ago |
| [banner](https://github.com/dimiro1/banner) | 379 | An easy way to add useful startup banners into your Go applications | a year ago |
| [go-conv](https://github.com/cstockton/go-conv) | 375 | Fast conversions across various Go types with a simple API. | 6 months ago |
| [gountries](https://github.com/pariz/gountries) | 333 | Gountries provides: Countries (ISO-3166-1), Country Subdivisions(ISO-3166-2), Currencies (ISO 4217), Geo Coordinates(ISO-6709) as well as translations, country borders and other stuff exposed as struct data. | 3 months ago |
| [shoutrrr](https://github.com/containrrr/shoutrrr) | 305 | Notification library for gophers and their furry friends. | 22 days ago |
| [ffmt](https://github.com/go-ffmt/ffmt) | 252 | Golang beautify data display for Humans | 3 months ago |
| [lk](https://github.com/hyperboloide/lk) | 233 | Simple licensing library for golang. | 2 years ago |
| [antch](https://github.com/antchfx/antch) | 226 | Antch, a fast, powerful and extensible web crawling & scraping framework for Go | 2 years ago |
| [healthcheck](https://github.com/etherlabsio/healthcheck) | 211 | An simple, easily extensible and concurrent health-check library for Go services | 8 months ago |
| [battery](https://github.com/distatus/battery) | 201 | cross-platform, normalized battery information library | a month ago |
| [bitio](https://github.com/icza/bitio) | 180 | Optimized bit-level Reader and Writer for Go. | 24 days ago |
| [go-unarr](https://github.com/gen2brain/go-unarr) | 171 | Go bindings for unarr (decompression library for RAR, TAR, ZIP and 7z archives) | 21 days ago |
| [stats](https://github.com/go-playground/stats) | 159 | :chart_with_upwards_trend: Monitors Go MemStats + System stats such as Memory, Swap and CPU and sends via UDP anywhere you want for logging etc... | 5 years ago |
| [turtle](https://github.com/hackebrot/turtle) | 131 | Emojis for Go 😄🐢🚀 | 4 months ago |
| [gommit](https://github.com/antham/gommit) | 96 | Enforce git message commit consistency | 2 months ago |
| [indigo](https://github.com/osamingo/indigo) | 93 | A distributed unique ID generator of using Sonyflake and encoded by Base58 | a year ago |
| [gotoprom](https://github.com/cabify/gotoprom) | 92 | Type-safe Prometheus metrics builder library for golang | 2 years ago |
| [captcha](https://github.com/steambap/captcha) | 91 | :sunglasses:Package captcha provides an easy to use, unopinionated API for captcha generation | a month ago |
| [morse](https://github.com/alwindoss/morse) | 74 | Morse Code Library in Go | 6 months ago |
| [persian](https://github.com/mavihq/persian) | 61 | Some utilities for Persian language in Go (Golang) | 8 months ago |
| [faker](https://github.com/pioz/faker) | 58 | Random fake data and struct generator for Go. | 4 months ago |
| [pdfgen](https://github.com/hyperboloide/pdfgen) | 56 | HTTP service to generate PDF from Json requests | 4 years ago |
| [xkg](https://github.com/go-xkg/xkg) | 52 | User level X Keyboard Grabber | 7 years ago |
| [browscap_go](https://github.com/digitalcrab/browscap_go) | 40 | GoLang Library for Browser Capabilities Project | 5 months ago |
| [datacounter](https://github.com/miolini/datacounter) | 37 | Golang counters for readers/writers | 2 years ago |
| [autoflags](https://github.com/artyom/autoflags) | 36 | Populate go command line app flags from config struct | 10 months ago |
| [url-shortener](https://github.com/pantrif/url-shortener) | 35 | A golang URL Shortener | 4 years ago |
| [sandid](https://github.com/aofei/sandid) | 33 | Every grain of sand on Earth has its own ID. | 3 months ago |
| [gosh](https://github.com/osamingo/gosh) | 29 | Provide Go Statistics Handler, Struct, Measure Method | a year ago |
| [xdg](https://github.com/rkoesters/xdg) | 28 | FreeDesktop.org (xdg) Specs implemented in Go | 7 months ago |
| [metrics](https://github.com/pascaldekloe/metrics) | 23 | atomic measures + Prometheus exposition library | a year ago |
| [shellwords](https://github.com/Wing924/shellwords) | 16 | A Golang library to manipulate strings according to the word parsing rules of the UNIX Bourne shell. | 4 years ago |
| [anagent](https://github.com/mudler/anagent) | 14 | Minimalistic, pluggable Golang evloop/timer handler with dependency-injection | 4 years ago |
| [avgRating](https://github.com/kirillDanshin/avgRating) | 11 | Calculate average score and rating based on Wilson Score Equation | 5 years ago |
| [hostutils](https://github.com/Wing924/hostutils) | 10 | A golang library for packing and unpacking hosts list | 24 days ago |
| [numa](https://github.com/lrita/numa) | 6 | NUMA is a utility library, which is written in go. It help us to write some NUMA-AWARED code. | a year ago |
| [go-commandbus](https://github.com/lana/go-commandbus) | 5 | Simple command bus for GO | 22 days ago |
| [generators](https://github.com/azr/generators) | 4 | #golang generator | 5 years ago |
| [basexx](https://github.com/bobg/basexx) | 1 | Convert digit strings between arbitrary bases. | 4 months ago |


### [Natural Language Processing](#Natural-Language-Processing)
* Libraries for working with human languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jieba](https://github.com/fxsjy/jieba) | 27876 | 结巴中文分词 | 7 months ago |
| [vaderSentiment](https://github.com/cjhutto/vaderSentiment) | 3378 | VADER Sentiment Analysis. VADER (Valence Aware Dictionary and sEntiment Reasoner) is a lexicon and rule-based sentiment analysis tool that is specifically attuned to sentiments expressed in social media, and works well on texts from other domains.  | a month ago |
| [prose](https://github.com/jdkato/prose) | 2869 | :book: A Golang library for text processing, including tokenization, part-of-speech tagging, and named-entity extraction. | 5 months ago |
| [go-i18n](https://github.com/nicksnyder/go-i18n) | 1897 | Translate your Go program into multiple languages. | a day ago |
| [gojieba](https://github.com/yanyiwu/gojieba) | 1786 | "结巴"中文分词的Golang版本 | 17 days ago |
| [gse](https://github.com/go-ego/gse) | 1746 | Go efficient multilingual NLP and text segmentation; support english, chinese, japanese and other. Go 高性能多语言 NLP 和分词 | a month ago |
| [when](https://github.com/olebedev/when) | 1139 | A natural language date/time parser with pluggable rules | 2 months ago |
| [spago](https://github.com/nlpodyssey/spago) | 1095 | Self-contained Machine Learning and Natural Language Processing library in Go | 11 hours ago |
| [go-pinyin](https://github.com/mozillazg/go-pinyin) | 1090 | 汉字转拼音 | 2 months ago |
| [kagome](https://github.com/ikawaha/kagome) | 600 | Self-contained Japanese Morphological Analyzer written in pure Go | 3 days ago |
| [whatlanggo](https://github.com/abadojack/whatlanggo) | 523 | Natural language detection library for Go | a year ago |
| [nlp](https://github.com/nymiun/nlp) | 378 | [UNMANTEINED] Extract values from strings and fill your structs with nlp. | 4 years ago |
| [nlp](https://github.com/james-bowman/nlp) | 355 | Selected Machine Learning algorithms for natural language processing and semantic analysis in Golang | 9 months ago |
| [sentences](https://github.com/neurosnap/sentences) | 317 | A multilingual command line sentence tokenizer in Golang | 8 months ago |
| [getlang](https://github.com/rylans/getlang) | 130 | Natural language detection package in pure Go | a year ago |
| [go-nlp](https://github.com/nuance/go-nlp) | 91 | Utilities for working with discrete probability distributions and other tools useful for doing NLP work | 10 years ago |
| [go-unidecode](https://github.com/mozillazg/go-unidecode) | 91 | ASCII transliterations of Unicode text. | 10 months ago |
| [RAKE.Go](https://github.com/afjoseph/RAKE.Go) | 89 | A Go port of the Rapid Automatic Keyword Extraction algorithm (RAKE) | 2 years ago |
| [gounidecode](https://github.com/fiam/gounidecode) | 74 | Unicode transliterator for #golang | 6 years ago |
| [segment](https://github.com/blevesearch/segment) | 70 | A Go library for performing Unicode Text Segmentation as described in Unicode Standard Annex #29 | a year ago |
| [textcat](https://github.com/pebbe/textcat) | 67 | A Go package for n-gram based text categorization, with support for utf-8 and raw text | a year ago |
| [go-stem](https://github.com/agonopol/go-stem) | 66 | Word Stemming in Go | 4 years ago |
| [MMSEGO](https://github.com/awsong/MMSEGO) | 60 | Chinese word splitting algorithm MMSEG in GO | 10 years ago |
| [stemmer](https://github.com/dchest/stemmer) | 51 | Stemmer packages for Go programming language. Includes English, German and Dutch stemmers. | 5 years ago |
| [go2vec](https://github.com/danieldk/go2vec) | 45 | Read and use word2vec vectors in Go | 3 years ago |
| [address](https://github.com/bojanz/address) | 43 | Address handling for Go. | 15 days ago |
| [porter2](https://github.com/zentures/porter2) | 42 | High Performance Porter2 Stemmer | a year ago |
| [petrovich](https://github.com/striker2000/petrovich) | 37 | Golang port of Petrovich - an inflector for Russian anthroponyms. | a year ago |
| [go-localize](https://github.com/m1/go-localize) | 31 | i18n (Internationalization and localization) engine written in Go, used for translating locale strings.  | 4 months ago |
| [snowball](https://github.com/goodsign/snowball) | 31 | Cgo binding for Snowball C library | 5 years ago |
| [mystem](https://github.com/dveselov/mystem) | 28 | CGo bindings to Yandex.Mystem | 5 years ago |
| [iuliia-go](https://github.com/mehanizm/iuliia-go) | 28 | Transliterate Cyrillic → Latin in every possible way | 8 months ago |
| [paicehusk](https://github.com/rookii/paicehusk) | 28 | Golang implementation of the Paice/Husk Stemming Algorithm | 8 years ago |
| [golibstemmer](https://github.com/rjohnsondev/golibstemmer) | 20 | Go bindings for the snowball libstemmer library including porter 2 | 8 years ago |
| [icu](https://github.com/goodsign/icu) | 20 | Cgo binding for icu4c library | 5 years ago |
| [transliterator](https://github.com/alexsergivan/transliterator) | 20 | Golang text Transliterator (i.e München -> Muenchen) | 2 years ago |
| [govader](https://github.com/jonreiter/govader) | 17 | vader sentiment analysis in go | 7 days ago |
| [gotokenizer](https://github.com/xujiajun/gotokenizer) | 14 | A tokenizer based on the dictionary and Bigram language models for Go. (Now only support chinese segmentation) | 3 years ago |
| [detectlanguage-go](https://github.com/detectlanguage/detectlanguage-go) | 13 | Detect Language API Go Client | a year ago |
| [shamoji](https://github.com/osamingo/shamoji) | 12 | The shamoji (杓文字) is a word filtering package | a year ago |
| [libtextcat](https://github.com/goodsign/libtextcat) | 11 | Cgo binding for libtextcat C library | 9 years ago |
| [porter](https://github.com/a2800276/porter) | 9 | porter stemmer | 8 years ago |
| [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) | 8 | 💬 Sentiment analyzer library using SentiWordnet in Go | a year ago |
| [t](https://github.com/youthlin/t) | 8 | t: translation util for go, using GNU gettext | 4 months ago |


### [Networking](#Networking)
* Libraries for working with various layers of the network.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fasthttp](https://github.com/valyala/fasthttp) | 16914 | Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http | 16 hours ago |
| [kcptun](https://github.com/xtaci/kcptun) | 12749 | A Stable & Secure Tunnel based on KCP with N:M multiplexing and FEC. Available for ARM, MIPS, 386 and AMD64。KCPプロトコルに基づく安全なトンネル。KCP 프로토콜을 기반으로 하는 보안 터널입니다。 | 2 months ago |
| [webrtc](https://github.com/pion/webrtc) | 8741 | Pure Go implementation of the WebRTC API | 8 days ago |
| [quic-go](https://github.com/lucas-clemente/quic-go) | 6308 | A QUIC implementation in pure go | 8 days ago |
| [dns](https://github.com/miekg/dns) | 6112 | DNS library in Go | 3 days ago |
| [gnet](https://github.com/panjf2000/gnet) | 6083 | 🚀 gnet is a high-performance, lightweight, non-blocking, event-driven networking framework written in pure Go./ gnet 是一个高性能、轻量级、非阻塞的事件驱动 Go 网络框架。 | 7 days ago |
| [gopacket](https://github.com/google/gopacket) | 4659 | Provides packet processing capabilities for Go | 14 days ago |
| [httplab](https://github.com/qustavo/httplab) | 3771 | The interactive web server | 3 years ago |
| [kcp-go](https://github.com/xtaci/kcp-go) | 3223 |  A Crypto-Secure, Production-Grade Reliable-UDP Library for golang with FEC  | a month ago |
| [gobgp](https://github.com/osrg/gobgp) | 2431 | BGP implemented in the Go Programming Language | 3 days ago |
| [ssh](https://github.com/gliderlabs/ssh) | 2372 | Easy SSH servers in Golang | a month ago |
| [fortio](https://github.com/fortio/fortio) | 2293 | Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats. | 12 days ago |
| [water](https://github.com/songgao/water) | 1373 | A simple TUN/TAP library written in native Go. | 22 days ago |
| [gev](https://github.com/Allenxuxu/gev) | 1346 | 🚀Gev is a lightweight, fast non-blocking TCP network library / websocket server based on Reactor mode. Support custom protocols to quickly and easily build high-performance servers.  | a month ago |
| [go-getter](https://github.com/hashicorp/go-getter) | 1288 | Package for downloading things from a string URL using a variety of protocols. | 7 days ago |
| [nff-go](https://github.com/intel-go/nff-go) | 1161 | NFF-Go -Network Function Framework for GO (former YANFF) | 5 months ago |
| [sftp](https://github.com/pkg/sftp) | 1099 | SFTP support for the go.crypto/ssh package | 15 days ago |
| [grab](https://github.com/cavaliergopher/grab) | 986 | A download manager package for Go | a month ago |
| [ftp](https://github.com/jlaffaye/ftp) | 883 | FTP client package for Go | 11 days ago |
| [mdns](https://github.com/hashicorp/mdns) | 848 | Simple mDNS client/server library in Golang | a month ago |
| [gosnmp](https://github.com/gosnmp/gosnmp) | 805 | An SNMP library written in Go | 21 hours ago |
| [vssh](https://github.com/yahoo/vssh) | 772 | Go Library to Execute Commands Over SSH at Scale | a year ago |
| [cidranger](https://github.com/yl2chen/cidranger) | 672 | Fast IP to CIDR lookup in Golang | a month ago |
| [lhttp](https://github.com/fanux/lhttp) | 660 | go websocket, a better way to buid your IM server | 4 years ago |
| [nbio](https://github.com/lesismal/nbio) | 575 | Pure Go 1000k+ connections solution, support tls/http1.x/websocket and basically compatible with net/http, with high-performance and low memory cost, non-blocking, event-driven, easy-to-use. | 3 days ago |
| [gmqtt](https://github.com/DrmagicE/gmqtt) | 573 | Gmqtt is a flexible, high-performance MQTT broker library that fully implements the MQTT protocol V3.x and V5 in golang | 2 months ago |
| [peerdiscovery](https://github.com/schollz/peerdiscovery) | 530 | Pure-Go library for cross-platform local peer discovery using UDP multicast :woman: :repeat: :woman: | 14 days ago |
| [gotcp](https://github.com/gansidui/gotcp) | 488 | A Go package for quickly building tcp servers | 5 years ago |
| [stun](https://github.com/gortc/stun) | 481 | Fast RFC 5389 STUN implementation in go | 9 months ago |
| [go-stun](https://github.com/ccding/go-stun) | 475 | A go implementation of the STUN client (RFC 3489 and RFC 5389) | 21 days ago |
| [gopcap](https://github.com/akrennmair/gopcap) | 439 | A simple wrapper around libpcap for the Go programming language | 9 months ago |
| [raw](https://github.com/mdlayher/raw) | 419 | Package raw enables reading and writing data at the device driver level for a network interface.  MIT Licensed. | 3 months ago |
| [gaio](https://github.com/xtaci/gaio) | 416 | High performance async-io(proactor) networking for Golang。golangのための高性能非同期io(proactor)ネットワーキング | 5 months ago |
| [tcp_server](https://github.com/firstrow/tcp_server) | 409 | golang tcp server | 3 months ago |
| [winrm](https://github.com/masterzen/winrm) | 352 | Command-line tool and library for Windows remote command execution in Go | 2 months ago |
| [ftpserverlib](https://github.com/fclairamb/ftpserverlib) | 284 | golang ftp server library | 5 days ago |
| [arp](https://github.com/mdlayher/arp) | 275 | Package arp implements the ARP protocol, as described in RFC 826. MIT Licensed. | 2 years ago |
| [easytcp](https://github.com/DarthPestilane/easytcp) | 256 | :sparkles: :rocket: EasyTCP is a light-weight TCP framework written in Go (Golang), built with message router. EasyTCP helps you build a TCP server easily fast and less painful. | 19 days ago |
| [buffstreams](https://github.com/StabbyCutyou/buffstreams) | 247 | A library to simplify writing applications using TCP sockets to stream protobuff messages | 2 years ago |
| [ethernet](https://github.com/mdlayher/ethernet) | 238 | Package ethernet implements marshaling and unmarshaling of IEEE 802.3 Ethernet II frames and IEEE 802.1Q VLAN tags. MIT Licensed. | 3 years ago |
| [gnxi](https://github.com/google/gnxi) | 202 | gNXI Tools - gRPC Network Management/Operations Interface Tools | 17 days ago |
| [jazigo](https://github.com/udhos/jazigo) | 175 | Jazigo is a tool written in Go for retrieving configuration for multiple devices, similar to rancid, fetchconfig, oxidized, Sweet. | 2 years ago |
| [utp](https://github.com/anacrolix/utp) | 163 | Use anacrolix/go-libutp instead | a year ago |
| [canopus](https://github.com/zubairhamed/canopus) | 148 | CoAP Client/Server implementing RFC 7252 for the Go Language | 4 years ago |
| [sslb](https://github.com/eduardonunesp/sslb) | 135 | Golang Super Simple Load Balance | 2 years ago |
| [xtcp](https://github.com/xfxdev/xtcp) | 129 | A TCP Server Framework with graceful shutdown, custom protocol. | 2 years ago |
| [ether](https://github.com/songgao/ether) | 74 | A Go package for sending and receiving ethernet frames. Currently supporting Linux, Freebsd, and OS X. | 6 years ago |
| [dhcp6](https://github.com/mdlayher/dhcp6) | 73 | Package dhcp6 implements a DHCPv6 server, as described in RFC 3315. MIT Licensed. | 3 years ago |
| [iplib](https://github.com/c-robinson/iplib) | 73 | A library  for working with IP addresses and networks in Go | 3 months ago |
| [packet](https://github.com/aerogo/packet) | 63 | :package: Send network packets over a TCP or UDP connection. | 2 years ago |
| [go-powerdns](https://github.com/joeig/go-powerdns) | 54 | Go PowerDNS 4.x API Client | a month ago |
| [linkio](https://github.com/ian-kent/linkio) | 50 | Simulate network link speed | 5 years ago |
| [portproxy](https://github.com/aybabtme/portproxy) | 47 | TCP proxy, highjacks HTTP to allow CORS | 7 years ago |
| [panoptes-stream](https://github.com/yahoo/panoptes-stream) | 32 | A cloud native distributed streaming network telemetry. | a year ago |
| [graval](https://github.com/koofr/graval) | 28 | An experimental go FTP server framework | a year ago |
| [publicip](https://github.com/polera/publicip) | 25 | Go pkg for returning your public facing IP address. | 5 years ago |
| [golibwireshark](https://github.com/sunwxg/golibwireshark) | 23 |  | 4 years ago |
| [gohooks](https://github.com/averageflow/gohooks) | 16 | GoHooks make it easy to send and consume secured web-hooks from a Go application | 7 months ago |
| [goshark](https://github.com/sunwxg/goshark) | 14 |  | 4 years ago |
| [llb](https://github.com/kirillDanshin/llb) | 12 |  | 6 years ago |
| [tspool](https://github.com/two/tspool) | 12 | tcp server pool | 3 years ago |
| [httpproxy](https://github.com/wzshiming/httpproxy) | 11 | HTTP proxy handler and dialer | 3 months ago |


### [HTTP Clients](#HTTP-Clients)
* Libraries for making HTTP requests.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [resty](https://github.com/go-resty/resty) | 5638 | Simple HTTP and REST client library for Go | 2 months ago |
| [heimdall](https://github.com/gojek/heimdall) | 2185 | An enhanced HTTP client for Go | 4 days ago |
| [grequests](https://github.com/levigross/grequests) | 1861 | A Go "clone" of the great and famous Requests library | a year ago |
| [sling](https://github.com/dghubble/sling) | 1414 | A Go HTTP client library for creating and sending API requests | 4 months ago |
| [gentleman](https://github.com/h2non/gentleman) | 934 | Plugin-driven, extensible HTTP client toolkit for Go | a year ago |
| [pester](https://github.com/sethgrid/pester) | 580 | Go (golang) http calls with retries and backoff  | 8 days ago |
| [requests](https://github.com/carlmjohnson/requests) | 280 | HTTP requests for Gophers | a month ago |
| [request](https://github.com/monaco-io/request) | 183 | go request, go http client | 2 months ago |
| [rq](https://github.com/ddo/rq) | 40 | A nicer interface for golang stdlib HTTP client | 2 years ago |
| [go-http-client](https://github.com/bozd4g/go-http-client) | 34 | An enhanced http client for Golang | 9 months ago |
| [httpretry](https://github.com/ybbus/httpretry) | 16 | Enriches the standard go http client with retry functionality. | 2 years ago |
| [go-req](https://github.com/wenerme/go-req) | 13 | Declarative golang HTTP client | 5 months ago |
| [httpc](https://github.com/valord577/httpc) | 4 | A customizable and simple HTTP client library. Only depend on the stdlib HTTP client. | 3 months ago |


### [OpenGL](#OpenGL)
* Libraries for using OpenGL in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glfw](https://github.com/go-gl/glfw) | 1214 | Go bindings for GLFW 3 | 24 days ago |
| [gl](https://github.com/go-gl/gl) | 875 | Go bindings for OpenGL (generated via glow) | 2 months ago |
| [mathgl](https://github.com/go-gl/mathgl) | 414 | A pure Go 3D math library. | a year ago |
| [gl](https://github.com/goxjs/gl) | 155 | Go cross-platform OpenGL bindings. | a year ago |
| [glfw](https://github.com/goxjs/glfw) | 73 | Go cross-platform glfw library for creating an OpenGL context and receiving events. | a month ago |
| [go-glmatrix](https://github.com/technohippy/go-glmatrix) | 3 | go-glmatrix is a golang version of glMatrix, which is "designed to perform vector and matrix operations stupidly fast". | a year ago |


### [ORM](#ORM)
* Libraries that implement Object-Relational Mapping or datamapping techniques.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [beego](https://github.com/beego/beego) | 27725 | beego is an open-source, high-performance web framework for the Go programming language. | 2 days ago |
| [gorm](https://github.com/go-gorm/gorm) | 26847 | The fantastic ORM library for Golang, aims to be developer friendly | 2 hours ago |
| [ent](https://github.com/ent/ent) | 9904 | An entity framework for Go | 17 hours ago |
| [pg](https://github.com/go-pg/pg) | 4983 | Golang ORM with focus on PostgreSQL features and performance | 2 months ago |
| [sqlboiler](https://github.com/volatiletech/sqlboiler) | 4643 | Generate a Go ORM tailored to your database schema. | 9 hours ago |
| [gorp](https://github.com/go-gorp/gorp) | 3548 | Go Relational Persistence - an ORM-ish library for Go | a year ago |
| [db](https://github.com/upper/db) | 2891 | Data access layer for PostgreSQL, CockroachDB, MySQL, SQLite and MongoDB with ORM-like features. | 5 days ago |
| [gormt](https://github.com/xxjwxc/gormt) | 1703 | database to golang struct | 8 days ago |
| [reform](https://github.com/go-reform/reform) | 1228 | A better ORM for Go, based on non-empty interfaces and code generation. | 3 days ago |
| [pop](https://github.com/gobuffalo/pop) | 1174 | A Tasty Treat For All Your Database Needs | 3 days ago |
| [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) | 714 | A flexible and powerful SQL string builder library plus a zero-config ORM. | 2 months ago |
| [go-queryset](https://github.com/jirfag/go-queryset) | 652 | 100% type-safe ORM for Go (Golang) with code generation and MySQL, PostgreSQL, Sqlite3, SQL Server support. GORM under the hood. | 7 months ago |
| [rel](https://github.com/go-rel/rel) | 486 | :gem: Modern ORM for Golang - Testable, Extendable and Crafted Into a Clean and Elegant API | 14 hours ago |
| [zoom](https://github.com/albrow/zoom) | 287 | A blazing-fast datastore and querying engine for Go built on Redis. | 2 years ago |
| [gosql](https://github.com/rushteam/gosql) | 157 | golang orm and sql builder | 8 months ago |
| [grimoire](https://github.com/Fs02/grimoire) | 156 | Database access layer for golang | 4 months ago |
| [go-store](https://github.com/gosuri/go-store) | 108 | A simple and fast Redis backed key-value store library for Go | 5 years ago |
| [go-firestorm](https://github.com/jschoedt/go-firestorm) | 28 | Simple Go ORM for Google/Firebase Cloud Firestore | 2 months ago |
| [lore](https://github.com/abrahambotros/lore) | 10 | Light Object-Relational Environment (LORE) provides a simple and lightweight pseudo-ORM/pseudo-struct-mapping environment for Go | 4 years ago |
| [marlow](https://github.com/marlow/marlow) | 10 | persistence layer code generation for golang | a year ago |


### [Package Management](#Package-Management)
* 

#### [Official experimental tooling for package management](#Official-experimental-tooling-for-package-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dep](https://github.com/golang/dep) | 13081 | Go dependency management tool experiment (deprecated) | a year ago |


#### [Unofficial libraries for package and dependency management](#Official-libraries-for-package-and-dependency-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glide](https://github.com/Masterminds/glide) | 8150 | Package Management for Golang | a year ago |
| [godep](https://github.com/tools/godep) | 5601 | dependency tool for go | 4 years ago |
| [govendor](https://github.com/kardianos/govendor) | 4984 | Use Go Modules. | 2 years ago |
| [gopm](https://github.com/gpmgo/gopm) | 2491 | Go Package Manager (gopm) is a package manager and build tool for Go. | 3 years ago |
| [gom](https://github.com/mattn/gom) | 1397 | Go Manager - bundle for go | 3 years ago |
| [gpm](https://github.com/pote/gpm) | 1199 | Barebones dependency manager for Go. | 4 years ago |
| [goop](https://github.com/petejkim/goop) | 779 | A simple dependency manager for Go (golang), inspired by Bundler. | 6 years ago |
| [modgv](https://github.com/lucasepe/modgv) | 401 | Converts 'go mod graph' output into Graphviz's DOT language | a year ago |
| [nut](https://github.com/owenthereal/nut) | 237 | Vendor Go dependencies | 7 years ago |
| [johnny-deps](https://github.com/VividCortex/johnny-deps) | 213 | Barebones dependency manager for Go. | a year ago |
| [mvn-golang](https://github.com/raydac/mvn-golang) | 131 | maven plugin to automate GoSDK load and build of projects | a day ago |
| [VenGO](https://github.com/DamnWidget/VenGO) | 120 | Create and manage Isolated Virtual Environments for Go | 6 years ago |
| [gop](https://github.com/lunny/gop) | 48 | Moved to https://gitea.com/lunny/gop | 3 years ago |


### [Performance](#Performance)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jaeger](https://github.com/jaegertracing/jaeger) | 15185 | CNCF Jaeger, a Distributed Tracing Platform | an hour ago |
| [pixie](https://github.com/pixie-io/pixie) | 2923 | Instant Kubernetes-Native Application Observability | 36 minutes ago |
| [statsviz](https://github.com/arl/statsviz) | 1763 | :rocket: Instant live visualization of your Go application runtime statistics (GC, MemStats, etc.) in the browser | 2 days ago |
| [profile](https://github.com/pkg/profile) | 1656 | Simple profiling for Go | 3 months ago |
| [tracer](https://github.com/kamilsk/tracer) | 63 | 🧶 Dead simple, lightweight tracing. | a year ago |


### [Query Language](#Query-Language)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphql](https://github.com/graphql-go/graphql) | 8321 | An implementation of GraphQL for Go / Golang | a month ago |
| [gqlgen](https://github.com/99designs/gqlgen) | 7119 | go generate based graphql server library | 3 days ago |
| [graphql-go](https://github.com/graph-gophers/graphql-go) | 4055 | GraphQL server with a focus on ease of use | 16 days ago |
| [gojsonq](https://github.com/thedevsaddam/gojsonq) | 1815 | A simple Go package to Query over JSON/YAML/XML/CSV Data  | 22 days ago |
| [dasel](https://github.com/TomWright/dasel) | 1812 | Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package. | a month ago |
| [jsonql](https://github.com/elgs/jsonql) | 249 | JSON query expression library in Golang. | a year ago |
| [rql](https://github.com/a8m/rql) | 246 | Resource Query Language for REST | a month ago |
| [jsonslice](https://github.com/bhmj/jsonslice) | 59 | json slicer | a month ago |
| [graphql](https://github.com/tmc/graphql) | 54 | graphql parser + utilities | 5 years ago |
| [api-fu](https://github.com/ccbrown/api-fu) | 39 | A collection of Go packages for creating robust GraphQL APIs | 2 months ago |
| [straf](https://github.com/ThundR67/straf) | 33 | Convert Golang Struct To GraphQL Object On The Fly | 2 years ago |
| [rest-query-parser](https://github.com/timsolov/rest-query-parser) | 32 | Query Parser for REST | 3 months ago |
| [jsonpath](https://github.com/AsaiYusuke/jsonpath) | 8 | A query library for retrieving part of JSON based on JSONPath syntax. | 4 months ago |
| [gws](https://github.com/Zaba505/gws) | 4 | A WebSocket client and server for GraphQL | a year ago |


### [Resource Embedding](#Resource-Embedding)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [statik](https://github.com/rakyll/statik) | 3369 | Embed files into a Go executable | a year ago |
| [packr](https://github.com/gobuffalo/packr) | 3358 | The simple and easy way to embed static files into Go binaries. | 2 months ago |
| [go.rice](https://github.com/GeertJohan/go.rice) | 2272 | go.rice is a Go package that makes working with resources such as html,js,css,images,templates, etc very easy. | 4 months ago |
| [vfsgen](https://github.com/shurcooL/vfsgen) | 942 | Takes an input http.FileSystem (likely at go generate time) and generates Go code that statically implements it. | a month ago |
| [esc](https://github.com/mjibson/esc) | 608 | A simple file embedder for Go | 2 years ago |
| [fileb0x](https://github.com/UnnoTed/fileb0x) | 599 | a better customizable tool to embed files in go; also update embedded files remotely without restarting the server | a year ago |
| [go-resources](https://github.com/omeid/go-resources) | 174 | Unfancy resources embedding for Go with out of box http.FileSystem support. | 9 months ago |
| [statics](https://github.com/go-playground/statics) | 65 | :file_folder: Embeds static resources into go files for single binary compilation + works with http.FileSystem + symlinks | 5 years ago |
| [templify](https://github.com/wlbr/templify) | 27 | A tool to be used with 'go generate' to embed external template files into Go code. | 6 months ago |
| [rebed](https://github.com/soypat/rebed) | 20 | Recreates directory and files from embedded filesystem using Go 1.16 embed.FS type. | a year ago |
| [debme](https://github.com/leaanthony/debme) | 15 | embed.FS wrapper providing additional functionality | 8 months ago |
| [mule](https://github.com/wlbr/mule) | 11 | mule is a tool to be used with 'go generate' to embed external resources files into Go code. | 6 months ago |


### [Science and Data Analysis](#Science-and-Data-Analysis)
* Libraries for scientific computing and data analyzing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gonum](https://github.com/gonum/gonum) | 5523 | Gonum is a set of numeric libraries for the Go programming language. It contains libraries for matrices, statistics, optimization, and more | 2 days ago |
| [stats](https://github.com/montanaflynn/stats) | 2284 | A well tested and comprehensive Golang statistics library package with no dependencies. | 3 months ago |
| [plot](https://github.com/gonum/plot) | 2105 | A repository for plotting and visualizing data | a month ago |
| [gosl](https://github.com/cpmech/gosl) | 1638 | Linear algebra, eigenvalues, FFT, Bessel, elliptic, orthogonal polys, geometry, NURBS, numerical quadrature, 3D transfinite interpolation, random numbers, Mersenne twister, probability distributions, optimisation, differential equations. | 20 days ago |
| [streamtools](https://github.com/nytlabs/streamtools) | 1317 | tools for working with streams of data | 7 years ago |
| [go-dsp](https://github.com/mjibson/go-dsp) | 764 | Digital Signal Processing for Go | 22 days ago |
| [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) | 749 | DataFrames for Go: For statistics, machine-learning, and data manipulation/exploration | 4 months ago |
| [chart](https://github.com/vdobler/chart) | 713 | Provide basic charts in go | 8 months ago |
| [goraph](https://github.com/gyuho/goraph) | 653 | Package goraph implements graph data structure and algorithms. | 4 years ago |
| [graph](https://github.com/yourbasic/graph) | 520 | Graph algorithms and data structures | 5 months ago |
| [orb](https://github.com/paulmach/orb) | 481 | Types and utilities for working with 2d geometry in Golang | a day ago |
| [ewma](https://github.com/VividCortex/ewma) | 346 | Exponentially Weighted Moving Average algorithms for Go. | 6 months ago |
| [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) | 338 | 📅 Calendar heatmap inspired by GitHub contribution activity  | a month ago |
| [gohistogram](https://github.com/VividCortex/gohistogram) | 159 | Streaming approximate histograms in Go | a year ago |
| [TextRank](https://github.com/DavidBelicza/TextRank) | 150 | :wink: :cyclone: :strawberry: TextRank implementation in Golang with extendable features (summarization, phrase extraction) and multithreading (goroutine). | 7 months ago |
| [sparse](https://github.com/james-bowman/sparse) | 126 | Sparse matrix formats for linear algebra supporting scientific and machine learning applications | 7 months ago |
| [go-estimate](https://github.com/milosgajdos/go-estimate) | 92 | State estimation and filtering algorithms in Go | 6 months ago |
| [pagerank](https://github.com/alixaxel/pagerank) | 74 | Weighted PageRank implementation in Go | 8 months ago |
| [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) | 55 | 🏝 JSONL Graph Tools | a month ago |
| [geom](https://github.com/skelterjohn/geom) | 50 | 2d geometry for golang | 4 years ago |
| [evaler](https://github.com/soniah/evaler) | 47 | Implements a simple floating point arithmetic expression evaluator in Go (golang). | 4 years ago |
| [goent](https://github.com/kzahedi/goent) | 26 | GO Implementation of Entropy Measures | 3 years ago |
| [triangolatte](https://github.com/tchayen/triangolatte) | 25 | 2D triangulation library. Allows translating lines and polygons (both based on points) to the language of GPUs. | 6 months ago |
| [decimal](https://github.com/db47h/decimal) | 24 | An arbitrary-precision decimal floating-point arithmetic package for Go | 2 years ago |
| [piecewiselinear](https://github.com/sgreben/piecewiselinear) | 21 | tiny linear interpolation library for go (factored out from https://github.com/sgreben/yeetgif) | a year ago |
| [GoStats](https://github.com/OGFris/GoStats) | 19 | GoStats is a go library for math statistics mostly used in ML domains, it covers most of the statistical measures functions. | 3 years ago |
| [godesim](https://github.com/soypat/godesim) | 17 | ODE system solver made simple. For IVPs (initial value problems). | 3 months ago |
| [PiHex](https://github.com/claygod/PiHex) | 15 | PiHex Library, written in Go, generates a hexadecimal number sequence in the number Pi in the range from 0 to 10,000,000. | a year ago |
| [ode](https://github.com/ChristopherRabotin/ode) | 14 | An ordinary differential equation solving library in golang. | 5 years ago |
| [assocentity](https://github.com/ndabAP/assocentity) | 7 | Package assocentity returns the average distance from words to a given entity | a year ago |
| [rootfinding](https://github.com/khezen/rootfinding) | 7 | root-finding library | 2 years ago |
| [go-gt](https://github.com/ThePaw/go-gt) | 6 | Automatically exported from code.google.com/p/go-gt | 6 years ago |
| [bradleyterry](https://github.com/seanhagen/bradleyterry) | 5 | Package to do Bradley-Terry Model pairwise compairsons | 3 years ago |


### [Security](#Security)
* Libraries that are used to help make your application more secure.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 9967 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | a month ago |
| [lego](https://github.com/go-acme/lego) | 5114 | Let's Encrypt client and ACME library written in Go | 4 days ago |
| [certmagic](https://github.com/caddyserver/certmagic) | 3923 | Automatic HTTPS for any Go program: fully-managed TLS certificate issuance and renewal | 6 hours ago |
| [cameradar](https://github.com/Ullaakut/cameradar) | 2829 | Cameradar hacks its way into RTSP videosurveillance cameras | 3 months ago |
| [memguard](https://github.com/awnumar/memguard) | 2088 | Secure software enclave for storage of sensitive information in memory. | a year ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1892 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | a year ago |
| [secure](https://github.com/unrolled/secure) | 1879 | HTTP middleware for Go that facilitates some quick security wins. | 2 days ago |
| [themis](https://github.com/cossacklabs/themis) | 1441 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | 10 days ago |
| [acra](https://github.com/cossacklabs/acra) | 938 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 5 hours ago |
| [nacl](https://github.com/kevinburke/nacl) | 519 | Pure Go implementation of the NaCL set of API's | 10 months ago |
| [ssh-vault](https://github.com/ssh-vault/ssh-vault) | 340 | 🌰  encrypt/decrypt using ssh keys | 7 months ago |
| [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) | 313 | A rest application to update firewalld rules on a linux server  | a year ago |
| [go-password-validator](https://github.com/wagslane/go-password-validator) | 313 | Validate the Strength of a Password in Go | 2 months ago |
| [badactor](https://github.com/jaredfolkins/badactor) | 305 | BadActor.org An in-memory application driven jailer written in Go | 2 years ago |
| [optimus-go](https://github.com/pjebs/optimus-go) | 302 | ID hashing and Obfuscation using Knuth's Algorithm | 2 years ago |
| [passlib](https://github.com/hlandau/passlib) | 262 | :key: Idiotproof golang password validation library inspired by Python's passlib | a year ago |
| [go-yara](https://github.com/hillu/go-yara) | 243 | Go bindings for YARA | 2 months ago |
| [simple-scrypt](https://github.com/elithrar/simple-scrypt) | 175 | A convenience library for generating, comparing and inspecting password hashes using the scrypt KDF in Go 🔑 | 10 months ago |
| [yara](https://github.com/plusvic/yara) | 124 | The pattern matching swiss knife | 2 years ago |
| [argon2pw](https://github.com/raja/argon2pw) | 89 | Argon2 password hashing package for go with constant time hash comparison | 5 months ago |
| [dongle](https://github.com/golang-module/dongle) | 71 | A simple, semantic and developer-friendly golang package for encoding&decoding and encryption&decryption | 6 months ago |
| [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) | 46 | A probably paranoid Golang utility library for securely hashing and encrypting passwords based on the Dropbox method. This implementation uses Blake2b, Scrypt and XSalsa20-Poly1305 (via NaCl SecretBox) to create secure password hashes that are also encrypted using a master passphrase. | a year ago |
| [go-generate-password](https://github.com/m1/go-generate-password) | 31 | Password generator written in Go | 6 months ago |
| [certificates](https://github.com/mvmaasakkers/certificates) | 23 | An opinionated helper for generating tls certificates | a year ago |
| [secureio](https://github.com/xaionaro-go/secureio) | 23 | An easy-to-use XChaCha20-encryption wrapper for io.ReadWriteCloser (even lossy UDP) using ECDH key exchange algorithm, ED25519 signatures and Blake3+Poly1305 checksums/message-authentication for Go (golang). Also a multiplexer. | 2 years ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 16 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [goArgonPass](https://github.com/dwin/goArgonPass) | 14 | goArgonPass is a Argon2 Password utility package for Go using the crypto library package Argon2 designed to be compatible with Passlib for Python and Argon2 PHP. Argon2 was the winner of the most recent Password Hashing Competition. This is designed for use anywhere password hashing and verification might be needed and is intended to replace implementations using bcrypt or Scrypt. | a year ago |
| [sslmgr](https://github.com/adrianosela/sslmgr) | 12 | A layer of abstraction the around acme/autocert certificate manager (Golang) | 3 years ago |


### [Serialization](#Serialization)
* Libraries and tools for binary serialization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/json-iterator/go) | 10461 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 3 days ago |
| [age](https://github.com/FiloSottile/age) | 9967 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | a month ago |
| [protobuf](https://github.com/golang/protobuf) | 8239 | Go support for Google's protocol buffers | 2 days ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 5384 | Go library for decoding generic map values into native Go structures and vice versa. | 13 days ago |
| [protobuf](https://github.com/gogo/protobuf) | 5074 | [Looking for new ownership] Protocol Buffers for Go with Gadgets | a month ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1892 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | a year ago |
| [go](https://github.com/ugorji/go) | 1629 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 3 months ago |
| [acra](https://github.com/cossacklabs/acra) | 938 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 5 hours ago |
| [csvutil](https://github.com/jszwec/csvutil) | 673 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 3 months ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 651 | binary serialization format | 5 months ago |
| [cbor](https://github.com/fxamacker/cbor) | 379 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | 17 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 280 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 2 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 155 | PHP session encoder/decoder written in Go | 3 years ago |
| [structomap](https://github.com/danhper/structomap) | 131 | Easily and dynamically generate maps from Go static structures | 3 years ago |
| [bambam](https://github.com/glycerine/bambam) | 64 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 5 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 48 | Asn.1 BER and DER encoding library for golang. | 3 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 42 | Golang binary decoder for mapping data into the structure | 2 months ago |
| [bel](https://github.com/csweichel/bel) | 19 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | 2 years ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 18 | Fixed width file parser (encoder/decoder) in GO (golang) | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 17 | A standard way to wrap a proto message | 5 months ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 16 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 16 | Converts go types no matter what | 9 months ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 6 | A Go package for encode/decode fixed-width data | 2 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 4 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | 10 months ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 3 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 2 years ago |


### [Server Applications](#Server-Applications)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/json-iterator/go) | 10461 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 3 days ago |
| [age](https://github.com/FiloSottile/age) | 9967 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | a month ago |
| [protobuf](https://github.com/golang/protobuf) | 8239 | Go support for Google's protocol buffers | 2 days ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 5384 | Go library for decoding generic map values into native Go structures and vice versa. | 13 days ago |
| [protobuf](https://github.com/gogo/protobuf) | 5074 | [Looking for new ownership] Protocol Buffers for Go with Gadgets | a month ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1892 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | a year ago |
| [go](https://github.com/ugorji/go) | 1629 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 3 months ago |
| [acra](https://github.com/cossacklabs/acra) | 938 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 5 hours ago |
| [csvutil](https://github.com/jszwec/csvutil) | 673 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 3 months ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 651 | binary serialization format | 5 months ago |
| [cbor](https://github.com/fxamacker/cbor) | 379 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | 17 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 280 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 2 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 155 | PHP session encoder/decoder written in Go | 3 years ago |
| [structomap](https://github.com/danhper/structomap) | 131 | Easily and dynamically generate maps from Go static structures | 3 years ago |
| [bambam](https://github.com/glycerine/bambam) | 64 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 5 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 48 | Asn.1 BER and DER encoding library for golang. | 3 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 42 | Golang binary decoder for mapping data into the structure | 2 months ago |
| [bel](https://github.com/csweichel/bel) | 19 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | 2 years ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 18 | Fixed width file parser (encoder/decoder) in GO (golang) | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 17 | A standard way to wrap a proto message | 5 months ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 16 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 16 | Converts go types no matter what | 9 months ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 6 | A Go package for encode/decode fixed-width data | 2 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 4 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | 10 months ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 3 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 2 years ago |


### [Stream Processing](#Stream-Processing)
* Libraries and tools for stream processing and reactive programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-streams](https://github.com/reugn/go-streams) | 843 | A lightweight stream processing library for Go | 6 days ago |
| [machine](https://github.com/whitaker-io/machine) | 101 | Machine is a workflow/pipeline library for processing data | a month ago |
| [stream](https://github.com/youthlin/stream) | 50 | Go Stream, like Java 8 Stream. | a year ago |


### [Template Engines](#Template-Engines)
* Libraries and tools for templating and lexing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gofpdf](https://github.com/jung-kurt/gofpdf) | 3943 | A PDF document generator with high level support for text, drawing and images | 3 months ago |
| [sprig](https://github.com/Masterminds/sprig) | 2787 | Useful template functions for Go templates. | 19 days ago |
| [quicktemplate](https://github.com/valyala/quicktemplate) | 2337 | Fast, powerful, yet easy to use template engine for Go. Optimized for speed, zero memory allocations in hot paths. Up to 20x faster than html/template | 5 months ago |
| [pongo2](https://github.com/flosch/pongo2) | 2163 | Django-syntax like template-engine for Go | 13 days ago |
| [hero](https://github.com/shiyanhui/hero) | 1491 | A handy, fast and powerful go template engine. | 2 years ago |
| [mustache](https://github.com/hoisie/mustache) | 1033 | The mustache template language in Go | a month ago |
| [amber](https://github.com/eknkc/amber) | 889 | Amber is an elegant templating engine for Go Programming Language, inspired from HAML and Jade | a year ago |
| [jet](https://github.com/CloudyKit/jet) | 887 | Jet  template engine | 4 months ago |
| [ace](https://github.com/yosssi/ace) | 810 | HTML template engine for Go | 4 years ago |
| [gorazor](https://github.com/sipin/gorazor) | 795 | Razor view engine for go | a year ago |
| [fasttemplate](https://github.com/valyala/fasttemplate) | 569 | Simple and fast template engine for Go | a year ago |
| [maroto](https://github.com/johnfercher/maroto) | 555 | A maroto way to create PDFs. Maroto is inspired in Bootstrap and uses gofpdf. Fast and simple. | 23 days ago |
| [ego](https://github.com/benbjohnson/ego) | 516 | An ERB-style templating language for Go. | 3 months ago |
| [raymond](https://github.com/aymerick/raymond) | 463 | Handlebars for golang | 3 months ago |
| [goview](https://github.com/foolin/goview) | 268 | Goview is a lightweight, minimalist and idiomatic template library based on golang html/template for building Go web application. | a month ago |
| [soy](https://github.com/robfig/soy) | 159 | Go implementation for Soy templates (Google Closure templates) | 5 months ago |
| [liquid](https://github.com/osteele/liquid) | 147 | A Liquid template engine in Go | 3 days ago |
| [velvet](https://github.com/gobuffalo/velvet) | 74 | A sweet velvety templating package | 5 years ago |
| [kasia.go](https://github.com/ziutek/kasia.go) | 73 | Templating system for HTML and other text documents - go implementation | 6 years ago |
| [extemplate](https://github.com/dannyvankooten/extemplate) | 43 | Wrapper package for Go's template/html to allow for easy file-based template inheritance. | 8 months ago |
| [gospin](https://github.com/m1/gospin) | 35 | Article spinning and spintax/spinning syntax engine written in Go, useful for A/B, testing pieces of text/articles and creating more natural conversations | 9 months ago |
| [damsel](https://github.com/dskinner/damsel) | 25 | Package damsel provides html outlining via css-selectors and common template functionality. | 6 years ago |
| [tbd](https://github.com/lucasepe/tbd) | 17 | "to be defined" - a really simple way to create text templates with placeholders | 6 months ago |


### [Testing](#Testing)
* Libraries for testing codebases and generating test data.

#### [Testing Frameworks](#Testing-Frameworks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testify](https://github.com/stretchr/testify) | 15487 | A toolkit with common assertions and mocks that plays nicely with the standard library | 2 days ago |
| [goconvey](https://github.com/smartystreets/goconvey) | 6983 | Go testing in the browser. Integrates with `go test`. Write behavioral tests in Go. | 13 days ago |
| [go-cmp](https://github.com/google/go-cmp) | 2716 | Package for comparing Go values in tests | a month ago |
| [httpexpect](https://github.com/gavv/httpexpect) | 1855 | End-to-end HTTP and REST API testing for Go. | 6 months ago |
| [godog](https://github.com/cucumber/godog) | 1574 | Cucumber for golang | a day ago |
| [go-vcr](https://github.com/dnaeon/go-vcr) | 852 | Record and replay your HTTP interactions for fast, deterministic and accurate tests | 4 months ago |
| [goblin](https://github.com/franela/goblin) | 835 | Minimal and Beautiful Go testing framework | 4 months ago |
| [testfixtures](https://github.com/go-testfixtures/testfixtures) | 748 | Ruby on Rails like test fixtures for Go. Write tests against a real database | 5 days ago |
| [baloo](https://github.com/h2non/baloo) | 718 | Expressive end-to-end HTTP API testing made easy in Go | a month ago |
| [gnomock](https://github.com/orlangure/gnomock) | 671 | Test your code without writing mocks with ephemeral Docker containers 📦 Setup popular services with just a couple lines of code ⏱️ No bash, no yaml, only code 💻 | 2 days ago |
| [go-mutesting](https://github.com/zimmski/go-mutesting) | 509 | Mutation testing for Go source code | 2 months ago |
| [goc](https://github.com/qiniu/goc) | 485 | A Comprehensive Coverage Testing System for The Go Programming Language | 3 days ago |
| [gofight](https://github.com/appleboy/gofight) | 398 | Testing API Handler written in Golang. | 8 months ago |
| [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) | 345 | Run a real Postgres database locally on Linux, OSX or Windows as part of another Go application or test | 15 hours ago |
| [testza](https://github.com/MarvinJWendt/testza) | 312 | Full-featured test framework for Go! Assertions, mocking, input testing, output capturing, and much more! 🍕 | 3 days ago |
| [gotest.tools](https://github.com/gotestyourself/gotest.tools) | 284 | A collection of packages to augment the go testing package and support common patterns. | a month ago |
| [go-testdeep](https://github.com/maxatome/go-testdeep) | 273 | Extremely flexible golang deep comparison, extends the go testing package, tests HTTP APIs and provides tests suite | 3 days ago |
| [frisby](https://github.com/hofstadter-io/frisby) | 271 | API testing framework inspired by frisby-js | 2 years ago |
| [go-carpet](https://github.com/msoap/go-carpet) | 220 | go-carpet - show test coverage in terminal for Go source files | 2 months ago |
| [cupaloy](https://github.com/bradleyjkemp/cupaloy) | 202 | Simple Go snapshot testing | 3 months ago |
| [endly](https://github.com/viant/endly) | 202 | End to end functional test and automation framework | 2 months ago |
| [commander](https://github.com/commander-cli/commander) | 195 | Test your command line interfaces on windows, linux and osx and nodes viá ssh and docker | a day ago |
| [charlatan](https://github.com/percolate/charlatan) | 194 | Go Interface Mocking Tool | 2 years ago |
| [dbcleaner](https://github.com/khaiql/dbcleaner) | 134 | Clean database for testing, inspired by database_cleaner for Ruby | 3 months ago |
| [gospec](https://github.com/luontola/gospec) | 113 | Testing framework for Go. Allows writing self-documenting tests/specifications, and executes them concurrently and safely isolated. [UNMAINTAINED] | 8 years ago |
| [wstest](https://github.com/posener/wstest) | 86 | go websocket client for unit testing of a websocket handler | a year ago |
| [gocrest](https://github.com/corbym/gocrest) | 81 | GoCrest - Hamcrest-like matchers for Go | a year ago |
| [testcase](https://github.com/adamluzsi/testcase) | 80 | testcase is an opinionated testing framework based on BDD principles. | 18 hours ago |
| [jsonassert](https://github.com/kinbiko/jsonassert) | 76 | A Go test assertion library for verifying that two representations of JSON are semantically equal | 2 months ago |
| [go-hit](https://github.com/Eun/go-hit) | 68 | http integration test framework | 21 days ago |
| [restit](https://github.com/go-restit/restit) | 55 | A Go library help testing your RESTful API application | 2 years ago |
| [gospecify](https://github.com/stesla/gospecify) | 52 | A BDD library for Go | 10 years ago |
| [covergates](https://github.com/covergates/covergates) | 47 | The portal gates to coverage reports | a year ago |
| [gomatch](https://github.com/jfilipczyk/gomatch) | 41 | Library created for testing JSON against patterns. | a year ago |
| [dsunit](https://github.com/viant/dsunit) | 39 | Datastore Testibility | 2 years ago |
| [assert](https://github.com/go-playground/assert) | 37 | :exclamation:Basic Assertion Library used along side native go testing, with building blocks for custom assertions | a year ago |
| [hamcrest](https://github.com/rdrdr/hamcrest) | 27 | Hamcrest matchers for the Go programming language | a year ago |
| [flute](https://github.com/suzuki-shunsuke/flute) | 16 | Golang HTTP client testing framework | 6 days ago |
| [schema](https://github.com/jgroeneveld/schema) | 16 | Quick and easy expression matching for JSON schemas used in requests and responses | 2 years ago |
| [gogiven](https://github.com/corbym/gogiven) | 11 | gogiven - BDD testing framework for go that generates readable output directly from source code | 7 months ago |
| [testsql](https://github.com/zhulongcheng/testsql) | 11 | Generate test data from SQL files before testing and clear it after finished. | 2 years ago |
| [biff](https://github.com/fulldump/biff) | 10 | Bifurcation Framework for testing and use cases | 7 months ago |
| [gosuite](https://github.com/pavlo/gosuite) | 10 | Test suites support for standard Go1.7 "testing" by leveraging Subtests feature | 5 years ago |
| [badio](https://github.com/cavaliergopher/badio) | 9 | Extensions to Go's testing/iotest package | 6 years ago |
| [stop-and-go](https://github.com/elgohr/stop-and-go) | 6 | Testing helper for concurrency | 6 months ago |
| [test](https://github.com/tvastar/test) | 6 | test utilities for golang | 2 years ago |
| [fixenv](https://github.com/rekby/fixenv) | 5 |  | 5 months ago |
| [trial](https://github.com/jgroeneveld/trial) | 5 | A simple assertion library for go | 2 years ago |
| [tt](https://github.com/vcaesar/tt) | 4 | Simple and colorful test tools | 21 days ago |


#### [Mock](#Mock)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mock](https://github.com/golang/mock) | 6769 | GoMock is a mocking framework for the Go programming language. | 8 days ago |
| [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) | 4153 | Sql mock driver for golang to test database interactions | 2 days ago |
| [mockery](https://github.com/vektra/mockery) | 3272 | A mock code autogenerator for Golang | 23 days ago |
| [hoverfly](https://github.com/SpectoLabs/hoverfly) | 1834 | Lightweight service virtualization/API simulation tool for developers and testers | 8 days ago |
| [gock](https://github.com/h2non/gock) | 1574 | HTTP traffic mocking and testing made easy in Go ༼ʘ̚ل͜ʘ̚༽ | 6 months ago |
| [httpmock](https://github.com/jarcoal/httpmock) | 1309 | HTTP mocking for Golang | 2 months ago |
| [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) | 619 | A tool for generating self-contained, type-safe test doubles in go | 20 days ago |
| [minimock](https://github.com/gojuno/minimock) | 449 | Powerful mock generation tool for Go programming language | 5 months ago |
| [go-txdb](https://github.com/DATA-DOG/go-txdb) | 422 | Immutable transaction isolated sql driver for golang | 2 months ago |
| [govcr](https://github.com/seborama/govcr) | 100 | HTTP mock for Golang: record and replay HTTP/HTTPS interactions for offline testing | 2 years ago |
| [timex](https://github.com/cabify/timex) | 60 | A test-friendly replacement for golang's time package | 2 years ago |
| [go-localstack](https://github.com/elgohr/go-localstack) | 36 | Go Wrapper for using localstack | 6 hours ago |
| [mockhttp](https://github.com/tv42/mockhttp) | 22 | Mock object for Go http.ResponseWriter | 7 years ago |
| [mockit](https://github.com/pasdam/mockit) | 8 | Library that make mocking of Go functions/methods easy | 3 days ago |


#### [Fuzzing and delta-debugging/reducing/shrinking](#Fuzzing-and-delta-debugging)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-fuzz](https://github.com/dvyukov/go-fuzz) | 4254 | Randomized testing for Go | 2 months ago |
| [gofuzz](https://github.com/google/gofuzz) | 1226 | Fuzz testing for go. | 5 months ago |
| [tavor](https://github.com/zimmski/tavor) | 230 | A generic fuzzing and delta-debugging framework | 3 years ago |


#### [Selenium and browser control tools](#Selenium-and-browser-control-tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [chromedp](https://github.com/chromedp/chromedp) | 7257 | A faster, simpler way to drive browsers supporting the Chrome DevTools Protocol. | 13 days ago |
| [rod](https://github.com/go-rod/rod) | 2134 | A Devtools driver for web automation and scraping | 2 days ago |
| [selenoid](https://github.com/aerokube/selenoid) | 2100 | Selenium Hub successor running browsers within containers. Scalable, immutable, self hosted Selenium-Grid on any platform with single binary. | 3 months ago |
| [playwright-go](https://github.com/playwright-community/playwright-go) | 627 | Playwright for Go a browser automation library to control Chromium, Firefox and WebKit with a single API. | 21 days ago |
| [cdp](https://github.com/mafredri/cdp) | 597 | Package cdp provides type-safe bindings for the Chrome DevTools Protocol (CDP), written in the Go programming language. | 7 months ago |
| [ggr](https://github.com/aerokube/ggr) | 280 | A lightweight load balancer used to create big Selenium clusters | 16 days ago |


#### [Fail injection](#Fail-injection)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [failpoint](https://github.com/pingcap/failpoint) | 652 | An implementation of failpoints for Golang. | a month ago |


### [Text Processing](#Text-Processing)
* Libraries for parsing and manipulating texts.

#### [Specific Formats](#Specific-Formats)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [colly](https://github.com/gocolly/colly) | 15935 | Elegant Scraper and Crawler Framework for Golang | 15 days ago |
| [goquery](https://github.com/PuerkitoBio/goquery) | 11117 | A little like that j-thing, only in Go. | a month ago |
| [blackfriday](https://github.com/russross/blackfriday) | 4881 | Blackfriday: a markdown processor for Go | 4 months ago |
| [sh](https://github.com/mvdan/sh) | 4472 | A shell parser, formatter, and interpreter with bash support; includes shfmt | 2 days ago |
| [toml](https://github.com/BurntSushi/toml) | 3768 | TOML parser for Golang with reflection. | 15 hours ago |
| [go-humanize](https://github.com/dustin/go-humanize) | 3057 | Go Humans! (formatters for units to human friendly sizes) | 14 days ago |
| [bluemonday](https://github.com/microcosm-cc/bluemonday) | 2186 | bluemonday: a fast golang HTML sanitizer (inspired by the OWASP Java HTML Sanitizer) to scrub user generated content of XSS | 10 days ago |
| [gofeed](https://github.com/mmcdole/gofeed) | 1816 | Parse RSS, Atom and JSON feeds in Go | a month ago |
| [inject](https://github.com/facebookarchive/inject) | 1364 | Package inject provides a reflect based injector. | 3 years ago |
| [go-toml](https://github.com/pelletier/go-toml) | 1162 | Go library for the TOML file format | a month ago |
| [commonregex](https://github.com/mingrammer/commonregex) | 795 | 🍫 A collection of common regular expressions for Go | 2 years ago |
| [slug](https://github.com/gosimple/slug) | 786 | URL-friendly slugify with multiple languages support. | 2 months ago |
| [dataflowkit](https://github.com/slotix/dataflowkit) | 509 | Extract structured data from web sites. Web sites scraping.   | 2 years ago |
| [mxj](https://github.com/clbanning/mxj) | 508 | Decode / encode XML to/from map[string]interface{} (or JSON); extract values with dot-notation paths and wildcards.  Replaces x2j and j2x packages. | 2 months ago |
| [gographviz](https://github.com/awalterschulze/gographviz) | 463 | Parses the Graphviz DOT language in golang | 6 months ago |
| [htmlquery](https://github.com/antchfx/htmlquery) | 455 | htmlquery is golang XPath package for HTML query. | 3 months ago |
| [gommon](https://github.com/labstack/gommon) | 429 | Common packages for Go | 3 months ago |
| [omniparser](https://github.com/jf-tech/omniparser) | 414 | omniparser: a native Golang ETL streaming parser and transform library for CSV, JSON, XML, EDI, text, etc. | 3 months ago |
| [go-runewidth](https://github.com/mattn/go-runewidth) | 410 | wcwidth for golang | 3 months ago |
| [gotext](https://github.com/leonelquinteros/gotext) | 323 | Go (Golang) GNU gettext utilities package  | 2 months ago |
| [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) | 319 | ⚙️ Convert HTML to Markdown. Even works with entire websites and can be extended through rules. | 25 days ago |
| [goq](https://github.com/andrewstuart/goq) | 212 | A declarative struct-tag-based HTML unmarshaling or scraping package for Go built on top of the goquery library | 5 months ago |
| [goribot](https://github.com/zhshch2002/goribot) | 205 | [Crawler/Scraper for Golang]🕷A lightweight distributed friendly Golang crawler framework.一个轻量的分布式友好的 Golang 爬虫框架。 | 2 years ago |
| [go-nmea](https://github.com/adrianmo/go-nmea) | 166 | A NMEA parser library in pure Go | a month ago |
| [github_flavored_markdown](https://github.com/shurcooL/github_flavored_markdown) | 142 | GitHub Flavored Markdown renderer with fenced code block highlighting, clickable header anchor links. | a year ago |
| [gospider](https://github.com/zhshch2002/gospider) | 142 | ⚡ Light weight Golang spider framework , 轻量的 Golang 爬虫框架 | a year ago |
| [sdp](https://github.com/gortc/sdp) | 113 | RFC 4566 SDP implementation in go | 2 years ago |
| [podcast](https://github.com/eduncan911/podcast) | 105 | iTunes and RSS 2.0 Podcast Generator in Golang | a year ago |
| [go-zero-width](https://github.com/trubitsyn/go-zero-width) | 97 | Zero-width character detection and removal for Go | 2 years ago |
| [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) | 91 | EditorConfig Core written in Go | 3 days ago |
| [align](https://github.com/Guitarbum722/align) | 73 | A general purpose application and library for aligning text. | 5 months ago |
| [go-slugify](https://github.com/mozillazg/go-slugify) | 72 | Pretty Slug. | 2 years ago |
| [go-vcard](https://github.com/emersion/go-vcard) | 66 | A Go library to parse and format vCard | 9 months ago |
| [goregen](https://github.com/zach-klippenstein/goregen) | 64 | randexp for Go. | 7 months ago |
| [genex](https://github.com/alixaxel/genex) | 63 | Genex package for Go | 2 years ago |
| [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) | 60 | Encoding and decoding for fixed-width formatted data | a month ago |
| [did](https://github.com/ockam-network/did) | 58 | A golang package to work with Decentralized Identifiers (DIDs)  | a year ago |
| [guesslanguage](https://github.com/endeveit/guesslanguage) | 53 | Guess the natural language of a text in Go | 4 years ago |
| [allot](https://github.com/sbstjn/allot) | 51 | Parse placeholder and wildcard text commands | 17 days ago |
| [pagser](https://github.com/foolin/pagser) | 51 | Pagser is a simple, extensible, configurable parse and deserialize html page to struct based on goquery and struct tags for golang crawler | a month ago |
| [bafi](https://github.com/mmalcek/bafi) | 47 | Universal JSON, BSON, YAML, CSV, XML converter with templates | 2 months ago |
| [gonameparts](https://github.com/polera/gonameparts) | 34 | Takes a full name and splits it into individual name parts | 3 years ago |
| [slugify](https://github.com/avelino/slugify) | 31 | A Go slugify application that handles string | 4 years ago |
| [normalize](https://github.com/avito-tech/normalize) | 25 |  | a year ago |
| [codetree](https://github.com/aerogo/codetree) | 19 | :evergreen_tree: Parses indented code and returns a tree structure. | 2 years ago |
| [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) | 13 | Fast and light wildcard pattern matching. Fork from Minio project. | 12 days ago |
| [enca](https://github.com/endeveit/enca) | 11 | Minimal cgo bindings for libenca | 6 years ago |
| [syndfeed](https://github.com/zhengchun/syndfeed) | 8 | A syndication feed parser for Atom 1.0 and RSS 2.0 in Go | 4 years ago |
| [ltsv](https://github.com/Wing924/ltsv) | 7 | High performance LTSV (Labeled Tab Separeted Value) reader for Go. | 3 years ago |
| [bbConvert](https://github.com/CalebQ42/bbConvert) | 6 | Converter from BBCode to HTML | 5 years ago |
| [doi](https://github.com/hscells/doi) | 6 | Parse and check doi objects in go. | 4 years ago |
| [encoding](https://github.com/ake-persson/encoding) | 5 | Go package provides a generic interface to encoders and decoders | 2 years ago |
| [go-output-format](https://github.com/drewstinnett/go-output-format) | 5 | Output go objects in standard formats, such as YAML, JSON, etc | 4 months ago |


#### [Utility](#Utility)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xurls](https://github.com/mvdan/xurls) | 864 | Extract urls from text | 2 days ago |
| [gotabulate](https://github.com/bndr/gotabulate) | 274 | Gotabulate - Easily pretty-print your tabular data with Go | a year ago |
| [radix](https://github.com/yourbasic/radix) | 172 | A fast string sorting algorithm (MSD radix sort) | 4 years ago |
| [regroup](https://github.com/oriser/regroup) | 101 | Match regex group into go struct using struct tags and automatic parsing | 7 months ago |
| [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) | 42 | A sanitization-based swear filter for Go. | 8 months ago |
| [parth](https://github.com/codemodus/parth) | 40 | Path parsing for segment unmarshaling and slicing. | 3 years ago |
| [xj2go](https://github.com/wk30/xj2go) | 23 | Convert xml and json to go struct | 4 months ago |
| [tagify](https://github.com/zoomio/tagify) | 19 | Tagify produces a set of tags from a given source. Source can be either an HTML page, a Markdown document or a plain text. Supports English, Russian, Chinese, Hindi, Spanish, Arabic, Japanese, German, Hebrew, French and Korean languages. | a month ago |
| [kace](https://github.com/codemodus/kace) | 17 | Common case conversions covering common initialisms. | 3 years ago |
| [TySug](https://github.com/Dynom/TySug) | 10 | A project around helping to prevent typing typos. TySug (Typo Suggestions) suggests alternative words with respect to keyboard layouts | 2 years ago |
| [parseargs-go](https://github.com/txgruppi/parseargs-go) | 9 | A string argument parser that understands quotes and backslashes | 5 years ago |
| [textwrap](https://github.com/isbm/textwrap) | 2 | Port of Python's "textwrap" module to Go | 3 years ago |


### [Third-party APIs](#Third-party-APIs)
* Libraries for accessing third party APIs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-github](https://github.com/google/go-github) | 8260 | Go library for accessing the GitHub API | 6 hours ago |
| [aws-sdk-go](https://github.com/aws/aws-sdk-go) | 7423 | AWS SDK for the Go programming language. | 11 hours ago |
| [slack](https://github.com/slack-go/slack) | 3808 | Slack API in Go - community-maintained fork created by the original author, @nlopes | 2 days ago |
| [google-api-go-client](https://github.com/googleapis/google-api-go-client) | 2916 | Auto-generated Google APIs for Go. | 6 hours ago |
| [google-cloud-go](https://github.com/googleapis/google-cloud-go) | 2767 | Google Cloud Client Libraries for Go. | 4 hours ago |
| [discordgo](https://github.com/bwmarrin/discordgo) | 2753 |  (Golang) Go bindings for Discord | 7 hours ago |
| [minio-go](https://github.com/minio/minio-go) | 1518 | MinIO Client SDK for Go | 11 hours ago |
| [stripe-go](https://github.com/stripe/stripe-go) | 1502 | Go library for the Stripe API.     | a day ago |
| [go-twitter](https://github.com/dghubble/go-twitter) | 1398 | Go Twitter REST and Streaming API v1.1 | 2 days ago |
| [anaconda](https://github.com/ChimeraCoder/anaconda) | 1108 | A Go client library for the Twitter 1.1 API | 7 months ago |
| [go-jira](https://github.com/andygrunwald/go-jira) | 1066 | Go client library for Atlassian Jira | a day ago |
| [facebook](https://github.com/huandu/facebook) | 1037 | A Facebook Graph API SDK For Go. | a month ago |
| [githubv4](https://github.com/shurcooL/githubv4) | 850 | Package githubv4 is a client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql). | a month ago |
| [webhooks](https://github.com/go-playground/webhooks) | 696 | :fishing_pole_and_fish: Webhook receiver for GitHub, Bitbucket, GitLab, Gogs | 14 days ago |
| [paypal](https://github.com/plutov/paypal) | 466 | Golang client for PayPal REST API | 3 months ago |
| [geo-golang](https://github.com/codingsince1985/geo-golang) | 425 | Go library to access geocoding and reverse geocoding APIs | 2 days ago |
| [ethrpc](https://github.com/onrik/ethrpc) | 222 | Golang client for ethereum json rpc api | a year ago |
| [go-marathon](https://github.com/gambol99/go-marathon) | 196 | A GO API library for working with Marathon | a year ago |
| [trello](https://github.com/adlio/trello) | 193 | Trello API wrapper for Go | 11 hours ago |
| [twitter-scraper](https://github.com/n0madic/twitter-scraper) | 186 | Scrape the Twitter Frontend API without authentication with Golang. | 24 days ago |
| [medium-sdk-go](https://github.com/Medium/medium-sdk-go) | 131 | A Golang SDK for Medium's OAuth2 API | 3 years ago |
| [gostorm](https://github.com/jsgilmore/gostorm) | 128 | GoStorm is a Go library that implements the communications protocol required to write Storm spouts and Bolts in Go that communicate with the Storm shells. | 4 years ago |
| [go-trending](https://github.com/andygrunwald/go-trending) | 117 | Go library for accessing trending repositories and developers at Github. | 4 months ago |
| [wit-go](https://github.com/wit-ai/wit-go) | 114 | Go client for wit.ai HTTP API | 9 hours ago |
| [pushover](https://github.com/gregdel/pushover) | 111 | Go wrapper for the Pushover API | 4 months ago |
| [hipchat](https://github.com/daneharrigan/hipchat) | 110 | A golang package to communicate with HipChat over XMPP | 5 years ago |
| [hipchat](https://github.com/andybons/hipchat) | 104 | This project implements a Go client library for the Hipchat API. | 6 years ago |
| [cachet](https://github.com/andygrunwald/cachet) | 90 | Go(lang) client library for Cachet (open source status page system). | 8 months ago |
| [simples3](https://github.com/rhnvrm/simples3) | 75 | Simple no frills AWS S3 Golang Library using REST with V4 Signing (without AWS Go SDK) | a month ago |
| [gosip](https://github.com/koltyakov/gosip) | 71 | ⚡️ SharePoint authentication, HTTP client & fluent API wrapper for Go (Golang) | 2 months ago |
| [igdb](https://github.com/Henry-Sarabia/igdb) | 71 | Go client for the Internet Game Database API | a year ago |
| [go-circleci](https://github.com/jszwedko/go-circleci) | 61 | Go library for interacting with CircleCI | 2 years ago |
| [go-unsplash](https://github.com/hbagdi/go-unsplash) | 58 | Go Client for the Unsplash API  | a year ago |
| [gogtrends](https://github.com/groovili/gogtrends) | 57 | Unofficial Google Trends API for Go | 5 months ago |
| [clarifai-go](https://github.com/Clarifai/clarifai-go) | 55 | DEPRECATED: please use https://github.com/Clarifai/clarifai-go-grpc | 4 years ago |
| [megos](https://github.com/andygrunwald/megos) | 54 | Go(lang) client library for accessing information of an Apache Mesos cluster. | 8 months ago |
| [go-amazon-product-advertising-api](https://github.com/ngs/go-amazon-product-advertising-api) | 51 | Go Client Library for Amazon Product Advertising API | 4 years ago |
| [gads](https://github.com/emiddleton/gads) | 49 | Google Adwords API for Go | 2 months ago |
| [ynab.go](https://github.com/brunomvsouza/ynab.go) | 49 | Go client for the YNAB API. Unofficial. It covers 100% of the resources made available by the YNAB API. | 5 months ago |
| [golang-tmdb](https://github.com/cyruzin/golang-tmdb) | 48 | This is a Golang wrapper for working with TMDb API. It aims to support version 3. | 12 days ago |
| [fcm](https://github.com/maddevsio/fcm) | 45 | Firebase Cloud Messaging for application servers implemented using the Go programming language. | 2 years ago |
| [uptimerobot](https://github.com/bitfield/uptimerobot) | 45 | Client library for UptimeRobot v2 API | a year ago |
| [gomusicbrainz](https://github.com/michiwend/gomusicbrainz) | 44 | a Go (Golang) MusicBrainz WS2 client library - work in progress | a year ago |
| [go-xkcd](https://github.com/nishanths/go-xkcd) | 43 | xkcd.com API client in Go | 4 months ago |
| [mixpanel](https://github.com/dukex/mixpanel) | 42 | Golang Mixpanel Client | 8 days ago |
| [go-spotify](https://github.com/rapito/go-spotify) | 42 | Go library for the Spotify Web API | a year ago |
| [go-postman-collection](https://github.com/rbretecher/go-postman-collection) | 39 | Go module to work with Postman Collections | 4 days ago |
| [golyrics](https://github.com/mamal72/golyrics) | 36 | A simple Go package to fetch lyrics from Wikia | 4 years ago |
| [airtable](https://github.com/mehanizm/airtable) | 33 | Simple golang airtable API wrapper | 2 months ago |
| [gami](https://github.com/bit4bit/gami) | 31 | GO - Asterisk AMI Interface | 4 years ago |
| [translate](https://github.com/nuveo/translate) | 31 | Go online translation package | 6 years ago |
| [gcm](https://github.com/TheOrioli/gcm) | 30 | Google Cloud Messaging for application servers implemented using the Go programming language. | 6 years ago |
| [patreon-go](https://github.com/mxpv/patreon-go) | 27 | Patreon Go API client | 2 years ago |
| [go-myanimelist](https://github.com/nstratos/go-myanimelist) | 25 | Go library for accessing the MyAnimeList API: https://myanimelist.net/apiconfig/references/api/v2 | 3 months ago |
| [google-play-scraper](https://github.com/n0madic/google-play-scraper) | 24 | Golang scraper to get data from Google Play Store | a month ago |
| [go-steam](https://github.com/sostronk/go-steam) | 24 | Go library for querying Source servers | 5 months ago |
| [lastpass-go](https://github.com/ansd/lastpass-go) | 23 | Golang client for LastPass | 2 days ago |
| [go-shopify](https://github.com/rapito/go-shopify) | 22 | Simple Shopify API for the Go Programming Language | a year ago |
| [go-imgur](https://github.com/koffeinsource/go-imgur) | 21 | Go library to use the imgur.com API | 10 months ago |
| [go-twitch](https://github.com/knspriggs/go-twitch) | 21 | A golang client for the Twitch v3 API - public APIs only (for now) | 4 years ago |
| [codeship-go](https://github.com/codeship/codeship-go) | 18 | Go library for accessing the Codeship API v2 | a year ago |
| [brewerydb](https://github.com/naegelejd/brewerydb) | 17 | Go library for http://www.brewerydb.com/ API | 7 years ago |
| [textbelt](https://github.com/farmergreg/textbelt) | 17 | golang library for textbelt.com | 6 years ago |
| [coinpaprika-api-go-client](https://github.com/coinpaprika/coinpaprika-api-go-client) | 14 | Go client library for interacting with Coinpaprika's API | a year ago |
| [go-hacknews](https://github.com/PaulRosset/go-hacknews) | 14 | 📟  Tiny utility Go client for HackerNews API. | 5 years ago |
| [go-aws-news](https://github.com/circa10a/go-aws-news) | 12 | Go app + library to fetch what's new from AWS | 3 months ago |
| [go-google-analytics](https://github.com/chonthu/go-google-analytics) | 12 | Simple Reporting for Google Analytics | 7 years ago |
| [device-check-go](https://github.com/rinchsan/device-check-go) | 11 | :iphone: iOS DeviceCheck SDK for Go - query and modify the per-device bits | 4 months ago |
| [gopaapi5](https://github.com/utekaravinash/gopaapi5) | 11 | Go Client Library for Amazon's Product Advertising API 5.0 | 2 years ago |
| [go-here](https://github.com/abdullahselek/go-here) | 10 | Go client library around the HERE location based APIs. | 2 years ago |
| [go-openproject](https://github.com/manuelbcd/go-openproject) | 10 | Go client library for OpenProject | 10 months ago |
| [smitego](https://github.com/sergiotapia/smitego) | 10 | SmiteGo is an API wrapper for the Smite game from HiRez. It is written in Go! | 8 years ago |
| [gomalshare](https://github.com/MonaxGT/gomalshare) | 9 | Go library MalShare API | 3 years ago |
| [go-sophos](https://github.com/esurdam/go-sophos) | 8 | Sophos UTM 9 REST API Client in Golang | a year ago |
| [rrdaclient](https://github.com/Omie/rrdaclient) | 8 | Go bindings for RRDA https://github.com/fcambus/rrda | 7 years ago |
| [go-google-email-audit-api](https://github.com/ngs/go-google-email-audit-api) | 7 | Go Client Library for G Suite Email Audit API | 5 years ago |
| [libgoffi](https://github.com/clevabit/libgoffi) | 7 | libgoffi - libffi adapter library for Go | a year ago |
| [go-zooz](https://github.com/gojuno/go-zooz) | 7 | Zooz API client for Go | 2 months ago |
| [go-sptrans](https://github.com/sergioaugrod/go-sptrans) | 6 | Go client library for the SPTrans Olho Vivo API. :bus: | a year ago |
| [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) | 6 | Golang package which provides http Handlers to serve the swagger ui | 8 months ago |
| [gumblr](https://github.com/mattcunningham/gumblr) | 6 | A Go Wrapper for the Tumblr v2 API | 5 years ago |
| [go-chronos](https://github.com/axelspringer/go-chronos) | 4 | :dancers: Go Chronos 3.x REST API Client | 4 years ago |
| [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) | 4 | This is RAWG SDK GO. This library contains methods for interacting with RAWG API. | 2 months ago |
| [kanka](https://github.com/Henry-Sarabia/kanka) | 3 | Go client for the Kanka API | 2 years ago |
| [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) | 2 | Golang SDK for AppStore Connect API (Unofficial) | 4 days ago |
| [go-restcountries](https://github.com/chriscross0/go-restcountries) | 2 | Go wrapper for the REST Countries API. | 4 months ago |
| [playlyfe-go-sdk](https://github.com/playlyfe/playlyfe-go-sdk) | 1 | This is the official Playlyfe Golang Sdk | 6 years ago |
| [tripadvisor-golang](https://github.com/mrbenosborne/tripadvisor-golang) | 1 | A TripAdvisor API wrapper for Golang. | 2 years ago |
| [vl-go](https://github.com/verifid/vl-go) | 1 | Go client library around the VerifID identity verification layer API. | 9 months ago |


### [Utilities](#Utilities)
* General utilities and tools to make your life easier.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fzf](https://github.com/junegunn/fzf) | 42131 | :cherry_blossom: A command-line fuzzy finder | 10 days ago |
| [hub](https://github.com/github/hub) | 21545 | A command-line tool that makes git easier to use with GitHub. | 7 days ago |
| [ctop](https://github.com/bcicen/ctop) | 12356 | Top-like interface for container metrics | 16 days ago |
| [sqlx](https://github.com/jmoiron/sqlx) | 11449 | general purpose extensions to golang's database/sql | 7 days ago |
| [wuzz](https://github.com/asciimoo/wuzz) | 9899 | Interactive cli tool for HTTP inspection | a month ago |
| [goreleaser](https://github.com/goreleaser/goreleaser) | 9636 | Deliver Go binaries as fast and easily as possible | 19 hours ago |
| [usql](https://github.com/xo/usql) | 6947 | Universal command-line interface for SQL databases | 4 days ago |
| [peco](https://github.com/peco/peco) | 6770 | Simplistic interactive filtering tool | 7 months ago |
| [godropbox](https://github.com/dropbox/godropbox) | 4008 | Common libraries for writing Go services/applications. | 2 years ago |
| [hystrix-go](https://github.com/afex/hystrix-go) | 3529 | Netflix's Hystrix latency and fault tolerance library, for Go  | 5 months ago |
| [go-funk](https://github.com/thoas/go-funk) | 3246 | A modern Go utility library which provides helpers (map, find, contains, filter, ...) | 2 months ago |
| [panicparse](https://github.com/maruel/panicparse) | 3019 | Crash your app in style (Golang) | a month ago |
| [goreporter](https://github.com/qax-os/goreporter) | 2963 | A Golang tool that does static analysis, unit testing, code review and generate code quality report. | 3 years ago |
| [minify](https://github.com/tdewolff/minify) | 2876 | Go minifiers for web formats | 20 days ago |
| [mc](https://github.com/minio/mc) | 2034 | MinIO Client is a replacement for ls, cp, mkdir, diff and rsync commands for filesystems and object storage. | 9 hours ago |
| [mergo](https://github.com/imdario/mergo) | 1871 | Mergo: merging Go structs and maps since 2013. | a month ago |
| [storm](https://github.com/asdine/storm) | 1847 | Simple and powerful toolkit for BoltDB | 9 months ago |
| [spinner](https://github.com/briandowns/spinner) | 1696 | Go (golang) package with 90 configurable terminal spinner/progress indicators. | 4 days ago |
| [mole](https://github.com/davrodpin/mole) | 1542 | CLI application to create ssh tunnels focused on resiliency and user experience. | 23 days ago |
| [filetype](https://github.com/h2non/filetype) | 1485 | Fast, dependency-free Go package to infer binary file types based on the magic numbers header signature | 11 days ago |
| [boilr](https://github.com/tmrts/boilr) | 1431 | :zap: boilerplate template manager that generates files or directories from template repositories | 2 months ago |
| [jump](https://github.com/gsamokovarov/jump) | 1301 | Jump helps you navigate faster by learning your habits. ✌️ | 2 months ago |
| [cli](https://github.com/create-go-app/cli) | 1281 | ✨ Create a new production-ready project with backend, frontend and deploy automation by running one CLI command! | 3 days ago |
| [circuitbreaker](https://github.com/rubyist/circuitbreaker) | 979 | Circuit Breakers in Go | 2 years ago |
| [gtm](https://github.com/git-time-metric/gtm) | 891 | Simple, seamless, lightweight time tracking for Git | 17 days ago |
| [immortal](https://github.com/immortal/immortal) | 724 | ⭕  A *nix cross-platform (OS agnostic) supervisor | a day ago |
| [hostctl](https://github.com/guumaster/hostctl) | 711 | Your dev tool to manage /etc/hosts like a pro! | 2 months ago |
| [mimetype](https://github.com/gabriel-vasile/mimetype) | 667 | A fast Golang library for media type and file extension detection, based on magic numbers | a day ago |
| [circuit](https://github.com/cep21/circuit) | 628 | An efficient and feature complete Hystrix like Go implementation of the circuit breaker pattern. | 2 months ago |
| [htcat](https://github.com/htcat/htcat) | 547 | Parallel and Pipelined HTTP GET Utility | 3 years ago |
| [ergo](https://github.com/cristianoliveira/ergo) | 501 | The management of multiple apps running over different ports made easy | 6 days ago |
| [scany](https://github.com/georgysavva/scany) | 498 | Library for scanning data from a database into Go structs and more | 15 days ago |
| [godaemon](https://github.com/VividCortex/godaemon) | 487 | Daemonize Go applications deviously. | 8 months ago |
| [koazee](https://github.com/wesovilabs/koazee) | 485 | A StreamLike, Immutable, Lazy Loading and smart Golang Library to deal with slices. | a year ago |
| [go-dry](https://github.com/ungerik/go-dry) | 476 | DRY (don't repeat yourself) package for Go | 12 days ago |
| [delve](https://github.com/derekparker/delve) | 460 | Delve is a debugger for the Go programming language. | 7 days ago |
| [gopencils](https://github.com/bndr/gopencils) | 437 | Easily consume REST APIs with Go (golang) | 3 years ago |
| [request](https://github.com/mozillazg/request) | 407 | A developer-friendly HTTP request library for Gopher. | 2 years ago |
| [gubrak](https://github.com/novalagung/gubrak) | 388 | ⚙️ Golang functional utility library with syntactic sugar. It's like lodash, but for Go | 2 years ago |
| [deepcopier](https://github.com/ulule/deepcopier) | 378 | simple struct copying for golang | 2 years ago |
| [clockwork](https://github.com/jonboulle/clockwork) | 372 | a fake clock for golang | 3 months ago |
| [go-rate](https://github.com/beefsack/go-rate) | 349 | A timed rate limiter for Go | 2 days ago |
| [retry](https://github.com/kamilsk/retry) | 314 | ♻️ The most advanced interruptible mechanism to perform actions repetitively until successful. | a year ago |
| [serve](https://github.com/syntaqx/serve) | 260 | 🍽️ a static http server anywhere you need one. | a month ago |
| [gohper](https://github.com/cosiner/gohper) | 255 | [UNMATAINED] common libs here. | 5 years ago |
| [scan](https://github.com/blockloop/scan) | 249 | Scan database/sql rows directly to structs, slices, and primitive types | 4 months ago |
| [util](https://github.com/shomali11/util) | 241 | A collection of useful utility functions | 2 years ago |
| [go-trigger](https://github.com/sadlil/go-trigger) | 225 | A Global event triggerer for golang. Defines functions as event with id string. Trigger the event anywhere from your project. | 5 years ago |
| [gotenv](https://github.com/subosito/gotenv) | 213 | Load environment variables from `.env` or `io.Reader` in Go. | 5 months ago |
| [grofer](https://github.com/pesos/grofer) | 189 | A system and resource monitoring tool written in Golang! | a month ago |
| [mani](https://github.com/alajmo/mani) | 181 | CLI tool to help you manage multiple repositories | 5 days ago |
| [death](https://github.com/vrecan/death) | 176 | Managing go application shutdown with signals. | 15 days ago |
| [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) | 176 | go-bind-plugin generates API for exported plugin symbols (-buildmode=plugin) - go1.8+ only (http://golang.org/pkg/plugin) | 2 years ago |
| [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) | 171 | go-sitemap-generator is the easiest way to generate Sitemaps in Go | 2 months ago |
| [go-pattern-match](https://github.com/alexpantyukhin/go-pattern-match) | 171 | Pattern matchings for Go. | 2 years ago |
| [toolbox](https://github.com/viant/toolbox) | 171 | Toolbox - go utility library | 6 months ago |
| [clipboard](https://github.com/golang-design/clipboard) | 161 | 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)  | 17 days ago |
| [rerun](https://github.com/ivpusic/rerun) | 161 | Configurable recompiling and rerunning go apps when source changes | 4 years ago |
| [moldova](https://github.com/StabbyCutyou/moldova) | 160 | A lightweight templating system for generating random data | 4 years ago |
| [changie](https://github.com/miniscruff/changie) | 156 | Automated changelog tool for preparing releases with lots of customization options | 3 hours ago |
| [apm](https://github.com/topfreegames/apm) | 154 | APM is a process manager for Golang applications. | 5 years ago |
| [robustly](https://github.com/VividCortex/robustly) | 151 | Run functions resiliently in Go, catching and restarting panics | 10 months ago |
| [countries](https://github.com/biter777/countries) | 145 | Countries - ISO 3166 (ISO3166-1, ISO3166, Digit, Alpha-2 and Alpha-3) countries codes and names (on eng and rus), ISO 4217 currency designators, ITU-T E.164 IDD calling phone codes, countries capitals, UN M.49 regions codes, ccTLD countries domains, IOC/NOC and FIFA letters codes, VERY FAST, NO maps[], NO slices[], NO init() funcs, NO external links/files/data, NO interface{}, NO specific dependencies, Databases/JSON/GOB/XML/CSV compatible, Emoji countries flags and currencies support, full support ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR and ccTLD standarts. | 6 days ago |
| [chyle](https://github.com/antham/chyle) | 141 | Changelog generator : use a git repository and various data sources and publish the result on external services | 14 days ago |
| [onecache](https://github.com/adelowo/onecache) | 126 | One caching API, Multiple backends | 2 years ago |
| [go-bsdiff](https://github.com/gabstv/go-bsdiff) | 122 | Pure Go bsdiff and bspatch libraries and CLI tools. | 3 years ago |
| [lrserver](https://github.com/jaschaephraim/lrserver) | 120 | LiveReload server for Go [golang] | 4 years ago |
| [nostromo](https://github.com/pokanop/nostromo) | 110 | CLI for building powerful aliases | 7 days ago |
| [rospo](https://github.com/ferama/rospo) | 105 | 🐸 Simple, reliable, persistent ssh tunnels with embedded ssh server | 16 hours ago |
| [cryptgo](https://github.com/Gituser143/cryptgo) | 103 | A terminal application to watch crypto prices! | 4 months ago |
| [sorty](https://github.com/jfcg/sorty) | 96 | Fast Concurrent / Parallel Sorting in Go | 2 months ago |
| [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) | 91 | Golang Mongodb Pagination for official mongodb/mongo-go-driver package which supports both normal queries and Aggregation pipelines with all information like Total records, Page, Per Page, Previous, Next, Total Page and query results. | 3 months ago |
| [goseaweedfs](https://github.com/linxGnu/goseaweedfs) | 90 | A complete Golang client for SeaweedFS | 4 months ago |
| [mssqlx](https://github.com/linxGnu/mssqlx) | 90 | Database client library, proxy for any master slave, master master structures. Lightweight, performant and auto balancing in mind. | 5 months ago |
| [xferspdy](https://github.com/monmohan/xferspdy) | 90 | Xferspdy provides binary diff and patch library in golang. [Mentioned in Awesome Go, https://github.com/avelino/awesome-go] | 10 months ago |
| [go-health](https://github.com/Talento90/go-health) | 87 | :heart: Health check your applications and dependencies | a month ago |
| [cmd](https://github.com/commander-cli/cmd) | 83 | A simple package to execute shell commands on linux, windows and osx | a day ago |
| [limiters](https://github.com/mennanov/limiters) | 82 | Golang rate limiters for distributed applications | a month ago |
| [repeat](https://github.com/ssgreg/repeat) | 78 | Go implementation of different backoff strategies useful for retrying operations and heartbeating. | 2 years ago |
| [pm](https://github.com/VividCortex/pm) | 77 | Processlist manager with TCP listener | a year ago |
| [mimemagic](https://github.com/zRedShift/mimemagic) | 71 | Powerful and versatile MIME sniffing package using pre-compiled glob patterns, magic number signatures, XML document namespaces, and tree magic for mounted volumes, generated from the XDG shared-mime-info database. | 2 months ago |
| [netbug](https://github.com/e-dard/netbug) | 69 | Package netbug provides a handler for registering profilers on your own ServeMux. | 6 years ago |
| [unis](https://github.com/esemplastic/unis) | 67 | UNIS: A Common Architecture for String Utilities within the Go Programming Language. | 5 years ago |
| [handy](https://github.com/miguelpragier/handy) | 66 | GO Golang Utilities and helpers like validators and string formatters | a year ago |
| [multitick](https://github.com/VividCortex/multitick) | 65 | A multiplexor for aligned time.Time tickers in Go | 10 months ago |
| [goval](https://github.com/maja42/goval) | 64 | Expression evaluation in golang | a year ago |
| [pgo](https://github.com/arthurkushman/pgo) | 63 | Go library for PHP community with convenient functions | a month ago |
| [goreadability](https://github.com/philipjkim/goreadability) | 62 | Webpage summary extractor using Facebook Open Graph and arc90's readability | 3 years ago |
| [minquery](https://github.com/icza/minquery) | 59 | MongoDB / mgo query that supports efficient pagination (cursors to continue listing documents where we left off). | 7 months ago |
| [go-astitodo](https://github.com/asticode/go-astitodo) | 58 | Parse TODOs in your GO code | a year ago |
| [go-lock](https://github.com/viney-shih/go-lock) | 56 | go-lock is a lock library implementing read-write mutex and read-write trylock without starvation | 7 months ago |
| [golog](https://github.com/mlimaloureiro/golog) | 56 | Easy and simple CLI time tracker for your tasks | 3 years ago |
| [filter](https://github.com/gookit/filter) | 54 | ⏳ Provide filtering, sanitizing, and conversion of Golang data. 提供对Golang数据的过滤，净化，转换。 | a month ago |
| [retry](https://github.com/thedevsaddam/retry) | 53 | Simple and easy retry mechanism package for Go | a month ago |
| [copy-pasta](https://github.com/jutkko/copy-pasta) | 49 | Universal copy paste service, works across different machines! | 2 years ago |
| [beyond](https://github.com/wesovilabs/beyond) | 47 | The Go library that will drive you to AOP world! | 5 months ago |
| [slice](https://github.com/psampaz/slice) | 47 | Type-safe functions for common Go slice operations | 2 years ago |
| [golarm](https://github.com/msempere/golarm) | 46 | Fire alarms with system events | 6 years ago |
| [dbt](https://github.com/nikogura/dbt) | 45 | Dynamic Binary Toolkit- A framework for running self-updating signed binaries from a central, trusted repository. | a year ago |
| [goback](https://github.com/carlescere/goback) | 44 | Golang simple exponential backoff package. | a year ago |
| [intrinsic](https://github.com/mengzhuo/intrinsic) | 43 | Provide Golang native SIMD intrinsics on x86/amd64 platform | 5 years ago |
| [retry-go](https://github.com/rafaeljesus/retry-go) | 43 | Retrying made simple and easy for golang :repeat:  | 3 years ago |
| [gpath](https://github.com/tenntenn/gpath) | 39 | gpath is a Go package to access a field by a path using reflect pacakge | 5 years ago |
| [go-httpheader](https://github.com/mozillazg/go-httpheader) | 37 | A Go library for encoding structs into Header fields. | 2 months ago |
| [myhttp](https://github.com/inancgumus/myhttp) | 35 | Simplest HTTP GET requester for Go with timeout support | 4 years ago |
| [backscanner](https://github.com/icza/backscanner) | 34 | A scanner similar to bufio.Scanner, but it reads and returns lines in reverse order, starting at a given position and going backward. | 4 months ago |
| [equalizer](https://github.com/reugn/equalizer) | 34 | A rate limiters package for Go | a year ago |
| [evaluator](https://github.com/nullne/evaluator) | 33 |  | 7 months ago |
| [gostrutils](https://github.com/ik5/gostrutils) | 32 | Collections of string utils I have created over the years | 5 months ago |
| [rclient](https://github.com/zpatrick/rclient) | 32 | Minimalistic REST client for Go applications | 2 years ago |
| [slicer](https://github.com/leaanthony/slicer) | 30 | Utility class for handling slices | 6 months ago |
| [set](https://github.com/nofeaturesonlybugs/set) | 29 | Package set is a small wrapper around the official reflect package that facilitates loose type conversion and assignment into native Go types. | 10 days ago |
| [tome](https://github.com/cyruzin/tome) | 29 | Package tome was designed to paginate simple RESTful APIs. | 2 years ago |
| [throttle](https://github.com/yudppp/throttle) | 28 | lodash throttle like Go library | 6 months ago |
| [sshman](https://github.com/shoobyban/sshman) | 27 | SSH Manager - manage authorized_keys file on remote servers | 3 days ago |
| [shutdown](https://github.com/ztrue/shutdown) | 26 | Golang app shutdown hooks. | a month ago |
| [ugo](https://github.com/alxrm/ugo) | 26 | Simple and expressive toolbox written in Go | 6 years ago |
| [generate](https://github.com/go-playground/generate) | 25 | :runner:runs go generate recursively on a specified path or environment variable and can filter by regex | 5 years ago |
| [ghokin](https://github.com/antham/ghokin) | 23 | Parallelized formatter with no external dependencies for gherkin (cucumber, behat...) | 2 months ago |
| [goplaceholder](https://github.com/michiwend/goplaceholder) | 22 | a small golang lib to generate placeholder images | 6 years ago |
| [rerate](https://github.com/abo/rerate) | 21 | redis-based rate counter and rate limiter | 5 years ago |
| [mimesniffer](https://github.com/aofei/mimesniffer) | 19 | A MIME type sniffer for Go. | 3 months ago |
| [ctxutil](https://github.com/posener/ctxutil) | 18 | utils for Go context | 2 years ago |
| [structs](https://github.com/PumpkinSeed/structs) | 18 | Golang struct operations. | 4 years ago |
| [filler](https://github.com/yaronsumel/filler) | 16 | fill struct data easily with fill tags | 5 years ago |
| [rest-go](https://github.com/edermanoel94/rest-go) | 16 | A package that provide many helpful methods for working with rest api. | 2 years ago |
| [dlog](https://github.com/kirillDanshin/dlog) | 15 | Simple build-time controlled debug log with ability to log where the logger was called | 5 years ago |
| [go-convert](https://github.com/Eun/go-convert) | 15 | Convert a value into another type | 9 months ago |
| [okrun](https://github.com/xta/okrun) | 15 | ok, run your gofile | 7 years ago |
| [copy](https://github.com/gotidy/copy) | 14 | Package for fast copying structs of different types | a year ago |
| [jsend](https://github.com/clevergo/jsend) | 14 | :100: JSend's implementation writen in Go(golang) | 8 months ago |
| [command](https://github.com/txgruppi/command) | 13 | Command pattern for Go with thread safe serial and parallel dispatcher | 6 years ago |
| [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) | 12 | Problem json implementation (https://tools.ietf.org/html/rfc7807) package for go | 2 years ago |
| [go-types](https://github.com/mikekonan/go-types) | 12 | Library providing opanapi3 and Go types for store/validation and transfer of ISO-4217, ISO-3166, and other types. | 3 months ago |
| [ptr](https://github.com/gotidy/ptr) | 11 | Contains functions for simplified creation of pointers from constants of basic types | 2 months ago |
| [silk](https://github.com/chrispassas/silk) | 11 | Read Silk Flow Files | a year ago |
| [retry](https://github.com/shafreeck/retry) | 10 | A pretty simple library to ensure your work to be done | 2 years ago |
| [go-countries](https://github.com/mikekonan/go-countries) | 9 |  | a year ago |
| [statiks](https://github.com/janiltonmaciel/statiks) | 9 | Fast, zero-configuration, static HTTP filer server. | a year ago |
| [sliceconv](https://github.com/Henry-Sarabia/sliceconv) | 8 | Slice conversion between primitive types | 2 years ago |
| [blank](https://github.com/Henry-Sarabia/blank) | 7 | Detect blank strings or remove whitespace from strings | 3 years ago |
| [go-clip](https://github.com/prashantgupta24/go-clip) | 7 | A minimalistic clipboard manager for Mac. | a year ago |
| [retry](https://github.com/percolate/retry) | 7 | Percolate's Go retry package | 2 years ago |
| [nfdump](https://github.com/chrispassas/nfdump) | 6 | NFDump File Reader | 6 months ago |
| [go-actuator](https://github.com/sinhashubham95/go-actuator) | 5 | Golang production-ready features | 6 months ago |
| [go-safe](https://github.com/kenkyu392/go-safe) | 4 | This Go package provides a sandbox for the safe execution of panic-inducing programs | 3 months ago |
| [lets-go](https://github.com/aplescia/lets-go) | 3 | Go module that provides common utilities for Cloud Native development | 10 months ago |
| [olaf](https://github.com/btnguyen2k/olaf) | 3 | Twitter Snowflake implemented in Go | 3 years ago |
| [tik](https://github.com/andy2046/tik) | 3 | hierarchical timing wheel | a year ago |
| [bleep](https://github.com/sinhashubham95/bleep) | 2 | OS Signal Handlers in Go | a year ago |
| [goctx](https://github.com/zerosnake0/goctx) | 2 | Get your context value faster | a year ago |


### [UUID](#UUID)
* Libraries for working with UUIDs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [uuid](https://github.com/google/uuid) | 3389 | Go package for UUIDs based on RFC 4122 and DCE 1.1: Authentication and Security Services. | 2 months ago |
| [ulid](https://github.com/oklog/ulid) | 2549 | Universally Unique Lexicographically Sortable Identifier (ULID) in Go | 4 months ago |
| [uuid](https://github.com/gofrs/uuid) | 1068 | A UUID package originally forked from github.com/satori/go.uuid | 2 months ago |
| [wuid](https://github.com/edwingeng/wuid) | 449 | An extremely fast UUID alternative written in golang | 6 months ago |
| [sno](https://github.com/muyo/sno) | 56 | Compact, sortable and fast unique IDs with embedded metadata. | 3 months ago |
| [nanoid](https://github.com/aidarkhanov/nanoid) | 44 | A tiny and fast Go unique string generator | 5 months ago |
| [Goid](https://github.com/JakeHL/Goid) | 31 | A UUIDv4 generation package written in go | 3 years ago |
| [uuid](https://github.com/agext/uuid) | 14 | Generate, encode, and decode UUIDs v1 with fast or cryptographic-quality random node identifier. | 2 years ago |
| [gouid](https://github.com/twharmon/gouid) | 12 | Fast, dependable universally unique ids | 17 days ago |
| [goflake](https://github.com/Hart87/goflake) | 9 | A highly scalable and serverless unique ID generator for use in distributed systems. Written in GoLang. Inspired by Twitters Snowflake. | 9 months ago |


### [Validation](#Validation)
* Libraries for validation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [joi](https://github.com/sideway/joi) | 18271 | The most powerful data validation library for JS | 12 hours ago |
| [validator](https://github.com/go-playground/validator) | 9680 | :100:Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving | 3 days ago |
| [govalidator](https://github.com/asaskevich/govalidator) | 5240 | [Go] Package of validators and sanitizers for strings, numerics, slices and structs | 12 days ago |
| [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) | 2550 | An idiomatic Go (golang) validation package. Supports configurable and extensible validation rules (validators) using normal language constructs instead of error-prone struct tags. | a month ago |
| [govalidator](https://github.com/thedevsaddam/govalidator) | 1060 | Validate Golang request data with simple rules. Highly inspired by Laravel's request validation. | 16 days ago |
| [validate](https://github.com/gookit/validate) | 519 | ⚔ Go package for data validation and filtering. support Map, Struct, Form data. Go通用的数据验证与过滤库，使用简单，内置大部分常用验证、过滤器，支持自定义验证器、自定义消息、字段翻译。 | 24 days ago |
| [checkdigit](https://github.com/osamingo/checkdigit) | 88 | Provide check digit algorithms and calculators written in Go | a year ago |
| [terraform-validator](https://github.com/thazelart/terraform-validator) | 76 | A norms and conventions validator for Terraform | a year ago |
| [validate](https://github.com/gobuffalo/validate) | 65 | This package provides a framework for writing validations for Go applications. | 3 months ago |
| [jio](https://github.com/faceair/jio) | 64 | jio is a json schema validator similar to joi | 2 years ago |
| [gody](https://github.com/guiferpa/gody) | 53 | :balloon: A lightweight struct validator for Go | a year ago |
| [govalid](https://github.com/twharmon/govalid) | 24 | Struct validation using tags | 4 months ago |


### [Version Control](#Version-Control)
* Libraries for version control.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-git](https://github.com/go-git/go-git) | 3110 | A highly extensible Git implementation in pure Go. | 7 days ago |
| [glab](https://github.com/profclems/glab) | 1736 | A GitLab CLI tool bringing GitLab to your command line | 8 hours ago |
| [git2go](https://github.com/libgit2/git2go) | 1699 | Git to Go; bindings for libgit2. Like McDonald's but tastier. | 20 days ago |
| [hercules](https://github.com/src-d/hercules) | 1679 | Gaining advanced insights from Git repository history. | 3 months ago |
| [gh](https://github.com/rjeczalik/gh) | 76 | Scriptable server and net/http middleware for GitHub Webhooks. | 3 years ago |
| [go-vcs](https://github.com/sourcegraph/go-vcs) | 74 | manipulate and inspect VCS repositories in Go | a year ago |
| [Githooks](https://github.com/gabyx/Githooks) | 33 | 🦎 Githooks: per-repo and shared Git hooks with version control and auto update.  | a month ago |
| [hgo](https://github.com/beyang/hgo) | 13 | Hgo is a collection of Go packages providing read-access to local Mercurial repositories. | 6 years ago |


### [Video](#Video)
* Libraries for manipulating video.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [goav](https://github.com/giorgisio/goav) | 1811 | Golang bindings for FFmpeg | 8 months ago |
| [m3u8](https://github.com/grafov/m3u8) | 896 | Parser and generator of M3U8-playlists for Apple HLS. Library for Go language. :cinema: | 2 days ago |
| [gmf](https://github.com/3d0c/gmf) | 742 | Go Media Framework | 24 days ago |
| [go-astits](https://github.com/asticode/go-astits) | 398 | Demux and mux MPEG Transport Streams (.ts) natively in GO | 25 days ago |
| [go-astisub](https://github.com/asticode/go-astisub) | 370 | Manipulate subtitles in GO (.srt, .ssa/.ass, .stl, .ttml, .vtt (webvtt), teletext, etc.) | 16 days ago |
| [libvlc-go](https://github.com/adrg/libvlc-go) | 278 | Go bindings for libVLC and high-level media player interface | 5 months ago |
| [gortsplib](https://github.com/aler9/gortsplib) | 190 | RTSP 1.0 client and server library for the Go programming language | 4 days ago |
| [gst](https://github.com/ziutek/gst) | 166 | Go bindings for GStreamer (retired: currently I don't use/develop this package) | a year ago |
| [go-m3u8](https://github.com/quangngotan95/go-m3u8) | 88 | Parse and generate m3u8 playlists for Apple HTTP Live Streaming (HLS) in Golang (ported from gem https://github.com/sethdeckard/m3u8) | 2 years ago |
| [v4l](https://github.com/korandiz/v4l) | 66 | Facade to the Video4Linux video capture interface.  | 2 months ago |
| [libgosubs](https://github.com/wargarblgarbl/libgosubs) | 17 | golang library to read and write various subtitle formats | 2 years ago |
| [go-mpd](https://github.com/unki2aut/go-mpd) | 11 | Go library for parsing and generating MPEG-DASH Media Presentation Description (MPD) files | a year ago |


### [Web Frameworks](#Web-Frameworks)
* 

#### [Full stack web frameworks](#Full-stack-web-frameworks.)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gin](https://github.com/gin-gonic/gin) | 55596 | Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin. | 19 hours ago |
| [echo](https://github.com/labstack/echo) | 21643 | High performance, minimalist Go web framework | 13 days ago |
| [fiber](https://github.com/gofiber/fiber) | 18302 | ⚡️ Express inspired web framework written in Go | 2 days ago |
| [revel](https://github.com/revel/revel) | 12488 | A high productivity, full-stack web framework for the Go language. | 3 months ago |
| [goa](https://github.com/goadesign/goa) | 4583 | Design-based APIs and microservices in Go | 6 hours ago |
| [gizmo](https://github.com/nytimes/gizmo) | 3588 | A Microservice Toolkit from The New York Times | 6 months ago |
| [go-json-rest](https://github.com/ant0ine/go-json-rest) | 3493 | A quick and easy way to setup a RESTful JSON API | a year ago |
| [macaron](https://github.com/go-macaron/macaron) | 3252 | Package macaron is a high productive and modular web framework in Go. | 3 days ago |
| [utron](https://github.com/gernest/utron) | 2210 | A lightweight MVC framework for Go(Golang) | 3 years ago |
| [go-tigertonic](https://github.com/rcrowley/go-tigertonic) | 999 | A Go framework for building JSON web services inspired by Dropwizard | 4 years ago |
| [goyave](https://github.com/go-goyave/goyave) | 946 | 🍐 Elegant Golang REST API Framework | a month ago |
| [tango](https://github.com/lunny/tango) | 835 | This is only a mirror and Moved to https://gitea.com/lunny/tango | 3 years ago |
| [gearbox](https://github.com/gogearbox/gearbox) | 601 | Gearbox :gear: is a web framework written in Go with a focus on high performance | 20 days ago |
| [gongular](https://github.com/mustafaakin/gongular) | 448 | A different approach to Go web frameworks | 2 years ago |
| [aero](https://github.com/aerogo/aero) | 429 | :bullettrain_side: High-performance web server for Go. | 3 months ago |
| [neo](https://github.com/ivpusic/neo) | 414 | Go Web Framework | 4 years ago |
| [air](https://github.com/aofei/air) | 411 | An ideally refined web framework for Go. | 10 months ago |
| [beego](https://github.com/astaxie/beego) | 377 | beego is an open-source, high-performance web framework for the Go programming language. | 6 months ago |
| [mango](https://github.com/paulbellamy/mango) | 362 | Mango is a modular web-application framework for Go, inspired by Rack, and PEP333. | 4 years ago |
| [gondola](https://github.com/rainycape/gondola) | 309 | The web framework for writing faster sites, faster | 3 years ago |
| [flamingo-commerce](https://github.com/i-love-flamingo/flamingo-commerce) | 290 | Flexible E-Commerce Framework on top of Flamingo. Used to build E-Commerce "Portals" and connect it with the help of individual Adapters to other services.  | 22 days ago |
| [flamingo](https://github.com/i-love-flamingo/flamingo) | 279 | Flamingo Framework and Core Library. Flamingo is a go based framework for pluggable web projects. It is used to build scalable and maintainable (web)applications. | 3 days ago |
| [golf](https://github.com/dinever/golf) | 252 | :golf: The Golf web framework | 6 months ago |
| [webgo](https://github.com/bnkamalesh/webgo) | 220 | A microframework to build web apps; with handler chaining, middleware support, and most of all; standard library compliant HTTP handlers(i.e. http.HandlerFunc). | 9 days ago |
| [ginrpc](https://github.com/xxjwxc/ginrpc) | 206 | gin auto binding,grpc, and annotated route,gin 注解路由, grpc,自动参数绑定工具 | 2 months ago |
| [uadmin](https://github.com/uadmin/uadmin) | 177 | The web framework for Golang | a month ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 163 | hiboot is a high performance web and cli application framework with dependency injection support | a month ago |
| [rk-boot](https://github.com/rookie-ninja/rk-boot) | 142 | Bootstrapper for golang application. See https://rkdev.info/docs/ for details. | 2 days ago |
| [go-rest](https://github.com/ungerik/go-rest) | 125 | A small and evil REST framework for Go | 5 years ago |
| [appy](https://github.com/appist/appy) | 116 | An opinionated productive web framework that helps scaling business easier. | 3 months ago |
| [patron](https://github.com/beatlabs/patron) | 93 | Microservice framework following best cloud practices with a focus on productivity. | 6 minutes ago |
| [microservice](https://github.com/claygod/microservice) | 90 | This library provides a simple microservice framework based on clean architecture principles with a working example implemented. | 25 days ago |
| [vox](https://github.com/aisk/vox) | 76 | Simple and lightweight Go web framework inspired by koa | 9 months ago |
| [golax](https://github.com/fulldump/golax) | 73 | Golax, a go implementation for the Lax framework. | 14 days ago |
| [rux](https://github.com/gookit/rux) | 71 | ⚡ Rux is an simple and fast web framework. support param route binding, middleware, compatible http.Handler interface. 简单且快速的 Go api/web 框架，支持参数路由绑定，中间件，兼容 http.Handler 接口 | 4 hours ago |
| [yarf](https://github.com/yarf-framework/yarf) | 65 | Yet Another REST Framework | 3 years ago |
| [fireball](https://github.com/zpatrick/fireball) | 56 | Go web framework with a natural feel | 3 years ago |
| [goa](https://github.com/goa-go/goa) | 48 | Goa is a  web framework based on middleware, like koa.js. | 2 years ago |
| [gotuna](https://github.com/gotuna/gotuna) | 39 | GoTuna a lightweight web framework for Go with mux router, middlewares, user sessions, templates, embedded views, and static file server. | 7 months ago |
| [api](https://github.com/resoursea/api) | 32 | A REST framework for quickly writing resource based services in Golang. | 7 years ago |
| [rex](https://github.com/goanywhere/rex) | 32 | Pleasures for Web in Golang | 4 years ago |
| [goweb](https://github.com/twharmon/goweb) | 26 | Lightweight web framework based on net/http. | a month ago |
| [banjo](https://github.com/n4Zz2/banjo) | 19 | BANjO is a simple web framework written in Go (golang) | 4 years ago |


#### [Actual middlewares](#Actual-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tollbooth](https://github.com/didip/tollbooth) | 2109 | Simple middleware to rate-limit HTTP requests. | 9 days ago |
| [cors](https://github.com/rs/cors) | 2022 | Go net/http configurable handler to handle CORS requests | 22 days ago |
| [limiter](https://github.com/ulule/limiter) | 1497 | Dead simple rate limit middleware for Go. | 3 days ago |
| [go-server-timing](https://github.com/mitchellh/go-server-timing) | 827 | Go (golang) library for creating and consuming HTTP Server-Timing headers | a year ago |
| [go-fault](https://github.com/github/go-fault) | 421 | Fault injection library in Go using standard http middleware | 5 months ago |
| [ln-paywall](https://github.com/philippgille/ln-paywall) | 120 | Go middleware for monetizing your API on a per-request basis with Bitcoin and Lightning ⚡️ | 3 years ago |
| [xff](https://github.com/sebest/xff) | 89 | A Golang Middleware to handle X-Forwarded-For Header | a month ago |
| [formjson](https://github.com/rs/formjson) | 36 | Go net/http handler to transparently manage posted JSON | 6 years ago |
| [rk-grpc](https://github.com/rookie-ninja/rk-grpc) | 26 | grpc related entry. See https://rkdev.info/docs/ for details. | 17 days ago |
| [rk-gin](https://github.com/rookie-ninja/rk-gin) | 24 | Bootstrapper and interceptor for gin-gonic/gin framework. See https://rkdev.info/docs/ for docs. | 18 days ago |
| [client-timing](https://github.com/posener/client-timing) | 20 | An HTTP client for go-server-timing middleware. Enables automatic timing propagation through HTTP calls between servers. | 2 years ago |
| [mid](https://github.com/bobg/mid) | 4 | Middleware for HTTP services in Go | 6 months ago |


#### [Libraries for creating HTTP middlewares](#Libraries-for-creating-HTTP-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [negroni](https://github.com/urfave/negroni) | 7148 | Idiomatic HTTP Middleware for Golang | 6 days ago |
| [alice](https://github.com/justinas/alice) | 2485 | Painless middleware chaining for Go | 3 months ago |
| [render](https://github.com/unrolled/render) | 1575 | Go package for easily rendering JSON, XML, binary data, and HTML templates responses. | 3 months ago |
| [stats](https://github.com/thoas/stats) | 583 | A Go middleware that stores various information about your web application (response time, status code count, etc.) | 3 years ago |
| [interpose](https://github.com/carbocation/interpose) | 296 | Minimalist net/http middleware for golang | 5 years ago |
| [renderer](https://github.com/thedevsaddam/renderer) | 234 | Simple, lightweight and faster response (JSON, JSONP, XML, YAML, HTML, File) rendering package for Go | a year ago |
| [muxchain](https://github.com/stephens2424/muxchain) | 210 | Lightweight Middleware for net/http | 3 years ago |
| [gores](https://github.com/alioygur/gores) | 98 | Go package that handles HTML, JSON, XML and etc. responses | a year ago |
| [rye](https://github.com/InVisionApp/rye) | 97 | A tiny http middleware for Golang with added handlers for common needs. | 3 years ago |
| [mediary](https://github.com/HereMobilityDevelopers/mediary) | 78 | Add interceptors to GO http.Client | 2 years ago |
| [chain](https://github.com/codemodus/chain) | 64 | Composable chains of nested http.Handler instances. | 3 years ago |
| [wrap](https://github.com/go-on/wrap) | 60 | Go http.Hander based middleware stack with context sharing | 4 years ago |
| [catena](https://github.com/codemodus/catena) | 8 | gRPC interceptor catenation. | 3 years ago |


#### [Routers](#Routers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mux](https://github.com/gorilla/mux) | 16028 | A powerful HTTP router and URL matcher for building Go web servers with 🦍 | a month ago |
| [httprouter](https://github.com/julienschmidt/httprouter) | 13688 | A high performance HTTP request router that scales well | a month ago |
| [chi](https://github.com/go-chi/chi) | 10950 | lightweight, idiomatic and composable router for building Go HTTP services | 2 days ago |
| [web](https://github.com/gocraft/web) | 1459 | Go Router + Middleware. Your Contexts. | a year ago |
| [bone](https://github.com/go-zoo/bone) | 1278 | Lightning Fast HTTP Multiplexer | 3 years ago |
| [goji](https://github.com/goji/goji) | 895 | Goji is a minimalistic and flexible HTTP request multiplexer for Go (golang) | 3 years ago |
| [fasthttprouter](https://github.com/buaazp/fasthttprouter) | 870 | A high performance fasthttp request router that scales well | 3 years ago |
| [httptreemux](https://github.com/dimfeld/httptreemux) | 524 | High-speed, flexible tree-based HTTP router for Go. | 3 months ago |
| [gorouter](https://github.com/xujiajun/gorouter) | 516 | xujiajun/gorouter is a simple and fast HTTP router for Go. It is easy to build RESTful APIs and your web framework. | 2 years ago |
| [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) | 427 | An extremely fast Go (golang) HTTP router that supports regular expression route matching. Comes with full support for building RESTful APIs. | 5 months ago |
| [lars](https://github.com/go-playground/lars) | 385 | :rotating_light: Is a lightweight, fast and extensible zero allocation HTTP router for Go used to create customizable frameworks. | 3 years ago |
| [siesta](https://github.com/VividCortex/siesta) | 352 | Composable framework for writing HTTP handlers in Go. | 10 months ago |
| [vestigo](https://github.com/husobee/vestigo) | 266 | Echo Inspired Stand Alone URL Router | a year ago |
| [router](https://github.com/gowww/router) | 160 | ⚡️ A lightning fast HTTP router | 2 years ago |
| [pure](https://github.com/go-playground/pure) | 123 | :non-potable_water: Is a lightweight  HTTP router that sticks to the std "net/http" implementation | a year ago |
| [alien](https://github.com/gernest/alien) | 121 | A lightweight and  fast http router from outer space | 3 years ago |
| [gorouter](https://github.com/vardius/gorouter) | 113 | Go Server/API micro framework, HTTP request router, multiplexer, mux | 4 days ago |
| [violetear](https://github.com/nbari/violetear) | 104 | Go HTTP router | 9 months ago |
| [Bxog](https://github.com/claygod/Bxog) | 102 | Bxog is a simple and fast HTTP router for Go (HTTP request multiplexer). | 2 years ago |
| [xmux](https://github.com/rs/xmux) | 94 | xmux is a httprouter fork on top of xhandler (net/context aware) | 5 years ago |
| [bellt](https://github.com/GuilhermeCaruso/bellt) | 53 | :bell: A simple Go router | 2 years ago |
| [ngamux](https://github.com/ngamux/ngamux) | 46 | Simple HTTP router for Go | 4 months ago |
| [fastrouter](https://github.com/razonyang/fastrouter) | 20 | FastRouter is a fast, flexible HTTP router written in Go. | 4 years ago |
| [route](https://github.com/goroute/route) | 7 | Go Route - Simple yet powerful HTTP request multiplexer | 2 years ago |


### [WebAssembly](#WebAssembly)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tinygo](https://github.com/tinygo-org/tinygo) | 9448 | Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM. | 13 hours ago |
| [dom](https://github.com/dennwc/dom) | 441 | DOM library for Go and WASM | 2 years ago |
| [go-canvas](https://github.com/markfarnan/go-canvas) | 158 | Library to use HTML5 Canvas  from Go-WASM, with all drawing within go code | a year ago |
| [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) | 113 | Run WASM tests inside your browser | 4 months ago |
| [webapi](https://github.com/gowebapi/webapi) | 100 | Go Lang Web Assembly bindings for DOM, HTML etc | a month ago |
| [vert](https://github.com/norunners/vert) | 60 | WebAssembly interop between Go and JS values. | 2 months ago |


### [Windows](#Windows)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ole](https://github.com/go-ole/go-ole) | 836 | win32 ole implementation for golang | 2 months ago |
| [d3d9](https://github.com/gonutz/d3d9) | 129 | Direct3D9 wrapper for Go. | 2 months ago |
| [gosddl](https://github.com/MonaxGT/gosddl) | 8 | GoSDDL converter | 3 years ago |


### [XML](#XML)
* Libraries and tools for manipulating XML.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xpath](https://github.com/antchfx/xpath) | 457 | XPath package for Golang, supports HTML, XML, JSON document query. | a month ago |
| [xquery](https://github.com/antchfx/xquery) | 155 | Extract data or evaluate value from HTML/XML documents using XPath | 4 years ago |
| [xml2map](https://github.com/sbabiv/xml2map) | 38 | XML to MAP converter written Golang | 2 months ago |
| [xmlwriter](https://github.com/shabbyrobe/xmlwriter) | 22 | xmlwriter is a pure-Go library providing procedural XML generation based on libxml2's xmlwriter module | a year ago |
| [XML-Comp](https://github.com/XML-Comp/XML-Comp) | 16 | Compare ANY markup documents. | 4 years ago |


## [Tools](#Tools)
* Go software and plugins.

### [Code Analysis](#Code-Analysis)
* 

### [Editor Plugins](#Editor-Plugins)
* 

### [Go Generate Tools](#Go-Generate-Tools)
* 

### [Go Tools](#Go-Tools)
* 

### [DevOps Tools](#DevOps-Tools)
* 

### [Other Software](#Other-Software)
* 

## [Resources](#resources)
* Where to discover new Go libraries.

### [Benchmarks](#Benchmarks)
* 

### [E-Books](#E-Books)
* 

### [Gophers](#Gophers)
* 

### [Style Guides](#Style-Guides)
* 

### [Websites](#Websites)
* 

### [Tutorials](#Tutorials)
* 

