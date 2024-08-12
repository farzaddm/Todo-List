const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { name } = require("ejs");
const _ = require("lodash");
// =============================================================

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(bodyParser());
app.use(express.static("public"));

// database
mongoose.connect("mongodb://localhost:27017/todoList");

const itemSchema = { name: String };
const listSchema = {
  name: String,
  items: [itemSchema],
};

const Item = mongoose.model("Item", itemSchema);
const List = mongoose.model("List", listSchema);

// Routes
app.get("/", async (req, res) => {
  try {
    await Item.find().then((data) => {
      items = [];
      data.forEach((d) => items.push(d));
    });
    res.render("home", { listTitle: "Today", items });
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
});

app.get("/:customListName", async (req, res) => {
  const customListName = _.capitalize(req.params.customListName);
  if (customListName !== "favicon.ico") {
    try {
      const foundList = await List.findOne({ name: customListName });
      if (!foundList) {
        const list = new List({
          name: customListName,
          items: [],
        });
  
        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("home", { listTitle: foundList.name, items: foundList.items });
      }
    } catch (err) {
      console.log(err);
    }
  }
});

app.post("/add", async (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({ name: itemName });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    await List.findOne({ name: listName }).then((foundList) => {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", async (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    await Item.findByIdAndDelete(checkedItemId);
    res.redirect("/");
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } }
    ).then(() => {
      res.redirect("/" + listName);
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
