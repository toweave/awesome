# Java
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of Java frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Mon Jun 07 2021 10:16:21 GMT+0800 (GMT+08:00)
* Synchronize Every Day.
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
| [mapstruct](https://github.com/mapstruct/mapstruct) | 3950 | An annotation processor for generating type-safe bean mappers | 17 hours ago |
| [modelmapper](https://github.com/modelmapper/modelmapper) | 1771 | Intelligent object mapping | 3 days ago |
| [orika](https://github.com/orika-mapper/orika) | 1062 | Simpler, better and faster Java bean mapping framework | 2 months ago |
| [selma](https://github.com/xebia-france/selma) | 201 | Selma Java bean mapping that compiles | a year ago |
| [jmapper-core](https://github.com/jmapper-framework/jmapper-core) | 164 | Elegance, high performance and robustness all in one java bean mapper | 19 days ago |
| [remap](https://github.com/remondis-it/remap) | 80 | A declarative mapping library to simplify testable object mappings. | 2 months ago |
| [doov](https://github.com/doov-org/doov) | 61 | dOOv (Domain Object Oriented Validation) a fluent API for type-safe bean validation and mapping | a month ago |


### [Bytecode Manipulation](#bytecode-manipulation)
* Libraries to manipulate bytecode programmatically.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bytecode-viewer](https://github.com/Konloch/bytecode-viewer) | 12111 | A Java 8+ Jar & Android APK Reverse Engineering Suite (Decompiler, Editor, Debugger & More) | 2 months ago |
| [cglib](https://github.com/cglib/cglib) | 4019 | cglib - Byte Code Generation Library is high level API to generate and transform Java byte code. It is used by AOP, testing, data access frameworks to generate dynamic proxy objects and intercept field access. | 3 months ago |
| [javassist](https://github.com/jboss-javassist/javassist) | 3172 | Java bytecode engineering toolkit | 24 days ago |
| [Mixin](https://github.com/SpongePowered/Mixin) | 609 | Mixin is a trait/mixin and bytecode weaving framework for Java using ASM | a month ago |
| [perses](https://github.com/nicolasmanic/perses) | 53 | A project to cause (controlled) destruction on your jvm application  | 5 months ago |


### [CLI](#cli)
* Libraries for everything related to the CLI.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [lanterna](https://github.com/mabe02/lanterna) | 1663 | Java library for creating text-based GUIs | 19 days ago |
| [jline3](https://github.com/jline/jline3) | 883 | JLine is a Java library for handling console input. | 2 days ago |
| [airline](https://github.com/airlift/airline) | 845 | Java annotation-based framework for parsing Git like command line structures | 5 months ago |
| [jansi](https://github.com/fusesource/jansi) | 827 | Jansi is a small java library that allows you to use ANSI escape sequences to format your console output which works even on windows.  | 4 days ago |
| [asciitable](https://github.com/vdmeer/asciitable) | 314 | Several implementations of a text table, originally using ASCII and UTF-8 characters for borders. | 3 years ago |
| [text-io](https://github.com/beryx/text-io) | 236 | A library for creating interactive console applications in Java | 8 months ago |
| [java-ascii-render](https://github.com/indvd00m/java-ascii-render) | 115 | ASCII renderer in pure java with no external dependencies | 8 months ago |
| [jbock](https://github.com/jbock-java/jbock) | 45 | A command line parser generator | 5 hours ago |


### [Code Analysis](#code-analysis)
* Tools that provide metrics and quality measurements.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [infer](https://github.com/facebook/infer) | 12341 | A static analyzer for Java, C, C++, and Objective-C | 2 days ago |
| [checkstyle](https://github.com/checkstyle/checkstyle) | 6042 | Checkstyle is a development tool to help programmers write Java code that adheres to a coding standard. By default it supports the Google Java Style Guide and Sun Code Conventions, but is highly configurable. It can be invoked with an ANT task and a command line program. | an hour ago |
| [error-prone](https://github.com/google/error-prone) | 5601 | Catch common Java mistakes as compile-time errors | 4 days ago |
| [pmd](https://github.com/pmd/pmd) | 3412 | An extensible multilanguage static code analyzer. | 3 days ago |
| [NullAway](https://github.com/uber/NullAway) | 2954 | A tool to help eliminate NullPointerExceptions (NPEs) in your Java code with low build-time overhead | 4 days ago |
| [spotbugs](https://github.com/spotbugs/spotbugs) | 2346 | SpotBugs is FindBugs' successor. A tool for static analysis to look for bugs in Java code. | 3 days ago |
| [spoon](https://github.com/INRIA/spoon) | 1135 | Spoon is a metaprogramming library to analyze and transform Java source code (up to Java 15). :spoon: is made with :heart:, :beers: and :sparkles:. It parses source files to build a well-designed AST with powerful analysis and transformation API. | an hour ago |
| [sonar-java](https://github.com/SonarSource/sonar-java) | 784 | :coffee: SonarSource Static Analyzer for Java Code Quality and Security | 2 days ago |


### [Code Generators](#code-generators)
* Tools that generate patterns for repetitive code in order to reduce verbosity and error-proneness.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [generator-jhipster](https://github.com/jhipster/generator-jhipster) | 18491 | JHipster is a development platform to quickly generate, develop, & deploy modern web applications & microservice architectures. | 7 hours ago |
| [auto](https://github.com/google/auto) | 9264 | A collection of source code generators for Java. | 14 hours ago |
| [javapoet](https://github.com/square/javapoet) | 8941 | A Java API for generating .java source files. | 24 days ago |
| [FreeBuilder](https://github.com/inferred/FreeBuilder) | 776 | Automatic generation of the Builder pattern for Java | a month ago |
| [adt4j](https://github.com/sviperll/adt4j) | 130 | adt4j - Algebraic Data Types for Java | 3 years ago |


### [Computer Vision](#computer-vision)
* Libraries which seek to gain high level information from images and videos.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [javacv](https://github.com/bytedeco/javacv) | 5141 | Java interface to OpenCV, FFmpeg, and more | 3 days ago |


### [Configuration](#configuration)
* Libraries that provide external configuration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [config](https://github.com/lightbend/config) | 5287 | configuration library for JVM languages using HOCON files | 10 days ago |
| [owner](https://github.com/matteobaccan/owner) | 814 | Get rid of the boilerplate code in properties based configuration. | a month ago |
| [cfg4j](https://github.com/cfg4j/cfg4j) | 530 | Modern configuration library for distributed apps written in Java. | a year ago |
| [centraldogma](https://github.com/line/centraldogma) | 393 | Highly-available version-controlled service configuration repository based on Git, ZooKeeper and HTTP/2 | 3 days ago |
| [Configurate](https://github.com/SpongePowered/Configurate) | 161 | A simple configuration library for Java applications providing a node structure, a variety of formats, and tools for transformation | 23 days ago |
| [kaconf](https://github.com/mariomac/kaconf) | 47 | KickAss Configuration. An annotation-based configuration system for Java and Kotlin | a year ago |
| [dotenv](https://github.com/shyiko/dotenv) | 36 | A twelve-factor configuration (12factor.net/config) library for Java 8+ | 3 years ago |


### [Constraint Satisfaction Problem Solver](#constraint-satisfaction-problem-solver)
* Libraries that help with implementing optimization and satisfiability problems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jacop](https://github.com/radsz/jacop) | 180 | Java Constraint Programming solver | a month ago |


### [CSV](#csv)
* Frameworks and libraries that simplify reading/writing CSV data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [univocity-parsers](https://github.com/uniVocity/univocity-parsers) | 789 | uniVocity-parsers is a suite of extremely fast and reliable parsers for Java. It provides a consistent interface for handling different file formats, and a solid framework for the development of new parsers. | 24 days ago |
| [FastCSV](https://github.com/osiegmar/FastCSV) | 306 | High performance CSV reader and writer for Java. | 23 days ago |


### [Data Structures](#data-structures)
* Efficient and specific data structures.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [protobuf](https://github.com/protocolbuffers/protobuf) | 48216 | Protocol Buffers - Google's data interchange format | 13 hours ago |
| [wire](https://github.com/square/wire) | 3514 | gRPC and protocol buffers for Android, Kotlin, and Java. | 3 days ago |
| [simple-binary-encoding](https://github.com/real-logic/simple-binary-encoding) | 2433 | Simple Binary Encoding (SBE) - High Performance Message Codec | 2 days ago |
| [tape](https://github.com/square/tape) | 2396 | A lightning fast, transactional, file-based FIFO for Android and Java. | 6 months ago |
| [RoaringBitmap](https://github.com/RoaringBitmap/RoaringBitmap) | 2253 | A better compressed bitset in Java | 4 days ago |
| [pcollections](https://github.com/hrldcpr/pcollections) | 668 | A Persistent Java Collections Library | 6 months ago |
| [bigqueue](https://github.com/bulldog2011/bigqueue) | 469 | A big, fast and persistent queue based on memory mapped file. | 7 months ago |
| [HyperMinHash-java](https://github.com/LiveRamp/HyperMinHash-java) | 38 | Union, intersection, and set cardinality in loglog space | 4 months ago |


### [Database](#database)
* Everything that simplifies interactions with the database.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [redisson](https://github.com/redisson/redisson) | 16622 | Redisson - Redis Java client with features of In-Memory Data Grid. Over 50 Redis based Java objects and services: Set, Multimap, SortedSet, Map, List, Queue, Deque, Semaphore, Lock, AtomicLong, Map Reduce, Publish / Subscribe, Bloom filter, Spring Cache, Tomcat, Scheduler, JCache API, Hibernate, MyBatis, RPC, local cache ... | 3 days ago |
| [HikariCP](https://github.com/brettwooldridge/HikariCP) | 15093 | 光 HikariCP・A solid, high-performance, JDBC connection pool at last. | 14 hours ago |
| [realm-java](https://github.com/realm/realm-java) | 11140 | Realm is a mobile database: a replacement for SQLite & ORMs | 3 days ago |
| [jedis](https://github.com/redis/jedis) | 9874 | A blazingly small and sane redis java client | 3 days ago |
| [Leaf](https://github.com/Meituan-Dianping/Leaf) | 4618 | Distributed ID Generate Service | a month ago |
| [requery](https://github.com/requery/requery) | 3053 | requery - modern SQL based query & persistence for Java / Kotlin / Android | a year ago |
| [Chronicle-Map](https://github.com/OpenHFT/Chronicle-Map) | 2182 | Replicate your Key Value Store across your network, with consistency, persistance and performance. | 2 days ago |
| [Jest](https://github.com/searchbox-io/Jest) | 2068 | Elasticsearch Java Rest Client. | 3 days ago |
| [speedment](https://github.com/speedment/speedment) | 1939 | Speedment is a Stream ORM Java Toolkit and Runtime | 20 days ago |
| [xodus](https://github.com/JetBrains/xodus) | 894 | Transactional schema-less embedded database used by JetBrains YouTrack and JetBrains Hub. | 5 days ago |
| [flexy-pool](https://github.com/vladmihalcea/flexy-pool) | 875 | FlexyPool adds metrics and failover strategies to a given Connection Pool, allowing it to resize on demand. | a month ago |
| [Jinq](https://github.com/my2iu/Jinq) | 619 | LINQ-style queries for Java 8 | 2 months ago |
| [MariaDB4j](https://github.com/vorburger/MariaDB4j) | 600 | MariaDB Embedded in Java JAR | a day ago |
| [exist](https://github.com/eXist-db/exist) | 306 | eXist Native XML Database and Application Platform | 3 days ago |
| [arangodb-java-driver](https://github.com/arangodb/arangodb-java-driver) | 176 | The official ArangoDB Java driver. | 19 days ago |
| [jetcd](https://github.com/justinsb/jetcd) | 134 | Java binding for etcd | 3 months ago |
| [modality](https://github.com/arkanovicz/modality) | 10 | Model Layer Implementation for a J2EE Pull MVC WebApp | 3 days ago |
| [querystream](https://github.com/querystream/querystream) | 1 | Build JPA Criteria queries using a Stream-like API | a day ago |


### [Date and Time](#date-and-time)
* Libraries related to handling date and time.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ical4j](https://github.com/ical4j/ical4j) | 512 | A Java library for parsing and building iCalendar data models | 9 days ago |
| [Time4J](https://github.com/MenoData/Time4J) | 337 | Advanced date, time and interval library for Java with sun/moon-astronomy and calendars like Chinese, Coptic, Ethiopian, French Republican, Hebrew, Hijri, Historic Christian, Indian National, Japanese, Julian, Korean, Minguo, Persian, Thai, Vietnamese | 8 days ago |
| [threeten-extra](https://github.com/ThreeTen/threeten-extra) | 295 | Provides additional date-time classes that complement those in JDK 8 | a month ago |


### [Dependency Injection](#dependency-injection)
* Libraries that help to realize the [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) paradigm.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [guice](https://github.com/google/guice) | 10197 | Guice (pronounced 'juice') is a lightweight dependency injection framework for Java 6 and above, brought to you by Google. | 10 days ago |
| [governator](https://github.com/Netflix/governator) | 792 | Governator is a library of extensions and utilities that enhance Google Guice to provide: classpath scanning and automatic binding, lifecycle management, configuration to field mapping, field validation and parallelized object warmup. | 2 months ago |
| [feather](https://github.com/zsoltherpai/feather) | 322 | Lightweight dependency injection for Java and Android (JSR-330) | 3 years ago |
| [jaywire](https://github.com/vanillasource/jaywire) | 48 | JayWire Dependency Injection | a month ago |


### [Development](#development)
* Augmentation of the development process at a fundamental level.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [javaparser](https://github.com/javaparser/javaparser) | 3711 | Java 1-15 Parser and Abstract Syntax Tree for Java, including preview features to Java 13 | 3 days ago |
| [HotswapAgent](https://github.com/HotswapProjects/HotswapAgent) | 1642 | Java unlimited redefinition of classes at runtime. | 2 months ago |
| [manifold](https://github.com/manifold-systems/manifold) | 1053 | Manifold is a Java compiler plugin, its features include Metaprogramming, Properties, Extension Methods, Operator Overloading, Templates, a Preprocessor, and more. | 4 days ago |
| [javasymbolsolver](https://github.com/javaparser/javasymbolsolver) | 276 | *old repository* --> this is now integrated in https://github.com/javaparser/javaparser | 3 years ago |
| [faux-pas](https://github.com/zalando/faux-pas) | 103 | A library that simplifies error handling for Functional Programming in Java | 3 days ago |
| [sneakythrow](https://github.com/rainerhahnekamp/sneakythrow) | 63 | SneakyThrow is a Java library to ignore checked exceptions | 2 years ago |


### [Distributed Applications](#distributed-applications)
* Libraries and frameworks for writing distributed and fault-tolerant applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zuul](https://github.com/Netflix/zuul) | 10935 | Zuul is a gateway service that provides dynamic routing, monitoring, resiliency, security, and more. | 3 days ago |
| [resilience4j](https://github.com/resilience4j/resilience4j) | 6941 | Resilience4j is a fault tolerance library designed for Java8 and functional programming | 14 hours ago |
| [hazelcast](https://github.com/hazelcast/hazelcast) | 4378 | Open Source Streaming Data Platform | a day ago |
| [failsafe](https://github.com/jhalterman/failsafe) | 3402 | Fault tolerance and resilience patterns for the JVM | 16 days ago |
| [scalecube-services](https://github.com/scalecube/scalecube-services) | 493 | ScaleCube Services is a high throughput, low latency reactive microservices library built to scale. it features: API-Gateways, service-discovery, service-load-balancing, the architecture supports plug-and-play service communication modules and features. built to provide performance and low-latency real-time stream-processing. its open and designed to accommodate changes. (no sidecar in a form of broker or any kind) | a month ago |
| [dropwizard-circuitbreaker](https://github.com/mtakaki/dropwizard-circuitbreaker) | 40 | A circuit breaker design pattern for dropwizard | a year ago |


### [Distributed Transactions](#distributed-transactions)
* Distributed transactions provide a mechanism for ensuring consistency of data updates in the presence of concurrent access and partial failures.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [seata](https://github.com/seata/seata) | 19736 | :fire: Seata is an easy-to-use, high-performance, open source distributed transaction solution. | 9 hours ago |
| [btm](https://github.com/bitronix/btm) | 393 | JTA Transaction Manager | 8 months ago |


### [Distribution](#distribution)
* Tools that handle the distribution of applications in native formats.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [packr](https://github.com/libgdx/packr) | 2199 | Packages your JAR, assets and a JVM for distribution on Windows, Linux and Mac OS X | 2 months ago |
| [capsule](https://github.com/puniverse/capsule) | 1145 | Dead-Simple Packaging and Deployment for JVM Apps | a year ago |
| [getdown](https://github.com/threerings/getdown) | 423 | Download, Install, Update | 2 months ago |
| [JavaPackager](https://github.com/fvarrui/JavaPackager) | 327 | :package: Gradle/Maven plugin to package Java applications as native Windows, Mac OS X, or GNU/Linux executables and create installers for them. | 24 days ago |
| [artipie](https://github.com/artipie/artipie) | 236 | Binary Artifact Management Tool | 16 hours ago |
| [really-executable-jars-maven-plugin](https://github.com/brianm/really-executable-jars-maven-plugin) | 94 | maven plugin for making chmod +x jar files | 5 years ago |
| [jlink.online](https://github.com/cilki/jlink.online) | 1 |  Build optimized Java runtimes in your browser! | 7 months ago |


### [Document Processing](#document-processing)
* Libraries that assist with processing office document formats.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fastexcel](https://github.com/dhatim/fastexcel) | 293 | Generate and read big Excel files quickly | 2 days ago |
| [zerocell](https://github.com/creditdatamw/zerocell) | 54 | Simple, efficient Excel to POJO library for Java  | 3 months ago |


### [Financial](#financial)
* Libraries related to the financial domain.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ta4j](https://github.com/ta4j/ta4j) | 1075 | A Java library for technical analysis. | 14 hours ago |
| [stripe-java](https://github.com/stripe/stripe-java) | 549 | Java library for the Stripe API.     | 2 days ago |
| [parity](https://github.com/paritytrading/parity) | 476 | Open source software platform for trading venues | 2 months ago |
| [philadelphia](https://github.com/paritytrading/philadelphia) | 229 | Low-latency Financial Information Exchange (FIX) engine for the JVM | 11 days ago |
| [connect-java-sdk](https://github.com/square/connect-java-sdk) | 37 | Java client library for the Square Connect v2 API | 5 months ago |


### [Formal Verification](#formal-verification)
* Formal-methods tools: proof assistants, model checking, symbolic execution, etc.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jpf-core](https://github.com/javapathfinder/jpf-core) | 300 | JPF is an extensible software analysis framework for Java bytecode. jpf-core is the basis for all JPF projects; you always need to install it. It contains the basic VM and model checking infrastructure, and can be used to check for concurrency defects like deadlocks, and unhandled exceptions like NullPointerExceptions and AssertionErrors. | a month ago |
| [janala2](https://github.com/ksen007/janala2) | 81 | a concolic testing engine for Java | 3 years ago |


### [Functional Programming](#functional-programming)
* Libraries that facilitate functional programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jOOL](https://github.com/jOOQ/jOOL) | 1825 | jOOλ - The Missing Parts in Java 8 jOOλ improves the JDK libraries in areas where the Expert Group's focus was elsewhere. It adds tuple support, function support, and a lot of additional functionality around sequential Streams. The JDK 8's main efforts (default methods, lambdas, and the Stream API) were focused around maintaining backwards compatibility and implementing a functional API for parallelism. | 14 days ago |
| [streamex](https://github.com/amaembo/streamex) | 1668 | Enhancing Java Stream API | 20 days ago |
| [cyclops](https://github.com/aol/cyclops) | 1187 | An advanced, but easy to use, platform for writing functional applications in Java 8. | a month ago |
| [derive4j](https://github.com/derive4j/derive4j) | 514 | Java 8 annotation processor and framework for deriving algebraic data types constructors, pattern-matching, folds, optics and typeclasses. | 12 days ago |
| [protonpack](https://github.com/poetix/protonpack) | 441 | Stream utilities for Java 8 | 8 months ago |


### [Geospatial](#geospatial)
* Libraries for working with geospatial data and algorithms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphhopper](https://github.com/graphhopper/graphhopper) | 3201 | Open source routing engine for OpenStreetMap. Use it as Java library or server. | 5 days ago |
| [mapsforge](https://github.com/mapsforge/mapsforge) | 903 | Vector map library and writer - running on Android and Desktop. | 10 days ago |
| [spatial4j](https://github.com/locationtech/spatial4j) | 766 | LocationTech Spatial4j: A Geospatial Library for Java | 22 days ago |
| [geo](https://github.com/davidmoten/geo) | 347 | Geohash utitlies in java | a month ago |


### [High Performance](#high-performance)
* Everything about high-performance computation, from collections to specific libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [JCTools](https://github.com/JCTools/JCTools) | 2686 |  | 17 days ago |
| [agrona](https://github.com/real-logic/agrona) | 1973 | High Performance data structures and utility methods for Java | 2 days ago |
| [eclipse-collections](https://github.com/eclipse/eclipse-collections) | 1703 | Eclipse Collections is a collections framework for Java with optimized data structures and a rich, functional and fluent API. | 6 hours ago |
| [Koloboke](https://github.com/leventov/Koloboke) | 924 | Java Collections till the last breadcrumb of memory and performance | 4 years ago |


### [HTTP Clients](#http-clients)
* Libraries that assist with creating HTTP requests and/or binding responses.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [feign](https://github.com/OpenFeign/feign) | 7117 | Feign makes writing java http clients easier | 14 days ago |
| [async-http-client](https://github.com/AsyncHttpClient/async-http-client) | 5763 | Asynchronous Http and WebSocket Client library for Java  | 2 months ago |
| [ribbon](https://github.com/Netflix/ribbon) | 3970 | Ribbon is a Inter Process Communication (remote procedure calls) library with built in software load balancers. The primary usage model involves REST calls with various serialization scheme support. | 2 months ago |
| [unirest-java](https://github.com/Kong/unirest-java) | 2141 | Unirest in Java: Simplified, lightweight HTTP client library. | a month ago |
| [google-http-java-client](https://github.com/googleapis/google-http-java-client) | 1153 | Google HTTP Client Library for Java | 2 days ago |
| [riptide](https://github.com/zalando/riptide) | 185 | Client-side response routing for Spring | 3 days ago |
| [methanol](https://github.com/mizosoft/methanol) | 97 | ⚗️ Lightweight HTTP extensions for Java | 6 days ago |
| [restQL-java](https://github.com/b2wdigital/restQL-java) | 42 | Microservice query language | 5 months ago |


### [Hypermedia Types](#hypermedia-types)
* Libraries that handle serialization to hypermedia types.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jsonld-java](https://github.com/jsonld-java/jsonld-java) | 340 | JSON-LD implementation for Java | 2 months ago |
| [siren4j](https://github.com/eserating-chwy/siren4j) | 21 | Java library for the Siren Hypermedia Type Specification | 3 years ago |
| [hate](https://github.com/blackdoor/hate) | 17 | HATEOAS with HAL for Java | 8 months ago |


### [Imagery](#imagery)
* Libraries that assist with the creation, evaluation or manipulation of graphical images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zxing](https://github.com/zxing/zxing) | 27844 | ZXing ("Zebra Crossing") barcode scanning library for Java, Android | 2 days ago |
| [thumbnailator](https://github.com/coobird/thumbnailator) | 3625 | Thumbnailator - a thumbnail generation library for Java | 3 months ago |
| [TwelveMonkeys](https://github.com/haraldk/TwelveMonkeys) | 1271 | TwelveMonkeys ImageIO: Additional plug-ins and extensions for Java's ImageIO | 3 days ago |
| [imgscalr](https://github.com/rkalla/imgscalr) | 1064 | Simple Java image-scaling library implementing Chris Campbell's incremental scaling algorithm as well as Java2D's "best-practices" image-scaling techniques. | 3 years ago |
| [tess4j](https://github.com/nguyenq/tess4j) | 1012 | Java JNA wrapper for Tesseract OCR API | 2 months ago |
| [image-comparison](https://github.com/romankh3/image-comparison) | 154 | Published on Maven Central Java Library that compares 2 images with the same sizes and shows the differences visually by drawing rectangles. Some parts of the image can be excluded from the comparison. Can be used for automation QA tests. | a month ago |


### [Introspection](#introspection)
* Libraries that help make the Java introspection and reflection API easier and faster to use.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [reflections](https://github.com/ronmamo/reflections) | 3703 | Java runtime metadata analysis | 16 days ago |
| [jOOR](https://github.com/jOOQ/jOOR) | 2454 |  jOOR - Fluent Reflection in Java jOOR is a very simple fluent API that gives access to your Java Class structures in a more intuitive way. The JDK's reflection APIs are hard and verbose to use. Other languages have much simpler constructs to access type meta information at runtime. Let us make Java reflection better. | 2 months ago |
| [classgraph](https://github.com/classgraph/classgraph) | 2023 | An uber-fast parallelized Java classpath scanner and module scanner. | 2 hours ago |
| [reflectasm](https://github.com/EsotericSoftware/reflectasm) | 1220 | High performance Java reflection | 8 months ago |


### [Job Scheduling](#job-scheduling)
* Libraries for scheduling background jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [quartz](https://github.com/quartz-scheduler/quartz) | 4414 | Code for Quartz Scheduler | a month ago |
| [ShedLock](https://github.com/lukas-krecan/ShedLock) | 1808 | Distributed lock for your scheduled tasks | a day ago |
| [easy-batch](https://github.com/j-easy/easy-batch) | 503 | The simple, stupid batch framework for Java | 11 days ago |
| [jobrunr](https://github.com/jobrunr/jobrunr) | 415 | An extremely easy way to perform background processing in Java. Backed by persistent storage. Open and free for commercial use. | 4 days ago |
| [db-scheduler](https://github.com/kagkarlsson/db-scheduler) | 397 | Persistent cluster-friendly scheduler for Java | 18 days ago |
| [Sundial](https://github.com/knowm/Sundial) | 236 | A Light-weight Job Scheduling Framework | 14 days ago |
| [Wisp](https://github.com/Coreoz/Wisp) | 67 | A simple Java Scheduler library with a minimal footprint and a straightforward API | 2 months ago |


### [JSON](#json)
* Libraries for serializing and deserializing JSON to and from Java objects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fastjson](https://github.com/alibaba/fastjson) | 23430 | A fast JSON parser/generator for Java.   | 4 days ago |
| [gson](https://github.com/google/gson) | 19626 | A Java serialization/deserialization library to convert Java Objects into JSON and back | 2 days ago |
| [moshi](https://github.com/square/moshi) | 7364 | A modern JSON library for Kotlin and Java. | 4 days ago |
| [jackson](https://github.com/FasterXML/jackson) | 6623 | Main Portal page for the Jackson project | 3 months ago |
| [JsonPath](https://github.com/json-path/JsonPath) | 5955 | Java JsonPath implementation | 3 days ago |
| [LoganSquare](https://github.com/bluelinelabs/LoganSquare) | 3247 | Screaming fast JSON parsing and serialization library for Android. | 9 months ago |
| [jolt](https://github.com/bazaarvoice/jolt) | 1069 | JSON to JSON transformation library written in Java. | 2 months ago |
| [dsl-json](https://github.com/ngs-doo/dsl-json) | 722 | High performance JVM JSON library | 2 months ago |
| [HikariJSON](https://github.com/brettwooldridge/HikariJSON) | 431 | High-performance JSON parser | 4 years ago |
| [jackson-modules-java8](https://github.com/FasterXML/jackson-modules-java8) | 318 | Set of support modules for Java 8 datatypes (Optionals, date/time) and features (parameter names) | a month ago |
| [json-io](https://github.com/jdereg/json-io) | 275 | Convert Java to JSON. Convert JSON to Java.  Pretty print JSON.  Java JSON serializer. | 8 months ago |
| [JsonSurfer](https://github.com/jsurfer/JsonSurfer) | 206 | A streaming JsonPath processor in Java | 6 months ago |
| [jackson-datatype-money](https://github.com/zalando/jackson-datatype-money) | 174 | Extension module to properly support datatypes of javax.money | 3 days ago |
| [yasson](https://github.com/eclipse-ee4j/yasson) | 158 | Eclipse Yasson project | 12 days ago |


### [JVM and JDK](#jvm-and-jdk)
* Current implementations of the JVM/JDK.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graal](https://github.com/oracle/graal) | 15319 | GraalVM: Run Programs Faster Anywhere :rocket: | 2 hours ago |
| [dragonwell8](https://github.com/alibaba/dragonwell8) | 3212 | Alibaba Dragonwell8 JDK | 3 days ago |
| [openj9](https://github.com/eclipse-openj9/openj9) | 2663 | Eclipse OpenJ9: A Java Virtual Machine for OpenJDK that's optimized for small footprint, fast start-up, and high throughput.   Builds on Eclipse OMR (https://github.com/eclipse/omr) and combines with the Extensions for OpenJDK for OpenJ9 repo. | 6 hours ago |
| [avian](https://github.com/ReadyTalk/avian) | 1192 | [INACTIVE] Avian is a lightweight virtual machine and class library designed to provide a useful subset of Java's features, suitable for building self-contained applications. | 4 months ago |
| [CodenameOne](https://github.com/codenameone/CodenameOne) | 1014 | Cross-platform framework for building truly native mobile apps with Java or Kotlin. Write Once Run Anywhere support for iOS, Android, Desktop & Web. | 12 hours ago |


### [Logging](#logging)
* Libraries that log the behavior of an application.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [p6spy](https://github.com/p6spy/p6spy) | 1458 | P6Spy is a framework that enables database data to be seamlessly intercepted and logged with no code changes to the application. | 2 months ago |
| [logbook](https://github.com/zalando/logbook) | 882 | An extensible Java library for HTTP request and response logging | 3 days ago |
| [opentracing-toolbox](https://github.com/zalando/opentracing-toolbox) | 166 | Best-of-breed OpenTracing utilities, instrumentations and extensions | 3 days ago |


### [Machine Learning](#machine-learning)
* Tools that provide specific statistical algorithms for learning from data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [smile](https://github.com/haifengl/smile) | 5269 | Statistical Machine Intelligence & Learning Engine | a day ago |
| [oryx](https://github.com/OryxProject/oryx) | 1755 | Oryx 2: Lambda architecture on Apache Spark, Apache Kafka for real-time large scale machine learning | 2 months ago |
| [siddhi](https://github.com/siddhi-io/siddhi) | 1210 | Stream Processing and Complex Event Processing Engine | 2 days ago |
| [JSAT](https://github.com/EdwardRaff/JSAT) | 693 | Java Statistical Analysis Tool, a Java library for Machine Learning  | a month ago |


### [Messaging](#messaging)
* Tools that help send messages between clients to ensure protocol independency.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [EventBus](https://github.com/greenrobot/EventBus) | 23397 | Event bus for Android and Java that simplifies communication between Activities, Fragments, Threads, Services, etc. Less code, better quality. | a month ago |
| [aeron](https://github.com/real-logic/aeron) | 5541 | Efficient reliable UDP unicast, UDP multicast, and IPC message transport | 2 days ago |
| [Smack](https://github.com/igniterealtime/Smack) | 2230 | A modular and portable open source XMPP client library written in Java for Android and Java (SE) VMs | a day ago |
| [jeromq](https://github.com/zeromq/jeromq) | 2010 | Pure Java ZeroMQ  | 15 hours ago |
| [rabbitmq-java-client](https://github.com/rabbitmq/rabbitmq-java-client) | 985 | RabbitMQ Java client | 21 days ago |
| [nakadi](https://github.com/zalando/nakadi) | 750 | A distributed event bus that implements a RESTful API abstraction on top of Kafka-like queues | 2 days ago |
| [nats.java](https://github.com/nats-io/nats.java) | 343 | Java client for NATS | 5 days ago |


### [Microservice](#microservice)
* Tools for creating and managing microservices.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [Sentinel](https://github.com/alibaba/Sentinel) | 16399 | A powerful flow control component enabling reliability, resilience and monitoring for microservices. (面向云原生微服务的高可用流控防护组件) | 3 days ago |
| [eureka](https://github.com/Netflix/eureka) | 10480 | AWS Service registry for resilient mid-tier load balancing and failover. | a day ago |
| [armeria](https://github.com/line/armeria) | 3129 | Your go-to microservice framework for any situation, from the creator of Netty et al. You can build any type of microservice leveraging your favorite technologies,  including gRPC, Thrift, Kotlin, Retrofit, Reactive Streams, Spring Boot and Dropwizard. | 2 hours ago |
| [consul-api](https://github.com/Ecwid/consul-api) | 375 | Java client for Consul HTTP API | 20 days ago |


### [Miscellaneous](#miscellaneous)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [java-design-patterns](https://github.com/iluwatar/java-design-patterns) | 67834 | Design patterns implemented in Java | 15 hours ago |
| [java8-tutorial](https://github.com/winterbe/java8-tutorial) | 14759 | Modern Java - A Guide to Java 8 | 2 months ago |
| [FizzBuzzEnterpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) | 14616 | FizzBuzz Enterprise Edition is a no-nonsense implementation of FizzBuzz made by serious businessmen for serious business purposes. | a month ago |
| [j2objc](https://github.com/google/j2objc) | 5781 | A Java to iOS Objective-C translation tool and runtime. | 3 days ago |
| [OctoLinker](https://github.com/OctoLinker/OctoLinker) | 4722 | OctoLinker — Links together, what belongs together | 2 days ago |
| [jimfs](https://github.com/google/jimfs) | 2003 | An in-memory file system for Java 7+ | 5 days ago |
| [maven-wrapper](https://github.com/takari/maven-wrapper) | 1493 | The easiest way to integrate Maven into your project! | 10 days ago |
| [cqengine](https://github.com/npgall/cqengine) | 1342 | Ultra-fast SQL-like queries on Java collections | 6 days ago |
| [jsweet](https://github.com/cincheo/jsweet) | 1192 | A Java to JavaScript transpiler. | 3 days ago |
| [jbot](https://github.com/rampatra/jbot) | 1158 | Make Slack and Facebook Bots in Java. | 4 months ago |
| [ff4j](https://github.com/ff4j/ff4j) | 932 | Feature Flags for Java made easy | 3 days ago |
| [simple-java-mail](https://github.com/bbottema/simple-java-mail) | 854 | Simple API, Complex Emails (JavaMail smtp wrapper) | 5 days ago |
| [polyglot-maven](https://github.com/takari/polyglot-maven) | 764 | Support alternative markup for Apache Maven POM files | 2 days ago |
| [typetools](https://github.com/jhalterman/typetools) | 513 | Tools for working with generic types | 2 months ago |
| [service-proxy](https://github.com/membrane/service-proxy) | 355 | API gateway for REST and SOAP written in Java. | 3 days ago |
| [smooks](https://github.com/smooks/smooks) | 301 | Extensible data integration Java framework for building XML and non-XML fragment-based applications  | 14 days ago |
| [modernizer-maven-plugin](https://github.com/gaul/modernizer-maven-plugin) | 241 | Detect uses of legacy Java APIs | a month ago |
| [PipelinR](https://github.com/sizovs/PipelinR) | 148 | PipelinR is a lightweight command processing pipeline ❍ ⇢ ❍ ⇢ ❍ for your Java awesome app.  | 3 months ago |
| [yGuard](https://github.com/yWorks/yGuard) | 141 | The open-source Java obfuscation tool working with Ant and Gradle by yWorks - the diagramming experts | 5 days ago |
| [MinimalFTP](https://github.com/Guichaguri/MinimalFTP) | 100 | A lightweight, simple FTP server. Pure Java, no dependencies. | a year ago |
| [xmlbeam](https://github.com/SvenEwald/xmlbeam) | 64 | Java XML library. A really cool one. Obviously. | 22 days ago |


### [Monitoring](#monitoring)
* Tools that monitor applications in production.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [pinpoint](https://github.com/pinpoint-apm/pinpoint) | 11430 | APM, (Application Performance Management) tool for large-scale distributed systems.  | 3 days ago |
| [metrics](https://github.com/dropwizard/metrics) | 7361 | :chart_with_upwards_trend: Capturing JVM- and application-level metrics. So you know what's going on. | 2 hours ago |
| [javamelody](https://github.com/javamelody/javamelody) | 2410 | JavaMelody : monitoring of JavaEE applications | 14 days ago |
| [jmxtrans](https://github.com/jmxtrans/jmxtrans) | 1646 | jmxtrans | 2 months ago |
| [stagemonitor](https://github.com/stagemonitor/stagemonitor) | 1640 | an open source solution to application performance monitoring for java server applications | 10 months ago |
| [client_java](https://github.com/prometheus/client_java) | 1522 | Prometheus instrumentation library for JVM applications | 7 days ago |
| [automon](https://github.com/stevensouza/automon) | 548 | Automon combines the power of AOP (AspectJ) with monitoring or logging tools you already use to declaratively monitor your Java code, the JDK, and 3rd party libraries. | 5 months ago |
| [jaeger-client-java](https://github.com/jaegertracing/jaeger-client-java) | 454 | Jaeger Bindings for Java OpenTracing API | a month ago |
| [dd-trace-java](https://github.com/DataDog/dd-trace-java) | 244 | Datadog APM client for Java | a day ago |
| [Sysmon](https://github.com/palantir/Sysmon) | 151 | A lightweight platform monitoring tool for Java VMs | 5 years ago |
| [nudge4j](https://github.com/lorenzoongithub/nudge4j) | 145 | Get inside your JVM | a year ago |
| [failsafe-actuator](https://github.com/zalando/failsafe-actuator) | 49 | Endpoint library for the failsafe framework | 7 months ago |
| [sematext-agent-java](https://github.com/sematext/sematext-agent-java) | 12 | Sematext Monitoring Agent | 3 days ago |


### [Native](#native)
* For working with platform-specific native libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jna](https://github.com/java-native-access/jna) | 6554 | Java Native Access | a day ago |
| [javacpp](https://github.com/bytedeco/javacpp) | 3488 | The missing bridge between Java and native C++ | a day ago |
| [jnr-ffi](https://github.com/jnr/jnr-ffi) | 869 | Java Abstracted Foreign Function Layer | 6 hours ago |
| [aparapi](https://github.com/Syncleus/aparapi) | 363 | The New Official Aparapi: a framework for executing native Java and Scala code on the GPU. | 4 months ago |


### [Natural Language Processing](#natural-language-processing)
* Libraries that specialize in processing text.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cogcomp-nlp](https://github.com/CogComp/cogcomp-nlp) | 417 | CogComp's Natural Language Processing libraries and Demos:  | a month ago |


### [Networking](#networking)
* Libraries for building network servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dubbo](https://github.com/apache/dubbo) | 35481 | Apache Dubbo is a high-performance, java based, open source RPC framework. | 18 hours ago |
| [grpc-java](https://github.com/grpc/grpc-java) | 8746 | The Java gRPC implementation. HTTP/2 based RPC | 2 days ago |
| [sshj](https://github.com/hierynomus/sshj) | 1897 | ssh, scp and sftp for java | 12 days ago |
| [kryonet](https://github.com/EsotericSoftware/kryonet) | 1615 |  TCP/UDP client/server library for Java, based on Kryo | 4 months ago |
| [servicetalk](https://github.com/apple/servicetalk) | 676 | A networking framework that evolves with your application | 2 days ago |
| [comsat](https://github.com/puniverse/comsat) | 591 | Fibers and actors for web development | 4 years ago |
| [drift](https://github.com/airlift/drift) | 184 | An annotation-based Java library for creating Thrift serializable types and services. | 7 months ago |
| [tls-channel](https://github.com/marianobarrios/tls-channel) | 114 | A Java library that implements a ByteChannel interface over SSLEngine, enabling easy-to-use (socket-like) TLS for Java applications. | 2 months ago |
| [urnlib](https://github.com/slub/urnlib) | 21 | Java library for representing, parsing and encoding URNs as in RFC2141 and RFC8141 | 19 days ago |


### [ORM](#orm)
* APIs that handle the persistence of objects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mybatis-3](https://github.com/mybatis/mybatis-3) | 15712 | MyBatis SQL mapper framework for Java | a day ago |
| [ObjectiveSql](https://github.com/braisdom/ObjectiveSql) | 1121 | ObjectiveSQL is an ORM framework in Java based on ActiveRecord pattern, which encourages rapid development and clean, codes with the least and convention over configuration. | 4 months ago |
| [SimpleFlatMapper](https://github.com/arnaudroger/SimpleFlatMapper) | 379 | Fast and Easy mapping from database and csv to POJO. A java micro ORM, lightweight alternative to iBatis and Hibernate. Fast Csv Parser and Csv Mapper | a month ago |
| [doma](https://github.com/domaframework/doma) | 269 | DAO oriented database mapping framework for Java 8+ | 17 hours ago |
| [permazen](https://github.com/permazen/permazen) | 268 | Language-Natural Persistence Layer for Java | 10 hours ago |


### [PDF](#pdf)
* Tools to help with PDF files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [OpenPDF](https://github.com/LibrePDF/OpenPDF) | 1968 | OpenPDF is a free Java library for creating and editing PDF files with a LGPL and MPL open source license. OpenPDF is based on a fork of iText. We welcome contributions from other developers. Please feel free to submit pull-requests and bugreports to this GitHub repository. ⛺ | 3 days ago |
| [flyingsaucer](https://github.com/flyingsaucerproject/flyingsaucer) | 1584 | XML/XHTML and CSS 2.1 renderer in pure Java | 13 days ago |
| [openhtmltopdf](https://github.com/danfickle/openhtmltopdf) | 1152 | An HTML to PDF library for the JVM. Based on Flying Saucer and Apache PDF-BOX 2. With SVG image support. Now also with accessible PDF support (WCAG, Section 508, PDF/UA)! | 2 days ago |
| [tabula-java](https://github.com/tabulapdf/tabula-java) | 1032 | Extract tables from PDF files | 11 days ago |
| [dynamicreports](https://github.com/dynamicreports/dynamicreports) | 134 | Java reporting library for creating dynamic report designs at runtime | a month ago |


### [Performance analysis](#performance-analysis)
* Tools for performance analysis, profiling and benchmarking.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jitwatch](https://github.com/AdoptOpenJDK/jitwatch) | 2416 | Log analyser / visualiser for Java HotSpot JIT compiler. Inspect inlining decisions, hot methods, bytecode, and assembly. View results in the JavaFX user interface. | a month ago |
| [honest-profiler](https://github.com/jvm-profiling-tools/honest-profiler) | 1153 | A sampling JVM profiler without the safepoint sample bias | 5 months ago |
| [jHiccup](https://github.com/giltene/jHiccup) | 588 | jHiccup is a non-intrusive instrumentation tool that logs and records
platform "hiccups" - including the JVM stalls that often happen when
Java applications are executed and/or any OS or hardware platform noise
that may cause the running application to not be continuously runnable. | 5 months ago |
| [LatencyUtils](https://github.com/LatencyUtils/LatencyUtils) | 428 | Utilities for latency measurement and reporting | 8 months ago |


### [Platform](#platform)
* Frameworks that are suites of multiple libraries encompassing several categories.

#### [Apache Commons](#apache-commons)
* [Apache Commons](http://commons.apache.org/proper/)

#### [Other](#other)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [light-4j](https://github.com/networknt/light-4j) | 3230 | A fast, lightweight and more productive microservices framework | 5 days ago |
| [light-oauth2](https://github.com/networknt/light-oauth2) | 252 | A fast, light and cloud native OAuth 2.0 authorization microservices based on light-4j | 8 days ago |
| [Orienteer](https://github.com/OrienteerBAP/Orienteer) | 139 | Business Application Platform - no-code/low-code platform to build business applications | 7 days ago |


### [Processes](#processes)
* Libraries that help the management of operating system processes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zt-exec](https://github.com/zeroturnaround/zt-exec) | 730 | ZeroTurnaround Process Executor | a month ago |
| [zt-process-killer](https://github.com/zeroturnaround/zt-process-killer) | 99 | ZeroTurnaround Process Killer | a month ago |
| [ch.vorburger.exec](https://github.com/vorburger/ch.vorburger.exec) | 15 | Java library to launch external processes | 15 days ago |


### [Reactive libraries](#reactive-libraries)
* Libraries for developing reactive applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [RxJava](https://github.com/ReactiveX/RxJava) | 44716 | RxJava – Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM. | 3 days ago |
| [reactive-streams-jvm](https://github.com/reactive-streams/reactive-streams-jvm) | 4063 | Reactive Streams Specification for the JVM | 8 days ago |
| [reactor-core](https://github.com/reactor/reactor-core) | 3603 | Non-Blocking Reactive Foundation for the JVM | 11 days ago |


### [REST Frameworks](#rest-frameworks)
* Frameworks specifically for creating RESTful services.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dropwizard](https://github.com/dropwizard/dropwizard) | 7969 | A damn simple library for building production-ready RESTful web services. | an hour ago |
| [rest.li](https://github.com/linkedin/rest.li) | 2137 | Rest.li is a REST+JSON framework for building robust, scalable service architectures using dynamic discovery and simple asynchronous APIs. | a day ago |
| [springdoc-openapi](https://github.com/springdoc/springdoc-openapi) | 1241 | Library for OpenAPI 3 with spring-boot | 12 days ago |
| [micro-server](https://github.com/aol/micro-server) | 931 | Microserver is a Java 8 native, zero configuration, standards based, battle hardened library to run Java Rest Microservices via a standard Java main class. Supporting pure Microservice or Micro-monolith styles. | 9 months ago |
| [RestExpress](https://github.com/RestExpress/RestExpress) | 924 | Minimalist Java framework for rapidly creating scalable, containerless, RESTful microservices. Ship a production-quality, headless, RESTful API in the shortest time possible. Uses Netty for HTTP, Jackson for JSON, Metrics for metrics, properties files for configuration. Sub-projects and plugins enable, NoSQL, Swagger, Auth0, HAL integration, etc. | 4 months ago |
| [restlet-framework-java](https://github.com/restlet/restlet-framework-java) | 616 | Leading REST API framework for Java | 2 months ago |


### [Science](#science)
* Libraries for scientific computing, analysis and visualization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tablesaw](https://github.com/jtablesaw/tablesaw) | 2610 | Java dataframe and visualization library | 6 days ago |
| [jgrapht](https://github.com/jgrapht/jgrapht) | 1913 | Master repository for the JGraphT project | 4 days ago |
| [XChart](https://github.com/knowm/XChart) | 1132 | XChart is a light-weight Java library for plotting data. | 5 days ago |
| [jgraphx](https://github.com/jgraph/jgraphx) | 620 |  | 7 months ago |
| [chart-fx](https://github.com/GSI-CS-CO/chart-fx) | 265 | A scientific charting library focused on performance optimised real-time data visualisation at 25 Hz update rates for data sets with a few 10 thousand up to 5 million data points. | 13 days ago |
| [morpheus-core](https://github.com/zavtech/morpheus-core) | 209 | The foundational library of the Morpheus data science framework | 3 years ago |
| [Erdos](https://github.com/Erdos-Graph-Framework/Erdos) | 105 | modular and modern graph-theory algorithms framework in Java | 4 months ago |
| [orson-charts](https://github.com/jfree/orson-charts) | 78 | A 3D chart library for Java applications (JavaFX, Swing or server-side). | 8 months ago |
| [LogicNG](https://github.com/logic-ng/LogicNG) | 65 | The Next Generation Logic Library | 3 months ago |
| [jtk](https://github.com/MinesJTK/jtk) | 42 | The Mines Java Toolkit | 2 months ago |


### [Search](#search)
* Engines that index documents for search and analysis.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [indexer4j](https://github.com/haeungun/indexer4j) | 42 | Simple full text indexing and searching library for Java | 2 years ago |


### [Security](#security)
* Libraries that handle security, authentication, authorization or session management.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tink](https://github.com/google/tink) | 11346 | Tink is a multi-language, cross-platform, open source library that provides cryptographic APIs that are secure, easy to use correctly, and hard(er) to misuse. | 2 days ago |
| [jjwt](https://github.com/jwtk/jjwt) | 7526 | Java JWT: JSON Web Token for Java and Android | 7 days ago |
| [keywhiz](https://github.com/square/keywhiz) | 2395 | A system for distributing and managing secrets | 7 days ago |
| [pac4j](https://github.com/pac4j/pac4j) | 2012 | Security engine for Java (authentication, authorization, multi frameworks): OAuth, CAS, SAML, OpenID Connect, LDAP, JWT... | 2 days ago |
| [themis](https://github.com/cossacklabs/themis) | 1288 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | a day ago |
| [nbvcxz](https://github.com/GoSimpleLLC/nbvcxz) | 211 | Password strength estimator | 7 months ago |
| [kalium](https://github.com/abstractj/kalium) | 202 | Java binding to the Networking and Cryptography (NaCl) library with the awesomeness of libsodium | 3 years ago |
| [hdiv](https://github.com/hdiv/hdiv) | 201 | Hdiv CE , Application Self-Protection | 3 months ago |
| [password4j](https://github.com/Password4j/password4j) | 138 | Password4j is a user-friendly cryptographic library that supports Argon2, Bcrypt, Scrypt, PBKDF2 and various cryptographic hash functions. | 14 days ago |
| [sslcontext-kickstart](https://github.com/Hakky54/sslcontext-kickstart) | 126 | 🔐 A lightweight high level library for configuring a http client or server based on SSLContext or other properties such as TrustManager, KeyManager or Trusted Certificates to communicate over SSL TLS for one way authentication or two way authentication provided by the SSLFactory. Support for Java, Scala and Kotlin based clients with examples. Available client examples are: Apache HttpClient, OkHttp, Spring RestTemplate, Spring WebFlux WebClient Jetty and Netty, the old and the new JDK HttpClient, the old and the new Jersey Client, Google HttpClient, Unirest, Retrofit, Feign, Methanol, Vertx, Scala client Finagle, Featherbed, Dispatch Reboot, AsyncHttpClient, Sttp, Akka, Requests Scala, Http4s Blaze, Kotlin client Fuel, http4k Kohttp and Ktor. Also gRPC and ElasticSearch examples are included | 3 days ago |
| [jwks-rsa-java](https://github.com/auth0/jwks-rsa-java) | 120 |  | a month ago |
| [securitybuilder](https://github.com/tersesystems/securitybuilder) | 39 | Fluent builders with typesafe API for the JCA | a day ago |
| [OTP-Java](https://github.com/BastiaanJansen/OTP-Java) | 28 | A small and easy-to-use one-time password generator library for Java according to RFC 4226 (HOTP) and RFC 6238 (TOTP). | 2 months ago |


### [Serialization](#serialization)
* Libraries that handle serialization with high efficiency.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [flatbuffers](https://github.com/google/flatbuffers) | 16323 | FlatBuffers: Memory Efficient Serialization Library | 15 hours ago |
| [kryo](https://github.com/EsotericSoftware/kryo) | 5048 | Java binary serialization and cloning: fast, efficient, automatic | 4 days ago |
| [fast-serialization](https://github.com/RuedigerMoeller/fast-serialization) | 1371 | FST: fast java serialization drop in-replacement  | 3 months ago |
| [msgpack-java](https://github.com/msgpack/msgpack-java) | 1203 | MessagePack serializer implementation for Java / msgpack.org[Java] | 6 days ago |
| [java-php-serializer](https://github.com/marcospassos/java-php-serializer) | 12 | A Java library for serializing objects as PHP serialization format. | 3 years ago |


### [Server](#server)
* Servers specifically used to deploy applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nanohttpd](https://github.com/NanoHttpd/nanohttpd) | 5941 | Tiny, easily embeddable HTTP server in Java. | 3 days ago |


### [Template Engine](#template-engine)
* Tools that substitute expressions in a template.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jade4j](https://github.com/neuland/jade4j) | 694 | a pug implementation written in Java (formerly known as jade) | a month ago |
| [rocker](https://github.com/fizzed/rocker) | 624 | Java 8 optimized, memory efficient, speedy template engine producing statically typed, plain java objects | a month ago |
| [jtwig](https://github.com/jtwig/jtwig) | 295 | Java modern template engine | 3 years ago |
| [jte](https://github.com/casid/jte) | 272 | Secure and speedy templates for Java and Kotlin. | 8 days ago |


### [Testing](#testing)
* Tools that test from model to the view.

#### Asynchronous(#asynchronous)
* Tools that simplify testing asynchronous services.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [rest-assured](https://github.com/rest-assured/rest-assured) | 5370 | Java DSL for easy testing of REST services | 12 days ago |
| [karate](https://github.com/intuit/karate) | 4872 | Test Automation Made Simple | 4 days ago |
| [awaitility](https://github.com/awaitility/awaitility) | 2592 | Awaitility is a small Java DSL for synchronizing asynchronous operations | 6 days ago |
| [concurrentunit](https://github.com/jhalterman/concurrentunit) | 381 | Toolkit for testing multi-threaded and asynchronous applications | 6 months ago |
| [hoverfly-java](https://github.com/SpectoLabs/hoverfly-java) | 134 | Java binding for Hoverfly | a month ago |


#### BDD(#bdd)
* Testing for the software development process that emerged from TDD and was heavily influenced by DDD and OOAD.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cucumber-jvm](https://github.com/cucumber/cucumber-jvm) | 2279 | Cucumber for the JVM | 16 hours ago |
| [serenity-core](https://github.com/serenity-bdd/serenity-core) | 552 | Serenity BDD is a test automation library designed to make writing automated acceptance tests easier, and more fun. | 3 days ago |
| [lambda-behave](https://github.com/RichardWarburton/lambda-behave) | 242 | A modern testing and behavioural specification framework for Java 8 | 8 months ago |
| [cukes](https://github.com/ctco/cukes) | 95 | Cucumber DSL for testing RESTful Web Services | 5 months ago |
| [j8spec](https://github.com/j8spec/j8spec) | 45 | Library that allows tests written in Java to follow the BDD style introduced by RSpec and Jasmine. | 4 years ago |


#### Fixtures(#fixtures)
* Everything related to the creation and handling of random data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [java-faker](https://github.com/DiUS/java-faker) | 2631 | Brings the popular ruby faker gem to Java | 2 days ago |
| [jfairy](https://github.com/Devskiller/jfairy) | 673 | Java fake data generator | 2 months ago |
| [fixture-factory](https://github.com/six2six/fixture-factory) | 387 | Generator fake objects from a template | 8 months ago |
| [randomizedtesting](https://github.com/randomizedtesting/randomizedtesting) | 155 | Randomized Testing (Core JUnit Runner, ANT, Maven) | 2 months ago |
| [beanmother](https://github.com/keepcosmos/beanmother) | 103 | A library for setting up Java objects as test data. | 2 days ago |


### [Frameworks](#frameworks)
* Provide environments to run tests for a specific use case.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ArchUnit](https://github.com/TNG/ArchUnit) | 1773 | A Java architecture test library, to specify and assert architecture rules in plain Java | 3 days ago |
| [pact-jvm](https://github.com/pact-foundation/pact-jvm) | 849 | JVM version of Pact. Enables consumer driven contract testing, providing a mock service and DSL for the consumer project, and interaction playback and verification for the service provider project. | 19 hours ago |


### [Matchers](#matchers)
* Libraries that provide custom matchers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xmlunit](https://github.com/xmlunit/xmlunit) | 235 | XMLUnit for Java 2.x | 4 months ago |


### [Miscellaneous](#miscellaneous)
* Other stuff related to testing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testcontainers-java](https://github.com/testcontainers/testcontainers-java) | 4959 | Testcontainers is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container. | 4 hours ago |
| [junit-dataprovider](https://github.com/TNG/junit-dataprovider) | 227 | A TestNG like dataprovider runner for JUnit with many additional features | 2 months ago |
| [MutabilityDetector](https://github.com/MutabilityDetector/MutabilityDetector) | 218 | Lightweight analysis tool for detecting mutability in Java classes | 15 days ago |
| [log-captor](https://github.com/Hakky54/log-captor) | 76 | 🎯  LogCaptor captures log entries for unit testing purposes | a day ago |
| [raml-tester](https://github.com/nidi3/raml-tester) | 70 | Test if a request/response matches a given raml definition | 2 years ago |


### [Mocking](#mocking)
* Tools which mock collaborators to help testing single, isolated units.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mockito](https://github.com/mockito/mockito) | 11880 | Most popular Mocking framework for unit tests written in Java | 4 days ago |
| [moco](https://github.com/dreamhead/moco) | 3690 | Easy Setup Stub Server | a month ago |
| [powermock](https://github.com/powermock/powermock) | 3535 | PowerMock is a Java framework that allows you to unit test code normally regarded as untestable. | 9 days ago |


### [Utility](#utility)
* Libraries which provide general utility functions.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [guava](https://github.com/google/guava) | 41356 | Google core libraries for Java | 6 hours ago |
| [arthas](https://github.com/alibaba/arthas) | 26086 | Alibaba Java Diagnostic Tool Arthas/Alibaba Java诊断利器Arthas | 3 days ago |
| [gephi](https://github.com/gephi/gephi) | 4332 | Gephi - The Open Graph Viz Platform | 2 months ago |
| [JavaVerbalExpressions](https://github.com/VerbalExpressions/JavaVerbalExpressions) | 2512 | Java regular expressions made easy. | 3 months ago |
| [embulk](https://github.com/embulk/embulk) | 1558 | Embulk: Pluggable Bulk Data Loader. | 18 days ago |
| [Dex](https://github.com/PatMartin/Dex) | 1249 | Dex : The Data Explorer -- A data visualization tool written in Java/Groovy/JavaFX capable of powerful ETL and publishing web visualizations. | 2 years ago |
| [bucket4j](https://github.com/vladimir-bukhtoyarov/bucket4j) | 1090 | Java rate limiting library based on token/leaky-bucket algorithm. | a month ago |
| [cactoos](https://github.com/yegor256/cactoos) | 624 | Object-Oriented Java primitives, as an alternative to Google Guava and Apache Commons | 21 days ago |
| [minio-java](https://github.com/minio/minio-java) | 478 | MinIO Client SDK for Java | 4 days ago |
| [underscore-java](https://github.com/javadev/underscore-java) | 338 | java port of Underscore.js | a day ago |
| [ch.vorburger.fswatch](https://github.com/vorburger/ch.vorburger.fswatch) | 19 | Java lib for monitoring directories or individual files via java.nio.file.WatchService | 14 days ago |


### [Version Managers](#version-managers)
* Utilities that help create the development shell environment and switch between different Java versions.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sdkman-cli](https://github.com/sdkman/sdkman-cli) | 4037 | The SDKMAN! Command Line Interface | 11 days ago |
| [jenv](https://github.com/jenv/jenv) | 3722 | Manage your Java environment  | 20 days ago |
| [jabba](https://github.com/shyiko/jabba) | 1855 | (cross-platform) Java Version Manager | a month ago |


### [Web Crawling](#web-crawling)
* Libraries that analyze the content of websites.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [webmagic](https://github.com/code4craft/webmagic) | 9825 | A scalable web crawler framework for Java. | 4 days ago |
| [crawler4j](https://github.com/yasserg/crawler4j) | 4120 | Open Source Web Crawler for Java | 2 months ago |


### [Web Frameworks](#web-frameworks)
* Frameworks that handle the communication between the layers of a web application.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blade](https://github.com/lets-blade/blade) | 5513 | :rocket: Lightning fast and elegant mvc framework for Java8 | 2 months ago |
| [takes](https://github.com/yegor256/takes) | 674 | True Object-Oriented Java Web Framework | a month ago |


### [Resources](#resources)
* Awesome lists related to the Java & JVM ecosystem.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [awesome-microservices](https://github.com/mfornos/awesome-microservices) | 10119 | A curated list of Microservice Architecture related principles and technologies. | 3 days ago |
| [useful-java-links](https://github.com/Vedenin/useful-java-links) | 5000 | A list of useful Java frameworks, libraries, software and hello worlds examples | 25 days ago |
| [awesome-rest](https://github.com/marmelab/awesome-rest) | 2786 | A collaborative list of great resources about RESTful API architecture, development, test, and performance | 12 days ago |
| [AwesomeJavaFX](https://github.com/mhrimaz/AwesomeJavaFX) | 2339 | A curated list of awesome JavaFX libraries, books, frameworks, etc... | 13 days ago |
| [java-developer-roadmap](https://github.com/s4kibs4mi/java-developer-roadmap) | 1754 | Roadmap to becoming a Java developer in 2021 | a month ago |
| [awesome-jvm](https://github.com/deephacks/awesome-jvm) | 1642 | A curated list of awesome loosely performance related JVM stuff. Inspired by awesome-python. | 9 months ago |
| [awesome-ciandcd](https://github.com/cicdops/awesome-ciandcd) | 1286 | continuous integration and continuous delivery | 5 months ago |
| [java-concurrency](https://github.com/code-review-checklists/java-concurrency) | 893 | Checklist for code reviews | 7 months ago |
| [awesome-selenium](https://github.com/christian-bromann/awesome-selenium) | 714 | A curated list of delightful Selenium resources. | 6 months ago |
| [awesome-gradle](https://github.com/ksoichiro/awesome-gradle) | 349 | A curated list of awesome Gradle plugins and resources for a better development workflow automation. | a year ago |
| [awesome-graal](https://github.com/neomatrix369/awesome-graal) | 310 | A curated list of awesome resources for Graal, GraalVM, Truffle and related topics | 23 days ago |
| [awesome-annotation-processing](https://github.com/gunnarmorling/awesome-annotation-processing) | 221 | A curated list of resources related to the Java annotation processing API (JSR 269) | 3 months ago |


