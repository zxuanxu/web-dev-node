const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    website: String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: Number,
    followerCount: Number,
    numOfTweets: Number
}, {collection: "profile"});
module.exports = schema;