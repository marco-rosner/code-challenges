Booking
> https://medium.com/@sahintalha1/high-level-system-architecture-of-booking-com-06c199003d94

Chat application
> https://medium.com/@m.romaniiuk/system-design-chat-application-1d6fbf21b372

Url shortener
> User -> LB -> Web Server -> App Server -> Sequencer Service -> Cache (Memcache or Redis) -> MongoDB  
> Base-58 over Base-64 to increase readability and avoid confusions with some characters  
> Start id range in 10 digits (1b) to have six characters in Base-58  
> Sequencer lifetime -> Total id base-10 numbers / number of request per year (200 mi per month - Assumption) => 2^64-10^9 / 2.4 bi = 7,686,143,363.63 years  

File-sharing system
> Devices (desktop, mobile...) > data storage (S3) > metadata database > queue message (kafka) > sync metadata with Clients  
> Upload: File -> chuncks -> file metadata with chuncks index -> upload to data storage
> Sync: Watch files/metadata -> upload chuncks and file metadata
> Upload metadata: Send message to clients to sync changes through metadata

Video Conference
> Devices > Media Request Broker > Media Server (Video/Data stream) > Storage Server (Recording) > Analytics
> Media Request Broker - Decides which Media Server will respond the request based in geo proximity
> Media Server - Decides which quality stream will be forward to the client