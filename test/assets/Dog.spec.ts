import {Dog} from "../../app/assets/app/Dog"


describe("some test", () => {
    it("does a test"), () => {
        let d:Dog = new Dog("Max")
        expect(d.name).toEqual("Max")
    }
})