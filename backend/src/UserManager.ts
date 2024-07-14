import { WebSocket } from "ws";

class UserManager {
    
    private users: Map<string, WebSocket> = new Map();
    private static instance: UserManager;
    public addUser(id: string, ws: WebSocket) {
        this.users.set(id, ws);
    }

    static getInstance(): UserManager {
        if (!UserManager.instance) {
            UserManager.instance = new UserManager();
        }
        return UserManager.instance;
    }
    public removeUser(id: string) {
        this.users.delete(id);
    }

    public getUsers() {
        return this.users;
    }
}

export const userManager = UserManager.getInstance()