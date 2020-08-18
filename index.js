const yaml = require('js-yaml');
const { readFileSync, mkdirSync, writeFileSync } = require('fs');

try {
    const links = yaml.safeLoad(readFileSync('./src/links.yml', 'utf8'));
    const data = yaml.safeLoad(readFileSync('./data.yml', 'utf8'));
    try {
        mkdirSync('./dist/');
    } catch ({ code }) {
        if (code !== 'EEXIST') return;
    }
    writeFileSync('./dist/links.json', JSON.stringify(links));
    writeFileSync('./dist/inner_links.json', JSON.stringify(data));
} catch (e) {
    console.error(e);
}