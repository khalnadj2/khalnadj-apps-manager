const axios = require('axios');
const cheerio = require('cheerio');

const apps = [
    { id: '1', packageName: 'com.khalnadj.khaledhabbachi.myprayerPro', name: 'My Prayer Pro' },
    { id: '2', packageName: 'com.khalnadj.khaledhabbachi.quranhafs', name: 'القرآن الكريم برواية حفص' },
    { id: '3', packageName: 'com.khalnadj.khaledhabbachi.quranwarshalg', name: 'مصحف ورش الطبعة الجزائرية 1984' },
    { id: '4', packageName: 'com.khalnadj.khaledhabbachi.qurandouri', name: 'القرآن الكريم برواية الدوري' },
    { id: '5', packageName: 'com.khalnadj.khaledhabbachi.gpsstatus', name: 'GPS status' },
    { id: '6', packageName: 'com.khalnadj.khaledhabbachi.quranfrench', name: 'Le Noble Coran' },
    { id: '7', packageName: 'com.khalnadj.khaledhabbachi.quranwarsh', name: 'القرآن الكريم برواية ورش' },
    { id: '8', packageName: 'com.khalnadj.khaledhabbachi.quranhafsstandard1', name: 'القرآن الكريم رواية حفص العادي' },
    { id: '9', packageName: 'com.khalnadj.khaledhabbachi.myqiblah', name: 'Qibla direction & prayer times' },
    { id: '10', packageName: 'com.khalnadj.khaledhabbachi.quranhafswasat', name: 'القرآن الكريم برواية حفص الوسط' },
    { id: '11', packageName: 'com.khalnadj.khaledhabbachi.quranqaloun', name: 'القرآن الكريم برواية قالون' },
    { id: '12', packageName: 'com.khalnadj.khaledhabbachi.quranshubah', name: 'القرآن الكريم برواية شعبة' },
    { id: '13', packageName: 'com.khalnadj.khaledhabbachi.gpsstatuspro', name: 'Gps Status Pro' },
    { id: '14', packageName: 'com.khalnadj.khaledhabbachi.myprayer', name: 'My Prayer' },
    { id: '15', packageName: 'com.khalnadj.khaledhabbachi.qibla', name: 'Qibla direction & prayer times' },
    { id: '16', packageName: 'com.khalnadj.khaledhabbachi.quranenglish', name: 'The Noble Quran' },
    { id: '17', packageName: 'com.khalnadj.khaledhabbachi.qurannastaleeq', name: 'القرآن الكريم بخط النسخ تعليق' },
    { id: '18', packageName: 'com.khalnadj.khaledhabbachi.compass', name: 'Compass' },
    { id: '19', packageName: 'com.khalnadj.khaledhabbachi.quranwarshdz', name: 'مصحف الجزائربرواية ورش' }
];

async function fetchVersion(packageName) {
    try {
        const url = `https://play.google.com/store/apps/details?id=${packageName}&hl=en`;
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // Try to find version in the page
        let version = '1.0.0';

        // Method 1: Look for "Current Version" text
        $('div').each((i, elem) => {
            const text = $(elem).text();
            if (text.includes('Current Version')) {
                const parent = $(elem).parent();
                const versionText = parent.text();
                const match = versionText.match(/(\d+\.\d+\.?\d*)/);
                if (match) {
                    version = match[1];
                }
            }
        });

        return version;
    } catch (error) {
        console.error(`Error fetching ${packageName}:`, error.message);
        return '1.0.0';
    }
}

async function fetchAllVersions() {
    const results = [];

    for (const app of apps) {
        console.log(`Fetching version for ${app.name}...`);
        const version = await fetchVersion(app.packageName);
        results.push({
            id: app.id,
            packageName: app.packageName,
            name: app.name,
            version: version
        });
        // Delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1500));
    }

    console.log('\n\nResults:');
    console.log(JSON.stringify(results, null, 2));
}

fetchAllVersions();
