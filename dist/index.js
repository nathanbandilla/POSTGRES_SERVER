"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
dotenv_1.default.config();
dotenv_1.default.config({ path: 'src/.env' });
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(user_1.default);
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "hello, postgres user"
    });
});
app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`));
//# sourceMappingURL=index.js.map