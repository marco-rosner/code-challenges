General View
> Devices - Application - Third party services - Databases

Devices: Web, Mobile, SmartTvs, Consoles, Werables...

Application: Marketplace, Messaging, Streminig...

Third party: Monitoring (Grafana, NewRelic, Kibana, Logdash, Beats), Authorization and Identification (Auth0/OpenID), Metrics (Analitics), Payment Services (Paypall, Stripe...), Delivery Services, Serveless (AWS Lambda, Google Function, Azure Function)

Database: Elastic Search, SQL (RDS), NoSQL (DynamoDB, DocumentDB/MongoDB, CouchDB)

Design System Interview
- Step 1 - Understand the problem and establish design scope (function requeriements and non function requerements (security, performance, monitoring, avaibility and scalability))  
- Step 2 - Propose high-level design  
- Step 3 - Design deep dive  
- Step 4 - Wrap up  

Architectures
> Separation of Concerns, Flexibility, Testability and Modularity

Clean Architecture
> Entities > Use Case > Adapters > Frameworks/Services/Database

Hexagonal Architecture
> Core > Ports > Adapters > Frameworks/Services/Database

DDD - Domain Driven Design
> Strategic Design -> Linguagem Ubíqua, Bounded Contexts and Context Maps  
> Tatic Design -> Domain Models, Domain Services and Anti Corruption Layer (microservices)  
> Domain Expert -> Comuncation as main focus  

CAP and PACELC theorems  
> CAP (2 out 3) -> Consistency, Availability and Partition tolerance  
> PACELC -> With Partition (CAP), Without Partition -> Latency and Consistency  

> CA -> RDBMS (MySQL, Oracle, SQL Server) -> Not possible because with not P will give up C or A.  
> CP/EC -> BigTable, HBase -> Consistency over availability and lower latency  
> AP/EL -> Dynamo, Cassandra, CouchDB -> Availability over consistency and latency.  
> AP/EC -> MongoDB -> sync write on primary and async on secondary. With P, choose A, without, C.  

Load Balancer (Nginx)
> Traffic distribution, Load balancing - Round Robin, Least Conn and IP Hash

API Gateway (GaphQL)
> Routing, Auth, Rate Limiting, Caching, Monitoring, Loggins, Circuit breaker

Rate Limiting
> Prevent DDos attack and bad behaviors
> IP-based, Server-based, Geography-based types
> (Leaky) Token Bucket, (Rolling) Windows algorithm

Circuit Breaker
> Fail Fast, save resources
> Closed, Open and Half-Open states
> Options: FailuareThreshold, timeout and resetTimeout

Service Discovery (Apache Zookeeper, Etcd)
> Register all the available servers and picks the best server for a client based on predefined criteria
> Health Checks - Verify service integrity

Distributed event streaming platform (Kafka, SQS)
> Provides a publish-subscribe (PUB/SUB) messaging system that allows applications to send and receive messages in a fault-tolerant, scalable, and reliable manner.

API template
```
Nome
Method:
URL: <domain>/v1/...
Body/Parameter/QueryString:
```

REST
> GET, POST, PUT, PATCH, and DELETE  
> Web standart  
> Url pattern: <domain>/<version>/<resources>  

GraphQL
> API Gateway orquestrating requests  
> Queries and Mutations  
> For applications that needs to support various devices with differents data needs  

RPC - Remote Procedure Calls
> Integrate system internaly  
> Defined structures to comunicate  

Webhooks
> Used to receive data from server through events  
> JSON, XML. Payload encripted and token in the header  
> Used in changing status events: purshase items, payment gateway...  

Diference between PUT and PATCH
> PUT is used to change all object, PATCH only partial object.

SPA (Single Page Application)
> Complex Applications

MPA (Multi Page Application)
> Better to SEO and high access (initial load) due cache

AMP (Accelerated Mobile Page)
> Google's project to speed up the pages to fit in mobile devices using defer for external dependencies.

Docker
> Platform for developing, shipping, and running applications in containers, ensures consistency across different envs and facilitates deployment and scaling  
> Containerization is lightweight, portable, and consistent way to package and run applications  

FontEnd System Design

> A11y - Screenreader friendly, aria attributes, keyboard navigation (tab index)

> Observability - Tracking user interactions, Logging (success/errors)

> Performance - local cache (Service Worker), Split bundle (app vs vendor), improve image sizes, CDN, preload, webpack config (compressions, polyfills), Hybrid SSR and Client side Rendering (user interactions)

> Security - XSS (Sanitize HTML - DOMPurity, Content Security Policy Headers), CSRF, CORS, HTTPS

> CI/CD - build, run tests (unit, integration and E2E), and deploy (bluegreen)