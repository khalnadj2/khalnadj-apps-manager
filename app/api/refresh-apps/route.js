import { NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function POST(request) {
    try {
        const { apps } = await request.json();

        if (!apps || !Array.isArray(apps)) {
            return NextResponse.json({ error: 'Invalid apps data' }, { status: 400 });
        }

        const updatedApps = [];

        for (const app of apps) {
            try {
                console.log(`Fetching data for ${app.packageName}...`);
                const url = `https://play.google.com/store/apps/details?id=${app.packageName}&hl=en`;

                const response = await axios.get(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                    }
                });

                const $ = cheerio.load(response.data);

                // Fetch Icon
                let newIconUrl = app.imageUrl;
                const iconSrc = $('img[src*="googleusercontent"]').first().attr('src');
                if (iconSrc) {
                    newIconUrl = iconSrc.startsWith('//') ? `https:${iconSrc}` : iconSrc;
                    // Ensure high resolution
                    if (newIconUrl.includes('=w')) {
                        newIconUrl = newIconUrl.split('=w')[0] + '=w240-h480-rw';
                    }
                }

                // Fetch Description
                let newDescription = app.description;
                let descriptionText = '';

                // Method 1: Look for data-g-id attribute
                $('div[data-g-id="description"]').each((i, elem) => {
                    const text = $(elem).text().trim();
                    if (text && text.length > descriptionText.length) {
                        descriptionText = text;
                    }
                });

                // Method 2: Look for specific div structure if Method 1 fails
                if (!descriptionText) {
                    $('div[jsname]').each((i, elem) => {
                        const text = $(elem).text().trim();
                        if (text.length > 100 && text.length > descriptionText.length) {
                            descriptionText = text;
                        }
                    });
                }

                if (descriptionText) {
                    newDescription = descriptionText
                        .replace(/\s+/g, ' ')
                        .replace(/See more/gi, '')
                        .trim();
                }

                updatedApps.push({
                    ...app,
                    imageUrl: newIconUrl,
                    description: newDescription
                });

            } catch (error) {
                console.error(`Failed to fetch ${app.packageName}: ${error.message}`);
                // Keep original app data if fetch fails
                updatedApps.push(app);
            }
        }

        return NextResponse.json({ apps: updatedApps });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
