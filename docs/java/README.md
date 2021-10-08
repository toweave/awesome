# Java
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of Java frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Fri Oct 08 2021 17:15:54 GMT+0800 (中国标准时间)
* Synchronize Every Week.
#### Order by alphabetical and star count.

- [Awesome Java](#awesome-java)
  - [Bean Mapping](#bean-mapping)
  - [Bytecode Manipulation](#bytecode-manipulation)
  - [CLI](#cli)
  - [Code Analysis](#code-analysis)
  - [Code Generators](#code-generators)
  - [Computer Vision](#computer-vision)
  - [Configuration](#configuration)
  - [Constraint Satisfaction Problem Solver](#constraint-satisfaction-problem-solver)
  - [CSV](#csv)
  - [Data Structures](#data-structures)
  - [Database](#database)
  - [Date and Time](#date-and-time)
  - [Dependency Injection](#dependency-injection)
  - [Development](#development)
  - [Distributed Applications](#distributed-applications)
  - [Distributed Transactions](#distributed-transactions)
  - [Distribution](#distribution)
  - [Document Processing](#document-processing)
  - [Financial](#financial)
  - [Formal Verification](#formal-verification)
  - [Functional Programming](#functional-programming)
  - [Geospatial](#geospatial)
  - [High Performance](#high-performance)
  - [HTTP Clients](#http-clients)
  - [Hypermedia Types](#hypermedia-types)
  - [Imagery](#imagery)
  - [Introspection](#introspection)
  - [Job Scheduling](#job-scheduling)
  - [JSON](#json)
  - [JVM and JDK](#jvm-and-jdk)
  - [Logging](#logging)
  - [Machine Learning](#machine-learning)
  - [Messaging](#messaging)
  - [Microservice](#microservice)
  - [Miscellaneous](#miscellaneous)
  - [Monitoring](#monitoring)
  - [Native](#native)
  - [Natural Language Processing](#natural-language-processing)
  - [Networking](#networking)
  - [ORM](#orm)
  - [PDF](#pdf)
  - [Performance analysis](#performance-analysis)
  - [Platform](#platform)
    - [Apache Commons](#apache-commons)
    - [Other](#other)
  - [Processes](#processes)
  - [Reactive libraries](#reactive-libraries)
  - [REST Frameworks](#rest-frameworks)
  - [Science](#science)
  - [Search](#search)
  - [Security](#security)
  - [Serialization](#serialization)
  - [Server](#server)
  - [Template Engine](#template-engine)
  - [Testing](#testing)
    - Asynchronous(#asynchronous)
    - BDD(#bdd)
    - Fixtures(#fixtures)
  - [Frameworks](#frameworks)
  - [Matchers](#matchers)
  - [Miscellaneous](#miscellaneous)
  - [Mocking](#mocking)
  - [Utility](#utility)
  - [Version Managers](#version-managers)
  - [Web Crawling](#web-crawling)
  - [Web Frameworks](#web-frameworks)
  - [Resources](#resources)

---

## [Awesome Java](#awesome-java)
* A curated list of awesome Java frameworks, libraries, software and resources.

### [Bean Mapping](#bean-mapping)
* Frameworks that ease bean mapping.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mapstruct](https://github.com/mapstruct/mapstruct) | 4389 | An annotation processor for generating type-safe bean mappers | 17 days ago |
| [modelmapper](https://github.com/modelmapper/modelmapper) | 1850 | Intelligent object mapping | 2 months ago |
| [orika](https://github.com/orika-mapper/orika) | 1092 | Simpler, better and faster Java bean mapping framework | 6 hours ago |
| [selma](https://github.com/xebia-france/selma) | 203 | Selma Java bean mapping that compiles | 2 years ago |
| [jmapper-core](https://github.com/jmapper-framework/jmapper-core) | 171 | Elegance, high performance and robustness all in one java bean mapper | a month ago |
| [remap](https://github.com/remondis-it/remap) | 86 | A declarative mapping library to simplify testable object mappings. | 2 months ago |
| [doov](https://github.com/doov-org/doov) | 62 | dOOv (Domain Object Oriented Validation) a fluent API for type-safe bean validation and mapping | 17 days ago |


### [Bytecode Manipulation](#bytecode-manipulation)
* Libraries to manipulate bytecode programmatically.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bytecode-viewer](https://github.com/Konloch/bytecode-viewer) | 12470 | A Java 8+ Jar & Android APK Reverse Engineering Suite (Decompiler, Editor, Debugger & More) | 6 days ago |
| [cglib](https://github.com/cglib/cglib) | 4173 | cglib - Byte Code Generation Library is high level API to generate and transform Java byte code. It is used by AOP, testing, data access frameworks to generate dynamic proxy objects and intercept field access. | a month ago |
| [javassist](https://github.com/jboss-javassist/javassist) | 3303 | Java bytecode engineering toolkit | 4 days ago |
| [Mixin](https://github.com/SpongePowered/Mixin) | 717 | Mixin is a trait/mixin and bytecode weaving framework for Java using ASM | a month ago |
| [perses](https://github.com/nicolasmanic/perses) | 53 | A project to cause (controlled) destruction on your jvm application  | 2 months ago |


### [CLI](#cli)
* Libraries for everything related to the CLI.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [lanterna](https://github.com/mabe02/lanterna) | 1714 | Java library for creating text-based GUIs | 19 days ago |
| [jline3](https://github.com/jline/jline3) | 940 | JLine is a Java library for handling console input. | 2 days ago |
| [airline](https://github.com/airlift/airline) | 848 | Java annotation-based framework for parsing Git like command line structures | 4 months ago |
| [jansi](https://github.com/fusesource/jansi) | 844 | Jansi is a small java library that allows you to use ANSI escape sequences to format your console output which works even on windows.  | 3 days ago |
| [asciitable](https://github.com/vdmeer/asciitable) | 333 | Several implementations of a text table, originally using ASCII and UTF-8 characters for borders. | 3 years ago |
| [text-io](https://github.com/beryx/text-io) | 240 | A library for creating interactive console applications in Java | a year ago |
| [java-ascii-render](https://github.com/indvd00m/java-ascii-render) | 119 | ASCII renderer in pure java with no external dependencies | a year ago |
| [jbock](https://github.com/jbock-java/jbock) | 55 | Reflectionless command line parser | 14 hours ago |


### [Code Analysis](#code-analysis)
* Tools that provide metrics and quality measurements.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [infer](https://github.com/facebook/infer) | 12633 | A static analyzer for Java, C, C++, and Objective-C | 19 hours ago |
| [checkstyle](https://github.com/checkstyle/checkstyle) | 6263 | Checkstyle is a development tool to help programmers write Java code that adheres to a coding standard. By default it supports the Google Java Style Guide and Sun Code Conventions, but is highly configurable. It can be invoked with an ANT task and a command line program. | 6 hours ago |
| [error-prone](https://github.com/google/error-prone) | 5721 | Catch common Java mistakes as compile-time errors | 2 days ago |
| [pmd](https://github.com/pmd/pmd) | 3569 | An extensible multilanguage static code analyzer. | an hour ago |
| [NullAway](https://github.com/uber/NullAway) | 3007 | A tool to help eliminate NullPointerExceptions (NPEs) in your Java code with low build-time overhead | a month ago |
| [spotbugs](https://github.com/spotbugs/spotbugs) | 2478 | SpotBugs is FindBugs' successor. A tool for static analysis to look for bugs in Java code. | an hour ago |
| [spoon](https://github.com/INRIA/spoon) | 1206 | Spoon is a metaprogramming library to analyze and transform Java source code (up to Java 15). :spoon: is made with :heart:, :beers: and :sparkles:. It parses source files to build a well-designed AST with powerful analysis and transformation API. | 18 hours ago |
| [sonar-java](https://github.com/SonarSource/sonar-java) | 822 | :coffee: SonarSource Static Analyzer for Java Code Quality and Security | 14 hours ago |


### [Code Generators](#code-generators)
* Tools that generate patterns for repetitive code in order to reduce verbosity and error-proneness.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [generator-jhipster](https://github.com/jhipster/generator-jhipster) | 18917 | JHipster is a development platform to quickly generate, develop, & deploy modern web applications & microservice architectures. | 2 hours ago |
| [auto](https://github.com/google/auto) | 9429 | A collection of source code generators for Java. | 12 hours ago |
| [javapoet](https://github.com/square/javapoet) | 9169 | A Java API for generating .java source files. | 8 days ago |
| [FreeBuilder](https://github.com/inferred/FreeBuilder) | 785 | Automatic generation of the Builder pattern for Java | 6 months ago |
| [adt4j](https://github.com/sviperll/adt4j) | 131 | adt4j - Algebraic Data Types for Java | 4 years ago |


### [Computer Vision](#computer-vision)
* Libraries which seek to gain high level information from images and videos.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [javacv](https://github.com/bytedeco/javacv) | 5385 | Java interface to OpenCV, FFmpeg, and more | 16 days ago |


### [Configuration](#configuration)
* Libraries that provide external configuration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [config](https://github.com/lightbend/config) | 5400 | configuration library for JVM languages using HOCON files | 22 days ago |
| [owner](https://github.com/matteobaccan/owner) | 825 | Get rid of the boilerplate code in properties based configuration. | a month ago |
| [cfg4j](https://github.com/cfg4j/cfg4j) | 533 | Modern configuration library for distributed apps written in Java. | a year ago |
| [centraldogma](https://github.com/line/centraldogma) | 418 | Highly-available version-controlled service configuration repository based on Git, ZooKeeper and HTTP/2 | 7 hours ago |
| [Configurate](https://github.com/SpongePowered/Configurate) | 187 | A simple configuration library for Java applications providing a node structure, a variety of formats, and tools for transformation | a month ago |
| [kaconf](https://github.com/mariomac/kaconf) | 50 | KickAss Configuration. An annotation-based configuration system for Java and Kotlin | 2 years ago |
| [dotenv](https://github.com/shyiko/dotenv) | 37 | A twelve-factor configuration (12factor.net/config) library for Java 8+ | 4 years ago |


### [Constraint Satisfaction Problem Solver](#constraint-satisfaction-problem-solver)
* Libraries that help with implementing optimization and satisfiability problems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jacop](https://github.com/radsz/jacop) | 184 | Java Constraint Programming solver | 3 months ago |


### [CSV](#csv)
* Frameworks and libraries that simplify reading/writing CSV data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [univocity-parsers](https://github.com/uniVocity/univocity-parsers) | 809 | uniVocity-parsers is a suite of extremely fast and reliable parsers for Java. It provides a consistent interface for handling different file formats, and a solid framework for the development of new parsers. | 4 months ago |
| [FastCSV](https://github.com/osiegmar/FastCSV) | 333 | High performance CSV reader and writer for Java. | 4 days ago |


### [Data Structures](#data-structures)
* Efficient and specific data structures.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [protobuf](https://github.com/protocolbuffers/protobuf) | 51032 | Protocol Buffers - Google's data interchange format | 10 hours ago |
| [wire](https://github.com/square/wire) | 3609 | gRPC and protocol buffers for Android, Kotlin, and Java. | 17 hours ago |
| [simple-binary-encoding](https://github.com/real-logic/simple-binary-encoding) | 2511 | Simple Binary Encoding (SBE) - High Performance Message Codec | 17 hours ago |
| [tape](https://github.com/square/tape) | 2402 | A lightning fast, transactional, file-based FIFO for Android and Java. | 10 months ago |
| [RoaringBitmap](https://github.com/RoaringBitmap/RoaringBitmap) | 2381 | A better compressed bitset in Java | 5 minutes ago |
| [pcollections](https://github.com/hrldcpr/pcollections) | 680 | A Persistent Java Collections Library | 10 months ago |
| [bigqueue](https://github.com/bulldog2011/bigqueue) | 479 | A big, fast and persistent queue based on memory mapped file. | 5 days ago |
| [HyperMinHash-java](https://github.com/LiveRamp/HyperMinHash-java) | 43 | Union, intersection, and set cardinality in loglog space | 8 months ago |


### [Database](#database)
* Everything that simplifies interactions with the database.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [redisson](https://github.com/redisson/redisson) | 17500 | Redisson - Redis Java client with features of In-Memory Data Grid. Over 50 Redis based Java objects and services: Set, Multimap, SortedSet, Map, List, Queue, Deque, Semaphore, Lock, AtomicLong, Map Reduce, Publish / Subscribe, Bloom filter, Spring Cache, Tomcat, Scheduler, JCache API, Hibernate, MyBatis, RPC, local cache ... | 2 days ago |
| [HikariCP](https://github.com/brettwooldridge/HikariCP) | 15826 | 光 HikariCP・A solid, high-performance, JDBC connection pool at last. | 18 days ago |
| [realm-java](https://github.com/realm/realm-java) | 11210 | Realm is a mobile database: a replacement for SQLite & ORMs | 7 days ago |
| [jedis](https://github.com/redis/jedis) | 10063 | A blazingly small and sane redis java client | 3 days ago |
| [Leaf](https://github.com/Meituan-Dianping/Leaf) | 4929 | Distributed ID Generate Service | 3 months ago |
| [requery](https://github.com/requery/requery) | 3053 | requery - modern SQL based query & persistence for Java / Kotlin / Android | 2 years ago |
| [Chronicle-Map](https://github.com/OpenHFT/Chronicle-Map) | 2257 | Replicate your Key Value Store across your network, with consistency, persistance and performance. | a day ago |
| [Jest](https://github.com/searchbox-io/Jest) | 2075 | Elasticsearch Java Rest Client. | 4 months ago |
| [speedment](https://github.com/speedment/speedment) | 1955 | Speedment is a Stream ORM Java Toolkit and Runtime | 9 days ago |
| [xodus](https://github.com/JetBrains/xodus) | 926 | Transactional schema-less embedded database used by JetBrains YouTrack and JetBrains Hub. | 4 days ago |
| [flexy-pool](https://github.com/vladmihalcea/flexy-pool) | 896 | FlexyPool adds metrics and failover strategies to a given Connection Pool, allowing it to resize on demand. | 2 months ago |
| [MariaDB4j](https://github.com/vorburger/MariaDB4j) | 630 | MariaDB Embedded in Java JAR | 12 days ago |
| [Jinq](https://github.com/my2iu/Jinq) | 623 | LINQ-style queries for Java 8 | 6 months ago |
| [exist](https://github.com/eXist-db/exist) | 318 | eXist Native XML Database and Application Platform | 17 hours ago |
| [arangodb-java-driver](https://github.com/arangodb/arangodb-java-driver) | 181 | The official ArangoDB Java driver. | 7 days ago |
| [jetcd](https://github.com/justinsb/jetcd) | 133 | Java binding for etcd | 7 months ago |
| [modality](https://github.com/arkanovicz/modality) | 10 | Model Layer Implementation for a J2EE Pull MVC WebApp | 5 days ago |
| [querystream](https://github.com/querystream/querystream) | 2 | Build JPA Criteria queries using a Stream-like API | 4 months ago |


### [Date and Time](#date-and-time)
* Libraries related to handling date and time.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ical4j](https://github.com/ical4j/ical4j) | 536 | A Java library for parsing and building iCalendar data models | 10 days ago |
| [Time4J](https://github.com/MenoData/Time4J) | 345 | Advanced date, time and interval library for Java with sun/moon-astronomy and calendars like Chinese, Coptic, Ethiopian, French Republican, Hebrew, Hijri, Historic Christian, Indian National, Japanese, Julian, Korean, Minguo, Persian, Thai, Vietnamese | 3 months ago |
| [threeten-extra](https://github.com/ThreeTen/threeten-extra) | 316 | Provides additional date-time classes that complement those in JDK 8 | 2 months ago |


### [Dependency Injection](#dependency-injection)
* Libraries that help to realize the [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) paradigm.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [guice](https://github.com/google/guice) | 10456 | Guice (pronounced 'juice') is a lightweight dependency injection framework for Java 6 and above, brought to you by Google. | 9 hours ago |
| [governator](https://github.com/Netflix/governator) | 797 | Governator is a library of extensions and utilities that enhance Google Guice to provide: classpath scanning and automatic binding, lifecycle management, configuration to field mapping, field validation and parallelized object warmup. | 16 days ago |
| [feather](https://github.com/zsoltherpai/feather) | 321 | Lightweight dependency injection for Java and Android (JSR-330) | 3 years ago |
| [jaywire](https://github.com/vanillasource/jaywire) | 49 | JayWire Dependency Injection | 5 months ago |


### [Development](#development)
* Augmentation of the development process at a fundamental level.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [javaparser](https://github.com/javaparser/javaparser) | 3864 | Java 1-15 Parser and Abstract Syntax Tree for Java, including preview features to Java 13 | 10 hours ago |
| [HotswapAgent](https://github.com/HotswapProjects/HotswapAgent) | 1694 | Java unlimited redefinition of classes at runtime. | 3 months ago |
| [manifold](https://github.com/manifold-systems/manifold) | 1105 | Manifold is a Java compiler plugin, its features include Metaprogramming, Properties, Extension Methods, Operator Overloading, Templates, a Preprocessor, and more. | 6 days ago |
| [javasymbolsolver](https://github.com/javaparser/javasymbolsolver) | 280 | *old repository* --> this is now integrated in https://github.com/javaparser/javaparser | 4 years ago |
| [faux-pas](https://github.com/zalando/faux-pas) | 108 | A library that simplifies error handling for Functional Programming in Java | 5 hours ago |
| [sneakythrow](https://github.com/rainerhahnekamp/sneakythrow) | 66 | SneakyThrow is a Java library to ignore checked exceptions | 2 years ago |


### [Distributed Applications](#distributed-applications)
* Libraries and frameworks for writing distributed and fault-tolerant applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zuul](https://github.com/Netflix/zuul) | 11378 | Zuul is a gateway service that provides dynamic routing, monitoring, resiliency, security, and more. | 10 days ago |
| [resilience4j](https://github.com/resilience4j/resilience4j) | 7335 | Resilience4j is a fault tolerance library designed for Java8 and functional programming | 19 hours ago |
| [hazelcast](https://github.com/hazelcast/hazelcast) | 4559 |  Open-source distributed computation and storage platform | 23 minutes ago |
| [failsafe](https://github.com/failsafe-lib/failsafe) | 3460 | Fault tolerance and resilience patterns for the JVM | 8 days ago |
| [scalecube-services](https://github.com/scalecube/scalecube-services) | 513 | a microservices library - scalecube-services is a high throughput, low latency reactive microservices library built to scale. it features: API-Gateways, service-discovery, service-load-balancing, the architecture supports plug-and-play service communication modules and features. built to provide performance and low-latency real-time stream-processing. its open and designed to accommodate changes. (no sidecar in a form of broker or any kind) | 21 days ago |
| [dropwizard-circuitbreaker](https://github.com/mtakaki/dropwizard-circuitbreaker) | 40 | A circuit breaker design pattern for dropwizard | 2 years ago |


### [Distributed Transactions](#distributed-transactions)
* Distributed transactions provide a mechanism for ensuring consistency of data updates in the presence of concurrent access and partial failures.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [seata](https://github.com/seata/seata) | 20890 | :fire: Seata is an easy-to-use, high-performance, open source distributed transaction solution. | 2 minutes ago |
| [btm](https://github.com/bitronix/btm) | 395 | JTA Transaction Manager | a year ago |


### [Distribution](#distribution)
* Tools that handle the distribution of applications in native formats.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [packr](https://github.com/libgdx/packr) | 2253 | Packages your JAR, assets and a JVM for distribution on Windows, Linux and Mac OS X | 20 days ago |
| [capsule](https://github.com/puniverse/capsule) | 1144 | Dead-Simple Packaging and Deployment for JVM Apps | 2 months ago |
| [getdown](https://github.com/threerings/getdown) | 436 | Download, Install, Update | a month ago |
| [JavaPackager](https://github.com/fvarrui/JavaPackager) | 393 | :package: Gradle/Maven plugin to package Java applications as native Windows, Mac OS X, or GNU/Linux executables and create installers for them. | 4 days ago |
| [artipie](https://github.com/artipie/artipie) | 239 | Binary Artifact Management Tool | 19 minutes ago |
| [really-executable-jars-maven-plugin](https://github.com/brianm/really-executable-jars-maven-plugin) | 99 | maven plugin for making chmod +x jar files | 5 years ago |
| [jlink.online](https://github.com/cilki/jlink.online) | 1 |  Build optimized Java runtimes in your browser! | a year ago |


### [Document Processing](#document-processing)
* Libraries that assist with processing office document formats.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fastexcel](https://github.com/dhatim/fastexcel) | 330 | Generate and read big Excel files quickly | a month ago |
| [zerocell](https://github.com/creditdatamw/zerocell) | 57 | Simple, efficient Excel to POJO library for Java  | 3 months ago |


### [Financial](#financial)
* Libraries related to the financial domain.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ta4j](https://github.com/ta4j/ta4j) | 1192 | A Java library for technical analysis. | 2 months ago |
| [stripe-java](https://github.com/stripe/stripe-java) | 563 | Java library for the Stripe API.     | 11 hours ago |
| [parity](https://github.com/paritytrading/parity) | 489 | Open source software platform for trading venues | 6 months ago |
| [philadelphia](https://github.com/paritytrading/philadelphia) | 245 | Fast FIX protocol implementation for the JVM | 3 days ago |
| [connect-java-sdk](https://github.com/square/connect-java-sdk) | 37 | Java client library for the Square Connect v2 API | 9 months ago |


### [Formal Verification](#formal-verification)
* Formal-methods tools: proof assistants, model checking, symbolic execution, etc.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jpf-core](https://github.com/javapathfinder/jpf-core) | 324 | JPF is an extensible software analysis framework for Java bytecode. jpf-core is the basis for all JPF projects; you always need to install it. It contains the basic VM and model checking infrastructure, and can be used to check for concurrency defects like deadlocks, and unhandled exceptions like NullPointerExceptions and AssertionErrors. | 17 days ago |
| [janala2](https://github.com/ksen007/janala2) | 81 | a concolic testing engine for Java | 4 years ago |


### [Functional Programming](#functional-programming)
* Libraries that facilitate functional programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jOOL](https://github.com/jOOQ/jOOL) | 1861 | jOOλ - The Missing Parts in Java 8 jOOλ improves the JDK libraries in areas where the Expert Group's focus was elsewhere. It adds tuple support, function support, and a lot of additional functionality around sequential Streams. The JDK 8's main efforts (default methods, lambdas, and the Stream API) were focused around maintaining backwards compatibility and implementing a functional API for parallelism. | 4 months ago |
| [streamex](https://github.com/amaembo/streamex) | 1733 | Enhancing Java Stream API | 2 months ago |
| [cyclops](https://github.com/aol/cyclops) | 1197 | An advanced, but easy to use, platform for writing functional applications in Java 8. | 2 months ago |
| [derive4j](https://github.com/derive4j/derive4j) | 521 | Java 8 annotation processor and framework for deriving algebraic data types constructors, pattern-matching, folds, optics and typeclasses. | 2 months ago |
| [protonpack](https://github.com/poetix/protonpack) | 444 | Stream utilities for Java 8 | a year ago |


### [Geospatial](#geospatial)
* Libraries for working with geospatial data and algorithms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphhopper](https://github.com/graphhopper/graphhopper) | 3379 | Open source routing engine for OpenStreetMap. Use it as Java library or server. | an hour ago |
| [mapsforge](https://github.com/mapsforge/mapsforge) | 924 | Vector map library and writer - running on Android and Desktop. | 16 hours ago |
| [spatial4j](https://github.com/locationtech/spatial4j) | 797 | LocationTech Spatial4j: A Geospatial Library for Java | 7 hours ago |
| [geo](https://github.com/davidmoten/geo) | 352 | Geohash utitlies in java | 10 days ago |


### [High Performance](#high-performance)
* Everything about high-performance computation, from collections to specific libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [JCTools](https://github.com/JCTools/JCTools) | 2788 |  | 3 months ago |
| [agrona](https://github.com/real-logic/agrona) | 2048 | High Performance data structures and utility methods for Java | 19 minutes ago |
| [eclipse-collections](https://github.com/eclipse/eclipse-collections) | 1779 | Eclipse Collections is a collections framework for Java with optimized data structures and a rich, functional and fluent API. | 2 days ago |
| [Koloboke](https://github.com/leventov/Koloboke) | 933 | Java Collections till the last breadcrumb of memory and performance | 5 years ago |


### [HTTP Clients](#http-clients)
* Libraries that assist with creating HTTP requests and/or binding responses.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [feign](https://github.com/OpenFeign/feign) | 7463 | Feign makes writing java http clients easier | 10 days ago |
| [async-http-client](https://github.com/AsyncHttpClient/async-http-client) | 5832 | Asynchronous Http and WebSocket Client library for Java  | a month ago |
| [ribbon](https://github.com/Netflix/ribbon) | 4071 | Ribbon is a Inter Process Communication (remote procedure calls) library with built in software load balancers. The primary usage model involves REST calls with various serialization scheme support. | 9 days ago |
| [unirest-java](https://github.com/Kong/unirest-java) | 2183 | Unirest in Java: Simplified, lightweight HTTP client library. | 24 days ago |
| [google-http-java-client](https://github.com/googleapis/google-http-java-client) | 1195 | Google HTTP Client Library for Java | 11 hours ago |
| [riptide](https://github.com/zalando/riptide) | 199 | Client-side response routing for Spring | 5 hours ago |
| [methanol](https://github.com/mizosoft/methanol) | 110 | ⚗️ Lightweight HTTP extensions for Java | 9 days ago |
| [restQL-java](https://github.com/b2wdigital/restQL-java) | 41 | Microservice query language | 9 months ago |


### [Hypermedia Types](#hypermedia-types)
* Libraries that handle serialization to hypermedia types.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jsonld-java](https://github.com/jsonld-java/jsonld-java) | 345 | JSON-LD implementation for Java | 2 months ago |
| [siren4j](https://github.com/eserating-chwy/siren4j) | 21 | Java library for the Siren Hypermedia Type Specification | 4 years ago |
| [hate](https://github.com/blackdoor/hate) | 17 | HATEOAS with HAL for Java | a year ago |


### [Imagery](#imagery)
* Libraries that assist with the creation, evaluation or manipulation of graphical images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zxing](https://github.com/zxing/zxing) | 28455 | ZXing ("Zebra Crossing") barcode scanning library for Java, Android | 2 hours ago |
| [thumbnailator](https://github.com/coobird/thumbnailator) | 3777 | Thumbnailator - a thumbnail generation library for Java | 25 days ago |
| [TwelveMonkeys](https://github.com/haraldk/TwelveMonkeys) | 1331 | TwelveMonkeys ImageIO: Additional plug-ins and extensions for Java's ImageIO | 17 days ago |
| [imgscalr](https://github.com/rkalla/imgscalr) | 1085 | Simple Java image-scaling library implementing Chris Campbell's incremental scaling algorithm as well as Java2D's "best-practices" image-scaling techniques. | a month ago |
| [tess4j](https://github.com/nguyenq/tess4j) | 1051 | Java JNA wrapper for Tesseract OCR API | 13 days ago |
| [image-comparison](https://github.com/romankh3/image-comparison) | 169 | Published on Maven Central Java Library that compares 2 images with the same sizes and shows the differences visually by drawing rectangles. Some parts of the image can be excluded from the comparison. Can be used for automation QA tests. | 5 months ago |


### [Introspection](#introspection)
* Libraries that help make the Java introspection and reflection API easier and faster to use.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [reflections](https://github.com/ronmamo/reflections) | 3849 | Java runtime metadata analysis | 18 hours ago |
| [jOOR](https://github.com/jOOQ/jOOR) | 2493 |  jOOR - Fluent Reflection in Java jOOR is a very simple fluent API that gives access to your Java Class structures in a more intuitive way. The JDK's reflection APIs are hard and verbose to use. Other languages have much simpler constructs to access type meta information at runtime. Let us make Java reflection better. | 2 months ago |
| [classgraph](https://github.com/classgraph/classgraph) | 2097 | An uber-fast parallelized Java classpath scanner and module scanner. | 2 hours ago |
| [reflectasm](https://github.com/EsotericSoftware/reflectasm) | 1260 | High performance Java reflection | a year ago |


### [Job Scheduling](#job-scheduling)
* Libraries for scheduling background jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [quartz](https://github.com/quartz-scheduler/quartz) | 4654 | Code for Quartz Scheduler | 2 days ago |
| [ShedLock](https://github.com/lukas-krecan/ShedLock) | 2034 | Distributed lock for your scheduled tasks | 18 hours ago |
| [jobrunr](https://github.com/jobrunr/jobrunr) | 567 | An extremely easy way to perform background processing in Java. Backed by persistent storage. Open and free for commercial use. | 23 days ago |
| [easy-batch](https://github.com/j-easy/easy-batch) | 525 | The simple, stupid batch framework for Java | 4 months ago |
| [db-scheduler](https://github.com/kagkarlsson/db-scheduler) | 447 | Persistent cluster-friendly scheduler for Java | 8 days ago |
| [Sundial](https://github.com/knowm/Sundial) | 237 | A Light-weight Job Scheduling Framework | a month ago |
| [Wisp](https://github.com/Coreoz/Wisp) | 74 | A simple Java Scheduler library with a minimal footprint and a straightforward API | 4 months ago |


### [JSON](#json)
* Libraries for serializing and deserializing JSON to and from Java objects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fastjson](https://github.com/alibaba/fastjson) | 23806 | A fast JSON parser/generator for Java.   | 5 days ago |
| [gson](https://github.com/google/gson) | 20112 | A Java serialization/deserialization library to convert Java Objects into JSON and back | 16 hours ago |
| [moshi](https://github.com/square/moshi) | 7662 | A modern JSON library for Kotlin and Java. | 13 days ago |
| [jackson](https://github.com/FasterXML/jackson) | 6910 | Main Portal page for the Jackson project | 15 days ago |
| [JsonPath](https://github.com/json-path/JsonPath) | 6314 | Java JsonPath implementation | 7 days ago |
| [LoganSquare](https://github.com/bluelinelabs/LoganSquare) | 3240 | Screaming fast JSON parsing and serialization library for Android. | a year ago |
| [jolt](https://github.com/bazaarvoice/jolt) | 1115 | JSON to JSON transformation library written in Java. | a month ago |
| [dsl-json](https://github.com/ngs-doo/dsl-json) | 751 | High performance JVM JSON library | 21 days ago |
| [HikariJSON](https://github.com/brettwooldridge/HikariJSON) | 440 | High-performance JSON parser | 5 years ago |
| [jackson-modules-java8](https://github.com/FasterXML/jackson-modules-java8) | 336 | Set of support modules for Java 8 datatypes (Optionals, date/time) and features (parameter names) | 7 days ago |
| [json-io](https://github.com/jdereg/json-io) | 280 | Convert Java to JSON. Convert JSON to Java.  Pretty print JSON.  Java JSON serializer. | 22 days ago |
| [JsonSurfer](https://github.com/jsurfer/JsonSurfer) | 226 | A streaming JsonPath processor in Java | a month ago |
| [jackson-datatype-money](https://github.com/zalando/jackson-datatype-money) | 183 | Extension module to properly support datatypes of javax.money | 5 hours ago |
| [yasson](https://github.com/eclipse-ee4j/yasson) | 168 | Eclipse Yasson project | 22 days ago |


### [JVM and JDK](#jvm-and-jdk)
* Current implementations of the JVM/JDK.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graal](https://github.com/oracle/graal) | 16017 | GraalVM: Run Programs Faster Anywhere :rocket: | 2 minutes ago |
| [dragonwell8](https://github.com/alibaba/dragonwell8) | 3349 | Alibaba Dragonwell8 JDK | 8 days ago |
| [openj9](https://github.com/eclipse-openj9/openj9) | 2755 | Eclipse OpenJ9: A Java Virtual Machine for OpenJDK that's optimized for small footprint, fast start-up, and high throughput.   Builds on Eclipse OMR (https://github.com/eclipse/omr) and combines with the Extensions for OpenJDK for OpenJ9 repo. | 7 minutes ago |
| [avian](https://github.com/ReadyTalk/avian) | 1199 | [INACTIVE] Avian is a lightweight virtual machine and class library designed to provide a useful subset of Java's features, suitable for building self-contained applications. | 8 months ago |
| [CodenameOne](https://github.com/codenameone/CodenameOne) | 1099 | Cross-platform framework for building truly native mobile apps with Java or Kotlin. Write Once Run Anywhere support for iOS, Android, Desktop & Web. | 17 minutes ago |


### [Logging](#logging)
* Libraries that log the behavior of an application.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [p6spy](https://github.com/p6spy/p6spy) | 1521 | P6Spy is a framework that enables database data to be seamlessly intercepted and logged with no code changes to the application. | 2 months ago |
| [logbook](https://github.com/zalando/logbook) | 987 | An extensible Java library for HTTP request and response logging | 5 hours ago |
| [opentracing-toolbox](https://github.com/zalando/opentracing-toolbox) | 174 | Best-of-breed OpenTracing utilities, instrumentations and extensions | 5 hours ago |


### [Machine Learning](#machine-learning)
* Tools that provide specific statistical algorithms for learning from data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [smile](https://github.com/haifengl/smile) | 5359 | Statistical Machine Intelligence & Learning Engine | a month ago |
| [oryx](https://github.com/OryxProject/oryx) | 1773 | Oryx 2: Lambda architecture on Apache Spark, Apache Kafka for real-time large scale machine learning | 2 months ago |
| [siddhi](https://github.com/siddhi-io/siddhi) | 1250 | Stream Processing and Complex Event Processing Engine | 4 days ago |
| [JSAT](https://github.com/EdwardRaff/JSAT) | 709 | Java Statistical Analysis Tool, a Java library for Machine Learning  | 5 months ago |


### [Messaging](#messaging)
* Tools that help send messages between clients to ensure protocol independency.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [EventBus](https://github.com/greenrobot/EventBus) | 23642 | Event bus for Android and Java that simplifies communication between Activities, Fragments, Threads, Services, etc. Less code, better quality. | 8 days ago |
| [aeron](https://github.com/real-logic/aeron) | 5695 | Efficient reliable UDP unicast, UDP multicast, and IPC message transport | an hour ago |
| [Smack](https://github.com/igniterealtime/Smack) | 2255 | A modular and portable open source XMPP client library written in Java for Android and Java (SE) VMs | 3 days ago |
| [jeromq](https://github.com/zeromq/jeromq) | 2067 | Pure Java ZeroMQ  | 9 days ago |
| [rabbitmq-java-client](https://github.com/rabbitmq/rabbitmq-java-client) | 1019 | RabbitMQ Java client | 3 days ago |
| [nakadi](https://github.com/zalando/nakadi) | 780 | A distributed event bus that implements a RESTful API abstraction on top of Kafka-like queues | 2 days ago |
| [nats.java](https://github.com/nats-io/nats.java) | 363 | Java client for NATS | 2 days ago |


### [Microservice](#microservice)
* Tools for creating and managing microservices.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [Sentinel](https://github.com/alibaba/Sentinel) | 17463 | A powerful flow control component enabling reliability, resilience and monitoring for microservices. (面向云原生微服务的高可用流控防护组件) | 7 days ago |
| [eureka](https://github.com/Netflix/eureka) | 10774 | AWS Service registry for resilient mid-tier load balancing and failover. | 8 days ago |
| [armeria](https://github.com/line/armeria) | 3305 | Your go-to microservice framework for any situation, from the creator of Netty et al. You can build any type of microservice leveraging your favorite technologies,  including gRPC, Thrift, Kotlin, Retrofit, Reactive Streams, Spring Boot and Dropwizard. | a day ago |
| [consul-api](https://github.com/Ecwid/consul-api) | 383 | Java client for Consul HTTP API | 14 days ago |


### [Miscellaneous](#miscellaneous)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [java-design-patterns](https://github.com/iluwatar/java-design-patterns) | 70379 | Design patterns implemented in Java | a day ago |
| [FizzBuzzEnterpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) | 15551 | FizzBuzz Enterprise Edition is a no-nonsense implementation of FizzBuzz made by serious businessmen for serious business purposes. | 5 months ago |
| [java8-tutorial](https://github.com/winterbe/java8-tutorial) | 15081 | Modern Java - A Guide to Java 8 | a month ago |
| [j2objc](https://github.com/google/j2objc) | 5832 | A Java to iOS Objective-C translation tool and runtime. | 7 days ago |
| [OctoLinker](https://github.com/OctoLinker/OctoLinker) | 4818 | OctoLinker — Links together, what belongs together | a day ago |
| [jimfs](https://github.com/google/jimfs) | 2049 | An in-memory file system for Java 7+ | 10 days ago |
| [maven-wrapper](https://github.com/takari/maven-wrapper) | 1548 | The easiest way to integrate Maven into your project! | 6 days ago |
| [cqengine](https://github.com/npgall/cqengine) | 1414 | Ultra-fast SQL-like queries on Java collections | 15 days ago |
| [jsweet](https://github.com/cincheo/jsweet) | 1225 | A Java to JavaScript transpiler. | 17 days ago |
| [jbot](https://github.com/rampatra/jbot) | 1166 | Make Slack and Facebook Bots in Java. | 8 months ago |
| [ff4j](https://github.com/ff4j/ff4j) | 980 | Feature Flags for Java made easy | 5 days ago |
| [simple-java-mail](https://github.com/bbottema/simple-java-mail) | 899 | Simple API, Complex Emails (JavaMail smtp wrapper) | 3 months ago |
| [polyglot-maven](https://github.com/takari/polyglot-maven) | 776 | Support alternative markup for Apache Maven POM files | 4 months ago |
| [typetools](https://github.com/jhalterman/typetools) | 533 | Tools for working with generic types | 16 days ago |
| [service-proxy](https://github.com/membrane/service-proxy) | 360 | API gateway for REST and SOAP written in Java. | 2 months ago |
| [smooks](https://github.com/smooks/smooks) | 317 | Extensible data integration Java framework for building XML and non-XML fragment-based applications  | 4 days ago |
| [modernizer-maven-plugin](https://github.com/gaul/modernizer-maven-plugin) | 285 | Detect uses of legacy Java APIs | a month ago |
| [PipelinR](https://github.com/sizovs/PipelinR) | 180 | PipelinR is a lightweight command processing pipeline ❍ ⇢ ❍ ⇢ ❍ for your Java awesome app.  | 7 months ago |
| [yGuard](https://github.com/yWorks/yGuard) | 160 | The open-source Java obfuscation tool working with Ant and Gradle by yWorks - the diagramming experts | 2 days ago |
| [MinimalFTP](https://github.com/Guichaguri/MinimalFTP) | 105 | A lightweight, simple FTP server. Pure Java, no dependencies. | a year ago |
| [xmlbeam](https://github.com/SvenEwald/xmlbeam) | 67 | Java XML library. A really cool one. Obviously. | 2 months ago |


### [Monitoring](#monitoring)
* Tools that monitor applications in production.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [pinpoint](https://github.com/pinpoint-apm/pinpoint) | 11738 | APM, (Application Performance Management) tool for large-scale distributed systems.  | 2 hours ago |
| [metrics](https://github.com/dropwizard/metrics) | 7433 | :chart_with_upwards_trend: Capturing JVM- and application-level metrics. So you know what's going on. | 13 hours ago |
| [javamelody](https://github.com/javamelody/javamelody) | 2455 | JavaMelody : monitoring of JavaEE applications | a month ago |
| [stagemonitor](https://github.com/stagemonitor/stagemonitor) | 1660 | an open source solution to application performance monitoring for java server applications | a month ago |
| [jmxtrans](https://github.com/jmxtrans/jmxtrans) | 1657 | jmxtrans | a month ago |
| [client_java](https://github.com/prometheus/client_java) | 1604 | Prometheus instrumentation library for JVM applications | 5 days ago |
| [automon](https://github.com/stevensouza/automon) | 548 | Automon combines the power of AOP (AspectJ) with monitoring or logging tools you already use to declaratively monitor your Java code, the JDK, and 3rd party libraries. | 9 months ago |
| [jaeger-client-java](https://github.com/jaegertracing/jaeger-client-java) | 471 | Jaeger Bindings for Java OpenTracing API | 5 days ago |
| [dd-trace-java](https://github.com/DataDog/dd-trace-java) | 266 | Datadog APM client for Java | 3 minutes ago |
| [Sysmon](https://github.com/palantir/Sysmon) | 151 | A lightweight platform monitoring tool for Java VMs | 5 years ago |
| [nudge4j](https://github.com/lorenzoongithub/nudge4j) | 146 | Get inside your JVM | a year ago |
| [failsafe-actuator](https://github.com/zalando/failsafe-actuator) | 49 | Endpoint library for the failsafe framework | 17 days ago |
| [sematext-agent-java](https://github.com/sematext/sematext-agent-java) | 16 | Sematext Monitoring Agent | 8 days ago |


### [Native](#native)
* For working with platform-specific native libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jna](https://github.com/java-native-access/jna) | 6779 | Java Native Access | 16 hours ago |
| [javacpp](https://github.com/bytedeco/javacpp) | 3619 | The missing bridge between Java and native C++ | 2 days ago |
| [jnr-ffi](https://github.com/jnr/jnr-ffi) | 920 | Java Abstracted Foreign Function Layer | 22 days ago |
| [aparapi](https://github.com/Syncleus/aparapi) | 377 | The New Official Aparapi: a framework for executing native Java and Scala code on the GPU. | 2 months ago |


### [Natural Language Processing](#natural-language-processing)
* Libraries that specialize in processing text.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cogcomp-nlp](https://github.com/CogComp/cogcomp-nlp) | 424 | CogComp's Natural Language Processing libraries and Demos:  | 2 months ago |


### [Networking](#networking)
* Libraries for building network servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dubbo](https://github.com/apache/dubbo) | 36245 | Apache Dubbo is a high-performance, java based, open source RPC framework. | an hour ago |
| [grpc-java](https://github.com/grpc/grpc-java) | 9120 | The Java gRPC implementation. HTTP/2 based RPC | 10 hours ago |
| [sshj](https://github.com/hierynomus/sshj) | 1979 | ssh, scp and sftp for java | 3 days ago |
| [kryonet](https://github.com/EsotericSoftware/kryonet) | 1656 |  TCP/UDP client/server library for Java, based on Kryo | 8 months ago |
| [servicetalk](https://github.com/apple/servicetalk) | 701 | A networking framework that evolves with your application | 3 hours ago |
| [comsat](https://github.com/puniverse/comsat) | 597 | Fibers and actors for web development | 4 years ago |
| [drift](https://github.com/airlift/drift) | 197 | An annotation-based Java library for creating Thrift serializable types and services. | a year ago |
| [tls-channel](https://github.com/marianobarrios/tls-channel) | 119 | A Java library that implements a ByteChannel interface over SSLEngine, enabling easy-to-use (socket-like) TLS for Java applications. | 11 days ago |
| [urnlib](https://github.com/slub/urnlib) | 21 | Java library for representing, parsing and encoding URNs as in RFC2141 and RFC8141 | 4 months ago |


### [ORM](#orm)
* APIs that handle the persistence of objects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mybatis-3](https://github.com/mybatis/mybatis-3) | 16289 | MyBatis SQL mapper framework for Java | 12 days ago |
| [ObjectiveSql](https://github.com/braisdom/ObjectiveSql) | 1138 | ObjectiveSQL is an ORM framework in Java based on ActiveRecord pattern, which encourages rapid development and clean, codes with the least and convention over configuration. | 6 hours ago |
| [SimpleFlatMapper](https://github.com/arnaudroger/SimpleFlatMapper) | 390 | Fast and Easy mapping from database and csv to POJO. A java micro ORM, lightweight alternative to iBatis and Hibernate. Fast Csv Parser and Csv Mapper | 5 months ago |
| [doma](https://github.com/domaframework/doma) | 291 | DAO oriented database mapping framework for Java 8+ | 6 days ago |
| [permazen](https://github.com/permazen/permazen) | 269 | Language-Natural Persistence Layer for Java | a month ago |


### [PDF](#pdf)
* Tools to help with PDF files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [OpenPDF](https://github.com/LibrePDF/OpenPDF) | 2105 | OpenPDF is a free Java library for creating and editing PDF files with a LGPL and MPL open source license. OpenPDF is based on a fork of iText. We welcome contributions from other developers. Please feel free to submit pull-requests and bugreports to this GitHub repository. ⛺ | 3 hours ago |
| [flyingsaucer](https://github.com/flyingsaucerproject/flyingsaucer) | 1637 | XML/XHTML and CSS 2.1 renderer in pure Java | 3 days ago |
| [tabula-java](https://github.com/tabulapdf/tabula-java) | 1278 | Extract tables from PDF files | a month ago |
| [openhtmltopdf](https://github.com/danfickle/openhtmltopdf) | 1254 | An HTML to PDF library for the JVM. Based on Flying Saucer and Apache PDF-BOX 2. With SVG image support. Now also with accessible PDF support (WCAG, Section 508, PDF/UA)! | a day ago |
| [dynamicreports](https://github.com/dynamicreports/dynamicreports) | 144 | Java reporting library for creating dynamic report designs at runtime | 3 months ago |


### [Performance analysis](#performance-analysis)
* Tools for performance analysis, profiling and benchmarking.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jitwatch](https://github.com/AdoptOpenJDK/jitwatch) | 2489 | Log analyser / visualiser for Java HotSpot JIT compiler. Inspect inlining decisions, hot methods, bytecode, and assembly. View results in the JavaFX user interface. | 2 days ago |
| [honest-profiler](https://github.com/jvm-profiling-tools/honest-profiler) | 1167 | A sampling JVM profiler without the safepoint sample bias | 4 months ago |
| [jHiccup](https://github.com/giltene/jHiccup) | 596 | jHiccup is a non-intrusive instrumentation tool that logs and records
platform "hiccups" - including the JVM stalls that often happen when
Java applications are executed and/or any OS or hardware platform noise
that may cause the running application to not be continuously runnable. | 19 days ago |
| [LatencyUtils](https://github.com/LatencyUtils/LatencyUtils) | 428 | Utilities for latency measurement and reporting | 19 days ago |


### [Platform](#platform)
* Frameworks that are suites of multiple libraries encompassing several categories.

#### [Apache Commons](#apache-commons)
* [Apache Commons](http://commons.apache.org/proper/)

#### [Other](#other)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [light-4j](https://github.com/networknt/light-4j) | 3283 | A fast, lightweight and more productive microservices framework | 13 hours ago |
| [light-oauth2](https://github.com/networknt/light-oauth2) | 265 | A fast, light and cloud native OAuth 2.0 authorization microservices based on light-4j | 10 days ago |
| [Orienteer](https://github.com/OrienteerBAP/Orienteer) | 152 | Business Application Platform - no-code/low-code platform to build business applications | a month ago |


### [Processes](#processes)
* Libraries that help the management of operating system processes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zt-exec](https://github.com/zeroturnaround/zt-exec) | 745 | ZeroTurnaround Process Executor | a month ago |
| [zt-process-killer](https://github.com/zeroturnaround/zt-process-killer) | 102 | ZeroTurnaround Process Killer | 4 months ago |
| [ch.vorburger.exec](https://github.com/vorburger/ch.vorburger.exec) | 17 | Java library to launch external processes | a month ago |


### [Reactive libraries](#reactive-libraries)
* Libraries for developing reactive applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [RxJava](https://github.com/ReactiveX/RxJava) | 45358 | RxJava – Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM. | 3 hours ago |
| [reactive-streams-jvm](https://github.com/reactive-streams/reactive-streams-jvm) | 4186 | Reactive Streams Specification for the JVM | 4 months ago |
| [reactor-core](https://github.com/reactor/reactor-core) | 3792 | Non-Blocking Reactive Foundation for the JVM | 17 hours ago |


### [REST Frameworks](#rest-frameworks)
* Frameworks specifically for creating RESTful services.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dropwizard](https://github.com/dropwizard/dropwizard) | 8040 | A damn simple library for building production-ready RESTful web services. | 15 minutes ago |
| [rest.li](https://github.com/linkedin/rest.li) | 2151 | Rest.li is a REST+JSON framework for building robust, scalable service architectures using dynamic discovery and simple asynchronous APIs. | 15 hours ago |
| [springdoc-openapi](https://github.com/springdoc/springdoc-openapi) | 1401 | Library for OpenAPI 3 with spring-boot | an hour ago |
| [micro-server](https://github.com/aol/micro-server) | 931 | Microserver is a Java 8 native, zero configuration, standards based, battle hardened library to run Java Rest Microservices via a standard Java main class. Supporting pure Microservice or Micro-monolith styles. | a year ago |
| [RestExpress](https://github.com/RestExpress/RestExpress) | 924 | Minimalist Java framework for rapidly creating scalable, containerless, RESTful microservices. Ship a production-quality, headless, RESTful API in the shortest time possible. Uses Netty for HTTP, Jackson for JSON, Metrics for metrics, properties files for configuration. Sub-projects and plugins enable, NoSQL, Swagger, Auth0, HAL integration, etc. | a day ago |
| [restlet-framework-java](https://github.com/restlet/restlet-framework-java) | 619 | Leading REST API framework for Java | 2 months ago |


### [Science](#science)
* Libraries for scientific computing, analysis and visualization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tablesaw](https://github.com/jtablesaw/tablesaw) | 2704 | Java dataframe and visualization library | a day ago |
| [jgrapht](https://github.com/jgrapht/jgrapht) | 1985 | Master repository for the JGraphT project | 4 days ago |
| [XChart](https://github.com/knowm/XChart) | 1182 | XChart is a light-weight Java library for plotting data. | 3 days ago |
| [jgraphx](https://github.com/jgraph/jgraphx) | 625 |  | a year ago |
| [chart-fx](https://github.com/GSI-CS-CO/chart-fx) | 298 | A scientific charting library focused on performance optimised real-time data visualisation at 25 Hz update rates for data sets with a few 10 thousand up to 5 million data points. | 14 days ago |
| [morpheus-core](https://github.com/zavtech/morpheus-core) | 211 | The foundational library of the Morpheus data science framework | 3 years ago |
| [Erdos](https://github.com/Erdos-Graph-Framework/Erdos) | 105 | modular and modern graph-theory algorithms framework in Java | 8 months ago |
| [orson-charts](https://github.com/jfree/orson-charts) | 82 | A 3D chart library for Java applications (JavaFX, Swing or server-side). | a year ago |
| [LogicNG](https://github.com/logic-ng/LogicNG) | 73 | The Next Generation Logic Library | a month ago |
| [jtk](https://github.com/MinesJTK/jtk) | 48 | The Mines Java Toolkit | 6 months ago |


### [Search](#search)
* Engines that index documents for search and analysis.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [indexer4j](https://github.com/haeungun/indexer4j) | 43 | Simple full text indexing and searching library for Java | 3 years ago |


### [Security](#security)
* Libraries that handle security, authentication, authorization or session management.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tink](https://github.com/google/tink) | 11640 | Tink is a multi-language, cross-platform, open source library that provides cryptographic APIs that are secure, easy to use correctly, and hard(er) to misuse. | 16 hours ago |
| [jjwt](https://github.com/jwtk/jjwt) | 7814 | Java JWT: JSON Web Token for Java and Android | 4 days ago |
| [keywhiz](https://github.com/square/keywhiz) | 2438 | A system for distributing and managing secrets | a day ago |
| [pac4j](https://github.com/pac4j/pac4j) | 2064 | Security engine for Java (authentication, authorization, multi frameworks): OAuth, CAS, SAML, OpenID Connect, LDAP, JWT... | 2 hours ago |
| [themis](https://github.com/cossacklabs/themis) | 1359 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | 3 days ago |
| [nbvcxz](https://github.com/GoSimpleLLC/nbvcxz) | 217 | Password strength estimator | 23 days ago |
| [hdiv](https://github.com/hdiv/hdiv) | 204 | Hdiv CE , Application Self-Protection | 2 months ago |
| [kalium](https://github.com/abstractj/kalium) | 203 | Java binding to the Networking and Cryptography (NaCl) library with the awesomeness of libsodium | 3 years ago |
| [password4j](https://github.com/Password4j/password4j) | 154 | Password4j is a user-friendly cryptographic library that supports Argon2, Bcrypt, Scrypt, PBKDF2 and various cryptographic hash functions. | a month ago |
| [sslcontext-kickstart](https://github.com/Hakky54/sslcontext-kickstart) | 153 | 🔐 A lightweight high level library for configuring a http client or server based on SSLContext or other properties such as TrustManager, KeyManager or Trusted Certificates to communicate over SSL TLS for one way authentication or two way authentication provided by the SSLFactory. Support for Java, Scala and Kotlin based clients with examples. Available client examples are: Apache HttpClient, OkHttp, Spring RestTemplate, Spring WebFlux WebClient Jetty and Netty, the old and the new JDK HttpClient, the old and the new Jersey Client, Google HttpClient, Unirest, Retrofit, Feign, Methanol, Vertx, Scala client Finagle, Featherbed, Dispatch Reboot, AsyncHttpClient, Sttp, Akka, Requests Scala, Http4s Blaze, Kotlin client Fuel, http4k Kohttp and Ktor. Also gRPC, WebSocket and ElasticSearch examples are included | 20 hours ago |
| [jwks-rsa-java](https://github.com/auth0/jwks-rsa-java) | 125 |  | 7 days ago |
| [OTP-Java](https://github.com/BastiaanJansen/OTP-Java) | 40 | A small and easy-to-use one-time password generator library for Java according to RFC 4226 (HOTP) and RFC 6238 (TOTP). | 2 months ago |
| [securitybuilder](https://github.com/tersesystems/securitybuilder) | 40 | Fluent builders with typesafe API for the JCA | 3 months ago |


### [Serialization](#serialization)
* Libraries that handle serialization with high efficiency.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [flatbuffers](https://github.com/google/flatbuffers) | 16879 | FlatBuffers: Memory Efficient Serialization Library | 10 hours ago |
| [kryo](https://github.com/EsotericSoftware/kryo) | 5185 | Java binary serialization and cloning: fast, efficient, automatic | a month ago |
| [fast-serialization](https://github.com/RuedigerMoeller/fast-serialization) | 1407 | FST: fast java serialization drop in-replacement  | 24 days ago |
| [msgpack-java](https://github.com/msgpack/msgpack-java) | 1223 | MessagePack serializer implementation for Java / msgpack.org[Java] | 7 days ago |
| [java-php-serializer](https://github.com/marcospassos/java-php-serializer) | 12 | A Java library for serializing objects as PHP serialization format. | 4 years ago |


### [Server](#server)
* Servers specifically used to deploy applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nanohttpd](https://github.com/NanoHttpd/nanohttpd) | 6080 | Tiny, easily embeddable HTTP server in Java. | a month ago |


### [Template Engine](#template-engine)
* Tools that substitute expressions in a template.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jade4j](https://github.com/neuland/jade4j) | 696 | a pug implementation written in Java (formerly known as jade) | 2 months ago |
| [rocker](https://github.com/fizzed/rocker) | 633 | Java 8 optimized, memory efficient, speedy template engine producing statically typed, plain java objects | 22 days ago |
| [jte](https://github.com/casid/jte) | 305 | Secure and speedy templates for Java and Kotlin. | 13 days ago |
| [jtwig](https://github.com/jtwig/jtwig) | 296 | Java modern template engine | 3 years ago |


### [Testing](#testing)
* Tools that test from model to the view.

#### Asynchronous(#asynchronous)
* Tools that simplify testing asynchronous services.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [rest-assured](https://github.com/rest-assured/rest-assured) | 5533 | Java DSL for easy testing of REST services | 8 days ago |
| [karate](https://github.com/karatelabs/karate) | 5254 | Test Automation Made Simple | 7 hours ago |
| [awaitility](https://github.com/awaitility/awaitility) | 2727 | Awaitility is a small Java DSL for synchronizing asynchronous operations | 11 days ago |
| [concurrentunit](https://github.com/jhalterman/concurrentunit) | 389 | Toolkit for testing multi-threaded and asynchronous applications | 2 months ago |
| [hoverfly-java](https://github.com/SpectoLabs/hoverfly-java) | 136 | Java binding for Hoverfly | a month ago |


#### BDD(#bdd)
* Testing for the software development process that emerged from TDD and was heavily influenced by DDD and OOAD.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cucumber-jvm](https://github.com/cucumber/cucumber-jvm) | 2326 | Cucumber for the JVM | 13 hours ago |
| [serenity-core](https://github.com/serenity-bdd/serenity-core) | 580 | Serenity BDD is a test automation library designed to make writing automated acceptance tests easier, and more fun. | 3 days ago |
| [lambda-behave](https://github.com/RichardWarburton/lambda-behave) | 242 | A modern testing and behavioural specification framework for Java 8 | 4 months ago |
| [cukes](https://github.com/ctco/cukes) | 96 | Cucumber DSL for testing RESTful Web Services | 3 months ago |
| [j8spec](https://github.com/j8spec/j8spec) | 45 | Library that allows tests written in Java to follow the BDD style introduced by RSpec and Jasmine. | 4 years ago |


#### Fixtures(#fixtures)
* Everything related to the creation and handling of random data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [java-faker](https://github.com/DiUS/java-faker) | 2864 | Brings the popular ruby faker gem to Java | 2 days ago |
| [jfairy](https://github.com/Devskiller/jfairy) | 680 | Java fake data generator | 6 months ago |
| [fixture-factory](https://github.com/six2six/fixture-factory) | 398 | Generator fake objects from a template | 2 months ago |
| [randomizedtesting](https://github.com/randomizedtesting/randomizedtesting) | 159 | Randomized Testing (Core JUnit Runner, ANT, Maven) | 7 days ago |
| [beanmother](https://github.com/keepcosmos/beanmother) | 106 | A library for setting up Java objects as test data. | 4 months ago |


### [Frameworks](#frameworks)
* Provide environments to run tests for a specific use case.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ArchUnit](https://github.com/TNG/ArchUnit) | 1923 | A Java architecture test library, to specify and assert architecture rules in plain Java | 3 days ago |
| [pact-jvm](https://github.com/pact-foundation/pact-jvm) | 877 | JVM version of Pact. Enables consumer driven contract testing, providing a mock service and DSL for the consumer project, and interaction playback and verification for the service provider project. | a day ago |


### [Matchers](#matchers)
* Libraries that provide custom matchers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xmlunit](https://github.com/xmlunit/xmlunit) | 245 | XMLUnit for Java 2.x | 4 days ago |


### [Miscellaneous](#miscellaneous)
* Other stuff related to testing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testcontainers-java](https://github.com/testcontainers/testcontainers-java) | 5297 | Testcontainers is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container. | 12 hours ago |
| [junit-dataprovider](https://github.com/TNG/junit-dataprovider) | 231 | A TestNG like dataprovider runner for JUnit with many additional features | 6 months ago |
| [MutabilityDetector](https://github.com/MutabilityDetector/MutabilityDetector) | 221 | Lightweight analysis tool for detecting mutability in Java classes | 5 days ago |
| [log-captor](https://github.com/Hakky54/log-captor) | 132 | 🎯  LogCaptor captures log entries for unit testing purposes | 2 months ago |
| [raml-tester](https://github.com/nidi3/raml-tester) | 70 | Test if a request/response matches a given raml definition | 3 years ago |


### [Mocking](#mocking)
* Tools which mock collaborators to help testing single, isolated units.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mockito](https://github.com/mockito/mockito) | 12251 | Most popular Mocking framework for unit tests written in Java | 19 hours ago |
| [moco](https://github.com/dreamhead/moco) | 3799 | Easy Setup Stub Server | 4 days ago |
| [powermock](https://github.com/powermock/powermock) | 3641 | PowerMock is a Java framework that allows you to unit test code normally regarded as untestable. | 2 months ago |


### [Utility](#utility)
* Libraries which provide general utility functions.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [guava](https://github.com/google/guava) | 42548 | Google core libraries for Java | 16 hours ago |
| [arthas](https://github.com/alibaba/arthas) | 27277 | Alibaba Java Diagnostic Tool Arthas/Alibaba Java诊断利器Arthas | 3 days ago |
| [gephi](https://github.com/gephi/gephi) | 4464 | Gephi - The Open Graph Viz Platform | 4 days ago |
| [JavaVerbalExpressions](https://github.com/VerbalExpressions/JavaVerbalExpressions) | 2528 | Java regular expressions made easy. | 7 months ago |
| [embulk](https://github.com/embulk/embulk) | 1588 | Embulk: Pluggable Bulk Data Loader. | 2 hours ago |
| [Dex](https://github.com/PatMartin/Dex) | 1256 | Dex : The Data Explorer -- A data visualization tool written in Java/Groovy/JavaFX capable of powerful ETL and publishing web visualizations. | 3 years ago |
| [bucket4j](https://github.com/vladimir-bukhtoyarov/bucket4j) | 1212 | Java rate limiting library based on token/leaky-bucket algorithm. | 4 days ago |
| [cactoos](https://github.com/yegor256/cactoos) | 644 | Object-Oriented Java primitives, as an alternative to Google Guava and Apache Commons | a day ago |
| [minio-java](https://github.com/minio/minio-java) | 545 | MinIO Client SDK for Java | 2 days ago |
| [underscore-java](https://github.com/javadev/underscore-java) | 350 | java port of Underscore.js | a day ago |
| [ch.vorburger.fswatch](https://github.com/vorburger/ch.vorburger.fswatch) | 19 | Java lib for monitoring directories or individual files via java.nio.file.WatchService | 6 days ago |


### [Version Managers](#version-managers)
* Utilities that help create the development shell environment and switch between different Java versions.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sdkman-cli](https://github.com/sdkman/sdkman-cli) | 4238 | The SDKMAN! Command Line Interface | 11 hours ago |
| [jenv](https://github.com/jenv/jenv) | 3899 | Manage your Java environment  | 2 days ago |
| [jabba](https://github.com/shyiko/jabba) | 2004 | (cross-platform) Java Version Manager | 3 days ago |


### [Web Crawling](#web-crawling)
* Libraries that analyze the content of websites.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [webmagic](https://github.com/code4craft/webmagic) | 10053 | A scalable web crawler framework for Java. | 12 days ago |
| [crawler4j](https://github.com/yasserg/crawler4j) | 4175 | Open Source Web Crawler for Java | 21 days ago |


### [Web Frameworks](#web-frameworks)
* Frameworks that handle the communication between the layers of a web application.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blade](https://github.com/lets-blade/blade) | 5553 | :rocket: Lightning fast and elegant mvc framework for Java8 | a month ago |
| [takes](https://github.com/yegor256/takes) | 696 | True Object-Oriented Java Web Framework | 23 days ago |


### [Resources](#resources)
* Awesome lists related to the Java & JVM ecosystem.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [awesome-microservices](https://github.com/mfornos/awesome-microservices) | 10438 | A curated list of Microservice Architecture related principles and technologies. | 17 days ago |
| [useful-java-links](https://github.com/Vedenin/useful-java-links) | 5076 | A list of useful Java frameworks, libraries, software and hello worlds examples | a month ago |
| [awesome-rest](https://github.com/marmelab/awesome-rest) | 2873 | A collaborative list of great resources about RESTful API architecture, development, test, and performance | 4 months ago |
| [AwesomeJavaFX](https://github.com/mhrimaz/AwesomeJavaFX) | 2424 | A curated list of awesome JavaFX libraries, books, frameworks, etc... | 16 days ago |
| [java-developer-roadmap](https://github.com/s4kibs4mi/java-developer-roadmap) | 2137 | Roadmap to becoming a Java developer in 2021 | 5 months ago |
| [awesome-jvm](https://github.com/deephacks/awesome-jvm) | 1685 | A curated list of awesome loosely performance related JVM stuff. Inspired by awesome-python. | a year ago |
| [awesome-ciandcd](https://github.com/cicdops/awesome-ciandcd) | 1333 | continuous integration and continuous delivery | a month ago |
| [java-concurrency](https://github.com/code-review-checklists/java-concurrency) | 951 | Checklist for code reviews | a year ago |
| [awesome-selenium](https://github.com/christian-bromann/awesome-selenium) | 735 | A curated list of delightful Selenium resources. | 23 days ago |
| [awesome-gradle](https://github.com/ksoichiro/awesome-gradle) | 361 | A curated list of awesome Gradle plugins and resources for a better development workflow automation. | 2 years ago |
| [awesome-graal](https://github.com/neomatrix369/awesome-graal) | 317 | A curated list of awesome resources for Graal, GraalVM, Truffle and related topics | 5 months ago |
| [awesome-annotation-processing](https://github.com/gunnarmorling/awesome-annotation-processing) | 256 | A curated list of resources related to the Java annotation processing API (JSR 269) | 2 months ago |


