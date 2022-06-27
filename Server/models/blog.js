const mongoose = require('mongoose');

// create a schema that defines the structure of documents that we would like to store
const Schema = mongoose.Schema;

// create an instance of the schema object
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    }
  },{ timestamps: true });

//   create a model to communicate with the database
const Blog = mongoose.model('Blog',blogSchema);

// export the model to be used else where in the project
module.exports = Blog;