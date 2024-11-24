"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Register = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
const jwtSecret = process.env.JWT_SECRET;
console.log("jwt", jwtSecret);
if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in the environment variables.");
}
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userSchema = zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z.string().email("Invalid email format"),
        password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    });
    try {
        const { name, email, password } = userSchema.parse(req.body);
        const existingUser = yield prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            console.error("Error: Attempt to register an already existing user.");
            res.status(400).json({
                message: "User Already exists",
            });
            return;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = yield prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json({
            message: "User created successfully",
            newUser,
        });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({
                message: "Validation error",
                errors: error.errors,
            });
        }
        else {
            console.error("Error during user creation:", error);
            res.status(500).json({
                message: "Internal server error",
            });
        }
    }
});
exports.Register = Register;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const loginSchema = zod_1.z.object({
        email: zod_1.z.string().email("Invalid email format"),
        password: zod_1.z.string().min(6, "password must be atleast 6 characters"),
    });
    try {
        const { email, password } = loginSchema.parse(req.body);
        const user = yield prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            console.error("Error: User not found.");
            res.status(401).json({
                message: "Invalid credentials",
            });
            return;
        }
        const isPassword = yield bcryptjs_1.default.compare(password, user.password);
        if (!isPassword) {
            console.error("Error:Incorrect password");
            res.status(401).json({
                message: "Invalid credentials",
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, jwtSecret, {
            expiresIn: "1h",
        });
        res.status(200).json({
            message: "Login successful",
            token,
        });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({
                message: "Validation error",
                errors: error.errors,
            });
        }
        else {
            console.error("Error during login:", error);
            res.status(500).json({
                message: "Internal server error",
            });
        }
    }
});
exports.Login = Login;
