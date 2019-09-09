import { describe, it, expect } from "jest";
import getReverseString from "../src";

describe("get-reversed-string", () => {
	it("name string reverse", () => {
		const str = getReverseString("My Name is Sreetam");
		expect(str).toMatch("/mateers si eman ym/");
	});
});
