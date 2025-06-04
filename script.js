const textContainer = document.getElementById('text-container');
const phrases = ["Haw Loang",'Ehe','Mifel nu','One nge i duh','Two nge','Khawi nge i duh zawk zawk', "Waaaa", "Kha i mit atangin tui alo chhuak ania", "83", "Lut ila", "Hman em", "Innei tawh mai ila", "A pawilo mai"];
const numberOfTexts = 20; // Number of texts to display

// Generate text elements
for (let i = 0; i < numberOfTexts; i++) {
    const textElement = document.createElement('span');
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    textElement.textContent = randomPhrase;

    // Set random initial position
    const startX = Math.random() * 100; // Starting X position (0-100vw)
    const startY = Math.random() * 100; // Starting Y position (0-100vh)
    textElement.style.left = `${startX}vw`;
    textElement.style.top = `${startY}vh`;

    // Generate random movement direction and animation duration
    const randomAngle = Math.random() * 360; // Angle in degrees
    const randomDuration = 5 + Math.random() * 10; // Duration between 5 and 15 seconds
    const randomScale = 0.5 + Math.random(); // Scale between 0.5x and 1.5x

    textElement.style.animationName = `fly-${i}`;
    textElement.style.animationDuration = `${randomDuration}s`;
    textElement.style.transform = `scale(${randomScale})`;

    // Define keyframes dynamically for random "flying" effect
    const styleSheet = document.styleSheets[0];
    const keyframes = `
        @keyframes fly-${i} {
            from {
                transform: translate(0, 0) scale(${randomScale}) rotate(0deg);
                opacity: 1;
            }
            to {
                transform: translate(${100 * Math.cos(randomAngle)}vw, ${100 * Math.sin(randomAngle)}vh) scale(${randomScale}) rotate(${Math.random() * 360}deg);
                opacity: 0;
            }
        }
    `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    textContainer.appendChild(textElement);
}


function dayDifference() {
    const startDate = new Date("2024-09-01");
    const now = new Date();

    const diffMs = now - startDate;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());

    document.getElementById('hours').innerHTML = `${diffHours} Hours`;
    document.getElementById('days').innerHTML = `${diffDays} Days`;
    document.getElementById('weeks').innerHTML = `${diffWeeks} Weeks`;
    document.getElementById('months').innerHTML = `${diffMonths} Months`;
  }

  window.onload = dayDifference;
