// import { describe, it, expect } from "jest";
import reverseString from "../src";
import { reversed } from "../src/new";

describe("get-reversed-string", () => {
	it("name string reverse", () => {
		const str = reverseString("My Name is Sreetam");
		expect(str).toMatch("mateers si eman ym");
	});
	test("lowercase everything", () => {
		const str = reverseString("THIS IS A STRING");
		console.error("string result:", str);
		console.log("reversed:", reversed);

		expect(str).toMatch("gnirts a si siht");
	});
});
