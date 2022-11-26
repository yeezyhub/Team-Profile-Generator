const Manager = require("../lib/Manager"); //requiring the class to test

//describing the test and testing each property and methods for the class
describe("Manager Test", () => {
    it("should check if manager instance returns as an object", () => {
        const manager = new Manager();
        expect(typeof(manager)).toEqual('object');
    });

    it("should return the office number of the manager", () => {
        const officeNumber = "1111";
        const manager = new Manager('Yigit', 1, 'yigit@gmail.com', officeNumber);
        expect(manager.getOfficeNumber()).toEqual(officeNumber);
    });

    it("should return the role of the manager", () => {
        const returnValue = 'Manager';
        const manager = new Manager();
        expect(manager.getRole()).toEqual(returnValue);
    });
});