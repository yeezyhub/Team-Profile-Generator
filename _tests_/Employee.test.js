const Employee = require("../lib/Employee");

describe("Employee Test", () => {
    it("should check if employee instance returns as an object", () => {
        const employee = new Employee();
        expect(typeof(employee)).toEqual('object');
    });

    it("should return the name of the employee", () => {
        const name = "Yigit";
        const employee = new Employee(name);
        expect(employee.getName()).toEqual(name);
    });

    it("should return the id of the employee", () => {
        const id = "1";
        const employee = new Employee(id);
        expect(employee.getId()).toEqual(id);
    });

    it("should return the email of the employee", () => {
        const email = "yigit@gmail.com";
        const employee = new Employee(email);
        expect(employee.getEmail()).toEqual(email);
    });

    it("should return the role of the employee", () => {
        const returnValue = 'Employee';
        const employee = new Employee();
        expect(employee.getRole()).toEqual(returnValue);
    });
});