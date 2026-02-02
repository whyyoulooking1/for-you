const config = window.VALENTINE_CONFIG;
let noClickCount = 0;
let currentSlideIndex = 0;
let passwordTries = 3;

window.addEventListener('DOMContentLoaded', () => {
    setupLoveSlider();
    console.log("Website Loaded Successfully!");
});

function setupLoveSlider() {
    const slider = document.getElementById('loveMeter');
    const statusText = document.getElementById('loveStatus');
    const tierText = document.getElementById('sliderTierText');

    if (!slider) return;

    slider.addEventListener('input', () => {
        const val = parseInt(slider.value);
        slider.style.setProperty('--p', val + '%');
        statusText.textContent = `This much! (${val}%)`;

        if (val <= 33) {
            tierText.textContent = "YAYYYY!";
        } else if (val <= 66) {
            tierText.textContent = "REALLLYYY!!???";
        } else {
            tierText.textContent = "SRSLLLLLLYYYYYYYYY!??!?!?!?!??";
        }

        if (val >= 50) {
            const warning = document.getElementById('loveWarning');
            if (warning) warning.textContent = "";
        }
    });
}

function startRosePetals() {
    const petalCount = 15;
    const container = document.body;
    const petals = ['🌸', '🌷', '🌹', '💖'];

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        petal.style.animationDuration = (Math.random() * 3 + 4) + 's, ' + (Math.random() * 2 + 2) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        container.appendChild(petal);
    }
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const correctPassword = "roop"; 
    const triesDisplay = document.getElementById('triesLeft');

    if (input.toLowerCase() === correctPassword) {
        showNextQuestion('Letter');
        startRosePetals();
    } else {
        passwordTries--;
        if (passwordTries > 0) {
            triesDisplay.textContent = passwordTries;
            alert("Wrong password! Try again.");
        } else {
            alert("Out of tries! Moving on...");
            showNextQuestion(3);
        }
    }
}

function showNextQuestion(id) {
    // 50% Love Meter Gatekeeper
    if (id === 'Password') {
        const sliderValue = parseInt(document.getElementById('loveMeter').value);
        if (sliderValue < 50) {
            let warning = document.getElementById('loveWarning');
            if (!warning) {
                warning = document.createElement('p');
                warning.id = 'loveWarning';
                warning.style.color = '#ff4757';
                warning.style.fontWeight = 'bold';
                warning.style.marginTop = '10px';
                document.getElementById('question2').insertBefore(warning, document.getElementById('afterSliderBtn'));
            }
            warning.textContent = "SORRY NOT ACCEPTABLE! 😤";
            return; 
        }
    }

    // Hide everything first to prevent the "bad overlap" you saw
    const allSections = document.querySelectorAll('.question-section');
    allSections.forEach(q => {
        q.classList.add('hidden');
        q.style.display = 'none'; 
    });

    // Show the specific target ID
    const targetId = `question${id}`;
    const nextSection = document.getElementById(targetId);

    if (nextSection) {
        nextSection.classList.remove('hidden');
        nextSection.style.display = 'block'; 
        // Reset scroll to top of card
        window.scrollTo(0, 0);
    }
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    if (currentSlideIndex < slides.length) {
        slides[currentSlideIndex].classList.remove('active');
        currentSlideIndex++;
    }

    if (currentSlideIndex < slides.length) {
        slides[currentSlideIndex].classList.add('active');
    }

    if (currentSlideIndex === slides.length - 1) {
        document.getElementById('nextSlideBtn').classList.add('hidden');
        document.getElementById('finishSlidesBtn').classList.remove('hidden');
    }
}

function handleNoClick(button) {
    const finalYesBtn = document.getElementById('yesBtn3');
    noClickCount++;
    const currentSize = 1 + (noClickCount * 0.15); 
    if (finalYesBtn) {
        finalYesBtn.style.transform = `scale(${currentSize})`;
    }
    button.textContent = config.noPhrases[noClickCount % config.noPhrases.length];
    const x = Math.random() * (window.innerWidth - button.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - button.offsetHeight - 50);
    button.style.position = 'fixed';
    button.style.left = Math.max(10, x) + 'px';
    button.style.top = Math.max(10, y) + 'px';
}

function fireConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const heart = confetti.shapeFromText({ text: '❤️', scalar: 3 });

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        confetti({
            particleCount: 20,
            angle: 60,
            spread: 80,
            origin: { x: 0, y: 0.7 },
            shapes: [heart],
            zIndex: 9999,
            scalar: 3,
            colors: ['#ff4757', '#ff6b6b', '#ffafbd']
        });

        confetti({
            particleCount: 20,
            angle: 120,
            spread: 80,
            origin: { x: 1, y: 0.7 },
            shapes: [heart],
            zIndex: 9999,
            scalar: 3,
            colors: ['#ff4757', '#ff6b6b', '#ffafbd']
        });
    }, 300);
}

function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebrationSection = document.getElementById('celebration');
    celebrationSection.classList.remove('hidden');
    celebrationSection.style.display = 'block';
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    fireConfetti();
}