const express = require('express');
const router = express.Router();

router.get("/users", (req, res) => {
    return res.json({});
})

module.exports = router;