document.addEventListener('DOMContentLoaded', generateCalendar);

function generateCalendar() {
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const headerRow = document.createElement('tr');
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let day of daysOfWeek) {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    }
    calendar.appendChild(headerRow);

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');

            if (i === 0 && j < firstDay) {
                cell.textContent = '';
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.textContent = date;
                date++;
            }

            row.appendChild(cell);
        }

        calendar.appendChild(row);

        if (date > daysInMonth) {
            break;
        }
    }
}

function changeMonth(offset) {
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    month += offset;

    if (month < 0) {
        month = 11;
        year--;
    } else if (month > 11) {
        month = 0;
        year++;
    }

    document.getElementById('month').value = month;
    document.getElementById('year').value = year;

    generateCalendar();
}
