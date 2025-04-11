document.getElementById("resultForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const s1 = parseInt(document.getElementById("subject1").value);
    const s2 = parseInt(document.getElementById("subject2").value);
    const s3 = parseInt(document.getElementById("subject3").value);
  
    const total = s1 + s2 + s3;
    const average = (total / 3).toFixed(2);
    let grade = "";
  
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else if (average >= 35) grade = "D";
    else grade = "Fail";
  
    const result = `
      <p>Student: <strong>${name}</strong></p>
      <p>Total Marks: ${total}</p>
      <p>Average: ${average}</p>
      <p>Grade: ${grade}</p>
    `;
  
    document.getElementById("resultDisplay").innerHTML = result;
  });
  