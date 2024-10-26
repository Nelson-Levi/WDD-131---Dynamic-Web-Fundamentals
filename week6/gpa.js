function getGrades(inputSelector) {
    const grades = document.querySelector(inputSelector).value;
    // get grades from the input box
    // split them into an array (String.split(','))
    const gradesArray = grades.split;
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    // return grades
    return cleanGrades
  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    } else if (grade === "D") {
        points = 1;
    }
    return points;
    }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    const gradePoints = grades.map((grade) => lookupGrade(grade))
    // calculates the GPA
    const gpa = gradePoints.reduce((total, number) => total + num)
    // return the GPA
    return gpa.toFixed(2)
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const outputDiv = document.querySelector(selector)
    outputDiv.innerText = gpa
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades("#grades")
    // calculate the gpa from the grades entered
    const gpa = calculateGpa(grades)
    // display the gpa
    outputGpa(gpa, "#output")
  }