document.addEventListener('DOMContentLoaded', function() {
    const companies = [];
    const students = [];
    const jobs = [
        {
            title: "Software Developer",
            description: "We are looking for a skilled software developer to join our team."
        },
        {
            title: "Data Analyst",
            description: "Seeking a data analyst to help with data interpretation and analysis."
        },
        {
            title: "Project Manager",
            description: "Experienced project manager needed to lead project teams and ensure timely delivery."
        }
    ];

    // Handle company registration
    const companyForm = document.getElementById('companyForm');
    if (companyForm) {
        companyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const company = {
                name: e.target.companyName.value,
                email: e.target.email.value,
                contactNumber: e.target.contactNumber.value,
                address: e.target.address.value
            };
            companies.push(company);
            alert('Company registered successfully!');
            companyForm.reset();
            updateCompanyList();
        });
    }

    // Handle student registration
    const studentForm = document.getElementById('studentForm');
    if (studentForm) {
        studentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const student = {
                name: e.target.studentName.value,
                email: e.target.email.value,
                contactNumber: e.target.contactNumber.value,
                address: e.target.address.value,
                resume: e.target.resume.files[0].name
            };
            students.push(student);
            alert('Student registered successfully!');
            studentForm.reset();
            updateStudentList();
        });
    }

    // Handle job postings
    const jobList = document.querySelector('#job-postings .job-list');
    if (jobList) {
        jobs.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job');

            const jobTitle = document.createElement('h3');
            jobTitle.textContent = job.title;
            jobDiv.appendChild(jobTitle);

            const jobDescription = document.createElement('p');
            jobDescription.textContent = job.description;
            jobDiv.appendChild(jobDescription);

            jobList.appendChild(jobDiv);
        });
    }

    // Admin dashboard functionality
    function updateCompanyList() {
        const companyList = document.querySelector('.company-list');
        companyList.innerHTML = '';
        companies.forEach(company => {
            const companyDiv = document.createElement('div');
            companyDiv.classList.add('company');

            const companyName = document.createElement('h3');
            companyName.textContent = company.name;
            companyDiv.appendChild(companyName);

            const companyEmail = document.createElement('p');
            companyEmail.textContent = `Email: ${company.email}`;
            companyDiv.appendChild(companyEmail);

            const companyContact = document.createElement('p');
            companyContact.textContent = `Contact: ${company.contactNumber}`;
            companyDiv.appendChild(companyContact);

            const companyAddress = document.createElement('p');
            companyAddress.textContent = `Address: ${company.address}`;
            companyDiv.appendChild(companyAddress);

            companyList.appendChild(companyDiv);
        });
    }

    function updateStudentList() {
        const studentList = document.querySelector('.student-list');
        studentList.innerHTML = '';
        students.forEach(student => {
            const studentDiv = document.createElement('div');
            studentDiv.classList.add('student');

            const studentName = document.createElement('h3');
            studentName.textContent = student.name;
            studentDiv.appendChild(studentName);

            const studentEmail = document.createElement('p');
            studentEmail.textContent = `Email: ${student.email}`;
            studentDiv.appendChild(studentEmail);

            const studentContact = document.createElement('p');
            studentContact.textContent = `Contact: ${student.contactNumber}`;
            studentDiv.appendChild(studentContact);

            const studentAddress = document.createElement('p');
            studentAddress.textContent = `Address: ${student.address}`;
            studentDiv.appendChild(studentAddress);

            const studentResume = document.createElement('p');
            studentResume.textContent = `Resume: ${student.resume}`;
            studentDiv.appendChild(studentResume);

            studentList.appendChild(studentDiv);
        });
    }

    // Handle login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            // Simple login logic (for demonstration purposes)
            if (email === 'admin@example.com' && password === 'password') {
                alert('Login successful!');
                window.location.href = 'admin-dashboard.html';
            } else {
                alert('Invalid email or password!');
            }
        });
    }

    // Initialize lists
    updateCompanyList();
    updateStudentList();
});
