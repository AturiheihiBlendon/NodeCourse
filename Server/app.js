// import the express module
const express = require("express");

// create middleware
const morgan = require("morgan");

//  import our created model
const blog = require('./models/blog.js');

// import the mongoose module
const mongoose = require('mongoose');
const Blog = require("./models/blog");
const { result } = require("lodash");

// create an instance of express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://Blendon:Blendon123@nodetuts.68dgr.mongodb.net/note-tuts?retryWrites=true&w=majority';
mongoose
  .connect(dbURI)
  .then((result) => // listen to requests after connection to the db
    app.listen(3000, () => {
      console.log("Connected to db\nListening for requests at port 3000...");
    })
  )
  .catch((err) => console.log(err));

/*
interacting with the data base
saving data, finding data and updating data


// app.get("/add", (req, res) => {
//   const blog = new Blog({
//     title: 'new blog',
//     snippet: 'About this new blog',
//     body: 'This is my first blog saved to the database'
//   });

//   blog.save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// });

app.get("/delete", (req, res) => {
  blog.findByIdAndDelete("62b7def5268deb96e4015d22")
  .then((result) => {
    console.log('Blog deleted');
  })
  .catch((err) => {
    console.log(err);
  });
});
*/

// register view engines
app.set("view engine", "ejs");

// listen for requests on port 3000;
// app.listen(3000, () => {
//   console.log("Listening for requests at port 3000...");
// });

// Middleware and static files
/* custom middleware
app.use((req, res, next) => {
  console.log("New request made.");
  console.log(req.hostname);
  console.log(req.url);
  next();
  
});
*/

// Morgan miidleware
//app.use(morgan('common'));

// middleware for express
app.use(express.static("public"));
app.use(express.urlencoded());

// Basic routing on express

app.get("/", (req, res) => {
  res.redirect('/blogs');
  //res.sendFile("./views/index.html", { root: __dirname });
  // sending an ejs view engine to the browser
  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });

  // sending an ejs view engine to the browser
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  // sending an ejs view engine to the browser
  res.render("create", { title: "Create new blog" });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});


// 404 page
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });

  res.status(404).render("404", { title: "404" });
});
