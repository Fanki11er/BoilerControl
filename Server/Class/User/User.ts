export class User {
	userId: number;
	boilersIds: string[] = [];
	userName: string;
	userPassword: string;
	constructor(userId: number, userName: string, userPassword: string) {
		this.userId = userId;
		this.userName = userName;
		this.userPassword = userPassword;
	}
}
