# Go
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of awesome Go frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Tue Nov 16 2021 09:28:12 GMT+0800 (中国标准时间)
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
| [oto](https://github.com/hajimehoshi/oto) | 889 | ♪ A low-level library to play sound on multiple platforms ♪ | 9 days ago |
| [portaudio](https://github.com/gordonklaus/portaudio) | 479 | Go bindings for the PortAudio audio I/O library | a year ago |
| [music-theory](https://github.com/go-music-theory/music-theory) | 370 | Go models of Note, Scale, Chord and Key | a year ago |
| [waveform](https://github.com/mdlayher/waveform) | 343 | Go package capable of generating waveform images from audio streams. MIT Licensed. | 2 years ago |
| [portmidi](https://github.com/rakyll/portmidi) | 263 | Go bindings for libportmidi | a year ago |
| [id3v2](https://github.com/bogem/id3v2) | 196 | 🎵 ID3 decoding and encoding library for Go | a month ago |
| [flac](https://github.com/mewkiz/flac) | 171 | Package flac provides access to FLAC (Free Lossless Audio Codec) streams. | 10 months ago |
| [GoAudio](https://github.com/DylanMeeus/GoAudio) | 168 | Go tools for audio processing & creation 🎶 | 9 days ago |
| [malgo](https://github.com/gen2brain/malgo) | 157 | Mini audio library | 2 months ago |
| [mix](https://github.com/go-mix/mix) | 145 | Sequence-based Go-native audio mixer for music apps | 2 years ago |
| [gaad](https://github.com/Comcast/gaad) | 92 | GAAD (Go Advanced Audio Decoder) | a month ago |
| [minimp3](https://github.com/tosone/minimp3) | 64 | Decode mp3 base on https://github.com/lieff/minimp3 | 8 months ago |
| [vorbis](https://github.com/mccoyst/vorbis) | 28 | A "native" ogg vorbis decoder for Go (uses inline stb_vorbis) | 3 years ago |
| [gosamplerate](https://github.com/dh1tw/gosamplerate) | 13 | Go Bindings for libsamplerate | a year ago |


### [Authentication and OAuth](#authentication-and-oauth)
* Libraries for implementing authentications schemes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [casbin](https://github.com/casbin/casbin) | 10655 | An authorization library that supports access control models like ACL, RBAC, ABAC in Golang | 13 days ago |
| [oauth2](https://github.com/golang/oauth2) | 3901 | Go OAuth2 | 2 hours ago |
| [goth](https://github.com/markbates/goth) | 3423 | Package goth provides a simple, clean, and idiomatic way to write authentication packages for Go web applications. | 16 days ago |
| [authboss](https://github.com/volatiletech/authboss) | 2899 | The boss of http auth. | 3 months ago |
| [go-jose](https://github.com/square/go-jose) | 1835 | An implementation of JOSE standards (JWE, JWS, JWT) in Go | 21 days ago |
| [go-oauth2-server](https://github.com/RichardKnop/go-oauth2-server) | 1833 | A standalone, specification-compliant,  OAuth2 server written in Golang. | 10 months ago |
| [loginsrv](https://github.com/tarent/loginsrv) | 1826 | JWT login microservice with plugable backends such as OAuth2, Google, Github, htpasswd, osiam, .. | 9 months ago |
| [osin](https://github.com/openshift/osin) | 1700 | Golang OAuth2 server library | 2 months ago |
| [gologin](https://github.com/dghubble/gologin) | 1453 | Go login handlers for authentication providers (OAuth1, OAuth2) | 8 days ago |
| [gorbac](https://github.com/mikespook/gorbac) | 1225 | goRBAC provides a lightweight role-based access control (RBAC) implementation in Golang. | 6 months ago |
| [scs](https://github.com/alexedwards/scs) | 965 | HTTP Session Management for Go | 14 days ago |
| [paseto](https://github.com/o1egl/paseto) | 555 | Platform-Agnostic Security Tokens implementation in GO (Golang) | a month ago |
| [permissions2](https://github.com/xyproto/permissions2) | 438 |   :closed_lock_with_key: Middleware for keeping track of users, login states and permissions | 4 months ago |
| [go-guardian](https://github.com/shaj13/go-guardian) | 318 | Go-Guardian is a golang library that provides a simple, clean, and idiomatic way to create powerful modern API and web authentication. | 2 months ago |
| [jwt](https://github.com/cristalhq/jwt) | 303 | Safe, simple and fast JSON Web Tokens for Go | a month ago |
| [jwt](https://github.com/pascaldekloe/jwt) | 273 | JSON Web Token library | 14 days ago |
| [jeff](https://github.com/abraithwaite/jeff) | 233 | 🍍Jeff provides the simplest way to manage web sessions in Go. | 5 months ago |
| [httpauth](https://github.com/goji/httpauth) | 210 | HTTP Authentication middlewares | 2 months ago |
| [jwt-auth](https://github.com/adam-hanna/jwt-auth) | 209 | This package provides json web token (jwt) middleware for goLang http servers | 3 months ago |
| [branca](https://github.com/hako/branca) | 160 | :key: Secure alternative to JWT. Authenticated Encrypted API Tokens for Go. | a year ago |
| [sessionup](https://github.com/swithek/sessionup) | 112 | Straightforward HTTP session management | 3 months ago |
| [otpgen](https://github.com/RijulGulati/otpgen) | 111 | Library to generate TOTP/HOTP codes | 3 months ago |
| [session](https://github.com/icza/session) | 105 | Go session management for web servers (including support for Google App Engine - GAE). | 4 months ago |
| [jwt](https://github.com/robbert229/jwt) | 95 | This is an implementation of JWT in golang! | a year ago |
| [sjwt](https://github.com/brianvoe/sjwt) | 94 | Simple JWT Golang | 2 years ago |
| [rbac](https://github.com/zpatrick/rbac) | 88 | Minimalistic RBAC package for Go applications | 3 years ago |
| [sessions](https://github.com/adam-hanna/sessions) | 60 | A dead simple, highly performant, highly customizable sessions middleware for go http servers. | 2 years ago |
| [securecookie](https://github.com/chmike/securecookie) | 55 | Fast, secure and efficient secure cookie encoder/decoder  | 2 months ago |
| [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) | 33 | Golang library for providing a canonical representation of email address. | 2 months ago |
| [otpgo](https://github.com/jltorresm/otpgo) | 26 | Time-Based One-Time Password (TOTP) and HMAC-Based One-Time Password (HOTP) library for Go. | 9 months ago |
| [scope](https://github.com/SonicRoshan/scope) | 17 | Easily Manage OAuth2 Scopes In Go | 6 months ago |
| [sessiongate-go](https://github.com/f0rmiga/sessiongate-go) | 9 | A driver for the SessionGate Redis module - easy session management using the Go language. | 3 years ago |
| [cookiestxt](https://github.com/mengzhuo/cookiestxt) | 8 | cookiestxt implement parser of cookies txt format | 8 months ago |


### [Blockchain](#blockchain)
* Tools for building blockchains.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ethereum](https://github.com/ethereum/go-ethereum) | 33375 | Official Go implementation of the Ethereum protocol | 2 hours ago |
| [tendermint](https://github.com/tendermint/tendermint) | 4418 | ⟁ Tendermint Core (BFT Consensus) in Go | 4 hours ago |
| [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) | 3023 | :chains: A Framework for Building High Value Public Blockchains :sparkles: | 3 hours ago |
| [gossamer](https://github.com/ChainSafe/gossamer) | 287 | 🕸️ Gossamer: A Go implementation of the Polkadot Host | an hour ago |


### [Bot Building](#bot-building)
* Libraries for building and working with bots.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) | 3169 | Golang bindings for the Telegram Bot API | 6 days ago |
| [olivia](https://github.com/olivia-ai/olivia) | 3085 | 💁‍♀️Your new best friend powered by an artificial neural network | 6 days ago |
| [telebot](https://github.com/tucnak/telebot) | 2197 | Telebot is a Telegram bot framework in Go. | 6 days ago |
| [kelp](https://github.com/stellar/kelp) | 791 | Kelp is a free and open-source trading bot for the Stellar DEX and 100+ centralized exchanges | 10 days ago |
| [bot](https://github.com/go-chat-bot/bot) | 710 | IRC, Slack, Telegram and RocketChat bot written in go | a year ago |
| [golang-crypto-trading-bot](https://github.com/saniales/golang-crypto-trading-bot) | 638 | A golang implementation of a console-based trading bot for cryptocurrency exchanges | 5 months ago |
| [slacker](https://github.com/shomali11/slacker) | 572 | Slack Bot Framework | 5 days ago |
| [tbot](https://github.com/yanzay/tbot) | 321 | Go library for Telegram Bot API | 8 months ago |
| [go-sarah](https://github.com/oklahomer/go-sarah) | 206 | Simple yet customizable bot framework written in Go. | 17 days ago |
| [go-twitch-irc](https://github.com/gempir/go-twitch-irc) | 203 | go irc client for twitch.tv | 6 days ago |
| [tenyks](https://github.com/kyleterry/tenyks) | 171 | The Tenyks IRC bot. | 2 years ago |
| [hanu](https://github.com/sbstjn/hanu) | 134 | Golang Framework for writing Slack bots | 5 months ago |
| [go-tgbot](https://github.com/olebedev/go-tgbot) | 109 | Golang  telegram bot API wrapper, session-based router and middleware | 3 years ago |
| [margelet](https://github.com/zhulik/margelet) | 66 | Telegram Bot Framework for Go | 5 years ago |
| [slack-bot](https://github.com/innogames/slack-bot) | 61 | Ready to use Slack bot for lazy developers: start Jenkins jobs, watch Jira tickets, watch pull requests... | 4 hours ago |
| [ephemeral-roles](https://github.com/ewohltman/ephemeral-roles) | 51 | A Discord bot for managing ephemeral roles based upon voice channel member presence. | a month ago |
| [slackscot](https://github.com/alexandre-normand/slackscot) | 47 | Slack bot core/framework written in Go with support for reactions to message updates/deletes | 9 months ago |
| [govkbot](https://github.com/nikepan/govkbot) | 36 | VK bot package for Go | 3 months ago |
| [echotron](https://github.com/NicoNex/echotron) | 34 | Concurrent library for Telegram Bots written in pure go. | 10 days ago |
| [micha](https://github.com/onrik/micha) | 19 | Client lib for Telegram bot api | 6 months ago |
| [teleterm](https://github.com/alfiankan/teleterm) | 4 | Telegram Bot Exec Terminal Command | 25 days ago |


### [Build Automation](#build-automation)
* Libraries and tools helping with build automation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [realize](https://github.com/oxequa/realize) | 4138 | Realize is the #1 Golang Task Runner which enhance your workflow by automating the most common tasks and using the best performing Golang live reloading. | 6 months ago |
| [task](https://github.com/go-task/task) | 4133 | A task runner / simpler Make alternative written in Go | 6 days ago |
| [mmake](https://github.com/tj/mmake) | 1592 | Modern Make  | 2 years ago |
| [goyek](https://github.com/goyek/goyek) | 262 | Create build pipelines in Go  | 8 days ago |
| [taskctl](https://github.com/taskctl/taskctl) | 145 | Concurrent task runner, developer's routine tasks automation toolkit. Simple modern alternative to GNU Make 🧰 | 6 months ago |
| [1build](https://github.com/gopinath-langote/1build) | 108 | Frictionless way of managing project-specific commands | 2 months ago |
| [gaper](https://github.com/maxcnunes/gaper) | 50 | Builds and restarts a Go project when it crashes or some watched file changes | 2 years ago |
| [anko](https://github.com/GuilhermeCaruso/anko) | 18 | :crystal_ball: Simple application watcher | 8 months ago |


### [Standard CLI](#Standard-CLI)
* Libraries for building standard or basic Command Line applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cobra](https://github.com/spf13/cobra) | 23922 | A Commander for modern Go CLI interactions | 4 hours ago |
| [cli](https://github.com/urfave/cli) | 16834 | A simple, fast, and fun package for building command line apps in Go | 9 days ago |
| [elvish](https://github.com/elves/elvish) | 4527 | Elvish = Expressive Programming Language + Versatile Interactive Shell | a day ago |
| [andOTP](https://github.com/andOTP/andOTP) | 3268 | Open source two-factor authentication for Android | 12 days ago |
| [kingpin](https://github.com/alecthomas/kingpin) | 3159 | CONTRIBUTIONS ONLY: A Go (golang) command line and flag parser | 20 days ago |
| [dnote](https://github.com/dnote/dnote) | 2179 | A simple command line notebook for programmers | 2 months ago |
| [go-flags](https://github.com/jessevdk/go-flags) | 2074 | go command line option parser | a month ago |
| [pflag](https://github.com/spf13/pflag) | 1616 | Drop-in replacement for Go's flag package, implementing POSIX/GNU-style --flags. | a month ago |
| [cli](https://github.com/mitchellh/cli) | 1413 | A Go library for implementing command-line interfaces. | 3 months ago |
| [go-arg](https://github.com/alexflint/go-arg) | 1305 | Struct-based argument parsing in Go | 5 days ago |
| [liner](https://github.com/peterh/liner) | 826 | Pure Go line editor with history, inspired by linenoise | 9 days ago |
| [complete](https://github.com/posener/complete) | 799 | bash completion written in go + bash completion for go command | 7 months ago |
| [mow.cli](https://github.com/jawher/mow.cli) | 760 | A versatile library for building CLI applications in Go | 23 days ago |
| [flaggy](https://github.com/integrii/flaggy) | 743 | Idiomatic Go input parsing with subcommands, positional values, and flags at any position. No required project or package layout and no external dependencies. | 2 months ago |
| [ops](https://github.com/nanovms/ops) | 740 | ops - build and run nanos unikernels | 2 hours ago |
| [cli](https://github.com/mkideal/cli) | 619 | CLI - A package for building command line app with go | 2 months ago |
| [argparse](https://github.com/akamensky/argparse) | 377 | Argparse for golang. Just because `flag` sucks | 3 months ago |
| [climax](https://github.com/tucnak/climax) | 189 | Climax is an alternative CLI with the human face | a year ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 163 | hiboot is a high performance web and cli application framework with dependency injection support | 5 months ago |
| [commandeer](https://github.com/jaffee/commandeer) | 147 | Automatically sets up command line flags based on struct fields and tags. | 5 months ago |
| [wmenu](https://github.com/dixonwille/wmenu) | 144 | An easy to use menu structure for cli applications that prompts users to make choices. | 3 months ago |
| [sflags](https://github.com/octago/sflags) | 129 | Generate flags by parsing structures | 4 months ago |
| [flag](https://github.com/cosiner/flag) | 117 | Flag is a simple but powerful command line option parsing library for Go support infinite level subcommand | a year ago |
| [clif](https://github.com/ukautz/clif) | 111 | Another CLI framework for Go. It works on my machine. | 3 years ago |
| [job](https://github.com/liujianping/job) | 110 | JOB, make your short-term command as a long-term job. 将命令行规划成任务的工具 | a year ago |
| [cli](https://github.com/teris-io/cli) | 94 | Simple and complete API for building command line applications in Go | 6 months ago |
| [cmdr](https://github.com/hedzr/cmdr) | 83 | Golang library with POSIX-compliant command-line UI (CLI) and Hierarchical-configuration. Better substitute for 'flag'. | 18 hours ago |
| [env](https://github.com/codingconcepts/env) | 83 | Tag-based environment configuration for structs | a year ago |
| [clir](https://github.com/leaanthony/clir) | 78 | A Simple and Clear CLI library. Dependency free. | a month ago |
| [gocmd](https://github.com/devfacet/gocmd) | 57 | A Go library for building command line applications. | 6 months ago |
| [wlog](https://github.com/dixonwille/wlog) | 52 | A simple logging interface that supports cross-platform color and concurrency. | 3 months ago |
| [strumt](https://github.com/antham/strumt) | 44 | Strumt is a library to create prompt chain | 7 months ago |
| [flagvar](https://github.com/sgreben/flagvar) | 37 | A collection of CLI argument types for the Go `flag` package. | a year ago |
| [go-getoptions](https://github.com/DavidGamba/go-getoptions) | 37 | Fully featured Go (golang) command line option parser with built-in auto-completion support. | 10 days ago |
| [cmd](https://github.com/posener/cmd) | 33 | The standard library flag package with its missing features | a year ago |
| [argv](https://github.com/cosiner/argv) | 31 |  | 2 years ago |
| [go-commander](https://github.com/yitsushi/go-commander) | 24 | Go library to simplify CLI workflow | a year ago |
| [sand](https://github.com/Zaba505/sand) | 16 | Package for creating interpreters | 3 years ago |
| [go-command-chain](https://github.com/rainu/go-command-chain) | 15 | A go library for easy configure and run command chains. Such like pipelining in unix shells. | 5 months ago |
| [ts](https://github.com/liujianping/ts) | 13 | timestamp convert & compare tool. 时间戳转换与对比工具 | 2 years ago |
| [go-andotp](https://github.com/RijulGulati/go-andotp) | 8 | CLI program to encrypt/decrypt andOTP files | 5 months ago |
| [subcmd](https://github.com/bobg/subcmd) | 0 |  | 2 months ago |


### [Advanced Console UIs](#Advanced-Console-UIs)
* Libraries for building Console Applications and Console User Interfaces.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blessed-contrib](https://github.com/yaronn/blessed-contrib) | 14567 | Build terminal dashboards using ascii/ansi art and javascript | 17 days ago |
| [termui](https://github.com/gizak/termui) | 11373 | Golang terminal dashboard | 4 months ago |
| [gocui](https://github.com/jroimartin/gocui) | 7524 | Minimalist Go package aimed at creating Console User Interfaces. | 7 days ago |
| [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) | 7386 | Library for building powerful interactive command line applications in Python | 3 days ago |
| [go-prompt](https://github.com/c-bata/go-prompt) | 4207 | Building powerful interactive prompts in Go, inspired by python-prompt-toolkit. | a month ago |
| [termbox-go](https://github.com/nsf/termbox-go) | 4182 | Pure Go termbox implementation | 6 months ago |
| [pterm](https://github.com/pterm/pterm) | 2173 | ✨ #PTerm is a modern Go module to beautify console output. Featuring charts, progressbars, tables, trees, and much more 🚀 It's completely configurable and 100% cross-platform compatible. | 7 hours ago |
| [progressbar](https://github.com/schollz/progressbar) | 2171 | A really basic thread-safe progress bar for Golang applications | a month ago |
| [uiprogress](https://github.com/gosuri/uiprogress) | 1858 | A go library to render progress bars in terminal applications | 3 months ago |
| [termdash](https://github.com/mum4k/termdash) | 1824 | Terminal based dashboard. | 4 months ago |
| [asciigraph](https://github.com/guptarohit/asciigraph) | 1789 | Go package to make lightweight ASCII line graph ╭┈╯ in command line apps with no other dependencies. | a month ago |
| [mpb](https://github.com/vbauerster/mpb) | 1475 | multi progress bar for Go cli applications | 2 months ago |
| [uilive](https://github.com/gosuri/uilive) | 1363 | uilive is a go library for updating terminal output in realtime | 2 months ago |
| [aurora](https://github.com/logrusorgru/aurora) | 1143 | Golang ultimate ANSI-colors that supports Printf/Sprintf methods | 9 months ago |
| [color](https://github.com/gookit/color) | 959 | 🎨 Terminal color rendering library, support 8/16 colors, 256 colors, RGB color rendering output, support Print/Sprintf methods, compatible with Windows. GO CLI 控制台颜色渲染工具库，支持16色，256色，RGB色彩渲染输出，使用类似于 Print/Sprintf，兼容并支持 Windows 环境的色彩渲染 | 3 days ago |
| [termenv](https://github.com/muesli/termenv) | 831 | Advanced ANSI style & color support for your terminal applications | 3 months ago |
| [uitable](https://github.com/gosuri/uitable) | 621 | A go library to improve readability in terminal apps using tabular data | a year ago |
| [go-isatty](https://github.com/mattn/go-isatty) | 573 |  | a month ago |
| [go-colorable](https://github.com/mattn/go-colorable) | 564 |  | 2 months ago |
| [gommon](https://github.com/labstack/gommon) | 417 | Common packages for Go | 11 days ago |
| [chalk](https://github.com/ttacon/chalk) | 386 | Intuitive package for prettifying terminal/console output. http://godoc.org/github.com/ttacon/chalk | 2 years ago |
| [simpletable](https://github.com/alexeyco/simpletable) | 333 | Simple tables in terminal with Go | 7 months ago |
| [tabby](https://github.com/cheynewallace/tabby) | 297 | A tiny library for super simple Golang tables | a year ago |
| [go-colortext](https://github.com/daviddengcn/go-colortext) | 210 | Change the color of console text. | 2 years ago |
| [yacspin](https://github.com/theckman/yacspin) | 208 | Yet Another CLi Spinner; providing over 70 easy to use and customizable terminal spinners for multiple OSes | 3 months ago |
| [box-cli-maker](https://github.com/Delta456/box-cli-maker) | 157 | Make Highly Customized Boxes for your CLI | a month ago |
| [cfmt](https://github.com/mingrammer/cfmt) | 81 | :art: Contextual fmt inspired by bootstrap color classes | 3 years ago |
| [tabular](https://github.com/InVisionApp/tabular) | 55 | Tabular simplifies printing ASCII tables from command line utilities | 4 years ago |
| [ctc](https://github.com/wzshiming/ctc) | 35 | Console Text Colors - The non-invasive cross-platform terminal color library does not need to modify the Print method | a year ago |
| [cfmt](https://github.com/i582/cfmt) | 32 | Small library for simple and convenient formatted stylized output to the console. | 4 months ago |
| [colourize](https://github.com/TreyBastian/colourize) | 24 | An ANSI colour terminal package for Go | 6 years ago |
| [marker](https://github.com/cyucelen/marker) | 20 |  🖍️ Marker is the easiest way to match and mark strings for colorful terminal outputs! | 2 months ago |
| [table](https://github.com/tomlazar/table) | 14 | pretty colorfull tables in go with less effort | 8 months ago |
| [go-ataman](https://github.com/workanator/go-ataman) | 12 | Another Text Attribute Manupulator | a year ago |


### [Configuration](#Configuration)
* Libraries for configuration parsing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [viper](https://github.com/spf13/viper) | 17336 | Go configuration with fangs | 3 days ago |
| [godotenv](https://github.com/joho/godotenv) | 4304 | A Go port of Ruby's dotenv library (Loads environment variables from `.env`.) | a month ago |
| [envconfig](https://github.com/kelseyhightower/envconfig) | 3863 | Golang library for managing configuration data from environment variables | a month ago |
| [ini](https://github.com/go-ini/ini) | 2738 | Package ini provides INI file read and write functionality in Go | 3 days ago |
| [env](https://github.com/caarlos0/env) | 2104 | Simple lib to parse environment variables to structs | 7 days ago |
| [koanf](https://github.com/knadh/koanf) | 656 | Simple, lightweight, extensible, configuration management library for Go. Support for JSON, TOML, YAML, env, command line, file, S3 etc. Alternative to viper. | 13 days ago |
| [konfig](https://github.com/lalamove/konfig) | 616 | Composable, observable and performant config handling for Go for the distributed processing era | a year ago |
| [confita](https://github.com/heetch/confita) | 420 | Load configuration in cascade from multiple backends into a struct | 4 months ago |
| [cleanenv](https://github.com/ilyakaznacheev/cleanenv) | 396 | ✨Clean and minimalistic environment configuration reader for Golang | 2 months ago |
| [aconfig](https://github.com/cristalhq/aconfig) | 310 | Simple, useful and opinionated config loader. | 12 days ago |
| [config](https://github.com/gookit/config) | 299 | 📝 Go config manage(load,get,set). support JSON, YAML, TOML, INI, HCL, ENV and Flags. Multi file load, data override merge, parse ENV var. Go应用配置加载管理，支持多种格式，多文件加载，远程文件加载，支持数据合并，解析环境变量名 | a month ago |
| [config](https://github.com/JeremyLoy/config) | 275 | 12 factor configuration as a typesafe struct in as little as two function calls | 6 days ago |
| [store](https://github.com/tucnak/store) | 257 | A dead simple configuration manager for Go applications | 4 years ago |
| [hjson-go](https://github.com/hjson/hjson-go) | 246 | Hjson for Go | 6 months ago |
| [config](https://github.com/olebedev/config) | 240 | JSON or YAML configuration wrapper with convenient access methods. | 6 months ago |
| [envconfig](https://github.com/vrischmann/envconfig) | 213 | Small library to read your configuration from environment variables | 23 days ago |
| [config](https://github.com/joshbetz/config) | 210 | 🛠 A configuration library for Go that parses environment variables, JSON files, and reloads automatically on SIGHUP | 3 days ago |
| [config](https://github.com/golobby/config) | 201 | A lightweight yet powerful configuration manager for Go projects | 19 days ago |
| [fig](https://github.com/kkyr/fig) | 173 | A minimalist Go configuration library | 3 days ago |
| [gcfg](https://github.com/go-gcfg/gcfg) | 155 | read INI-style configuration files into Go structs; supports user-defined types and subsections | 4 months ago |
| [goconfig](https://github.com/gosidekick/goconfig) | 150 | goconfig uses a struct as input and populates the fields of this struct with parameters from command line, environment variables and configuration file. | 25 days ago |
| [xdg](https://github.com/adrg/xdg) | 149 | Go implementation of the XDG Base Directory Specification and XDG user directories | 20 days ago |
| [envh](https://github.com/antham/envh) | 95 | Go helpers to manage environment variables | 7 months ago |
| [envcfg](https://github.com/tomazk/envcfg) | 93 | Un-marshaling environment variables to Go structs | 4 years ago |
| [onion](https://github.com/goraz/onion) | 93 | Layer based configuration for golang | 3 months ago |
| [harvester](https://github.com/beatlabs/harvester) | 89 | Harvest configuration, watch and notify subscriber | a month ago |
| [configuro](https://github.com/sherifabdlnaby/configuro) | 80 | An opinionated configuration loading framework for Containerized and Cloud-Native applications. | 8 months ago |
| [xdg](https://github.com/OpenPeeDeeP/xdg) | 65 | A cross platform package that follows the XDG Standard | a year ago |
| [gofigure](https://github.com/ian-kent/gofigure) | 60 | Go configuration made easy! | 2 years ago |
| [configure](https://github.com/paked/configure) | 54 | Configure is a Go package that gives you easy configuration of your project through redundancy | 3 years ago |
| [configuration](https://github.com/BoRuDar/configuration) | 41 | Library for setting values to structs' fields from env, flags, files or default tag | 11 days ago |
| [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) | 41 | Go package that interfaces with AWS System Manager | 8 months ago |
| [uconfig](https://github.com/omeid/uconfig) | 39 | Lightweight, zero-dependency, and extendable configuration management library for Go | 2 days ago |
| [gone](https://github.com/One-com/gone) | 36 | Golang packages for writing small daemons and servers. | 6 months ago |
| [ingo](https://github.com/schachmat/ingo) | 35 | persistent storage for flags in go | 5 years ago |
| [go-up](https://github.com/ufoscout/go-up) | 34 | go-up! A simple configuration library with recursive placeholders resolution and no magic. | 2 years ago |
| [hocon](https://github.com/gurkankaymak/hocon) | 33 | go implementation of lightbend's HOCON configuration library https://github.com/lightbend/config | 5 months ago |
| [mini](https://github.com/sasbury/mini) | 28 | A golang package for parsing ini-style configuration files | 3 years ago |
| [genv](https://github.com/sakirsensoy/genv) | 26 | Genv is a library for Go (golang) that makes it easy to read and use environment variables in your projects. It also allows environment variables to be loaded from the .env file. | 2 years ago |
| [conflate](https://github.com/the4thamigo-uk/conflate) | 20 | Library providing routines to merge and validate JSON, YAML and/or TOML files | a year ago |
| [envconf](https://github.com/ian-kent/envconf) | 10 | Configure Go applications from the environment | 7 years ago |
| [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) | 10 | Go utility for loading configuration parameters from AWS SSM (Parameter Store) | a year ago |
| [env](https://github.com/nasermirzaei89/env) | 7 | Golang Get Environment Variables Package | a year ago |
| [ini](https://github.com/wlevene/ini) | 6 | ini parser for golang | 20 days ago |
| [go-ini](https://github.com/subpop/go-ini) | 5 | automatic mirror of https://git.sr.ht/~spc/go-ini | 7 months ago |
| [swap](https://github.com/oblq/swap) | 4 | Instantiate/configure structs recursively, based on build environment. (YAML, TOML, JSON and env). | 9 days ago |
| [typenv](https://github.com/diegomarangoni/typenv) | 4 | Go minimalist typed environment variables library | a year ago |
| [gonfig](https://github.com/miladabc/gonfig) | 2 | Tag based configuration loader from different providers | 3 months ago |
| [go-conf](https://github.com/ThomasObenaus/go-conf) | 1 | Library for easy configuration of a golang service | a month ago |


### [Continuous Integration](#Continuous-Integration)
* Tools for help with continuous integration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [drone](https://github.com/harness/drone) | 24177 | Drone is a Container-Native, Continuous Delivery Platform | 14 hours ago |
| [cds](https://github.com/ovh/cds) | 3644 | Enterprise-Grade Continuous Delivery & DevOps Automation Open Source Platform | 11 hours ago |
| [goveralls](https://github.com/mattn/goveralls) | 702 |  | 2 months ago |
| [overalls](https://github.com/go-playground/overalls) | 106 | :jeans:Multi-Package go project coverprofile for tools like goveralls | 2 years ago |
| [duci](https://github.com/duck8823/duci) | 68 | The simple ci server  | 10 days ago |
| [gomason](https://github.com/nikogura/gomason) | 51 | A tool for testing, building, signing, and publishing binaries. | 4 months ago |
| [roveralls](https://github.com/lawrencewoodman/roveralls) | 14 | A Go recursive coverage testing tool | 4 years ago |
| [gotestfmt](https://github.com/haveyoudebuggedit/gotestfmt) | 13 | go test output for humans | 3 days ago |


### [CSS Preprocessors](#CSS-Preprocessors)
* Libraries for preprocessing CSS files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gcss](https://github.com/yosssi/gcss) | 446 | Pure Go CSS Preprocessor | 7 years ago |
| [go-libsass](https://github.com/wellington/go-libsass) | 181 | Go wrapper for libsass, the only Sass 3.5 compiler for Go | a year ago |


### [Data Structures](#Data-Structures)
* Generic datastructures and algorithms in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gods](https://github.com/emirpasic/gods) | 10738 | GoDS (Go Data Structures). Containers (Sets, Lists, Stacks, Maps, Trees), Sets (HashSet, TreeSet, LinkedHashSet), Lists (ArrayList, SinglyLinkedList, DoublyLinkedList), Stacks (LinkedListStack, ArrayStack), Maps (HashMap, TreeMap, HashBidiMap, TreeBidiMap, LinkedHashMap), Trees (RedBlackTree, AVLTree, BTree, BinaryHeap), Comparators, Iterators, Enumerables, Sort, JSON | 12 days ago |
| [go-datastructures](https://github.com/Workiva/go-datastructures) | 6244 | A collection of useful, performant, and threadsafe Go datastructures. | 7 months ago |
| [golang-set](https://github.com/deckarep/golang-set) | 2126 | A simple set type for the Go language. Trusted by Docker, 1Password, Ethereum and Hashicorp. | 8 months ago |
| [gota](https://github.com/go-gota/gota) | 1856 | Gota: DataFrames and data wrangling in Go (Golang) | 7 days ago |
| [BoomFilters](https://github.com/tylertreat/BoomFilters) | 1385 | Probabilistic data structures for processing continuous, unbounded streams. | 8 months ago |
| [bloom](https://github.com/bits-and-blooms/bloom) | 1366 | Go package implementing Bloom filters | 2 months ago |
| [roaring](https://github.com/RoaringBitmap/roaring) | 1353 | Roaring bitmaps in Go (golang) | 3 months ago |
| [gocache](https://github.com/eko/gocache) | 994 | ☔️ A complete Go cache library that brings you multiple ways of managing your caches | 2 days ago |
| [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) | 843 | Cuckoo Filter: Practically Better Than Bloom | 3 months ago |
| [hyperloglog](https://github.com/axiomhq/hyperloglog) | 755 | HyperLogLog with lots of sugar (Sparse, LogLog-Beta bias correction and TailCut space reduction) | 25 days ago |
| [bitset](https://github.com/bits-and-blooms/bitset) | 750 | Go package implementing bitsets | 2 months ago |
| [algorithms](https://github.com/shady831213/algorithms) | 579 | CLRS study. Codes are written with golang. | 8 months ago |
| [trie](https://github.com/derekparker/trie) | 556 | Data structure and relevant algorithms for extremely fast prefix/fuzzy string searching. | a year ago |
| [go-geoindex](https://github.com/hailocab/go-geoindex) | 333 | Go native library for fast point tracking and K-Nearest queries | 4 years ago |
| [gostl](https://github.com/liyue201/gostl) | 329 | Data structure and algorithm library for go, designed to provide functions similar to C++ STL | 2 months ago |
| [ttlcache](https://github.com/ReneKroon/ttlcache) | 300 | An in-memory string-interface{} map with various expiration options for golang | 8 days ago |
| [merkletree](https://github.com/cbergoon/merkletree) | 289 | A Merkle Tree implementation written in Go. | 2 years ago |
| [go-edlib](https://github.com/hbollon/go-edlib) | 288 | 📚 String comparison and edit distance algorithms library, featuring : Levenshtein, LCS, Hamming, Damerau levenshtein (OSA and Adjacent transpositions algorithms), Jaro-Winkler, Cosine, etc... | 4 days ago |
| [deque](https://github.com/gammazero/deque) | 256 | Fast ring-buffer deque (double-ended queue) | 6 months ago |
| [hilbert](https://github.com/google/hilbert) | 240 | Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves. | 3 years ago |
| [goskiplist](https://github.com/ryszard/goskiplist) | 230 | A skip list implementation in Go | 2 years ago |
| [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) | 215 | Adaptive Radix Trees implemented in Go | a year ago |
| [cuckoo-filter](https://github.com/linvon/cuckoo-filter) | 181 | Cuckoo Filter go implement, better than Bloom Filter, configurable and space optimized  布谷鸟过滤器的Go实现，优于布隆过滤器，可以定制化过滤器参数，并进行了空间优化 | a month ago |
| [binpacker](https://github.com/zhuangsirui/binpacker) | 176 | A binary stream packer and unpacker | a month ago |
| [skiplist](https://github.com/MauriceGit/skiplist) | 173 | A Go library for an efficient implementation of a skip list: https://godoc.org/github.com/MauriceGit/skiplist | 10 days ago |
| [levenshtein](https://github.com/agnivade/levenshtein) | 164 | Go implementation to calculate Levenshtein Distance. | 6 months ago |
| [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) | 148 | Go concurrent-safe, goroutine-safe, thread-safe queue | 2 years ago |
| [bloom](https://github.com/zentures/bloom) | 144 | Bloom filters implemented in Go. | 4 years ago |
| [iter](https://github.com/disksing/iter) | 137 | Go implementation of C++ STL iterators and algorithms. | 2 years ago |
| [ring](https://github.com/tannerryan/ring) | 120 | Package ring provides a high performance and thread safe Go implementation of a bloom filter. | a year ago |
| [go-rquad](https://github.com/arl/go-rquad) | 118 | :pushpin: State of the art point location and neighbour finding algorithms for region quadtrees, in Go | 2 years ago |
| [bit](https://github.com/yourbasic/bit) | 109 | Bitset data structure | 4 years ago |
| [encoding](https://github.com/zentures/encoding) | 108 | Integer Compression Libraries for Go | 4 years ago |
| [remember-go](https://github.com/rocketlaunchr/remember-go) | 104 | Cache Slow Database Queries | 7 months ago |
| [bitmap](https://github.com/kelindar/bitmap) | 97 | Simple dense bitmap index in Go with binary operators | 2 months ago |
| [conjungo](https://github.com/InVisionApp/conjungo) | 97 | A small flexible merge library in go | a year ago |
| [skiplist](https://github.com/gansidui/skiplist) | 75 | skiplist for golang | 7 years ago |
| [go-mcache](https://github.com/OrlovEvgeny/go-mcache) | 74 | Fast in-memory key:value store/cache with TTL | 2 years ago |
| [bloom](https://github.com/yourbasic/bloom) | 63 | Probabilistic set data structure | 4 years ago |
| [levenshtein](https://github.com/agext/levenshtein) | 59 | Levenshtein distance and similarity metrics with customizable edit costs and Winkler-like bonus for common prefix. | a year ago |
| [count-min-log](https://github.com/seiflotfy/count-min-log) | 53 | Go implementation of Count-Min-Log | 5 years ago |
| [crunch](https://github.com/superwhiskers/crunch) | 47 | take bytes out of things easily ✨🍪 | 3 months ago |
| [nan](https://github.com/kak-tus/nan) | 43 | Zero allocation Nullable structures in one library with handy conversion functions, marshallers and unmarshallers | 2 months ago |
| [goset](https://github.com/zoumo/goset) | 42 | Set is a useful collection but there is no built-in implementation in Go lang. | a year ago |
| [hide](https://github.com/emvi/hide) | 39 | ID type with marshalling to/from hash to prevent sending IDs to clients. | 6 days ago |
| [concurrent-writer](https://github.com/free/concurrent-writer) | 37 | Highly concurrent drop-in replacement for bufio.Writer | 4 years ago |
| [pipeline](https://github.com/hyfather/pipeline) | 35 | Pipelines using goroutines | 13 days ago |
| [deque](https://github.com/edwingeng/deque) | 33 | A highly optimized double-ended queue | 6 months ago |
| [timedmap](https://github.com/zekroTJA/timedmap) | 33 | A thread safe map which has expiring key-value pairs. | 5 months ago |
| [typ](https://github.com/gurukami/typ) | 29 | Null Types, Safe primitive type conversion and fetching value from complex structures. | a month ago |
| [dict](https://github.com/srfrog/dict) | 22 | Python-like dictionaries for Go | a year ago |
| [null](https://github.com/emvi/null) | 22 | Nullable Go types that can be marshalled/unmarshalled to/from JSON. | 6 days ago |
| [cmap](https://github.com/lrita/cmap) | 19 | a thread-safe concurrent map for go | a year ago |
| [go-ef](https://github.com/amallia/go-ef) | 18 | A Go implementation of the Elias-Fano encoding | 4 years ago |
| [mspm](https://github.com/BlackRabbitt/mspm) | 16 | Multi-String Pattern Matching Algorithm Using TrieHashNode | 3 years ago |
| [ptrie](https://github.com/viant/ptrie) | 16 | A prefix tree implementation in go  | a year ago |
| [set](https://github.com/StudioSol/set) | 16 | A simple Set data structure implementation in Go (Golang) using LinkedHashMap. | a month ago |
| [parapipe](https://github.com/nazar256/parapipe) | 12 | Paralleling pipeline | 5 months ago |
| [treap](https://github.com/perdata/treap) | 12 | golang persistent immutable treap sorted sets | 2 years ago |
| [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) | 10 | Ordered-concurrently a library for parallel processing with ordered output in Go. Process work concurrently / in parallel and returns output in a channel in the order of input. It is useful in concurrently / parallelly processing items in a queue, and get output in the order provided by the queue. | a day ago |
| [gofal](https://github.com/xxjwxc/gofal) | 9 | fractional api base on golang . golang math tools fractional molecular denominator 分数计算 分子 分母 运算 | 2 years ago |
| [gdcache](https://github.com/ulovecode/gdcache) | 6 | gdcache is a pure non-intrusive cache library implemented by golang, you can use it to implement your own cache. | a month ago |
| [goterator](https://github.com/yaa110/goterator) | 6 | Lazy iterator implementation for Golang | a year ago |
| [parsefields](https://github.com/MonaxGT/parsefields) | 6 | Tools for parse JSON-like logs for collecting unique fields and events | 3 years ago |
| [bloomfilter](https://github.com/OldPanda/bloomfilter) | 5 | Yet another Bloomfilter implementation in Go, compatible with Java's Guava library | 5 months ago |
| [dsu](https://github.com/ihebu/dsu) | 4 | Disjoint Set data structure implementation in Go | 5 months ago |
| [hashsplit](https://github.com/bobg/hashsplit) | 3 |  | 3 months ago |
| [slices](https://github.com/srfrog/slices) | 3 | Functions that operate on slices. Similar to functions from package strings or package bytes that have been adapted to work with slices. | a year ago |
| [merkle](https://github.com/bobg/merkle) | 1 | Merkle hash trees | 3 months ago |


### [Database](#Database)
* Databases in Go.

#### [Databases implemented in Go](#Databases-implemented-in-Go)
* Databases implemented in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [prometheus](https://github.com/prometheus/prometheus) | 39602 | The Prometheus monitoring system and time series database. | 2 hours ago |
| [tidb](https://github.com/pingcap/tidb) | 29545 | TiDB is an open source distributed HTAP database compatible with the MySQL protocol  | 14 minutes ago |
| [leveldb](https://github.com/google/leveldb) | 26995 | LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values. | 18 hours ago |
| [cockroach](https://github.com/cockroachdb/cockroach) | 22480 | CockroachDB - the open source, cloud-native distributed SQL database. | 3 minutes ago |
| [influxdb](https://github.com/influxdata/influxdb) | 22392 | Scalable datastore for metrics, events, and real-time analytics | 3 hours ago |
| [dgraph](https://github.com/dgraph-io/dgraph) | 16912 | Native GraphQL Database with graph backend | 3 hours ago |
| [groupcache](https://github.com/golang/groupcache) | 10848 | groupcache is a caching and cache-filling library, intended as a replacement for memcached in many cases. | 6 months ago |
| [badger](https://github.com/dgraph-io/badger) | 9966 | Fast key-value DB in Go. | 8 days ago |
| [rqlite](https://github.com/rqlite/rqlite) | 9055 | The lightweight, distributed relational database built on SQLite | 2 days ago |
| [milvus](https://github.com/milvus-io/milvus) | 8739 | An open-source vector database for embedding similarity search and AI applications. | a few seconds ago |
| [go-cache](https://github.com/patrickmn/go-cache) | 5560 | An in-memory key:value store/cache (similar to Memcached) library for Go, suitable for single-machine applications. | 5 months ago |
| [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) | 5389 | VictoriaMetrics: fast, cost-effective monitoring solution and time series database | 8 hours ago |
| [bigcache](https://github.com/allegro/bigcache) | 5236 | Efficient cache for gigabytes of data written in Go. | a day ago |
| [bbolt](https://github.com/etcd-io/bbolt) | 4921 | An embedded key/value database for Go. | 8 days ago |
| [goleveldb](https://github.com/syndtr/goleveldb) | 4705 | LevelDB key/value database in Go. | 11 days ago |
| [ledisdb](https://github.com/ledisdb/ledisdb) | 3757 | A high performance NoSQL Database Server powered by Go | 8 months ago |
| [dtm](https://github.com/yedf/dtm) | 3647 | 🔥A cross-language distributed transaction manager. Support xa, tcc, saga, transactional messages. 跨语言分布式事务管理器 | 3 days ago |
| [buntdb](https://github.com/tidwall/buntdb) | 3531 | BuntDB is an embeddable, in-memory key/value database for Go with custom indexing and geospatial support | 21 days ago |
| [immudb](https://github.com/codenotary/immudb) | 3310 | immudb - world’s fastest immutable database, built on a zero trust model | 7 hours ago |
| [tiedot](https://github.com/HouzuoGuo/tiedot) | 2633 | A rudimentary implementation of a basic document (NoSQL) database in Go | 2 months ago |
| [rosedb](https://github.com/roseduan/rosedb) | 2017 | 🚀A fast, stable and embedded k-v storage in pure Golang, supports string, list, hash, set, sorted set. 一个 Go 语言实现的快速、稳定、内嵌的 k-v 存储引擎。 | 14 hours ago |
| [nutsdb](https://github.com/xujiajun/nutsdb) | 1786 | A simple, fast, embeddable, persistent key/value store written in pure Go. It supports fully serializable transactions and many data structures such as  list, set, sorted set. | 4 days ago |
| [gcache](https://github.com/bluele/gcache) | 1757 | An in-memory cache library for golang. It supports multiple eviction policies: LRU, LFU, ARC | 3 months ago |
| [cache2go](https://github.com/muesli/cache2go) | 1627 | Concurrency-safe Go caching library with expiration capabilities and access counters | a month ago |
| [godis](https://github.com/HDT3213/godis) | 1428 | A Golang implemented Redis Server and Cluster. Go 语言实现的 Redis 服务器和分布式集群 | 7 days ago |
| [fastcache](https://github.com/VictoriaMetrics/fastcache) | 1288 | Fast thread-safe inmemory cache for big number of entries in Go. Minimizes GC overhead | 2 months ago |
| [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) | 1235 | A decentralized, trusted, high performance, SQL database with blockchain features | 3 months ago |
| [diskv](https://github.com/peterbourgon/diskv) | 1112 | A disk-backed key-value store. | 6 days ago |
| [databunker](https://github.com/securitybunker/databunker) | 915 | Secure SDK/vault for personal records/PII built to comply with GDPR | 7 days ago |
| [eliasdb](https://github.com/krotik/eliasdb) | 853 | EliasDB a graph-based database. | 6 months ago |
| [moss](https://github.com/couchbase/moss) | 837 | moss - a simple, fast, ordered, persistable, key-val storage library for golang | 4 months ago |
| [pogreb](https://github.com/akrylysov/pogreb) | 829 | Embedded key-value store for read-heavy workloads written in Go | 3 months ago |
| [column](https://github.com/kelindar/column) | 828 | High-performance, columnar, in-memory store with bitmap indexing in Go | 9 days ago |
| [levigo](https://github.com/jmhodges/levigo) | 402 | levigo is a Go wrapper for LevelDB | a year ago |
| [pudge](https://github.com/recoilme/pudge) | 301 | Fast and simple key/value store written using Go's standard library | 4 months ago |
| [vasto](https://github.com/chrislusf/vasto) | 224 | A distributed key-value store. On Disk. Able to grow or shrink without service interruption. | 3 years ago |
| [kivik](https://github.com/go-kivik/kivik) | 215 | Kivik provides a common interface to CouchDB or CouchDB-like databases for Go and GopherJS. | 5 months ago |
| [piladb](https://github.com/fern4lvarez/piladb) | 190 | Lightweight RESTful database engine based on stack data structures | a year ago |
| [golang-scribble](https://github.com/nanobox-io/golang-scribble) | 139 | A tiny Golang JSON database | 3 years ago |
| [slowpoke](https://github.com/recoilme/slowpoke) | 98 | Low-level key/value store in pure Go.  | 2 years ago |
| [cache](https://github.com/akyoto/cache) | 95 | :handbag: Cache arbitrary data with an expiration time. | 2 years ago |
| [unitdb](https://github.com/unit-io/unitdb) | 74 | Fast specialized time-series database for IoT, real-time internet connected devices and AI analytics. | 19 days ago |
| [bcache](https://github.com/iwanbk/bcache) | 72 | Eventually consistent distributed in-memory  cache Go library | 3 years ago |
| [couchcache](https://github.com/codingsince1985/couchcache) | 54 | A RESTful caching micro-service in Go backed by Couchbase | a month ago |
| [hare](https://github.com/jameycribbs/hare) | 44 | Hare is a nimble little database management system for Go. | 9 months ago |
| [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) | 38 | golang bigcache with clustering as a library. | 4 years ago |
| [coffer](https://github.com/claygod/coffer) | 28 | Simply ACID* key-value database. At the medium or even low latency it tries to provide greater throughput without losing the ACID properties of the database. The database provides the ability to create record headers at own discretion and use them as transactions. The maximum size of stored data is limited by the size of the computer's RAM. | 2 months ago |
| [tempdb](https://github.com/rafaeljesus/tempdb) | 15 | Key-value store for temporary items :memo: | 4 years ago |
| [ttlcache](https://github.com/cheshir/ttlcache) | 3 | Simple in-memory key-value storage with TTL for each record. | 8 months ago |


#### [Database schema migration](#Database-schema-migration)
* Database schema migration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [migrate](https://github.com/golang-migrate/migrate) | 7510 | Database migrations. CLI and Golang library. | a day ago |
| [sql-migrate](https://github.com/rubenv/sql-migrate) | 2303 | SQL schema migration tool for Go. | 13 days ago |
| [goose](https://github.com/pressly/goose) | 1984 | A database migration tool. Supports SQL migrations and Go functions.  | 18 days ago |
| [pop](https://github.com/gobuffalo/pop) | 1136 | A Tasty Treat For All Your Database Needs | a month ago |
| [skeema](https://github.com/skeema/skeema) | 952 | Schema management CLI for MySQL | 4 days ago |
| [goavro](https://github.com/linkedin/goavro) | 763 |  | a month ago |
| [gormigrate](https://github.com/go-gormigrate/gormigrate) | 692 | Minimalistic database migration helper for Gorm ORM | 3 days ago |
| [darwin](https://github.com/GuiaBolso/darwin) | 123 | Database schema evolution library for Go | 8 months ago |
| [migrator](https://github.com/lopezator/migrator) | 115 | Dead simple Go database migration library. | a year ago |
| [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) | 81 | A Go package to help write migrations with go-pg/pg. | 3 months ago |
| [go-fixtures](https://github.com/RichardKnop/go-fixtures) | 26 | Django style fixtures for Golang's excellent built-in database/sql library. | 2 years ago |
| [avro](https://github.com/khezen/avro) | 25 | Apache AVRO for go | a year ago |
| [sqlize](https://github.com/sunary/sqlize) | 25 | sql migration schema generate from models | 10 days ago |
| [pravasan](https://github.com/pravasan/pravasan) | 24 | Simple Migration Tool - written in Go | 3 years ago |
| [migrator](https://github.com/larapulse/migrator) | 11 | MySQL database migrator | 7 months ago |
| [schema](https://github.com/adlio/schema) | 7 | Embedded schema migration package for Go | a month ago |
| [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) | 5 | CLI-friendly package for go-pg migrations management. | 5 months ago |


#### [Database tools.](#Database-tools)
* Database-tools.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vitess](https://github.com/vitessio/vitess) | 12847 | Vitess is a database clustering system for horizontal scaling of MySQL. | 5 minutes ago |
| [pgweb](https://github.com/sosedoff/pgweb) | 7092 | Cross-platform client for PostgreSQL databases | 20 days ago |
| [kingshard](https://github.com/flike/kingshard) | 5860 | A high-performance MySQL proxy | 5 months ago |
| [orchestrator](https://github.com/openark/orchestrator) | 4294 | MySQL replication topology management and HA | 21 days ago |
| [go-mysql-elasticsearch](https://github.com/go-mysql-org/go-mysql-elasticsearch) | 3631 | Sync MySQL data into elasticsearch  | 9 months ago |
| [go-mysql](https://github.com/go-mysql-org/go-mysql) | 3316 | a powerful mysql toolset with Go | 11 minutes ago |
| [prest](https://github.com/prest/prest) | 2943 | pREST (PostgreSQL REST), low-code, simplify and accelerate development, ⚡ instant, realtime, high-performance on any Postgres application, existing or new | 5 days ago |
| [chproxy](https://github.com/Vertamedia/chproxy) | 748 | ClickHouse http proxy and load balancer | 20 days ago |
| [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) | 581 | pg_timetable: Advanced scheduling for PostgreSQL | 5 hours ago |
| [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) | 314 | Collects many small inserts to ClickHouse and send in big inserts | a month ago |
| [myreplication](https://github.com/2tvenom/myreplication) | 176 | Golang MySql binary log replication listener | 3 years ago |
| [octillery](https://github.com/blastrain/octillery) | 146 | Go package for sharding databases ( Supports every ORM or raw SQL ) | 6 months ago |
| [dbbench](https://github.com/sj14/dbbench) | 61 | 🏋️ dbbench is a simple database benchmarking tool which supports several databases and own scripts | 7 days ago |
| [datagen](https://github.com/codingconcepts/datagen) | 42 | A fast data generator that's multi-table aware and supports multi-row DML. | a year ago |
| [prep](https://github.com/hexdigest/prep) | 29 | Prep finds all SQL statements in a Go package and instruments db connection with prepared statements | 4 years ago |
| [rwdb](https://github.com/andizzle/rwdb) | 13 | Database wrapper that manage read write connections | 4 years ago |


#### [SQL query builder](#SQL-query-builder)
* SQL query builder, libraries for building and using SQL.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [squirrel](https://github.com/Masterminds/squirrel) | 4319 | Fluent SQL generation for golang | 3 days ago |
| [xo](https://github.com/xo/xo) | 2946 | Command line tool to generate idiomatic Go code for SQL databases supporting PostgreSQL, MySQL, SQLite, Oracle, and Microsoft SQL Server | a month ago |
| [goqu](https://github.com/doug-martin/goqu) | 1310 | SQL builder and query library for golang | 16 days ago |
| [gendry](https://github.com/didi/gendry) | 1300 | a golang library for sql builder | 7 days ago |
| [dotsql](https://github.com/qustavo/dotsql) | 602 | A Golang library for using SQL. | 3 months ago |
| [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) | 542 | A Go (golang) package that enhances the standard database/sql package by providing powerful data retrieval methods as well as DB-agnostic query building capabilities. | 10 months ago |
| [jet](https://github.com/go-jet/jet) | 524 | Type safe SQL builder with code generation and automatic query result data mapping | 21 days ago |
| [dbq](https://github.com/rocketlaunchr/dbq) | 321 | Zero boilerplate database operations for Go | 9 months ago |
| [sqrl](https://github.com/elgris/sqrl) | 233 | Fluent SQL generation for golang | 22 days ago |
| [sqlingo](https://github.com/lqs/sqlingo) | 166 | 💥 A lightweight DSL & ORM which helps you to write SQL in Go. | 19 days ago |
| [go-structured-query](https://github.com/bokwoon95/go-structured-query) | 138 | Type safe SQL query builder and struct mapper for Go | 20 days ago |
| [igor](https://github.com/galeone/igor) | 84 | igor is an abstraction layer for PostgreSQL with a gorm like syntax. | a year ago |
| [godbal](https://github.com/xujiajun/godbal) | 52 | Database Abstraction Layer (dbal) for Go. Support SQL builder and get result easily  (now only support mysql) | 3 years ago |
| [buildsqlx](https://github.com/arthurkushman/buildsqlx) | 38 | Go database query builder library for PostgreSQL | 7 months ago |
| [sqlf](https://github.com/leporo/sqlf) | 30 | Fast SQL query builder for Go | a month ago |
| [qry](https://github.com/HnH/qry) | 19 | Write your SQL queries in raw files with all benefits of modern IDEs, use them in an easy way inside your application with all the profit of compile time constants | 2 months ago |
| [gosql](https://github.com/twharmon/gosql) | 17 | SQL query builder for Go | a year ago |
| [mpath-go](https://github.com/spacetab-io/mpath-go) | 9 | Golang package for MPTT (Modified Preorder Tree Traversal) - materialized path realisation. | 2 years ago |
| [ormlite](https://github.com/pupizoid/ormlite) | 1 | Lightweight package containing some ORM-like features and helpers for sqlite databases. | 10 months ago |


### [Database Drivers](#Database-Drivers)
* Libraries for connecting and operating databases.

#### [Relational Databases](#Relational-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mysql](https://github.com/go-sql-driver/mysql) | 11641 | Go MySQL Driver is a MySQL driver for Go's (golang) database/sql package | 7 days ago |
| [pq](https://github.com/lib/pq) | 6880 | Pure Go Postgres driver for database/sql | 7 days ago |
| [go-sqlite3](https://github.com/mattn/go-sqlite3) | 5226 | sqlite3 driver for go using database/sql | 13 days ago |
| [pgx](https://github.com/jackc/pgx) | 4709 | PostgreSQL driver and toolkit for Go | 2 days ago |
| [go-mssqldb](https://github.com/denisenkom/go-mssqldb) | 1470 | Microsoft SQL server driver written in go language | 19 days ago |
| [go-oci8](https://github.com/mattn/go-oci8) | 571 | Oracle driver for Go using database/sql | 21 days ago |
| [scany](https://github.com/georgysavva/scany) | 425 | Library for scanning data from a database into Go structs and more | 12 hours ago |
| [godror](https://github.com/godror/godror) | 303 | GO DRiver for ORacle DB | 6 days ago |
| [firebirdsql](https://github.com/nakagami/firebirdsql) | 158 | Firebird RDBMS sql driver for Go (golang) | 18 days ago |
| [go-adodb](https://github.com/mattn/go-adodb) | 123 | Microsoft ActiveX Object DataBase driver for go that using exp/sql | 2 years ago |
| [gofreetds](https://github.com/minus5/gofreetds) | 105 | Go Sql Server database driver. | a year ago |
| [sqinn-go](https://github.com/cvilsmeier/sqinn-go) | 84 | SQLite with pure Go | 6 months ago |
| [calcite-avatica-go](https://github.com/apache/calcite-avatica-go) | 82 | Mirror of Apache Calcite - Avatica Go SQL Driver | a year ago |
| [bgc](https://github.com/viant/bgc) | 15 | Datastore Connectivity for BigQuery in go | 2 years ago |
| [pig](https://github.com/alexeyco/pig) | 4 | Simple pgx wrapper to execute and scan query results | 7 months ago |


#### [NoSQL Databases](#NoSQL-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [redis](https://github.com/go-redis/redis) | 12861 | Type-safe Redis client for Golang | 8 days ago |
| [redigo](https://github.com/gomodule/redigo) | 8733 | Go client for Redis | 12 days ago |
| [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) | 6225 | The Go driver for MongoDB | an hour ago |
| [mgo](https://github.com/globalsign/mgo) | 1920 | The MongoDB driver for Go | 17 days ago |
| [rethinkdb-go](https://github.com/rethinkdb/rethinkdb-go) | 1579 | Go language driver for RethinkDB | 2 months ago |
| [gomemcache](https://github.com/bradfitz/gomemcache) | 1410 | Go Memcached client library #golang | 10 days ago |
| [qmgo](https://github.com/qiniu/qmgo) | 718 | Qmgo - The Go driver for MongoDB. It‘s based on official mongo-go-driver but easier to use like Mgo. | 25 days ago |
| [redeo](https://github.com/bsm/redeo) | 405 | High-performance framework for building redis-protocol compatible TCP servers/services | a year ago |
| [mgm](https://github.com/Kamva/mgm) | 402 | Mongo Go Models (mgm) is a fast and simple MongoDB ODM for Go (based on official Mongo Go Driver) | a month ago |
| [neoism](https://github.com/jmcvetta/neoism) | 381 | Neo4j client for Golang | 2 years ago |
| [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) | 369 | Aerospike Client Go  | 7 days ago |
| [gocb](https://github.com/couchbase/gocb) | 328 | The Couchbase Go SDK | 12 days ago |
| [go-couchbase](https://github.com/couchbase/go-couchbase) | 313 | Couchbase client in Go | 7 days ago |
| [go-rejson](https://github.com/nitishm/go-rejson) | 187 | Golang client for redislabs' ReJSON module with support for multilple redis clients (redigo, go-redis) | 7 months ago |
| [godis](https://github.com/piaohao/godis) | 97 | redis client implement by golang, inspired by jedis. | 2 years ago |
| [Neo4j-GO](https://github.com/davemeehan/Neo4j-GO) | 76 | Neo4j REST Client in golang | 3 years ago |
| [arangolite](https://github.com/solher/arangolite) | 69 | Lightweight Golang driver for ArangoDB | 8 months ago |
| [go-pilosa](https://github.com/pilosa/go-pilosa) | 48 | Go client library for Pilosa | 2 years ago |
| [goforestdb](https://github.com/couchbase/goforestdb) | 30 | Go bindings for ForestDB | 5 years ago |
| [neo4j](https://github.com/cihangir/neo4j) | 26 | Neo4j Rest API Client for Go lang | 7 years ago |
| [goriak](https://github.com/zegl/goriak) | 25 | goriak - Go language driver for Riak KV | 2 months ago |
| [xredis](https://github.com/shomali11/xredis) | 15 | Go Redis Client | 2 years ago |
| [godscache](https://github.com/defcronyke/godscache) | 9 | An unofficial Google Cloud Platform Go Datastore wrapper that adds caching using memcached. For App Engine Flexible, Compute Engine, Kubernetes Engine, and more. | 3 years ago |
| [asc](https://github.com/viant/asc) | 6 | Datastore Connectivity for Aerospike for go | 3 years ago |
| [gocosmos](https://github.com/btnguyen2k/gocosmos) | 5 | Go driver for Azure CosmosDB SQL API | 4 months ago |


#### [Search and Analytic Databases](#Search-and-Analytic-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bleve](https://github.com/blevesearch/bleve) | 7943 | A modern text indexing library for go | 3 days ago |
| [elastic](https://github.com/olivere/elastic) | 6347 | Elasticsearch client for Go. | 7 days ago |
| [riot](https://github.com/go-ego/riot) | 6009 | Go Open Source, Distributed, Simple and efficient Search Engine; Warning: This is V1 and beta version, because of big memory consume, and the V2 will be rewrite all code. | a year ago |
| [go-elasticsearch](https://github.com/elastic/go-elasticsearch) | 3736 | The official Go client for Elasticsearch | 11 days ago |
| [elastigo](https://github.com/mattbaird/elastigo) | 946 | A Go (golang) based Elasticsearch client library. | 3 years ago |
| [elasticsql](https://github.com/cch123/elasticsql) | 807 | convert sql to elasticsearch DSL in golang(go) | 14 days ago |
| [skizze](https://github.com/seiflotfy/skizze) | 81 | A probabilistic data structure service and storage | 6 years ago |
| [goes](https://github.com/OwnLocal/goes) | 24 | A library to interact with Elasticsearch in Go! | a year ago |


#### [Multiple Backends](#Multiple-Backends)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cayley](https://github.com/cayleygraph/cayley) | 13975 | An open-source graph database | 2 months ago |
| [gokv](https://github.com/philippgille/gokv) | 375 | Simple key-value store abstraction and implementations for Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB and many more) | 2 months ago |
| [cachego](https://github.com/faabiosr/cachego) | 159 | Golang Cache component - Multiple drivers | 2 months ago |
| [dsc](https://github.com/viant/dsc) | 23 | Datastore Connectivity in go | 2 years ago |


### [Date and Time](#Date-and-Time)
* Libraries for working with dates and times.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [now](https://github.com/jinzhu/now) | 3339 | Now is a time toolkit for golang | 3 months ago |
| [dateparse](https://github.com/araddon/dateparse) | 1561 | GoLang Parse many date strings without knowing format in advance. | 5 days ago |
| [carbon](https://github.com/golang-module/carbon) | 1477 | A simple, semantic and developer-friendly golang package for datetime | 2 months ago |
| [carbon](https://github.com/uniplaces/carbon) | 648 | Carbon for Golang, an extension for Time | 11 days ago |
| [durafmt](https://github.com/hako/durafmt) | 407 | :clock8:  Better time duration formatting in Go!  | 5 months ago |
| [timeutil](https://github.com/leekchan/timeutil) | 185 | timeutil - useful extensions (Timedelta, Strftime, ...) to the golang's time package | 3 years ago |
| [gostradamus](https://github.com/bykof/gostradamus) | 158 | Gostradamus: Better DateTimes for Go 🕰️ | 8 months ago |
| [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) | 106 | The implementation of Persian (Solar Hijri) Calendar in Go | 5 months ago |
| [iso8601](https://github.com/relvacode/iso8601) | 96 | A fast ISO8601 date parser for Go | 4 months ago |
| [date](https://github.com/rickb777/date) | 82 | A Go package for working with dates | 2 months ago |
| [timespan](https://github.com/SaidinWoT/timespan) | 75 | Golang package to manipulate time intervals. | 3 years ago |
| [feiertage](https://github.com/wlbr/feiertage) | 40 | Gesetzliche Feiertage und mehr in Deutschland und Österreich (Bank holidays/public holidays in Austria and Germany) | 3 months ago |
| [go-sunrise](https://github.com/nathan-osman/go-sunrise) | 38 | Go package for calculating the sunrise and sunset times for a given location | 5 months ago |
| [go-str2duration](https://github.com/xhit/go-str2duration) | 31 | Convert string to duration in golang | a year ago |
| [kair](https://github.com/GuilhermeCaruso/kair) | 21 | :clock1: Date and Time - Golang Formatting Library | a year ago |
| [cronrange](https://github.com/1set/cronrange) | 12 | time range expression in cron style | 3 months ago |
| [nulltime](https://github.com/kirillDanshin/nulltime) | 11 |  | 5 years ago |
| [tuesday](https://github.com/osteele/tuesday) | 9 | Ruby-compatible strftime for golang | 5 months ago |
| [strftime](https://github.com/awoodbeck/strftime) | 7 | C99-compatible strftime formatter for use with Go time.Time instances. | 4 years ago |
| [go-week](https://github.com/stoewer/go-week) | 6 | A Go package to work with ISO 8601 week dates | 8 hours ago |


### [Distributed Systems](#Distributed-Systems)
* Packages that help with building Distributed Systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [etcd](https://github.com/etcd-io/etcd) | 37875 | Distributed reliable key-value store for the most critical data of a distributed system | 13 minutes ago |
| [kit](https://github.com/go-kit/kit) | 21663 | A standard library for microservices. | 16 days ago |
| [go-micro](https://github.com/asim/go-micro) | 17161 | A pluggable Go framework for distributed systems development | 4 days ago |
| [kratos](https://github.com/go-kratos/kratos) | 15468 | A modular-designed and easy-to-use microservices framework in Go. | 9 hours ago |
| [grpc-go](https://github.com/grpc/grpc-go) | 14858 | The Go language implementation of gRPC. HTTP/2 based RPC | 3 hours ago |
| [go-zero](https://github.com/zeromicro/go-zero) | 12505 | go-zero is a web and rpc framework written in Go. It's born to ensure the stability of the busy sites with resilient design. Builtin goctl greatly improves the development productivity. | an hour ago |
| [micro](https://github.com/micro/micro) | 10679 | Micro is a distributed cloud operating system | 2 days ago |
| [nats-server](https://github.com/nats-io/nats-server) | 10099 | High-Performance server for NATS.io, the cloud and edge native messaging system. | 36 minutes ago |
| [libzmq](https://github.com/zeromq/libzmq) | 7344 | ZeroMQ core engine in C++, implements ZMTP/3.1 | 11 hours ago |
| [rpcx](https://github.com/smallnest/rpcx) | 6343 | Best microservices framework in Go, like alibaba Dubbo, but with more features, Scale easily. Try it. Test it. If you feel it's better, use it! 𝐉𝐚𝐯𝐚有𝐝𝐮𝐛𝐛𝐨, 𝐆𝐨𝐥𝐚𝐧𝐠有𝐫𝐩𝐜𝐱! | 14 days ago |
| [raft](https://github.com/hashicorp/raft) | 5233 | Golang implementation of the Raft consensus protocol | 11 days ago |
| [lura](https://github.com/luraproject/lura) | 4664 | Ultra performant API Gateway with middlewares. A project hosted at The Linux Foundation | 10 days ago |
| [torrent](https://github.com/anacrolix/torrent) | 4093 | Full-featured BitTorrent client package and utilities | a day ago |
| [dragonboat](https://github.com/lni/dragonboat) | 3915 | A feature complete and high performance multi-group Raft library in Go.   | 3 days ago |
| [emitter](https://github.com/emitter-io/emitter) | 3097 | High performance, distributed and low latency publish-subscribe platform. | 4 months ago |
| [glow](https://github.com/chrislusf/glow) | 3004 | Glow is an easy-to-use distributed computation system written in Go, similar to Hadoop Map Reduce, Spark, Flink, Storm, etc. I am also working on another similar pure Go system, https://github.com/chrislusf/gleam , which is more flexible and more performant. | 3 years ago |
| [gleam](https://github.com/chrislusf/gleam) | 2918 | Fast, efficient, and scalable distributed map/reduce system, DAG execution, in memory or on disk, written in pure Go, runs standalone or distributedly. | 6 months ago |
| [liftbridge](https://github.com/liftbridge-io/liftbridge) | 2166 | Lightweight, fault-tolerant message streams. | 6 days ago |
| [hprose-golang](https://github.com/hprose/hprose-golang) | 1183 | Hprose is a cross-language RPC. This project is Hprose for Golang. | 12 hours ago |
| [ringpop-go](https://github.com/uber/ringpop-go) | 708 | Scalable, fault-tolerant application-layer sharding for Go applications | 9 months ago |
| [rain](https://github.com/cenkalti/rain) | 656 | 🌧 BitTorrent client and library in Go | 4 days ago |
| [gorpc](https://github.com/valyala/gorpc) | 647 | Simple, fast and scalable golang rpc library for high load | 2 years ago |
| [go-health](https://github.com/InVisionApp/go-health) | 608 | Library for enabling asynchronous health checks in your service | 2 years ago |
| [redislock](https://github.com/bsm/redislock) | 535 | Simplified distributed locking implementation using Redis | a month ago |
| [go-sundheit](https://github.com/AppsFlyer/go-sundheit) | 435 | A library built to provide support for defining service health for golang services. It allows you to register async health checks for your dependencies and the service itself, provides a health endpoint that exposes their status, and health metrics. | 3 months ago |
| [consistent](https://github.com/buraksezer/consistent) | 428 | Consistent hashing with bounded loads in Golang | 5 months ago |
| [digota](https://github.com/digota/digota) | 416 | ecommerce microservice | 9 months ago |
| [arpc](https://github.com/lesismal/arpc) | 398 | More effective network communication, two-way calling, notify and broadcast supported. | 8 days ago |
| [sleuth](https://github.com/ursiform/sleuth) | 339 | A Go library for master-less peer-to-peer autodiscovery and RPC between HTTP services | 4 years ago |
| [go-jump](https://github.com/dgryski/go-jump) | 334 | go-jump: Jump consistent hashing | a month ago |
| [dht](https://github.com/anacrolix/dht) | 210 | dht is used by anacrolix/torrent, and is intended for use as a library in other projects both torrent related and otherwise | 19 hours ago |
| [jsonrpc](https://github.com/ybbus/jsonrpc) | 194 | A simple go implementation of json rpc 2.0 client over http | 2 months ago |
| [jsonrpc](https://github.com/osamingo/jsonrpc) | 156 | The jsonrpc package helps implement of JSON-RPC 2.0 | a month ago |
| [go-doudou](https://github.com/unionj-cloud/go-doudou) | 83 | go-doudou（doudou pronounce /dəudəu/）is a gossip protocol and OpenAPI 3.0 spec based decentralized microservice framework. It supports monolith service application as well. Currently, it supports restful service only. | a day ago |
| [celeriac.v1](https://github.com/svcavallar/celeriac.v1) | 68 | Golang client library for adding support for interacting and monitoring Celery workers, tasks and events. | a year ago |
| [doublejump](https://github.com/edwingeng/doublejump) | 66 | A revamped Google's jump consistent hash | 4 months ago |
| [semaphore](https://github.com/jexia/semaphore) | 64 | Take control of your data, connect with anything, and expose it anywhere through protocols such as HTTP, GraphQL, and gRPC. | 5 months ago |
| [dot](https://github.com/dotchain/dot) | 61 | distributed data sync with operational transformation/transforms  | 2 years ago |
| [outboxer](https://github.com/italolelis/outboxer) | 59 | A library that implements the outboxer pattern in go | 14 hours ago |
| [flowgraph](https://github.com/vectaport/flowgraph) | 41 | Flowgraph package for scalable asynchronous system development | 7 months ago |
| [drmaa](https://github.com/dgruber/drmaa) | 36 | Compute cluster (HPC) job submission library for Go (#golang) based on the open DRMAA standard. | a year ago |
| [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) | 34 | MySQL Backed Locking Primitive | 4 months ago |
| [go-pdu](https://github.com/pdupub/go-pdu) | 31 | Parallel Digital Universe - A decentralized identity-based social network | 18 days ago |
| [micro](https://github.com/gmsec/micro) | 14 | A Go distributed systems development framework | 25 days ago |
| [dynatomic](https://github.com/tylfin/dynatomic) | 13 | Dynatomic is a library for using dynamodb as an atomic counter | a year ago |
| [consistenthash](https://github.com/mbrostami/consistenthash) | 9 | A Go library that implements Consistent Hashing | 2 years ago |
| [failured](https://github.com/andy2046/failured) | 1 | Adaptive Accrual Failure Detector | 3 months ago |


### [Dynamic DNS](#Dynamic-DNS)
* Tools for updating dynamic DNS records.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [godns](https://github.com/TimothyYe/godns) | 892 | A dynamic DNS client tool supports AliDNS, Cloudflare, Google Domains, DNSPod, HE.net & DuckDNS & DreamHost, etc, written in Go. | 7 days ago |
| [ddns](https://github.com/skibish/ddns) | 195 | Personal DDNS client with Digital Ocean Networking DNS as backend. | a month ago |


### [Email](#Email)
* Libraries and tools that implement email creation and sending.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [MailHog](https://github.com/mailhog/MailHog) | 9266 | Web and API based SMTP testing | 11 days ago |
| [hermes](https://github.com/matcornic/hermes) | 2362 | Golang package that generates clean, responsive HTML e-mails for sending transactional mail | a year ago |
| [email](https://github.com/jordan-wright/email) | 1865 | Robust and flexible email library for Go | 3 months ago |
| [go-imap](https://github.com/emersion/go-imap) | 1398 |  :inbox_tray: An IMAP library for clients and servers | a month ago |
| [sendgrid-go](https://github.com/sendgrid/sendgrid-go) | 778 | The Official Twilio SendGrid Led, Community Driven Golang API Library | 21 days ago |
| [mailgun-go](https://github.com/mailgun/mailgun-go) | 560 | Go library for sending mail with the Mailgun API. | 13 days ago |
| [email-verifier](https://github.com/AfterShip/email-verifier) | 331 | :white_check_mark: A Go library for email verification without sending any emails. | 2 months ago |
| [go-message](https://github.com/emersion/go-message) | 224 | :envelope: A streaming Go library for the Internet Message Format and mail messages | 21 days ago |
| [go-simple-mail](https://github.com/xhit/go-simple-mail) | 224 | Golang package for send email. Support keep alive connection, TLS and SSL. Easy for bulk SMTP. | a month ago |
| [hectane](https://github.com/hectane/hectane) | 210 | Lightweight SMTP client written in Go | a year ago |
| [douceur](https://github.com/aymerick/douceur) | 202 | A simple CSS parser and inliner in Go | 5 months ago |
| [mailchain](https://github.com/mailchain/mailchain) | 89 | Using Mailchain, blockchain users can now send and receive rich-media HTML messages with attachments via a blockchain address. | 7 days ago |
| [go-premailer](https://github.com/vanng822/go-premailer) | 76 | Inline styling for html mail in golang | 8 months ago |
| [go-dkim](https://github.com/toorop/go-dkim) | 73 | DKIM package for golang | a year ago |
| [smtp](https://github.com/mailhog/smtp) | 65 | MailHog SMTP Protocol | a month ago |
| [go-email-validator](https://github.com/go-email-validator/go-email-validator) | 16 | 📧 Golang Email address validator | 7 days ago |


### [Embeddable Scripting Languages](#Embeddable-Scripting-Languages)
* Embedding other languages inside your go code.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopher-lua](https://github.com/yuin/gopher-lua) | 4380 | GopherLua: VM and compiler for Lua in Go | 2 months ago |
| [tengo](https://github.com/d5/tengo) | 2494 | A fast script language for Go | 2 days ago |
| [goja](https://github.com/dop251/goja) | 2486 | ECMAScript/JavaScript engine in pure Go | 10 hours ago |
| [go-lua](https://github.com/Shopify/go-lua) | 2188 | A Lua VM in Go | 15 days ago |
| [expr](https://github.com/antonmedv/expr) | 2050 | Expression language for Go | 3 months ago |
| [go-python](https://github.com/sbinet/go-python) | 1324 | naive go bindings to the CPython2 C-API | 7 months ago |
| [anko](https://github.com/mattn/anko) | 1188 | Scriptable interpreter written in golang | 6 months ago |
| [cel-go](https://github.com/google/cel-go) | 955 | Fast, portable, non-Turing complete expression evaluation with gradual typing (Go) | 6 days ago |
| [go-php](https://github.com/deuill/go-php) | 822 | PHP bindings for the Go programming language (Golang) | 3 years ago |
| [core](https://github.com/metacall/core) | 792 | MetaCall: The ultimate polyglot programming experience. | 3 hours ago |
| [go-duktape](https://github.com/olebedev/go-duktape) | 781 | [abandoned] Duktape JavaScript engine bindings for Go | a month ago |
| [golua](https://github.com/aarzilli/golua) | 563 | Go bindings for Lua C API - in progress | 6 months ago |
| [gisp](https://github.com/jcla1/gisp) | 472 | Simple LISP in Go | 4 years ago |
| [gval](https://github.com/PaesslerAG/gval) | 393 | Expression evaluation in golang | 14 days ago |
| [gentee](https://github.com/gentee/gentee) | 82 | Gentee - script programming language for automation. It uses VM and compiler written in Go (Golang). | a year ago |
| [binder](https://github.com/alexeyco/binder) | 55 | High level go to Lua binder. Write less, do more. | 3 years ago |
| [purl](https://github.com/ian-kent/purl) | 34 | Perl, but fluffy like a cat! | 7 years ago |
| [ngaro](https://github.com/db47h/ngaro) | 20 | An embeddable implementation of the Ngaro Virtual Machine for Go programs | 3 years ago |
| [ecal](https://github.com/krotik/ecal) | 15 | A simple embeddable scripting language which supports concurrent event processing. | 6 months ago |


### [Error Handling](#Error-Handling)
* Libraries for handling errors.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [errors](https://github.com/pkg/errors) | 7441 | Simple error handling primitives | 13 days ago |
| [go-multierror](https://github.com/hashicorp/go-multierror) | 1423 | A Go (golang) package for representing a list of errors as a single error. | 3 days ago |
| [eris](https://github.com/rotisserie/eris) | 879 | eris provides a better way to handle, trace, and log errors in Go 🎆 | 4 months ago |
| [errorx](https://github.com/joomcode/errorx) | 778 | A comprehensive error handling library for Go | 7 months ago |
| [tracerr](https://github.com/ztrue/tracerr) | 695 | Golang errors with stack trace and source fragments. | 3 years ago |
| [errlog](https://github.com/snwfdhmp/errlog) | 402 | Reduce debugging time while programming Go. Use static and stack-trace analysis to determine which func call causes the error. | a year ago |
| [emperror](https://github.com/emperror/emperror) | 231 | The Emperor takes care of all errors personally | a year ago |
| [errors](https://github.com/emperror/errors) | 101 | Drop-in replacement for the standard library errors package and github.com/pkg/errors | 8 months ago |
| [errors](https://github.com/bnkamalesh/errors) | 24 | A drop-in replacement for Go errors, with some added sugar! Unwrap user-friendly messages, HTTP status code, easy wrapping with multiple error types. | 5 months ago |
| [falcon](https://github.com/SonicRoshan/falcon) | 7 | A Simple Yet Highly Powerful Package For Error Handling | 2 years ago |
| [errors](https://github.com/neuronlabs/errors) | 3 | Simple golang error handling with classification primitives. | 2 years ago |
| [errors](https://github.com/PumpkinSeed/errors) | 3 | Simple and efficient error package  | 2 years ago |


### [File Handling](#File-Handling)
* Libraries for handling files and file systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [afero](https://github.com/spf13/afero) | 4063 | A FileSystem Abstraction System for Go | a day ago |
| [pdfcpu](https://github.com/pdfcpu/pdfcpu) | 2680 | A PDF processor written in Go. | a month ago |
| [gdu](https://github.com/dundee/gdu) | 1415 | Disk usage analyzer with console interface written in Go | 6 days ago |
| [todo.txt](https://github.com/todotxt/todo.txt) | 1318 | ‼️ A complete primer on the whys and hows of todo.txt. | 9 months ago |
| [notify](https://github.com/rjeczalik/notify) | 694 | File system event notification library on steroids. | 3 months ago |
| [copy](https://github.com/otiai10/copy) | 355 | Go copy directory recursively | 6 days ago |
| [bigfile](https://github.com/bigfile/bigfile) | 210 | Bigfile -- a file transfer system that supports http, rpc and ftp protocol   https://bigfile.site   | 2 years ago |
| [afs](https://github.com/viant/afs) | 160 | Abstract File Storage | 19 days ago |
| [vfs](https://github.com/C2FO/vfs) | 135 | Pluggable, extensible virtual file system for Go | 7 days ago |
| [fs](https://github.com/kr/fs) | 128 | Package fs provides filesystem-related functions. | 9 months ago |
| [go-csv-tag](https://github.com/artonge/go-csv-tag) | 92 | Read csv file from go using tags | a day ago |
| [go-exiftool](https://github.com/barasher/go-exiftool) | 87 | Golang wrapper for Exiftool : extract as much metadata as possible (EXIF, ...) from files (pictures, pdf, office documents, ...) | 3 months ago |
| [opc](https://github.com/qmuntal/opc) | 67 | Go implementation of the Open Packaging Conventions (OPC) | 8 months ago |
| [skywalker](https://github.com/dixonwille/skywalker) | 65 | A package to allow one to concurrently go through a filesystem with ease | 3 months ago |
| [tarfs](https://github.com/posener/tarfs) | 47 | An implementation of the FileSystem interface for tar files. | 2 years ago |
| [checksum](https://github.com/codingsince1985/checksum) | 43 | Compute message digest for large files in Go | 2 months ago |
| [parquet](https://github.com/parsyl/parquet) | 39 | A library for reading and writing parquet files. | a month ago |
| [baraka](https://github.com/xis/baraka) | 33 | a tool for handling file uploads simple | 3 months ago |
| [go-gtfs](https://github.com/artonge/go-gtfs) | 29 | Load GTFS files in golang | a year ago |
| [flop](https://github.com/homedepot/flop) | 26 | Go file operations library chasing GNU APIs. | 10 months ago |
| [gut](https://github.com/1set/gut) | 18 | 🍱 yet another collection of go utilities & tools | a year ago |
| [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) | 14 | copy files for humans | 2 years ago |
| [todotxt](https://github.com/1set/todotxt) | 9 | Parser for todo.txt files in Go ✅ | a year ago |
| [higgs](https://github.com/dastoori/higgs) | 6 | A tiny cross-platform Go library to hide/unhide files and directories | 7 months ago |
| [pathtype](https://github.com/jonchun/pathtype) | 6 | Add a type for paths in Go. | 3 months ago |


### [Financial](#Financial)
* Packages for accounting and finance.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ticker](https://github.com/achannarasappa/ticker) | 3914 | Terminal stock ticker with live updates and position tracking | 17 days ago |
| [decimal](https://github.com/shopspring/decimal) | 3505 | Arbitrary-precision fixed-point decimal numbers in go | 4 days ago |
| [go-money](https://github.com/Rhymond/go-money) | 1016 | Go implementation of Fowler's Money pattern | 5 days ago |
| [accounting](https://github.com/leekchan/accounting) | 687 | money and currency formatting for golang | a month ago |
| [techan](https://github.com/sdcoffey/techan) | 557 | Technical Analysis Library for Golang | 17 days ago |
| [go-finance](https://github.com/FlashBoys/go-finance) | 534 | :warning: Deprecrated in favor of https://github.com/piquette/finance-go  | 4 years ago |
| [ach](https://github.com/moov-io/ach) | 269 | ACH implements a reader, writer, and validator for Automated Clearing House (ACH) files. The HTTP server is available in a Docker image and the Go package is available. | 16 hours ago |
| [currency](https://github.com/bojanz/currency) | 265 | Currency handling for Go. | 14 days ago |
| [orderbook](https://github.com/i25959341/orderbook) | 227 | Matching Engine for Limit Order Book in Golang | 6 months ago |
| [go-finance](https://github.com/alpeb/go-finance) | 114 | Go library containing a collection of financial functions for time value of money (annuities), cash flow, interest rate conversions, bonds and depreciation calculations. | 7 months ago |
| [transaction](https://github.com/claygod/transaction) | 97 | Embedded database for accounts transactions. | 4 months ago |
| [ofxgo](https://github.com/aclindsa/ofxgo) | 94 | Golang library for querying and parsing OFX | a month ago |
| [vat](https://github.com/dannyvankooten/vat) | 85 | Go package for dealing with EU VAT. Does VAT number validation & rates retrieval. | 9 months ago |
| [sleet](https://github.com/BoltApp/sleet) | 74 | Payment abstraction library - one interface for multiple payment processors ( inspired by Ruby's ActiveMerchant ) | 12 days ago |
| [go-finnhub](https://github.com/m1/go-finnhub) | 64 | Simple and easy to use client for stock market, forex and crypto data from finnhub.io written in Go. Access real-time financial market data from 60+ stock exchanges, 10 forex brokers, and 15+ crypto exchanges | 2 years ago |
| [currency](https://github.com/bnkamalesh/currency) | 43 | A currency computations package. | 2 days ago |
| [fastme](https://github.com/newity/fastme) | 25 |  | 2 months ago |
| [payme](https://github.com/jovandeginste/payme) | 8 | QR code generator (ASCII & PNG) for SEPA payments | 6 months ago |
| [go-finance](https://github.com/pieterclaerhout/go-finance) | 5 | Finance related Go functions (e.g. exchange rates, VAT number checking, …) | 2 years ago |


### [Forms](#Forms)
* Libraries for working with forms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nosurf](https://github.com/justinas/nosurf) | 1225 | CSRF protection middleware for Go. | a year ago |
| [binding](https://github.com/mholt/binding) | 783 | Reflectionless data binding for Go's net/http (not actively maintained) | 4 years ago |
| [csrf](https://github.com/gorilla/csrf) | 715 | gorilla/csrf provides Cross Site Request Forgery (CSRF) prevention middleware for Go web applications & services 🔒 | 20 days ago |
| [form](https://github.com/go-playground/form) | 502 | :steam_locomotive: Decodes url.Values into Go value(s) and Encodes Go value(s) into url.Values. Dual Array and Full map support. | 4 months ago |
| [conform](https://github.com/leebenson/conform) | 240 | Trims, sanitizes & scrubs data based on struct tags (go, golang) | 2 months ago |
| [formam](https://github.com/monoculum/formam) | 165 | a package for decode form's values into struct in Go | a month ago |
| [forms](https://github.com/albrow/forms) | 125 | A lightweight go library for parsing form data or json from an http.Request. | 4 years ago |
| [qs](https://github.com/sonh/qs) | 60 | Go module for encoding structs into URL query parameters | 5 months ago |
| [bind](https://github.com/robfig/bind) | 26 |  | 7 years ago |
| [queryparam](https://github.com/TomWright/queryparam) | 11 | Go package to easily convert a URL's query parameters/values into usable struct values of the correct types. | a year ago |


### [Functional](#Functional)
* Packages to support functional programming in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-underscore](https://github.com/tobyhede/go-underscore) | 1219 |  Helpfully Functional Go -  A useful collection of Go utilities. Designed for programmer happiness.  | 3 years ago |
| [fpGo](https://github.com/TeaEntityLab/fpGo) | 201 | Monad, Functional Programming features for Golang | 3 months ago |
| [fuego](https://github.com/seborama/fuego) | 99 | Functional Experiment in Golang | a year ago |
| [gofp](https://github.com/rbrahul/gofp) | 92 | A super simple Lodash like utility library with essential functions that empowers the development in Go | 9 months ago |


### [Game Development](#Game-Development)
* Awesome game development libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ebiten](https://github.com/hajimehoshi/ebiten) | 5331 | A dead simple 2D game library for Go | a day ago |
| [leaf](https://github.com/name5566/leaf) | 4207 | A game server framework in Go (golang) | 4 months ago |
| [pixel](https://github.com/faiface/pixel) | 3721 | A hand-crafted 2D game library in Go | a month ago |
| [goworld](https://github.com/xiaonanln/goworld) | 1981 | Scalable Distributed Game Server Engine with Hot Swapping in Golang | 5 months ago |
| [nano](https://github.com/lonng/nano) | 1865 | Lightweight, facility, high performance golang based game server framework | 4 months ago |
| [engine](https://github.com/g3n/engine) | 1706 | Go 3D Game Engine (http://g3n.rocks) | 11 days ago |
| [go-sdl2](https://github.com/veandco/go-sdl2) | 1652 | SDL2 binding for Go | 14 days ago |
| [engo](https://github.com/EngoEngine/engo) | 1441 | Engo is an open-source 2D game engine written in Go. | 20 days ago |
| [termloop](https://github.com/JoelOtter/termloop) | 1245 | Terminal-based game engine for Go, built on top of Termbox | 3 months ago |
| [pitaya](https://github.com/topfreegames/pitaya) | 1227 | Scalable game server framework with clustering support and client libraries for iOS, Android, Unity and others through the C SDK. | 4 days ago |
| [gonet](https://github.com/xtaci/gonet) | 1162 | A Game Server Skeleton in golang. | 5 years ago |
| [oak](https://github.com/oakmound/oak) | 961 | A pure Go game engine | 9 days ago |
| [raylib-go](https://github.com/gen2brain/raylib-go) | 682 | Go bindings for raylib, a simple and easy-to-use library to enjoy videogames programming. | 2 days ago |
| [engine](https://github.com/azul3d/engine) | 512 | Azul3D - A 3D game engine written in Go! | 23 days ago |
| [go-astar](https://github.com/beefsack/go-astar) | 458 | Go implementation of the A* search algorithm | a year ago |
| [go3d](https://github.com/ungerik/go3d) | 211 | A performance oriented 2D/3D math package for Go | 20 days ago |
| [prototype](https://github.com/gonutz/prototype) | 63 | Simple 2D game prototyping framework. | 3 months ago |
| [tile](https://github.com/kelindar/tile) | 37 | Tile is a 2D grid engine, built with data and cache friendly ways, includes pathfinding and observers. | 4 months ago |


### [Generation and Generics](#Generation-and-Generics)
* Tools to enhance the language with features like generics via code generation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-linq](https://github.com/ahmetb/go-linq) | 2740 | .NET LINQ capabilities in Go | 7 months ago |
| [jennifer](https://github.com/dave/jennifer) | 2216 | Jennifer is a code generator for Go | 4 days ago |
| [gen](https://github.com/clipperhouse/gen) | 1322 | Type-driven code generation for Go | 2 years ago |
| [goderive](https://github.com/awalterschulze/goderive) | 937 | Code Generation for Functional Programming, Concurrency and Generics in Golang | 2 days ago |
| [gowrap](https://github.com/hexdigest/gowrap) | 543 | GoWrap is a command line tool for generating decorators for Go interfaces | 21 days ago |
| [interfaces](https://github.com/rjeczalik/interfaces) | 309 | Code generation tools for Go. | 7 months ago |
| [go-enum](https://github.com/abice/go-enum) | 251 | An enum generator for go | 5 days ago |
| [pkgreflect](https://github.com/ungerik/pkgreflect) | 99 | A Go preprocessor for package scoped reflection | 4 years ago |
| [goverter](https://github.com/jmattheis/goverter) | 91 | Generate type-safe Go converters by simply defining an interface | 10 days ago |
| [efaceconv](https://github.com/t0pep0/efaceconv) | 49 |  | 4 years ago |
| [gotype](https://github.com/wzshiming/gotype) | 36 | Golang source code parsing, usage like reflect package | 3 months ago |
| [GENERIS](https://github.com/senselogic/GENERIS) | 29 | Versatile Go code generator. | 3 months ago |
| [go-xray](https://github.com/pieterclaerhout/go-xray) | 20 | Helpers for making the use of reflection easier | 2 years ago |
| [typeregistry](https://github.com/xiaoxin01/typeregistry) | 11 | create type dynamically in Golang | 2 years ago |


### [Geographic](#Geographic)
* Geographic tools and servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tile38](https://github.com/tidwall/tile38) | 7844 | Real-time Geospatial and Geofencing | 21 days ago |
| [geo](https://github.com/golang/geo) | 1295 | S2 geometry library in Go | 2 months ago |
| [mbtileserver](https://github.com/consbio/mbtileserver) | 287 | Basic Go server for mbtiles | 16 days ago |
| [osm](https://github.com/paulmach/osm) | 180 | General purpose library for reading, writing and working with OpenStreetMap data | 2 months ago |
| [wgs84](https://github.com/wroge/wgs84) | 66 | A pure Go package for coordinate transformations. | a year ago |
| [geoserver](https://github.com/hishamkaram/geoserver) | 59 | geoserver is a Go library for manipulating a GeoServer instance via the GeoServer REST API. | a month ago |
| [godal](https://github.com/airbusgeo/godal) | 52 | golang wrapper for github.com/OSGEO/gdal | 3 hours ago |
| [gismanager](https://github.com/hishamkaram/gismanager) | 38 | Publish Your GIS Data(Vector Data) to PostGIS and Geoserver | 3 years ago |
| [simplefeatures](https://github.com/peterstace/simplefeatures) | 36 | Simple Features is a pure Go Implementation of the OpenGIS Simple Feature Access Specification | 5 hours ago |
| [pbf](https://github.com/maguro/pbf) | 28 | OpenStreetMap PBF golang parser | 7 months ago |
| [s2-geojson](https://github.com/pantrif/s2-geojson) | 15 | Draw a polygon on the map or paste a geoJSON and explore how the s2.RegionCoverer covers it with S2 cells depending on the min and max levels | 2 years ago |


### [Go Compilers](#Go-Compilers)
* Tools for compiling Go to other languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopherjs](https://github.com/gopherjs/gopherjs) | 10635 | A compiler from Go to JavaScript for running Go code in a browser | 4 days ago |
| [tardisgo](https://github.com/tardisgo/tardisgo) | 413 | Golang->Haxe->CPP/CSharp/Java/JavaScript transpiler   | 5 years ago |
| [c4go](https://github.com/Konstantin8105/c4go) | 288 | Transpiling C code to Go code | 14 hours ago |
| [f4go](https://github.com/Konstantin8105/f4go) | 29 | Transpiling fortran code to golang code | a month ago |


### [Goroutines](#Goroutines)
* Tools for managing and working with Goroutines.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ants](https://github.com/panjf2000/ants) | 6915 | 🐜🐜🐜 ants is a high-performance and low-cost goroutine pool in Go, inspired by fasthttp./ ants 是一个高性能且低损耗的 goroutine 池。 | 13 days ago |
| [tunny](https://github.com/Jeffail/tunny) | 2709 | A goroutine pool for Go | 4 months ago |
| [goworker](https://github.com/benmanns/goworker) | 2607 | goworker is a Go-based background worker that runs 10 to 100,000* times faster than Ruby-based workers. | 5 months ago |
| [workerpool](https://github.com/gammazero/workerpool) | 669 | Concurrency limiting goroutine pool | 18 days ago |
| [grpool](https://github.com/ivpusic/grpool) | 663 | Lightweight Goroutine pool | 3 years ago |
| [pool](https://github.com/go-playground/pool) | 660 | :speedboat: a limited consumer goroutine or unlimited goroutine pool for easier goroutine handling and cancellation | 5 months ago |
| [gowp](https://github.com/xxjwxc/gowp) | 339 | golang worker pool , Concurrency limiting goroutine pool | 6 months ago |
| [pond](https://github.com/alitto/pond) | 315 | 🔘 Minimalistic and High-performance goroutine worker pool written in Go | 4 months ago |
| [go-floc](https://github.com/workanator/go-floc) | 212 | Floc: Orchestrate goroutines with ease. | 3 months ago |
| [go-flow](https://github.com/kamildrazkiewicz/go-flow) | 176 | Simply way to control goroutines execution order based on dependencies | 3 years ago |
| [semaphore](https://github.com/marusama/semaphore) | 129 | Fast resizable golang semaphore primitive | 8 months ago |
| [go-workers](https://github.com/catmullet/go-workers) | 125 | 👷 Library for safely running groups of workers concurrently or consecutively that require input and output through channels | 2 months ago |
| [artifex](https://github.com/mborders/artifex) | 120 | Simple in-memory job queue for Golang using worker-based dispatching | a year ago |
| [errgroup](https://github.com/neilotoole/errgroup) | 100 | errgroup with goroutine worker limits | 2 months ago |
| [async](https://github.com/StudioSol/async) | 94 | A safe way to execute functions asynchronously, recovering them in case of panic. It also provides an error stack aiming to facilitate fail causes discovery. | a year ago |
| [semaphore](https://github.com/kamilsk/semaphore) | 89 | 🚦 Semaphore pattern implementation with timeout of lock/unlock operations. | 2 years ago |
| [cyclicbarrier](https://github.com/marusama/cyclicbarrier) | 82 | CyclicBarrier golang implementation | a year ago |
| [gpool](https://github.com/sherifabdlnaby/gpool) | 81 | gpool - a generic context-aware resizable goroutines pool to bound concurrency based on semaphore.  | 2 years ago |
| [worker-pool](https://github.com/vardius/worker-pool) | 81 | Go simple async worker pool | 10 months ago |
| [gollback](https://github.com/vardius/gollback) | 67 | Go asynchronous simple function utilities, for managing execution of closures and callbacks | a year ago |
| [Hunch](https://github.com/AaronJan/Hunch) | 63 | Hunch provides functions like: All, First, Retry, Waterfall etc., that makes asynchronous flow control more intuitive. | a year ago |
| [threadpool](https://github.com/shettyh/threadpool) | 61 | Golang simple thread pool implementation | 2 years ago |
| [routine](https://github.com/x-mod/routine) | 45 | go routine control, abstraction of the Main and some useful Executors.如果你不会管理Goroutine的话，用它 | a year ago |
| [nursery](https://github.com/arunsworld/nursery) | 38 | Structured Concurrency in Go | 4 months ago |
| [kyoo](https://github.com/dirkaholic/kyoo) | 35 | Unlimited job queue for go, using a pool of concurrent workers processing the job queue entries | 2 years ago |
| [parallel-fn](https://github.com/rafaeljesus/parallel-fn) | 31 | Run functions in parallel :comet: | 4 years ago |
| [goccm](https://github.com/zenthangplus/goccm) | 28 | Limits the number of goroutines that are allowed to run concurrently | a month ago |
| [async](https://github.com/reugn/async) | 24 | Alternative sync library for Go | a year ago |
| [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) | 24 | A sync.WaitGroup with error handling and concurrency control | 2 years ago |
| [go-trylock](https://github.com/subchen/go-trylock) | 22 | TryLock support on read-write lock for Golang | 6 months ago |
| [stl](https://github.com/ssgreg/stl) | 20 | Software Transactional Locks | a year ago |
| [channelify](https://github.com/ddelizia/channelify) | 15 | Make functions return a channel for parallel processing via go routines. | 9 months ago |
| [gohive](https://github.com/loveleshsharma/gohive) | 13 | 🐝 A Highly Performant and easy to use goroutine pool for Go | 2 years ago |
| [gowl](https://github.com/hamed-yousefi/gowl) | 12 | Gowl is a process management and process monitoring tool at once. An infinite worker pool gives you the ability to control the pool and processes and monitor their status. | 4 months ago |
| [conexec](https://github.com/ITcathyh/conexec) | 11 | A concurrent toolkit to help execute funcs concurrently in an efficient and safe way. It supports specifying the overall timeout to avoid blocking. | a year ago |
| [queue](https://github.com/AnikHasibul/queue) | 10 | package queue gives you a queue group accessibility. Helps you to limit goroutines, wait for the end of the all goroutines and much more. | 2 years ago |
| [execpool](https://github.com/hexdigest/execpool) | 7 | A pool that spins up a given number of processes in advance and attaches stdin and stdout when needed. Very similar to FastCGI but works for any command. | 4 months ago |
| [hands](https://github.com/duanckham/hands) | 7 | Hands is a process controller used to control the execution and return strategies of multiple goroutines. | 2 years ago |
| [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) | 5 |  | a year ago |
| [go-tools](https://github.com/nikhilsaraf/go-tools) | 5 | A collection of tools for Golang | 3 years ago |
| [breaker](https://github.com/kamilsk/breaker) | 1 | 🚧 Flexible mechanism to make execution flow interruptible. | 4 months ago |


### [GUI](#GUI)
* Libraries for building GUI Applications.

#### [Toolkits](#Toolkits)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fyne](https://github.com/fyne-io/fyne) | 14589 | Cross platform GUI in Go inspired by Material Design | 2 hours ago |
| [webview](https://github.com/webview/webview) | 9084 | Tiny cross-platform webview library for C/C++/Golang. Uses WebKit (Gtk/Cocoa) and Edge (Windows) | a month ago |
| [qt](https://github.com/therecipe/qt) | 8908 | Qt binding for Go (Golang) with support for Windows / macOS / Linux / FreeBSD / Android / iOS / Sailfish OS / Raspberry Pi / AsteroidOS / Ubuntu Touch / JavaScript / WebAssembly | 10 months ago |
| [ui](https://github.com/andlabs/ui) | 8016 | Platform-native GUI library for Go. | 4 months ago |
| [walk](https://github.com/lxn/walk) | 5747 | A Windows GUI toolkit for the Go Programming Language | 4 months ago |
| [go-app](https://github.com/maxence-charriere/go-app) | 5510 | A package to build progressive web apps with Go programming language and WebAssembly. | a day ago |
| [go-astilectron](https://github.com/asticode/go-astilectron) | 4105 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by Electron) | a month ago |
| [go-sciter](https://github.com/sciter-sdk/go-sciter) | 2265 | Golang bindings of Sciter: the Embeddable HTML/CSS/script engine for modern UI development | 16 days ago |
| [gotk3](https://github.com/gotk3/gotk3) | 1630 | Go bindings for GTK3 | 9 days ago |
| [gowd](https://github.com/dtylman/gowd) | 334 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by nwjs) | 2 years ago |


#### [Interaction](#Interaction)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [robotgo](https://github.com/go-vgo/robotgo) | 7025 | RobotGo, Go Native cross-platform GUI automation  @vcaesar | 3 hours ago |
| [systray](https://github.com/getlantern/systray) | 2029 | a cross platfrom Go library to place an icon and menu in the notification area | 6 months ago |
| [gosx-notifier](https://github.com/deckarep/gosx-notifier) | 552 | gosx-notifier is a Go framework for sending desktop notifications to OSX 10.8 or higher | 2 years ago |
| [trayhost](https://github.com/shurcooL/trayhost) | 220 | Cross-platform Go library to place an icon in the host operating system's taskbar. | 2 years ago |
| [zenity](https://github.com/ncruces/zenity) | 186 | Zenity dialogs for Golang, Windows, macOS | a month ago |
| [go-appindicator](https://github.com/dawidd6/go-appindicator) | 17 | :traffic_light: Go bindings for libappindicator3 C library | 10 months ago |
| [activity-tracker](https://github.com/prashantgupta24/activity-tracker) | 12 | A library to notify about any (pluggable) activity on your machine, and let you take action as needed | 2 years ago |
| [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) | 10 | macOS Sleep/ Wake notifications in golang | 2 years ago |


### [Hardware](#Hardware)
* Libraries, tools, and tutorials for interacting with hardware.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [arduino-cli](https://github.com/arduino/arduino-cli) | 3117 | Arduino command line tool | 9 hours ago |
| [go-rpio](https://github.com/stianeikeland/go-rpio) | 1740 | :electric_plug: Raspberry Pi GPIO library for go-lang | 12 days ago |
| [ghw](https://github.com/jaypipes/ghw) | 1069 | Golang hardware discovery/inspection library | 5 days ago |
| [emgo](https://github.com/ziutek/emgo) | 941 | Emgo: Bare metal Go (language for programming embedded systems) | 3 months ago |
| [sysinfo](https://github.com/zcalusic/sysinfo) | 291 | Sysinfo is a Go library providing Linux OS / kernel / hardware system information. | 25 days ago |
| [goroslib](https://github.com/aler9/goroslib) | 140 | ROS client library for the Go programming language | 2 days ago |
| [go-osc](https://github.com/hypebeast/go-osc) | 136 | Open Sound Control (OSC) library for Golang. Implemented in pure Go. | 3 months ago |
| [joystick](https://github.com/0xcafed00d/joystick) | 29 | Go Joystick API | 2 years ago |


### [Images](#Images)
* Libraries for manipulating images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocv](https://github.com/hybridgroup/gocv) | 4455 | Go package for computer vision using OpenCV 4 and beyond. | 5 days ago |
| [imaging](https://github.com/disintegration/imaging) | 3993 | Imaging is a simple image processing package for Go | a year ago |
| [imaginary](https://github.com/h2non/imaginary) | 3937 | Fast, simple, scalable, Docker-ready HTTP microservice for high-level image processing | a month ago |
| [bild](https://github.com/anthonynsimon/bild) | 3392 | Image processing algorithms in pure Go | 12 hours ago |
| [gg](https://github.com/fogleman/gg) | 3091 | Go Graphics - 2D rendering in Go with a simple API. | 24 days ago |
| [ln](https://github.com/fogleman/ln) | 2990 | 3D line art engine. | 2 years ago |
| [resize](https://github.com/nfnt/resize) | 2744 | Pure golang image resizing  | a year ago |
| [pt](https://github.com/fogleman/pt) | 1972 | A path tracer written in Go. | 3 years ago |
| [svgo](https://github.com/ajstarks/svgo) | 1760 | Go Language Library for SVG generation | 22 days ago |
| [bimg](https://github.com/h2non/bimg) | 1698 | Go package for fast high-level image processing powered by libvips C library | a month ago |
| [picfit](https://github.com/thoas/picfit) | 1566 | An image resizing server written in Go | 2 months ago |
| [smartcrop](https://github.com/muesli/smartcrop) | 1556 | smartcrop finds good image crops for arbitrary crop sizes | 6 months ago |
| [gift](https://github.com/disintegration/gift) | 1472 | Go Image Filtering Toolkit | a year ago |
| [imagick](https://github.com/gographics/imagick) | 1371 | Go binding to ImageMagick's MagickWand C API | 2 months ago |
| [gowitness](https://github.com/sensepost/gowitness) | 1287 | 🔍 gowitness - a golang, web screenshot utility using Chrome Headless | 2 months ago |
| [go-opencv](https://github.com/go-opencv/go-opencv) | 1253 | Go bindings for OpenCV / 2.x API in gocv / 1.x API in opencv | 2 years ago |
| [geopattern](https://github.com/pravj/geopattern) | 1142 | :triangular_ruler: Create beautiful generative image patterns from a string in golang. | 3 years ago |
| [stegify](https://github.com/DimitarPetrov/stegify) | 961 | 🔍 Go tool for LSB steganography, capable of hiding any file within an image. | a year ago |
| [canvas](https://github.com/tdewolff/canvas) | 836 | Cairo in Go: vector to raster, SVG, PDF, EPS, WASM, OpenGL, Gio, etc. | a day ago |
| [image2ascii](https://github.com/qeesung/image2ascii) | 606 | :foggy: Convert image to ASCII | 4 months ago |
| [govips](https://github.com/davidbyttow/govips) | 528 | A lightning fast image processing and resizing library for Go | 5 hours ago |
| [draft](https://github.com/lucasepe/draft) | 515 | Generate High Level Cloud Architecture diagrams using YAML syntax. | 2 months ago |
| [govatar](https://github.com/o1egl/govatar) | 467 | Avatar generation library for GO language | 8 months ago |
| [goimagehash](https://github.com/corona10/goimagehash) | 442 | Go Perceptual image hashing package | 9 months ago |
| [mort](https://github.com/aldor007/mort) | 438 | Storage and image processing server written in Go | a month ago |
| [go-nude](https://github.com/koyachi/go-nude) | 336 | Nudity detection with Go. | 3 years ago |
| [rez](https://github.com/bamiaux/rez) | 202 | Image resizing in pure Go and SIMD | 4 years ago |
| [darkroom](https://github.com/gojek/darkroom) | 176 |  | 5 months ago |
| [mergi](https://github.com/noelyahan/mergi) | 155 | go library for image programming (merge, crop, resize, watermark, animate, ease, transit) | a year ago |
| [img](https://github.com/hawx/img) | 139 | A selection of image manipulation tools | 7 years ago |
| [gltf](https://github.com/qmuntal/gltf) | 131 | :eyeglasses: Go library for [d]encoding glTF 2.0 files | 20 days ago |
| [steganography](https://github.com/auyer/steganography) | 120 | Pure Golang Library that allows simple LSB steganography on images | 4 months ago |
| [go-cairo](https://github.com/ungerik/go-cairo) | 116 | Go binding for the cairo graphics library | 8 months ago |
| [cameron](https://github.com/aofei/cameron) | 76 | An avatar generator for Go. | 3 days ago |
| [go-gd](https://github.com/bolknote/go-gd) | 54 | Go bingings for GD (http://www.boutell.com/gd/) | 4 years ago |
| [gridder](https://github.com/shomali11/gridder) | 46 | A Grid based 2D Graphics library | 2 months ago |
| [goimghdr](https://github.com/corona10/goimghdr) | 36 | The imghdr module determines the type of image contained in a file for go | 2 years ago |
| [go-webp](https://github.com/kolesa-team/go-webp) | 33 | Simple and fast webp library for golang | 2 months ago |
| [webp-server](https://github.com/mehdipourfar/webp-server) | 29 | Simple and minimal image server capable of storing, resizing, converting and caching images. | 10 months ago |
| [tga](https://github.com/ftrvxmtrx/tga) | 28 | Go package for decoding and encoding TARGA image format | 6 years ago |
| [go-webcolors](https://github.com/jyotiska/go-webcolors) | 24 | Port of webcolors library from Python to Go | 6 years ago |
| [mpo](https://github.com/donatj/mpo) | 7 | JPEG-MPO Decoder / Converter Library and CLI Tool | a year ago |
| [scout](https://github.com/jonoton/scout) | 1 | Scout is a standalone open source software solution for DIY video security. | a month ago |


### [IoT -> Internet of Things](#IoT)
* Libraries for programming devices of the IoT.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gobot](https://github.com/hybridgroup/gobot) | 7433 | Golang framework for robotics, drones, and the Internet of Things (IoT) | 2 days ago |
| [flogo](https://github.com/TIBCOSoftware/flogo) | 1876 | Project Flogo is an open source ecosystem of opinionated  event-driven capabilities to simplify building efficient & modern serverless functions, microservices & edge apps. | a year ago |
| [mainflux](https://github.com/mainflux/mainflux) | 1596 | Industrial IoT Messaging and Device Management Platform | 7 days ago |
| [gatt](https://github.com/paypal/gatt) | 998 | Gatt is a Go package for building Bluetooth Low Energy peripherals | a year ago |
| [heedy](https://github.com/heedy/heedy) | 299 | An aggregator for personal metrics, and an extensible analysis engine | 2 days ago |
| [devices](https://github.com/goiot/devices) | 246 | Suite of libraries for IoT devices (written in Go), experimental for x/exp/io | 5 years ago |
| [sensorbee](https://github.com/sensorbee/sensorbee) | 208 | Lightweight stream processing engine for IoT | 2 years ago |
| [huego](https://github.com/amimof/huego) | 190 | An extensive Philips Hue client library for Go with an emphasis on simplicity | 21 days ago |
| [iot](https://github.com/vaelen/iot) | 53 | A Go client for Google IoT Core | 2 years ago |
| [eywa](https://github.com/xcodersun/eywa) | 50 | Make IoT a lot more fun with data.  | 5 years ago |


### [Job Scheduler](#Job-Scheduler)
* Libraries for scheduling jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocron](https://github.com/jasonlvhit/gocron) | 2775 | A Golang Job Scheduling Package. | 3 months ago |
| [gocron](https://github.com/go-co-op/gocron) | 1328 | Easy and fluent Go cron scheduling. This is a fork from https://github.com/jasonlvhit/gocron | 3 days ago |
| [jobrunner](https://github.com/bamzi/jobrunner) | 891 | Framework for performing work asynchronously, outside of the request flow | a year ago |
| [gron](https://github.com/roylee0704/gron) | 877 | gron, Cron Jobs in Go. | 10 months ago |
| [go-quartz](https://github.com/reugn/go-quartz) | 552 | Minimalist and zero-dependency scheduling library for Go | a month ago |
| [jobs](https://github.com/albrow/jobs) | 483 | A persistent and flexible background jobs library for go. | 3 years ago |
| [scheduler](https://github.com/carlescere/scheduler) | 371 | Job scheduling made easy. | a year ago |
| [go-cron](https://github.com/rk/go-cron) | 208 | A simple Cron library for go that can execute closures or functions at varying intervals, from once a second to once a year on a specific date and time. Primarily for web applications and long running daemons. | 2 years ago |
| [gronx](https://github.com/adhocore/gronx) | 177 | Lightweight, fast and dependency-free Cron expression parser (due checker), task scheduler and/or daemon for Golang (tested on v1.13 and above) and standalone usage | a month ago |
| [clockwerk](https://github.com/onatm/clockwerk) | 114 | Job Scheduling Library | 2 years ago |
| [leprechaun](https://github.com/kilgaloon/leprechaun) | 84 | You had one job, or more then one, which can be done in steps | 13 hours ago |
| [tasks](https://github.com/madflojo/tasks) | 61 | Package tasks is an easy to use in-process scheduler for recurring tasks in Go | 8 months ago |
| [sched](https://github.com/romshark/sched) | 20 | A job scheduler for Go with the ability to fast-forward time. | 4 months ago |
| [cronticker](https://github.com/krayzpipes/cronticker) | 1 | Golang ticker that works with Cron scheduling. | 10 months ago |


### [JSON](#JSON)
* Libraries for working with JSON.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gjson](https://github.com/tidwall/gjson) | 9277 | Get JSON values quickly - JSON parser for Go | 5 days ago |
| [gojson](https://github.com/ChimeraCoder/gojson) | 2436 | Automatically generate Go (golang) struct definitions from example JSON | 4 months ago |
| [fastjson](https://github.com/valyala/fastjson) | 1367 | Fast JSON parser and validator for Go. No custom structs, no code generation, no reflection | 4 months ago |
| [ojg](https://github.com/ohler55/ojg) | 429 | Optimized JSON for Go | 15 days ago |
| [kazaam](https://github.com/qntfy/kazaam) | 216 | Arbitrary transformations of JSON in Golang | 4 months ago |
| [gojq](https://github.com/elgs/gojq) | 178 | JSON query in Golang | a year ago |
| [jsondiff](https://github.com/wI2L/jsondiff) | 136 | Compute the diff between two JSON documents as a series of RFC6902 (JSON Patch) operations | 3 months ago |
| [jettison](https://github.com/wI2L/jettison) | 113 | Highly configurable, fast JSON encoder for Go | 14 days ago |
| [jsongo](https://github.com/ricardolonga/jsongo) | 99 | Fluent API to make it easier to create Json objects. | a month ago |
| [gjo](https://github.com/skanehira/gjo) | 98 | Small utility to create JSON objects | 7 months ago |
| [json2go](https://github.com/m-zajac/json2go) | 93 | Create go type representation from json | 6 months ago |
| [jaydiff](https://github.com/yazgazan/jaydiff) | 85 | A JSON diff utility | 10 months ago |
| [ajson](https://github.com/spyzhov/ajson) | 83 | Abstract JSON for Golang with JSONPath support  | a day ago |
| [jsonf](https://github.com/miolini/jsonf) | 62 | Console JSON formatter with query feature | a year ago |
| [ujson](https://github.com/olvrng/ujson) | 53 | µjson - A fast and minimal JSON parser and transformer that works on unstructured JSON | 3 months ago |
| [mp](https://github.com/sanbornm/mp) | 44 | Simple Email Parser | 6 years ago |
| [go-respond](https://github.com/nicklaw5/go-respond) | 42 | A Go package for handling common HTTP JSON responses. | 2 months ago |
| [jsoncolor](https://github.com/neilotoole/jsoncolor) | 26 | Colorized JSON output for Go | a month ago |
| [vjson](https://github.com/miladibra10/vjson) | 21 | vjson is a golang package that helps to validate JSON objects | 20 hours ago |
| [go-jsonerror](https://github.com/ddymko/go-jsonerror) | 10 | Small package which wraps error responses to follow jsonapi.org | 2 years ago |
| [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) | 10 | Go bindings based on the JSON API errors reference | 5 years ago |
| [ask](https://github.com/simonnilsson/ask) | 9 | A Go package that provides a simple way of accessing nested properties in maps and slices. | 9 months ago |
| [jsonhal](https://github.com/RichardKnop/jsonhal) | 9 | A simple Go package to make custom structs marshal into HAL compatible JSON responses. | 2 years ago |
| [dynjson](https://github.com/cocoonspace/dynjson) | 8 | Client-customizable JSON formats for dynamic APIs | a month ago |
| [mapslice-json](https://github.com/ake-persson/mapslice-json) | 8 | Go MapSlice for ordered marshal/ unmarshal of maps in JSON | 4 months ago |
| [ej](https://github.com/lucassscaravelli/ej) | 7 | Write and read JSON from different sources in one line | 2 years ago |
| [epoch](https://github.com/vtopc/epoch) | 6 | Contains primitives for marshaling/unmarshaling Unix timestamp/epoch to/from built-in time.Time type in JSON | 8 months ago |
| [jsonic](https://github.com/sinhashubham95/jsonic) | 5 | All you need with JSON | 10 months ago |
| [jzon](https://github.com/zerosnake0/jzon) | 5 | A golang json library inspired by jsoniter | 8 months ago |
| [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) | 1 | The simple JSON parser with validation by condition | a month ago |


### [Logging](#Logging)
* Libraries for generating and working with log files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kit](https://github.com/go-kit/kit) | 21663 | A standard library for microservices. | 16 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 19235 | Structured, pluggable logging for Go. | a month ago |
| [logrus](https://github.com/sirupsen/logrus) | 19235 | Structured, pluggable logging for Go. | a month ago |
| [logrus](https://github.com/sirupsen/logrus) | 19235 | Structured, pluggable logging for Go. | a month ago |
| [zap](https://github.com/uber-go/zap) | 14075 | Blazing fast, structured, leveled logging in Go. | 6 days ago |
| [debug](https://github.com/visionmedia/debug) | 9870 | A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers | a month ago |
| [zerolog](https://github.com/rs/zerolog) | 5506 | Zero Allocation JSON Logger | 7 days ago |
| [go-spew](https://github.com/davecgh/go-spew) | 4672 | Implements a deep pretty printer for Go data structures to aid in debugging | a year ago |
| [glog](https://github.com/golang/glog) | 3052 | Leveled execution logs for Go | 3 months ago |
| [lumberjack](https://github.com/natefinch/lumberjack) | 2901 | lumberjack is a log rolling package for Go | 3 months ago |
| [tail](https://github.com/hpcloud/tail) | 2212 | Go package for reading from continously updated files (tail -f) | 4 months ago |
| [seelog](https://github.com/cihub/seelog) | 1565 | Seelog is a native Go logging library that provides flexible asynchronous dispatching, filtering, and formatting. | 3 years ago |
| [log](https://github.com/apex/log) | 1188 | Structured logging package for Go. | 4 days ago |
| [log15](https://github.com/inconshreveable/log15) | 1032 | Structured, composable logging for Go | 16 days ago |
| [log](https://github.com/phuslu/log) | 404 | Structured Logging Made Easy | a month ago |
| [onelog](https://github.com/francoispqt/onelog) | 401 | Dead simple, super fast, zero allocation and modular logger for Golang | 3 years ago |
| [logxi](https://github.com/mgutz/logxi) | 348 | A 12-factor app logger built for performance and happy development | 2 years ago |
| [logutils](https://github.com/hashicorp/logutils) | 298 | Utilities for slightly better logging in Go (Golang). | 8 days ago |
| [log](https://github.com/go-playground/log) | 276 | :green_book: Simple, configurable and scalable Structured Logging for Go. | 2 years ago |
| [go-logger](https://github.com/apsdehal/go-logger) | 271 | Simple logger for Go programs. Allows custom formats for messages. | 3 years ago |
| [httpretty](https://github.com/henvic/httpretty) | 243 | Package httpretty prints the HTTP requests you make with Go pretty on your terminal. | a year ago |
| [sqldb-logger](https://github.com/simukti/sqldb-logger) | 198 | A logger for Go SQL database driver without modifying existing *sql.DB stdlib usage. | 6 months ago |
| [rollingwriter](https://github.com/arthurkiller/rollingwriter) | 179 | Rolling writer is an IO util for auto rolling write in go. | 3 months ago |
| [logger](https://github.com/azer/logger) | 147 | Minimalistic logging library for Go. | a year ago |
| [logur](https://github.com/logur/logur) | 140 | Logur is an opinionated collection of logging best practices | a year ago |
| [xlog](https://github.com/rs/xlog) | 136 | xlog is a logger for net/context aware HTTP applications | 9 months ago |
| [glg](https://github.com/kpango/glg) | 130 | Simple and blazing fast lockfree logging library for golang | 4 months ago |
| [ozzo-log](https://github.com/go-ozzo/ozzo-log) | 113 | A Go (golang) package providing high-performance asynchronous logging, message filtering by severity and category, and multiple message targets. | 10 months ago |
| [logvoyage](https://github.com/firstrow/logvoyage) | 89 | LogVoyage - logging SaaS written in GoLang | 4 years ago |
| [go-cronowriter](https://github.com/utahta/go-cronowriter) | 46 | Time based rotating file writer | 8 months ago |
| [log](https://github.com/alexcesaro/log) | 45 | Logging packages for Go | 6 years ago |
| [gologger](https://github.com/sadlil/gologger) | 39 | The Simplest and worst logging library ever written | 4 years ago |
| [go-log](https://github.com/ian-kent/go-log) | 38 | A logger, for Go | 4 years ago |
| [logex](https://github.com/chzyer/logex) | 38 | An golang log lib, supports tracking and level, wrap by standard log lib | 5 years ago |
| [gone](https://github.com/One-com/gone) | 36 | Golang packages for writing small daemons and servers. | 6 months ago |
| [noodlog](https://github.com/gyozatech/noodlog) | 33 | 🍜 Parametrized JSON logging library in Golang which lets you obfuscate sensitive data and marshal any kind of content. | a month ago |
| [go-log](https://github.com/siddontang/go-log) | 28 | a golang log lib supports level and multi handlers | 3 years ago |
| [journald](https://github.com/ssgreg/journald) | 28 | Go implementation of systemd Journal's native API for logging | 8 months ago |
| [logrusly](https://github.com/sebest/logrusly) | 27 | Loggly Hooks for GO Logrus logger | 4 months ago |
| [distillog](https://github.com/amoghe/distillog) | 25 | Logging, distilled | 3 years ago |
| [log](https://github.com/teris-io/log) | 24 | Structured log interface | 4 years ago |
| [mlog](https://github.com/jbrodriguez/mlog) | 23 | A simple logging module for go, with a rotating file feature and console logging. | 3 years ago |
| [gomol](https://github.com/aphistic/gomol) | 17 | Gomol is a library for structured, multiple-output logging for Go with extensible logging outputs | 3 years ago |
| [glo](https://github.com/lajosbencz/glo) | 14 | Logging library for Golang | 3 years ago |
| [zkits-logger](https://github.com/edoger/zkits-logger) | 14 | A powerful zero-dependency json logger. | 4 months ago |
| [logrusiowriter](https://github.com/cabify/logrusiowriter) | 12 | io.Writer implementation using logrus logger | a year ago |
| [go-log](https://github.com/subchen/go-log) | 11 | Simple and configurable Logging in Go, with level, formatters and writers | 3 years ago |
| [logmatic](https://github.com/mborders/logmatic) | 11 | Colorized logger for Golang with dynamic log level configuration | 10 months ago |
| [log](https://github.com/aerogo/log) | 9 | :memo: Logging with multiple output targets. | 2 years ago |
| [logdump](https://github.com/ewwwwwqm/logdump) | 9 | Package for multi-level logging | 4 years ago |
| [logo](https://github.com/mbndr/logo) | 9 | Golang logger to different configurable writers. | a year ago |
| [go-log](https://github.com/pieterclaerhout/go-log) | 8 | A logging library with strack traces, object dumping and optional timestamps | a year ago |
| [xlog](https://github.com/xfxdev/xlog) | 6 | plugin architecture and flexible log system for golang | 3 years ago |
| [kemba](https://github.com/clok/kemba) | 4 | A tiny debug logging tool. Ideal for CLI tools and command applications. Inspired by https://github.com/visionmedia/debug | a month ago |
| [yell](https://github.com/jfcg/yell) | 0 | Yet another minimalist logging library | 3 months ago |


### [Machine Learning](#Machine-Learning)
* Libraries for Machine Learning.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [golearn](https://github.com/sjwhitworth/golearn) | 8077 | Machine Learning for Go | a month ago |
| [gorse](https://github.com/zhenghaoz/gorse) | 4777 | An open source recommender system service written in Go | 11 hours ago |
| [gorgonia](https://github.com/gorgonia/gorgonia) | 4248 | Gorgonia is a library that helps facilitate machine learning in Go. | 2 hours ago |
| [m2cgen](https://github.com/BayesWitnesses/m2cgen) | 1934 | Transform ML models into a native code (Java, C, Python, Go, JavaScript, Visual Basic, C#, R, PowerShell, PHP, Dart, Haskell, Ruby, F#, Rust) with zero dependencies | 14 hours ago |
| [tfgo](https://github.com/galeone/tfgo) | 1833 | Tensorflow + Go, the gopher way | 2 months ago |
| [gosseract](https://github.com/otiai10/gosseract) | 1606 | Go package for OCR (Optical Character Recognition), by using Tesseract C++ library | a day ago |
| [goml](https://github.com/cdipaolo/goml) | 1261 | On-line Machine Learning in Go (and so much more) | 17 days ago |
| [eaopt](https://github.com/MaxHalford/eaopt) | 757 | :four_leaf_clover: Evolutionary optimization library for Go (genetic algorithm, partical swarm optimization, differential evolution) | 7 months ago |
| [bayesian](https://github.com/jbrukh/bayesian) | 717 | Naive Bayesian Classification for Golang. | a year ago |
| [CloudForest](https://github.com/ryanbressler/CloudForest) | 697 | Ensembles of decision trees in go/golang. | a year ago |
| [gobrain](https://github.com/goml/gobrain) | 493 | Neural Networks written in go | a year ago |
| [ocrserver](https://github.com/otiai10/ocrserver) | 439 | A simple OCR API server, seriously easy to be deployed by Docker, on Heroku as well | 3 months ago |
| [onnx-go](https://github.com/owulveryck/onnx-go) | 352 | onnx-go gives the ability to import a pre-trained neural network within Go without being linked to a framework or library. | 20 days ago |
| [go-deep](https://github.com/patrikeh/go-deep) | 331 | Artificial Neural Network | 8 months ago |
| [regommend](https://github.com/muesli/regommend) | 295 | Recommendation engine for Go | 2 years ago |
| [goptuna](https://github.com/c-bata/goptuna) | 191 | A hyperparameter optimization framework, inspired by Optuna. | 5 months ago |
| [go-galib](https://github.com/thoj/go-galib) | 187 | Genetic Algorithms library written in Go / golang | 6 years ago |
| [goRecommend](https://github.com/timkaye11/goRecommend) | 177 | Collaborative Filtering (CF) Algorithms in Go!  | 7 years ago |
| [shield](https://github.com/eaigner/shield) | 144 | Bayesian text classifier with flexible tokenizers and storage backends for Go | 2 years ago |
| [goga](https://github.com/tomcraven/goga) | 114 | Golang Genetic Algorithm | 5 years ago |
| [go-fann](https://github.com/vksnk/go-fann) | 103 | Go bindings for FANN, library for artificial neural networks | 7 years ago |
| [goscore](https://github.com/asafschers/goscore) | 70 | Go Scoring API for PMML | 2 years ago |
| [gonet](https://github.com/dathoangnd/gonet) | 69 | Neural Network for Go. | 2 years ago |
| [libsvm](https://github.com/datastream/libsvm) | 69 | libsvm go version | 6 years ago |
| [go-featureprocessing](https://github.com/nikolaydubina/go-featureprocessing) | 61 | 🔥 Fast, simple sklearn-like feature processing for Go | 5 months ago |
| [neural-go](https://github.com/schuyler/neural-go) | 61 | A multilayer perceptron network implemented in Go, with training via backpropagation. | a year ago |
| [go-pr](https://github.com/daviddengcn/go-pr) | 59 | Pattern recognition package in Go lang. | 8 years ago |
| [neat](https://github.com/jinyeom/neat) | 59 | NEAT (NeuroEvolution of Augmenting Topologies) implemented in Go | 3 years ago |
| [fonet](https://github.com/Fontinalis/fonet) | 51 | fonet is a deep neural network package for Go. | 5 months ago |
| [golinear](https://github.com/danieldk/golinear) | 42 | liblinear bindings for Go | 3 years ago |
| [Varis](https://github.com/Xamber/Varis) | 38 | Golang Neural Network  | 3 years ago |
| [godist](https://github.com/e-dard/godist) | 31 | Probability distributions and associated methods in Go | 7 years ago |
| [go-cluster](https://github.com/e-XpertSolutions/go-cluster) | 29 | k-modes and k-prototypes clustering algorithms implementation in Go | 3 years ago |
| [gomind](https://github.com/surenderthakran/gomind) | 18 | A simplistic Neural Network Library in Go | 3 years ago |
| [evoli](https://github.com/khezen/evoli) | 17 | Genetic Algorithm and Particle Swarm Optimization | 20 days ago |
| [randomForest](https://github.com/malaschitz/randomForest) | 17 | Random Forest implementation in golang | a month ago |
| [ddt](https://github.com/sgrodriguez/ddt) | 16 | Golang Dynamic Decision Tree | 9 months ago |
| [probab](https://github.com/ThePaw/probab) | 16 | Automatically exported from code.google.com/p/probab | 6 years ago |


### [Messaging](#Messaging)
* Libraries that implement messaging systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sarama](https://github.com/Shopify/sarama) | 7836 | Sarama is a Go library for Apache Kafka 0.8, and up. | 7 days ago |
| [gorush](https://github.com/appleboy/gorush) | 5842 | A push notification server written in Go (Golang). | 10 days ago |
| [machinery](https://github.com/RichardKnop/machinery) | 5751 | Machinery is an asynchronous task queue/job queue based on distributed message passing. | 12 days ago |
| [centrifugo](https://github.com/centrifugal/centrifugo) | 5546 | Scalable real-time messaging server in a language-agnostic way. Set up once and forever. | 9 days ago |
| [go-socket.io](https://github.com/googollee/go-socket.io) | 4364 | socket.io library for golang, a realtime application framework. | 19 days ago |
| [nats.go](https://github.com/nats-io/nats.go) | 3631 | Golang client for NATS, the cloud native messaging system. | 6 hours ago |
| [benthos](https://github.com/Jeffail/benthos) | 3547 | Fancy stream processing made operationally mundane | 2 hours ago |
| [confluent-kafka-go](https://github.com/confluentinc/confluent-kafka-go) | 2979 | Confluent's Apache Kafka Golang client | 19 days ago |
| [mercure](https://github.com/dunglas/mercure) | 2577 | Server-sent live updates: protocol and reference implementation | 5 hours ago |
| [apns2](https://github.com/sideshow/apns2) | 2564 | ⚡ HTTP/2 Apple Push Notification Service (APNs) push provider for Go — Send push notifications to iOS, tvOS, Safari and OSX apps, using the APNs HTTP/2 protocol. | 2 months ago |
| [melody](https://github.com/olahol/melody) | 2278 | :notes: Minimalist websocket framework for Go | 6 months ago |
| [go-nsq](https://github.com/nsqio/go-nsq) | 2012 | The official Go package for NSQ | 22 days ago |
| [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) | 2011 | Golang push server cluster | 4 years ago |
| [asynq](https://github.com/hibiken/asynq) | 1713 | Asynq: simple, reliable, and efficient distributed task queue in Go | an hour ago |
| [uniqush-push](https://github.com/uniqush/uniqush-push) | 1290 | Uniqush is a free and open source software system which provides a unified push service for server side notification to apps on mobile devices. | 2 years ago |
| [Beaver](https://github.com/Clivern/Beaver) | 1276 | 💨 A real time messaging system to build a scalable in-app notifications, multiplayer games, chat apps in web and mobile apps. | a month ago |
| [EventBus](https://github.com/asaskevich/EventBus) | 1014 | [Go] Lightweight eventbus with async compatibility for Go | 5 months ago |
| [zmq4](https://github.com/pebbe/zmq4) | 941 | A Go interface to ZeroMQ version 4 | 2 months ago |
| [gollum](https://github.com/trivago/gollum) | 908 | An n:m message multiplexer written in Go | 4 months ago |
| [chanify](https://github.com/chanify/chanify) | 677 | Chanify is a safe and simple notification tools. This repository is command line tools for Chanify. | a month ago |
| [dbus](https://github.com/godbus/dbus) | 639 | Native Go bindings for D-Bus | 3 days ago |
| [golongpoll](https://github.com/jcuga/golongpoll) | 580 | golang long polling library.  Makes web pub-sub easy via HTTP long-poll servers and clients :smiley: :coffee: :computer: | 7 months ago |
| [mangos](https://github.com/nanomsg/mangos) | 455 | mangos is a pure Golang implementation of nanomsg's "Scalablilty Protocols" | 20 hours ago |
| [emitter](https://github.com/olebedev/emitter) | 413 | Emits events in Go way, with wildcard, predicates, cancellation possibilities and many other good wins | 2 years ago |
| [glue](https://github.com/desertbit/glue) | 385 | Glue - Robust Go and Javascript Socket Library (Alternative to Socket.io) | a year ago |
| [pubsub](https://github.com/cskr/pubsub) | 362 | A simple pubsub package for go. | a year ago |
| [bus](https://github.com/mustafaturan/bus) | 230 | 🔊Minimalist message bus implementation for internal communication with zero-allocation magic on Emit | 6 months ago |
| [message-bus](https://github.com/vardius/message-bus) | 201 | Go simple async message bus | 10 months ago |
| [rabtap](https://github.com/jandelgado/rabtap) | 193 | RabbitMQ wire tap and swiss army knife | a day ago |
| [guble](https://github.com/smancke/guble) | 148 | websocket based messaging server written in golang | 4 years ago |
| [zmq3](https://github.com/pebbe/zmq3) | 132 | A Go interface to ZeroMQ version 3 | 8 months ago |
| [amqp091-go](https://github.com/rabbitmq/amqp091-go) | 131 | An AMQP 0-9-1 Go client maintained by the RabbitMQ team. Originally by @streadway: `streadway/amqp` | 22 days ago |
| [hub](https://github.com/leandro-lugaresi/hub) | 112 | :incoming_envelope: A fast Message/Event Hub using publish/subscribe pattern with support for topics like* rabbitMQ exchanges for Go applications | a year ago |
| [oplog](https://github.com/dailymotion/oplog) | 109 | A generic oplog/replication system for microservices | 6 years ago |
| [go-gcm](https://github.com/googlearchive/go-gcm) | 104 | GCM library for Go. | 2 years ago |
| [rabbus](https://github.com/rafaeljesus/rabbus) | 92 | A tiny wrapper over amqp exchanges and queues 🚌 ✨ | 2 years ago |
| [drone-line](https://github.com/appleboy/drone-line) | 76 | Sending line notifications using a binary, docker or Drone CI. | 5 months ago |
| [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) | 70 | A tiny wrapper around NSQ topic and channel :rocket: | 4 years ago |
| [go-mq](https://github.com/cheshir/go-mq) | 69 | Declare AMQP entities like queues, producers, and consumers in a declarative way. Can be used to work with RabbitMQ. | 6 months ago |
| [redisqueue](https://github.com/robinjoseph08/redisqueue) | 66 | redisqueue provides a producer and consumer of a queue that uses Redis streams | 4 months ago |
| [RapidMQ](https://github.com/sybrexsys/RapidMQ) | 63 | RapidMQ is a pure, extremely productive, lightweight and reliable library for managing of the local messages queue | 4 years ago |
| [commander](https://github.com/jeroenrinzema/commander) | 57 | Build event-driven and event streaming applications with ease | 7 months ago |
| [go-notify](https://github.com/TheCreeper/go-notify) | 56 | Package notify provides an implementation of the Gnome DBus Notifications Specification. | a year ago |
| [go-res](https://github.com/jirenius/go-res) | 52 | RES Service protocol library for Go | 2 months ago |
| [event](https://github.com/agoalofalife/event) | 43 | The implementation of the pattern observer | 4 years ago |
| [hare](https://github.com/leozz37/hare) | 31 | 🐇  Easy to use socket lib for Golang and CLI tool | 3 months ago |
| [ami](https://github.com/kak-tus/ami) | 21 | Go client to reliable queues based on Redis Cluster Streams | 2 years ago |
| [gosd](https://github.com/alexsniffin/gosd) | 18 | A library for scheduling when to dispatch a message to a channel | a year ago |
| [zmq2](https://github.com/pebbe/zmq2) | 18 | A Go interface to ZeroMQ version 2 | 8 months ago |
| [go-vitotrol](https://github.com/maxatome/go-vitotrol) | 16 | golang client library to Viessmann Vitotrol web service | 9 months ago |
| [rmqconn](https://github.com/sbabiv/rmqconn) | 14 | RabbitMQ Reconnection client | 2 years ago |
| [jazz](https://github.com/socifi/jazz) | 13 | Abstraction layer for simple rabbitMQ connection, messaging and administration | 3 years ago |
| [gaurun-client](https://github.com/osamingo/gaurun-client) | 9 | Gaurun Client written in Go | 3 months ago |


### [Microsoft Office](#Microsoft-Office)
* Office

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [unioffice](https://github.com/unidoc/unioffice) | 3060 | Pure go library for creating and processing Office Word (.docx), Excel (.xlsx) and Powerpoint (.pptx) documents | 6 days ago |


### [Microsoft Excel](#Microsoft-Excel)
* Libraries for working with Microsoft Excel.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [excelize](https://github.com/qax-os/excelize) | 10012 | Golang library for reading and writing Microsoft Excel™ (XLSX) files. | 9 hours ago |
| [xlsx](https://github.com/tealeg/xlsx) | 5155 | Go (golang) library for reading and writing XLSX files.  | a month ago |
| [xlsx](https://github.com/plandem/xlsx) | 145 | Fast and reliable way to work with Microsoft Excel™ [xlsx] files in Golang | a year ago |
| [go-excel](https://github.com/szyhf/go-excel) | 131 | A simple and light excel file reader to read a standard excel as a table faster , 一个轻量级的Excel数据读取库，用一种更`关系数据库`的方式解析Excel。 | 6 months ago |
| [goxlsxwriter](https://github.com/fterrag/goxlsxwriter) | 17 | Golang bindings for libxlsxwriter for writing XLSX files | 3 years ago |


### [Miscellaneous](#Miscellaneous)
* 

#### [Dependency Injection](#Dependency-Injection)
* Libraries for working with dependency injection.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fx](https://github.com/uber-go/fx) | 2320 | A dependency injection based application framework for Go. | 2 days ago |
| [dig](https://github.com/uber-go/dig) | 2205 | A reflection based dependency injection toolkit for Go. | 21 days ago |
| [container](https://github.com/golobby/container) | 264 | A lightweight yet powerful IoC dependency injection container for Go projects | a month ago |
| [di](https://github.com/goioc/di) | 117 | Simple and yet powerful Dependency Injection for Go | 3 months ago |
| [dingo](https://github.com/i-love-flamingo/dingo) | 113 | Go Dependency Injection Framework | 7 months ago |
| [di](https://github.com/goava/di) | 108 | 🛠 A full-featured dependency injection container for go programming language. | 4 months ago |
| [alice](https://github.com/magic003/alice) | 43 | An additive dependency injection container for Golang. | 5 years ago |
| [wire](https://github.com/Fs02/wire) | 34 | Strict Runtime Dependency Injection for Golang | 3 months ago |
| [linker](https://github.com/logrange/linker) | 32 | Dependency Injection and Inversion of Control package | a year ago |
| [gocontainer](https://github.com/vardius/gocontainer) | 14 | Simple Dependency Injection Container | 2 years ago |
| [kinit](https://github.com/go-kata/kinit) | 6 | GO Dependency Injection | 5 months ago |
| [nject](https://github.com/BlueOwlOpenSource/nject) | 3 | Go dependency injection: nject & npoint | 3 months ago |


#### [Project Layout](#Project-Layout)
* Unofficial set of patterns for structuring projects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [project-layout](https://github.com/golang-standards/project-layout) | 27627 | Standard Go Project Layout | 8 days ago |
| [service](https://github.com/ardanlabs/service) | 2030 | Starter code for writing web services in Go using Kubernetes. | 5 days ago |
| [modern-go-application](https://github.com/sagikazarmark/modern-go-application) | 1085 | Modern Go Application example | 4 months ago |
| [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) | 480 | A Go project template | 9 months ago |
| [seed](https://github.com/golang-templates/seed) | 222 | Go application GitHub repository template. | 2 months ago |
| [go-todo-backend](https://github.com/Fs02/go-todo-backend) | 104 | Go Todo Backend example using modular project layout for product microservice. | 2 months ago |
| [scaffold](https://github.com/catchplay/scaffold) | 100 | Generate scaffold project layout for Go. | 3 years ago |
| [go-sample](https://github.com/zitryss/go-sample) | 95 | Go Project Sample Layout | 3 years ago |
| [go-starter](https://github.com/allaboutapps/go-starter) | 89 | An opinionated production-ready SQL-/Swagger-first RESTful JSON API written in Go, highly integrated with VSCode DevContainers by allaboutapps. | 11 days ago |
| [gobase](https://github.com/wajox/gobase) | 14 | This is a simple skeleton for golang applications | 2 months ago |
| [inizio](https://github.com/insidieux/inizio) | 9 | Golang project standard layout generator | 6 months ago |
| [go-project-layout](https://github.com/wangyoucao577/go-project-layout) | 9 | My understanding of how to structure a golang project.  | 6 months ago |


#### [Strings](#Strings)
* Libraries for working with strings.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xstrings](https://github.com/huandu/xstrings) | 944 | Implements string functions widely used in other languages but absent in Go. | a year ago |
| [sttr](https://github.com/abhimanyu003/sttr) | 158 | cross-platform, cli app to perform various operations on string | 13 days ago |
| [strutil](https://github.com/ozgio/strutil) | 141 | String utilities for Go | 21 days ago |
| [stringy](https://github.com/gobeam/stringy) | 83 | Convert string to camel case, snake case, kebab case / slugify, custom delimiter, pad string, tease string and many other functionalities with help of by Stringy package. | 7 days ago |
| [bexp](https://github.com/mkungla/bexp) | 3 | Go implementation of Brace Expansion mechanism to generate arbitrary strings. | 2 months ago |


#### [Uncategorized](#Uncategorized)
* These libraries were placed here because none of the other categories seemed to fit.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopsutil](https://github.com/shirou/gopsutil) | 6959 | psutil for golang | 16 hours ago |
| [archiver](https://github.com/mholt/archiver) | 3356 | Easily create & extract archives, and compress & decompress files of various formats | 2 days ago |
| [gofakeit](https://github.com/brianvoe/gofakeit) | 2114 | Random fake data generator written in go | 25 days ago |
| [gatus](https://github.com/TwiN/gatus) | 1978 | ⛑ Gatus - Automated service health dashboard | 23 minutes ago |
| [oapi-codegen](https://github.com/deepmap/oapi-codegen) | 1419 | Generate Go client and server boilerplate from OpenAPI 3 specifications | a day ago |
| [gosms](https://github.com/haxpax/gosms) | 1356 | :mailbox_closed: Your own local SMS gateway in Go | 9 months ago |
| [go-resiliency](https://github.com/eapache/go-resiliency) | 1280 | Resiliency patterns for golang | 2 months ago |
| [base64Captcha](https://github.com/mojocn/base64Captcha) | 1255 | captcha of base64 image string | 4 months ago |
| [go-commons-pool](https://github.com/jolestar/go-commons-pool) | 991 | a generic object pool for golang | 7 months ago |
| [llvm](https://github.com/llir/llvm) | 819 | Library for interacting with LLVM IR in pure Go. | 22 days ago |
| [shortid](https://github.com/teris-io/shortid) | 717 | Super short, fully unique, non-sequential and URL friendly Ids | a year ago |
| [health](https://github.com/alexliesenfeld/health) | 459 | A simple and flexible health check library for Go. | a month ago |
| [health](https://github.com/dimiro1/health) | 425 | An easy to use, extensible health check library for Go applications. | 2 years ago |
| [stateless](https://github.com/qmuntal/stateless) | 377 | Go library for creating state machines | 2 months ago |
| [go-conv](https://github.com/cstockton/go-conv) | 373 | Fast conversions across various Go types with a simple API. | 3 months ago |
| [banner](https://github.com/dimiro1/banner) | 364 | An easy way to add useful startup banners into your Go applications | 10 months ago |
| [gountries](https://github.com/pariz/gountries) | 324 | Gountries provides: Countries (ISO-3166-1), Country Subdivisions(ISO-3166-2), Currencies (ISO 4217), Geo Coordinates(ISO-6709) as well as translations, country borders and other stuff exposed as struct data. | 11 days ago |
| [shoutrrr](https://github.com/containrrr/shoutrrr) | 257 | Notification library for gophers and their furry friends. | 3 days ago |
| [ffmt](https://github.com/go-ffmt/ffmt) | 244 | Golang beautify data display for Humans | 8 months ago |
| [lk](https://github.com/hyperboloide/lk) | 223 | Simple licensing library for golang. | 2 years ago |
| [antch](https://github.com/antchfx/antch) | 221 | Antch, a fast, powerful and extensible web crawling & scraping framework for Go | a year ago |
| [healthcheck](https://github.com/etherlabsio/healthcheck) | 208 | An simple, easily extensible and concurrent health-check library for Go services | 5 months ago |
| [battery](https://github.com/distatus/battery) | 193 | cross-platform, normalized battery information library | a month ago |
| [bitio](https://github.com/icza/bitio) | 168 | Optimized bit-level Reader and Writer for Go. | 4 months ago |
| [stats](https://github.com/go-playground/stats) | 157 | :chart_with_upwards_trend: Monitors Go MemStats + System stats such as Memory, Swap and CPU and sends via UDP anywhere you want for logging etc... | 5 years ago |
| [go-unarr](https://github.com/gen2brain/go-unarr) | 155 | Go bindings for unarr (decompression library for RAR, TAR, ZIP and 7z archives) | a month ago |
| [turtle](https://github.com/hackebrot/turtle) | 126 | Emojis for Go 😄🐢🚀 | a month ago |
| [gommit](https://github.com/antham/gommit) | 95 | Enforce git message commit consistency | 2 months ago |
| [gotoprom](https://github.com/cabify/gotoprom) | 92 | Type-safe Prometheus metrics builder library for golang | 2 years ago |
| [indigo](https://github.com/osamingo/indigo) | 90 | A distributed unique ID generator of using Sonyflake and encoded by Base58 | 9 months ago |
| [captcha](https://github.com/steambap/captcha) | 86 | :sunglasses:Package captcha provides an easy to use, unopinionated API for captcha generation | 2 months ago |
| [morse](https://github.com/alwindoss/morse) | 71 | Morse Code Library in Go | 3 months ago |
| [persian](https://github.com/mavihq/persian) | 61 | Some utilities for Persian language in Go (Golang) | 5 months ago |
| [pdfgen](https://github.com/hyperboloide/pdfgen) | 54 | HTTP service to generate PDF from Json requests | 4 years ago |
| [xkg](https://github.com/go-xkg/xkg) | 51 | User level X Keyboard Grabber | 7 years ago |
| [faker](https://github.com/pioz/faker) | 48 | Random fake data and struct generator for Go. | a month ago |
| [browscap_go](https://github.com/digitalcrab/browscap_go) | 39 | GoLang Library for Browser Capabilities Project | 2 months ago |
| [datacounter](https://github.com/miolini/datacounter) | 37 | Golang counters for readers/writers | 2 years ago |
| [autoflags](https://github.com/artyom/autoflags) | 34 | Populate go command line app flags from config struct | 7 months ago |
| [sandid](https://github.com/aofei/sandid) | 34 | Every grain of sand on Earth has its own ID. | 5 days ago |
| [url-shortener](https://github.com/pantrif/url-shortener) | 32 | A golang URL Shortener | 3 years ago |
| [gosh](https://github.com/osamingo/gosh) | 28 | Provide Go Statistics Handler, Struct, Measure Method | 10 months ago |
| [xdg](https://github.com/rkoesters/xdg) | 27 | FreeDesktop.org (xdg) Specs implemented in Go | 4 months ago |
| [metrics](https://github.com/pascaldekloe/metrics) | 22 | atomic measures + Prometheus exposition library | 8 months ago |
| [shellwords](https://github.com/Wing924/shellwords) | 15 | A Golang library to manipulate strings according to the word parsing rules of the UNIX Bourne shell. | 4 years ago |
| [anagent](https://github.com/mudler/anagent) | 13 | Minimalistic, pluggable Golang evloop/timer handler with dependency-injection | 3 years ago |
| [avgRating](https://github.com/kirillDanshin/avgRating) | 11 | Calculate average score and rating based on Wilson Score Equation | 4 years ago |
| [hostutils](https://github.com/Wing924/hostutils) | 10 | A golang library for packing and unpacking hosts list | 3 years ago |
| [numa](https://github.com/lrita/numa) | 6 | NUMA is a utility library, which is written in go. It help us to write some NUMA-AWARED code. | a year ago |
| [generators](https://github.com/azr/generators) | 4 | #golang generator | 5 years ago |
| [go-commandbus](https://github.com/lana/go-commandbus) | 3 | Simple command bus for GO | 2 years ago |
| [basexx](https://github.com/bobg/basexx) | 1 | Convert digit strings between arbitrary bases. | a month ago |


### [Natural Language Processing](#Natural-Language-Processing)
* Libraries for working with human languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jieba](https://github.com/fxsjy/jieba) | 27321 | 结巴中文分词 | 4 months ago |
| [vaderSentiment](https://github.com/cjhutto/vaderSentiment) | 3240 | VADER Sentiment Analysis. VADER (Valence Aware Dictionary and sEntiment Reasoner) is a lexicon and rule-based sentiment analysis tool that is specifically attuned to sentiments expressed in social media, and works well on texts from other domains.  | 5 months ago |
| [prose](https://github.com/jdkato/prose) | 2827 | :book: A Golang library for text processing, including tokenization, part-of-speech tagging, and named-entity extraction. | 2 months ago |
| [go-i18n](https://github.com/nicksnyder/go-i18n) | 1804 | Translate your Go program into multiple languages. | 5 months ago |
| [gojieba](https://github.com/yanyiwu/gojieba) | 1685 | "结巴"中文分词的Golang版本 | 5 months ago |
| [gse](https://github.com/go-ego/gse) | 1679 | Go efficient multilingual NLP and text segmentation; support english, chinese, japanese and other. Go 高性能多语言 NLP 和分词 | 6 days ago |
| [when](https://github.com/olebedev/when) | 1131 | A natural language date/time parser with pluggable rules | 10 days ago |
| [go-pinyin](https://github.com/mozillazg/go-pinyin) | 1036 | 汉字转拼音 | 6 months ago |
| [spago](https://github.com/nlpodyssey/spago) | 989 | Self-contained Machine Learning and Natural Language Processing library in Go | 2 days ago |
| [kagome](https://github.com/ikawaha/kagome) | 590 | Self-contained Japanese Morphological Analyzer written in pure Go | 19 days ago |
| [whatlanggo](https://github.com/abadojack/whatlanggo) | 511 | Natural language detection library for Go | 10 months ago |
| [nlp](https://github.com/shixzie/nlp) | 374 | [UNMANTEINED] Extract values from strings and fill your structs with nlp. | 4 years ago |
| [nlp](https://github.com/james-bowman/nlp) | 347 | Selected Machine Learning algorithms for natural language processing and semantic analysis in Golang | 6 months ago |
| [sentences](https://github.com/neurosnap/sentences) | 313 | A multilingual command line sentence tokenizer in Golang | 5 months ago |
| [getlang](https://github.com/rylans/getlang) | 126 | Natural language detection package in pure Go | a year ago |
| [go-nlp](https://github.com/nuance/go-nlp) | 89 | Utilities for working with discrete probability distributions and other tools useful for doing NLP work | 10 years ago |
| [go-unidecode](https://github.com/mozillazg/go-unidecode) | 89 | ASCII transliterations of Unicode text. | 7 months ago |
| [RAKE.Go](https://github.com/afjoseph/RAKE.Go) | 85 | A Go port of the Rapid Automatic Keyword Extraction algorithm (RAKE) | 2 years ago |
| [gounidecode](https://github.com/fiam/gounidecode) | 73 | Unicode transliterator for #golang | 6 years ago |
| [segment](https://github.com/blevesearch/segment) | 66 | A Go library for performing Unicode Text Segmentation as described in Unicode Standard Annex #29 | 10 months ago |
| [go-stem](https://github.com/agonopol/go-stem) | 65 | Word Stemming in Go | 3 years ago |
| [textcat](https://github.com/pebbe/textcat) | 65 | A Go package for n-gram based text categorization, with support for utf-8 and raw text | 9 months ago |
| [MMSEGO](https://github.com/awsong/MMSEGO) | 59 | Chinese word splitting algorithm MMSEG in GO | 10 years ago |
| [stemmer](https://github.com/dchest/stemmer) | 49 | Stemmer packages for Go programming language. Includes English, German and Dutch stemmers. | 5 years ago |
| [go2vec](https://github.com/danieldk/go2vec) | 43 | Read and use word2vec vectors in Go | 3 years ago |
| [porter2](https://github.com/zentures/porter2) | 41 | High Performance Porter2 Stemmer | a year ago |
| [address](https://github.com/bojanz/address) | 40 | Address handling for Go. | 8 days ago |
| [petrovich](https://github.com/striker2000/petrovich) | 36 | Golang port of Petrovich - an inflector for Russian anthroponyms. | 9 months ago |
| [go-localize](https://github.com/m1/go-localize) | 28 | i18n (Internationalization and localization) engine written in Go, used for translating locale strings.  | 17 days ago |
| [mystem](https://github.com/dveselov/mystem) | 28 | CGo bindings to Yandex.Mystem | 5 years ago |
| [snowball](https://github.com/goodsign/snowball) | 28 | Cgo binding for Snowball C library | 4 years ago |
| [paicehusk](https://github.com/rookii/paicehusk) | 27 | Golang implementation of the Paice/Husk Stemming Algorithm | 8 years ago |
| [iuliia-go](https://github.com/mehanizm/iuliia-go) | 26 | Transliterate Cyrillic → Latin in every possible way | 5 months ago |
| [golibstemmer](https://github.com/rjohnsondev/golibstemmer) | 19 | Go bindings for the snowball libstemmer library including porter 2 | 7 years ago |
| [icu](https://github.com/goodsign/icu) | 19 | Cgo binding for icu4c library | 5 years ago |
| [govader](https://github.com/jonreiter/govader) | 18 | vader sentiment analysis in go | 9 months ago |
| [transliterator](https://github.com/alexsergivan/transliterator) | 15 | Golang text Transliterator (i.e München -> Muenchen) | 2 years ago |
| [gotokenizer](https://github.com/xujiajun/gotokenizer) | 12 | A tokenizer based on the dictionary and Bigram language models for Go. (Now only support chinese segmentation) | 3 years ago |
| [shamoji](https://github.com/osamingo/shamoji) | 12 | The shamoji (杓文字) is a word filtering package | 10 months ago |
| [detectlanguage-go](https://github.com/detectlanguage/detectlanguage-go) | 10 | Detect Language API Go Client | a year ago |
| [libtextcat](https://github.com/goodsign/libtextcat) | 10 | Cgo binding for libtextcat C library | 9 years ago |
| [porter](https://github.com/a2800276/porter) | 8 | porter stemmer | 8 years ago |
| [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) | 7 | 💬 Sentiment analyzer library using SentiWordnet in Go | 8 months ago |
| [t](https://github.com/youthlin/t) | 5 | t: translation util for go, using GNU gettext | 18 days ago |


### [Networking](#Networking)
* Libraries for working with various layers of the network.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fasthttp](https://github.com/valyala/fasthttp) | 16399 | Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http | 3 days ago |
| [kcptun](https://github.com/xtaci/kcptun) | 12658 | A Stable & Secure Tunnel based on KCP with N:M multiplexing and FEC. Available for ARM, MIPS, 386 and AMD64。KCPプロトコルに基づく安全なトンネル。KCP 프로토콜을 기반으로 하는 보안 터널입니다。 | 2 months ago |
| [webrtc](https://github.com/pion/webrtc) | 8223 | Pure Go implementation of the WebRTC API | 7 hours ago |
| [quic-go](https://github.com/lucas-clemente/quic-go) | 5963 | A QUIC implementation in pure go | 15 days ago |
| [dns](https://github.com/miekg/dns) | 5864 | DNS library in Go | 8 days ago |
| [gnet](https://github.com/panjf2000/gnet) | 5510 | 🚀 gnet is a high-performance, lightweight, non-blocking, event-driven networking framework written in pure Go./ gnet 是一个高性能、轻量级、非阻塞的事件驱动 Go 网络框架。 | 6 days ago |
| [gopacket](https://github.com/google/gopacket) | 4487 | Provides packet processing capabilities for Go | 2 months ago |
| [httplab](https://github.com/qustavo/httplab) | 3741 | The interactive web server | 2 years ago |
| [kcp-go](https://github.com/xtaci/kcp-go) | 3132 |  A Crypto-Secure, Production-Grade Reliable-UDP Library for golang with FEC  | 25 days ago |
| [gobgp](https://github.com/osrg/gobgp) | 2341 | BGP implemented in the Go Programming Language | 4 days ago |
| [ssh](https://github.com/gliderlabs/ssh) | 2202 | Easy SSH servers in Golang | 4 days ago |
| [fortio](https://github.com/fortio/fortio) | 2155 | Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats. | 2 days ago |
| [water](https://github.com/songgao/water) | 1320 | A simple TUN/TAP library written in native Go. | 7 months ago |
| [gev](https://github.com/Allenxuxu/gev) | 1288 | 🚀Gev is a lightweight, fast non-blocking TCP network library / websocket server based on Reactor mode. Support custom protocols to quickly and easily build high-performance servers.  | 3 days ago |
| [go-getter](https://github.com/hashicorp/go-getter) | 1251 | Package for downloading things from a string URL using a variety of protocols. | 20 days ago |
| [nff-go](https://github.com/intel-go/nff-go) | 1128 | NFF-Go -Network Function Framework for GO (former YANFF) | 2 months ago |
| [sftp](https://github.com/pkg/sftp) | 1061 | SFTP support for the go.crypto/ssh package | 4 days ago |
| [grab](https://github.com/cavaliergopher/grab) | 935 | A download manager package for Go | 2 months ago |
| [ftp](https://github.com/jlaffaye/ftp) | 854 | FTP client package for Go | 3 days ago |
| [mdns](https://github.com/hashicorp/mdns) | 825 | Simple mDNS client/server library in Golang | 11 days ago |
| [gosnmp](https://github.com/gosnmp/gosnmp) | 772 | An SNMP library written in Go | 4 days ago |
| [vssh](https://github.com/yahoo/vssh) | 752 | Go Library to Execute Commands Over SSH at Scale | a year ago |
| [cidranger](https://github.com/yl2chen/cidranger) | 647 | Fast IP to CIDR lookup in Golang | 20 days ago |
| [lhttp](https://github.com/fanux/lhttp) | 633 | go websocket, a better way to buid your IM server | 4 years ago |
| [peerdiscovery](https://github.com/schollz/peerdiscovery) | 511 | Pure-Go library for cross-platform local peer discovery using UDP multicast :woman: :repeat: :woman: | a month ago |
| [gmqtt](https://github.com/DrmagicE/gmqtt) | 500 | Gmqtt is a flexible, high-performance MQTT broker library that fully implements the MQTT protocol V3.x and V5 in golang | 6 days ago |
| [gotcp](https://github.com/gansidui/gotcp) | 488 | A Go package for quickly building tcp servers | 5 years ago |
| [stun](https://github.com/gortc/stun) | 473 | Fast RFC 5389 STUN implementation in go | 6 months ago |
| [go-stun](https://github.com/ccding/go-stun) | 459 | A go implementation of the STUN client (RFC 3489 and RFC 5389) | 7 months ago |
| [gopcap](https://github.com/akrennmair/gopcap) | 434 | A simple wrapper around libpcap for the Go programming language | 6 months ago |
| [raw](https://github.com/mdlayher/raw) | 402 | Package raw enables reading and writing data at the device driver level for a network interface.  MIT Licensed. | 2 months ago |
| [tcp_server](https://github.com/firstrow/tcp_server) | 400 | golang tcp server | 6 days ago |
| [gaio](https://github.com/xtaci/gaio) | 399 | High performance async-io(proactor) networking for Golang。golangのための高性能非同期io(proactor)ネットワーキング | 2 months ago |
| [nbio](https://github.com/lesismal/nbio) | 373 | Pure Go 1000k+ connections solution, support tls/http1.x/websocket and basically compatible with net/http, with high-performance and low memory cost, non-blocking, event-driven, easy-to-use. | 7 days ago |
| [winrm](https://github.com/masterzen/winrm) | 336 | Command-line tool and library for Windows remote command execution in Go | 9 days ago |
| [arp](https://github.com/mdlayher/arp) | 266 | Package arp implements the ARP protocol, as described in RFC 826. MIT Licensed. | 2 years ago |
| [ftpserverlib](https://github.com/fclairamb/ftpserverlib) | 266 | golang ftp server library | 9 days ago |
| [buffstreams](https://github.com/StabbyCutyou/buffstreams) | 247 | A library to simplify writing applications using TCP sockets to stream protobuff messages | a year ago |
| [ethernet](https://github.com/mdlayher/ethernet) | 232 | Package ethernet implements marshaling and unmarshaling of IEEE 802.3 Ethernet II frames and IEEE 802.1Q VLAN tags. MIT Licensed. | 2 years ago |
| [easytcp](https://github.com/DarthPestilane/easytcp) | 202 | :sparkles: :rocket: EasyTCP is a light-weight TCP framework written in Go (Golang), built with message router. EasyTCP helps you build a TCP server easily fast and less painful. | 4 days ago |
| [gnxi](https://github.com/google/gnxi) | 196 | gNXI Tools - gRPC Network Management/Operations Interface Tools | a month ago |
| [jazigo](https://github.com/udhos/jazigo) | 172 | Jazigo is a tool written in Go for retrieving configuration for multiple devices, similar to rancid, fetchconfig, oxidized, Sweet. | 2 years ago |
| [utp](https://github.com/anacrolix/utp) | 160 | Use anacrolix/go-libutp instead | 10 months ago |
| [canopus](https://github.com/zubairhamed/canopus) | 146 | CoAP Client/Server implementing RFC 7252 for the Go Language | 4 years ago |
| [sslb](https://github.com/eduardonunesp/sslb) | 133 | Golang Super Simple Load Balance | 2 years ago |
| [xtcp](https://github.com/xfxdev/xtcp) | 129 | A TCP Server Framework with graceful shutdown, custom protocol. | 2 years ago |
| [dhcp6](https://github.com/mdlayher/dhcp6) | 71 | Package dhcp6 implements a DHCPv6 server, as described in RFC 3315. MIT Licensed. | 3 years ago |
| [ether](https://github.com/songgao/ether) | 71 | A Go package for sending and receiving ethernet frames. Currently supporting Linux, Freebsd, and OS X. | 6 years ago |
| [iplib](https://github.com/c-robinson/iplib) | 58 | A library  for working with IP addresses and networks in Go | 14 days ago |
| [packet](https://github.com/aerogo/packet) | 57 | :package: Send network packets over a TCP or UDP connection. | 2 years ago |
| [linkio](https://github.com/ian-kent/linkio) | 49 | Simulate network link speed | 4 years ago |
| [portproxy](https://github.com/aybabtme/portproxy) | 45 | TCP proxy, highjacks HTTP to allow CORS | 7 years ago |
| [go-powerdns](https://github.com/joeig/go-powerdns) | 44 | Go PowerDNS 4.x API Client | 3 days ago |
| [panoptes-stream](https://github.com/yahoo/panoptes-stream) | 29 | A cloud native distributed streaming network telemetry. | 8 months ago |
| [graval](https://github.com/koofr/graval) | 27 | An experimental go FTP server framework | a year ago |
| [publicip](https://github.com/polera/publicip) | 24 | Go pkg for returning your public facing IP address. | 5 years ago |
| [golibwireshark](https://github.com/sunwxg/golibwireshark) | 21 |  | 4 years ago |
| [gohooks](https://github.com/averageflow/gohooks) | 14 | GoHooks make it easy to send and consume secured web-hooks from a Go application | 4 months ago |
| [goshark](https://github.com/sunwxg/goshark) | 14 |  | 4 years ago |
| [llb](https://github.com/kirillDanshin/llb) | 11 |  | 6 years ago |
| [tspool](https://github.com/two/tspool) | 10 | tcp server pool | 3 years ago |
| [httpproxy](https://github.com/wzshiming/httpproxy) | 9 | HTTP proxy handler and dialer | 3 days ago |


### [HTTP Clients](#HTTP-Clients)
* Libraries for making HTTP requests.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [resty](https://github.com/go-resty/resty) | 5178 | Simple HTTP and REST client library for Go | 12 days ago |
| [heimdall](https://github.com/gojek/heimdall) | 2106 | An enhanced HTTP client for Go | a month ago |
| [grequests](https://github.com/levigross/grequests) | 1846 | A Go "clone" of the great and famous Requests library | a year ago |
| [sling](https://github.com/dghubble/sling) | 1383 | A Go HTTP client library for creating and sending API requests | 18 days ago |
| [gentleman](https://github.com/h2non/gentleman) | 924 | Plugin-driven, extensible HTTP client toolkit for Go | 9 months ago |
| [pester](https://github.com/sethgrid/pester) | 565 | Go (golang) http calls with retries and backoff  | a year ago |
| [request](https://github.com/monaco-io/request) | 151 | go request, go http client | a month ago |
| [rq](https://github.com/ddo/rq) | 39 | A nicer interface for golang stdlib HTTP client | 2 years ago |
| [go-http-client](https://github.com/bozd4g/go-http-client) | 30 | An enhanced http client for Golang | 6 months ago |
| [requests](https://github.com/carlmjohnson/requests) | 22 | HTTP requests for Gophers | a month ago |
| [httpretry](https://github.com/ybbus/httpretry) | 15 | Enriches the standard go http client with retry functionality. | 2 years ago |
| [go-req](https://github.com/wenerme/go-req) | 12 | Declarative golang HTTP client | 2 months ago |
| [httpc](https://github.com/valord577/httpc) | 1 | A customizable and simple HTTP client library. Only depend on the stdlib HTTP client. | 3 months ago |


### [OpenGL](#OpenGL)
* Libraries for using OpenGL in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glfw](https://github.com/go-gl/glfw) | 1175 | Go bindings for GLFW 3 | 23 days ago |
| [gl](https://github.com/go-gl/gl) | 844 | Go bindings for OpenGL (generated via glow) | 21 days ago |
| [mathgl](https://github.com/go-gl/mathgl) | 397 | A pure Go 3D math library. | a year ago |
| [gl](https://github.com/goxjs/gl) | 153 | Go cross-platform OpenGL bindings. | 10 months ago |
| [glfw](https://github.com/goxjs/glfw) | 71 | Go cross-platform glfw library for creating an OpenGL context and receiving events. | 2 years ago |
| [go-glmatrix](https://github.com/technohippy/go-glmatrix) | 2 | go-glmatrix is a golang version of glMatrix, which is "designed to perform vector and matrix operations stupidly fast". | 9 months ago |


### [ORM](#ORM)
* Libraries that implement Object-Relational Mapping or datamapping techniques.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [beego](https://github.com/beego/beego) | 27216 | beego is an open-source, high-performance web framework for the Go programming language. | 7 days ago |
| [gorm](https://github.com/go-gorm/gorm) | 25833 | The fantastic ORM library for Golang, aims to be developer friendly | 18 hours ago |
| [ent](https://github.com/ent/ent) | 9160 | An entity framework for Go | 3 hours ago |
| [pg](https://github.com/go-pg/pg) | 4883 | Golang ORM with focus on PostgreSQL features and performance | 18 days ago |
| [sqlboiler](https://github.com/volatiletech/sqlboiler) | 4394 | Generate a Go ORM tailored to your database schema. | 14 hours ago |
| [gorp](https://github.com/go-gorp/gorp) | 3529 | Go Relational Persistence - an ORM-ish library for Go | 8 months ago |
| [db](https://github.com/upper/db) | 2790 | Data access layer for PostgreSQL, CockroachDB, MySQL, SQLite and MongoDB with ORM-like features. | 3 months ago |
| [gormt](https://github.com/xxjwxc/gormt) | 1532 | database to golang struct | 2 months ago |
| [reform](https://github.com/go-reform/reform) | 1204 | A better ORM for Go, based on non-empty interfaces and code generation. | a day ago |
| [pop](https://github.com/gobuffalo/pop) | 1136 | A Tasty Treat For All Your Database Needs | a month ago |
| [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) | 660 | A flexible and powerful SQL string builder library plus a zero-config ORM. | a month ago |
| [go-queryset](https://github.com/jirfag/go-queryset) | 640 | 100% type-safe ORM for Go (Golang) with code generation and MySQL, PostgreSQL, Sqlite3, SQL Server support. GORM under the hood. | 4 months ago |
| [rel](https://github.com/go-rel/rel) | 447 | :gem: Modern ORM for Golang - Testable, Extendable and Crafted Into a Clean and Elegant API | 2 days ago |
| [zoom](https://github.com/albrow/zoom) | 282 | A blazing-fast datastore and querying engine for Go built on Redis. | 2 years ago |
| [grimoire](https://github.com/Fs02/grimoire) | 155 | Database access layer for golang | 21 days ago |
| [gosql](https://github.com/rushteam/gosql) | 147 | golang orm and sql builder | 5 months ago |
| [go-store](https://github.com/gosuri/go-store) | 104 | A simple and fast Redis backed key-value store library for Go | 5 years ago |
| [go-firestorm](https://github.com/jschoedt/go-firestorm) | 25 | Simple Go ORM for Google/Firebase Cloud Firestore | 7 months ago |
| [lore](https://github.com/abrahambotros/lore) | 10 | Light Object-Relational Environment (LORE) provides a simple and lightweight pseudo-ORM/pseudo-struct-mapping environment for Go | 4 years ago |
| [marlow](https://github.com/marlow/marlow) | 9 | persistence layer code generation for golang | a year ago |


### [Package Management](#Package-Management)
* 

#### [Official experimental tooling for package management](#Official-experimental-tooling-for-package-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dep](https://github.com/golang/dep) | 13124 | Go dependency management tool experiment (deprecated) | a year ago |


#### [Unofficial libraries for package and dependency management](#Official-libraries-for-package-and-dependency-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glide](https://github.com/Masterminds/glide) | 8133 | Package Management for Golang | 9 months ago |
| [godep](https://github.com/tools/godep) | 5609 | dependency tool for go | 4 years ago |
| [govendor](https://github.com/kardianos/govendor) | 5000 | Use Go Modules. | 2 years ago |
| [gopm](https://github.com/gpmgo/gopm) | 2501 | Go Package Manager (gopm) is a package manager and build tool for Go. | 2 years ago |
| [gom](https://github.com/mattn/gom) | 1398 | Go Manager - bundle for go | 2 years ago |
| [gpm](https://github.com/pote/gpm) | 1198 | Barebones dependency manager for Go. | 4 years ago |
| [goop](https://github.com/petejkim/goop) | 781 | A simple dependency manager for Go (golang), inspired by Bundler. | 6 years ago |
| [modgv](https://github.com/lucasepe/modgv) | 396 | Converts 'go mod graph' output into Graphviz's DOT language | a year ago |
| [nut](https://github.com/owenthereal/nut) | 240 | Vendor Go dependencies | 6 years ago |
| [johnny-deps](https://github.com/VividCortex/johnny-deps) | 213 | Barebones dependency manager for Go. | a year ago |
| [mvn-golang](https://github.com/raydac/mvn-golang) | 132 | maven plugin to automate GoSDK load and build of projects | 11 days ago |
| [VenGO](https://github.com/DamnWidget/VenGO) | 120 | Create and manage Isolated Virtual Environments for Go | 5 years ago |
| [gop](https://github.com/lunny/gop) | 48 | Moved to https://gitea.com/lunny/gop | 3 years ago |


### [Performance](#Performance)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jaeger](https://github.com/jaegertracing/jaeger) | 14608 | CNCF Jaeger, a Distributed Tracing Platform | 5 hours ago |
| [pixie](https://github.com/pixie-io/pixie) | 2276 | Instant Kubernetes-Native Application Observability | 5 minutes ago |
| [statsviz](https://github.com/arl/statsviz) | 1726 | :rocket: Instant live visualization of your Go application runtime statistics (GC, MemStats, etc.) in the browser | 2 months ago |
| [profile](https://github.com/pkg/profile) | 1607 | Simple profiling for Go | 13 days ago |
| [tracer](https://github.com/kamilsk/tracer) | 60 | 🧶 Dead simple, lightweight tracing. | 9 months ago |


### [Query Language](#Query-Language)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphql](https://github.com/graphql-go/graphql) | 8105 | An implementation of GraphQL for Go / Golang | 6 days ago |
| [gqlgen](https://github.com/99designs/gqlgen) | 6746 | go generate based graphql server library | 8 hours ago |
| [graphql-go](https://github.com/graph-gophers/graphql-go) | 3971 | GraphQL server with a focus on ease of use | 10 hours ago |
| [gojsonq](https://github.com/thedevsaddam/gojsonq) | 1773 | A simple Go package to Query over JSON/YAML/XML/CSV Data  | 3 months ago |
| [dasel](https://github.com/TomWright/dasel) | 1681 | Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package. | 6 days ago |
| [jsonql](https://github.com/elgs/jsonql) | 247 | JSON query expression library in Golang. | a year ago |
| [rql](https://github.com/a8m/rql) | 239 | Resource Query Language for REST | 16 hours ago |
| [jsonslice](https://github.com/bhmj/jsonslice) | 55 | json slicer | 4 days ago |
| [graphql](https://github.com/tmc/graphql) | 53 | graphql parser + utilities | 4 years ago |
| [api-fu](https://github.com/ccbrown/api-fu) | 38 | A collection of Go packages for creating robust GraphQL APIs | 2 months ago |
| [straf](https://github.com/SonicRoshan/straf) | 32 | Convert Golang Struct To GraphQL Object On The Fly | 2 years ago |
| [rest-query-parser](https://github.com/timsolov/rest-query-parser) | 27 | Query Parser for REST | 4 months ago |
| [jsonpath](https://github.com/AsaiYusuke/jsonpath) | 7 | A query library for retrieving part of JSON based on JSONPath syntax. | 16 days ago |
| [gws](https://github.com/Zaba505/gws) | 4 | A WebSocket client and server for GraphQL | a year ago |


### [Resource Embedding](#Resource-Embedding)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [packr](https://github.com/gobuffalo/packr) | 3322 | The simple and easy way to embed static files into Go binaries. | 6 days ago |
| [statik](https://github.com/rakyll/statik) | 3318 | Embed files into a Go executable | a year ago |
| [go.rice](https://github.com/GeertJohan/go.rice) | 2258 | go.rice is a Go package that makes working with resources such as html,js,css,images,templates, etc very easy. | a month ago |
| [vfsgen](https://github.com/shurcooL/vfsgen) | 934 | Takes an input http.FileSystem (likely at go generate time) and generates Go code that statically implements it. | a year ago |
| [esc](https://github.com/mjibson/esc) | 603 | A simple file embedder for Go | 2 years ago |
| [fileb0x](https://github.com/UnnoTed/fileb0x) | 597 | a better customizable tool to embed files in go; also update embedded files remotely without restarting the server | 9 months ago |
| [go-resources](https://github.com/omeid/go-resources) | 173 | Unfancy resources embedding for Go with out of box http.FileSystem support. | 6 months ago |
| [statics](https://github.com/go-playground/statics) | 63 | :file_folder: Embeds static resources into go files for single binary compilation + works with http.FileSystem + symlinks | 5 years ago |
| [templify](https://github.com/wlbr/templify) | 26 | A tool to be used with 'go generate' to embed external template files into Go code. | 3 months ago |
| [rebed](https://github.com/soypat/rebed) | 19 | Recreates directory and files from embedded filesystem using Go 1.16 embed.FS type. | 8 months ago |
| [debme](https://github.com/leaanthony/debme) | 11 | embed.FS wrapper providing additional functionality | 5 months ago |
| [mule](https://github.com/wlbr/mule) | 9 | mule is a tool to be used with 'go generate' to embed external resources files into Go code. | 3 months ago |


### [Science and Data Analysis](#Science-and-Data-Analysis)
* Libraries for scientific computing and data analyzing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gonum](https://github.com/gonum/gonum) | 5311 | Gonum is a set of numeric libraries for the Go programming language. It contains libraries for matrices, statistics, optimization, and more | 11 days ago |
| [stats](https://github.com/montanaflynn/stats) | 2166 | A well tested and comprehensive Golang statistics library package with no dependencies. | 9 days ago |
| [plot](https://github.com/gonum/plot) | 2026 | A repository for plotting and visualizing data | 2 months ago |
| [gosl](https://github.com/cpmech/gosl) | 1622 | Linear algebra, eigenvalues, FFT, Bessel, elliptic, orthogonal polys, geometry, NURBS, numerical quadrature, 3D transfinite interpolation, random numbers, Mersenne twister, probability distributions, optimisation, differential equations. | 4 days ago |
| [streamtools](https://github.com/nytlabs/streamtools) | 1316 | tools for working with streams of data | 6 years ago |
| [go-dsp](https://github.com/mjibson/go-dsp) | 754 | Digital Signal Processing for Go | 4 years ago |
| [chart](https://github.com/vdobler/chart) | 700 | Provide basic charts in go | 5 months ago |
| [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) | 655 | DataFrames for Go: For statistics, machine-learning, and data manipulation/exploration | 22 days ago |
| [goraph](https://github.com/gyuho/goraph) | 650 | Package goraph implements graph data structure and algorithms. | 4 years ago |
| [graph](https://github.com/yourbasic/graph) | 491 | Graph algorithms and data structures | 2 months ago |
| [orb](https://github.com/paulmach/orb) | 436 | Types and utilities for working with 2d geometry in Golang | 4 days ago |
| [ewma](https://github.com/VividCortex/ewma) | 340 | Exponentially Weighted Moving Average algorithms for Go. | 3 months ago |
| [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) | 331 | 📅 Calendar heatmap inspired by GitHub contribution activity  | a month ago |
| [gohistogram](https://github.com/VividCortex/gohistogram) | 158 | Streaming approximate histograms in Go | a year ago |
| [TextRank](https://github.com/DavidBelicza/TextRank) | 145 | :wink: :cyclone: :strawberry: TextRank implementation in Golang with extendable features (summarization, phrase extraction) and multithreading (goroutine). | 4 months ago |
| [sparse](https://github.com/james-bowman/sparse) | 122 | Sparse matrix formats for linear algebra supporting scientific and machine learning applications | 4 months ago |
| [go-estimate](https://github.com/milosgajdos/go-estimate) | 77 | State estimation and filtering algorithms in Go | 3 months ago |
| [pagerank](https://github.com/alixaxel/pagerank) | 72 | Weighted PageRank implementation in Go | 5 months ago |
| [geom](https://github.com/skelterjohn/geom) | 48 | 2d geometry for golang | 4 years ago |
| [evaler](https://github.com/soniah/evaler) | 45 | Implements a simple floating point arithmetic expression evaluator in Go (golang). | 3 years ago |
| [goent](https://github.com/kzahedi/goent) | 25 | GO Implementation of Entropy Measures | 3 years ago |
| [decimal](https://github.com/db47h/decimal) | 23 | An arbitrary-precision decimal floating-point arithmetic package for Go | a year ago |
| [triangolatte](https://github.com/tchayen/triangolatte) | 23 | 2D triangulation library. Allows translating lines and polygons (both based on points) to the language of GPUs. | 3 months ago |
| [piecewiselinear](https://github.com/sgreben/piecewiselinear) | 20 | tiny linear interpolation library for go (factored out from https://github.com/sgreben/yeetgif) | a year ago |
| [GoStats](https://github.com/OGFris/GoStats) | 18 | GoStats is a go library for math statistics mostly used in ML domains, it covers most of the statistical measures functions. | 3 years ago |
| [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) | 18 | 🏝 JSONL Graph Tools | 2 days ago |
| [godesim](https://github.com/soypat/godesim) | 16 | ODE system solver made simple. For IVPs (initial value problems). | 20 days ago |
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
| [age](https://github.com/FiloSottile/age) | 9065 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 3 days ago |
| [lego](https://github.com/go-acme/lego) | 4922 | Let's Encrypt client and ACME library written in Go | 4 days ago |
| [certmagic](https://github.com/caddyserver/certmagic) | 3800 | Automatic HTTPS for any Go program: fully-managed TLS certificate issuance and renewal | 7 days ago |
| [cameradar](https://github.com/Ullaakut/cameradar) | 2751 | Cameradar hacks its way into RTSP videosurveillance cameras | 7 days ago |
| [memguard](https://github.com/awnumar/memguard) | 2012 | Secure software enclave for storage of sensitive information in memory. | 8 months ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1880 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 7 months ago |
| [secure](https://github.com/unrolled/secure) | 1839 | HTTP middleware for Go that facilitates some quick security wins. | 5 days ago |
| [themis](https://github.com/cossacklabs/themis) | 1372 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | an hour ago |
| [acra](https://github.com/cossacklabs/acra) | 827 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 5 hours ago |
| [nacl](https://github.com/kevinburke/nacl) | 514 | Pure Go implementation of the NaCL set of API's | 7 months ago |
| [ssh-vault](https://github.com/ssh-vault/ssh-vault) | 320 | 🌰  encrypt/decrypt using ssh keys | 4 months ago |
| [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) | 312 | A rest application to update firewalld rules on a linux server  | a year ago |
| [badactor](https://github.com/jaredfolkins/badactor) | 305 | BadActor.org An in-memory application driven jailer written in Go | a year ago |
| [go-password-validator](https://github.com/wagslane/go-password-validator) | 302 | Validate the Strength of a Password in Go | 7 months ago |
| [optimus-go](https://github.com/pjebs/optimus-go) | 288 | ID hashing and Obfuscation using Knuth's Algorithm | 2 years ago |
| [passlib](https://github.com/hlandau/passlib) | 256 | :key: Idiotproof golang password validation library inspired by Python's passlib | 8 months ago |
| [go-yara](https://github.com/hillu/go-yara) | 233 | Go bindings for YARA | 11 days ago |
| [simple-scrypt](https://github.com/elithrar/simple-scrypt) | 173 | A convenience library for generating, comparing and inspecting password hashes using the scrypt KDF in Go 🔑 | 7 months ago |
| [yara](https://github.com/plusvic/yara) | 125 | The pattern matching swiss knife | 2 years ago |
| [argon2pw](https://github.com/raja/argon2pw) | 88 | Argon2 password hashing package for go with constant time hash comparison | 2 months ago |
| [dongle](https://github.com/golang-module/dongle) | 62 | A simple, semantic and developer-friendly golang package for encoding&decoding and encryption&decryption | 3 months ago |
| [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) | 44 | A probably paranoid Golang utility library for securely hashing and encrypting passwords based on the Dropbox method. This implementation uses Blake2b, Scrypt and XSalsa20-Poly1305 (via NaCl SecretBox) to create secure password hashes that are also encrypted using a master passphrase. | a year ago |
| [go-generate-password](https://github.com/m1/go-generate-password) | 28 | Password generator written in Go | 3 months ago |
| [secureio](https://github.com/xaionaro-go/secureio) | 22 | An easy-to-use XChaCha20-encryption wrapper for io.ReadWriteCloser (even lossy UDP) using ECDH key exchange algorithm, ED25519 signatures and Blake3+Poly1305 checksums/message-authentication for Go (golang). Also a multiplexer. | a year ago |
| [certificates](https://github.com/mvmaasakkers/certificates) | 21 | An opinionated helper for generating tls certificates | a year ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 14 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [goArgonPass](https://github.com/dwin/goArgonPass) | 13 | goArgonPass is a Argon2 Password utility package for Go using the crypto library package Argon2 designed to be compatible with Passlib for Python and Argon2 PHP. Argon2 was the winner of the most recent Password Hashing Competition. This is designed for use anywhere password hashing and verification might be needed and is intended to replace implementations using bcrypt or Scrypt. | a year ago |
| [sslmgr](https://github.com/adrianosela/sslmgr) | 11 | A layer of abstraction the around acme/autocert certificate manager (Golang) | 2 years ago |


### [Serialization](#Serialization)
* Libraries and tools for binary serialization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/json-iterator/go) | 10075 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 8 days ago |
| [age](https://github.com/FiloSottile/age) | 9065 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 3 days ago |
| [protobuf](https://github.com/golang/protobuf) | 8061 | Go support for Google's protocol buffers | 2 months ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 5053 | Go library for decoding generic map values into native Go structures and vice versa. | 21 days ago |
| [protobuf](https://github.com/gogo/protobuf) | 4942 | [Looking for new ownership] Protocol Buffers for Go with Gadgets | 14 days ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1880 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 7 months ago |
| [go](https://github.com/ugorji/go) | 1603 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 9 days ago |
| [acra](https://github.com/cossacklabs/acra) | 827 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 5 hours ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 633 | binary serialization format | 2 months ago |
| [csvutil](https://github.com/jszwec/csvutil) | 616 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 5 days ago |
| [cbor](https://github.com/fxamacker/cbor) | 341 | CBOR codec (in Go) with CBOR tags, Go struct tags (toarray/keyasint/omitempty), float64/32/16, big.Int, and fuzz tested billions of execs for reliable RFC 7049 & RFC 8949.  | 17 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 279 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 2 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 151 | PHP session encoder/decoder written in Go | 3 years ago |
| [structomap](https://github.com/danhper/structomap) | 130 | Easily and dynamically generate maps from Go static structures | 2 years ago |
| [bambam](https://github.com/glycerine/bambam) | 62 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 5 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 47 | Asn.1 BER and DER encoding library for golang. | 3 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 36 | Golang binary decoder for mapping data into the structure | 2 months ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 16 | Converts go types no matter what | 6 months ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 16 | Fixed width file parser (encoder/decoder) in GO (golang) | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 15 | A standard way to wrap a proto message | 2 months ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 14 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [bel](https://github.com/csweichel/bel) | 14 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | a year ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 5 | A Go package for encode/decode fixed-width data | 2 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 3 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | 7 months ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 2 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | a year ago |


### [Server Applications](#Server-Applications)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/json-iterator/go) | 10075 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 8 days ago |
| [age](https://github.com/FiloSottile/age) | 9065 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 3 days ago |
| [protobuf](https://github.com/golang/protobuf) | 8061 | Go support for Google's protocol buffers | 2 months ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 5053 | Go library for decoding generic map values into native Go structures and vice versa. | 21 days ago |
| [protobuf](https://github.com/gogo/protobuf) | 4942 | [Looking for new ownership] Protocol Buffers for Go with Gadgets | 14 days ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1880 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 7 months ago |
| [go](https://github.com/ugorji/go) | 1603 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 9 days ago |
| [acra](https://github.com/cossacklabs/acra) | 827 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 5 hours ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 633 | binary serialization format | 2 months ago |
| [csvutil](https://github.com/jszwec/csvutil) | 616 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | 5 days ago |
| [cbor](https://github.com/fxamacker/cbor) | 341 | CBOR codec (in Go) with CBOR tags, Go struct tags (toarray/keyasint/omitempty), float64/32/16, big.Int, and fuzz tested billions of execs for reliable RFC 7049 & RFC 8949.  | 17 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 279 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 2 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 151 | PHP session encoder/decoder written in Go | 3 years ago |
| [structomap](https://github.com/danhper/structomap) | 130 | Easily and dynamically generate maps from Go static structures | 2 years ago |
| [bambam](https://github.com/glycerine/bambam) | 62 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 5 years ago |
| [asn1](https://github.com/Logicalis/asn1) | 47 | Asn.1 BER and DER encoding library for golang. | 3 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 36 | Golang binary decoder for mapping data into the structure | 2 months ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 16 | Converts go types no matter what | 6 months ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 16 | Fixed width file parser (encoder/decoder) in GO (golang) | 2 years ago |
| [pletter](https://github.com/vimeda/pletter) | 15 | A standard way to wrap a proto message | 2 months ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 14 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [bel](https://github.com/csweichel/bel) | 14 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | a year ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 5 | A Go package for encode/decode fixed-width data | 2 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 3 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | 7 months ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 2 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | a year ago |


### [Stream Processing](#Stream-Processing)
* Libraries and tools for stream processing and reactive programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-streams](https://github.com/reugn/go-streams) | 747 | A lightweight stream processing library for Go | 10 days ago |
| [machine](https://github.com/whitaker-io/machine) | 99 | Machine is a workflow/pipeline library for processing data | 16 hours ago |
| [stream](https://github.com/youthlin/stream) | 46 | Go Stream, like Java 8 Stream. | a year ago |


### [Template Engines](#Template-Engines)
* Libraries and tools for templating and lexing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gofpdf](https://github.com/jung-kurt/gofpdf) | 3891 | A PDF document generator with high level support for text, drawing and images | 2 days ago |
| [sprig](https://github.com/Masterminds/sprig) | 2646 | Useful template functions for Go templates. | a month ago |
| [quicktemplate](https://github.com/valyala/quicktemplate) | 2274 | Fast, powerful, yet easy to use template engine for Go. Optimized for speed, zero memory allocations in hot paths. Up to 20x faster than html/template | 2 months ago |
| [pongo2](https://github.com/flosch/pongo2) | 2085 | Django-syntax like template-engine for Go | 4 days ago |
| [hero](https://github.com/shiyanhui/hero) | 1486 | A handy, fast and powerful go template engine. | 2 years ago |
| [mustache](https://github.com/hoisie/mustache) | 1025 | The mustache template language in Go | 2 months ago |
| [amber](https://github.com/eknkc/amber) | 882 | Amber is an elegant templating engine for Go Programming Language, inspired from HAML and Jade | a year ago |
| [jet](https://github.com/CloudyKit/jet) | 847 | Jet  template engine | 20 days ago |
| [ace](https://github.com/yosssi/ace) | 804 | HTML template engine for Go | 3 years ago |
| [gorazor](https://github.com/sipin/gorazor) | 790 | Razor view engine for go | a year ago |
| [fasttemplate](https://github.com/valyala/fasttemplate) | 549 | Simple and fast template engine for Go | 10 months ago |
| [ego](https://github.com/benbjohnson/ego) | 509 | An ERB-style templating language for Go. | 4 months ago |
| [maroto](https://github.com/johnfercher/maroto) | 473 | A maroto way to create PDFs. Maroto is inspired in Bootstrap and uses gofpdf. Fast and simple. | 21 days ago |
| [raymond](https://github.com/aymerick/raymond) | 446 | Handlebars for golang | 11 days ago |
| [goview](https://github.com/foolin/goview) | 253 | Goview is a lightweight, minimalist and idiomatic template library based on golang html/template for building Go web application. | a year ago |
| [soy](https://github.com/robfig/soy) | 157 | Go implementation for Soy templates (Google Closure templates) | 2 months ago |
| [liquid](https://github.com/osteele/liquid) | 139 | A Liquid template engine in Go | a month ago |
| [velvet](https://github.com/gobuffalo/velvet) | 73 | A sweet velvety templating package | 5 years ago |
| [kasia.go](https://github.com/ziutek/kasia.go) | 72 | Templating system for HTML and other text documents - go implementation | 6 years ago |
| [extemplate](https://github.com/dannyvankooten/extemplate) | 41 | Wrapper package for Go's template/html to allow for easy file-based template inheritance. | 5 months ago |
| [gospin](https://github.com/m1/gospin) | 29 | Article spinning and spintax/spinning syntax engine written in Go, useful for A/B, testing pieces of text/articles and creating more natural conversations | 6 months ago |
| [damsel](https://github.com/dskinner/damsel) | 24 | Package damsel provides html outlining via css-selectors and common template functionality. | 6 years ago |
| [tbd](https://github.com/lucasepe/tbd) | 16 | "to be defined" - a really simple way to create text templates with placeholders | 3 months ago |


### [Testing](#Testing)
* Libraries for testing codebases and generating test data.

#### [Testing Frameworks](#Testing-Frameworks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testify](https://github.com/stretchr/testify) | 14730 | A toolkit with common assertions and mocks that plays nicely with the standard library | 6 days ago |
| [goconvey](https://github.com/smartystreets/goconvey) | 6785 | Go testing in the browser. Integrates with `go test`. Write behavioral tests in Go. | 14 days ago |
| [go-cmp](https://github.com/google/go-cmp) | 2583 | Package for comparing Go values in tests | a month ago |
| [httpexpect](https://github.com/gavv/httpexpect) | 1806 | End-to-end HTTP and REST API testing for Go. | 3 months ago |
| [godog](https://github.com/cucumber/godog) | 1497 | Cucumber for golang | 3 days ago |
| [goblin](https://github.com/franela/goblin) | 819 | Minimal and Beautiful Go testing framework | a month ago |
| [go-vcr](https://github.com/dnaeon/go-vcr) | 790 | Record and replay your HTTP interactions for fast, deterministic and accurate tests | a month ago |
| [baloo](https://github.com/h2non/baloo) | 720 | Expressive end-to-end HTTP API testing made easy in Go | 3 years ago |
| [testfixtures](https://github.com/go-testfixtures/testfixtures) | 716 | Ruby on Rails like test fixtures for Go. Write tests against a real database | a day ago |
| [gnomock](https://github.com/orlangure/gnomock) | 555 | Test your code without writing mocks with ephemeral Docker containers 📦 Setup popular services with just a couple lines of code ⏱️ No bash, no yaml, only code 💻 | 3 days ago |
| [go-mutesting](https://github.com/zimmski/go-mutesting) | 480 | Mutation testing for Go source code | 2 months ago |
| [goc](https://github.com/qiniu/goc) | 447 | A Comprehensive Coverage Testing System for The Go Programming Language | 16 hours ago |
| [gofight](https://github.com/appleboy/gofight) | 397 | Testing API Handler written in Golang. | 5 months ago |
| [testza](https://github.com/MarvinJWendt/testza) | 307 | Full-featured test framework for Go! Assertions, mocking, input testing, output capturing, and much more! 🍕 | 7 days ago |
| [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) | 306 | Run a real Postgres database locally on Linux, OSX or Windows as part of another Go application or test | 5 days ago |
| [frisby](https://github.com/hofstadter-io/frisby) | 269 | API testing framework inspired by frisby-js | 2 years ago |
| [gotest.tools](https://github.com/gotestyourself/gotest.tools) | 258 | A collection of packages to augment the go testing package and support common patterns. | 2 days ago |
| [go-testdeep](https://github.com/maxatome/go-testdeep) | 233 | Extremely flexible golang deep comparison, extends the go testing package, tests HTTP APIs and provides tests suite | 8 days ago |
| [go-carpet](https://github.com/msoap/go-carpet) | 217 | go-carpet - show test coverage in terminal for Go source files | 2 days ago |
| [endly](https://github.com/viant/endly) | 199 | End to end functional test and automation framework | 4 months ago |
| [charlatan](https://github.com/percolate/charlatan) | 195 | Go Interface Mocking Tool | 2 years ago |
| [commander](https://github.com/commander-cli/commander) | 193 | Test your command line interfaces on windows, linux and osx and nodes viá ssh and docker | 3 months ago |
| [cupaloy](https://github.com/bradleyjkemp/cupaloy) | 192 | Simple Go snapshot testing | 4 days ago |
| [dbcleaner](https://github.com/khaiql/dbcleaner) | 133 | Clean database for testing, inspired by database_cleaner for Ruby | 6 days ago |
| [gospec](https://github.com/luontola/gospec) | 115 | Testing framework for Go. Allows writing self-documenting tests/specifications, and executes them concurrently and safely isolated. [UNMAINTAINED] | 7 years ago |
| [wstest](https://github.com/posener/wstest) | 87 | go websocket client for unit testing of a websocket handler | a year ago |
| [gocrest](https://github.com/corbym/gocrest) | 82 | GoCrest - Hamcrest-like matchers for Go | a year ago |
| [testcase](https://github.com/adamluzsi/testcase) | 81 | testcase is an opinionated testing framework based on BDD principles. | 26 minutes ago |
| [jsonassert](https://github.com/kinbiko/jsonassert) | 73 | A Go test assertion library for verifying that two representations of JSON are semantically equal | 3 months ago |
| [go-hit](https://github.com/Eun/go-hit) | 55 | http integration test framework | 13 days ago |
| [gospecify](https://github.com/stesla/gospecify) | 54 | A BDD library for Go | 10 years ago |
| [restit](https://github.com/go-restit/restit) | 54 | A Go library help testing your RESTful API application | 2 years ago |
| [covergates](https://github.com/covergates/covergates) | 45 | The portal gates to coverage reports | 10 months ago |
| [gomatch](https://github.com/jfilipczyk/gomatch) | 41 | Library created for testing JSON against patterns. | 10 months ago |
| [dsunit](https://github.com/viant/dsunit) | 39 | Datastore Testibility | 2 years ago |
| [assert](https://github.com/go-playground/assert) | 35 | :exclamation:Basic Assertion Library used along side native go testing, with building blocks for custom assertions | a year ago |
| [hamcrest](https://github.com/rdrdr/hamcrest) | 27 | Hamcrest matchers for the Go programming language | 10 months ago |
| [flute](https://github.com/suzuki-shunsuke/flute) | 16 | Golang HTTP client testing framework | 11 days ago |
| [schema](https://github.com/jgroeneveld/schema) | 15 | Quick and easy expression matching for JSON schemas used in requests and responses | 2 years ago |
| [gogiven](https://github.com/corbym/gogiven) | 12 | gogiven - BDD testing framework for go that generates readable output directly from source code | 4 months ago |
| [testsql](https://github.com/zhulongcheng/testsql) | 12 | Generate test data from SQL files before testing and clear it after finished. | 2 years ago |
| [biff](https://github.com/fulldump/biff) | 11 | Bifurcation Framework for testing and use cases | 4 months ago |
| [badio](https://github.com/cavaliergopher/badio) | 10 | Extensions to Go's testing/iotest package | 6 years ago |
| [gosuite](https://github.com/pavlo/gosuite) | 10 | Test suites support for standard Go1.7 "testing" by leveraging Subtests feature | 5 years ago |
| [stop-and-go](https://github.com/elgohr/stop-and-go) | 6 | Testing helper for concurrency | 3 months ago |
| [test](https://github.com/tvastar/test) | 6 | test utilities for golang | 2 years ago |
| [trial](https://github.com/jgroeneveld/trial) | 5 | A simple assertion library for go | 2 years ago |
| [tt](https://github.com/vcaesar/tt) | 5 | Simple and colorful test tools | 2 months ago |
| [fixenv](https://github.com/rekby/fixenv) | 2 |  | 2 months ago |


#### [Mock](#Mock)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mock](https://github.com/golang/mock) | 6393 | GoMock is a mocking framework for the Go programming language. | 17 days ago |
| [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) | 3921 | Sql mock driver for golang to test database interactions | 2 days ago |
| [mockery](https://github.com/vektra/mockery) | 3066 | A mock code autogenerator for Golang | 9 days ago |
| [hoverfly](https://github.com/SpectoLabs/hoverfly) | 1804 | Lightweight service virtualization/API simulation tool for developers and testers | 5 days ago |
| [gock](https://github.com/h2non/gock) | 1518 | HTTP traffic mocking and testing made easy in Go ༼ʘ̚ل͜ʘ̚༽ | 3 months ago |
| [httpmock](https://github.com/jarcoal/httpmock) | 1240 | HTTP mocking for Golang | 11 days ago |
| [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) | 594 | A tool for generating self-contained, type-safe test doubles in go | 8 days ago |
| [minimock](https://github.com/gojuno/minimock) | 432 | Powerful mock generation tool for Go programming language | 2 months ago |
| [go-txdb](https://github.com/DATA-DOG/go-txdb) | 398 | Immutable transaction isolated sql driver for golang | 20 days ago |
| [govcr](https://github.com/seborama/govcr) | 99 | HTTP mock for Golang: record and replay HTTP/HTTPS interactions for offline testing | 2 years ago |
| [timex](https://github.com/cabify/timex) | 58 | A test-friendly replacement for golang's time package | a year ago |
| [mockhttp](https://github.com/tv42/mockhttp) | 22 | Mock object for Go http.ResponseWriter | 7 years ago |
| [go-localstack](https://github.com/elgohr/go-localstack) | 21 | Go Wrapper for using localstack | an hour ago |
| [mockit](https://github.com/pasdam/mockit) | 9 | Library that make mocking of Go functions/methods easy | 2 months ago |


#### [Fuzzing and delta-debugging/reducing/shrinking](#Fuzzing-and-delta-debugging)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-fuzz](https://github.com/dvyukov/go-fuzz) | 4187 | Randomized testing for Go | 2 months ago |
| [gofuzz](https://github.com/google/gofuzz) | 1180 | Fuzz testing for go. | 2 months ago |
| [tavor](https://github.com/zimmski/tavor) | 233 | A generic fuzzing and delta-debugging framework | 3 years ago |


#### [Selenium and browser control tools](#Selenium-and-browser-control-tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [chromedp](https://github.com/chromedp/chromedp) | 6933 | A faster, simpler way to drive browsers supporting the Chrome DevTools Protocol. | 5 days ago |
| [selenoid](https://github.com/aerokube/selenoid) | 2039 | Selenium Hub successor running browsers within containers. Scalable, immutable, self hosted Selenium-Grid on any platform with single binary. | 21 hours ago |
| [rod](https://github.com/go-rod/rod) | 1921 | A Devtools driver for web automation and scraping | 3 days ago |
| [cdp](https://github.com/mafredri/cdp) | 581 | Package cdp provides type-safe bindings for the Chrome DevTools Protocol (CDP), written in the Go programming language. | 4 months ago |
| [playwright-go](https://github.com/mxschmitt/playwright-go) | 553 | Playwright for Go a browser automation library to control Chromium, Firefox and WebKit with a single API. | 43 minutes ago |
| [ggr](https://github.com/aerokube/ggr) | 275 | A lightweight load balancer used to create big Selenium clusters | 13 days ago |


#### [Fail injection](#Fail-injection)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [failpoint](https://github.com/pingcap/failpoint) | 640 | An implementation of failpoints for Golang. | 2 months ago |


### [Text Processing](#Text-Processing)
* Libraries for parsing and manipulating texts.

#### [Specific Formats](#Specific-Formats)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [colly](https://github.com/gocolly/colly) | 15253 | Elegant Scraper and Crawler Framework for Golang | a month ago |
| [goquery](https://github.com/PuerkitoBio/goquery) | 10781 | A little like that j-thing, only in Go. | 21 days ago |
| [blackfriday](https://github.com/russross/blackfriday) | 4822 | Blackfriday: a markdown processor for Go | a month ago |
| [sh](https://github.com/mvdan/sh) | 4248 | A shell parser, formatter, and interpreter with bash support; includes shfmt | 7 days ago |
| [toml](https://github.com/BurntSushi/toml) | 3663 | TOML parser for Golang with reflection. | 10 hours ago |
| [go-humanize](https://github.com/dustin/go-humanize) | 2906 | Go Humans! (formatters for units to human friendly sizes) | a month ago |
| [bluemonday](https://github.com/microcosm-cc/bluemonday) | 2120 | bluemonday: a fast golang HTML sanitizer (inspired by the OWASP Java HTML Sanitizer) to scrub user generated content of XSS | a month ago |
| [gofeed](https://github.com/mmcdole/gofeed) | 1747 | Parse RSS, Atom and JSON feeds in Go | 23 days ago |
| [inject](https://github.com/facebookarchive/inject) | 1352 | Package inject provides a reflect based injector. | 3 years ago |
| [go-toml](https://github.com/pelletier/go-toml) | 1125 | Go library for the TOML file format | 2 days ago |
| [commonregex](https://github.com/mingrammer/commonregex) | 784 | 🍫 A collection of common regular expressions for Go | 2 years ago |
| [slug](https://github.com/gosimple/slug) | 743 | URL-friendly slugify with multiple languages support. | 5 days ago |
| [dataflowkit](https://github.com/slotix/dataflowkit) | 496 | Extract structured data from web sites. Web sites scraping.   | a year ago |
| [mxj](https://github.com/clbanning/mxj) | 489 | Decode / encode XML to/from map[string]interface{} (or JSON); extract values with dot-notation paths and wildcards.  Replaces x2j and j2x packages. | 8 months ago |
| [gographviz](https://github.com/awalterschulze/gographviz) | 453 | Parses the Graphviz DOT language in golang | 3 months ago |
| [htmlquery](https://github.com/antchfx/htmlquery) | 424 | htmlquery is golang XPath package for HTML query. | a month ago |
| [gommon](https://github.com/labstack/gommon) | 417 | Common packages for Go | 11 days ago |
| [go-runewidth](https://github.com/mattn/go-runewidth) | 396 | wcwidth for golang | 13 days ago |
| [omniparser](https://github.com/jf-tech/omniparser) | 390 | omniparser: a native Golang ETL streaming parser and transform library for CSV, JSON, XML, EDI, text, etc. | 2 months ago |
| [gotext](https://github.com/leonelquinteros/gotext) | 310 | Go (Golang) GNU gettext utilities package  | 2 months ago |
| [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) | 280 | ⚙️ Convert HTML to Markdown. Even works with entire websites and can be extended through rules. | 2 months ago |
| [goq](https://github.com/andrewstuart/goq) | 203 | A declarative struct-tag-based HTML unmarshaling or scraping package for Go built on top of the goquery library | 2 months ago |
| [goribot](https://github.com/zhshch2002/goribot) | 203 | [Crawler/Scraper for Golang]🕷A lightweight distributed friendly Golang crawler framework.一个轻量的分布式友好的 Golang 爬虫框架。 | a year ago |
| [go-nmea](https://github.com/adrianmo/go-nmea) | 157 | A NMEA parser library in pure Go | 2 months ago |
| [github_flavored_markdown](https://github.com/shurcooL/github_flavored_markdown) | 136 | GitHub Flavored Markdown renderer with fenced code block highlighting, clickable header anchor links. | 8 months ago |
| [gospider](https://github.com/zhshch2002/gospider) | 132 | ⚡ Light weight Golang spider framework , 轻量的 Golang 爬虫框架 | 8 months ago |
| [sdp](https://github.com/gortc/sdp) | 111 | RFC 4566 SDP implementation in go | 2 years ago |
| [podcast](https://github.com/eduncan911/podcast) | 98 | iTunes and RSS 2.0 Podcast Generator in Golang | a year ago |
| [go-zero-width](https://github.com/trubitsyn/go-zero-width) | 97 | Zero-width character detection and removal for Go | a year ago |
| [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) | 87 | EditorConfig Core written in Go | 3 days ago |
| [align](https://github.com/Guitarbum722/align) | 71 | A general purpose application and library for aligning text. | 2 months ago |
| [go-slugify](https://github.com/mozillazg/go-slugify) | 69 | Pretty Slug. | 2 years ago |
| [go-vcard](https://github.com/emersion/go-vcard) | 63 | A Go library to parse and format vCard | 6 months ago |
| [genex](https://github.com/alixaxel/genex) | 61 | Genex package for Go | 2 years ago |
| [goregen](https://github.com/zach-klippenstein/goregen) | 61 | randexp for Go. | 4 months ago |
| [did](https://github.com/ockam-network/did) | 56 | A golang package to work with Decentralized Identifiers (DIDs)  | 10 months ago |
| [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) | 54 | Encoding and decoding for fixed-width formatted data | 5 months ago |
| [guesslanguage](https://github.com/endeveit/guesslanguage) | 53 | Guess the natural language of a text in Go | 4 years ago |
| [allot](https://github.com/sbstjn/allot) | 49 | Parse placeholder and wildcard text commands | 7 months ago |
| [pagser](https://github.com/foolin/pagser) | 42 | Pagser is a simple, extensible, configurable parse and deserialize html page to struct based on goquery and struct tags for golang crawler | 2 years ago |
| [bafi](https://github.com/mmalcek/bafi) | 39 | Universal JSON, BSON, YAML, CSV, XML converter with templates | 15 days ago |
| [gonameparts](https://github.com/polera/gonameparts) | 33 | Takes a full name and splits it into individual name parts | 2 years ago |
| [slugify](https://github.com/avelino/slugify) | 27 | A Go slugify application that handles string | 4 years ago |
| [normalize](https://github.com/avito-tech/normalize) | 22 |  | 7 months ago |
| [codetree](https://github.com/aerogo/codetree) | 18 | :evergreen_tree: Parses indented code and returns a tree structure. | 2 years ago |
| [enca](https://github.com/endeveit/enca) | 11 | Minimal cgo bindings for libenca | 6 years ago |
| [syndfeed](https://github.com/zhengchun/syndfeed) | 7 | A syndication feed parser for Atom 1.0 and RSS 2.0 in Go | 4 years ago |
| [bbConvert](https://github.com/CalebQ42/bbConvert) | 6 | Converter from BBCode to HTML | 5 years ago |
| [doi](https://github.com/hscells/doi) | 6 | Parse and check doi objects in go. | 4 years ago |
| [ltsv](https://github.com/Wing924/ltsv) | 5 | High performance LTSV (Labeled Tab Separeted Value) reader for Go. | 2 years ago |
| [encoding](https://github.com/ake-persson/encoding) | 4 | Go package provides a generic interface to encoders and decoders | 2 years ago |
| [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) | 3 |  | 7 months ago |
| [go-output-format](https://github.com/drewstinnett/go-output-format) | 2 | Output go objects in standard formats, such as YAML, JSON, etc | a month ago |


#### [Utility](#Utility)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xurls](https://github.com/mvdan/xurls) | 843 | Extract urls from text | 2 months ago |
| [gotabulate](https://github.com/bndr/gotabulate) | 273 | Gotabulate - Easily pretty-print your tabular data with Go | 9 months ago |
| [radix](https://github.com/yourbasic/radix) | 172 | A fast string sorting algorithm (MSD radix sort) | 4 years ago |
| [regroup](https://github.com/oriser/regroup) | 97 | Match regex group into go struct using struct tags and automatic parsing | 4 months ago |
| [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) | 40 | A sanitization-based swear filter for Go. | 5 months ago |
| [parth](https://github.com/codemodus/parth) | 40 | Path parsing for segment unmarshaling and slicing. | 3 years ago |
| [xj2go](https://github.com/wk30/xj2go) | 21 | Convert xml and json to go struct | a month ago |
| [tagify](https://github.com/zoomio/tagify) | 18 | Tagify produces a set of tags from a given source. Source can be either an HTML page, a Markdown document or a plain text. Supports English, Russian, Chinese, Hindi, Spanish, Arabic, Japanese, German, Hebrew, French and Korean languages. | 5 days ago |
| [kace](https://github.com/codemodus/kace) | 17 | Common case conversions covering common initialisms. | 3 years ago |
| [TySug](https://github.com/Dynom/TySug) | 10 | A project around helping to prevent typing typos. TySug (Typo Suggestions) suggests alternative words with respect to keyboard layouts | a year ago |
| [parseargs-go](https://github.com/txgruppi/parseargs-go) | 8 | A string argument parser that understands quotes and backslashes | 5 years ago |
| [textwrap](https://github.com/isbm/textwrap) | 2 | Port of Python's "textwrap" module to Go | 2 years ago |


### [Third-party APIs](#Third-party-APIs)
* Libraries for accessing third party APIs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-github](https://github.com/google/go-github) | 7937 | Go library for accessing the GitHub API | 9 hours ago |
| [aws-sdk-go](https://github.com/aws/aws-sdk-go) | 7213 | AWS SDK for the Go programming language. | 5 hours ago |
| [slack](https://github.com/slack-go/slack) | 3701 | Slack API in Go - community-maintained fork created by the original author, @nlopes | a day ago |
| [google-api-go-client](https://github.com/googleapis/google-api-go-client) | 2827 | Auto-generated Google APIs for Go. | an hour ago |
| [google-cloud-go](https://github.com/googleapis/google-cloud-go) | 2693 | Google Cloud Client Libraries for Go. | 3 minutes ago |
| [discordgo](https://github.com/bwmarrin/discordgo) | 2484 |  (Golang) Go bindings for Discord | 10 days ago |
| [stripe-go](https://github.com/stripe/stripe-go) | 1451 | Go library for the Stripe API.     | 3 hours ago |
| [minio-go](https://github.com/minio/minio-go) | 1450 | MinIO Client SDK for Go | 8 hours ago |
| [go-twitter](https://github.com/dghubble/go-twitter) | 1341 | Go Twitter REST and Streaming API v1.1 | 10 hours ago |
| [anaconda](https://github.com/ChimeraCoder/anaconda) | 1101 | A Go client library for the Twitter 1.1 API | 4 months ago |
| [facebook](https://github.com/huandu/facebook) | 1015 | A Facebook Graph API SDK For Go. | 7 months ago |
| [go-jira](https://github.com/andygrunwald/go-jira) | 1008 | Go client library for Atlassian Jira | 20 days ago |
| [githubv4](https://github.com/shurcooL/githubv4) | 822 | Package githubv4 is a client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql). | a month ago |
| [webhooks](https://github.com/go-playground/webhooks) | 674 | :fishing_pole_and_fish: Webhook receiver for GitHub, Bitbucket, GitLab, Gogs | 8 hours ago |
| [paypal](https://github.com/plutov/paypal) | 452 | Golang client for PayPal REST API | 5 days ago |
| [geo-golang](https://github.com/codingsince1985/geo-golang) | 417 | Go library to access geocoding and reverse geocoding APIs | 3 months ago |
| [ethrpc](https://github.com/onrik/ethrpc) | 216 | Golang client for ethereum json rpc api | a year ago |
| [go-marathon](https://github.com/gambol99/go-marathon) | 197 | A GO API library for working with Marathon | a year ago |
| [trello](https://github.com/adlio/trello) | 185 | Trello API wrapper for Go | 5 months ago |
| [twitter-scraper](https://github.com/n0madic/twitter-scraper) | 146 | Scrape the Twitter Frontend API without authentication with Golang. | 7 days ago |
| [medium-sdk-go](https://github.com/Medium/medium-sdk-go) | 132 | A Golang SDK for Medium's OAuth2 API | 3 years ago |
| [gostorm](https://github.com/jsgilmore/gostorm) | 128 | GoStorm is a Go library that implements the communications protocol required to write Storm spouts and Bolts in Go that communicate with the Storm shells. | 4 years ago |
| [go-trending](https://github.com/andygrunwald/go-trending) | 117 | Go library for accessing trending repositories and developers at Github. | 21 days ago |
| [hipchat](https://github.com/daneharrigan/hipchat) | 111 | A golang package to communicate with HipChat over XMPP | 4 years ago |
| [wit-go](https://github.com/wit-ai/wit-go) | 110 | Go client for wit.ai HTTP API | 3 months ago |
| [pushover](https://github.com/gregdel/pushover) | 107 | Go wrapper for the Pushover API | a month ago |
| [hipchat](https://github.com/andybons/hipchat) | 105 | This project implements a Go client library for the Hipchat API. | 6 years ago |
| [cachet](https://github.com/andygrunwald/cachet) | 89 | Go(lang) client library for Cachet (open source status page system). | 5 months ago |
| [igdb](https://github.com/Henry-Sarabia/igdb) | 69 | Go client for the Internet Game Database API | 8 months ago |
| [gosip](https://github.com/koltyakov/gosip) | 66 | ⚡️ SharePoint authentication, HTTP client & fluent API wrapper for Go (Golang) | 18 hours ago |
| [simples3](https://github.com/rhnvrm/simples3) | 66 | Simple no frills AWS S3 Golang Library using REST with V4 Signing (without AWS Go SDK) | 4 months ago |
| [go-circleci](https://github.com/jszwedko/go-circleci) | 62 | Go library for interacting with CircleCI | 2 years ago |
| [go-unsplash](https://github.com/hbagdi/go-unsplash) | 59 | Go Client for the Unsplash API  | 8 months ago |
| [gogtrends](https://github.com/groovili/gogtrends) | 59 | Unofficial Google Trends API for Go | 2 months ago |
| [clarifai-go](https://github.com/Clarifai/clarifai-go) | 55 | DEPRECATED: please use https://github.com/Clarifai/clarifai-go-grpc | 4 years ago |
| [megos](https://github.com/andygrunwald/megos) | 54 | Go(lang) client library for accessing information of an Apache Mesos cluster. | 5 months ago |
| [go-amazon-product-advertising-api](https://github.com/ngs/go-amazon-product-advertising-api) | 51 | Go Client Library for Amazon Product Advertising API | 4 years ago |
| [gads](https://github.com/emiddleton/gads) | 49 | Google Adwords API for Go | 2 years ago |
| [ynab.go](https://github.com/brunomvsouza/ynab.go) | 48 | Go client for the YNAB API. Unofficial. It covers 100% of the resources made available by the YNAB API. | 2 months ago |
| [uptimerobot](https://github.com/bitfield/uptimerobot) | 46 | Client library for UptimeRobot v2 API | a year ago |
| [go-xkcd](https://github.com/nishanths/go-xkcd) | 44 | xkcd.com API client in Go | 20 days ago |
| [golang-tmdb](https://github.com/cyruzin/golang-tmdb) | 44 | This is a Golang wrapper for working with TMDb API. It aims to support version 3. | 20 days ago |
| [gomusicbrainz](https://github.com/michiwend/gomusicbrainz) | 44 | a Go (Golang) MusicBrainz WS2 client library - work in progress | 9 months ago |
| [mixpanel](https://github.com/dukex/mixpanel) | 42 | Golang Mixpanel Client | 3 months ago |
| [fcm](https://github.com/maddevsio/fcm) | 41 | Firebase Cloud Messaging for application servers implemented using the Go programming language. | 2 years ago |
| [go-spotify](https://github.com/rapito/go-spotify) | 39 | Go library for the Spotify Web API | a year ago |
| [golyrics](https://github.com/mamal72/golyrics) | 36 | A simple Go package to fetch lyrics from Wikia | 3 years ago |
| [go-postman-collection](https://github.com/rbretecher/go-postman-collection) | 32 | Go module to work with Postman Collections | 3 months ago |
| [translate](https://github.com/nuveo/translate) | 31 | Go online translation package | 6 years ago |
| [gami](https://github.com/bit4bit/gami) | 29 | GO - Asterisk AMI Interface | 3 years ago |
| [gcm](https://github.com/TheOrioli/gcm) | 29 | Google Cloud Messaging for application servers implemented using the Go programming language. | 6 years ago |
| [airtable](https://github.com/mehanizm/airtable) | 28 | Simple golang airtable API wrapper | a month ago |
| [patreon-go](https://github.com/mxpv/patreon-go) | 26 | Patreon Go API client | 2 years ago |
| [go-myanimelist](https://github.com/nstratos/go-myanimelist) | 24 | Go library for accessing the MyAnimeList API: https://myanimelist.net/apiconfig/references/api/v2 | 2 months ago |
| [go-steam](https://github.com/sostronk/go-steam) | 24 | Go library for querying Source servers | 2 months ago |
| [lastpass-go](https://github.com/ansd/lastpass-go) | 22 | Golang client for LastPass | 7 days ago |
| [go-shopify](https://github.com/rapito/go-shopify) | 22 | Simple Shopify API for the Go Programming Language | a year ago |
| [go-imgur](https://github.com/koffeinsource/go-imgur) | 21 | Go library to use the imgur.com API | 7 months ago |
| [go-twitch](https://github.com/knspriggs/go-twitch) | 21 | A golang client for the Twitch v3 API - public APIs only (for now) | 4 years ago |
| [google-play-scraper](https://github.com/n0madic/google-play-scraper) | 20 | Golang scraper to get data from Google Play Store | 21 days ago |
| [codeship-go](https://github.com/codeship/codeship-go) | 18 | Go library for accessing the Codeship API v2 | a year ago |
| [brewerydb](https://github.com/naegelejd/brewerydb) | 17 | Go library for http://www.brewerydb.com/ API | 6 years ago |
| [textbelt](https://github.com/farmergreg/textbelt) | 17 | golang library for textbelt.com | 6 years ago |
| [coinpaprika-api-go-client](https://github.com/coinpaprika/coinpaprika-api-go-client) | 13 | Go client library for interacting with Coinpaprika's API | a year ago |
| [go-hacknews](https://github.com/PaulRosset/go-hacknews) | 13 | 📟  Tiny utility Go client for HackerNews API. | 4 years ago |
| [go-aws-news](https://github.com/circa10a/go-aws-news) | 12 | Go app + library to fetch what's new from AWS | 3 months ago |
| [go-google-analytics](https://github.com/chonthu/go-google-analytics) | 12 | Simple Reporting for Google Analytics | 6 years ago |
| [device-check-go](https://github.com/rinchsan/device-check-go) | 10 | :iphone: iOS DeviceCheck SDK for Go - query and modify the per-device bits | a month ago |
| [go-here](https://github.com/abdullahselek/go-here) | 10 | Go client library around the HERE location based APIs. | a year ago |
| [gopaapi5](https://github.com/utekaravinash/gopaapi5) | 10 | Go Client Library for Amazon's Product Advertising API 5.0 | 2 years ago |
| [smitego](https://github.com/sergiotapia/smitego) | 10 | SmiteGo is an API wrapper for the Smite game from HiRez. It is written in Go! | 7 years ago |
| [gomalshare](https://github.com/MonaxGT/gomalshare) | 9 | Go library MalShare API | 3 years ago |
| [go-openproject](https://github.com/manuelbcd/go-openproject) | 8 | Go client library for OpenProject | 7 months ago |
| [go-sophos](https://github.com/esurdam/go-sophos) | 8 | Sophos UTM 9 REST API Client in Golang | a year ago |
| [rrdaclient](https://github.com/Omie/rrdaclient) | 8 | Go bindings for RRDA https://github.com/fcambus/rrda | 7 years ago |
| [go-google-email-audit-api](https://github.com/ngs/go-google-email-audit-api) | 7 | Go Client Library for G Suite Email Audit API | 5 years ago |
| [go-sptrans](https://github.com/sergioaugrod/go-sptrans) | 6 | Go client library for the SPTrans Olho Vivo API. :bus: | a year ago |
| [gumblr](https://github.com/mattcunningham/gumblr) | 6 | A Go Wrapper for the Tumblr v2 API | 5 years ago |
| [go-zooz](https://github.com/gojuno/go-zooz) | 6 | Zooz API client for Go | 5 months ago |
| [go-chronos](https://github.com/axelspringer/go-chronos) | 4 | :dancers: Go Chronos 3.x REST API Client | 4 years ago |
| [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) | 4 | Golang package which provides http Handlers to serve the swagger ui | 5 months ago |
| [libgoffi](https://github.com/clevabit/libgoffi) | 4 | libgoffi - libffi adapter library for Go | a year ago |
| [kanka](https://github.com/Henry-Sarabia/kanka) | 3 | Go client for the Kanka API | a year ago |
| [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) | 3 | This is RAWG SDK GO. This library contains methods for interacting with RAWG API. | 4 months ago |
| [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) | 2 | Golang SDK for AppStore Connect API (Unofficial) | 9 months ago |
| [go-restcountries](https://github.com/chriscross0/go-restcountries) | 2 | Go wrapper for the REST Countries API. | 19 days ago |
| [playlyfe-go-sdk](https://github.com/playlyfe/playlyfe-go-sdk) | 1 | This is the official Playlyfe Golang Sdk | 6 years ago |
| [tripadvisor-golang](https://github.com/mrbenosborne/tripadvisor-golang) | 1 | A TripAdvisor API wrapper for Golang. | 2 years ago |
| [vl-go](https://github.com/verifid/vl-go) | 1 | Go client library around the VerifID identity verification layer API. | 6 months ago |


### [Utilities](#Utilities)
* General utilities and tools to make your life easier.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fzf](https://github.com/junegunn/fzf) | 40287 | :cherry_blossom: A command-line fuzzy finder | 4 days ago |
| [hub](https://github.com/github/hub) | 21352 | A command-line tool that makes git easier to use with GitHub. | a month ago |
| [ctop](https://github.com/bcicen/ctop) | 12110 | Top-like interface for container metrics | 22 days ago |
| [sqlx](https://github.com/jmoiron/sqlx) | 11058 | general purpose extensions to golang's database/sql | a month ago |
| [wuzz](https://github.com/asciimoo/wuzz) | 9826 | Interactive cli tool for HTTP inspection | 3 months ago |
| [goreleaser](https://github.com/goreleaser/goreleaser) | 9070 | Deliver Go binaries as fast and easily as possible | 4 hours ago |
| [usql](https://github.com/xo/usql) | 6828 | Universal command-line interface for SQL databases | 10 days ago |
| [peco](https://github.com/peco/peco) | 6591 | Simplistic interactive filtering tool | 4 months ago |
| [godropbox](https://github.com/dropbox/godropbox) | 3983 | Common libraries for writing Go services/applications. | a year ago |
| [hystrix-go](https://github.com/afex/hystrix-go) | 3442 | Netflix's Hystrix latency and fault tolerance library, for Go  | 2 months ago |
| [go-funk](https://github.com/thoas/go-funk) | 3003 | A modern Go utility library which provides helpers (map, find, contains, filter, ...) | 3 days ago |
| [goreporter](https://github.com/qax-os/goreporter) | 2924 | A Golang tool that does static analysis, unit testing, code review and generate code quality report. | 3 years ago |
| [panicparse](https://github.com/maruel/panicparse) | 2882 | Crash your app in style (Golang) | 23 days ago |
| [minify](https://github.com/tdewolff/minify) | 2807 | Go minifiers for web formats | a month ago |
| [mc](https://github.com/minio/mc) | 1941 | MinIO Client is a replacement for ls, cp, mkdir, diff and rsync commands for filesystems and object storage. | 7 hours ago |
| [storm](https://github.com/asdine/storm) | 1806 | Simple and powerful toolkit for BoltDB | 6 months ago |
| [mergo](https://github.com/imdario/mergo) | 1770 | Mergo: merging Go structs and maps since 2013. | 6 days ago |
| [spinner](https://github.com/briandowns/spinner) | 1614 | Go (golang) package with 80 configurable terminal spinner/progress indicators. | 5 months ago |
| [mole](https://github.com/davrodpin/mole) | 1512 | CLI application to create ssh tunnels focused on resiliency and user experience. | a month ago |
| [filetype](https://github.com/h2non/filetype) | 1436 | Fast, dependency-free Go package to infer binary file types based on the magic numbers header signature | 2 months ago |
| [boilr](https://github.com/tmrts/boilr) | 1405 | :zap: boilerplate template manager that generates files or directories from template repositories | 4 months ago |
| [jump](https://github.com/gsamokovarov/jump) | 1263 | Jump helps you navigate faster by learning your habits. ✌️ | a month ago |
| [cli](https://github.com/create-go-app/cli) | 1145 | ✨ Create a new production-ready project with backend, frontend and deploy automation by running one CLI command! | 24 days ago |
| [circuitbreaker](https://github.com/rubyist/circuitbreaker) | 966 | Circuit Breakers in Go | 2 years ago |
| [gtm](https://github.com/git-time-metric/gtm) | 884 | Simple, seamless, lightweight time tracking for Git | a year ago |
| [immortal](https://github.com/immortal/immortal) | 719 | ⭕  A *nix cross-platform (OS agnostic) supervisor | a year ago |
| [hostctl](https://github.com/guumaster/hostctl) | 697 | Your dev tool to manage /etc/hosts like a pro! | 10 days ago |
| [circuit](https://github.com/cep21/circuit) | 614 | An efficient and feature complete Hystrix like Go implementation of the circuit breaker pattern. | 2 months ago |
| [mimetype](https://github.com/gabriel-vasile/mimetype) | 607 | A fast Golang library for media type and file extension detection, based on magic numbers | 8 hours ago |
| [htcat](https://github.com/htcat/htcat) | 538 | Parallel and Pipelined HTTP GET Utility | 3 years ago |
| [ergo](https://github.com/cristianoliveira/ergo) | 485 | The management of multiple apps running over different ports made easy | 4 months ago |
| [godaemon](https://github.com/VividCortex/godaemon) | 481 | Daemonize Go applications deviously. | 5 months ago |
| [koazee](https://github.com/wesovilabs/koazee) | 476 | A StreamLike, Immutable, Lazy Loading and smart Golang Library to deal with slices. | a year ago |
| [go-dry](https://github.com/ungerik/go-dry) | 471 | DRY (don't repeat yourself) package for Go | 9 months ago |
| [gopencils](https://github.com/bndr/gopencils) | 439 | Easily consume REST APIs with Go (golang) | 3 years ago |
| [scany](https://github.com/georgysavva/scany) | 425 | Library for scanning data from a database into Go structs and more | 12 hours ago |
| [delve](https://github.com/derekparker/delve) | 409 | Delve is a debugger for the Go programming language. | 12 days ago |
| [request](https://github.com/mozillazg/request) | 400 | A developer-friendly HTTP request library for Gopher. | 2 years ago |
| [gubrak](https://github.com/novalagung/gubrak) | 380 | ⚙️ Golang functional utility library with syntactic sugar. It's like lodash, but for Go | a year ago |
| [deepcopier](https://github.com/ulule/deepcopier) | 367 | simple struct copying for golang | 2 years ago |
| [clockwork](https://github.com/jonboulle/clockwork) | 357 | a fake clock for golang | a year ago |
| [go-rate](https://github.com/beefsack/go-rate) | 342 | A timed rate limiter for Go | a year ago |
| [retry](https://github.com/kamilsk/retry) | 312 | ♻️ The most advanced interruptible mechanism to perform actions repetitively until successful. | 9 months ago |
| [gohper](https://github.com/cosiner/gohper) | 255 | [UNMATAINED] common libs here. | 4 years ago |
| [serve](https://github.com/syntaqx/serve) | 251 | 🍽️ a static http server anywhere you need one. | 4 months ago |
| [scan](https://github.com/blockloop/scan) | 232 | Scan database/sql rows directly to structs, slices, and primitive types | 24 days ago |
| [go-trigger](https://github.com/sadlil/go-trigger) | 228 | A Global event triggerer for golang. Defines functions as event with id string. Trigger the event anywhere from your project. | 5 years ago |
| [util](https://github.com/shomali11/util) | 223 | A collection of useful utility functions | 2 years ago |
| [gotenv](https://github.com/subosito/gotenv) | 207 | Load environment variables from `.env` or `io.Reader` in Go. | 2 months ago |
| [grofer](https://github.com/pesos/grofer) | 182 | A system and resource monitoring tool written in Golang! | 22 days ago |
| [death](https://github.com/vrecan/death) | 173 | Managing go application shutdown with signals. | 7 months ago |
| [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) | 173 | go-bind-plugin generates API for exported plugin symbols (-buildmode=plugin) - go1.8+ only (http://golang.org/pkg/plugin) | 2 years ago |
| [toolbox](https://github.com/viant/toolbox) | 168 | Toolbox - go utility library | 3 months ago |
| [moldova](https://github.com/StabbyCutyou/moldova) | 161 | A lightweight templating system for generating random data | 4 years ago |
| [rerun](https://github.com/ivpusic/rerun) | 161 | Configurable recompiling and rerunning go apps when source changes | 4 years ago |
| [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) | 160 | go-sitemap-generator is the easiest way to generate Sitemaps in Go | 2 months ago |
| [apm](https://github.com/topfreegames/apm) | 155 | APM is a process manager for Golang applications. | 5 years ago |
| [robustly](https://github.com/VividCortex/robustly) | 151 | Run functions resiliently in Go, catching and restarting panics | 7 months ago |
| [chyle](https://github.com/antham/chyle) | 139 | Changelog generator : use a git repository and various data sources and publish the result on external services | 15 days ago |
| [changie](https://github.com/miniscruff/changie) | 137 | Automated changelog tool for preparing releases with lots of customization options | 4 days ago |
| [mani](https://github.com/alajmo/mani) | 137 | CLI tool to help you manage multiple repositories | 5 days ago |
| [countries](https://github.com/biter777/countries) | 132 | Countries - ISO 3166 (ISO3166-1, ISO3166, Digit, Alpha-2 and Alpha-3) countries codes and names (on eng and rus), ISO 4217 currency designators, ITU-T E.164 IDD calling phone codes, countries capitals, UN M.49 regions codes, ccTLD countries domains, IOC/NOC and FIFA letters codes, VERY FAST, NO maps[], NO slices[], NO init() funcs, NO external links/files/data, NO interface{}, NO specific dependencies, Databases/JSON/GOB/XML/CSV compatible, Emoji countries flags and currencies support, full support ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR and ccTLD standarts. | 12 days ago |
| [onecache](https://github.com/adelowo/onecache) | 125 | One caching API, Multiple backends | a year ago |
| [go-bsdiff](https://github.com/gabstv/go-bsdiff) | 123 | Pure Go bsdiff and bspatch libraries and CLI tools. | 3 years ago |
| [lrserver](https://github.com/jaschaephraim/lrserver) | 119 | LiveReload server for Go [golang] | 4 years ago |
| [clipboard](https://github.com/golang-design/clipboard) | 111 | 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)  | 2 months ago |
| [go-pattern-match](https://github.com/alexpantyukhin/go-pattern-match) | 97 | Pattern matchings for Go. | a year ago |
| [cryptgo](https://github.com/Gituser143/cryptgo) | 96 | A terminal application to watch crypto prices! | a month ago |
| [sorty](https://github.com/jfcg/sorty) | 93 | Fast Concurrent / Parallel Sorting in Go | 5 days ago |
| [nostromo](https://github.com/pokanop/nostromo) | 90 | CLI for building powerful aliases | a month ago |
| [goseaweedfs](https://github.com/linxGnu/goseaweedfs) | 89 | A complete Golang client for SeaweedFS | 15 days ago |
| [mssqlx](https://github.com/linxGnu/mssqlx) | 89 | Database client library, proxy for any master slave, master master structures. Lightweight, performant and auto balancing in mind. | 2 months ago |
| [xferspdy](https://github.com/monmohan/xferspdy) | 89 | Xferspdy provides binary diff and patch library in golang. [Mentioned in Awesome Go, https://github.com/avelino/awesome-go] | 7 months ago |
| [go-health](https://github.com/Talento90/go-health) | 85 | :heart: Health check your applications and dependencies | 3 years ago |
| [pm](https://github.com/VividCortex/pm) | 78 | Processlist manager with TCP listener | a year ago |
| [rospo](https://github.com/ferama/rospo) | 78 | 🐸 Simple and reliable ssh tunnels with embedded ssh server | 12 days ago |
| [repeat](https://github.com/ssgreg/repeat) | 77 | Go implementation of different backoff strategies useful for retrying operations and heartbeating. | a year ago |
| [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) | 76 | Golang Mongodb Pagination for official mongodb/mongo-go-driver package which supports both normal queries and Aggregation pipelines with all information like Total records, Page, Per Page, Previous, Next, Total Page and query results. | 7 days ago |
| [cmd](https://github.com/commander-cli/cmd) | 71 | A simple package to execute shell commands on linux, windows and osx | a year ago |
| [mimemagic](https://github.com/zRedShift/mimemagic) | 69 | Powerful and versatile MIME sniffing package using pre-compiled glob patterns, magic number signatures, XML document namespaces, and tree magic for mounted volumes, generated from the XDG shared-mime-info database. | 8 months ago |
| [netbug](https://github.com/e-dard/netbug) | 69 | Package netbug provides a handler for registering profilers on your own ServeMux. | 6 years ago |
| [unis](https://github.com/esemplastic/unis) | 68 | UNIS: A Common Architecture for String Utilities within the Go Programming Language. | 5 years ago |
| [handy](https://github.com/miguelpragier/handy) | 66 | GO Golang Utilities and helpers like validators and string formatters | a year ago |
| [multitick](https://github.com/VividCortex/multitick) | 66 | A multiplexor for aligned time.Time tickers in Go | 7 months ago |
| [goreadability](https://github.com/philipjkim/goreadability) | 62 | Webpage summary extractor using Facebook Open Graph and arc90's readability | 3 years ago |
| [minquery](https://github.com/icza/minquery) | 60 | MongoDB / mgo query that supports efficient pagination (cursors to continue listing documents where we left off). | 4 months ago |
| [go-astitodo](https://github.com/asticode/go-astitodo) | 59 | Parse TODOs in your GO code | a year ago |
| [goval](https://github.com/maja42/goval) | 58 | Expression evaluation in golang | 9 months ago |
| [pgo](https://github.com/arthurkushman/pgo) | 57 | Go library for PHP community with convenient functions | 2 months ago |
| [limiters](https://github.com/mennanov/limiters) | 56 | Golang rate limiters for distributed applications | 3 months ago |
| [golog](https://github.com/mlimaloureiro/golog) | 55 | Easy and simple CLI time tracker for your tasks | 3 years ago |
| [go-lock](https://github.com/viney-shih/go-lock) | 51 | go-lock is a lock library implementing read-write mutex and read-write trylock without starvation | 4 months ago |
| [copy-pasta](https://github.com/jutkko/copy-pasta) | 50 | Universal copy paste service, works across different machines! | a year ago |
| [retry](https://github.com/thedevsaddam/retry) | 50 | Simple and easy retry mechanism package for Go | 10 months ago |
| [beyond](https://github.com/wesovilabs/beyond) | 47 | The Go library that will drive you to AOP world! | 2 months ago |
| [filter](https://github.com/gookit/filter) | 47 | ⏳ Provide filtering, sanitizing, and conversion of Golang data. 提供对Golang数据的过滤，净化，转换。 | a month ago |
| [golarm](https://github.com/msempere/golarm) | 46 | Fire alarms with system events | 6 years ago |
| [slice](https://github.com/psampaz/slice) | 45 | Type-safe functions for common Go slice operations | 2 years ago |
| [dbt](https://github.com/nikogura/dbt) | 44 | Dynamic Binary Toolkit- A framework for running self-updating signed binaries from a central, trusted repository. | 8 months ago |
| [goback](https://github.com/carlescere/goback) | 44 | Golang simple exponential backoff package. | 8 months ago |
| [retry-go](https://github.com/rafaeljesus/retry-go) | 43 | Retrying made simple and easy for golang :repeat:  | 3 years ago |
| [intrinsic](https://github.com/mengzhuo/intrinsic) | 42 | Provide Golang native SIMD intrinsics on x86/amd64 platform | 4 years ago |
| [gpath](https://github.com/tenntenn/gpath) | 41 | gpath is a Go package to access a field by a path using reflect pacakge | 4 years ago |
| [go-httpheader](https://github.com/mozillazg/go-httpheader) | 36 | A Go library for encoding structs into Header fields. | 10 months ago |
| [myhttp](https://github.com/inancgumus/myhttp) | 35 | Simplest HTTP GET requester for Go with timeout support | 4 years ago |
| [equalizer](https://github.com/reugn/equalizer) | 33 | A rate limiters package for Go | 9 months ago |
| [evaluator](https://github.com/nullne/evaluator) | 33 |  | 4 months ago |
| [gostrutils](https://github.com/ik5/gostrutils) | 32 | Collections of string utils I have created over the years | 2 months ago |
| [rclient](https://github.com/zpatrick/rclient) | 32 | Minimalistic REST client for Go applications | 2 years ago |
| [backscanner](https://github.com/icza/backscanner) | 30 | A scanner similar to bufio.Scanner, but it reads and returns lines in reverse order, starting at a given position and going backward. | a month ago |
| [set](https://github.com/nofeaturesonlybugs/set) | 29 | Package set is a small wrapper around the official reflect package that facilitates loose type conversion and assignment into native Go types. | a month ago |
| [slicer](https://github.com/leaanthony/slicer) | 29 | Utility class for handling slices | 3 months ago |
| [tome](https://github.com/cyruzin/tome) | 28 | Package tome was designed to paginate simple RESTful APIs. | 2 years ago |
| [throttle](https://github.com/yudppp/throttle) | 27 | lodash throttle like Go library | 3 months ago |
| [ugo](https://github.com/alxrm/ugo) | 26 | Simple and expressive toolbox written in Go | 5 years ago |
| [shutdown](https://github.com/ztrue/shutdown) | 25 | Golang app shutdown hooks. | 3 years ago |
| [generate](https://github.com/go-playground/generate) | 24 | :runner:runs go generate recursively on a specified path or environment variable and can filter by regex | 5 years ago |
| [goplaceholder](https://github.com/michiwend/goplaceholder) | 22 | a small golang lib to generate placeholder images | 6 years ago |
| [rerate](https://github.com/abo/rerate) | 21 | redis-based rate counter and rate limiter | 5 years ago |
| [ghokin](https://github.com/antham/ghokin) | 20 | Parallelized formatter with no external dependencies for gherkin (cucumber, behat...) | 2 months ago |
| [ctxutil](https://github.com/posener/ctxutil) | 18 | utils for Go context | 2 years ago |
| [mimesniffer](https://github.com/aofei/mimesniffer) | 18 | A MIME type sniffer for Go. | 5 days ago |
| [structs](https://github.com/PumpkinSeed/structs) | 18 | Golang struct operations. | 4 years ago |
| [dlog](https://github.com/kirillDanshin/dlog) | 16 | Simple build-time controlled debug log with ability to log where the logger was called | 4 years ago |
| [filler](https://github.com/yaronsumel/filler) | 16 | fill struct data easily with fill tags | 5 years ago |
| [go-convert](https://github.com/Eun/go-convert) | 15 | Convert a value into another type | 6 months ago |
| [jsend](https://github.com/clevergo/jsend) | 15 | :100: JSend's implementation writen in Go(golang) | 5 months ago |
| [okrun](https://github.com/xta/okrun) | 15 | ok, run your gofile | 7 years ago |
| [rest-go](https://github.com/edermanoel94/rest-go) | 15 | A package that provide many helpful methods for working with rest api. | a year ago |
| [command](https://github.com/txgruppi/command) | 14 | Command pattern for Go with thread safe serial and parallel dispatcher | 6 years ago |
| [copy](https://github.com/gotidy/copy) | 13 | Package for fast copying structs of different types | a year ago |
| [go-types](https://github.com/mikekonan/go-types) | 12 | Library providing opanapi3 and Go types for store/validation and transfer of ISO-4217, ISO-3166, and other types. | 4 months ago |
| [ptr](https://github.com/gotidy/ptr) | 11 | Contains functions for simplified creation of pointers from constants of basic types | a year ago |
| [sshman](https://github.com/shoobyban/sshman) | 11 | SSH Manager - manage authorized_keys file on remote servers | 2 months ago |
| [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) | 10 | Problem json implementation (https://tools.ietf.org/html/rfc7807) package for go | 2 years ago |
| [retry](https://github.com/shafreeck/retry) | 10 | A pretty simple library to ensure your work to be done | 2 years ago |
| [silk](https://github.com/chrispassas/silk) | 10 | Read Silk Flow Files | a year ago |
| [go-countries](https://github.com/mikekonan/go-countries) | 9 |  | a year ago |
| [statiks](https://github.com/janiltonmaciel/statiks) | 8 | Fast, zero-configuration, static HTTP filer server. | a year ago |
| [blank](https://github.com/Henry-Sarabia/blank) | 7 | Detect blank strings or remove whitespace from strings | 2 years ago |
| [go-clip](https://github.com/prashantgupta24/go-clip) | 7 | A minimalistic clipboard manager for Mac. | 9 months ago |
| [nfdump](https://github.com/chrispassas/nfdump) | 7 | NFDump File Reader | 3 months ago |
| [retry](https://github.com/percolate/retry) | 7 | Percolate's Go retry package | 2 years ago |
| [sliceconv](https://github.com/Henry-Sarabia/sliceconv) | 7 | Slice conversion between primitive types | 2 years ago |
| [go-safe](https://github.com/kenkyu392/go-safe) | 4 | This Go package provides a sandbox for the safe execution of panic-inducing programs | 6 months ago |
| [go-actuator](https://github.com/sinhashubham95/go-actuator) | 3 | Golang production-ready features | 3 months ago |
| [lets-go](https://github.com/aplescia/lets-go) | 3 | Go module that provides common utilities for Cloud Native development | 7 months ago |
| [tik](https://github.com/andy2046/tik) | 3 | hierarchical timing wheel | a year ago |
| [bleep](https://github.com/sinhashubham95/bleep) | 2 | OS Signal Handlers in Go | 10 months ago |
| [goctx](https://github.com/zerosnake0/goctx) | 2 | Get your context value faster | a year ago |
| [olaf](https://github.com/btnguyen2k/olaf) | 2 | Twitter Snowflake implemented in Go | 3 years ago |


### [UUID](#UUID)
* Libraries for working with UUIDs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [uuid](https://github.com/google/uuid) | 3174 | Go package for UUIDs based on RFC 4122 and DCE 1.1: Authentication and Security Services. | a month ago |
| [ulid](https://github.com/oklog/ulid) | 2443 | Universally Unique Lexicographically Sortable Identifier (ULID) in Go | a month ago |
| [uuid](https://github.com/gofrs/uuid) | 1020 | A UUID package originally forked from github.com/satori/go.uuid | 12 days ago |
| [wuid](https://github.com/edwingeng/wuid) | 440 | An extremely fast UUID alternative written in golang | 3 months ago |
| [sno](https://github.com/muyo/sno) | 54 | Compact, sortable and fast unique IDs with embedded metadata. | 4 days ago |
| [nanoid](https://github.com/aidarkhanov/nanoid) | 38 | A tiny and fast Go unique string generator | 2 months ago |
| [Goid](https://github.com/JakeHL/Goid) | 30 | A UUIDv4 generation package written in go | 3 years ago |
| [uuid](https://github.com/agext/uuid) | 14 | Generate, encode, and decode UUIDs v1 with fast or cryptographic-quality random node identifier. | 2 years ago |
| [gouid](https://github.com/twharmon/gouid) | 10 | Fast, dependable universally unique ids | 6 months ago |
| [GoFlake](https://github.com/Hart87/GoFlake) | 8 | A highly scalable and serverless unique ID generator for use in distributed systems. Written in GoLang. Inspired by Twitters Snowflake. | 6 months ago |


### [Validation](#Validation)
* Libraries for validation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [joi](https://github.com/sideway/joi) | 17865 | The most powerful data validation library for JS | 17 hours ago |
| [validator](https://github.com/go-playground/validator) | 9040 | :100:Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving | 2 days ago |
| [govalidator](https://github.com/asaskevich/govalidator) | 5107 | [Go] Package of validators and sanitizers for strings, numerics, slices and structs | a month ago |
| [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) | 2429 | An idiomatic Go (golang) validation package. Supports configurable and extensible validation rules (validators) using normal language constructs instead of error-prone struct tags. | 2 months ago |
| [govalidator](https://github.com/thedevsaddam/govalidator) | 1028 | Validate Golang request data with simple rules. Highly inspired by Laravel's request validation. | 10 months ago |
| [validate](https://github.com/gookit/validate) | 489 | ⚔ Go package for data validation and filtering. support Map, Struct, Form data. Go通用的数据验证与过滤库，使用简单，内置大部分常用验证、过滤器，支持自定义验证器、自定义消息、字段翻译。 | 3 days ago |
| [checkdigit](https://github.com/osamingo/checkdigit) | 82 | Provide check digit algorithms and calculators written in Go | 10 months ago |
| [terraform-validator](https://github.com/thazelart/terraform-validator) | 73 | A norms and conventions validator for Terraform | a year ago |
| [jio](https://github.com/faceair/jio) | 62 | jio is a json schema validator similar to joi | 2 years ago |
| [validate](https://github.com/gobuffalo/validate) | 62 | This package provides a framework for writing validations for Go applications. | 4 days ago |
| [gody](https://github.com/guiferpa/gody) | 52 | :balloon: A lightweight struct validator for Go | 9 months ago |
| [govalid](https://github.com/twharmon/govalid) | 24 | Struct validation using tags | a month ago |


### [Version Control](#Version-Control)
* Libraries for version control.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-git](https://github.com/go-git/go-git) | 2783 | A highly extensible Git implementation in pure Go. | 6 days ago |
| [git2go](https://github.com/libgit2/git2go) | 1676 | Git to Go; bindings for libgit2. Like McDonald's but tastier. | 6 days ago |
| [glab](https://github.com/profclems/glab) | 1544 | An open-source GitLab command line tool bringing GitLab's cool features to your command line | 4 days ago |
| [hercules](https://github.com/src-d/hercules) | 1492 | Gaining advanced insights from Git repository history. | 8 days ago |
| [gh](https://github.com/rjeczalik/gh) | 76 | Scriptable server and net/http middleware for GitHub Webhooks. | 3 years ago |
| [go-vcs](https://github.com/sourcegraph/go-vcs) | 75 | manipulate and inspect VCS repositories in Go | 8 months ago |
| [Githooks](https://github.com/gabyx/Githooks) | 28 | 🦎 Githooks: per-repo and shared Git hooks with version control and auto update.  | 5 hours ago |
| [hgo](https://github.com/beyang/hgo) | 13 | Hgo is a collection of Go packages providing read-access to local Mercurial repositories. | 6 years ago |


### [Video](#Video)
* Libraries for manipulating video.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [goav](https://github.com/giorgisio/goav) | 1747 | Golang bindings for FFmpeg | 5 months ago |
| [m3u8](https://github.com/grafov/m3u8) | 870 | Parser and generator of M3U8-playlists for Apple HLS. Library for Go language. :cinema: | a month ago |
| [gmf](https://github.com/3d0c/gmf) | 716 | Go Media Framework | a month ago |
| [go-astits](https://github.com/asticode/go-astits) | 380 | Demux and mux MPEG Transport Streams (.ts) natively in GO | a month ago |
| [go-astisub](https://github.com/asticode/go-astisub) | 356 | Manipulate subtitles in GO (.srt, .ssa/.ass, .stl, .ttml, .vtt (webvtt), teletext, etc.) | a month ago |
| [libvlc-go](https://github.com/adrg/libvlc-go) | 255 | Go bindings for libVLC and high-level media player interface | 2 months ago |
| [gst](https://github.com/ziutek/gst) | 162 | Go bindings for GStreamer (retired: currently I don't use/develop this package) | 10 months ago |
| [gortsplib](https://github.com/aler9/gortsplib) | 138 | RTSP 1.0 client and server library for the Go programming language | 9 hours ago |
| [go-m3u8](https://github.com/quangngotan95/go-m3u8) | 80 | Parse and generate m3u8 playlists for Apple HTTP Live Streaming (HLS) in Golang (ported from gem https://github.com/sethdeckard/m3u8) | 2 years ago |
| [v4l](https://github.com/korandiz/v4l) | 63 | Facade to the Video4Linux video capture interface.  | a month ago |
| [libgosubs](https://github.com/wargarblgarbl/libgosubs) | 16 | golang library to read and write various subtitle formats | 2 years ago |
| [go-mpd](https://github.com/unki2aut/go-mpd) | 10 | Go library for parsing and generating MPEG-DASH Media Presentation Description (MPD) files | a year ago |


### [Web Frameworks](#Web-Frameworks)
* 

#### [Full stack web frameworks](#Full-stack-web-frameworks.)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gin](https://github.com/gin-gonic/gin) | 53000 | Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin. | 3 days ago |
| [echo](https://github.com/labstack/echo) | 21084 | High performance, minimalist Go web framework | 7 hours ago |
| [fiber](https://github.com/gofiber/fiber) | 16370 | ⚡️ Express inspired web framework written in Go | 8 hours ago |
| [revel](https://github.com/revel/revel) | 12441 | A high productivity, full-stack web framework for the Go language. | 13 days ago |
| [goa](https://github.com/goadesign/goa) | 4428 | Design-based APIs and microservices in Go | 7 days ago |
| [gizmo](https://github.com/nytimes/gizmo) | 3556 | A Microservice Toolkit from The New York Times | 3 months ago |
| [go-json-rest](https://github.com/ant0ine/go-json-rest) | 3489 | A quick and easy way to setup a RESTful JSON API | 10 months ago |
| [macaron](https://github.com/go-macaron/macaron) | 3223 | Package macaron is a high productive and modular web framework in Go. | a year ago |
| [utron](https://github.com/gernest/utron) | 2205 | A lightweight MVC framework for Go(Golang) | 3 years ago |
| [go-tigertonic](https://github.com/rcrowley/go-tigertonic) | 995 | A Go framework for building JSON web services inspired by Dropwizard | 3 years ago |
| [goyave](https://github.com/go-goyave/goyave) | 914 | 🍐 Elegant Golang REST API Framework | 11 days ago |
| [tango](https://github.com/lunny/tango) | 837 | This is only a mirror and Moved to https://gitea.com/lunny/tango | 2 years ago |
| [gearbox](https://github.com/gogearbox/gearbox) | 575 | Gearbox :gear: is a web framework written in Go with a focus on high performance | a month ago |
| [gongular](https://github.com/mustafaakin/gongular) | 445 | A different approach to Go web frameworks | a year ago |
| [neo](https://github.com/ivpusic/neo) | 412 | Go Web Framework | 4 years ago |
| [aero](https://github.com/aerogo/aero) | 411 | :bullettrain_side: High-performance web server for Go. | 2 years ago |
| [air](https://github.com/aofei/air) | 407 | An ideally refined web framework for Go. | 7 months ago |
| [mango](https://github.com/paulbellamy/mango) | 359 | Mango is a modular web-application framework for Go, inspired by Rack, and PEP333. | 4 years ago |
| [gondola](https://github.com/rainycape/gondola) | 309 | The web framework for writing faster sites, faster | 3 years ago |
| [beego](https://github.com/astaxie/beego) | 299 | beego is an open-source, high-performance web framework for the Go programming language. | 3 months ago |
| [golf](https://github.com/dinever/golf) | 251 | :golf: The Golf web framework | 3 months ago |
| [flamingo](https://github.com/i-love-flamingo/flamingo) | 240 | Flamingo Framework and Core Library. Flamingo is a go based framework for pluggable web projects. It is used to build scalable and maintainable (web)applications. | a month ago |
| [flamingo-commerce](https://github.com/i-love-flamingo/flamingo-commerce) | 229 | Flexible E-Commerce Framework on top of Flamingo. Used to build E-Commerce "Portals" and connect it with the help of individual Adapters to other services.  | 7 days ago |
| [ginrpc](https://github.com/xxjwxc/ginrpc) | 194 | gin auto binding,grpc, and annotated route,gin 注解路由, grpc,自动参数绑定工具 | 4 days ago |
| [webgo](https://github.com/bnkamalesh/webgo) | 190 | A microframework to build web apps; with handler chaining, middleware support, and most of all; standard library compliant HTTP handlers(i.e. http.HandlerFunc). | a month ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 163 | hiboot is a high performance web and cli application framework with dependency injection support | 5 months ago |
| [uadmin](https://github.com/uadmin/uadmin) | 157 | The web framework for Golang | 13 days ago |
| [go-rest](https://github.com/ungerik/go-rest) | 125 | A small and evil REST framework for Go | 5 years ago |
| [appy](https://github.com/appist/appy) | 113 | An opinionated productive web framework that helps scaling business easier. | 8 days ago |
| [patron](https://github.com/beatlabs/patron) | 84 | Microservice framework following best cloud practices with a focus on productivity. | 11 hours ago |
| [vox](https://github.com/aisk/vox) | 76 | Simple and lightweight Go web framework inspired by koa | 6 months ago |
| [microservice](https://github.com/claygod/microservice) | 74 | This library provides a simple framework of microservice, which includes a configurator, a logger, metrics, and of course the handler | 20 days ago |
| [golax](https://github.com/fulldump/golax) | 73 | Golax, a go implementation for the Lax framework. | 3 years ago |
| [rux](https://github.com/gookit/rux) | 70 | ⚡ Rux is an simple and fast web framework. support param route binding, middleware, compatible http.Handler interface. 简单且快速的 Go api/web 框架，支持参数路由绑定，中间件，兼容 http.Handler 接口 | a month ago |
| [yarf](https://github.com/yarf-framework/yarf) | 63 | Yet Another REST Framework | 3 years ago |
| [fireball](https://github.com/zpatrick/fireball) | 56 | Go web framework with a natural feel | 3 years ago |
| [goa](https://github.com/goa-go/goa) | 46 | Goa is a  web framework based on middleware, like koa.js. | 2 years ago |
| [gotuna](https://github.com/gotuna/gotuna) | 36 | GoTuna a lightweight web framework for Go with mux router, middlewares, user sessions, templates, embedded views, and static file server. | 4 months ago |
| [rk-boot](https://github.com/rookie-ninja/rk-boot) | 32 | Bootstrapper for golang application. See https://rkdev.info/docs/ for details. | 3 days ago |
| [api](https://github.com/resoursea/api) | 31 | A REST framework for quickly writing resource based services in Golang. | 7 years ago |
| [rex](https://github.com/goanywhere/rex) | 31 | Pleasures for Web in Golang | 4 years ago |
| [goweb](https://github.com/twharmon/goweb) | 25 | Lightweight web framework based on net/http. | 9 months ago |
| [banjo](https://github.com/n4Zz2/banjo) | 18 | BANjO is a simple web framework written in Go (golang) | 4 years ago |


#### [Actual middlewares](#Actual-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tollbooth](https://github.com/didip/tollbooth) | 2053 | Simple middleware to rate-limit HTTP requests. | 2 months ago |
| [cors](https://github.com/rs/cors) | 1961 | Go net/http configurable handler to handle CORS requests | 2 months ago |
| [limiter](https://github.com/ulule/limiter) | 1371 | Dead simple rate limit middleware for Go. | 5 days ago |
| [go-server-timing](https://github.com/mitchellh/go-server-timing) | 822 | Go (golang) library for creating and consuming HTTP Server-Timing headers | a year ago |
| [go-fault](https://github.com/github/go-fault) | 421 | Fault injection library in Go using standard http middleware | 2 months ago |
| [ln-paywall](https://github.com/philippgille/ln-paywall) | 116 | Go middleware for monetizing your API on a per-request basis with Bitcoin and Lightning ⚡️ | 3 years ago |
| [xff](https://github.com/sebest/xff) | 85 | A Golang Middleware to handle X-Forwarded-For Header | 10 months ago |
| [formjson](https://github.com/rs/formjson) | 36 | Go net/http handler to transparently manage posted JSON | 6 years ago |
| [client-timing](https://github.com/posener/client-timing) | 19 | An HTTP client for go-server-timing middleware. Enables automatic timing propagation through HTTP calls between servers. | 2 years ago |
| [rk-grpc](https://github.com/rookie-ninja/rk-grpc) | 13 | grpc related entry. See https://rkdev.info/docs/ for details. | 3 days ago |
| [rk-gin](https://github.com/rookie-ninja/rk-gin) | 9 | Bootstrapper and interceptor for gin framework. See https://rkdev.info/docs/ for details. | 11 hours ago |
| [mid](https://github.com/bobg/mid) | 2 | Middleware for HTTP services in Go | 3 months ago |


#### [Libraries for creating HTTP middlewares](#Libraries-for-creating-HTTP-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [negroni](https://github.com/urfave/negroni) | 7093 | Idiomatic HTTP Middleware for Golang | 18 days ago |
| [alice](https://github.com/justinas/alice) | 2416 | Painless middleware chaining for Go | 11 days ago |
| [render](https://github.com/unrolled/render) | 1554 | Go package for easily rendering JSON, XML, binary data, and HTML templates responses. | 5 days ago |
| [stats](https://github.com/thoas/stats) | 582 | A Go middleware that stores various information about your web application (response time, status code count, etc.) | 3 years ago |
| [interpose](https://github.com/carbocation/interpose) | 296 | Minimalist net/http middleware for golang | 5 years ago |
| [renderer](https://github.com/thedevsaddam/renderer) | 231 | Simple, lightweight and faster response (JSON, JSONP, XML, YAML, HTML, File) rendering package for Go | 10 months ago |
| [muxchain](https://github.com/stephens2424/muxchain) | 209 | Lightweight Middleware for net/http | 3 years ago |
| [rye](https://github.com/InVisionApp/rye) | 96 | A tiny http middleware for Golang with added handlers for common needs. | 3 years ago |
| [gores](https://github.com/alioygur/gores) | 95 | Go package that handles HTML, JSON, XML and etc. responses | 10 months ago |
| [mediary](https://github.com/HereMobilityDevelopers/mediary) | 77 | Add interceptors to GO http.Client | a year ago |
| [chain](https://github.com/codemodus/chain) | 63 | Composable chains of nested http.Handler instances. | 3 years ago |
| [wrap](https://github.com/go-on/wrap) | 59 | Go http.Hander based middleware stack with context sharing | 3 years ago |
| [catena](https://github.com/codemodus/catena) | 7 | gRPC interceptor catenation. | 3 years ago |


#### [Routers](#Routers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mux](https://github.com/gorilla/mux) | 15459 | A powerful HTTP router and URL matcher for building Go web servers with 🦍 | 9 days ago |
| [httprouter](https://github.com/julienschmidt/httprouter) | 13386 | A high performance HTTP request router that scales well | 6 days ago |
| [chi](https://github.com/go-chi/chi) | 10403 | lightweight, idiomatic and composable router for building Go HTTP services | 4 hours ago |
| [web](https://github.com/gocraft/web) | 1449 | Go Router + Middleware. Your Contexts. | a year ago |
| [bone](https://github.com/go-zoo/bone) | 1277 | Lightning Fast HTTP Multiplexer | 3 years ago |
| [goji](https://github.com/goji/goji) | 889 | Goji is a minimalistic and flexible HTTP request multiplexer for Go (golang) | 2 years ago |
| [fasthttprouter](https://github.com/buaazp/fasthttprouter) | 871 | A high performance fasthttp request router that scales well | 3 years ago |
| [httptreemux](https://github.com/dimfeld/httptreemux) | 509 | High-speed, flexible tree-based HTTP router for Go. | 9 days ago |
| [gorouter](https://github.com/xujiajun/gorouter) | 509 | xujiajun/gorouter is a simple and fast HTTP router for Go. It is easy to build RESTful APIs and your web framework. | 2 years ago |
| [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) | 418 | An extremely fast Go (golang) HTTP router that supports regular expression route matching. Comes with full support for building RESTful APIs. | 2 months ago |
| [lars](https://github.com/go-playground/lars) | 383 | :rotating_light: Is a lightweight, fast and extensible zero allocation HTTP router for Go used to create customizable frameworks. | 3 years ago |
| [siesta](https://github.com/VividCortex/siesta) | 349 | Composable framework for writing HTTP handlers in Go. | 7 months ago |
| [vestigo](https://github.com/husobee/vestigo) | 265 | Echo Inspired Stand Alone URL Router | a year ago |
| [router](https://github.com/gowww/router) | 159 | ⚡️ A lightning fast HTTP router | 2 years ago |
| [alien](https://github.com/gernest/alien) | 122 | A lightweight and  fast http router from outer space | 3 years ago |
| [pure](https://github.com/go-playground/pure) | 119 | :non-potable_water: Is a lightweight  HTTP router that sticks to the std "net/http" implementation | a year ago |
| [violetear](https://github.com/nbari/violetear) | 103 | Go HTTP router | 6 months ago |
| [Bxog](https://github.com/claygod/Bxog) | 102 | Bxog is a simple and fast HTTP router for Go (HTTP request multiplexer). | a year ago |
| [gorouter](https://github.com/vardius/gorouter) | 102 | Go Server/API micro framework, HTTP request router, multiplexer, mux | 2 days ago |
| [xmux](https://github.com/rs/xmux) | 91 | xmux is a httprouter fork on top of xhandler (net/context aware) | 4 years ago |
| [bellt](https://github.com/GuilhermeCaruso/bellt) | 52 | :bell: A simple Go router | a year ago |
| [ngamux](https://github.com/ngamux/ngamux) | 47 | Simple HTTP router for Go | 21 days ago |
| [fastrouter](https://github.com/razonyang/fastrouter) | 19 | FastRouter is a fast, flexible HTTP router written in Go. | 4 years ago |
| [route](https://github.com/goroute/route) | 7 | Go Route - Simple yet powerful HTTP request multiplexer | 2 years ago |


### [WebAssembly](#WebAssembly)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tinygo](https://github.com/tinygo-org/tinygo) | 8892 | Go compiler for small places. Microcontrollers, WebAssembly, and command-line tools. Based on LLVM. | 26 minutes ago |
| [dom](https://github.com/dennwc/dom) | 439 | DOM library for Go and WASM | 2 years ago |
| [go-canvas](https://github.com/markfarnan/go-canvas) | 147 | Library to use HTML5 Canvas  from Go-WASM, with all drawing within go code | a year ago |
| [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) | 107 | Run WASM tests inside your browser | 16 days ago |
| [webapi](https://github.com/gowebapi/webapi) | 92 | Go Lang Web Assembly bindings for DOM, HTML etc | 10 months ago |
| [vert](https://github.com/norunners/vert) | 57 | WebAssembly interop between Go and JS values. | 8 months ago |


### [Windows](#Windows)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ole](https://github.com/go-ole/go-ole) | 800 | win32 ole implementation for golang | a month ago |
| [d3d9](https://github.com/gonutz/d3d9) | 128 | Direct3D9 wrapper for Go. | 4 months ago |
| [gosddl](https://github.com/MonaxGT/gosddl) | 8 | GoSDDL converter | 3 years ago |


### [XML](#XML)
* Libraries and tools for manipulating XML.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zek](https://github.com/miku/zek) | 506 | Generate a Go struct from XML. | 2 months ago |
| [xpath](https://github.com/antchfx/xpath) | 433 | XPath package for Golang, supports HTML, XML, JSON document query. | 2 months ago |
| [xquery](https://github.com/antchfx/xquery) | 154 | Extract data or evaluate value from HTML/XML documents using XPath | 4 years ago |
| [xml2map](https://github.com/sbabiv/xml2map) | 36 | XML to MAP converter written Golang | a month ago |
| [xmlwriter](https://github.com/shabbyrobe/xmlwriter) | 20 | xmlwriter is a pure-Go library providing procedural XML generation based on libxml2's xmlwriter module | 8 months ago |
| [XML-Comp](https://github.com/XML-Comp/XML-Comp) | 15 | Compare ANY markup documents. | 3 years ago |


## [Tools](#Tools)
* Go software and plugins.

### [Code Analysis](#Code-Analysis)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-tools](https://github.com/dominikh/go-tools) | 4241 | Staticcheck - The advanced Go linter | a day ago |
| [go-tools](https://github.com/dominikh/go-tools) | 4241 | Staticcheck - The advanced Go linter | a day ago |
| [lint](https://github.com/golang/lint) | 3924 | [mirror] This is a linter for Go source code. (deprecated) | 6 months ago |
| [errcheck](https://github.com/kisielk/errcheck) | 1754 | errcheck checks that you checked errors. | 5 months ago |
| [go-critic](https://github.com/go-critic/go-critic) | 1177 | The most opinionated Go source code linter for code audit. | 3 days ago |
| [gcvis](https://github.com/davecheney/gcvis) | 1034 | Visualise Go program GC trace data in real time | 3 years ago |
| [php-parser](https://github.com/z7zmey/php-parser) | 829 | PHP parser written in Go | 7 months ago |
| [goplantuml](https://github.com/jfeliu007/goplantuml) | 570 | PlantUML Class Diagram Generator for golang projects | 6 months ago |
| [goast-viewer](https://github.com/yuroyoro/goast-viewer) | 561 | Golang AST visualizer | 2 years ago |
| [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) | 551 | Find outdated dependencies of your Go projects. go-mod-outdated provides a table view of the go list -u -m -json all command which lists all dependencies of a Go project and their available minor and patch updates. It also provides a way to filter indirect dependencies and dependencies without updates. | a month ago |
| [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) | 529 | Clean architecture validator for go, like a The Dependency Rule and interaction between packages in your Go projects. | 7 days ago |
| [goreturns](https://github.com/sqs/goreturns) | 505 | A gofmt/goimports-like tool for Go programmers that fills in Go return statements with zero values to match the func return types | a year ago |
| [dupl](https://github.com/mibk/dupl) | 264 | a tool for code clone detection | a year ago |
| [golines](https://github.com/segmentio/golines) | 246 | A golang formatter that fixes long lines | 4 months ago |
| [gostatus](https://github.com/shurcooL/gostatus) | 245 | A command line tool that shows the status of Go repositories. | 3 years ago |
| [apicompat](https://github.com/bradleyfalzon/apicompat) | 175 | apicompat checks recent changes to a Go project for backwards incompatible changes | 5 years ago |
| [checkstyle](https://github.com/qiniu/checkstyle) | 117 | checkstyle for go | 8 months ago |
| [lint](https://github.com/surullabs/lint) | 66 | Run linters from Go code -  | 3 years ago |
| [go-outdated](https://github.com/firstrow/go-outdated) | 44 | Find outdated golang packages | 3 years ago |
| [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) | 6 | Golang Ifood API SDK  | 13 days ago |


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

