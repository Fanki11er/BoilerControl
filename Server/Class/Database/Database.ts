import fs from "fs";
import { BoilerSnapshot } from "../../Types/Types";
import { Boiler } from "../Boiler/Boiler";
import { User } from "../User/User";

const BOILER_SNAPSHOTS_PATH = "./Data/BoilersSnapshots.data";
const USERS_PATH = "./Data/Users.data";

export class Database {
	private users: User[] = [];
	private boilersSnapshots: BoilerSnapshot[] = [];
	private boilers;

	constructor(boilers: Boiler[]) {
		this.boilers = boilers;
		this.loadUsers(USERS_PATH);
		this.loadBoilersSnapshots(BOILER_SNAPSHOTS_PATH);
	}

	private readFile = (filePath: string, info: string = "") => {
		let data = "";
		//console.log(`Loading ${info}...`);
		try {
			data = fs.readFileSync(filePath).toString();
		} catch (error: any) {
			console.error(`Got an error trying to read the file: ${error.message}`);
		}
		//console.log(`${info} Loaded`);
		return data;
	};

	private saveToFile = (filePath: string, data: string) => {
		try {
			fs.writeFileSync(filePath, data);
		} catch (error: any) {
			console.error(`Got an error trying to write to a file: ${error.message}`);
		}
	};

	private loadBoilersSnapshots = (path: string) => {
		const snapshot = this.readFile(path);

		if (snapshot) {
			const data = JSON.parse(snapshot) as BoilerSnapshot[];

			data.forEach((element) => {
				this.boilers.push(new Boiler(element.boilerId, element));
			});
		} else
			this.users.forEach((user) => {
				user.boilersIds.forEach((id) => {
					this.boilers.push(new Boiler(id));
				});
			});
	};

	public saveBoilersSnapshots = (path: string) => {
		this.boilersSnapshots = [];
		this.boilers.forEach((boiler) => {
			this.boilersSnapshots.push(boiler.exportSnapshot());
		});
		if (this.boilersSnapshots.length) {
			const snapshots = JSON.stringify(this.boilersSnapshots);
			this.saveToFile(path, snapshots);
		}
	};

	private saveUsersSnapshot = () => {
		this.saveToFile(USERS_PATH, JSON.stringify(this.users));
	};

	makeSnapshot = (boilerSnapshot: BoilerSnapshot) => {
		this.boilersSnapshots.push(boilerSnapshot);
	};

	private loadUsers = (path: string) => {
		const snapshot = this.readFile(path);
		if (snapshot) {
			const data = JSON.parse(snapshot) as User[];

			this.users.push(...data);
		}
	};

	private createUserIndex = () => {
		return this.users.length + 1;
	};

	//!! Make password hash
	addNewUser(name: string, password: string) {
		if (this.checkIfUserExists(name)) {
			return null;
		}
		if (name === undefined || password === undefined) {
			return null;
		}
		const userIndex = this.users.push(
			new User(this.createUserIndex(), name, password)
		);
		this.saveUsersSnapshot();
		return {
			userName: this.users[userIndex - 1].userName,
			userId: userIndex,
		} as User;
	}

	private checkIfUserExists(name: string) {
		const user = this.users.find((userObject) => {
			return userObject.userName === name;
		});
		if (user) {
			return true;
		}
		return false;
	}
	private findUserById(userId: number) {
		return this.users.findIndex((item) => {
			return item.userId === userId;
		});
	}

	loginUser(name: string, password: string) {
		const userIndex = this.users.findIndex((item) => {
			return item?.userName === name;
		});

		if (userIndex >= 0 && this.users[userIndex].userPassword === password) {
			return {
				userId: this.users[userIndex].userId,
				userName: this.users[userIndex].userName,
			} as User;
		}

		return null;
	}

	getUserBoilersIds(userId: number) {
		const userIndex = this.findUserById(userId);
		if (userIndex >= 0) {
			return this.users[userIndex].boilersIds;
		}
		return [];
	}

	addNewUserBoiler(userId: number, boilerId: string) {
		const userIndex = this.findUserById(userId);
		const boilerIndex = this.users.findIndex((user) => {
			return user.boilersIds.find((id) => {
				return id === boilerId;
			});
		});

		if (userIndex >= 0 && boilerIndex < 0) {
			this.users[userIndex].boilersIds.push(boilerId);

			this.saveUsersSnapshot();
			return true;
		}
		return false;
	}
}
