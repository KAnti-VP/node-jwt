import express from "express";
import cors from "cors";
import sequelize from "./data/database.js";
import usersRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api", usersRoutes);

app.get("/", (req, res) => {
	res.send("Hello JWT Tutorial");
});

sequelize
	.sync()
	.then((result) => {
		app.listen(3000, () => {
			console.log(`Server runs on port ${PORT}`);
		});
	})
	.catch((err) => console.log(err));

/*
try {
	result = await sequelize.sync()
	app.listen(PORT, () => { console.log(`Server runs om port ${PORT}`)})
} catch (err) {
	console.log(`Error: ${err.message}`)
}
*/
