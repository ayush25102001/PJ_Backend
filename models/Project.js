const mongoose = require('mongoose')
const validator = require('validator')


const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    teamSize: {
        required: true,
        type: Number
    },
    owner: {                          //Id of the user to whom the task belongs
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    skillsRequired: [{
        skill: {
            type: String,
        }
    }]
})


const Project = mongoose.model('Project', projectSchema)
module.exports = Project