"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.todoRouter = router
    .get(`/`, (req, res) => {
    console.log("req", req.body);
    res.send(["tasksRouter task one", "tasksRouter task two"]);
})
    .get("/:id", (req, res) => {
    // res.send("Task one");
    res.sendStatus(200);
});
// .get(`${AUTH_URL}/token`, [authMiddleware], refreshToken)
