# Go
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of awesome Go frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Mon Aug 08 2022 14:24:53 GMT+0800 (中国标准时间)
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
| [oto](https://github.com/hajimehoshi/oto) | 1032 | ♪ A low-level library to play sound on multiple platforms ♪ | 5 minutes ago |
| [portaudio](https://github.com/gordonklaus/portaudio) | 522 | Go bindings for the PortAudio audio I/O library | 5 months ago |
| [music-theory](https://github.com/go-music-theory/music-theory) | 404 | Go models of Note, Scale, Chord and Key | 2 years ago |
| [waveform](https://github.com/mdlayher/waveform) | 353 | Go package capable of generating waveform images from audio streams. MIT Licensed. | 2 years ago |
| [portmidi](https://github.com/rakyll/portmidi) | 267 | Go bindings for libportmidi | 5 months ago |
| [id3v2](https://github.com/bogem/id3v2) | 255 | 🎵 ID3 decoding and encoding library for Go | 3 months ago |
| [GoAudio](https://github.com/DylanMeeus/GoAudio) | 240 | Go tools for audio processing & creation 🎶 | 2 months ago |
| [flac](https://github.com/mewkiz/flac) | 217 | Package flac provides access to FLAC (Free Lossless Audio Codec) streams. | 6 months ago |
| [malgo](https://github.com/gen2brain/malgo) | 185 | Mini audio library | 4 months ago |
| [mix](https://github.com/go-mix/mix) | 156 | Sequence-based Go-native audio mixer for music apps | 2 years ago |
| [gaad](https://github.com/Comcast/gaad) | 103 | GAAD (Go Advanced Audio Decoder) | 3 months ago |
| [minimp3](https://github.com/tosone/minimp3) | 84 | Decode mp3 base on https://github.com/lieff/minimp3 | a year ago |
| [vorbis](https://github.com/mccoyst/vorbis) | 30 | A "native" ogg vorbis decoder for Go (uses inline stb_vorbis) | 3 years ago |
| [gosamplerate](https://github.com/dh1tw/gosamplerate) | 18 | Go Bindings for libsamplerate | 2 years ago |


### [Authentication and OAuth](#authentication-and-oauth)
* Libraries for implementing authentications schemes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [casbin](https://github.com/casbin/casbin) | 12473 | An authorization library that supports access control models like ACL, RBAC, ABAC in Golang | 2 hours ago |
| [oauth2](https://github.com/golang/oauth2) | 4273 | Go OAuth2 | 2 days ago |
| [goth](https://github.com/markbates/goth) | 3775 | Package goth provides a simple, clean, and idiomatic way to write authentication packages for Go web applications. | 4 days ago |
| [authboss](https://github.com/volatiletech/authboss) | 3130 | The boss of http auth. | 4 months ago |
| [go-jose](https://github.com/square/go-jose) | 1942 | An implementation of JOSE standards (JWE, JWS, JWT) in Go | 4 months ago |
| [go-oauth2-server](https://github.com/RichardKnop/go-oauth2-server) | 1928 | A standalone, specification-compliant,  OAuth2 server written in Golang. | 2 months ago |
| [loginsrv](https://github.com/tarent/loginsrv) | 1864 | JWT login microservice with plugable backends such as OAuth2, Google, Github, htpasswd, osiam, .. | a year ago |
| [osin](https://github.com/openshift/osin) | 1753 | Golang OAuth2 server library | a month ago |
| [gologin](https://github.com/dghubble/gologin) | 1546 | Go login handlers for authentication providers (OAuth1, OAuth2) | 4 days ago |
| [gorbac](https://github.com/mikespook/gorbac) | 1313 | goRBAC provides a lightweight role-based access control (RBAC) implementation in Golang. | 5 months ago |
| [scs](https://github.com/alexedwards/scs) | 1170 | HTTP Session Management for Go | 2 months ago |
| [paseto](https://github.com/o1egl/paseto) | 618 | Platform-Agnostic Security Tokens implementation in GO (Golang) | 2 days ago |
| [jwt](https://github.com/cristalhq/jwt) | 558 | Safe, simple and fast JSON Web Tokens for Go | a month ago |
| [permissions2](https://github.com/xyproto/permissions2) | 460 |   :closed_lock_with_key: Middleware for keeping track of users, login states and permissions | 3 months ago |
| [go-guardian](https://github.com/shaj13/go-guardian) | 389 | Go-Guardian is a golang library that provides a simple, clean, and idiomatic way to create powerful modern API and web authentication. | 5 months ago |
| [jwt](https://github.com/pascaldekloe/jwt) | 290 | JSON Web Token library | 2 days ago |
| [jeff](https://github.com/abraithwaite/jeff) | 240 | 🍍Jeff provides the simplest way to manage web sessions in Go. | a year ago |
| [jwt-auth](https://github.com/adam-hanna/jwt-auth) | 218 | This package provides json web token (jwt) middleware for goLang http servers | a year ago |
| [httpauth](https://github.com/goji/httpauth) | 214 | HTTP Authentication middlewares | 10 months ago |
| [branca](https://github.com/hako/branca) | 168 | :key: Secure alternative to JWT. Authenticated Encrypted API Tokens for Go. | 2 years ago |
| [otpgen](https://github.com/RijulGulati/otpgen) | 121 | Library to generate TOTP/HOTP codes | a year ago |
| [sessionup](https://github.com/swithek/sessionup) | 117 | Straightforward HTTP session management | 4 months ago |
| [session](https://github.com/icza/session) | 107 | Go session management for web servers (including support for Google App Engine - GAE). | a year ago |
| [jwt](https://github.com/robbert229/jwt) | 99 | This is an implementation of JWT in golang! | 2 years ago |
| [rbac](https://github.com/zpatrick/rbac) | 98 | Minimalistic RBAC package for Go applications | 4 years ago |
| [sjwt](https://github.com/brianvoe/sjwt) | 98 | Simple JWT Golang | a month ago |
| [sessions](https://github.com/adam-hanna/sessions) | 66 | A dead simple, highly performant, highly customizable sessions middleware for go http servers. | 2 years ago |
| [securecookie](https://github.com/chmike/securecookie) | 60 | Fast, secure and efficient secure cookie encoder/decoder  | 5 months ago |
| [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) | 51 | Golang library for providing a canonical representation of email address. | a year ago |
| [otpgo](https://github.com/jltorresm/otpgo) | 39 | Time-Based One-Time Password (TOTP) and HMAC-Based One-Time Password (HOTP) library for Go. | a year ago |
| [scope](https://github.com/ThundR67/scope) | 21 | Easily Manage OAuth2 Scopes In Go | a year ago |
| [cookiestxt](https://github.com/mengzhuo/cookiestxt) | 13 | cookiestxt implement parser of cookies txt format | a year ago |
| [sessiongate-go](https://github.com/f0rmiga/sessiongate-go) | 10 | A driver for the SessionGate Redis module - easy session management using the Go language. | 4 years ago |


### [Blockchain](#blockchain)
* Tools for building blockchains.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ethereum](https://github.com/ethereum/go-ethereum) | 38679 | Official Go implementation of the Ethereum protocol | 2 hours ago |
| [tendermint](https://github.com/tendermint/tendermint) | 5088 | ⟁ Tendermint Core (BFT Consensus) in Go | a day ago |
| [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) | 4295 | :chains: A Framework for Building High Value Public Blockchains :sparkles: | 4 minutes ago |
| [gossamer](https://github.com/ChainSafe/gossamer) | 346 | 🕸️ Gossamer: A Go implementation of the Polkadot Host | 6 hours ago |


### [Bot Building](#bot-building)
* Libraries for building and working with bots.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) | 3869 | Golang bindings for the Telegram Bot API | a day ago |
| [olivia](https://github.com/olivia-ai/olivia) | 3277 | 💁‍♀️Your new best friend powered by an artificial neural network | 7 months ago |
| [telebot](https://github.com/tucnak/telebot) | 2667 | Telebot is a Telegram bot framework in Go. | 9 days ago |
| [kelp](https://github.com/stellar/kelp) | 910 | Kelp is a free and open-source trading bot for the Stellar DEX and 100+ centralized exchanges | 2 months ago |
| [golang-crypto-trading-bot](https://github.com/saniales/golang-crypto-trading-bot) | 811 | A golang implementation of a console-based trading bot for cryptocurrency exchanges | 3 months ago |
| [bot](https://github.com/go-chat-bot/bot) | 751 | IRC, Slack, Telegram and RocketChat bot written in go | 6 months ago |
| [slacker](https://github.com/shomali11/slacker) | 675 | Slack Bot Framework | 13 days ago |
| [tbot](https://github.com/yanzay/tbot) | 326 | Go library for Telegram Bot API | a year ago |
| [go-twitch-irc](https://github.com/gempir/go-twitch-irc) | 248 | go irc client for twitch.tv | a month ago |
| [go-sarah](https://github.com/oklahomer/go-sarah) | 246 | Simple yet customizable bot framework written in Go. | 2 months ago |
| [tenyks](https://github.com/kyleterry/tenyks) | 173 | The Tenyks IRC bot. | 3 years ago |
| [echotron](https://github.com/NicoNex/echotron) | 164 | An elegant and concurrent library for the Telegram bot API in Go. | 21 days ago |
| [hanu](https://github.com/sbstjn/hanu) | 139 | Golang Framework for writing Slack bots | a year ago |
| [go-tgbot](https://github.com/olebedev/go-tgbot) | 113 | Golang  telegram bot API wrapper, session-based router and middleware | 4 years ago |
| [slack-bot](https://github.com/innogames/slack-bot) | 105 | Ready to use Slack bot for lazy developers: start Jenkins jobs, watch Jira tickets, watch pull requests... | 2 days ago |
| [margelet](https://github.com/zhulik/margelet) | 74 | Telegram Bot Framework for Go | 6 years ago |
| [ephemeral-roles](https://github.com/ewohltman/ephemeral-roles) | 65 | A Discord bot for managing ephemeral roles based upon voice channel member presence. | 20 days ago |
| [slackscot](https://github.com/alexandre-normand/slackscot) | 52 | Slack bot core/framework written in Go with support for reactions to message updates/deletes | 9 months ago |
| [govkbot](https://github.com/nikepan/govkbot) | 39 | VK bot package for Go | a year ago |
| [micha](https://github.com/onrik/micha) | 20 | Client lib for Telegram bot api | a year ago |
| [teleterm](https://github.com/alfiankan/teleterm) | 11 | Telegram Bot Exec Terminal Command | a month ago |


### [Build Automation](#build-automation)
* Libraries and tools helping with build automation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [task](https://github.com/go-task/task) | 5593 | A task runner / simpler Make alternative written in Go | 10 hours ago |
| [realize](https://github.com/oxequa/realize) | 4265 | Realize is the #1 Golang Task Runner which enhance your workflow by automating the most common tasks and using the best performing Golang live reloading. | a year ago |
| [mmake](https://github.com/tj/mmake) | 1612 | Modern Make  | 2 years ago |
| [goyek](https://github.com/goyek/goyek) | 303 | Create build pipelines in Go  | an hour ago |
| [taskctl](https://github.com/taskctl/taskctl) | 201 | Concurrent task runner, developer's routine tasks automation toolkit. Simple modern alternative to GNU Make 🧰 | 5 months ago |
| [1build](https://github.com/gopinath-langote/1build) | 176 | Frictionless way of managing project-specific commands | a month ago |
| [gaper](https://github.com/maxcnunes/gaper) | 55 | Builds and restarts a Go project when it crashes or some watched file changes | 17 hours ago |
| [anko](https://github.com/GuilhermeCaruso/anko) | 26 | :crystal_ball: Simple application watcher | a year ago |


### [Standard CLI](#Standard-CLI)
* Libraries for building standard or basic Command Line applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cobra](https://github.com/spf13/cobra) | 28013 | A Commander for modern Go CLI interactions | 19 hours ago |
| [cli](https://github.com/urfave/cli) | 18785 | A simple, fast, and fun package for building command line apps in Go | 8 hours ago |
| [elvish](https://github.com/elves/elvish) | 4798 | Elvish = Expressive Programming Language + Versatile Interactive Shell | 4 hours ago |
| [andOTP](https://github.com/andOTP/andOTP) | 3633 | [Unmaintained] Open source two-factor authentication for Android | 2 months ago |
| [kingpin](https://github.com/alecthomas/kingpin) | 3239 | CONTRIBUTIONS ONLY: A Go (golang) command line and flag parser | 2 months ago |
| [dnote](https://github.com/dnote/dnote) | 2337 | A simple command line notebook for programmers | 2 months ago |
| [go-flags](https://github.com/jessevdk/go-flags) | 2265 | go command line option parser | 6 months ago |
| [pflag](https://github.com/spf13/pflag) | 1883 | Drop-in replacement for Go's flag package, implementing POSIX/GNU-style --flags. | a month ago |
| [cli](https://github.com/mitchellh/cli) | 1566 | A Go library for implementing command-line interfaces. | 3 days ago |
| [go-arg](https://github.com/alexflint/go-arg) | 1421 | Struct-based argument parsing in Go | 2 months ago |
| [ops](https://github.com/nanovms/ops) | 1006 | ops - build and run nanos unikernels | a month ago |
| [liner](https://github.com/peterh/liner) | 910 | Pure Go line editor with history, inspired by linenoise | 6 months ago |
| [complete](https://github.com/posener/complete) | 835 | bash completion written in go + bash completion for go command | 7 months ago |
| [mow.cli](https://github.com/jawher/mow.cli) | 813 | A versatile library for building CLI applications in Go | 4 months ago |
| [flaggy](https://github.com/integrii/flaggy) | 803 | Idiomatic Go input parsing with subcommands, positional values, and flags at any position. No required project or package layout and no external dependencies. | 2 months ago |
| [cli](https://github.com/mkideal/cli) | 664 | CLI - A package for building command line app with go | 3 months ago |
| [argparse](https://github.com/akamensky/argparse) | 443 | Argparse for golang. Just because `flag` sucks | a day ago |
| [climax](https://github.com/tucnak/climax) | 198 | Climax is an alternative CLI with the human face | 2 years ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 175 | hiboot is a high performance web and cli application framework with dependency injection support | 3 months ago |
| [wmenu](https://github.com/dixonwille/wmenu) | 168 | An easy to use menu structure for cli applications that prompts users to make choices. | a year ago |
| [commandeer](https://github.com/jaffee/commandeer) | 158 | Automatically sets up command line flags based on struct fields and tags. | a year ago |
| [sflags](https://github.com/octago/sflags) | 140 | Generate flags by parsing structures | a year ago |
| [flag](https://github.com/cosiner/flag) | 121 | Flag is a simple but powerful command line option parsing library for Go support infinite level subcommand | 2 years ago |
| [clir](https://github.com/leaanthony/clir) | 120 | A Simple and Clear CLI library. Dependency free. | 4 months ago |
| [job](https://github.com/liujianping/job) | 118 | JOB, make your short-term command as a long-term job. 将命令行规划成任务的工具 | 2 years ago |
| [clif](https://github.com/ukautz/clif) | 115 | Another CLI framework for Go. It works on my machine. | 3 years ago |
| [cli](https://github.com/teris-io/cli) | 113 | Simple and complete API for building command line applications in Go | a year ago |
| [cmdr](https://github.com/hedzr/cmdr) | 111 | POSIX-compliant command-line UI (CLI) parser and Hierarchical-configuration operations | an hour ago |
| [env](https://github.com/codingconcepts/env) | 92 | Tag-based environment configuration for structs | 2 years ago |
| [gocmd](https://github.com/devfacet/gocmd) | 57 | A Go library for building command line applications. | 3 months ago |
| [wlog](https://github.com/dixonwille/wlog) | 57 | A simple logging interface that supports cross-platform color and concurrency. | a year ago |
| [strumt](https://github.com/antham/strumt) | 46 | Strumt is a library to create prompt chain | a month ago |
| [go-getoptions](https://github.com/DavidGamba/go-getoptions) | 43 | Fully featured Go (golang) command line option parser with built-in auto-completion support. | 2 months ago |
| [flagvar](https://github.com/sgreben/flagvar) | 39 | A collection of CLI argument types for the Go `flag` package. | 2 years ago |
| [argv](https://github.com/cosiner/argv) | 33 |  | 2 years ago |
| [cmd](https://github.com/posener/cmd) | 33 | The standard library flag package with its missing features | 2 years ago |
| [go-commander](https://github.com/yitsushi/go-commander) | 29 | Go library to simplify CLI workflow | 2 years ago |
| [go-command-chain](https://github.com/rainu/go-command-chain) | 25 | A go library for easy configure and run command chains. Such like pipelining in unix shells. | 4 months ago |
| [sand](https://github.com/Zaba505/sand) | 18 | Package for creating interpreters | 4 years ago |
| [go-andotp](https://github.com/RijulGulati/go-andotp) | 17 | CLI program to encrypt/decrypt andOTP files | a year ago |
| [ts](https://github.com/liujianping/ts) | 14 | timestamp convert & compare tool. 时间戳转换与对比工具 | 3 years ago |
| [subcmd](https://github.com/bobg/subcmd) | 2 |  | a month ago |


### [Advanced Console UIs](#Advanced-Console-UIs)
* Libraries for building Console Applications and Console User Interfaces.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blessed-contrib](https://github.com/yaronn/blessed-contrib) | 14841 | Build terminal dashboards using ascii/ansi art and javascript | 2 months ago |
| [termui](https://github.com/gizak/termui) | 11999 | Golang terminal dashboard | 2 months ago |
| [gocui](https://github.com/jroimartin/gocui) | 8379 | Minimalist Go package aimed at creating Console User Interfaces. | 10 days ago |
| [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) | 7865 | Library for building powerful interactive command line applications in Python | 12 days ago |
| [go-prompt](https://github.com/c-bata/go-prompt) | 4576 | Building powerful interactive prompts in Go, inspired by python-prompt-toolkit. | 14 days ago |
| [termbox-go](https://github.com/nsf/termbox-go) | 4374 | Pure Go termbox implementation | 6 months ago |
| [pterm](https://github.com/pterm/pterm) | 2876 | ✨ #PTerm is a modern Go module to easily beautify console output. Featuring charts, progressbars, tables, trees, text input, select menus and much more 🚀 It's completely configurable and 100% cross-platform compatible. | 13 days ago |
| [progressbar](https://github.com/schollz/progressbar) | 2643 | A really basic thread-safe progress bar for Golang applications | 8 days ago |
| [termdash](https://github.com/mum4k/termdash) | 2034 | Terminal based dashboard. | 6 days ago |
| [asciigraph](https://github.com/guptarohit/asciigraph) | 1987 | Go package to make lightweight ASCII line graph ╭┈╯ in command line apps with no other dependencies. | 3 months ago |
| [uiprogress](https://github.com/gosuri/uiprogress) | 1935 | A go library to render progress bars in terminal applications | a year ago |
| [mpb](https://github.com/vbauerster/mpb) | 1779 | multi progress bar for Go cli applications | 2 days ago |
| [uilive](https://github.com/gosuri/uilive) | 1485 | uilive is a go library for updating terminal output in realtime | 7 months ago |
| [aurora](https://github.com/logrusorgru/aurora) | 1215 | Golang ultimate ANSI-colors that supports Printf/Sprintf methods | a year ago |
| [color](https://github.com/gookit/color) | 1155 | 🎨 Terminal color rendering library, support 8/16 colors, 256 colors, RGB color rendering output, support Print/Sprintf methods, compatible with Windows. GO CLI 控制台颜色渲染工具库，支持16色，256色，RGB色彩渲染输出，使用类似于 Print/Sprintf，兼容并支持 Windows 环境的色彩渲染 | 16 days ago |
| [termenv](https://github.com/muesli/termenv) | 1129 | Advanced ANSI style & color support for your terminal applications | a month ago |
| [uitable](https://github.com/gosuri/uitable) | 653 | A go library to improve readability in terminal apps using tabular data | 4 months ago |
| [go-isatty](https://github.com/mattn/go-isatty) | 634 |  | 2 months ago |
| [go-colorable](https://github.com/mattn/go-colorable) | 632 |  | 9 months ago |
| [gommon](https://github.com/labstack/gommon) | 458 | Common packages for Go | 6 days ago |
| [chalk](https://github.com/ttacon/chalk) | 405 | Intuitive package for prettifying terminal/console output. http://godoc.org/github.com/ttacon/chalk | 3 years ago |
| [simpletable](https://github.com/alexeyco/simpletable) | 379 | Simple tables in terminal with Go | a year ago |
| [yacspin](https://github.com/theckman/yacspin) | 354 | Yet Another CLi Spinner; providing over 80 easy to use and customizable terminal spinners for multiple OSes | 7 months ago |
| [tabby](https://github.com/cheynewallace/tabby) | 319 | A tiny library for super simple Golang tables | 2 years ago |
| [box-cli-maker](https://github.com/Delta456/box-cli-maker) | 224 | Make Highly Customized Boxes for your CLI | 13 days ago |
| [go-colortext](https://github.com/daviddengcn/go-colortext) | 211 | Change the color of console text. | 2 years ago |
| [cfmt](https://github.com/mingrammer/cfmt) | 84 | :art: Contextual fmt inspired by bootstrap color classes | 4 years ago |
| [tabular](https://github.com/InVisionApp/tabular) | 64 | Tabular simplifies printing ASCII tables from command line utilities | 4 years ago |
| [cfmt](https://github.com/i582/cfmt) | 46 | Small library for simple and convenient formatted stylized output to the console. | a year ago |
| [ctc](https://github.com/wzshiming/ctc) | 39 | Console Text Colors - The non-invasive cross-platform terminal color library does not need to modify the Print method | 2 years ago |
| [table](https://github.com/tomlazar/table) | 33 | pretty colorfull tables in go with less effort | a month ago |
| [marker](https://github.com/cyucelen/marker) | 31 |  🖍️ Marker is the easiest way to match and mark strings for colorful terminal outputs! | a month ago |
| [colourize](https://github.com/TreyBastian/colourize) | 26 | An ANSI colour terminal package for Go | 21 days ago |
| [go-ataman](https://github.com/workanator/go-ataman) | 11 | Another Text Attribute Manupulator | 2 years ago |


### [Configuration](#Configuration)
* Libraries for configuration parsing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [viper](https://github.com/spf13/viper) | 20174 | Go configuration with fangs | 16 days ago |
| [godotenv](https://github.com/joho/godotenv) | 5187 | A Go port of Ruby's dotenv library (Loads environment variables from `.env`.) | 2 months ago |
| [envconfig](https://github.com/kelseyhightower/envconfig) | 4189 | Golang library for managing configuration data from environment variables | 8 months ago |
| [ini](https://github.com/go-ini/ini) | 3014 | Package ini provides INI file read and write functionality in Go | a month ago |
| [env](https://github.com/caarlos0/env) | 2616 | A simple and zero-dependencies library to parse environment variables into structs. | 6 days ago |
| [koanf](https://github.com/knadh/koanf) | 1094 | Simple, lightweight, extensible, configuration management library for Go. Support for JSON, TOML, YAML, env, command line, file, S3 etc. Alternative to viper. | 5 days ago |
| [cleanenv](https://github.com/ilyakaznacheev/cleanenv) | 683 | ✨Clean and minimalistic environment configuration reader for Golang | 2 months ago |
| [konfig](https://github.com/lalamove/konfig) | 626 | Composable, observable and performant config handling for Go for the distributed processing era | 2 years ago |
| [confita](https://github.com/heetch/confita) | 450 | Load configuration in cascade from multiple backends into a struct | a year ago |
| [aconfig](https://github.com/cristalhq/aconfig) | 385 | Simple, useful and opinionated config loader. | 17 days ago |
| [config](https://github.com/gookit/config) | 375 | 📝 Go configuration manage(load,get,set,export). support JSON, YAML, TOML, INI, HCL, ENV and Flags. Multi file load, data override merge, parse ENV var. Go应用配置加载管理，支持多种格式，多文件加载，远程文件加载，支持数据合并，解析环境变量名 | 6 days ago |
| [config](https://github.com/JeremyLoy/config) | 314 | 12 factor configuration as a typesafe struct in as little as two function calls | 2 months ago |
| [config](https://github.com/golobby/config) | 288 | A lightweight yet powerful configuration manager for the Go programming language | a month ago |
| [hjson-go](https://github.com/hjson/hjson-go) | 269 | Hjson for Go | 16 days ago |
| [store](https://github.com/tucnak/store) | 261 | A dead simple configuration manager for Go applications | 5 years ago |
| [config](https://github.com/olebedev/config) | 250 | JSON or YAML configuration wrapper with convenient access methods. | 8 months ago |
| [xdg](https://github.com/adrg/xdg) | 246 | Go implementation of the XDG Base Directory Specification and XDG user directories | a day ago |
| [envconfig](https://github.com/vrischmann/envconfig) | 222 | Small library to read your configuration from environment variables | 9 months ago |
| [fig](https://github.com/kkyr/fig) | 222 | A minimalist Go configuration library | 7 months ago |
| [config](https://github.com/joshbetz/config) | 212 | 🛠 A configuration library for Go that parses environment variables, JSON files, and reloads automatically on SIGHUP. | 9 months ago |
| [gcfg](https://github.com/go-gcfg/gcfg) | 161 | read INI-style configuration files into Go structs; supports user-defined types and subsections | a year ago |
| [harvester](https://github.com/beatlabs/harvester) | 113 | Harvest configuration, watch and notify subscriber | 7 days ago |
| [onion](https://github.com/goraz/onion) | 106 | Layer based configuration for golang | a year ago |
| [envcfg](https://github.com/tomazk/envcfg) | 98 | Un-marshaling environment variables to Go structs | 5 years ago |
| [envh](https://github.com/antham/envh) | 95 | Go helpers to manage environment variables | 19 days ago |
| [configuro](https://github.com/sherifabdlnaby/configuro) | 81 | An opinionated configuration loading framework for Containerized and Cloud-Native applications. | a year ago |
| [configuration](https://github.com/BoRuDar/configuration) | 74 | Library for setting values to structs' fields from env, flags, files or default tag | 11 days ago |
| [xdg](https://github.com/OpenPeeDeeP/xdg) | 68 | A cross platform package that follows the XDG Standard | 2 years ago |
| [gofigure](https://github.com/ian-kent/gofigure) | 64 | Go configuration made easy! | 3 years ago |
| [configure](https://github.com/paked/configure) | 56 | Configure is a Go package that gives you easy configuration of your project through redundancy | 3 years ago |
| [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) | 50 | Go package that interfaces with AWS System Manager | 3 months ago |
| [uconfig](https://github.com/omeid/uconfig) | 50 | Lightweight, zero-dependency, and extendable configuration management library for Go | 2 months ago |
| [hocon](https://github.com/gurkankaymak/hocon) | 45 | go implementation of lightbend's HOCON configuration library https://github.com/lightbend/config | 2 days ago |
| [gone](https://github.com/One-com/gone) | 40 | Golang packages for writing small daemons and servers. | a year ago |
| [go-up](https://github.com/ufoscout/go-up) | 37 | go-up! A simple configuration library with recursive placeholders resolution and no magic. | 3 years ago |
| [ingo](https://github.com/schachmat/ingo) | 36 | persistent storage for flags in go | 5 years ago |
| [mini](https://github.com/sasbury/mini) | 31 | A golang package for parsing ini-style configuration files | 4 years ago |
| [genv](https://github.com/sakirsensoy/genv) | 28 | Genv is a library for Go (golang) that makes it easy to read and use environment variables in your projects. It also allows environment variables to be loaded from the .env file. | 3 years ago |
| [conflate](https://github.com/the4thamigo-uk/conflate) | 25 | Library providing routines to merge and validate JSON, YAML and/or TOML files | 2 years ago |
| [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) | 14 | Go utility for loading configuration parameters from AWS SSM (Parameter Store) | 2 years ago |
| [envconf](https://github.com/ian-kent/envconf) | 10 | Configure Go applications from the environment | 8 years ago |
| [ini](https://github.com/wlevene/ini) | 9 | ini parser for golang | 8 months ago |
| [env](https://github.com/nasermirzaei89/env) | 8 | Golang Get Environment Variables Package | 8 months ago |
| [go-ini](https://github.com/subpop/go-ini) | 7 | automatic mirror of https://git.sr.ht/~spc/go-ini | a year ago |
| [typenv](https://github.com/diegomarangoni/typenv) | 7 | Go minimalist typed environment variables library | 2 years ago |
| [swap](https://github.com/oblq/swap) | 6 | Instantiate/configure structs recursively, based on build environment. (YAML, TOML, JSON and env). | 9 months ago |
| [go-conf](https://github.com/ThomasObenaus/go-conf) | 4 | Library for easy configuration of a golang service | 10 months ago |
| [gonfig](https://github.com/miladabc/gonfig) | 4 | Tag based configuration loader from different providers | a year ago |
| [goconfig](https://github.com/crgimenes/goconfig) | 0 |  | 2 months ago |


### [Continuous Integration](#Continuous-Integration)
* Tools for help with continuous integration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [drone](https://github.com/harness/drone) | 25456 | Drone is a Container-Native, Continuous Delivery Platform | 5 days ago |
| [cds](https://github.com/ovh/cds) | 3918 | Enterprise-Grade Continuous Delivery & DevOps Automation Open Source Platform | 3 days ago |
| [goveralls](https://github.com/mattn/goveralls) | 735 |  | a month ago |
| [gotestfmt](https://github.com/haveyoudebuggedit/gotestfmt) | 225 | go test output for humans | 3 months ago |
| [overalls](https://github.com/go-playground/overalls) | 111 | :jeans:Multi-Package go project coverprofile for tools like goveralls | 3 years ago |
| [duci](https://github.com/duck8823/duci) | 74 | The simple ci server  | 5 days ago |
| [gomason](https://github.com/nikogura/gomason) | 53 | A tool for testing, building, signing, and publishing binaries. | 7 months ago |
| [roveralls](https://github.com/lawrencewoodman/roveralls) | 17 | A Go recursive coverage testing tool | 5 years ago |


### [CSS Preprocessors](#CSS-Preprocessors)
* Libraries for preprocessing CSS files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gcss](https://github.com/yosssi/gcss) | 455 | Pure Go CSS Preprocessor | 8 years ago |
| [go-libsass](https://github.com/wellington/go-libsass) | 188 | Go wrapper for libsass, the only Sass 3.5 compiler for Go | 2 years ago |


### [Data Structures](#Data-Structures)
* Generic datastructures and algorithms in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gods](https://github.com/emirpasic/gods) | 12183 | GoDS (Go Data Structures) - Sets, Lists, Stacks, Maps, Trees, Queues, and much more | 4 months ago |
| [go-datastructures](https://github.com/Workiva/go-datastructures) | 6582 | A collection of useful, performant, and threadsafe Go datastructures. | 5 months ago |
| [golang-set](https://github.com/deckarep/golang-set) | 2608 | A simple generic set type for the Go language. Trusted by Docker, 1Password, Ethereum and Hashicorp. | 11 days ago |
| [gota](https://github.com/go-gota/gota) | 2306 | Gota: DataFrames and data wrangling in Go (Golang) | a month ago |
| [roaring](https://github.com/RoaringBitmap/roaring) | 1723 | Roaring bitmaps in Go (golang) | a month ago |
| [bloom](https://github.com/bits-and-blooms/bloom) | 1626 | Go package implementing Bloom filters | 16 days ago |
| [BoomFilters](https://github.com/tylertreat/BoomFilters) | 1466 | Probabilistic data structures for processing continuous, unbounded streams. | a year ago |
| [gocache](https://github.com/eko/gocache) | 1406 | ☔️ A complete Go cache library that brings you multiple ways of managing your caches | 11 minutes ago |
| [bitset](https://github.com/bits-and-blooms/bitset) | 953 | Go package implementing bitsets | 18 days ago |
| [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) | 917 | Cuckoo Filter: Practically Better Than Bloom | 4 months ago |
| [hyperloglog](https://github.com/axiomhq/hyperloglog) | 790 | HyperLogLog with lots of sugar (Sparse, LogLog-Beta bias correction and TailCut space reduction) | 7 months ago |
| [gostl](https://github.com/liyue201/gostl) | 691 | Data structure and algorithm library for go, designed to provide functions similar to C++ STL | 20 days ago |
| [algorithms](https://github.com/shady831213/algorithms) | 658 | CLRS study. Codes are written with golang. | a year ago |
| [trie](https://github.com/derekparker/trie) | 598 | Data structure and relevant algorithms for extremely fast prefix/fuzzy string searching. | 5 months ago |
| [ttlcache](https://github.com/jellydator/ttlcache) | 469 | An in-memory cache with item expiration and generics | 16 days ago |
| [deque](https://github.com/gammazero/deque) | 361 | Fast ring-buffer deque (double-ended queue) | 12 days ago |
| [merkletree](https://github.com/cbergoon/merkletree) | 356 | A Merkle Tree implementation written in Go. | 5 months ago |
| [go-geoindex](https://github.com/hailocab/go-geoindex) | 342 | Go native library for fast point tracking and K-Nearest queries | 4 years ago |
| [go-edlib](https://github.com/hbollon/go-edlib) | 335 | 📚 String comparison and edit distance algorithms library, featuring : Levenshtein, LCS, Hamming, Damerau levenshtein (OSA and Adjacent transpositions algorithms), Jaro-Winkler, Cosine, etc... | a month ago |
| [hilbert](https://github.com/google/hilbert) | 253 | Go package for mapping values to and from space-filling curves, such as Hilbert and Peano curves. | 4 years ago |
| [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) | 240 | Adaptive Radix Trees implemented in Go | 2 years ago |
| [goskiplist](https://github.com/ryszard/goskiplist) | 236 | A skip list implementation in Go | 3 years ago |
| [levenshtein](https://github.com/agnivade/levenshtein) | 226 | Go implementation to calculate Levenshtein Distance. | 42 minutes ago |
| [cuckoo-filter](https://github.com/linvon/cuckoo-filter) | 222 | Cuckoo Filter go implement, better than Bloom Filter, configurable and space optimized  布谷鸟过滤器的Go实现，优于布隆过滤器，可以定制化过滤器参数，并进行了空间优化 | 5 months ago |
| [skiplist](https://github.com/MauriceGit/skiplist) | 212 | A Go library for an efficient implementation of a skip list: https://godoc.org/github.com/MauriceGit/skiplist | 6 months ago |
| [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) | 199 | Go concurrent-safe, goroutine-safe, thread-safe queue | 5 months ago |
| [binpacker](https://github.com/zhuangsirui/binpacker) | 189 | A binary stream packer and unpacker | 10 months ago |
| [bitmap](https://github.com/kelindar/bitmap) | 162 | Simple dense bitmap index in Go with binary operators | 2 months ago |
| [iter](https://github.com/disksing/iter) | 159 | Go implementation of C++ STL iterators and algorithms. | 5 months ago |
| [bloom](https://github.com/zentures/bloom) | 147 | Bloom filters implemented in Go. | 4 years ago |
| [bit](https://github.com/yourbasic/bit) | 127 | Bitset data structure | 4 years ago |
| [ring](https://github.com/tannerryan/ring) | 127 | Package ring provides a high performance and thread safe Go implementation of a bloom filter. | 2 years ago |
| [encoding](https://github.com/zentures/encoding) | 124 | Integer Compression Libraries for Go | 5 years ago |
| [go-rquad](https://github.com/arl/go-rquad) | 120 | :pushpin: State of the art point location and neighbour finding algorithms for region quadtrees, in Go | 2 months ago |
| [remember-go](https://github.com/rocketlaunchr/remember-go) | 115 | Cache Slow Database Queries | a year ago |
| [conjungo](https://github.com/InVisionApp/conjungo) | 106 | A small flexible merge library in go | 2 years ago |
| [go-mcache](https://github.com/OrlovEvgeny/go-mcache) | 83 | Fast in-memory key:value store/cache with TTL | 3 years ago |
| [skiplist](https://github.com/gansidui/skiplist) | 79 | skiplist for golang | 8 years ago |
| [bloom](https://github.com/yourbasic/bloom) | 73 | Probabilistic set data structure | 5 years ago |
| [levenshtein](https://github.com/agext/levenshtein) | 68 | Levenshtein distance and similarity metrics with customizable edit costs and Winkler-like bonus for common prefix. | 2 years ago |
| [crunch](https://github.com/superwhiskers/crunch) | 59 | take bytes out of things easily ✨🍪 | 4 months ago |
| [count-min-log](https://github.com/seiflotfy/count-min-log) | 57 | Go implementation of Count-Min-Log | 5 years ago |
| [deque](https://github.com/edwingeng/deque) | 57 | A highly optimized double-ended queue | 12 days ago |
| [nan](https://github.com/kak-tus/nan) | 54 | Zero allocation Nullable structures in one library with handy conversion functions, marshallers and unmarshallers | a month ago |
| [goset](https://github.com/zoumo/goset) | 49 | Set is a useful collection but there is no built-in implementation in Go lang. | 2 years ago |
| [hide](https://github.com/emvi/hide) | 48 | ID type with marshalling to/from hash to prevent sending IDs to clients. | 9 months ago |
| [concurrent-writer](https://github.com/free/concurrent-writer) | 44 | Highly concurrent drop-in replacement for bufio.Writer | 5 years ago |
| [timedmap](https://github.com/zekroTJA/timedmap) | 42 | A thread safe map which has expiring key-value pairs. | 3 months ago |
| [pipeline](https://github.com/hyfather/pipeline) | 40 | Pipelines using goroutines | 9 months ago |
| [cmap](https://github.com/lrita/cmap) | 34 | a thread-safe concurrent map for go | 2 months ago |
| [typ](https://github.com/gurukami/typ) | 32 | Null Types, Safe primitive type conversion and fetching value from complex structures. | 10 months ago |
| [dict](https://github.com/srfrog/dict) | 29 | Python-like dictionaries for Go | 2 years ago |
| [ptrie](https://github.com/viant/ptrie) | 29 | A prefix tree implementation in go  | 4 months ago |
| [null](https://github.com/emvi/null) | 27 | Nullable Go types that can be marshalled/unmarshalled to/from JSON. | 9 months ago |
| [go-ef](https://github.com/amallia/go-ef) | 21 | A Go implementation of the Elias-Fano encoding | 5 years ago |
| [set](https://github.com/StudioSol/set) | 21 | A simple Set data structure implementation in Go (Golang) using LinkedHashMap. | 2 months ago |
| [parapipe](https://github.com/nazar256/parapipe) | 19 | Paralleling pipeline | a year ago |
| [treap](https://github.com/perdata/treap) | 19 | golang persistent immutable treap sorted sets | 3 years ago |
| [mspm](https://github.com/BlackRabbitt/mspm) | 17 | Multi-String Pattern Matching Algorithm Using TrieHashNode | 4 years ago |
| [gofal](https://github.com/xxjwxc/gofal) | 15 | fractional api base on golang . golang math tools fractional molecular denominator 分数计算 分子 分母 运算 | 3 years ago |
| [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) | 14 | Ordered-concurrently a library for concurrent processing with ordered output in Go. Process work concurrently and returns output in a channel in the order of input. It is useful in concurrently processing items in a queue, and get output in the order provided by the queue. | 5 months ago |
| [hashsplit](https://github.com/bobg/hashsplit) | 10 |  | a year ago |
| [bloomfilter](https://github.com/OldPanda/bloomfilter) | 9 | Yet another Bloomfilter implementation in Go, compatible with Java's Guava library | a year ago |
| [gdcache](https://github.com/ulovecode/gdcache) | 9 | gdcache is a pure non-intrusive cache library implemented by golang, you can use it to implement your own cache. | 10 months ago |
| [goterator](https://github.com/yaa110/goterator) | 9 | Lazy iterator implementation for Golang | 2 years ago |
| [slices](https://github.com/srfrog/slices) | 7 | Functions that operate on slices. Similar to functions from package strings or package bytes that have been adapted to work with slices. | 2 years ago |
| [dsu](https://github.com/ihebu/dsu) | 6 | Disjoint Set data structure implementation in Go | 6 months ago |
| [parsefields](https://github.com/MonaxGT/parsefields) | 6 | Tools for parse JSON-like logs for collecting unique fields and events | 3 years ago |
| [merkle](https://github.com/bobg/merkle) | 3 | Merkle hash trees | 3 months ago |


### [Database](#Database)
* Databases in Go.

#### [Databases implemented in Go](#Databases-implemented-in-Go)
* Databases implemented in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [prometheus](https://github.com/prometheus/prometheus) | 43712 | The Prometheus monitoring system and time series database. | 2 days ago |
| [tidb](https://github.com/pingcap/tidb) | 32003 | TiDB is an open-source, cloud-native, distributed, MySQL-Compatible database for elastic scale and real-time analytics. Try free: https://tidbcloud.com/free-trial | 10 minutes ago |
| [leveldb](https://github.com/google/leveldb) | 30097 | LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values. | 20 days ago |
| [cockroach](https://github.com/cockroachdb/cockroach) | 25275 | CockroachDB - the open source, cloud-native distributed SQL database. | an hour ago |
| [influxdb](https://github.com/influxdata/influxdb) | 23927 | Scalable datastore for metrics, events, and real-time analytics | 2 days ago |
| [dgraph](https://github.com/dgraph-io/dgraph) | 18313 | Native GraphQL Database with graph backend | 17 days ago |
| [groupcache](https://github.com/golang/groupcache) | 11597 | groupcache is a caching and cache-filling library, intended as a replacement for memcached in many cases. | 20 days ago |
| [milvus](https://github.com/milvus-io/milvus) | 11525 | Vector database for scalable similarity search and AI applications. | 3 hours ago |
| [badger](https://github.com/dgraph-io/badger) | 11151 | Fast key-value DB in Go. | 6 days ago |
| [rqlite](https://github.com/rqlite/rqlite) | 10807 | The lightweight, distributed relational database built on SQLite | 17 hours ago |
| [immudb](https://github.com/codenotary/immudb) | 7730 | immudb - immutable database based on zero trust, SQL and Key-Value, tamperproof, data change history | 3 days ago |
| [dtm](https://github.com/dtm-labs/dtm) | 7201 | A service orchestrator for distributed transactions, supports workflow, saga, tcc, xa, 2-phase message, outbox patterns, supports many languages. | 5 days ago |
| [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) | 6869 | VictoriaMetrics: fast, cost-effective monitoring solution and time series database | 6 hours ago |
| [go-cache](https://github.com/patrickmn/go-cache) | 6378 | An in-memory key:value store/cache (similar to Memcached) library for Go, suitable for single-machine applications. | 14 days ago |
| [bigcache](https://github.com/allegro/bigcache) | 5922 | Efficient cache for gigabytes of data written in Go. | 6 days ago |
| [bbolt](https://github.com/etcd-io/bbolt) | 5764 | An embedded key/value database for Go. | 2 months ago |
| [goleveldb](https://github.com/syndtr/goleveldb) | 5295 | LevelDB key/value database in Go. | 6 hours ago |
| [ledisdb](https://github.com/ledisdb/ledisdb) | 3884 | A high performance NoSQL Database Server powered by Go | 6 months ago |
| [buntdb](https://github.com/tidwall/buntdb) | 3831 | BuntDB is an embeddable, in-memory key/value database for Go with custom indexing and geospatial support | 3 months ago |
| [rosedb](https://github.com/flower-corp/rosedb) | 3106 | 🚀 A high performance NoSQL database based on bitcask, supports string, list, hash, set, and sorted set. | 19 hours ago |
| [tiedot](https://github.com/HouzuoGuo/tiedot) | 2691 | A rudimentary implementation of a basic document (NoSQL) database in Go | a year ago |
| [nutsdb](https://github.com/nutsdb/nutsdb) | 2347 | A simple, fast, embeddable, persistent key/value store written in pure Go. It supports fully serializable transactions and many data structures such as  list, set, sorted set. | 8 hours ago |
| [godis](https://github.com/HDT3213/godis) | 2072 | A Golang implemented Redis Server and Cluster. Go 语言实现的 Redis 服务器和分布式集群 | 8 days ago |
| [gcache](https://github.com/bluele/gcache) | 2036 | An in-memory cache library for golang. It supports multiple eviction policies: LRU, LFU, ARC | 2 months ago |
| [cache2go](https://github.com/muesli/cache2go) | 1795 | Concurrency-safe Go caching library with expiration capabilities and access counters | 16 days ago |
| [fastcache](https://github.com/VictoriaMetrics/fastcache) | 1516 | Fast thread-safe inmemory cache for big number of entries in Go. Minimizes GC overhead | 3 days ago |
| [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) | 1353 | A decentralized, trusted, high performance, SQL database with blockchain features | 2 months ago |
| [diskv](https://github.com/peterbourgon/diskv) | 1198 | A disk-backed key-value store. | 9 months ago |
| [databunker](https://github.com/securitybunker/databunker) | 998 | Secure SDK/vault for personal records/PII built to comply with GDPR | 18 days ago |
| [column](https://github.com/kelindar/column) | 959 | High-performance, columnar, in-memory store with bitmap indexing in Go | a month ago |
| [eliasdb](https://github.com/krotik/eliasdb) | 931 | EliasDB a graph-based database. | 5 months ago |
| [pogreb](https://github.com/akrylysov/pogreb) | 914 | Embedded key-value store for read-heavy workloads written in Go | a year ago |
| [moss](https://github.com/couchbase/moss) | 879 | moss - a simple, fast, ordered, persistable, key-val storage library for golang | 5 months ago |
| [levigo](https://github.com/jmhodges/levigo) | 405 | levigo is a Go wrapper for LevelDB | 5 months ago |
| [pudge](https://github.com/recoilme/pudge) | 327 | Fast and simple key/value store written using Go's standard library | a year ago |
| [kivik](https://github.com/go-kivik/kivik) | 239 | Kivik provides a common interface to CouchDB or CouchDB-like databases for Go and GopherJS. | 4 months ago |
| [vasto](https://github.com/chrislusf/vasto) | 238 | A distributed key-value store. On Disk. Able to grow or shrink without service interruption. | 3 years ago |
| [piladb](https://github.com/fern4lvarez/piladb) | 195 | Lightweight RESTful database engine based on stack data structures | 2 years ago |
| [golang-scribble](https://github.com/nanobox-io/golang-scribble) | 149 | A tiny Golang JSON database | 3 years ago |
| [cache](https://github.com/akyoto/cache) | 110 | :handbag: Cache arbitrary data with an expiration time. | 2 years ago |
| [slowpoke](https://github.com/recoilme/slowpoke) | 99 | Low-level key/value store in pure Go.  | 3 years ago |
| [unitdb](https://github.com/unit-io/unitdb) | 94 | Fast specialized time-series database for IoT, real-time internet connected devices and AI analytics. | 9 months ago |
| [bcache](https://github.com/iwanbk/bcache) | 89 | Eventually consistent distributed in-memory  cache Go library | 3 years ago |
| [hare](https://github.com/jameycribbs/hare) | 58 | Hare is a nimble little database management system for Go. | a year ago |
| [couchcache](https://github.com/codingsince1985/couchcache) | 57 | A RESTful caching micro-service in Go backed by Couchbase | 10 months ago |
| [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) | 41 | golang bigcache with clustering as a library. | 5 years ago |
| [coffer](https://github.com/claygod/coffer) | 30 | Simply ACID* key-value database. At the medium or even low latency it tries to provide greater throughput without losing the ACID properties of the database. The database provides the ability to create record headers at own discretion and use them as transactions. The maximum size of stored data is limited by the size of the computer's RAM. | 3 months ago |
| [tempdb](https://github.com/rafaeljesus/tempdb) | 16 | Key-value store for temporary items :memo: | 4 years ago |
| [ttlcache](https://github.com/cheshir/ttlcache) | 6 | Simple in-memory key-value storage with TTL for each record. | 3 months ago |


#### [Database schema migration](#Database-schema-migration)
* Database schema migration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [migrate](https://github.com/golang-migrate/migrate) | 9321 | Database migrations. CLI and Golang library. | 11 hours ago |
| [goose](https://github.com/pressly/goose) | 2878 | A database migration tool. Supports SQL migrations and Go functions.  | 5 hours ago |
| [sql-migrate](https://github.com/rubenv/sql-migrate) | 2529 | SQL schema migration tool for Go. | 2 months ago |
| [pop](https://github.com/gobuffalo/pop) | 1220 | A Tasty Treat For All Your Database Needs | 13 days ago |
| [skeema](https://github.com/skeema/skeema) | 1042 | Declarative pure-SQL schema management for MySQL and MariaDB | 2 days ago |
| [goavro](https://github.com/linkedin/goavro) | 818 |  | 6 days ago |
| [gormigrate](https://github.com/go-gormigrate/gormigrate) | 799 | Minimalistic database migration helper for Gorm ORM | 2 days ago |
| [darwin](https://github.com/GuiaBolso/darwin) | 132 | Database schema evolution library for Go | a year ago |
| [migrator](https://github.com/lopezator/migrator) | 127 | Dead simple Go database migration library. | 3 months ago |
| [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) | 81 | A Go package to help write migrations with go-pg/pg. | a year ago |
| [avro](https://github.com/khezen/avro) | 38 | Apache AVRO for go | 7 months ago |
| [sqlize](https://github.com/sunary/sqlize) | 37 | sql migration schema generate from models | 15 days ago |
| [go-fixtures](https://github.com/RichardKnop/go-fixtures) | 28 | Django style fixtures for Golang's excellent built-in database/sql library. | 3 years ago |
| [pravasan](https://github.com/pravasan/pravasan) | 28 | Simple Migration Tool - written in Go | 4 years ago |
| [schema](https://github.com/adlio/schema) | 24 | Embedded schema migration package for Go | 2 months ago |
| [migrator](https://github.com/larapulse/migrator) | 19 | MySQL database migrator | 17 days ago |
| [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) | 7 | CLI-friendly package for pg migrations management. | 8 months ago |


#### [Database tools.](#Database-tools)
* Database-tools.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vitess](https://github.com/vitessio/vitess) | 14469 | Vitess is a database clustering system for horizontal scaling of MySQL. | 30 minutes ago |
| [pgweb](https://github.com/sosedoff/pgweb) | 7390 | Cross-platform client for PostgreSQL databases | 12 days ago |
| [kingshard](https://github.com/flike/kingshard) | 6070 | A high-performance MySQL proxy | a year ago |
| [orchestrator](https://github.com/openark/orchestrator) | 4614 | MySQL replication topology management and HA | 3 months ago |
| [go-mysql-elasticsearch](https://github.com/go-mysql-org/go-mysql-elasticsearch) | 3807 | Sync MySQL data into elasticsearch  | 3 months ago |
| [go-mysql](https://github.com/go-mysql-org/go-mysql) | 3726 | a powerful mysql toolset with Go | 13 days ago |
| [prest](https://github.com/prest/prest) | 3320 | PostgreSQL ➕ REST, low-code, simplify and accelerate development, ⚡ instant, realtime, high-performance on any Postgres application, existing or new | a month ago |
| [chproxy](https://github.com/ContentSquare/chproxy) | 947 | Open-Source ClickHouse http proxy and load balancer | 17 minutes ago |
| [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) | 765 | pg_timetable: Advanced scheduling for PostgreSQL | 2 hours ago |
| [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) | 375 | Collects many small inserts to ClickHouse and send in big inserts | 3 months ago |
| [myreplication](https://github.com/2tvenom/myreplication) | 187 | Golang MySql binary log replication listener | 4 years ago |
| [octillery](https://github.com/blastrain/octillery) | 167 | Go package for sharding databases ( Supports every ORM or raw SQL ) | a year ago |
| [dbbench](https://github.com/sj14/dbbench) | 72 | 🏋️ dbbench is a simple database benchmarking tool which supports several databases and own scripts | a day ago |
| [datagen](https://github.com/codingconcepts/datagen) | 48 | A fast data generator that's multi-table aware and supports multi-row DML. | 2 years ago |
| [prep](https://github.com/hexdigest/prep) | 31 | Prep finds all SQL statements in a Go package and instruments db connection with prepared statements | 5 years ago |
| [rwdb](https://github.com/andizzle/rwdb) | 15 | Database wrapper that manage read write connections | 5 years ago |


#### [SQL query builder](#SQL-query-builder)
* SQL query builder, libraries for building and using SQL.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [squirrel](https://github.com/Masterminds/squirrel) | 5054 | Fluent SQL generation for golang | 7 days ago |
| [xo](https://github.com/xo/xo) | 3185 | Command line tool to generate idiomatic Go code for SQL databases supporting PostgreSQL, MySQL, SQLite, Oracle, and Microsoft SQL Server | 2 days ago |
| [goqu](https://github.com/doug-martin/goqu) | 1623 | SQL builder and query library for golang | a month ago |
| [gendry](https://github.com/didi/gendry) | 1413 | a golang library for sql builder | 17 days ago |
| [jet](https://github.com/go-jet/jet) | 770 | Type safe SQL builder with code generation and automatic query result data mapping | 2 months ago |
| [dotsql](https://github.com/qustavo/dotsql) | 643 | A Golang library for using SQL. | 2 months ago |
| [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) | 565 | A Go (golang) package that enhances the standard database/sql package by providing powerful data retrieval methods as well as DB-agnostic query building capabilities. | 25 days ago |
| [dbq](https://github.com/rocketlaunchr/dbq) | 350 | Zero boilerplate database operations for Go | a year ago |
| [sqlingo](https://github.com/lqs/sqlingo) | 250 | 💥 A lightweight DSL & ORM which helps you to write SQL in Go. | 3 days ago |
| [sqrl](https://github.com/elgris/sqrl) | 242 | Fluent SQL generation for golang | 4 months ago |
| [go-structured-query](https://github.com/bokwoon95/go-structured-query) | 169 | Type safe SQL query builder and struct mapper for Go | 2 months ago |
| [igor](https://github.com/galeone/igor) | 86 | igor is an abstraction layer for PostgreSQL with a gorm like syntax. | 2 years ago |
| [sqlf](https://github.com/leporo/sqlf) | 80 | Fast SQL query builder for Go | 3 months ago |
| [buildsqlx](https://github.com/arthurkushman/buildsqlx) | 69 | Go database query builder library for PostgreSQL | 5 days ago |
| [godbal](https://github.com/xujiajun/godbal) | 53 | Database Abstraction Layer (dbal) for Go. Support SQL builder and get result easily  (now only support mysql) | 4 years ago |
| [gosql](https://github.com/twharmon/gosql) | 23 | SQL query builder for Go | 4 months ago |
| [qry](https://github.com/HnH/qry) | 22 | Write your SQL queries in raw files with all benefits of modern IDEs, use them in an easy way inside your application with all the profit of compile time constants | 10 months ago |
| [mpath-go](https://github.com/spacetab-io/mpath-go) | 11 | Golang package for MPTT (Modified Preorder Tree Traversal) - materialized path realisation. | 3 years ago |
| [ormlite](https://github.com/pupizoid/ormlite) | 3 | Lightweight package containing some ORM-like features and helpers for sqlite databases. | 2 years ago |


### [Database Drivers](#Database-Drivers)
* Libraries for connecting and operating databases.

#### [Relational Databases](#Relational-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mysql](https://github.com/go-sql-driver/mysql) | 12476 | Go MySQL Driver is a MySQL driver for Go's (golang) database/sql package | 3 days ago |
| [pq](https://github.com/lib/pq) | 7503 | Pure Go Postgres driver for database/sql | 11 days ago |
| [go-sqlite3](https://github.com/mattn/go-sqlite3) | 5891 | sqlite3 driver for go using database/sql | 3 days ago |
| [pgx](https://github.com/jackc/pgx) | 5821 | PostgreSQL driver and toolkit for Go | 2 days ago |
| [go-mssqldb](https://github.com/denisenkom/go-mssqldb) | 1610 | Microsoft SQL server driver written in go language | 17 days ago |
| [scany](https://github.com/georgysavva/scany) | 624 | Library for scanning data from a database into Go structs and more | 5 days ago |
| [go-oci8](https://github.com/mattn/go-oci8) | 592 | Oracle driver for Go using database/sql | 9 months ago |
| [godror](https://github.com/godror/godror) | 380 | GO DRiver for ORacle DB | 11 days ago |
| [firebirdsql](https://github.com/nakagami/firebirdsql) | 173 | Firebird RDBMS sql driver for Go (golang) | 4 days ago |
| [go-adodb](https://github.com/mattn/go-adodb) | 127 | Microsoft ActiveX Object DataBase driver for go that using exp/sql | 4 months ago |
| [sqinn-go](https://github.com/cvilsmeier/sqinn-go) | 124 | SQLite with pure Go | a year ago |
| [gofreetds](https://github.com/minus5/gofreetds) | 106 | Go Sql Server database driver. | 2 years ago |
| [calcite-avatica-go](https://github.com/apache/calcite-avatica-go) | 98 | Mirror of Apache Calcite - Avatica Go SQL Driver | 3 months ago |
| [bgc](https://github.com/viant/bgc) | 16 | Datastore Connectivity for BigQuery in go | 2 years ago |
| [pig](https://github.com/alexeyco/pig) | 9 | Simple pgx wrapper to execute and scan query results | a year ago |


#### [NoSQL Databases](#NoSQL-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [redis](https://github.com/go-redis/redis) | 15069 | Type-safe Redis client for Golang | 41 minutes ago |
| [redigo](https://github.com/gomodule/redigo) | 9218 | Go client for Redis | 13 days ago |
| [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) | 6841 | The Go driver for MongoDB | 2 days ago |
| [mgo](https://github.com/globalsign/mgo) | 1948 | The MongoDB driver for Go | 9 months ago |
| [rethinkdb-go](https://github.com/rethinkdb/rethinkdb-go) | 1606 | Go language driver for RethinkDB | 2 months ago |
| [gomemcache](https://github.com/bradfitz/gomemcache) | 1499 | Go Memcached client library #golang | a month ago |
| [qmgo](https://github.com/qiniu/qmgo) | 942 | Qmgo - The Go driver for MongoDB. It‘s based on official mongo-go-driver but easier to use like Mgo. | 24 days ago |
| [mgm](https://github.com/Kamva/mgm) | 538 | Mongo Go Models (mgm) is a fast and simple MongoDB ODM for Go (based on official Mongo Go Driver) | 2 months ago |
| [redeo](https://github.com/bsm/redeo) | 416 | High-performance framework for building redis-protocol compatible TCP servers/services | 2 years ago |
| [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) | 394 | Aerospike Client Go  | 11 days ago |
| [neoism](https://github.com/jmcvetta/neoism) | 388 | Neo4j client for Golang | 2 years ago |
| [gocb](https://github.com/couchbase/gocb) | 337 | The Couchbase Go SDK | 5 days ago |
| [go-couchbase](https://github.com/couchbase/go-couchbase) | 316 | Couchbase client in Go | 4 months ago |
| [go-rejson](https://github.com/nitishm/go-rejson) | 274 | Golang client for redislabs' ReJSON module with support for multilple redis clients (redigo, go-redis) | a month ago |
| [godis](https://github.com/piaohao/godis) | 105 | redis client implement by golang, inspired by jedis. | 2 years ago |
| [Neo4j-GO](https://github.com/davemeehan/Neo4j-GO) | 76 | Neo4j REST Client in golang | 4 years ago |
| [arangolite](https://github.com/solher/arangolite) | 72 | Lightweight Golang driver for ArangoDB | a year ago |
| [go-pilosa](https://github.com/pilosa/go-pilosa) | 54 | Go client library for Pilosa | 2 years ago |
| [goforestdb](https://github.com/couchbase/goforestdb) | 32 | Go bindings for ForestDB | 6 years ago |
| [goriak](https://github.com/zegl/goriak) | 27 | goriak - Go language driver for Riak KV | a year ago |
| [neo4j](https://github.com/cihangir/neo4j) | 27 | Neo4j Rest API Client for Go lang | 7 years ago |
| [xredis](https://github.com/shomali11/xredis) | 18 | Go Redis Client | 3 years ago |
| [godscache](https://github.com/defcronyke/godscache) | 10 | An unofficial Google Cloud Platform Go Datastore wrapper that adds caching using memcached. For App Engine Flexible, Compute Engine, Kubernetes Engine, and more. | 4 years ago |
| [gocosmos](https://github.com/btnguyen2k/gocosmos) | 9 | Go driver for Azure CosmosDB SQL API | 2 months ago |
| [asc](https://github.com/viant/asc) | 8 | Datastore Connectivity for Aerospike for go | 3 years ago |


#### [Search and Analytic Databases](#Search-and-Analytic-Databases)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bleve](https://github.com/blevesearch/bleve) | 8541 | A modern text indexing library for go | 3 hours ago |
| [elastic](https://github.com/olivere/elastic) | 6955 | Elasticsearch client for Go. | a day ago |
| [riot](https://github.com/go-ego/riot) | 6070 | Go Open Source, Distributed, Simple and efficient Search Engine; Warning: This is V1 and beta version, because of big memory consume, and the V2 will be rewrite all code. | 2 years ago |
| [go-elasticsearch](https://github.com/elastic/go-elasticsearch) | 4265 | The official Go client for Elasticsearch | 11 days ago |
| [elastigo](https://github.com/mattbaird/elastigo) | 947 | A Go (golang) based Elasticsearch client library. | 4 years ago |
| [elasticsql](https://github.com/cch123/elasticsql) | 946 | convert sql to elasticsearch DSL in golang(go) | a month ago |
| [skizze](https://github.com/seiflotfy/skizze) | 85 | A probabilistic data structure service and storage | 6 years ago |
| [goes](https://github.com/OwnLocal/goes) | 28 | A library to interact with Elasticsearch in Go! | 2 years ago |


#### [Multiple Backends](#Multiple-Backends)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cayley](https://github.com/cayleygraph/cayley) | 14284 | An open-source graph database | 5 months ago |
| [gokv](https://github.com/philippgille/gokv) | 453 | Simple key-value store abstraction and implementations for Go (Redis, Consul, etcd, bbolt, BadgerDB, LevelDB, Memcached, DynamoDB, S3, PostgreSQL, MongoDB, CockroachDB and many more) | 2 months ago |
| [cachego](https://github.com/faabiosr/cachego) | 178 | Golang Cache component - Multiple drivers | 2 months ago |
| [dsc](https://github.com/viant/dsc) | 25 | Datastore Connectivity in go | 6 months ago |


### [Date and Time](#Date-and-Time)
* Libraries for working with dates and times.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [now](https://github.com/jinzhu/now) | 3785 | Now is a time toolkit for golang | a month ago |
| [carbon](https://github.com/golang-module/carbon) | 2177 | A simple, semantic and developer-friendly golang package for datetime | 6 days ago |
| [dateparse](https://github.com/araddon/dateparse) | 1765 | GoLang Parse many date strings without knowing format in advance. | 6 months ago |
| [carbon](https://github.com/uniplaces/carbon) | 721 | Carbon for Golang, an extension for Time | 3 months ago |
| [durafmt](https://github.com/hako/durafmt) | 442 | :clock8:  Better time duration formatting in Go!  | a year ago |
| [timeutil](https://github.com/leekchan/timeutil) | 189 | timeutil - useful extensions (Timedelta, Strftime, ...) to the golang's time package | 4 years ago |
| [gostradamus](https://github.com/bykof/gostradamus) | 169 | Gostradamus: Better DateTimes for Go 🕰️ | 9 months ago |
| [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) | 125 | The implementation of Persian (Solar Hijri) Calendar in Go | 16 days ago |
| [iso8601](https://github.com/relvacode/iso8601) | 105 | A fast ISO8601 date parser for Go | 5 months ago |
| [date](https://github.com/rickb777/date) | 91 | A Go package for working with dates | 5 days ago |
| [timespan](https://github.com/SaidinWoT/timespan) | 82 | Golang package to manipulate time intervals. | 3 years ago |
| [go-sunrise](https://github.com/nathan-osman/go-sunrise) | 52 | Go package for calculating the sunrise and sunset times for a given location | a year ago |
| [feiertage](https://github.com/wlbr/feiertage) | 42 | Gesetzliche Feiertage und mehr in Deutschland und Österreich (Bank holidays/public holidays in Austria and Germany) | a year ago |
| [go-str2duration](https://github.com/xhit/go-str2duration) | 42 | Convert string to duration in golang | 2 years ago |
| [kair](https://github.com/GuilhermeCaruso/kair) | 23 | :clock1: Date and Time - Golang Formatting Library | 2 years ago |
| [cronrange](https://github.com/1set/cronrange) | 17 | time range expression in cron style | 6 months ago |
| [nulltime](https://github.com/kirillDanshin/nulltime) | 12 |  | 5 years ago |
| [tuesday](https://github.com/osteele/tuesday) | 11 | Ruby-compatible strftime for golang | a year ago |
| [strftime](https://github.com/awoodbeck/strftime) | 10 | C99-compatible strftime formatter for use with Go time.Time instances. | 4 years ago |
| [go-week](https://github.com/stoewer/go-week) | 7 | A Go package to work with ISO 8601 week dates | 9 months ago |


### [Distributed Systems](#Distributed-Systems)
* Packages that help with building Distributed Systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [etcd](https://github.com/etcd-io/etcd) | 40770 | Distributed reliable key-value store for the most critical data of a distributed system | 16 hours ago |
| [kit](https://github.com/go-kit/kit) | 23583 | A standard library for microservices. | 4 days ago |
| [go-zero](https://github.com/zeromicro/go-zero) | 19677 | A cloud-native Go microservices framework with cli tool for productivity. | a day ago |
| [go-micro](https://github.com/asim/go-micro) | 18826 | A Go microservices framework | 6 days ago |
| [kratos](https://github.com/go-kratos/kratos) | 18545 | Your ultimate Go microservices framework for the cloud-native era. | 4 days ago |
| [grpc-go](https://github.com/grpc/grpc-go) | 16531 | The Go language implementation of gRPC. HTTP/2 based RPC | 2 days ago |
| [nats-server](https://github.com/nats-io/nats-server) | 11314 | High-Performance server for NATS.io, the cloud and edge native messaging system. | 5 hours ago |
| [micro](https://github.com/micro/micro) | 11245 | API first development platform | 9 days ago |
| [libzmq](https://github.com/zeromq/libzmq) | 7914 | ZeroMQ core engine in C++, implements ZMTP/3.1 | 3 days ago |
| [rpcx](https://github.com/smallnest/rpcx) | 7149 | Best microservices framework in Go, like alibaba Dubbo, but with more features, Scale easily. Try it. Test it. If you feel it's better, use it! 𝐉𝐚𝐯𝐚有𝐝𝐮𝐛𝐛𝐨, 𝐆𝐨𝐥𝐚𝐧𝐠有𝐫𝐩𝐜𝐱! build for cloud! | 4 days ago |
| [raft](https://github.com/hashicorp/raft) | 6272 | Golang implementation of the Raft consensus protocol | 3 days ago |
| [lura](https://github.com/luraproject/lura) | 5176 | Ultra performant API Gateway with middlewares. A project hosted at The Linux Foundation | 2 months ago |
| [torrent](https://github.com/anacrolix/torrent) | 4453 | Full-featured BitTorrent client package and utilities | an hour ago |
| [dragonboat](https://github.com/lni/dragonboat) | 4305 | A feature complete and high performance multi-group Raft library in Go.   | 5 days ago |
| [emitter](https://github.com/emitter-io/emitter) | 3321 | High performance, distributed and low latency publish-subscribe platform. | 5 months ago |
| [gleam](https://github.com/chrislusf/gleam) | 3091 | Fast, efficient, and scalable distributed map/reduce system, DAG execution, in memory or on disk, written in pure Go, runs standalone or distributedly. | a year ago |
| [glow](https://github.com/chrislusf/glow) | 3079 | Glow is an easy-to-use distributed computation system written in Go, similar to Hadoop Map Reduce, Spark, Flink, Storm, etc. I am also working on another similar pure Go system, https://github.com/chrislusf/gleam , which is more flexible and more performant. | 4 years ago |
| [liftbridge](https://github.com/liftbridge-io/liftbridge) | 2307 | Lightweight, fault-tolerant message streams. | 3 months ago |
| [hprose-golang](https://github.com/hprose/hprose-golang) | 1209 | Hprose is a cross-language RPC. This project is Hprose for Golang. | 2 months ago |
| [go-doudou](https://github.com/unionj-cloud/go-doudou) | 838 | go-doudou（doudou pronounce /dəudəu/）is OpenAPI 3.0 spec based lightweight microservice framework. It supports monolith service application as well. Currently, it supports RESTful service only. 中文文档地址：https://go-doudou.unionj.cloud | 4 days ago |
| [redislock](https://github.com/bsm/redislock) | 758 | Simplified distributed locking implementation using Redis | 14 days ago |
| [rain](https://github.com/cenkalti/rain) | 748 | 🌧 BitTorrent client and library in Go | 16 days ago |
| [ringpop-go](https://github.com/uber/ringpop-go) | 742 | Scalable, fault-tolerant application-layer sharding for Go applications | 16 days ago |
| [gorpc](https://github.com/valyala/gorpc) | 652 | Simple, fast and scalable golang rpc library for high load | 3 years ago |
| [go-health](https://github.com/InVisionApp/go-health) | 627 | Library for enabling asynchronous health checks in your service | a month ago |
| [arpc](https://github.com/lesismal/arpc) | 570 | More effective network communication, two-way calling, notify and broadcast supported. | 2 months ago |
| [consistent](https://github.com/buraksezer/consistent) | 495 | Consistent hashing with bounded loads in Golang | 3 months ago |
| [go-sundheit](https://github.com/AppsFlyer/go-sundheit) | 487 | A library built to provide support for defining service health for golang services. It allows you to register async health checks for your dependencies and the service itself, provides a health endpoint that exposes their status, and health metrics. | 4 months ago |
| [digota](https://github.com/digota/digota) | 455 | ecommerce microservice | a year ago |
| [sleuth](https://github.com/ursiform/sleuth) | 354 | A Go library for master-less peer-to-peer autodiscovery and RPC between HTTP services | 4 years ago |
| [go-jump](https://github.com/dgryski/go-jump) | 344 | go-jump: Jump consistent hashing | 10 months ago |
| [dht](https://github.com/anacrolix/dht) | 241 | dht is used by anacrolix/torrent, and is intended for use as a library in other projects both torrent related and otherwise | a month ago |
| [jsonrpc](https://github.com/ybbus/jsonrpc) | 236 | A simple go implementation of json rpc 2.0 client over http | a month ago |
| [jsonrpc](https://github.com/osamingo/jsonrpc) | 168 | The jsonrpc package helps implement of JSON-RPC 2.0 | 10 months ago |
| [outboxer](https://github.com/italolelis/outboxer) | 87 | A library that implements the outboxer pattern in go | 7 days ago |
| [doublejump](https://github.com/edwingeng/doublejump) | 76 | A revamped Google's jump consistent hash | 4 days ago |
| [semaphore](https://github.com/jexia/semaphore) | 74 | Take control of your data, connect with anything, and expose it anywhere through protocols such as HTTP, GraphQL, and gRPC. | 19 days ago |
| [celeriac.v1](https://github.com/svcavallar/celeriac.v1) | 73 | Golang client library for adding support for interacting and monitoring Celery workers, tasks and events. | 2 years ago |
| [dot](https://github.com/dotchain/dot) | 73 | distributed data sync with operational transformation/transforms  | 3 years ago |
| [flowgraph](https://github.com/vectaport/flowgraph) | 51 | Flowgraph package for scalable asynchronous system development | a year ago |
| [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) | 46 | MySQL Backed Locking Primitive | a year ago |
| [drmaa](https://github.com/dgruber/drmaa) | 40 | Compute cluster (HPC) job submission library for Go (#golang) based on the open DRMAA standard. | 5 months ago |
| [go-pdu](https://github.com/pdupub/go-pdu) | 39 | Go implementation of PDU - A decentralized SNS backbone | 7 days ago |
| [micro](https://github.com/gmsec/micro) | 20 | A Go distributed systems development framework | 10 months ago |
| [dynatomic](https://github.com/tylfin/dynatomic) | 14 | Dynatomic is a library for using dynamodb as an atomic counter | 2 years ago |
| [consistenthash](https://github.com/mbrostami/consistenthash) | 11 | A Go library that implements Consistent Hashing | 5 months ago |
| [failured](https://github.com/andy2046/failured) | 6 | Adaptive Accrual Failure Detector | a year ago |


### [Dynamic DNS](#Dynamic-DNS)
* Tools for updating dynamic DNS records.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [godns](https://github.com/TimothyYe/godns) | 1119 | A dynamic DNS client tool supports AliDNS, Cloudflare, Google Domains, DNSPod, HE.net & DuckDNS & DreamHost, etc, written in Go. | 3 days ago |
| [ddns](https://github.com/skibish/ddns) | 215 | Personal DDNS client with Digital Ocean Networking DNS as backend. | 2 months ago |


### [Email](#Email)
* Libraries and tools that implement email creation and sending.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [MailHog](https://github.com/mailhog/MailHog) | 10586 | Web and API based SMTP testing | 4 days ago |
| [hermes](https://github.com/matcornic/hermes) | 2501 | Golang package that generates clean, responsive HTML e-mails for sending transactional mail | 8 months ago |
| [email](https://github.com/jordan-wright/email) | 2102 | Robust and flexible email library for Go | 8 months ago |
| [go-imap](https://github.com/emersion/go-imap) | 1584 |  :inbox_tray: An IMAP library for clients and servers | 2 months ago |
| [sendgrid-go](https://github.com/sendgrid/sendgrid-go) | 833 | The Official Twilio SendGrid Golang API Library | 5 days ago |
| [mailgun-go](https://github.com/mailgun/mailgun-go) | 612 | Go library for sending mail with the Mailgun API. | 2 months ago |
| [email-verifier](https://github.com/AfterShip/email-verifier) | 494 | :white_check_mark: A Go library for email verification without sending any emails. | a month ago |
| [go-simple-mail](https://github.com/xhit/go-simple-mail) | 359 | Golang package for send email. Support keep alive connection, TLS and SSL. Easy for bulk SMTP. | 3 months ago |
| [go-message](https://github.com/emersion/go-message) | 260 | :envelope: A streaming Go library for the Internet Message Format and mail messages | 2 months ago |
| [hectane](https://github.com/hectane/hectane) | 220 | Lightweight SMTP client written in Go | 2 years ago |
| [douceur](https://github.com/aymerick/douceur) | 219 | A simple CSS parser and inliner in Go | a year ago |
| [mailchain](https://github.com/mailchain/mailchain) | 120 | Using Mailchain, blockchain users can now send and receive rich-media HTML messages with attachments via a blockchain address. | 4 months ago |
| [go-premailer](https://github.com/vanng822/go-premailer) | 90 | Inline styling for html mail in golang | a year ago |
| [go-dkim](https://github.com/toorop/go-dkim) | 80 | DKIM package for golang | 2 years ago |
| [smtp](https://github.com/mailhog/smtp) | 72 | MailHog SMTP Protocol | 10 months ago |
| [go-email-validator](https://github.com/go-email-validator/go-email-validator) | 38 | 📧 Golang Email address validator | 13 days ago |


### [Embeddable Scripting Languages](#Embeddable-Scripting-Languages)
* Embedding other languages inside your go code.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopher-lua](https://github.com/yuin/gopher-lua) | 4915 | GopherLua: VM and compiler for Lua in Go | 7 days ago |
| [goja](https://github.com/dop251/goja) | 3140 | ECMAScript/JavaScript engine in pure Go | 2 days ago |
| [tengo](https://github.com/d5/tengo) | 2843 | A fast script language for Go | 11 days ago |
| [expr](https://github.com/antonmedv/expr) | 2769 | Expression language for Go | 4 days ago |
| [go-lua](https://github.com/Shopify/go-lua) | 2443 | A Lua VM in Go | 10 days ago |
| [go-python](https://github.com/sbinet/go-python) | 1399 | naive go bindings to the CPython2 C-API | a year ago |
| [anko](https://github.com/mattn/anko) | 1266 | Scriptable interpreter written in golang | 6 months ago |
| [cel-go](https://github.com/google/cel-go) | 1255 | Fast, portable, non-Turing complete expression evaluation with gradual typing (Go) | 4 days ago |
| [core](https://github.com/metacall/core) | 998 | MetaCall: The ultimate polyglot programming experience. | 3 days ago |
| [go-php](https://github.com/deuill/go-php) | 869 | PHP bindings for the Go programming language (Golang) | 8 months ago |
| [go-duktape](https://github.com/olebedev/go-duktape) | 780 | [abandoned] Duktape JavaScript engine bindings for Go | 10 months ago |
| [golua](https://github.com/aarzilli/golua) | 589 | Go bindings for Lua C API - in progress | 9 months ago |
| [gval](https://github.com/PaesslerAG/gval) | 520 | Expression evaluation in golang | 3 days ago |
| [gisp](https://github.com/jcla1/gisp) | 486 | Simple LISP in Go | 5 years ago |
| [gentee](https://github.com/gentee/gentee) | 95 | Gentee - script programming language for automation. It uses VM and compiler written in Go (Golang). | 6 months ago |
| [binder](https://github.com/alexeyco/binder) | 59 | High level go to Lua binder. Write less, do more. | a month ago |
| [purl](https://github.com/ian-kent/purl) | 34 | Perl, but fluffy like a cat! | 8 years ago |
| [ecal](https://github.com/krotik/ecal) | 26 | A simple embeddable scripting language which supports concurrent event processing. | a year ago |
| [ngaro](https://github.com/db47h/ngaro) | 22 | An embeddable implementation of the Ngaro Virtual Machine for Go programs | 4 years ago |


### [Error Handling](#Error-Handling)
* Libraries for handling errors.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [errors](https://github.com/pkg/errors) | 7837 | Simple error handling primitives | 9 months ago |
| [go-multierror](https://github.com/hashicorp/go-multierror) | 1655 | A Go (golang) package for representing a list of errors as a single error. | a month ago |
| [eris](https://github.com/rotisserie/eris) | 1045 | Error handling library with readable stack traces and flexible formatting support 🎆 | 3 months ago |
| [errorx](https://github.com/joomcode/errorx) | 881 | A comprehensive error handling library for Go | 25 days ago |
| [tracerr](https://github.com/ztrue/tracerr) | 728 | Golang errors with stack trace and source fragments. | 3 years ago |
| [errlog](https://github.com/snwfdhmp/errlog) | 407 | Reduce debugging time while programming Go. Use static and stack-trace analysis to determine which func call causes the error. | 2 years ago |
| [emperror](https://github.com/emperror/emperror) | 250 | The Emperor takes care of all errors personally | 2 years ago |
| [errors](https://github.com/emperror/errors) | 153 | Drop-in replacement for the standard library errors package and github.com/pkg/errors | 2 months ago |
| [errors](https://github.com/bnkamalesh/errors) | 42 | A drop-in replacement for Go errors, with some added sugar! Unwrap user-friendly messages, HTTP status code, easy wrapping with multiple error types. | 8 months ago |
| [falcon](https://github.com/ThundR67/falcon) | 7 | A Simple Yet Highly Powerful Package For Error Handling | 3 years ago |
| [errors](https://github.com/PumpkinSeed/errors) | 5 | Simple and efficient error package  | 4 months ago |
| [errors](https://github.com/neuronlabs/errors) | 3 | Simple golang error handling with classification primitives. | 3 years ago |


### [File Handling](#File-Handling)
* Libraries for handling files and file systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [afero](https://github.com/spf13/afero) | 4679 | A FileSystem Abstraction System for Go | 13 days ago |
| [pdfcpu](https://github.com/pdfcpu/pdfcpu) | 3288 | A PDF processor written in Go. | 6 days ago |
| [gdu](https://github.com/dundee/gdu) | 1894 | Fast disk usage analyzer with console interface written in Go | 5 days ago |
| [todo.txt](https://github.com/todotxt/todo.txt) | 1631 | ‼️ A complete primer on the whys and hows of todo.txt. | 7 months ago |
| [notify](https://github.com/rjeczalik/notify) | 752 | File system event notification library on steroids. | a year ago |
| [copy](https://github.com/otiai10/copy) | 453 | Go copy directory recursively | 4 days ago |
| [bigfile](https://github.com/bigfile/bigfile) | 229 | Bigfile -- a file transfer system that supports http, rpc and ftp protocol   https://bigfile.site   | 2 years ago |
| [afs](https://github.com/viant/afs) | 191 | Abstract File Storage | a month ago |
| [vfs](https://github.com/C2FO/vfs) | 181 | Pluggable, extensible virtual file system for Go | 19 days ago |
| [fs](https://github.com/kr/fs) | 130 | Package fs provides filesystem-related functions. | a year ago |
| [go-exiftool](https://github.com/barasher/go-exiftool) | 128 | Golang wrapper for Exiftool : extract as much metadata as possible (EXIF, ...) from files (pictures, pdf, office documents, ...) | a month ago |
| [go-csv-tag](https://github.com/artonge/go-csv-tag) | 95 | Read csv file from go using tags | 9 months ago |
| [skywalker](https://github.com/dixonwille/skywalker) | 82 | A package to allow one to concurrently go through a filesystem with ease | a year ago |
| [opc](https://github.com/qmuntal/opc) | 72 | Go implementation of the Open Packaging Conventions (OPC) | a year ago |
| [checksum](https://github.com/codingsince1985/checksum) | 65 | Compute message digest for large files in Go | 8 months ago |
| [parquet](https://github.com/parsyl/parquet) | 56 | A library for reading and writing parquet files. | 10 months ago |
| [tarfs](https://github.com/posener/tarfs) | 50 | An implementation of the FileSystem interface for tar files. | 2 years ago |
| [baraka](https://github.com/xis/baraka) | 44 | a tool for handling file uploads simple | 16 days ago |
| [go-gtfs](https://github.com/artonge/go-gtfs) | 32 | Load GTFS files in golang | 16 days ago |
| [flop](https://github.com/homedepot/flop) | 31 | Go file operations library chasing GNU APIs. | 8 months ago |
| [gut](https://github.com/1set/gut) | 24 | 🍱 yet another collection of go utilities & tools | 2 years ago |
| [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) | 16 | copy files for humans | 3 years ago |
| [todotxt](https://github.com/1set/todotxt) | 13 | Parser for todo.txt files in Go ✅ | 6 months ago |
| [pathtype](https://github.com/jonchun/pathtype) | 11 | Add a type for paths in Go. | a year ago |
| [higgs](https://github.com/dastoori/higgs) | 10 | A tiny cross-platform Go library to hide/unhide files and directories | 6 months ago |


### [Financial](#Financial)
* Packages for accounting and finance.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ticker](https://github.com/achannarasappa/ticker) | 4315 | Terminal stock ticker with live updates and position tracking | 2 months ago |
| [decimal](https://github.com/shopspring/decimal) | 4254 | Arbitrary-precision fixed-point decimal numbers in go | 2 months ago |
| [go-money](https://github.com/Rhymond/go-money) | 1134 | Go implementation of Fowler's Money pattern | 5 days ago |
| [accounting](https://github.com/leekchan/accounting) | 759 | money and currency formatting for golang | 11 days ago |
| [techan](https://github.com/sdcoffey/techan) | 657 | Technical Analysis Library for Golang | 3 months ago |
| [go-finance](https://github.com/FlashBoys/go-finance) | 537 | :warning: Deprecrated in favor of https://github.com/piquette/finance-go  | 4 years ago |
| [currency](https://github.com/bojanz/currency) | 327 | Currency handling for Go. | 25 days ago |
| [ach](https://github.com/moov-io/ach) | 324 | ACH implements a reader, writer, and validator for Automated Clearing House (ACH) files. The HTTP server is available in a Docker image and the Go package is available. | 2 days ago |
| [orderbook](https://github.com/i25959341/orderbook) | 282 | Matching Engine for Limit Order Book in Golang | a year ago |
| [go-finance](https://github.com/alpeb/go-finance) | 141 | Go library containing a collection of financial functions for time value of money (annuities), cash flow, interest rate conversions, bonds and depreciation calculations. | 8 months ago |
| [transaction](https://github.com/claygod/transaction) | 112 | Embedded database for accounts transactions. | 3 months ago |
| [ofxgo](https://github.com/aclindsa/ofxgo) | 103 | Golang library for querying and parsing OFX | 10 months ago |
| [sleet](https://github.com/BoltApp/sleet) | 97 | Payment abstraction library - one interface for multiple payment processors ( inspired by Ruby's ActiveMerchant ) | 5 days ago |
| [vat](https://github.com/dannyvankooten/vat) | 94 | Go package for dealing with EU VAT. Does VAT number validation & rates retrieval. | 6 months ago |
| [go-finnhub](https://github.com/m1/go-finnhub) | 74 | Simple and easy to use client for stock market, forex and crypto data from finnhub.io written in Go. Access real-time financial market data from 60+ stock exchanges, 10 forex brokers, and 15+ crypto exchanges | 3 years ago |
| [currency](https://github.com/bnkamalesh/currency) | 47 | A currency computations package. | 9 months ago |
| [fastme](https://github.com/newity/fastme) | 36 |  | a year ago |
| [payme](https://github.com/jovandeginste/payme) | 10 | QR code generator (ASCII & PNG) for SEPA payments | 2 months ago |
| [go-finance](https://github.com/pieterclaerhout/go-finance) | 9 | Finance related Go functions (e.g. exchange rates, VAT number checking, …) | 3 years ago |


### [Forms](#Forms)
* Libraries for working with forms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nosurf](https://github.com/justinas/nosurf) | 1304 | CSRF protection middleware for Go. | 2 years ago |
| [csrf](https://github.com/gorilla/csrf) | 817 | gorilla/csrf provides Cross Site Request Forgery (CSRF) prevention middleware for Go web applications & services 🔒 | 4 months ago |
| [binding](https://github.com/mholt/binding) | 791 | Reflectionless data binding for Go's net/http (not actively maintained) | 4 years ago |
| [form](https://github.com/go-playground/form) | 544 | :steam_locomotive: Decodes url.Values into Go value(s) and Encodes Go value(s) into url.Values. Dual Array and Full map support. | a year ago |
| [conform](https://github.com/leebenson/conform) | 263 | Trims, sanitizes & scrubs data based on struct tags (go, golang) | 10 months ago |
| [formam](https://github.com/monoculum/formam) | 171 | a package for decode form's values into struct in Go | 10 months ago |
| [forms](https://github.com/albrow/forms) | 132 | A lightweight go library for parsing form data or json from an http.Request. | 5 years ago |
| [qs](https://github.com/sonh/qs) | 63 | Go module for encoding structs into URL query parameters | 5 months ago |
| [bind](https://github.com/robfig/bind) | 27 |  | 8 years ago |
| [queryparam](https://github.com/TomWright/queryparam) | 13 | Go package to easily convert a URL's query parameters/values into usable struct values of the correct types. | 2 years ago |


### [Functional](#Functional)
* Packages to support functional programming in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-underscore](https://github.com/tobyhede/go-underscore) | 1249 |  Helpfully Functional Go -  A useful collection of Go utilities. Designed for programmer happiness.  | a month ago |
| [fpGo](https://github.com/TeaEntityLab/fpGo) | 281 | Monad, Functional Programming features for Golang | 2 months ago |
| [gofp](https://github.com/rbrahul/gofp) | 128 | A super simple Lodash like utility library with essential functions that empowers the development in Go | a year ago |
| [fuego](https://github.com/seborama/fuego) | 119 | Functional Experiment in Golang | 6 days ago |


### [Game Development](#Game-Development)
* Awesome game development libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ebiten](https://github.com/hajimehoshi/ebiten) | 6861 | Ebitengine - A dead simple 2D game library for Go | 3 hours ago |
| [leaf](https://github.com/name5566/leaf) | 4482 | A game server framework in Go (golang) | a year ago |
| [pixel](https://github.com/faiface/pixel) | 4018 | A hand-crafted 2D game library in Go | a month ago |
| [goworld](https://github.com/xiaonanln/goworld) | 2146 | Scalable Distributed Game Server Engine with Hot Swapping in Golang | a year ago |
| [engine](https://github.com/g3n/engine) | 2093 | Go 3D Game Engine (http://g3n.rocks) | 2 months ago |
| [nano](https://github.com/lonng/nano) | 2066 | Lightweight, facility, high performance golang based game server framework | 18 days ago |
| [go-sdl2](https://github.com/veandco/go-sdl2) | 1810 | SDL2 binding for Go | 31 minutes ago |
| [engo](https://github.com/EngoEngine/engo) | 1528 | Engo is an open-source 2D game engine written in Go. | 5 days ago |
| [pitaya](https://github.com/topfreegames/pitaya) | 1485 | Scalable game server framework with clustering support and client libraries for iOS, Android, Unity and others through the C SDK. | 2 days ago |
| [termloop](https://github.com/JoelOtter/termloop) | 1292 | Terminal-based game engine for Go, built on top of Termbox | a year ago |
| [oak](https://github.com/oakmound/oak) | 1255 | A pure Go game engine | 23 days ago |
| [gonet](https://github.com/xtaci/gonet) | 1186 | A Game Server Skeleton in golang. | 5 years ago |
| [raylib-go](https://github.com/gen2brain/raylib-go) | 846 | Go bindings for raylib, a simple and easy-to-use library to enjoy videogames programming. | 3 days ago |
| [engine](https://github.com/azul3d/engine) | 553 | Azul3D - A 3D game engine written in Go! | 9 months ago |
| [go-astar](https://github.com/beefsack/go-astar) | 509 | Go implementation of the A* search algorithm | 6 months ago |
| [go3d](https://github.com/ungerik/go3d) | 265 | A performance oriented 2D/3D math package for Go | 4 months ago |
| [prototype](https://github.com/gonutz/prototype) | 74 | Simple 2D game prototyping framework. | 8 months ago |
| [tile](https://github.com/kelindar/tile) | 62 | Tile is a 2D grid engine, built with data and cache friendly ways, includes pathfinding and observers. | 2 months ago |


### [Generation and Generics](#Generation-and-Generics)
* Tools to enhance the language with features like generics via code generation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-linq](https://github.com/ahmetb/go-linq) | 3052 | .NET LINQ capabilities in Go | 4 hours ago |
| [jennifer](https://github.com/dave/jennifer) | 2499 | Jennifer is a code generator for Go | a day ago |
| [gen](https://github.com/clipperhouse/gen) | 1389 | Type-driven code generation for Go | 3 years ago |
| [goderive](https://github.com/awalterschulze/goderive) | 998 | Derives and generates mundane golang functions that you do not want to maintain yourself | 2 hours ago |
| [gowrap](https://github.com/hexdigest/gowrap) | 639 | GoWrap is a command line tool for generating decorators for Go interfaces | a month ago |
| [go-enum](https://github.com/abice/go-enum) | 358 | An enum generator for go | 4 days ago |
| [interfaces](https://github.com/rjeczalik/interfaces) | 350 | Code generation tools for Go. | 13 hours ago |
| [goverter](https://github.com/jmattheis/goverter) | 137 | Generate type-safe Go converters by simply defining an interface | 6 days ago |
| [pkgreflect](https://github.com/ungerik/pkgreflect) | 99 | A Go preprocessor for package scoped reflection | 5 years ago |
| [efaceconv](https://github.com/vlegio/efaceconv) | 50 |  | 5 years ago |
| [gotype](https://github.com/wzshiming/gotype) | 44 | Golang source code parsing, usage like reflect package | 2 months ago |
| [GENERIS](https://github.com/senselogic/GENERIS) | 34 | Versatile Go code generator. | 6 months ago |
| [go-xray](https://github.com/pieterclaerhout/go-xray) | 23 | Helpers for making the use of reflection easier | 3 years ago |
| [typeregistry](https://github.com/xiaoxin01/typeregistry) | 14 | create type dynamically in Golang | 2 years ago |


### [Geographic](#Geographic)
* Geographic tools and servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tile38](https://github.com/tidwall/tile38) | 8212 | Real-time Geospatial and Geofencing | 25 days ago |
| [geo](https://github.com/golang/geo) | 1406 | S2 geometry library in Go | 12 days ago |
| [mbtileserver](https://github.com/consbio/mbtileserver) | 366 | Basic Go server for mbtiles | 2 months ago |
| [osm](https://github.com/paulmach/osm) | 221 | General purpose library for reading, writing and working with OpenStreetMap data | 2 months ago |
| [wgs84](https://github.com/wroge/wgs84) | 85 | A zero-dependency Go package for coordinate transformations. | 2 months ago |
| [godal](https://github.com/airbusgeo/godal) | 80 | golang wrapper for github.com/OSGEO/gdal | a month ago |
| [geoserver](https://github.com/hishamkaram/geoserver) | 73 | geoserver is a Go library for manipulating a GeoServer instance via the GeoServer REST API. | a month ago |
| [simplefeatures](https://github.com/peterstace/simplefeatures) | 56 | Simple Features is a pure Go Implementation of the OpenGIS Simple Feature Access Specification | a month ago |
| [gismanager](https://github.com/hishamkaram/gismanager) | 45 | Publish Your GIS Data(Vector Data) to PostGIS and Geoserver | 4 years ago |
| [pbf](https://github.com/maguro/pbf) | 36 | OpenStreetMap PBF golang parser | 2 months ago |
| [s2-geojson](https://github.com/pantrif/s2-geojson) | 17 | Draw a polygon on the map or paste a geoJSON and explore how the s2.RegionCoverer covers it with S2 cells depending on the min and max levels | 2 years ago |


### [Go Compilers](#Go-Compilers)
* Tools for compiling Go to other languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopherjs](https://github.com/gopherjs/gopherjs) | 11257 | A compiler from Go to JavaScript for running Go code in a browser | 17 hours ago |
| [tardisgo](https://github.com/tardisgo/tardisgo) | 418 | Golang->Haxe->CPP/CSharp/Java/JavaScript transpiler   | 6 years ago |
| [c4go](https://github.com/Konstantin8105/c4go) | 323 | Transpiling C code to Go code | 9 months ago |
| [f4go](https://github.com/Konstantin8105/f4go) | 32 | Transpiling fortran code to golang code | 8 months ago |


### [Goroutines](#Goroutines)
* Tools for managing and working with Goroutines.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ants](https://github.com/panjf2000/ants) | 8862 | 🐜🐜🐜 ants is a high-performance and low-cost goroutine pool in Go, inspired by fasthttp./ ants 是一个高性能且低损耗的 goroutine 池。 | 3 days ago |
| [tunny](https://github.com/Jeffail/tunny) | 3151 | A goroutine pool for Go | 4 days ago |
| [goworker](https://github.com/benmanns/goworker) | 2669 | goworker is a Go-based background worker that runs 10 to 100,000* times faster than Ruby-based workers. | 10 days ago |
| [workerpool](https://github.com/gammazero/workerpool) | 881 | Concurrency limiting goroutine pool | 2 months ago |
| [grpool](https://github.com/ivpusic/grpool) | 699 | Lightweight Goroutine pool | 4 years ago |
| [pool](https://github.com/go-playground/pool) | 689 | :speedboat: a limited consumer goroutine or unlimited goroutine pool for easier goroutine handling and cancellation | a year ago |
| [pond](https://github.com/alitto/pond) | 595 | 🔘 Minimalistic and High-performance goroutine worker pool written in Go | 8 days ago |
| [gowp](https://github.com/xxjwxc/gowp) | 404 | golang worker pool , Concurrency limiting goroutine pool | 2 months ago |
| [go-floc](https://github.com/workanator/go-floc) | 254 | Floc: Orchestrate goroutines with ease. | a year ago |
| [go-flow](https://github.com/kamildrazkiewicz/go-flow) | 195 | Simply way to control goroutines execution order based on dependencies | 3 years ago |
| [semaphore](https://github.com/marusama/semaphore) | 149 | Fast resizable golang semaphore primitive | a year ago |
| [go-workers](https://github.com/catmullet/go-workers) | 143 | 👷 Library for safely running groups of workers concurrently or consecutively that require input and output through channels | 7 months ago |
| [artifex](https://github.com/mborders/artifex) | 134 | Simple in-memory job queue for Golang using worker-based dispatching | 2 years ago |
| [errgroup](https://github.com/neilotoole/errgroup) | 130 | errgroup with goroutine worker limits | 4 months ago |
| [async](https://github.com/StudioSol/async) | 108 | A safe way to execute functions asynchronously, recovering them in case of panic. It also provides an error stack aiming to facilitate fail causes discovery. | 2 years ago |
| [cyclicbarrier](https://github.com/marusama/cyclicbarrier) | 98 | CyclicBarrier golang implementation | 2 years ago |
| [gollback](https://github.com/vardius/gollback) | 94 | Go asynchronous simple function utilities, for managing execution of closures and callbacks | 6 months ago |
| [semaphore](https://github.com/kamilsk/semaphore) | 89 | 🚦 Semaphore pattern implementation with timeout of lock/unlock operations. | 2 years ago |
| [async](https://github.com/reugn/async) | 86 | Synchronization and asynchronous computation utilities library for Go | 2 months ago |
| [gpool](https://github.com/sherifabdlnaby/gpool) | 84 | gpool - a generic context-aware resizable goroutines pool to bound concurrency based on semaphore.  | 3 years ago |
| [Hunch](https://github.com/AaronJan/Hunch) | 84 | Hunch provides functions like: All, First, Retry, Waterfall etc., that makes asynchronous flow control more intuitive. | a month ago |
| [worker-pool](https://github.com/vardius/worker-pool) | 82 | Go simple async worker pool | 2 years ago |
| [threadpool](https://github.com/shettyh/threadpool) | 75 | Golang simple thread pool implementation | 2 years ago |
| [goccm](https://github.com/zenthangplus/goccm) | 54 | Limits the number of goroutines that are allowed to run concurrently | 10 months ago |
| [routine](https://github.com/x-mod/routine) | 52 | go routine control, abstraction of the Main and some useful Executors.如果你不会管理Goroutine的话，用它 | 2 years ago |
| [nursery](https://github.com/arunsworld/nursery) | 49 | Structured Concurrency in Go | a year ago |
| [gohive](https://github.com/loveleshsharma/gohive) | 39 | 🐝 A Highly Performant and easy to use goroutine pool for Go | 8 months ago |
| [kyoo](https://github.com/dirkaholic/kyoo) | 38 | Unlimited job queue for go, using a pool of concurrent workers processing the job queue entries | 2 years ago |
| [parallel-fn](https://github.com/rafaeljesus/parallel-fn) | 33 | Run functions in parallel :comet: | 5 years ago |
| [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) | 31 | A sync.WaitGroup with error handling and concurrency control | 2 years ago |
| [go-trylock](https://github.com/subchen/go-trylock) | 30 | TryLock support on read-write lock for Golang | a year ago |
| [gowl](https://github.com/hmdsefi/gowl) | 27 | Gowl is a process management and process monitoring tool at once. An infinite worker pool gives you the ability to control the pool and processes and monitor their status. | a month ago |
| [channelify](https://github.com/ddelizia/channelify) | 23 | Make functions return a channel for parallel processing via go routines. | a year ago |
| [stl](https://github.com/ssgreg/stl) | 23 | Software Transactional Locks | 2 years ago |
| [conexec](https://github.com/ITcathyh/conexec) | 12 | A concurrent toolkit to help execute funcs concurrently in an efficient and safe way. It supports specifying the overall timeout to avoid blocking. | 2 years ago |
| [execpool](https://github.com/hexdigest/execpool) | 12 | A pool that spins up a given number of processes in advance and attaches stdin and stdout when needed. Very similar to FastCGI but works for any command. | a year ago |
| [queue](https://github.com/AnikHasibul/queue) | 12 | package queue gives you a queue group accessibility. Helps you to limit goroutines, wait for the end of the all goroutines and much more. | 3 years ago |
| [hands](https://github.com/duanckham/hands) | 9 | Hands is a process controller used to control the execution and return strategies of multiple goroutines. | 4 months ago |
| [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) | 7 |  | 2 years ago |
| [go-tools](https://github.com/nikhilsaraf/go-tools) | 7 | A collection of tools for Golang | 3 years ago |
| [breaker](https://github.com/kamilsk/breaker) | 5 | 🚧 Flexible mechanism to make execution flow interruptible. | a year ago |


### [GUI](#GUI)
* Libraries for building GUI Applications.

#### [Toolkits](#Toolkits)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fyne](https://github.com/fyne-io/fyne) | 17869 | Cross platform GUI in Go inspired by Material Design | 9 hours ago |
| [webview](https://github.com/webview/webview) | 10313 | Tiny cross-platform webview library for C/C++/Golang. Uses WebKit (Gtk/Cocoa) and Edge (Windows) | 10 days ago |
| [qt](https://github.com/therecipe/qt) | 9359 | Qt binding for Go (Golang) with support for Windows / macOS / Linux / FreeBSD / Android / iOS / Sailfish OS / Raspberry Pi / AsteroidOS / Ubuntu Touch / JavaScript / WebAssembly | 2 years ago |
| [ui](https://github.com/andlabs/ui) | 8150 | Platform-native GUI library for Go. | 3 months ago |
| [go-app](https://github.com/maxence-charriere/go-app) | 6356 | A package to build progressive web apps with Go programming language and WebAssembly. | 3 days ago |
| [walk](https://github.com/lxn/walk) | 6133 | A Windows GUI toolkit for the Go Programming Language | 15 days ago |
| [go-astilectron](https://github.com/asticode/go-astilectron) | 4455 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by Electron) | a month ago |
| [go-sciter](https://github.com/sciter-sdk/go-sciter) | 2434 | Golang bindings of Sciter: the Embeddable HTML/CSS/script engine for modern UI development | 4 months ago |
| [gotk3](https://github.com/gotk3/gotk3) | 1794 | Go bindings for GTK3 | a month ago |
| [gowd](https://github.com/dtylman/gowd) | 371 | Build cross platform GUI apps with GO and HTML/JS/CSS (powered by nwjs) | a day ago |


#### [Interaction](#Interaction)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [robotgo](https://github.com/go-vgo/robotgo) | 7737 | RobotGo, Go Native cross-platform GUI automation  @vcaesar | 7 days ago |
| [systray](https://github.com/getlantern/systray) | 2468 | a cross platfrom Go library to place an icon and menu in the notification area | 3 months ago |
| [gosx-notifier](https://github.com/deckarep/gosx-notifier) | 573 | gosx-notifier is a Go framework for sending desktop notifications to OSX 10.8 or higher | 2 years ago |
| [zenity](https://github.com/ncruces/zenity) | 309 | Zenity dialogs for Golang, Windows, macOS | 10 days ago |
| [trayhost](https://github.com/shurcooL/trayhost) | 228 | Cross-platform Go library to place an icon in the host operating system's taskbar. | 3 years ago |
| [go-appindicator](https://github.com/dawidd6/go-appindicator) | 20 | :traffic_light: Go bindings for libappindicator3 C library | 2 years ago |
| [activity-tracker](https://github.com/prashantgupta24/activity-tracker) | 18 | A library to notify about any (pluggable) activity on your machine, and let you take action as needed | 3 years ago |
| [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) | 18 | macOS Sleep/ Wake notifications in golang | 3 years ago |


### [Hardware](#Hardware)
* Libraries, tools, and tutorials for interacting with hardware.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [arduino-cli](https://github.com/arduino/arduino-cli) | 3496 | Arduino command line tool | 4 hours ago |
| [go-rpio](https://github.com/stianeikeland/go-rpio) | 1909 | :electric_plug: Raspberry Pi GPIO library for go-lang | 4 months ago |
| [ghw](https://github.com/jaypipes/ghw) | 1189 | Golang hardware discovery/inspection library | 23 days ago |
| [emgo](https://github.com/ziutek/emgo) | 985 | Emgo: Bare metal Go (language for programming embedded systems) | 8 months ago |
| [sysinfo](https://github.com/zcalusic/sysinfo) | 364 | Sysinfo is a Go library providing Linux OS / kernel / hardware system information. | 3 days ago |
| [goroslib](https://github.com/aler9/goroslib) | 206 | ROS client library for the Go programming language | 3 days ago |
| [go-osc](https://github.com/hypebeast/go-osc) | 156 | Open Sound Control (OSC) library for Golang. Implemented in pure Go. | 5 months ago |
| [joystick](https://github.com/0xcafed00d/joystick) | 31 | Go Joystick API | 5 months ago |


### [Images](#Images)
* Libraries for manipulating images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocv](https://github.com/hybridgroup/gocv) | 4937 | Go package for computer vision using OpenCV 4 and beyond. | 18 days ago |
| [imaginary](https://github.com/h2non/imaginary) | 4457 | Fast, simple, scalable, Docker-ready HTTP microservice for high-level image processing | 2 months ago |
| [imaging](https://github.com/disintegration/imaging) | 4331 | Imaging is a simple image processing package for Go | 2 years ago |
| [bild](https://github.com/anthonynsimon/bild) | 3578 | Image processing algorithms in pure Go | 2 months ago |
| [gg](https://github.com/fogleman/gg) | 3523 | Go Graphics - 2D rendering in Go with a simple API. | a month ago |
| [ln](https://github.com/fogleman/ln) | 3082 | 3D line art engine. | 3 years ago |
| [resize](https://github.com/nfnt/resize) | 2866 | Pure golang image resizing  | 4 months ago |
| [pt](https://github.com/fogleman/pt) | 2018 | A path tracer written in Go. | 3 years ago |
| [bimg](https://github.com/h2non/bimg) | 1986 | Go package for fast high-level image processing powered by libvips C library | 21 days ago |
| [svgo](https://github.com/ajstarks/svgo) | 1871 | Go Language Library for SVG generation | 3 months ago |
| [picfit](https://github.com/thoas/picfit) | 1684 | An image resizing server written in Go | 7 months ago |
| [gowitness](https://github.com/sensepost/gowitness) | 1677 | 🔍 gowitness - a golang, web screenshot utility using Chrome Headless | 9 days ago |
| [smartcrop](https://github.com/muesli/smartcrop) | 1652 | smartcrop finds good image crops for arbitrary crop sizes | 4 months ago |
| [gift](https://github.com/disintegration/gift) | 1572 | Go Image Filtering Toolkit | 2 years ago |
| [imagick](https://github.com/gographics/imagick) | 1471 | Go binding to ImageMagick's MagickWand C API | 2 months ago |
| [go-opencv](https://github.com/go-opencv/go-opencv) | 1277 | Go bindings for OpenCV / 2.x API in gocv / 1.x API in opencv | 3 years ago |
| [geopattern](https://github.com/pravj/geopattern) | 1186 | :triangular_ruler: Create beautiful generative image patterns from a string in golang. | 4 years ago |
| [stegify](https://github.com/DimitarPetrov/stegify) | 1022 | 🔍 Go tool for LSB steganography, capable of hiding any file within an image. | 2 years ago |
| [canvas](https://github.com/tdewolff/canvas) | 1004 | Cairo in Go: vector to raster, SVG, PDF, EPS, WASM, OpenGL, Gio, etc. | a month ago |
| [govips](https://github.com/davidbyttow/govips) | 730 | A lightning fast image processing and resizing library for Go | 3 days ago |
| [image2ascii](https://github.com/qeesung/image2ascii) | 684 | :foggy: Convert image to ASCII | 21 days ago |
| [draft](https://github.com/lucasepe/draft) | 541 | Generate High Level Cloud Architecture diagrams using YAML syntax. | a year ago |
| [goimagehash](https://github.com/corona10/goimagehash) | 519 | Go Perceptual image hashing package | a day ago |
| [govatar](https://github.com/o1egl/govatar) | 509 | Avatar generation library for GO language | 10 days ago |
| [mort](https://github.com/aldor007/mort) | 460 | Storage and image processing server written in Go | 10 days ago |
| [go-nude](https://github.com/koyachi/go-nude) | 350 | Nudity detection with Go. | 4 months ago |
| [rez](https://github.com/bamiaux/rez) | 207 | Image resizing in pure Go and SIMD | 5 years ago |
| [darkroom](https://github.com/gojek/darkroom) | 194 |  | 4 months ago |
| [mergi](https://github.com/noelyahan/mergi) | 178 | go library for image programming (merge, crop, resize, watermark, animate, ease, transit) | 2 years ago |
| [gltf](https://github.com/qmuntal/gltf) | 169 | :eyeglasses: Go library for encoding glTF 2.0 files | a month ago |
| [steganography](https://github.com/auyer/steganography) | 150 | Pure Golang Library that allows simple LSB steganography on images | a year ago |
| [img](https://github.com/hawx/img) | 140 | A selection of image manipulation tools | 7 years ago |
| [go-cairo](https://github.com/ungerik/go-cairo) | 120 | Go binding for the cairo graphics library | 7 months ago |
| [cameron](https://github.com/aofei/cameron) | 87 | An avatar generator for Go. | 4 days ago |
| [go-webp](https://github.com/kolesa-team/go-webp) | 62 | Simple and fast webp library for golang | a year ago |
| [go-gd](https://github.com/bolknote/go-gd) | 54 | Go bingings for GD (http://www.boutell.com/gd/) | 4 years ago |
| [gridder](https://github.com/shomali11/gridder) | 54 | A Grid based 2D Graphics library | 10 months ago |
| [webp-server](https://github.com/mehdipourfar/webp-server) | 46 | Simple and minimal image server capable of storing, resizing, converting and caching images. | 2 years ago |
| [goimghdr](https://github.com/corona10/goimghdr) | 38 | The imghdr module determines the type of image contained in a file for go | 3 years ago |
| [tga](https://github.com/ftrvxmtrx/tga) | 31 | Go package for decoding and encoding TARGA image format | 7 years ago |
| [go-webcolors](https://github.com/jyotiska/go-webcolors) | 26 | Port of webcolors library from Python to Go | 7 years ago |
| [mpo](https://github.com/donatj/mpo) | 9 | JPEG-MPO Decoder / Converter Library and CLI Tool | 2 years ago |
| [scout](https://github.com/jonoton/scout) | 4 | Scout is a standalone open source software solution for DIY video security. | 2 months ago |


### [IoT -> Internet of Things](#IoT)
* Libraries for programming devices of the IoT.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gobot](https://github.com/hybridgroup/gobot) | 7855 | Golang framework for robotics, drones, and the Internet of Things (IoT) | 12 days ago |
| [flogo](https://github.com/TIBCOSoftware/flogo) | 2070 | Project Flogo is an open source ecosystem of opinionated  event-driven capabilities to simplify building efficient & modern serverless functions, microservices & edge apps. | a month ago |
| [mainflux](https://github.com/mainflux/mainflux) | 1840 | Industrial IoT Messaging and Device Management Platform | 2 days ago |
| [gatt](https://github.com/paypal/gatt) | 1035 | Gatt is a Go package for building Bluetooth Low Energy peripherals | 2 years ago |
| [heedy](https://github.com/heedy/heedy) | 341 | An aggregator for personal metrics, and an extensible analysis engine | a month ago |
| [devices](https://github.com/goiot/devices) | 254 | Suite of libraries for IoT devices (written in Go), experimental for x/exp/io | 6 years ago |
| [sensorbee](https://github.com/sensorbee/sensorbee) | 212 | Lightweight stream processing engine for IoT | 3 years ago |
| [huego](https://github.com/amimof/huego) | 211 | An extensive Philips Hue client library for Go with an emphasis on simplicity | a month ago |
| [iot](https://github.com/vaelen/iot) | 59 | A Go client for Google IoT Core | 3 years ago |
| [eywa](https://github.com/xcodersun/eywa) | 55 | Make IoT a lot more fun with data.  | 5 years ago |


### [Job Scheduler](#Job-Scheduler)
* Libraries for scheduling jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gocron](https://github.com/jasonlvhit/gocron) | 3014 | A Golang Job Scheduling Package. | a year ago |
| [gocron](https://github.com/go-co-op/gocron) | 2144 | Easy and fluent Go cron scheduling. This is a fork from https://github.com/jasonlvhit/gocron | 4 days ago |
| [jobrunner](https://github.com/bamzi/jobrunner) | 931 | Framework for performing work asynchronously, outside of the request flow | 2 years ago |
| [go-quartz](https://github.com/reugn/go-quartz) | 912 | Minimalist and zero-dependency scheduling library for Go | 2 months ago |
| [gron](https://github.com/roylee0704/gron) | 902 | gron, Cron Jobs in Go. | 2 years ago |
| [jobs](https://github.com/albrow/jobs) | 489 | A persistent and flexible background jobs library for go. | 4 years ago |
| [scheduler](https://github.com/carlescere/scheduler) | 392 | Job scheduling made easy. | 2 months ago |
| [go-cron](https://github.com/rk/go-cron) | 211 | A simple Cron library for go that can execute closures or functions at varying intervals, from once a second to once a year on a specific date and time. Primarily for web applications and long running daemons. | 2 years ago |
| [gronx](https://github.com/adhocore/gronx) | 207 | Lightweight, fast and dependency-free Cron expression parser (due checker), task scheduler and/or daemon for Golang (tested on v1.13 and above) and standalone usage | a month ago |
| [clockwerk](https://github.com/onatm/clockwerk) | 120 | Job Scheduling Library | 3 years ago |
| [tasks](https://github.com/madflojo/tasks) | 103 | Package tasks is an easy to use in-process scheduler for recurring tasks in Go | 2 months ago |
| [leprechaun](https://github.com/kilgaloon/leprechaun) | 87 | You had one job, or more then one, which can be done in steps | a month ago |
| [sched](https://github.com/romshark/sched) | 25 | A job scheduler for Go with the ability to fast-forward time. | a year ago |
| [cronticker](https://github.com/krayzpipes/cronticker) | 3 | Golang ticker that works with Cron scheduling. | 2 years ago |


### [JSON](#JSON)
* Libraries for working with JSON.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gjson](https://github.com/tidwall/gjson) | 10753 | Get JSON values quickly - JSON parser for Go | 3 days ago |
| [gojson](https://github.com/ChimeraCoder/gojson) | 2515 | Automatically generate Go (golang) struct definitions from example JSON | a year ago |
| [fastjson](https://github.com/valyala/fastjson) | 1619 | Fast JSON parser and validator for Go. No custom structs, no code generation, no reflection | 4 months ago |
| [ojg](https://github.com/ohler55/ojg) | 494 | Optimized JSON for Go | 2 months ago |
| [kazaam](https://github.com/qntfy/kazaam) | 233 | Arbitrary transformations of JSON in Golang | 2 months ago |
| [gojq](https://github.com/elgs/gojq) | 182 | JSON query in Golang | 2 years ago |
| [jsondiff](https://github.com/wI2L/jsondiff) | 179 | Compute the diff between two JSON documents as a series of RFC6902 (JSON Patch) operations | 4 months ago |
| [jettison](https://github.com/wI2L/jettison) | 129 | Highly configurable, fast JSON encoder for Go | 4 months ago |
| [ajson](https://github.com/spyzhov/ajson) | 122 | Abstract JSON for Golang with JSONPath support  | 3 months ago |
| [gjo](https://github.com/skanehira/gjo) | 110 | Small utility to create JSON objects | a year ago |
| [json2go](https://github.com/m-zajac/json2go) | 104 | Create go type representation from json | 8 months ago |
| [jsongo](https://github.com/ricardolonga/jsongo) | 102 | Fluent API to make it easier to create Json objects. | 10 months ago |
| [jaydiff](https://github.com/yazgazan/jaydiff) | 88 | A JSON diff utility | 2 years ago |
| [jsonf](https://github.com/miolini/jsonf) | 63 | Console JSON formatter with query feature | 2 years ago |
| [ujson](https://github.com/iOliverN/ujson) | 59 | µjson - A fast and minimal JSON parser and transformer that works on unstructured JSON | a year ago |
| [go-respond](https://github.com/nicklaw5/go-respond) | 48 | A Go package for handling common HTTP JSON responses. | 10 months ago |
| [mp](https://github.com/sanbornm/mp) | 45 | Simple Email Parser | 6 years ago |
| [vjson](https://github.com/miladibra10/vjson) | 30 | vjson is a golang package that helps to validate JSON objects | 9 months ago |
| [jsoncolor](https://github.com/neilotoole/jsoncolor) | 28 | Colorized JSON output for Go | 5 months ago |
| [ask](https://github.com/simonnilsson/ask) | 16 | A Go package that provides a simple way of accessing nested properties in maps and slices. | a year ago |
| [mapslice-json](https://github.com/ake-persson/mapslice-json) | 13 | Go MapSlice for ordered marshal/ unmarshal of maps in JSON | 12 days ago |
| [dynjson](https://github.com/cocoonspace/dynjson) | 12 | Client-customizable JSON formats for dynamic APIs | 10 months ago |
| [go-jsonerror](https://github.com/ddymko/go-jsonerror) | 12 | Small package which wraps error responses to follow jsonapi.org | 3 years ago |
| [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) | 12 | Go bindings based on the JSON API errors reference | 6 years ago |
| [jsonhal](https://github.com/RichardKnop/jsonhal) | 10 | A simple Go package to make custom structs marshal into HAL compatible JSON responses. | 2 years ago |
| [jzon](https://github.com/zerosnake0/jzon) | 10 | A golang json library inspired by jsoniter | 6 days ago |
| [epoch](https://github.com/vtopc/epoch) | 9 | Contains primitives for marshaling/unmarshaling Unix timestamp/epoch to/from built-in time.Time type in JSON | 3 months ago |
| [ej](https://github.com/lucassscaravelli/ej) | 7 | Write and read JSON from different sources in one line | 2 years ago |
| [jsonic](https://github.com/sinhashubham95/jsonic) | 7 | All you need with JSON | 2 years ago |
| [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) | 4 | The simple JSON parser with validation by condition | 10 months ago |


### [Logging](#Logging)
* Libraries for generating and working with log files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kit](https://github.com/go-kit/kit) | 23583 | A standard library for microservices. | 4 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 21046 | Structured, pluggable logging for Go. | 20 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 21046 | Structured, pluggable logging for Go. | 20 days ago |
| [logrus](https://github.com/sirupsen/logrus) | 21046 | Structured, pluggable logging for Go. | 20 days ago |
| [zap](https://github.com/uber-go/zap) | 16559 | Blazing fast, structured, leveled logging in Go. | 2 days ago |
| [debug](https://github.com/debug-js/debug) | 10287 | A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers | 2 months ago |
| [zerolog](https://github.com/rs/zerolog) | 6683 | Zero Allocation JSON Logger | 9 minutes ago |
| [go-spew](https://github.com/davecgh/go-spew) | 5169 | Implements a deep pretty printer for Go data structures to aid in debugging | 5 months ago |
| [lumberjack](https://github.com/natefinch/lumberjack) | 3461 | lumberjack is a log rolling package for Go | a month ago |
| [glog](https://github.com/golang/glog) | 3216 | Leveled execution logs for Go | 24 days ago |
| [tail](https://github.com/hpcloud/tail) | 2387 | Go package for reading from continously updated files (tail -f) | 5 months ago |
| [seelog](https://github.com/cihub/seelog) | 1615 | Seelog is a native Go logging library that provides flexible asynchronous dispatching, filtering, and formatting. | 3 years ago |
| [log](https://github.com/apex/log) | 1242 | Structured logging package for Go. | 2 months ago |
| [log15](https://github.com/inconshreveable/log15) | 1060 | Structured, composable logging for Go | 9 months ago |
| [log](https://github.com/phuslu/log) | 440 | High performance structured logging | 14 days ago |
| [onelog](https://github.com/francoispqt/onelog) | 399 | Dead simple, super fast, zero allocation logger for Golang | 3 years ago |
| [logxi](https://github.com/mgutz/logxi) | 348 | A 12-factor app logger built for performance and happy development | 2 years ago |
| [logutils](https://github.com/hashicorp/logutils) | 324 | Utilities for slightly better logging in Go (Golang). | 9 months ago |
| [log](https://github.com/go-playground/log) | 280 | :green_book: Simple, configurable and scalable Structured Logging for Go. | 2 months ago |
| [go-logger](https://github.com/apsdehal/go-logger) | 276 | Simple logger for Go programs. Allows custom formats for messages. | 3 years ago |
| [httpretty](https://github.com/henvic/httpretty) | 268 | Package httpretty prints the HTTP requests you make with Go pretty on your terminal. | 3 months ago |
| [sqldb-logger](https://github.com/simukti/sqldb-logger) | 253 | A logger for Go SQL database driver without modifying existing *sql.DB stdlib usage. | 3 months ago |
| [rollingwriter](https://github.com/arthurkiller/rollingwriter) | 239 | Rolling writer is an IO util for auto rolling write in go. | 2 months ago |
| [glg](https://github.com/kpango/glg) | 168 | Simple and blazing fast lockfree logging library for golang | 3 hours ago |
| [logur](https://github.com/logur/logur) | 165 | Logur is an opinionated collection of logging best practices | 2 years ago |
| [logger](https://github.com/azer/logger) | 155 | Minimalistic logging library for Go. | 9 months ago |
| [xlog](https://github.com/rs/xlog) | 135 | xlog is a logger for net/context aware HTTP applications | a year ago |
| [ozzo-log](https://github.com/go-ozzo/ozzo-log) | 119 | A Go (golang) package providing high-performance asynchronous logging, message filtering by severity and category, and multiple message targets. | 2 years ago |
| [logvoyage](https://github.com/firstrow/logvoyage) | 91 | LogVoyage - logging SaaS written in GoLang | 5 years ago |
| [go-cronowriter](https://github.com/utahta/go-cronowriter) | 47 | Time based rotating file writer | a year ago |
| [log](https://github.com/alexcesaro/log) | 44 | Logging packages for Go | 7 years ago |
| [gologger](https://github.com/sadlil/gologger) | 40 | The Simplest and worst logging library ever written | 5 years ago |
| [gone](https://github.com/One-com/gone) | 40 | Golang packages for writing small daemons and servers. | a year ago |
| [logex](https://github.com/chzyer/logex) | 39 | An golang log lib, supports tracking and level, wrap by standard log lib | 3 months ago |
| [go-log](https://github.com/ian-kent/go-log) | 38 | A logger, for Go | 4 years ago |
| [noodlog](https://github.com/gyozatech/noodlog) | 37 | 🍜 Parametrized JSON logging library in Golang which lets you obfuscate sensitive data and marshal any kind of content. | 10 months ago |
| [go-log](https://github.com/siddontang/go-log) | 31 | a golang log lib supports level and multi handlers | 3 years ago |
| [journald](https://github.com/ssgreg/journald) | 31 | Go implementation of systemd Journal's native API for logging | a year ago |
| [distillog](https://github.com/amoghe/distillog) | 28 | Logging, distilled | 4 years ago |
| [logrusly](https://github.com/sebest/logrusly) | 27 | Loggly Hooks for GO Logrus logger | a year ago |
| [log](https://github.com/teris-io/log) | 25 | Structured log interface | 5 years ago |
| [mlog](https://github.com/jbrodriguez/mlog) | 25 | A simple logging module for go, with a rotating file feature and console logging. | 4 years ago |
| [gomol](https://github.com/aphistic/gomol) | 18 | Gomol is a library for structured, multiple-output logging for Go with extensible logging outputs | 3 years ago |
| [zkits-logger](https://github.com/edoger/zkits-logger) | 16 | A powerful zero-dependency json logger. | 5 days ago |
| [glo](https://github.com/lajosbencz/glo) | 14 | Logging library for Golang | 4 years ago |
| [logmatic](https://github.com/mborders/logmatic) | 14 | Colorized logger for Golang with dynamic log level configuration | 2 years ago |
| [logrusiowriter](https://github.com/cabify/logrusiowriter) | 13 | io.Writer implementation using logrus logger | 2 years ago |
| [go-log](https://github.com/subchen/go-log) | 12 | Simple and configurable Logging in Go, with level, formatters and writers | 4 years ago |
| [go-log](https://github.com/pieterclaerhout/go-log) | 9 | A logging library with strack traces, object dumping and optional timestamps | 2 years ago |
| [log](https://github.com/aerogo/log) | 9 | :memo: Logging with multiple output targets. | 3 years ago |
| [logdump](https://github.com/ewwwwwqm/logdump) | 9 | Package for multi-level logging | 4 years ago |
| [logo](https://github.com/mbndr/logo) | 9 | Golang logger to different configurable writers. | 2 years ago |
| [kemba](https://github.com/clok/kemba) | 8 | A tiny debug logging tool. Ideal for CLI tools and command applications. Inspired by https://github.com/visionmedia/debug | 5 days ago |
| [xlog](https://github.com/xfxdev/xlog) | 7 | plugin architecture and flexible log system for golang | 4 years ago |
| [yell](https://github.com/jfcg/yell) | 0 | :ledger: Yet another minimalist logging library | 5 months ago |


### [Machine Learning](#Machine-Learning)
* Libraries for Machine Learning.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [golearn](https://github.com/sjwhitworth/golearn) | 8478 | Machine Learning for Go | 3 days ago |
| [gorse](https://github.com/gorse-io/gorse) | 6056 | An open source recommender system service written in Go | 2 days ago |
| [gorgonia](https://github.com/gorgonia/gorgonia) | 4586 | Gorgonia is a library that helps facilitate machine learning in Go. | 14 days ago |
| [m2cgen](https://github.com/BayesWitnesses/m2cgen) | 2157 | Transform ML models into a native code (Java, C, Python, Go, JavaScript, Visual Basic, C#, R, PowerShell, PHP, Dart, Haskell, Ruby, F#, Rust) with zero dependencies | 11 hours ago |
| [tfgo](https://github.com/galeone/tfgo) | 2003 | Tensorflow + Go, the gopher way | 2 months ago |
| [gosseract](https://github.com/otiai10/gosseract) | 1827 | Go package for OCR (Optical Character Recognition), by using Tesseract C++ library | 6 days ago |
| [goml](https://github.com/cdipaolo/goml) | 1363 | On-line Machine Learning in Go (and so much more) | 24 days ago |
| [eaopt](https://github.com/MaxHalford/eaopt) | 806 | :four_leaf_clover: Evolutionary optimization library for Go (genetic algorithm, partical swarm optimization, differential evolution) | a year ago |
| [bayesian](https://github.com/jbrukh/bayesian) | 738 | Naive Bayesian Classification for Golang. | 2 years ago |
| [CloudForest](https://github.com/ryanbressler/CloudForest) | 713 | Ensembles of decision trees in go/golang. | 6 months ago |
| [gobrain](https://github.com/goml/gobrain) | 525 | Neural Networks written in go | 2 years ago |
| [ocrserver](https://github.com/otiai10/ocrserver) | 521 | A simple OCR API server, seriously easy to be deployed by Docker, on Heroku as well | a year ago |
| [onnx-go](https://github.com/owulveryck/onnx-go) | 406 | onnx-go gives the ability to import a pre-trained neural network within Go without being linked to a framework or library. | a month ago |
| [go-deep](https://github.com/patrikeh/go-deep) | 381 | Artificial Neural Network | 6 months ago |
| [regommend](https://github.com/muesli/regommend) | 299 | Recommendation engine for Go | 3 years ago |
| [goptuna](https://github.com/c-bata/goptuna) | 222 | A hyperparameter optimization framework, inspired by Optuna. | 9 days ago |
| [go-galib](https://github.com/thoj/go-galib) | 192 | Genetic Algorithms library written in Go / golang | 7 years ago |
| [goRecommend](https://github.com/timkaye11/goRecommend) | 189 | Collaborative Filtering (CF) Algorithms in Go!  | 8 years ago |
| [goga](https://github.com/tomcraven/goga) | 163 | Golang Genetic Algorithm | 4 months ago |
| [shield](https://github.com/eaigner/shield) | 152 | Bayesian text classifier with flexible tokenizers and storage backends for Go | 2 years ago |
| [go-fann](https://github.com/vksnk/go-fann) | 109 | Go bindings for FANN, library for artificial neural networks | 8 years ago |
| [go-featureprocessing](https://github.com/nikolaydubina/go-featureprocessing) | 81 | 🔥 Fast, simple sklearn-like feature processing for Go | a month ago |
| [goscore](https://github.com/asafschers/goscore) | 81 | Go Scoring API for PMML | 3 years ago |
| [gonet](https://github.com/dathoangnd/gonet) | 75 | Neural Network for Go. | 2 years ago |
| [libsvm](https://github.com/datastream/libsvm) | 71 | libsvm go version | 6 years ago |
| [fonet](https://github.com/Fontinalis/fonet) | 68 | fonet is a deep neural network package for Go. | a year ago |
| [neat](https://github.com/jinyeom/neat) | 65 | NEAT (NeuroEvolution of Augmenting Topologies) implemented in Go | 4 years ago |
| [neural-go](https://github.com/schuyler/neural-go) | 63 | A multilayer perceptron network implemented in Go, with training via backpropagation. | 2 years ago |
| [go-pr](https://github.com/daviddengcn/go-pr) | 61 | Pattern recognition package in Go lang. | 9 years ago |
| [golinear](https://github.com/danieldk/golinear) | 44 | liblinear bindings for Go | 4 years ago |
| [Varis](https://github.com/Xamber/Varis) | 44 | Golang Neural Network  | 4 years ago |
| [godist](https://github.com/e-dard/godist) | 33 | Probability distributions and associated methods in Go | 7 years ago |
| [gomind](https://github.com/surenderthakran/gomind) | 32 | A simplistic Neural Network Library in Go | 3 months ago |
| [go-cluster](https://github.com/e-XpertSolutions/go-cluster) | 31 | k-modes and k-prototypes clustering algorithms implementation in Go | 4 years ago |
| [evoli](https://github.com/khezen/evoli) | 24 | Genetic Algorithm and Particle Swarm Optimization | 9 months ago |
| [randomForest](https://github.com/malaschitz/randomForest) | 22 | Random Forest implementation in golang | a month ago |
| [ddt](https://github.com/sgrodriguez/ddt) | 19 | Golang Dynamic Decision Tree | a year ago |
| [probab](https://github.com/ThePaw/probab) | 17 | Automatically exported from code.google.com/p/probab | 7 years ago |


### [Messaging](#Messaging)
* Libraries that implement messaging systems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sarama](https://github.com/Shopify/sarama) | 9022 | Sarama is a Go library for Apache Kafka. | 3 days ago |
| [gorush](https://github.com/appleboy/gorush) | 6491 | A push notification server written in Go (Golang). | a month ago |
| [machinery](https://github.com/RichardKnop/machinery) | 6402 | Machinery is an asynchronous task queue/job queue based on distributed message passing. | 20 days ago |
| [centrifugo](https://github.com/centrifugal/centrifugo) | 6277 | Scalable real-time messaging server in a language-agnostic way. Set up once and forever. | 2 days ago |
| [go-socket.io](https://github.com/googollee/go-socket.io) | 4737 | socket.io library for golang, a realtime application framework. | 2 months ago |
| [benthos](https://github.com/benthosdev/benthos) | 4635 | Fancy stream processing made operationally mundane | 7 hours ago |
| [nats.go](https://github.com/nats-io/nats.go) | 4073 | Golang client for NATS, the cloud native messaging system. | 3 days ago |
| [asynq](https://github.com/hibiken/asynq) | 3815 | Simple, reliable, and efficient distributed task queue in Go | 25 days ago |
| [confluent-kafka-go](https://github.com/confluentinc/confluent-kafka-go) | 3449 | Confluent's Apache Kafka Golang client | 5 days ago |
| [mercure](https://github.com/dunglas/mercure) | 2934 | Server-sent live updates: protocol and reference implementation | 10 days ago |
| [apns2](https://github.com/sideshow/apns2) | 2671 | ⚡ HTTP/2 Apple Push Notification Service (APNs) push provider for Go — Send push notifications to iOS, tvOS, Safari and OSX apps, using the APNs HTTP/2 protocol. | 4 days ago |
| [melody](https://github.com/olahol/melody) | 2503 | :notes: Minimalist websocket framework for Go | 5 months ago |
| [go-nsq](https://github.com/nsqio/go-nsq) | 2283 | The official Go package for NSQ | 7 days ago |
| [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) | 2046 | Golang push server cluster | 5 years ago |
| [uniqush-push](https://github.com/uniqush/uniqush-push) | 1418 | Uniqush is a free and open source software system which provides a unified push service for server side notification to apps on mobile devices. | 2 years ago |
| [Beaver](https://github.com/Clivern/Beaver) | 1360 | 💨 A real time messaging system to build a scalable in-app notifications, multiplayer games, chat apps in web and mobile apps. | 2 days ago |
| [EventBus](https://github.com/asaskevich/EventBus) | 1205 | [Go] Lightweight eventbus with async compatibility for Go | 4 months ago |
| [zmq4](https://github.com/pebbe/zmq4) | 1007 | A Go interface to ZeroMQ version 4 | 5 days ago |
| [gollum](https://github.com/trivago/gollum) | 920 | An n:m message multiplexer written in Go | 5 months ago |
| [chanify](https://github.com/chanify/chanify) | 900 | Chanify is a safe and simple notification tools. This repository is command line tools for Chanify. | 4 months ago |
| [dbus](https://github.com/godbus/dbus) | 737 | Native Go bindings for D-Bus | a month ago |
| [golongpoll](https://github.com/jcuga/golongpoll) | 605 | golang long polling library.  Makes web pub-sub easy via HTTP long-poll servers and clients :smiley: :coffee: :computer: | a month ago |
| [mangos](https://github.com/nanomsg/mangos) | 534 | mangos is a pure Golang implementation of nanomsg's "Scalablilty Protocols" | 17 days ago |
| [amqp091-go](https://github.com/rabbitmq/amqp091-go) | 459 | An AMQP 0-9-1 Go client maintained by the RabbitMQ team. Originally by @streadway: `streadway/amqp` | 20 days ago |
| [emitter](https://github.com/olebedev/emitter) | 430 | Emits events in Go way, with wildcard, predicates, cancellation possibilities and many other good wins | 3 years ago |
| [glue](https://github.com/desertbit/glue) | 402 | Glue - Robust Go and Javascript Socket Library (Alternative to Socket.io) | 2 years ago |
| [pubsub](https://github.com/cskr/pubsub) | 378 | A simple pubsub package for go. | 2 months ago |
| [bus](https://github.com/mustafaturan/bus) | 272 | 🔊Minimalist message bus implementation for internal communication with zero-allocation magic on Emit | a year ago |
| [message-bus](https://github.com/vardius/message-bus) | 225 | Go simple async message bus | 2 years ago |
| [rabtap](https://github.com/jandelgado/rabtap) | 216 | RabbitMQ wire tap and swiss army knife | 7 days ago |
| [guble](https://github.com/smancke/guble) | 152 | websocket based messaging server written in golang | 5 years ago |
| [zmq3](https://github.com/pebbe/zmq3) | 131 | A Go interface to ZeroMQ version 3 | a year ago |
| [hub](https://github.com/leandro-lugaresi/hub) | 118 | :incoming_envelope: A fast Message/Event Hub using publish/subscribe pattern with support for topics like* rabbitMQ exchanges for Go applications | 2 years ago |
| [oplog](https://github.com/dailymotion/oplog) | 112 | A generic oplog/replication system for microservices | 7 years ago |
| [go-gcm](https://github.com/googlearchive/go-gcm) | 104 | GCM library for Go. | 3 years ago |
| [rabbus](https://github.com/rafaeljesus/rabbus) | 93 | A tiny wrapper over amqp exchanges and queues 🚌 ✨ | 3 years ago |
| [redisqueue](https://github.com/robinjoseph08/redisqueue) | 84 | redisqueue provides a producer and consumer of a queue that uses Redis streams | 3 months ago |
| [drone-line](https://github.com/appleboy/drone-line) | 77 | Sending line notifications using a binary, docker or Drone CI. | a year ago |
| [go-mq](https://github.com/cheshir/go-mq) | 75 | Declare AMQP entities like queues, producers, and consumers in a declarative way. Can be used to work with RabbitMQ. | 8 months ago |
| [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) | 74 | A tiny wrapper around NSQ topic and channel :rocket: | 4 years ago |
| [RapidMQ](https://github.com/sybrexsys/RapidMQ) | 64 | RapidMQ is a pure, extremely productive, lightweight and reliable library for managing of the local messages queue | 5 years ago |
| [go-notify](https://github.com/TheCreeper/go-notify) | 61 | Package notify provides an implementation of the Gnome DBus Notifications Specification. | 2 years ago |
| [commander](https://github.com/jeroenrinzema/commander) | 60 | Build event-driven and event streaming applications with ease | a year ago |
| [go-res](https://github.com/jirenius/go-res) | 59 | RES Service protocol library for Go | 7 months ago |
| [hare](https://github.com/leozz37/hare) | 48 | 🐇  CLI tool for websockets and easy to use Golang package | 21 hours ago |
| [event](https://github.com/agoalofalife/event) | 47 | The implementation of the pattern observer | 4 years ago |
| [ami](https://github.com/kak-tus/ami) | 23 | Go client to reliable queues based on Redis Cluster Streams | 2 years ago |
| [gosd](https://github.com/alexsniffin/gosd) | 20 | A library for scheduling when to dispatch a message to a channel | 2 years ago |
| [rmqconn](https://github.com/sbabiv/rmqconn) | 19 | RabbitMQ Reconnection client | 3 years ago |
| [go-vitotrol](https://github.com/maxatome/go-vitotrol) | 18 | golang client library to Viessmann Vitotrol web service | 2 months ago |
| [zmq2](https://github.com/pebbe/zmq2) | 18 | A Go interface to ZeroMQ version 2 | a year ago |
| [jazz](https://github.com/socifi/jazz) | 15 | Abstraction layer for simple rabbitMQ connection, messaging and administration | 3 years ago |
| [gaurun-client](https://github.com/osamingo/gaurun-client) | 10 | Gaurun Client written in Go | a year ago |


### [Microsoft Office](#Microsoft-Office)
* Office

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [unioffice](https://github.com/unidoc/unioffice) | 3441 | Pure go library for creating and processing Office Word (.docx), Excel (.xlsx) and Powerpoint (.pptx) documents | a month ago |


### [Microsoft Excel](#Microsoft-Excel)
* Libraries for working with Microsoft Excel.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [excelize](https://github.com/qax-os/excelize) | 12401 | Go language library for reading and writing Microsoft Excel™ (XLAM / XLSM / XLSX / XLTM / XLTX) spreadsheets | 2 hours ago |
| [xlsx](https://github.com/tealeg/xlsx) | 5361 | Go (golang) library for reading and writing XLSX files.  | 2 months ago |
| [xlsx](https://github.com/plandem/xlsx) | 153 | Fast and reliable way to work with Microsoft Excel™ [xlsx] files in Golang | 2 years ago |
| [go-excel](https://github.com/szyhf/go-excel) | 151 | A simple and light excel file reader to read a standard excel as a table faster , 一个轻量级的Excel数据读取库，用一种更`关系数据库`的方式解析Excel。 | 3 months ago |
| [goxlsxwriter](https://github.com/fterrag/goxlsxwriter) | 18 | Golang bindings for libxlsxwriter for writing XLSX files | 2 months ago |


### [Miscellaneous](#Miscellaneous)
* 

#### [Dependency Injection](#Dependency-Injection)
* Libraries for working with dependency injection.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fx](https://github.com/uber-go/fx) | 2982 | A dependency injection based application framework for Go. | 2 days ago |
| [dig](https://github.com/uber-go/dig) | 2669 | A reflection based dependency injection toolkit for Go. | 4 days ago |
| [container](https://github.com/golobby/container) | 374 | A lightweight yet powerful IoC dependency injection container for the Go programming language | 3 months ago |
| [di](https://github.com/goioc/di) | 198 | Simple and yet powerful Dependency Injection for Go | 8 days ago |
| [di](https://github.com/goava/di) | 156 | 🛠 A full-featured dependency injection container for go programming language. | 8 months ago |
| [dingo](https://github.com/i-love-flamingo/dingo) | 134 | Go Dependency Injection Framework | 5 days ago |
| [alice](https://github.com/magic003/alice) | 46 | An additive dependency injection container for Golang. | 5 years ago |
| [linker](https://github.com/logrange/linker) | 35 | Dependency Injection and Inversion of Control package | 2 years ago |
| [wire](https://github.com/Fs02/wire) | 35 | Strict Runtime Dependency Injection for Golang | a year ago |
| [gocontainer](https://github.com/vardius/gocontainer) | 15 | Simple Dependency Injection Container | 2 years ago |
| [kinit](https://github.com/go-kata/kinit) | 8 | GO Dependency Injection | a year ago |
| [nject](https://github.com/BlueOwlOpenSource/nject) | 3 | Go dependency injection: nject & npoint | a year ago |


#### [Project Layout](#Project-Layout)
* Unofficial set of patterns for structuring projects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [project-layout](https://github.com/golang-standards/project-layout) | 33668 | Standard Go Project Layout | 15 days ago |
| [service](https://github.com/ardanlabs/service) | 2397 | Starter code for writing web services in Go using Kubernetes. | 3 days ago |
| [modern-go-application](https://github.com/sagikazarmark/modern-go-application) | 1300 | Modern Go Application example | 7 months ago |
| [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) | 534 | A Go project template | 2 months ago |
| [seed](https://github.com/golang-templates/seed) | 279 | Go application GitHub repository template. | 26 minutes ago |
| [go-starter](https://github.com/allaboutapps/go-starter) | 174 | An opinionated production-ready SQL-/Swagger-first RESTful JSON API written in Go, highly integrated with VSCode DevContainers by allaboutapps. | 5 days ago |
| [go-todo-backend](https://github.com/Fs02/go-todo-backend) | 165 | Go Todo Backend example using modular project layout for product microservice. | a month ago |
| [scaffold](https://github.com/catchplay/scaffold) | 116 | Generate scaffold project layout for Go. | 4 years ago |
| [go-sample](https://github.com/zitryss/go-sample) | 104 | Go Project Sample Layout | 4 years ago |
| [gobase](https://github.com/wajox/gobase) | 30 | This is a simple skeleton for golang applications | 12 days ago |
| [go-project-layout](https://github.com/wangyoucao577/go-project-layout) | 17 | My understanding of how to structure a golang project.  | a year ago |
| [inizio](https://github.com/insidieux/inizio) | 11 | Golang project standard layout generator | 2 months ago |


#### [Strings](#Strings)
* Libraries for working with strings.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xstrings](https://github.com/huandu/xstrings) | 1061 | Implements string functions widely used in other languages but absent in Go. | 8 months ago |
| [sttr](https://github.com/abhimanyu003/sttr) | 402 | cross-platform, cli app to perform various operations on string | 2 months ago |
| [strutil](https://github.com/ozgio/strutil) | 180 | String utilities for Go | 2 months ago |
| [stringy](https://github.com/gobeam/stringy) | 137 | Convert string to camel case, snake case, kebab case / slugify, custom delimiter, pad string, tease string and many other functionalities with help of by Stringy package. | 2 months ago |
| [bexp](https://github.com/mkungla/bexp) | 8 | Go implementation of Brace Expansion mechanism to generate arbitrary strings. | a month ago |


#### [Uncategorized](#Uncategorized)
* These libraries were placed here because none of the other categories seemed to fit.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gopsutil](https://github.com/shirou/gopsutil) | 8032 | psutil for golang | 3 days ago |
| [archiver](https://github.com/mholt/archiver) | 3641 | Easily create & extract archives, and compress & decompress files of various formats | 2 months ago |
| [gatus](https://github.com/TwiN/gatus) | 2729 | ⛑ Gatus - Automated service health dashboard | 4 days ago |
| [gofakeit](https://github.com/brianvoe/gofakeit) | 2569 | Random fake data generator written in go | 3 days ago |
| [oapi-codegen](https://github.com/deepmap/oapi-codegen) | 2267 | Generate Go client and server boilerplate from OpenAPI 3 specifications | 2 days ago |
| [go-resiliency](https://github.com/eapache/go-resiliency) | 1561 | Resiliency patterns for golang | a month ago |
| [base64Captcha](https://github.com/mojocn/base64Captcha) | 1540 | captcha of base64 image string | a month ago |
| [gosms](https://github.com/haxpax/gosms) | 1389 | :mailbox_closed: Your own local SMS gateway in Go | 2 years ago |
| [go-commons-pool](https://github.com/jolestar/go-commons-pool) | 1059 | a generic object pool for golang | a month ago |
| [llvm](https://github.com/llir/llvm) | 931 | Library for interacting with LLVM IR in pure Go. | 5 days ago |
| [shortid](https://github.com/teris-io/shortid) | 782 | Super short, fully unique, non-sequential and URL friendly Ids | 2 months ago |
| [health](https://github.com/alexliesenfeld/health) | 519 | A simple and flexible health check library for Go. | 19 days ago |
| [stateless](https://github.com/qmuntal/stateless) | 468 | Go library for creating state machines | 14 days ago |
| [health](https://github.com/dimiro1/health) | 431 | An easy to use, extensible health check library for Go applications. | 14 days ago |
| [shoutrrr](https://github.com/containrrr/shoutrrr) | 406 | Notification library for gophers and their furry friends. | 9 days ago |
| [banner](https://github.com/dimiro1/banner) | 403 | An easy way to add useful startup banners into your Go applications | 2 years ago |
| [go-conv](https://github.com/cstockton/go-conv) | 381 | Fast conversions across various Go types with a simple API. | a year ago |
| [gountries](https://github.com/pariz/gountries) | 346 | Gountries provides: Countries (ISO-3166-1), Country Subdivisions(ISO-3166-2), Currencies (ISO 4217), Geo Coordinates(ISO-6709) as well as translations, country borders and other stuff exposed as struct data. | 20 days ago |
| [ffmt](https://github.com/go-ffmt/ffmt) | 275 | Golang beautify data display for Humans | 9 months ago |
| [lk](https://github.com/hyperboloide/lk) | 252 | Simple licensing library for golang. | 2 years ago |
| [antch](https://github.com/antchfx/antch) | 234 | Antch, a fast, powerful and extensible web crawling & scraping framework for Go | 2 years ago |
| [healthcheck](https://github.com/etherlabsio/healthcheck) | 225 | An simple, easily extensible and concurrent health-check library for Go services | a year ago |
| [battery](https://github.com/distatus/battery) | 208 | cross-platform, normalized battery information library | 7 months ago |
| [go-unarr](https://github.com/gen2brain/go-unarr) | 194 | Go bindings for unarr (decompression library for RAR, TAR, ZIP and 7z archives) | 2 months ago |
| [bitio](https://github.com/icza/bitio) | 192 | Optimized bit-level Reader and Writer for Go. | 6 months ago |
| [stats](https://github.com/go-playground/stats) | 162 | :chart_with_upwards_trend: Monitors Go MemStats + System stats such as Memory, Swap and CPU and sends via UDP anywhere you want for logging etc... | 6 years ago |
| [turtle](https://github.com/hackebrot/turtle) | 136 | Emojis for Go 😄🐢🚀 | 10 months ago |
| [captcha](https://github.com/steambap/captcha) | 113 | :sunglasses:Package captcha provides an easy to use, unopinionated API for captcha generation | a month ago |
| [gommit](https://github.com/antham/gommit) | 95 | Enforce git message commit consistency | 19 days ago |
| [indigo](https://github.com/osamingo/indigo) | 95 | A distributed unique ID generator of using Sonyflake and encoded by Base58 | 3 months ago |
| [gotoprom](https://github.com/cabify/gotoprom) | 93 | Type-safe Prometheus metrics builder library for golang | 3 years ago |
| [morse](https://github.com/alwindoss/morse) | 75 | Morse Code Library in Go | 6 months ago |
| [persian](https://github.com/mavihq/persian) | 64 | Some utilities for Persian language in Go (Golang) | a year ago |
| [faker](https://github.com/pioz/faker) | 63 | Random fake data and struct generator for Go. | 4 months ago |
| [pdfgen](https://github.com/hyperboloide/pdfgen) | 57 | HTTP service to generate PDF from Json requests | 4 years ago |
| [xkg](https://github.com/go-xkg/xkg) | 53 | User level X Keyboard Grabber | 8 years ago |
| [browscap_go](https://github.com/digitalcrab/browscap_go) | 41 | GoLang Library for Browser Capabilities Project | 2 months ago |
| [datacounter](https://github.com/miolini/datacounter) | 40 | Golang counters for readers/writers | a month ago |
| [sandid](https://github.com/aofei/sandid) | 37 | Every grain of sand on Earth has its own ID. | 4 days ago |
| [autoflags](https://github.com/artyom/autoflags) | 36 | Populate go command line app flags from config struct | 2 months ago |
| [url-shortener](https://github.com/pantrif/url-shortener) | 36 | A golang URL Shortener | 4 years ago |
| [gosh](https://github.com/osamingo/gosh) | 29 | Provide Go Statistics Handler, Struct, Measure Method | 3 months ago |
| [xdg](https://github.com/rkoesters/xdg) | 28 | FreeDesktop.org (xdg) Specs implemented in Go | 3 months ago |
| [metrics](https://github.com/pascaldekloe/metrics) | 22 | atomic measures + Prometheus exposition library | 2 months ago |
| [shellwords](https://github.com/Wing924/shellwords) | 17 | A Golang library to manipulate strings according to the word parsing rules of the UNIX Bourne shell. | 5 months ago |
| [anagent](https://github.com/mudler/anagent) | 14 | Minimalistic, pluggable Golang evloop/timer handler with dependency-injection | 4 years ago |
| [avgRating](https://github.com/kirillDanshin/avgRating) | 11 | Calculate average score and rating based on Wilson Score Equation | 5 years ago |
| [hostutils](https://github.com/Wing924/hostutils) | 10 | A golang library for packing and unpacking hosts list | 7 months ago |
| [numa](https://github.com/lrita/numa) | 10 | NUMA is a utility library, which is written in go. It help us to write some NUMA-AWARED code. | 4 months ago |
| [go-commandbus](https://github.com/lana/go-commandbus) | 5 | Simple command bus for GO | 6 months ago |
| [generators](https://github.com/azr/generators) | 4 | #golang generator | 6 years ago |
| [basexx](https://github.com/bobg/basexx) | 2 | Convert digit strings between arbitrary bases. | 10 months ago |


### [Natural Language Processing](#Natural-Language-Processing)
* Libraries for working with human languages.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jieba](https://github.com/fxsjy/jieba) | 29037 | 结巴中文分词 | 22 days ago |
| [vaderSentiment](https://github.com/cjhutto/vaderSentiment) | 3662 | VADER Sentiment Analysis. VADER (Valence Aware Dictionary and sEntiment Reasoner) is a lexicon and rule-based sentiment analysis tool that is specifically attuned to sentiments expressed in social media, and works well on texts from other domains.  | 4 months ago |
| [prose](https://github.com/jdkato/prose) | 2942 | :book: A Golang library for text processing, including tokenization, part-of-speech tagging, and named-entity extraction. | 3 months ago |
| [go-i18n](https://github.com/nicksnyder/go-i18n) | 2091 | Translate your Go program into multiple languages. | a month ago |
| [gse](https://github.com/go-ego/gse) | 1985 | Go efficient multilingual NLP and text segmentation; support English, Chinese, Japanese and others. | 3 months ago |
| [gojieba](https://github.com/yanyiwu/gojieba) | 1931 | "结巴"中文分词的Golang版本 | 8 days ago |
| [spago](https://github.com/nlpodyssey/spago) | 1215 | Self-contained Machine Learning and Natural Language Processing library in Go | 7 days ago |
| [go-pinyin](https://github.com/mozillazg/go-pinyin) | 1202 | 汉字转拼音 | 5 months ago |
| [when](https://github.com/olebedev/when) | 1164 | A natural language date/time parser with pluggable rules | 8 months ago |
| [kagome](https://github.com/ikawaha/kagome) | 664 | Self-contained Japanese Morphological Analyzer written in pure Go | 21 days ago |
| [whatlanggo](https://github.com/abadojack/whatlanggo) | 547 | Natural language detection library for Go | 2 years ago |
| [nlp](https://github.com/nymiun/nlp) | 379 | [UNMANTEINED] Extract values from strings and fill your structs with nlp. | 5 years ago |
| [nlp](https://github.com/james-bowman/nlp) | 371 | Selected Machine Learning algorithms for natural language processing and semantic analysis in Golang | a year ago |
| [sentences](https://github.com/neurosnap/sentences) | 325 | A multilingual command line sentence tokenizer in Golang | 2 months ago |
| [getlang](https://github.com/rylans/getlang) | 138 | Natural language detection package in pure Go | 2 years ago |
| [RAKE.Go](https://github.com/afjoseph/RAKE.Go) | 94 | A Go port of the Rapid Automatic Keyword Extraction algorithm (RAKE) | 2 years ago |
| [go-unidecode](https://github.com/mozillazg/go-unidecode) | 93 | ASCII transliterations of Unicode text. | 9 days ago |
| [go-nlp](https://github.com/nuance/go-nlp) | 91 | Utilities for working with discrete probability distributions and other tools useful for doing NLP work | 11 years ago |
| [gounidecode](https://github.com/fiam/gounidecode) | 75 | Unicode transliterator for #golang | 7 years ago |
| [segment](https://github.com/blevesearch/segment) | 70 | A Go library for performing Unicode Text Segmentation as described in Unicode Standard Annex #29 | 2 years ago |
| [go-stem](https://github.com/agonopol/go-stem) | 68 | Word Stemming in Go | 4 years ago |
| [textcat](https://github.com/pebbe/textcat) | 67 | A Go package for n-gram based text categorization, with support for utf-8 and raw text | a year ago |
| [MMSEGO](https://github.com/awsong/MMSEGO) | 61 | Chinese word splitting algorithm MMSEG in GO | 10 years ago |
| [address](https://github.com/bojanz/address) | 51 | Address handling for Go. | 25 days ago |
| [stemmer](https://github.com/dchest/stemmer) | 51 | Stemmer packages for Go programming language. Includes English, German and Dutch stemmers. | 6 years ago |
| [go2vec](https://github.com/danieldk/go2vec) | 48 | Read and use word2vec vectors in Go | 4 years ago |
| [porter2](https://github.com/zentures/porter2) | 45 | High Performance Porter2 Stemmer | 2 years ago |
| [go-localize](https://github.com/m1/go-localize) | 39 | i18n (Internationalization and localization) engine written in Go, used for translating locale strings.  | 9 months ago |
| [petrovich](https://github.com/striker2000/petrovich) | 39 | Golang port of Petrovich - an inflector for Russian anthroponyms. | a year ago |
| [snowball](https://github.com/goodsign/snowball) | 31 | Cgo binding for Snowball C library | 5 years ago |
| [iuliia-go](https://github.com/mehanizm/iuliia-go) | 30 | Transliterate Cyrillic → Latin in every possible way | a year ago |
| [mystem](https://github.com/dveselov/mystem) | 28 | CGo bindings to Yandex.Mystem | 6 years ago |
| [paicehusk](https://github.com/rookii/paicehusk) | 28 | Golang implementation of the Paice/Husk Stemming Algorithm | 9 years ago |
| [govader](https://github.com/jonreiter/govader) | 25 | vader sentiment analysis in go | 4 months ago |
| [transliterator](https://github.com/alexsergivan/transliterator) | 24 | Golang text Transliterator (i.e München -> Muenchen) | 2 years ago |
| [icu](https://github.com/goodsign/icu) | 20 | Cgo binding for icu4c library | 5 years ago |
| [golibstemmer](https://github.com/rjohnsondev/golibstemmer) | 19 | Go bindings for the snowball libstemmer library including porter 2 | 8 years ago |
| [detectlanguage-go](https://github.com/detectlanguage/detectlanguage-go) | 15 | Detect Language API Go Client | 3 months ago |
| [gotokenizer](https://github.com/xujiajun/gotokenizer) | 14 | A tokenizer based on the dictionary and Bigram language models for Go. (Now only support chinese segmentation) | 3 years ago |
| [shamoji](https://github.com/osamingo/shamoji) | 12 | The shamoji (杓文字) is a word filtering package | 3 months ago |
| [libtextcat](https://github.com/goodsign/libtextcat) | 11 | Cgo binding for libtextcat C library | 10 years ago |
| [t](https://github.com/youthlin/t) | 11 | t: translation util for go, using GNU gettext | 9 months ago |
| [porter](https://github.com/a2800276/porter) | 9 | porter stemmer | 9 years ago |
| [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) | 8 | 💬 Sentiment analyzer library using SentiWordnet in Go | a year ago |


### [Networking](#Networking)
* Libraries for working with various layers of the network.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fasthttp](https://github.com/valyala/fasthttp) | 18199 | Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http | 10 days ago |
| [kcptun](https://github.com/xtaci/kcptun) | 12962 | A Stable & Secure Tunnel based on KCP with N:M multiplexing and FEC. Available for ARM, MIPS, 386 and AMD64。KCPプロトコルに基づく安全なトンネル。KCP 프로토콜을 기반으로 하는 보안 터널입니다。 | a month ago |
| [webrtc](https://github.com/pion/webrtc) | 9685 | Pure Go implementation of the WebRTC API | 15 days ago |
| [quic-go](https://github.com/lucas-clemente/quic-go) | 7068 | A QUIC implementation in pure go | 4 days ago |
| [gnet](https://github.com/panjf2000/gnet) | 6779 | 🚀 gnet is a high-performance, lightweight, non-blocking, event-driven networking framework written in pure Go./ gnet 是一个高性能、轻量级、非阻塞的事件驱动 Go 网络框架。 | 13 days ago |
| [dns](https://github.com/miekg/dns) | 6441 | DNS library in Go | 5 days ago |
| [gopacket](https://github.com/google/gopacket) | 5002 | Provides packet processing capabilities for Go | a day ago |
| [httplab](https://github.com/qustavo/httplab) | 3830 | The interactive web server | 3 years ago |
| [kcp-go](https://github.com/xtaci/kcp-go) | 3388 |  A Crypto-Secure, Production-Grade Reliable-UDP Library for golang with FEC  | 7 days ago |
| [gobgp](https://github.com/osrg/gobgp) | 2941 | BGP implemented in the Go Programming Language | 3 days ago |
| [ssh](https://github.com/gliderlabs/ssh) | 2654 | Easy SSH servers in Golang | 3 months ago |
| [fortio](https://github.com/fortio/fortio) | 2617 | Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats. | 3 days ago |
| [water](https://github.com/songgao/water) | 1489 | A simple TUN/TAP library written in native Go. | 6 months ago |
| [gev](https://github.com/Allenxuxu/gev) | 1453 | 🚀Gev is a lightweight, fast non-blocking TCP network library / websocket server based on Reactor mode. Support custom protocols to quickly and easily build high-performance servers.  | 4 months ago |
| [go-getter](https://github.com/hashicorp/go-getter) | 1383 | Package for downloading things from a string URL using a variety of protocols. | 5 days ago |
| [nff-go](https://github.com/intel-go/nff-go) | 1220 | NFF-Go -Network Function Framework for GO (former YANFF) | a year ago |
| [sftp](https://github.com/pkg/sftp) | 1190 | SFTP support for the go.crypto/ssh package | 23 days ago |
| [grab](https://github.com/cavaliergopher/grab) | 1085 | A download manager package for Go | 7 months ago |
| [ftp](https://github.com/jlaffaye/ftp) | 971 | FTP client package for Go | 10 days ago |
| [mdns](https://github.com/hashicorp/mdns) | 896 | Simple mDNS client/server library in Golang | 7 months ago |
| [gosnmp](https://github.com/gosnmp/gosnmp) | 874 | An SNMP library written in Go | 25 days ago |
| [vssh](https://github.com/yahoo/vssh) | 856 | Go Library to Execute Commands Over SSH at Scale | 2 years ago |
| [nbio](https://github.com/lesismal/nbio) | 734 | Pure Go 1000k+ connections solution, support tls/http1.x/websocket and basically compatible with net/http, with high-performance and low memory cost, non-blocking, event-driven, easy-to-use. | a month ago |
| [cidranger](https://github.com/yl2chen/cidranger) | 732 | Fast IP to CIDR lookup in Golang | 7 months ago |
| [gmqtt](https://github.com/DrmagicE/gmqtt) | 709 | Gmqtt is a flexible, high-performance MQTT broker library that fully implements the MQTT protocol V3.x and V5 in golang | 7 days ago |
| [lhttp](https://github.com/fanux/lhttp) | 676 | go websocket, a better way to buid your IM server | 4 years ago |
| [peerdiscovery](https://github.com/schollz/peerdiscovery) | 552 | Pure-Go library for cross-platform local peer discovery using UDP multicast :woman: :repeat: :woman: | a month ago |
| [go-stun](https://github.com/ccding/go-stun) | 510 | A go implementation of the STUN client (RFC 3489 and RFC 5389) | 4 months ago |
| [gotcp](https://github.com/gansidui/gotcp) | 494 | A Go package for quickly building tcp servers | 5 years ago |
| [stun](https://github.com/gortc/stun) | 489 | Fast RFC 5389 STUN implementation in go | a year ago |
| [gaio](https://github.com/xtaci/gaio) | 447 | High performance async-io(proactor) networking for Golang。golangのための高性能非同期io(proactor)ネットワーキング | 5 months ago |
| [gopcap](https://github.com/akrennmair/gopcap) | 445 | A simple wrapper around libpcap for the Go programming language | a year ago |
| [easytcp](https://github.com/DarthPestilane/easytcp) | 439 | :sparkles: :rocket: EasyTCP is a light-weight TCP framework written in Go (Golang), built with message router. EasyTCP helps you build a TCP server easily fast and less painful. | 25 days ago |
| [raw](https://github.com/mdlayher/raw) | 423 | Package raw enables reading and writing data at the device driver level for a network interface.  MIT Licensed. | 6 months ago |
| [tcp_server](https://github.com/firstrow/tcp_server) | 415 | golang tcp server | 9 months ago |
| [winrm](https://github.com/masterzen/winrm) | 370 | Command-line tool and library for Windows remote command execution in Go | 2 months ago |
| [ftpserverlib](https://github.com/fclairamb/ftpserverlib) | 323 | golang ftp server library | 3 days ago |
| [arp](https://github.com/mdlayher/arp) | 289 | Package arp implements the ARP protocol, as described in RFC 826. MIT Licensed. | 6 hours ago |
| [buffstreams](https://github.com/StabbyCutyou/buffstreams) | 249 | A library to simplify writing applications using TCP sockets to stream protobuff messages | 2 years ago |
| [ethernet](https://github.com/mdlayher/ethernet) | 242 | Package ethernet implements marshaling and unmarshaling of IEEE 802.3 Ethernet II frames and IEEE 802.1Q VLAN tags. MIT Licensed. | 6 months ago |
| [gnxi](https://github.com/google/gnxi) | 217 | gNXI Tools - gRPC Network Management/Operations Interface Tools | a month ago |
| [jazigo](https://github.com/udhos/jazigo) | 181 | Jazigo is a tool written in Go for retrieving configuration for multiple devices, similar to rancid, fetchconfig, oxidized, Sweet. | 3 years ago |
| [utp](https://github.com/anacrolix/utp) | 162 | Use anacrolix/go-libutp instead | 2 years ago |
| [canopus](https://github.com/zubairhamed/canopus) | 148 | CoAP Client/Server implementing RFC 7252 for the Go Language | 4 years ago |
| [sslb](https://github.com/eduardonunesp/sslb) | 141 | Golang Super Simple Load Balance | 3 years ago |
| [xtcp](https://github.com/xfxdev/xtcp) | 134 | A TCP Server Framework with graceful shutdown, custom protocol. | 2 years ago |
| [iplib](https://github.com/c-robinson/iplib) | 87 | A library  for working with IP addresses and networks in Go | 9 months ago |
| [ether](https://github.com/songgao/ether) | 77 | A Go package for sending and receiving ethernet frames. Currently supporting Linux, Freebsd, and OS X. | 6 years ago |
| [dhcp6](https://github.com/mdlayher/dhcp6) | 74 | Package dhcp6 implements a DHCPv6 server, as described in RFC 3315. MIT Licensed. | 3 years ago |
| [packet](https://github.com/aerogo/packet) | 71 | :package: Send network packets over a TCP or UDP connection. | 3 years ago |
| [go-powerdns](https://github.com/joeig/go-powerdns) | 59 | Go PowerDNS 4.x API Client | 4 months ago |
| [linkio](https://github.com/ian-kent/linkio) | 51 | Simulate network link speed | 5 years ago |
| [portproxy](https://github.com/aybabtme/portproxy) | 50 | TCP proxy, highjacks HTTP to allow CORS | 8 years ago |
| [panoptes-stream](https://github.com/yahoo/panoptes-stream) | 36 | A cloud native distributed streaming network telemetry. | a year ago |
| [graval](https://github.com/koofr/graval) | 27 | An experimental go FTP server framework | 2 years ago |
| [golibwireshark](https://github.com/sunwxg/golibwireshark) | 25 |  | 5 years ago |
| [publicip](https://github.com/polera/publicip) | 25 | Go pkg for returning your public facing IP address. | 6 years ago |
| [gohooks](https://github.com/averageflow/gohooks) | 16 | GoHooks make it easy to send and consume secured web-hooks from a Go application | a year ago |
| [goshark](https://github.com/sunwxg/goshark) | 14 |  | 5 years ago |
| [httpproxy](https://github.com/wzshiming/httpproxy) | 12 | HTTP proxy handler and dialer | 9 months ago |
| [llb](https://github.com/kirillDanshin/llb) | 12 |  | 6 years ago |
| [tspool](https://github.com/two/tspool) | 12 | tcp server pool | 4 years ago |


### [HTTP Clients](#HTTP-Clients)
* Libraries for making HTTP requests.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [resty](https://github.com/go-resty/resty) | 6461 | Simple HTTP and REST client library for Go | 13 days ago |
| [heimdall](https://github.com/gojek/heimdall) | 2298 | An enhanced HTTP client for Go | 4 months ago |
| [grequests](https://github.com/levigross/grequests) | 1893 | A Go "clone" of the great and famous Requests library | 2 years ago |
| [sling](https://github.com/dghubble/sling) | 1465 | A Go HTTP client library for creating and sending API requests | 4 months ago |
| [gentleman](https://github.com/h2non/gentleman) | 961 | Plugin-driven, extensible HTTP client toolkit for Go | a year ago |
| [pester](https://github.com/sethgrid/pester) | 594 | Go (golang) http calls with retries and backoff  | 6 months ago |
| [requests](https://github.com/carlmjohnson/requests) | 400 | HTTP requests for Gophers | 2 months ago |
| [request](https://github.com/monaco-io/request) | 207 | go request, go http client | 7 months ago |
| [go-http-client](https://github.com/bozd4g/go-http-client) | 41 | An enhanced http client for Golang | a year ago |
| [rq](https://github.com/ddo/rq) | 40 | A nicer interface for golang stdlib HTTP client | 3 years ago |
| [httpretry](https://github.com/ybbus/httpretry) | 20 | Enriches the standard go http client with retry functionality. | 2 years ago |
| [go-req](https://github.com/wenerme/go-req) | 15 | Declarative golang HTTP client | a month ago |
| [httpc](https://github.com/valord577/httpc) | 4 | A customizable and simple HTTP client library. Only depend on the stdlib HTTP client. | 9 months ago |


### [OpenGL](#OpenGL)
* Libraries for using OpenGL in Go.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glfw](https://github.com/go-gl/glfw) | 1297 | Go bindings for GLFW 3 | 2 days ago |
| [gl](https://github.com/go-gl/gl) | 916 | Go bindings for OpenGL (generated via glow) | 8 months ago |
| [mathgl](https://github.com/go-gl/mathgl) | 447 | A pure Go 3D math library. | 3 months ago |
| [gl](https://github.com/goxjs/gl) | 158 | Go cross-platform OpenGL bindings. | 2 years ago |
| [glfw](https://github.com/goxjs/glfw) | 75 | Go cross-platform glfw library for creating an OpenGL context and receiving events. | 7 months ago |
| [go-glmatrix](https://github.com/technohippy/go-glmatrix) | 3 | go-glmatrix is a golang version of glMatrix, which is "designed to perform vector and matrix operations stupidly fast". | 2 years ago |


### [ORM](#ORM)
* Libraries that implement Object-Relational Mapping or datamapping techniques.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gorm](https://github.com/go-gorm/gorm) | 29207 | The fantastic ORM library for Golang, aims to be developer friendly | 2 days ago |
| [beego](https://github.com/beego/beego) | 28673 | beego is an open-source, high-performance web framework for the Go programming language. | 5 days ago |
| [ent](https://github.com/ent/ent) | 11352 | An entity framework for Go | a day ago |
| [pg](https://github.com/go-pg/pg) | 5160 | Golang ORM with focus on PostgreSQL features and performance | 11 hours ago |
| [sqlboiler](https://github.com/volatiletech/sqlboiler) | 5086 | Generate a Go ORM tailored to your database schema. | 7 days ago |
| [gorp](https://github.com/go-gorp/gorp) | 3582 | Go Relational Persistence - an ORM-ish library for Go | a year ago |
| [db](https://github.com/upper/db) | 3134 | Data access layer for PostgreSQL, CockroachDB, MySQL, SQLite and MongoDB with ORM-like features. | 9 days ago |
| [gormt](https://github.com/xxjwxc/gormt) | 1957 | database to golang struct | a month ago |
| [reform](https://github.com/go-reform/reform) | 1310 | A better ORM for Go, based on non-empty interfaces and code generation. | 7 days ago |
| [pop](https://github.com/gobuffalo/pop) | 1220 | A Tasty Treat For All Your Database Needs | 13 days ago |
| [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) | 815 | A flexible and powerful SQL string builder library plus a zero-config ORM. | 15 days ago |
| [go-queryset](https://github.com/jirfag/go-queryset) | 669 | 100% type-safe ORM for Go (Golang) with code generation and MySQL, PostgreSQL, Sqlite3, SQL Server support. GORM under the hood. | a year ago |
| [rel](https://github.com/go-rel/rel) | 554 | :gem: Modern ORM for Golang - Testable, Extendable and Crafted Into a Clean and Elegant API | a month ago |
| [zoom](https://github.com/albrow/zoom) | 291 | A blazing-fast datastore and querying engine for Go built on Redis. | 2 years ago |
| [gosql](https://github.com/rushteam/gosql) | 161 | golang orm and sql builder | 2 months ago |
| [grimoire](https://github.com/Fs02/grimoire) | 157 | Database access layer for golang | 9 months ago |
| [go-store](https://github.com/gosuri/go-store) | 108 | A simple and fast Redis backed key-value store library for Go | 5 years ago |
| [go-firestorm](https://github.com/jschoedt/go-firestorm) | 35 | Simple Go ORM for Google/Firebase Cloud Firestore | 8 months ago |
| [marlow](https://github.com/marlow/marlow) | 11 | persistence layer code generation for golang | 2 years ago |
| [lore](https://github.com/abrahambotros/lore) | 10 | Light Object-Relational Environment (LORE) provides a simple and lightweight pseudo-ORM/pseudo-struct-mapping environment for Go | 5 years ago |


### [Package Management](#Package-Management)
* 

#### [Official experimental tooling for package management](#Official-experimental-tooling-for-package-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dep](https://github.com/golang/dep) | 13030 | Go dependency management tool experiment (deprecated) | 2 years ago |


#### [Unofficial libraries for package and dependency management](#Official-libraries-for-package-and-dependency-management)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [glide](https://github.com/Masterminds/glide) | 8161 | Package Management for Golang | a year ago |
| [godep](https://github.com/tools/godep) | 5594 | dependency tool for go | 4 years ago |
| [govendor](https://github.com/kardianos/govendor) | 4980 | Use Go Modules. | 2 years ago |
| [gopm](https://github.com/gpmgo/gopm) | 2488 | Go Package Manager (gopm) is a package manager and build tool for Go. | 3 years ago |
| [gom](https://github.com/mattn/gom) | 1391 | Go Manager - bundle for go | 3 years ago |
| [gpm](https://github.com/pote/gpm) | 1198 | Barebones dependency manager for Go. | 5 years ago |
| [goop](https://github.com/petejkim/goop) | 776 | A simple dependency manager for Go (golang), inspired by Bundler. | 7 years ago |
| [modgv](https://github.com/lucasepe/modgv) | 410 | Converts 'go mod graph' output into Graphviz's DOT language | 2 months ago |
| [nut](https://github.com/owenthereal/nut) | 236 | Vendor Go dependencies | 7 years ago |
| [johnny-deps](https://github.com/VividCortex/johnny-deps) | 212 | Barebones dependency manager for Go. | 2 years ago |
| [mvn-golang](https://github.com/raydac/mvn-golang) | 143 | maven plugin to automate GoSDK load and build of projects | 5 days ago |
| [VenGO](https://github.com/DamnWidget/VenGO) | 123 | Create and manage Isolated Virtual Environments for Go | 6 years ago |
| [gop](https://github.com/lunny/gop) | 48 | Moved to https://gitea.com/lunny/gop | 3 years ago |


### [Performance](#Performance)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jaeger](https://github.com/jaegertracing/jaeger) | 16168 | CNCF Jaeger, a Distributed Tracing Platform | 2 hours ago |
| [pixie](https://github.com/pixie-io/pixie) | 3654 | Instant Kubernetes-Native Application Observability | 5 hours ago |
| [statsviz](https://github.com/arl/statsviz) | 1914 | :rocket: Instant live visualization of your Go application runtime statistics (GC, MemStats, etc.) in the browser | 21 hours ago |
| [profile](https://github.com/pkg/profile) | 1750 | Simple profiling for Go | 9 months ago |
| [tracer](https://github.com/kamilsk/tracer) | 65 | 🧶 Dead simple, lightweight tracing. | a year ago |


### [Query Language](#Query-Language)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphql](https://github.com/graphql-go/graphql) | 8704 | An implementation of GraphQL for Go / Golang | 9 days ago |
| [gqlgen](https://github.com/99designs/gqlgen) | 7919 | go generate based graphql server library | 2 days ago |
| [graphql-go](https://github.com/graph-gophers/graphql-go) | 4189 | GraphQL server with a focus on ease of use | 6 days ago |
| [dasel](https://github.com/TomWright/dasel) | 3523 | Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package. | 13 hours ago |
| [gojsonq](https://github.com/thedevsaddam/gojsonq) | 1915 | A simple Go package to Query over JSON/YAML/XML/CSV Data  | 6 months ago |
| [rql](https://github.com/a8m/rql) | 261 | Resource Query Language for REST | 3 months ago |
| [jsonql](https://github.com/elgs/jsonql) | 252 | JSON query expression library in Golang. | 2 years ago |
| [jsonslice](https://github.com/bhmj/jsonslice) | 68 | json slicer | 7 months ago |
| [graphql](https://github.com/tmc/graphql) | 55 | graphql parser + utilities | 5 years ago |
| [api-fu](https://github.com/ccbrown/api-fu) | 43 | A collection of Go packages for creating robust GraphQL APIs | 4 months ago |
| [rest-query-parser](https://github.com/timsolov/rest-query-parser) | 42 | Query Parser for REST | 2 months ago |
| [straf](https://github.com/ThundR67/straf) | 32 | Convert Golang Struct To GraphQL Object On The Fly | 2 years ago |
| [jsonpath](https://github.com/AsaiYusuke/jsonpath) | 10 | A query library for retrieving part of JSON based on JSONPath syntax. | 4 months ago |
| [gws](https://github.com/Zaba505/gws) | 4 | A WebSocket client and server for GraphQL | 2 years ago |


### [Resource Embedding](#Resource-Embedding)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [statik](https://github.com/rakyll/statik) | 3462 | Embed files into a Go executable | 3 months ago |
| [packr](https://github.com/gobuffalo/packr) | 3419 | The simple and easy way to embed static files into Go binaries. | 8 months ago |
| [go.rice](https://github.com/GeertJohan/go.rice) | 2294 | go.rice is a Go package that makes working with resources such as html,js,css,images,templates, etc very easy. | 2 months ago |
| [vfsgen](https://github.com/shurcooL/vfsgen) | 947 | Takes an input http.FileSystem (likely at go generate time) and generates Go code that statically implements it. | 7 months ago |
| [esc](https://github.com/mjibson/esc) | 622 | A simple file embedder for Go | 3 years ago |
| [fileb0x](https://github.com/UnnoTed/fileb0x) | 613 | a better customizable tool to embed files in go; also update embedded files remotely without restarting the server | 3 months ago |
| [go-resources](https://github.com/omeid/go-resources) | 175 | Unfancy resources embedding for Go with out of box http.FileSystem support. | a year ago |
| [statics](https://github.com/go-playground/statics) | 64 | :file_folder: Embeds static resources into go files for single binary compilation + works with http.FileSystem + symlinks | 6 years ago |
| [templify](https://github.com/wlbr/templify) | 27 | A tool to be used with 'go generate' to embed external template files into Go code. | a year ago |
| [rebed](https://github.com/soypat/rebed) | 22 | Recreates directory and files from embedded filesystem using Go 1.16 embed.FS type. | 6 months ago |
| [debme](https://github.com/leaanthony/debme) | 20 | embed.FS wrapper providing additional functionality | a year ago |
| [mule](https://github.com/wlbr/mule) | 11 | mule is a tool to be used with 'go generate' to embed external resources files into Go code. | a year ago |


### [Science and Data Analysis](#Science-and-Data-Analysis)
* Libraries for scientific computing and data analyzing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gonum](https://github.com/gonum/gonum) | 5974 | Gonum is a set of numeric libraries for the Go programming language. It contains libraries for matrices, statistics, optimization, and more | 2 days ago |
| [stats](https://github.com/montanaflynn/stats) | 2482 | A well tested and comprehensive Golang statistics library package with no dependencies. | 4 months ago |
| [plot](https://github.com/gonum/plot) | 2232 | A repository for plotting and visualizing data | 25 days ago |
| [gosl](https://github.com/cpmech/gosl) | 1681 | Linear algebra, eigenvalues, FFT, Bessel, elliptic, orthogonal polys, geometry, NURBS, numerical quadrature, 3D transfinite interpolation, random numbers, Mersenne twister, probability distributions, optimisation, differential equations. | 2 months ago |
| [streamtools](https://github.com/nytlabs/streamtools) | 1315 | tools for working with streams of data | 7 years ago |
| [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) | 860 | DataFrames for Go: For statistics, machine-learning, and data manipulation/exploration | 4 months ago |
| [go-dsp](https://github.com/mjibson/go-dsp) | 784 | Digital Signal Processing for Go | 6 months ago |
| [chart](https://github.com/vdobler/chart) | 733 | Provide basic charts in go | a year ago |
| [goraph](https://github.com/gyuho/goraph) | 692 | Package goraph implements graph data structure and algorithms. | 4 months ago |
| [graph](https://github.com/yourbasic/graph) | 566 | Graph algorithms and data structures | a year ago |
| [orb](https://github.com/paulmach/orb) | 557 | Types and utilities for working with 2d geometry in Golang | 3 months ago |
| [ewma](https://github.com/VividCortex/ewma) | 388 | Exponentially Weighted Moving Average algorithms for Go. | a year ago |
| [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) | 354 | 📅 Calendar heatmap inspired by GitHub contribution activity  | a month ago |
| [gohistogram](https://github.com/VividCortex/gohistogram) | 166 | Streaming approximate histograms in Go | 2 years ago |
| [TextRank](https://github.com/DavidBelicza/TextRank) | 158 | :wink: :cyclone: :strawberry: TextRank implementation in Golang with extendable features (summarization, phrase extraction) and multithreading (goroutine). | a year ago |
| [sparse](https://github.com/james-bowman/sparse) | 132 | Sparse matrix formats for linear algebra supporting scientific and machine learning applications | a year ago |
| [go-estimate](https://github.com/milosgajdos/go-estimate) | 97 | State estimation and filtering algorithms in Go | 2 months ago |
| [pagerank](https://github.com/alixaxel/pagerank) | 75 | Weighted PageRank implementation in Go | a year ago |
| [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) | 58 | 🏝 JSONL Graph Tools | 7 months ago |
| [geom](https://github.com/skelterjohn/geom) | 51 | 2d geometry for golang | 5 years ago |
| [evaler](https://github.com/soniah/evaler) | 49 | Implements a simple floating point arithmetic expression evaluator in Go (golang). | 4 years ago |
| [decimal](https://github.com/db47h/decimal) | 27 | An arbitrary-precision decimal floating-point arithmetic package for Go | 13 days ago |
| [goent](https://github.com/kzahedi/goent) | 27 | GO Implementation of Entropy Measures | 3 years ago |
| [triangolatte](https://github.com/tchayen/triangolatte) | 26 | 2D triangulation library. Allows translating lines and polygons (both based on points) to the language of GPUs. | a year ago |
| [piecewiselinear](https://github.com/sgreben/piecewiselinear) | 22 | tiny linear interpolation library for go (factored out from https://github.com/sgreben/yeetgif) | 2 years ago |
| [GoStats](https://github.com/OGFris/GoStats) | 20 | GoStats is a go library for math statistics mostly used in ML domains, it covers most of the statistical measures functions. | 4 years ago |
| [godesim](https://github.com/soypat/godesim) | 19 | ODE system solver made simple. For IVPs (initial value problems). | 2 months ago |
| [ode](https://github.com/ChristopherRabotin/ode) | 17 | An ordinary differential equation solving library in golang. | 5 years ago |
| [PiHex](https://github.com/claygod/PiHex) | 16 | PiHex Library, written in Go, generates a hexadecimal number sequence in the number Pi in the range from 0 to 10,000,000. | a month ago |
| [assocentity](https://github.com/ndabAP/assocentity) | 8 | Package assocentity returns the average distance from words to a given entity | 2 years ago |
| [rootfinding](https://github.com/khezen/rootfinding) | 7 | root-finding library | 2 years ago |
| [go-gt](https://github.com/ThePaw/go-gt) | 6 | Automatically exported from code.google.com/p/go-gt | 7 years ago |
| [bradleyterry](https://github.com/seanhagen/bradleyterry) | 5 | Package to do Bradley-Terry Model pairwise compairsons | 3 years ago |


### [Security](#Security)
* Libraries that are used to help make your application more secure.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [age](https://github.com/FiloSottile/age) | 11027 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 6 days ago |
| [lego](https://github.com/go-acme/lego) | 5450 | Let's Encrypt/ACME client and library written in Go | 4 days ago |
| [certmagic](https://github.com/caddyserver/certmagic) | 4114 | Automatic HTTPS for any Go program: fully-managed TLS certificate issuance and renewal | 5 days ago |
| [cameradar](https://github.com/Ullaakut/cameradar) | 2975 | Cameradar hacks its way into RTSP videosurveillance cameras | 3 months ago |
| [memguard](https://github.com/awnumar/memguard) | 2199 | Secure software enclave for storage of sensitive information in memory. | 2 months ago |
| [secure](https://github.com/unrolled/secure) | 1979 | HTTP middleware for Go that facilitates some quick security wins. | 23 days ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1925 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 8 days ago |
| [themis](https://github.com/cossacklabs/themis) | 1565 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | 3 days ago |
| [acra](https://github.com/cossacklabs/acra) | 1029 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 3 days ago |
| [nacl](https://github.com/kevinburke/nacl) | 526 | Pure Go implementation of the NaCL set of API's | a year ago |
| [ssh-vault](https://github.com/ssh-vault/ssh-vault) | 355 | 🌰  encrypt/decrypt using ssh keys | 11 days ago |
| [go-password-validator](https://github.com/wagslane/go-password-validator) | 347 | Validate the Strength of a Password in Go | 5 months ago |
| [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) | 317 | A rest application to update firewalld rules on a linux server  | 2 years ago |
| [optimus-go](https://github.com/pjebs/optimus-go) | 317 | ID hashing and Obfuscation using Knuth's Algorithm | 2 years ago |
| [badactor](https://github.com/jaredfolkins/badactor) | 308 | BadActor.org An in-memory application driven jailer written in Go | 2 years ago |
| [dongle](https://github.com/golang-module/dongle) | 270 | A simple, semantic and developer-friendly golang package for encoding&decoding and encryption&decryption | 2 months ago |
| [passlib](https://github.com/hlandau/passlib) | 268 | :key: Idiotproof golang password validation library inspired by Python's passlib | a year ago |
| [go-yara](https://github.com/hillu/go-yara) | 266 | Go bindings for YARA | 5 days ago |
| [simple-scrypt](https://github.com/elithrar/simple-scrypt) | 180 | A convenience library for generating, comparing and inspecting password hashes using the scrypt KDF in Go 🔑 | a year ago |
| [yara](https://github.com/plusvic/yara) | 128 | The pattern matching swiss knife | 2 years ago |
| [argon2pw](https://github.com/raja/argon2pw) | 88 | Argon2 password hashing package for go with constant time hash comparison | a year ago |
| [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) | 51 | A probably paranoid Golang utility library for securely hashing and encrypting passwords based on the Dropbox method. This implementation uses Blake2b, Scrypt and XSalsa20-Poly1305 (via NaCl SecretBox) to create secure password hashes that are also encrypted using a master passphrase. | 2 years ago |
| [go-generate-password](https://github.com/m1/go-generate-password) | 43 | Password generator written in Go | 4 months ago |
| [secureio](https://github.com/xaionaro-go/secureio) | 25 | An easy-to-use XChaCha20-encryption wrapper for io.ReadWriteCloser (even lossy UDP) using ECDH key exchange algorithm, ED25519 signatures and Blake3+Poly1305 checksums/message-authentication for Go (golang). Also a multiplexer. | 2 years ago |
| [certificates](https://github.com/mvmaasakkers/certificates) | 23 | An opinionated helper for generating tls certificates | 3 months ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 17 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [goArgonPass](https://github.com/dwin/goArgonPass) | 15 | goArgonPass is a Argon2 Password utility package for Go using the crypto library package Argon2 designed to be compatible with Passlib for Python and Argon2 PHP. Argon2 was the winner of the most recent Password Hashing Competition. This is designed for use anywhere password hashing and verification might be needed and is intended to replace implementations using bcrypt or Scrypt. | 2 years ago |
| [sslmgr](https://github.com/adrianosela/sslmgr) | 14 | A layer of abstraction the around acme/autocert certificate manager (Golang) | 3 years ago |


### [Serialization](#Serialization)
* Libraries and tools for binary serialization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/json-iterator/go) | 11153 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 3 days ago |
| [age](https://github.com/FiloSottile/age) | 11027 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 6 days ago |
| [protobuf](https://github.com/golang/protobuf) | 8625 | Go support for Google's protocol buffers | a month ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 5993 | Go library for decoding generic map values into native Go structures and vice versa. | a month ago |
| [protobuf](https://github.com/gogo/protobuf) | 5384 | [Looking for new ownership] Protocol Buffers for Go with Gadgets | a month ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1925 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 8 days ago |
| [go](https://github.com/ugorji/go) | 1661 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 2 months ago |
| [acra](https://github.com/cossacklabs/acra) | 1029 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 3 days ago |
| [csvutil](https://github.com/jszwec/csvutil) | 737 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | a month ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 672 | binary serialization format | 4 months ago |
| [cbor](https://github.com/fxamacker/cbor) | 469 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | 2 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 282 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 3 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 154 | PHP session encoder/decoder written in Go | 4 years ago |
| [structomap](https://github.com/danhper/structomap) | 134 | Easily and dynamically generate maps from Go static structures | 3 years ago |
| [bambam](https://github.com/glycerine/bambam) | 64 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 6 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 56 | Golang binary decoder for mapping data into the structure | 3 months ago |
| [asn1](https://github.com/Logicalis/asn1) | 51 | Asn.1 BER and DER encoding library for golang. | 3 years ago |
| [bel](https://github.com/csweichel/bel) | 26 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | 2 years ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 20 | Fixed width file parser (encoder/decoder) in GO (golang) | 3 days ago |
| [pletter](https://github.com/vimeda/pletter) | 18 | A standard way to wrap a proto message | 7 days ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 17 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 16 | Converts go types no matter what | a year ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 6 | A Go package for encode/decode fixed-width data | 3 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 4 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | a year ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 3 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 2 years ago |


### [Server Applications](#Server-Applications)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/json-iterator/go) | 11153 | A high-performance 100% compatible drop-in replacement of "encoding/json" | 3 days ago |
| [age](https://github.com/FiloSottile/age) | 11027 | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability. | 6 days ago |
| [protobuf](https://github.com/golang/protobuf) | 8625 | Go support for Google's protocol buffers | a month ago |
| [mapstructure](https://github.com/mitchellh/mapstructure) | 5993 | Go library for decoding generic map values into native Go structures and vice versa. | a month ago |
| [protobuf](https://github.com/gogo/protobuf) | 5384 | [Looking for new ownership] Protocol Buffers for Go with Gadgets | a month ago |
| [acmetool](https://github.com/hlandau/acmetool) | 1925 | :lock: acmetool, an automatic certificate acquisition tool for ACME (Let's Encrypt) | 8 days ago |
| [go](https://github.com/ugorji/go) | 1661 | idiomatic codec and rpc lib for msgpack, cbor, json, etc. msgpack.org[Go] | 2 months ago |
| [acra](https://github.com/cossacklabs/acra) | 1029 | Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL. | 3 days ago |
| [csvutil](https://github.com/jszwec/csvutil) | 737 | csvutil provides fast and idiomatic mapping between CSV and Go (golang) values. | a month ago |
| [colfer](https://github.com/pascaldekloe/colfer) | 672 | binary serialization format | 4 months ago |
| [cbor](https://github.com/fxamacker/cbor) | 469 | CBOR codec (RFC 8949) with CBOR tags, Go struct tags (toarray, keyasint, omitempty), float64/32/16, big.Int, and fuzz tested billions of execs.  | 2 days ago |
| [go-capnproto](https://github.com/glycerine/go-capnproto) | 282 | Cap'n Proto library and parser for go. This is go-capnproto-1.0, and does not have rpc. See https://github.com/zombiezen/go-capnproto2 for 2.0 which has rpc and capabilities. | 3 years ago |
| [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) | 154 | PHP session encoder/decoder written in Go | 4 years ago |
| [structomap](https://github.com/danhper/structomap) | 134 | Easily and dynamically generate maps from Go static structures | 3 years ago |
| [bambam](https://github.com/glycerine/bambam) | 64 | auto-generate capnproto schema from your golang source files. Depends on go-capnproto-1.0 at https://github.com/glycerine/go-capnproto | 6 years ago |
| [binstruct](https://github.com/ghostiam/binstruct) | 56 | Golang binary decoder for mapping data into the structure | 3 months ago |
| [asn1](https://github.com/Logicalis/asn1) | 51 | Asn.1 BER and DER encoding library for golang. | 3 years ago |
| [bel](https://github.com/csweichel/bel) | 26 | Generate TypeScript interfaces from Go structs/interfaces - useful for JSON RPC | 2 years ago |
| [fwencoder](https://github.com/o1egl/fwencoder) | 20 | Fixed width file parser (encoder/decoder) in GO (golang) | 3 days ago |
| [pletter](https://github.com/vimeda/pletter) | 18 | A standard way to wrap a proto message | 7 days ago |
| [argon2-hashing](https://github.com/andskur/argon2-hashing) | 17 | A light package for generating and comparing password hashing with argon2 in Go | 2 years ago |
| [elastic](https://github.com/epiclabs-io/elastic) | 16 | Converts go types no matter what | a year ago |
| [fixedwidth](https://github.com/huydang284/fixedwidth) | 6 | A Go package for encode/decode fixed-width data | 3 years ago |
| [unitpacking](https://github.com/recolude/unitpacking) | 4 | A library for storing unit vectors in a representation that lends itself to saving space on disk. | a year ago |
| [go-lctree](https://github.com/sbourlon/go-lctree) | 3 | go-lctree provides a CLI and Go primitives to serialize and deserialize LeetCode binary trees (e.g. "[5,4,7,3,null,2,null,-1,null,9]"). | 2 years ago |


### [Stream Processing](#Stream-Processing)
* Libraries and tools for stream processing and reactive programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-streams](https://github.com/reugn/go-streams) | 998 | A lightweight stream processing library for Go | 2 months ago |
| [machine](https://github.com/whitaker-io/machine) | 113 | Machine is a workflow/pipeline library for processing data | 5 days ago |
| [stream](https://github.com/youthlin/stream) | 63 | Go Stream, like Java 8 Stream. | 2 years ago |


### [Template Engines](#Template-Engines)
* Libraries and tools for templating and lexing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gofpdf](https://github.com/jung-kurt/gofpdf) | 4025 | A PDF document generator with high level support for text, drawing and images | 9 months ago |
| [sprig](https://github.com/Masterminds/sprig) | 3102 | Useful template functions for Go templates. | 2 months ago |
| [quicktemplate](https://github.com/valyala/quicktemplate) | 2533 | Fast, powerful, yet easy to use template engine for Go. Optimized for speed, zero memory allocations in hot paths. Up to 20x faster than html/template | 5 months ago |
| [pongo2](https://github.com/flosch/pongo2) | 2307 | Django-syntax like template-engine for Go | a month ago |
| [hero](https://github.com/shiyanhui/hero) | 1524 | A handy, fast and powerful go template engine. | 3 years ago |
| [mustache](https://github.com/hoisie/mustache) | 1043 | The mustache template language in Go | 9 days ago |
| [jet](https://github.com/CloudyKit/jet) | 946 | Jet  template engine | 9 months ago |
| [amber](https://github.com/eknkc/amber) | 894 | Amber is an elegant templating engine for Go Programming Language, inspired from HAML and Jade | 2 years ago |
| [ace](https://github.com/yosssi/ace) | 818 | HTML template engine for Go | 4 years ago |
| [gorazor](https://github.com/sipin/gorazor) | 800 | Razor view engine for go | 2 years ago |
| [maroto](https://github.com/johnfercher/maroto) | 706 | A maroto way to create PDFs. Maroto is inspired in Bootstrap and uses gofpdf. Fast and simple. | a month ago |
| [fasttemplate](https://github.com/valyala/fasttemplate) | 624 | Simple and fast template engine for Go | 2 years ago |
| [ego](https://github.com/benbjohnson/ego) | 529 | An ERB-style templating language for Go. | 9 months ago |
| [raymond](https://github.com/aymerick/raymond) | 485 | Handlebars for golang | 9 months ago |
| [goview](https://github.com/foolin/goview) | 292 | Goview is a lightweight, minimalist and idiomatic template library based on golang html/template for building Go web application. | 7 months ago |
| [liquid](https://github.com/osteele/liquid) | 167 | A Liquid template engine in Go | 11 days ago |
| [soy](https://github.com/robfig/soy) | 166 | Go implementation for Soy templates (Google Closure templates) | 4 months ago |
| [kasia.go](https://github.com/ziutek/kasia.go) | 74 | Templating system for HTML and other text documents - go implementation | 7 years ago |
| [velvet](https://github.com/gobuffalo/velvet) | 73 | A sweet velvety templating package | 5 years ago |
| [extemplate](https://github.com/dannyvankooten/extemplate) | 50 | Wrapper package for Go's template/html to allow for easy file-based template inheritance. | a year ago |
| [gospin](https://github.com/m1/gospin) | 39 | Article spinning and spintax/spinning syntax engine written in Go, useful for A/B, testing pieces of text/articles and creating more natural conversations | a year ago |
| [damsel](https://github.com/dskinner/damsel) | 25 | Package damsel provides html outlining via css-selectors and common template functionality. | 6 years ago |
| [tbd](https://github.com/lucasepe/tbd) | 20 | "to be defined" - a really simple way to create text templates with placeholders | a year ago |


### [Testing](#Testing)
* Libraries for testing codebases and generating test data.

#### [Testing Frameworks](#Testing-Frameworks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testify](https://github.com/stretchr/testify) | 17236 | A toolkit with common assertions and mocks that plays nicely with the standard library | 5 days ago |
| [goconvey](https://github.com/smartystreets/goconvey) | 7353 | Go testing in the browser. Integrates with `go test`. Write behavioral tests in Go. | 2 months ago |
| [go-cmp](https://github.com/google/go-cmp) | 3042 | Package for comparing Go values in tests | 18 days ago |
| [httpexpect](https://github.com/gavv/httpexpect) | 1950 | End-to-end HTTP and REST API testing for Go. | 23 days ago |
| [godog](https://github.com/cucumber/godog) | 1733 | Cucumber for golang | 3 days ago |
| [go-vcr](https://github.com/dnaeon/go-vcr) | 895 | Record and replay your HTTP interactions for fast, deterministic and accurate tests | 10 months ago |
| [gnomock](https://github.com/orlangure/gnomock) | 881 | Test your code without writing mocks with ephemeral Docker containers 📦 Setup popular services with just a couple lines of code ⏱️ No bash, no yaml, only code 💻 | 3 days ago |
| [goblin](https://github.com/franela/goblin) | 860 | Minimal and Beautiful Go testing framework | 10 months ago |
| [testfixtures](https://github.com/go-testfixtures/testfixtures) | 827 | Ruby on Rails like test fixtures for Go. Write tests against a real database | 2 days ago |
| [baloo](https://github.com/h2non/baloo) | 728 | Expressive end-to-end HTTP API testing made easy in Go | 4 days ago |
| [goc](https://github.com/qiniu/goc) | 549 | A Comprehensive Coverage Testing System for The Go Programming Language | a day ago |
| [go-mutesting](https://github.com/zimmski/go-mutesting) | 545 | Mutation testing for Go source code | 7 days ago |
| [gofight](https://github.com/appleboy/gofight) | 423 | Testing API Handler written in Golang. | a year ago |
| [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) | 411 | Run a real Postgres database locally on Linux, OSX or Windows as part of another Go application or test | 13 days ago |
| [testza](https://github.com/MarvinJWendt/testza) | 392 | Full-featured test framework for Go! Assertions, fuzzing, input testing, output capturing, and much more! 🍕 | 12 days ago |
| [gotest.tools](https://github.com/gotestyourself/gotest.tools) | 334 | A collection of packages to augment the go testing package and support common patterns. | 2 hours ago |
| [go-testdeep](https://github.com/maxatome/go-testdeep) | 313 | Extremely flexible golang deep comparison, extends the go testing package, tests HTTP APIs and provides tests suite | 12 hours ago |
| [frisby](https://github.com/hofstadter-io/frisby) | 272 | API testing framework inspired by frisby-js | 2 years ago |
| [go-carpet](https://github.com/msoap/go-carpet) | 227 | go-carpet - show test coverage in terminal for Go source files | 16 hours ago |
| [cupaloy](https://github.com/bradleyjkemp/cupaloy) | 221 | Simple Go snapshot testing | 3 days ago |
| [endly](https://github.com/viant/endly) | 214 | End to end functional test and automation framework | a month ago |
| [commander](https://github.com/commander-cli/commander) | 202 | Test your command line interfaces on windows, linux and osx and nodes viá ssh and docker | a month ago |
| [charlatan](https://github.com/percolate/charlatan) | 195 | Go Interface Mocking Tool | 3 years ago |
| [dbcleaner](https://github.com/khaiql/dbcleaner) | 139 | Clean database for testing, inspired by database_cleaner for Ruby | 9 months ago |
| [go-hit](https://github.com/Eun/go-hit) | 120 | http integration test framework | 2 hours ago |
| [gospec](https://github.com/luontola/gospec) | 112 | Testing framework for Go. Allows writing self-documenting tests/specifications, and executes them concurrently and safely isolated. [UNMAINTAINED] | 8 years ago |
| [testcase](https://github.com/adamluzsi/testcase) | 94 | testcase is an opinionated testing framework to support test driven design. | 2 days ago |
| [wstest](https://github.com/posener/wstest) | 92 | go websocket client for unit testing of a websocket handler | 2 years ago |
| [jsonassert](https://github.com/kinbiko/jsonassert) | 87 | A Go test assertion library for verifying that two representations of JSON are semantically equal | 2 months ago |
| [gocrest](https://github.com/corbym/gocrest) | 83 | GoCrest - Hamcrest-like matchers for Go | 2 years ago |
| [restit](https://github.com/go-restit/restit) | 55 | A Go library help testing your RESTful API application | 3 years ago |
| [gospecify](https://github.com/stesla/gospecify) | 52 | A BDD library for Go | 11 years ago |
| [covergates](https://github.com/covergates/covergates) | 50 | The portal gates to coverage reports | 3 months ago |
| [gomatch](https://github.com/jfilipczyk/gomatch) | 42 | Library created for testing JSON against patterns. | 2 years ago |
| [assert](https://github.com/go-playground/assert) | 41 | :exclamation:Basic Assertion Library used along side native go testing, with building blocks for custom assertions | 2 years ago |
| [dsunit](https://github.com/viant/dsunit) | 41 | Datastore Testibility | 2 months ago |
| [hamcrest](https://github.com/rdrdr/hamcrest) | 27 | Hamcrest matchers for the Go programming language | 2 years ago |
| [flute](https://github.com/suzuki-shunsuke/flute) | 17 | Golang HTTP client testing framework | 2 months ago |
| [schema](https://github.com/jgroeneveld/schema) | 17 | Quick and easy expression matching for JSON schemas used in requests and responses | 3 years ago |
| [gogiven](https://github.com/corbym/gogiven) | 13 | gogiven - BDD testing framework for go that generates readable output directly from source code | a year ago |
| [testsql](https://github.com/zhulongcheng/testsql) | 13 | Generate test data from SQL files before testing and clear it after finished. | 3 years ago |
| [gosuite](https://github.com/pavlo/gosuite) | 11 | Test suites support for standard Go1.7 "testing" by leveraging Subtests feature | 6 years ago |
| [biff](https://github.com/fulldump/biff) | 10 | Bifurcation Framework for testing and use cases | a year ago |
| [badio](https://github.com/cavaliergopher/badio) | 9 | Extensions to Go's testing/iotest package | 6 years ago |
| [test](https://github.com/tvastar/test) | 7 | test utilities for golang | 3 years ago |
| [fixenv](https://github.com/rekby/fixenv) | 6 |  | 2 months ago |
| [stop-and-go](https://github.com/elgohr/stop-and-go) | 5 | Testing helper for concurrency | a month ago |
| [trial](https://github.com/jgroeneveld/trial) | 5 | A simple assertion library for go | 3 years ago |
| [tt](https://github.com/vcaesar/tt) | 4 | Simple and colorful test tools | 4 months ago |


#### [Mock](#Mock)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mock](https://github.com/golang/mock) | 7746 | GoMock is a mocking framework for the Go programming language. | 25 days ago |
| [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) | 4614 | Sql mock driver for golang to test database interactions | 7 days ago |
| [mockery](https://github.com/vektra/mockery) | 3749 | A mock code autogenerator for Golang | 20 days ago |
| [hoverfly](https://github.com/SpectoLabs/hoverfly) | 1897 | Lightweight service virtualization/API simulation tool for developers and testers | 7 hours ago |
| [gock](https://github.com/h2non/gock) | 1672 | HTTP traffic mocking and testing made easy in Go ༼ʘ̚ل͜ʘ̚༽ | 4 months ago |
| [httpmock](https://github.com/jarcoal/httpmock) | 1447 | HTTP mocking for Golang | 3 months ago |
| [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) | 707 | A tool for generating self-contained, type-safe test doubles in go | 11 days ago |
| [go-txdb](https://github.com/DATA-DOG/go-txdb) | 459 | Immutable transaction isolated sql driver for golang | 7 months ago |
| [minimock](https://github.com/gojuno/minimock) | 459 | Powerful mock generation tool for Go programming language | a year ago |
| [govcr](https://github.com/seborama/govcr) | 106 | HTTP mock for Golang: record and replay HTTP/HTTPS interactions for offline testing | 12 hours ago |
| [timex](https://github.com/cabify/timex) | 63 | A test-friendly replacement for golang's time package | 2 years ago |
| [go-localstack](https://github.com/elgohr/go-localstack) | 53 | Go Wrapper for using localstack | 3 days ago |
| [mockhttp](https://github.com/tv42/mockhttp) | 21 | Mock object for Go http.ResponseWriter | 8 years ago |
| [mockit](https://github.com/pasdam/mockit) | 9 | Library that make mocking of Go functions/methods easy | a month ago |


#### [Fuzzing and delta-debugging/reducing/shrinking](#Fuzzing-and-delta-debugging)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-fuzz](https://github.com/dvyukov/go-fuzz) | 4446 | Randomized testing for Go | 13 days ago |
| [gofuzz](https://github.com/google/gofuzz) | 1302 | Fuzz testing for go. | 3 months ago |
| [tavor](https://github.com/zimmski/tavor) | 235 | A generic fuzzing and delta-debugging framework | 4 years ago |


#### [Selenium and browser control tools](#Selenium-and-browser-control-tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [chromedp](https://github.com/chromedp/chromedp) | 7945 | A faster, simpler way to drive browsers supporting the Chrome DevTools Protocol. | 13 days ago |
| [rod](https://github.com/go-rod/rod) | 2651 | A Devtools driver for web automation and scraping | 4 days ago |
| [selenoid](https://github.com/aerokube/selenoid) | 2199 | Selenium Hub successor running browsers within containers. Scalable, immutable, self hosted Selenium-Grid on any platform with single binary. | a month ago |
| [playwright-go](https://github.com/playwright-community/playwright-go) | 885 | Playwright for Go a browser automation library to control Chromium, Firefox and WebKit with a single API. | a month ago |
| [cdp](https://github.com/mafredri/cdp) | 620 | Package cdp provides type-safe bindings for the Chrome DevTools Protocol (CDP), written in the Go programming language. | 2 months ago |
| [ggr](https://github.com/aerokube/ggr) | 288 | A lightweight load balancer used to create big Selenium clusters | 2 months ago |


#### [Fail injection](#Fail-injection)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [failpoint](https://github.com/pingcap/failpoint) | 712 | An implementation of failpoints for Golang. | 7 days ago |


### [Text Processing](#Text-Processing)
* Libraries for parsing and manipulating texts.

#### [Specific Formats](#Specific-Formats)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [colly](https://github.com/gocolly/colly) | 17150 | Elegant Scraper and Crawler Framework for Golang | 10 days ago |
| [goquery](https://github.com/PuerkitoBio/goquery) | 11716 | A little like that j-thing, only in Go. | 2 months ago |
| [blackfriday](https://github.com/russross/blackfriday) | 4975 | Blackfriday: a markdown processor for Go | 4 months ago |
| [sh](https://github.com/mvdan/sh) | 4960 | A shell parser, formatter, and interpreter with bash support; includes shfmt | 5 days ago |
| [toml](https://github.com/BurntSushi/toml) | 3946 | TOML parser for Golang with reflection. | 3 days ago |
| [go-humanize](https://github.com/dustin/go-humanize) | 3262 | Go Humans! (formatters for units to human friendly sizes) | 5 months ago |
| [bluemonday](https://github.com/microcosm-cc/bluemonday) | 2395 | bluemonday: a fast golang HTML sanitizer (inspired by the OWASP Java HTML Sanitizer) to scrub user generated content of XSS | 3 days ago |
| [gofeed](https://github.com/mmcdole/gofeed) | 1928 | Parse RSS, Atom and JSON feeds in Go | 2 months ago |
| [inject](https://github.com/facebookarchive/inject) | 1373 | Package inject provides a reflect based injector. | 4 years ago |
| [go-toml](https://github.com/pelletier/go-toml) | 1277 | Go library for the TOML file format | 14 days ago |
| [slug](https://github.com/gosimple/slug) | 844 | URL-friendly slugify with multiple languages support. | 7 days ago |
| [commonregex](https://github.com/mingrammer/commonregex) | 821 | 🍫 A collection of common regular expressions for Go | 3 years ago |
| [dataflowkit](https://github.com/slotix/dataflowkit) | 538 | Extract structured data from web sites. Web sites scraping.   | 2 months ago |
| [mxj](https://github.com/clbanning/mxj) | 523 | Decode / encode XML to/from map[string]interface{} (or JSON); extract values with dot-notation paths and wildcards.  Replaces x2j and j2x packages. | 6 days ago |
| [htmlquery](https://github.com/antchfx/htmlquery) | 504 | htmlquery is golang XPath package for HTML query. | 2 months ago |
| [gographviz](https://github.com/awalterschulze/gographviz) | 490 | Parses the Graphviz DOT language in golang | 2 months ago |
| [omniparser](https://github.com/jf-tech/omniparser) | 482 | omniparser: a native Golang ETL streaming parser and transform library for CSV, JSON, XML, EDI, text, etc. | 12 days ago |
| [go-runewidth](https://github.com/mattn/go-runewidth) | 474 | wcwidth for golang | 11 days ago |
| [gommon](https://github.com/labstack/gommon) | 458 | Common packages for Go | 6 days ago |
| [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) | 377 | ⚙️ Convert HTML to Markdown. Even works with entire websites and can be extended through rules. | 16 days ago |
| [gotext](https://github.com/leonelquinteros/gotext) | 348 | Go (Golang) GNU gettext utilities package  | 2 months ago |
| [goq](https://github.com/andrewstuart/goq) | 217 | A declarative struct-tag-based HTML unmarshaling or scraping package for Go built on top of the goquery library | a year ago |
| [goribot](https://github.com/zhshch2002/goribot) | 208 | [Crawler/Scraper for Golang]🕷A lightweight distributed friendly Golang crawler framework.一个轻量的分布式友好的 Golang 爬虫框架。 | 2 years ago |
| [go-nmea](https://github.com/adrianmo/go-nmea) | 180 | A NMEA parser library in pure Go | 4 months ago |
| [gospider](https://github.com/zhshch2002/gospider) | 168 | ⚡ Light weight Golang spider framework , 轻量的 Golang 爬虫框架 | a year ago |
| [github_flavored_markdown](https://github.com/shurcooL/github_flavored_markdown) | 145 | GitHub Flavored Markdown renderer with fenced code block highlighting, clickable header anchor links. | a year ago |
| [sdp](https://github.com/gortc/sdp) | 114 | RFC 4566 SDP implementation in go | 2 years ago |
| [podcast](https://github.com/eduncan911/podcast) | 110 | iTunes and RSS 2.0 Podcast Generator in Golang | 2 years ago |
| [go-zero-width](https://github.com/trubitsyn/go-zero-width) | 103 | Zero-width character detection and removal for Go | 2 years ago |
| [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) | 101 | EditorConfig Core written in Go | 2 days ago |
| [go-slugify](https://github.com/mozillazg/go-slugify) | 79 | Pretty Slug. | 2 years ago |
| [align](https://github.com/Guitarbum722/align) | 76 | A general purpose application and library for aligning text. | a year ago |
| [go-vcard](https://github.com/emersion/go-vcard) | 74 | A Go library to parse and format vCard | 3 months ago |
| [goregen](https://github.com/zach-klippenstein/goregen) | 71 | randexp for Go. | 3 months ago |
| [pagser](https://github.com/foolin/pagser) | 67 | Pagser is a simple, extensible, configurable parse and deserialize html page to struct based on goquery and struct tags for golang crawler | 7 months ago |
| [genex](https://github.com/alixaxel/genex) | 65 | Genex package for Go | 3 years ago |
| [did](https://github.com/build-trust/did) | 64 | A golang package to work with Decentralized Identifiers (DIDs)  | 2 years ago |
| [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) | 64 | Encoding and decoding for fixed-width formatted data | 10 days ago |
| [bafi](https://github.com/mmalcek/bafi) | 59 | Universal JSON, BSON, YAML, CSV, XML converter with templates | 3 months ago |
| [allot](https://github.com/sbstjn/allot) | 55 | Parse placeholder and wildcard text commands | 6 months ago |
| [guesslanguage](https://github.com/endeveit/guesslanguage) | 55 | Guess the natural language of a text in Go | 5 years ago |
| [gonameparts](https://github.com/polera/gonameparts) | 36 | Takes a full name and splits it into individual name parts | 3 years ago |
| [slugify](https://github.com/avelino/slugify) | 31 | A Go slugify application that handles string | 4 years ago |
| [normalize](https://github.com/avito-tech/normalize) | 30 |  | a year ago |
| [codetree](https://github.com/aerogo/codetree) | 21 | :evergreen_tree: Parses indented code and returns a tree structure. | 3 years ago |
| [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) | 15 | Fast and light wildcard pattern matching. Fork from Minio project. | 12 days ago |
| [enca](https://github.com/endeveit/enca) | 11 | Minimal cgo bindings for libenca | 6 years ago |
| [syndfeed](https://github.com/zhengchun/syndfeed) | 8 | A syndication feed parser for Atom 1.0 and RSS 2.0 in Go | 4 years ago |
| [encoding](https://github.com/ake-persson/encoding) | 7 | Go package provides a generic interface to encoders and decoders | 3 years ago |
| [go-output-format](https://github.com/drewstinnett/go-output-format) | 7 | Output go objects in standard formats, such as YAML, JSON, etc | 10 months ago |
| [ltsv](https://github.com/Wing924/ltsv) | 7 | High performance LTSV (Labeled Tab Separeted Value) reader for Go. | 3 years ago |
| [bbConvert](https://github.com/CalebQ42/bbConvert) | 6 | Converter from BBCode to HTML | 6 years ago |
| [doi](https://github.com/hscells/doi) | 6 | Parse and check doi objects in go. | 5 years ago |


#### [Utility](#Utility)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xurls](https://github.com/mvdan/xurls) | 942 | Extract urls from text | 5 days ago |
| [gotabulate](https://github.com/bndr/gotabulate) | 286 | Gotabulate - Easily pretty-print your tabular data with Go | a year ago |
| [radix](https://github.com/yourbasic/radix) | 177 | A fast string sorting algorithm (MSD radix sort) | 4 years ago |
| [regroup](https://github.com/oriser/regroup) | 116 | Match regex group into go struct using struct tags and automatic parsing | a year ago |
| [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) | 48 | A sanitization-based swear filter for Go. | a year ago |
| [parth](https://github.com/codemodus/parth) | 41 | Path parsing for segment unmarshaling and slicing. | 4 years ago |
| [xj2go](https://github.com/yerstd/xj2go) | 26 | Convert xml and json to go struct | 10 months ago |
| [tagify](https://github.com/zoomio/tagify) | 23 | Tagify produces a set of tags from a given source. Source can be either an HTML page, a Markdown document or a plain text. Supports English, Russian, Chinese, Hindi, Spanish, Arabic, Japanese, German, Hebrew, French and Korean languages. | 3 hours ago |
| [kace](https://github.com/codemodus/kace) | 18 | Common case conversions covering common initialisms. | 4 years ago |
| [TySug](https://github.com/Dynom/TySug) | 12 | A project around helping to prevent typing typos. TySug (Typo Suggestions) suggests alternative words with respect to keyboard layouts | 20 days ago |
| [parseargs-go](https://github.com/txgruppi/parseargs-go) | 9 | A string argument parser that understands quotes and backslashes | 6 years ago |
| [textwrap](https://github.com/isbm/textwrap) | 2 | Port of Python's "textwrap" module to Go | 3 years ago |


### [Third-party APIs](#Third-party-APIs)
* Libraries for accessing third party APIs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-github](https://github.com/google/go-github) | 8714 | Go library for accessing the GitHub v3 API | 3 days ago |
| [aws-sdk-go](https://github.com/aws/aws-sdk-go) | 7788 | AWS SDK for the Go programming language. | 2 days ago |
| [slack](https://github.com/slack-go/slack) | 4005 | Slack API in Go - community-maintained fork created by the original author, @nlopes | 10 days ago |
| [discordgo](https://github.com/bwmarrin/discordgo) | 3233 |  (Golang) Go bindings for Discord | 3 days ago |
| [google-api-go-client](https://github.com/googleapis/google-api-go-client) | 3115 | Auto-generated Google APIs for Go. | 4 hours ago |
| [google-cloud-go](https://github.com/googleapis/google-cloud-go) | 2992 | Google Cloud Client Libraries for Go. | 2 days ago |
| [minio-go](https://github.com/minio/minio-go) | 1663 | MinIO Go client SDK for S3 compatible object storage | 4 days ago |
| [stripe-go](https://github.com/stripe/stripe-go) | 1613 | Go library for the Stripe API.     | 2 days ago |
| [go-twitter](https://github.com/dghubble/go-twitter) | 1509 | Go Twitter REST and Streaming API v1.1 | 11 days ago |
| [go-jira](https://github.com/andygrunwald/go-jira) | 1159 | Go client library for Atlassian Jira | 10 days ago |
| [anaconda](https://github.com/ChimeraCoder/anaconda) | 1122 | A Go client library for the Twitter 1.1 API | 3 months ago |
| [facebook](https://github.com/huandu/facebook) | 1075 | A Facebook Graph API SDK For Go. | 3 months ago |
| [githubv4](https://github.com/shurcooL/githubv4) | 908 | Package githubv4 is a client library for accessing GitHub GraphQL API v4 (https://docs.github.com/en/graphql). | 2 months ago |
| [webhooks](https://github.com/go-playground/webhooks) | 760 | :fishing_pole_and_fish: Webhook receiver for GitHub, Bitbucket, GitLab, Gogs | 15 hours ago |
| [paypal](https://github.com/plutov/paypal) | 513 | Golang client for PayPal REST API | 17 days ago |
| [geo-golang](https://github.com/codingsince1985/geo-golang) | 437 | Go library to access geocoding and reverse geocoding APIs | 6 months ago |
| [twitter-scraper](https://github.com/n0madic/twitter-scraper) | 243 | Scrape the Twitter Frontend API without authentication with Golang. | 2 months ago |
| [ethrpc](https://github.com/onrik/ethrpc) | 239 | Golang client for ethereum json rpc api | 12 days ago |
| [trello](https://github.com/adlio/trello) | 201 | Trello API wrapper for Go | 2 months ago |
| [go-marathon](https://github.com/gambol99/go-marathon) | 195 | A GO API library for working with Marathon | 2 years ago |
| [medium-sdk-go](https://github.com/Medium/medium-sdk-go) | 132 | A Golang SDK for Medium's OAuth2 API | 4 years ago |
| [gostorm](https://github.com/jsgilmore/gostorm) | 128 | GoStorm is a Go library that implements the communications protocol required to write Storm spouts and Bolts in Go that communicate with the Storm shells. | 5 years ago |
| [wit-go](https://github.com/wit-ai/wit-go) | 125 | Go client for wit.ai HTTP API | 3 months ago |
| [pushover](https://github.com/gregdel/pushover) | 123 | Go wrapper for the Pushover API | 10 months ago |
| [go-trending](https://github.com/andygrunwald/go-trending) | 121 | Go library for accessing trending repositories and developers at Github. | 3 days ago |
| [hipchat](https://github.com/daneharrigan/hipchat) | 110 | A golang package to communicate with HipChat over XMPP | 5 years ago |
| [hipchat](https://github.com/andybons/hipchat) | 104 | This project implements a Go client library for the Hipchat API. | 6 years ago |
| [cachet](https://github.com/andygrunwald/cachet) | 90 | Go(lang) client library for Cachet (open source status page system). | a year ago |
| [simples3](https://github.com/rhnvrm/simples3) | 89 | Simple no frills AWS S3 Golang Library using REST with V4 Signing (without AWS Go SDK) | a month ago |
| [gosip](https://github.com/koltyakov/gosip) | 79 | ⚡️ SharePoint API client for Go (Golang) | 14 days ago |
| [igdb](https://github.com/Henry-Sarabia/igdb) | 75 | Go client for the Internet Game Database API | a year ago |
| [go-unsplash](https://github.com/hbagdi/go-unsplash) | 65 | Go Client for the Unsplash API  | a month ago |
| [gogtrends](https://github.com/groovili/gogtrends) | 65 | Unofficial Google Trends API for Go | 2 months ago |
| [go-circleci](https://github.com/jszwedko/go-circleci) | 64 | Go library for interacting with CircleCI | 3 years ago |
| [clarifai-go](https://github.com/Clarifai/clarifai-go) | 56 | DEPRECATED: please use https://github.com/Clarifai/clarifai-go-grpc | 5 years ago |
| [golang-tmdb](https://github.com/cyruzin/golang-tmdb) | 55 | This is a Golang wrapper for working with TMDb API. It aims to support version 3. | 2 months ago |
| [megos](https://github.com/andygrunwald/megos) | 54 | Go(lang) client library for accessing information of an Apache Mesos cluster. | a year ago |
| [go-amazon-product-advertising-api](https://github.com/ngs/go-amazon-product-advertising-api) | 53 | Go Client Library for Amazon Product Advertising API | 4 years ago |
| [ynab.go](https://github.com/brunomvsouza/ynab.go) | 52 | Go client for the YNAB API. Unofficial. It covers 100% of the resources made available by the YNAB API. | a year ago |
| [gads](https://github.com/emiddleton/gads) | 49 | Google Adwords API for Go | 8 months ago |
| [go-postman-collection](https://github.com/rbretecher/go-postman-collection) | 49 | Go module to work with Postman Collections | 19 days ago |
| [uptimerobot](https://github.com/bitfield/uptimerobot) | 48 | Client library for UptimeRobot v2 API | a month ago |
| [fcm](https://github.com/maddevsio/fcm) | 47 | Firebase Cloud Messaging for application servers implemented using the Go programming language. | 2 years ago |
| [mixpanel](https://github.com/dukex/mixpanel) | 46 | Golang Mixpanel Client | a month ago |
| [go-xkcd](https://github.com/nishanths/go-xkcd) | 45 | xkcd.com API client in Go | 9 months ago |
| [gomusicbrainz](https://github.com/michiwend/gomusicbrainz) | 45 | a Go (Golang) MusicBrainz WS2 client library - work in progress | a year ago |
| [go-spotify](https://github.com/rapito/go-spotify) | 43 | Go library for the Spotify Web API | 2 years ago |
| [airtable](https://github.com/mehanizm/airtable) | 40 | Simple golang airtable API wrapper | 4 months ago |
| [golyrics](https://github.com/mamal72/golyrics) | 38 | A simple Go package to fetch lyrics from Wikia | 4 years ago |
| [google-play-scraper](https://github.com/n0madic/google-play-scraper) | 36 | Golang scraper to get data from Google Play Store | a day ago |
| [go-myanimelist](https://github.com/nstratos/go-myanimelist) | 31 | Go library for accessing the MyAnimeList API: https://myanimelist.net/apiconfig/references/api/v2 | 2 months ago |
| [patreon-go](https://github.com/mxpv/patreon-go) | 31 | Patreon Go API client | 3 years ago |
| [translate](https://github.com/nuveo/translate) | 31 | Go online translation package | 6 years ago |
| [gami](https://github.com/bit4bit/gami) | 30 | GO - Asterisk AMI Interface | 4 years ago |
| [gcm](https://github.com/TheOrioli/gcm) | 30 | Google Cloud Messaging for application servers implemented using the Go programming language. | 7 years ago |
| [lastpass-go](https://github.com/ansd/lastpass-go) | 28 | Golang client for LastPass | 19 days ago |
| [go-steam](https://github.com/sostronk/go-steam) | 27 | Go library for querying Source servers | a year ago |
| [go-imgur](https://github.com/koffeinsource/go-imgur) | 23 | Go library to use the imgur.com API | 22 days ago |
| [go-shopify](https://github.com/rapito/go-shopify) | 23 | Simple Shopify API for the Go Programming Language | 2 years ago |
| [go-twitch](https://github.com/knspriggs/go-twitch) | 21 | A golang client for the Twitch v3 API - public APIs only (for now) | 5 years ago |
| [brewerydb](https://github.com/naegelejd/brewerydb) | 18 | Go library for http://www.brewerydb.com/ API | 7 years ago |
| [codeship-go](https://github.com/codeship/codeship-go) | 18 | Go library for accessing the Codeship API v2 | 2 years ago |
| [textbelt](https://github.com/farmergreg/textbelt) | 17 | golang library for textbelt.com | 7 years ago |
| [coinpaprika-api-go-client](https://github.com/coinpaprika/coinpaprika-api-go-client) | 16 | Go client library for interacting with Coinpaprika's API | 2 years ago |
| [go-hacknews](https://github.com/PaulRosset/go-hacknews) | 16 | 📟  Tiny utility Go client for HackerNews API. | 5 years ago |
| [device-check-go](https://github.com/rinchsan/device-check-go) | 14 | :iphone: iOS DeviceCheck SDK for Go - query and modify the per-device bits | 3 months ago |
| [go-aws-news](https://github.com/circa10a/go-aws-news) | 14 | Go app + library to fetch what's new from AWS | a month ago |
| [go-google-analytics](https://github.com/chonthu/go-google-analytics) | 12 | Simple Reporting for Google Analytics | 7 years ago |
| [gopaapi5](https://github.com/utekaravinash/gopaapi5) | 12 | Go Client Library for Amazon's Product Advertising API 5.0 | 2 years ago |
| [go-openproject](https://github.com/manuelbcd/go-openproject) | 11 | Go client library for OpenProject | a year ago |
| [go-here](https://github.com/abdullahselek/go-here) | 10 | Go client library around the HERE location based APIs. | 2 years ago |
| [go-sophos](https://github.com/esurdam/go-sophos) | 10 | Sophos UTM 9 REST API Client in Golang | 3 months ago |
| [smitego](https://github.com/sergiotapia/smitego) | 10 | SmiteGo is an API wrapper for the Smite game from HiRez. It is written in Go! | 8 years ago |
| [gomalshare](https://github.com/MonaxGT/gomalshare) | 9 | Go library MalShare API | 3 years ago |
| [rrdaclient](https://github.com/Omie/rrdaclient) | 8 | Go bindings for RRDA https://github.com/fcambus/rrda | 8 years ago |
| [go-google-email-audit-api](https://github.com/ngs/go-google-email-audit-api) | 7 | Go Client Library for G Suite Email Audit API | 6 years ago |
| [libgoffi](https://github.com/clevabit/libgoffi) | 7 | libgoffi - libffi adapter library for Go | 2 years ago |
| [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) | 7 | This is RAWG SDK GO. This library contains methods for interacting with RAWG API. | 2 months ago |
| [gumblr](https://github.com/mattcunningham/gumblr) | 7 | A Go Wrapper for the Tumblr v2 API | 6 years ago |
| [go-sptrans](https://github.com/sergioaugrod/go-sptrans) | 6 | Go client library for the SPTrans Olho Vivo API. :bus: | 2 years ago |
| [go-zooz](https://github.com/gojuno/go-zooz) | 6 | Zooz API client for Go | 2 months ago |
| [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) | 5 | Golang package which provides http Handlers to serve the swagger ui | a year ago |
| [go-chronos](https://github.com/axelspringer/go-chronos) | 4 | :dancers: Go Chronos 3.x REST API Client | 5 years ago |
| [kanka](https://github.com/Henry-Sarabia/kanka) | 3 | Go client for the Kanka API | 2 years ago |
| [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) | 2 | Golang SDK for AppStore Connect API (Unofficial) | 2 months ago |
| [go-restcountries](https://github.com/chriscross0/go-restcountries) | 2 | Go wrapper for the REST Countries API. | 9 months ago |
| [playlyfe-go-sdk](https://github.com/playlyfe/playlyfe-go-sdk) | 1 | This is the official Playlyfe Golang Sdk | 6 years ago |
| [tripadvisor-golang](https://github.com/mrbenosborne/tripadvisor-golang) | 1 | A TripAdvisor API wrapper for Golang. | 3 years ago |
| [vl-go](https://github.com/verifid/vl-go) | 1 | Go client library around the VerifID identity verification layer API. | a year ago |


### [Utilities](#Utilities)
* General utilities and tools to make your life easier.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fzf](https://github.com/junegunn/fzf) | 46150 | :cherry_blossom: A command-line fuzzy finder | 2 hours ago |
| [hub](https://github.com/github/hub) | 21946 | A command-line tool that makes git easier to use with GitHub. | a month ago |
| [ctop](https://github.com/bcicen/ctop) | 13149 | Top-like interface for container metrics | 7 days ago |
| [sqlx](https://github.com/jmoiron/sqlx) | 12381 | general purpose extensions to golang's database/sql | 13 days ago |
| [goreleaser](https://github.com/goreleaser/goreleaser) | 10425 | Deliver Go binaries as fast and easily as possible | 3 hours ago |
| [wuzz](https://github.com/asciimoo/wuzz) | 10025 | Interactive cli tool for HTTP inspection | a month ago |
| [usql](https://github.com/xo/usql) | 7482 | Universal command-line interface for SQL databases | 2 days ago |
| [peco](https://github.com/peco/peco) | 7035 | Simplistic interactive filtering tool | 25 days ago |
| [godropbox](https://github.com/dropbox/godropbox) | 4047 | Common libraries for writing Go services/applications. | 4 months ago |
| [go-funk](https://github.com/thoas/go-funk) | 3730 | A modern Go utility library which provides helpers (map, find, contains, filter, ...) | a month ago |
| [hystrix-go](https://github.com/afex/hystrix-go) | 3721 | Netflix's Hystrix latency and fault tolerance library, for Go  | 5 months ago |
| [panicparse](https://github.com/maruel/panicparse) | 3217 | Crash your app in style (Golang) | 2 months ago |
| [minify](https://github.com/tdewolff/minify) | 3056 | Go minifiers for web formats | 3 days ago |
| [goreporter](https://github.com/qax-os/goreporter) | 2993 | A Golang tool that does static analysis, unit testing, code review and generate code quality report. | 4 years ago |
| [mc](https://github.com/minio/mc) | 2194 | MinIO Client is a replacement for ls, cp, mkdir, diff and rsync commands for filesystems and object storage. | an hour ago |
| [mergo](https://github.com/imdario/mergo) | 2011 | Mergo: merging Go structs and maps since 2013. | 16 days ago |
| [storm](https://github.com/asdine/storm) | 1910 | Simple and powerful toolkit for BoltDB | a year ago |
| [spinner](https://github.com/briandowns/spinner) | 1855 | Go (golang) package with 90 configurable terminal spinner/progress indicators. | 8 days ago |
| [mole](https://github.com/davrodpin/mole) | 1585 | CLI application to create ssh tunnels focused on resiliency and user experience. | 17 days ago |
| [filetype](https://github.com/h2non/filetype) | 1578 | Fast, dependency-free Go package to infer binary file types based on the magic numbers header signature | 21 days ago |
| [boilr](https://github.com/tmrts/boilr) | 1486 | :zap: boilerplate template manager that generates files or directories from template repositories | 8 months ago |
| [cli](https://github.com/create-go-app/cli) | 1450 | ✨ Create a new production-ready project with backend, frontend and deploy automation by running one CLI command! | 3 months ago |
| [jump](https://github.com/gsamokovarov/jump) | 1407 | Jump helps you navigate faster by learning your habits. ✌️ | 12 hours ago |
| [circuitbreaker](https://github.com/rubyist/circuitbreaker) | 1010 | Circuit Breakers in Go | 4 days ago |
| [gtm](https://github.com/git-time-metric/gtm) | 901 | Simple, seamless, lightweight time tracking for Git | 6 months ago |
| [hostctl](https://github.com/guumaster/hostctl) | 790 | Your dev tool to manage /etc/hosts like a pro! | 5 months ago |
| [mimetype](https://github.com/gabriel-vasile/mimetype) | 783 | A fast Golang library for media type and file extension detection, based on magic numbers | 4 days ago |
| [immortal](https://github.com/immortal/immortal) | 746 | ⭕  A *nix cross-platform (OS agnostic) supervisor | 2 months ago |
| [circuit](https://github.com/cep21/circuit) | 653 | An efficient and feature complete Hystrix like Go implementation of the circuit breaker pattern. | a month ago |
| [scany](https://github.com/georgysavva/scany) | 624 | Library for scanning data from a database into Go structs and more | 5 days ago |
| [htcat](https://github.com/htcat/htcat) | 548 | Parallel and Pipelined HTTP GET Utility | 3 years ago |
| [ergo](https://github.com/cristianoliveira/ergo) | 530 | The management of multiple apps running over different ports made easy | 2 days ago |
| [delve](https://github.com/derekparker/delve) | 511 | Delve is a debugger for the Go programming language. | 3 days ago |
| [koazee](https://github.com/wesovilabs/koazee) | 504 | A StreamLike, Immutable, Lazy Loading and smart Golang Library to deal with slices. | 2 years ago |
| [godaemon](https://github.com/VividCortex/godaemon) | 487 | Daemonize Go applications deviously. | a year ago |
| [go-dry](https://github.com/ungerik/go-dry) | 478 | DRY (don't repeat yourself) package for Go | 6 months ago |
| [gopencils](https://github.com/bndr/gopencils) | 438 | Easily consume REST APIs with Go (golang) | 3 years ago |
| [request](https://github.com/mozillazg/request) | 416 | A developer-friendly HTTP request library for Gopher. | 3 years ago |
| [gubrak](https://github.com/novalagung/gubrak) | 409 | ⚙️ Golang functional utility library with syntactic sugar. It's like lodash, but for Go | 2 years ago |
| [clockwork](https://github.com/jonboulle/clockwork) | 407 | a fake clock for golang | 12 days ago |
| [deepcopier](https://github.com/ulule/deepcopier) | 391 | simple struct copying for golang | 2 years ago |
| [changie](https://github.com/miniscruff/changie) | 373 | Automated changelog tool for preparing releases with lots of customization options | 4 days ago |
| [go-rate](https://github.com/beefsack/go-rate) | 364 | A timed rate limiter for Go | 6 months ago |
| [retry](https://github.com/kamilsk/retry) | 322 | ♻️ The most advanced interruptible mechanism to perform actions repetitively until successful. | a year ago |
| [mani](https://github.com/alajmo/mani) | 300 | :robot: CLI tool to help you manage repositories | 2 months ago |
| [scan](https://github.com/blockloop/scan) | 292 | Scan database/sql rows directly to structs, slices, and primitive types | 8 days ago |
| [serve](https://github.com/syntaqx/serve) | 275 | 🍽️ a static http server anywhere you need one. | 5 days ago |
| [gohper](https://github.com/cosiner/gohper) | 256 | [UNMATAINED] common libs here. | 5 years ago |
| [util](https://github.com/shomali11/util) | 250 | A collection of useful utility functions | 22 days ago |
| [clipboard](https://github.com/golang-design/clipboard) | 241 | 📋 cross-platform clipboard package that supports accessing text and image in Go (macOS/Linux/Windows/Android/iOS)  | 2 months ago |
| [go-trigger](https://github.com/sadlil/go-trigger) | 227 | A Global event triggerer for golang. Defines functions as event with id string. Trigger the event anywhere from your project. | 5 years ago |
| [gotenv](https://github.com/subosito/gotenv) | 226 | Load environment variables from `.env` or `io.Reader` in Go. | a month ago |
| [grofer](https://github.com/pesos/grofer) | 214 | A system and resource monitoring tool written in Golang! | 21 days ago |
| [go-pattern-match](https://github.com/alexpantyukhin/go-pattern-match) | 183 | Pattern matchings for Go. | 2 years ago |
| [death](https://github.com/vrecan/death) | 181 | Managing go application shutdown with signals. | 2 months ago |
| [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) | 180 | go-bind-plugin generates API for exported plugin symbols (-buildmode=plugin) - go1.8+ only (http://golang.org/pkg/plugin) | 3 years ago |
| [toolbox](https://github.com/viant/toolbox) | 180 | Toolbox - go utility library | a month ago |
| [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) | 178 | go-sitemap-generator is the easiest way to generate Sitemaps in Go | 7 months ago |
| [rospo](https://github.com/ferama/rospo) | 177 | 🐸 Simple, reliable, persistent ssh tunnels with embedded ssh server | 20 hours ago |
| [countries](https://github.com/biter777/countries) | 173 | Countries - ISO 3166 (ISO3166-1, ISO3166, Digit, Alpha-2 and Alpha-3) countries codes and names (on eng and rus), ISO 4217 currency designators, ITU-T E.164 IDD calling phone codes, countries capitals, UN M.49 regions codes, ccTLD countries domains, IOC/NOC and FIFA letters codes, VERY VERY FAST, NO maps[], NO slices[], NO init() funcs, NO external links/files/data, NO interface{}, NO specific dependencies, Databases/JSON/GOB/XML/CSV compatible, Emoji countries flags and currencies support, full support ISO-3166-1, ISO-4217, ITU-T E.164, Unicode CLDR and ccTLD standarts. | 13 days ago |
| [rerun](https://github.com/ivpusic/rerun) | 163 | Configurable recompiling and rerunning go apps when source changes | 4 years ago |
| [moldova](https://github.com/StabbyCutyou/moldova) | 162 | A lightweight templating system for generating random data | 5 years ago |
| [apm](https://github.com/topfreegames/apm) | 159 | APM is a process manager for Golang applications. | 6 years ago |
| [robustly](https://github.com/VividCortex/robustly) | 153 | Run functions resiliently in Go, catching and restarting panics | a year ago |
| [chyle](https://github.com/antham/chyle) | 145 | Changelog generator : use a git repository and various data sources and publish the result on external services | 3 days ago |
| [go-bsdiff](https://github.com/gabstv/go-bsdiff) | 130 | Pure Go bsdiff and bspatch libraries and CLI tools. | 3 years ago |
| [onecache](https://github.com/adelowo/onecache) | 127 | One caching API, Multiple backends | 2 years ago |
| [lrserver](https://github.com/jaschaephraim/lrserver) | 121 | LiveReload server for Go [golang] | 5 years ago |
| [nostromo](https://github.com/pokanop/nostromo) | 117 | CLI for building powerful aliases | 2 months ago |
| [cryptgo](https://github.com/Gituser143/cryptgo) | 115 | A terminal application to watch crypto prices! | 10 months ago |
| [sorty](https://github.com/jfcg/sorty) | 107 | :zap: Fast Concurrent / Parallel Sorting in Go | 4 months ago |
| [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) | 101 | Golang Mongodb Pagination for official mongodb/mongo-go-driver package which supports both normal queries and Aggregation pipelines with all information like Total records, Page, Per Page, Previous, Next, Total Page and query results. | 2 months ago |
| [cmd](https://github.com/commander-cli/cmd) | 100 | A simple package to execute shell commands on linux, windows and osx | a month ago |
| [limiters](https://github.com/mennanov/limiters) | 99 | Golang rate limiters for distributed applications | 7 months ago |
| [mssqlx](https://github.com/linxGnu/mssqlx) | 99 | Database client library, proxy for any master slave, master master structures. Lightweight, performant and auto balancing in mind. | a month ago |
| [goseaweedfs](https://github.com/linxGnu/goseaweedfs) | 95 | A complete Golang client for SeaweedFS | 2 months ago |
| [xferspdy](https://github.com/monmohan/xferspdy) | 93 | Xferspdy provides binary diff and patch library in golang. [Mentioned in Awesome Go, https://github.com/avelino/awesome-go] | a year ago |
| [filter](https://github.com/gookit/filter) | 89 | ⏳ Provide filtering, sanitizing, and conversion of Golang data. 提供对Golang数据的过滤，净化，转换。 | 8 days ago |
| [go-health](https://github.com/Talento90/go-health) | 89 | :heart: Health check your applications and dependencies | 7 months ago |
| [goval](https://github.com/maja42/goval) | 82 | Expression evaluation in golang | 2 years ago |
| [repeat](https://github.com/ssgreg/repeat) | 80 | Go implementation of different backoff strategies useful for retrying operations and heartbeating. | 2 years ago |
| [pm](https://github.com/VividCortex/pm) | 77 | Processlist manager with TCP listener | 2 years ago |
| [mimemagic](https://github.com/zRedShift/mimemagic) | 76 | Powerful and versatile MIME sniffing package using pre-compiled glob patterns, magic number signatures, XML document namespaces, and tree magic for mounted volumes, generated from the XDG shared-mime-info database. | 8 months ago |
| [go-lock](https://github.com/viney-shih/go-lock) | 74 | go-lock is a lock library implementing read-write mutex and read-write trylock without starvation | 2 months ago |
| [netbug](https://github.com/e-dard/netbug) | 69 | Package netbug provides a handler for registering profilers on your own ServeMux. | 7 years ago |
| [unis](https://github.com/esemplastic/unis) | 69 | UNIS: A Common Architecture for String Utilities within the Go Programming Language. | 5 years ago |
| [handy](https://github.com/miguelpragier/handy) | 68 | GO Golang Utilities and helpers like validators and string formatters | 2 years ago |
| [pgo](https://github.com/arthurkushman/pgo) | 68 | Go library for PHP community with convenient functions | 2 months ago |
| [goreadability](https://github.com/philipjkim/goreadability) | 65 | Webpage summary extractor using Facebook Open Graph and arc90's readability | 3 years ago |
| [multitick](https://github.com/VividCortex/multitick) | 63 | A multiplexor for aligned time.Time tickers in Go | a year ago |
| [minquery](https://github.com/icza/minquery) | 59 | MongoDB / mgo query that supports efficient pagination (cursors to continue listing documents where we left off). | a year ago |
| [go-astitodo](https://github.com/asticode/go-astitodo) | 58 | Parse TODOs in your GO code | 2 years ago |
| [golog](https://github.com/mlimaloureiro/golog) | 56 | Easy and simple CLI time tracker for your tasks | 4 years ago |
| [retry](https://github.com/thedevsaddam/retry) | 55 | Simple and easy retry mechanism package for Go | 7 months ago |
| [slice](https://github.com/psampaz/slice) | 50 | Type-safe functions for common Go slice operations | 2 years ago |
| [copy-pasta](https://github.com/jutkko/copy-pasta) | 49 | Universal copy paste service, works across different machines! | 2 years ago |
| [dbt](https://github.com/nikogura/dbt) | 48 | Dynamic Binary Toolkit- A framework for running self-updating signed binaries from a central, trusted repository. | a year ago |
| [golarm](https://github.com/msempere/golarm) | 48 | Fire alarms with system events | 7 years ago |
| [beyond](https://github.com/wesovilabs/beyond) | 47 | The Go library that will drive you to AOP world! | 17 days ago |
| [goback](https://github.com/carlescere/goback) | 45 | Golang simple exponential backoff package. | a year ago |
| [intrinsic](https://github.com/mengzhuo/intrinsic) | 44 | Provide Golang native SIMD intrinsics on x86/amd64 platform | 5 years ago |
| [retry-go](https://github.com/rafaeljesus/retry-go) | 43 | Retrying made simple and easy for golang :repeat:  | 4 years ago |
| [go-httpheader](https://github.com/mozillazg/go-httpheader) | 39 | A Go library for encoding structs into Header fields. | 4 months ago |
| [gpath](https://github.com/tenntenn/gpath) | 39 | gpath is a Go package to access a field by a path using reflect pacakge | 5 years ago |
| [slicer](https://github.com/leaanthony/slicer) | 39 | Utility class for handling slices | a year ago |
| [equalizer](https://github.com/reugn/equalizer) | 38 | A rate limiters package for Go | a year ago |
| [set](https://github.com/nofeaturesonlybugs/set) | 37 | Package set is a small wrapper around the official reflect package that facilitates loose type conversion and assignment into native Go types. | 2 months ago |
| [backscanner](https://github.com/icza/backscanner) | 36 | A scanner similar to bufio.Scanner, but it reads and returns lines in reverse order, starting at a given position and going backward. | 10 months ago |
| [evaluator](https://github.com/nullne/evaluator) | 35 |  | a year ago |
| [gostrutils](https://github.com/ik5/gostrutils) | 35 | Collections of string utils I have created over the years | 16 days ago |
| [shutdown](https://github.com/ztrue/shutdown) | 35 | Golang app shutdown hooks. | 7 months ago |
| [myhttp](https://github.com/inancgumus/myhttp) | 34 | Simplest HTTP GET requester for Go with timeout support | 4 years ago |
| [rclient](https://github.com/zpatrick/rclient) | 32 | Minimalistic REST client for Go applications | 3 years ago |
| [sshman](https://github.com/shoobyban/sshman) | 32 | SSH Manager - manage authorized_keys file on remote servers | 4 months ago |
| [tome](https://github.com/cyruzin/tome) | 30 | Package tome was designed to paginate simple RESTful APIs. | 4 months ago |
| [throttle](https://github.com/yudppp/throttle) | 28 | lodash throttle like Go library | a year ago |
| [generate](https://github.com/go-playground/generate) | 27 | :runner:runs go generate recursively on a specified path or environment variable and can filter by regex | 6 years ago |
| [ghokin](https://github.com/antham/ghokin) | 27 | Parallelized formatter with no external dependencies for gherkin (cucumber, behat...) | a month ago |
| [ugo](https://github.com/alxrm/ugo) | 26 | Simple and expressive toolbox written in Go | 6 years ago |
| [copy](https://github.com/gotidy/copy) | 25 | Package for fast copying structs of different types | 2 years ago |
| [goplaceholder](https://github.com/michiwend/goplaceholder) | 24 | a small golang lib to generate placeholder images | 7 years ago |
| [rerate](https://github.com/abo/rerate) | 24 | redis-based rate counter and rate limiter | 5 years ago |
| [mimesniffer](https://github.com/aofei/mimesniffer) | 23 | A MIME type sniffer for Go. | 4 days ago |
| [structs](https://github.com/PumpkinSeed/structs) | 20 | Golang struct operations. | 5 years ago |
| [ctxutil](https://github.com/posener/ctxutil) | 18 | utils for Go context | 2 years ago |
| [filler](https://github.com/yaronsumel/filler) | 16 | fill struct data easily with fill tags | 5 years ago |
| [jsend](https://github.com/clevergo/jsend) | 16 | :100: JSend's implementation writen in Go(golang) | a year ago |
| [dlog](https://github.com/kirillDanshin/dlog) | 15 | Simple build-time controlled debug log with ability to log where the logger was called | 5 years ago |
| [go-convert](https://github.com/Eun/go-convert) | 15 | Convert a value into another type | a month ago |
| [okrun](https://github.com/xta/okrun) | 15 | ok, run your gofile | 8 years ago |
| [ptr](https://github.com/gotidy/ptr) | 15 | Contains functions for simplified creation of pointers from constants of basic types | 8 months ago |
| [rest-go](https://github.com/edermanoel94/rest-go) | 15 | A package that provide many helpful methods for working with rest api. | 2 years ago |
| [command](https://github.com/txgruppi/command) | 13 | Command pattern for Go with thread safe serial and parallel dispatcher | 6 years ago |
| [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) | 13 | Problem json implementation (https://tools.ietf.org/html/rfc7807) package for go | 2 years ago |
| [go-types](https://github.com/mikekonan/go-types) | 13 | Library providing opanapi3 and Go types for store/validation and transfer of ISO-4217, ISO-3166, and other types. | 3 days ago |
| [retry](https://github.com/shafreeck/retry) | 11 | A pretty simple library to ensure your work to be done | 2 years ago |
| [silk](https://github.com/chrispassas/silk) | 11 | Read Silk Flow Files | 5 months ago |
| [go-countries](https://github.com/mikekonan/go-countries) | 9 |  | 2 years ago |
| [statiks](https://github.com/janiltonmaciel/statiks) | 9 | Fast, zero-configuration, static HTTP filer server. | 2 years ago |
| [go-actuator](https://github.com/sinhashubham95/go-actuator) | 8 | Golang production-ready features | 2 months ago |
| [go-clip](https://github.com/prashantgupta24/go-clip) | 8 | A minimalistic clipboard manager for Mac. | 2 years ago |
| [retry](https://github.com/percolate/retry) | 8 | Percolate's Go retry package | 3 years ago |
| [sliceconv](https://github.com/Henry-Sarabia/sliceconv) | 8 | Slice conversion between primitive types | 3 years ago |
| [blank](https://github.com/Henry-Sarabia/blank) | 7 | Detect blank strings or remove whitespace from strings | 3 years ago |
| [bleep](https://github.com/sinhashubham95/bleep) | 7 | OS Signal Handlers in Go | 2 years ago |
| [nfdump](https://github.com/chrispassas/nfdump) | 6 | NFDump File Reader | 6 months ago |
| [go-safe](https://github.com/kenkyu392/go-safe) | 5 | This Go package provides a sandbox for the safe execution of panic-inducing programs | 8 months ago |
| [lets-go](https://github.com/aplescia/lets-go) | 3 | Go module that provides common utilities for Cloud Native development | a year ago |
| [olaf](https://github.com/btnguyen2k/olaf) | 3 | Twitter Snowflake implemented in Go | 3 years ago |
| [tik](https://github.com/andy2046/tik) | 3 | hierarchical timing wheel | 2 years ago |
| [goctx](https://github.com/zerosnake0/goctx) | 2 | Get your context value faster | 2 years ago |


### [UUID](#UUID)
* Libraries for working with UUIDs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [uuid](https://github.com/google/uuid) | 3780 | Go package for UUIDs based on RFC 4122 and DCE 1.1: Authentication and Security Services. | 19 days ago |
| [ulid](https://github.com/oklog/ulid) | 2766 | Universally Unique Lexicographically Sortable Identifier (ULID) in Go | 13 days ago |
| [uuid](https://github.com/gofrs/uuid) | 1156 | A UUID package originally forked from github.com/satori/go.uuid | 2 months ago |
| [wuid](https://github.com/edwingeng/wuid) | 468 | An extremely fast UUID alternative written in golang | a month ago |
| [sno](https://github.com/muyo/sno) | 68 | Compact, sortable and fast unique IDs with embedded metadata. | 9 months ago |
| [nanoid](https://github.com/aidarkhanov/nanoid) | 50 | A tiny and fast Go unique string generator | a year ago |
| [Goid](https://github.com/JakeHL/Goid) | 33 | A UUIDv4 generation package written in go | 3 years ago |
| [gouid](https://github.com/twharmon/gouid) | 16 | Fast, dependable universally unique ids | 4 months ago |
| [uuid](https://github.com/agext/uuid) | 14 | Generate, encode, and decode UUIDs v1 with fast or cryptographic-quality random node identifier. | 2 years ago |


### [Validation](#Validation)
* Libraries for validation.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [joi](https://github.com/sideway/joi) | 18994 | The most powerful data validation library for JS | a day ago |
| [validator](https://github.com/go-playground/validator) | 11054 | :100:Go Struct and Field validation, including Cross Field, Cross Struct, Map, Slice and Array diving | 3 days ago |
| [govalidator](https://github.com/asaskevich/govalidator) | 5435 | [Go] Package of validators and sanitizers for strings, numerics, slices and structs | 16 days ago |
| [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) | 2832 | An idiomatic Go (golang) validation package. Supports configurable and extensible validation rules (validators) using normal language constructs instead of error-prone struct tags. | 24 days ago |
| [govalidator](https://github.com/thedevsaddam/govalidator) | 1124 | Validate Golang request data with simple rules. Highly inspired by Laravel's request validation. | 7 days ago |
| [validate](https://github.com/gookit/validate) | 757 | ⚔ Go package for data validation and filtering. support Map, Struct, Form data. Go通用的数据验证与过滤库，使用简单，内置大部分常用验证、过滤器，支持自定义验证器、自定义消息、字段翻译。 | 6 days ago |
| [checkdigit](https://github.com/osamingo/checkdigit) | 92 | Provide check digit algorithms and calculators written in Go | 3 months ago |
| [terraform-validator](https://github.com/thazelart/terraform-validator) | 78 | A norms and conventions validator for Terraform | 5 months ago |
| [validate](https://github.com/gobuffalo/validate) | 69 | This package provides a framework for writing validations for Go applications. | a month ago |
| [jio](https://github.com/faceair/jio) | 68 | jio is a json schema validator similar to joi | 2 years ago |
| [gody](https://github.com/guiferpa/gody) | 61 | :balloon: A lightweight struct validator for Go | 2 years ago |
| [govalid](https://github.com/twharmon/govalid) | 28 | Struct validation using tags | 10 months ago |


### [Version Control](#Version-Control)
* Libraries for version control.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-git](https://github.com/go-git/go-git) | 3728 | A highly extensible Git implementation in pure Go. | 5 days ago |
| [glab](https://github.com/profclems/glab) | 2042 | A GitLab CLI tool bringing GitLab to your command line | 10 days ago |
| [hercules](https://github.com/src-d/hercules) | 1777 | Gaining advanced insights from Git repository history. | 9 months ago |
| [git2go](https://github.com/libgit2/git2go) | 1763 | Git to Go; bindings for libgit2. Like McDonald's but tastier. | 21 days ago |
| [gh](https://github.com/rjeczalik/gh) | 78 | Scriptable server and net/http middleware for GitHub Webhooks. | 4 years ago |
| [go-vcs](https://github.com/sourcegraph/go-vcs) | 73 | manipulate and inspect VCS repositories in Go | a year ago |
| [Githooks](https://github.com/gabyx/Githooks) | 47 | 🦎 Githooks: per-repo and shared Git hooks with version control and auto update.  | 2 months ago |
| [hgo](https://github.com/beyang/hgo) | 13 | Hgo is a collection of Go packages providing read-access to local Mercurial repositories. | 7 years ago |


### [Video](#Video)
* Libraries for manipulating video.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [goav](https://github.com/giorgisio/goav) | 1908 | Golang bindings for FFmpeg (This repository is no longer maintained) | 3 months ago |
| [m3u8](https://github.com/grafov/m3u8) | 948 | Parser and generator of M3U8-playlists for Apple HLS. Library for Go language. :cinema: | a month ago |
| [gmf](https://github.com/3d0c/gmf) | 777 | Go Media Framework | 3 months ago |
| [go-astits](https://github.com/asticode/go-astits) | 431 | Demux and mux MPEG Transport Streams (.ts) natively in GO | 5 months ago |
| [go-astisub](https://github.com/asticode/go-astisub) | 402 | Manipulate subtitles in GO (.srt, .ssa/.ass, .stl, .ttml, .vtt (webvtt), teletext, etc.) | a month ago |
| [libvlc-go](https://github.com/adrg/libvlc-go) | 310 | Go bindings for libVLC and high-level media player interface | 4 months ago |
| [gortsplib](https://github.com/aler9/gortsplib) | 281 | RTSP 1.0 client and server library for the Go programming language | 19 hours ago |
| [gst](https://github.com/ziutek/gst) | 165 | Go bindings for GStreamer (retired: currently I don't use/develop this package) | 2 years ago |
| [go-m3u8](https://github.com/quangngotan95/go-m3u8) | 97 | Parse and generate m3u8 playlists for Apple HTTP Live Streaming (HLS) in Golang (ported from gem https://github.com/sethdeckard/m3u8) | 24 days ago |
| [v4l](https://github.com/korandiz/v4l) | 68 | Facade to the Video4Linux video capture interface.  | 7 months ago |
| [libgosubs](https://github.com/wargarblgarbl/libgosubs) | 19 | golang library to read and write various subtitle formats | 2 years ago |
| [go-mpd](https://github.com/unki2aut/go-mpd) | 12 | Go library for parsing and generating MPEG-DASH Media Presentation Description (MPD) files | 2 years ago |


### [Web Frameworks](#Web-Frameworks)
* 

#### [Full stack web frameworks](#Full-stack-web-frameworks.)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gin](https://github.com/gin-gonic/gin) | 61739 | Gin is a HTTP web framework written in Go (Golang). It features a Martini-like API with much better performance -- up to 40 times faster. If you need smashing performance, get yourself some Gin. | 12 hours ago |
| [echo](https://github.com/labstack/echo) | 23025 | High performance, minimalist Go web framework | 2 hours ago |
| [fiber](https://github.com/gofiber/fiber) | 21320 | ⚡️ Express inspired web framework written in Go | 12 minutes ago |
| [revel](https://github.com/revel/revel) | 12666 | A high productivity, full-stack web framework for the Go language. | a month ago |
| [goa](https://github.com/goadesign/goa) | 4786 | Design-based APIs and microservices in Go | a day ago |
| [gizmo](https://github.com/nytimes/gizmo) | 3629 | A Microservice Toolkit from The New York Times | a year ago |
| [go-json-rest](https://github.com/ant0ine/go-json-rest) | 3499 | A quick and easy way to setup a RESTful JSON API | 2 years ago |
| [macaron](https://github.com/go-macaron/macaron) | 3303 | Package macaron is a high productive and modular web framework in Go. | 2 months ago |
| [utron](https://github.com/gernest/utron) | 2218 | A lightweight MVC framework for Go(Golang) | 4 years ago |
| [goyave](https://github.com/go-goyave/goyave) | 1121 | 🍐 Elegant Golang REST API Framework | 4 days ago |
| [go-tigertonic](https://github.com/rcrowley/go-tigertonic) | 1001 | A Go framework for building JSON web services inspired by Dropwizard | 4 years ago |
| [tango](https://github.com/lunny/tango) | 835 | This is only a mirror and Moved to https://gitea.com/lunny/tango | 3 years ago |
| [gearbox](https://github.com/gogearbox/gearbox) | 654 | Gearbox :gear: is a web framework written in Go with a focus on high performance | a month ago |
| [beego](https://github.com/astaxie/beego) | 501 | beego is an open-source, high-performance web framework for the Go programming language. | 3 months ago |
| [aero](https://github.com/aerogo/aero) | 482 | :bullettrain_side: High-performance web server for Go. | 9 months ago |
| [gongular](https://github.com/mustafaakin/gongular) | 449 | A different approach to Go web frameworks | 2 years ago |
| [air](https://github.com/aofei/air) | 417 | An ideally refined web framework for Go. | a year ago |
| [neo](https://github.com/ivpusic/neo) | 417 | Go Web Framework | 5 years ago |
| [mango](https://github.com/paulbellamy/mango) | 368 | Mango is a modular web-application framework for Go, inspired by Rack, and PEP333. | 5 years ago |
| [flamingo-commerce](https://github.com/i-love-flamingo/flamingo-commerce) | 338 | Flexible E-Commerce Framework on top of Flamingo. Used to build E-Commerce "Portals" and connect it with the help of individual Adapters to other services.  | 2 days ago |
| [gondola](https://github.com/rainycape/gondola) | 309 | The web framework for writing faster sites, faster | 3 years ago |
| [flamingo](https://github.com/i-love-flamingo/flamingo) | 306 | Flamingo Framework and Core Library. Flamingo is a go based framework for pluggable web projects. It is used to build scalable and maintainable (web)applications. | 3 days ago |
| [rk-boot](https://github.com/rookie-ninja/rk-boot) | 266 | Build microservice with rk-boot and let the team take over clean and tidy code. | 7 days ago |
| [golf](https://github.com/dinever/golf) | 259 | :golf: The Golf web framework | a year ago |
| [webgo](https://github.com/bnkamalesh/webgo) | 253 | A microframework to build web apps; with handler chaining, middleware support, and most of all; standard library compliant HTTP handlers(i.e. http.HandlerFunc). | 2 months ago |
| [ginrpc](https://github.com/xxjwxc/ginrpc) | 230 | gin auto binding,grpc, and annotated route,gin 注解路由, grpc,自动参数绑定工具 | 12 days ago |
| [uadmin](https://github.com/uadmin/uadmin) | 194 | The web framework for Golang | 5 days ago |
| [hiboot](https://github.com/hidevopsio/hiboot) | 175 | hiboot is a high performance web and cli application framework with dependency injection support | 3 months ago |
| [appy](https://github.com/appist/appy) | 125 | An opinionated productive web framework that helps scaling business easier. | 8 months ago |
| [go-rest](https://github.com/ungerik/go-rest) | 125 | A small and evil REST framework for Go | 6 years ago |
| [microservice](https://github.com/claygod/microservice) | 98 | This library provides a simple microservice framework based on clean architecture principles with a working example implemented. | 3 months ago |
| [patron](https://github.com/beatlabs/patron) | 97 | Microservice framework following best cloud practices with a focus on productivity. | 32 minutes ago |
| [rux](https://github.com/gookit/rux) | 81 | ⚡ Rux is an simple and fast web framework. support route group, param route binding, middleware, compatible http.Handler interface. 简单且快速的 Go api/web 框架，支持路由分组，路由参数绑定，中间件，兼容 http.Handler 接口 | 2 hours ago |
| [vox](https://github.com/aisk/vox) | 78 | Simple and lightweight Go web framework inspired by koa | a year ago |
| [golax](https://github.com/fulldump/golax) | 74 | Golax, a go implementation for the Lax framework. | 6 months ago |
| [yarf](https://github.com/yarf-framework/yarf) | 65 | Yet Another REST Framework | 3 years ago |
| [fireball](https://github.com/zpatrick/fireball) | 58 | Go web framework with a natural feel | 4 years ago |
| [goa](https://github.com/goa-go/goa) | 46 | Goa is a  web framework based on middleware, like koa.js. | 3 years ago |
| [gotuna](https://github.com/gotuna/gotuna) | 40 | GoTuna a lightweight web framework for Go with mux router, middlewares, user sessions, templates, embedded views, and static file server. | 2 months ago |
| [api](https://github.com/resoursea/api) | 32 | A REST framework for quickly writing resource based services in Golang. | 8 years ago |
| [rex](https://github.com/goanywhere/rex) | 32 | Pleasures for Web in Golang | 5 years ago |
| [goweb](https://github.com/twharmon/goweb) | 31 | Lightweight web framework based on net/http. | 4 months ago |
| [banjo](https://github.com/n4Zz2/banjo) | 19 | BANjO is a simple web framework written in Go (golang) | 5 years ago |


#### [Actual middlewares](#Actual-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tollbooth](https://github.com/didip/tollbooth) | 2261 | Simple middleware to rate-limit HTTP requests. | a month ago |
| [cors](https://github.com/rs/cors) | 2151 | Go net/http configurable handler to handle CORS requests | 10 days ago |
| [limiter](https://github.com/ulule/limiter) | 1607 | Dead simple rate limit middleware for Go. | a month ago |
| [go-server-timing](https://github.com/mitchellh/go-server-timing) | 839 | Go (golang) library for creating and consuming HTTP Server-Timing headers | 4 months ago |
| [go-fault](https://github.com/github/go-fault) | 461 | Fault injection library in Go using standard http middleware | 3 days ago |
| [ln-paywall](https://github.com/philippgille/ln-paywall) | 127 | Go middleware for monetizing your API on a per-request basis with Bitcoin and Lightning ⚡️ | 3 years ago |
| [xff](https://github.com/sebest/xff) | 90 | A Golang Middleware to handle X-Forwarded-For Header | 7 months ago |
| [rk-grpc](https://github.com/rookie-ninja/rk-grpc) | 44 | Start gRPC microservice from YAML, plugin of rk-boot | 7 days ago |
| [formjson](https://github.com/rs/formjson) | 36 | Go net/http handler to transparently manage posted JSON | 7 years ago |
| [rk-gin](https://github.com/rookie-ninja/rk-gin) | 35 | Start gin microservice from YAML, plugin of rk-boot | 7 days ago |
| [client-timing](https://github.com/posener/client-timing) | 20 | An HTTP client for go-server-timing middleware. Enables automatic timing propagation through HTTP calls between servers. | 2 years ago |
| [mid](https://github.com/bobg/mid) | 4 | Middleware for HTTP services in Go | a month ago |


#### [Libraries for creating HTTP middlewares](#Libraries-for-creating-HTTP-middlewares)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [negroni](https://github.com/urfave/negroni) | 7231 | Idiomatic HTTP Middleware for Golang | 9 days ago |
| [alice](https://github.com/justinas/alice) | 2625 | Painless middleware chaining for Go | 4 months ago |
| [render](https://github.com/unrolled/render) | 1669 | Go package for easily rendering JSON, XML, binary data, and HTML templates responses. | 2 months ago |
| [stats](https://github.com/thoas/stats) | 586 | A Go middleware that stores various information about your web application (response time, status code count, etc.) | 3 years ago |
| [interpose](https://github.com/carbocation/interpose) | 295 | Minimalist net/http middleware for golang | 6 years ago |
| [renderer](https://github.com/thedevsaddam/renderer) | 241 | Simple, lightweight and faster response (JSON, JSONP, XML, YAML, HTML, File) rendering package for Go | 2 years ago |
| [muxchain](https://github.com/stephens2424/muxchain) | 209 | Lightweight Middleware for net/http | 3 years ago |
| [gores](https://github.com/alioygur/gores) | 99 | Go package that handles HTML, JSON, XML and etc. responses | 2 years ago |
| [rye](https://github.com/InVisionApp/rye) | 97 | A tiny http middleware for Golang with added handlers for common needs. | 4 years ago |
| [mediary](https://github.com/HereMobilityDevelopers/mediary) | 79 | Add interceptors to GO http.Client | 2 years ago |
| [chain](https://github.com/codemodus/chain) | 64 | Composable chains of nested http.Handler instances. | 4 years ago |
| [wrap](https://github.com/go-on/wrap) | 59 | Go http.Hander based middleware stack with context sharing | 4 years ago |
| [catena](https://github.com/codemodus/catena) | 8 | gRPC interceptor catenation. | 4 years ago |


#### [Routers](#Routers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mux](https://github.com/gorilla/mux) | 17115 | A powerful HTTP router and URL matcher for building Go web servers with 🦍 | 2 days ago |
| [httprouter](https://github.com/julienschmidt/httprouter) | 14336 | A high performance HTTP request router that scales well | 9 days ago |
| [chi](https://github.com/go-chi/chi) | 11940 | lightweight, idiomatic and composable router for building Go HTTP services | 17 days ago |
| [web](https://github.com/gocraft/web) | 1474 | Go Router + Middleware. Your Contexts. | 2 years ago |
| [bone](https://github.com/go-zoo/bone) | 1280 | Lightning Fast HTTP Multiplexer | 3 years ago |
| [goji](https://github.com/goji/goji) | 903 | Goji is a minimalistic and flexible HTTP request multiplexer for Go (golang) | 13 days ago |
| [fasthttprouter](https://github.com/buaazp/fasthttprouter) | 866 | A high performance fasthttp request router that scales well | 3 years ago |
| [httptreemux](https://github.com/dimfeld/httptreemux) | 550 | High-speed, flexible tree-based HTTP router for Go. | 9 months ago |
| [gorouter](https://github.com/xujiajun/gorouter) | 527 | xujiajun/gorouter is a simple and fast HTTP router for Go. It is easy to build RESTful APIs and your web framework. | 3 years ago |
| [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) | 441 | An extremely fast Go (golang) HTTP router that supports regular expression route matching. Comes with full support for building RESTful APIs. | 3 months ago |
| [lars](https://github.com/go-playground/lars) | 389 | :rotating_light: Is a lightweight, fast and extensible zero allocation HTTP router for Go used to create customizable frameworks. | 3 years ago |
| [siesta](https://github.com/VividCortex/siesta) | 352 | Composable framework for writing HTTP handlers in Go. | a year ago |
| [vestigo](https://github.com/husobee/vestigo) | 269 | Echo Inspired Stand Alone URL Router | 2 years ago |
| [router](https://github.com/gowww/router) | 164 | ⚡️ A lightning fast HTTP router | 2 years ago |
| [gorouter](https://github.com/vardius/gorouter) | 130 | Go Server/API micro framework, HTTP request router, multiplexer, mux | 2 months ago |
| [pure](https://github.com/go-playground/pure) | 128 | :non-potable_water: Is a lightweight  HTTP router that sticks to the std "net/http" implementation | 2 years ago |
| [alien](https://github.com/gernest/alien) | 122 | A lightweight and  fast http router from outer space | 3 years ago |
| [violetear](https://github.com/nbari/violetear) | 105 | Go HTTP router | a year ago |
| [Bxog](https://github.com/claygod/Bxog) | 103 | Bxog is a simple and fast HTTP router for Go (HTTP request multiplexer). | 2 years ago |
| [xmux](https://github.com/rs/xmux) | 96 | xmux is a httprouter fork on top of xhandler (net/context aware) | 5 years ago |
| [bellt](https://github.com/GuilhermeCaruso/bellt) | 54 | :bell: A simple Go router | 21 days ago |
| [ngamux](https://github.com/ngamux/ngamux) | 51 | Simple HTTP router for Go | 4 months ago |
| [fastrouter](https://github.com/razonyang/fastrouter) | 21 | FastRouter is a fast, flexible HTTP router written in Go. | 5 years ago |
| [route](https://github.com/goroute/route) | 7 | Go Route - Simple yet powerful HTTP request multiplexer | 3 years ago |


### [WebAssembly](#WebAssembly)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tinygo](https://github.com/tinygo-org/tinygo) | 11294 | Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM. | 43 minutes ago |
| [dom](https://github.com/dennwc/dom) | 460 | DOM library for Go and WASM | 3 years ago |
| [go-canvas](https://github.com/markfarnan/go-canvas) | 172 | Library to use HTML5 Canvas  from Go-WASM, with all drawing within go code | 2 years ago |
| [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) | 127 | Run WASM tests inside your browser | 3 months ago |
| [webapi](https://github.com/gowebapi/webapi) | 116 | Go Lang Web Assembly bindings for DOM, HTML etc | 7 months ago |
| [vert](https://github.com/norunners/vert) | 75 | WebAssembly interop between Go and JS values. | 7 months ago |


### [Windows](#Windows)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-ole](https://github.com/go-ole/go-ole) | 888 | win32 ole implementation for golang | 5 months ago |
| [d3d9](https://github.com/gonutz/d3d9) | 132 | Direct3D9 wrapper for Go. | 8 months ago |
| [gosddl](https://github.com/MonaxGT/gosddl) | 8 | GoSDDL converter | 3 years ago |


### [XML](#XML)
* Libraries and tools for manipulating XML.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zek](https://github.com/miku/zek) | 580 | Generate a Go struct from XML. | 2 months ago |
| [xpath](https://github.com/antchfx/xpath) | 497 | XPath package for Golang, supports HTML, XML, JSON document query. | a month ago |
| [xquery](https://github.com/antchfx/xquery) | 155 | Extract data or evaluate value from HTML/XML documents using XPath | 4 years ago |
| [xml2map](https://github.com/sbabiv/xml2map) | 41 | XML to MAP converter written Golang | 8 months ago |
| [xmlwriter](https://github.com/shabbyrobe/xmlwriter) | 21 | xmlwriter is a pure-Go library providing procedural XML generation based on libxml2's xmlwriter module | 6 months ago |
| [XML-Comp](https://github.com/XML-Comp/XML-Comp) | 17 | Compare ANY markup documents. | 4 years ago |


## [Tools](#Tools)
* Go software and plugins.

### [Code Analysis](#Code-Analysis)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-tools](https://github.com/dominikh/go-tools) | 4872 | Staticcheck - The advanced Go linter | 6 days ago |
| [go-tools](https://github.com/dominikh/go-tools) | 4872 | Staticcheck - The advanced Go linter | 6 days ago |
| [lint](https://github.com/golang/lint) | 3955 | [mirror] This is a linter for Go source code. (deprecated) | a year ago |
| [errcheck](https://github.com/kisielk/errcheck) | 1877 | errcheck checks that you checked errors. | 4 days ago |
| [go-critic](https://github.com/go-critic/go-critic) | 1344 | The most opinionated Go source code linter for code audit. | 14 days ago |
| [gcvis](https://github.com/davecheney/gcvis) | 1063 | Visualise Go program GC trace data in real time | 3 years ago |
| [goplantuml](https://github.com/jfeliu007/goplantuml) | 1036 | PlantUML Class Diagram Generator for golang projects | 2 months ago |
| [php-parser](https://github.com/z7zmey/php-parser) | 887 | PHP parser written in Go | a year ago |
| [goast-viewer](https://github.com/yuroyoro/goast-viewer) | 630 | Golang AST visualizer | 2 months ago |
| [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) | 608 | Clean architecture validator for go, like a The Dependency Rule and interaction between packages in your Go projects. | 9 months ago |
| [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) | 592 | Find outdated dependencies of your Go projects. go-mod-outdated provides a table view of the go list -u -m -json all command which lists all dependencies of a Go project and their available minor and patch updates. It also provides a way to filter indirect dependencies and dependencies without updates. | 3 months ago |
| [goreturns](https://github.com/sqs/goreturns) | 512 | A gofmt/goimports-like tool for Go programmers that fills in Go return statements with zero values to match the func return types | 2 years ago |
| [golines](https://github.com/segmentio/golines) | 439 | A golang formatter that fixes long lines | a day ago |
| [todocheck](https://github.com/preslavmihaylov/todocheck) | 386 | A static code analyser for annotated TODO comments | 13 hours ago |
| [unconvert](https://github.com/mdempsky/unconvert) | 323 | Remove unnecessary type conversions from Go source | 2 months ago |
| [dupl](https://github.com/mibk/dupl) | 286 | a tool for code clone detection | 2 years ago |
| [tickgit](https://github.com/augmentable-dev/tickgit) | 278 | Manage your repository's TODOs, tickets and checklists as config in your codebase. | 7 months ago |
| [gostatus](https://github.com/shurcooL/gostatus) | 243 | A command line tool that shows the status of Go repositories. | 4 years ago |
| [apicompat](https://github.com/bradleyfalzon/apicompat) | 175 | apicompat checks recent changes to a Go project for backwards incompatible changes | 6 years ago |
| [checkstyle](https://github.com/qiniu/checkstyle) | 121 | checkstyle for go | a year ago |
| [lint](https://github.com/surullabs/lint) | 66 | Run linters from Go code -  | 4 years ago |
| [validate](https://github.com/mccoyst/validate) | 59 | A Go package to automatically validate fields with tags | 6 years ago |
| [go-outdated](https://github.com/firstrow/go-outdated) | 42 | Find outdated golang packages | 4 years ago |
| [blanket](https://github.com/verygoodsoftwarenotvirus/blanket) | 14 | MOVED TO GITLAB | 4 years ago |
| [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) | 8 | Golang Ifood API SDK  | 4 months ago |


### [Editor Plugins](#Editor-Plugins)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [vim-go](https://github.com/fatih/vim-go) | 14798 | Go development plugin for Vim | 7 minutes ago |
| [tools](https://github.com/golang/tools) | 6313 | [mirror] Go Tools | 3 days ago |
| [gocode](https://github.com/nsf/gocode) | 4978 | An autocompletion daemon for the Go programming language | 3 months ago |
| [GoSublime](https://github.com/DisposaBoy/GoSublime) | 3429 | A Golang plugin collection for SublimeText 3, providing code completion and other IDE-like features. | 2 years ago |
| [vscode-go](https://github.com/golang/vscode-go) | 2877 | Go extension for Visual Studio Code | 3 days ago |
| [go-plus](https://github.com/joefitzgerald/go-plus) | 1513 | An Enhanced Go Experience For The Atom Editor | a year ago |
| [go-mode.el](https://github.com/dominikh/go-mode.el) | 1254 | Emacs mode for the Go programming language | 12 days ago |
| [coc-go](https://github.com/josa42/coc-go) | 475 | Go language server extension using gopls for coc.nvim. | 3 days ago |
| [Watch](https://github.com/eaburns/Watch) | 192 | Watches for changes in a directory tree and reruns a command in an acme win or just on the terminal. | 6 months ago |
| [goimports-reviser](https://github.com/incu6us/goimports-reviser) | 164 | Right imports sorting & code formatting tool (goimports alternative) | 4 days ago |
| [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) | 87 | Vim compiler plugin for Go (golang) | 6 years ago |
| [go-language-server](https://github.com/theia-ide/go-language-server) | 31 | A Go language server. | 3 years ago |
| [gounit-vim](https://github.com/hexdigest/gounit-vim) | 23 | Vim plugin for https://github.com/hexdigest/gounit | 4 years ago |
| [theia-go-extension](https://github.com/theia-ide/theia-go-extension) | 16 | Theia Go Extension | 3 years ago |
| [vscode-go-doc](https://github.com/msyrus/vscode-go-doc) | 4 | An Microsoft Visual Code extension for Golang to print symbol definition to output | 4 months ago |


### [Go Generate Tools](#Go-Generate-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gotests](https://github.com/cweill/gotests) | 4103 | Automatically generate Go test boilerplate from your source code. | 4 months ago |
| [genny](https://github.com/cheekybits/genny) | 1648 | Elegant generics for Go | a year ago |
| [re2dfa](https://github.com/opennota/re2dfa) | 192 | Transform regular expressions into finite state machines and output Go source code. This repository has migrated to https://gitlab.com/opennota/re2dfa | 4 years ago |
| [xgen](https://github.com/xuri/xgen) | 173 | XSD (XML Schema Definition) parser and Go/C/Java/Rust/TypeScript code generator | 19 days ago |
| [hasgo](https://github.com/DylanMeeus/hasgo) | 119 | Haskell-flavoured functions for Go :smiley: | a year ago |
| [gonerics](https://github.com/bouk/gonerics) | 114 | Generics for go | 8 years ago |
| [gocontracts](https://github.com/Parquery/gocontracts) | 85 | A tool for design-by-contract in Go | 4 years ago |
| [gounit](https://github.com/hexdigest/gounit) | 62 | Unit tests generator for Go programming language | 4 years ago |
| [generic](https://github.com/usk81/generic) | 43 | flexible data type for Go | 2 years ago |
| [godal](https://github.com/mafulong/godal) | 13 | godal provides the ability to generate specific golang code. The godal is to enable developers to write fast code in an expressive way. | 10 months ago |


### [Go Tools](#Go-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-swagger](https://github.com/go-swagger/go-swagger) | 7851 | Swagger 2.0 implementation for go | an hour ago |
| [OctoLinker](https://github.com/OctoLinker/OctoLinker) | 5004 | OctoLinker — Links together, what belongs together | 7 days ago |
| [go-callvis](https://github.com/ofabry/go-callvis) | 4230 | Visualize call graph of a Go program using Graphviz | 8 hours ago |
| [depth](https://github.com/KyleBanks/depth) | 773 | Visualize Go Dependency Trees | 6 months ago |
| [richgo](https://github.com/kyoh86/richgo) | 720 | Enrich `go test` outputs with text decorations. | 2 months ago |
| [rts](https://github.com/galeone/rts) | 231 | RTS: request to struct. Generates Go structs from JSON server responses. | 10 months ago |
| [godbg](https://github.com/tylerwince/godbg) | 185 | Go implementation of the Rust `dbg` macro | 3 years ago |
| [typex](https://github.com/dtgorski/typex) | 151 | [TOOL, CLI] - Filter and examine Go type structures, interfaces and their transitive dependencies and relationships. Export structural types as TypeScript value object or bare type representations. | 4 months ago |
| [gothanks](https://github.com/psampaz/gothanks) | 113 | GoThanks automatically stars Go's official repository and your go.mod github dependencies, providing a simple way  to say thanks to the maintainers of the modules you use and the contributors of Go itself. | a year ago |
| [colorgo](https://github.com/songgao/colorgo) | 110 | Colorize (highlight) `go build` command output | 2 years ago |
| [roumon](https://github.com/becheran/roumon) | 83 | Universal goroutine monitor using pprof and termui  | 3 months ago |
| [go-james](https://github.com/pieterclaerhout/go-james) | 53 | James is your butler and helps you to create, build, debug, test and run your Go projects | 7 months ago |
| [igo](https://github.com/rocketlaunchr/igo) | 51 | Improved Go Syntax (transpiler) | 2 years ago |
| [go-pkg-complete](https://github.com/skelterjohn/go-pkg-complete) | 39 | bash completion for go and wgo | 5 years ago |
| [generator-go-lang](https://github.com/axelspringer/generator-go-lang) | 24 | :guardsman: A teeny tiny and somewhat opinionated generator for your next golang project | 2 years ago |
| [gomodrun](https://github.com/dustinblackman/gomodrun) | 23 | The forgotten go tool that executes and caches binaries included in go.mod files. | a year ago |
| [docs](https://github.com/go-oas/docs) | 11 | Automatically generate RESTful API documentation for GO projects - aligned with Open API Specification standard | a year ago |
| [modver](https://github.com/bobg/modver) | 2 |  | 4 months ago |


### [DevOps Tools](#DevOps-Tools)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [kubernetes](https://github.com/kubernetes/kubernetes) | 90922 | Production-Grade Container Scheduling and Management | 21 minutes ago |
| [moby](https://github.com/moby/moby) | 63713 | Moby Project - a collaborative project for the container ecosystem to assemble container-based systems | 9 hours ago |
| [traefik](https://github.com/traefik/traefik) | 39164 | The Cloud Native Application Proxy | 4 days ago |
| [gitea](https://github.com/go-gitea/gitea) | 31563 | Git with a cup of tea, painless self-hosted git service | 19 minutes ago |
| [vegeta](https://github.com/tsenart/vegeta) | 19975 | HTTP load testing tool and library. It's over 9000! | 20 days ago |
| [hey](https://github.com/rakyll/hey) | 14025 | HTTP load generator, ApacheBench (ab) replacement | 22 days ago |
| [packer](https://github.com/hashicorp/packer) | 13869 | Packer is a tool for creating identical machine images for multiple platforms from a single source configuration. | 6 hours ago |
| [webhook](https://github.com/adnanh/webhook) | 8018 | webhook is a lightweight incoming webhook server to run shell commands | 3 months ago |
| [gvm](https://github.com/moovweb/gvm) | 7628 | Go Version Manager | 5 days ago |
| [gaia](https://github.com/gaia-pipeline/gaia) | 4730 | Build powerful pipelines in any programming language. | 17 days ago |
| [ddosify](https://github.com/ddosify/ddosify) | 4680 | High-performance load testing tool, written in Golang. For distributed and Geo-targeted load testing: Ddosify Cloud - https://ddosify.com 🚀 | 13 days ago |
| [gox](https://github.com/mitchellh/gox) | 4307 | A dead simple, no frills Go cross compile tool | 3 days ago |
| [bombardier](https://github.com/codesenberg/bombardier) | 3660 | Fast cross-platform HTTP benchmarking tool written in Go | 4 months ago |
| [bosun](https://github.com/bosun-monitor/bosun) | 3288 | Time Series Alerting Framework | 16 hours ago |
| [pomerium](https://github.com/pomerium/pomerium) | 3176 | Pomerium is an identity-aware access proxy. | 2 days ago |
| [script](https://github.com/bitfield/script) | 2883 | Making it easy to write shell-like scripts in Go | 2 months ago |
| [kala](https://github.com/ajvb/kala) | 1842 | Modern Job Scheduler | 4 days ago |
| [fac](https://github.com/mkchoi212/fac) | 1761 | Easy-to-use CUI for fixing git conflicts | 13 hours ago |
| [goxc](https://github.com/laher/goxc) | 1680 | a build tool for Go, with a focus on cross-compiling, packaging and deployment | 3 years ago |
| [statusok](https://github.com/sanathp/statusok) | 1553 | Monitor your Website and APIs from your Computer. Get Notified through Slack, E-mail when your server is down or response time is more than expected.  | a year ago |
| [s5cmd](https://github.com/peak/s5cmd) | 1188 | Parallel S3 and local filesystem execution tool. | 11 minutes ago |
| [s3gof3r](https://github.com/rlmcpherson/s3gof3r) | 1120 | Fast, concurrent, streaming access to Amazon S3, including gof3r, a CLI. http://godoc.org/github.com/rlmcpherson/s3gof3r | a year ago |
| [go-selfupdate](https://github.com/sanbornm/go-selfupdate) | 1047 | Enable your Go applications to self update | a year ago |
| [ghorg](https://github.com/gabrie30/ghorg) | 998 | Quickly clone an entire org/users repositories into one directory - Supports GitHub, GitLab, Bitbucket, and more 🥚 | 7 hours ago |
| [skm](https://github.com/TimothyYe/skm) | 790 | A simple and powerful SSH keys manager | a month ago |
| [scaleway-cli](https://github.com/scaleway/scaleway-cli) | 758 | Command Line Interface for Scaleway | 3 days ago |
| [utask](https://github.com/ovh/utask) | 694 | µTask is an automation engine that models and executes business processes declared in yaml. ✏️📋 | 10 days ago |
| [cassowary](https://github.com/rogerwelin/cassowary) | 602 | :rocket: Modern cross-platform HTTP load-testing tool written in Go | 20 days ago |
| [kool](https://github.com/kool-dev/kool) | 602 | From local development to the cloud: development workflow made easy. | 10 days ago |
| [aurora](https://github.com/xuri/aurora) | 564 | Cross-platform beanstalkd queue server admin console. | a year ago |
| [govvv](https://github.com/ahmetb/govvv) | 527 | "go build" wrapper to add version info to Golang applications | 3 years ago |
| [pewpew](https://github.com/bengadbois/pewpew) | 344 | Flexible HTTP command line stress tester for websites and web services | 3 months ago |
| [gonative](https://github.com/inconshreveable/gonative) | 331 | Build Go Toolchains /w native libs for cross-compilation | 6 years ago |
| [jenkins-cli](https://github.com/jenkins-zh/jenkins-cli) | 331 | Jenkins CLI allows you to manage your Jenkins in an easy way. Jenkins 命令行客户端 | 3 days ago |
| [trubka](https://github.com/xitonix/trubka) | 321 | A CLI tool for Kafka | 7 months ago |
| [mora](https://github.com/emicklei/mora) | 302 | MongoDB generic REST server in Go | a year ago |
| [lstags](https://github.com/ivanilves/lstags) | 289 | Explore Docker registries and manipulate Docker images! | 4 months ago |
| [balerter](https://github.com/balerter/balerter) | 273 | Script Based Alerting Manager | 3 days ago |
| [manssh](https://github.com/xwjdsh/manssh) | 267 | Manage your ssh alias configs easily. | 6 months ago |
| [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) | 251 | easyssh-proxy provides a simple implementation of some SSH protocol features in Go | 8 months ago |
| [dogo](https://github.com/liudng/dogo) | 248 | Monitoring changes in the source file and automatically compile and run (restart). | 3 years ago |
| [godbg](https://github.com/sirnewton01/godbg) | 225 | Web-based gdb front-end application | 4 years ago |
| [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) | 212 | OpenAPI Terraform Provider that configures itself at runtime with the resources exposed by the service provider (defined in a swagger file) | 10 days ago |
| [blast](https://github.com/dave/blast) | 206 | Blast is a simple tool for API load testing and batch jobs | 4 years ago |
| [gobrew](https://github.com/cryptojuice/gobrew) | 190 | Shell script to download and set GO environmental paths to allow multiple versions. | 2 years ago |
| [abbreviate](https://github.com/dnnrly/abbreviate) | 182 | Supporting your devops by shortening your strings using common abbreviations and clever guesswork | 10 months ago |
| [kcli](https://github.com/cswank/kcli) | 180 | A kafka command line browser | 3 years ago |
| [ostent](https://github.com/ostrost/ostent) | 173 | Ostent is a server tool to collect, display and report system metrics. | 5 months ago |
| [grapes](https://github.com/yaronsumel/grapes) | 156 | easy way to distribute commands over ssh. | 2 years ago |
| [winrm-cli](https://github.com/masterzen/winrm-cli) | 142 | Command-line tool to remotely execute commands on Windows machines through WinRM | 7 months ago |
| [dockerfile-generator](https://github.com/ozankasikci/dockerfile-generator) | 132 | dfg - Generates dockerfiles based on various input channels.  | 3 months ago |
| [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) | 120 | S3 Reverse Proxy with GET, PUT and DELETE methods and authentication (OpenID Connect and Basic Auth) | 2 days ago |
| [drone-scp](https://github.com/appleboy/drone-scp) | 109 | Copy files and artifacts via SSH using a binary, docker or Drone CI. | 2 months ago |
| [go-furnace](https://github.com/go-furnace/go-furnace) | 90 | Go Hosting Solution for AWS, Google Could and Digital Ocean | 9 months ago |
| [dropship](https://github.com/ChrisMcKenzie/dropship) | 59 | Super simple deployment tool | 4 years ago |
| [drone-jenkins](https://github.com/appleboy/drone-jenkins) | 34 | Drone plugin for trigger Jenkins jobs. | 3 months ago |
| [rodent](https://github.com/alouche/rodent) | 32 | Manage Go Versions/Projects/Dependencies | 5 years ago |
| [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) | 31 | Docker image for building Go binaries with MinGW toolchain | 3 months ago |
| [awsenv](https://github.com/soniah/awsenv) | 29 | AWS environment config loader | 4 years ago |
| [lwc](https://github.com/timdp/lwc) | 27 | A live-updating version of the UNIX wc command. | 13 days ago |
| [depcharge](https://github.com/centerorbit/depcharge) | 22 | DepCharge is a tool designed to help orchestrate the execution of commands across many directories at once. | 8 months ago |
| [httpref](https://github.com/dnnrly/httpref) | 22 | Command line, offline, access to HTTP status code, common header, and port references | 4 months ago |
| [sg](https://github.com/ChristopherRabotin/sg) | 7 | Stress gauge allows one to gauge response times of an HTTP service under stress. | 6 years ago |
| [aptly-fork](https://github.com/smira/aptly-fork) | 5 | aptly - Debian repository management tool (fork of aptly-dev/aptly) | 3 years ago |


### [Other Software](#Other-Software)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [croc](https://github.com/schollz/croc) | 20290 | Easily and securely send things from one computer to another :crocodile: :package: | 2 days ago |
| [restic](https://github.com/restic/restic) | 17447 | Fast, secure, efficient backup program | 9 hours ago |
| [goreplay](https://github.com/buger/goreplay) | 15813 | GoReplay is an open-source tool for capturing and replaying live HTTP traffic into a test environment in order to continuously test your system with real data. It can be used to increase confidence in code deployments, configuration changes and infrastructure changes. | 6 days ago |
| [seaweedfs](https://github.com/seaweedfs/seaweedfs) | 14978 | SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding. | 9 hours ago |
| [comcast](https://github.com/tylertreat/comcast) | 9536 | Simulating shitty network connections so you can build better systems. | 4 months ago |
| [toxiproxy](https://github.com/Shopify/toxiproxy) | 8365 | :alarm_clock: :fire: A TCP proxy to simulate network and system conditions for chaos and resiliency testing | 14 days ago |
| [confd](https://github.com/kelseyhightower/confd) | 7843 | Manage local application configuration files using templates and data from etcd or consul | 6 months ago |
| [liteide](https://github.com/visualfc/liteide) | 6926 | LiteIDE is a simple, open source, cross-platform Go IDE.  | 10 days ago |
| [drive](https://github.com/odeke-em/drive) | 6419 | Google Drive client for the commandline | 2 years ago |
| [nes](https://github.com/fogleman/nes) | 5080 | NES emulator written in Go. | 5 months ago |
| [duplicacy](https://github.com/gilbertchen/duplicacy) | 4206 | A new generation cloud backup tool  | 16 days ago |
| [scc](https://github.com/boyter/scc) | 3665 | Sloc, Cloc and Code: scc is a very fast accurate code counter with complexity calculations and COCOMO estimates written in pure Go | 10 days ago |
| [mylg](https://github.com/mehrdadrad/mylg) | 2581 | Network Diagnostic Tool | 2 years ago |
| [goboy](https://github.com/Humpheh/goboy) | 2455 | Multi-platform Nintendo Game Boy Color emulator written in Go | 3 months ago |
| [sup](https://github.com/pressly/sup) | 2357 | Super simple deployment tool - think of it like 'make' for a network of servers | 8 days ago |
| [lgo](https://github.com/yunabe/lgo) | 2248 | Interactive Go programming with Jupyter | 2 years ago |
| [circuit](https://github.com/gocircuit/circuit) | 1955 | Circuit: Dynamic cloud orchestration http://gocircuit.org | 2 years ago |
| [snap](https://github.com/intelsdi-x/snap) | 1801 | The open telemetry framework | 4 years ago |
| [blocky](https://github.com/0xERR0R/blocky) | 1728 | Fast and lightweight DNS proxy as ad-blocker for local network with many features | 21 hours ago |
| [community](https://github.com/documize/community) | 1638 | Modern Confluence alternative designed for internal & external docs, built with Go + EmberJS | 5 days ago |
| [borg](https://github.com/ok-borg/borg) | 1555 | Search and save shell snippets without leaving your terminal | 5 years ago |
| [shell2http](https://github.com/msoap/shell2http) | 958 | Executing shell commands via HTTP server | 16 hours ago |
| [vflow](https://github.com/edgio/vflow) | 911 |  Enterprise Network Flow Collector (IPFIX, sFlow, Netflow)  | 22 days ago |
| [Go-Package-Store](https://github.com/shurcooL/Go-Package-Store) | 888 | An app that displays updates for the Go packages in your GOPATH. | 2 years ago |
| [peg](https://github.com/pointlander/peg) | 860 | Peg, Parsing Expression Grammar, is an implementation of a Packrat parser generator. | a year ago |
| [leaps](https://github.com/Jeffail/leaps) | 725 | A pair programming service using operational transforms | a year ago |
| [gfile](https://github.com/Antonito/gfile) | 674 | Direct file transfer over WebRTC | a year ago |
| [guora](https://github.com/meloalright/guora) | 598 | 🖖🏻 A self-hosted Quora like web application written in Go  基于 Golang 类似知乎的私有部署问答应用 包含问答、评论、点赞、管理后台等功能 | 2 years ago |
| [gebug](https://github.com/moshebe/gebug) | 593 | Debug Dockerized Go applications better | 3 days ago |
| [gocc](https://github.com/goccmack/gocc) | 535 | Parser / Scanner Generator | 8 months ago |
| [mockingjay-server](https://github.com/quii/mockingjay-server) | 518 | Fake server, Consumer Driven Contracts and help with testing performance from one configuration file with zero system dependencies and no coding whatsoever | 2 months ago |
| [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) | 452 | Go Peerflix | a year ago |
| [ipe](https://github.com/dimiro1/ipe) | 355 | An open source Pusher server implementation compatible with Pusher client libraries written in GO | a year ago |
| [IDE](https://github.com/thestrukture/IDE) | 347 | A Go code editor. With debugging and Autocomplete. 一个 Go 代码编辑器，具有 DEBUGGING 和 AUTOCOMPLETE | 5 days ago |
| [woke](https://github.com/get-woke/woke) | 336 | Detect non-inclusive language in your source code. | 5 days ago |
| [tcpprobe](https://github.com/mehrdadrad/tcpprobe) | 323 | Modern TCP tool and service for network performance observability. | a year ago |
| [wellington](https://github.com/wellington/wellington) | 298 | Spriting that sass has been missing | 2 years ago |
| [cherry](https://github.com/rafael-santiago/cherry) | 281 | A tiny webchat server in Go. | 5 years ago |
| [tcpdog](https://github.com/mehrdadrad/tcpdog) | 196 | eBPF based TCP observability. | a year ago |
| [joincap](https://github.com/assafmo/joincap) | 175 | Merge multiple pcap files together, gracefully. | a year ago |
| [orbit](https://github.com/gulien/orbit) | 169 | :satellite: A cross-platform task runner for executing commands and generating files from templates | 2 years ago |
| [vaku](https://github.com/lingrino/vaku) | 138 | Vaku extends the Vault API & CLI | 3 days ago |
| [dp](https://github.com/scryinfo/dp) | 85 | Scry Data Protocol | 18 days ago |
| [boxed](https://github.com/tejo/boxed) | 77 | dropbox based blog engine, written in go. | 4 years ago |
| [naclpipe](https://github.com/unix4fun/naclpipe) | 22 | NaCL pipe | 4 years ago |
| [term-quiz](https://github.com/crazcalm/term-quiz) | 22 | Terminal Quiz Application Written in Go | 4 years ago |
| [snitch](https://github.com/lucasgomide/snitch) | 15 | Keep updated about all deploys on Tsuru | 4 years ago |
| [GoDocTooltip](https://github.com/diankong/GoDocTooltip) | 12 | A Chrome extension for golang users.When you're at golang's official doc site, it will show function's description as tooltip on function list | 8 months ago |
| [hoofli](https://github.com/dnnrly/hoofli) | 3 | Generate PlantUML diagrams from Chrome or Firefox network inspections | 10 months ago |


## [Resources](#resources)
* Where to discover new Go libraries.

### [Benchmarks](#Benchmarks)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) | 1717 | :zap: Go web framework benchmark | 4 days ago |
| [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) | 1582 | Go HTTP request router and web framework benchmark | 4 months ago |
| [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) | 1335 | Benchmarks of Go serialization methods | 4 months ago |
| [skynet](https://github.com/atemerev/skynet) | 1016 | Skynet 1M threads microbenchmark | 3 months ago |
| [speedtest-resize](https://github.com/fawick/speedtest-resize) | 217 | Compare various Image resize algorithms for the Go language | 2 years ago |
| [go-benchmarks](https://github.com/tylertreat/go-benchmarks) | 144 | A few miscellaneous Go microbenchmarks. | 6 years ago |
| [gospeed](https://github.com/feyeleanor/gospeed) | 110 | Go micro-benchmarks for calculating the speed of language constructs | 2 months ago |
| [autobench](https://github.com/davecheney/autobench) | 93 | Go benchmark harness.  | 8 years ago |
| [golang-sql-benchmark](https://github.com/tyler-smith/golang-sql-benchmark) | 61 | A benchmarking shootout of various db/SQL utilities for Go | 5 months ago |
| [gocostmodel](https://github.com/mna/gocostmodel) | 57 | Benchmarks of common basic operations for the Go language. | a year ago |
| [kvbench](https://github.com/jimrobinson/kvbench) | 24 | Key/Value database benchmark | 3 years ago |
| [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) | 23 | Application for HTTP benchmarking via different rules and configs | 5 years ago |
| [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) | 23 | ⏱ Benchmarks of machine learning inference for Go | 7 months ago |
| [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) | 6 | Benchmark of Golang JSON Libraries | 2 years ago |


### [E-Books](#E-Books)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [GoBooks](https://github.com/dariubs/GoBooks) | 12646 | List of Golang books | 15 days ago |
| [The-Golang-Standard-Library-by-Example](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example) | 8797 | Golang标准库。对于程序员而言，标准库与语言本身同样重要，它好比一个百宝箱，能为各种常见的任务提供完美的解决方案。以示例驱动的方式讲解Golang的标准库。 | 5 months ago |
| [web-dev-golang-anti-textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook) | 3033 | Learn how to write webapps without a framework in Go. | 10 months ago |
| [gosuccinctly](https://github.com/thedevsir/gosuccinctly) | 22 |  This is the companion repo for Go Succinctly by Amir Irani. | 4 years ago |


### [Gophers](#Gophers)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [gophers](https://github.com/egonelbre/gophers) | 2835 | Free gophers | a month ago |
| [gophers](https://github.com/ashleymcnamara/gophers) | 2667 | Gopher Artwork by Ashley McNamara | 3 years ago |
| [free-gophers-pack](https://github.com/MariaLetta/free-gophers-pack) | 2524 | ✨ This pack of 100+ gopher pictures and elements will help you to build own design of almost anything related to Go Programming Language: presentations, posts in blogs or social media, courses, videos and many, many more. | 2 years ago |
| [gophericons](https://github.com/shalakhin/gophericons) | 606 | 34 gopher images for Go developers community | 4 years ago |
| [gopherize.me](https://github.com/matryer/gopherize.me) | 588 | Gopherize.me app | a year ago |
| [gopher-stickers](https://github.com/tenntenn/gopher-stickers) | 535 | gopher stickers | 3 years ago |
| [gopher-logos](https://github.com/GolangUA/gopher-logos) | 106 | adorable gopher logos | a year ago |
| [go-gopher](https://github.com/sillecelik/go-gopher) | 103 | The Go Gopher Amigurumi Pattern | 6 months ago |
| [gophers](https://github.com/rogeralsing/gophers) | 57 | random gopher graphics | 2 years ago |
| [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) | 55 | Go gopher Vector Data [.ai, .svg] | 4 years ago |
| [gophers](https://github.com/scraly/gophers) | 18 | Gopher artwork (Golang mascot) | 5 months ago |


### [Style Guides](#Style-Guides)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cockroach](https://github.com/cockroachdb/cockroach) | 25275 | CockroachDB - the open source, cloud-native distributed SQL database. | 2 hours ago |
| [fabric](https://github.com/hyperledger/fabric) | 13850 | Hyperledger Fabric is an enterprise-grade permissioned distributed ledger framework for developing solutions and applications. Its modular and versatile design satisfies a broad range of industry use cases. It offers a unique approach to consensus that enables performance at scale while preserving privacy. | 14 hours ago |
| [guide](https://github.com/uber-go/guide) | 11918 | The Uber Go Style Guide. | 2 months ago |
| [magnetico](https://github.com/boramalper/magnetico) | 2758 | Autonomous (self-hosted) BitTorrent DHT search engine suite. | 7 months ago |
| [go-styleguide](https://github.com/bahlo/go-styleguide) | 1286 | 🏆 Opinionated Styleguide for the Go language | 4 months ago |


### [Websites](#Websites)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [go](https://github.com/golang/go) | 102536 | The Go programming language | 23 minutes ago |
| [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) | 29198 | A curated list of awesome awesomeness | 4 months ago |
| [awesome-remote-job](https://github.com/lukasz-madon/awesome-remote-job) | 22792 | A curated list of awesome remote jobs and resources. Inspired by https://github.com/vinta/awesome-python | 11 days ago |
| [awesome-golang-workshops](https://github.com/amit-davidson/awesome-golang-workshops) | 466 | A curated list of awesome golang workshops. | a year ago |
| [golang-graphics](https://github.com/mholt/golang-graphics) | 138 | Community-contributed Go graphics files | 7 years ago |
| [gocryforhelp](https://github.com/ninedraft/gocryforhelp) | 40 | List of opensource projects looking for help | 5 years ago |
| [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) | 20 | Parse awesome-go README file and generate a new README file with repo info. | 2 months ago |


### [Tutorials](#Tutorials)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [build-web-application-with-golang](https://github.com/astaxie/build-web-application-with-golang) | 40702 | A golang ebook intro how to build a web with golang | a month ago |
| [go-patterns](https://github.com/tmrts/go-patterns) | 19756 | Curated list of Go design patterns, recipes and idioms | 9 hours ago |
| [learn-go-with-tests](https://github.com/quii/learn-go-with-tests) | 18124 | Learn Go with test-driven development | 6 hours ago |
| [learngo](https://github.com/inancgumus/learngo) | 14002 | 1000+ Hand-Crafted Go Examples, Exercises, and Quizzes | 17 days ago |
| [golang-cheat-sheet](https://github.com/a8m/golang-cheat-sheet) | 6761 | An overview of Go syntax and features. | 2 months ago |
| [go-clean-template](https://github.com/evrone/go-clean-template) | 3378 | Clean Architecture template for Golang services | 6 days ago |
| [golang-for-nodejs-developers](https://github.com/miguelmota/golang-for-nodejs-developers) | 3069 | Examples of Golang compared to Node.js for learning | 4 months ago |
| [ethereum-development-with-go-book](https://github.com/miguelmota/ethereum-development-with-go-book) | 1436 | 📖 A little guide book on Ethereum Development with Go (golang) | 2 months ago |
| [working-with-go](https://github.com/mkaz/working-with-go) | 1161 | A set of example golang code to start learning Go | 3 years ago |
| [goapp](https://github.com/bnkamalesh/goapp) | 498 | An opinionated guideline to structure & develop a Go web application/service | 4 months ago |
| [design-patterns](https://github.com/shubhamzanwar/design-patterns) | 82 | common creational, behavioural and structural patterns implemented in go 🤩 | 2 years ago |
| [go-patterns](https://github.com/haveyoudebuggedit/go-patterns) | 5 |  | a year ago |


