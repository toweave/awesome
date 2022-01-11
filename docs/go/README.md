# Go
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of awesome Go frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Tue Jan 11 2022 10:04:36 GMT+0800 (中国标准时间)
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
| [oto](https://github.com/hajimehoshi/oto) | 933 | ♪ A low-level library to play sound on multiple platforms ♪ | 13 days ago |
| [portaudio](https://github.com/gordonklaus/portaudio) | 489 | Go bindings for the PortAudio audio I/O library | a year ago |
| [music-theory](https://github.com/go-music-theory/music-theory) | 375 | Go models of Note, Scale, Chord and Key | a year ago |
| [waveform](https://github.com/mdlayher/waveform) | 346 | Go package capable of generating waveform images from audio streams. MIT Licensed. | 2 years ago |
| [portmidi](https://github.com/rakyll/portmidi) | 263 | Go bindings for libportmidi | a year ago |
| [id3v2](https://github.com/bogem/id3v2) | 227 | 🎵 ID3 decoding and encoding library for Go | 25 days ago |
| [GoAudio](https://github.com/DylanMeeus/GoAudio) | 196 | Go tools for audio processing & creation 🎶 | 2 months ago |
| [flac](https://github.com/mewkiz/flac) | 188 | Package flac provides access to FLAC (Free Lossless Audio Codec) streams. | 10 days ago |
| [malgo](https://github.com/gen2brain/malgo) | 161 | Mini audio library | 4 months ago |
| [mix](https://github.com/go-mix/mix) | 146 | Sequence-based Go-native audio mixer for music apps | 2 years ago |
| [gaad](https://github.com/Comcast/gaad) | 92 | GAAD (Go Advanced Audio Decoder) | 3 months ago |
| [minimp3](https://github.com/tosone/minimp3) | 68 | Decode mp3 base on https://github.com/lieff/minimp3 | 9 months ago |
| [vorbis](https://github.com/mccoyst/vorbis) | 29 | A "native" ogg vorbis decoder for Go (uses inline stb_vorbis) | 3 years ago |
| [gosamplerate](https://github.com/dh1tw/gosamplerate) | 15 | Go Bindings for libsamplerate | 2 years ago |


### [Authentication and OAuth](#authentication-and-oauth)
* Libraries for implementing authentications schemes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [casbin](https://github.com/casbin/casbin) | 11062 | An authorization library that supports access control models like ACL, RBAC, ABAC in Golang | 3 days ago |
| [oauth2](https://github.com/golang/oauth2) | 3970 | Go OAuth2 | 15 days ago |
| [goth](https://github.com/markbates/goth) | 3472 | Package goth provides a simple, clean, and idiomatic way to write authentication packages for Go web applications. | 11 hours ago |
| [authboss](https://github.com/volatiletech/authboss) | 2972 | The boss of http auth. | 5 months ago |
| [go-jose](https://github.com/square/go-jose) | 1859 | An implementation of JOSE standards (JWE, JWS, JWT) in Go | 3 months ago |
| [go-oauth2-server](https://github.com/RichardKnop/go-oauth2-server) | 1851 | A standalone, specification-compliant,  OAuth2 server written in Golang. | a year ago |
| [loginsrv](https://github.com/tarent/loginsrv) | 1836 | JWT login microservice with plugable backends such as OAuth2, Google, Github, htpasswd, osiam, .. | 10 months ago |
| [osin](https://github.com/openshift/osin) | 1710 | Golang OAuth2 server library | 2 months ago |
| [gologin](https://github.com/dghubble/gologin) | 1466 | Go login handlers for authentication providers (OAuth1, OAuth2) | 4 hours ago |
| [gorbac](https://github.com/mikespook/gorbac) | 1238 | goRBAC provides a lightweight role-based access control (RBAC) implementation in Golang. | 8 months ago |
| [scs](https://github.com/alexedwards/scs) | 1006 | HTTP Session Management for Go | 7 days ago |
| [paseto](https://github.com/o1egl/paseto) | 568 | Platform-Agnostic Security Tokens implementation in GO (Golang) | 3 months ago |
| [permissions2](https://github.com/xyproto/permissions2) | 443 |   :closed_lock_with_key: Middleware for keeping track of users, login states and permissions | 5 months ago |
| [go-guardian](https://github.com/shaj13/go-guardian) | 333 | Go-Guardian is a golang library that provides a simple, clean, and idiomatic way to create powerful modern API and web authentication. | 4 days ago |
| [jwt](https://github.com/cristalhq/jwt) | 311 | Safe, simple and fast JSON Web Tokens for Go | a month ago |
| [jwt](https://github.com/pascaldekloe/jwt) | 276 | JSON Web Token library | 2 months ago |
| [jeff](https://github.com/abraithwaite/jeff) | 234 | 🍍Jeff provides the simplest way to manage web sessions in Go. | 7 months ago |
| [httpauth](https://github.com/goji/httpauth) | 213 | HTTP Authentication middlewares | 3 months ago |
| [jwt-auth](https://github.com/adam-hanna/jwt-auth) | 211 | This package provides json web token (jwt) middleware for goLang http servers | 5 months ago |
| [branca](https://github.com/hako/branca) | 167 | :key: Secure alternative to JWT. Authenticated Encrypted API Tokens for Go. | a year ago |
| [otpgen](https://github.com/RijulGulati/otpgen) | 113 | Library to generate TOTP/HOTP codes | 5 months ago |
| [sessionup](https://github.com/swithek/sessionup) | 113 | Straightforward HTTP session management | 4 months ago |
| [session](https://github.com/icza/session) | 105 | Go session management for web servers (including support for Google App Engine - GAE). | 6 months ago |
| [jwt](https://github.com/robbert229/jwt) | 95 | This is an implementation of JWT in golang! | a year ago |
| [sjwt](https://github.com/brianvoe/sjwt) | 94 | Simple JWT Golang | 2 years ago |
| [rbac](https://github.com/zpatrick/rbac) | 88 | Minimalistic RBAC package for Go applications | 3 years ago |
| [sessions](https://github.com/adam-hanna/sessions) | 61 | A dead simple, highly performant, highly customizable sessions middleware for go http servers. | 2 years ago |
| [securecookie](https://github.com/chmike/securecookie) | 54 | Fast, secure and efficient secure cookie encoder/decoder  | 4 months ago |
| [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) | 34 | Golang library for providing a canonical representation of email address. | 4 months ago |
| [otpgo](https://github.com/jltorresm/otpgo) | 26 | Time-Based One-Time Password (TOTP) and HMAC-Based One-Time Password (HOTP) library for Go. | 10 months ago |
| [scope](https://github.com/ThundR67/scope) | 17 | Easily Manage OAuth2 Scopes In Go | 8 months ago |
| [sessiongate-go](https://github.com/f0rmiga/sessiongate-go) | 9 | A driver for the SessionGate Redis module - easy session management using the Go language. | 3 years ago |
| [cookiestxt](https://github.com/mengzhuo/cookiestxt) | 8 | cookiestxt implement parser of cookies txt format | 10 months ago |


### [Blockchain](#blockchain)
* Tools for building blockchains.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ethereum](https://github.com/ethereum/go-ethereum) | 34684 | Official Go implementation of the Ethereum protocol | 5 minutes ago |
| [tendermint](https://github.com/tendermint/tendermint) | 4561 | ⟁ Tendermint Core (BFT Consensus) in Go | an hour ago |
| [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) | 3251 | :chains: A Framework for Building High Value Public Blockchains :sparkles: | 3 hours ago |
| [gossamer](https://github.com/ChainSafe/gossamer) | 298 | 🕸️ Gossamer: A Go implementation of the Polkadot Host | 3 hours ago |


### [Bot Building](#bot-building)
* Libraries for building and working with bots.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) | 3313 | Golang bindings for the Telegram Bot API | 8 days ago |
| [olivia](https://github.com/olivia-ai/olivia) | 3148 | 💁‍♀️Your new best friend powered by an artificial neural network | 3 days ago |
| [telebot](https://github.com/tucnak/telebot) | 2257 | Telebot is a Telegram bot framework in Go. | 7 days ago |
| [kelp](https://github.com/stellar/kelp) | 832 | Kelp is a free and open-source trading bot for the Stellar DEX and 100+ centralized exchanges | a month ago |
| [bot](https://github.com/go-chat-bot/bot) | 713 | IRC, Slack, Telegram and RocketChat bot written in go | a year ago |
| [golang-crypto-trading-bot](https://github.com/saniales/golang-crypto-trading-bot) | 669 | A golang implementation of a console-based trading bot for cryptocurrency exchanges | 7 months ago |
| [slacker](https://github.com/shomali11/slacker) | 573 | Slack Bot Framework | 11 days ago |
| [tbot](https://github.com/yanzay/tbot) | 322 | Go library for Telegram Bot API | 10 months ago |
| [go-sarah](https://github.com/oklahomer/go-sarah) | 213 | Simple yet customizable bot framework written in Go. | 2 days ago |
| [go-twitch-irc](https://github.com/gempir/go-twitch-irc) | 213 | go irc client for twitch.tv | a day ago |
| [tenyks](https://github.com/kyleterry/tenyks) | 171 | The Tenyks IRC bot. | 2 years ago |
| [hanu](https://github.com/sbstjn/hanu) | 134 | Golang Framework for writing Slack bots | 7 months ago |
| [go-tgbot](https://github.com/olebedev/go-tgbot) | 111 | Golang  telegram bot API wrapper, session-based router and middleware | 4 years ago |
| [slack-bot](https://github.com/innogames/slack-bot) | 75 | Ready to use Slack bot for lazy developers: start Jenkins jobs, watch Jira tickets, watch pull requests... | 3 days ago |
| [margelet](https://github.com/zhulik/margelet) | 66 | Telegram Bot Framework for Go | 5 years ago |
| [ephemeral-roles](https://github.com/ewohltman/ephemeral-roles) | 51 | A Discord bot for managing ephemeral roles based upon voice channel member presence. | a month ago |
| [echotron](https://github.com/NicoNex/echotron) | 49 | Concurrent library for Telegram Bots written in pure go. | 2 days ago |
| [slackscot](https://github.com/alexandre-normand/slackscot) | 49 | Slack bot core/framework written in Go with support for reactions to message updates/deletes | 2 months ago |
| [govkbot](https://github.com/nikepan/govkbot) | 37 | VK bot package for Go | 5 months ago |
| [micha](https://github.com/onrik/micha) | 17 | Client lib for Telegram bot api | 7 months ago |
| [teleterm](https://github.com/alfiankan/teleterm) | 4 | Telegram Bot Exec Terminal Command | 3 months ago |


### [Build Automation](#build-automation)
* Libraries and tools helping with build automation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [task](https://github.com/go-task/task) | 4429 | A task runner / simpler Make alternative written in Go | 6 days ago |
| [realize](https://github.com/oxequa/realize) | 4186 | Realize is the #1 Golang Task Runner which enhance your workflow by automating the most common tasks and using the best performing Golang live reloading. | 8 months ago |
| [mmake](https://github.com/tj/mmake) | 1595 | Modern Make  | 2 years ago |
| [goyek](https://github.com/goyek/goyek) | 273 | Create build pipelines in Go  | 5 days ago |
| [taskctl](https://github.com/taskctl/taskctl) | 150 | Concurrent task runner, developer's routine tasks automation toolkit. Simple modern alternative to GNU Make 🧰 | 8 months ago |
| [1build](https://github.com/gopinath-langote/1build) | 121 | Frictionless way of managing project-specific commands | a month ago |
| [gaper](https://github.com/maxcnunes/gaper) | 50 | Builds and restarts a Go project when it crashes or some watched file changes | 24 days ago |
| [anko](https://github.com/GuilhermeCaruso/anko) | 20 | :crystal_ball: Simple application watcher | 9 months ago |


### [Standard CLI](#Standard-CLI)
* Libraries for building standard or basic Command Line applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cobra](https://github.com/spf13/cobra) | 24729 | A Commander for modern Go CLI interactions | a day ago |
| [cli](https://github.com/urfave/cli) | 17107 | A simple, fast, and fun package for building command line apps in Go | 7 days ago |
| [elvish](https://github.com/elves/elvish) | 4613 | Elvish = Expressive Programming Language + Versatile Interactive Shell | 4 days ago |
| [andOTP](https://github.com/andOTP/andOTP) | 3373 | Open source two-factor authentication for Android | 10 days ago |
| [kingpin](https://github.com/alecthomas/kingpin) | 3184 | CONTRIBUTIONS ONLY: A Go (golang) command line and flag parser | 3 months ago |
| [dnote](https://github.com/dnote/dnote) | 2196 | A simple command line notebook for programmers | a month ago |
| [go-flags](https://github.com/jessevdk/go-flags) | 2113 | go command line option parser | a month ago |
| [pflag](https://github.com/spf13/pflag) | 1662 | Drop-in replacement for Go's flag package, implementing POSIX/GNU-style --flags. | 25 days ago |
| [cli](https://github.com/mitchellh/cli) | 1447 | A Go library for implementing command-line interfaces. | 5 months ago |
| [go-arg](https://github.com/alexflint/go-arg) | 1336 | Struct-based argument parsing in Go | 5 days ago |
| [liner](https://github.com/peterh/liner) | 861 | Pure Go line editor with history, inspired by linenoise | 2 months ago |
| [ops](https://github.com/nanovms/ops) | 816 | ops - build and run nanos unikernels | a day ago |
| [complete](https://github.com/posener/complete) | 805 | bash completion written in go + bash completion for go command | 9 months ago |
| [mow.cli](https://github.com/jawher/mow.cli) | 775 | A versatile library for building CLI applications in Go | 3 months ago |
| [flaggy](https://github.com/integrii/flaggy) | 773 | Idiomatic Go input parsing with subcommands, positional values, and flags at any position. No required project or package layout and no external dependencies. | 4 months ago |
| [cli](https://github.com/mkideal/cli) | 638 | CLI - A package for building command line app with go | 4 months ago |
| [argparse](https://github.com/akamensky/argparse) | 392 | Argparse for golang. Just because `flag` sucks | 5 months ago |
| [climax](https://github.com/tucnak/climax) | 192 | Climax is an alternative CLI with the human face | a year ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 162 | hiboot is a high performance web and cli application framework with dependency injection support | 5 days ago |
| [wmenu](https://github.com/dixonwille/wmenu) | 150 | An easy to use menu structure for cli applications that prompts users to make choices. | 4 months ago |
| [commandeer](https://github.com/jaffee/commandeer) | 147 | Automatically sets up command line flags based on struct fields and tags. | 7 months ago |
| [sflags](https://github.com/octago/sflags) | 130 | Generate flags by parsing structures | 6 months ago |
| [flag](https://github.com/cosiner/flag) | 117 | Flag is a simple but powerful command line option parsing library for Go support infinite level subcommand | a year ago |
| [job](https://github.com/liujianping/job) | 111 | JOB, make your short-term command as a long-term job. 将命令行规划成任务的工具 | 2 years ago |
| [clif](https://github.com/ukautz/clif) | 111 | Another CLI framework for Go. It works on my machine. | 3 years ago |
| [cli](https://github.com/teris-io/cli) | 99 | Simple and complete API for building command line applications in Go | 8 months ago |
| [cmdr](https://github.com/hedzr/cmdr) | 92 | Golang library with POSIX-compliant command-line UI (CLI) and Hierarchical-configuration. Better substitute for 'flag'. | 19 days ago |
| [env](https://github.com/codingconcepts/env) | 89 | Tag-based environment configuration for structs | a year ago |
| [clir](https://github.com/leaanthony/clir) | 81 | A Simple and Clear CLI library. Dependency free. | 3 months ago |
| [gocmd](https://github.com/devfacet/gocmd) | 56 | A Go library for building command line applications. | 8 months ago |
| [wlog](https://github.com/dixonwille/wlog) | 53 | A simple logging interface that supports cross-platform color and concurrency. | 4 months ago |
| [strumt](https://github.com/antham/strumt) | 44 | Strumt is a library to create prompt chain | 8 months ago |
| [go-getoptions](https://github.com/DavidGamba/go-getoptions) | 39 | Fully featured Go (golang) command line option parser with built-in auto-completion support. | 9 days ago |
| [flagvar](https://github.com/sgreben/flagvar) | 37 | A collection of CLI argument types for the Go `flag` package. | 2 years ago |
| [cmd](https://github.com/posener/cmd) | 33 | The standard library flag package with its missing features | a year ago |
| [argv](https://github.com/cosiner/argv) | 32 |  | 2 years ago |
| [go-commander](https://github.com/yitsushi/go-commander) | 24 | Go library to simplify CLI workflow | 2 years ago |
| [go-command-chain](https://github.com/rainu/go-command-chain) | 18 | A go library for easy configure and run command chains. Such like pipelining in unix shells. | 7 months ago |
| [sand](https://github.com/Zaba505/sand) | 15 | Package for creating interpreters | 3 years ago |
| [ts](https://github.com/liujianping/ts) | 13 | timestamp convert & compare tool. 时间戳转换与对比工具 | 3 years ago |
| [go-andotp](https://github.com/RijulGulati/go-andotp) | 10 | CLI program to encrypt/decrypt andOTP files | 7 months ago |
| [subcmd](https://github.com/bobg/subcmd) | 1 |  | 4 months ago |


### [Advanced Console UIs](#Advanced-Console-UIs)
* Libraries for building Console Applications and Console User Interfaces.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blessed-contrib](https://github.com/yaronn/blessed-contrib) | 14625 | Build terminal dashboards using ascii/ansi art and javascript | a day ago |
| [termui](https://github.com/gizak/termui) | 11501 | Golang terminal dashboard | 2 months ago |
| [gocui](https://github.com/jroimartin/gocui) | 7809 | Minimalist Go package aimed at creating Console User Interfaces. | 2 months ago |
| [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) | 7481 | Library for building powerful interactive command line applications in Python | 8 hours ago |
| [go-prompt](https://github.com/c-bata/go-prompt) | 4285 | Building powerful interactive prompts in Go, inspired by python-prompt-toolkit. | 3 months ago |
| [termbox-go](https://github.com/nsf/termbox-go) | 4207 | Pure Go termbox implementation | 8 months ago |
| [pterm](https://github.com/pterm/pterm) | 2335 | ✨ #PTerm is a modern Go module to beautify console output. Featuring charts, progressbars, tables, trees, and much more 🚀 It's completely configurable and 100% cross-platform compatible. | 7 days ago |
| [progressbar](https://github.com/schollz/progressbar) | 2254 | A really basic thread-safe progress bar for Golang applications | 21 days ago |
| [uiprogress](https://github.com/gosuri/uiprogress) | 1876 | A go library to render progress bars in terminal applications | 4 months ago |
| [termdash](https://github.com/mum4k/termdash) | 1864 | Terminal based dashboard. | 2 months ago |
| [asciigraph](https://github.com/guptarohit/asciigraph) | 1821 | Go package to make lightweight ASCII line graph ╭┈╯ in command line apps with no other dependencies. | 3 months ago |
| [mpb](https://github.com/vbauerster/mpb) | 1528 | multi progress bar for Go cli applications | 2 days ago |
| [uilive](https://github.com/gosuri/uilive) | 1404 | uilive is a go library for updating terminal output in realtime | 4 months ago |
| [aurora](https://github.com/logrusorgru/aurora) | 1158 | Golang ultimate ANSI-colors that supports Printf/Sprintf methods | a year ago |
| [color](https://github.com/gookit/color) | 1001 | 🎨 Terminal color rendering library, support 8/16 colors, 256 colors, RGB color rendering output, support Print/Sprintf methods, compatible with Windows. GO CLI 控制台颜色渲染工具库，支持16色，256色，RGB色彩渲染输出，使用类似于 Print/Sprintf，兼容并支持 Windows 环境的色彩渲染 | 2 months ago |
| [termenv](https://github.com/muesli/termenv) | 866 | Advanced ANSI style & color support for your terminal applications | 2 days ago |
| [uitable](https://github.com/gosuri/uitable) | 626 | A go library to improve readability in terminal apps using tabular data | a year ago |
| [go-isatty](https://github.com/mattn/go-isatty) | 584 |  | 2 months ago |
| [go-colorable](https://github.com/mattn/go-colorable) | 581 |  | 2 months ago |
| [gommon](https://github.com/labstack/gommon) | 426 | Common packages for Go | a month ago |
| [chalk](https://github.com/ttacon/chalk) | 388 | Intuitive package for prettifying terminal/console output. http://godoc.org/github.com/ttacon/chalk | 2 years ago |
| [simpletable](https://github.com/alexeyco/simpletable) | 338 | Simple tables in terminal with Go | 9 months ago |
| [tabby](https://github.com/cheynewallace/tabby) | 305 | A tiny library for super simple Golang tables | a year ago |
| [yacspin](https://github.com/theckman/yacspin) | 303 | Yet Another CLi Spinner; providing over 80 easy to use and customizable terminal spinners for multiple OSes | 8 days ago |
| [go-colortext](https://github.com/daviddengcn/go-colortext) | 209 | Change the color of console text. | 2 years ago |
| [box-cli-maker](https://github.com/Delta456/box-cli-maker) | 168 | Make Highly Customized Boxes for your CLI | 8 hours ago |
| [cfmt](https://github.com/mingrammer/cfmt) | 81 | :art: Contextual fmt inspired by bootstrap color classes | 3 years ago |
| [tabular](https://github.com/InVisionApp/tabular) | 58 | Tabular simplifies printing ASCII tables from command line utilities | 4 years ago |
| [ctc](https://github.com/wzshiming/ctc) | 37 | Console Text Colors - The non-invasive cross-platform terminal color library does not need to modify the Print method | a year ago |
| [cfmt](https://github.com/i582/cfmt) | 33 | Small library for simple and convenient formatted stylized output to the console. | 6 months ago |
| [colourize](https://github.com/TreyBastian/colourize) | 25 | An ANSI colour terminal package for Go | 6 years ago |
| [marker](https://github.com/cyucelen/marker) | 24 |  🖍️ Marker is the easiest way to match and mark strings for colorful terminal outputs! | 16 days ago |
| [table](https://github.com/tomlazar/table) | 14 | pretty colorfull tables in go with less effort | 10 months ago |
| [go-ataman](https://github.com/workanator/go-ataman) | 11 | Another Text Attribute Manupulator | a year ago |


### [Configuration](#Configuration)
* Libraries for configuration parsing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [viper](https://github.com/spf13/viper) | 17870 | Go configuration with fangs | 9 days ago |
| [godotenv](https://github.com/joho/godotenv) | 4443 | A Go port of Ruby's dotenv library (Loads environment variables from `.env`.) | 6 days ago |
| [envconfig](https://github.com/kelseyhightower/envconfig) | 3925 | Golang library for managing configuration data from environment variables | a month ago |
| [ini](https://github.com/go-ini/ini) | 2812 | Package ini provides INI file read and write functionality in Go | 19 days ago |
| [env](https://github.com/caarlos0/env) | 2204 | A simple and zero-dependencies library to parse environment variables into structs. | 9 hours ago |
| [koanf](https://github.com/knadh/koanf) | 685 | Simple, lightweight, extensible, configuration management library for Go. Support for JSON, TOML, YAML, env, command line, file, S3 etc. Alternative to viper. | 9 days ago |
| [konfig](https://github.com/lalamove/konfig) | 617 | Composable, observable and performant config handling for Go for the distributed processing era | a year ago |
| [cleanenv](https://github.com/ilyakaznacheev/cleanenv) | 440 | ✨Clean and minimalistic environment configuration reader for Golang | 19 days ago |
| [confita](https://github.com/heetch/confita) | 419 | Load configuration in cascade from multiple backends into a struct | 6 months ago |
| [aconfig](https://github.com/cristalhq/aconfig) | 328 | Simple, useful and opinionated config loader. | 2 months ago |
| [config](https://github.com/gookit/config) | 319 | 📝 Go config manage(load,get,set). support JSON, YAML, TOML, INI, HCL, ENV and Flags. Multi file load, data override merge, parse ENV var. Go应用配置加载管理，支持多种格式，多文件加载，远程文件加载，支持数据合并，解析环境变量名 | 2 months ago |
| [config](https://github.com/JeremyLoy/config) | 286 | 12 factor configuration as a typesafe struct in as little as two function calls | 2 months ago |
| [store](https://github.com/tucnak/store) | 259 | A dead simple configuration manager for Go applications | 4 years ago |
| [hjson-go](https://github.com/hjson/hjson-go) | 250 | Hjson for Go | 15 days ago |
| [config](https://github.com/olebedev/config) | 241 | JSON or YAML configuration wrapper with convenient access methods. | a month ago |
| [config](https://github.com/golobby/config) | 235 | A lightweight yet powerful configuration manager for Go projects | 9 days ago |
| [envconfig](https://github.com/vrischmann/envconfig) | 220 | Small library to read your configuration from environment variables | 3 months ago |
| [config](https://github.com/joshbetz/config) | 209 | 🛠 A configuration library for Go that parses environment variables, JSON files, and reloads automatically on SIGHUP. | 2 months ago |
| [fig](https://github.com/kkyr/fig) | 189 | A minimalist Go configuration library | 7 days ago |
| [xdg](https://github.com/adrg/xdg) | 160 | Go implementation of the XDG Base Directory Specification and XDG user directories | 7 days ago |
| [gcfg](https://github.com/go-gcfg/gcfg) | 156 | read INI-style configuration files into Go structs; supports user-defined types and subsections | 6 months ago |
| [goconfig](https://github.com/gosidekick/goconfig) | 149 | goconfig uses a struct as input and populates the fields of this struct with parameters from command line, environment variables and configuration file. | 3 months ago |
| [envh](https://github.com/antham/envh) | 95 | Go helpers to manage environment variables | 8 months ago |
| [envcfg](https://github.com/tomazk/envcfg) | 94 | Un-marshaling environment variables to Go structs | 5 years ago |
| [harvester](https://github.com/beatlabs/harvester) | 94 | Harvest configuration, watch and notify subscriber | 22 days ago |
| [onion](https://github.com/goraz/onion) | 93 | Layer based configuration for golang | 5 months ago |
| [configuro](https://github.com/sherifabdlnaby/configuro) | 80 | An opinionated configuration loading framework for Containerized and Cloud-Native applications. | 10 months ago |
| [xdg](https://github.com/OpenPeeDeeP/xdg) | 65 | A cross platform package that follows the XDG Standard | a year ago |
| [gofigure](https://github.com/ian-kent/gofigure) | 60 | Go configuration made easy! | 2 years ago |
| [configure](https://github.com/paked/configure) | 54 | Configure is a Go package that gives you easy configuration of your project through redundancy | 3 years ago |
| [configuration](https://github.com/BoRuDar/configuration) | 43 | Library for setting values to structs' fields from env, flags, files or default tag | 2 months ago |
| [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) | 43 | Go package that interfaces with AWS System Manager | 10 months ago |
| [uconfig](https://github.com/omeid/uconfig) | 41 | Lightweight, zero-dependency, and extendable configuration management library for Go | a month ago |
| [hocon](https://github.com/gurkankaymak/hocon) | 37 | go implementation of lightbend's HOCON configuration library https://github.com/lightbend/config | 2 months ago |
| [gone](https://github.com/One-com/gone) | 36 | Golang packages for writing small daemons and servers. | 8 months ago |
| [go-up](https://github.com/ufoscout/go-up) | 35 | go-up! A simple configuration library with recursive placeholders resolution and no magic. | 2 years ago |
| [ingo](https://github.com/schachmat/ingo) | 34 | persistent storage for flags in go | 5 years ago |
| [mini](https://github.com/sasbury/mini) | 28 | A golang package for parsing ini-style configuration files | 3 years ago |
| [genv](https://github.com/sakirsensoy/genv) | 25 | Genv is a library for Go (golang) that makes it easy to read and use environment variables in your projects. It also allows environment variables to be loaded from the .env file. | 2 years ago |
| [conflate](https://github.com/the4thamigo-uk/conflate) | 21 | Library providing routines to merge and validate JSON, YAML and/or TOML files | a year ago |
| [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) | 10 | Go utility for loading configuration parameters from AWS SSM (Parameter Store) | a year ago |
| [envconf](https://github.com/ian-kent/envconf) | 9 | Configure Go applications from the environment | 7 years ago |
| [ini](https://github.com/wlevene/ini) | 8 | ini parser for golang | a month ago |
| [env](https://github.com/nasermirzaei89/env) | 7 | Golang Get Environment Variables Package | 21 days ago |
| [go-ini](https://github.com/subpop/go-ini) | 6 | automatic mirror of https://git.sr.ht/~spc/go-ini | 9 months ago |
| [swap](https://github.com/oblq/swap) | 4 | Instantiate/configure structs recursively, based on build environment. (YAML, TOML, JSON and env). | 2 months ago |
| [typenv](https://github.com/diegomarangoni/typenv) | 4 | Go minimalist typed environment variables library | a year ago |
| [gonfig](https://github.com/miladabc/gonfig) | 2 | Tag based configuration loader from different providers | 5 months ago |
| [go-conf](https://github.com/ThomasObenaus/go-conf) | 1 | Library for easy configuration of a golang service | 3 months ago |


### [Continuous Integration](#Continuous-Integration)
* Tools for help with continuous integration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [drone](https://github.com/harness/drone) | 24395 | Drone is a Container-Native, Continuous Delivery Platform | 15 hours ago |
| [cds](https://github.com/ovh/cds) | 3699 | Enterprise-Grade Continuous Delivery & DevOps Automation Open Source Platform | 16 hours ago |
| [goveralls](https://github.com/mattn/goveralls) | 708 |  | 3 days ago |
| [gotestfmt](https://github.com/haveyoudebuggedit/gotestfmt) | 188 | go test output for humans | 4 days ago |
| [overalls](https://github.com/go-playground/overalls) | 108 | :jeans:Multi-Package go project coverprofile for tools like goveralls | 2 years ago |
| [duci](https://github.com/duck8823/duci) | 70 | The simple ci server  | an hour ago |
| [gomason](https://github.com/nikogura/gomason) | 51 | A tool for testing, building, signing, and publishing binaries. | 14 days ago |
| [roveralls](https://github.com/lawrencewoodman/roveralls) | 15 | A Go recursive coverage testing tool | 4 years ago |


### [CSS Preprocessors](#CSS-Preprocessors)
* Libraries for preprocessing CSS files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gcss](https://github.com/yosssi/gcss) | 444 | Pure Go CSS Preprocessor | 7 years ago |
| [go-libsass](https://github.com/wellington/go-libsass) | 184 | Go wrapper for libsass, the only Sass 3.5 compiler for Go | a year ago |


### [Data Structures](#Data-Structures)
* Generic datastructures and algorithms in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gods](https://github.com/emirpasic/gods) | 10946 | GoDS (Go Data Structures). Containers (Sets, Lists, Stacks, Maps, Trees), Sets (HashSet, TreeSet, LinkedHashSet), Lists (ArrayList, SinglyLinkedList, DoublyLinkedList), Stacks (LinkedListStack, ArrayStack), Maps (HashMap, TreeMap, HashBidiMap, TreeBidiMap, LinkedHashMap), Trees (RedBlackTree, AVLTree, BTree, BinaryHeap), Comparators, Iterators, Enumerables, Sort, JSON | 2 months ago |
| [go-datastructures](https://github.com/Workiva/go-datastructures) | 6319 | A collection of useful, performant, and threadsafe Go datastructures. | 9 months ago |
| [golang-set](https://github.com/deckarep/golang-set) | 2208 | A simple set type for the Go language. Trusted by Docker, 1Password, Ethereum and Hashicorp. | 16 days ago |
| [gota](https://github.com/go-gota/gota) | 1931 | Gota: DataFrames and data wrangling in Go (Golang) | 2 months ago |
| [roaring](https://github.com/RoaringBitmap/roaring) | 1453 | Roaring bitmaps in Go (golang) | 5 hours ago |
| [bloom](https://github.com/bits-and-blooms/bloom) | 1407 | Go package implementing Bloom filters | 3 months ago |
| [BoomFilters](https://github.com/tylertreat/BoomFilters) | 1400 | Probabilistic data structures for processing continuous, unbounded streams. | 10 months ago |
| [gocache](https://github.com/eko/gocache) | 1035 | ☔️ A complete Go cache library that brings you multiple ways of managing your caches | 2 months ago |
| [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) | 860 | Cuckoo Filter: Practically Better Than Bloom | 5 months ago |
| [bitset](https://github.com/bits-and-blooms/bitset) | 808 | Go package implementing bitsets | an hour ago |
| [hyperloglog](https://github.com/axiomhq/hyperloglog) | 763 | HyperLogLog with lots of sugar (Sparse, LogLog-Beta bias correction and TailCut space reduction) | 5 days ago |
| [algorithms](https://github.com/shady831213/algorithms) | 600 | CLRS study. Codes are written with golang. | 10 months ago |
| [trie](https://github.com/derekparker/trie) | 566 | Data structure and relevant algorithms for extremely fast prefix/fuzzy string searching. | a year ago |
| [gostl](https://github.com/liyue201/gostl) | 360 | Data structure and algorithm library for go, designed to provide functions similar to C++ STL | 3 months ago |
| [go-geoindex](https://github.com/hailocab/go-geoindex) | 333 | Go native library for fast point tracking and K-Nearest queries | 4 years ago |
| [ttlcache](https://github.com/ReneKroon/ttlcache) | 330 | An in-memory string-interface{} map with various expiration options for golang | 23 days ago |
| [merkletree](https://github.com/cbergoon/merkletree) | 302 | A Merkle Tree implementation written in Go. | 2 years ago |
| [go-edlib](https://github.com/hbollon/go-edlib) | 299 | 📚 String comparison and edit distance algorithms library, featuring : Levenshtein, LCS, Hamming, Damerau levenshtein (OSA and Adjacent transpositions algorithms), Jaro-Winkler, Cosine, etc... | a month ago |
| [deque](https://github.com/gammazero/deque) | 273 | Fast ring-buffer deque (double-ended queue) | a month ago |
| [hilbert](https://github.com/google/hilbert) | 239 | Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves. | 3 years ago |
| [goskiplist](https://github.com/ryszard/goskiplist) | 230 | A skip list implementation in Go | 2 years ago |
| [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) | 218 | Adaptive Radix Trees implemented in Go | a year ago |
| [cuckoo-filter](https://github.com/linvon/cuckoo-filter) | 193 | Cuckoo Filter go implement, better than Bloom Filter, configurable and space optimized  布谷鸟过滤器的Go实现，优于布隆过滤器，可以定制化过滤器参数，并进行了空间优化 | 3 months ago |
| [skiplist](https://github.com/MauriceGit/skiplist) | 183 | A Go library for an efficient implementation of a skip list: https://godoc.org/github.com/MauriceGit/skiplist | 2 months ago |
| [binpacker](https://github.com/zhuangsirui/binpacker) | 179 | A binary stream packer and unpacker | 3 months ago |
| [levenshtein](https://github.com/agnivade/levenshtein) | 170 | Go implementation to calculate Levenshtein Distance. | 8 months ago |
| [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) | 155 | Go concurrent-safe, goroutine-safe, thread-safe queue | 2 years ago |
| [bloom](https://github.com/zentures/bloom) | 144 | Bloom filters implemented in Go. | 4 years ago |
| [iter](https://github.com/disksing/iter) | 141 | Go implementation of C++ STL iterators and algorithms. | 2 years ago |
| [ring](https://github.com/tannerryan/ring) | 122 | Package ring provides a high performance and thread safe Go implementation of a bloom filter. | a year ago |
| [go-rquad](https://github.com/arl/go-rquad) | 119 | :pushpin: State of the art point location and neighbour finding algorithms for region quadtrees, in Go | 2 years ago |
| [encoding](https://github.com/zentures/encoding) | 110 | Integer Compression Libraries for Go | 4 years ago |
| [bit](https://github.com/yourbasic/bit) | 109 | Bitset data structure | 4 years ago |
| [bitmap](https://github.com/kelindar/bitmap) | 109 | Simple dense bitmap index in Go with binary operators | 18 days ago |
| [remember-go](https://github.com/rocketlaunchr/remember-go) | 107 | Cache Slow Database Queries | 9 months ago |
| [conjungo](https://github.com/InVisionApp/conjungo) | 99 | A small flexible merge library in go | a year ago |
| [skiplist](https://github.com/gansidui/skiplist) | 76 | skiplist for golang | 7 years ago |
| [go-mcache](https://github.com/OrlovEvgeny/go-mcache) | 74 | Fast in-memory key:value store/cache with TTL | 2 years ago |
| [bloom](https://github.com/yourbasic/bloom) | 64 | Probabilistic set data structure | 5 years ago |
| [levenshtein](https://github.com/agext/levenshtein) | 60 | Levenshtein distance and similarity metrics with customizable edit costs and Winkler-like bonus for common prefix. | a year ago |
| [count-min-log](https://github.com/seiflotfy/count-min-log) | 54 | Go implementation of Count-Min-Log | 5 years ago |
| [crunch](https://github.com/superwhiskers/crunch) | 47 | take bytes out of things easily ✨🍪 | 10 days ago |
| [nan](https://github.com/kak-tus/nan) | 46 | Zero allocation Nullable structures in one library with handy conversion functions, marshallers and unmarshallers | 3 months ago |
| [goset](https://github.com/zoumo/goset) | 43 | Set is a useful collection but there is no built-in implementation in Go lang. | a year ago |
| [hide](https://github.com/emvi/hide) | 42 | ID type with marshalling to/from hash to prevent sending IDs to clients. | 2 months ago |
| [pipeline](https://github.com/hyfather/pipeline) | 38 | Pipelines using goroutines | 2 months ago |
| [concurrent-writer](https://github.com/free/concurrent-writer) | 36 | Highly concurrent drop-in replacement for bufio.Writer | 4 years ago |
| [deque](https://github.com/edwingeng/deque) | 36 | A highly optimized double-ended queue | 8 months ago |
| [timedmap](https://github.com/zekroTJA/timedmap) | 36 | A thread safe map which has expiring key-value pairs. | 2 months ago |
| [typ](https://github.com/gurukami/typ) | 29 | Null Types, Safe primitive type conversion and fetching value from complex structures. | 3 months ago |
| [null](https://github.com/emvi/null) | 24 | Nullable Go types that can be marshalled/unmarshalled to/from JSON. | 2 months ago |
| [dict](https://github.com/srfrog/dict) | 22 | Python-like dictionaries for Go | a year ago |
| [cmap](https://github.com/lrita/cmap) | 21 | a thread-safe concurrent map for go | a year ago |
| [go-ef](https://github.com/amallia/go-ef) | 18 | A Go implementation of the Elias-Fano encoding | 4 years ago |
| [ptrie](https://github.com/viant/ptrie) | 17 | A prefix tree implementation in go  | a year ago |
| [set](https://github.com/StudioSol/set) | 17 | A simple Set data structure implementation in Go (Golang) using LinkedHashMap. | 3 months ago |
| [mspm](https://github.com/BlackRabbitt/mspm) | 16 | Multi-String Pattern Matching Algorithm Using TrieHashNode | 4 years ago |
| [parapipe](https://github.com/nazar256/parapipe) | 13 | Paralleling pipeline | 7 months ago |
| [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) | 12 | Ordered-concurrently a library for parallel processing with ordered output in Go. Process work concurrently / in parallel and returns output in a channel in the order of input. It is useful in concurrently / parallelly processing items in a queue, and get output in the order provided by the queue. | 2 months ago |
| [treap](https://github.com/perdata/treap) | 12 | golang persistent immutable treap sorted sets | 2 years ago |
| [gofal](https://github.com/xxjwxc/gofal) | 9 | fractional api base on golang . golang math tools fractional molecular denominator 分数计算 分子 分母 运算 | 2 years ago |
| [bloomfilter](https://github.com/OldPanda/bloomfilter) | 7 | Yet another Bloomfilter implementation in Go, compatible with Java's Guava library | 6 months ago |
| [gdcache](https://github.com/ulovecode/gdcache) | 6 | gdcache is a pure non-intrusive cache library implemented by golang, you can use it to implement your own cache. | 3 months ago |
| [goterator](https://github.com/yaa110/goterator) | 6 | Lazy iterator implementation for Golang | a year ago |
| [parsefields](https://github.com/MonaxGT/parsefields) | 6 | Tools for parse JSON-like logs for collecting unique fields and events | 3 years ago |
| [dsu](https://github.com/ihebu/dsu) | 5 | Disjoint Set data structure implementation in Go | 7 months ago |
| [slices](https://github.com/srfrog/slices) | 5 | Functions that operate on slices. Similar to functions from package strings or package bytes that have been adapted to work with slices. | a year ago |
| [hashsplit](https://github.com/bobg/hashsplit) | 4 |  | 5 months ago |
| [merkle](https://github.com/bobg/merkle) | 1 | Merkle hash trees | 5 months ago |


### [Database](#Database)
* Databases in Go.

#### [Databases implemented in Go](#Databases-implemented-in-Go)
* Databases implemented in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [prometheus](https://github.com/prometheus/prometheus) | 40394 | The Prometheus monitoring system and time series database. | 2 hours ago |
| [tidb](https://github.com/pingcap/tidb) | 30086 | TiDB is an open source distributed HTAP database compatible with the MySQL protocol  | 11 minutes ago |
| [leveldb](https://github.com/google/leveldb) | 27511 | LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values. | 8 hours ago |
| [cockroach](https://github.com/cockroachdb/cockroach) | 23080 | CockroachDB - the open source, cloud-native distributed SQL database. | 8 minutes ago |
| [influxdb](https://github.com/influxdata/influxdb) | 22696 | Scalable datastore for metrics, events, and real-time analytics | an hour ago |
| [dgraph](https://github.com/dgraph-io/dgraph) | 17227 | Native GraphQL Database with graph backend | 6 days ago |
| [groupcache](https://github.com/golang/groupcache) | 11049 | groupcache is a caching and cache-filling library, intended as a replacement for memcached in many cases. | 6 days ago |
| [badger](https://github.com/dgraph-io/badger) | 10236 | Fast key-value DB in Go. | a day ago |
| [rqlite](https://github.com/rqlite/rqlite) | 9272 | The lightweight, distributed relational database built on SQLite | a day ago |
| [milvus](https://github.com/milvus-io/milvus) | 9171 | An open-source vector database for embedding similarity search and AI applications. | 5 minutes ago |
| [immudb](https://github.com/codenotary/immudb) | 6762 | immudb - immutable database based on zero trust, SQL and Key-Value, tamperproof, data change history | 10 hours ago |
| [go-cache](https://github.com/patrickmn/go-cache) | 5734 | An in-memory key:value store/cache (similar to Memcached) library for Go, suitable for single-machine applications. | 11 days ago |
| [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) | 5655 | VictoriaMetrics: fast, cost-effective monitoring solution and time series database | 12 hours ago |
| [bigcache](https://github.com/allegro/bigcache) | 5372 | Efficient cache for gigabytes of data written in Go. | a month ago |
| [bbolt](https://github.com/etcd-io/bbolt) | 5094 | An embedded key/value database for Go. | 21 days ago |
| [goleveldb](https://github.com/syndtr/goleveldb) | 4835 | LevelDB key/value database in Go. | 7 days ago |
| [dtm](https://github.com/dtm-labs/dtm) | 4524 | 🔥A cross-language distributed transaction manager. Support xa, tcc, saga, transactional messages.  跨语言分布式事务管理器 | 16 hours ago |
| [ledisdb](https://github.com/ledisdb/ledisdb) | 3790 | A high performance NoSQL Database Server powered by Go | 10 months ago |
| [buntdb](https://github.com/tidwall/buntdb) | 3609 | BuntDB is an embeddable, in-memory key/value database for Go with custom indexing and geospatial support | 17 days ago |
| [tiedot](https://github.com/HouzuoGuo/tiedot) | 2650 | A rudimentary implementation of a basic document (NoSQL) database in Go | 4 months ago |
| [rosedb](https://github.com/flower-corp/rosedb) | 2189 | 🚀A fast, stable and embedded k-v storage in pure Golang, supports string, list, hash, set, sorted set. 一个 Go 语言实现的快速、稳定、内嵌的 k-v 存储引擎。 | 18 days ago |
| [nutsdb](https://github.com/xujiajun/nutsdb) | 1845 | A simple, fast, embeddable, persistent key/value store written in pure Go. It supports fully serializable transactions and many data structures such as  list, set, sorted set. | a month ago |
| [gcache](https://github.com/bluele/gcache) | 1798 | An in-memory cache library for golang. It supports multiple eviction policies: LRU, LFU, ARC | 6 days ago |
| [cache2go](https://github.com/muesli/cache2go) | 1668 | Concurrency-safe Go caching library with expiration capabilities and access counters | 11 days ago |
| [godis](https://github.com/HDT3213/godis) | 1619 | A Golang implemented Redis Server and Cluster. Go 语言实现的 Redis 服务器和分布式集群 | 14 days ago |
| [fastcache](https://github.com/VictoriaMetrics/fastcache) | 1319 | Fast thread-safe inmemory cache for big number of entries in Go. Minimizes GC overhead | a month ago |
| [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) | 1263 | A decentralized, trusted, high performance, SQL database with blockchain features | 5 months ago |
| [diskv](https://github.com/peterbourgon/diskv) | 1122 | A disk-backed key-value store. | 2 months ago |
| [databunker](https://github.com/securitybunker/databunker) | 943 | Secure SDK/vault for personal records/PII built to comply with GDPR | 4 hours ago |
| [eliasdb](https://github.com/krotik/eliasdb) | 866 | EliasDB a graph-based database. | 7 days ago |
| [pogreb](https://github.com/akrylysov/pogreb) | 854 | Embedded key-value store for read-heavy workloads written in Go | 4 months ago |
| [moss](https://github.com/couchbase/moss) | 851 | moss - a simple, fast, ordered, persistable, key-val storage library for golang | 25 days ago |
| [column](https://github.com/kelindar/column) | 849 | High-performance, columnar, in-memory store with bitmap indexing in Go | 14 days ago |
| [levigo](https://github.com/jmhodges/levigo) | 402 | levigo is a Go wrapper for LevelDB | a month ago |
| [pudge](https://github.com/recoilme/pudge) | 304 | Fast and simple key/value store written using Go's standard library | 6 months ago |
| [vasto](https://github.com/chrislusf/vasto) | 231 | A distributed key-value store. On Disk. Able to grow or shrink without service interruption. | 3 years ago |
| [kivik](https://github.com/go-kivik/kivik) | 219 | Kivik provides a common interface to CouchDB or CouchDB-like databases for Go and GopherJS. | a day ago |
| [piladb](https://github.com/fern4lvarez/piladb) | 193 | Lightweight RESTful database engine based on stack data structures | a year ago |
| [golang-scribble](https://github.com/nanobox-io/golang-scribble) | 142 | A tiny Golang JSON database | 3 years ago |
| [cache](https://github.com/akyoto/cache) | 98 | :handbag: Cache arbitrary data with an expiration time. | 2 years ago |
| [slowpoke](https://github.com/recoilme/slowpoke) | 98 | Low-level key/value store in pure Go.  | 2 years ago |
| [unitdb](https://github.com/unit-io/unitdb) | 82 | Fast specialized time-series database for IoT, real-time internet connected devices and AI analytics. | 2 months ago |
| [bcache](https://github.com/iwanbk/bcache) | 75 | Eventually consistent distributed in-memory  cache Go library | 3 years ago |
| [couchcache](https://github.com/codingsince1985/couchcache) | 53 | A RESTful caching micro-service in Go backed by Couchbase | 3 months ago |
| [hare](https://github.com/jameycribbs/hare) | 48 | Hare is a nimble little database management system for Go. | a year ago |
| [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) | 39 | golang bigcache with clustering as a library. | 4 years ago |
| [coffer](https://github.com/claygod/coffer) | 27 | Simply ACID* key-value database. At the medium or even low latency it tries to provide greater throughput without losing the ACID properties of the database. The database provides the ability to create record headers at own discretion and use them as transactions. The maximum size of stored data is limited by the size of the computer's RAM. | 3 months ago |
| [tempdb](https://github.com/rafaeljesus/tempdb) | 15 | Key-value store for temporary items :memo: | 4 years ago |
| [ttlcache](https://github.com/cheshir/ttlcache) | 4 | Simple in-memory key-value storage with TTL for each record. | 10 months ago |


#### [Database schema migration](#Database-schema-migration)
* Database schema migration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [migrate](https://github.com/golang-migrate/migrate) | 7838 | Database migrations. CLI and Golang library. | 5 days ago |
| [sql-migrate](https://github.com/rubenv/sql-migrate) | 2350 | SQL schema migration tool for Go. | 18 days ago |
| [goose](https://github.com/pressly/goose) | 2157 | A database migration tool. Supports SQL migrations and Go functions.  | 21 days ago |
| [pop](https://github.com/gobuffalo/pop) | 1157 | A Tasty Treat For All Your Database Needs | 7 hours ago |
| [skeema](https://github.com/skeema/skeema) | 971 | Declarative pure-SQL schema management for MySQL and MariaDB | 3 days ago |
| [goavro](https://github.com/linkedin/goavro) | 769 |  | 3 months ago |
| [gormigrate](https://github.com/go-gormigrate/gormigrate) | 713 | Minimalistic database migration helper for Gorm ORM | 3 days ago |
| [darwin](https://github.com/GuiaBolso/darwin) | 125 | Database schema evolution library for Go | 10 months ago |
| [migrator](https://github.com/lopezator/migrator) | 116 | Dead simple Go database migration library. | a year ago |
| [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) | 81 | A Go package to help write migrations with go-pg/pg. | 4 months ago |
| [avro](https://github.com/khezen/avro) | 27 | Apache AVRO for go | a year ago |
| [sqlize](https://github.com/sunary/sqlize) | 27 | sql migration schema generate from models | 15 hours ago |
| [go-fixtures](https://github.com/RichardKnop/go-fixtures) | 26 | Django style fixtures for Golang's excellent built-in database/sql library. | 2 years ago |
| [pravasan](https://github.com/pravasan/pravasan) | 26 | Simple Migration Tool - written in Go | 3 years ago |
| [migrator](https://github.com/larapulse/migrator) | 13 | MySQL database migrator | 9 months ago |
| [schema](https://github.com/adlio/schema) | 9 | Embedded schema migration package for Go | a month ago |
| [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) | 6 | CLI-friendly package for pg migrations management. | a month ago |


#### [Database tools.](#Database-tools)
* Database-tools.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vitess](https://github.com/vitessio/vitess) | 13165 | Vitess is a database clustering system for horizontal scaling of MySQL. | 2 hours ago |
| [pgweb](https://github.com/sosedoff/pgweb) | 7139 | Cross-platform client for PostgreSQL databases | 2 days ago |
| [kingshard](https://github.com/flike/kingshard) | 5912 | A high-performance MySQL proxy | 7 months ago |
| [orchestrator](https://github.com/openark/orchestrator) | 4365 | MySQL replication topology management and HA | 22 days ago |
| [go-mysql-elasticsearch](https://github.com/go-mysql-org/go-mysql-elasticsearch) | 3699 | Sync MySQL data into elasticsearch  | a year ago |
| [go-mysql](https://github.com/go-mysql-org/go-mysql) | 3411 | a powerful mysql toolset with Go | 5 hours ago |
| [prest](https://github.com/prest/prest) | 3057 | PostgreSQL ➕ REST, low-code, simplify and accelerate development, ⚡ instant, realtime, high-performance on any Postgres application, existing or new | 2 days ago |
| [chproxy](https://github.com/ContentSquare/chproxy) | 790 | ClickHouse http proxy and load balancer | 4 days ago |
| [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) | 600 | pg_timetable: Advanced scheduling for PostgreSQL | 3 days ago |
| [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) | 330 | Collects many small inserts to ClickHouse and send in big inserts | 3 months ago |
| [myreplication](https://github.com/2tvenom/myreplication) | 176 | Golang MySql binary log replication listener | 3 years ago |
| [octillery](https://github.com/blastrain/octillery) | 148 | Go package for sharding databases ( Supports every ORM or raw SQL ) | 8 months ago |
| [dbbench](https://github.com/sj14/dbbench) | 62 | 🏋️ dbbench is a simple database benchmarking tool which supports several databases and own scripts | 4 days ago |
| [datagen](https://github.com/codingconcepts/datagen) | 45 | A fast data generator that's multi-table aware and supports multi-row DML. | 2 years ago |
| [prep](https://github.com/hexdigest/prep) | 30 | Prep finds all SQL statements in a Go package and instruments db connection with prepared statements | 4 years ago |
| [rwdb](https://github.com/andizzle/rwdb) | 13 | Database wrapper that manage read write connections | 4 years ago |


#### [SQL query builder](#SQL-query-builder)
* SQL query builder, libraries for building and using SQL.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [squirrel](https://github.com/Masterminds/squirrel) | 4436 | Fluent SQL generation for golang | 10 days ago |
| [xo](https://github.com/xo/xo) | 2980 | Command line tool to generate idiomatic Go code for SQL databases supporting PostgreSQL, MySQL, SQLite, Oracle, and Microsoft SQL Server | 4 days ago |
| [goqu](https://github.com/doug-martin/goqu) | 1363 | SQL builder and query library for golang | 21 days ago |
| [gendry](https://github.com/didi/gendry) | 1330 | a golang library for sql builder | 2 months ago |
| [dotsql](https://github.com/qustavo/dotsql) | 611 | A Golang library for using SQL. | 5 months ago |
| [jet](https://github.com/go-jet/jet) | 595 | Type safe SQL builder with code generation and automatic query result data mapping | 10 hours ago |
| [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) | 548 | A Go (golang) package that enhances the standard database/sql package by providing powerful data retrieval methods as well as DB-agnostic query building capabilities. | a month ago |
| [dbq](https://github.com/rocketlaunchr/dbq) | 325 | Zero boilerplate database operations for Go | a year ago |
| [sqrl](https://github.com/elgris/sqrl) | 236 | Fluent SQL generation for golang | 3 months ago |
| [sqlingo](https://github.com/lqs/sqlingo) | 203 | 💥 A lightweight DSL & ORM which helps you to write SQL in Go. | a month ago |
| [go-structured-query](https://github.com/bokwoon95/go-structured-query) | 145 | Type safe SQL query builder and struct mapper for Go | 3 months ago |
| [igor](https://github.com/galeone/igor) | 84 | igor is an abstraction layer for PostgreSQL with a gorm like syntax. | 2 years ago |
| [godbal](https://github.com/xujiajun/godbal) | 52 | Database Abstraction Layer (dbal) for Go. Support SQL builder and get result easily  (now only support mysql) | 3 years ago |
| [buildsqlx](https://github.com/arthurkushman/buildsqlx) | 44 | Go database query builder library for PostgreSQL | 9 months ago |
| [sqlf](https://github.com/leporo/sqlf) | 37 | Fast SQL query builder for Go | 6 days ago |
| [qry](https://github.com/HnH/qry) | 19 | Write your SQL queries in raw files with all benefits of modern IDEs, use them in an easy way inside your application with all the profit of compile time constants | 3 months ago |
| [gosql](https://github.com/twharmon/gosql) | 17 | SQL query builder for Go | a year ago |
| [mpath-go](https://github.com/spacetab-io/mpath-go) | 10 | Golang package for MPTT (Modified Preorder Tree Traversal) - materialized path realisation. | 2 years ago |
| [ormlite](https://github.com/pupizoid/ormlite) | 1 | Lightweight package containing some ORM-like features and helpers for sqlite databases. | a year ago |


### [Database Drivers](#Database-Drivers)
* Libraries for connecting and operating databases.

#### [Relational Databases](#Relational-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mysql](https://github.com/go-sql-driver/mysql) | 11794 | Go MySQL Driver is a MySQL driver for Go's (golang) database/sql package | 4 hours ago |
| [pq](https://github.com/lib/pq) | 7002 | Pure Go Postgres driver for database/sql | a month ago |
| [go-sqlite3](https://github.com/mattn/go-sqlite3) | 5371 | sqlite3 driver for go using database/sql | 12 hours ago |
| [pgx](https://github.com/jackc/pgx) | 4901 | PostgreSQL driver and toolkit for Go | 2 days ago |
| [go-mssqldb](https://github.com/denisenkom/go-mssqldb) | 1495 | Microsoft SQL server driver written in go language | 6 days ago |
| [go-oci8](https://github.com/mattn/go-oci8) | 575 | Oracle driver for Go using database/sql | 3 months ago |
| [scany](https://github.com/georgysavva/scany) | 471 | Library for scanning data from a database into Go structs and more | 13 days ago |
| [godror](https://github.com/godror/godror) | 317 | GO DRiver for ORacle DB | 3 days ago |
| [firebirdsql](https://github.com/nakagami/firebirdsql) | 163 | Firebird RDBMS sql driver for Go (golang) | 7 days ago |
| [go-adodb](https://github.com/mattn/go-adodb) | 124 | Microsoft ActiveX Object DataBase driver for go that using exp/sql | 2 years ago |
| [gofreetds](https://github.com/minus5/gofreetds) | 105 | Go Sql Server database driver. | a year ago |
| [sqinn-go](https://github.com/cvilsmeier/sqinn-go) | 92 | SQLite with pure Go | 7 months ago |
| [calcite-avatica-go](https://github.com/apache/calcite-avatica-go) | 86 | Mirror of Apache Calcite - Avatica Go SQL Driver | a year ago |
| [bgc](https://github.com/viant/bgc) | 15 | Datastore Connectivity for BigQuery in go | 2 years ago |
| [pig](https://github.com/alexeyco/pig) | 4 | Simple pgx wrapper to execute and scan query results | 9 months ago |


#### [NoSQL Databases](#NoSQL-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [redis](https://github.com/go-redis/redis) | 13253 | Type-safe Redis client for Golang | 4 days ago |
| [redigo](https://github.com/gomodule/redigo) | 8821 | Go client for Redis | 7 days ago |
| [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) | 6371 | The Go driver for MongoDB | 7 hours ago |
| [mgo](https://github.com/globalsign/mgo) | 1930 | The MongoDB driver for Go | 2 months ago |
| [rethinkdb-go](https://github.com/rethinkdb/rethinkdb-go) | 1587 | Go language driver for RethinkDB | 3 months ago |
| [gomemcache](https://github.com/bradfitz/gomemcache) | 1422 | Go Memcached client library #golang | 4 days ago |
| [qmgo](https://github.com/qiniu/qmgo) | 766 | Qmgo - The Go driver for MongoDB. It‘s based on official mongo-go-driver but easier to use like Mgo. | a month ago |
| [mgm](https://github.com/Kamva/mgm) | 441 | Mongo Go Models (mgm) is a fast and simple MongoDB ODM for Go (based on official Mongo Go Driver) | 2 days ago |
| [redeo](https://github.com/bsm/redeo) | 409 | High-performance framework for building redis-protocol compatible TCP servers/services | a year ago |
| [neoism](https://github.com/jmcvetta/neoism) | 382 | Neo4j client for Golang | 2 years ago |
| [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) | 372 | Aerospike Client Go  | a month ago |
| [gocb](https://github.com/couchbase/gocb) | 328 | The Couchbase Go SDK | 5 days ago |
| [go-couchbase](https://github.com/couchbase/go-couchbase) | 312 | Couchbase client in Go | 19 days ago |
| [go-rejson](https://github.com/nitishm/go-rejson) | 229 | Golang client for redislabs' ReJSON module with support for multilple redis clients (redigo, go-redis) | 9 months ago |
| [godis](https://github.com/piaohao/godis) | 99 | redis client implement by golang, inspired by jedis. | 2 years ago |
| [Neo4j-GO](https://github.com/davemeehan/Neo4j-GO) | 77 | Neo4j REST Client in golang | 4 years ago |
| [arangolite](https://github.com/solher/arangolite) | 69 | Lightweight Golang driver for ArangoDB | 10 months ago |
| [go-pilosa](https://github.com/pilosa/go-pilosa) | 50 | Go client library for Pilosa | 2 years ago |
| [goforestdb](https://github.com/couchbase/goforestdb) | 32 | Go bindings for ForestDB | 5 years ago |
| [neo4j](https://github.com/cihangir/neo4j) | 27 | Neo4j Rest API Client for Go lang | 7 years ago |
| [goriak](https://github.com/zegl/goriak) | 26 | goriak - Go language driver for Riak KV | 4 months ago |
| [xredis](https://github.com/shomali11/xredis) | 16 | Go Redis Client | 3 years ago |
| [godscache](https://github.com/defcronyke/godscache) | 9 | An unofficial Google Cloud Platform Go Datastore wrapper that adds caching using memcached. For App Engine Flexible, Compute Engine, Kubernetes Engine, and more. | 3 years ago |
| [asc](https://github.com/viant/asc) | 6 | Datastore Connectivity for Aerospike for go | 3 years ago |
| [gocosmos](https://github.com/btnguyen2k/gocosmos) | 5 | Go driver for Azure CosmosDB SQL API | 6 months ago |


#### [Search and Analytic Databases](#Search-and-Analytic-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bleve](https://github.com/blevesearch/bleve) | 8141 | A modern text indexing library for go | 25 days ago |
| [elastic](https://github.com/olivere/elastic) | 6478 | Elasticsearch client for Go. | 3 days ago |
| [riot](https://github.com/go-ego/riot) | 6034 | Go Open Source, Distributed, Simple and efficient Search Engine; Warning: This is V1 and beta version, because of big memory consume, and the V2 will be rewrite all code. | a year ago |
| [go-elasticsearch](https://github.com/elastic/go-elasticsearch) | 3846 | The official Go client for Elasticsearch | 19 days ago |
| [elastigo](https://github.com/mattbaird/elastigo) | 946 | A Go (golang) based Elasticsearch client library. | 3 years ago |
| [elasticsql](https://github.com/cch123/elasticsql) | 842 | convert sql to elasticsearch DSL in golang(go) | 2 months ago |
| [skizze](https://github.com/seiflotfy/skizze) | 81 | A probabilistic data structure service and storage | 6 years ago |
| [goes](https://github.com/OwnLocal/goes) | 25 | A library to interact with Elasticsearch in Go! | a year ago |


#### [Multiple Backends](#Multiple-Backends)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cayley](https://github.com/cayleygraph/cayley) | 14037 | An open-source graph database | 2 months ago |
| [gokv](https://github.com/philippgille/gokv) | 385 | Simple key-value store abstraction and implementations for Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB and many more) | 4 months ago |
| [cachego](https://github.com/faabiosr/cachego) | 159 | Golang Cache component - Multiple drivers | 4 months ago |
| [dsc](https://github.com/viant/dsc) | 23 | Datastore Connectivity in go | 2 years ago |


### [Date and Time](#Date-and-Time)
* Libraries for working with dates and times.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [now](https://github.com/jinzhu/now) | 3531 | Now is a time toolkit for golang | a month ago |
| [dateparse](https://github.com/araddon/dateparse) | 1605 | GoLang Parse many date strings without knowing format in advance. | 5 days ago |
| [carbon](https://github.com/golang-module/carbon) | 1551 | A simple, semantic and developer-friendly golang package for datetime | 2 months ago |
| [carbon](https://github.com/uniplaces/carbon) | 672 | Carbon for Golang, an extension for Time | 2 months ago |
| [durafmt](https://github.com/hako/durafmt) | 411 | :clock8:  Better time duration formatting in Go!  | 7 months ago |
| [timeutil](https://github.com/leekchan/timeutil) | 184 | timeutil - useful extensions (Timedelta, Strftime, ...) to the golang's time package | 3 years ago |
| [gostradamus](https://github.com/bykof/gostradamus) | 159 | Gostradamus: Better DateTimes for Go 🕰️ | 2 months ago |
| [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) | 113 | The implementation of Persian (Solar Hijri) Calendar in Go | 2 months ago |
| [iso8601](https://github.com/relvacode/iso8601) | 97 | A fast ISO8601 date parser for Go | 6 months ago |
| [date](https://github.com/rickb777/date) | 85 | A Go package for working with dates | 25 days ago |
| [timespan](https://github.com/SaidinWoT/timespan) | 75 | Golang package to manipulate time intervals. | 3 years ago |
| [feiertage](https://github.com/wlbr/feiertage) | 40 | Gesetzliche Feiertage und mehr in Deutschland und Österreich (Bank holidays/public holidays in Austria and Germany) | 5 months ago |
| [go-sunrise](https://github.com/nathan-osman/go-sunrise) | 39 | Go package for calculating the sunrise and sunset times for a given location | 7 months ago |
| [go-str2duration](https://github.com/xhit/go-str2duration) | 35 | Convert string to duration in golang | a year ago |
| [kair](https://github.com/GuilhermeCaruso/kair) | 21 | :clock1: Date and Time - Golang Formatting Library | 2 years ago |
| [cronrange](https://github.com/1set/cronrange) | 13 | time range expression in cron style | 5 months ago |
| [nulltime](https://github.com/kirillDanshin/nulltime) | 11 |  | 5 years ago |
| [tuesday](https://github.com/osteele/tuesday) | 9 | Ruby-compatible strftime for golang | 7 months ago |
| [go-week](https://github.com/stoewer/go-week) | 7 | A Go package to work with ISO 8601 week dates | 2 months ago |
| [strftime](https://github.com/awoodbeck/strftime) | 7 | C99-compatible strftime formatter for use with Go time.Time instances. | 4 years ago |


### [Distributed Systems](#Distributed-Systems)
* Packages that help with building Distributed Systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [etcd](https://github.com/etcd-io/etcd) | 38444 | Distributed reliable key-value store for the most critical data of a distributed system | 7 hours ago |
| [kit](https://github.com/go-kit/kit) | 22114 | A standard library for microservices. | 2 days ago |
| [go-micro](https://github.com/asim/go-micro) | 17500 | A framework for distributed systems development | a day ago |
| [kratos](https://github.com/go-kratos/kratos) | 16089 | A modular-designed and easy-to-use microservices framework in Go. | 13 hours ago |
| [grpc-go](https://github.com/grpc/grpc-go) | 15175 | The Go language implementation of gRPC. HTTP/2 based RPC | 5 hours ago |
| [go-zero](https://github.com/zeromicro/go-zero) | 13845 | go-zero is a web and rpc framework written in Go. It's born to ensure the stability of the busy sites with resilient design. Builtin goctl greatly improves the development productivity. | 12 hours ago |
| [micro](https://github.com/micro/micro) | 10832 | A distributed cloud operating system | 3 days ago |
| [nats-server](https://github.com/nats-io/nats-server) | 10339 | High-Performance server for NATS.io, the cloud and edge native messaging system. | 38 minutes ago |
| [libzmq](https://github.com/zeromq/libzmq) | 7472 | ZeroMQ core engine in C++, implements ZMTP/3.1 | 2 days ago |
| [rpcx](https://github.com/smallnest/rpcx) | 6589 | Best microservices framework in Go, like alibaba Dubbo, but with more features, Scale easily. Try it. Test it. If you feel it's better, use it! 𝐉𝐚𝐯𝐚有𝐝𝐮𝐛𝐛𝐨, 𝐆𝐨𝐥𝐚𝐧𝐠有𝐫𝐩𝐜𝐱! | 8 days ago |
| [raft](https://github.com/hashicorp/raft) | 5560 | Golang implementation of the Raft consensus protocol | a day ago |
| [lura](https://github.com/luraproject/lura) | 4801 | Ultra performant API Gateway with middlewares. A project hosted at The Linux Foundation | 20 days ago |
| [torrent](https://github.com/anacrolix/torrent) | 4159 | Full-featured BitTorrent client package and utilities | an hour ago |
| [dragonboat](https://github.com/lni/dragonboat) | 4033 | A feature complete and high performance multi-group Raft library in Go.   | 18 minutes ago |
| [emitter](https://github.com/emitter-io/emitter) | 3141 | High performance, distributed and low latency publish-subscribe platform. | 15 days ago |
| [glow](https://github.com/chrislusf/glow) | 3020 | Glow is an easy-to-use distributed computation system written in Go, similar to Hadoop Map Reduce, Spark, Flink, Storm, etc. I am also working on another similar pure Go system, https://github.com/chrislusf/gleam , which is more flexible and more performant. | 3 years ago |
| [gleam](https://github.com/chrislusf/gleam) | 2959 | Fast, efficient, and scalable distributed map/reduce system, DAG execution, in memory or on disk, written in pure Go, runs standalone or distributedly. | 8 months ago |
| [liftbridge](https://github.com/liftbridge-io/liftbridge) | 2190 | Lightweight, fault-tolerant message streams. | 10 days ago |
| [hprose-golang](https://github.com/hprose/hprose-golang) | 1191 | Hprose is a cross-language RPC. This project is Hprose for Golang. | a month ago |
| [ringpop-go](https://github.com/uber/ringpop-go) | 716 | Scalable, fault-tolerant application-layer sharding for Go applications | a year ago |
| [rain](https://github.com/cenkalti/rain) | 662 | 🌧 BitTorrent client and library in Go | a month ago |
| [gorpc](https://github.com/valyala/gorpc) | 648 | Simple, fast and scalable golang rpc library for high load | 2 years ago |
| [go-health](https://github.com/InVisionApp/go-health) | 613 | Library for enabling asynchronous health checks in your service | 2 years ago |
| [redislock](https://github.com/bsm/redislock) | 570 | Simplified distributed locking implementation using Redis | 2 days ago |
| [go-sundheit](https://github.com/AppsFlyer/go-sundheit) | 446 | A library built to provide support for defining service health for golang services. It allows you to register async health checks for your dependencies and the service itself, provides a health endpoint that exposes their status, and health metrics. | 5 months ago |
| [arpc](https://github.com/lesismal/arpc) | 444 | More effective network communication, two-way calling, notify and broadcast supported. | 4 days ago |
| [consistent](https://github.com/buraksezer/consistent) | 439 | Consistent hashing with bounded loads in Golang | 7 months ago |
| [digota](https://github.com/digota/digota) | 421 | ecommerce microservice | a year ago |
| [sleuth](https://github.com/ursiform/sleuth) | 340 | A Go library for master-less peer-to-peer autodiscovery and RPC between HTTP services | 4 years ago |
| [go-jump](https://github.com/dgryski/go-jump) | 334 | go-jump: Jump consistent hashing | 3 months ago |
| [go-doudou](https://github.com/unionj-cloud/go-doudou) | 230 | go-doudou（doudou pronounce /dəudəu/）is a gossip protocol and OpenAPI 3.0 spec based decentralized microservice framework. It supports monolith service application as well. Currently, it supports restful service only. | 17 hours ago |
| [dht](https://github.com/anacrolix/dht) | 217 | dht is used by anacrolix/torrent, and is intended for use as a library in other projects both torrent related and otherwise | 10 hours ago |
| [jsonrpc](https://github.com/ybbus/jsonrpc) | 199 | A simple go implementation of json rpc 2.0 client over http | 4 months ago |
| [jsonrpc](https://github.com/osamingo/jsonrpc) | 157 | The jsonrpc package helps implement of JSON-RPC 2.0 | 3 months ago |
| [celeriac.v1](https://github.com/svcavallar/celeriac.v1) | 69 | Golang client library for adding support for interacting and monitoring Celery workers, tasks and events. | a year ago |
| [doublejump](https://github.com/edwingeng/doublejump) | 67 | A revamped Google's jump consistent hash | 6 months ago |
| [semaphore](https://github.com/jexia/semaphore) | 65 | Take control of your data, connect with anything, and expose it anywhere through protocols such as HTTP, GraphQL, and gRPC. | 7 months ago |
| [dot](https://github.com/dotchain/dot) | 62 | distributed data sync with operational transformation/transforms  | 2 years ago |
| [outboxer](https://github.com/italolelis/outboxer) | 60 | A library that implements the outboxer pattern in go | 15 hours ago |
| [flowgraph](https://github.com/vectaport/flowgraph) | 43 | Flowgraph package for scalable asynchronous system development | 9 months ago |
| [drmaa](https://github.com/dgruber/drmaa) | 36 | Compute cluster (HPC) job submission library for Go (#golang) based on the open DRMAA standard. | a year ago |
| [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) | 35 | MySQL Backed Locking Primitive | 6 months ago |
| [go-pdu](https://github.com/pdupub/go-pdu) | 33 | Parallel Digital Universe - A decentralized identity-based social network | 6 days ago |
| [micro](https://github.com/gmsec/micro) | 15 | A Go distributed systems development framework | 3 months ago |
| [dynatomic](https://github.com/tylfin/dynatomic) | 13 | Dynatomic is a library for using dynamodb as an atomic counter | a year ago |
| [consistenthash](https://github.com/mbrostami/consistenthash) | 9 | A Go library that implements Consistent Hashing | 2 years ago |
| [failured](https://github.com/andy2046/failured) | 2 | Adaptive Accrual Failure Detector | 5 months ago |


### [Dynamic DNS](#Dynamic-DNS)
* Tools for updating dynamic DNS records.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [godns](https://github.com/TimothyYe/godns) | 935 | A dynamic DNS client tool supports AliDNS, Cloudflare, Google Domains, DNSPod, HE.net & DuckDNS & DreamHost, etc, written in Go. | 3 days ago |
| [ddns](https://github.com/skibish/ddns) | 201 | Personal DDNS client with Digital Ocean Networking DNS as backend. | 3 months ago |


### [Email](#Email)
* Libraries and tools that implement email creation and sending.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [MailHog](https://github.com/mailhog/MailHog) | 9501 | Web and API based SMTP testing | 6 days ago |
| [hermes](https://github.com/matcornic/hermes) | 2407 | Golang package that generates clean, responsive HTML e-mails for sending transactional mail | a month ago |
| [email](https://github.com/jordan-wright/email) | 1906 | Robust and flexible email library for Go | 25 days ago |
| [go-imap](https://github.com/emersion/go-imap) | 1428 |  :inbox_tray: An IMAP library for clients and servers | 5 days ago |
| [sendgrid-go](https://github.com/sendgrid/sendgrid-go) | 781 | The Official Twilio SendGrid Led, Community Driven Golang API Library | 3 days ago |
| [mailgun-go](https://github.com/mailgun/mailgun-go) | 573 | Go library for sending mail with the Mailgun API. | 4 days ago |
| [email-verifier](https://github.com/AfterShip/email-verifier) | 348 | :white_check_mark: A Go library for email verification without sending any emails. | a month ago |
| [go-simple-mail](https://github.com/xhit/go-simple-mail) | 250 | Golang package for send email. Support keep alive connection, TLS and SSL. Easy for bulk SMTP. | 20 days ago |
| [go-message](https://github.com/emersion/go-message) | 232 | :envelope: A streaming Go library for the Internet Message Format and mail messages | a month ago |
| [hectane](https://github.com/hectane/hectane) | 213 | Lightweight SMTP client written in Go | a year ago |
| [douceur](https://github.com/aymerick/douceur) | 204 | A simple CSS parser and inliner in Go | 7 months ago |
| [mailchain](https://github.com/mailchain/mailchain) | 100 | Using Mailchain, blockchain users can now send and receive rich-media HTML messages with attachments via a blockchain address. | 4 hours ago |
| [go-premailer](https://github.com/vanng822/go-premailer) | 78 | Inline styling for html mail in golang | 10 months ago |
| [go-dkim](https://github.com/toorop/go-dkim) | 74 | DKIM package for golang | a year ago |
| [smtp](https://github.com/mailhog/smtp) | 66 | MailHog SMTP Protocol | 3 months ago |
| [go-email-validator](https://github.com/go-email-validator/go-email-validator) | 17 | 📧 Golang Email address validator | 7 hours ago |


### [Embeddable Scripting Languages](#Embeddable-Scripting-Languages)
* Embedding other languages inside your go code.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopher-lua](https://github.com/yuin/gopher-lua) | 4508 | GopherLua: VM and compiler for Lua in Go | 5 days ago |
| [goja](https://github.com/dop251/goja) | 2623 | ECMAScript/JavaScript engine in pure Go | 12 hours ago |
| [tengo](https://github.com/d5/tengo) | 2576 | A fast script language for Go | a month ago |
| [expr](https://github.com/antonmedv/expr) | 2243 | Expression language for Go | a month ago |
| [go-lua](https://github.com/Shopify/go-lua) | 2226 | A Lua VM in Go | 2 months ago |
| [go-python](https://github.com/sbinet/go-python) | 1338 | naive go bindings to the CPython2 C-API | 9 months ago |
| [anko](https://github.com/mattn/anko) | 1195 | Scriptable interpreter written in golang | a month ago |
| [cel-go](https://github.com/google/cel-go) | 1021 | Fast, portable, non-Turing complete expression evaluation with gradual typing (Go) | 25 days ago |
| [core](https://github.com/metacall/core) | 854 | MetaCall: The ultimate polyglot programming experience. | 2 days ago |
| [go-php](https://github.com/deuill/go-php) | 832 | PHP bindings for the Go programming language (Golang) | a month ago |
| [go-duktape](https://github.com/olebedev/go-duktape) | 779 | [abandoned] Duktape JavaScript engine bindings for Go | 3 months ago |
| [golua](https://github.com/aarzilli/golua) | 577 | Go bindings for Lua C API - in progress | 2 months ago |
| [gisp](https://github.com/jcla1/gisp) | 477 | Simple LISP in Go | 4 years ago |
| [gval](https://github.com/PaesslerAG/gval) | 422 | Expression evaluation in golang | a month ago |
| [gentee](https://github.com/gentee/gentee) | 87 | Gentee - script programming language for automation. It uses VM and compiler written in Go (Golang). | a month ago |
| [binder](https://github.com/alexeyco/binder) | 54 | High level go to Lua binder. Write less, do more. | 3 years ago |
| [purl](https://github.com/ian-kent/purl) | 34 | Perl, but fluffy like a cat! | 7 years ago |
| [ngaro](https://github.com/db47h/ngaro) | 21 | An embeddable implementation of the Ngaro Virtual Machine for Go programs | 4 years ago |
| [ecal](https://github.com/krotik/ecal) | 16 | A simple embeddable scripting language which supports concurrent event processing. | 8 months ago |


### [Error Handling](#Error-Handling)
* Libraries for handling errors.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [errors](https://github.com/pkg/errors) | 7554 | Simple error handling primitives | 2 months ago |
| [go-multierror](https://github.com/hashicorp/go-multierror) | 1467 | A Go (golang) package for representing a list of errors as a single error. | 2 months ago |
| [eris](https://github.com/rotisserie/eris) | 894 | eris provides a better way to handle, trace, and log errors in Go 🎆 | 5 months ago |
| [errorx](https://github.com/joomcode/errorx) | 791 | A comprehensive error handling library for Go | 11 hours ago |
| [tracerr](https://github.com/ztrue/tracerr) | 695 | Golang errors with stack trace and source fragments. | 3 years ago |
| [errlog](https://github.com/snwfdhmp/errlog) | 400 | Reduce debugging time while programming Go. Use static and stack-trace analysis to determine which func call causes the error. | a year ago |
| [emperror](https://github.com/emperror/emperror) | 240 | The Emperor takes care of all errors personally | a year ago |
| [errors](https://github.com/emperror/errors) | 106 | Drop-in replacement for the standard library errors package and github.com/pkg/errors | 10 months ago |
| [errors](https://github.com/bnkamalesh/errors) | 27 | A drop-in replacement for Go errors, with some added sugar! Unwrap user-friendly messages, HTTP status code, easy wrapping with multiple error types. | a month ago |
| [falcon](https://github.com/ThundR67/falcon) | 7 | A Simple Yet Highly Powerful Package For Error Handling | 2 years ago |
| [errors](https://github.com/neuronlabs/errors) | 3 | Simple golang error handling with classification primitives. | 2 years ago |
| [errors](https://github.com/PumpkinSeed/errors) | 3 | Simple and efficient error package  | 2 years ago |


### [File Handling](#File-Handling)
* Libraries for handling files and file systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [afero](https://github.com/spf13/afero) | 4186 | A FileSystem Abstraction System for Go | 10 hours ago |
| [pdfcpu](https://github.com/pdfcpu/pdfcpu) | 2907 | A PDF processor written in Go. | 3 hours ago |
| [gdu](https://github.com/dundee/gdu) | 1488 | Fast disk usage analyzer with console interface written in Go | 9 days ago |
| [todo.txt](https://github.com/todotxt/todo.txt) | 1368 | ‼️ A complete primer on the whys and hows of todo.txt. | 9 days ago |
| [notify](https://github.com/rjeczalik/notify) | 708 | File system event notification library on steroids. | 5 months ago |
| [copy](https://github.com/otiai10/copy) | 371 | Go copy directory recursively | 19 days ago |
| [bigfile](https://github.com/bigfile/bigfile) | 213 | Bigfile -- a file transfer system that supports http, rpc and ftp protocol   https://bigfile.site   | 2 years ago |
| [afs](https://github.com/viant/afs) | 172 | Abstract File Storage | 2 months ago |
| [vfs](https://github.com/C2FO/vfs) | 147 | Pluggable, extensible virtual file system for Go | 14 days ago |
| [fs](https://github.com/kr/fs) | 128 | Package fs provides filesystem-related functions. | a year ago |
| [go-csv-tag](https://github.com/artonge/go-csv-tag) | 96 | Read csv file from go using tags | 2 months ago |
| [go-exiftool](https://github.com/barasher/go-exiftool) | 95 | Golang wrapper for Exiftool : extract as much metadata as possible (EXIF, ...) from files (pictures, pdf, office documents, ...) | 5 months ago |
| [opc](https://github.com/qmuntal/opc) | 68 | Go implementation of the Open Packaging Conventions (OPC) | 10 months ago |
| [skywalker](https://github.com/dixonwille/skywalker) | 67 | A package to allow one to concurrently go through a filesystem with ease | 4 months ago |
| [checksum](https://github.com/codingsince1985/checksum) | 50 | Compute message digest for large files in Go | a month ago |
| [tarfs](https://github.com/posener/tarfs) | 48 | An implementation of the FileSystem interface for tar files. | 2 years ago |
| [parquet](https://github.com/parsyl/parquet) | 43 | A library for reading and writing parquet files. | 3 months ago |
| [baraka](https://github.com/xis/baraka) | 36 | a tool for handling file uploads simple | 4 months ago |
| [go-gtfs](https://github.com/artonge/go-gtfs) | 30 | Load GTFS files in golang | a year ago |
| [flop](https://github.com/homedepot/flop) | 29 | Go file operations library chasing GNU APIs. | a month ago |
| [gut](https://github.com/1set/gut) | 21 | 🍱 yet another collection of go utilities & tools | a year ago |
| [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) | 14 | copy files for humans | 2 years ago |
| [todotxt](https://github.com/1set/todotxt) | 10 | Parser for todo.txt files in Go ✅ | 20 days ago |
| [higgs](https://github.com/dastoori/higgs) | 6 | A tiny cross-platform Go library to hide/unhide files and directories | 9 months ago |
| [pathtype](https://github.com/jonchun/pathtype) | 6 | Add a type for paths in Go. | 5 months ago |


### [Financial](#Financial)
* Packages for accounting and finance.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ticker](https://github.com/achannarasappa/ticker) | 4018 | Terminal stock ticker with live updates and position tracking | 21 days ago |
| [decimal](https://github.com/shopspring/decimal) | 3655 | Arbitrary-precision fixed-point decimal numbers in go | a day ago |
| [go-money](https://github.com/Rhymond/go-money) | 1038 | Go implementation of Fowler's Money pattern | a month ago |
| [accounting](https://github.com/leekchan/accounting) | 696 | money and currency formatting for golang | 5 days ago |
| [techan](https://github.com/sdcoffey/techan) | 578 | Technical Analysis Library for Golang | 2 months ago |
| [go-finance](https://github.com/FlashBoys/go-finance) | 535 | :warning: Deprecrated in favor of https://github.com/piquette/finance-go  | 4 years ago |
| [ach](https://github.com/moov-io/ach) | 276 | ACH implements a reader, writer, and validator for Automated Clearing House (ACH) files. The HTTP server is available in a Docker image and the Go package is available. | a day ago |
| [currency](https://github.com/bojanz/currency) | 267 | Currency handling for Go. | 2 months ago |
| [orderbook](https://github.com/i25959341/orderbook) | 238 | Matching Engine for Limit Order Book in Golang | 8 months ago |
| [go-finance](https://github.com/alpeb/go-finance) | 120 | Go library containing a collection of financial functions for time value of money (annuities), cash flow, interest rate conversions, bonds and depreciation calculations. | a month ago |
| [transaction](https://github.com/claygod/transaction) | 99 | Embedded database for accounts transactions. | 6 months ago |
| [ofxgo](https://github.com/aclindsa/ofxgo) | 95 | Golang library for querying and parsing OFX | 3 months ago |
| [vat](https://github.com/dannyvankooten/vat) | 85 | Go package for dealing with EU VAT. Does VAT number validation & rates retrieval. | a year ago |
| [sleet](https://github.com/BoltApp/sleet) | 80 | Payment abstraction library - one interface for multiple payment processors ( inspired by Ruby's ActiveMerchant ) | 9 hours ago |
| [go-finnhub](https://github.com/m1/go-finnhub) | 63 | Simple and easy to use client for stock market, forex and crypto data from finnhub.io written in Go. Access real-time financial market data from 60+ stock exchanges, 10 forex brokers, and 15+ crypto exchanges | 2 years ago |
| [currency](https://github.com/bnkamalesh/currency) | 44 | A currency computations package. | 2 months ago |
| [fastme](https://github.com/newity/fastme) | 26 |  | 4 months ago |
| [payme](https://github.com/jovandeginste/payme) | 8 | QR code generator (ASCII & PNG) for SEPA payments | a month ago |
| [go-finance](https://github.com/pieterclaerhout/go-finance) | 5 | Finance related Go functions (e.g. exchange rates, VAT number checking, …) | 2 years ago |


### [Forms](#Forms)
* Libraries for working with forms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nosurf](https://github.com/justinas/nosurf) | 1235 | CSRF protection middleware for Go. | a year ago |
| [binding](https://github.com/mholt/binding) | 785 | Reflectionless data binding for Go's net/http (not actively maintained) | 4 years ago |
| [csrf](https://github.com/gorilla/csrf) | 734 | gorilla/csrf provides Cross Site Request Forgery (CSRF) prevention middleware for Go web applications & services 🔒 | 10 days ago |
| [form](https://github.com/go-playground/form) | 507 | :steam_locomotive: Decodes url.Values into Go value(s) and Encodes Go value(s) into url.Values. Dual Array and Full map support. | 6 months ago |
| [conform](https://github.com/leebenson/conform) | 243 | Trims, sanitizes & scrubs data based on struct tags (go, golang) | 3 months ago |
| [formam](https://github.com/monoculum/formam) | 164 | a package for decode form's values into struct in Go | 3 months ago |
| [forms](https://github.com/albrow/forms) | 128 | A lightweight go library for parsing form data or json from an http.Request. | 5 years ago |
| [qs](https://github.com/sonh/qs) | 59 | Go module for encoding structs into URL query parameters | 7 months ago |
| [bind](https://github.com/robfig/bind) | 26 |  | 7 years ago |
| [queryparam](https://github.com/TomWright/queryparam) | 11 | Go package to easily convert a URL's query parameters/values into usable struct values of the correct types. | a year ago |


### [Functional](#Functional)
* Packages to support functional programming in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-underscore](https://github.com/tobyhede/go-underscore) | 1222 |  Helpfully Functional Go -  A useful collection of Go utilities. Designed for programmer happiness.  | 3 years ago |
| [fpGo](https://github.com/TeaEntityLab/fpGo) | 220 | Monad, Functional Programming features for Golang | 6 days ago |
| [gofp](https://github.com/rbrahul/gofp) | 103 | A super simple Lodash like utility library with essential functions that empowers the development in Go | a year ago |
| [fuego](https://github.com/seborama/fuego) | 101 | Functional Experiment in Golang | a year ago |


### [Game Development](#Game-Development)
* Awesome game development libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ebiten](https://github.com/hajimehoshi/ebiten) | 5851 | A dead simple 2D game library for Go | 36 minutes ago |
| [leaf](https://github.com/name5566/leaf) | 4264 | A game server framework in Go (golang) | 6 months ago |
| [pixel](https://github.com/faiface/pixel) | 3772 | A hand-crafted 2D game library in Go | 3 months ago |
| [goworld](https://github.com/xiaonanln/goworld) | 2027 | Scalable Distributed Game Server Engine with Hot Swapping in Golang | 7 months ago |
| [nano](https://github.com/lonng/nano) | 1911 | Lightweight, facility, high performance golang based game server framework | 6 months ago |
| [engine](https://github.com/g3n/engine) | 1795 | Go 3D Game Engine (http://g3n.rocks) | 5 days ago |
| [go-sdl2](https://github.com/veandco/go-sdl2) | 1680 | SDL2 binding for Go | 21 hours ago |
| [engo](https://github.com/EngoEngine/engo) | 1464 | Engo is an open-source 2D game engine written in Go. | a month ago |
| [pitaya](https://github.com/topfreegames/pitaya) | 1295 | Scalable game server framework with clustering support and client libraries for iOS, Android, Unity and others through the C SDK. | 2 months ago |
| [termloop](https://github.com/JoelOtter/termloop) | 1255 | Terminal-based game engine for Go, built on top of Termbox | 5 months ago |
| [gonet](https://github.com/xtaci/gonet) | 1166 | A Game Server Skeleton in golang. | 5 years ago |
| [oak](https://github.com/oakmound/oak) | 994 | A pure Go game engine | a day ago |
| [raylib-go](https://github.com/gen2brain/raylib-go) | 714 | Go bindings for raylib, a simple and easy-to-use library to enjoy videogames programming. | 6 days ago |
| [engine](https://github.com/azul3d/engine) | 522 | Azul3D - A 3D game engine written in Go! | 3 months ago |
| [go-astar](https://github.com/beefsack/go-astar) | 469 | Go implementation of the A* search algorithm | a year ago |
| [go3d](https://github.com/ungerik/go3d) | 217 | A performance oriented 2D/3D math package for Go | 3 months ago |
| [prototype](https://github.com/gonutz/prototype) | 66 | Simple 2D game prototyping framework. | a month ago |
| [tile](https://github.com/kelindar/tile) | 39 | Tile is a 2D grid engine, built with data and cache friendly ways, includes pathfinding and observers. | 13 days ago |


### [Generation and Generics](#Generation-and-Generics)
* Tools to enhance the language with features like generics via code generation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-linq](https://github.com/ahmetb/go-linq) | 2820 | .NET LINQ capabilities in Go | 2 months ago |
| [jennifer](https://github.com/dave/jennifer) | 2277 | Jennifer is a code generator for Go | 23 days ago |
| [gen](https://github.com/clipperhouse/gen) | 1344 | Type-driven code generation for Go | 2 years ago |
| [goderive](https://github.com/awalterschulze/goderive) | 951 | Code Generation for Functional Programming, Concurrency and Generics in Golang | 20 days ago |
| [gowrap](https://github.com/hexdigest/gowrap) | 556 | GoWrap is a command line tool for generating decorators for Go interfaces | 3 months ago |
| [interfaces](https://github.com/rjeczalik/interfaces) | 322 | Code generation tools for Go. | 8 months ago |
| [go-enum](https://github.com/abice/go-enum) | 268 | An enum generator for go | 13 hours ago |
| [pkgreflect](https://github.com/ungerik/pkgreflect) | 99 | A Go preprocessor for package scoped reflection | 4 years ago |
| [goverter](https://github.com/jmattheis/goverter) | 94 | Generate type-safe Go converters by simply defining an interface | 2 months ago |
| [efaceconv](https://github.com/t0pep0/efaceconv) | 51 |  | 4 years ago |
| [gotype](https://github.com/wzshiming/gotype) | 36 | Golang source code parsing, usage like reflect package | 5 months ago |
| [GENERIS](https://github.com/senselogic/GENERIS) | 30 | Versatile Go code generator. | 5 months ago |
| [go-xray](https://github.com/pieterclaerhout/go-xray) | 21 | Helpers for making the use of reflection easier | 2 years ago |
| [typeregistry](https://github.com/xiaoxin01/typeregistry) | 12 | create type dynamically in Golang | 2 years ago |


### [Geographic](#Geographic)
* Geographic tools and servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tile38](https://github.com/tidwall/tile38) | 7918 | Real-time Geospatial and Geofencing | 5 days ago |
| [geo](https://github.com/golang/geo) | 1312 | S2 geometry library in Go | 2 months ago |
| [mbtileserver](https://github.com/consbio/mbtileserver) | 296 | Basic Go server for mbtiles | 11 days ago |
| [osm](https://github.com/paulmach/osm) | 184 | General purpose library for reading, writing and working with OpenStreetMap data | 4 months ago |
| [wgs84](https://github.com/wroge/wgs84) | 67 | A pure Go package for coordinate transformations. | a month ago |
| [geoserver](https://github.com/hishamkaram/geoserver) | 66 | geoserver is a Go library for manipulating a GeoServer instance via the GeoServer REST API. | 2 months ago |
| [godal](https://github.com/airbusgeo/godal) | 59 | golang wrapper for github.com/OSGEO/gdal | 4 days ago |
| [gismanager](https://github.com/hishamkaram/gismanager) | 40 | Publish Your GIS Data(Vector Data) to PostGIS and Geoserver | 3 years ago |
| [simplefeatures](https://github.com/peterstace/simplefeatures) | 38 | Simple Features is a pure Go Implementation of the OpenGIS Simple Feature Access Specification | a month ago |
| [pbf](https://github.com/maguro/pbf) | 30 | OpenStreetMap PBF golang parser | 9 months ago |
| [s2-geojson](https://github.com/pantrif/s2-geojson) | 15 | Draw a polygon on the map or paste a geoJSON and explore how the s2.RegionCoverer covers it with S2 cells depending on the min and max levels | 2 years ago |


### [Go Compilers](#Go-Compilers)
* Tools for compiling Go to other languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopherjs](https://github.com/gopherjs/gopherjs) | 10780 | A compiler from Go to JavaScript for running Go code in a browser | 6 days ago |
| [tardisgo](https://github.com/tardisgo/tardisgo) | 414 | Golang->Haxe->CPP/CSharp/Java/JavaScript transpiler   | 5 years ago |
| [c4go](https://github.com/Konstantin8105/c4go) | 293 | Transpiling C code to Go code | 2 months ago |
| [f4go](https://github.com/Konstantin8105/f4go) | 31 | Transpiling fortran code to golang code | a month ago |


### [Goroutines](#Goroutines)
* Tools for managing and working with Goroutines.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ants](https://github.com/panjf2000/ants) | 7435 | 🐜🐜🐜 ants is a high-performance and low-cost goroutine pool in Go, inspired by fasthttp./ ants 是一个高性能且低损耗的 goroutine 池。 | 3 days ago |
| [tunny](https://github.com/Jeffail/tunny) | 2797 | A goroutine pool for Go | 6 months ago |
| [goworker](https://github.com/benmanns/goworker) | 2625 | goworker is a Go-based background worker that runs 10 to 100,000* times faster than Ruby-based workers. | a month ago |
| [workerpool](https://github.com/gammazero/workerpool) | 709 | Concurrency limiting goroutine pool | 2 months ago |
| [grpool](https://github.com/ivpusic/grpool) | 670 | Lightweight Goroutine pool | 3 years ago |
| [pool](https://github.com/go-playground/pool) | 666 | :speedboat: a limited consumer goroutine or unlimited goroutine pool for easier goroutine handling and cancellation | 6 months ago |
| [pond](https://github.com/alitto/pond) | 430 | 🔘 Minimalistic and High-performance goroutine worker pool written in Go | 8 days ago |
| [gowp](https://github.com/xxjwxc/gowp) | 352 | golang worker pool , Concurrency limiting goroutine pool | 8 months ago |
| [go-floc](https://github.com/workanator/go-floc) | 221 | Floc: Orchestrate goroutines with ease. | 5 months ago |
| [go-flow](https://github.com/kamildrazkiewicz/go-flow) | 181 | Simply way to control goroutines execution order based on dependencies | 3 years ago |
| [semaphore](https://github.com/marusama/semaphore) | 134 | Fast resizable golang semaphore primitive | 9 months ago |
| [go-workers](https://github.com/catmullet/go-workers) | 128 | 👷 Library for safely running groups of workers concurrently or consecutively that require input and output through channels | 5 days ago |
| [artifex](https://github.com/mborders/artifex) | 124 | Simple in-memory job queue for Golang using worker-based dispatching | a year ago |
| [errgroup](https://github.com/neilotoole/errgroup) | 107 | errgroup with goroutine worker limits | 4 months ago |
| [async](https://github.com/StudioSol/async) | 97 | A safe way to execute functions asynchronously, recovering them in case of panic. It also provides an error stack aiming to facilitate fail causes discovery. | a year ago |
| [cyclicbarrier](https://github.com/marusama/cyclicbarrier) | 89 | CyclicBarrier golang implementation | 2 years ago |
| [semaphore](https://github.com/kamilsk/semaphore) | 89 | 🚦 Semaphore pattern implementation with timeout of lock/unlock operations. | 2 years ago |
| [gpool](https://github.com/sherifabdlnaby/gpool) | 82 | gpool - a generic context-aware resizable goroutines pool to bound concurrency based on semaphore.  | 2 years ago |
| [worker-pool](https://github.com/vardius/worker-pool) | 80 | Go simple async worker pool | a year ago |
| [gollback](https://github.com/vardius/gollback) | 74 | Go asynchronous simple function utilities, for managing execution of closures and callbacks | 6 days ago |
| [Hunch](https://github.com/AaronJan/Hunch) | 71 | Hunch provides functions like: All, First, Retry, Waterfall etc., that makes asynchronous flow control more intuitive. | a year ago |
| [threadpool](https://github.com/shettyh/threadpool) | 62 | Golang simple thread pool implementation | 2 years ago |
| [routine](https://github.com/x-mod/routine) | 47 | go routine control, abstraction of the Main and some useful Executors.如果你不会管理Goroutine的话，用它 | a year ago |
| [goccm](https://github.com/zenthangplus/goccm) | 41 | Limits the number of goroutines that are allowed to run concurrently | 3 months ago |
| [nursery](https://github.com/arunsworld/nursery) | 38 | Structured Concurrency in Go | 6 months ago |
| [kyoo](https://github.com/dirkaholic/kyoo) | 36 | Unlimited job queue for go, using a pool of concurrent workers processing the job queue entries | 2 years ago |
| [async](https://github.com/reugn/async) | 34 | Synchronization and asynchronous computation utilities library for Go | 2 months ago |
| [parallel-fn](https://github.com/rafaeljesus/parallel-fn) | 31 | Run functions in parallel :comet: | 4 years ago |
| [gohive](https://github.com/loveleshsharma/gohive) | 28 | 🐝 A Highly Performant and easy to use goroutine pool for Go | a month ago |
| [go-trylock](https://github.com/subchen/go-trylock) | 23 | TryLock support on read-write lock for Golang | 8 months ago |
| [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) | 23 | A sync.WaitGroup with error handling and concurrency control | 2 years ago |
| [stl](https://github.com/ssgreg/stl) | 21 | Software Transactional Locks | a year ago |
| [channelify](https://github.com/ddelizia/channelify) | 15 | Make functions return a channel for parallel processing via go routines. | a year ago |
| [gowl](https://github.com/hamed-yousefi/gowl) | 12 | Gowl is a process management and process monitoring tool at once. An infinite worker pool gives you the ability to control the pool and processes and monitor their status. | 6 months ago |
| [conexec](https://github.com/ITcathyh/conexec) | 11 | A concurrent toolkit to help execute funcs concurrently in an efficient and safe way. It supports specifying the overall timeout to avoid blocking. | 2 years ago |
| [queue](https://github.com/AnikHasibul/queue) | 10 | package queue gives you a queue group accessibility. Helps you to limit goroutines, wait for the end of the all goroutines and much more. | 3 years ago |
| [execpool](https://github.com/hexdigest/execpool) | 7 | A pool that spins up a given number of processes in advance and attaches stdin and stdout when needed. Very similar to FastCGI but works for any command. | 6 months ago |
| [hands](https://github.com/duanckham/hands) | 7 | Hands is a process controller used to control the execution and return strategies of multiple goroutines. | 2 years ago |
| [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) | 6 |  | a year ago |
| [go-tools](https://github.com/nikhilsaraf/go-tools) | 5 | A collection of tools for Golang | 3 years ago |
| [breaker](https://github.com/kamilsk/breaker) | 2 | 🚧 Flexible mechanism to make execution flow interruptible. | 6 months ago |


### [GUI](#GUI)
* Libraries for building GUI Applications.

#### [Toolkits](#Toolkits)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fyne](https://github.com/fyne-io/fyne) | 15378 | Cross platform GUI in Go inspired by Material Design | 4 hours ago |
| [webview](https://github.com/webview/webview) | 9348 | Tiny cross-platform webview library for C/C++/Golang. Uses WebKit (Gtk/Cocoa) and Edge (Windows) | 13 days ago |
| [qt](https://github.com/therecipe/qt) | 8998 | Qt binding for Go (Golang) with support for Windows / macOS / Linux / FreeBSD / Android / iOS / Sailfish OS / Raspberry Pi / AsteroidOS / Ubuntu Touch / JavaScript / WebAssembly | a year ago |
| [ui](https://github.com/andlabs/ui) | 8047 | Platform-native GUI library for Go. | 6 months ago |
| [walk](https://github.com/lxn/walk) | 5878 | A Windows GUI toolkit for the Go Programming Language | 6 months ago |
| [go-app](https://github.com/maxence-charriere/go-app) | 5783 | A package to build progressive web apps with Go programming language and WebAssembly. | 7 hours ago |
| [go-astilectron](https://github.com/asticode/go-astilectron) | 4187 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by Electron) | a month ago |
| [go-sciter](https://github.com/sciter-sdk/go-sciter) | 2303 | Golang bindings of Sciter: the Embeddable HTML/CSS/script engine for modern UI development | 2 months ago |
| [gotk3](https://github.com/gotk3/gotk3) | 1669 | Go bindings for GTK3 | 14 days ago |
| [gowd](https://github.com/dtylman/gowd) | 338 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by nwjs) | 3 years ago |


#### [Interaction](#Interaction)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [robotgo](https://github.com/go-vgo/robotgo) | 7146 | RobotGo, Go Native cross-platform GUI automation  @vcaesar | 18 minutes ago |
| [systray](https://github.com/getlantern/systray) | 2090 | a cross platfrom Go library to place an icon and menu in the notification area | 8 months ago |
| [gosx-notifier](https://github.com/deckarep/gosx-notifier) | 554 | gosx-notifier is a Go framework for sending desktop notifications to OSX 10.8 or higher | 2 years ago |
| [trayhost](https://github.com/shurcooL/trayhost) | 221 | Cross-platform Go library to place an icon in the host operating system's taskbar. | 2 years ago |
| [zenity](https://github.com/ncruces/zenity) | 212 | Zenity dialogs for Golang, Windows, macOS | 3 months ago |
| [go-appindicator](https://github.com/dawidd6/go-appindicator) | 17 | :traffic_light: Go bindings for libappindicator3 C library | a year ago |
| [activity-tracker](https://github.com/prashantgupta24/activity-tracker) | 13 | A library to notify about any (pluggable) activity on your machine, and let you take action as needed | 3 years ago |
| [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) | 10 | macOS Sleep/ Wake notifications in golang | 3 years ago |


### [Hardware](#Hardware)
* Libraries, tools, and tutorials for interacting with hardware.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [arduino-cli](https://github.com/arduino/arduino-cli) | 3198 | Arduino command line tool | 14 hours ago |
| [go-rpio](https://github.com/stianeikeland/go-rpio) | 1781 | :electric_plug: Raspberry Pi GPIO library for go-lang | a month ago |
| [ghw](https://github.com/jaypipes/ghw) | 1095 | Golang hardware discovery/inspection library | a month ago |
| [emgo](https://github.com/ziutek/emgo) | 952 | Emgo: Bare metal Go (language for programming embedded systems) | a month ago |
| [sysinfo](https://github.com/zcalusic/sysinfo) | 309 | Sysinfo is a Go library providing Linux OS / kernel / hardware system information. | 3 months ago |
| [goroslib](https://github.com/aler9/goroslib) | 151 | ROS client library for the Go programming language | 20 days ago |
| [go-osc](https://github.com/hypebeast/go-osc) | 139 | Open Sound Control (OSC) library for Golang. Implemented in pure Go. | 5 months ago |
| [joystick](https://github.com/0xcafed00d/joystick) | 29 | Go Joystick API | 2 years ago |


### [Images](#Images)
* Libraries for manipulating images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocv](https://github.com/hybridgroup/gocv) | 4558 | Go package for computer vision using OpenCV 4 and beyond. | 6 days ago |
| [imaginary](https://github.com/h2non/imaginary) | 4143 | Fast, simple, scalable, Docker-ready HTTP microservice for high-level image processing | 3 days ago |
| [imaging](https://github.com/disintegration/imaging) | 4062 | Imaging is a simple image processing package for Go | a year ago |
| [bild](https://github.com/anthonynsimon/bild) | 3460 | Image processing algorithms in pure Go | a month ago |
| [gg](https://github.com/fogleman/gg) | 3218 | Go Graphics - 2D rendering in Go with a simple API. | 2 months ago |
| [ln](https://github.com/fogleman/ln) | 3022 | 3D line art engine. | 2 years ago |
| [resize](https://github.com/nfnt/resize) | 2773 | Pure golang image resizing  | a year ago |
| [pt](https://github.com/fogleman/pt) | 1985 | A path tracer written in Go. | 3 years ago |
| [svgo](https://github.com/ajstarks/svgo) | 1792 | Go Language Library for SVG generation | 3 months ago |
| [bimg](https://github.com/h2non/bimg) | 1764 | Go package for fast high-level image processing powered by libvips C library | 13 hours ago |
| [picfit](https://github.com/thoas/picfit) | 1600 | An image resizing server written in Go | 4 months ago |
| [smartcrop](https://github.com/muesli/smartcrop) | 1571 | smartcrop finds good image crops for arbitrary crop sizes | 8 months ago |
| [gift](https://github.com/disintegration/gift) | 1491 | Go Image Filtering Toolkit | a year ago |
| [imagick](https://github.com/gographics/imagick) | 1383 | Go binding to ImageMagick's MagickWand C API | 4 months ago |
| [gowitness](https://github.com/sensepost/gowitness) | 1337 | 🔍 gowitness - a golang, web screenshot utility using Chrome Headless | 3 months ago |
| [go-opencv](https://github.com/go-opencv/go-opencv) | 1256 | Go bindings for OpenCV / 2.x API in gocv / 1.x API in opencv | 3 years ago |
| [geopattern](https://github.com/pravj/geopattern) | 1158 | :triangular_ruler: Create beautiful generative image patterns from a string in golang. | 3 years ago |
| [stegify](https://github.com/DimitarPetrov/stegify) | 974 | 🔍 Go tool for LSB steganography, capable of hiding any file within an image. | 2 years ago |
| [canvas](https://github.com/tdewolff/canvas) | 869 | Cairo in Go: vector to raster, SVG, PDF, EPS, WASM, OpenGL, Gio, etc. | 4 days ago |
| [image2ascii](https://github.com/qeesung/image2ascii) | 621 | :foggy: Convert image to ASCII | 5 months ago |
| [govips](https://github.com/davidbyttow/govips) | 611 | A lightning fast image processing and resizing library for Go | 2 days ago |
| [draft](https://github.com/lucasepe/draft) | 517 | Generate High Level Cloud Architecture diagrams using YAML syntax. | 4 months ago |
| [govatar](https://github.com/o1egl/govatar) | 475 | Avatar generation library for GO language | 10 months ago |
| [goimagehash](https://github.com/corona10/goimagehash) | 458 | Go Perceptual image hashing package | a year ago |
| [mort](https://github.com/aldor007/mort) | 443 | Storage and image processing server written in Go | 2 months ago |
| [go-nude](https://github.com/koyachi/go-nude) | 339 | Nudity detection with Go. | 3 years ago |
| [rez](https://github.com/bamiaux/rez) | 202 | Image resizing in pure Go and SIMD | 4 years ago |
| [darkroom](https://github.com/gojek/darkroom) | 180 |  | 6 months ago |
| [mergi](https://github.com/noelyahan/mergi) | 159 | go library for image programming (merge, crop, resize, watermark, animate, ease, transit) | 2 years ago |
| [gltf](https://github.com/qmuntal/gltf) | 143 | :eyeglasses: Go library for [d]encoding glTF 2.0 files | 7 hours ago |
| [img](https://github.com/hawx/img) | 137 | A selection of image manipulation tools | 7 years ago |
| [steganography](https://github.com/auyer/steganography) | 123 | Pure Golang Library that allows simple LSB steganography on images | 5 months ago |
| [go-cairo](https://github.com/ungerik/go-cairo) | 116 | Go binding for the cairo graphics library | 10 months ago |
| [cameron](https://github.com/aofei/cameron) | 80 | An avatar generator for Go. | 2 months ago |
| [go-gd](https://github.com/bolknote/go-gd) | 52 | Go bingings for GD (http://www.boutell.com/gd/) | 4 years ago |
| [gridder](https://github.com/shomali11/gridder) | 49 | A Grid based 2D Graphics library | 3 months ago |
| [go-webp](https://github.com/kolesa-team/go-webp) | 41 | Simple and fast webp library for golang | 4 months ago |
| [goimghdr](https://github.com/corona10/goimghdr) | 37 | The imghdr module determines the type of image contained in a file for go | 3 years ago |
| [webp-server](https://github.com/mehdipourfar/webp-server) | 31 | Simple and minimal image server capable of storing, resizing, converting and caching images. | a year ago |
| [tga](https://github.com/ftrvxmtrx/tga) | 28 | Go package for decoding and encoding TARGA image format | 7 years ago |
| [go-webcolors](https://github.com/jyotiska/go-webcolors) | 24 | Port of webcolors library from Python to Go | 6 years ago |
| [mpo](https://github.com/donatj/mpo) | 7 | JPEG-MPO Decoder / Converter Library and CLI Tool | 2 years ago |
| [scout](https://github.com/jonoton/scout) | 1 | Scout is a standalone open source software solution for DIY video security. | 3 months ago |


### [IoT -> Internet of Things](#IoT)
* Libraries for programming devices of the IoT.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gobot](https://github.com/hybridgroup/gobot) | 7533 | Golang framework for robotics, drones, and the Internet of Things (IoT) | 2 months ago |
| [flogo](https://github.com/TIBCOSoftware/flogo) | 1899 | Project Flogo is an open source ecosystem of opinionated  event-driven capabilities to simplify building efficient & modern serverless functions, microservices & edge apps. | a year ago |
| [mainflux](https://github.com/mainflux/mainflux) | 1655 | Industrial IoT Messaging and Device Management Platform | 5 hours ago |
| [gatt](https://github.com/paypal/gatt) | 1004 | Gatt is a Go package for building Bluetooth Low Energy peripherals | a year ago |
| [heedy](https://github.com/heedy/heedy) | 316 | An aggregator for personal metrics, and an extensible analysis engine | 2 days ago |
| [devices](https://github.com/goiot/devices) | 249 | Suite of libraries for IoT devices (written in Go), experimental for x/exp/io | 6 years ago |
| [sensorbee](https://github.com/sensorbee/sensorbee) | 208 | Lightweight stream processing engine for IoT | 2 years ago |
| [huego](https://github.com/amimof/huego) | 194 | An extensive Philips Hue client library for Go with an emphasis on simplicity | a month ago |
| [iot](https://github.com/vaelen/iot) | 54 | A Go client for Google IoT Core | 2 years ago |
| [eywa](https://github.com/xcodersun/eywa) | 50 | Make IoT a lot more fun with data.  | 5 years ago |


### [Job Scheduler](#Job-Scheduler)
* Libraries for scheduling jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocron](https://github.com/jasonlvhit/gocron) | 2822 | A Golang Job Scheduling Package. | 5 months ago |
| [gocron](https://github.com/go-co-op/gocron) | 1483 | Easy and fluent Go cron scheduling. This is a fork from https://github.com/jasonlvhit/gocron | 13 days ago |
| [jobrunner](https://github.com/bamzi/jobrunner) | 897 | Framework for performing work asynchronously, outside of the request flow | a year ago |
| [gron](https://github.com/roylee0704/gron) | 881 | gron, Cron Jobs in Go. | a year ago |
| [go-quartz](https://github.com/reugn/go-quartz) | 570 | Minimalist and zero-dependency scheduling library for Go | 17 hours ago |
| [jobs](https://github.com/albrow/jobs) | 485 | A persistent and flexible background jobs library for go. | 4 years ago |
| [scheduler](https://github.com/carlescere/scheduler) | 373 | Job scheduling made easy. | a year ago |
| [go-cron](https://github.com/rk/go-cron) | 208 | A simple Cron library for go that can execute closures or functions at varying intervals, from once a second to once a year on a specific date and time. Primarily for web applications and long running daemons. | 2 years ago |
| [gronx](https://github.com/adhocore/gronx) | 182 | Lightweight, fast and dependency-free Cron expression parser (due checker), task scheduler and/or daemon for Golang (tested on v1.13 and above) and standalone usage | 3 months ago |
| [clockwerk](https://github.com/onatm/clockwerk) | 115 | Job Scheduling Library | 2 years ago |
| [leprechaun](https://github.com/kilgaloon/leprechaun) | 84 | You had one job, or more then one, which can be done in steps | 2 months ago |
| [tasks](https://github.com/madflojo/tasks) | 68 | Package tasks is an easy to use in-process scheduler for recurring tasks in Go | 9 months ago |
| [sched](https://github.com/romshark/sched) | 21 | A job scheduler for Go with the ability to fast-forward time. | 6 months ago |
| [cronticker](https://github.com/krayzpipes/cronticker) | 1 | Golang ticker that works with Cron scheduling. | a year ago |


### [JSON](#JSON)
* Libraries for working with JSON.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gjson](https://github.com/tidwall/gjson) | 9576 | Get JSON values quickly - JSON parser for Go | 14 days ago |
| [gojson](https://github.com/ChimeraCoder/gojson) | 2450 | Automatically generate Go (golang) struct definitions from example JSON | 5 months ago |
| [fastjson](https://github.com/valyala/fastjson) | 1408 | Fast JSON parser and validator for Go. No custom structs, no code generation, no reflection | 6 months ago |
| [ojg](https://github.com/ohler55/ojg) | 448 | Optimized JSON for Go | 14 days ago |
| [kazaam](https://github.com/qntfy/kazaam) | 215 | Arbitrary transformations of JSON in Golang | 6 months ago |
| [gojq](https://github.com/elgs/gojq) | 178 | JSON query in Golang | a year ago |
| [jsondiff](https://github.com/wI2L/jsondiff) | 141 | Compute the diff between two JSON documents as a series of RFC6902 (JSON Patch) operations | 4 months ago |
| [jettison](https://github.com/wI2L/jettison) | 114 | Highly configurable, fast JSON encoder for Go | 20 days ago |
| [jsongo](https://github.com/ricardolonga/jsongo) | 98 | Fluent API to make it easier to create Json objects. | 3 months ago |
| [gjo](https://github.com/skanehira/gjo) | 97 | Small utility to create JSON objects | 9 months ago |
| [json2go](https://github.com/m-zajac/json2go) | 94 | Create go type representation from json | a month ago |
| [ajson](https://github.com/spyzhov/ajson) | 92 | Abstract JSON for Golang with JSONPath support  | 12 days ago |
| [jaydiff](https://github.com/yazgazan/jaydiff) | 83 | A JSON diff utility | a year ago |
| [jsonf](https://github.com/miolini/jsonf) | 62 | Console JSON formatter with query feature | a year ago |
| [ujson](https://github.com/olvrng/ujson) | 52 | µjson - A fast and minimal JSON parser and transformer that works on unstructured JSON | 5 months ago |
| [go-respond](https://github.com/nicklaw5/go-respond) | 43 | A Go package for handling common HTTP JSON responses. | 4 months ago |
| [mp](https://github.com/sanbornm/mp) | 43 | Simple Email Parser | 6 years ago |
| [jsoncolor](https://github.com/neilotoole/jsoncolor) | 26 | Colorized JSON output for Go | 3 months ago |
| [vjson](https://github.com/miladibra10/vjson) | 23 | vjson is a golang package that helps to validate JSON objects | 2 months ago |
| [ask](https://github.com/simonnilsson/ask) | 13 | A Go package that provides a simple way of accessing nested properties in maps and slices. | a year ago |
| [go-jsonerror](https://github.com/ddymko/go-jsonerror) | 10 | Small package which wraps error responses to follow jsonapi.org | 2 years ago |
| [dynjson](https://github.com/cocoonspace/dynjson) | 9 | Client-customizable JSON formats for dynamic APIs | 3 months ago |
| [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) | 9 | Go bindings based on the JSON API errors reference | 5 years ago |
| [jsonhal](https://github.com/RichardKnop/jsonhal) | 9 | A simple Go package to make custom structs marshal into HAL compatible JSON responses. | 2 years ago |
| [mapslice-json](https://github.com/ake-persson/mapslice-json) | 8 | Go MapSlice for ordered marshal/ unmarshal of maps in JSON | 6 months ago |
| [epoch](https://github.com/vtopc/epoch) | 7 | Contains primitives for marshaling/unmarshaling Unix timestamp/epoch to/from built-in time.Time type in JSON | 9 months ago |
| [ej](https://github.com/lucassscaravelli/ej) | 6 | Write and read JSON from different sources in one line | 2 years ago |
| [jsonic](https://github.com/sinhashubham95/jsonic) | 5 | All you need with JSON | a year ago |
| [jzon](https://github.com/zerosnake0/jzon) | 5 | A golang json library inspired by jsoniter | 10 months ago |
| [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) | 1 | The simple JSON parser with validation by condition | 3 months ago |


### [Logging](#Logging)
* Libraries for generating and working with log files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kit](https://github.com/go-kit/kit) | 22114 | A standard library for microservices. | 2 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 19620 | Structured, pluggable logging for Go. | 2 months ago |
| [logrus](https://github.com/sirupsen/logrus) | 19620 | Structured, pluggable logging for Go. | 2 months ago |
| [logrus](https://github.com/sirupsen/logrus) | 19620 | Structured, pluggable logging for Go. | 2 months ago |
| [zap](https://github.com/uber-go/zap) | 14598 | Blazing fast, structured, leveled logging in Go. | 5 hours ago |
| [debug](https://github.com/debug-js/debug) | 9943 | A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers | an hour ago |
| [zerolog](https://github.com/rs/zerolog) | 5742 | Zero Allocation JSON Logger | 4 days ago |
| [go-spew](https://github.com/davecgh/go-spew) | 4814 | Implements a deep pretty printer for Go data structures to aid in debugging | 19 days ago |
| [glog](https://github.com/golang/glog) | 3084 | Leveled execution logs for Go | 5 months ago |
| [lumberjack](https://github.com/natefinch/lumberjack) | 3018 | lumberjack is a log rolling package for Go | 5 months ago |
| [tail](https://github.com/hpcloud/tail) | 2248 | Go package for reading from continously updated files (tail -f) | 6 months ago |
| [seelog](https://github.com/cihub/seelog) | 1580 | Seelog is a native Go logging library that provides flexible asynchronous dispatching, filtering, and formatting. | 3 years ago |
| [log](https://github.com/apex/log) | 1194 | Structured logging package for Go. | 2 months ago |
| [log15](https://github.com/inconshreveable/log15) | 1035 | Structured, composable logging for Go | 2 months ago |
| [log](https://github.com/phuslu/log) | 412 | Structured Logging Made Easy | 2 months ago |
| [onelog](https://github.com/francoispqt/onelog) | 401 | Dead simple, super fast, zero allocation and modular logger for Golang | 3 years ago |
| [logxi](https://github.com/mgutz/logxi) | 349 | A 12-factor app logger built for performance and happy development | 2 years ago |
| [logutils](https://github.com/hashicorp/logutils) | 304 | Utilities for slightly better logging in Go (Golang). | 2 months ago |
| [log](https://github.com/go-playground/log) | 276 | :green_book: Simple, configurable and scalable Structured Logging for Go. | 2 years ago |
| [go-logger](https://github.com/apsdehal/go-logger) | 271 | Simple logger for Go programs. Allows custom formats for messages. | 3 years ago |
| [httpretty](https://github.com/henvic/httpretty) | 246 | Package httpretty prints the HTTP requests you make with Go pretty on your terminal. | a year ago |
| [sqldb-logger](https://github.com/simukti/sqldb-logger) | 202 | A logger for Go SQL database driver without modifying existing *sql.DB stdlib usage. | 8 months ago |
| [rollingwriter](https://github.com/arthurkiller/rollingwriter) | 183 | Rolling writer is an IO util for auto rolling write in go. | a month ago |
| [logger](https://github.com/azer/logger) | 148 | Minimalistic logging library for Go. | 2 months ago |
| [logur](https://github.com/logur/logur) | 148 | Logur is an opinionated collection of logging best practices | a year ago |
| [glg](https://github.com/kpango/glg) | 136 | Simple and blazing fast lockfree logging library for golang | 15 days ago |
| [xlog](https://github.com/rs/xlog) | 135 | xlog is a logger for net/context aware HTTP applications | a year ago |
| [ozzo-log](https://github.com/go-ozzo/ozzo-log) | 118 | A Go (golang) package providing high-performance asynchronous logging, message filtering by severity and category, and multiple message targets. | a year ago |
| [logvoyage](https://github.com/firstrow/logvoyage) | 89 | LogVoyage - logging SaaS written in GoLang | 5 years ago |
| [go-cronowriter](https://github.com/utahta/go-cronowriter) | 46 | Time based rotating file writer | 10 months ago |
| [log](https://github.com/alexcesaro/log) | 45 | Logging packages for Go | 6 years ago |
| [gologger](https://github.com/sadlil/gologger) | 39 | The Simplest and worst logging library ever written | 4 years ago |
| [go-log](https://github.com/ian-kent/go-log) | 38 | A logger, for Go | 4 years ago |
| [logex](https://github.com/chzyer/logex) | 38 | An golang log lib, supports tracking and level, wrap by standard log lib | 16 days ago |
| [gone](https://github.com/One-com/gone) | 36 | Golang packages for writing small daemons and servers. | 8 months ago |
| [noodlog](https://github.com/gyozatech/noodlog) | 35 | 🍜 Parametrized JSON logging library in Golang which lets you obfuscate sensitive data and marshal any kind of content. | 3 months ago |
| [go-log](https://github.com/siddontang/go-log) | 29 | a golang log lib supports level and multi handlers | 3 years ago |
| [journald](https://github.com/ssgreg/journald) | 29 | Go implementation of systemd Journal's native API for logging | 10 months ago |
| [logrusly](https://github.com/sebest/logrusly) | 27 | Loggly Hooks for GO Logrus logger | 5 months ago |
| [distillog](https://github.com/amoghe/distillog) | 25 | Logging, distilled | 3 years ago |
| [log](https://github.com/teris-io/log) | 24 | Structured log interface | 4 years ago |
| [mlog](https://github.com/jbrodriguez/mlog) | 24 | A simple logging module for go, with a rotating file feature and console logging. | 3 years ago |
| [gomol](https://github.com/aphistic/gomol) | 18 | Gomol is a library for structured, multiple-output logging for Go with extensible logging outputs | 3 years ago |
| [zkits-logger](https://github.com/edoger/zkits-logger) | 15 | A powerful zero-dependency json logger. | 11 days ago |
| [glo](https://github.com/lajosbencz/glo) | 14 | Logging library for Golang | 3 years ago |
| [logrusiowriter](https://github.com/cabify/logrusiowriter) | 13 | io.Writer implementation using logrus logger | a year ago |
| [go-log](https://github.com/subchen/go-log) | 11 | Simple and configurable Logging in Go, with level, formatters and writers | 4 years ago |
| [logmatic](https://github.com/mborders/logmatic) | 11 | Colorized logger for Golang with dynamic log level configuration | a year ago |
| [log](https://github.com/aerogo/log) | 9 | :memo: Logging with multiple output targets. | 2 years ago |
| [logdump](https://github.com/ewwwwwqm/logdump) | 9 | Package for multi-level logging | 4 years ago |
| [logo](https://github.com/mbndr/logo) | 9 | Golang logger to different configurable writers. | a year ago |
| [go-log](https://github.com/pieterclaerhout/go-log) | 8 | A logging library with strack traces, object dumping and optional timestamps | 2 years ago |
| [xlog](https://github.com/xfxdev/xlog) | 6 | plugin architecture and flexible log system for golang | 3 years ago |
| [kemba](https://github.com/clok/kemba) | 5 | A tiny debug logging tool. Ideal for CLI tools and command applications. Inspired by https://github.com/visionmedia/debug | 22 days ago |
| [yell](https://github.com/jfcg/yell) | 0 | Yet another minimalist logging library | 5 months ago |


### [Machine Learning](#Machine-Learning)
* Libraries for Machine Learning.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [golearn](https://github.com/sjwhitworth/golearn) | 8158 | Machine Learning for Go | 3 months ago |
| [gorse](https://github.com/zhenghaoz/gorse) | 5102 | An open source recommender system service written in Go | 6 days ago |
| [gorgonia](https://github.com/gorgonia/gorgonia) | 4335 | Gorgonia is a library that helps facilitate machine learning in Go. | 22 days ago |
| [m2cgen](https://github.com/BayesWitnesses/m2cgen) | 1977 | Transform ML models into a native code (Java, C, Python, Go, JavaScript, Visual Basic, C#, R, PowerShell, PHP, Dart, Haskell, Ruby, F#, Rust) with zero dependencies | 9 hours ago |
| [tfgo](https://github.com/galeone/tfgo) | 1865 | Tensorflow + Go, the gopher way | 4 months ago |
| [gosseract](https://github.com/otiai10/gosseract) | 1633 | Go package for OCR (Optical Character Recognition), by using Tesseract C++ library | a month ago |
| [goml](https://github.com/cdipaolo/goml) | 1295 | On-line Machine Learning in Go (and so much more) | 2 months ago |
| [eaopt](https://github.com/MaxHalford/eaopt) | 768 | :four_leaf_clover: Evolutionary optimization library for Go (genetic algorithm, partical swarm optimization, differential evolution) | 9 months ago |
| [bayesian](https://github.com/jbrukh/bayesian) | 721 | Naive Bayesian Classification for Golang. | a year ago |
| [CloudForest](https://github.com/ryanbressler/CloudForest) | 699 | Ensembles of decision trees in go/golang. | a year ago |
| [gobrain](https://github.com/goml/gobrain) | 502 | Neural Networks written in go | a year ago |
| [ocrserver](https://github.com/otiai10/ocrserver) | 451 | A simple OCR API server, seriously easy to be deployed by Docker, on Heroku as well | 5 months ago |
| [onnx-go](https://github.com/owulveryck/onnx-go) | 367 | onnx-go gives the ability to import a pre-trained neural network within Go without being linked to a framework or library. | 3 months ago |
| [go-deep](https://github.com/patrikeh/go-deep) | 337 | Artificial Neural Network | a month ago |
| [regommend](https://github.com/muesli/regommend) | 298 | Recommendation engine for Go | 2 years ago |
| [goptuna](https://github.com/c-bata/goptuna) | 196 | A hyperparameter optimization framework, inspired by Optuna. | 3 days ago |
| [go-galib](https://github.com/thoj/go-galib) | 187 | Genetic Algorithms library written in Go / golang | 6 years ago |
| [goRecommend](https://github.com/timkaye11/goRecommend) | 180 | Collaborative Filtering (CF) Algorithms in Go!  | 7 years ago |
| [goga](https://github.com/tomcraven/goga) | 147 | Golang Genetic Algorithm | 18 days ago |
| [shield](https://github.com/eaigner/shield) | 147 | Bayesian text classifier with flexible tokenizers and storage backends for Go | 2 years ago |
| [go-fann](https://github.com/vksnk/go-fann) | 105 | Go bindings for FANN, library for artificial neural networks | 7 years ago |
| [goscore](https://github.com/asafschers/goscore) | 72 | Go Scoring API for PMML | 2 years ago |
| [gonet](https://github.com/dathoangnd/gonet) | 70 | Neural Network for Go. | 2 years ago |
| [go-featureprocessing](https://github.com/nikolaydubina/go-featureprocessing) | 68 | 🔥 Fast, simple sklearn-like feature processing for Go | 5 days ago |
| [libsvm](https://github.com/datastream/libsvm) | 68 | libsvm go version | 6 years ago |
| [neural-go](https://github.com/schuyler/neural-go) | 61 | A multilayer perceptron network implemented in Go, with training via backpropagation. | a year ago |
| [neat](https://github.com/jinyeom/neat) | 60 | NEAT (NeuroEvolution of Augmenting Topologies) implemented in Go | 4 years ago |
| [go-pr](https://github.com/daviddengcn/go-pr) | 59 | Pattern recognition package in Go lang. | 9 years ago |
| [fonet](https://github.com/Fontinalis/fonet) | 51 | fonet is a deep neural network package for Go. | 7 months ago |
| [golinear](https://github.com/danieldk/golinear) | 43 | liblinear bindings for Go | 3 years ago |
| [Varis](https://github.com/Xamber/Varis) | 40 | Golang Neural Network  | 3 years ago |
| [godist](https://github.com/e-dard/godist) | 31 | Probability distributions and associated methods in Go | 7 years ago |
| [go-cluster](https://github.com/e-XpertSolutions/go-cluster) | 29 | k-modes and k-prototypes clustering algorithms implementation in Go | 3 years ago |
| [evoli](https://github.com/khezen/evoli) | 21 | Genetic Algorithm and Particle Swarm Optimization | 2 months ago |
| [gomind](https://github.com/surenderthakran/gomind) | 20 | A simplistic Neural Network Library in Go | 3 years ago |
| [randomForest](https://github.com/malaschitz/randomForest) | 18 | Random Forest implementation in golang | 3 months ago |
| [ddt](https://github.com/sgrodriguez/ddt) | 16 | Golang Dynamic Decision Tree | a year ago |
| [probab](https://github.com/ThePaw/probab) | 16 | Automatically exported from code.google.com/p/probab | 6 years ago |


### [Messaging](#Messaging)
* Libraries that implement messaging systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sarama](https://github.com/Shopify/sarama) | 8033 | Sarama is a Go library for Apache Kafka 0.8, and up. | 4 days ago |
| [gorush](https://github.com/appleboy/gorush) | 5988 | A push notification server written in Go (Golang). | 2 days ago |
| [machinery](https://github.com/RichardKnop/machinery) | 5888 | Machinery is an asynchronous task queue/job queue based on distributed message passing. | 4 days ago |
| [centrifugo](https://github.com/centrifugal/centrifugo) | 5720 | Scalable real-time messaging server in a language-agnostic way. Set up once and forever. | 11 hours ago |
| [go-socket.io](https://github.com/googollee/go-socket.io) | 4443 | socket.io library for golang, a realtime application framework. | 13 days ago |
| [benthos](https://github.com/Jeffail/benthos) | 3875 | Fancy stream processing made operationally mundane | 5 hours ago |
| [nats.go](https://github.com/nats-io/nats.go) | 3722 | Golang client for NATS, the cloud native messaging system. | 3 days ago |
| [confluent-kafka-go](https://github.com/confluentinc/confluent-kafka-go) | 3082 | Confluent's Apache Kafka Golang client | 5 days ago |
| [mercure](https://github.com/dunglas/mercure) | 2628 | Server-sent live updates: protocol and reference implementation | 13 days ago |
| [apns2](https://github.com/sideshow/apns2) | 2577 | ⚡ HTTP/2 Apple Push Notification Service (APNs) push provider for Go — Send push notifications to iOS, tvOS, Safari and OSX apps, using the APNs HTTP/2 protocol. | 4 months ago |
| [asynq](https://github.com/hibiken/asynq) | 2450 | Simple, reliable, and efficient distributed task queue in Go | 5 days ago |
| [melody](https://github.com/olahol/melody) | 2323 | :notes: Minimalist websocket framework for Go | 8 months ago |
| [go-nsq](https://github.com/nsqio/go-nsq) | 2060 | The official Go package for NSQ | a month ago |
| [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) | 2019 | Golang push server cluster | 5 years ago |
| [uniqush-push](https://github.com/uniqush/uniqush-push) | 1296 | Uniqush is a free and open source software system which provides a unified push service for server side notification to apps on mobile devices. | 2 years ago |
| [Beaver](https://github.com/Clivern/Beaver) | 1295 | 💨 A real time messaging system to build a scalable in-app notifications, multiplayer games, chat apps in web and mobile apps. | a month ago |
| [EventBus](https://github.com/asaskevich/EventBus) | 1066 | [Go] Lightweight eventbus with async compatibility for Go | 7 months ago |
| [zmq4](https://github.com/pebbe/zmq4) | 953 | A Go interface to ZeroMQ version 4 | 4 months ago |
| [gollum](https://github.com/trivago/gollum) | 910 | An n:m message multiplexer written in Go | 6 months ago |
| [chanify](https://github.com/chanify/chanify) | 705 | Chanify is a safe and simple notification tools. This repository is command line tools for Chanify. | 3 months ago |
| [dbus](https://github.com/godbus/dbus) | 659 | Native Go bindings for D-Bus | 17 hours ago |
| [golongpoll](https://github.com/jcuga/golongpoll) | 587 | golang long polling library.  Makes web pub-sub easy via HTTP long-poll servers and clients :smiley: :coffee: :computer: | 8 months ago |
| [mangos](https://github.com/nanomsg/mangos) | 475 | mangos is a pure Golang implementation of nanomsg's "Scalablilty Protocols" | 20 days ago |
| [emitter](https://github.com/olebedev/emitter) | 415 | Emits events in Go way, with wildcard, predicates, cancellation possibilities and many other good wins | 2 years ago |
| [glue](https://github.com/desertbit/glue) | 393 | Glue - Robust Go and Javascript Socket Library (Alternative to Socket.io) | 2 years ago |
| [pubsub](https://github.com/cskr/pubsub) | 364 | A simple pubsub package for go. | a year ago |
| [bus](https://github.com/mustafaturan/bus) | 240 | 🔊Minimalist message bus implementation for internal communication with zero-allocation magic on Emit | 8 months ago |
| [message-bus](https://github.com/vardius/message-bus) | 203 | Go simple async message bus | a year ago |
| [rabtap](https://github.com/jandelgado/rabtap) | 201 | RabbitMQ wire tap and swiss army knife | a month ago |
| [amqp091-go](https://github.com/rabbitmq/amqp091-go) | 191 | An AMQP 0-9-1 Go client maintained by the RabbitMQ team. Originally by @streadway: `streadway/amqp` | a month ago |
| [guble](https://github.com/smancke/guble) | 150 | websocket based messaging server written in golang | 4 years ago |
| [zmq3](https://github.com/pebbe/zmq3) | 131 | A Go interface to ZeroMQ version 3 | 10 months ago |
| [hub](https://github.com/leandro-lugaresi/hub) | 113 | :incoming_envelope: A fast Message/Event Hub using publish/subscribe pattern with support for topics like* rabbitMQ exchanges for Go applications | a year ago |
| [oplog](https://github.com/dailymotion/oplog) | 110 | A generic oplog/replication system for microservices | 6 years ago |
| [go-gcm](https://github.com/googlearchive/go-gcm) | 104 | GCM library for Go. | 2 years ago |
| [rabbus](https://github.com/rafaeljesus/rabbus) | 92 | A tiny wrapper over amqp exchanges and queues 🚌 ✨ | 2 years ago |
| [drone-line](https://github.com/appleboy/drone-line) | 75 | Sending line notifications using a binary, docker or Drone CI. | 7 months ago |
| [go-mq](https://github.com/cheshir/go-mq) | 73 | Declare AMQP entities like queues, producers, and consumers in a declarative way. Can be used to work with RabbitMQ. | a month ago |
| [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) | 70 | A tiny wrapper around NSQ topic and channel :rocket: | 4 years ago |
| [redisqueue](https://github.com/robinjoseph08/redisqueue) | 69 | redisqueue provides a producer and consumer of a queue that uses Redis streams | 6 months ago |
| [RapidMQ](https://github.com/sybrexsys/RapidMQ) | 63 | RapidMQ is a pure, extremely productive, lightweight and reliable library for managing of the local messages queue | 4 years ago |
| [commander](https://github.com/jeroenrinzema/commander) | 57 | Build event-driven and event streaming applications with ease | 8 months ago |
| [go-notify](https://github.com/TheCreeper/go-notify) | 56 | Package notify provides an implementation of the Gnome DBus Notifications Specification. | a year ago |
| [go-res](https://github.com/jirenius/go-res) | 53 | RES Service protocol library for Go | 4 months ago |
| [event](https://github.com/agoalofalife/event) | 44 | The implementation of the pattern observer | 4 years ago |
| [hare](https://github.com/leozz37/hare) | 32 | 🐇  Easy to use socket lib for Golang and CLI tool | 11 days ago |
| [ami](https://github.com/kak-tus/ami) | 21 | Go client to reliable queues based on Redis Cluster Streams | 2 years ago |
| [gosd](https://github.com/alexsniffin/gosd) | 18 | A library for scheduling when to dispatch a message to a channel | a year ago |
| [zmq2](https://github.com/pebbe/zmq2) | 18 | A Go interface to ZeroMQ version 2 | 10 months ago |
| [go-vitotrol](https://github.com/maxatome/go-vitotrol) | 16 | golang client library to Viessmann Vitotrol web service | a year ago |
| [rmqconn](https://github.com/sbabiv/rmqconn) | 15 | RabbitMQ Reconnection client | 2 years ago |
| [jazz](https://github.com/socifi/jazz) | 13 | Abstraction layer for simple rabbitMQ connection, messaging and administration | 3 years ago |
| [gaurun-client](https://github.com/osamingo/gaurun-client) | 9 | Gaurun Client written in Go | 5 months ago |


### [Microsoft Office](#Microsoft-Office)
* Office

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [unioffice](https://github.com/unidoc/unioffice) | 3140 | Pure go library for creating and processing Office Word (.docx), Excel (.xlsx) and Powerpoint (.pptx) documents | 2 months ago |


### [Microsoft Excel](#Microsoft-Excel)
* Libraries for working with Microsoft Excel.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [excelize](https://github.com/qax-os/excelize) | 10583 | Golang library for reading and writing Microsoft Excel™ (XLSX) files. | 8 hours ago |
| [xlsx](https://github.com/tealeg/xlsx) | 5213 | Go (golang) library for reading and writing XLSX files.  | 25 days ago |
| [xlsx](https://github.com/plandem/xlsx) | 146 | Fast and reliable way to work with Microsoft Excel™ [xlsx] files in Golang | a year ago |
| [go-excel](https://github.com/szyhf/go-excel) | 133 | A simple and light excel file reader to read a standard excel as a table faster , 一个轻量级的Excel数据读取库，用一种更`关系数据库`的方式解析Excel。 | a month ago |
| [goxlsxwriter](https://github.com/fterrag/goxlsxwriter) | 17 | Golang bindings for libxlsxwriter for writing XLSX files | 3 years ago |


### [Miscellaneous](#Miscellaneous)
* 

#### [Dependency Injection](#Dependency-Injection)
* Libraries for working with dependency injection.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fx](https://github.com/uber-go/fx) | 2427 | A dependency injection based application framework for Go. | a month ago |
| [dig](https://github.com/uber-go/dig) | 2291 | A reflection based dependency injection toolkit for Go. | 5 hours ago |
| [container](https://github.com/golobby/container) | 285 | A lightweight yet powerful IoC dependency injection container for Go projects | a month ago |
| [di](https://github.com/goioc/di) | 132 | Simple and yet powerful Dependency Injection for Go | a day ago |
| [dingo](https://github.com/i-love-flamingo/dingo) | 120 | Go Dependency Injection Framework | 8 months ago |
| [di](https://github.com/goava/di) | 117 | 🛠 A full-featured dependency injection container for go programming language. | a month ago |
| [alice](https://github.com/magic003/alice) | 43 | An additive dependency injection container for Golang. | 5 years ago |
| [wire](https://github.com/Fs02/wire) | 35 | Strict Runtime Dependency Injection for Golang | 5 months ago |
| [linker](https://github.com/logrange/linker) | 32 | Dependency Injection and Inversion of Control package | 2 years ago |
| [gocontainer](https://github.com/vardius/gocontainer) | 14 | Simple Dependency Injection Container | 2 years ago |
| [kinit](https://github.com/go-kata/kinit) | 5 | GO Dependency Injection | 7 months ago |
| [nject](https://github.com/BlueOwlOpenSource/nject) | 3 | Go dependency injection: nject & npoint | 5 months ago |


#### [Project Layout](#Project-Layout)
* Unofficial set of patterns for structuring projects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [project-layout](https://github.com/golang-standards/project-layout) | 28743 | Standard Go Project Layout | 14 days ago |
| [service](https://github.com/ardanlabs/service) | 2121 | Starter code for writing web services in Go using Kubernetes. | 2 days ago |
| [modern-go-application](https://github.com/sagikazarmark/modern-go-application) | 1124 | Modern Go Application example | 18 days ago |
| [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) | 492 | A Go project template | a year ago |
| [seed](https://github.com/golang-templates/seed) | 235 | Go application GitHub repository template. | 20 hours ago |
| [go-starter](https://github.com/allaboutapps/go-starter) | 115 | An opinionated production-ready SQL-/Swagger-first RESTful JSON API written in Go, highly integrated with VSCode DevContainers by allaboutapps. | 4 days ago |
| [go-todo-backend](https://github.com/Fs02/go-todo-backend) | 108 | Go Todo Backend example using modular project layout for product microservice. | 4 months ago |
| [scaffold](https://github.com/catchplay/scaffold) | 105 | Generate scaffold project layout for Go. | 3 years ago |
| [go-sample](https://github.com/zitryss/go-sample) | 96 | Go Project Sample Layout | 3 years ago |
| [gobase](https://github.com/wajox/gobase) | 16 | This is a simple skeleton for golang applications | 4 months ago |
| [go-project-layout](https://github.com/wangyoucao577/go-project-layout) | 12 | My understanding of how to structure a golang project.  | 8 months ago |
| [inizio](https://github.com/insidieux/inizio) | 9 | Golang project standard layout generator | 8 months ago |


#### [Strings](#Strings)
* Libraries for working with strings.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xstrings](https://github.com/huandu/xstrings) | 970 | Implements string functions widely used in other languages but absent in Go. | 21 days ago |
| [sttr](https://github.com/abhimanyu003/sttr) | 328 | cross-platform, cli app to perform various operations on string | 16 days ago |
| [strutil](https://github.com/ozgio/strutil) | 149 | String utilities for Go | 3 months ago |
| [stringy](https://github.com/gobeam/stringy) | 103 | Convert string to camel case, snake case, kebab case / slugify, custom delimiter, pad string, tease string and many other functionalities with help of by Stringy package. | 2 months ago |
| [bexp](https://github.com/mkungla/bexp) | 4 | Go implementation of Brace Expansion mechanism to generate arbitrary strings. | 3 months ago |


#### [Uncategorized](#Uncategorized)
* These libraries were placed here because none of the other categories seemed to fit.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopsutil](https://github.com/shirou/gopsutil) | 7208 | psutil for golang | 4 hours ago |
| [archiver](https://github.com/mholt/archiver) | 3422 | Easily create & extract archives, and compress & decompress files of various formats | 10 hours ago |
| [gofakeit](https://github.com/brianvoe/gofakeit) | 2219 | Random fake data generator written in go | 2 days ago |
| [gatus](https://github.com/TwiN/gatus) | 2090 | ⛑ Gatus - Automated service health dashboard | 11 hours ago |
| [oapi-codegen](https://github.com/deepmap/oapi-codegen) | 1568 | Generate Go client and server boilerplate from OpenAPI 3 specifications | 3 days ago |
| [gosms](https://github.com/haxpax/gosms) | 1361 | :mailbox_closed: Your own local SMS gateway in Go | a year ago |
| [base64Captcha](https://github.com/mojocn/base64Captcha) | 1315 | captcha of base64 image string | a month ago |
| [go-resiliency](https://github.com/eapache/go-resiliency) | 1306 | Resiliency patterns for golang | 4 months ago |
| [go-commons-pool](https://github.com/jolestar/go-commons-pool) | 999 | a generic object pool for golang | 8 months ago |
| [llvm](https://github.com/llir/llvm) | 833 | Library for interacting with LLVM IR in pure Go. | 19 days ago |
| [shortid](https://github.com/teris-io/shortid) | 729 | Super short, fully unique, non-sequential and URL friendly Ids | a year ago |
| [health](https://github.com/alexliesenfeld/health) | 479 | A simple and flexible health check library for Go. | a day ago |
| [health](https://github.com/dimiro1/health) | 425 | An easy to use, extensible health check library for Go applications. | 2 years ago |
| [stateless](https://github.com/qmuntal/stateless) | 392 | Go library for creating state machines | 4 months ago |
| [banner](https://github.com/dimiro1/banner) | 373 | An easy way to add useful startup banners into your Go applications | a year ago |
| [go-conv](https://github.com/cstockton/go-conv) | 373 | Fast conversions across various Go types with a simple API. | 5 months ago |
| [gountries](https://github.com/pariz/gountries) | 333 | Gountries provides: Countries (ISO-3166-1), Country Subdivisions(ISO-3166-2), Currencies (ISO 4217), Geo Coordinates(ISO-6709) as well as translations, country borders and other stuff exposed as struct data. | a month ago |
| [shoutrrr](https://github.com/containrrr/shoutrrr) | 282 | Notification library for gophers and their furry friends. | 13 days ago |
| [ffmt](https://github.com/go-ffmt/ffmt) | 247 | Golang beautify data display for Humans | 2 months ago |
| [lk](https://github.com/hyperboloide/lk) | 229 | Simple licensing library for golang. | 2 years ago |
| [antch](https://github.com/antchfx/antch) | 225 | Antch, a fast, powerful and extensible web crawling & scraping framework for Go | 2 years ago |
| [healthcheck](https://github.com/etherlabsio/healthcheck) | 209 | An simple, easily extensible and concurrent health-check library for Go services | 7 months ago |
| [battery](https://github.com/distatus/battery) | 198 | cross-platform, normalized battery information library | 13 days ago |
| [bitio](https://github.com/icza/bitio) | 178 | Optimized bit-level Reader and Writer for Go. | a month ago |
| [go-unarr](https://github.com/gen2brain/go-unarr) | 162 | Go bindings for unarr (decompression library for RAR, TAR, ZIP and 7z archives) | 3 months ago |
| [stats](https://github.com/go-playground/stats) | 158 | :chart_with_upwards_trend: Monitors Go MemStats + System stats such as Memory, Swap and CPU and sends via UDP anywhere you want for logging etc... | 5 years ago |
| [turtle](https://github.com/hackebrot/turtle) | 128 | Emojis for Go 😄🐢🚀 | 3 months ago |
| [gommit](https://github.com/antham/gommit) | 95 | Enforce git message commit consistency | a month ago |
| [gotoprom](https://github.com/cabify/gotoprom) | 92 | Type-safe Prometheus metrics builder library for golang | 2 years ago |
| [indigo](https://github.com/osamingo/indigo) | 91 | A distributed unique ID generator of using Sonyflake and encoded by Base58 | a year ago |
| [captcha](https://github.com/steambap/captcha) | 89 | :sunglasses:Package captcha provides an easy to use, unopinionated API for captcha generation | 5 days ago |
| [morse](https://github.com/alwindoss/morse) | 72 | Morse Code Library in Go | 4 months ago |
| [persian](https://github.com/mavihq/persian) | 61 | Some utilities for Persian language in Go (Golang) | 7 months ago |
| [faker](https://github.com/pioz/faker) | 56 | Random fake data and struct generator for Go. | 3 months ago |
| [pdfgen](https://github.com/hyperboloide/pdfgen) | 56 | HTTP service to generate PDF from Json requests | 4 years ago |
| [xkg](https://github.com/go-xkg/xkg) | 52 | User level X Keyboard Grabber | 7 years ago |
| [browscap_go](https://github.com/digitalcrab/browscap_go) | 39 | GoLang Library for Browser Capabilities Project | 4 months ago |
| [datacounter](https://github.com/miolini/datacounter) | 37 | Golang counters for readers/writers | 2 years ago |
| [autoflags](https://github.com/artyom/autoflags) | 36 | Populate go command line app flags from config struct | 8 months ago |
| [sandid](https://github.com/aofei/sandid) | 33 | Every grain of sand on Earth has its own ID. | 2 months ago |
| [url-shortener](https://github.com/pantrif/url-shortener) | 33 | A golang URL Shortener | 4 years ago |
| [gosh](https://github.com/osamingo/gosh) | 29 | Provide Go Statistics Handler, Struct, Measure Method | a year ago |
| [xdg](https://github.com/rkoesters/xdg) | 28 | FreeDesktop.org (xdg) Specs implemented in Go | 6 months ago |
| [metrics](https://github.com/pascaldekloe/metrics) | 22 | atomic measures + Prometheus exposition library | 10 months ago |
| [shellwords](https://github.com/Wing924/shellwords) | 16 | A Golang library to manipulate strings according to the word parsing rules of the UNIX Bourne shell. | 4 years ago |
| [anagent](https://github.com/mudler/anagent) | 13 | Minimalistic, pluggable Golang evloop/timer handler with dependency-injection | 3 years ago |
| [avgRating](https://github.com/kirillDanshin/avgRating) | 11 | Calculate average score and rating based on Wilson Score Equation | 4 years ago |
| [hostutils](https://github.com/Wing924/hostutils) | 10 | A golang library for packing and unpacking hosts list | 3 years ago |
| [numa](https://github.com/lrita/numa) | 6 | NUMA is a utility library, which is written in go. It help us to write some NUMA-AWARED code. | a year ago |
| [go-commandbus](https://github.com/lana/go-commandbus) | 4 | Simple command bus for GO | 2 years ago |
| [generators](https://github.com/azr/generators) | 4 | #golang generator | 5 years ago |
| [basexx](https://github.com/bobg/basexx) | 1 | Convert digit strings between arbitrary bases. | 3 months ago |


### [Natural Language Processing](#Natural-Language-Processing)
* Libraries for working with human languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jieba](https://github.com/fxsjy/jieba) | 27687 | 结巴中文分词 | 6 months ago |
| [vaderSentiment](https://github.com/cjhutto/vaderSentiment) | 3331 | VADER Sentiment Analysis. VADER (Valence Aware Dictionary and sEntiment Reasoner) is a lexicon and rule-based sentiment analysis tool that is specifically attuned to sentiments expressed in social media, and works well on texts from other domains.  | 7 days ago |
| [prose](https://github.com/jdkato/prose) | 2852 | :book: A Golang library for text processing, including tokenization, part-of-speech tagging, and named-entity extraction. | 4 months ago |
| [go-i18n](https://github.com/nicksnyder/go-i18n) | 1848 | Translate your Go program into multiple languages. | a month ago |
| [gojieba](https://github.com/yanyiwu/gojieba) | 1759 | "结巴"中文分词的Golang版本 | 2 days ago |
| [gse](https://github.com/go-ego/gse) | 1724 | Go efficient multilingual NLP and text segmentation; support english, chinese, japanese and other. Go 高性能多语言 NLP 和分词 | 8 days ago |
| [when](https://github.com/olebedev/when) | 1137 | A natural language date/time parser with pluggable rules | a month ago |
| [spago](https://github.com/nlpodyssey/spago) | 1075 | Self-contained Machine Learning and Natural Language Processing library in Go | a month ago |
| [go-pinyin](https://github.com/mozillazg/go-pinyin) | 1062 | 汉字转拼音 | a month ago |
| [kagome](https://github.com/ikawaha/kagome) | 598 | Self-contained Japanese Morphological Analyzer written in pure Go | 2 months ago |
| [whatlanggo](https://github.com/abadojack/whatlanggo) | 517 | Natural language detection library for Go | a year ago |
| [nlp](https://github.com/shixzie/nlp) | 376 | [UNMANTEINED] Extract values from strings and fill your structs with nlp. | 4 years ago |
| [nlp](https://github.com/james-bowman/nlp) | 351 | Selected Machine Learning algorithms for natural language processing and semantic analysis in Golang | 8 months ago |
| [sentences](https://github.com/neurosnap/sentences) | 315 | A multilingual command line sentence tokenizer in Golang | 7 months ago |
| [getlang](https://github.com/rylans/getlang) | 126 | Natural language detection package in pure Go | a year ago |
| [go-nlp](https://github.com/nuance/go-nlp) | 90 | Utilities for working with discrete probability distributions and other tools useful for doing NLP work | 10 years ago |
| [go-unidecode](https://github.com/mozillazg/go-unidecode) | 89 | ASCII transliterations of Unicode text. | 8 months ago |
| [RAKE.Go](https://github.com/afjoseph/RAKE.Go) | 86 | A Go port of the Rapid Automatic Keyword Extraction algorithm (RAKE) | 2 years ago |
| [gounidecode](https://github.com/fiam/gounidecode) | 73 | Unicode transliterator for #golang | 6 years ago |
| [segment](https://github.com/blevesearch/segment) | 69 | A Go library for performing Unicode Text Segmentation as described in Unicode Standard Annex #29 | a year ago |
| [textcat](https://github.com/pebbe/textcat) | 65 | A Go package for n-gram based text categorization, with support for utf-8 and raw text | a year ago |
| [go-stem](https://github.com/agonopol/go-stem) | 64 | Word Stemming in Go | 4 years ago |
| [MMSEGO](https://github.com/awsong/MMSEGO) | 59 | Chinese word splitting algorithm MMSEG in GO | 10 years ago |
| [stemmer](https://github.com/dchest/stemmer) | 50 | Stemmer packages for Go programming language. Includes English, German and Dutch stemmers. | 5 years ago |
| [go2vec](https://github.com/danieldk/go2vec) | 43 | Read and use word2vec vectors in Go | 3 years ago |
| [address](https://github.com/bojanz/address) | 42 | Address handling for Go. | 2 months ago |
| [porter2](https://github.com/zentures/porter2) | 41 | High Performance Porter2 Stemmer | a year ago |
| [petrovich](https://github.com/striker2000/petrovich) | 36 | Golang port of Petrovich - an inflector for Russian anthroponyms. | a year ago |
| [go-localize](https://github.com/m1/go-localize) | 29 | i18n (Internationalization and localization) engine written in Go, used for translating locale strings.  | 2 months ago |
| [snowball](https://github.com/goodsign/snowball) | 29 | Cgo binding for Snowball C library | 5 years ago |
| [mystem](https://github.com/dveselov/mystem) | 27 | CGo bindings to Yandex.Mystem | 5 years ago |
| [iuliia-go](https://github.com/mehanizm/iuliia-go) | 27 | Transliterate Cyrillic → Latin in every possible way | 7 months ago |
| [paicehusk](https://github.com/rookii/paicehusk) | 27 | Golang implementation of the Paice/Husk Stemming Algorithm | 8 years ago |
| [golibstemmer](https://github.com/rjohnsondev/golibstemmer) | 19 | Go bindings for the snowball libstemmer library including porter 2 | 8 years ago |
| [icu](https://github.com/goodsign/icu) | 19 | Cgo binding for icu4c library | 5 years ago |
| [govader](https://github.com/jonreiter/govader) | 17 | vader sentiment analysis in go | a year ago |
| [transliterator](https://github.com/alexsergivan/transliterator) | 17 | Golang text Transliterator (i.e München -> Muenchen) | 2 years ago |
| [gotokenizer](https://github.com/xujiajun/gotokenizer) | 13 | A tokenizer based on the dictionary and Bigram language models for Go. (Now only support chinese segmentation) | 3 years ago |
| [shamoji](https://github.com/osamingo/shamoji) | 12 | The shamoji (杓文字) is a word filtering package | a year ago |
| [detectlanguage-go](https://github.com/detectlanguage/detectlanguage-go) | 10 | Detect Language API Go Client | a year ago |
| [libtextcat](https://github.com/goodsign/libtextcat) | 10 | Cgo binding for libtextcat C library | 9 years ago |
| [porter](https://github.com/a2800276/porter) | 8 | porter stemmer | 8 years ago |
| [t](https://github.com/youthlin/t) | 8 | t: translation util for go, using GNU gettext | 2 months ago |
| [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) | 7 | 💬 Sentiment analyzer library using SentiWordnet in Go | 10 months ago |


### [Networking](#Networking)
* Libraries for working with various layers of the network.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fasthttp](https://github.com/valyala/fasthttp) | 16712 | Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http | 15 hours ago |
| [kcptun](https://github.com/xtaci/kcptun) | 12733 | A Stable & Secure Tunnel based on KCP with N:M multiplexing and FEC. Available for ARM, MIPS, 386 and AMD64。KCPプロトコルに基づく安全なトンネル。KCP 프로토콜을 기반으로 하는 보안 터널입니다。 | 11 days ago |
| [webrtc](https://github.com/pion/webrtc) | 8518 | Pure Go implementation of the WebRTC API | 3 days ago |
| [quic-go](https://github.com/lucas-clemente/quic-go) | 6176 | A QUIC implementation in pure go | 2 hours ago |
| [dns](https://github.com/miekg/dns) | 5990 | DNS library in Go | 13 hours ago |
| [gnet](https://github.com/panjf2000/gnet) | 5958 | 🚀 gnet is a high-performance, lightweight, non-blocking, event-driven networking framework written in pure Go./ gnet 是一个高性能、轻量级、非阻塞的事件驱动 Go 网络框架。 | 13 hours ago |
| [gopacket](https://github.com/google/gopacket) | 4591 | Provides packet processing capabilities for Go | a month ago |
| [httplab](https://github.com/qustavo/httplab) | 3760 | The interactive web server | 3 years ago |
| [kcp-go](https://github.com/xtaci/kcp-go) | 3191 |  A Crypto-Secure, Production-Grade Reliable-UDP Library for golang with FEC  | 3 months ago |
| [gobgp](https://github.com/osrg/gobgp) | 2379 | BGP implemented in the Go Programming Language | 5 days ago |
| [ssh](https://github.com/gliderlabs/ssh) | 2297 | Easy SSH servers in Golang | 4 days ago |
| [fortio](https://github.com/fortio/fortio) | 2229 | Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats. | 17 days ago |
| [water](https://github.com/songgao/water) | 1354 | A simple TUN/TAP library written in native Go. | 9 months ago |
| [gev](https://github.com/Allenxuxu/gev) | 1322 | 🚀Gev is a lightweight, fast non-blocking TCP network library / websocket server based on Reactor mode. Support custom protocols to quickly and easily build high-performance servers.  | a month ago |
| [go-getter](https://github.com/hashicorp/go-getter) | 1276 | Package for downloading things from a string URL using a variety of protocols. | 7 hours ago |
| [nff-go](https://github.com/intel-go/nff-go) | 1147 | NFF-Go -Network Function Framework for GO (former YANFF) | 4 months ago |
| [sftp](https://github.com/pkg/sftp) | 1081 | SFTP support for the go.crypto/ssh package | 5 days ago |
| [grab](https://github.com/cavaliergopher/grab) | 969 | A download manager package for Go | 3 days ago |
| [ftp](https://github.com/jlaffaye/ftp) | 873 | FTP client package for Go | a day ago |
| [mdns](https://github.com/hashicorp/mdns) | 837 | Simple mDNS client/server library in Golang | 7 days ago |
| [gosnmp](https://github.com/gosnmp/gosnmp) | 790 | An SNMP library written in Go | 4 days ago |
| [vssh](https://github.com/yahoo/vssh) | 763 | Go Library to Execute Commands Over SSH at Scale | a year ago |
| [cidranger](https://github.com/yl2chen/cidranger) | 656 | Fast IP to CIDR lookup in Golang | 2 months ago |
| [lhttp](https://github.com/fanux/lhttp) | 656 | go websocket, a better way to buid your IM server | 4 years ago |
| [gmqtt](https://github.com/DrmagicE/gmqtt) | 546 | Gmqtt is a flexible, high-performance MQTT broker library that fully implements the MQTT protocol V3.x and V5 in golang | 24 days ago |
| [peerdiscovery](https://github.com/schollz/peerdiscovery) | 519 | Pure-Go library for cross-platform local peer discovery using UDP multicast :woman: :repeat: :woman: | 20 days ago |
| [gotcp](https://github.com/gansidui/gotcp) | 486 | A Go package for quickly building tcp servers | 5 years ago |
| [stun](https://github.com/gortc/stun) | 476 | Fast RFC 5389 STUN implementation in go | 8 months ago |
| [go-stun](https://github.com/ccding/go-stun) | 465 | A go implementation of the STUN client (RFC 3489 and RFC 5389) | 9 months ago |
| [nbio](https://github.com/lesismal/nbio) | 442 | Pure Go 1000k+ connections solution, support tls/http1.x/websocket and basically compatible with net/http, with high-performance and low memory cost, non-blocking, event-driven, easy-to-use. | 4 days ago |
| [gopcap](https://github.com/akrennmair/gopcap) | 438 | A simple wrapper around libpcap for the Go programming language | 8 months ago |
| [raw](https://github.com/mdlayher/raw) | 412 | Package raw enables reading and writing data at the device driver level for a network interface.  MIT Licensed. | 2 months ago |
| [gaio](https://github.com/xtaci/gaio) | 410 | High performance async-io(proactor) networking for Golang。golangのための高性能非同期io(proactor)ネットワーキング | 4 months ago |
| [tcp_server](https://github.com/firstrow/tcp_server) | 405 | golang tcp server | 2 months ago |
| [winrm](https://github.com/masterzen/winrm) | 348 | Command-line tool and library for Windows remote command execution in Go | 11 days ago |
| [ftpserverlib](https://github.com/fclairamb/ftpserverlib) | 279 | golang ftp server library | 4 hours ago |
| [arp](https://github.com/mdlayher/arp) | 268 | Package arp implements the ARP protocol, as described in RFC 826. MIT Licensed. | 2 years ago |
| [buffstreams](https://github.com/StabbyCutyou/buffstreams) | 246 | A library to simplify writing applications using TCP sockets to stream protobuff messages | a year ago |
| [ethernet](https://github.com/mdlayher/ethernet) | 235 | Package ethernet implements marshaling and unmarshaling of IEEE 802.3 Ethernet II frames and IEEE 802.1Q VLAN tags. MIT Licensed. | 3 years ago |
| [easytcp](https://github.com/DarthPestilane/easytcp) | 228 | :sparkles: :rocket: EasyTCP is a light-weight TCP framework written in Go (Golang), built with message router. EasyTCP helps you build a TCP server easily fast and less painful. | a day ago |
| [gnxi](https://github.com/google/gnxi) | 199 | gNXI Tools - gRPC Network Management/Operations Interface Tools | 11 hours ago |
| [jazigo](https://github.com/udhos/jazigo) | 172 | Jazigo is a tool written in Go for retrieving configuration for multiple devices, similar to rancid, fetchconfig, oxidized, Sweet. | 2 years ago |
| [utp](https://github.com/anacrolix/utp) | 162 | Use anacrolix/go-libutp instead | a year ago |
| [canopus](https://github.com/zubairhamed/canopus) | 147 | CoAP Client/Server implementing RFC 7252 for the Go Language | 4 years ago |
| [sslb](https://github.com/eduardonunesp/sslb) | 134 | Golang Super Simple Load Balance | 2 years ago |
| [xtcp](https://github.com/xfxdev/xtcp) | 128 | A TCP Server Framework with graceful shutdown, custom protocol. | 2 years ago |
| [ether](https://github.com/songgao/ether) | 73 | A Go package for sending and receiving ethernet frames. Currently supporting Linux, Freebsd, and OS X. | 6 years ago |
| [dhcp6](https://github.com/mdlayher/dhcp6) | 71 | Package dhcp6 implements a DHCPv6 server, as described in RFC 3315. MIT Licensed. | 3 years ago |
| [iplib](https://github.com/c-robinson/iplib) | 65 | A library  for working with IP addresses and networks in Go | 2 months ago |
| [packet](https://github.com/aerogo/packet) | 61 | :package: Send network packets over a TCP or UDP connection. | 2 years ago |
| [go-powerdns](https://github.com/joeig/go-powerdns) | 49 | Go PowerDNS 4.x API Client | 5 days ago |
| [linkio](https://github.com/ian-kent/linkio) | 49 | Simulate network link speed | 4 years ago |
| [portproxy](https://github.com/aybabtme/portproxy) | 45 | TCP proxy, highjacks HTTP to allow CORS | 7 years ago |
| [panoptes-stream](https://github.com/yahoo/panoptes-stream) | 31 | A cloud native distributed streaming network telemetry. | 10 months ago |
| [graval](https://github.com/koofr/graval) | 27 | An experimental go FTP server framework | a year ago |
| [publicip](https://github.com/polera/publicip) | 24 | Go pkg for returning your public facing IP address. | 5 years ago |
| [golibwireshark](https://github.com/sunwxg/golibwireshark) | 22 |  | 4 years ago |
| [gohooks](https://github.com/averageflow/gohooks) | 14 | GoHooks make it easy to send and consume secured web-hooks from a Go application | 6 months ago |
| [goshark](https://github.com/sunwxg/goshark) | 14 |  | 4 years ago |
| [httpproxy](https://github.com/wzshiming/httpproxy) | 11 | HTTP proxy handler and dialer | 2 months ago |
| [llb](https://github.com/kirillDanshin/llb) | 11 |  | 6 years ago |
| [tspool](https://github.com/two/tspool) | 11 | tcp server pool | 3 years ago |


### [HTTP Clients](#HTTP-Clients)
* Libraries for making HTTP requests.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [resty](https://github.com/go-resty/resty) | 5493 | Simple HTTP and REST client library for Go | 21 days ago |
| [heimdall](https://github.com/gojek/heimdall) | 2155 | An enhanced HTTP client for Go | 2 days ago |
| [grequests](https://github.com/levigross/grequests) | 1849 | A Go "clone" of the great and famous Requests library | a year ago |
| [sling](https://github.com/dghubble/sling) | 1401 | A Go HTTP client library for creating and sending API requests | 2 months ago |
| [gentleman](https://github.com/h2non/gentleman) | 930 | Plugin-driven, extensible HTTP client toolkit for Go | a year ago |
| [pester](https://github.com/sethgrid/pester) | 565 | Go (golang) http calls with retries and backoff  | 2 years ago |
| [requests](https://github.com/carlmjohnson/requests) | 241 | HTTP requests for Gophers | 7 days ago |
| [request](https://github.com/monaco-io/request) | 157 | go request, go http client | 14 days ago |
| [rq](https://github.com/ddo/rq) | 38 | A nicer interface for golang stdlib HTTP client | 2 years ago |
| [go-http-client](https://github.com/bozd4g/go-http-client) | 32 | An enhanced http client for Golang | 8 months ago |
| [httpretry](https://github.com/ybbus/httpretry) | 15 | Enriches the standard go http client with retry functionality. | 2 years ago |
| [go-req](https://github.com/wenerme/go-req) | 12 | Declarative golang HTTP client | 4 months ago |
| [httpc](https://github.com/valord577/httpc) | 2 | A customizable and simple HTTP client library. Only depend on the stdlib HTTP client. | 2 months ago |


### [OpenGL](#OpenGL)
* Libraries for using OpenGL in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glfw](https://github.com/go-gl/glfw) | 1199 | Go bindings for GLFW 3 | a month ago |
| [gl](https://github.com/go-gl/gl) | 862 | Go bindings for OpenGL (generated via glow) | a month ago |
| [mathgl](https://github.com/go-gl/mathgl) | 404 | A pure Go 3D math library. | a year ago |
| [gl](https://github.com/goxjs/gl) | 154 | Go cross-platform OpenGL bindings. | a year ago |
| [glfw](https://github.com/goxjs/glfw) | 71 | Go cross-platform glfw library for creating an OpenGL context and receiving events. | 2 years ago |
| [go-glmatrix](https://github.com/technohippy/go-glmatrix) | 2 | go-glmatrix is a golang version of glMatrix, which is "designed to perform vector and matrix operations stupidly fast". | a year ago |


### [ORM](#ORM)
* Libraries that implement Object-Relational Mapping or datamapping techniques.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [beego](https://github.com/beego/beego) | 27545 | beego is an open-source, high-performance web framework for the Go programming language. | 13 hours ago |
| [gorm](https://github.com/go-gorm/gorm) | 26455 | The fantastic ORM library for Golang, aims to be developer friendly | 19 hours ago |
| [ent](https://github.com/ent/ent) | 9602 | An entity framework for Go | 7 hours ago |
| [pg](https://github.com/go-pg/pg) | 4952 | Golang ORM with focus on PostgreSQL features and performance | 13 days ago |
| [sqlboiler](https://github.com/volatiletech/sqlboiler) | 4560 | Generate a Go ORM tailored to your database schema. | a month ago |
| [gorp](https://github.com/go-gorp/gorp) | 3544 | Go Relational Persistence - an ORM-ish library for Go | 10 months ago |
| [db](https://github.com/upper/db) | 2869 | Data access layer for PostgreSQL, CockroachDB, MySQL, SQLite and MongoDB with ORM-like features. | 7 days ago |
| [gormt](https://github.com/xxjwxc/gormt) | 1631 | database to golang struct | a day ago |
| [reform](https://github.com/go-reform/reform) | 1215 | A better ORM for Go, based on non-empty interfaces and code generation. | 8 days ago |
| [pop](https://github.com/gobuffalo/pop) | 1157 | A Tasty Treat For All Your Database Needs | 7 hours ago |
| [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) | 687 | A flexible and powerful SQL string builder library plus a zero-config ORM. | a month ago |
| [go-queryset](https://github.com/jirfag/go-queryset) | 647 | 100% type-safe ORM for Go (Golang) with code generation and MySQL, PostgreSQL, Sqlite3, SQL Server support. GORM under the hood. | 6 months ago |
| [rel](https://github.com/go-rel/rel) | 466 | :gem: Modern ORM for Golang - Testable, Extendable and Crafted Into a Clean and Elegant API | 2 months ago |
| [zoom](https://github.com/albrow/zoom) | 283 | A blazing-fast datastore and querying engine for Go built on Redis. | 2 years ago |
| [grimoire](https://github.com/Fs02/grimoire) | 156 | Database access layer for golang | 3 months ago |
| [gosql](https://github.com/rushteam/gosql) | 150 | golang orm and sql builder | 7 months ago |
| [go-store](https://github.com/gosuri/go-store) | 106 | A simple and fast Redis backed key-value store library for Go | 5 years ago |
| [go-firestorm](https://github.com/jschoedt/go-firestorm) | 26 | Simple Go ORM for Google/Firebase Cloud Firestore | a month ago |
| [lore](https://github.com/abrahambotros/lore) | 10 | Light Object-Relational Environment (LORE) provides a simple and lightweight pseudo-ORM/pseudo-struct-mapping environment for Go | 4 years ago |
| [marlow](https://github.com/marlow/marlow) | 9 | persistence layer code generation for golang | a year ago |


### [Package Management](#Package-Management)
* 

#### [Official experimental tooling for package management](#Official-experimental-tooling-for-package-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dep](https://github.com/golang/dep) | 13094 | Go dependency management tool experiment (deprecated) | a year ago |


#### [Unofficial libraries for package and dependency management](#Official-libraries-for-package-and-dependency-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glide](https://github.com/Masterminds/glide) | 8144 | Package Management for Golang | a year ago |
| [godep](https://github.com/tools/godep) | 5605 | dependency tool for go | 4 years ago |
| [govendor](https://github.com/kardianos/govendor) | 4986 | Use Go Modules. | 2 years ago |
| [gopm](https://github.com/gpmgo/gopm) | 2492 | Go Package Manager (gopm) is a package manager and build tool for Go. | 2 years ago |
| [gom](https://github.com/mattn/gom) | 1396 | Go Manager - bundle for go | 2 years ago |
| [gpm](https://github.com/pote/gpm) | 1200 | Barebones dependency manager for Go. | 4 years ago |
| [goop](https://github.com/petejkim/goop) | 779 | A simple dependency manager for Go (golang), inspired by Bundler. | 6 years ago |
| [modgv](https://github.com/lucasepe/modgv) | 400 | Converts 'go mod graph' output into Graphviz's DOT language | a year ago |
| [nut](https://github.com/owenthereal/nut) | 238 | Vendor Go dependencies | 7 years ago |
| [johnny-deps](https://github.com/VividCortex/johnny-deps) | 212 | Barebones dependency manager for Go. | a year ago |
| [mvn-golang](https://github.com/raydac/mvn-golang) | 131 | maven plugin to automate GoSDK load and build of projects | a month ago |
| [VenGO](https://github.com/DamnWidget/VenGO) | 120 | Create and manage Isolated Virtual Environments for Go | 5 years ago |
| [gop](https://github.com/lunny/gop) | 48 | Moved to https://gitea.com/lunny/gop | 3 years ago |


### [Performance](#Performance)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jaeger](https://github.com/jaegertracing/jaeger) | 14961 | CNCF Jaeger, a Distributed Tracing Platform | 6 hours ago |
| [pixie](https://github.com/pixie-io/pixie) | 2711 | Instant Kubernetes-Native Application Observability | 4 minutes ago |
| [statsviz](https://github.com/arl/statsviz) | 1753 | :rocket: Instant live visualization of your Go application runtime statistics (GC, MemStats, etc.) in the browser | 3 days ago |
| [profile](https://github.com/pkg/profile) | 1644 | Simple profiling for Go | 2 months ago |
| [tracer](https://github.com/kamilsk/tracer) | 61 | 🧶 Dead simple, lightweight tracing. | 10 months ago |


### [Query Language](#Query-Language)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphql](https://github.com/graphql-go/graphql) | 8227 | An implementation of GraphQL for Go / Golang | 2 months ago |
| [gqlgen](https://github.com/99designs/gqlgen) | 6955 | go generate based graphql server library | 2 days ago |
| [graphql-go](https://github.com/graph-gophers/graphql-go) | 4015 | GraphQL server with a focus on ease of use | 3 days ago |
| [gojsonq](https://github.com/thedevsaddam/gojsonq) | 1800 | A simple Go package to Query over JSON/YAML/XML/CSV Data  | 5 months ago |
| [dasel](https://github.com/TomWright/dasel) | 1749 | Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package. | 4 days ago |
| [jsonql](https://github.com/elgs/jsonql) | 248 | JSON query expression library in Golang. | a year ago |
| [rql](https://github.com/a8m/rql) | 243 | Resource Query Language for REST | a month ago |
| [jsonslice](https://github.com/bhmj/jsonslice) | 59 | json slicer | 8 days ago |
| [graphql](https://github.com/tmc/graphql) | 54 | graphql parser + utilities | 5 years ago |
| [api-fu](https://github.com/ccbrown/api-fu) | 37 | A collection of Go packages for creating robust GraphQL APIs | 22 days ago |
| [straf](https://github.com/ThundR67/straf) | 32 | Convert Golang Struct To GraphQL Object On The Fly | 2 years ago |
| [rest-query-parser](https://github.com/timsolov/rest-query-parser) | 29 | Query Parser for REST | 2 months ago |
| [jsonpath](https://github.com/AsaiYusuke/jsonpath) | 9 | A query library for retrieving part of JSON based on JSONPath syntax. | 2 months ago |
| [gws](https://github.com/Zaba505/gws) | 4 | A WebSocket client and server for GraphQL | a year ago |


### [Resource Embedding](#Resource-Embedding)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [statik](https://github.com/rakyll/statik) | 3361 | Embed files into a Go executable | a year ago |
| [packr](https://github.com/gobuffalo/packr) | 3340 | The simple and easy way to embed static files into Go binaries. | a month ago |
| [go.rice](https://github.com/GeertJohan/go.rice) | 2265 | go.rice is a Go package that makes working with resources such as html,js,css,images,templates, etc very easy. | 3 months ago |
| [vfsgen](https://github.com/shurcooL/vfsgen) | 936 | Takes an input http.FileSystem (likely at go generate time) and generates Go code that statically implements it. | 5 days ago |
| [esc](https://github.com/mjibson/esc) | 605 | A simple file embedder for Go | 2 years ago |
| [fileb0x](https://github.com/UnnoTed/fileb0x) | 602 | a better customizable tool to embed files in go; also update embedded files remotely without restarting the server | a year ago |
| [go-resources](https://github.com/omeid/go-resources) | 173 | Unfancy resources embedding for Go with out of box http.FileSystem support. | 7 months ago |
| [statics](https://github.com/go-playground/statics) | 64 | :file_folder: Embeds static resources into go files for single binary compilation + works with http.FileSystem + symlinks | 5 years ago |
| [templify](https://github.com/wlbr/templify) | 26 | A tool to be used with 'go generate' to embed external template files into Go code. | 5 months ago |
| [rebed](https://github.com/soypat/rebed) | 19 | Recreates directory and files from embedded filesystem using Go 1.16 embed.FS type. | 9 months ago |
| [debme](https://github.com/leaanthony/debme) | 12 | embed.FS wrapper providing additional functionality | 7 months ago |
| [mule](https://github.com/wlbr/mule) | 9 | mule is a tool to be used with 'go generate' to embed external resources files into Go code. | 5 months ago |


### [Science and Data Analysis](#Science-and-Data-Analysis)
* Libraries for scientific computing and data analyzing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gonum](https://github.com/gonum/gonum) | 5423 | Gonum is a set of numeric libraries for the Go programming language. It contains libraries for matrices, statistics, optimization, and more | 3 days ago |
| [stats](https://github.com/montanaflynn/stats) | 2210 | A well tested and comprehensive Golang statistics library package with no dependencies. | 2 months ago |
| [plot](https://github.com/gonum/plot) | 2079 | A repository for plotting and visualizing data | 3 months ago |
| [gosl](https://github.com/cpmech/gosl) | 1635 | Linear algebra, eigenvalues, FFT, Bessel, elliptic, orthogonal polys, geometry, NURBS, numerical quadrature, 3D transfinite interpolation, random numbers, Mersenne twister, probability distributions, optimisation, differential equations. | 2 months ago |
| [streamtools](https://github.com/nytlabs/streamtools) | 1317 | tools for working with streams of data | 6 years ago |
| [go-dsp](https://github.com/mjibson/go-dsp) | 762 | Digital Signal Processing for Go | 4 years ago |
| [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) | 720 | DataFrames for Go: For statistics, machine-learning, and data manipulation/exploration | 3 months ago |
| [chart](https://github.com/vdobler/chart) | 707 | Provide basic charts in go | 7 months ago |
| [goraph](https://github.com/gyuho/goraph) | 652 | Package goraph implements graph data structure and algorithms. | 4 years ago |
| [graph](https://github.com/yourbasic/graph) | 512 | Graph algorithms and data structures | 4 months ago |
| [orb](https://github.com/paulmach/orb) | 459 | Types and utilities for working with 2d geometry in Golang | 13 days ago |
| [ewma](https://github.com/VividCortex/ewma) | 343 | Exponentially Weighted Moving Average algorithms for Go. | 5 months ago |
| [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) | 331 | 📅 Calendar heatmap inspired by GitHub contribution activity  | 5 days ago |
| [gohistogram](https://github.com/VividCortex/gohistogram) | 158 | Streaming approximate histograms in Go | a year ago |
| [TextRank](https://github.com/DavidBelicza/TextRank) | 148 | :wink: :cyclone: :strawberry: TextRank implementation in Golang with extendable features (summarization, phrase extraction) and multithreading (goroutine). | 6 months ago |
| [sparse](https://github.com/james-bowman/sparse) | 123 | Sparse matrix formats for linear algebra supporting scientific and machine learning applications | 5 months ago |
| [go-estimate](https://github.com/milosgajdos/go-estimate) | 89 | State estimation and filtering algorithms in Go | 5 months ago |
| [pagerank](https://github.com/alixaxel/pagerank) | 72 | Weighted PageRank implementation in Go | 7 months ago |
| [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) | 54 | 🏝 JSONL Graph Tools | 5 days ago |
| [geom](https://github.com/skelterjohn/geom) | 49 | 2d geometry for golang | 4 years ago |
| [evaler](https://github.com/soniah/evaler) | 46 | Implements a simple floating point arithmetic expression evaluator in Go (golang). | 3 years ago |
| [goent](https://github.com/kzahedi/goent) | 25 | GO Implementation of Entropy Measures | 3 years ago |
| [triangolatte](https://github.com/tchayen/triangolatte) | 24 | 2D triangulation library. Allows translating lines and polygons (both based on points) to the language of GPUs. | 5 months ago |
| [decimal](https://github.com/db47h/decimal) | 23 | An arbitrary-precision decimal floating-point arithmetic package for Go | 2 years ago |
| [piecewiselinear](https://github.com/sgreben/piecewiselinear) | 20 | tiny linear interpolation library for go (factored out from https://github.com/sgreben/yeetgif) | a year ago |
| [GoStats](https://github.com/OGFris/GoStats) | 18 | GoStats is a go library for math statistics mostly used in ML domains, it covers most of the statistical measures functions. | 3 years ago |
| [godesim](https://github.com/soypat/godesim) | 17 | ODE system solver made simple. For IVPs (initial value problems). | a month ago |
| [PiHex](https://github.com/claygod/PiHex) | 14 | PiHex Library, written in Go, generates a hexadecimal number sequence in the number Pi in the range from 0 to 10,000,000. | a year ago |
| [ode](https://github.com/ChristopherRabotin/ode) | 13 | An ordinary differential equation solving library in golang. | 5 years ago |
| [rootfinding](https://github.com/khezen/rootfinding) | 6 | root-finding library | 2 years ago |
| [assocentity](https://github.com/ndabAP/assocentity) | 5 | Package assocentity returns the average distance from words to a given entity | a year ago |
| [go-gt](https://github.com/ThePaw/go-gt) | 5 | Automatically exported from code.google.com/p/go-gt | 6 years ago |
| [bradleyterry](https://github.com/seanhagen/bradleyterry) | 4 | Package to do Bradley-Terry Model pairwise compairsons | 3 years ago |


### [Security](#Security)
* Libraries that are used to help make your application more secure.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 9661 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | a day ago |
| [lego](https://github.com/go-acme/lego) | 5032 | Let's Encrypt client and ACME library written in Go | 11 days ago |
| [certmagic](https://github.com/caddyserver/certmagic) | 3881 | Automatic HTTPS for any Go program: fully-managed TLS certificate issuance and renewal | 5 days ago |
| [cameradar](https://github.com/Ullaakut/cameradar) | 2792 | Cameradar hacks its way into RTSP videosurveillance cameras | 2 months ago |
| [memguard](https://github.com/awnumar/memguard) | 2041 | Secure software enclave for storage of sensitive information in memory. | 10 months ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1886 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 9 months ago |
| [secure](https://github.com/unrolled/secure) | 1863 | HTTP middleware for Go that facilitates some quick security wins. | 2 months ago |
| [themis](https://github.com/cossacklabs/themis) | 1406 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | 12 days ago |
| [acra](https://github.com/cossacklabs/acra) | 908 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 2 hours ago |
| [nacl](https://github.com/kevinburke/nacl) | 518 | Pure Go implementation of the NaCL set of API's | 9 months ago |
| [ssh-vault](https://github.com/ssh-vault/ssh-vault) | 331 | 🌰  encrypt/decrypt using ssh keys | 6 months ago |
| [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) | 312 | A rest application to update firewalld rules on a linux server  | a year ago |
| [go-password-validator](https://github.com/wagslane/go-password-validator) | 310 | Validate the Strength of a Password in Go | 25 days ago |
| [badactor](https://github.com/jaredfolkins/badactor) | 303 | BadActor.org An in-memory application driven jailer written in Go | 2 years ago |
| [optimus-go](https://github.com/pjebs/optimus-go) | 296 | ID hashing and Obfuscation using Knuth's Algorithm | 2 years ago |
| [passlib](https://github.com/hlandau/passlib) | 260 | :key: Idiotproof golang password validation library inspired by Python's passlib | 10 months ago |
| [go-yara](https://github.com/hillu/go-yara) | 239 | Go bindings for YARA | 15 days ago |
| [simple-scrypt](https://github.com/elithrar/simple-scrypt) | 173 | A convenience library for generating, comparing and inspecting password hashes using the scrypt KDF in Go 🔑 | 9 months ago |
| [yara](https://github.com/plusvic/yara) | 124 | The pattern matching swiss knife | 2 years ago |
| [argon2pw](https://github.com/raja/argon2pw) | 88 | Argon2 password hashing package for go with constant time hash comparison | 4 months ago |
| [dongle](https://github.com/golang-module/dongle) | 69 | A simple, semantic and developer-friendly golang package for encoding&decoding and encryption&decryption | 4 months ago |
| [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) | 44 | A probably paranoid Golang utility library for securely hashing and encrypting passwords based on the Dropbox method. This implementation uses Blake2b, Scrypt and XSalsa20-Poly1305 (via NaCl SecretBox) to create secure password hashes that are also encrypted using a master passphrase. | a year ago |
| [go-generate-password](https://github.com/m1/go-generate-password) | 29 | Password generator written in Go | 5 months ago |
| [secureio](https://github.com/xaionaro-go/secureio) | 22 | An easy-to-use XChaCha20-encryption wrapper for io.ReadWriteCloser (even lossy UDP) using ECDH key exchange algorithm, ED25519 signatures and Blake3+Poly1305 checksums/message-authentication for Go (golang). Also a multiplexer. | 2 years ago |
| [certificates](https://github.com/mvmaasakkers/certificates) | 21 | An opinionated helper for generating tls certificates | a year ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 14 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [goArgonPass](https://github.com/dwin/goArgonPass) | 13 | goArgonPass is a Argon2 Password utility package for Go using the crypto library package Argon2 designed to be compatible with Passlib for Python and Argon2 PHP. Argon2 was the winner of the most recent Password Hashing Competition. This is designed for use anywhere password hashing and verification might be needed and is intended to replace implementations using bcrypt or Scrypt. | a year ago |
| [sslmgr](https://github.com/adrianosela/sslmgr) | 11 | A layer of abstraction the around acme/autocert certificate manager (Golang) | 2 years ago |


### [Serialization](#Serialization)
* Libraries and tools for binary serialization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/json-iterator/go) | 10357 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 18 hours ago |
| [age](https://github.com/FiloSottile/age) | 9661 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | a day ago |
| [protobuf](https://github.com/golang/protobuf) | 8168 | Go support for Google's protocol buffers | 4 months ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 5264 | Go library for decoding generic map values into native Go structures and vice versa. | 12 days ago |
| [protobuf](https://github.com/gogo/protobuf) | 5030 | [Looking for new ownership] Protocol Buffers for Go with Gadgets | 2 months ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1886 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 9 months ago |
| [go](https://github.com/ugorji/go) | 1617 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 2 months ago |
| [acra](https://github.com/cossacklabs/acra) | 908 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 2 hours ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 645 | binary serialization format | 4 months ago |
| [csvutil](https://github.com/jszwec/csvutil) | 645 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 2 months ago |
| [cbor](https://github.com/fxamacker/cbor) | 368 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | 7 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 279 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 2 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 152 | PHP session encoder/decoder written in Go | 3 years ago |
| [structomap](https://github.com/danhper/structomap) | 130 | Easily and dynamically generate maps from Go static structures | 3 years ago |
| [bambam](https://github.com/glycerine/bambam) | 62 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 5 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 47 | Asn.1 BER and DER encoding library for golang. | 3 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 39 | Golang binary decoder for mapping data into the structure | 15 days ago |
| [bel](https://github.com/csweichel/bel) | 16 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | a year ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 16 | Fixed width file parser (encoder/decoder) in GO (golang) | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 16 | A standard way to wrap a proto message | 3 months ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 15 | Converts go types no matter what | 8 months ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 14 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 5 | A Go package for encode/decode fixed-width data | 2 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 3 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | 9 months ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 2 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 2 years ago |


### [Server Applications](#Server-Applications)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/json-iterator/go) | 10357 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 18 hours ago |
| [age](https://github.com/FiloSottile/age) | 9661 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | a day ago |
| [protobuf](https://github.com/golang/protobuf) | 8168 | Go support for Google's protocol buffers | 4 months ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 5264 | Go library for decoding generic map values into native Go structures and vice versa. | 12 days ago |
| [protobuf](https://github.com/gogo/protobuf) | 5030 | [Looking for new ownership] Protocol Buffers for Go with Gadgets | 2 months ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1886 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 9 months ago |
| [go](https://github.com/ugorji/go) | 1617 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 2 months ago |
| [acra](https://github.com/cossacklabs/acra) | 908 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 2 hours ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 645 | binary serialization format | 4 months ago |
| [csvutil](https://github.com/jszwec/csvutil) | 645 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 2 months ago |
| [cbor](https://github.com/fxamacker/cbor) | 368 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | 7 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 279 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 2 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 152 | PHP session encoder/decoder written in Go | 3 years ago |
| [structomap](https://github.com/danhper/structomap) | 130 | Easily and dynamically generate maps from Go static structures | 3 years ago |
| [bambam](https://github.com/glycerine/bambam) | 62 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 5 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 47 | Asn.1 BER and DER encoding library for golang. | 3 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 39 | Golang binary decoder for mapping data into the structure | 15 days ago |
| [bel](https://github.com/csweichel/bel) | 16 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | a year ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 16 | Fixed width file parser (encoder/decoder) in GO (golang) | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 16 | A standard way to wrap a proto message | 3 months ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 15 | Converts go types no matter what | 8 months ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 14 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 5 | A Go package for encode/decode fixed-width data | 2 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 3 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | 9 months ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 2 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 2 years ago |


### [Stream Processing](#Stream-Processing)
* Libraries and tools for stream processing and reactive programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-streams](https://github.com/reugn/go-streams) | 819 | A lightweight stream processing library for Go | 17 hours ago |
| [machine](https://github.com/whitaker-io/machine) | 101 | Machine is a workflow/pipeline library for processing data | 5 days ago |
| [stream](https://github.com/youthlin/stream) | 50 | Go Stream, like Java 8 Stream. | a year ago |


### [Template Engines](#Template-Engines)
* Libraries and tools for templating and lexing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gofpdf](https://github.com/jung-kurt/gofpdf) | 3919 | A PDF document generator with high level support for text, drawing and images | 2 months ago |
| [sprig](https://github.com/Masterminds/sprig) | 2736 | Useful template functions for Go templates. | a month ago |
| [quicktemplate](https://github.com/valyala/quicktemplate) | 2304 | Fast, powerful, yet easy to use template engine for Go. Optimized for speed, zero memory allocations in hot paths. Up to 20x faster than html/template | 4 months ago |
| [pongo2](https://github.com/flosch/pongo2) | 2129 | Django-syntax like template-engine for Go | 15 days ago |
| [hero](https://github.com/shiyanhui/hero) | 1485 | A handy, fast and powerful go template engine. | 2 years ago |
| [mustache](https://github.com/hoisie/mustache) | 1027 | The mustache template language in Go | a month ago |
| [amber](https://github.com/eknkc/amber) | 887 | Amber is an elegant templating engine for Go Programming Language, inspired from HAML and Jade | a year ago |
| [jet](https://github.com/CloudyKit/jet) | 868 | Jet  template engine | 2 months ago |
| [ace](https://github.com/yosssi/ace) | 807 | HTML template engine for Go | 4 years ago |
| [gorazor](https://github.com/sipin/gorazor) | 790 | Razor view engine for go | a year ago |
| [fasttemplate](https://github.com/valyala/fasttemplate) | 563 | Simple and fast template engine for Go | a year ago |
| [ego](https://github.com/benbjohnson/ego) | 513 | An ERB-style templating language for Go. | 2 months ago |
| [maroto](https://github.com/johnfercher/maroto) | 510 | A maroto way to create PDFs. Maroto is inspired in Bootstrap and uses gofpdf. Fast and simple. | 3 months ago |
| [raymond](https://github.com/aymerick/raymond) | 455 | Handlebars for golang | 2 months ago |
| [goview](https://github.com/foolin/goview) | 262 | Goview is a lightweight, minimalist and idiomatic template library based on golang html/template for building Go web application. | 5 days ago |
| [soy](https://github.com/robfig/soy) | 157 | Go implementation for Soy templates (Google Closure templates) | 3 months ago |
| [liquid](https://github.com/osteele/liquid) | 144 | A Liquid template engine in Go | 4 days ago |
| [velvet](https://github.com/gobuffalo/velvet) | 73 | A sweet velvety templating package | 5 years ago |
| [kasia.go](https://github.com/ziutek/kasia.go) | 72 | Templating system for HTML and other text documents - go implementation | 6 years ago |
| [extemplate](https://github.com/dannyvankooten/extemplate) | 41 | Wrapper package for Go's template/html to allow for easy file-based template inheritance. | 7 months ago |
| [gospin](https://github.com/m1/gospin) | 33 | Article spinning and spintax/spinning syntax engine written in Go, useful for A/B, testing pieces of text/articles and creating more natural conversations | 8 months ago |
| [damsel](https://github.com/dskinner/damsel) | 24 | Package damsel provides html outlining via css-selectors and common template functionality. | 6 years ago |
| [tbd](https://github.com/lucasepe/tbd) | 16 | "to be defined" - a really simple way to create text templates with placeholders | 4 months ago |


### [Testing](#Testing)
* Libraries for testing codebases and generating test data.

#### [Testing Frameworks](#Testing-Frameworks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testify](https://github.com/stretchr/testify) | 15157 | A toolkit with common assertions and mocks that plays nicely with the standard library | 4 days ago |
| [goconvey](https://github.com/smartystreets/goconvey) | 6917 | Go testing in the browser. Integrates with `go test`. Write behavioral tests in Go. | 2 months ago |
| [go-cmp](https://github.com/google/go-cmp) | 2647 | Package for comparing Go values in tests | 6 days ago |
| [httpexpect](https://github.com/gavv/httpexpect) | 1840 | End-to-end HTTP and REST API testing for Go. | 5 months ago |
| [godog](https://github.com/cucumber/godog) | 1536 | Cucumber for golang | 5 days ago |
| [go-vcr](https://github.com/dnaeon/go-vcr) | 842 | Record and replay your HTTP interactions for fast, deterministic and accurate tests | 3 months ago |
| [goblin](https://github.com/franela/goblin) | 823 | Minimal and Beautiful Go testing framework | 3 months ago |
| [testfixtures](https://github.com/go-testfixtures/testfixtures) | 728 | Ruby on Rails like test fixtures for Go. Write tests against a real database | 10 days ago |
| [baloo](https://github.com/h2non/baloo) | 717 | Expressive end-to-end HTTP API testing made easy in Go | 3 hours ago |
| [gnomock](https://github.com/orlangure/gnomock) | 621 | Test your code without writing mocks with ephemeral Docker containers 📦 Setup popular services with just a couple lines of code ⏱️ No bash, no yaml, only code 💻 | 17 hours ago |
| [go-mutesting](https://github.com/zimmski/go-mutesting) | 501 | Mutation testing for Go source code | a month ago |
| [goc](https://github.com/qiniu/goc) | 471 | A Comprehensive Coverage Testing System for The Go Programming Language | 21 days ago |
| [gofight](https://github.com/appleboy/gofight) | 399 | Testing API Handler written in Golang. | 6 months ago |
| [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) | 323 | Run a real Postgres database locally on Linux, OSX or Windows as part of another Go application or test | 18 hours ago |
| [testza](https://github.com/MarvinJWendt/testza) | 311 | Full-featured test framework for Go! Assertions, mocking, input testing, output capturing, and much more! 🍕 | 4 hours ago |
| [frisby](https://github.com/hofstadter-io/frisby) | 271 | API testing framework inspired by frisby-js | 2 years ago |
| [gotest.tools](https://github.com/gotestyourself/gotest.tools) | 271 | A collection of packages to augment the go testing package and support common patterns. | 17 hours ago |
| [go-testdeep](https://github.com/maxatome/go-testdeep) | 241 | Extremely flexible golang deep comparison, extends the go testing package, tests HTTP APIs and provides tests suite | 13 hours ago |
| [go-carpet](https://github.com/msoap/go-carpet) | 216 | go-carpet - show test coverage in terminal for Go source files | 9 days ago |
| [endly](https://github.com/viant/endly) | 201 | End to end functional test and automation framework | a month ago |
| [cupaloy](https://github.com/bradleyjkemp/cupaloy) | 200 | Simple Go snapshot testing | 2 months ago |
| [charlatan](https://github.com/percolate/charlatan) | 194 | Go Interface Mocking Tool | 2 years ago |
| [commander](https://github.com/commander-cli/commander) | 190 | Test your command line interfaces on windows, linux and osx and nodes viá ssh and docker | 3 days ago |
| [dbcleaner](https://github.com/khaiql/dbcleaner) | 134 | Clean database for testing, inspired by database_cleaner for Ruby | 2 months ago |
| [gospec](https://github.com/luontola/gospec) | 114 | Testing framework for Go. Allows writing self-documenting tests/specifications, and executes them concurrently and safely isolated. [UNMAINTAINED] | 7 years ago |
| [wstest](https://github.com/posener/wstest) | 86 | go websocket client for unit testing of a websocket handler | a year ago |
| [gocrest](https://github.com/corbym/gocrest) | 81 | GoCrest - Hamcrest-like matchers for Go | a year ago |
| [testcase](https://github.com/adamluzsi/testcase) | 80 | testcase is an opinionated testing framework based on BDD principles. | 2 months ago |
| [jsonassert](https://github.com/kinbiko/jsonassert) | 76 | A Go test assertion library for verifying that two representations of JSON are semantically equal | a month ago |
| [go-hit](https://github.com/Eun/go-hit) | 63 | http integration test framework | 22 days ago |
| [restit](https://github.com/go-restit/restit) | 55 | A Go library help testing your RESTful API application | 2 years ago |
| [gospecify](https://github.com/stesla/gospecify) | 52 | A BDD library for Go | 10 years ago |
| [covergates](https://github.com/covergates/covergates) | 47 | The portal gates to coverage reports | a year ago |
| [gomatch](https://github.com/jfilipczyk/gomatch) | 41 | Library created for testing JSON against patterns. | a year ago |
| [dsunit](https://github.com/viant/dsunit) | 39 | Datastore Testibility | 2 years ago |
| [assert](https://github.com/go-playground/assert) | 35 | :exclamation:Basic Assertion Library used along side native go testing, with building blocks for custom assertions | a year ago |
| [hamcrest](https://github.com/rdrdr/hamcrest) | 27 | Hamcrest matchers for the Go programming language | a year ago |
| [schema](https://github.com/jgroeneveld/schema) | 16 | Quick and easy expression matching for JSON schemas used in requests and responses | 2 years ago |
| [flute](https://github.com/suzuki-shunsuke/flute) | 15 | Golang HTTP client testing framework | 4 days ago |
| [gogiven](https://github.com/corbym/gogiven) | 11 | gogiven - BDD testing framework for go that generates readable output directly from source code | 5 months ago |
| [testsql](https://github.com/zhulongcheng/testsql) | 11 | Generate test data from SQL files before testing and clear it after finished. | 2 years ago |
| [gosuite](https://github.com/pavlo/gosuite) | 10 | Test suites support for standard Go1.7 "testing" by leveraging Subtests feature | 5 years ago |
| [badio](https://github.com/cavaliergopher/badio) | 9 | Extensions to Go's testing/iotest package | 6 years ago |
| [biff](https://github.com/fulldump/biff) | 9 | Bifurcation Framework for testing and use cases | 6 months ago |
| [stop-and-go](https://github.com/elgohr/stop-and-go) | 6 | Testing helper for concurrency | 4 months ago |
| [test](https://github.com/tvastar/test) | 6 | test utilities for golang | 2 years ago |
| [trial](https://github.com/jgroeneveld/trial) | 5 | A simple assertion library for go | 2 years ago |
| [fixenv](https://github.com/rekby/fixenv) | 4 |  | 4 months ago |
| [tt](https://github.com/vcaesar/tt) | 4 | Simple and colorful test tools | 4 months ago |


#### [Mock](#Mock)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mock](https://github.com/golang/mock) | 6634 | GoMock is a mocking framework for the Go programming language. | 10 hours ago |
| [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) | 4069 | Sql mock driver for golang to test database interactions | a month ago |
| [mockery](https://github.com/vektra/mockery) | 3185 | A mock code autogenerator for Golang | a month ago |
| [hoverfly](https://github.com/SpectoLabs/hoverfly) | 1819 | Lightweight service virtualization/API simulation tool for developers and testers | 2 months ago |
| [gock](https://github.com/h2non/gock) | 1543 | HTTP traffic mocking and testing made easy in Go ༼ʘ̚ل͜ʘ̚༽ | 5 months ago |
| [httpmock](https://github.com/jarcoal/httpmock) | 1277 | HTTP mocking for Golang | 20 days ago |
| [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) | 608 | A tool for generating self-contained, type-safe test doubles in go | a month ago |
| [minimock](https://github.com/gojuno/minimock) | 436 | Powerful mock generation tool for Go programming language | 4 months ago |
| [go-txdb](https://github.com/DATA-DOG/go-txdb) | 406 | Immutable transaction isolated sql driver for golang | 13 days ago |
| [govcr](https://github.com/seborama/govcr) | 100 | HTTP mock for Golang: record and replay HTTP/HTTPS interactions for offline testing | 2 years ago |
| [timex](https://github.com/cabify/timex) | 58 | A test-friendly replacement for golang's time package | a year ago |
| [go-localstack](https://github.com/elgohr/go-localstack) | 29 | Go Wrapper for using localstack | 2 hours ago |
| [mockhttp](https://github.com/tv42/mockhttp) | 22 | Mock object for Go http.ResponseWriter | 7 years ago |
| [mockit](https://github.com/pasdam/mockit) | 8 | Library that make mocking of Go functions/methods easy | 12 days ago |


#### [Fuzzing and delta-debugging/reducing/shrinking](#Fuzzing-and-delta-debugging)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-fuzz](https://github.com/dvyukov/go-fuzz) | 4231 | Randomized testing for Go | a month ago |
| [gofuzz](https://github.com/google/gofuzz) | 1208 | Fuzz testing for go. | 4 months ago |
| [tavor](https://github.com/zimmski/tavor) | 231 | A generic fuzzing and delta-debugging framework | 3 years ago |


#### [Selenium and browser control tools](#Selenium-and-browser-control-tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [chromedp](https://github.com/chromedp/chromedp) | 7127 | A faster, simpler way to drive browsers supporting the Chrome DevTools Protocol. | 5 days ago |
| [selenoid](https://github.com/aerokube/selenoid) | 2080 | Selenium Hub successor running browsers within containers. Scalable, immutable, self hosted Selenium-Grid on any platform with single binary. | 2 months ago |
| [rod](https://github.com/go-rod/rod) | 2037 | A Devtools driver for web automation and scraping | 7 days ago |
| [playwright-go](https://github.com/mxschmitt/playwright-go) | 595 | Playwright for Go a browser automation library to control Chromium, Firefox and WebKit with a single API. | a month ago |
| [cdp](https://github.com/mafredri/cdp) | 594 | Package cdp provides type-safe bindings for the Chrome DevTools Protocol (CDP), written in the Go programming language. | 6 months ago |
| [ggr](https://github.com/aerokube/ggr) | 277 | A lightweight load balancer used to create big Selenium clusters | 2 months ago |


#### [Fail injection](#Fail-injection)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [failpoint](https://github.com/pingcap/failpoint) | 649 | An implementation of failpoints for Golang. | 4 months ago |


### [Text Processing](#Text-Processing)
* Libraries for parsing and manipulating texts.

#### [Specific Formats](#Specific-Formats)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [colly](https://github.com/gocolly/colly) | 15714 | Elegant Scraper and Crawler Framework for Golang | 13 days ago |
| [goquery](https://github.com/PuerkitoBio/goquery) | 11005 | A little like that j-thing, only in Go. | 6 days ago |
| [blackfriday](https://github.com/russross/blackfriday) | 4856 | Blackfriday: a markdown processor for Go | 3 months ago |
| [sh](https://github.com/mvdan/sh) | 4402 | A shell parser, formatter, and interpreter with bash support; includes shfmt | 4 days ago |
| [toml](https://github.com/BurntSushi/toml) | 3719 | TOML parser for Golang with reflection. | 16 days ago |
| [go-humanize](https://github.com/dustin/go-humanize) | 3000 | Go Humans! (formatters for units to human friendly sizes) | 3 months ago |
| [bluemonday](https://github.com/microcosm-cc/bluemonday) | 2150 | bluemonday: a fast golang HTML sanitizer (inspired by the OWASP Java HTML Sanitizer) to scrub user generated content of XSS | 11 days ago |
| [gofeed](https://github.com/mmcdole/gofeed) | 1784 | Parse RSS, Atom and JSON feeds in Go | a month ago |
| [inject](https://github.com/facebookarchive/inject) | 1359 | Package inject provides a reflect based injector. | 3 years ago |
| [go-toml](https://github.com/pelletier/go-toml) | 1146 | Go library for the TOML file format | 3 days ago |
| [commonregex](https://github.com/mingrammer/commonregex) | 791 | 🍫 A collection of common regular expressions for Go | 2 years ago |
| [slug](https://github.com/gosimple/slug) | 769 | URL-friendly slugify with multiple languages support. | 18 days ago |
| [dataflowkit](https://github.com/slotix/dataflowkit) | 504 | Extract structured data from web sites. Web sites scraping.   | 2 years ago |
| [mxj](https://github.com/clbanning/mxj) | 498 | Decode / encode XML to/from map[string]interface{} (or JSON); extract values with dot-notation paths and wildcards.  Replaces x2j and j2x packages. | 24 days ago |
| [gographviz](https://github.com/awalterschulze/gographviz) | 459 | Parses the Graphviz DOT language in golang | 5 months ago |
| [htmlquery](https://github.com/antchfx/htmlquery) | 444 | htmlquery is golang XPath package for HTML query. | 2 months ago |
| [gommon](https://github.com/labstack/gommon) | 426 | Common packages for Go | a month ago |
| [omniparser](https://github.com/jf-tech/omniparser) | 407 | omniparser: a native Golang ETL streaming parser and transform library for CSV, JSON, XML, EDI, text, etc. | 2 months ago |
| [go-runewidth](https://github.com/mattn/go-runewidth) | 401 | wcwidth for golang | 2 months ago |
| [gotext](https://github.com/leonelquinteros/gotext) | 315 | Go (Golang) GNU gettext utilities package  | 21 days ago |
| [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) | 303 | ⚙️ Convert HTML to Markdown. Even works with entire websites and can be extended through rules. | 4 months ago |
| [goq](https://github.com/andrewstuart/goq) | 206 | A declarative struct-tag-based HTML unmarshaling or scraping package for Go built on top of the goquery library | 4 months ago |
| [goribot](https://github.com/zhshch2002/goribot) | 205 | [Crawler/Scraper for Golang]🕷A lightweight distributed friendly Golang crawler framework.一个轻量的分布式友好的 Golang 爬虫框架。 | a year ago |
| [go-nmea](https://github.com/adrianmo/go-nmea) | 161 | A NMEA parser library in pure Go | 7 days ago |
| [gospider](https://github.com/zhshch2002/gospider) | 139 | ⚡ Light weight Golang spider framework , 轻量的 Golang 爬虫框架 | 10 months ago |
| [github_flavored_markdown](https://github.com/shurcooL/github_flavored_markdown) | 138 | GitHub Flavored Markdown renderer with fenced code block highlighting, clickable header anchor links. | 10 months ago |
| [sdp](https://github.com/gortc/sdp) | 110 | RFC 4566 SDP implementation in go | 2 years ago |
| [podcast](https://github.com/eduncan911/podcast) | 101 | iTunes and RSS 2.0 Podcast Generator in Golang | a year ago |
| [go-zero-width](https://github.com/trubitsyn/go-zero-width) | 96 | Zero-width character detection and removal for Go | a year ago |
| [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) | 89 | EditorConfig Core written in Go | a month ago |
| [align](https://github.com/Guitarbum722/align) | 72 | A general purpose application and library for aligning text. | 4 months ago |
| [go-slugify](https://github.com/mozillazg/go-slugify) | 69 | Pretty Slug. | 2 years ago |
| [go-vcard](https://github.com/emersion/go-vcard) | 64 | A Go library to parse and format vCard | 8 months ago |
| [genex](https://github.com/alixaxel/genex) | 62 | Genex package for Go | 2 years ago |
| [goregen](https://github.com/zach-klippenstein/goregen) | 60 | randexp for Go. | 6 months ago |
| [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) | 57 | Encoding and decoding for fixed-width formatted data | 3 days ago |
| [did](https://github.com/ockam-network/did) | 56 | A golang package to work with Decentralized Identifiers (DIDs)  | a year ago |
| [guesslanguage](https://github.com/endeveit/guesslanguage) | 52 | Guess the natural language of a text in Go | 4 years ago |
| [allot](https://github.com/sbstjn/allot) | 50 | Parse placeholder and wildcard text commands | 9 months ago |
| [pagser](https://github.com/foolin/pagser) | 48 | Pagser is a simple, extensible, configurable parse and deserialize html page to struct based on goquery and struct tags for golang crawler | 5 days ago |
| [bafi](https://github.com/mmalcek/bafi) | 46 | Universal JSON, BSON, YAML, CSV, XML converter with templates | a month ago |
| [gonameparts](https://github.com/polera/gonameparts) | 32 | Takes a full name and splits it into individual name parts | 2 years ago |
| [slugify](https://github.com/avelino/slugify) | 30 | A Go slugify application that handles string | 4 years ago |
| [normalize](https://github.com/avito-tech/normalize) | 23 |  | 9 months ago |
| [codetree](https://github.com/aerogo/codetree) | 18 | :evergreen_tree: Parses indented code and returns a tree structure. | 2 years ago |
| [enca](https://github.com/endeveit/enca) | 10 | Minimal cgo bindings for libenca | 6 years ago |
| [syndfeed](https://github.com/zhengchun/syndfeed) | 7 | A syndication feed parser for Atom 1.0 and RSS 2.0 in Go | 4 years ago |
| [ltsv](https://github.com/Wing924/ltsv) | 6 | High performance LTSV (Labeled Tab Separeted Value) reader for Go. | 3 years ago |
| [bbConvert](https://github.com/CalebQ42/bbConvert) | 5 | Converter from BBCode to HTML | 5 years ago |
| [doi](https://github.com/hscells/doi) | 5 | Parse and check doi objects in go. | 4 years ago |
| [encoding](https://github.com/ake-persson/encoding) | 4 | Go package provides a generic interface to encoders and decoders | 2 years ago |
| [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) | 4 |  | 9 months ago |
| [go-output-format](https://github.com/drewstinnett/go-output-format) | 3 | Output go objects in standard formats, such as YAML, JSON, etc | 3 months ago |


#### [Utility](#Utility)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xurls](https://github.com/mvdan/xurls) | 851 | Extract urls from text | 17 days ago |
| [gotabulate](https://github.com/bndr/gotabulate) | 273 | Gotabulate - Easily pretty-print your tabular data with Go | a year ago |
| [radix](https://github.com/yourbasic/radix) | 170 | A fast string sorting algorithm (MSD radix sort) | 4 years ago |
| [regroup](https://github.com/oriser/regroup) | 99 | Match regex group into go struct using struct tags and automatic parsing | 5 months ago |
| [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) | 40 | A sanitization-based swear filter for Go. | 7 months ago |
| [parth](https://github.com/codemodus/parth) | 39 | Path parsing for segment unmarshaling and slicing. | 3 years ago |
| [xj2go](https://github.com/wk30/xj2go) | 21 | Convert xml and json to go struct | 3 months ago |
| [tagify](https://github.com/zoomio/tagify) | 17 | Tagify produces a set of tags from a given source. Source can be either an HTML page, a Markdown document or a plain text. Supports English, Russian, Chinese, Hindi, Spanish, Arabic, Japanese, German, Hebrew, French and Korean languages. | a day ago |
| [kace](https://github.com/codemodus/kace) | 16 | Common case conversions covering common initialisms. | 3 years ago |
| [TySug](https://github.com/Dynom/TySug) | 9 | A project around helping to prevent typing typos. TySug (Typo Suggestions) suggests alternative words with respect to keyboard layouts | a year ago |
| [parseargs-go](https://github.com/txgruppi/parseargs-go) | 8 | A string argument parser that understands quotes and backslashes | 5 years ago |
| [textwrap](https://github.com/isbm/textwrap) | 1 | Port of Python's "textwrap" module to Go | 2 years ago |


### [Third-party APIs](#Third-party-APIs)
* Libraries for accessing third party APIs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-github](https://github.com/google/go-github) | 8034 | Go library for accessing the GitHub API | 36 minutes ago |
| [aws-sdk-go](https://github.com/aws/aws-sdk-go) | 7315 | AWS SDK for the Go programming language. | 7 hours ago |
| [slack](https://github.com/slack-go/slack) | 3770 | Slack API in Go - community-maintained fork created by the original author, @nlopes | a day ago |
| [google-api-go-client](https://github.com/googleapis/google-api-go-client) | 2878 | Auto-generated Google APIs for Go. | 10 hours ago |
| [google-cloud-go](https://github.com/googleapis/google-cloud-go) | 2733 | Google Cloud Client Libraries for Go. | 3 hours ago |
| [discordgo](https://github.com/bwmarrin/discordgo) | 2639 |  (Golang) Go bindings for Discord | 11 hours ago |
| [minio-go](https://github.com/minio/minio-go) | 1487 | MinIO Client SDK for Go | 3 hours ago |
| [stripe-go](https://github.com/stripe/stripe-go) | 1485 | Go library for the Stripe API.     | 4 days ago |
| [go-twitter](https://github.com/dghubble/go-twitter) | 1375 | Go Twitter REST and Streaming API v1.1 | 2 months ago |
| [anaconda](https://github.com/ChimeraCoder/anaconda) | 1109 | A Go client library for the Twitter 1.1 API | 5 months ago |
| [go-jira](https://github.com/andygrunwald/go-jira) | 1046 | Go client library for Atlassian Jira | 6 days ago |
| [facebook](https://github.com/huandu/facebook) | 1024 | A Facebook Graph API SDK For Go. | 5 days ago |
| [githubv4](https://github.com/shurcooL/githubv4) | 832 | Package githubv4 is a client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql). | 5 days ago |
| [webhooks](https://github.com/go-playground/webhooks) | 686 | :fishing_pole_and_fish: Webhook receiver for GitHub, Bitbucket, GitLab, Gogs | 2 months ago |
| [paypal](https://github.com/plutov/paypal) | 462 | Golang client for PayPal REST API | 2 months ago |
| [geo-golang](https://github.com/codingsince1985/geo-golang) | 423 | Go library to access geocoding and reverse geocoding APIs | 5 months ago |
| [ethrpc](https://github.com/onrik/ethrpc) | 221 | Golang client for ethereum json rpc api | a year ago |
| [go-marathon](https://github.com/gambol99/go-marathon) | 196 | A GO API library for working with Marathon | a year ago |
| [trello](https://github.com/adlio/trello) | 191 | Trello API wrapper for Go | 7 months ago |
| [twitter-scraper](https://github.com/n0madic/twitter-scraper) | 166 | Scrape the Twitter Frontend API without authentication with Golang. | a month ago |
| [medium-sdk-go](https://github.com/Medium/medium-sdk-go) | 131 | A Golang SDK for Medium's OAuth2 API | 3 years ago |
| [gostorm](https://github.com/jsgilmore/gostorm) | 128 | GoStorm is a Go library that implements the communications protocol required to write Storm spouts and Bolts in Go that communicate with the Storm shells. | 4 years ago |
| [go-trending](https://github.com/andygrunwald/go-trending) | 119 | Go library for accessing trending repositories and developers at Github. | 3 months ago |
| [wit-go](https://github.com/wit-ai/wit-go) | 112 | Go client for wit.ai HTTP API | 4 months ago |
| [hipchat](https://github.com/daneharrigan/hipchat) | 111 | A golang package to communicate with HipChat over XMPP | 5 years ago |
| [pushover](https://github.com/gregdel/pushover) | 108 | Go wrapper for the Pushover API | 3 months ago |
| [hipchat](https://github.com/andybons/hipchat) | 105 | This project implements a Go client library for the Hipchat API. | 6 years ago |
| [cachet](https://github.com/andygrunwald/cachet) | 89 | Go(lang) client library for Cachet (open source status page system). | 7 months ago |
| [simples3](https://github.com/rhnvrm/simples3) | 74 | Simple no frills AWS S3 Golang Library using REST with V4 Signing (without AWS Go SDK) | 3 days ago |
| [gosip](https://github.com/koltyakov/gosip) | 70 | ⚡️ SharePoint authentication, HTTP client & fluent API wrapper for Go (Golang) | 12 days ago |
| [igdb](https://github.com/Henry-Sarabia/igdb) | 69 | Go client for the Internet Game Database API | 10 months ago |
| [go-circleci](https://github.com/jszwedko/go-circleci) | 61 | Go library for interacting with CircleCI | 2 years ago |
| [go-unsplash](https://github.com/hbagdi/go-unsplash) | 58 | Go Client for the Unsplash API  | 9 months ago |
| [gogtrends](https://github.com/groovili/gogtrends) | 58 | Unofficial Google Trends API for Go | 4 months ago |
| [clarifai-go](https://github.com/Clarifai/clarifai-go) | 55 | DEPRECATED: please use https://github.com/Clarifai/clarifai-go-grpc | 4 years ago |
| [megos](https://github.com/andygrunwald/megos) | 54 | Go(lang) client library for accessing information of an Apache Mesos cluster. | 7 months ago |
| [go-amazon-product-advertising-api](https://github.com/ngs/go-amazon-product-advertising-api) | 51 | Go Client Library for Amazon Product Advertising API | 4 years ago |
| [gads](https://github.com/emiddleton/gads) | 49 | Google Adwords API for Go | a month ago |
| [ynab.go](https://github.com/brunomvsouza/ynab.go) | 49 | Go client for the YNAB API. Unofficial. It covers 100% of the resources made available by the YNAB API. | 4 months ago |
| [golang-tmdb](https://github.com/cyruzin/golang-tmdb) | 47 | This is a Golang wrapper for working with TMDb API. It aims to support version 3. | 19 days ago |
| [go-xkcd](https://github.com/nishanths/go-xkcd) | 45 | xkcd.com API client in Go | 2 months ago |
| [uptimerobot](https://github.com/bitfield/uptimerobot) | 45 | Client library for UptimeRobot v2 API | a year ago |
| [gomusicbrainz](https://github.com/michiwend/gomusicbrainz) | 44 | a Go (Golang) MusicBrainz WS2 client library - work in progress | a year ago |
| [fcm](https://github.com/maddevsio/fcm) | 43 | Firebase Cloud Messaging for application servers implemented using the Go programming language. | 2 years ago |
| [mixpanel](https://github.com/dukex/mixpanel) | 42 | Golang Mixpanel Client | 5 months ago |
| [go-spotify](https://github.com/rapito/go-spotify) | 41 | Go library for the Spotify Web API | a year ago |
| [go-postman-collection](https://github.com/rbretecher/go-postman-collection) | 36 | Go module to work with Postman Collections | 2 months ago |
| [golyrics](https://github.com/mamal72/golyrics) | 36 | A simple Go package to fetch lyrics from Wikia | 4 years ago |
| [translate](https://github.com/nuveo/translate) | 31 | Go online translation package | 6 years ago |
| [airtable](https://github.com/mehanizm/airtable) | 30 | Simple golang airtable API wrapper | 18 days ago |
| [gami](https://github.com/bit4bit/gami) | 30 | GO - Asterisk AMI Interface | 4 years ago |
| [gcm](https://github.com/TheOrioli/gcm) | 30 | Google Cloud Messaging for application servers implemented using the Go programming language. | 6 years ago |
| [patreon-go](https://github.com/mxpv/patreon-go) | 27 | Patreon Go API client | 2 years ago |
| [go-myanimelist](https://github.com/nstratos/go-myanimelist) | 26 | Go library for accessing the MyAnimeList API: https://myanimelist.net/apiconfig/references/api/v2 | a month ago |
| [go-steam](https://github.com/sostronk/go-steam) | 24 | Go library for querying Source servers | 4 months ago |
| [google-play-scraper](https://github.com/n0madic/google-play-scraper) | 23 | Golang scraper to get data from Google Play Store | 18 hours ago |
| [lastpass-go](https://github.com/ansd/lastpass-go) | 23 | Golang client for LastPass | a month ago |
| [go-shopify](https://github.com/rapito/go-shopify) | 22 | Simple Shopify API for the Go Programming Language | a year ago |
| [go-imgur](https://github.com/koffeinsource/go-imgur) | 21 | Go library to use the imgur.com API | 8 months ago |
| [go-twitch](https://github.com/knspriggs/go-twitch) | 21 | A golang client for the Twitch v3 API - public APIs only (for now) | 4 years ago |
| [codeship-go](https://github.com/codeship/codeship-go) | 18 | Go library for accessing the Codeship API v2 | a year ago |
| [brewerydb](https://github.com/naegelejd/brewerydb) | 17 | Go library for http://www.brewerydb.com/ API | 7 years ago |
| [textbelt](https://github.com/farmergreg/textbelt) | 17 | golang library for textbelt.com | 6 years ago |
| [coinpaprika-api-go-client](https://github.com/coinpaprika/coinpaprika-api-go-client) | 14 | Go client library for interacting with Coinpaprika's API | a year ago |
| [go-hacknews](https://github.com/PaulRosset/go-hacknews) | 14 | 📟  Tiny utility Go client for HackerNews API. | 4 years ago |
| [go-aws-news](https://github.com/circa10a/go-aws-news) | 13 | Go app + library to fetch what's new from AWS | 2 months ago |
| [go-google-analytics](https://github.com/chonthu/go-google-analytics) | 12 | Simple Reporting for Google Analytics | 7 years ago |
| [gopaapi5](https://github.com/utekaravinash/gopaapi5) | 11 | Go Client Library for Amazon's Product Advertising API 5.0 | 2 years ago |
| [device-check-go](https://github.com/rinchsan/device-check-go) | 10 | :iphone: iOS DeviceCheck SDK for Go - query and modify the per-device bits | 3 months ago |
| [go-here](https://github.com/abdullahselek/go-here) | 10 | Go client library around the HERE location based APIs. | 2 years ago |
| [smitego](https://github.com/sergiotapia/smitego) | 10 | SmiteGo is an API wrapper for the Smite game from HiRez. It is written in Go! | 7 years ago |
| [go-openproject](https://github.com/manuelbcd/go-openproject) | 9 | Go client library for OpenProject | 9 months ago |
| [gomalshare](https://github.com/MonaxGT/gomalshare) | 9 | Go library MalShare API | 3 years ago |
| [go-sophos](https://github.com/esurdam/go-sophos) | 8 | Sophos UTM 9 REST API Client in Golang | a year ago |
| [rrdaclient](https://github.com/Omie/rrdaclient) | 8 | Go bindings for RRDA https://github.com/fcambus/rrda | 7 years ago |
| [go-google-email-audit-api](https://github.com/ngs/go-google-email-audit-api) | 7 | Go Client Library for G Suite Email Audit API | 5 years ago |
| [go-zooz](https://github.com/gojuno/go-zooz) | 7 | Zooz API client for Go | 21 days ago |
| [go-sptrans](https://github.com/sergioaugrod/go-sptrans) | 6 | Go client library for the SPTrans Olho Vivo API. :bus: | a year ago |
| [gumblr](https://github.com/mattcunningham/gumblr) | 6 | A Go Wrapper for the Tumblr v2 API | 5 years ago |
| [libgoffi](https://github.com/clevabit/libgoffi) | 5 | libgoffi - libffi adapter library for Go | a year ago |
| [go-chronos](https://github.com/axelspringer/go-chronos) | 4 | :dancers: Go Chronos 3.x REST API Client | 4 years ago |
| [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) | 4 | Golang package which provides http Handlers to serve the swagger ui | 7 months ago |
| [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) | 4 | This is RAWG SDK GO. This library contains methods for interacting with RAWG API. | 22 days ago |
| [go-restcountries](https://github.com/chriscross0/go-restcountries) | 3 | Go wrapper for the REST Countries API. | 2 months ago |
| [kanka](https://github.com/Henry-Sarabia/kanka) | 3 | Go client for the Kanka API | a year ago |
| [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) | 2 | Golang SDK for AppStore Connect API (Unofficial) | a year ago |
| [playlyfe-go-sdk](https://github.com/playlyfe/playlyfe-go-sdk) | 1 | This is the official Playlyfe Golang Sdk | 6 years ago |
| [tripadvisor-golang](https://github.com/mrbenosborne/tripadvisor-golang) | 1 | A TripAdvisor API wrapper for Golang. | 2 years ago |
| [vl-go](https://github.com/verifid/vl-go) | 1 | Go client library around the VerifID identity verification layer API. | 7 months ago |


### [Utilities](#Utilities)
* General utilities and tools to make your life easier.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fzf](https://github.com/junegunn/fzf) | 41424 | :cherry_blossom: A command-line fuzzy finder | 5 hours ago |
| [hub](https://github.com/github/hub) | 21459 | A command-line tool that makes git easier to use with GitHub. | 4 days ago |
| [ctop](https://github.com/bcicen/ctop) | 12245 | Top-like interface for container metrics | 4 days ago |
| [sqlx](https://github.com/jmoiron/sqlx) | 11287 | general purpose extensions to golang's database/sql | a month ago |
| [wuzz](https://github.com/asciimoo/wuzz) | 9865 | Interactive cli tool for HTTP inspection | 4 months ago |
| [goreleaser](https://github.com/goreleaser/goreleaser) | 9401 | Deliver Go binaries as fast and easily as possible | an hour ago |
| [usql](https://github.com/xo/usql) | 6896 | Universal command-line interface for SQL databases | 2 hours ago |
| [peco](https://github.com/peco/peco) | 6693 | Simplistic interactive filtering tool | 5 months ago |
| [godropbox](https://github.com/dropbox/godropbox) | 4005 | Common libraries for writing Go services/applications. | 2 years ago |
| [hystrix-go](https://github.com/afex/hystrix-go) | 3501 | Netflix's Hystrix latency and fault tolerance library, for Go  | 4 months ago |
| [go-funk](https://github.com/thoas/go-funk) | 3136 | A modern Go utility library which provides helpers (map, find, contains, filter, ...) | 13 days ago |
| [panicparse](https://github.com/maruel/panicparse) | 2989 | Crash your app in style (Golang) | 7 days ago |
| [goreporter](https://github.com/qax-os/goreporter) | 2951 | A Golang tool that does static analysis, unit testing, code review and generate code quality report. | 3 years ago |
| [minify](https://github.com/tdewolff/minify) | 2835 | Go minifiers for web formats | 2 days ago |
| [mc](https://github.com/minio/mc) | 1981 | MinIO Client is a replacement for ls, cp, mkdir, diff and rsync commands for filesystems and object storage. | 2 hours ago |
| [storm](https://github.com/asdine/storm) | 1830 | Simple and powerful toolkit for BoltDB | 8 months ago |
| [mergo](https://github.com/imdario/mergo) | 1821 | Mergo: merging Go structs and maps since 2013. | 2 months ago |
| [spinner](https://github.com/briandowns/spinner) | 1664 | Go (golang) package with 90 configurable terminal spinner/progress indicators. | 9 days ago |
| [mole](https://github.com/davrodpin/mole) | 1528 | CLI application to create ssh tunnels focused on resiliency and user experience. | 3 months ago |
| [filetype](https://github.com/h2non/filetype) | 1468 | Fast, dependency-free Go package to infer binary file types based on the magic numbers header signature | 21 days ago |
| [boilr](https://github.com/tmrts/boilr) | 1421 | :zap: boilerplate template manager that generates files or directories from template repositories | a month ago |
| [jump](https://github.com/gsamokovarov/jump) | 1290 | Jump helps you navigate faster by learning your habits. ✌️ | a month ago |
| [cli](https://github.com/create-go-app/cli) | 1228 | ✨ Create a new production-ready project with backend, frontend and deploy automation by running one CLI command! | 5 days ago |
| [circuitbreaker](https://github.com/rubyist/circuitbreaker) | 972 | Circuit Breakers in Go | 2 years ago |
| [gtm](https://github.com/git-time-metric/gtm) | 885 | Simple, seamless, lightweight time tracking for Git | a year ago |
| [immortal](https://github.com/immortal/immortal) | 716 | ⭕  A *nix cross-platform (OS agnostic) supervisor | 2 years ago |
| [hostctl](https://github.com/guumaster/hostctl) | 705 | Your dev tool to manage /etc/hosts like a pro! | a month ago |
| [mimetype](https://github.com/gabriel-vasile/mimetype) | 644 | A fast Golang library for media type and file extension detection, based on magic numbers | 5 hours ago |
| [circuit](https://github.com/cep21/circuit) | 620 | An efficient and feature complete Hystrix like Go implementation of the circuit breaker pattern. | a month ago |
| [htcat](https://github.com/htcat/htcat) | 536 | Parallel and Pipelined HTTP GET Utility | 3 years ago |
| [ergo](https://github.com/cristianoliveira/ergo) | 489 | The management of multiple apps running over different ports made easy | 2 months ago |
| [godaemon](https://github.com/VividCortex/godaemon) | 483 | Daemonize Go applications deviously. | 6 months ago |
| [koazee](https://github.com/wesovilabs/koazee) | 480 | A StreamLike, Immutable, Lazy Loading and smart Golang Library to deal with slices. | a year ago |
| [go-dry](https://github.com/ungerik/go-dry) | 473 | DRY (don't repeat yourself) package for Go | 2 months ago |
| [scany](https://github.com/georgysavva/scany) | 471 | Library for scanning data from a database into Go structs and more | 13 days ago |
| [delve](https://github.com/derekparker/delve) | 441 | Delve is a debugger for the Go programming language. | 11 days ago |
| [gopencils](https://github.com/bndr/gopencils) | 438 | Easily consume REST APIs with Go (golang) | 3 years ago |
| [request](https://github.com/mozillazg/request) | 406 | A developer-friendly HTTP request library for Gopher. | 2 years ago |
| [gubrak](https://github.com/novalagung/gubrak) | 382 | ⚙️ Golang functional utility library with syntactic sugar. It's like lodash, but for Go | 2 years ago |
| [deepcopier](https://github.com/ulule/deepcopier) | 374 | simple struct copying for golang | 2 years ago |
| [clockwork](https://github.com/jonboulle/clockwork) | 368 | a fake clock for golang | a month ago |
| [go-rate](https://github.com/beefsack/go-rate) | 346 | A timed rate limiter for Go | a year ago |
| [retry](https://github.com/kamilsk/retry) | 312 | ♻️ The most advanced interruptible mechanism to perform actions repetitively until successful. | a year ago |
| [serve](https://github.com/syntaqx/serve) | 256 | 🍽️ a static http server anywhere you need one. | 4 days ago |
| [gohper](https://github.com/cosiner/gohper) | 255 | [UNMATAINED] common libs here. | 4 years ago |
| [scan](https://github.com/blockloop/scan) | 241 | Scan database/sql rows directly to structs, slices, and primitive types | 3 months ago |
| [util](https://github.com/shomali11/util) | 233 | A collection of useful utility functions | 2 years ago |
| [go-trigger](https://github.com/sadlil/go-trigger) | 225 | A Global event triggerer for golang. Defines functions as event with id string. Trigger the event anywhere from your project. | 5 years ago |
| [gotenv](https://github.com/subosito/gotenv) | 211 | Load environment variables from `.env` or `io.Reader` in Go. | 4 months ago |
| [grofer](https://github.com/pesos/grofer) | 189 | A system and resource monitoring tool written in Golang! | a month ago |
| [death](https://github.com/vrecan/death) | 175 | Managing go application shutdown with signals. | 19 days ago |
| [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) | 174 | go-bind-plugin generates API for exported plugin symbols (-buildmode=plugin) - go1.8+ only (http://golang.org/pkg/plugin) | 2 years ago |
| [mani](https://github.com/alajmo/mani) | 172 | CLI tool to help you manage multiple repositories | 7 days ago |
| [toolbox](https://github.com/viant/toolbox) | 169 | Toolbox - go utility library | 5 months ago |
| [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) | 167 | go-sitemap-generator is the easiest way to generate Sitemaps in Go | 18 days ago |
| [rerun](https://github.com/ivpusic/rerun) | 161 | Configurable recompiling and rerunning go apps when source changes | 4 years ago |
| [moldova](https://github.com/StabbyCutyou/moldova) | 160 | A lightweight templating system for generating random data | 4 years ago |
| [go-pattern-match](https://github.com/alexpantyukhin/go-pattern-match) | 159 | Pattern matchings for Go. | 2 years ago |
| [apm](https://github.com/topfreegames/apm) | 154 | APM is a process manager for Golang applications. | 5 years ago |
| [robustly](https://github.com/VividCortex/robustly) | 151 | Run functions resiliently in Go, catching and restarting panics | 8 months ago |
| [clipboard](https://github.com/golang-design/clipboard) | 146 | 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)  | 4 months ago |
| [changie](https://github.com/miniscruff/changie) | 143 | Automated changelog tool for preparing releases with lots of customization options | 5 days ago |
| [chyle](https://github.com/antham/chyle) | 139 | Changelog generator : use a git repository and various data sources and publish the result on external services | a month ago |
| [countries](https://github.com/biter777/countries) | 139 | Countries - ISO 3166 (ISO3166-1, ISO3166, Digit, Alpha-2 and Alpha-3) countries codes and names (on eng and rus), ISO 4217 currency designators, ITU-T E.164 IDD calling phone codes, countries capitals, UN M.49 regions codes, ccTLD countries domains, IOC/NOC and FIFA letters codes, VERY FAST, NO maps[], NO slices[], NO init() funcs, NO external links/files/data, NO interface{}, NO specific dependencies, Databases/JSON/GOB/XML/CSV compatible, Emoji countries flags and currencies support, full support ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR and ccTLD standarts. | 25 days ago |
| [onecache](https://github.com/adelowo/onecache) | 125 | One caching API, Multiple backends | 2 years ago |
| [go-bsdiff](https://github.com/gabstv/go-bsdiff) | 121 | Pure Go bsdiff and bspatch libraries and CLI tools. | 3 years ago |
| [lrserver](https://github.com/jaschaephraim/lrserver) | 120 | LiveReload server for Go [golang] | 4 years ago |
| [cryptgo](https://github.com/Gituser143/cryptgo) | 101 | A terminal application to watch crypto prices! | 3 months ago |
| [rospo](https://github.com/ferama/rospo) | 96 | 🐸 Simple and reliable ssh tunnels with embedded ssh server | 4 days ago |
| [sorty](https://github.com/jfcg/sorty) | 94 | Fast Concurrent / Parallel Sorting in Go | 14 days ago |
| [goseaweedfs](https://github.com/linxGnu/goseaweedfs) | 91 | A complete Golang client for SeaweedFS | 2 months ago |
| [nostromo](https://github.com/pokanop/nostromo) | 91 | CLI for building powerful aliases | 2 months ago |
| [mssqlx](https://github.com/linxGnu/mssqlx) | 89 | Database client library, proxy for any master slave, master master structures. Lightweight, performant and auto balancing in mind. | 4 months ago |
| [xferspdy](https://github.com/monmohan/xferspdy) | 89 | Xferspdy provides binary diff and patch library in golang. [Mentioned in Awesome Go, https://github.com/avelino/awesome-go] | 9 months ago |
| [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) | 85 | Golang Mongodb Pagination for official mongodb/mongo-go-driver package which supports both normal queries and Aggregation pipelines with all information like Total records, Page, Per Page, Previous, Next, Total Page and query results. | 2 months ago |
| [go-health](https://github.com/Talento90/go-health) | 84 | :heart: Health check your applications and dependencies | 4 years ago |
| [cmd](https://github.com/commander-cli/cmd) | 78 | A simple package to execute shell commands on linux, windows and osx | 4 days ago |
| [pm](https://github.com/VividCortex/pm) | 77 | Processlist manager with TCP listener | a year ago |
| [repeat](https://github.com/ssgreg/repeat) | 76 | Go implementation of different backoff strategies useful for retrying operations and heartbeating. | a year ago |
| [mimemagic](https://github.com/zRedShift/mimemagic) | 69 | Powerful and versatile MIME sniffing package using pre-compiled glob patterns, magic number signatures, XML document namespaces, and tree magic for mounted volumes, generated from the XDG shared-mime-info database. | a month ago |
| [netbug](https://github.com/e-dard/netbug) | 69 | Package netbug provides a handler for registering profilers on your own ServeMux. | 6 years ago |
| [unis](https://github.com/esemplastic/unis) | 67 | UNIS: A Common Architecture for String Utilities within the Go Programming Language. | 5 years ago |
| [handy](https://github.com/miguelpragier/handy) | 66 | GO Golang Utilities and helpers like validators and string formatters | a year ago |
| [limiters](https://github.com/mennanov/limiters) | 66 | Golang rate limiters for distributed applications | 7 days ago |
| [multitick](https://github.com/VividCortex/multitick) | 65 | A multiplexor for aligned time.Time tickers in Go | 8 months ago |
| [goreadability](https://github.com/philipjkim/goreadability) | 62 | Webpage summary extractor using Facebook Open Graph and arc90's readability | 3 years ago |
| [goval](https://github.com/maja42/goval) | 62 | Expression evaluation in golang | a year ago |
| [pgo](https://github.com/arthurkushman/pgo) | 60 | Go library for PHP community with convenient functions | 17 days ago |
| [minquery](https://github.com/icza/minquery) | 59 | MongoDB / mgo query that supports efficient pagination (cursors to continue listing documents where we left off). | 6 months ago |
| [go-astitodo](https://github.com/asticode/go-astitodo) | 57 | Parse TODOs in your GO code | a year ago |
| [golog](https://github.com/mlimaloureiro/golog) | 55 | Easy and simple CLI time tracker for your tasks | 3 years ago |
| [go-lock](https://github.com/viney-shih/go-lock) | 54 | go-lock is a lock library implementing read-write mutex and read-write trylock without starvation | 6 months ago |
| [filter](https://github.com/gookit/filter) | 52 | ⏳ Provide filtering, sanitizing, and conversion of Golang data. 提供对Golang数据的过滤，净化，转换。 | 6 days ago |
| [retry](https://github.com/thedevsaddam/retry) | 52 | Simple and easy retry mechanism package for Go | 7 days ago |
| [copy-pasta](https://github.com/jutkko/copy-pasta) | 49 | Universal copy paste service, works across different machines! | 2 years ago |
| [beyond](https://github.com/wesovilabs/beyond) | 46 | The Go library that will drive you to AOP world! | 3 months ago |
| [slice](https://github.com/psampaz/slice) | 46 | Type-safe functions for common Go slice operations | 2 years ago |
| [golarm](https://github.com/msempere/golarm) | 45 | Fire alarms with system events | 6 years ago |
| [goback](https://github.com/carlescere/goback) | 44 | Golang simple exponential backoff package. | 10 months ago |
| [dbt](https://github.com/nikogura/dbt) | 43 | Dynamic Binary Toolkit- A framework for running self-updating signed binaries from a central, trusted repository. | 10 months ago |
| [intrinsic](https://github.com/mengzhuo/intrinsic) | 43 | Provide Golang native SIMD intrinsics on x86/amd64 platform | 5 years ago |
| [retry-go](https://github.com/rafaeljesus/retry-go) | 43 | Retrying made simple and easy for golang :repeat:  | 3 years ago |
| [gpath](https://github.com/tenntenn/gpath) | 40 | gpath is a Go package to access a field by a path using reflect pacakge | 5 years ago |
| [go-httpheader](https://github.com/mozillazg/go-httpheader) | 37 | A Go library for encoding structs into Header fields. | a month ago |
| [myhttp](https://github.com/inancgumus/myhttp) | 35 | Simplest HTTP GET requester for Go with timeout support | 4 years ago |
| [backscanner](https://github.com/icza/backscanner) | 34 | A scanner similar to bufio.Scanner, but it reads and returns lines in reverse order, starting at a given position and going backward. | 3 months ago |
| [equalizer](https://github.com/reugn/equalizer) | 34 | A rate limiters package for Go | a year ago |
| [evaluator](https://github.com/nullne/evaluator) | 33 |  | 6 months ago |
| [gostrutils](https://github.com/ik5/gostrutils) | 32 | Collections of string utils I have created over the years | 4 months ago |
| [rclient](https://github.com/zpatrick/rclient) | 32 | Minimalistic REST client for Go applications | 2 years ago |
| [slicer](https://github.com/leaanthony/slicer) | 29 | Utility class for handling slices | 5 months ago |
| [tome](https://github.com/cyruzin/tome) | 29 | Package tome was designed to paginate simple RESTful APIs. | 2 years ago |
| [set](https://github.com/nofeaturesonlybugs/set) | 28 | Package set is a small wrapper around the official reflect package that facilitates loose type conversion and assignment into native Go types. | a day ago |
| [throttle](https://github.com/yudppp/throttle) | 28 | lodash throttle like Go library | 5 months ago |
| [sshman](https://github.com/shoobyban/sshman) | 27 | SSH Manager - manage authorized_keys file on remote servers | 8 days ago |
| [shutdown](https://github.com/ztrue/shutdown) | 26 | Golang app shutdown hooks. | 11 days ago |
| [ugo](https://github.com/alxrm/ugo) | 26 | Simple and expressive toolbox written in Go | 6 years ago |
| [generate](https://github.com/go-playground/generate) | 24 | :runner:runs go generate recursively on a specified path or environment variable and can filter by regex | 5 years ago |
| [goplaceholder](https://github.com/michiwend/goplaceholder) | 22 | a small golang lib to generate placeholder images | 6 years ago |
| [rerate](https://github.com/abo/rerate) | 21 | redis-based rate counter and rate limiter | 5 years ago |
| [ghokin](https://github.com/antham/ghokin) | 20 | Parallelized formatter with no external dependencies for gherkin (cucumber, behat...) | 18 days ago |
| [mimesniffer](https://github.com/aofei/mimesniffer) | 18 | A MIME type sniffer for Go. | 2 months ago |
| [structs](https://github.com/PumpkinSeed/structs) | 18 | Golang struct operations. | 4 years ago |
| [ctxutil](https://github.com/posener/ctxutil) | 17 | utils for Go context | 2 years ago |
| [filler](https://github.com/yaronsumel/filler) | 16 | fill struct data easily with fill tags | 5 years ago |
| [rest-go](https://github.com/edermanoel94/rest-go) | 16 | A package that provide many helpful methods for working with rest api. | a year ago |
| [dlog](https://github.com/kirillDanshin/dlog) | 15 | Simple build-time controlled debug log with ability to log where the logger was called | 4 years ago |
| [go-convert](https://github.com/Eun/go-convert) | 15 | Convert a value into another type | 8 months ago |
| [okrun](https://github.com/xta/okrun) | 15 | ok, run your gofile | 7 years ago |
| [copy](https://github.com/gotidy/copy) | 14 | Package for fast copying structs of different types | a year ago |
| [jsend](https://github.com/clevergo/jsend) | 14 | :100: JSend's implementation writen in Go(golang) | 6 months ago |
| [command](https://github.com/txgruppi/command) | 13 | Command pattern for Go with thread safe serial and parallel dispatcher | 6 years ago |
| [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) | 12 | Problem json implementation (https://tools.ietf.org/html/rfc7807) package for go | 2 years ago |
| [go-types](https://github.com/mikekonan/go-types) | 12 | Library providing opanapi3 and Go types for store/validation and transfer of ISO-4217, ISO-3166, and other types. | 2 months ago |
| [ptr](https://github.com/gotidy/ptr) | 11 | Contains functions for simplified creation of pointers from constants of basic types | 23 days ago |
| [silk](https://github.com/chrispassas/silk) | 11 | Read Silk Flow Files | a year ago |
| [retry](https://github.com/shafreeck/retry) | 10 | A pretty simple library to ensure your work to be done | 2 years ago |
| [go-countries](https://github.com/mikekonan/go-countries) | 9 |  | a year ago |
| [statiks](https://github.com/janiltonmaciel/statiks) | 9 | Fast, zero-configuration, static HTTP filer server. | a year ago |
| [blank](https://github.com/Henry-Sarabia/blank) | 7 | Detect blank strings or remove whitespace from strings | 2 years ago |
| [go-clip](https://github.com/prashantgupta24/go-clip) | 7 | A minimalistic clipboard manager for Mac. | a year ago |
| [retry](https://github.com/percolate/retry) | 7 | Percolate's Go retry package | 2 years ago |
| [sliceconv](https://github.com/Henry-Sarabia/sliceconv) | 7 | Slice conversion between primitive types | 2 years ago |
| [nfdump](https://github.com/chrispassas/nfdump) | 6 | NFDump File Reader | 5 months ago |
| [go-safe](https://github.com/kenkyu392/go-safe) | 5 | This Go package provides a sandbox for the safe execution of panic-inducing programs | a month ago |
| [go-actuator](https://github.com/sinhashubham95/go-actuator) | 4 | Golang production-ready features | 5 months ago |
| [lets-go](https://github.com/aplescia/lets-go) | 3 | Go module that provides common utilities for Cloud Native development | 9 months ago |
| [olaf](https://github.com/btnguyen2k/olaf) | 3 | Twitter Snowflake implemented in Go | 3 years ago |
| [tik](https://github.com/andy2046/tik) | 3 | hierarchical timing wheel | a year ago |
| [bleep](https://github.com/sinhashubham95/bleep) | 2 | OS Signal Handlers in Go | a year ago |
| [goctx](https://github.com/zerosnake0/goctx) | 2 | Get your context value faster | a year ago |


### [UUID](#UUID)
* Libraries for working with UUIDs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [uuid](https://github.com/google/uuid) | 3279 | Go package for UUIDs based on RFC 4122 and DCE 1.1: Authentication and Security Services. | a month ago |
| [ulid](https://github.com/oklog/ulid) | 2510 | Universally Unique Lexicographically Sortable Identifier (ULID) in Go | 3 months ago |
| [uuid](https://github.com/gofrs/uuid) | 1052 | A UUID package originally forked from github.com/satori/go.uuid | a month ago |
| [wuid](https://github.com/edwingeng/wuid) | 444 | An extremely fast UUID alternative written in golang | 5 months ago |
| [sno](https://github.com/muyo/sno) | 55 | Compact, sortable and fast unique IDs with embedded metadata. | 2 months ago |
| [nanoid](https://github.com/aidarkhanov/nanoid) | 40 | A tiny and fast Go unique string generator | 4 months ago |
| [Goid](https://github.com/JakeHL/Goid) | 29 | A UUIDv4 generation package written in go | 3 years ago |
| [uuid](https://github.com/agext/uuid) | 13 | Generate, encode, and decode UUIDs v1 with fast or cryptographic-quality random node identifier. | 2 years ago |
| [gouid](https://github.com/twharmon/gouid) | 10 | Fast, dependable universally unique ids | 8 months ago |
| [goflake](https://github.com/Hart87/goflake) | 8 | A highly scalable and serverless unique ID generator for use in distributed systems. Written in GoLang. Inspired by Twitters Snowflake. | 8 months ago |


### [Validation](#Validation)
* Libraries for validation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [joi](https://github.com/sideway/joi) | 18079 | The most powerful data validation library for JS | a month ago |
| [validator](https://github.com/go-playground/validator) | 9419 | :100:Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving | 4 days ago |
| [govalidator](https://github.com/asaskevich/govalidator) | 5194 | [Go] Package of validators and sanitizers for strings, numerics, slices and structs | 3 months ago |
| [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) | 2505 | An idiomatic Go (golang) validation package. Supports configurable and extensible validation rules (validators) using normal language constructs instead of error-prone struct tags. | a month ago |
| [govalidator](https://github.com/thedevsaddam/govalidator) | 1043 | Validate Golang request data with simple rules. Highly inspired by Laravel's request validation. | a year ago |
| [validate](https://github.com/gookit/validate) | 509 | ⚔ Go package for data validation and filtering. support Map, Struct, Form data. Go通用的数据验证与过滤库，使用简单，内置大部分常用验证、过滤器，支持自定义验证器、自定义消息、字段翻译。 | 6 days ago |
| [checkdigit](https://github.com/osamingo/checkdigit) | 85 | Provide check digit algorithms and calculators written in Go | a year ago |
| [terraform-validator](https://github.com/thazelart/terraform-validator) | 75 | A norms and conventions validator for Terraform | a year ago |
| [validate](https://github.com/gobuffalo/validate) | 66 | This package provides a framework for writing validations for Go applications. | 2 months ago |
| [jio](https://github.com/faceair/jio) | 63 | jio is a json schema validator similar to joi | 2 years ago |
| [gody](https://github.com/guiferpa/gody) | 52 | :balloon: A lightweight struct validator for Go | a year ago |
| [govalid](https://github.com/twharmon/govalid) | 23 | Struct validation using tags | 3 months ago |


### [Version Control](#Version-Control)
* Libraries for version control.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-git](https://github.com/go-git/go-git) | 2961 | A highly extensible Git implementation in pure Go. | 2 days ago |
| [git2go](https://github.com/libgit2/git2go) | 1687 | Git to Go; bindings for libgit2. Like McDonald's but tastier. | 19 days ago |
| [glab](https://github.com/profclems/glab) | 1652 | A GitLab CLI tool bringing GitLab to your command line | 4 hours ago |
| [hercules](https://github.com/src-d/hercules) | 1644 | Gaining advanced insights from Git repository history. | 2 months ago |
| [gh](https://github.com/rjeczalik/gh) | 76 | Scriptable server and net/http middleware for GitHub Webhooks. | 3 years ago |
| [go-vcs](https://github.com/sourcegraph/go-vcs) | 74 | manipulate and inspect VCS repositories in Go | 9 months ago |
| [Githooks](https://github.com/gabyx/Githooks) | 31 | 🦎 Githooks: per-repo and shared Git hooks with version control and auto update.  | 2 hours ago |
| [hgo](https://github.com/beyang/hgo) | 13 | Hgo is a collection of Go packages providing read-access to local Mercurial repositories. | 6 years ago |


### [Video](#Video)
* Libraries for manipulating video.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [goav](https://github.com/giorgisio/goav) | 1789 | Golang bindings for FFmpeg | 7 months ago |
| [m3u8](https://github.com/grafov/m3u8) | 888 | Parser and generator of M3U8-playlists for Apple HLS. Library for Go language. :cinema: | 4 days ago |
| [gmf](https://github.com/3d0c/gmf) | 731 | Go Media Framework | 3 months ago |
| [go-astits](https://github.com/asticode/go-astits) | 384 | Demux and mux MPEG Transport Streams (.ts) natively in GO | 3 months ago |
| [go-astisub](https://github.com/asticode/go-astisub) | 363 | Manipulate subtitles in GO (.srt, .ssa/.ass, .stl, .ttml, .vtt (webvtt), teletext, etc.) | a month ago |
| [libvlc-go](https://github.com/adrg/libvlc-go) | 271 | Go bindings for libVLC and high-level media player interface | 4 months ago |
| [gortsplib](https://github.com/aler9/gortsplib) | 172 | RTSP 1.0 client and server library for the Go programming language | a day ago |
| [gst](https://github.com/ziutek/gst) | 163 | Go bindings for GStreamer (retired: currently I don't use/develop this package) | a year ago |
| [go-m3u8](https://github.com/quangngotan95/go-m3u8) | 83 | Parse and generate m3u8 playlists for Apple HTTP Live Streaming (HLS) in Golang (ported from gem https://github.com/sethdeckard/m3u8) | 2 years ago |
| [v4l](https://github.com/korandiz/v4l) | 63 | Facade to the Video4Linux video capture interface.  | 12 days ago |
| [libgosubs](https://github.com/wargarblgarbl/libgosubs) | 16 | golang library to read and write various subtitle formats | 2 years ago |
| [go-mpd](https://github.com/unki2aut/go-mpd) | 10 | Go library for parsing and generating MPEG-DASH Media Presentation Description (MPD) files | a year ago |


### [Web Frameworks](#Web-Frameworks)
* 

#### [Full stack web frameworks](#Full-stack-web-frameworks.)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gin](https://github.com/gin-gonic/gin) | 54586 | Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin. | 2 hours ago |
| [echo](https://github.com/labstack/echo) | 21426 | High performance, minimalist Go web framework | 5 hours ago |
| [fiber](https://github.com/gofiber/fiber) | 17647 | ⚡️ Express inspired web framework written in Go | 13 hours ago |
| [revel](https://github.com/revel/revel) | 12472 | A high productivity, full-stack web framework for the Go language. | 2 months ago |
| [goa](https://github.com/goadesign/goa) | 4533 | Design-based APIs and microservices in Go | 3 hours ago |
| [gizmo](https://github.com/nytimes/gizmo) | 3579 | A Microservice Toolkit from The New York Times | 5 months ago |
| [go-json-rest](https://github.com/ant0ine/go-json-rest) | 3490 | A quick and easy way to setup a RESTful JSON API | a year ago |
| [macaron](https://github.com/go-macaron/macaron) | 3242 | Package macaron is a high productive and modular web framework in Go. | 22 days ago |
| [utron](https://github.com/gernest/utron) | 2208 | A lightweight MVC framework for Go(Golang) | 3 years ago |
| [go-tigertonic](https://github.com/rcrowley/go-tigertonic) | 997 | A Go framework for building JSON web services inspired by Dropwizard | 3 years ago |
| [goyave](https://github.com/go-goyave/goyave) | 932 | 🍐 Elegant Golang REST API Framework | 14 days ago |
| [tango](https://github.com/lunny/tango) | 833 | This is only a mirror and Moved to https://gitea.com/lunny/tango | 3 years ago |
| [gearbox](https://github.com/gogearbox/gearbox) | 589 | Gearbox :gear: is a web framework written in Go with a focus on high performance | a month ago |
| [gongular](https://github.com/mustafaakin/gongular) | 446 | A different approach to Go web frameworks | 2 years ago |
| [aero](https://github.com/aerogo/aero) | 426 | :bullettrain_side: High-performance web server for Go. | 2 months ago |
| [neo](https://github.com/ivpusic/neo) | 414 | Go Web Framework | 4 years ago |
| [air](https://github.com/aofei/air) | 407 | An ideally refined web framework for Go. | 9 months ago |
| [mango](https://github.com/paulbellamy/mango) | 359 | Mango is a modular web-application framework for Go, inspired by Rack, and PEP333. | 4 years ago |
| [beego](https://github.com/astaxie/beego) | 346 | beego is an open-source, high-performance web framework for the Go programming language. | 5 months ago |
| [gondola](https://github.com/rainycape/gondola) | 308 | The web framework for writing faster sites, faster | 3 years ago |
| [flamingo](https://github.com/i-love-flamingo/flamingo) | 270 | Flamingo Framework and Core Library. Flamingo is a go based framework for pluggable web projects. It is used to build scalable and maintainable (web)applications. | a month ago |
| [golf](https://github.com/dinever/golf) | 251 | :golf: The Golf web framework | 4 months ago |
| [flamingo-commerce](https://github.com/i-love-flamingo/flamingo-commerce) | 249 | Flexible E-Commerce Framework on top of Flamingo. Used to build E-Commerce "Portals" and connect it with the help of individual Adapters to other services.  | a month ago |
| [webgo](https://github.com/bnkamalesh/webgo) | 212 | A microframework to build web apps; with handler chaining, middleware support, and most of all; standard library compliant HTTP handlers(i.e. http.HandlerFunc). | 3 months ago |
| [ginrpc](https://github.com/xxjwxc/ginrpc) | 200 | gin auto binding,grpc, and annotated route,gin 注解路由, grpc,自动参数绑定工具 | a month ago |
| [uadmin](https://github.com/uadmin/uadmin) | 166 | The web framework for Golang | 6 days ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 162 | hiboot is a high performance web and cli application framework with dependency injection support | 5 days ago |
| [rk-boot](https://github.com/rookie-ninja/rk-boot) | 127 | Bootstrapper for golang application. See https://rkdev.info/docs/ for details. | 2 days ago |
| [go-rest](https://github.com/ungerik/go-rest) | 124 | A small and evil REST framework for Go | 5 years ago |
| [appy](https://github.com/appist/appy) | 114 | An opinionated productive web framework that helps scaling business easier. | 2 months ago |
| [patron](https://github.com/beatlabs/patron) | 89 | Microservice framework following best cloud practices with a focus on productivity. | 12 hours ago |
| [microservice](https://github.com/claygod/microservice) | 76 | This library provides a simple microservice framework based on clean architecture principles with a working example implemented. | 21 days ago |
| [vox](https://github.com/aisk/vox) | 74 | Simple and lightweight Go web framework inspired by koa | 7 months ago |
| [golax](https://github.com/fulldump/golax) | 72 | Golax, a go implementation for the Lax framework. | 4 years ago |
| [rux](https://github.com/gookit/rux) | 69 | ⚡ Rux is an simple and fast web framework. support param route binding, middleware, compatible http.Handler interface. 简单且快速的 Go api/web 框架，支持参数路由绑定，中间件，兼容 http.Handler 接口 | 6 days ago |
| [yarf](https://github.com/yarf-framework/yarf) | 64 | Yet Another REST Framework | 3 years ago |
| [fireball](https://github.com/zpatrick/fireball) | 55 | Go web framework with a natural feel | 3 years ago |
| [goa](https://github.com/goa-go/goa) | 46 | Goa is a  web framework based on middleware, like koa.js. | 2 years ago |
| [gotuna](https://github.com/gotuna/gotuna) | 37 | GoTuna a lightweight web framework for Go with mux router, middlewares, user sessions, templates, embedded views, and static file server. | 6 months ago |
| [api](https://github.com/resoursea/api) | 31 | A REST framework for quickly writing resource based services in Golang. | 7 years ago |
| [rex](https://github.com/goanywhere/rex) | 31 | Pleasures for Web in Golang | 4 years ago |
| [goweb](https://github.com/twharmon/goweb) | 24 | Lightweight web framework based on net/http. | 4 days ago |
| [banjo](https://github.com/n4Zz2/banjo) | 18 | BANjO is a simple web framework written in Go (golang) | 4 years ago |


#### [Actual middlewares](#Actual-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tollbooth](https://github.com/didip/tollbooth) | 2092 | Simple middleware to rate-limit HTTP requests. | a month ago |
| [cors](https://github.com/rs/cors) | 1995 | Go net/http configurable handler to handle CORS requests | 20 days ago |
| [limiter](https://github.com/ulule/limiter) | 1477 | Dead simple rate limit middleware for Go. | 14 hours ago |
| [go-server-timing](https://github.com/mitchellh/go-server-timing) | 823 | Go (golang) library for creating and consuming HTTP Server-Timing headers | a year ago |
| [go-fault](https://github.com/github/go-fault) | 420 | Fault injection library in Go using standard http middleware | 4 months ago |
| [ln-paywall](https://github.com/philippgille/ln-paywall) | 118 | Go middleware for monetizing your API on a per-request basis with Bitcoin and Lightning ⚡️ | 3 years ago |
| [xff](https://github.com/sebest/xff) | 86 | A Golang Middleware to handle X-Forwarded-For Header | a year ago |
| [formjson](https://github.com/rs/formjson) | 35 | Go net/http handler to transparently manage posted JSON | 6 years ago |
| [rk-gin](https://github.com/rookie-ninja/rk-gin) | 20 | Bootstrapper and interceptor for gin-gonic/gin framework. See https://rkdev.info/docs/ for docs. | 10 days ago |
| [rk-grpc](https://github.com/rookie-ninja/rk-grpc) | 20 | grpc related entry. See https://rkdev.info/docs/ for details. | 10 days ago |
| [client-timing](https://github.com/posener/client-timing) | 19 | An HTTP client for go-server-timing middleware. Enables automatic timing propagation through HTTP calls between servers. | 2 years ago |
| [mid](https://github.com/bobg/mid) | 3 | Middleware for HTTP services in Go | 5 months ago |


#### [Libraries for creating HTTP middlewares](#Libraries-for-creating-HTTP-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [negroni](https://github.com/urfave/negroni) | 7135 | Idiomatic HTTP Middleware for Golang | 16 days ago |
| [alice](https://github.com/justinas/alice) | 2442 | Painless middleware chaining for Go | 2 months ago |
| [render](https://github.com/unrolled/render) | 1568 | Go package for easily rendering JSON, XML, binary data, and HTML templates responses. | 2 months ago |
| [stats](https://github.com/thoas/stats) | 581 | A Go middleware that stores various information about your web application (response time, status code count, etc.) | 3 years ago |
| [interpose](https://github.com/carbocation/interpose) | 295 | Minimalist net/http middleware for golang | 5 years ago |
| [renderer](https://github.com/thedevsaddam/renderer) | 231 | Simple, lightweight and faster response (JSON, JSONP, XML, YAML, HTML, File) rendering package for Go | a year ago |
| [muxchain](https://github.com/stephens2424/muxchain) | 209 | Lightweight Middleware for net/http | 3 years ago |
| [gores](https://github.com/alioygur/gores) | 96 | Go package that handles HTML, JSON, XML and etc. responses | a year ago |
| [rye](https://github.com/InVisionApp/rye) | 95 | A tiny http middleware for Golang with added handlers for common needs. | 3 years ago |
| [mediary](https://github.com/HereMobilityDevelopers/mediary) | 78 | Add interceptors to GO http.Client | 2 years ago |
| [chain](https://github.com/codemodus/chain) | 63 | Composable chains of nested http.Handler instances. | 3 years ago |
| [wrap](https://github.com/go-on/wrap) | 59 | Go http.Hander based middleware stack with context sharing | 3 years ago |
| [catena](https://github.com/codemodus/catena) | 7 | gRPC interceptor catenation. | 3 years ago |


#### [Routers](#Routers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mux](https://github.com/gorilla/mux) | 15823 | A powerful HTTP router and URL matcher for building Go web servers with 🦍 | 3 hours ago |
| [httprouter](https://github.com/julienschmidt/httprouter) | 13583 | A high performance HTTP request router that scales well | 2 months ago |
| [chi](https://github.com/go-chi/chi) | 10723 | lightweight, idiomatic and composable router for building Go HTTP services | 7 days ago |
| [web](https://github.com/gocraft/web) | 1454 | Go Router + Middleware. Your Contexts. | a year ago |
| [bone](https://github.com/go-zoo/bone) | 1277 | Lightning Fast HTTP Multiplexer | 3 years ago |
| [goji](https://github.com/goji/goji) | 893 | Goji is a minimalistic and flexible HTTP request multiplexer for Go (golang) | 2 years ago |
| [fasthttprouter](https://github.com/buaazp/fasthttprouter) | 869 | A high performance fasthttp request router that scales well | 3 years ago |
| [httptreemux](https://github.com/dimfeld/httptreemux) | 520 | High-speed, flexible tree-based HTTP router for Go. | 2 months ago |
| [gorouter](https://github.com/xujiajun/gorouter) | 511 | xujiajun/gorouter is a simple and fast HTTP router for Go. It is easy to build RESTful APIs and your web framework. | 2 years ago |
| [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) | 424 | An extremely fast Go (golang) HTTP router that supports regular expression route matching. Comes with full support for building RESTful APIs. | 4 months ago |
| [lars](https://github.com/go-playground/lars) | 384 | :rotating_light: Is a lightweight, fast and extensible zero allocation HTTP router for Go used to create customizable frameworks. | 3 years ago |
| [siesta](https://github.com/VividCortex/siesta) | 351 | Composable framework for writing HTTP handlers in Go. | 8 months ago |
| [vestigo](https://github.com/husobee/vestigo) | 265 | Echo Inspired Stand Alone URL Router | a year ago |
| [router](https://github.com/gowww/router) | 159 | ⚡️ A lightning fast HTTP router | 2 years ago |
| [pure](https://github.com/go-playground/pure) | 122 | :non-potable_water: Is a lightweight  HTTP router that sticks to the std "net/http" implementation | a year ago |
| [alien](https://github.com/gernest/alien) | 120 | A lightweight and  fast http router from outer space | 3 years ago |
| [gorouter](https://github.com/vardius/gorouter) | 103 | Go Server/API micro framework, HTTP request router, multiplexer, mux | 2 months ago |
| [violetear](https://github.com/nbari/violetear) | 103 | Go HTTP router | 8 months ago |
| [Bxog](https://github.com/claygod/Bxog) | 101 | Bxog is a simple and fast HTTP router for Go (HTTP request multiplexer). | 2 years ago |
| [xmux](https://github.com/rs/xmux) | 93 | xmux is a httprouter fork on top of xhandler (net/context aware) | 5 years ago |
| [bellt](https://github.com/GuilhermeCaruso/bellt) | 52 | :bell: A simple Go router | 2 years ago |
| [ngamux](https://github.com/ngamux/ngamux) | 45 | Simple HTTP router for Go | 3 months ago |
| [fastrouter](https://github.com/razonyang/fastrouter) | 19 | FastRouter is a fast, flexible HTTP router written in Go. | 4 years ago |
| [route](https://github.com/goroute/route) | 6 | Go Route - Simple yet powerful HTTP request multiplexer | 2 years ago |


### [WebAssembly](#WebAssembly)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tinygo](https://github.com/tinygo-org/tinygo) | 9177 | Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM. | an hour ago |
| [dom](https://github.com/dennwc/dom) | 438 | DOM library for Go and WASM | 2 years ago |
| [go-canvas](https://github.com/markfarnan/go-canvas) | 149 | Library to use HTML5 Canvas  from Go-WASM, with all drawing within go code | a year ago |
| [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) | 111 | Run WASM tests inside your browser | 2 months ago |
| [webapi](https://github.com/gowebapi/webapi) | 91 | Go Lang Web Assembly bindings for DOM, HTML etc | 3 hours ago |
| [vert](https://github.com/norunners/vert) | 57 | WebAssembly interop between Go and JS values. | 13 days ago |


### [Windows](#Windows)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ole](https://github.com/go-ole/go-ole) | 830 | win32 ole implementation for golang | a month ago |
| [d3d9](https://github.com/gonutz/d3d9) | 128 | Direct3D9 wrapper for Go. | a month ago |
| [gosddl](https://github.com/MonaxGT/gosddl) | 8 | GoSDDL converter | 3 years ago |


### [XML](#XML)
* Libraries and tools for manipulating XML.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zek](https://github.com/miku/zek) | 523 | Generate a Go struct from XML. | 4 months ago |
| [xpath](https://github.com/antchfx/xpath) | 445 | XPath package for Golang, supports HTML, XML, JSON document query. | 4 months ago |
| [xquery](https://github.com/antchfx/xquery) | 154 | Extract data or evaluate value from HTML/XML documents using XPath | 4 years ago |
| [xml2map](https://github.com/sbabiv/xml2map) | 37 | XML to MAP converter written Golang | a month ago |
| [xmlwriter](https://github.com/shabbyrobe/xmlwriter) | 20 | xmlwriter is a pure-Go library providing procedural XML generation based on libxml2's xmlwriter module | 10 months ago |
| [XML-Comp](https://github.com/XML-Comp/XML-Comp) | 15 | Compare ANY markup documents. | 3 years ago |


## [Tools](#Tools)
* Go software and plugins.

### [Code Analysis](#Code-Analysis)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-tools](https://github.com/dominikh/go-tools) | 4349 | Staticcheck - The advanced Go linter | 3 days ago |
| [go-tools](https://github.com/dominikh/go-tools) | 4349 | Staticcheck - The advanced Go linter | 3 days ago |
| [lint](https://github.com/golang/lint) | 3926 | [mirror] This is a linter for Go source code. (deprecated) | 8 months ago |
| [errcheck](https://github.com/kisielk/errcheck) | 1777 | errcheck checks that you checked errors. | 19 days ago |
| [go-critic](https://github.com/go-critic/go-critic) | 1208 | The most opinionated Go source code linter for code audit. | 18 hours ago |
| [gcvis](https://github.com/davecheney/gcvis) | 1050 | Visualise Go program GC trace data in real time | 3 years ago |
| [php-parser](https://github.com/z7zmey/php-parser) | 847 | PHP parser written in Go | 8 months ago |
| [goplantuml](https://github.com/jfeliu007/goplantuml) | 628 | PlantUML Class Diagram Generator for golang projects | a month ago |
| [goast-viewer](https://github.com/yuroyoro/goast-viewer) | 572 | Golang AST visualizer | 3 years ago |
| [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) | 553 | Find outdated dependencies of your Go projects. go-mod-outdated provides a table view of the go list -u -m -json all command which lists all dependencies of a Go project and their available minor and patch updates. It also provides a way to filter indirect dependencies and dependencies without updates. | 2 days ago |
| [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) | 550 | Clean architecture validator for go, like a The Dependency Rule and interaction between packages in your Go projects. | 2 months ago |
| [goreturns](https://github.com/sqs/goreturns) | 506 | A gofmt/goimports-like tool for Go programmers that fills in Go return statements with zero values to match the func return types | a year ago |
| [todocheck](https://github.com/preslavmihaylov/todocheck) | 362 | A static code analyser for annotated TODO comments | 3 months ago |
| [unconvert](https://github.com/mdempsky/unconvert) | 314 | Remove unnecessary type conversions from Go source | 2 years ago |
| [golines](https://github.com/segmentio/golines) | 292 | A golang formatter that fixes long lines | 19 hours ago |
| [tickgit](https://github.com/augmentable-dev/tickgit) | 272 | Manage your repository's TODOs, tickets and checklists as config in your codebase. | 2 years ago |
| [dupl](https://github.com/mibk/dupl) | 267 | a tool for code clone detection | a year ago |
| [gostatus](https://github.com/shurcooL/gostatus) | 245 | A command line tool that shows the status of Go repositories. | 3 years ago |
| [apicompat](https://github.com/bradleyfalzon/apicompat) | 175 | apicompat checks recent changes to a Go project for backwards incompatible changes | 5 years ago |
| [checkstyle](https://github.com/qiniu/checkstyle) | 118 | checkstyle for go | 10 months ago |
| [lint](https://github.com/surullabs/lint) | 66 | Run linters from Go code -  | 3 years ago |
| [validate](https://github.com/mccoyst/validate) | 60 | A Go package to automatically validate fields with tags | 6 years ago |
| [go-outdated](https://github.com/firstrow/go-outdated) | 44 | Find outdated golang packages | 3 years ago |
| [blanket](https://github.com/verygoodsoftwarenotvirus/blanket) | 14 | MOVED TO GITLAB | 3 years ago |
| [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) | 8 | Golang Ifood API SDK  | 2 months ago |


### [Editor Plugins](#Editor-Plugins)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vim-go](https://github.com/fatih/vim-go) | 14166 | Go development plugin for Vim | 2 months ago |
| [tools](https://github.com/golang/tools) | 5790 | [mirror] Go Tools | an hour ago |
| [gocode](https://github.com/nsf/gocode) | 4941 | An autocompletion daemon for the Go programming language | 2 months ago |
| [GoSublime](https://github.com/DisposaBoy/GoSublime) | 3416 | A Golang plugin collection for SublimeText 3, providing code completion and other IDE-like features. | a year ago |
| [vscode-go](https://github.com/golang/vscode-go) | 2321 | Go extension for Visual Studio Code | 5 hours ago |
| [go-plus](https://github.com/joefitzgerald/go-plus) | 1519 | An Enhanced Go Experience For The Atom Editor | 8 months ago |
| [go-mode.el](https://github.com/dominikh/go-mode.el) | 1216 | Emacs mode for the Go programming language | a month ago |
| [coc-go](https://github.com/josa42/coc-go) | 413 | Go language server extension using gopls for coc.nvim. | 5 days ago |
| [Watch](https://github.com/eaburns/Watch) | 188 | Watches for changes in a directory tree and reruns a command in an acme win or just on the terminal. | 4 years ago |
| [goimports-reviser](https://github.com/incu6us/goimports-reviser) | 100 | Right imports sorting & code formatting tool (goimports alternative) | 23 days ago |
| [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) | 88 | Vim compiler plugin for Go (golang) | 6 years ago |
| [go-language-server](https://github.com/theia-ide/go-language-server) | 31 | A Go language server. | 3 years ago |
| [gounit-vim](https://github.com/hexdigest/gounit-vim) | 22 | Vim plugin for https://github.com/hexdigest/gounit | 3 years ago |
| [theia-go-extension](https://github.com/theia-ide/theia-go-extension) | 16 | Theia Go Extension | 3 years ago |
| [vscode-go-doc](https://github.com/msyrus/vscode-go-doc) | 5 | An Microsoft Visual Code extension for Golang to print symbol definition to output | 7 months ago |


### [Go Generate Tools](#Go-Generate-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gotests](https://github.com/cweill/gotests) | 3621 | Automatically generate Go test boilerplate from your source code. | 3 months ago |
| [genny](https://github.com/cheekybits/genny) | 1620 | Elegant generics for Go | 5 months ago |
| [re2dfa](https://github.com/opennota/re2dfa) | 190 | Transform regular expressions into finite state machines and output Go source code. This repository has migrated to https://gitlab.com/opennota/re2dfa | 3 years ago |
| [xgen](https://github.com/xuri/xgen) | 129 | XSD (XML Schema Definition) parser and Go/C/Java/Rust/TypeScript code generator | a month ago |
| [gonerics](https://github.com/bouk/gonerics) | 113 | Generics for go | 7 years ago |
| [hasgo](https://github.com/DylanMeeus/hasgo) | 108 | Haskell-flavoured functions for Go :smiley: | 8 months ago |
| [gocontracts](https://github.com/Parquery/gocontracts) | 78 | A tool for design-by-contract in Go | 3 years ago |
| [gounit](https://github.com/hexdigest/gounit) | 61 | Unit tests generator for Go programming language | 3 years ago |
| [generic](https://github.com/usk81/generic) | 41 | flexible data type for Go | a year ago |
| [godal](https://github.com/mafulong/godal) | 11 | godal provides the ability to generate specific golang code. The godal is to enable developers to write fast code in an expressive way. | 3 months ago |


### [Go Tools](#Go-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-swagger](https://github.com/go-swagger/go-swagger) | 7115 | Swagger 2.0 implementation for go | 4 days ago |
| [OctoLinker](https://github.com/OctoLinker/OctoLinker) | 4864 | OctoLinker — Links together, what belongs together | 14 hours ago |
| [go-callvis](https://github.com/ofabry/go-callvis) | 3740 | Visualize call graph of a Go program using Graphviz | 2 months ago |
| [depth](https://github.com/KyleBanks/depth) | 667 | Visualize Go Dependency Trees | a month ago |
| [richgo](https://github.com/kyoh86/richgo) | 641 | Enrich `go test` outputs with text decorations. | a day ago |
| [rts](https://github.com/galeone/rts) | 227 | RTS: request to struct. Generates Go structs from JSON server responses. | 4 months ago |
| [godbg](https://github.com/tylerwince/godbg) | 181 | Go implementation of the Rust `dbg` macro | 3 years ago |
| [typex](https://github.com/dtgorski/typex) | 136 | [TOOL, CLI] - Filter and examine Go type structures, interfaces and their transitive dependencies and relationships. Export structural types as TypeScript value object or bare type representations. | a year ago |
| [colorgo](https://github.com/songgao/colorgo) | 107 | Colorize (highlight) `go build` command output | a year ago |
| [gothanks](https://github.com/psampaz/gothanks) | 106 | GoThanks automatically stars Go's official repository and your go.mod github dependencies, providing a simple way  to say thanks to the maintainers of the modules you use and the contributors of Go itself. | 10 months ago |
| [roumon](https://github.com/becheran/roumon) | 69 | Universal goroutine monitor using pprof and termui  | 9 months ago |
| [igo](https://github.com/rocketlaunchr/igo) | 51 | Improved Go Syntax (transpiler) | 2 years ago |
| [go-james](https://github.com/pieterclaerhout/go-james) | 50 | James is your butler and helps you to create, build, debug, test and run your Go projects | 15 days ago |
| [go-pkg-complete](https://github.com/skelterjohn/go-pkg-complete) | 39 | bash completion for go and wgo | 4 years ago |
| [generator-go-lang](https://github.com/axelspringer/generator-go-lang) | 24 | :guardsman: A teeny tiny and somewhat opinionated generator for your next golang project | 2 years ago |
| [gomodrun](https://github.com/dustinblackman/gomodrun) | 18 | The forgotten go tool that executes and caches binaries included in go.mod files. | 4 months ago |
| [docs](https://github.com/go-oas/docs) | 9 | Automatically generate RESTful API documentation for GO projects - aligned with Open API Specification standard | 10 months ago |
| [modver](https://github.com/bobg/modver) | 0 |  | 17 days ago |


### [DevOps Tools](#DevOps-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kubernetes](https://github.com/kubernetes/kubernetes) | 84324 | Production-Grade Container Scheduling and Management | 12 minutes ago |
| [moby](https://github.com/moby/moby) | 61942 | Moby Project - a collaborative project for the container ecosystem to assemble container-based systems | 10 hours ago |
| [traefik](https://github.com/traefik/traefik) | 36373 | The Cloud Native Application Proxy | 9 hours ago |
| [gitea](https://github.com/go-gitea/gitea) | 27754 | Git with a cup of tea, painless self-hosted git service | 2 hours ago |
| [vegeta](https://github.com/tsenart/vegeta) | 18856 | HTTP load testing tool and library. It's over 9000! | 4 months ago |
| [packer](https://github.com/hashicorp/packer) | 13425 | Packer is a tool for creating identical machine images for multiple platforms from a single source configuration. | 10 hours ago |
| [hey](https://github.com/rakyll/hey) | 12666 | HTTP load generator, ApacheBench (ab) replacement, formerly known as rakyll/boom | a month ago |
| [webhook](https://github.com/adnanh/webhook) | 7305 | webhook is a lightweight incoming webhook server to run shell commands | 9 days ago |
| [gvm](https://github.com/moovweb/gvm) | 6914 | Go Version Manager | 20 days ago |
| [gaia](https://github.com/gaia-pipeline/gaia) | 4549 | Build powerful pipelines in any programming language. | 4 months ago |
| [gox](https://github.com/mitchellh/gox) | 4165 | A dead simple, no frills Go cross compile tool | 10 months ago |
| [bosun](https://github.com/bosun-monitor/bosun) | 3231 | Time Series Alerting Framework | 3 months ago |
| [ddosify](https://github.com/ddosify/ddosify) | 3222 | High-performance load testing tool, written in Golang. | 12 hours ago |
| [bombardier](https://github.com/codesenberg/bombardier) | 2980 | Fast cross-platform HTTP benchmarking tool written in Go | 19 days ago |
| [pomerium](https://github.com/pomerium/pomerium) | 2884 | Pomerium is an identity-aware access proxy. | 3 hours ago |
| [script](https://github.com/bitfield/script) | 1961 | Making it easy to write shell-like scripts in Go | 9 days ago |
| [fac](https://github.com/mkchoi212/fac) | 1741 | Easy-to-use CUI for fixing git conflicts | 2 years ago |
| [kala](https://github.com/ajvb/kala) | 1741 | Modern Job Scheduler | 4 hours ago |
| [goxc](https://github.com/laher/goxc) | 1672 | a build tool for Go, with a focus on cross-compiling, packaging and deployment | 2 years ago |
| [statusok](https://github.com/sanathp/statusok) | 1521 | Monitor your Website and APIs from your Computer. Get Notified through Slack, E-mail when your server is down or response time is more than expected.  | 5 months ago |
| [s3gof3r](https://github.com/rlmcpherson/s3gof3r) | 1115 | Fast, concurrent, streaming access to Amazon S3, including gof3r, a CLI. http://godoc.org/github.com/rlmcpherson/s3gof3r | 4 months ago |
| [go-selfupdate](https://github.com/sanbornm/go-selfupdate) | 902 | Enable your Go applications to self update | 4 months ago |
| [s5cmd](https://github.com/peak/s5cmd) | 896 | Parallel S3 and local filesystem execution tool. | 5 days ago |
| [skm](https://github.com/TimothyYe/skm) | 747 | A simple and powerful SSH keys manager | 12 days ago |
| [scaleway-cli](https://github.com/scaleway/scaleway-cli) | 722 | Command Line Interface for Scaleway | 6 days ago |
| [ghorg](https://github.com/gabrie30/ghorg) | 654 | Quickly clone an entire org/users repositories into one directory - Supports GitHub, GitLab, Bitbucket, and more 🥚 | 10 hours ago |
| [utask](https://github.com/ovh/utask) | 585 | µTask is an automation engine that models and executes business processes declared in yaml. ✏️📋 | 13 days ago |
| [kool](https://github.com/kool-dev/kool) | 569 | From local development to the cloud: development workflow made easy. | 11 days ago |
| [cassowary](https://github.com/rogerwelin/cassowary) | 552 | :rocket: Modern cross-platform HTTP load-testing tool written in Go | 2 months ago |
| [aurora](https://github.com/xuri/aurora) | 545 | Cross-platform beanstalkd queue server admin console. | 5 months ago |
| [govvv](https://github.com/ahmetb/govvv) | 512 | "go build" wrapper to add version info to Golang applications | 2 years ago |
| [gonative](https://github.com/inconshreveable/gonative) | 326 | Build Go Toolchains /w native libs for cross-compilation | 5 years ago |
| [pewpew](https://github.com/bengadbois/pewpew) | 308 | Flexible HTTP command line stress tester for websites and web services | 23 days ago |
| [trubka](https://github.com/xitonix/trubka) | 308 | A CLI tool for Kafka | a year ago |
| [jenkins-cli](https://github.com/jenkins-zh/jenkins-cli) | 301 | Jenkins CLI allows you to manage your Jenkins in an easy way. Jenkins 命令行客户端 | 6 days ago |
| [mora](https://github.com/emicklei/mora) | 297 | MongoDB generic REST server in Go | 9 months ago |
| [lstags](https://github.com/ivanilves/lstags) | 284 | Explore Docker registries and manipulate Docker images! | 6 months ago |
| [balerter](https://github.com/balerter/balerter) | 241 | Script Based Alerting Manager | 23 days ago |
| [dogo](https://github.com/liudng/dogo) | 238 | Monitoring changes in the source file and automatically compile and run (restart). | 3 years ago |
| [manssh](https://github.com/xwjdsh/manssh) | 237 | Manage your ssh alias configs easily. | 6 days ago |
| [godbg](https://github.com/sirnewton01/godbg) | 224 | Web-based gdb front-end application | 4 years ago |
| [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) | 216 | easyssh-proxy provides a simple implementation of some SSH protocol features in Go | a month ago |
| [blast](https://github.com/dave/blast) | 202 | Blast is a simple tool for API load testing and batch jobs | 4 years ago |
| [gobrew](https://github.com/cryptojuice/gobrew) | 186 | Shell script to download and set GO environmental paths to allow multiple versions. | 2 years ago |
| [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) | 177 | OpenAPI Terraform Provider that configures itself at runtime with the resources exposed by the service provider (defined in a swagger file) | 18 days ago |
| [abbreviate](https://github.com/dnnrly/abbreviate) | 174 | Supporting your devops by shortening your strings using common abbreviations and clever guesswork | 3 months ago |
| [ostent](https://github.com/ostrost/ostent) | 171 | Ostent is a server tool to collect, display and report system metrics. | 4 years ago |
| [kcli](https://github.com/cswank/kcli) | 163 | A kafka command line browser | 2 years ago |
| [grapes](https://github.com/yaronsumel/grapes) | 152 | easy way to distribute commands over ssh. | a year ago |
| [winrm-cli](https://github.com/masterzen/winrm-cli) | 135 | Command-line tool to remotely execute commands on Windows machines through WinRM | 12 days ago |
| [dockerfile-generator](https://github.com/ozankasikci/dockerfile-generator) | 119 | dfg - Generates dockerfiles based on various input channels.  | 2 years ago |
| [drone-scp](https://github.com/appleboy/drone-scp) | 93 | Copy files and artifacts via SSH using a binary, docker or Drone CI. | 3 months ago |
| [go-furnace](https://github.com/go-furnace/go-furnace) | 85 | Go Hosting Solution for AWS, Google Could and Digital Ocean | 2 months ago |
| [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) | 72 | S3 Reverse Proxy with GET, PUT and DELETE methods and authentication (OpenID Connect and Basic Auth) | a day ago |
| [dropship](https://github.com/ChrisMcKenzie/dropship) | 56 | Super simple deployment tool | 3 years ago |
| [drone-jenkins](https://github.com/appleboy/drone-jenkins) | 32 | Drone plugin for trigger Jenkins jobs. | 3 months ago |
| [rodent](https://github.com/alouche/rodent) | 31 | Manage Go Versions/Projects/Dependencies | 5 years ago |
| [awsenv](https://github.com/soniah/awsenv) | 27 | AWS environment config loader | 3 years ago |
| [lwc](https://github.com/timdp/lwc) | 25 | A live-updating version of the UNIX wc command. | 2 years ago |
| [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) | 24 | Docker image for building Go binaries with MinGW toolchain | a day ago |
| [httpref](https://github.com/dnnrly/httpref) | 18 | Command line, offline, access to HTTP status code, common header, and port references | 3 months ago |
| [depcharge](https://github.com/centerorbit/depcharge) | 17 | DepCharge is a tool designed to help orchestrate the execution of commands across many directories at once. | 19 days ago |
| [sg](https://github.com/ChristopherRabotin/sg) | 5 | Stress gauge allows one to gauge response times of an HTTP service under stress. | 5 years ago |
| [aptly-fork](https://github.com/smira/aptly-fork) | 3 | aptly - Debian repository management tool (fork of aptly-dev/aptly) | 2 years ago |


### [Other Software](#Other-Software)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [croc](https://github.com/schollz/croc) | 18135 | Easily and securely send things from one computer to another :crocodile: :package: | 5 days ago |
| [restic](https://github.com/restic/restic) | 15335 | Fast, secure, efficient backup program | 18 hours ago |
| [goreplay](https://github.com/buger/goreplay) | 15027 | GoReplay is an open-source tool for capturing and replaying live HTTP traffic into a test environment in order to continuously test your system with real data. It can be used to increase confidence in code deployments, configuration changes and infrastructure changes. | 3 days ago |
| [seaweedfs](https://github.com/chrislusf/seaweedfs) | 13622 | SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding. | 17 hours ago |
| [comcast](https://github.com/tylertreat/comcast) | 7728 | Simulating shitty network connections so you can build better systems. | 14 days ago |
| [confd](https://github.com/kelseyhightower/confd) | 7686 | Manage local application configuration files using templates and data from etcd or consul | 3 months ago |
| [toxiproxy](https://github.com/Shopify/toxiproxy) | 7681 | :alarm_clock: :fire: A TCP proxy to simulate network and system conditions for chaos and resiliency testing | 11 hours ago |
| [liteide](https://github.com/visualfc/liteide) | 6687 | LiteIDE is a simple, open source, cross-platform Go IDE.  | 3 days ago |
| [drive](https://github.com/odeke-em/drive) | 6272 | Google Drive client for the commandline | a year ago |
| [nes](https://github.com/fogleman/nes) | 4968 | NES emulator written in Go. | 7 months ago |
| [duplicacy](https://github.com/gilbertchen/duplicacy) | 4001 | A new generation cloud backup tool  | 14 days ago |
| [scc](https://github.com/boyter/scc) | 3001 | Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go | 6 days ago |
| [mylg](https://github.com/mehrdadrad/mylg) | 2541 | Network Diagnostic Tool | 2 years ago |
| [goboy](https://github.com/Humpheh/goboy) | 2402 | Multi-platform Nintendo Game Boy Color emulator written in Go | a year ago |
| [sup](https://github.com/pressly/sup) | 2311 | Super simple deployment tool - think of it like 'make' for a network of servers | 7 months ago |
| [lgo](https://github.com/yunabe/lgo) | 2228 | Interactive Go programming with Jupyter | a year ago |
| [circuit](https://github.com/gocircuit/circuit) | 1927 | Circuit: Dynamic cloud orchestration http://gocircuit.org | 2 years ago |
| [snap](https://github.com/intelsdi-x/snap) | 1797 | The open telemetry framework | 3 years ago |
| [borg](https://github.com/ok-borg/borg) | 1530 | Search and save shell snippets without leaving your terminal | 4 years ago |
| [community](https://github.com/documize/community) | 1462 | Modern Confluence alternative designed for internal & external docs, built with Golang + EmberJS | 4 hours ago |
| [blocky](https://github.com/0xERR0R/blocky) | 1248 | Fast and lightweight DNS proxy as ad-blocker for local network with many features | 7 hours ago |
| [Go-Package-Store](https://github.com/shurcooL/Go-Package-Store) | 886 | An app that displays updates for the Go packages in your GOPATH. | 2 years ago |
| [shell2http](https://github.com/msoap/shell2http) | 876 | Executing shell commands via HTTP server | 2 months ago |
| [vflow](https://github.com/EdgeCast/vflow) | 860 |  Enterprise Network Flow Collector (IPFIX, sFlow, Netflow)  | a month ago |
| [peg](https://github.com/pointlander/peg) | 834 | Peg, Parsing Expression Grammar, is an implementation of a Packrat parser generator. | 5 months ago |
| [leaps](https://github.com/Jeffail/leaps) | 711 | A pair programming service using operational transforms | a year ago |
| [gfile](https://github.com/Antonito/gfile) | 643 | Direct file transfer over WebRTC | a year ago |
| [guora](https://github.com/argoodies/guora) | 573 | 🖖🏻 A self-hosted Quora like web application written in Go  基于 Golang 类似知乎的私有部署问答应用 包含问答、评论、点赞、管理后台等功能 | a year ago |
| [gebug](https://github.com/moshebe/gebug) | 558 | Debug Dockerized Go applications better | 5 hours ago |
| [gocc](https://github.com/goccmack/gocc) | 508 | Parser / Scanner Generator | a month ago |
| [mockingjay-server](https://github.com/quii/mockingjay-server) | 503 | Fake server, Consumer Driven Contracts and help with testing performance from one configuration file with zero system dependencies and no coding whatsoever | a year ago |
| [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) | 440 | Go Peerflix | 5 months ago |
| [ipe](https://github.com/dimiro1/ipe) | 344 | An open source Pusher server implementation compatible with Pusher client libraries written in GO | 9 months ago |
| [IDE](https://github.com/thestrukture/IDE) | 324 | Web based, Go IDE.  | 5 months ago |
| [tcpprobe](https://github.com/mehrdadrad/tcpprobe) | 317 | Modern TCP tool and service for network performance observability. | a year ago |
| [wellington](https://github.com/wellington/wellington) | 300 | Spriting that sass has been missing | a year ago |
| [woke](https://github.com/get-woke/woke) | 295 | Detect non-inclusive language in your source code. | 14 days ago |
| [cherry](https://github.com/rafael-santiago/cherry) | 267 | A tiny webchat server in Go. | 5 years ago |
| [joincap](https://github.com/assafmo/joincap) | 171 | Merge multiple pcap files together, gracefully. | 10 months ago |
| [tcpdog](https://github.com/mehrdadrad/tcpdog) | 170 | eBPF based TCP observability. | 6 months ago |
| [orbit](https://github.com/gulien/orbit) | 162 | :satellite: A cross-platform task runner for executing commands and generating files from templates | a year ago |
| [vaku](https://github.com/lingrino/vaku) | 127 | Vaku extends the Vault API & CLI | 4 days ago |
| [dp](https://github.com/scryinfo/dp) | 83 | Scry Data Protocol | 2 months ago |
| [boxed](https://github.com/tejo/boxed) | 75 | dropbox based blog engine, written in go. | 3 years ago |
| [naclpipe](https://github.com/unix4fun/naclpipe) | 22 | NaCL pipe | 3 years ago |
| [term-quiz](https://github.com/crazcalm/term-quiz) | 21 | Terminal Quiz Application Written in Go | 3 years ago |
| [snitch](https://github.com/lucasgomide/snitch) | 15 | Keep updated about all deploys on Tsuru | 3 years ago |
| [GoDocTooltip](https://github.com/diankong/GoDocTooltip) | 12 | A Chrome extension for golang users.When you're at golang's official doc site, it will show function's description as tooltip on function list | 24 days ago |
| [hoofli](https://github.com/dnnrly/hoofli) | 1 | Generate PlantUML diagrams from Chrome or Firefox network inspections | 3 months ago |


## [Resources](#resources)
* Where to discover new Go libraries.

### [Benchmarks](#Benchmarks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) | 1613 | :zap: Go web framework benchmark | 5 months ago |
| [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) | 1543 | Go HTTP request router and web framework benchmark | a month ago |
| [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) | 1241 | Benchmarks of Go serialization methods | 3 months ago |
| [skynet](https://github.com/atemerev/skynet) | 1003 | Skynet 1M threads microbenchmark | 8 months ago |
| [speedtest-resize](https://github.com/fawick/speedtest-resize) | 215 | Compare various Image resize algorithms for the Go language | a year ago |
| [go-benchmarks](https://github.com/tylertreat/go-benchmarks) | 142 | A few miscellaneous Go microbenchmarks. | 6 years ago |
| [gospeed](https://github.com/feyeleanor/gospeed) | 108 | Go micro-benchmarks for calculating the speed of language constructs | 10 months ago |
| [autobench](https://github.com/davecheney/autobench) | 92 | Go benchmark harness.  | 7 years ago |
| [golang-sql-benchmark](https://github.com/tyler-smith/golang-sql-benchmark) | 60 | A benchmarking shootout of various db/SQL utilities for Go | 4 years ago |
| [gocostmodel](https://github.com/mna/gocostmodel) | 57 | Benchmarks of common basic operations for the Go language. | 8 months ago |
| [kvbench](https://github.com/jimrobinson/kvbench) | 24 | Key/Value database benchmark | 2 years ago |
| [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) | 22 | Application for HTTP benchmarking via different rules and configs | 5 years ago |
| [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) | 19 | ⏱ Benchmarks of machine learning inference for Go | 5 days ago |
| [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) | 6 | Benchmark of Golang JSON Libraries | a year ago |


### [E-Books](#E-Books)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [GoBooks](https://github.com/dariubs/GoBooks) | 11513 | List of Golang books | 3 days ago |
| [The-Golang-Standard-Library-by-Example](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example) | 8327 | Golang标准库。对于程序员而言，标准库与语言本身同样重要，它好比一个百宝箱，能为各种常见的任务提供完美的解决方案。以示例驱动的方式讲解Golang的标准库。 | 25 days ago |
| [web-dev-golang-anti-textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook) | 2926 | Learn how to write webapps without a framework in Go. | 3 months ago |
| [gosuccinctly](https://github.com/thedevsir/gosuccinctly) | 21 |  This is the companion repo for Go Succinctly by Amir Irani. | 3 years ago |


### [Gophers](#Gophers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gophers](https://github.com/egonelbre/gophers) | 2580 | Free gophers | 2 years ago |
| [gophers](https://github.com/ashleymcnamara/gophers) | 2546 | Gopher Artwork by Ashley McNamara | 3 years ago |
| [free-gophers-pack](https://github.com/MariaLetta/free-gophers-pack) | 2384 | ✨ This pack of 100+ gopher pictures and elements will help you to build own design of almost anything related to Go Programming Language: presentations, posts in blogs or social media, courses, videos and many, many more. | 2 years ago |
| [gophericons](https://github.com/shalakhin/gophericons) | 593 | 34 gopher images for Go developers community | 4 years ago |
| [gopherize.me](https://github.com/matryer/gopherize.me) | 542 | Gopherize.me app | 5 months ago |
| [gopher-stickers](https://github.com/tenntenn/gopher-stickers) | 518 | gopher stickers | 2 years ago |
| [go-gopher](https://github.com/sillecelik/go-gopher) | 98 | The Go Gopher Amigurumi Pattern | 5 months ago |
| [gopher-logos](https://github.com/GolangUA/gopher-logos) | 96 | adorable gopher logos | 7 months ago |
| [gophers](https://github.com/rogeralsing/gophers) | 54 | random gopher graphics | a year ago |
| [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) | 41 | Go gopher Vector Data [.ai, .svg] | 4 years ago |
| [gophers](https://github.com/scraly/gophers) | 12 | Gopher artwork (Golang mascot) | 2 months ago |


### [Style Guides](#Style-Guides)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cockroach](https://github.com/cockroachdb/cockroach) | 23080 | CockroachDB - the open source, cloud-native distributed SQL database. | a minute ago |
| [fabric](https://github.com/hyperledger/fabric) | 12997 | Hyperledger Fabric is an enterprise-grade permissioned distributed ledger framework for developing solutions and applications. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy. | an hour ago |
| [guide](https://github.com/uber-go/guide) | 10443 | The Uber Go Style Guide. | a month ago |
| [magnetico](https://github.com/boramalper/magnetico) | 2644 | Autonomous (self-hosted) BitTorrent DHT search engine suite. | a year ago |
| [go-styleguide](https://github.com/bahlo/go-styleguide) | 1201 | 🏆 Opinionated Styleguide for the Go language | 3 months ago |


### [Websites](#Websites)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/golang/go) | 94272 | The Go programming language | 3 hours ago |
| [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) | 28408 | A curated list of awesome awesomeness | 3 days ago |
| [awesome-remote-job](https://github.com/lukasz-madon/awesome-remote-job) | 21556 | A curated list of awesome remote jobs and resources. Inspired by https://github.com/vinta/awesome-python | a day ago |
| [awesome-golang-workshops](https://github.com/amit-davidson/awesome-golang-workshops) | 453 | A curated list of awesome golang workshops. | 6 months ago |
| [golang-graphics](https://github.com/mholt/golang-graphics) | 139 | Community-contributed Go graphics files | 6 years ago |
| [gocryforhelp](https://github.com/ninedraft/gocryforhelp) | 40 | List of opensource projects looking for help | 4 years ago |
| [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) | 20 | Parse awesome-go README file and generate a new README file with repo info. | 5 hours ago |


### [Tutorials](#Tutorials)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [build-web-application-with-golang](https://github.com/astaxie/build-web-application-with-golang) | 39429 | A golang ebook intro how to build a web with golang | 9 days ago |
| [go-patterns](https://github.com/tmrts/go-patterns) | 18117 | Curated list of Go design patterns, recipes and idioms | 5 months ago |
| [learn-go-with-tests](https://github.com/quii/learn-go-with-tests) | 16337 | Learn Go with test-driven development | 14 days ago |
| [learngo](https://github.com/inancgumus/learngo) | 12508 | 1000+ Hand-Crafted Go Examples, Exercises, and Quizzes | 6 days ago |
| [golang-cheat-sheet](https://github.com/a8m/golang-cheat-sheet) | 6147 | An overview of Go syntax and features. | a month ago |
| [golang-for-nodejs-developers](https://github.com/miguelmota/golang-for-nodejs-developers) | 2735 | Examples of Golang compared to Node.js for learning | 13 days ago |
| [working-with-go](https://github.com/mkaz/working-with-go) | 1157 | A set of example golang code to start learning Go | 2 years ago |
| [ethereum-development-with-go-book](https://github.com/miguelmota/ethereum-development-with-go-book) | 1138 | 📖 A little guide book on Ethereum Development with Go (golang) | 5 days ago |
| [go-clean-template](https://github.com/evrone/go-clean-template) | 502 | Clean Architecture template for Golang services | 12 hours ago |
| [goapp](https://github.com/bnkamalesh/goapp) | 333 | An opinionated guideline to structure & develop a Go web application/service | 2 months ago |
| [design-patterns](https://github.com/shubhamzanwar/design-patterns) | 63 | common creational, behavioural and structural patterns implemented in go 🤩 | a year ago |
| [go-patterns](https://github.com/haveyoudebuggedit/go-patterns) | 1 |  | 7 months ago |


