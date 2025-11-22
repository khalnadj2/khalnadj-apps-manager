const fs = require('fs');

const newIcons = {
    "1": "https://play-lh.googleusercontent.com/D4s2iHCS0_LmThWnTRJeUgJZ-Bk4VgQN19hvbJgBZJXbnvFl_vtAMVEmUARK91ffGxFR",
    "2": "https://play-lh.googleusercontent.com/oLNKmUdnducvKQT1LGwVwgjYo6T3l_4pMcnH--Mnme0uU4k0yCjoCl9YiMNvq6UcI7g",
    "3": "https://play-lh.googleusercontent.com/ZvievxP9TWdT9eAY_WunER2rgiFW2qhzejKCK3z-QYSCQSplOjS2QYPL7fvRuc1LMAk",
    "4": "https://play-lh.googleusercontent.com/2FW0fce0M9L3wUV26XjsqQB1GpgPLWx3zRQ1LspBWVyJx_M-bkwvGpqv6QSiu4lcY9M",
    "5": "https://play-lh.googleusercontent.com/W2aZdajfGN5__s-GywrqOCgGfAFTlc3yw2MmqUpwfp30aurtL-QRCb5N_i20R_7TYw",
    "6": "https://play-lh.googleusercontent.com/ejFJUa9EOTWs9pTEsEXjryOA5MbTYGFql1K9YT7CQsr2OuDRon2MbD5guhaw5v0JuUZr",
    "7": "https://play-lh.googleusercontent.com/ZvievxP9TWdT9eAY_WunER2rgiFW2qhzejKCK3z-QYSCQSplOjS2QYPL7fvRuc1LMAk",
    "8": "https://play-lh.googleusercontent.com/oLNKmUdnducvKQT1LGwVwgjYo6T3l_4pMcnH--Mnme0uU4k0yCjoCl9YiMNvq6UcI7g",
    "9": "https://play-lh.googleusercontent.com/sNJaaP2JtR9Pex6fRyGNc6PQ1zUDQGIxswQYZNilakTpPsrPHPnN6xuTMW8zA1vKY6A",
    "10": "https://play-lh.googleusercontent.com/oLNKmUdnducvKQT1LGwVwgjYo6T3l_4pMcnH--Mnme0uU4k0yCjoCl9YiMNvq6UcI7g",
    "11": "https://play-lh.googleusercontent.com/D4Zb-okgGLrS4g6mR_P_Y0woufR_gpMhEIg3n6ILnLBSxCgUeT34jf-XiT2dhPIcHk8",
    "12": "https://play-lh.googleusercontent.com/VwNh7sAIVcfxNbJdoZzcJhRonS1TxVoERtIxXbczFaD75CL-ulNWUJnv8YnEF2JebAg",
    "13": "https://play-lh.googleusercontent.com/W2aZdajfGN5__s-GywrqOCgGfAFTlc3yw2MmqUpwfp30aurtL-QRCb5N_i20R_7TYw",
    "14": "https://play-lh.googleusercontent.com/I6iN8IMQZZ1vkglHfx0PBzw51HflkdTXbqxKqQcDttzMm_2lYo_NrB9sJQJrDHSmbok",
    "15": "https://play-lh.googleusercontent.com/sNJaaP2JtR9Pex6fRyGNc6PQ1zUDQGIxswQYZNilakTpPsrPHPnN6xuTMW8zA1vKY6A",
    "16": "https://play-lh.googleusercontent.com/ejFJUa9EOTWs9pTEsEXjryOA5MbTYGFql1K9YT7CQsr2OuDRon2MbD5guhaw5v0JuUZr",
    "17": "https://play-lh.googleusercontent.com/6GG-IV58Z_u6Sx9ZMVPEvgbo7gm50gCx1vAe6TLNBUU8P0OnmVvxDdbhnjlbeGxkQJ0",
    "18": "https://play-lh.googleusercontent.com/2FW0fce0M9L3wUV26XjsqQB1GpgPLWx3zRQ1LspBWVyJx_M-bkwvGpqv6QSiu4lcY9M",
    "19": "https://play-lh.googleusercontent.com/I69VoJdDQodY-cvv_kWhEalXlfSeO-uVE8rmf6_t2EKkC2riU6VwDM1J7O6ed0NRX1o"
};

// Read the current file
const filePath = './lib/useApps.js';
let content = fs.readFileSync(filePath, 'utf8');

// Update each icon URL
Object.keys(newIcons).forEach(id => {
    const iconUrl = newIcons[id];
    // Find and replace imageUrl for this ID
    const regex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"imageUrl":\\s*)"[^"]*"`, 'g');
    content = content.replace(regex, `$1"${iconUrl}"`);
});

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Icons updated successfully!');
console.log('Updated', Object.keys(newIcons).length, 'app icons');
