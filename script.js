// Animate the page on load
document.addEventListener('DOMContentLoaded', () => {
    setupFlossButton();
    animateTeeth();
    addInteractivity();
});

function animateTeeth() {
    const teeth = document.querySelectorAll('.tooth');
    
    // Make teeth shake and fall
    setInterval(() => {
        teeth.forEach((tooth, index) => {
            if (Math.random() > 0.7) {
                tooth.style.animation = 'none';
                setTimeout(() => {
                    tooth.style.animation = `toothFall 0.5s ease-in-out ${index * 0.1}s`;
                }, 10);
            }
        });
    }, 3000);
}

function setupFlossButton() {
    const flossBtn = document.getElementById('flossBtn');
    const message = document.getElementById('message');
    const submessage = document.getElementById('submessage');
    const teeth = document.querySelectorAll('.tooth');
    
    let clickCount = 0;
    
    const responses = [
        {
            message: "Too late for that now!",
            submessage: "Those 3 teeth are already gone, my friend"
        },
        {
            message: "I shoulda told you to floss!",
            submessage: "But hey, you shoulda known anyway... right?"
        },
        {
            message: "The teeth are gone, they're not coming back",
            submessage: "But you can still save the rest! Start flossing NOW!"
        },
        {
            message: "I shoulda said something...",
            submessage: "But you also shoulda just flossed on your own!"
        },
        {
            message: "Okay, we both messed up here",
            submessage: "I shoulda told you, you shoulda flossed. Go fix the rest!"
        }
    ];
    
    flossBtn.addEventListener('click', () => {
        clickCount++;
        
        // Animate teeth
        teeth.forEach((tooth, index) => {
            tooth.style.transform = 'rotate(15deg) scale(1.2)';
            setTimeout(() => {
                tooth.style.transform = 'rotate(-15deg) scale(1.2)';
                setTimeout(() => {
                    tooth.style.transform = 'rotate(0deg) scale(1)';
                }, 150);
            }, 150);
        });
        
        // Change messages
        if (clickCount <= responses.length) {
            const response = responses[clickCount - 1];
            message.textContent = response.message;
            submessage.textContent = response.submessage;
        } else {
            message.textContent = "Alright, you've clicked enough";
            submessage.textContent = "Go to the dentist and get those teeth replaced!";
            flossBtn.textContent = "Go to the Dentist (Seriously)";
            flossBtn.classList.add('disabled');
        }
        
        // Add shake effect to button
        flossBtn.style.animation = 'none';
        setTimeout(() => {
            flossBtn.style.animation = 'buttonShake 0.3s ease-in-out';
        }, 10);
    });
}

function addInteractivity() {
    // Add click effects to teeth
    const teeth = document.querySelectorAll('.tooth');
    teeth.forEach((tooth, index) => {
        tooth.addEventListener('click', () => {
            tooth.style.transform = 'rotate(360deg) scale(0.5)';
            tooth.style.opacity = '0.1';
            
            setTimeout(() => {
                tooth.style.transform = 'rotate(0deg) scale(1)';
                tooth.style.opacity = '0.3';
            }, 500);
            
            // Show message
            const messages = [
                "That one's gone forever",
                "Say goodbye to that tooth",
                "Another one bites the dust"
            ];
            
            if (messages[index]) {
                const tempMsg = document.createElement('div');
                tempMsg.textContent = messages[index];
                tempMsg.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(255, 71, 87, 0.9);
                    color: white;
                    padding: 15px 30px;
                    border-radius: 10px;
                    font-size: 1.5em;
                    font-weight: bold;
                    z-index: 1000;
                    pointer-events: none;
                    animation: fadeOut 2s ease-in-out forwards;
                `;
                document.body.appendChild(tempMsg);
                
                setTimeout(() => {
                    document.body.removeChild(tempMsg);
                }, 2000);
            }
        });
        
        // Add hover effect
        tooth.addEventListener('mouseenter', () => {
            tooth.style.transform = 'scale(1.3)';
            tooth.style.filter = 'grayscale(0%)';
        });
        
        tooth.addEventListener('mouseleave', () => {
            tooth.style.transform = 'scale(1)';
            tooth.style.filter = 'grayscale(100%)';
        });
    });
    
    // Add CSS for fade out animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -70%) scale(0.8);
            }
        }
        
        @keyframes buttonShake {
            0%, 100% {
                transform: translateX(0);
            }
            25% {
                transform: translateX(-10px);
            }
            75% {
                transform: translateX(10px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Add random poem line highlights
setInterval(() => {
    const lines = document.querySelectorAll('.poem-line');
    if (lines.length > 0) {
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        randomLine.style.background = 'rgba(255, 165, 2, 0.2)';
        randomLine.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            randomLine.style.background = 'transparent';
            randomLine.style.transform = 'scale(1)';
        }, 1000);
    }
}, 5000);

