const model = require('./profile-model');

const getCurrentProfile = () => model.findOne({handle: "katexuuu"});

const updateCurrentProfile = (tweet) =>
    model.updateOne({},
        {$set: tweet}
    );


module.exports = {
    getCurrentProfile, updateCurrentProfile
}