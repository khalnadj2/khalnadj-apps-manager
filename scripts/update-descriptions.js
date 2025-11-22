const fs = require('fs');

const newDescriptions = {
    "1": "My Prayer app indicates you the Prayer timing and the Qibla direction wherever you are! We put in your hand this application which allow you to know: Prayer time and Qibla direction in three ways: by compass, by sun or moon position, and by map.",
    "2": "Quran with a novel Hafs from Asim Kamel without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters, newspapers. Mark and reference. Auto-save page. Control lighting for eye comfort.",
    "3": "Algerian Warsh Quran - The famous Algerian edition 1984. The Algerian calligrapher Dr. Mohammed bin Saeed Al Sharifi. Perfectly identical to the paper copy. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
    "4": "The Holy Quran by al-Douri from Abu Amr al-Basri completely free of charge. Completely identical to the paper Koran. Features: Fence index, parts and quarters index, newspaper index. Mark and reference. Auto-save page. Control lighting for eye comfort.",
    "5": "GPS Status - A complete set of tools: Know satellite locations in space, signal strength with graphic columns, your coordinates, speed, altitude, and more GPS data. Compass with magnetic and true north. Power of magnetic field detection.",
    "6": "Le Noble Coran - Translation of the meanings of the noble Quran in the French language. Complete without internet connection, free of charge.",
    "7": "The Holy Quran with Warsh narration from Nafi. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
    "8": "The Holy Quran with Hafs narration - Standard edition. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
    "9": "Qibla direction & prayer times - Know prayer times and Qibla direction wherever you are! Three ways to find Qibla: by compass, by sun/moon position, and by map showing Kaaba location.",
    "10": "The Holy Quran with Hafs Wasat narration. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
    "11": "The Holy Quran with Qaloun narration. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
    "12": "The Holy Quran with Shubah narration. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
    "13": "GPS Status Pro - A complete set of GPS tools: satellite locations in space, signal strength graphics, coordinates, speed, altitude, and more. Compass with magnetic and true north. Magnetic field power detection.",
    "14": "My Prayer app indicates you the Prayer timing and the Qibla direction wherever you are!",
    "15": "Qibla direction & prayer times - Find Qibla in three ways: by compass with high accuracy, by sun or moon position, and by map showing Kaaba and your location. Prayer times included.",
    "16": "Translation of the meanings of the noble Quran in the English language.",
    "17": "Al-Madina Quran in Naskh script (Nasta'liq), complete without internet, free and ad-free. Completely identical to paper Quran. Naskh script appeared in 8th-9th centuries AH, characterized by flexibility and sloping style.",
    "18": "Compass - Know all directions according to magnetic North and true north. GPS compass via GPS system. Magnetic field power detection. Coordinates by GPS. Multiple compass modes for accurate navigation.",
    "19": "The Mushaf of Algeria with Warsh narration by Nafeh on the Blue Road. Complete without internet, free and ad-free. Second Quran printed in 1403 AH, 13 lines, 707 pages. Calligrapher: Muhammad Saeed Al-Sharifi. Perfectly identical to paper copy."
};

// Read the current file
const filePath = './lib/useApps.js';
let content = fs.readFileSync(filePath, 'utf8');

// Update each description
Object.keys(newDescriptions).forEach(id => {
    const desc = newDescriptions[id];
    // Find and replace description for this ID
    const regex = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"description":\\s*)"[^"]*"`, 'g');
    content = content.replace(regex, `$1"${desc}"`);
});

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Descriptions updated successfully!');
