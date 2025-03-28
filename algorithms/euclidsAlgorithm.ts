/* From The Art of Computer Programming, Volume 1, Section 1.2.1 */

function getGCD(m: number, n: number): number {
	if (n === 0) return m;
	const remainder = m % n;
	if (remainder === 0) return n;
	return getGCD(n, remainder);
}

const firstNum = Number.parseInt(prompt("Enter the first number: ") || "0");
const secondNum = Number.parseInt(prompt("Enter the second number: ") || "0");

console.log(
	`The GCD of ${firstNum} and ${secondNum} is: ${getGCD(firstNum, secondNum)}`,
);
