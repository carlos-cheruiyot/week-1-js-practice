// function that prompts the user to input student marks

function getStudentGrade() {
    let marks = parseInt(prompt("Enter the student marks(0-100):"));

    //check input if is a valid number
    if(isNaN(marks) || marks < 0 || marks > 100) {
        alert("please enter a number between 0 and 100.");
        return;
    }

    //determining the grade based on the marks
    let grade;
    if (marks > 80) {
        grade = "A";
    }else if (marks >= 70) {
        grade = "B+";
    }else if (marks >= 60) {
        grade = "B";
    }else if (marks >= 50) {
        grade = "C";
    }else if (marks >= 40) {
        grade = "D";
    }else {
        grade = "E";
    }

    //the output results
    alert(`The grade for ${marks} marks is: ${grade}`);
}

//calling the fnction
getStudentGrade();

