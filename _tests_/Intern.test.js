const Intern = require("../lib/Intern");

describe("Intern Test", () => {
    it("should check if intern instance returns as an object", () => {
        const intern = new Intern();
        expect(typeof(intern)).toEqual('object');
    });

    it("should return the school of the intern", () => {
        const school = "Yigit";
        const intern = new Intern('Yigit', 1, 'yigit@gmail.com', school);
        expect(intern.getSchool()).toEqual(school);
    });

    it("should return the role of the intern", () => {
        const returnValue = 'Intern';
        const intern = new Intern();
        expect(intern.getRole()).toEqual(returnValue);
    });
});