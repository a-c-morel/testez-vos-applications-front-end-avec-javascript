import { sayHello } from "./unit1";

describe('SayHello Unit Test Suites', () => {
    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe("Hello, World")
    })
    it('should return "Hello, Adeline"', () => {
        expect(sayHello("Adeline")).toBe("Hello, Adeline")
    })
})