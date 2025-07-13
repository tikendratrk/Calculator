document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateBmiBtn = document.getElementById('calculateBmiBtn');
    const bmiResult = document.getElementById('bmiResult');

    calculateBmiBtn.addEventListener('click', () => {
        const weight = parseFloat(weightInput.value);
        const heightCm = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            bmiResult.textContent = 'Please enter valid positive numbers for weight and height.';
            return;
        }

        const heightM = heightCm / 100; // Convert cm to meters
        const bmi = weight / (heightM * heightM);

        let bmiCategory = '';
        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obesity';
        }

        // Calculate Ideal Weight Range based on height (for BMI 18.5 to 24.9)
        const minIdealWeight = 18.5 * (heightM * heightM);
        const maxIdealWeight = 24.9 * (heightM * heightM);
        const idealWeightRange = `${minIdealWeight.toFixed(2)} kg - ${maxIdealWeight.toFixed(2)} kg`;

        // Recommended Weight Range (can be same as ideal or a general statement)
        const recommendedWeightRange = `For your height, a healthy weight is between ${minIdealWeight.toFixed(2)} kg and ${maxIdealWeight.toFixed(2)} kg.`;

        // Static Health Advice
        const staticHealthAdvice = "Maintaining a healthy BMI is crucial for overall well-being. It helps reduce the risk of various health issues.";

        // Personalized Health Advice
        let personalizedHealthAdvice = '';
        if (bmi < 18.5) {
            personalizedHealthAdvice = 'You are underweight. Consider consulting a healthcare professional for advice on gaining weight in a healthy way.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            personalizedHealthAdvice = 'You have a normal weight. Keep up the good work with a balanced diet and regular exercise!';
        } else if (bmi >= 25 && bmi < 29.9) {
            personalizedHealthAdvice = 'You are overweight. Aim to lose a little weight through diet and exercise to improve your health.';
        } else {
            personalizedHealthAdvice = 'You have obesity. It is highly recommended to consult a healthcare professional for a personalized weight management plan.';
        }

        window.location.href = `bmi_result.html?bmi=${bmi.toFixed(2)}&category=${encodeURIComponent(bmiCategory)}&healthTip=${encodeURIComponent(personalizedHealthAdvice)}&recommendedWeightRange=${encodeURIComponent(recommendedWeightRange)}&idealWeightRange=${encodeURIComponent(idealWeightRange)}&staticHealthAdvice=${encodeURIComponent(staticHealthAdvice)}&personalizedHealthAdvice=${encodeURIComponent(personalizedHealthAdvice)}`;
    });
});
