const express = require('express')
const router = express.Router()

//buat routes
router.get('/', (req, res) => {
    return res.send('berhasil')
})


module.exports = router
