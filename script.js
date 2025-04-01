const toggleModeButton = document.createElement('button');
toggleModeButton.textContent = 'Toggle Light/Dark Mode';
toggleModeButton.style.margin = '20px';
document.body.insertBefore(toggleModeButton, document.body.firstChild);

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting = 'Hello!';

    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    alert(`${greeting} Welcome to my portfolio!`);
}

window.addEventListener('load', displayGreeting);