let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let userStatus = "Employee";

// if..else if..else example
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

// boolean example
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

// switch example
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

// ternary operator example
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

if (userStatus === "Employee") {
    userMessage = "You have access to Dietary Services"; 
}
else if (userStatus === "Enrolled Member") {
    userMessage = "You have access to Dietary Services and one-on-one interaction with a dietician."; 
}
else if (userStatus === "Subscriber") {
    userMessage = "You have partial access to facilitate Dietary Services";     
}
else if (userStatus === "Non-Subscriber,") {
    userMessage = "You need to enroll to have access to Dietary Services";     
}
console.log("User Message for Dietary Services: ", userMessage);