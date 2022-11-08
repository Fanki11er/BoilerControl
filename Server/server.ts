import express from "express";
import { Boiler } from "./Class/Boiler/Boiler";
import { Database } from "./Class/Database/Database";
import http from "http";
import bodyParser from "body-parser";
import { BoilerStatus, PanelOptions } from "./Types/Types";
import { BoilerSettings } from "./Class/BoilerSettings/BoilerSettings";

const app = express();
//app.use(express.json);
const server = http.createServer(app);
//const jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const boilers: Boiler[] = [new Boiler("B1")];
//boilers.push(new Boiler("B1"));
const base = new Database();
//base.makeSnapshot(boilers[0].exportSnapshot());

/*app.get("/Register", (req, res) => {
	//const data = req.body;
	//console.log("GEt", data);
	res.send("hello world");

	/*if (base.addNewUser("Test", "QWERTY")) {
		const logged = base.loginUser("Test", "QWERTY");
		if (logged) {
			res.send(logged);
		}
	}*/

//res.send(null);
//});

const findBoilerById = (id: string) => {
	return boilers.findIndex((boiler) => {
		return boiler.getId() === id;
	});
};

app.post("/Register", async (req, res) => {
	const user = base.addNewUser(req.body.userName, req.body.password);

	if (user) {
		res.json(user);

		return;
	}
	res.sendStatus(400);
});

app.post("/Login", async (req, res) => {
	const user = base.loginUser(req.body.userName, req.body.password);

	if (user) {
		res.json(user);

		return;
	}
	res.sendStatus(400);
});

app.post("/GetParams", async (req, res) => {
	const id = req.body.id;
	if (id) {
		const index = findBoilerById(id);
		if (index >= 0) {
			res.json(boilers[index].getBoilerParameters());
			return;
		}
	}

	res.sendStatus(400);
});

app.post("/SetStatus", async (req, res) => {
	const id = req.body.id;
	const status = req.body.status as PanelOptions;
	if (id && status) {
		const index = findBoilerById(id);
		if (index >= 0) {
			boilers[index].changeStatus(status);
			res.sendStatus(200);
			return;
		}
	}

	res.sendStatus(400);
});

app.post("/GetSettings", async (req, res) => {
	const id = req.body.id;

	if (id) {
		const index = findBoilerById(id);

		if (index >= 0) {
			const settings = boilers[index].getBoilerSettings();
			res.json(settings);
			return;
		}
	}

	res.sendStatus(400);
});

app.post("/SetSettings", async (req, res) => {
	const id = req.body.id;
	const settings = req.body.settings as BoilerSettings;
	if (id) {
		const index = findBoilerById(id);
		if (index >= 0) {
			boilers[index].setBoilerSettings(settings);
			res.json(settings);
			return;
		}
	}

	res.sendStatus(400);
});

/*app.get("/async", async (req, res) => {
	try {
		const response = await axios({
			url: "users",
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});*/

server.listen(8000, () => {
	//readFile("./Data/test.txt");
	//base.saveToFile("./Data/test.txt", JSON.stringify(boilers));
});
