const model = require('./tweets-model');

const findAllTweets = () => model.find().sort({'_id': -1});
const createTweet = (tweet) =>
    model.create({
        "topic": "Daily Share",
        "userName": "Kate Xu",
        "verified": false,
        "liked": false,
        "handle": "katexuuu",
        "time": "2h",
        "avatar-image": "../../../images/kidmeme.jpeg",
        "logo-image": "../../../images/kidmeme.jpeg",
        "stats": {
            "comments": 3,
            "retweets": 2,
            "likes": 23
        },
        ...tweet,
    },
    );

const deleteTweet = (id) =>
    model.deleteOne({_id: id});


const likeTweet = (id) =>
    model.findOne({_id: id}, function (err, like) {
        if (!err) {
            if (like.liked === true) {
                like.stats.likes -= 1;
                like.liked = false;
            } else {
                like.stats.likes += 1;
                like.liked = true;
            }
            like.save(function (err){
                if (err) {
                    console.error("ERROR!");
                }
            });
        }
    }).clone().catch(function(err){ console.log(err)});


module.exports = {
    findAllTweets, createTweet,
    deleteTweet, likeTweet
};
