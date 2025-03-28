/**
 * From The Art of Computer Programming, Volume 1, Section 1.2.1
 * @param m - First number
 * @param n - Second number
 * @returns The GCD of m and n
 * @throws {Error} Thrown when both m and n are 0
 *
 * A little intuition for why this works. When you divide m by n, you get a quotient and a
 * remainder. You could write this as (m % n) * n + r = m. When r > 0, the GCD must be
 * smaller than n, but both the n and the remainder must be divisible by the GCD. We recursively
 * reduce the problem until we get a remainder of 0, at which point we have found the GCD, being
 * the last non-zero remainder.
 */

function euclidsAlgorithm(m: number, n: number): number {
	if (m === 0 && n === 0) {
		throw new Error("GCD is undefined when both numbers are 0");
	}
	if (m === 0) return n;
	if (n === 0) return m;
	if (n > m) return euclidsAlgorithm(n, m);

	const remainder = m % n;
	if (remainder === 0) return n;
	return euclidsAlgorithm(n, remainder);
}

const firstNum = Number.parseInt(prompt("Enter the first number: ") || "0");
const secondNum = Number.parseInt(prompt("Enter the second number: ") || "0");

console.log(
	`The GCD of ${firstNum} and ${secondNum} is: ${euclidsAlgorithm(firstNum, secondNum)}`,
);
