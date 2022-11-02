function PersonFunc(person) {

    this.firstName = person.firstName,
        this.lastName = person.lastName,
        this.age = person.birthDate,
        this.address = person.address;

    this.fullName = function () {
        console.log(this.firstName + " " + this.lastName)
    }
    this.getAge = function () {
        let age = this.age
        let arr = age.split('.')
        let result = 2022 - arr[arr.length - 1]
        console.log(result + " " + "years")
    }
    this.getFullAddress = function () {
        let address = this.address
        console.log(address.country + " " + address.city + " " + address.street + " " + address.house + " " + address.apartment)
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
const pers = new PersonFunc(SarahMay);
pers.fullName();
pers.getAge();
pers.getFullAddress();