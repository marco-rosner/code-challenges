Relational Databases
> PostegreSQL, MySQL, SQLite  
> Tables as the primary data storage unit  
> SQL is the querying language  
> ACID properties  

NoSQL Databases
> MongoDB, Cassandra, Redis  
> Key-Value, Document, Wide-column or Graph-based format  
> Adept at handling unstructured data  
> Perfect for scalability, swift changes and straightforward queries  

In-Memory Databases
> Redis, Memcached  
> Fast access as everything's stored in memory  
> For caching and storing session-related data  

ACID
> Atomicity - Transactions is complete fully or don't execute at all.  
> Consistency - Post any transaction, the database reamins consistent  
> Isolation - Each transaction operates independently  
> Durability - Long term data storage  

Database normalization (Normal Forms)
> 1 NF/FN - No repetitions. Keys attributes identified  
> 2 NF/FN - No partial dependency. Dependency only for the key attribute  
> 3 NF/FN - NO transitive dependency. No attributes could have dependency for another  
> 4 NF/FN - No multi-value dependencies  
> 5 NF/FN - No join dependencies. Ability to join tables through foreign key

Sharding
> Range based - Specific key's range, for example name (no uniform)  
> Hash based - Hash based in the content (uniform but hard to find if the content changse)  
> Directory based - Choose which frament use  
> Geographical based - Regions, Cities or countries  

Vertical Scaling
> Increase resources (CPU, Memory, Storage or Network)  

Replication
> Master-Slave - One primary database manages the replicas  
> Master-Master - Multiples read-write databases  

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