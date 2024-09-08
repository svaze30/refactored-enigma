const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    // id: uuid();
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("new");
});

indexRouter.get("/message/:messageID", (req, res) => {
  res.render("messageview", { message: messages[req.params.messageID] });
});

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.usertext;
  const messageUser = req.body.username;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  // res.send("hi brother");
  res.redirect("/");
});
module.exports = indexRouter;
