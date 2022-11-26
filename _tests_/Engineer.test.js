const Engineer = require("../lib/Engineer"); //requiring the class to test

//describing the test and testing each property and methods for the class
describe("Engineer Test", () => {
    it("should check if engineer instance returns as an object", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toEqual('object');
    });

    it("should return the GitHub of the engineer", () => {
        const github = "yeezyhub";
        const engineer = new Engineer('Yigit', 1, 'yigit@gmail.com', github);
        expect(engineer.getGithub()).toEqual(github);
    });

    it("should return the role of the engineer", () => {
        const returnValue = 'Engineer';
        const engineer = new Engineer();
        expect(engineer.getRole()).toEqual(returnValue);
    });
});