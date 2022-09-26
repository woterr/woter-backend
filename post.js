const postModel = require("./Schemas/post.js");

async function Post(data) {
  //   console.log(data);
  await postModel
    .create({
      caption: data.caption,
      image: data.image,
    })
    .then(console.log("Nice!"));
}

module.exports = { Post };
