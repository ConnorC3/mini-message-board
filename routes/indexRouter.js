const { Router, text } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "New Message "});
});

indexRouter.post("/new", (req, res) => {
    const { user, text } = req.body;
    
    // Validate message length
    if (text && text.length > 150) {
        return res.render("form", { 
            title: "New Message",
            error: "Message must be 150 characters or less"
        });
    }
    
    messages.push({ text, user, added: new Date() });
    res.redirect("/");
});

module.exports = indexRouter;