function findLargestNumber(query: string): string {
    // Step 1: Extract numbers from the query using a regular expression
    const numbers = query.match(/\d+/g); // This extracts all numbers as strings
    if (!numbers) return "No numbers found in the query."; // Handle edge case

    // Step 2: Convert strings to numbers
    const numericNumbers = numbers.map(Number);

    // Step 3: Find the largest number using Math.max()
    const largestNumber = Math.max(...numericNumbers);

    // Step 4: Return the result as a string
    return `${largestNumber}`;
}

function calculateExpression(query: string): string {
    // Step 1: Match the query for different operators
    const multiplyMatch = query.match(/(\d+)\s+multiplied\s+by\s+(\d+)/i); // Match "<number> multiplied by <number>"
    const plusMatch = query.match(/(\d+)\s+plus\s+(\d+)/i); // Match "<number> plus <number>"

    // Step 2: Check which operation to perform
    if (multiplyMatch) {
        const num1 = Number(multiplyMatch[1]);
        const num2 = Number(multiplyMatch[2]);
        const result = num1 * num2; // Perform multiplication
        return `${result}`;
    } else if (plusMatch) {
        const num1 = Number(plusMatch[1]);
        const num2 = Number(plusMatch[2]);
        const result = num1 + num2; // Perform addition
        return `${result}`;
    }

    // Step 3: If no match, return an error message
    return "Invalid query format.";
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    return ( "depci-invitado" );
  }

  if (query.toLowerCase().includes("name")) {
    return ( "Eduardo" );
  }

  if (query.toLowerCase().includes("largest")) {
    return findLargestNumber(query);
  }

  if (query.toLowerCase().includes("plus")) {
    return calculateExpression(query);
  }
  if (query.toLowerCase().includes("multiplied")) {
    return calculateExpression(query);
  }


  return "";
}
