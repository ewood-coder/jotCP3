import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../utils/FormHandler.js";
import { jotsService } from "../services/JotsService.js";


export class JotsController {

	constructor () {
		console.log('🎮 Jots controller loaded! 🎮');
		AppState.on('fieldReports', this.drawFieldReports)
		AppState.on('activeFieldReport', this.drawActiveFieldReport)

		// this.drawFieldReports()
		fieldReportsService.loadFieldReports()
	}


}