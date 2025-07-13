document.addEventListener('DOMContentLoaded', () => {
    const loanAmountInput = document.getElementById('loanAmount');
    const interestRateInput = document.getElementById('interestRate');
    const loanTenureInput = document.getElementById('loanTenure');
    const calculateEmiBtn = document.getElementById('calculateEmiBtn');
    const emiResult = document.getElementById('emiResult');

    calculateEmiBtn.addEventListener('click', () => {
        const loanAmount = parseFloat(loanAmountInput.value);
        const interestRate = parseFloat(interestRateInput.value);
        const loanTenure = parseFloat(loanTenureInput.value);

        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure) || loanAmount <= 0 || interestRate < 0 || loanTenure <= 0) {
            emiResult.textContent = 'Please enter valid positive numbers for all fields.';
            return;
        }

        const monthlyInterestRate = (interestRate / 100) / 12;
        const numberOfPayments = loanTenure * 12;

        if (monthlyInterestRate === 0) {
            const emi = loanAmount / numberOfPayments;
            const totalAmountPayable = emi * numberOfPayments;
            const totalInterestPayable = totalAmountPayable - loanAmount;
            const currentDate = new Date();
            const payoffDate = new Date(currentDate.getFullYear() + loanTenure, currentDate.getMonth(), currentDate.getDate());
            const formattedPayoffDate = payoffDate.toLocaleDateString('en-GB'); // Format as DD/MM/YYYY
            window.location.href = `emi_result.html?emi=${emi.toFixed(2)}&totalPayable=${totalAmountPayable.toFixed(2)}&totalInterest=${totalInterestPayable.toFixed(2)}&payoffDate=${formattedPayoffDate}&loanAmount=${loanAmount.toFixed(2)}`;
        } else {
            const emi = loanAmount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
            const totalAmountPayable = emi * numberOfPayments;
            const totalInterestPayable = totalAmountPayable - loanAmount;
            const currentDate = new Date();
            const payoffDate = new Date(currentDate.getFullYear() + loanTenure, currentDate.getMonth(), currentDate.getDate());
            const formattedPayoffDate = payoffDate.toLocaleDateString('en-GB'); // Format as DD/MM/YYYY
            window.location.href = `emi_result.html?emi=${emi.toFixed(2)}&totalPayable=${totalAmountPayable.toFixed(2)}&totalInterest=${totalInterestPayable.toFixed(2)}&payoffDate=${formattedPayoffDate}&loanAmount=${loanAmount.toFixed(2)}`;
        }
    });
});
