class PersonFunc {
    constructor(name , lastname , birth , address) {
        this.firstName = name,
            this.lastName = lastname,
            this.age = birth,
            this.address = address;
    }
}

class WorkingPersonClass extends PersonFunc {
    constructor(name , lastname , job , exp){
        super(name , lastname);
        this.job = job ;
        this.jobExp = exp;
    }
     getProfessionalNameAndRank() {
        console.log(this.firstName + " " + this.lastName + " " + this.job + " " + this.jobExp)
    }
    checkError(){
        if (!this.firstName || !this.lastName || !this.job || !this.jobExp) {
            throw "Something wrong"
        } else {
            throw "Everything good"
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

const job = new WorkingPersonClass(SarahMay.firstName, SarahMay.lastName, SarahMay.job.title, SarahMay.job.experience);
job.getProfessionalNameAndRank();
job.checkError();