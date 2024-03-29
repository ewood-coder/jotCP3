import { generateId } from "../utils/GenerateId.js"


export class Jot {

	constructor (data) {
		this.id = generateId()
		this.title = data.title
		this.threatLevel = data.threatLevel
		this.body = data.body || ''
		// this.createdAt = new Date() // always pulls new date, even if a different date is stored in local storage
		this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
		this.lastViewed = data.lastViewed == undefined ? new Date() : new Date(data.lastViewed)
		this.securityLevel = data.securityLevel
	}

}