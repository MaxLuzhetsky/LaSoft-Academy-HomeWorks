class PersonFunc {
    constructor(name, lastname, birth, address) {
        this.firstName = name,
            this.lastName = lastname,
            this.age = birth,
            this.address = address;
    }
    fullName() {

        let result = ""
        try {
            if (!this.firstName || !this.lastName) {
                throw new SyntaxError("First name or Full name is missing");
            }


        } catch (e) {

            
                throw e;
            

        }
        result = this.firstName + " " + this.lastName
        return result;

    }
    getAge() {
        let result = ""
        try {
            if (!this.age) {
                throw new SyntaxError("Birth date is missing");
            }

        } catch (e) {

            
                throw e;
            

        }
        let age = this.age
        let arr = age.split('.')
        let years = 2022 - arr[arr.length - 1]
        result = years + " " + "years"
        return result;

    }
    getFullAddress() {
        let result = ""
        try {
            if (!this.address) {
                throw new SyntaxError("Address is missing");
            }



        } catch (e) {

                throw e;
            

        }
        let address = this.address
        result = address.country + ", " + address.city + ", " + address.street + ", " + address.house + ", " + address.apartment
        return result;

    }

}
const SarahMay = {
    firstName: "Sarah",
    lastName: "May",
    birthDate: "13.03.1990",
    address: {
        country: "Spain",
        city: "Seville",
        street: "calle Verde",
        house: "5",
        apartment: "2A",
    },
    job: {
        title: "teacher",
        experience: 5
    }
}

const pers = new PersonFunc(SarahMay.firstName, SarahMay.lastName, SarahMay.birthDate, SarahMay.address);
console.log(pers.fullName());
console.log(pers.getAge());
console.log(pers.getFullAddress());