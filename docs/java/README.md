# Java
* [GitHub Toweave's Awesome. Don't skimp on your's star.](https://github.com/toweave/awesome/)
* A curated list of Java frameworks, libraries, software and resources.
* Inspired by Awesome.
* If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
* Last Sync Time: Mon Jul 19 2021 09:30:39 GMT+0800 (GMT+08:00)
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
| [mapstruct](https://github.com/mapstruct/mapstruct) | 4075 | An annotation processor for generating type-safe bean mappers | 12 hours ago |
| [modelmapper](https://github.com/modelmapper/modelmapper) | 1796 | Intelligent object mapping | a month ago |
| [orika](https://github.com/orika-mapper/orika) | 1070 | Simpler, better and faster Java bean mapping framework | 24 days ago |
| [selma](https://github.com/xebia-france/selma) | 202 | Selma Java bean mapping that compiles | 2 years ago |
| [jmapper-core](https://github.com/jmapper-framework/jmapper-core) | 168 | Elegance, high performance and robustness all in one java bean mapper | 2 months ago |
| [remap](https://github.com/remondis-it/remap) | 83 | A declarative mapping library to simplify testable object mappings. | a month ago |
| [doov](https://github.com/doov-org/doov) | 62 | dOOv (Domain Object Oriented Validation) a fluent API for type-safe bean validation and mapping | 2 months ago |


### [Bytecode Manipulation](#bytecode-manipulation)
* Libraries to manipulate bytecode programmatically.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [bytecode-viewer](https://github.com/Konloch/bytecode-viewer) | 12236 | A Java 8+ Jar & Android APK Reverse Engineering Suite (Decompiler, Editor, Debugger & More) | 5 hours ago |
| [cglib](https://github.com/cglib/cglib) | 4081 | cglib - Byte Code Generation Library is high level API to generate and transform Java byte code. It is used by AOP, testing, data access frameworks to generate dynamic proxy objects and intercept field access. | 5 months ago |
| [javassist](https://github.com/jboss-javassist/javassist) | 3222 | Java bytecode engineering toolkit | 2 days ago |
| [Mixin](https://github.com/SpongePowered/Mixin) | 641 | Mixin is a trait/mixin and bytecode weaving framework for Java using ASM | 17 days ago |
| [perses](https://github.com/nicolasmanic/perses) | 53 | A project to cause (controlled) destruction on your jvm application  | 7 months ago |


### [CLI](#cli)
* Libraries for everything related to the CLI.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [lanterna](https://github.com/mabe02/lanterna) | 1680 | Java library for creating text-based GUIs | 8 days ago |
| [jline3](https://github.com/jline/jline3) | 900 | JLine is a Java library for handling console input. | a month ago |
| [airline](https://github.com/airlift/airline) | 846 | Java annotation-based framework for parsing Git like command line structures | a month ago |
| [jansi](https://github.com/fusesource/jansi) | 835 | Jansi is a small java library that allows you to use ANSI escape sequences to format your console output which works even on windows.  | 23 days ago |
| [asciitable](https://github.com/vdmeer/asciitable) | 321 | Several implementations of a text table, originally using ASCII and UTF-8 characters for borders. | 3 years ago |
| [text-io](https://github.com/beryx/text-io) | 240 | A library for creating interactive console applications in Java | 9 months ago |
| [java-ascii-render](https://github.com/indvd00m/java-ascii-render) | 116 | ASCII renderer in pure java with no external dependencies | 9 months ago |
| [jbock](https://github.com/jbock-java/jbock) | 49 | Reflectionless command line parser | 3 days ago |


### [Code Analysis](#code-analysis)
* Tools that provide metrics and quality measurements.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [infer](https://github.com/facebook/infer) | 12428 | A static analyzer for Java, C, C++, and Objective-C | 3 days ago |
| [checkstyle](https://github.com/checkstyle/checkstyle) | 6113 | Checkstyle is a development tool to help programmers write Java code that adheres to a coding standard. By default it supports the Google Java Style Guide and Sun Code Conventions, but is highly configurable. It can be invoked with an ANT task and a command line program. | 6 hours ago |
| [error-prone](https://github.com/google/error-prone) | 5644 | Catch common Java mistakes as compile-time errors | 13 hours ago |
| [pmd](https://github.com/pmd/pmd) | 3476 | An extensible multilanguage static code analyzer. | 2 days ago |
| [NullAway](https://github.com/uber/NullAway) | 2981 | A tool to help eliminate NullPointerExceptions (NPEs) in your Java code with low build-time overhead | 4 days ago |
| [spotbugs](https://github.com/spotbugs/spotbugs) | 2386 | SpotBugs is FindBugs' successor. A tool for static analysis to look for bugs in Java code. | 2 days ago |
| [spoon](https://github.com/INRIA/spoon) | 1161 | Spoon is a metaprogramming library to analyze and transform Java source code (up to Java 15). :spoon: is made with :heart:, :beers: and :sparkles:. It parses source files to build a well-designed AST with powerful analysis and transformation API. | 5 hours ago |
| [sonar-java](https://github.com/SonarSource/sonar-java) | 795 | :coffee: SonarSource Static Analyzer for Java Code Quality and Security | 2 days ago |


### [Code Generators](#code-generators)
* Tools that generate patterns for repetitive code in order to reduce verbosity and error-proneness.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [generator-jhipster](https://github.com/jhipster/generator-jhipster) | 18636 | JHipster is a development platform to quickly generate, develop, & deploy modern web applications & microservice architectures. | 4 hours ago |
| [auto](https://github.com/google/auto) | 9302 | A collection of source code generators for Java. | 2 days ago |
| [javapoet](https://github.com/square/javapoet) | 9006 | A Java API for generating .java source files. | 2 months ago |
| [FreeBuilder](https://github.com/inferred/FreeBuilder) | 776 | Automatic generation of the Builder pattern for Java | 3 months ago |
| [adt4j](https://github.com/sviperll/adt4j) | 130 | adt4j - Algebraic Data Types for Java | 3 years ago |


### [Computer Vision](#computer-vision)
* Libraries which seek to gain high level information from images and videos.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [javacv](https://github.com/bytedeco/javacv) | 5231 | Java interface to OpenCV, FFmpeg, and more | 12 days ago |


### [Configuration](#configuration)
* Libraries that provide external configuration.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [config](https://github.com/lightbend/config) | 5335 | configuration library for JVM languages using HOCON files | 2 months ago |
| [owner](https://github.com/matteobaccan/owner) | 818 | Get rid of the boilerplate code in properties based configuration. | 2 months ago |
| [cfg4j](https://github.com/cfg4j/cfg4j) | 529 | Modern configuration library for distributed apps written in Java. | a year ago |
| [centraldogma](https://github.com/line/centraldogma) | 402 | Highly-available version-controlled service configuration repository based on Git, ZooKeeper and HTTP/2 | 10 hours ago |
| [Configurate](https://github.com/SpongePowered/Configurate) | 172 | A simple configuration library for Java applications providing a node structure, a variety of formats, and tools for transformation | 7 days ago |
| [kaconf](https://github.com/mariomac/kaconf) | 46 | KickAss Configuration. An annotation-based configuration system for Java and Kotlin | a year ago |
| [dotenv](https://github.com/shyiko/dotenv) | 36 | A twelve-factor configuration (12factor.net/config) library for Java 8+ | 3 years ago |


### [Constraint Satisfaction Problem Solver](#constraint-satisfaction-problem-solver)
* Libraries that help with implementing optimization and satisfiability problems.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jacop](https://github.com/radsz/jacop) | 180 | Java Constraint Programming solver | 17 days ago |


### [CSV](#csv)
* Frameworks and libraries that simplify reading/writing CSV data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [univocity-parsers](https://github.com/uniVocity/univocity-parsers) | 798 | uniVocity-parsers is a suite of extremely fast and reliable parsers for Java. It provides a consistent interface for handling different file formats, and a solid framework for the development of new parsers. | a month ago |
| [FastCSV](https://github.com/osiegmar/FastCSV) | 314 | High performance CSV reader and writer for Java. | 4 days ago |


### [Data Structures](#data-structures)
* Efficient and specific data structures.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [protobuf](https://github.com/protocolbuffers/protobuf) | 49067 | Protocol Buffers - Google's data interchange format | 2 days ago |
| [wire](https://github.com/square/wire) | 3547 | gRPC and protocol buffers for Android, Kotlin, and Java. | a day ago |
| [simple-binary-encoding](https://github.com/real-logic/simple-binary-encoding) | 2463 | Simple Binary Encoding (SBE) - High Performance Message Codec | 3 days ago |
| [tape](https://github.com/square/tape) | 2401 | A lightning fast, transactional, file-based FIFO for Android and Java. | 8 months ago |
| [RoaringBitmap](https://github.com/RoaringBitmap/RoaringBitmap) | 2310 | A better compressed bitset in Java | 20 days ago |
| [pcollections](https://github.com/hrldcpr/pcollections) | 670 | A Persistent Java Collections Library | 7 months ago |
| [bigqueue](https://github.com/bulldog2011/bigqueue) | 473 | A big, fast and persistent queue based on memory mapped file. | 9 months ago |
| [HyperMinHash-java](https://github.com/LiveRamp/HyperMinHash-java) | 41 | Union, intersection, and set cardinality in loglog space | 6 months ago |


### [Database](#database)
* Everything that simplifies interactions with the database.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [redisson](https://github.com/redisson/redisson) | 16933 | Redisson - Redis Java client with features of In-Memory Data Grid. Over 50 Redis based Java objects and services: Set, Multimap, SortedSet, Map, List, Queue, Deque, Semaphore, Lock, AtomicLong, Map Reduce, Publish / Subscribe, Bloom filter, Spring Cache, Tomcat, Scheduler, JCache API, Hibernate, MyBatis, RPC, local cache ... | 4 days ago |
| [HikariCP](https://github.com/brettwooldridge/HikariCP) | 15268 | 光 HikariCP・A solid, high-performance, JDBC connection pool at last. | 2 days ago |
| [realm-java](https://github.com/realm/realm-java) | 11157 | Realm is a mobile database: a replacement for SQLite & ORMs | 2 days ago |
| [jedis](https://github.com/redis/jedis) | 9943 | A blazingly small and sane redis java client | 3 days ago |
| [Leaf](https://github.com/Meituan-Dianping/Leaf) | 4722 | Distributed ID Generate Service | 6 days ago |
| [requery](https://github.com/requery/requery) | 3052 | requery - modern SQL based query & persistence for Java / Kotlin / Android | a year ago |
| [Chronicle-Map](https://github.com/OpenHFT/Chronicle-Map) | 2208 | Replicate your Key Value Store across your network, with consistency, persistance and performance. | 3 days ago |
| [Jest](https://github.com/searchbox-io/Jest) | 2070 | Elasticsearch Java Rest Client. | a month ago |
| [speedment](https://github.com/speedment/speedment) | 1944 | Speedment is a Stream ORM Java Toolkit and Runtime | 2 months ago |
| [xodus](https://github.com/JetBrains/xodus) | 902 | Transactional schema-less embedded database used by JetBrains YouTrack and JetBrains Hub. | 23 days ago |
| [flexy-pool](https://github.com/vladmihalcea/flexy-pool) | 880 | FlexyPool adds metrics and failover strategies to a given Connection Pool, allowing it to resize on demand. | 2 months ago |
| [Jinq](https://github.com/my2iu/Jinq) | 620 | LINQ-style queries for Java 8 | 4 months ago |
| [MariaDB4j](https://github.com/vorburger/MariaDB4j) | 607 | MariaDB Embedded in Java JAR | 21 hours ago |
| [exist](https://github.com/eXist-db/exist) | 312 | eXist Native XML Database and Application Platform | 4 days ago |
| [arangodb-java-driver](https://github.com/arangodb/arangodb-java-driver) | 179 | The official ArangoDB Java driver. | 17 days ago |
| [jetcd](https://github.com/justinsb/jetcd) | 133 | Java binding for etcd | 4 months ago |
| [modality](https://github.com/arkanovicz/modality) | 10 | Model Layer Implementation for a J2EE Pull MVC WebApp | a month ago |
| [querystream](https://github.com/querystream/querystream) | 1 | Build JPA Criteria queries using a Stream-like API | a month ago |


### [Date and Time](#date-and-time)
* Libraries related to handling date and time.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ical4j](https://github.com/ical4j/ical4j) | 525 | A Java library for parsing and building iCalendar data models | 4 days ago |
| [Time4J](https://github.com/MenoData/Time4J) | 340 | Advanced date, time and interval library for Java with sun/moon-astronomy and calendars like Chinese, Coptic, Ethiopian, French Republican, Hebrew, Hijri, Historic Christian, Indian National, Japanese, Julian, Korean, Minguo, Persian, Thai, Vietnamese | 9 days ago |
| [threeten-extra](https://github.com/ThreeTen/threeten-extra) | 300 | Provides additional date-time classes that complement those in JDK 8 | 2 months ago |


### [Dependency Injection](#dependency-injection)
* Libraries that help to realize the [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) paradigm.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [guice](https://github.com/google/guice) | 10286 | Guice (pronounced 'juice') is a lightweight dependency injection framework for Java 6 and above, brought to you by Google. | 4 days ago |
| [governator](https://github.com/Netflix/governator) | 794 | Governator is a library of extensions and utilities that enhance Google Guice to provide: classpath scanning and automatic binding, lifecycle management, configuration to field mapping, field validation and parallelized object warmup. | 3 months ago |
| [feather](https://github.com/zsoltherpai/feather) | 322 | Lightweight dependency injection for Java and Android (JSR-330) | 3 years ago |
| [jaywire](https://github.com/vanillasource/jaywire) | 48 | JayWire Dependency Injection | 2 months ago |


### [Development](#development)
* Augmentation of the development process at a fundamental level.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [javaparser](https://github.com/javaparser/javaparser) | 3767 | Java 1-15 Parser and Abstract Syntax Tree for Java, including preview features to Java 13 | 3 days ago |
| [HotswapAgent](https://github.com/HotswapProjects/HotswapAgent) | 1661 | Java unlimited redefinition of classes at runtime. | 7 days ago |
| [manifold](https://github.com/manifold-systems/manifold) | 1076 | Manifold is a Java compiler plugin, its features include Metaprogramming, Properties, Extension Methods, Operator Overloading, Templates, a Preprocessor, and more. | 25 days ago |
| [javasymbolsolver](https://github.com/javaparser/javasymbolsolver) | 277 | *old repository* --> this is now integrated in https://github.com/javaparser/javaparser | 4 years ago |
| [faux-pas](https://github.com/zalando/faux-pas) | 104 | A library that simplifies error handling for Functional Programming in Java | 14 days ago |
| [sneakythrow](https://github.com/rainerhahnekamp/sneakythrow) | 65 | SneakyThrow is a Java library to ignore checked exceptions | 2 years ago |


### [Distributed Applications](#distributed-applications)
* Libraries and frameworks for writing distributed and fault-tolerant applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zuul](https://github.com/Netflix/zuul) | 11074 | Zuul is a gateway service that provides dynamic routing, monitoring, resiliency, security, and more. | a month ago |
| [resilience4j](https://github.com/resilience4j/resilience4j) | 7065 | Resilience4j is a fault tolerance library designed for Java8 and functional programming | 2 days ago |
| [hazelcast](https://github.com/hazelcast/hazelcast) | 4457 |  Open-source distributed computation and storage platform | 6 hours ago |
| [failsafe](https://github.com/jhalterman/failsafe) | 3419 | Fault tolerance and resilience patterns for the JVM | 7 hours ago |
| [scalecube-services](https://github.com/scalecube/scalecube-services) | 497 | ScaleCube Services is a high throughput, low latency reactive microservices library built to scale. it features: API-Gateways, service-discovery, service-load-balancing, the architecture supports plug-and-play service communication modules and features. built to provide performance and low-latency real-time stream-processing. its open and designed to accommodate changes. (no sidecar in a form of broker or any kind) | a month ago |
| [dropwizard-circuitbreaker](https://github.com/mtakaki/dropwizard-circuitbreaker) | 40 | A circuit breaker design pattern for dropwizard | 2 years ago |


### [Distributed Transactions](#distributed-transactions)
* Distributed transactions provide a mechanism for ensuring consistency of data updates in the presence of concurrent access and partial failures.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [seata](https://github.com/seata/seata) | 20225 | :fire: Seata is an easy-to-use, high-performance, open source distributed transaction solution. | 9 hours ago |
| [btm](https://github.com/bitronix/btm) | 394 | JTA Transaction Manager | 9 months ago |


### [Distribution](#distribution)
* Tools that handle the distribution of applications in native formats.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [packr](https://github.com/libgdx/packr) | 2218 | Packages your JAR, assets and a JVM for distribution on Windows, Linux and Mac OS X | 8 days ago |
| [capsule](https://github.com/puniverse/capsule) | 1144 | Dead-Simple Packaging and Deployment for JVM Apps | a year ago |
| [getdown](https://github.com/threerings/getdown) | 428 | Download, Install, Update | 3 months ago |
| [JavaPackager](https://github.com/fvarrui/JavaPackager) | 340 | :package: Gradle/Maven plugin to package Java applications as native Windows, Mac OS X, or GNU/Linux executables and create installers for them. | 2 days ago |
| [artipie](https://github.com/artipie/artipie) | 236 | Binary Artifact Management Tool | 9 days ago |
| [really-executable-jars-maven-plugin](https://github.com/brianm/really-executable-jars-maven-plugin) | 96 | maven plugin for making chmod +x jar files | 5 years ago |
| [jlink.online](https://github.com/cilki/jlink.online) | 1 |  Build optimized Java runtimes in your browser! | 8 months ago |


### [Document Processing](#document-processing)
* Libraries that assist with processing office document formats.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fastexcel](https://github.com/dhatim/fastexcel) | 305 | Generate and read big Excel files quickly | a month ago |
| [zerocell](https://github.com/creditdatamw/zerocell) | 56 | Simple, efficient Excel to POJO library for Java  | 23 days ago |


### [Financial](#financial)
* Libraries related to the financial domain.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ta4j](https://github.com/ta4j/ta4j) | 1113 | A Java library for technical analysis. | 24 days ago |
| [stripe-java](https://github.com/stripe/stripe-java) | 553 | Java library for the Stripe API.     | 4 days ago |
| [parity](https://github.com/paritytrading/parity) | 480 | Open source software platform for trading venues | 4 months ago |
| [philadelphia](https://github.com/paritytrading/philadelphia) | 230 | Low-latency Financial Information Exchange (FIX) engine for the JVM | a month ago |
| [connect-java-sdk](https://github.com/square/connect-java-sdk) | 37 | Java client library for the Square Connect v2 API | 6 months ago |


### [Formal Verification](#formal-verification)
* Formal-methods tools: proof assistants, model checking, symbolic execution, etc.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jpf-core](https://github.com/javapathfinder/jpf-core) | 314 | JPF is an extensible software analysis framework for Java bytecode. jpf-core is the basis for all JPF projects; you always need to install it. It contains the basic VM and model checking infrastructure, and can be used to check for concurrency defects like deadlocks, and unhandled exceptions like NullPointerExceptions and AssertionErrors. | 2 months ago |
| [janala2](https://github.com/ksen007/janala2) | 81 | a concolic testing engine for Java | 3 years ago |


### [Functional Programming](#functional-programming)
* Libraries that facilitate functional programming.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jOOL](https://github.com/jOOQ/jOOL) | 1831 | jOOλ - The Missing Parts in Java 8 jOOλ improves the JDK libraries in areas where the Expert Group's focus was elsewhere. It adds tuple support, function support, and a lot of additional functionality around sequential Streams. The JDK 8's main efforts (default methods, lambdas, and the Stream API) were focused around maintaining backwards compatibility and implementing a functional API for parallelism. | 2 months ago |
| [streamex](https://github.com/amaembo/streamex) | 1685 | Enhancing Java Stream API | 2 months ago |
| [cyclops](https://github.com/aol/cyclops) | 1192 | An advanced, but easy to use, platform for writing functional applications in Java 8. | 3 months ago |
| [derive4j](https://github.com/derive4j/derive4j) | 515 | Java 8 annotation processor and framework for deriving algebraic data types constructors, pattern-matching, folds, optics and typeclasses. | 2 months ago |
| [protonpack](https://github.com/poetix/protonpack) | 441 | Stream utilities for Java 8 | 9 months ago |


### [Geospatial](#geospatial)
* Libraries for working with geospatial data and algorithms.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graphhopper](https://github.com/graphhopper/graphhopper) | 3260 | Open source routing engine for OpenStreetMap. Use it as Java library or server. | 3 days ago |
| [mapsforge](https://github.com/mapsforge/mapsforge) | 908 | Vector map library and writer - running on Android and Desktop. | 25 days ago |
| [spatial4j](https://github.com/locationtech/spatial4j) | 774 | LocationTech Spatial4j: A Geospatial Library for Java | 2 months ago |
| [geo](https://github.com/davidmoten/geo) | 347 | Geohash utitlies in java | 3 months ago |


### [High Performance](#high-performance)
* Everything about high-performance computation, from collections to specific libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [JCTools](https://github.com/JCTools/JCTools) | 2718 |  | 10 days ago |
| [agrona](https://github.com/real-logic/agrona) | 1998 | High Performance data structures and utility methods for Java | 3 days ago |
| [eclipse-collections](https://github.com/eclipse/eclipse-collections) | 1716 | Eclipse Collections is a collections framework for Java with optimized data structures and a rich, functional and fluent API. | 5 days ago |
| [Koloboke](https://github.com/leventov/Koloboke) | 926 | Java Collections till the last breadcrumb of memory and performance | 4 years ago |


### [HTTP Clients](#http-clients)
* Libraries that assist with creating HTTP requests and/or binding responses.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [feign](https://github.com/OpenFeign/feign) | 7238 | Feign makes writing java http clients easier | 31 minutes ago |
| [async-http-client](https://github.com/AsyncHttpClient/async-http-client) | 5786 | Asynchronous Http and WebSocket Client library for Java  | 18 days ago |
| [ribbon](https://github.com/Netflix/ribbon) | 4005 | Ribbon is a Inter Process Communication (remote procedure calls) library with built in software load balancers. The primary usage model involves REST calls with various serialization scheme support. | 3 months ago |
| [unirest-java](https://github.com/Kong/unirest-java) | 2146 | Unirest in Java: Simplified, lightweight HTTP client library. | 4 days ago |
| [google-http-java-client](https://github.com/googleapis/google-http-java-client) | 1167 | Google HTTP Client Library for Java | 2 days ago |
| [riptide](https://github.com/zalando/riptide) | 193 | Client-side response routing for Spring | 4 days ago |
| [methanol](https://github.com/mizosoft/methanol) | 101 | ⚗️ Lightweight HTTP extensions for Java | 2 months ago |
| [restQL-java](https://github.com/b2wdigital/restQL-java) | 41 | Microservice query language | 6 months ago |


### [Hypermedia Types](#hypermedia-types)
* Libraries that handle serialization to hypermedia types.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jsonld-java](https://github.com/jsonld-java/jsonld-java) | 342 | JSON-LD implementation for Java | 3 months ago |
| [siren4j](https://github.com/eserating-chwy/siren4j) | 21 | Java library for the Siren Hypermedia Type Specification | 4 years ago |
| [hate](https://github.com/blackdoor/hate) | 17 | HATEOAS with HAL for Java | 9 months ago |


### [Imagery](#imagery)
* Libraries that assist with the creation, evaluation or manipulation of graphical images.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zxing](https://github.com/zxing/zxing) | 28084 | ZXing ("Zebra Crossing") barcode scanning library for Java, Android | 2 days ago |
| [thumbnailator](https://github.com/coobird/thumbnailator) | 3684 | Thumbnailator - a thumbnail generation library for Java | 4 months ago |
| [TwelveMonkeys](https://github.com/haraldk/TwelveMonkeys) | 1295 | TwelveMonkeys ImageIO: Additional plug-ins and extensions for Java's ImageIO | 7 days ago |
| [imgscalr](https://github.com/rkalla/imgscalr) | 1074 | Simple Java image-scaling library implementing Chris Campbell's incremental scaling algorithm as well as Java2D's "best-practices" image-scaling techniques. | 3 years ago |
| [tess4j](https://github.com/nguyenq/tess4j) | 1025 | Java JNA wrapper for Tesseract OCR API | 10 hours ago |
| [image-comparison](https://github.com/romankh3/image-comparison) | 161 | Published on Maven Central Java Library that compares 2 images with the same sizes and shows the differences visually by drawing rectangles. Some parts of the image can be excluded from the comparison. Can be used for automation QA tests. | 3 months ago |


### [Introspection](#introspection)
* Libraries that help make the Java introspection and reflection API easier and faster to use.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [reflections](https://github.com/ronmamo/reflections) | 3747 | Java runtime metadata analysis | 2 months ago |
| [jOOR](https://github.com/jOOQ/jOOR) | 2467 |  jOOR - Fluent Reflection in Java jOOR is a very simple fluent API that gives access to your Java Class structures in a more intuitive way. The JDK's reflection APIs are hard and verbose to use. Other languages have much simpler constructs to access type meta information at runtime. Let us make Java reflection better. | 3 months ago |
| [classgraph](https://github.com/classgraph/classgraph) | 2050 | An uber-fast parallelized Java classpath scanner and module scanner. | 12 days ago |
| [reflectasm](https://github.com/EsotericSoftware/reflectasm) | 1235 | High performance Java reflection | 9 months ago |


### [Job Scheduling](#job-scheduling)
* Libraries for scheduling background jobs.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [quartz](https://github.com/quartz-scheduler/quartz) | 4496 | Code for Quartz Scheduler | 8 hours ago |
| [ShedLock](https://github.com/lukas-krecan/ShedLock) | 1878 | Distributed lock for your scheduled tasks | 2 days ago |
| [easy-batch](https://github.com/j-easy/easy-batch) | 508 | The simple, stupid batch framework for Java | 2 months ago |
| [jobrunr](https://github.com/jobrunr/jobrunr) | 457 | An extremely easy way to perform background processing in Java. Backed by persistent storage. Open and free for commercial use. | a day ago |
| [db-scheduler](https://github.com/kagkarlsson/db-scheduler) | 407 | Persistent cluster-friendly scheduler for Java | 2 months ago |
| [Sundial](https://github.com/knowm/Sundial) | 237 | A Light-weight Job Scheduling Framework | a month ago |
| [Wisp](https://github.com/Coreoz/Wisp) | 69 | A simple Java Scheduler library with a minimal footprint and a straightforward API | a month ago |


### [JSON](#json)
* Libraries for serializing and deserializing JSON to and from Java objects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [fastjson](https://github.com/alibaba/fastjson) | 23577 | A fast JSON parser/generator for Java.   | 4 days ago |
| [gson](https://github.com/google/gson) | 19802 | A Java serialization/deserialization library to convert Java Objects into JSON and back | 17 days ago |
| [moshi](https://github.com/square/moshi) | 7474 | A modern JSON library for Kotlin and Java. | 3 days ago |
| [jackson](https://github.com/FasterXML/jackson) | 6724 | Main Portal page for the Jackson project | 5 days ago |
| [JsonPath](https://github.com/json-path/JsonPath) | 6075 | Java JsonPath implementation | 18 days ago |
| [LoganSquare](https://github.com/bluelinelabs/LoganSquare) | 3243 | Screaming fast JSON parsing and serialization library for Android. | 10 months ago |
| [jolt](https://github.com/bazaarvoice/jolt) | 1080 | JSON to JSON transformation library written in Java. | 3 months ago |
| [dsl-json](https://github.com/ngs-doo/dsl-json) | 728 | High performance JVM JSON library | 22 days ago |
| [HikariJSON](https://github.com/brettwooldridge/HikariJSON) | 435 | High-performance JSON parser | 4 years ago |
| [jackson-modules-java8](https://github.com/FasterXML/jackson-modules-java8) | 325 | Set of support modules for Java 8 datatypes (Optionals, date/time) and features (parameter names) | 5 days ago |
| [json-io](https://github.com/jdereg/json-io) | 277 | Convert Java to JSON. Convert JSON to Java.  Pretty print JSON.  Java JSON serializer. | 9 months ago |
| [JsonSurfer](https://github.com/jsurfer/JsonSurfer) | 210 | A streaming JsonPath processor in Java | 18 hours ago |
| [jackson-datatype-money](https://github.com/zalando/jackson-datatype-money) | 179 | Extension module to properly support datatypes of javax.money | 12 days ago |
| [yasson](https://github.com/eclipse-ee4j/yasson) | 161 | Eclipse Yasson project | 11 days ago |


### [JVM and JDK](#jvm-and-jdk)
* Current implementations of the JVM/JDK.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [graal](https://github.com/oracle/graal) | 15586 | GraalVM: Run Programs Faster Anywhere :rocket: | 2 hours ago |
| [dragonwell8](https://github.com/alibaba/dragonwell8) | 3263 | Alibaba Dragonwell8 JDK | a month ago |
| [openj9](https://github.com/eclipse-openj9/openj9) | 2691 | Eclipse OpenJ9: A Java Virtual Machine for OpenJDK that's optimized for small footprint, fast start-up, and high throughput.   Builds on Eclipse OMR (https://github.com/eclipse/omr) and combines with the Extensions for OpenJDK for OpenJ9 repo. | 41 minutes ago |
| [avian](https://github.com/ReadyTalk/avian) | 1195 | [INACTIVE] Avian is a lightweight virtual machine and class library designed to provide a useful subset of Java's features, suitable for building self-contained applications. | 5 months ago |
| [CodenameOne](https://github.com/codenameone/CodenameOne) | 1028 | Cross-platform framework for building truly native mobile apps with Java or Kotlin. Write Once Run Anywhere support for iOS, Android, Desktop & Web. | 6 hours ago |


### [Logging](#logging)
* Libraries that log the behavior of an application.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [p6spy](https://github.com/p6spy/p6spy) | 1484 | P6Spy is a framework that enables database data to be seamlessly intercepted and logged with no code changes to the application. | 3 months ago |
| [logbook](https://github.com/zalando/logbook) | 922 | An extensible Java library for HTTP request and response logging | 4 days ago |
| [opentracing-toolbox](https://github.com/zalando/opentracing-toolbox) | 170 | Best-of-breed OpenTracing utilities, instrumentations and extensions | 4 days ago |


### [Machine Learning](#machine-learning)
* Tools that provide specific statistical algorithms for learning from data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [smile](https://github.com/haifengl/smile) | 5311 | Statistical Machine Intelligence & Learning Engine | 4 days ago |
| [oryx](https://github.com/OryxProject/oryx) | 1760 | Oryx 2: Lambda architecture on Apache Spark, Apache Kafka for real-time large scale machine learning | 5 days ago |
| [siddhi](https://github.com/siddhi-io/siddhi) | 1226 | Stream Processing and Complex Event Processing Engine | 9 days ago |
| [JSAT](https://github.com/EdwardRaff/JSAT) | 702 | Java Statistical Analysis Tool, a Java library for Machine Learning  | 2 months ago |


### [Messaging](#messaging)
* Tools that help send messages between clients to ensure protocol independency.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [EventBus](https://github.com/greenrobot/EventBus) | 23483 | Event bus for Android and Java that simplifies communication between Activities, Fragments, Threads, Services, etc. Less code, better quality. | 6 days ago |
| [aeron](https://github.com/real-logic/aeron) | 5610 | Efficient reliable UDP unicast, UDP multicast, and IPC message transport | 2 days ago |
| [Smack](https://github.com/igniterealtime/Smack) | 2239 | A modular and portable open source XMPP client library written in Java for Android and Java (SE) VMs | 10 hours ago |
| [jeromq](https://github.com/zeromq/jeromq) | 2025 | Pure Java ZeroMQ  | a month ago |
| [rabbitmq-java-client](https://github.com/rabbitmq/rabbitmq-java-client) | 994 | RabbitMQ Java client | 6 days ago |
| [nakadi](https://github.com/zalando/nakadi) | 763 | A distributed event bus that implements a RESTful API abstraction on top of Kafka-like queues | 3 days ago |
| [nats.java](https://github.com/nats-io/nats.java) | 351 | Java client for NATS | 3 days ago |


### [Microservice](#microservice)
* Tools for creating and managing microservices.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [Sentinel](https://github.com/alibaba/Sentinel) | 16780 | A powerful flow control component enabling reliability, resilience and monitoring for microservices. (面向云原生微服务的高可用流控防护组件) | 9 days ago |
| [eureka](https://github.com/Netflix/eureka) | 10573 | AWS Service registry for resilient mid-tier load balancing and failover. | 19 days ago |
| [armeria](https://github.com/line/armeria) | 3191 | Your go-to microservice framework for any situation, from the creator of Netty et al. You can build any type of microservice leveraging your favorite technologies,  including gRPC, Thrift, Kotlin, Retrofit, Reactive Streams, Spring Boot and Dropwizard. | 5 minutes ago |
| [consul-api](https://github.com/Ecwid/consul-api) | 376 | Java client for Consul HTTP API | a month ago |


### [Miscellaneous](#miscellaneous)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [java-design-patterns](https://github.com/iluwatar/java-design-patterns) | 68902 | Design patterns implemented in Java | 14 hours ago |
| [java8-tutorial](https://github.com/winterbe/java8-tutorial) | 14843 | Modern Java - A Guide to Java 8 | a month ago |
| [FizzBuzzEnterpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) | 14747 | FizzBuzz Enterprise Edition is a no-nonsense implementation of FizzBuzz made by serious businessmen for serious business purposes. | 3 months ago |
| [j2objc](https://github.com/google/j2objc) | 5793 | A Java to iOS Objective-C translation tool and runtime. | 5 days ago |
| [OctoLinker](https://github.com/OctoLinker/OctoLinker) | 4766 | OctoLinker — Links together, what belongs together | 7 days ago |
| [jimfs](https://github.com/google/jimfs) | 2018 | An in-memory file system for Java 7+ | 21 days ago |
| [maven-wrapper](https://github.com/takari/maven-wrapper) | 1512 | The easiest way to integrate Maven into your project! | 12 days ago |
| [cqengine](https://github.com/npgall/cqengine) | 1363 | Ultra-fast SQL-like queries on Java collections | 2 months ago |
| [jsweet](https://github.com/cincheo/jsweet) | 1206 | A Java to JavaScript transpiler. | 6 days ago |
| [jbot](https://github.com/rampatra/jbot) | 1159 | Make Slack and Facebook Bots in Java. | 6 months ago |
| [ff4j](https://github.com/ff4j/ff4j) | 942 | Feature Flags for Java made easy | 12 days ago |
| [simple-java-mail](https://github.com/bbottema/simple-java-mail) | 875 | Simple API, Complex Emails (JavaMail smtp wrapper) | 15 days ago |
| [polyglot-maven](https://github.com/takari/polyglot-maven) | 768 | Support alternative markup for Apache Maven POM files | a month ago |
| [typetools](https://github.com/jhalterman/typetools) | 519 | Tools for working with generic types | 3 months ago |
| [service-proxy](https://github.com/membrane/service-proxy) | 356 | API gateway for REST and SOAP written in Java. | 16 days ago |
| [smooks](https://github.com/smooks/smooks) | 308 | Extensible data integration Java framework for building XML and non-XML fragment-based applications  | a month ago |
| [modernizer-maven-plugin](https://github.com/gaul/modernizer-maven-plugin) | 243 | Detect uses of legacy Java APIs | 2 hours ago |
| [PipelinR](https://github.com/sizovs/PipelinR) | 160 | PipelinR is a lightweight command processing pipeline ❍ ⇢ ❍ ⇢ ❍ for your Java awesome app.  | 4 months ago |
| [yGuard](https://github.com/yWorks/yGuard) | 146 | The open-source Java obfuscation tool working with Ant and Gradle by yWorks - the diagramming experts | 14 days ago |
| [MinimalFTP](https://github.com/Guichaguri/MinimalFTP) | 104 | A lightweight, simple FTP server. Pure Java, no dependencies. | a year ago |
| [xmlbeam](https://github.com/SvenEwald/xmlbeam) | 66 | Java XML library. A really cool one. Obviously. | 2 months ago |


### [Monitoring](#monitoring)
* Tools that monitor applications in production.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [pinpoint](https://github.com/pinpoint-apm/pinpoint) | 11551 | APM, (Application Performance Management) tool for large-scale distributed systems.  | 2 hours ago |
| [metrics](https://github.com/dropwizard/metrics) | 7386 | :chart_with_upwards_trend: Capturing JVM- and application-level metrics. So you know what's going on. | 6 hours ago |
| [javamelody](https://github.com/javamelody/javamelody) | 2426 | JavaMelody : monitoring of JavaEE applications | 3 days ago |
| [jmxtrans](https://github.com/jmxtrans/jmxtrans) | 1651 | jmxtrans | 4 months ago |
| [stagemonitor](https://github.com/stagemonitor/stagemonitor) | 1649 | an open source solution to application performance monitoring for java server applications | a year ago |
| [client_java](https://github.com/prometheus/client_java) | 1558 | Prometheus instrumentation library for JVM applications | 3 days ago |
| [automon](https://github.com/stevensouza/automon) | 548 | Automon combines the power of AOP (AspectJ) with monitoring or logging tools you already use to declaratively monitor your Java code, the JDK, and 3rd party libraries. | 6 months ago |
| [jaeger-client-java](https://github.com/jaegertracing/jaeger-client-java) | 463 | Jaeger Bindings for Java OpenTracing API | a month ago |
| [dd-trace-java](https://github.com/DataDog/dd-trace-java) | 252 | Datadog APM client for Java | 2 days ago |
| [Sysmon](https://github.com/palantir/Sysmon) | 151 | A lightweight platform monitoring tool for Java VMs | 5 years ago |
| [nudge4j](https://github.com/lorenzoongithub/nudge4j) | 145 | Get inside your JVM | a year ago |
| [failsafe-actuator](https://github.com/zalando/failsafe-actuator) | 49 | Endpoint library for the failsafe framework | 8 months ago |
| [sematext-agent-java](https://github.com/sematext/sematext-agent-java) | 14 | Sematext Monitoring Agent | 13 days ago |


### [Native](#native)
* For working with platform-specific native libraries.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jna](https://github.com/java-native-access/jna) | 6643 | Java Native Access | 19 days ago |
| [javacpp](https://github.com/bytedeco/javacpp) | 3532 | The missing bridge between Java and native C++ | 14 minutes ago |
| [jnr-ffi](https://github.com/jnr/jnr-ffi) | 884 | Java Abstracted Foreign Function Layer | 13 days ago |
| [aparapi](https://github.com/Syncleus/aparapi) | 370 | The New Official Aparapi: a framework for executing native Java and Scala code on the GPU. | 6 days ago |


### [Natural Language Processing](#natural-language-processing)
* Libraries that specialize in processing text.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cogcomp-nlp](https://github.com/CogComp/cogcomp-nlp) | 419 | CogComp's Natural Language Processing libraries and Demos:  | 3 months ago |


### [Networking](#networking)
* Libraries for building network servers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dubbo](https://github.com/apache/dubbo) | 35812 | Apache Dubbo is a high-performance, java based, open source RPC framework. | 16 hours ago |
| [grpc-java](https://github.com/grpc/grpc-java) | 8882 | The Java gRPC implementation. HTTP/2 based RPC | 20 hours ago |
| [sshj](https://github.com/hierynomus/sshj) | 1927 | ssh, scp and sftp for java | 2 days ago |
| [kryonet](https://github.com/EsotericSoftware/kryonet) | 1628 |  TCP/UDP client/server library for Java, based on Kryo | 5 months ago |
| [servicetalk](https://github.com/apple/servicetalk) | 683 | A networking framework that evolves with your application | 2 days ago |
| [comsat](https://github.com/puniverse/comsat) | 591 | Fibers and actors for web development | 4 years ago |
| [drift](https://github.com/airlift/drift) | 186 | An annotation-based Java library for creating Thrift serializable types and services. | 8 months ago |
| [tls-channel](https://github.com/marianobarrios/tls-channel) | 116 | A Java library that implements a ByteChannel interface over SSLEngine, enabling easy-to-use (socket-like) TLS for Java applications. | 3 months ago |
| [urnlib](https://github.com/slub/urnlib) | 21 | Java library for representing, parsing and encoding URNs as in RFC2141 and RFC8141 | a month ago |


### [ORM](#orm)
* APIs that handle the persistence of objects.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mybatis-3](https://github.com/mybatis/mybatis-3) | 15930 | MyBatis SQL mapper framework for Java | 3 days ago |
| [ObjectiveSql](https://github.com/braisdom/ObjectiveSql) | 1122 | ObjectiveSQL is an ORM framework in Java based on ActiveRecord pattern, which encourages rapid development and clean, codes with the least and convention over configuration. | 10 days ago |
| [SimpleFlatMapper](https://github.com/arnaudroger/SimpleFlatMapper) | 386 | Fast and Easy mapping from database and csv to POJO. A java micro ORM, lightweight alternative to iBatis and Hibernate. Fast Csv Parser and Csv Mapper | 3 months ago |
| [doma](https://github.com/domaframework/doma) | 274 | DAO oriented database mapping framework for Java 8+ | an hour ago |
| [permazen](https://github.com/permazen/permazen) | 268 | Language-Natural Persistence Layer for Java | a day ago |


### [PDF](#pdf)
* Tools to help with PDF files.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [OpenPDF](https://github.com/LibrePDF/OpenPDF) | 2013 | OpenPDF is a free Java library for creating and editing PDF files with a LGPL and MPL open source license. OpenPDF is based on a fork of iText. We welcome contributions from other developers. Please feel free to submit pull-requests and bugreports to this GitHub repository. ⛺ | a day ago |
| [flyingsaucer](https://github.com/flyingsaucerproject/flyingsaucer) | 1609 | XML/XHTML and CSS 2.1 renderer in pure Java | 2 months ago |
| [tabula-java](https://github.com/tabulapdf/tabula-java) | 1231 | Extract tables from PDF files | a month ago |
| [openhtmltopdf](https://github.com/danfickle/openhtmltopdf) | 1199 | An HTML to PDF library for the JVM. Based on Flying Saucer and Apache PDF-BOX 2. With SVG image support. Now also with accessible PDF support (WCAG, Section 508, PDF/UA)! | 2 days ago |
| [dynamicreports](https://github.com/dynamicreports/dynamicreports) | 135 | Java reporting library for creating dynamic report designs at runtime | 15 days ago |


### [Performance analysis](#performance-analysis)
* Tools for performance analysis, profiling and benchmarking.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jitwatch](https://github.com/AdoptOpenJDK/jitwatch) | 2437 | Log analyser / visualiser for Java HotSpot JIT compiler. Inspect inlining decisions, hot methods, bytecode, and assembly. View results in the JavaFX user interface. | 2 months ago |
| [honest-profiler](https://github.com/jvm-profiling-tools/honest-profiler) | 1155 | A sampling JVM profiler without the safepoint sample bias | a month ago |
| [jHiccup](https://github.com/giltene/jHiccup) | 591 | jHiccup is a non-intrusive instrumentation tool that logs and records
platform "hiccups" - including the JVM stalls that often happen when
Java applications are executed and/or any OS or hardware platform noise
that may cause the running application to not be continuously runnable. | 6 months ago |
| [LatencyUtils](https://github.com/LatencyUtils/LatencyUtils) | 428 | Utilities for latency measurement and reporting | 9 months ago |


### [Platform](#platform)
* Frameworks that are suites of multiple libraries encompassing several categories.

#### [Apache Commons](#apache-commons)
* [Apache Commons](http://commons.apache.org/proper/)

#### [Other](#other)
* 

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [light-4j](https://github.com/networknt/light-4j) | 3246 | A fast, lightweight and more productive microservices framework | 4 hours ago |
| [light-oauth2](https://github.com/networknt/light-oauth2) | 256 | A fast, light and cloud native OAuth 2.0 authorization microservices based on light-4j | 14 days ago |
| [Orienteer](https://github.com/OrienteerBAP/Orienteer) | 143 | Business Application Platform - no-code/low-code platform to build business applications | 13 days ago |


### [Processes](#processes)
* Libraries that help the management of operating system processes.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [zt-exec](https://github.com/zeroturnaround/zt-exec) | 736 | ZeroTurnaround Process Executor | 16 days ago |
| [zt-process-killer](https://github.com/zeroturnaround/zt-process-killer) | 101 | ZeroTurnaround Process Killer | a month ago |
| [ch.vorburger.exec](https://github.com/vorburger/ch.vorburger.exec) | 15 | Java library to launch external processes | 21 days ago |


### [Reactive libraries](#reactive-libraries)
* Libraries for developing reactive applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [RxJava](https://github.com/ReactiveX/RxJava) | 44897 | RxJava – Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM. | 2 days ago |
| [reactive-streams-jvm](https://github.com/reactive-streams/reactive-streams-jvm) | 4111 | Reactive Streams Specification for the JVM | a month ago |
| [reactor-core](https://github.com/reactor/reactor-core) | 3652 | Non-Blocking Reactive Foundation for the JVM | 3 days ago |


### [REST Frameworks](#rest-frameworks)
* Frameworks specifically for creating RESTful services.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [dropwizard](https://github.com/dropwizard/dropwizard) | 7986 | A damn simple library for building production-ready RESTful web services. | an hour ago |
| [rest.li](https://github.com/linkedin/rest.li) | 2142 | Rest.li is a REST+JSON framework for building robust, scalable service architectures using dynamic discovery and simple asynchronous APIs. | 2 days ago |
| [springdoc-openapi](https://github.com/springdoc/springdoc-openapi) | 1306 | Library for OpenAPI 3 with spring-boot | 5 days ago |
| [micro-server](https://github.com/aol/micro-server) | 931 | Microserver is a Java 8 native, zero configuration, standards based, battle hardened library to run Java Rest Microservices via a standard Java main class. Supporting pure Microservice or Micro-monolith styles. | 10 months ago |
| [RestExpress](https://github.com/RestExpress/RestExpress) | 922 | Minimalist Java framework for rapidly creating scalable, containerless, RESTful microservices. Ship a production-quality, headless, RESTful API in the shortest time possible. Uses Netty for HTTP, Jackson for JSON, Metrics for metrics, properties files for configuration. Sub-projects and plugins enable, NoSQL, Swagger, Auth0, HAL integration, etc. | 2 days ago |
| [restlet-framework-java](https://github.com/restlet/restlet-framework-java) | 617 | Leading REST API framework for Java | 4 months ago |


### [Science](#science)
* Libraries for scientific computing, analysis and visualization.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tablesaw](https://github.com/jtablesaw/tablesaw) | 2649 | Java dataframe and visualization library | 2 months ago |
| [jgrapht](https://github.com/jgrapht/jgrapht) | 1941 | Master repository for the JGraphT project | 12 days ago |
| [XChart](https://github.com/knowm/XChart) | 1153 | XChart is a light-weight Java library for plotting data. | 5 days ago |
| [jgraphx](https://github.com/jgraph/jgraphx) | 621 |  | 8 months ago |
| [chart-fx](https://github.com/GSI-CS-CO/chart-fx) | 283 | A scientific charting library focused on performance optimised real-time data visualisation at 25 Hz update rates for data sets with a few 10 thousand up to 5 million data points. | 5 days ago |
| [morpheus-core](https://github.com/zavtech/morpheus-core) | 210 | The foundational library of the Morpheus data science framework | 3 years ago |
| [Erdos](https://github.com/Erdos-Graph-Framework/Erdos) | 105 | modular and modern graph-theory algorithms framework in Java | 5 months ago |
| [orson-charts](https://github.com/jfree/orson-charts) | 79 | A 3D chart library for Java applications (JavaFX, Swing or server-side). | 9 months ago |
| [LogicNG](https://github.com/logic-ng/LogicNG) | 70 | The Next Generation Logic Library | 14 hours ago |
| [jtk](https://github.com/MinesJTK/jtk) | 46 | The Mines Java Toolkit | 4 months ago |


### [Search](#search)
* Engines that index documents for search and analysis.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [indexer4j](https://github.com/haeungun/indexer4j) | 43 | Simple full text indexing and searching library for Java | 2 years ago |


### [Security](#security)
* Libraries that handle security, authentication, authorization or session management.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [tink](https://github.com/google/tink) | 11464 | Tink is a multi-language, cross-platform, open source library that provides cryptographic APIs that are secure, easy to use correctly, and hard(er) to misuse. | 2 days ago |
| [jjwt](https://github.com/jwtk/jjwt) | 7630 | Java JWT: JSON Web Token for Java and Android | 6 days ago |
| [keywhiz](https://github.com/square/keywhiz) | 2407 | A system for distributing and managing secrets | 2 days ago |
| [pac4j](https://github.com/pac4j/pac4j) | 2025 | Security engine for Java (authentication, authorization, multi frameworks): OAuth, CAS, SAML, OpenID Connect, LDAP, JWT... | 2 days ago |
| [themis](https://github.com/cossacklabs/themis) | 1315 | Easy to use cryptographic framework for data protection: secure messaging with forward secrecy and secure data storage. Has unified APIs across 14 platforms. | 3 days ago |
| [nbvcxz](https://github.com/GoSimpleLLC/nbvcxz) | 214 | Password strength estimator | 9 months ago |
| [hdiv](https://github.com/hdiv/hdiv) | 203 | Hdiv CE , Application Self-Protection | a month ago |
| [kalium](https://github.com/abstractj/kalium) | 202 | Java binding to the Networking and Cryptography (NaCl) library with the awesomeness of libsodium | 3 years ago |
| [password4j](https://github.com/Password4j/password4j) | 142 | Password4j is a user-friendly cryptographic library that supports Argon2, Bcrypt, Scrypt, PBKDF2 and various cryptographic hash functions. | a month ago |
| [sslcontext-kickstart](https://github.com/Hakky54/sslcontext-kickstart) | 135 | 🔐 A lightweight high level library for configuring a http client or server based on SSLContext or other properties such as TrustManager, KeyManager or Trusted Certificates to communicate over SSL TLS for one way authentication or two way authentication provided by the SSLFactory. Support for Java, Scala and Kotlin based clients with examples. Available client examples are: Apache HttpClient, OkHttp, Spring RestTemplate, Spring WebFlux WebClient Jetty and Netty, the old and the new JDK HttpClient, the old and the new Jersey Client, Google HttpClient, Unirest, Retrofit, Feign, Methanol, Vertx, Scala client Finagle, Featherbed, Dispatch Reboot, AsyncHttpClient, Sttp, Akka, Requests Scala, Http4s Blaze, Kotlin client Fuel, http4k Kohttp and Ktor. Also gRPC and ElasticSearch examples are included | 4 hours ago |
| [jwks-rsa-java](https://github.com/auth0/jwks-rsa-java) | 121 |  | 13 days ago |
| [securitybuilder](https://github.com/tersesystems/securitybuilder) | 39 | Fluent builders with typesafe API for the JCA | 23 days ago |
| [OTP-Java](https://github.com/BastiaanJansen/OTP-Java) | 35 | A small and easy-to-use one-time password generator library for Java according to RFC 4226 (HOTP) and RFC 6238 (TOTP). | 5 days ago |


### [Serialization](#serialization)
* Libraries that handle serialization with high efficiency.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [flatbuffers](https://github.com/google/flatbuffers) | 16514 | FlatBuffers: Memory Efficient Serialization Library | 3 days ago |
| [kryo](https://github.com/EsotericSoftware/kryo) | 5098 | Java binary serialization and cloning: fast, efficient, automatic | 3 days ago |
| [fast-serialization](https://github.com/RuedigerMoeller/fast-serialization) | 1378 | FST: fast java serialization drop in-replacement  | 5 months ago |
| [msgpack-java](https://github.com/msgpack/msgpack-java) | 1204 | MessagePack serializer implementation for Java / msgpack.org[Java] | 7 days ago |
| [java-php-serializer](https://github.com/marcospassos/java-php-serializer) | 12 | A Java library for serializing objects as PHP serialization format. | 3 years ago |


### [Server](#server)
* Servers specifically used to deploy applications.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [nanohttpd](https://github.com/NanoHttpd/nanohttpd) | 5983 | Tiny, easily embeddable HTTP server in Java. | a month ago |


### [Template Engine](#template-engine)
* Tools that substitute expressions in a template.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [jade4j](https://github.com/neuland/jade4j) | 696 | a pug implementation written in Java (formerly known as jade) | 3 months ago |
| [rocker](https://github.com/fizzed/rocker) | 629 | Java 8 optimized, memory efficient, speedy template engine producing statically typed, plain java objects | a month ago |
| [jtwig](https://github.com/jtwig/jtwig) | 294 | Java modern template engine | 3 years ago |
| [jte](https://github.com/casid/jte) | 278 | Secure and speedy templates for Java and Kotlin. | 8 hours ago |


### [Testing](#testing)
* Tools that test from model to the view.

#### Asynchronous(#asynchronous)
* Tools that simplify testing asynchronous services.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [rest-assured](https://github.com/rest-assured/rest-assured) | 5433 | Java DSL for easy testing of REST services | a month ago |
| [karate](https://github.com/intuit/karate) | 5010 | Test Automation Made Simple | 10 hours ago |
| [awaitility](https://github.com/awaitility/awaitility) | 2638 | Awaitility is a small Java DSL for synchronizing asynchronous operations | a month ago |
| [concurrentunit](https://github.com/jhalterman/concurrentunit) | 382 | Toolkit for testing multi-threaded and asynchronous applications | 7 months ago |
| [hoverfly-java](https://github.com/SpectoLabs/hoverfly-java) | 134 | Java binding for Hoverfly | 3 months ago |


#### BDD(#bdd)
* Testing for the software development process that emerged from TDD and was heavily influenced by DDD and OOAD.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [cucumber-jvm](https://github.com/cucumber/cucumber-jvm) | 2290 | Cucumber for the JVM | a day ago |
| [serenity-core](https://github.com/serenity-bdd/serenity-core) | 561 | Serenity BDD is a test automation library designed to make writing automated acceptance tests easier, and more fun. | 2 days ago |
| [lambda-behave](https://github.com/RichardWarburton/lambda-behave) | 242 | A modern testing and behavioural specification framework for Java 8 | a month ago |
| [cukes](https://github.com/ctco/cukes) | 96 | Cucumber DSL for testing RESTful Web Services | 16 days ago |
| [j8spec](https://github.com/j8spec/j8spec) | 45 | Library that allows tests written in Java to follow the BDD style introduced by RSpec and Jasmine. | 4 years ago |


#### Fixtures(#fixtures)
* Everything related to the creation and handling of random data.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [java-faker](https://github.com/DiUS/java-faker) | 2698 | Brings the popular ruby faker gem to Java | 6 days ago |
| [jfairy](https://github.com/Devskiller/jfairy) | 675 | Java fake data generator | 4 months ago |
| [fixture-factory](https://github.com/six2six/fixture-factory) | 392 | Generator fake objects from a template | 9 months ago |
| [randomizedtesting](https://github.com/randomizedtesting/randomizedtesting) | 157 | Randomized Testing (Core JUnit Runner, ANT, Maven) | 4 months ago |
| [beanmother](https://github.com/keepcosmos/beanmother) | 104 | A library for setting up Java objects as test data. | a month ago |


### [Frameworks](#frameworks)
* Provide environments to run tests for a specific use case.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [ArchUnit](https://github.com/TNG/ArchUnit) | 1837 | A Java architecture test library, to specify and assert architecture rules in plain Java | 2 days ago |
| [pact-jvm](https://github.com/pact-foundation/pact-jvm) | 858 | JVM version of Pact. Enables consumer driven contract testing, providing a mock service and DSL for the consumer project, and interaction playback and verification for the service provider project. | 10 hours ago |


### [Matchers](#matchers)
* Libraries that provide custom matchers.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [xmlunit](https://github.com/xmlunit/xmlunit) | 238 | XMLUnit for Java 2.x | 5 months ago |


### [Miscellaneous](#miscellaneous)
* Other stuff related to testing.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [testcontainers-java](https://github.com/testcontainers/testcontainers-java) | 5074 | Testcontainers is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container. | 11 hours ago |
| [junit-dataprovider](https://github.com/TNG/junit-dataprovider) | 230 | A TestNG like dataprovider runner for JUnit with many additional features | 4 months ago |
| [MutabilityDetector](https://github.com/MutabilityDetector/MutabilityDetector) | 219 | Lightweight analysis tool for detecting mutability in Java classes | 2 months ago |
| [log-captor](https://github.com/Hakky54/log-captor) | 106 | 🎯  LogCaptor captures log entries for unit testing purposes | 4 days ago |
| [raml-tester](https://github.com/nidi3/raml-tester) | 70 | Test if a request/response matches a given raml definition | 2 years ago |


### [Mocking](#mocking)
* Tools which mock collaborators to help testing single, isolated units.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [mockito](https://github.com/mockito/mockito) | 12030 | Most popular Mocking framework for unit tests written in Java | 2 days ago |
| [moco](https://github.com/dreamhead/moco) | 3730 | Easy Setup Stub Server | 10 days ago |
| [powermock](https://github.com/powermock/powermock) | 3570 | PowerMock is a Java framework that allows you to unit test code normally regarded as untestable. | 2 months ago |


### [Utility](#utility)
* Libraries which provide general utility functions.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [guava](https://github.com/google/guava) | 41736 | Google core libraries for Java | 2 days ago |
| [arthas](https://github.com/alibaba/arthas) | 26533 | Alibaba Java Diagnostic Tool Arthas/Alibaba Java诊断利器Arthas | 2 days ago |
| [gephi](https://github.com/gephi/gephi) | 4391 | Gephi - The Open Graph Viz Platform | 3 months ago |
| [JavaVerbalExpressions](https://github.com/VerbalExpressions/JavaVerbalExpressions) | 2517 | Java regular expressions made easy. | 4 months ago |
| [embulk](https://github.com/embulk/embulk) | 1566 | Embulk: Pluggable Bulk Data Loader. | 19 days ago |
| [Dex](https://github.com/PatMartin/Dex) | 1252 | Dex : The Data Explorer -- A data visualization tool written in Java/Groovy/JavaFX capable of powerful ETL and publishing web visualizations. | 2 years ago |
| [bucket4j](https://github.com/vladimir-bukhtoyarov/bucket4j) | 1131 | Java rate limiting library based on token/leaky-bucket algorithm. | 3 months ago |
| [cactoos](https://github.com/yegor256/cactoos) | 629 | Object-Oriented Java primitives, as an alternative to Google Guava and Apache Commons | 16 hours ago |
| [minio-java](https://github.com/minio/minio-java) | 500 | MinIO Client SDK for Java | 2 days ago |
| [underscore-java](https://github.com/javadev/underscore-java) | 344 | java port of Underscore.js | 6 days ago |
| [ch.vorburger.fswatch](https://github.com/vorburger/ch.vorburger.fswatch) | 19 | Java lib for monitoring directories or individual files via java.nio.file.WatchService | 21 days ago |


### [Version Managers](#version-managers)
* Utilities that help create the development shell environment and switch between different Java versions.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [sdkman-cli](https://github.com/sdkman/sdkman-cli) | 4103 | The SDKMAN! Command Line Interface | 8 hours ago |
| [jenv](https://github.com/jenv/jenv) | 3779 | Manage your Java environment  | 2 months ago |
| [jabba](https://github.com/shyiko/jabba) | 1899 | (cross-platform) Java Version Manager | 6 days ago |


### [Web Crawling](#web-crawling)
* Libraries that analyze the content of websites.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [webmagic](https://github.com/code4craft/webmagic) | 9926 | A scalable web crawler framework for Java. | a month ago |
| [crawler4j](https://github.com/yasserg/crawler4j) | 4136 | Open Source Web Crawler for Java | 3 months ago |


### [Web Frameworks](#web-frameworks)
* Frameworks that handle the communication between the layers of a web application.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [blade](https://github.com/lets-blade/blade) | 5527 | :rocket: Lightning fast and elegant mvc framework for Java8 | 3 months ago |
| [takes](https://github.com/yegor256/takes) | 680 | True Object-Oriented Java Web Framework | 21 days ago |


### [Resources](#resources)
* Awesome lists related to the Java & JVM ecosystem.

| Repository | StarCount | Description | RecentlyUpdated |
| :---- | ----: | :---- | :---- |
| [awesome-microservices](https://github.com/mfornos/awesome-microservices) | 10237 | A curated list of Microservice Architecture related principles and technologies. | a month ago |
| [useful-java-links](https://github.com/Vedenin/useful-java-links) | 5029 | A list of useful Java frameworks, libraries, software and hello worlds examples | a month ago |
| [awesome-rest](https://github.com/marmelab/awesome-rest) | 2818 | A collaborative list of great resources about RESTful API architecture, development, test, and performance | a month ago |
| [AwesomeJavaFX](https://github.com/mhrimaz/AwesomeJavaFX) | 2388 | A curated list of awesome JavaFX libraries, books, frameworks, etc... | 7 days ago |
| [java-developer-roadmap](https://github.com/s4kibs4mi/java-developer-roadmap) | 1906 | Roadmap to becoming a Java developer in 2021 | 3 months ago |
| [awesome-jvm](https://github.com/deephacks/awesome-jvm) | 1666 | A curated list of awesome loosely performance related JVM stuff. Inspired by awesome-python. | a year ago |
| [awesome-ciandcd](https://github.com/cicdops/awesome-ciandcd) | 1299 | continuous integration and continuous delivery | 6 months ago |
| [java-concurrency](https://github.com/code-review-checklists/java-concurrency) | 908 | Checklist for code reviews | 8 months ago |
| [awesome-selenium](https://github.com/christian-bromann/awesome-selenium) | 725 | A curated list of delightful Selenium resources. | 8 months ago |
| [awesome-gradle](https://github.com/ksoichiro/awesome-gradle) | 354 | A curated list of awesome Gradle plugins and resources for a better development workflow automation. | 2 years ago |
| [awesome-graal](https://github.com/neomatrix369/awesome-graal) | 313 | A curated list of awesome resources for Graal, GraalVM, Truffle and related topics | 2 months ago |
| [awesome-annotation-processing](https://github.com/gunnarmorling/awesome-annotation-processing) | 228 | A curated list of resources related to the Java annotation processing API (JSR 269) | a month ago |


