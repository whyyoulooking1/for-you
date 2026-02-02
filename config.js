// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name
    valentineName: "Roop",

    // The title that appears in the browser tab
    pageTitle: "For My Cutest Roop 💝",

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me?", 
            yesBtn: "Yes",            
            noBtn: "No",              
        },
        second: {
            text: "How much do you love me?", 
            startText: "This much!",          
            nextBtn: "Next ❤️"                
        },
        third: {
            text: "Will you be my Valentine, Roop? 🌹", 
            yesBtn: "Yes!",          
            noBtn: "No"               
        }
    },

    // Love meter tiered messages (Matches the script logic)
    loveMessages: {
        normal: "YAYYYYY!",                          // 0-33%
        high: "REALLLYYY!!??? 💝",                    // 34-66%
        extreme: "SRSLLLLLLYYYYYYYYY!??!?!?!?? 🥰💝"  // 67-100%
    },

    // Celebration Page
    celebration: {
        title: "Yay! I'm the luckiest guy alive! 🎉💝",
        message: "CRRRRRAAAAAAZZZZZZZZZZZZZYYYYYYYYYYYYYY",
        emojis: "" 
    },

    // Phrases for the No button teleporting
    noPhrases: [
        "Are you sure?",
        "Really sure??",
        "Think again! 🥺",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you absolutely sure?",
        "This could be a mistake!",
        "Have a heart! ❤️",
        "Don't be so cold!",
        "Change of heart?",
        "Wouldn't you reconsider?",
        "Is that your final answer?",
        "You're breaking my heart ;("
    ]
};

// This ensures the script.js can see the settings
window.VALENTINE_CONFIG = CONFIG;