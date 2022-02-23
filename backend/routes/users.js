var express = require('express');
var router = express.Router();

/**
 * @openapi
 * /user/register:
 *   post:
 *     description: Register a user.
 * 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address.
 *               password:
 *                 type: string
 *                 description: The password.
 *     responses:
 *       200:
 *         description: Returns a user information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The user ID.
 *                 email:
 *                   type: string
 *                   description: The email address.
 */
router.get('/register', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
