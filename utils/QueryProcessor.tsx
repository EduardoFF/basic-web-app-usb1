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


  return "";
}
