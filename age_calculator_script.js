document.addEventListener('DOMContentLoaded', () => {
    const dobInput = document.getElementById('dob');
    const calculateBtn = document.getElementById('calculateBtn');
    const ageResult = document.getElementById('ageResult');
    const yearsSpan = document.getElementById('years');
    const monthsSpan = document.getElementById('months');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');

    calculateBtn.addEventListener('click', () => {
        const dob = new Date(dobInput.value);
        if (isNaN(dob.getTime())) {
            ageResult.textContent = 'Please enter a valid date of birth.';
            yearsSpan.textContent = '';
            monthsSpan.textContent = '';
            daysSpan.textContent = '';
            hoursSpan.textContent = '';
            minutesSpan.textContent = '';
            return;
        }

        const today = new Date();
        const diff = today.getTime() - dob.getTime(); // Difference in milliseconds

        const totalMinutes = Math.floor(diff / (1000 * 60));
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        // Calculate years, months, and remaining days more accurately
        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in previous month
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const remainingHours = totalHours % 24;
        const remainingMinutes = totalMinutes % 60;

        // Redirect to result.html with parameters
        window.location.href = `result.html?years=${years}&months=${months}&days=${days}&hours=${remainingHours}&minutes=${remainingMinutes}`;
    });
});
