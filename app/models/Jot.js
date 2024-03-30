import { generateId } from "../utils/GenerateId.js"


export class Jot {

	constructor (data) {
		this.id = generateId()
		this.title = data.title
		this.threatLevel = data.threatLevel
		this.body = data.body || ''
		// this.createdAt = new Date() // always pulls new date, even if a different date is stored in local storage
		this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
		this.lastUpdated = data.lastUpdated == undefined ? new Date() : new Date(data.lastUpdated)
		this.securityLevel = data.securityLevel
	}


	get ListTemplate() {
		return `
			<li class="underline" onclick="app.JotsController.setActiveJot('${this.id}')">
				${this.title}<i class="mdi mdi-circle-double fs-6 ${this.securityLevel}"></i>
			</li>
		`
	}


	get ActiveDetailsTemplate() {
		return `
			<span class="col-12 col-md-4 pt-4 pt-md-0 d-flex flex-column">
				<h1>${this.title}<i class="mdi mdi-circle-double fs-6 ${this.securityLevel}"></i></h1>
				<h5 class="my-4 ${this.securityLevel}">${this.threatLevel}</h5>
				<p class="my-4"><u>Created at:</u> ${this.CreatedDateTime}</p>
				<p class="my-4"><u>Updated at:</u> ${this.LastUpdated}</p>
				<button onclick="app.JotsController.destroyJot()" class="dltBtn col-1 mt-auto mb-4 mb-md-0 align-self-end" type="button"><i class="mdi mdi-trash-can dltIcon"></i></button>
			</span>

			<span class="col-12 col-md-8 col-lg-8">
				<form>
					<div class="form-group">
						<textarea onblur="app.JotsController.updateJot()" class="form-control" id="textArea" rows="22" name="body" id="reportBody"
							placeholder="Jot something down... Anything entered into this box will be saved automatically">${this.body}</textarea>
					</div>
				</form>
			</span>
		`
	}

	get CreatedDate() {
		return this.createdAt.toLocaleDateString() // 3/28/2024
	}

	get CreatedTime() {
		return this.createdAt.toLocaleTimeString() // 12:28:11 PM
	}

	get CreatedDateTime() {
		return this.createdAt.toLocaleString()
	}

	get LastUpdated() {
		return this.lastUpdated.toLocaleString() // 3/28/2024, 2:48:19 PM
	}

}