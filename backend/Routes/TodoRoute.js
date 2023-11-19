const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteTodo } = require("../controller/TodoController");

const router = Router();

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post("/update",updateToDo)
router.post('/delete',deleteTodo)

module.exports = router;