const mongoose = require('mongoose');
const {Config} = require("../../configs/bootstrap")
const {Stages} =  require("../../libraries/enums")

const {MONGODB} = Config;
const {PENDING,PROGRESS,REVIEW,COMPLETE} = Stages;
const todoSchema = mongoose.Schema({
    groupId:{type:Schema.Types.ObjectId, ref: MONGODB.GROUP, required: true},
    summary: {type: String,required: true,unique: true},
    description: {type: String,required: true},
    stage: {type: String,required: true, enum:[PENDING,PROGRESS,REVIEW,COMPLETE],default: PENDING},
    cardColor: {type: String,required: true, default: '#cddc39'},
    isCompleted: {type: Boolean,required: true,default: false},
    completedAt: { type: Date,required: false},
    startDate: {type: Date,required: false},
    dueDate: {type: Date,required: false},
    createdAt: {type: Date,required: true, default: Date.now},
    modifiedAt: {type: Date,required: false}
});

module.exports = mongoose.model(MONGODB.TODO, todoSchema);