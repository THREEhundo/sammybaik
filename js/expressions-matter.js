/*** Expressions Matter
 *
 * Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
 *
 * In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
 *
 */
function expressionMatter(a, b, c) {
	let answer = 0

	if (a * (b + c) > answer) answer = a * (b + c)
	if (a * b * c > answer) answer = a * b * c
	if (a + b * c > answer) answer = a + b * c
	if ((a + b) * c > answer) answer = (a + b) * c
	if (a + b + c > answer) answer = a + b + c
	return answer
}
