class PubSub {
    constructor() {
        this.subscribers = {}
    }

    subscribe(event, callback) {
        if (!this.subscribers[event]) this.subscribers[event] = []

        this.subscribers[event].push(callback)
    }

    unsubscribe(event) {
        if (this.subscribers[event]) {
            delete this.subscribers[event]
        }
    }

    list() {
        console.log('Events subscribed: ')
        for (const key in this.subscribers) {
            console.log(key)
        }
    }

    publish(event, data) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach((callback) => {
                callback(data)
            });
        }
    }
}

const pubsub = new PubSub()

pubsub.subscribe('news', (message) => console.log(`News 1 subscribe received: ${message}`))
pubsub.subscribe('news', (message) => console.log(`News 2 subscribe received: ${message}`))
pubsub.subscribe('daily', (message) => console.log(`Daily subscribe received: ${message}`))

pubsub.list()

pubsub.publish('news', 'Latest headlines: ...')

pubsub.unsubscribe('daily')

pubsub.list()