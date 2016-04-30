var mongoose = require('mongoose');

var peerReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: { type: String },
    documents: [{ type: String }],
    groupSubmission: { type: Boolean },
    totalMarks: {
        type: Number,
        required: true
    },
    publicationDate: { type: Date },
    dueDate: { type: Date },
    solutionPublicationDate: { type: Date },
    solutions: [{ type: String }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true},
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true},
    reviewSettings: {
        loop: {
            type: String,
            enum: ['single','multiple']
        },
        reviewStartDate: { type: Date },
        reviewEndDate: { type: Date },
        secondDueDate: { type: Date },
        secondReviewStartDate: { type: Date },
        secondReviewEndDate: { type: Date },
        blind: {
            type: String,
            enum: ['single', 'double']
        },
        reviewAssignment: {
            type: String,
            enum: ['single','multiple']
        }
    },
    dateAdded: { type: Date },
    dateUpdated: { type: Date }
});

peerReviewSchema.pre('save', function(next){
    var now = new Date();

    if (!this.publicationDate) {
        this.publicationDate = now;
    }

    if (!this.dueDate) {
        this.dueDate = now;
    }

    // Ask what should be done for this
    if (!this.solutionPublicationDate) {
        this.solutionPublicationDate = now;
    }

    if ( !this.dateAdded ) {
        this.dateAdded = now;
    }

    this.dateUpdated = now;

    next();
});

var PeerReview = mongoose.model('peerreviews', peerReviewSchema);

module.exports = PeerReview;