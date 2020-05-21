// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.set('port', process.env.PORT || 3000);

//static for Heroku
app.use(express.static("public"));

// write notes???
// function renderNotes(req, res) {
//   fs.readFile(__dirname + "/db/db.json", function(err, data) {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/html" });
//       res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
//     }
//     else {
//       // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//       // an html file.
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     }
//   });
// }

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

require('./routes/apiRoutes')(app);

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });