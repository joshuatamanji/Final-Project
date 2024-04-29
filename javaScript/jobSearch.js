function searchJobs() {
    var searchTerm = document.getElementById('searchInput').value;
  
    var jobList = document.getElementById('jobList');
    jobList.innerHTML = ''; 
  
    var jobs = [
        "Software Engineer At Amazon",
        "Web Developer At Instagram",
        "Data Scientist At Amazon",
        "UX/UI Designer At Gucci",
        "Product Manager At Costco",
        "Cashier At Walmart",
        "Database Manager At Facebook",
        "Marketing Intern At Tesla"

    ];
  
    var filteredJobs = jobs.filter(function(job) {
        return job.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    filteredJobs.forEach(function(job) {
        var li = document.createElement('li');
        li.textContent = job;
        jobList.appendChild(li);
    });
  }
  

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    alert(name + ", your message was sent successfully.");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

});

function validateEmail(email) {
    var format = /\S+@\S+\.\S+/;
    return format.test(email);
}


function showWelcomeMessage() {
    var username = document.getElementById("InputName").value;
    var password = document.getElementById("InputPassword").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password!");
        return;
    }

    if (username === "Salvador" && password === "password") {
        alert("Welcome, " + username + "!");
        document.getElementById("InputName").value = "";
        document.getElementById("InputPassword").value = "";
    } else {
        alert("Incorrect username or password. Please try again!");
    }
}
