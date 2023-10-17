const {Router} = require ("express");
const { usersGet, usersPost, usersPut, usersDelete, userDelete, userPut, userPost } = require("./controllers/users");

const router = Router()


router.get("/", usersGet);

router.post("/", userPost);

router.put("/:idUser", userPut);

router.delete("/", userDelete);


module.exports = router;