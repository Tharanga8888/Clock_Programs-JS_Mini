let is24Hour = false;
let darkTheme = true;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let meridian = "";

    if (!is24Hour) {
        meridian = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeStr = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${!is24Hour ? meridian : ""}`.trim();

    document.getElementById("clock").textContent = timeStr;

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);
}

document.getElementById("toggle-format").addEventListener("click", () => {
    is24Hour = !is24Hour;
    document.getElementById("toggle-format").textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
    updateClock();
});

document.getElementById("toggle-theme").addEventListener("click", () => {
    darkTheme = !darkTheme;
    document.body.className = darkTheme ? "dark-theme" : "light-theme";
});

document.body.classList.add("dark-theme");
updateClock();
setInterval(updateClock, 1000);
