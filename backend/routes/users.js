var express = require('express');
var router = express.Router();

/**
 * @openapi
 * /user/register:
 *   post:
 *     description: Register a user.
 *     tags: [User]
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
 *
 *     responses:
 *       200:
 *         description: Return the user information.
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
 *
 *       400:
 *         description: The specified email or password is invalid.
 */
router.post('/register', function (req, res, next) {
  res.send('respond with a resource');
});

/**
 * @openapi
 * /user/login:
 *   post:
 *     description: User logs in.
 *     tags: [User]
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
 *
 *     responses:
 *       200:
 *         description: Return the user information.
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
 *
 *       400:
 *         description: The specified email or password is invalid.
 */
router.post('/login', function (req, res, next) {
  //todo not implemented
});

module.exports = router;
