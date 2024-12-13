let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full";
} else if (userRole === "manager") {
    accessLevel = "Limited";
} else {
    accessLevel = "None";
}

console.log("Access Level:", accessLevel);

let isLogged = true;
let userMessage;

if (isLogged) {
    if (userRole === "admin") {
        userMessage = "Hello Admin";
    } else {
        userMessage = "Hello User";
    }
} else {
    userMessage = "Please log in";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);