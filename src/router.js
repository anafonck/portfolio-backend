const express = require("express");
const router = express();

router.post('/contato', (req, res) => {
    return res.json("Testando post na rota /contato ")
});

module.exports = router;