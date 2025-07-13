document.addEventListener('DOMContentLoaded', () => {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const timeInput = document.getElementById('time');
    const calculateSiBtn = document.getElementById('calculateSiBtn');
    const siResult = document.getElementById('siResult');

    calculateSiBtn.addEventListener('click', () => {
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value);
        const time = parseFloat(timeInput.value);

        if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate < 0 || time <= 0) {
            siResult.textContent = 'Please enter valid positive numbers for all fields.';
            return;
        }

        const simpleInterest = (principal * rate * time) / 100;
        const totalAmount = principal + simpleInterest;

        const totalGrowthPercentage = ((simpleInterest / principal) * 100).toFixed(2);

        const maturityDate = new Date();
        maturityDate.setFullYear(maturityDate.getFullYear() + time);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formattedMaturityDate = maturityDate.toLocaleString('en-IN', options);

        window.location.href = `si_result.html?principal=${principal.toFixed(2)}&rate=${rate.toFixed(2)}&time=${time.toFixed(2)}&si=${simpleInterest.toFixed(2)}&total=${totalAmount.toFixed(2)}&growth=${totalGrowthPercentage}&maturityDate=${encodeURIComponent(formattedMaturityDate)}`;
    });
});
