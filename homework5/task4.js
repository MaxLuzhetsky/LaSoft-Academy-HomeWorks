class PersonFunc {
    constructor(name, lastname, birth, address) {
        this.firstName = name,
            this.lastName = lastname,
            this.age = birth,
            this.address = address;
    }
}

class WorkingPersonClass extends PersonFunc {
    constructor(name, lastname, job, exp) {
        super(name, lastname);
        this.job = job;
        this.jobExp = exp;
    }
    getProfessionalNameAndRank() {
        let result = ""
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
           
        } catch (err) {
            throw err
        }

        result = this.firstName + " " + this.lastName + " " + this.job + " " + this.jobExp

        return result 
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

const job = new WorkingPersonClass(SarahMay.firstName, SarahMay.lastName, SarahMay.job.title, SarahMay.job.experience);
console.log(job.getProfessionalNameAndRank());
