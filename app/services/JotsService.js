import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { loadState, saveState } from "../utils/Store.js";



class JotsService {

	createJot(jotFormData) {
		const newJot = new Jot(jotFormData)
		// console.log('Fancy new report', newFieldReport);
		AppState.jots.push(newJot)
		// console.log('Field reports in appstate', AppState.fieldReports);
		this.saveJots()
	}

	setActiveJot(jotId) {
		const foundJot = AppState.jots.find(jot => jot.id == jotId)
		console.log('found a jot', foundJot);

		// NOTE we want to update the timestamp whenever we have set an active report
		foundJot.lastUpdated = new Date()

		// NOTE make sure we update local storage after updating something!
		this.saveJots()

		AppState.activeJot = foundJot
	}

	updateJot(newJotBody) {
		const jot = AppState.activeJot

		// NOTE re-assigning string value on object to the string retrieved from textarea
		jot.body = newJotBody

		console.log('did the active jot change?', jot); // yes
		console.log('did the correct one in the array change?', AppState.jots); // also yes

		// NOTE we updated a piece of data in the array, make sure local storage is also updated!
		this.saveJots()
	}


	destroyJot() {
		const jotId = AppState.activeJot.id
		console.log('jot id', jotId);

		AppState.activeJot = null

		const indexOfReportToRemove = AppState.jots.findIndex(jot => jot.id == jotId)

		// NOTE findIndex returns -1 if your conditional never returns true. -1 still works with splice, so this is a safe way to make sure we don't delete the wrong thing 
		if (indexOfReportToRemove == -1) {
			console.error("Find Index is messed up dawg");
			return
		}

		AppState.jots.splice(indexOfReportToRemove, 1)

		this.saveJots()
	}


	saveJots() {
		saveState('jots', AppState.jots)
	}

	loadJots() {
		const jotsFromLocalStorage = loadState('jots', [Jot])
		AppState.jots = jotsFromLocalStorage
	}

}

export const jotsService = new JotsService()
