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
        let error = ""
        try {

            if (!this.firstName) {
                error = "First name is missing"
                throw new SyntaxError(error);
            } else if (!this.lastName) {
                error = "Last name is missing"
                throw new SyntaxError(error);
            } else if (!this.job) {
                error = "Job title is missing"
                throw new SyntaxError(error);
            } else if (!this.jobExp) {
                error = "Job experience is missing"
                throw new SyntaxError(error);
            }
            console.log(this.firstName + " " + this.lastName + " " + this.job + " " + this.jobExp)
        } catch (err) {
            console.log(error)
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