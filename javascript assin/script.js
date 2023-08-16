// 1

// Prompt the user to enter a password
const password = prompt("Enter your password:");

// Prompt the user to confirm the password
const confirmedPassword = prompt("Confirm your password:");

// Check if the passwords match
if (password === confirmedPassword) {
    console.log("Password Matched. Password validation Successful.");
} else {
    console.log("Password didn't match. Password validation unsuccessful.");
}


// /
// 2
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Cannot divide by zero");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${result}`);
}

// Test cases
calculator(5, 3, "+");   // Should output: Result: 8
calculator(10, 4, "-");  // Should output: Result: 6
calculator(6, 2, "*");   // Should output: Result: 12
calculator(15, 3, "/");  // Should output: Result: 5
calculator(8, 0, "/");   // Should output: Cannot divide by zero
calculator(5, 3, "%");   // Should output: Invalid operator



// 3

function mixColors(color1, color2) {
    let resultColor;

    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    resultColor = "purple";
                    break;
                case "yellow":
                    resultColor = "orange";
                    break;
                default:
                    resultColor = "Invalid color combination";
                    break;
            }
            break;
        case "blue":
            switch (color2) {
                case "red":
                    resultColor = "purple";
                    break;
                case "yellow":
                    resultColor = "green";
                    break;
                default:
                    resultColor = "Invalid color combination";
                    break;
            }
            break;
        case "yellow":
            switch (color2) {
                case "red":
                    resultColor = "orange";
                    break;
                case "blue":
                    resultColor = "green";
                    break;
                default:
                    resultColor = "Invalid color combination";
                    break;
            }
            break;
        default:
            resultColor = "Invalid color combination";
            break;
    }

    console.log(`Resulting color: ${resultColor}`);
}

// Test cases
mixColors("red", "blue");    // Should output: Resulting color: purple
mixColors("blue", "yellow"); // Should output: Resulting color: green
mixColors("red", "green");   // Should output: Invalid color combination
// 

// 4
function findHighestMarks(marks) {
    let highestMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }

    return highestMarks;
}

const studentMarks = [85, 92, 78, 95, 88];
const highest = findHighestMarks(studentMarks);
console.log(`The highest marks scored by any student: ${highest}`);

// 5
function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const userName = prompt("Enter your name:");
const capitalizedUserName = userName.charAt(0).toLowerCase() === userName.charAt(0) ?
                            capitalizeName(userName) : userName;

console.log(`Original name: ${userName}`);
console.log(`Capitalized name: ${capitalizedUserName}`);

// 6
function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

const userName1 = prompt("Enter your name:");
const numVowels = countVowels(userName1);

console.log(`Number of vowels in "${userName1}": ${numVowels}`);


// 7
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const shoppingCart = ["item1", "item2", "item1", "item3", "item2"];
const uniqueItems = removeDuplicates(shoppingCart);

console.log("Original cart:", shoppingCart);
console.log("Cart with duplicates removed:", uniqueItems);


// 8
function printInvertedTriangle(rows) {
    for (let i = rows; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

const numRows = 6;
printInvertedTriangle(numRows);


// 9
function printDivisibleBy3NotBy2(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        } else {
            continue;
        }
    }
}

const numberArray = [3, 6, 9, 12, 15, 18, 21];
printDivisibleBy3NotBy2(numberArray);


// 10
function doubleCartQuantities(cart) {
    const doubledCart = cart.map(quantity => quantity * 2);
    return doubledCart;
}

const originalCart = [1, 2, 3, 4, 5];
const correctedCart = doubleCartQuantities(originalCart);

console.log("Original Cart:", originalCart);
console.log("Corrected Cart:", correctedCart);


// 11
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const celsiusTemperature = 25; // Example Celsius temperature
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);

console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);
// 

// 12
function calculateRentalCost(daysRented, carType) {
    let rentalCost;

    switch (carType.toLowerCase()) {
        case "economy":
            rentalCost = 4000;
            break;
        case "midsize":
            rentalCost = 15000;
            break;
        case "luxury":
            rentalCost = 20000;
            break;
        default:
            return "Invalid car type";
    }

    const totalCost = rentalCost * daysRented;
    return totalCost;
}

const daysRented = 7; // Example number of days rented
const carType = "luxury"; // Example car type
const totalRentalCost = calculateRentalCost(daysRented, carType);

if (typeof totalRentalCost === "number") {
    console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalRentalCost}/-`);
} else {
    console.log(totalRentalCost);
}


// 13
function calculateBill(dishes, numberOfPeople) {
    const totalBill = dishes.reduce((acc, dishCost) => acc + dishCost, 0);
    const individualShare = totalBill / numberOfPeople;

    return {
        totalBill: totalBill,
        individualShare: individualShare
    };
}

const dishCosts = [250, 350, 150, 200]; // Example dish costs
const peopleCount = 4; // Example number of people
const billDetails = calculateBill(dishCosts, peopleCount);

console.log(`Total bill: Rs. ${billDetails.totalBill}/-`);
console.log(`Each person's share: Rs. ${billDetails.individualShare}/-`);



// 14const calculateTotalCost = cart => {
    return cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
};

const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 25, quantity: 3 },
    { unitPrice: 5, quantity: 10 }
];

const totalCost = calculateTotalCost(customerCart);
console.log(`Total cost of items: $${totalCost}`);


// 15
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const percentageDiscount = (discountAmount / originalPrice) * 100;
    return parseFloat(percentageDiscount.toFixed(2)); // Round to two decimal places
};

const originalPrice = 100;
const discountedPrice = 70;

const discountPercentage = calculateDiscountPercentage(originalPrice, 
    
    discountedPrice);
console.log(`Discount percentage: ${discountPercentage}%`);


// 16
const randomGenerator = (() => {
    return Math.floor(Math.random() * 100) + 1;
})();

console.log(`Random number generated: ${randomGenerator}`);


// 17
// Create a customer object with initial details
const customer = {
    name: "John Doe",
    balance: 1000,

    // Method to deposit funds
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${this.name} deposited Rs. ${amount}`);
        } else {
            console.log("Invalid deposit amount");
        }
    },

    // Method to withdraw funds
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`${this.name} withdrew Rs. ${amount}`);
        } else {
            console.log("Insufficient balance or invalid withdrawal amount");
        }
    },

    // Method to check account balance
    getBalance: function() {
        console.log(`${this.name}'s account balance: Rs. ${this.balance}`);
    }
};

// Deposit and withdraw examples
customer.getBalance();
customer.deposit(500);
customer.withdraw(300);
customer.getBalance();



// 18



        const heading = document.getElementById("heading");
        const toggleButton = document.getElementById("toggleButton");

        toggleButton.addEventListener("click", () => {
            if (heading.textContent === "The most affordable learning platform") {
                heading.textContent = "PW Skills";
            } else {
                heading.textContent = "The most affordable learning platform";
            }
        });

{/* 19
 */}


//  19
  const form = document.getElementById("loginForm");
        const validationMessage = document.getElementById("validationMessage");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email.includes("@") && password.length >= 8) {
                validationMessage.textContent = "Valid email and password!";
                validationMessage.style.color = "green";
            } else {
                validationMessage.textContent = "Invalid email or password!";
                validationMessage.style.color = "red";
            }
        });

        // 20

         const learningItems = [
            "HTML Basics",
            "CSS Styling",
            "JavaScript Fundamentals",
            "Responsive Design",
            "DOM Manipulation",
            "API Integration"
        ];
        
        const learningList = document.getElementById("learningList");
        const addButton = document.getElementById("addButton");
        let currentItemIndex = 0;

        addButton.addEventListener("click", function() {
            if (currentItemIndex < learningItems.length) {
                const newItem = document.createElement("li");
                newItem.textContent = learningItems[currentItemIndex];
                learningList.appendChild(newItem);
                currentItemIndex++;
            } else {
                addButton.disabled = true;
                addButton.textContent = "All items added";
            }
        });


        // 21
     const todoInput = document.getElementById("todoInput");
        const addButton1 = document.getElementById("addButton1");
        const todoList = document.getElementById("todoList");

        addButton.addEventListener("click", function() {
            const todoText = todoInput.value.trim();

            if (todoText !== "") {
                const newItem = document.createElement("li");
                newItem.textContent = todoText;
                todoList.appendChild(newItem);
                todoInput.value = "";
            }
        });


        // 22
         const progressBar = document.getElementById("progress-bar");
        const progressContainer = document.getElementById("progress-container");

        document.addEventListener("scroll", () => {
            const windowHeight = window.innerHeight;
            const totalHeight = document.body.clientHeight - windowHeight;
            const scrollPosition = window.scrollY;

            const progress = (scrollPosition / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;

            if (progress === 0) {
                progressContainer.style.display = "none";
            } else {
                progressContainer.style.display = "block";
            }
        });
  

        // 23
            const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#d35400", "#34495e"];

        const colorChangeButton = document.getElementById("colorChangeButton");

        colorChangeButton.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * colors.length);
            const randomColor = colors[randomIndex];
            document.body.style.backgroundColor = randomColor;
        });

        // 24
              const paragraph = document.getElementById("paragraph");
        const words = paragraph.textContent.split(" ");

        for (let i = 0; i < words.length; i++) {
            if (words[i].length > 8) {
                words[i] = `<span class="highlight">${words[i]}</span>`;
            }
        }

        paragraph.innerHTML = words.join(" ");

        // 25

         const image = document.getElementById("image");
        const moveDistance = 10;

        document.addEventListener("keydown", event => {
            const key = event.key;
            let top = parseInt(image.style.top) || 0;
            let left = parseInt(image.style.left) || 0;

            switch (key) {
                case "ArrowUp":
                    top -= moveDistance;
                    break;
                case "ArrowDown":
                    top += moveDistance;
                    break;
                case "ArrowLeft":
                    left -= moveDistance;
                    break;
                case "ArrowRight":
                    left += moveDistance;
                    break;
            }

            image.style.top = `${top}px`;
            image.style.left = `${left}px`;
        });

        // 







