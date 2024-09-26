import cors from "cors";
import Dotenv from "dotenv";
import express from "express";
import type { Request, Response } from "express-serve-static-core";

Dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request: Request, response: Response) => {
	console.log(request.userId);

	response.status(200).send({ message: "Hello World!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
