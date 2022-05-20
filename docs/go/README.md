# Go
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of awesome Go frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Fri May 20 2022 11:50:14 GMT+0800 (中国标准时间)
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
| [oto](https://github.com/hajimehoshi/oto) | 987 | ♪ A low-level library to play sound on multiple platforms ♪ | 19 days ago |
| [portaudio](https://github.com/gordonklaus/portaudio) | 505 | Go bindings for the PortAudio audio I/O library | 2 months ago |
| [music-theory](https://github.com/go-music-theory/music-theory) | 395 | Go models of Note, Scale, Chord and Key | 2 years ago |
| [waveform](https://github.com/mdlayher/waveform) | 349 | Go package capable of generating waveform images from audio streams. MIT Licensed. | 2 years ago |
| [portmidi](https://github.com/rakyll/portmidi) | 265 | Go bindings for libportmidi | 2 months ago |
| [id3v2](https://github.com/bogem/id3v2) | 244 | 🎵 ID3 decoding and encoding library for Go | 6 days ago |
| [GoAudio](https://github.com/DylanMeeus/GoAudio) | 222 | Go tools for audio processing & creation 🎶 | 3 months ago |
| [flac](https://github.com/mewkiz/flac) | 209 | Package flac provides access to FLAC (Free Lossless Audio Codec) streams. | 3 months ago |
| [malgo](https://github.com/gen2brain/malgo) | 173 | Mini audio library | a month ago |
| [mix](https://github.com/go-mix/mix) | 154 | Sequence-based Go-native audio mixer for music apps | 2 years ago |
| [gaad](https://github.com/Comcast/gaad) | 98 | GAAD (Go Advanced Audio Decoder) | 2 days ago |
| [minimp3](https://github.com/tosone/minimp3) | 79 | Decode mp3 base on https://github.com/lieff/minimp3 | a year ago |
| [vorbis](https://github.com/mccoyst/vorbis) | 31 | A "native" ogg vorbis decoder for Go (uses inline stb_vorbis) | 3 years ago |
| [gosamplerate](https://github.com/dh1tw/gosamplerate) | 17 | Go Bindings for libsamplerate | 2 years ago |


### [Authentication and OAuth](#authentication-and-oauth)
* Libraries for implementing authentications schemes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [casbin](https://github.com/casbin/casbin) | 11938 | An authorization library that supports access control models like ACL, RBAC, ABAC in Golang | 7 days ago |
| [oauth2](https://github.com/golang/oauth2) | 4167 | Go OAuth2 | 2 days ago |
| [goth](https://github.com/markbates/goth) | 3658 | Package goth provides a simple, clean, and idiomatic way to write authentication packages for Go web applications. | 10 days ago |
| [authboss](https://github.com/volatiletech/authboss) | 3058 | The boss of http auth. | a month ago |
| [go-jose](https://github.com/square/go-jose) | 1918 | An implementation of JOSE standards (JWE, JWS, JWT) in Go | 2 months ago |
| [go-oauth2-server](https://github.com/RichardKnop/go-oauth2-server) | 1904 | A standalone, specification-compliant,  OAuth2 server written in Golang. | 24 days ago |
| [loginsrv](https://github.com/tarent/loginsrv) | 1859 | JWT login microservice with plugable backends such as OAuth2, Google, Github, htpasswd, osiam, .. | a year ago |
| [osin](https://github.com/openshift/osin) | 1733 | Golang OAuth2 server library | 2 months ago |
| [gologin](https://github.com/dghubble/gologin) | 1519 | Go login handlers for authentication providers (OAuth1, OAuth2) | 16 hours ago |
| [gorbac](https://github.com/mikespook/gorbac) | 1290 | goRBAC provides a lightweight role-based access control (RBAC) implementation in Golang. | 2 months ago |
| [scs](https://github.com/alexedwards/scs) | 1105 | HTTP Session Management for Go | a month ago |
| [paseto](https://github.com/o1egl/paseto) | 595 | Platform-Agnostic Security Tokens implementation in GO (Golang) | 7 months ago |
| [jwt](https://github.com/cristalhq/jwt) | 542 | Safe, simple and fast JSON Web Tokens for Go | a month ago |
| [permissions2](https://github.com/xyproto/permissions2) | 456 |   :closed_lock_with_key: Middleware for keeping track of users, login states and permissions | 18 days ago |
| [go-guardian](https://github.com/shaj13/go-guardian) | 366 | Go-Guardian is a golang library that provides a simple, clean, and idiomatic way to create powerful modern API and web authentication. | 2 months ago |
| [jwt](https://github.com/pascaldekloe/jwt) | 284 | JSON Web Token library | 7 months ago |
| [jeff](https://github.com/abraithwaite/jeff) | 238 | 🍍Jeff provides the simplest way to manage web sessions in Go. | a year ago |
| [jwt-auth](https://github.com/adam-hanna/jwt-auth) | 216 | This package provides json web token (jwt) middleware for goLang http servers | 10 months ago |
| [httpauth](https://github.com/goji/httpauth) | 213 | HTTP Authentication middlewares | 8 months ago |
| [branca](https://github.com/hako/branca) | 166 | :key: Secure alternative to JWT. Authenticated Encrypted API Tokens for Go. | 2 years ago |
| [otpgen](https://github.com/RijulGulati/otpgen) | 121 | Library to generate TOTP/HOTP codes | 9 months ago |
| [sessionup](https://github.com/swithek/sessionup) | 115 | Straightforward HTTP session management | a month ago |
| [session](https://github.com/icza/session) | 107 | Go session management for web servers (including support for Google App Engine - GAE). | 10 months ago |
| [jwt](https://github.com/robbert229/jwt) | 99 | This is an implementation of JWT in golang! | a year ago |
| [sjwt](https://github.com/brianvoe/sjwt) | 98 | Simple JWT Golang | 3 years ago |
| [rbac](https://github.com/zpatrick/rbac) | 95 | Minimalistic RBAC package for Go applications | 4 years ago |
| [sessions](https://github.com/adam-hanna/sessions) | 65 | A dead simple, highly performant, highly customizable sessions middleware for go http servers. | 2 years ago |
| [securecookie](https://github.com/chmike/securecookie) | 56 | Fast, secure and efficient secure cookie encoder/decoder  | 2 months ago |
| [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) | 43 | Golang library for providing a canonical representation of email address. | 8 months ago |
| [otpgo](https://github.com/jltorresm/otpgo) | 34 | Time-Based One-Time Password (TOTP) and HMAC-Based One-Time Password (HOTP) library for Go. | a year ago |
| [scope](https://github.com/ThundR67/scope) | 21 | Easily Manage OAuth2 Scopes In Go | a year ago |
| [cookiestxt](https://github.com/mengzhuo/cookiestxt) | 12 | cookiestxt implement parser of cookies txt format | a year ago |
| [sessiongate-go](https://github.com/f0rmiga/sessiongate-go) | 10 | A driver for the SessionGate Redis module - easy session management using the Go language. | 4 years ago |


### [Blockchain](#blockchain)
* Tools for building blockchains.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ethereum](https://github.com/ethereum/go-ethereum) | 37413 | Official Go implementation of the Ethereum protocol | an hour ago |
| [tendermint](https://github.com/tendermint/tendermint) | 4916 | ⟁ Tendermint Core (BFT Consensus) in Go | 21 minutes ago |
| [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) | 3965 | :chains: A Framework for Building High Value Public Blockchains :sparkles: | 3 hours ago |
| [gossamer](https://github.com/ChainSafe/gossamer) | 326 | 🕸️ Gossamer: A Go implementation of the Polkadot Host | 8 hours ago |


### [Bot Building](#bot-building)
* Libraries for building and working with bots.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) | 3662 | Golang bindings for the Telegram Bot API | 2 days ago |
| [olivia](https://github.com/olivia-ai/olivia) | 3234 | 💁‍♀️Your new best friend powered by an artificial neural network | 4 months ago |
| [telebot](https://github.com/tucnak/telebot) | 2549 | Telebot is a Telegram bot framework in Go. | 11 days ago |
| [kelp](https://github.com/stellar/kelp) | 886 | Kelp is a free and open-source trading bot for the Stellar DEX and 100+ centralized exchanges | 5 days ago |
| [golang-crypto-trading-bot](https://github.com/saniales/golang-crypto-trading-bot) | 762 | A golang implementation of a console-based trading bot for cryptocurrency exchanges | 2 days ago |
| [bot](https://github.com/go-chat-bot/bot) | 742 | IRC, Slack, Telegram and RocketChat bot written in go | 4 months ago |
| [slacker](https://github.com/shomali11/slacker) | 600 | Slack Bot Framework | a month ago |
| [tbot](https://github.com/yanzay/tbot) | 323 | Go library for Telegram Bot API | a year ago |
| [go-sarah](https://github.com/oklahomer/go-sarah) | 242 | Simple yet customizable bot framework written in Go. | a month ago |
| [go-twitch-irc](https://github.com/gempir/go-twitch-irc) | 226 | go irc client for twitch.tv | 19 days ago |
| [tenyks](https://github.com/kyleterry/tenyks) | 172 | The Tenyks IRC bot. | 3 years ago |
| [hanu](https://github.com/sbstjn/hanu) | 137 | Golang Framework for writing Slack bots | a year ago |
| [echotron](https://github.com/NicoNex/echotron) | 115 | An elegant and concurrent library for Telegram bots in Go. | 25 days ago |
| [go-tgbot](https://github.com/olebedev/go-tgbot) | 111 | Golang  telegram bot API wrapper, session-based router and middleware | 4 years ago |
| [slack-bot](https://github.com/innogames/slack-bot) | 95 | Ready to use Slack bot for lazy developers: start Jenkins jobs, watch Jira tickets, watch pull requests... | 9 days ago |
| [margelet](https://github.com/zhulik/margelet) | 72 | Telegram Bot Framework for Go | 6 years ago |
| [ephemeral-roles](https://github.com/ewohltman/ephemeral-roles) | 61 | A Discord bot for managing ephemeral roles based upon voice channel member presence. | 3 days ago |
| [slackscot](https://github.com/alexandre-normand/slackscot) | 50 | Slack bot core/framework written in Go with support for reactions to message updates/deletes | 6 months ago |
| [govkbot](https://github.com/nikepan/govkbot) | 39 | VK bot package for Go | 9 months ago |
| [micha](https://github.com/onrik/micha) | 19 | Client lib for Telegram bot api | a year ago |
| [teleterm](https://github.com/alfiankan/teleterm) | 8 | Telegram Bot Exec Terminal Command | 3 months ago |


### [Build Automation](#build-automation)
* Libraries and tools helping with build automation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [task](https://github.com/go-task/task) | 5115 | A task runner / simpler Make alternative written in Go | 14 hours ago |
| [realize](https://github.com/oxequa/realize) | 4235 | Realize is the #1 Golang Task Runner which enhance your workflow by automating the most common tasks and using the best performing Golang live reloading. | a year ago |
| [mmake](https://github.com/tj/mmake) | 1603 | Modern Make  | 2 years ago |
| [goyek](https://github.com/goyek/goyek) | 284 | Create build pipelines in Go  | 4 days ago |
| [taskctl](https://github.com/taskctl/taskctl) | 189 | Concurrent task runner, developer's routine tasks automation toolkit. Simple modern alternative to GNU Make 🧰 | 2 months ago |
| [1build](https://github.com/gopinath-langote/1build) | 154 | Frictionless way of managing project-specific commands | a month ago |
| [gaper](https://github.com/maxcnunes/gaper) | 55 | Builds and restarts a Go project when it crashes or some watched file changes | 5 months ago |
| [anko](https://github.com/GuilhermeCaruso/anko) | 25 | :crystal_ball: Simple application watcher | a year ago |


### [Standard CLI](#Standard-CLI)
* Libraries for building standard or basic Command Line applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cobra](https://github.com/spf13/cobra) | 26670 | A Commander for modern Go CLI interactions | 2 days ago |
| [cli](https://github.com/urfave/cli) | 18277 | A simple, fast, and fun package for building command line apps in Go | 16 hours ago |
| [elvish](https://github.com/elves/elvish) | 4737 | Elvish = Expressive Programming Language + Versatile Interactive Shell | 6 hours ago |
| [andOTP](https://github.com/andOTP/andOTP) | 3571 | Open source two-factor authentication for Android | a month ago |
| [kingpin](https://github.com/alecthomas/kingpin) | 3223 | CONTRIBUTIONS ONLY: A Go (golang) command line and flag parser | 7 months ago |
| [dnote](https://github.com/dnote/dnote) | 2296 | A simple command line notebook for programmers | 10 days ago |
| [go-flags](https://github.com/jessevdk/go-flags) | 2226 | go command line option parser | 3 months ago |
| [pflag](https://github.com/spf13/pflag) | 1783 | Drop-in replacement for Go's flag package, implementing POSIX/GNU-style --flags. | 22 days ago |
| [cli](https://github.com/mitchellh/cli) | 1518 | A Go library for implementing command-line interfaces. | 6 days ago |
| [go-arg](https://github.com/alexflint/go-arg) | 1390 | Struct-based argument parsing in Go | 3 months ago |
| [ops](https://github.com/nanovms/ops) | 973 | ops - build and run nanos unikernels | 8 hours ago |
| [liner](https://github.com/peterh/liner) | 893 | Pure Go line editor with history, inspired by linenoise | 3 months ago |
| [complete](https://github.com/posener/complete) | 831 | bash completion written in go + bash completion for go command | 4 months ago |
| [mow.cli](https://github.com/jawher/mow.cli) | 799 | A versatile library for building CLI applications in Go | a month ago |
| [flaggy](https://github.com/integrii/flaggy) | 794 | Idiomatic Go input parsing with subcommands, positional values, and flags at any position. No required project or package layout and no external dependencies. | 3 days ago |
| [cli](https://github.com/mkideal/cli) | 649 | CLI - A package for building command line app with go | 3 days ago |
| [argparse](https://github.com/akamensky/argparse) | 423 | Argparse for golang. Just because `flag` sucks | 9 months ago |
| [climax](https://github.com/tucnak/climax) | 196 | Climax is an alternative CLI with the human face | 2 years ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 169 | hiboot is a high performance web and cli application framework with dependency injection support | 10 days ago |
| [wmenu](https://github.com/dixonwille/wmenu) | 161 | An easy to use menu structure for cli applications that prompts users to make choices. | 9 months ago |
| [commandeer](https://github.com/jaffee/commandeer) | 156 | Automatically sets up command line flags based on struct fields and tags. | a year ago |
| [sflags](https://github.com/octago/sflags) | 134 | Generate flags by parsing structures | 10 months ago |
| [flag](https://github.com/cosiner/flag) | 120 | Flag is a simple but powerful command line option parsing library for Go support infinite level subcommand | a year ago |
| [job](https://github.com/liujianping/job) | 112 | JOB, make your short-term command as a long-term job. 将命令行规划成任务的工具 | 2 years ago |
| [clif](https://github.com/ukautz/clif) | 112 | Another CLI framework for Go. It works on my machine. | 3 years ago |
| [cli](https://github.com/teris-io/cli) | 108 | Simple and complete API for building command line applications in Go | a year ago |
| [clir](https://github.com/leaanthony/clir) | 106 | A Simple and Clear CLI library. Dependency free. | a month ago |
| [cmdr](https://github.com/hedzr/cmdr) | 105 | POSIX-compliant command-line UI (CLI) parser and Hierarchical-configuration operations | 19 days ago |
| [env](https://github.com/codingconcepts/env) | 90 | Tag-based environment configuration for structs | 2 years ago |
| [gocmd](https://github.com/devfacet/gocmd) | 57 | A Go library for building command line applications. | 16 days ago |
| [wlog](https://github.com/dixonwille/wlog) | 57 | A simple logging interface that supports cross-platform color and concurrency. | 9 months ago |
| [strumt](https://github.com/antham/strumt) | 46 | Strumt is a library to create prompt chain | 14 days ago |
| [go-getoptions](https://github.com/DavidGamba/go-getoptions) | 41 | Fully featured Go (golang) command line option parser with built-in auto-completion support. | 3 months ago |
| [flagvar](https://github.com/sgreben/flagvar) | 38 | A collection of CLI argument types for the Go `flag` package. | 2 years ago |
| [argv](https://github.com/cosiner/argv) | 33 |  | 2 years ago |
| [cmd](https://github.com/posener/cmd) | 33 | The standard library flag package with its missing features | 2 years ago |
| [go-commander](https://github.com/yitsushi/go-commander) | 28 | Go library to simplify CLI workflow | 2 years ago |
| [go-command-chain](https://github.com/rainu/go-command-chain) | 23 | A go library for easy configure and run command chains. Such like pipelining in unix shells. | 2 months ago |
| [sand](https://github.com/Zaba505/sand) | 18 | Package for creating interpreters | 3 years ago |
| [go-andotp](https://github.com/RijulGulati/go-andotp) | 15 | CLI program to encrypt/decrypt andOTP files | a year ago |
| [ts](https://github.com/liujianping/ts) | 13 | timestamp convert & compare tool. 时间戳转换与对比工具 | 3 years ago |
| [subcmd](https://github.com/bobg/subcmd) | 2 |  | 9 months ago |


### [Advanced Console UIs](#Advanced-Console-UIs)
* Libraries for building Console Applications and Console User Interfaces.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blessed-contrib](https://github.com/yaronn/blessed-contrib) | 14759 | Build terminal dashboards using ascii/ansi art and javascript | 3 months ago |
| [termui](https://github.com/gizak/termui) | 11797 | Golang terminal dashboard | 2 months ago |
| [gocui](https://github.com/jroimartin/gocui) | 8166 | Minimalist Go package aimed at creating Console User Interfaces. | 6 months ago |
| [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) | 7703 | Library for building powerful interactive command line applications in Python | 3 days ago |
| [go-prompt](https://github.com/c-bata/go-prompt) | 4480 | Building powerful interactive prompts in Go, inspired by python-prompt-toolkit. | 13 days ago |
| [termbox-go](https://github.com/nsf/termbox-go) | 4308 | Pure Go termbox implementation | 3 months ago |
| [pterm](https://github.com/pterm/pterm) | 2591 | ✨ #PTerm is a modern Go module to beautify console output. Featuring charts, progressbars, tables, trees, and much more 🚀 It's completely configurable and 100% cross-platform compatible. | 22 days ago |
| [progressbar](https://github.com/schollz/progressbar) | 2464 | A really basic thread-safe progress bar for Golang applications | 4 months ago |
| [termdash](https://github.com/mum4k/termdash) | 1977 | Terminal based dashboard. | a month ago |
| [asciigraph](https://github.com/guptarohit/asciigraph) | 1927 | Go package to make lightweight ASCII line graph ╭┈╯ in command line apps with no other dependencies. | 16 days ago |
| [uiprogress](https://github.com/gosuri/uiprogress) | 1908 | A go library to render progress bars in terminal applications | 9 months ago |
| [mpb](https://github.com/vbauerster/mpb) | 1673 | multi progress bar for Go cli applications | 21 days ago |
| [uilive](https://github.com/gosuri/uilive) | 1452 | uilive is a go library for updating terminal output in realtime | 4 months ago |
| [aurora](https://github.com/logrusorgru/aurora) | 1196 | Golang ultimate ANSI-colors that supports Printf/Sprintf methods | a year ago |
| [color](https://github.com/gookit/color) | 1095 | 🎨 Terminal color rendering library, support 8/16 colors, 256 colors, RGB color rendering output, support Print/Sprintf methods, compatible with Windows. GO CLI 控制台颜色渲染工具库，支持16色，256色，RGB色彩渲染输出，使用类似于 Print/Sprintf，兼容并支持 Windows 环境的色彩渲染 | a day ago |
| [termenv](https://github.com/muesli/termenv) | 1054 | Advanced ANSI style & color support for your terminal applications | 7 hours ago |
| [uitable](https://github.com/gosuri/uitable) | 647 | A go library to improve readability in terminal apps using tabular data | a month ago |
| [go-isatty](https://github.com/mattn/go-isatty) | 617 |  | 3 months ago |
| [go-colorable](https://github.com/mattn/go-colorable) | 608 |  | 6 months ago |
| [gommon](https://github.com/labstack/gommon) | 445 | Common packages for Go | 14 hours ago |
| [chalk](https://github.com/ttacon/chalk) | 398 | Intuitive package for prettifying terminal/console output. http://godoc.org/github.com/ttacon/chalk | 3 years ago |
| [simpletable](https://github.com/alexeyco/simpletable) | 353 | Simple tables in terminal with Go | a year ago |
| [yacspin](https://github.com/theckman/yacspin) | 337 | Yet Another CLi Spinner; providing over 80 easy to use and customizable terminal spinners for multiple OSes | 5 months ago |
| [tabby](https://github.com/cheynewallace/tabby) | 317 | A tiny library for super simple Golang tables | a year ago |
| [go-colortext](https://github.com/daviddengcn/go-colortext) | 210 | Change the color of console text. | 2 years ago |
| [box-cli-maker](https://github.com/Delta456/box-cli-maker) | 201 | Make Highly Customized Boxes for your CLI | 3 months ago |
| [cfmt](https://github.com/mingrammer/cfmt) | 85 | :art: Contextual fmt inspired by bootstrap color classes | 3 years ago |
| [tabular](https://github.com/InVisionApp/tabular) | 62 | Tabular simplifies printing ASCII tables from command line utilities | 4 years ago |
| [cfmt](https://github.com/i582/cfmt) | 40 | Small library for simple and convenient formatted stylized output to the console. | a year ago |
| [ctc](https://github.com/wzshiming/ctc) | 37 | Console Text Colors - The non-invasive cross-platform terminal color library does not need to modify the Print method | 2 years ago |
| [marker](https://github.com/cyucelen/marker) | 27 |  🖍️ Marker is the easiest way to match and mark strings for colorful terminal outputs! | 2 months ago |
| [table](https://github.com/tomlazar/table) | 26 | pretty colorfull tables in go with less effort | a month ago |
| [colourize](https://github.com/TreyBastian/colourize) | 25 | An ANSI colour terminal package for Go | 6 years ago |
| [go-ataman](https://github.com/workanator/go-ataman) | 11 | Another Text Attribute Manupulator | a year ago |


### [Configuration](#Configuration)
* Libraries for configuration parsing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [viper](https://github.com/spf13/viper) | 19254 | Go configuration with fangs | 2 days ago |
| [godotenv](https://github.com/joho/godotenv) | 4901 | A Go port of Ruby's dotenv library (Loads environment variables from `.env`.) | 6 days ago |
| [envconfig](https://github.com/kelseyhightower/envconfig) | 4109 | Golang library for managing configuration data from environment variables | 5 months ago |
| [ini](https://github.com/go-ini/ini) | 2954 | Package ini provides INI file read and write functionality in Go | a month ago |
| [env](https://github.com/caarlos0/env) | 2466 | A simple and zero-dependencies library to parse environment variables into structs. | 15 hours ago |
| [koanf](https://github.com/knadh/koanf) | 984 | Simple, lightweight, extensible, configuration management library for Go. Support for JSON, TOML, YAML, env, command line, file, S3 etc. Alternative to viper. | a day ago |
| [konfig](https://github.com/lalamove/konfig) | 628 | Composable, observable and performant config handling for Go for the distributed processing era | 2 years ago |
| [cleanenv](https://github.com/ilyakaznacheev/cleanenv) | 559 | ✨Clean and minimalistic environment configuration reader for Golang | 4 months ago |
| [confita](https://github.com/heetch/confita) | 442 | Load configuration in cascade from multiple backends into a struct | 10 months ago |
| [aconfig](https://github.com/cristalhq/aconfig) | 367 | Simple, useful and opinionated config loader. | 4 days ago |
| [config](https://github.com/gookit/config) | 345 | 📝 Go config manage(load,get,set). support JSON, YAML, TOML, INI, HCL, ENV and Flags. Multi file load, data override merge, parse ENV var. Go应用配置加载管理，支持多种格式，多文件加载，远程文件加载，支持数据合并，解析环境变量名 | 2 days ago |
| [config](https://github.com/JeremyLoy/config) | 307 | 12 factor configuration as a typesafe struct in as little as two function calls | 6 months ago |
| [config](https://github.com/golobby/config) | 280 | A lightweight yet powerful configuration manager for the Go programming language | 20 days ago |
| [hjson-go](https://github.com/hjson/hjson-go) | 263 | Hjson for Go | a month ago |
| [store](https://github.com/tucnak/store) | 260 | A dead simple configuration manager for Go applications | 5 years ago |
| [config](https://github.com/olebedev/config) | 250 | JSON or YAML configuration wrapper with convenient access methods. | 5 months ago |
| [envconfig](https://github.com/vrischmann/envconfig) | 222 | Small library to read your configuration from environment variables | 7 months ago |
| [config](https://github.com/joshbetz/config) | 210 | 🛠 A configuration library for Go that parses environment variables, JSON files, and reloads automatically on SIGHUP. | 6 months ago |
| [xdg](https://github.com/adrg/xdg) | 210 | Go implementation of the XDG Base Directory Specification and XDG user directories | a day ago |
| [fig](https://github.com/kkyr/fig) | 204 | A minimalist Go configuration library | 5 months ago |
| [gcfg](https://github.com/go-gcfg/gcfg) | 161 | read INI-style configuration files into Go structs; supports user-defined types and subsections | a year ago |
| [goconfig](https://github.com/gosidekick/goconfig) | 155 | goconfig uses a struct as input and populates the fields of this struct with parameters from command line, environment variables and configuration file. | 7 months ago |
| [harvester](https://github.com/beatlabs/harvester) | 101 | Harvest configuration, watch and notify subscriber | a day ago |
| [onion](https://github.com/goraz/onion) | 101 | Layer based configuration for golang | 9 months ago |
| [envcfg](https://github.com/tomazk/envcfg) | 98 | Un-marshaling environment variables to Go structs | 5 years ago |
| [envh](https://github.com/antham/envh) | 95 | Go helpers to manage environment variables | 14 days ago |
| [configuro](https://github.com/sherifabdlnaby/configuro) | 81 | An opinionated configuration loading framework for Containerized and Cloud-Native applications. | a year ago |
| [xdg](https://github.com/OpenPeeDeeP/xdg) | 68 | A cross platform package that follows the XDG Standard | 2 years ago |
| [gofigure](https://github.com/ian-kent/gofigure) | 64 | Go configuration made easy! | 3 years ago |
| [configure](https://github.com/paked/configure) | 56 | Configure is a Go package that gives you easy configuration of your project through redundancy | 3 years ago |
| [configuration](https://github.com/BoRuDar/configuration) | 53 | Library for setting values to structs' fields from env, flags, files or default tag | a day ago |
| [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) | 49 | Go package that interfaces with AWS System Manager | 21 days ago |
| [uconfig](https://github.com/omeid/uconfig) | 45 | Lightweight, zero-dependency, and extendable configuration management library for Go | 3 months ago |
| [gone](https://github.com/One-com/gone) | 40 | Golang packages for writing small daemons and servers. | a year ago |
| [hocon](https://github.com/gurkankaymak/hocon) | 40 | go implementation of lightbend's HOCON configuration library https://github.com/lightbend/config | 3 months ago |
| [go-up](https://github.com/ufoscout/go-up) | 37 | go-up! A simple configuration library with recursive placeholders resolution and no magic. | 2 years ago |
| [ingo](https://github.com/schachmat/ingo) | 37 | persistent storage for flags in go | 5 years ago |
| [mini](https://github.com/sasbury/mini) | 30 | A golang package for parsing ini-style configuration files | 3 years ago |
| [genv](https://github.com/sakirsensoy/genv) | 28 | Genv is a library for Go (golang) that makes it easy to read and use environment variables in your projects. It also allows environment variables to be loaded from the .env file. | 3 years ago |
| [conflate](https://github.com/the4thamigo-uk/conflate) | 25 | Library providing routines to merge and validate JSON, YAML and/or TOML files | 2 years ago |
| [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) | 14 | Go utility for loading configuration parameters from AWS SSM (Parameter Store) | a year ago |
| [envconf](https://github.com/ian-kent/envconf) | 10 | Configure Go applications from the environment | 8 years ago |
| [ini](https://github.com/wlevene/ini) | 9 | ini parser for golang | 6 months ago |
| [go-ini](https://github.com/subpop/go-ini) | 8 | automatic mirror of https://git.sr.ht/~spc/go-ini | a year ago |
| [env](https://github.com/nasermirzaei89/env) | 8 | Golang Get Environment Variables Package | 5 months ago |
| [swap](https://github.com/oblq/swap) | 6 | Instantiate/configure structs recursively, based on build environment. (YAML, TOML, JSON and env). | 6 months ago |
| [typenv](https://github.com/diegomarangoni/typenv) | 6 | Go minimalist typed environment variables library | 2 years ago |
| [go-conf](https://github.com/ThomasObenaus/go-conf) | 4 | Library for easy configuration of a golang service | 7 months ago |
| [gonfig](https://github.com/miladabc/gonfig) | 3 | Tag based configuration loader from different providers | 10 months ago |


### [Continuous Integration](#Continuous-Integration)
* Tools for help with continuous integration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [drone](https://github.com/harness/drone) | 24976 | Drone is a Container-Native, Continuous Delivery Platform | 7 hours ago |
| [cds](https://github.com/ovh/cds) | 3855 | Enterprise-Grade Continuous Delivery & DevOps Automation Open Source Platform | 11 hours ago |
| [goveralls](https://github.com/mattn/goveralls) | 722 |  | 18 days ago |
| [gotestfmt](https://github.com/haveyoudebuggedit/gotestfmt) | 211 | go test output for humans | 4 days ago |
| [overalls](https://github.com/go-playground/overalls) | 109 | :jeans:Multi-Package go project coverprofile for tools like goveralls | 2 years ago |
| [duci](https://github.com/duck8823/duci) | 73 | The simple ci server  | 5 days ago |
| [gomason](https://github.com/nikogura/gomason) | 53 | A tool for testing, building, signing, and publishing binaries. | 5 months ago |
| [roveralls](https://github.com/lawrencewoodman/roveralls) | 16 | A Go recursive coverage testing tool | 5 years ago |


### [CSS Preprocessors](#CSS-Preprocessors)
* Libraries for preprocessing CSS files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gcss](https://github.com/yosssi/gcss) | 453 | Pure Go CSS Preprocessor | 8 years ago |
| [go-libsass](https://github.com/wellington/go-libsass) | 187 | Go wrapper for libsass, the only Sass 3.5 compiler for Go | 2 years ago |


### [Data Structures](#Data-Structures)
* Generic datastructures and algorithms in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gods](https://github.com/emirpasic/gods) | 11502 | GoDS (Go Data Structures) - Sets, Lists, Stacks, Maps, Trees, Queues, and much more | a month ago |
| [go-datastructures](https://github.com/Workiva/go-datastructures) | 6492 | A collection of useful, performant, and threadsafe Go datastructures. | 3 months ago |
| [golang-set](https://github.com/deckarep/golang-set) | 2437 | A simple generic set type for the Go language. Trusted by Docker, 1Password, Ethereum and Hashicorp. | 14 days ago |
| [gota](https://github.com/go-gota/gota) | 2171 | Gota: DataFrames and data wrangling in Go (Golang) | 3 days ago |
| [roaring](https://github.com/RoaringBitmap/roaring) | 1571 | Roaring bitmaps in Go (golang) | 15 hours ago |
| [bloom](https://github.com/bits-and-blooms/bloom) | 1563 | Go package implementing Bloom filters | 2 months ago |
| [BoomFilters](https://github.com/tylertreat/BoomFilters) | 1450 | Probabilistic data structures for processing continuous, unbounded streams. | a year ago |
| [gocache](https://github.com/eko/gocache) | 1190 | ☔️ A complete Go cache library that brings you multiple ways of managing your caches | a day ago |
| [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) | 899 | Cuckoo Filter: Practically Better Than Bloom | a month ago |
| [bitset](https://github.com/bits-and-blooms/bitset) | 881 | Go package implementing bitsets | a month ago |
| [hyperloglog](https://github.com/axiomhq/hyperloglog) | 775 | HyperLogLog with lots of sugar (Sparse, LogLog-Beta bias correction and TailCut space reduction) | 4 months ago |
| [gostl](https://github.com/liyue201/gostl) | 654 | Data structure and algorithm library for go, designed to provide functions similar to C++ STL | 20 days ago |
| [algorithms](https://github.com/shady831213/algorithms) | 644 | CLRS study. Codes are written with golang. | a year ago |
| [trie](https://github.com/derekparker/trie) | 584 | Data structure and relevant algorithms for extremely fast prefix/fuzzy string searching. | 2 months ago |
| [ttlcache](https://github.com/jellydator/ttlcache) | 415 | An in-memory cache with item expiration and generics | 2 months ago |
| [go-geoindex](https://github.com/hailocab/go-geoindex) | 339 | Go native library for fast point tracking and K-Nearest queries | 4 years ago |
| [merkletree](https://github.com/cbergoon/merkletree) | 336 | A Merkle Tree implementation written in Go. | 3 months ago |
| [deque](https://github.com/gammazero/deque) | 327 | Fast ring-buffer deque (double-ended queue) | 3 months ago |
| [go-edlib](https://github.com/hbollon/go-edlib) | 321 | 📚 String comparison and edit distance algorithms library, featuring : Levenshtein, LCS, Hamming, Damerau levenshtein (OSA and Adjacent transpositions algorithms), Jaro-Winkler, Cosine, etc... | 4 months ago |
| [hilbert](https://github.com/google/hilbert) | 250 | Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves. | 3 years ago |
| [goskiplist](https://github.com/ryszard/goskiplist) | 234 | A skip list implementation in Go | 3 years ago |
| [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) | 232 | Adaptive Radix Trees implemented in Go | 2 years ago |
| [cuckoo-filter](https://github.com/linvon/cuckoo-filter) | 216 | Cuckoo Filter go implement, better than Bloom Filter, configurable and space optimized  布谷鸟过滤器的Go实现，优于布隆过滤器，可以定制化过滤器参数，并进行了空间优化 | 2 months ago |
| [skiplist](https://github.com/MauriceGit/skiplist) | 204 | A Go library for an efficient implementation of a skip list: https://godoc.org/github.com/MauriceGit/skiplist | 4 months ago |
| [levenshtein](https://github.com/agnivade/levenshtein) | 197 | Go implementation to calculate Levenshtein Distance. | 17 days ago |
| [binpacker](https://github.com/zhuangsirui/binpacker) | 187 | A binary stream packer and unpacker | 7 months ago |
| [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) | 181 | Go concurrent-safe, goroutine-safe, thread-safe queue | 3 months ago |
| [iter](https://github.com/disksing/iter) | 156 | Go implementation of C++ STL iterators and algorithms. | 2 months ago |
| [bloom](https://github.com/zentures/bloom) | 146 | Bloom filters implemented in Go. | 4 years ago |
| [bitmap](https://github.com/kelindar/bitmap) | 142 | Simple dense bitmap index in Go with binary operators | 2 months ago |
| [ring](https://github.com/tannerryan/ring) | 126 | Package ring provides a high performance and thread safe Go implementation of a bloom filter. | 2 years ago |
| [encoding](https://github.com/zentures/encoding) | 123 | Integer Compression Libraries for Go | 4 years ago |
| [bit](https://github.com/yourbasic/bit) | 120 | Bitset data structure | 4 years ago |
| [go-rquad](https://github.com/arl/go-rquad) | 120 | :pushpin: State of the art point location and neighbour finding algorithms for region quadtrees, in Go | 2 years ago |
| [remember-go](https://github.com/rocketlaunchr/remember-go) | 112 | Cache Slow Database Queries | a year ago |
| [conjungo](https://github.com/InVisionApp/conjungo) | 104 | A small flexible merge library in go | 2 years ago |
| [go-mcache](https://github.com/OrlovEvgeny/go-mcache) | 82 | Fast in-memory key:value store/cache with TTL | 2 years ago |
| [skiplist](https://github.com/gansidui/skiplist) | 79 | skiplist for golang | 7 years ago |
| [bloom](https://github.com/yourbasic/bloom) | 71 | Probabilistic set data structure | 5 years ago |
| [levenshtein](https://github.com/agext/levenshtein) | 68 | Levenshtein distance and similarity metrics with customizable edit costs and Winkler-like bonus for common prefix. | 2 years ago |
| [crunch](https://github.com/superwhiskers/crunch) | 58 | take bytes out of things easily ✨🍪 | 2 months ago |
| [count-min-log](https://github.com/seiflotfy/count-min-log) | 57 | Go implementation of Count-Min-Log | 5 years ago |
| [nan](https://github.com/kak-tus/nan) | 50 | Zero allocation Nullable structures in one library with handy conversion functions, marshallers and unmarshallers | 3 months ago |
| [goset](https://github.com/zoumo/goset) | 46 | Set is a useful collection but there is no built-in implementation in Go lang. | a year ago |
| [hide](https://github.com/emvi/hide) | 46 | ID type with marshalling to/from hash to prevent sending IDs to clients. | 6 months ago |
| [concurrent-writer](https://github.com/free/concurrent-writer) | 43 | Highly concurrent drop-in replacement for bufio.Writer | 5 years ago |
| [timedmap](https://github.com/zekroTJA/timedmap) | 41 | A thread safe map which has expiring key-value pairs. | 21 days ago |
| [deque](https://github.com/edwingeng/deque) | 40 | A highly optimized double-ended queue | a year ago |
| [pipeline](https://github.com/hyfather/pipeline) | 39 | Pipelines using goroutines | 7 months ago |
| [typ](https://github.com/gurukami/typ) | 32 | Null Types, Safe primitive type conversion and fetching value from complex structures. | 7 months ago |
| [cmap](https://github.com/lrita/cmap) | 25 | a thread-safe concurrent map for go | 2 years ago |
| [null](https://github.com/emvi/null) | 25 | Nullable Go types that can be marshalled/unmarshalled to/from JSON. | 6 months ago |
| [dict](https://github.com/srfrog/dict) | 24 | Python-like dictionaries for Go | 2 years ago |
| [ptrie](https://github.com/viant/ptrie) | 24 | A prefix tree implementation in go  | 2 months ago |
| [set](https://github.com/StudioSol/set) | 21 | A simple Set data structure implementation in Go (Golang) using LinkedHashMap. | 2 months ago |
| [go-ef](https://github.com/amallia/go-ef) | 19 | A Go implementation of the Elias-Fano encoding | 5 years ago |
| [parapipe](https://github.com/nazar256/parapipe) | 18 | Paralleling pipeline | a year ago |
| [treap](https://github.com/perdata/treap) | 18 | golang persistent immutable treap sorted sets | 2 years ago |
| [mspm](https://github.com/BlackRabbitt/mspm) | 17 | Multi-String Pattern Matching Algorithm Using TrieHashNode | 4 years ago |
| [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) | 14 | Ordered-concurrently a library for concurrent processing with ordered output in Go. Process work concurrently and returns output in a channel in the order of input. It is useful in concurrently processing items in a queue, and get output in the order provided by the queue. | 2 months ago |
| [gofal](https://github.com/xxjwxc/gofal) | 13 | fractional api base on golang . golang math tools fractional molecular denominator 分数计算 分子 分母 运算 | 3 years ago |
| [bloomfilter](https://github.com/OldPanda/bloomfilter) | 9 | Yet another Bloomfilter implementation in Go, compatible with Java's Guava library | a year ago |
| [gdcache](https://github.com/ulovecode/gdcache) | 9 | gdcache is a pure non-intrusive cache library implemented by golang, you can use it to implement your own cache. | 7 months ago |
| [goterator](https://github.com/yaa110/goterator) | 8 | Lazy iterator implementation for Golang | a year ago |
| [hashsplit](https://github.com/bobg/hashsplit) | 7 |  | 9 months ago |
| [slices](https://github.com/srfrog/slices) | 7 | Functions that operate on slices. Similar to functions from package strings or package bytes that have been adapted to work with slices. | 2 years ago |
| [dsu](https://github.com/ihebu/dsu) | 6 | Disjoint Set data structure implementation in Go | 4 months ago |
| [parsefields](https://github.com/MonaxGT/parsefields) | 6 | Tools for parse JSON-like logs for collecting unique fields and events | 3 years ago |
| [merkle](https://github.com/bobg/merkle) | 2 | Merkle hash trees | 12 days ago |


### [Database](#Database)
* Databases in Go.

#### [Databases implemented in Go](#Databases-implemented-in-Go)
* Databases implemented in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cockroach](https://github.com/cockroachdb/cockroach) | 24597 | CockroachDB - the open source, cloud-native distributed SQL database. | a few seconds ago |
| [badger](https://github.com/dgraph-io/badger) | 10814 | Fast key-value DB in Go. | 20 days ago |
| [bigcache](https://github.com/allegro/bigcache) | 5685 | Efficient cache for gigabytes of data written in Go. | 11 days ago |
| [bbolt](https://github.com/etcd-io/bbolt) | 5547 | An embedded key/value database for Go. | a month ago |
| [buntdb](https://github.com/tidwall/buntdb) | 3747 | BuntDB is an embeddable, in-memory key/value database for Go with custom indexing and geospatial support | 5 days ago |
| [cache2go](https://github.com/muesli/cache2go) | 1752 | Concurrency-safe Go caching library with expiration capabilities and access counters | 5 months ago |
| [cache](https://github.com/akyoto/cache) | 107 | :handbag: Cache arbitrary data with an expiration time. | 2 years ago |
| [bcache](https://github.com/iwanbk/bcache) | 86 | Eventually consistent distributed in-memory  cache Go library | 3 years ago |
| [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) | 41 | golang bigcache with clustering as a library. | 4 years ago |


#### [Database schema migration](#Database-schema-migration)
* Database schema migration.

#### [Database tools.](#Database-tools)
* Database-tools.

#### [SQL query builder](#SQL-query-builder)
* SQL query builder, libraries for building and using SQL.

### [Database Drivers](#Database-Drivers)
* Libraries for connecting and operating databases.

#### [Relational Databases](#Relational-Databases)
* 

#### [NoSQL Databases](#NoSQL-Databases)
* 

#### [Search and Analytic Databases](#Search-and-Analytic-Databases)
* 

#### [Multiple Backends](#Multiple-Backends)
* 

### [Date and Time](#Date-and-Time)
* Libraries for working with dates and times.

### [Distributed Systems](#Distributed-Systems)
* Packages that help with building Distributed Systems.

### [Dynamic DNS](#Dynamic-DNS)
* Tools for updating dynamic DNS records.

### [Email](#Email)
* Libraries and tools that implement email creation and sending.

### [Embeddable Scripting Languages](#Embeddable-Scripting-Languages)
* Embedding other languages inside your go code.

### [Error Handling](#Error-Handling)
* Libraries for handling errors.

### [File Handling](#File-Handling)
* Libraries for handling files and file systems.

### [Financial](#Financial)
* Packages for accounting and finance.

### [Forms](#Forms)
* Libraries for working with forms.

### [Functional](#Functional)
* Packages to support functional programming in Go.

### [Game Development](#Game-Development)
* Awesome game development libraries.

### [Generation and Generics](#Generation-and-Generics)
* Tools to enhance the language with features like generics via code generation.

### [Geographic](#Geographic)
* Geographic tools and servers.

### [Go Compilers](#Go-Compilers)
* Tools for compiling Go to other languages.

### [Goroutines](#Goroutines)
* Tools for managing and working with Goroutines.

### [GUI](#GUI)
* Libraries for building GUI Applications.

#### [Toolkits](#Toolkits)
* 

#### [Interaction](#Interaction)
* 

### [Hardware](#Hardware)
* Libraries, tools, and tutorials for interacting with hardware.

### [Images](#Images)
* Libraries for manipulating images.

### [IoT -> Internet of Things](#IoT)
* Libraries for programming devices of the IoT.

### [Job Scheduler](#Job-Scheduler)
* Libraries for scheduling jobs.

### [JSON](#JSON)
* Libraries for working with JSON.

### [Logging](#Logging)
* Libraries for generating and working with log files.

### [Machine Learning](#Machine-Learning)
* Libraries for Machine Learning.

### [Messaging](#Messaging)
* Libraries that implement messaging systems.

### [Microsoft Office](#Microsoft-Office)
* Office

### [Microsoft Excel](#Microsoft-Excel)
* Libraries for working with Microsoft Excel.

### [Miscellaneous](#Miscellaneous)
* 

#### [Dependency Injection](#Dependency-Injection)
* Libraries for working with dependency injection.

#### [Project Layout](#Project-Layout)
* Unofficial set of patterns for structuring projects.

#### [Strings](#Strings)
* Libraries for working with strings.

#### [Uncategorized](#Uncategorized)
* These libraries were placed here because none of the other categories seemed to fit.

### [Natural Language Processing](#Natural-Language-Processing)
* Libraries for working with human languages.

### [Networking](#Networking)
* Libraries for working with various layers of the network.

### [HTTP Clients](#HTTP-Clients)
* Libraries for making HTTP requests.

### [OpenGL](#OpenGL)
* Libraries for using OpenGL in Go.

### [ORM](#ORM)
* Libraries that implement Object-Relational Mapping or datamapping techniques.

### [Package Management](#Package-Management)
* 

#### [Official experimental tooling for package management](#Official-experimental-tooling-for-package-management)
* 

#### [Unofficial libraries for package and dependency management](#Official-libraries-for-package-and-dependency-management)
* 

### [Performance](#Performance)
* 

### [Query Language](#Query-Language)
* 

### [Resource Embedding](#Resource-Embedding)
* 

### [Science and Data Analysis](#Science-and-Data-Analysis)
* Libraries for scientific computing and data analyzing.

### [Security](#Security)
* Libraries that are used to help make your application more secure.

### [Serialization](#Serialization)
* Libraries and tools for binary serialization.

### [Server Applications](#Server-Applications)
* 

### [Stream Processing](#Stream-Processing)
* Libraries and tools for stream processing and reactive programming.

### [Template Engines](#Template-Engines)
* Libraries and tools for templating and lexing.

### [Testing](#Testing)
* Libraries for testing codebases and generating test data.

#### [Testing Frameworks](#Testing-Frameworks)
* 

#### [Mock](#Mock)
* 

#### [Fuzzing and delta-debugging/reducing/shrinking](#Fuzzing-and-delta-debugging)
* 

#### [Selenium and browser control tools](#Selenium-and-browser-control-tools)
* 

#### [Fail injection](#Fail-injection)
* 

### [Text Processing](#Text-Processing)
* Libraries for parsing and manipulating texts.

#### [Specific Formats](#Specific-Formats)
* 

#### [Utility](#Utility)
* 

### [Third-party APIs](#Third-party-APIs)
* Libraries for accessing third party APIs.

### [Utilities](#Utilities)
* General utilities and tools to make your life easier.

### [UUID](#UUID)
* Libraries for working with UUIDs.

### [Validation](#Validation)
* Libraries for validation.

### [Version Control](#Version-Control)
* Libraries for version control.

### [Video](#Video)
* Libraries for manipulating video.

### [Web Frameworks](#Web-Frameworks)
* 

#### [Full stack web frameworks](#Full-stack-web-frameworks.)
* 

#### [Actual middlewares](#Actual-middlewares)
* 

#### [Libraries for creating HTTP middlewares](#Libraries-for-creating-HTTP-middlewares)
* 

#### [Routers](#Routers)
* 

### [WebAssembly](#WebAssembly)
* 

### [Windows](#Windows)
* 

### [XML](#XML)
* Libraries and tools for manipulating XML.

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

