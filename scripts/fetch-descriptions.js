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

async function fetchDescription(packageName) {
    try {
        const url = `https://play.google.com/store/apps/details?id=${packageName}&hl=en`;
        console.log(`Fetching ${packageName}...`);

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });

        const $ = cheerio.load(response.data);

        // Try to find description in various possible locations
        let description = '';

        // Method 1: Look for data-g-id attribute
        $('div[data-g-id="description"]').each((i, elem) => {
            const text = $(elem).text().trim();
            if (text && text.length > description.length) {
                description = text;
            }
        });

        // Method 2: Look for specific div structure
        if (!description) {
            $('div[jsname]').each((i, elem) => {
                const text = $(elem).text().trim();
                if (text.length > 100 && text.length > description.length) {
                    description = text;
                }
            });
        }

        // Clean up description
        description = description
            .replace(/\s+/g, ' ')
            .replace(/See more/gi, '')
            .trim();

        return description || 'No description available.';
    } catch (error) {
        console.error(`Error fetching ${packageName}:`, error.message);
        return 'No description available.';
    }
}

async function fetchAllDescriptions() {
    const results = [];

    for (const app of apps) {
        const description = await fetchDescription(app.packageName);
        results.push({
            id: app.id,
            packageName: app.packageName,
            name: app.name,
            description: description.substring(0, 500) // Limit to 500 chars
        });

        // Delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log('\n\n=== RESULTS ===\n');
    console.log(JSON.stringify(results, null, 2));
}

fetchAllDescriptions();
