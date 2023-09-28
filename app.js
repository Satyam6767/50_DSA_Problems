function handleCheckboxChange(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    const savedValue = localStorage.getItem(checkboxId);

    if (savedValue === "1") {
        checkbox.checked = true;
    }

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            localStorage.setItem(checkboxId, "1");
        } else {
            localStorage.removeItem(checkboxId);
        }
    });
}

for (let i = 1; i <= 50; i++) {
    handleCheckboxChange("checkbox" + i);
}

// ------------------------------------------------------------------

function updatePercentage() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    const percentage = (checkedCheckboxes.length / checkboxes.length) * 100;
    document.getElementById('percentage').textContent = `Percentage completed: ${percentage.toFixed(2)}%`;
    localStorage.setItem('checkboxPercentage', percentage.toFixed(2));
}
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updatePercentage);
});

const storedPercentage = localStorage.getItem('checkboxPercentage');
if (storedPercentage) {
    document.getElementById('percentage').textContent = `Percentage completed: ${storedPercentage}%`;
}



// ------------------------------------------------------------------------

function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const timeElement = document.getElementById('time');
    timeElement.textContent = timeString;
}

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Call updateTime initially to avoid a delay in displaying the time
updateTime();
 
// --------------------------------------------------------------------------