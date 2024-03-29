import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

	/**@type {import('./models/Example.js').Example[]} */
	examples = []

	/**
	 * @type {Jot[]}
	 */
	jots = [
		new Jot({
			title: 'Bigfoot',
			threatLevel: '#00cd00',
			securityLevel: 'Euclid'
		}),
		new Jot({
			title: 'Dolphins',
			threatLevel: '#007eeb',
			securityLevel: 'High Noon'
		}),
		new Jot({
			title: 'Dolphins',
			threatLevel: '#ff00ff',
			securityLevel: 'High Noon'
		}),
		new Jot({
			title: 'Dolphins',
			threatLevel: '#ffff00',
			securityLevel: 'High Noon'
		}),
		new Jot({
			title: 'Dolphins',
			threatLevel: '#ff0000',
			securityLevel: 'High Noon'
		}),
	]

	/**
	 * @type {Jot}
	 */
	activeJots = null
}

export const AppState = createObservableProxy(new ObservableAppState())