/**
 * Identify common domains within events
 * @param {Array<String>} events serialized events
 * @returns {Array<String>} common domains, sorted alphabetically
 */

const findCommonDomains = (events) => {
    let domain = new Set()
    let owner = new Set()
    // let count_rule = 0
    const result = new Set()
    const windowTime = [0, 0, 0, 0]

    let timestamp
    let domainEvent
    let detailsEvent

    for (let i = 0; i < events.length; i++) {
        const info = events[i].split(' ')

        timestamp = new Date(info[0].split('=')[1])
        domainEvent = info[1].split('=')[1]
        detailsEvent = info[2].split('=')[1]
        
        if (domain.has(domainEvent) && owner.has(detailsEvent)) {
            // count_rule++
            // if (count_rule == 4) result.add(domainEvent)

            if(timestamp.getUTCHours() == 0) {
                windowTime[3] = windowTime[3] + 1
            } else if(timestamp.getUTCHours() <= 6) {
                windowTime[0] = windowTime[0] + 1
            } else if(timestamp.getUTCHours() <= 12) {
                windowTime[1] = windowTime[1] + 1
            } else if(timestamp.getUTCHours() <= 18) {
                windowTime[2] = windowTime[2] + 1
            } else if(timestamp.getUTCHours() <= 23) {
                windowTime[3] = windowTime[3] + 1
            }

            if(windowTime[0] == 4) {
                result.add(domainEvent)
                windowTime[0] = 0
            }
            if(windowTime[1] == 4) {
                result.add(domainEvent)
                windowTime[1] = 0
            }
            if(windowTime[2] == 4) {
                result.add(domainEvent)
                windowTime[2] = 0
            }
            if(windowTime[3] == 4) {
                result.add(domainEvent)
                windowTime[3] = 0
            }
        } else {
            domain.add(domainEvent)
            owner.add(detailsEvent)
        }

        // if (timestamp.getUTCHours() == 6 ||
        // timestamp.getUTCHours() == 12 ||
        // timestamp.getUTCHours() == 18 ||
        // timestamp.getUTCHours() == 00
        // ) {
        //     count_rule = 0
        // }
    }

    return Array.from(result).sort((a, b) => a.localeCompare(b))
}

const events_t1 = [
    'timestamp=2023-10-01T00:00:00.000Z domain=not.example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=not.example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=not.example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=not.example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=not.example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=example.net userID=11',
    'timestamp=2023-10-01T00:00:00.000Z domain=example.net userID=11',
]

console.log(findCommonDomains(events_t1)) // ['example.net', 'not.example.net']