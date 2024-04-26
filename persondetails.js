class Sathish {
    constructor(
        personName = "Sathish S",
        age = "26",
        email = "sathishsettu9298@gmail.com",
        mobileNo = "9751041669",
        streetName = "Vailambadi",
        area = "Arakkonam",
        city = "Chennai",
        district = "Ranippettai",
        highestQualification = "B.E",
        schoolName = "GHSS",
        sslcMark = "467/500",
        sslcYearOfCompletion = "2014",
        hscMark = "1090/1200",
        placeOfSchool = "Theni",
        hscYearOfCompletion = "2016",
        collegeName = "Ranippettai Engineering College",
        department = "Computer Science Engineering",
        batch = "2016-2020",
        cgpa = "6.86",
        university = "Anna University",
        placeOfCollege = "Chennai",
        technicalSkills = "JavaScript, React, Node.js",
        companyName = "Stellar Innovation Pvt Limited",
        job = "Senior Data Analyst",
        workExperience = "2 years"
    ) {
        this.personName = personName;
        this.age = age;
        this.email = email;
        this.mobileNo = mobileNo;
        this.streetName = streetName;
        this.area = area;
        this.city = city;
        this.district = district;
        this.highestQualification = highestQualification;
        this.schoolName = schoolName;
        this.placeOfSchool = placeOfSchool;
        this.sslcMark = sslcMark;
        this.sslcYearOfCompletion = sslcYearOfCompletion;
        this.hscMark = hscMark;
        this.hscYearOfCompletion = hscYearOfCompletion;
        this.collegeName = collegeName;
        this.placeOfCollege = placeOfCollege;
        this.batch = batch;
        this.department = department;
        this.cgpa = cgpa;
        this.university = university;
        this.technicalSkills = technicalSkills;
        this.companyName = companyName;
        this.job = job;
        this.workExperience = workExperience;
    }

    displayPersonalInfo() {
        console.log(
            `:::::: PERSONAL DETAILS :::::
    
            Name => ${this.personName},
            Age => ${this.age},
            Email => ${this.email},
            Mobile Number => ${this.mobileNo}.`
        );
        console.log(
            `      Address :
                Street Name => ${this.streetName},
                Area => ${this.area},
                City => ${this.city},
                District => ${this.district}.`
        );
    }

    displaySchoolDetails() {
        console.log(
            `::::::: SCHOOL DETAILS :::::::
    
            School Name => ${this.schoolName},
            City => ${this.placeOfSchool},
            10th MARK => ${this.sslcMark},
            10th year of Completion => ${this.sslcYearOfCompletion},
            12th MARK: ${this.hscMark},
            12th year of Completion: ${this.hscYearOfCompletion}.
            `
        );
    }

    displayCollegeDetails() {
        console.log(
            `:::::: COLLEGE DETAILS ::::::
            
            College Name => ${this.collegeName},
            City => ${this.placeOfCollege},
            Batch => ${this.batch},
            Department => ${this.department},
            CGPA or Grade => ${this.cgpa},
            University => ${this.university}.
            `
        );
    }

    displayWorkDetails() {
        console.log(
            `:::::: WORK DETAILS ::::::
            
            Company Name => ${this.companyName},
            Job => ${this.job},
            Working Experience => ${this.workExperience}.
            `
        );
    }
}

const sathishDetails = new Sathish();
sathishDetails.displayWorkDetails();
sathishDetails.displayPersonalInfo()
sathishDetails.displayCollegeDetails()
sathishDetails.displaySchoolDetails()

