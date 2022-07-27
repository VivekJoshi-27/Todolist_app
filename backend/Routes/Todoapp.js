const express = require("express")

const router = express.Router();



router.post("/", require("./../Controllers/Todoapp").AddTodolist);

router.get("/", require("./../Controllers/Todoapp").getAllTodolist);

router.get("/:userId", require("./../Controllers/Todoapp").getTodolist);

router.delete("/:userId", require("./../Controllers/Todoapp").delTodolist);

router.put("/:userId", require("./../Controllers/Todoapp").updateTodolist);


module.exports = router;