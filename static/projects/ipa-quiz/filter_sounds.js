const fs = require('fs');
const path = require('path');

// List of available audio files (just the symbols, without .mp3 extension)
const availableSymbols = [
  'a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z',
  'ç', 'ð', 'ø', 'ħ', 'ŋ', 'œ', 'ɑ', 'ɒ', 'ɔ', 'ɛ', 'ɟ', 'ɡ', 'ɣ', 'ɤ', 'ɦ', 'ɨ', 'ɬ', 'ɭ', 'ɮ', 'ɯ', 'ɰ', 'ɱ', 'ɲ', 'ɳ', 'ɴ', 'ɶ', 'ɸ', 'ɹ', 'ɽ', 'ɾ', 'ʀ', 'ʁ', 'ʂ', 'ʃ', 'ʉ', 'ʋ', 'ʌ', 'ʎ', 'ʐ', 'ʒ', 'ʔ', 'ʕ', 'ʙ', 'ʝ', 'ʟ', 'β', 'θ', 'χ', 'ⱱ'
];

// Read the original script.js
const scriptContent = fs.readFileSync('script.js', 'utf8');

// Extract the ipaData object
const ipaDataMatch = scriptContent.match(/const ipaData = \{[\s\S]*?\n\};/);
if (!ipaDataMatch) {
  console.error('Could not find ipaData in script.js');
  process.exit(1);
}

// Parse and filter the data
const ipaDataStr = ipaDataMatch[0];
eval(ipaDataStr.replace('const ', 'var '));

// Filter vowels and consonants to only include those with available audio
const filteredVowels = ipaData.vowels.filter(v => availableSymbols.includes(v.symbol));
const filteredConsonants = ipaData.consonants.filter(c => availableSymbols.includes(c.symbol));

console.log(`Original vowels: ${ipaData.vowels.length}, Filtered: ${filteredVowels.length}`);
console.log(`Original consonants: ${ipaData.consonants.length}, Filtered: ${filteredConsonants.length}`);
console.log(`\nAvailable cardinal vowels (1-16):`);
filteredVowels
  .filter(v => v.features.cardinalNumber !== null)
  .sort((a, b) => a.features.cardinalNumber - b.features.cardinalNumber)
  .forEach(v => console.log(`  ${v.features.cardinalNumber}: ${v.symbol} - ${v.description}`));

console.log(`\nMissing from original data:`);
ipaData.vowels.filter(v => !availableSymbols.includes(v.symbol)).forEach(v => console.log(`  Vowel: ${v.symbol}`));
ipaData.consonants.filter(c => !availableSymbols.includes(c.symbol)).forEach(c => console.log(`  Consonant: ${c.symbol}`));

// Create filtered data structure
const filteredData = {
  vowels: filteredVowels,
  consonants: filteredConsonants
};

// Output JSON for reference
fs.writeFileSync('filtered_data.json', JSON.stringify(filteredData, null, 2));
console.log('\nFiltered data written to filtered_data.json');
