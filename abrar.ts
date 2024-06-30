console.log('abrar')


// kjjkh
console.log("Users before deletion:");
console.log(userManager.getUsers());

const isDeleted = userManager.deleteUser(1);
console.log(`User deleted: ${isDeleted}`);