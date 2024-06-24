function toggleDropdown(event) {
    event.stopPropagation();

    // Close all open dropdowns
    const dropdowns = document.getElementsByClassName('dropdown');
    for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }

    // Toggle the clicked dropdown
    const dropdown = event.currentTarget.closest('.dropdown');
    dropdown.classList.toggle('show');
}

window.onclick = function(event) {
    // Close all dropdowns if clicked outside
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

    function searchFlights() {
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const depart = document.getElementById('depart').value;
        const fareType = document.getElementById('fare-type').value;
        const travellers = document.getElementById('travellers').value;
        const flightClass = document.getElementById('class').value;

        alert(`Searching flights from ${from} to ${to} on ${depart} for ${travellers} travellers in ${flightClass} class with ${fareType} fare type.`);
    }
    function changeCount(type, increment) {
        const countElement = document.getElementById(`${type}-count`);
        let count = parseInt(countElement.textContent);
        count = Math.max(0, count + increment); // Ensure count doesn't go below 0
        countElement.textContent = count;
    }

    function applyChanges() {
        const adults = document.getElementById('adults-count').textContent;
        const children = document.getElementById('children-count').textContent;
        const infants = document.getElementById('infants-count').textContent;
        alert(`Travellers:\nAdults: ${adults}\nChildren: ${children}\nInfants: ${infants}`);
    }