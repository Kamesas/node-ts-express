"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.todoRouter = router.get(`/`, function (req, res) {
    res.send(["tasksRouter task one", "tasksRouter task two"]);
});
// .get(`${AUTH_URL}/token`, [authMiddleware], refreshToken)
