const express = require("express")

const router = express.Router();



// -------- categories --------- //

router.post("/", require("./../Controllers/Category").AddCategory);

router.get("/", require("./../Controllers/Category").getAllCategory);

router.get("/:userId", require("./../Controllers/Category").getCategory);

router.delete("/:userId", require("./../Controllers/Category").delCategory);

router.put("/:userId", require("./../Controllers/Category").updateCategory);



module.exports = router;