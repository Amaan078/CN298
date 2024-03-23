
const eventList = document.getElementById('event-list');

async function fetchEvents() {
    try {
        const response = await fetch('/get_events'); // Replace with your server endpoint
        const data = await response.json();
        data.events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = `${event.name} - ${event.start}`;
            eventList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

fetchEvents();
