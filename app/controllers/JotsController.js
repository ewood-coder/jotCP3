import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { jotsService } from "../services/JotsService.js";


export class JotsController {

	constructor () {
		console.log('Jot 🎮 controller 🎮 loaded!');

		// NOTE: REMEMBER, the first item is always something in the AppState!
		AppState.on('jots', this.drawJots)
		AppState.on('activeJot', this.drawActiveJot)
		AppState.on('jots', this.drawJotCount)
		this.drawJotCount()
		this.drawJots()

		// this.drawFieldReports() // no longer needed, retrieving fieldReports from local storage will trigger our listener 
		// jotsService.loadJots()
	}

	drawJotCount() {
		setText('jotCount', AppState.jots.length)
	}

	drawJots() {
		const jots = AppState.jots
		let jotsContent = ''
		jots.forEach(jot => jotsContent += jot.ListTemplate)
		setHTML('jotList', jotsContent)
	}

	drawActiveJot() {
		const jot = AppState.activeJot

		if (jot == null) {
			setHTML('activeJot', '')
		}
		else {
			setHTML('activeJot', AppState.activeJot.ActiveDetailsTemplate)
		}

	}

	createJot() {
		try {
			event.preventDefault()
			console.log('🛠️ Creating jot 🛠️');
			const form = event.target
			const jotFormData = getFormData(form)
			console.log('here is your data', jotFormData);
			jotsService.createJot(jotFormData)

			// @ts-ignore
			form.reset() // if there is a red squiggle here, it's okay
		} catch (error) {
			console.error('[CREATING JOT]', error)
			window.alert(error.message)
		}
	}

	setActiveJot(jotId) {
		console.log('Setting active jot with the id of', jotId);
		jotsService.setActiveJot(jotId)
	}

	updateJot() {
		const textAreaElem = event.target
		console.log('blurred text area', textAreaElem);

		// @ts-ignore
		const textContentFromTextArea = textAreaElem.value // it's okay if there are red squiggles here
		console.log('Text content', textContentFromTextArea);

		jotsService.updateJot(textContentFromTextArea)
	}

	destroyJot() {
		const wantsToDestroy = window.confirm("Are you sure you want to delete this jot forever?")

		console.log('do they want to destroy the jot', wantsToDestroy);

		if (wantsToDestroy == false) {
			return
		}

		console.log('destroying this jot!!!!!');

		jotsService.destroyJot()
	}
}