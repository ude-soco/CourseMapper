var mongoose = require('mongoose');
var slug = require('slug');

var courseLinkSchema = new mongoose.Schema();

courseLinkSchema.add({
    contentNode: {
        type: mongoose.Schema.Types.ObjectId, ref: 'treeNodes'},

    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users'},

    link: {
        type: mongoose.Schema.Types.ObjectId, ref: 'posts'},

    isDeleted: Boolean,

    dateAdded: { type: Date },
    dateUpdated: { type: Date }
});

courseLinkSchema.pre('save', function(next){
    var now = new Date();
    this.dateUpdated = now;
    if ( !this.dateAdded ) {
        this.dateAdded = now;
    }
    next();
});

courseLinkSchema.pre('update', function(next){
    this.dateUpdated = new Date();
    next();
});

var disc = mongoose.model('courseLinks', courseLinkSchema);

module.exports = disc;