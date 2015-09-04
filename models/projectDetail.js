var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectDetailModel = new Schema({

	projectID: {
		type: String,
		required: true,
		unique: true
	},
	projectName: {
		type: String,
		required: true
	},
	startDate: {
		type: Date
	},
	endDate: {
		type: Date
	},
	vicePresident: {
		type: String,
		required: true 
	},
	deliveryHead: {
		type: String,
		required: true
	},
	deliveryManager: {
		type: String,
		required: true
	},
	seniorProjectManager: {
		type: String,
		required: true
	},
	projectManager: {
		type: String,
		required: true
	},
	language: {
		type: String,
		required: true
	},
	dataBase: {
		type: String,
		required: true 
	},
	operatingSystem: {
		type: String,
		required: true 
	},
	buildTool: {
		type: String
	},
	cIServer: {
		type: String
	},
	sonarImplemented: {
		type: Boolean,
		default: false
	},
	almImplemented: {
		type: Boolean,
		default: false
	}
});
console.log("Inside projectDetailModel");

module.exports = mongoose.model('projectDetail', projectDetailModel,'projectDetail');