import express from "express";
import { Boiler } from "./Class/Boiler/Boiler";
import { Database } from "./Class/Database/Database";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { PanelOptions } from "./Types/Types";
import { BoilerSettings } from "./Class/BoilerSettings/BoilerSettings";
const BOILER_SNAPSHOTS_PATH = "./Data/BoilersSnapshots.data";

const app = express();

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const boilers: Boiler[] = [];

const base = new Database(boilers);

setInterval(() => {
	base.saveBoilersSnapshots(BOILER_SNAPSHOTS_PATH);
}, 60000);

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

app.post("/GetBoilersList", async (req, res) => {
	const id = req.body.id;

	if (id) {
		res.json(base.getUserBoilersIds(id));
		return;
	}

	res.sendStatus(400);
});

app.post("/AddBoiler", async (req, res) => {
	const id = req.body.id;
	const boilerId = req.body.boilerId;

	if (id && boilerId) {
		if (base.addNewUserBoiler(id, boilerId)) {
			boilers.push(new Boiler(boilerId));
			return;
		}
	}

	res.sendStatus(400);
});

server.listen(8000, () => {});

//{"userSettings":{"desiredTemperature":70,"boilerHysteresis":5},"advancedSettings":{"fanSpeed":100,"fanSpeedInSupervision":50,"supervisionWaitingTime":70,"fuelStream":15,"fuelBreakTime":30,"fuelStreamTime":10}}
