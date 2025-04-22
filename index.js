const express = require("express");
const app = express();
const port = 8080;
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

app.use(express.json());


app.use(methodOverride('_method'))




app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")))

let posts = [
    {
        id: uuidv4(),
        username: "RITVIZ TIWARI",
        content: "Rap is the life not a part!! ."
    },
    {
        id: uuidv4(),
        username: "Aaryan Arora",
        content: "Koi baat nahi bhai !!  ."
    },
    {
        id: uuidv4(),
        username: "Hitesh Gourana",
        content: "Bas jeena bhee toh thik nahi hai na !! ."
    },
    {
        id: uuidv4(),
        username: "Gautam Baid",
        content: " what you know is the drop what you don't is an ocean !! ."
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
})


app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})


app.post("/posts", (req, res) => {
    // console.log(req.body);         //req.body ke andr saari info aati hai post use krne pr
    let { username, content } = req.body
    posts.push({ id: uuidv4(), username, content })
    res.redirect("/posts")

})


app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);

    if (!post) {
        console.log("❌ Post not found for id:", id);
        return res.send("Post not found!");
    }

    console.log("✅ Post found:", post);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content

    console.log(newContent);

    let post = posts.find((p) => id === p.id);

    post.content = newContent
    console.log(post);

    res.redirect("/posts")

})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params
    let post = posts.find((p) => p.id === id)
    res.render("edit.ejs", { post })

})

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id)
    res.redirect("/posts")
})



app.listen(port, () => {
    console.log("listening to port: 8080");

});