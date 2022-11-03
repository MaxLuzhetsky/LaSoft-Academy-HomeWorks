function PersonFunc(name, lastname, birth, address) {

    this.firstName = name,
        this.lastName = lastname,
        this.age = birth,
        this.address = address;

}
function WorkingPersonFunc(name, lastname, job, exp) {

    PersonFunc.call(this, name, lastname);

    this.job = job,
        this.jobExp = exp;

    this.getProfessionalNameAndRank = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.job + " " + this.jobExp)
    }
    this.checkError = function () {
        if (!this.firstName || !this.lastName || !this.job || !this.jobExp) {
            throw "Something wrong"
        } else {
            throw "Everything good"
        }
    }
    Object.setPrototypeOf(WorkingPersonFunc.prototype, PersonFunc.prototype);

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

const job = new WorkingPersonFunc(SarahMay.firstName, SarahMay.lastName, SarahMay.job.title, SarahMay.job.experience)
job.getProfessionalNameAndRank();
job.checkError();