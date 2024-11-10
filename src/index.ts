import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { activeRoles, userRoles } from "./data";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/api/v1/roles/active", (req: Request, res: Response) => {
    res.json(activeRoles);
});

app.get("/api/v1/roles/users", (req: Request, res: Response) => {
    res.json(userRoles);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
