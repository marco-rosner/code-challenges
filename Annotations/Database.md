Relational Databases
> PostegreSQL, MySQL, SQLite  
> Tables as the primary data storage unit  
> SQL is the querying language  
> ACID properties (Atomicity, Consistency, Isolation and Durability)

NoSQL Databases
> MongoDB, Cassandra, Redis  
> Key-Value - O(1) reades and writes, simple data models, high performance (in-memory cache layer)  
> Document - XML, JSON. High flexibility, occasionally changes. MongoDB, CouchDB  
> Wide-column - Basic unit is a column (name/value pair). High availability and high scalability. BigTable, HBase, and Cassandra  
> Graph-based - Each node is a record and each arc is a relationship between two nodes. High performance for data model with complex relationships. Social Network   
> Adept at handling unstructured data  
> Perfect for scalability, swift changes and straightforward queries  
> BASE properties (Basic Availability, Soft-state, Eventual consistency)  

Reasons for SQL:
- Structured data
- Strict schema
- Relational data
- Need for complex joins
- Transactions
- Clear patterns for scaling
- More established: developers, community, code, tools, etc
- Lookups by index are very fast

Reasons for NoSQL:
- Semi-structured data
- Dynamic or flexible schema
- Non-relational data
- No need for complex joins
- Store many TB (or PB) of data
- Very data intensive workload
- Very high throughput for IOPS (Input/Output Operation Per Second)

In-Memory Databases
> Redis, Memcached  
> Fast access as everything's stored in memory  
> For caching and storing session-related data  

ACID
> Atomicity - Transactions is complete fully or don't execute at all.  
> Consistency - Post any transaction, the database reamins consistent  
> Isolation - Each transaction operates independently  
> Durability - Long term data storage  

BASE
> Basic Availability - Guarantes availablitiy  
> Soft state - The state of the system may change over time  
> Eventual Consistency - The system eventually become consistent  

Database normalization (Normal Forms)
> 1 NF/FN - No repetitions. Keys attributes identified  
> 2 NF/FN - No partial dependency. Dependency only for the key attribute  
> 3 NF/FN - NO transitive dependency. No attributes could have dependency for another  
> 4 NF/FN - No multi-value dependencies  
> 5 NF/FN - No join dependencies. Ability to join tables through foreign key  

Vertical Scaling
> Increase resources (CPU, Memory, Storage or Network)  

Horizontal Scaling
> Increase numbers of nodes  

Replication
> Master-Slave - One primary database manages the replicas  
> Master-Master - Multiples read-write databases  

Federation
> Splits up databases by function (users, products, clients...) 

Sharding
> Range based - Specific key's range, for example name (no uniform)  
> Hash based - Hash based in the content (uniform but hard to find if the content changse)  
> Directory based - Choose which frament use  
> Geographical based - Regions, Cities or countries

Particion
> Horizontal - per rows in the same node  
> Vertical - per columns  

Race conditions
> Pessimistic concurrency - block the row => SELECT * FROM Room WHERE id = 123 FOR UPDATE;  
> Optimistic concurrency - create version/available attribute  

``` 
UPDATE Room
SET available = FALSE, version = version + 1
WHERE id = 123 AND version = 1;

or

UPDATE Room
SET available = FALSE WHERE id = 123 AND available = TRUE;
```

Performance
> Caching - Frequent queries using in-memory databases like Redis  
> Indexing - Indexes on often-accessed columns can improve retrieval times  
> Query optimization - Remove generic selects (`SELECT *`), minimize joins and streamline queries  

Security
> Be vigilant against SQL injections  
> Implement role-based access control  
> Encrypted data  