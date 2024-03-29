import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

	/**@type {import('./models/Example.js').Example[]} */
	examples = []

	/**
	 * @type {Jot[]}
	 */
	jots = []

	/**
	 * @type {Jot}
	 */
	activeJots = null
}

export const AppState = createObservableProxy(new ObservableAppState())