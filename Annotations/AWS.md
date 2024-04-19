S3 (Simple Storage Service)
- Free tier -> 12 months, 5GB storage, 20000 GET and 2000 PUT
- Cost -> Per storage -> 50 TB/month -> 0,023 USD per GB
- How works -> Store data in buckets. Control access, and replicate data to any region.

RDS (Relational Database Service)
- Free tier -> 12 months, 750 hours/month, 20GB SSD storage, 20GB backups
- Cost -> Per type of storage (SSD or magntetic) and for backups or snapshots
- How works -> Relational database management for MySQL, PostgreSQL, MariaDB or SQL Server

EC2 (Elastic Compute Cloud)
- Free tier -> 12 months, 750 hours/month, t2.micro or t3.micro Linux/Windows
- Cost -> Per type of instance (a1, t2, t3...)
- How works -> Cloud computing

SNS (Simple Notification Service)
- Free tier -> 1 mi publications, 100.000 HTTP/S deliveries and 1000 emails
- Cost -> Request for type of topic (standard or FIFO) and message size
- How works -> Message system service for fast push, flexible and managed

SQS (Simple Queue Service)
- Free tier -> Free, 1 mi requests
- Cost -> Per type of queue (standard or FIFO) -> 0,40 USD 1 mi to 100 bi request/month
- How works -> Queue scalable to store messages

SES (Simple Email Service)
- Free tier -> 12 months, 3000 messages per month
- How works -> Email service

Lambda
- Free tier -> Free, 1 mi requests per month
- Cost -> Per request and memory time -> 0,20 USD for 1 mi requests. 0,0000166667 USD for each GB/s
- How works -> Serveless, event-driven compute service that lets you run code for virtually any type of application of backend service without provisioning or managing servers.

CloudFront (CDN)
- Free tier -> Free, 1 TB outbound transferences, 10 mi HTTP/S and 2 mi CloudFront Functions calls
- How works -> Web Service to distribution of content with low latency and high speed transferences

CloudWatch
- Free tier -> Free, 10 custom metrics and alarms, 1 mi API request, 5GB ingest log data and 5GB log data files
- How works -> Resources monitoring and Cloud AWS applications