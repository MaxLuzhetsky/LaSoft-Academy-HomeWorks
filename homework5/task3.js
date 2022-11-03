class PersonFunc {
    constructor(name, lastname, birth, address) {
        this.firstName = name,
            this.lastName = lastname,
            this.age = birth,
            this.address = address;
    }
    fullName() {

        try {
            if (!this.firstName || !this.lastName) {
                throw new SyntaxError("First name or Full name is missing");
            }
            console.log(this.firstName + " " + this.lastName)

        } catch (e) {

            if (e.name == "SyntaxError") {
                console.log("First name or Full name is missing");
            } else {
                throw e;
            }

        }

    }
    getAge() {
        try {
            if (!this.age) {
                throw new SyntaxError("Birth date is missing");
            }
            let age = this.age
            let arr = age.split('.')
            let result = 2022 - arr[arr.length - 1]
            console.log(result + " " + "years")

        } catch (e) {

            if (e.name == "SyntaxError") {
                console.log("Birth date is missing");
            } else {
                throw e;
            }

        }

    }
    getFullAddress() {
        try {
            if (!this.address) {
                throw new SyntaxError("Address is missing");
            }
            let address = this.address
            console.log(address.country + ", " + address.city + ", " + address.street + ", " + address.house + ", " + address.apartment)

        } catch (e) {

            if (e.name == "SyntaxError") {
                console.log("Address is missing");
            } else {
                throw e;
            }

        }

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
pers.fullName();
pers.getAge();
pers.getFullAddress();