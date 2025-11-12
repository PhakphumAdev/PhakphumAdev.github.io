# IPA Quiz - Interactive Phonetic Symbol Learning Tool

A web-based quiz application that helps students learn International Phonetic Alphabet (IPA) symbols through audio recognition.

## Features

- **Audio-based Learning**: Listen to IPA sounds and identify the correct symbol
- **Multiple Categories**: Practice vowels, consonants, or all symbols
- **Interactive Quiz**: Multiple choice questions with instant feedback
- **Score Tracking**: Monitor your progress throughout the quiz
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### 1. Add Audio Files

You need to add audio files for each IPA symbol. Place MP3 files in the `audio/` folder with the following naming convention:

**Vowels:**
- `i.mp3` - /i/ sound
- `ɪ.mp3` - /ɪ/ sound
- `e.mp3` - /e/ sound
- `ɛ.mp3` - /ɛ/ sound
- `æ.mp3` - /æ/ sound
- `ɑ.mp3` - /ɑ/ sound
- `ɔ.mp3` - /ɔ/ sound
- `o.mp3` - /o/ sound
- `ʊ.mp3` - /ʊ/ sound
- `u.mp3` - /u/ sound
- `ʌ.mp3` - /ʌ/ sound
- `ə.mp3` - /ə/ sound

**Consonants:**
- `p.mp3`, `b.mp3`, `t.mp3`, `d.mp3`, `k.mp3`, `ɡ.mp3`
- `f.mp3`, `v.mp3`, `θ.mp3`, `ð.mp3`, `s.mp3`, `z.mp3`
- `ʃ.mp3`, `ʒ.mp3`, `h.mp3`
- `tʃ.mp3`, `dʒ.mp3`
- `m.mp3`, `n.mp3`, `ŋ.mp3`
- `l.mp3`, `r.mp3`, `w.mp3`, `j.mp3`

### 2. Where to Find IPA Audio Files

You can obtain IPA audio files from:

1. **Free Resources:**
   - [Wikipedia IPA Charts](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet) - Many IPA pages have audio samples
   - [UCLA Phonetics Lab](http://www.phonetics.ucla.edu/) - Free phonetic resources
   - [International Phonetic Association](https://www.internationalphoneticassociation.org/) - Official IPA resources

2. **Record Your Own:**
   - Use a microphone to record clear pronunciations
   - Export as MP3 format
   - Name files according to the IPA symbol

3. **Convert to MP3:**
   - If files are in other formats (WAV, OGG), convert them to MP3
   - Use tools like [CloudConvert](https://cloudconvert.com/) or FFmpeg

### 3. Deploy to GitHub Pages

1. **Create a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: IPA Quiz application"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/ipa-quiz.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"
   - Your site will be available at: `https://YOUR-USERNAME.github.io/ipa-quiz/`

## File Structure

```
ipa-quiz/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # Quiz logic and functionality
├── audio/              # Audio files folder
│   ├── i.mp3
│   ├── ɪ.mp3
│   └── ...
└── README.md           # This file
```

## How to Use

1. Open `index.html` in a web browser (or visit your GitHub Pages URL)
2. Select a category (All Symbols, Vowels, or Consonants)
3. Click the "Play Sound" button to hear an IPA sound
4. Choose the correct symbol from the four options
5. Get instant feedback and move to the next question
6. Review your final score at the end of the quiz

## Customization

### Adding More Symbols

To add more IPA symbols, edit [script.js](script.js:3-34) and add entries to the `ipaData` object:

```javascript
const ipaData = {
    vowels: [
        { symbol: 'y', audio: 'audio/y.mp3', description: 'Close front rounded vowel' },
        // ... more vowels
    ],
    consonants: [
        // ... consonants
    ]
};
```

### Changing Quiz Length

Modify the `totalQuestions` variable in [script.js](script.js:38):

```javascript
let totalQuestions = 20; // Change from 10 to 20 questions
```

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Responsive design

## License

Free to use for educational purposes.

## Credits

Created as an educational tool for learning IPA symbols.
