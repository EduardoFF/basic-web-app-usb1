import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });


    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"depci-invitado"
    	));
    });

    test('should return my name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"Eduardo"
    	));
    });

     test('should return largest num', () => {
        const query = "Which of the following numbers is the largest: 54, 15, 48?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"54"
    	));
    });

     test('should return largest num', () => {
        const query = "Which of the following numbers is the largest: 8, 69, 89?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"89"
    	));
    });
     test('should return largest num', () => {
        const query = "What is 76 plus 40?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"116"
    	));
    });

     test('should return largest num', () => {
        const query = "What is 3 multiplied by 48??";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"144"
    	));
    });

     test('should return largest num', () => {
        const query = "What is 24 minus 24?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"0"
    	));
    });


});
