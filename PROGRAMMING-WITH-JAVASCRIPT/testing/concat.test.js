const concat = require("./testing");

describe("concat", () => {
	test("should concatenate two strings", () => {
		expect(concat("world", "wide")).toBe("worldwide");
	});

	test("should handle empty strings", () => {
		expect(concat("", "")).toBe("");
	});

	test("should handle special characters", () => {
		expect(concat("hello", "!")).toBe("hello!");
	});

	test("should handle numbers", () => {
		expect(concat("123", "456")).toBe("123456");
	});

	test("should handle null and undefined", () => {
		expect(concat(null, "world")).toBe("nullworld");
		expect(concat(undefined, "wide")).toBe("undefinedwide");
	});
});
