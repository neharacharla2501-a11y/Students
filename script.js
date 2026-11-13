let students = [];

function registerStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Enter all details");
        return;
    }

    students.push({ name: name, roll: roll });

    alert("Student Registered");

    document.getElementById("list").innerHTML +=
        "<li>" + name + " - " + roll + "</li>";
}