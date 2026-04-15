"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postgres_js_1 = __importDefault(require("../config/postgres.js"));
const router = (0, express_1.Router)();
// INSERT
router.post('/users', async (req, res) => {
    await postgres_js_1.default.query(`INSERT INTO users (email, password)
        VALUES ($1, $2)`, ['natePostgres@gmail.com', 'password']);
    res.status(201).json({ success: true });
});
// SELECT
router.get('/users', async (req, res) => {
    const result = await postgres_js_1.default.query(`SELECT id, email, password, created_at FROM users`);
    res.status(200).json({
        success: true,
        data: result.rows,
    });
});
exports.default = router;
//# sourceMappingURL=user.js.map