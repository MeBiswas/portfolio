const mongoose = require("mongoose");
const schema = mongoose.Schema;

const resumeSchema = new schema({
	title: String,
	work_exp: [
		{
			company: String,
			experience: String,
			designation: String,
			description: String,
		},
	],
	education: [
		{
			course: String,
			duration: String,
			Institution: String,
			description: String,
		},
	],
});

module.exports = mongoose.model("Resume", resumeSchema);
