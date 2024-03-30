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
			title: 'SCP-173',
			securityLevel: 'yellow',
			threatLevel: 'Euclid'
		}),
		new Jot({
			title: 'SCP-106',
			securityLevel: 'orange',
			threatLevel: 'Keter'
		}),
		new Jot({
			title: 'SCP-179',
			securityLevel: 'purple',
			threatLevel: 'Thaumiel'
		}),
		new Jot({
			title: 'SCP-53435',
			securityLevel: 'red',
			threatLevel: 'Apollyon'
		}),
		new Jot({
			title: 'SCP-3455',
			securityLevel: 'green',
			threatLevel: 'Archon'
		}),
		new Jot({
			title: 'SCP-8697',
			securityLevel: 'blue',
			threatLevel: 'Ticonderoga'
		}),
	]

	/**
	 * @type {Jot}
	 */
	activeJots = null
}

export const AppState = createObservableProxy(new ObservableAppState())