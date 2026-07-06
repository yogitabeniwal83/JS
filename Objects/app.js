// const student = {
//     fullName: "Yogita Beniwal",
//     marks: 97.4,
//     printMarks: function () {
//         console.log("marks = ", this.marks);     // student.marks
//     },
// };



const employee = {
    calTax () {
        console.log("tax rate is 10%");
    },
};

const karan = {
    salary: 50000,
};

karan.__proto__ = employee;