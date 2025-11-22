import gplay from 'google-play-scraper';

const packageNames = [
    'com.khalnadj.khaledhabbachi.myprayerPro',
    'com.khalnadj.khaledhabbachi.quranhafs',
    'com.khalnadj.khaledhabbachi.quranwarshalg',
    'com.khalnadj.khaledhabbachi.qurandouri',
    'com.khalnadj.khaledhabbachi.gpsstatus',
    'com.khalnadj.khaledhabbachi.quranfrench',
    'com.khalnadj.khaledhabbachi.quranwarsh',
    'com.khalnadj.khaledhabbachi.quranhafsstandard1',
    'com.khalnadj.khaledhabbachi.myqiblah',
    'com.khalnadj.khaledhabbachi.quranhafswasat',
    'com.khalnadj.khaledhabbachi.quranqaloun',
    'com.khalnadj.khaledhabbachi.quranshubah',
    'com.khalnadj.khaledhabbachi.gpsstatuspro',
    'com.khalnadj.khaledhabbachi.myprayer',
    'com.khalnadj.khaledhabbachi.qibla',
    'com.khalnadj.khaledhabbachi.quranenglish',
    'com.khalnadj.khaledhabbachi.qurannastaleeq',
    'com.khalnadj.khaledhabbachi.compass',
    'com.khalnadj.khaledhabbachi.quranwarshdz'
];

async function fetchVersions() {
    const results = [];

    for (const packageName of packageNames) {
        try {
            console.log(`Fetching ${packageName}...`);
            const app = await gplay.app({ appId: packageName });
            results.push({
                packageName: packageName,
                version: app.version || '1.0.0',
                title: app.title,
                icon: app.icon
            });
            // Add delay to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(`Error fetching ${packageName}:`, error.message);
            results.push({
                packageName: packageName,
                version: '1.0.0',
                error: error.message
            });
        }
    }

    console.log(JSON.stringify(results, null, 2));
}

fetchVersions();
