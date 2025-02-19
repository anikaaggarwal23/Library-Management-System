// Sidebar active link highlighting
window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar nav ul li a');
    const currentLocation = location.href;

    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Real-time search for students or books
function setupLiveSearch(inputId, tableId) {
    const searchInput = document.getElementById(inputId);
    const table = document.getElementById(tableId);
    
    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = table.querySelectorAll('tr');

        rows.forEach((row, index) => {
            if (index !== 0) { // skip header row
                const cells = row.querySelectorAll('td');
                const text = Array.from(cells).map(cell => cell.innerText.toLowerCase()).join(' ');
                row.style.display = text.includes(filter) ? '' : 'none';
            }
        });
    });
}

// Book issue confirmation popup
function issueBookConfirmation(bookName) {
    if (confirm(`Are you sure you want to issue "${bookName}"?`)) {
        alert(`"${bookName}" has been issued successfully.`);
    }
}

// Book return confirmation popup
function returnBookConfirmation(bookName) {
    if (confirm(`Are you sure you want to return "${bookName}"?`)) {
        alert(`"${bookName}" has been returned successfully.`);
    }
}

// Form validation for adding students and books
function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, select');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    if (!isValid) {
        alert("Please fill out all fields.");
    }
    return isValid;
}

// Modal popup for adding new student/book
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Sample chart rendering on the dashboard
window.onload = function() {
    const ctx = document.getElementById('pieChart')?.getContext('2d');
    if (ctx) {
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Core Java', 'Spring MVC', 'Introducing Java 8', 'Java: The Legend'],
                datasets: [{
                    data: [5, 3, 4, 2],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                }
            }
        });
    }
}
