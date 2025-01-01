    const overlay = document.getElementById('overlay')
    const popup = document.getElementById('popup')

    function openPopup() {
        popup.style.display = 'block'
        overlay.style.display = 'block'
    }

    function closePopup() {
        popup.style.display = 'none'
        overlay.style.display = 'none'
    }

    // Utility function to convert Celsius to Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32
    }

    // Utility function to convert Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9
    }

    // Function to handle the conversion
    function convertTemperature() {
        const temperatureInput = document.getElementById('temperature')
        const unitSelect = document.getElementById('unit')
        const resultDiv = document.getElementById('result')
        let temperature = parseFloat(temperatureInput.value)

        if (isNaN(temperature)) {
            openPopup()
            return
        }

        let convertedTemperature
        let newUnit

        if (unitSelect.value === 'C') {
            convertedTemperature = celsiusToFahrenheit(temperature)
            newUnit = '&deg;F';
        } else {
            convertedTemperature = fahrenheitToCelsius(temperature)
            newUnit = '&deg;C'
        }

        resultDiv.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${newUnit}`
    }

    // Dark mode toggle function
    function toggleDarkMode() {
        const isDarkMode = document.body.classList.toggle('dark-mode')
        localStorage.setItem('dark-mode', isDarkMode)
    }

    // Apply dark mode on page load if it was previously set
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('dark-mode') === 'true') {
            document.body.classList.add('dark-mode')
        }
    });