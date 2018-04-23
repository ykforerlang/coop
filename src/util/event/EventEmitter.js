import Event from './Event'

export default class EventEmitter {
    constructor() {
        this.eventListenerMap = {}
    }

    emit(e) {
        if (e instanceof Event) {
            const allLis = this.eventListenerMap[e.type] || []
            allLis.forEach(lis => {
                lis(e)
            })
        } else {
            throw new Error('Expected an Event instance')
        }
    }

    on(type, listener) {
        if (this.eventListenerMap[type] === undefined) {
            this.eventListenerMap[type] = [listener]
        } else {
            this.eventListenerMap[type].push(listener)
        }
    }
}
