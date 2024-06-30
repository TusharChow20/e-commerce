type User = {
    id: number;
    name: string;
    email: string;
  };
  
  class UserManager {
    private users: User[];
  
    constructor() {
      this.users = [];
    }
  
    addUser(user: User) {
      this.users.push(user);
    }
  
    deleteUser(userId: number): boolean {
      const index = this.users.findIndex(user => user.id === userId);
      if (index !== -1) {
        this.users.splice(index, 1);
        return true;
      } else {
        console.log(`User with ID ${userId} not found.`);
        return false;
      }
    }
  
    getUsers(): User[] {
      return this.users;
    }
  }
  
  // Example usage:
  const userManager = new UserManager();
  userManager.addUser({ id: 1, name: "John Doe", email: "john@example.com" });
  userManager.addUser({ id: 2, name: "Jane Doe", email: "jane@example.com" });
  
  console.log("Users before deletion:");
  console.log(userManager.getUsers());
  
  const isDeleted = userManager.deleteUser(1);
  console.log(`User deleted: ${isDeleted}`);
  
  console.log("Users after deletion:");
  console.log(userManager.getUsers());
  