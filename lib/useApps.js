import { useState, useEffect } from 'react';

const INITIAL_APPS = [
    {
        "id": "1",
        "name": "My Prayer Pro",
        "packageName": "com.khalnadj.khaledhabbachi.myprayerPro",
        "version": "1.0.0",
        "description": "My Prayer app indicates you the Prayer timing and the Qibla direction wherever you are! We put in your hand this application which allow you to know: Prayer time and Qibla direction in three ways: by compass, by sun or moon position, and by map.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.myprayerPro",
        "imageUrl": "https://play-lh.googleusercontent.com/D4s2iHCS0_LmThWnTRJeUgJZ-Bk4VgQN19hvbJgBZJXbnvFl_vtAMVEmUARK91ffGxFR",
        "githubUrl": "https://github.com/khalnadj2/khalnadj-apps-manager"
    },
    {
        "id": "2",
        "name": "القرآن الكريم برواية حفص",
        "packageName": "com.khalnadj.khaledhabbachi.quranhafs",
        "version": "1.0.0",
        "description": "Quran with a novel Hafs from Asim Kamel without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters, newspapers. Mark and reference. Auto-save page. Control lighting for eye comfort.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranhafs",
        "imageUrl": "https://play-lh.googleusercontent.com/oLNKmUdnducvKQT1LGwVwgjYo6T3l_4pMcnH--Mnme0uU4k0yCjoCl9YiMNvq6UcI7g"
    },
    {
        "id": "3",
        "name": "مصحف ورش الطبعة الجزائرية 1984",
        "packageName": "com.khalnadj.khaledhabbachi.quranwarshalg",
        "version": "1.0.0",
        "description": "Algerian Warsh Quran - The famous Algerian edition 1984. The Algerian calligrapher Dr. Mohammed bin Saeed Al Sharifi. Perfectly identical to the paper copy. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranwarshalg",
        "imageUrl": "https://play-lh.googleusercontent.com/ZvievxP9TWdT9eAY_WunER2rgiFW2qhzejKCK3z-QYSCQSplOjS2QYPL7fvRuc1LMAk"
    },
    {
        "id": "4",
        "name": "القرآن الكريم برواية الدوري",
        "packageName": "com.khalnadj.khaledhabbachi.qurandouri",
        "version": "1.0.0",
        "description": "The Holy Quran by al-Douri from Abu Amr al-Basri completely free of charge. Completely identical to the paper Koran. Features: Fence index, parts and quarters index, newspaper index. Mark and reference. Auto-save page. Control lighting for eye comfort.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.qurandouri",
        "imageUrl": "https://play-lh.googleusercontent.com/FzIwGGbR0gqLTmSKXbr8heWb-9Hpg2hOtijw9eB7UV_QBGndLhiIUmEIwMizRnMCPA=w240-h480-rw"
    },
    {
        "id": "5",
        "name": "GPS status",
        "packageName": "com.khalnadj.khaledhabbachi.gpsstatus",
        "version": "1.0.0",
        "description": "GPS Status - A complete set of tools: Know satellite locations in space, signal strength with graphic columns, your coordinates, speed, altitude, and more GPS data. Compass with magnetic and true north. Power of magnetic field detection.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.gpsstatus",
        "imageUrl": "https://play-lh.googleusercontent.com/W2aZdajfGN5__s-GywrqOCgGfAFTlc3yw2MmqUpwfp30aurtL-QRCb5N_i20R_7TYw"
    },
    {
        "id": "6",
        "name": "Le Noble Coran",
        "packageName": "com.khalnadj.khaledhabbachi.quranfrench",
        "version": "1.0.0",
        "description": "Le Noble Coran - Translation of the meanings of the noble Quran in the French language. Complete without internet connection, free of charge.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranfrench",
        "imageUrl": "https://play-lh.googleusercontent.com/ejFJUa9EOTWs9pTEsEXjryOA5MbTYGFql1K9YT7CQsr2OuDRon2MbD5guhaw5v0JuUZr"
    },
    {
        "id": "7",
        "name": "القرآن الكريم برواية ورش",
        "packageName": "com.khalnadj.khaledhabbachi.quranwarsh",
        "version": "1.0.0",
        "description": "The Holy Quran with Warsh narration from Nafi. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranwarsh",
        "imageUrl": "https://play-lh.googleusercontent.com/ZvievxP9TWdT9eAY_WunER2rgiFW2qhzejKCK3z-QYSCQSplOjS2QYPL7fvRuc1LMAk"
    },
    {
        "id": "8",
        "name": "القرآن الكريم رواية حفص العادي",
        "packageName": "com.khalnadj.khaledhabbachi.quranhafsstandard1",
        "version": "1.0.0",
        "description": "The Holy Quran with Hafs narration - Standard edition. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranhafsstandard1",
        "imageUrl": "https://play-lh.googleusercontent.com/oLNKmUdnducvKQT1LGwVwgjYo6T3l_4pMcnH--Mnme0uU4k0yCjoCl9YiMNvq6UcI7g"
    },
    {
        "id": "9",
        "name": "Qibla direction & prayer times",
        "packageName": "com.khalnadj.khaledhabbachi.myqiblah",
        "version": "1.0.0",
        "description": "Qibla direction & prayer times - Know prayer times and Qibla direction wherever you are! Three ways to find Qibla: by compass, by sun/moon position, and by map showing Kaaba location.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.myqiblah",
        "imageUrl": "https://play-lh.googleusercontent.com/sNJaaP2JtR9Pex6fRyGNc6PQ1zUDQGIxswQYZNilakTpPsrPHPnN6xuTMW8zA1vKY6A"
    },
    {
        "id": "10",
        "name": "القرآن الكريم برواية حفص الوسط",
        "packageName": "com.khalnadj.khaledhabbachi.quranhafswasat",
        "version": "1.0.0",
        "description": "The Holy Quran with Hafs Wasat narration. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranhafswasat",
        "imageUrl": "https://play-lh.googleusercontent.com/oLNKmUdnducvKQT1LGwVwgjYo6T3l_4pMcnH--Mnme0uU4k0yCjoCl9YiMNvq6UcI7g"
    },
    {
        "id": "11",
        "name": "القرآن الكريم برواية قالون",
        "packageName": "com.khalnadj.khaledhabbachi.quranqaloun",
        "version": "1.0.0",
        "description": "The Holy Quran with Qaloun narration. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranqaloun",
        "imageUrl": "https://play-lh.googleusercontent.com/D4Zb-okgGLrS4g6mR_P_Y0woufR_gpMhEIg3n6ILnLBSxCgUeT34jf-XiT2dhPIcHk8"
    },
    {
        "id": "12",
        "name": "القرآن الكريم برواية شعبة",
        "packageName": "com.khalnadj.khaledhabbachi.quranshubah",
        "version": "1.0.0",
        "description": "The Holy Quran with Shubah narration. Complete without internet connection and free of charge. Exactly identical to the paper. Features: Index of suras, parts, quarters. Mark and reference. Auto-save. Control lighting.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranshubah",
        "imageUrl": "https://play-lh.googleusercontent.com/VwNh7sAIVcfxNbJdoZzcJhRonS1TxVoERtIxXbczFaD75CL-ulNWUJnv8YnEF2JebAg"
    },
    {
        "id": "13",
        "name": "Gps Status Pro",
        "packageName": "com.khalnadj.khaledhabbachi.gpsstatuspro",
        "version": "1.0.0",
        "description": "GPS Status Pro - A complete set of GPS tools: satellite locations in space, signal strength graphics, coordinates, speed, altitude, and more. Compass with magnetic and true north. Magnetic field power detection.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.gpsstatuspro",
        "imageUrl": "https://play-lh.googleusercontent.com/W2aZdajfGN5__s-GywrqOCgGfAFTlc3yw2MmqUpwfp30aurtL-QRCb5N_i20R_7TYw"
    },
    {
        "id": "14",
        "name": "My Prayer",
        "packageName": "com.khalnadj.khaledhabbachi.myprayer",
        "version": "1.0.0",
        "description": "My Prayer app indicates you the Prayer timing and the Qibla direction wherever you are!",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.myprayer",
        "imageUrl": "https://play-lh.googleusercontent.com/I6iN8IMQZZ1vkglHfx0PBzw51HflkdTXbqxKqQcDttzMm_2lYo_NrB9sJQJrDHSmbok"
    },
    {
        "id": "15",
        "name": "Qibla direction & prayer times",
        "packageName": "com.khalnadj.khaledhabbachi.qibla",
        "version": "1.0.0",
        "description": "Qibla direction & prayer times - Find Qibla in three ways: by compass with high accuracy, by sun or moon position, and by map showing Kaaba and your location. Prayer times included.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.qibla",
        "imageUrl": "https://play-lh.googleusercontent.com/sNJaaP2JtR9Pex6fRyGNc6PQ1zUDQGIxswQYZNilakTpPsrPHPnN6xuTMW8zA1vKY6A"
    },
    {
        "id": "16",
        "name": "The Noble Quran",
        "packageName": "com.khalnadj.khaledhabbachi.quranenglish",
        "version": "1.0.0",
        "description": "Translation of the meanings of the noble Quran in the English language.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranenglish",
        "imageUrl": "https://play-lh.googleusercontent.com/ejFJUa9EOTWs9pTEsEXjryOA5MbTYGFql1K9YT7CQsr2OuDRon2MbD5guhaw5v0JuUZr"
    },
    {
        "id": "17",
        "name": "القرآن الكريم بخط النسخ تعليق",
        "packageName": "com.khalnadj.khaledhabbachi.qurannastaleeq",
        "version": "1.0.0",
        "description": "Al-Madina Quran in Naskh script (Nasta'liq), complete without internet, free and ad-free. Completely identical to paper Quran. Naskh script appeared in 8th-9th centuries AH, characterized by flexibility and sloping style.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.qurannastaleeq",
        "imageUrl": "https://play-lh.googleusercontent.com/6GG-IV58Z_u6Sx9ZMVPEvgbo7gm50gCx1vAe6TLNBUU8P0OnmVvxDdbhnjlbeGxkQJ0"
    },
    {
        "id": "18",
        "name": "Compass",
        "packageName": "com.khalnadj.khaledhabbachi.compass",
        "version": "1.0.0",
        "description": "Compass - Know all directions according to magnetic North and true north. GPS compass via GPS system. Magnetic field power detection. Coordinates by GPS. Multiple compass modes for accurate navigation.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.compass",
        "imageUrl": "https://play-lh.googleusercontent.com/2FW0fce0M9L3wUV26XjsqQB1GpgPLWx3zRQ1LspBWVyJx_M-bkwvGpqv6QSiu4lcY9M"
    },
    {
        "id": "19",
        "name": "مصحف الجزائربرواية ورش",
        "packageName": "com.khalnadj.khaledhabbachi.quranwarshdz",
        "version": "1.0.0",
        "description": "The Mushaf of Algeria with Warsh narration by Nafeh on the Blue Road. Complete without internet, free and ad-free. Second Quran printed in 1403 AH, 13 lines, 707 pages. Calligrapher: Muhammad Saeed Al-Sharifi. Perfectly identical to paper copy.",
        "downloadUrl": "https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranwarshdz",
        "imageUrl": "https://play-lh.googleusercontent.com/I69VoJdDQodY-cvv_kWhEalXlfSeO-uVE8rmf6_t2EKkC2riU6VwDM1J7O6ed0NRX1o"
    }
];

export function useApps() {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem('apps');

        if (stored) {
            const parsedApps = JSON.parse(stored);
            // Check if the first app has an imageUrl. If not, it's old data.
            // Also check if it's the demo data.
            const hasImages = parsedApps.length > 0 && parsedApps[0].imageUrl;

            if (!hasImages || (parsedApps.length === 2 && parsedApps[0].name === 'Demo App')) {
                setApps(INITIAL_APPS);
                localStorage.setItem('apps', JSON.stringify(INITIAL_APPS));
            } else {
                setApps(parsedApps);
            }
        } else {
            setApps(INITIAL_APPS);
            localStorage.setItem('apps', JSON.stringify(INITIAL_APPS));
        }
        setLoading(false);
    }, []);

    const addApp = (app) => {
        const newApp = { ...app, id: Date.now().toString() };
        const updated = [...apps, newApp];
        setApps(updated);
        localStorage.setItem('apps', JSON.stringify(updated));
    };

    const updateApp = (id, updatedApp) => {
        const updated = apps.map(app => app.id === id ? { ...app, ...updatedApp } : app);
        setApps(updated);
        localStorage.setItem('apps', JSON.stringify(updated));
    };

    const deleteApp = (id) => {
        const updated = apps.filter(app => app.id !== id);
        setApps(updated);
        localStorage.setItem('apps', JSON.stringify(updated));
    };

    const getApp = (id) => apps.find(app => app.id === id);

    const refreshApps = (newApps) => {
        setApps(newApps);
        localStorage.setItem('apps', JSON.stringify(newApps));
    };

    return { apps, loading, addApp, updateApp, deleteApp, getApp, refreshApps };
}
