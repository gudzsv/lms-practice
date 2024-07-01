import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

// 1) Create a TypeScript function named formatOrder that takes an order object as an argument. The order object should have the following properties: orderId (number), customerName (string), and isDelivered (boolean). The function should return a string summarizing the order.

type Order = {
	orderId: number;
	customerName: string;
	isDelivered: boolean;
};

function formatOrder(order: Order): string {
	return `Order ${order.orderId}: ${order.customerName} - ${
		order.isDelivered ? 'Delivered' : 'Pending'
	}`;
}

const order1 = {
	orderId: 1,
	customerName: 'Toto Rio',
	isDelivered: true,
};

console.log(formatOrder(order1));

// 2) Create a TypeScript function named displayUserProfile that takes a user profile object as an argument. The user profile object should have the following properties: username (string), age (number), and isActive (boolean). The function should return a string summarizing the user's profile details.

type UserProfile = {
	username: string;
	age: number;
	isActive: boolean;
};

function displayUserProfile(profile: UserProfile): string {
	return `${profile.username} is ${profile.age} years old and is currently ${
		profile.isActive ? 'Active' : 'Inactive'
	}.`;
}
const userProfile = {
	username: 'alice123',
	age: 28,
	isActive: true,
};
console.log(displayUserProfile(userProfile));

// 3) Write a TypeScript function named calculateTotal that takes an array of numbers and returns their sum. This function should strictly accept only an array of numbers.

function calculateTotal(numbers: number[]): number {
	return numbers.reduce((acc, curr) => acc + curr, 0);
}

const numbersArray = [10, 20, 30, 40];
console.log(calculateTotal(numbersArray)); // Output: 100

// 4) Create a TypeScript function named logDetails that takes a single parameter. The function should accept any type of value and simply print this value along with its type to the console. Demonstrate how the function can be used with different types of inputs.

function logDetails(value: any): void {
	console.log(`Value: ${value}, Type of value: ${typeof value}`);
}

logDetails('Hello, TypeScript!'); // Output: Value: Hello, TypeScript!, Type of value: string
logDetails(42); // Output: Value: 42, Type of value: number
logDetails(true); // Output: Value: true, Type of value: boolean

// 5) Write a TypeScript function named safelyParseJson that attempts to parse a JSON string and return the result. The function should use the unknown type to handle the parsed data safely, verifying the type of the parsed object before returning it. If the object is not of the expected type, the function should return null.

function safelyParseJson(jsonString: string): unknown {
	try {
		const result: unknown = JSON.parse(jsonString);
		if (typeof result === 'object' && result !== null) {
			return result; // Type is verified as an object (non-null)
		}
	} catch (error) {
		console.error('Failed to parse JSON:', error);
	}
	return null; // Return null if parsing fails or type is incorrect
}

const correctJson = '{"name":"John", "age":30}';
console.log(safelyParseJson(correctJson)); // Output: { name: 'John', age: 30 }

const incorrectJson = 'this is not a json';
console.log(safelyParseJson(incorrectJson)); // Output: null

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
