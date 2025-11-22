const fs = require('fs');
const https = require('https');

const apps = [
    {
        id: '1',
        name: 'My Prayer Pro',
        packageName: 'com.khalnadj.khaledhabbachi.myprayerPro',
        version: '1.0.0',
        description: 'Prayer times and Qibla direction app.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.myprayerPro'
    },
    {
        id: '2',
        name: 'القرآن الكريم برواية حفص',
        packageName: 'com.khalnadj.khaledhabbachi.quranhafs',
        version: '1.0.0',
        description: 'The Holy Quran with Hafs narration.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranhafs'
    },
    {
        id: '3',
        name: 'مصحف ورش الطبعة الجزائرية 1984',
        packageName: 'com.khalnadj.khaledhabbachi.quranwarshalg',
        version: '1.0.0',
        description: 'Mushaf Warsh Algerian Edition 1984.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranwarshalg'
    },
    {
        id: '4',
        name: 'القرآن الكريم برواية الدوري',
        packageName: 'com.khalnadj.khaledhabbachi.qurandouri',
        version: '1.0.0',
        description: 'The Holy Quran with Douri narration.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.qurandouri'
    },
    {
        id: '5',
        name: 'GPS status',
        packageName: 'com.khalnadj.khaledhabbachi.gpsstatus',
        version: '1.0.0',
        description: 'Check your GPS status and data.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.gpsstatus'
    },
    {
        id: '6',
        name: 'Le Noble Coran',
        packageName: 'com.khalnadj.khaledhabbachi.quranfrench',
        version: '1.0.0',
        description: 'The Noble Quran with French translation.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranfrench'
    },
    {
        id: '7',
        name: 'القرآن الكريم برواية ورش',
        packageName: 'com.khalnadj.khaledhabbachi.quranwarsh',
        version: '1.0.0',
        description: 'The Holy Quran with Warsh narration.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranwarsh'
    },
    {
        id: '8',
        name: 'القرآن الكريم رواية حفص العادي',
        packageName: 'com.khalnadj.khaledhabbachi.quranhafsstandard1',
        version: '1.0.0',
        description: 'The Holy Quran with standard Hafs narration.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranhafsstandard1'
    },
    {
        id: '9',
        name: 'Qibla direction & prayer times',
        packageName: 'com.khalnadj.khaledhabbachi.myqiblah',
        version: '1.0.0',
        description: 'Accurate Qibla direction and prayer times.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.myqiblah'
    },
    {
        id: '10',
        name: 'القرآن الكريم برواية حفص الوسط',
        packageName: 'com.khalnadj.khaledhabbachi.quranhafswasat',
        version: '1.0.0',
        description: 'The Holy Quran with Hafs Wasat narration.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranhafswasat'
    },
    {
        id: '11',
        name: 'القرآن الكريم برواية قالون',
        packageName: 'com.khalnadj.khaledhabbachi.quranqaloun',
        version: '1.0.0',
        description: 'The Holy Quran with Qaloun narration.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranqaloun'
    },
    {
        id: '12',
        name: 'القرآن الكريم برواية شعبة',
        packageName: 'com.khalnadj.khaledhabbachi.quranshubah',
        version: '1.0.0',
        description: 'The Holy Quran with Shubah narration.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranshubah'
    },
    {
        id: '13',
        name: 'Gps Status Pro',
        packageName: 'com.khalnadj.khaledhabbachi.gpsstatuspro',
        version: '1.0.0',
        description: 'Pro version of GPS Status.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.gpsstatuspro'
    },
    {
        id: '14',
        name: 'My Prayer',
        packageName: 'com.khalnadj.khaledhabbachi.myprayer',
        version: '1.0.0',
        description: 'Prayer times application.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.myprayer'
    },
    {
        id: '15',
        name: 'Qibla direction & prayer times',
        packageName: 'com.khalnadj.khaledhabbachi.qibla',
        version: '1.0.0',
        description: 'Find Qibla direction easily.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.qibla'
    },
    {
        id: '16',
        name: 'The Noble Quran',
        packageName: 'com.khalnadj.khaledhabbachi.quranenglish',
        version: '1.0.0',
        description: 'The Noble Quran with English translation.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranenglish'
    },
    {
        id: '17',
        name: 'القرآن الكريم بخط النسخ تعليق',
        packageName: 'com.khalnadj.khaledhabbachi.qurannastaleeq',
        version: '1.0.0',
        description: 'The Holy Quran in Nastaleeq script.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.qurannastaleeq'
    },
    {
        id: '18',
        name: 'Compass',
        packageName: 'com.khalnadj.khaledhabbachi.compass',
        version: '1.0.0',
        description: 'Simple and accurate compass.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.compass'
    },
    {
        id: '19',
        name: 'مصحف الجزائربرواية ورش',
        packageName: 'com.khalnadj.khaledhabbachi.quranwarshdz',
        version: '1.0.0',
        description: 'Mushaf Algeria with Warsh narration.',
        downloadUrl: 'https://play.google.com/store/apps/details?id=com.khalnadj.khaledhabbachi.quranwarshdz'
    }
];

const { exec } = require('child_process');

const fetchIcon = (url) => {
    return new Promise((resolve, reject) => {
        const command = `curl -s "${url}" | grep -o 'https://play-lh.googleusercontent.com/[^"]*' | head -n 1`;
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error fetching ${url}: ${error.message}`);
                resolve(null);
                return;
            }
            const iconUrl = stdout.trim();
            if (iconUrl) {
                resolve(iconUrl);
            } else {
                resolve(null);
            }
        });
    });
};

const processApps = async () => {
    const updatedApps = [];
    for (const app of apps) {
        // console.log(`Fetching icon for ${app.name}...`);
        const iconUrl = await fetchIcon(app.downloadUrl);
        updatedApps.push({
            ...app,
            imageUrl: iconUrl || ''
        });
    }
    console.log(JSON.stringify(updatedApps, null, 2));
};

processApps();
