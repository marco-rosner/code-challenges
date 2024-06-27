> Creation Patterns

- Factory Method - The class gives the intantiation responsability for sub-classes
- Singleton - Assure that a class have an unique instance and a global way to access it.

> Structural Patterns

- Adapter - Convert a class interface in another interface which the clients are used to deal with.  
- Facade - Unified interface with a set of interfaces in a subsystem

> Behavioral Patterns
 
- DAO (Data Access Object)-> Abstraction of data persistence. Close to the database, often table-centric.  
- Repository -> Abstraction of a collection of objects. Close to the Domain layer.  
- DTO (Data Transfer Object) -> Transport data between layers of the application.  
- Command - Encapsula um pedido num objeto, permitindo assim parametrizar clientes com pedidos diferentes, enfileirar pedidos, fazer log de pedidos, e dar suporte a operações de undo.  
- Iterator - Provê uma forma de acessar os elementos de uma coleção de objetos seqüencialmente sem expor sua representação subjacente.  
- Observer (Pub/Sub) - Push Notification / SNS - Define uma dependência um-para-muitos entre objetos de forma a avisar e atualizar vários objetos quando o estado de um objeto muda. 