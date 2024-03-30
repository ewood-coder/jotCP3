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
			<li onclick="app.JotsController.setActiveJot('${this.id}')">
				${this.title}<i class="mdi mdi-circle-double fs-6 ${this.securityLevel}"></i>
			</li>
		`
	}


	get ActiveDetailsTemplate() {
		return `
			<span class="col-12 col-md-4 pt-4 pt-md-0">
				<h1>${this.title}<i class="mdi mdi-circle-double fs-6 ${this.securityLevel}"></i></h1>
				<h5 style="color: ${this.securityLevel};" class="my-4">${this.threatLevel}</h5>
				<p class="my-4"><u>Created at:</u> ${this.createdAt}</p>
				<p class="my-4"><u>Updated at:</u> ${this.lastUpdated}</p>
			</span>

			<span class="col-12 col-md-8 col-lg-8">
				<form>
					<div class="form-group">
						<textarea onblur="app.JotsController.updateJot()" class="form-control" id="textArea" rows="22" name="body" id="reportBody"
							placeholder="Jot something down...">${this.body}</textarea>
						<span class="row justify-content-between align-items-center px-3 my-3">
							<button for="textArea" type="submit" class="addBtn py-1 col-8">Submit</button>
							<button onclick="app.JotsController.destroyJot()" class="dltBtn col-1" type="button"><i class="mdi mdi-trash-can dltIcon"></i></button>
						</span>
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

	get LastUpdated() {
		return this.lastUpdated.toLocaleString() // 3/28/2024, 2:48:19 PM
	}

}