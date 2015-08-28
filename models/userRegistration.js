var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userRegistrationModel = new Schema({
	firstName: {
		type: String,
		required : true
	},
	lastName: {
		type: String,
		required : true
	},
	emailId: {
		type: String,
		required : true,
		unique : true
	},
	userName: {
		type : String,
		required : true,
		unique : true
	},
	password: {
		type : String,
		required : true
	}
});

console.log('Inside userRegistrationModel');
module.exports = mongoose.model('userRegistration', userRegistrationModel,'userRegistration');

/*When no collection argument is passed, Mongoose produces a collection name by pluralizing the model name.
 If you don't like this behavior, pass a collection name as thirt argument*/
