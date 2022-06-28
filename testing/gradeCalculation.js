const averageExams = (valueExam) => {
    const numberValidation = valueExam.every(exam => typeof exam === 'number')

    if(!numberValidation) throw new Error("harus nomor")

    const sumValues = valueExam.reduce((accumulator, currentValue) => {
        accumulator + currentValue, 0
    })
    const result = sumValues / valueExam.length
}

const isStudentPassExam = (valuesExam, name) => {
    const minValues = 75;
    const average = averageExams(valuesExam);
    
    if (average > minValues) {
        console.log(`${name} pass the exams`);
        return true;
    } else {
        console.log(`${name} fail the exams`);
        return false;
    }
};
 
module.exports = { averageExams, isStudentPassExam };