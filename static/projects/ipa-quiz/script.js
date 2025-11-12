// IPA Quiz Application

// IPA symbols database with audio file paths and phonetic features
const ipaData = {
    vowels: [
        // PRIMARY CARDINAL VOWELS
        {
            symbol: 'i',
            audio: 'audio/i.mp3',
            description: 'Close front unrounded vowel',
            features: {
                height: 'close',
                backness: 'front',
                rounding: 'unrounded',
                cardinalNumber: 1
            }
        },
        {
            symbol: 'e',
            audio: 'audio/e.mp3',
            description: 'Close-mid front unrounded vowel',
            features: {
                height: 'close-mid',
                backness: 'front',
                rounding: 'unrounded',
                cardinalNumber: 2
            }
        },
        {
            symbol: 'ɛ',
            audio: 'audio/ɛ.mp3',
            description: 'Open-mid front unrounded vowel',
            features: {
                height: 'open-mid',
                backness: 'front',
                rounding: 'unrounded',
                cardinalNumber: 3
            }
        },
        {
            symbol: 'a',
            audio: 'audio/a.mp3',
            description: 'Open front unrounded vowel',
            features: {
                height: 'open',
                backness: 'front',
                rounding: 'unrounded',
                cardinalNumber: 4
            }
        },
        {
            symbol: 'ɑ',
            audio: 'audio/ɑ.mp3',
            description: 'Open back unrounded vowel',
            features: {
                height: 'open',
                backness: 'back',
                rounding: 'unrounded',
                cardinalNumber: 5
            }
        },
        {
            symbol: 'ɔ',
            audio: 'audio/ɔ.mp3',
            description: 'Open-mid back rounded vowel',
            features: {
                height: 'open-mid',
                backness: 'back',
                rounding: 'rounded',
                cardinalNumber: 6
            }
        },
        {
            symbol: 'o',
            audio: 'audio/o.mp3',
            description: 'Close-mid back rounded vowel',
            features: {
                height: 'close-mid',
                backness: 'back',
                rounding: 'rounded',
                cardinalNumber: 7
            }
        },
        {
            symbol: 'u',
            audio: 'audio/u.mp3',
            description: 'Close back rounded vowel',
            features: {
                height: 'close',
                backness: 'back',
                rounding: 'rounded',
                cardinalNumber: 8
            }
        },
        // SECONDARY CARDINAL VOWELS
        {
            symbol: 'y',
            audio: 'audio/y.mp3',
            description: 'Close front rounded vowel',
            features: {
                height: 'close',
                backness: 'front',
                rounding: 'rounded',
                cardinalNumber: 9
            }
        },
        {
            symbol: 'ø',
            audio: 'audio/ø.mp3',
            description: 'Close-mid front rounded vowel',
            features: {
                height: 'close-mid',
                backness: 'front',
                rounding: 'rounded',
                cardinalNumber: 10
            }
        },
        {
            symbol: 'œ',
            audio: 'audio/œ.mp3',
            description: 'Open-mid front rounded vowel',
            features: {
                height: 'open-mid',
                backness: 'front',
                rounding: 'rounded',
                cardinalNumber: 11
            }
        },
        {
            symbol: 'ɶ',
            audio: 'audio/ɶ.mp3',
            description: 'Open front rounded vowel',
            features: {
                height: 'open',
                backness: 'front',
                rounding: 'rounded',
                cardinalNumber: 12
            }
        },
        {
            symbol: 'ɒ',
            audio: 'audio/ɒ.mp3',
            description: 'Open back rounded vowel',
            features: {
                height: 'open',
                backness: 'back',
                rounding: 'rounded',
                cardinalNumber: 13
            }
        },
        {
            symbol: 'ʌ',
            audio: 'audio/ʌ.mp3',
            description: 'Open-mid back unrounded vowel',
            features: {
                height: 'open-mid',
                backness: 'back',
                rounding: 'unrounded',
                cardinalNumber: 14
            }
        },
        {
            symbol: 'ɤ',
            audio: 'audio/ɤ.mp3',
            description: 'Close-mid back unrounded vowel',
            features: {
                height: 'close-mid',
                backness: 'back',
                rounding: 'unrounded',
                cardinalNumber: 15
            }
        },
        {
            symbol: 'ɯ',
            audio: 'audio/ɯ.mp3',
            description: 'Close back unrounded vowel',
            features: {
                height: 'close',
                backness: 'back',
                rounding: 'unrounded',
                cardinalNumber: 16
            }
        },
        // CENTRAL VOWELS (Cardinal 17-18)
        {
            symbol: 'ɨ',
            audio: 'audio/ɨ.mp3',
            description: 'Close central unrounded vowel',
            features: {
                height: 'close',
                backness: 'central',
                rounding: 'unrounded',
                cardinalNumber: 17
            }
        },
        {
            symbol: 'ʉ',
            audio: 'audio/ʉ.mp3',
            description: 'Close central rounded vowel',
            features: {
                height: 'close',
                backness: 'central',
                rounding: 'rounded',
                cardinalNumber: 18
            }
        }
    ],
    consonants: [
        // PLOSIVES
        {
            symbol: 'p',
            audio: 'audio/p.mp3',
            description: 'Voiceless bilabial plosive',
            features: {
                place: 'bilabial',
                manner: 'plosive',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'b',
            audio: 'audio/b.mp3',
            description: 'Voiced bilabial plosive',
            features: {
                place: 'bilabial',
                manner: 'plosive',
                voicing: 'voiced'
            }
        },
        {
            symbol: 't',
            audio: 'audio/t.mp3',
            description: 'Voiceless alveolar plosive',
            features: {
                place: 'alveolar',
                manner: 'plosive',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'd',
            audio: 'audio/d.mp3',
            description: 'Voiced alveolar plosive',
            features: {
                place: 'alveolar',
                manner: 'plosive',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ʈ',
            audio: 'audio/ʈ.mp3',
            description: 'Voiceless retroflex plosive',
            features: {
                place: 'retroflex',
                manner: 'plosive',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ɖ',
            audio: 'audio/ɖ.mp3',
            description: 'Voiced retroflex plosive',
            features: {
                place: 'retroflex',
                manner: 'plosive',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'c',
            audio: 'audio/c.mp3',
            description: 'Voiceless palatal plosive',
            features: {
                place: 'palatal',
                manner: 'plosive',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ɟ',
            audio: 'audio/ɟ.mp3',
            description: 'Voiced palatal plosive',
            features: {
                place: 'palatal',
                manner: 'plosive',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'k',
            audio: 'audio/k.mp3',
            description: 'Voiceless velar plosive',
            features: {
                place: 'velar',
                manner: 'plosive',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ɡ',
            audio: 'audio/ɡ.mp3',
            description: 'Voiced velar plosive',
            features: {
                place: 'velar',
                manner: 'plosive',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'q',
            audio: 'audio/q.mp3',
            description: 'Voiceless uvular plosive',
            features: {
                place: 'uvular',
                manner: 'plosive',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ɢ',
            audio: 'audio/ɢ.mp3',
            description: 'Voiced uvular plosive',
            features: {
                place: 'uvular',
                manner: 'plosive',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ʔ',
            audio: 'audio/ʔ.mp3',
            description: 'Glottal stop',
            features: {
                place: 'glottal',
                manner: 'plosive',
                voicing: 'voiceless'
            }
        },
        // NASALS
        {
            symbol: 'm',
            audio: 'audio/m.mp3',
            description: 'Bilabial nasal',
            features: {
                place: 'bilabial',
                manner: 'nasal',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɱ',
            audio: 'audio/ɱ.mp3',
            description: 'Labiodental nasal',
            features: {
                place: 'labiodental',
                manner: 'nasal',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'n',
            audio: 'audio/n.mp3',
            description: 'Alveolar nasal',
            features: {
                place: 'alveolar',
                manner: 'nasal',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɳ',
            audio: 'audio/ɳ.mp3',
            description: 'Retroflex nasal',
            features: {
                place: 'retroflex',
                manner: 'nasal',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɲ',
            audio: 'audio/ɲ.mp3',
            description: 'Palatal nasal',
            features: {
                place: 'palatal',
                manner: 'nasal',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ŋ',
            audio: 'audio/ŋ.mp3',
            description: 'Velar nasal',
            features: {
                place: 'velar',
                manner: 'nasal',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɴ',
            audio: 'audio/ɴ.mp3',
            description: 'Uvular nasal',
            features: {
                place: 'uvular',
                manner: 'nasal',
                voicing: 'voiced'
            }
        },
        // TRILLS
        {
            symbol: 'ʙ',
            audio: 'audio/ʙ.mp3',
            description: 'Bilabial trill',
            features: {
                place: 'bilabial',
                manner: 'trill',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'r',
            audio: 'audio/r.mp3',
            description: 'Alveolar trill',
            features: {
                place: 'alveolar',
                manner: 'trill',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ʀ',
            audio: 'audio/ʀ.mp3',
            description: 'Uvular trill',
            features: {
                place: 'uvular',
                manner: 'trill',
                voicing: 'voiced'
            }
        },
        // TAP/FLAP
        {
            symbol: 'ⱱ',
            audio: 'audio/ⱱ.mp3',
            description: 'Labiodental flap',
            features: {
                place: 'labiodental',
                manner: 'tap',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɾ',
            audio: 'audio/ɾ.mp3',
            description: 'Alveolar tap',
            features: {
                place: 'alveolar',
                manner: 'tap',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɽ',
            audio: 'audio/ɽ.mp3',
            description: 'Retroflex flap',
            features: {
                place: 'retroflex',
                manner: 'tap',
                voicing: 'voiced'
            }
        },
        // FRICATIVES
        {
            symbol: 'ɸ',
            audio: 'audio/ɸ.mp3',
            description: 'Voiceless bilabial fricative',
            features: {
                place: 'bilabial',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'β',
            audio: 'audio/β.mp3',
            description: 'Voiced bilabial fricative',
            features: {
                place: 'bilabial',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'f',
            audio: 'audio/f.mp3',
            description: 'Voiceless labiodental fricative',
            features: {
                place: 'labiodental',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'v',
            audio: 'audio/v.mp3',
            description: 'Voiced labiodental fricative',
            features: {
                place: 'labiodental',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'θ',
            audio: 'audio/θ.mp3',
            description: 'Voiceless dental fricative',
            features: {
                place: 'dental',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ð',
            audio: 'audio/ð.mp3',
            description: 'Voiced dental fricative',
            features: {
                place: 'dental',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 's',
            audio: 'audio/s.mp3',
            description: 'Voiceless alveolar fricative',
            features: {
                place: 'alveolar',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'z',
            audio: 'audio/z.mp3',
            description: 'Voiced alveolar fricative',
            features: {
                place: 'alveolar',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ʃ',
            audio: 'audio/ʃ.mp3',
            description: 'Voiceless postalveolar fricative',
            features: {
                place: 'postalveolar',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ʒ',
            audio: 'audio/ʒ.mp3',
            description: 'Voiced postalveolar fricative',
            features: {
                place: 'postalveolar',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ʂ',
            audio: 'audio/ʂ.mp3',
            description: 'Voiceless retroflex fricative',
            features: {
                place: 'retroflex',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ʐ',
            audio: 'audio/ʐ.mp3',
            description: 'Voiced retroflex fricative',
            features: {
                place: 'retroflex',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ç',
            audio: 'audio/ç.mp3',
            description: 'Voiceless palatal fricative',
            features: {
                place: 'palatal',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ʝ',
            audio: 'audio/ʝ.mp3',
            description: 'Voiced palatal fricative',
            features: {
                place: 'palatal',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'x',
            audio: 'audio/x.mp3',
            description: 'Voiceless velar fricative',
            features: {
                place: 'velar',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ɣ',
            audio: 'audio/ɣ.mp3',
            description: 'Voiced velar fricative',
            features: {
                place: 'velar',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'χ',
            audio: 'audio/χ.mp3',
            description: 'Voiceless uvular fricative',
            features: {
                place: 'uvular',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ʁ',
            audio: 'audio/ʁ.mp3',
            description: 'Voiced uvular fricative',
            features: {
                place: 'uvular',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ħ',
            audio: 'audio/ħ.mp3',
            description: 'Voiceless pharyngeal fricative',
            features: {
                place: 'pharyngeal',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ʕ',
            audio: 'audio/ʕ.mp3',
            description: 'Voiced pharyngeal fricative',
            features: {
                place: 'pharyngeal',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'h',
            audio: 'audio/h.mp3',
            description: 'Voiceless glottal fricative',
            features: {
                place: 'glottal',
                manner: 'fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ɦ',
            audio: 'audio/ɦ.mp3',
            description: 'Voiced glottal fricative',
            features: {
                place: 'glottal',
                manner: 'fricative',
                voicing: 'voiced'
            }
        },
        // LATERAL FRICATIVES
        {
            symbol: 'ɬ',
            audio: 'audio/ɬ.mp3',
            description: 'Voiceless alveolar lateral fricative',
            features: {
                place: 'alveolar',
                manner: 'lateral fricative',
                voicing: 'voiceless'
            }
        },
        {
            symbol: 'ɮ',
            audio: 'audio/ɮ.mp3',
            description: 'Voiced alveolar lateral fricative',
            features: {
                place: 'alveolar',
                manner: 'lateral fricative',
                voicing: 'voiced'
            }
        },
        // APPROXIMANTS
        {
            symbol: 'ʋ',
            audio: 'audio/ʋ.mp3',
            description: 'Labiodental approximant',
            features: {
                place: 'labiodental',
                manner: 'approximant',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɹ',
            audio: 'audio/ɹ.mp3',
            description: 'Alveolar approximant',
            features: {
                place: 'alveolar',
                manner: 'approximant',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɻ',
            audio: 'audio/ɻ.mp3',
            description: 'Retroflex approximant',
            features: {
                place: 'retroflex',
                manner: 'approximant',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'j',
            audio: 'audio/j.mp3',
            description: 'Palatal approximant',
            features: {
                place: 'palatal',
                manner: 'approximant',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɰ',
            audio: 'audio/ɰ.mp3',
            description: 'Velar approximant',
            features: {
                place: 'velar',
                manner: 'approximant',
                voicing: 'voiced'
            }
        },
        // LATERAL APPROXIMANTS
        {
            symbol: 'l',
            audio: 'audio/l.mp3',
            description: 'Alveolar lateral approximant',
            features: {
                place: 'alveolar',
                manner: 'lateral approximant',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ɭ',
            audio: 'audio/ɭ.mp3',
            description: 'Retroflex lateral approximant',
            features: {
                place: 'retroflex',
                manner: 'lateral approximant',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ʎ',
            audio: 'audio/ʎ.mp3',
            description: 'Palatal lateral approximant',
            features: {
                place: 'palatal',
                manner: 'lateral approximant',
                voicing: 'voiced'
            }
        },
        {
            symbol: 'ʟ',
            audio: 'audio/ʟ.mp3',
            description: 'Velar lateral approximant',
            features: {
                place: 'velar',
                manner: 'lateral approximant',
                voicing: 'voiced'
            }
        }
    ]
};

// Quiz state
let currentMode = 'symbol'; // 'symbol' or 'features'
let currentCategory = 'all';
let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10;
let currentQuestion = null;
let currentFeatureQuestion = null; // For feature analysis mode
let hasAnswered = false;

// DOM elements
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const nextButton = document.getElementById('next-button');
const scoreDisplay = document.getElementById('score');
const currentQuestionDisplay = document.getElementById('current-question');
const totalQuestionsDisplay = document.getElementById('total-questions');
const quizContent = document.getElementById('quiz-content');
const results = document.getElementById('results');
const finalScore = document.getElementById('final-score');
const finalTotal = document.getElementById('final-total');
const percentage = document.getElementById('percentage');
const restartButton = document.getElementById('restart-button');
const categorySelect = document.getElementById('category-select');
const modeSelect = document.getElementById('mode-select');
const subtitle = document.getElementById('subtitle');

// Initialize quiz
function initQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    hasAnswered = false;

    // Get symbols based on selected category
    let symbols = [];
    if (currentCategory === 'vowels') {
        symbols = [...ipaData.vowels];
    } else if (currentCategory === 'consonants') {
        symbols = [...ipaData.consonants];
    } else {
        symbols = [...ipaData.vowels, ...ipaData.consonants];
    }

    // Shuffle and select questions
    quizData = shuffleArray(symbols).slice(0, totalQuestions);

    // Update UI
    scoreDisplay.textContent = score;
    totalQuestionsDisplay.textContent = totalQuestions;
    quizContent.classList.remove('hidden');
    results.classList.add('hidden');

    loadQuestion();
}

// Shuffle array utility
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Load question
function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showResults();
        return;
    }

    hasAnswered = false;
    currentQuestion = quizData[currentQuestionIndex];

    // Update question counter
    currentQuestionDisplay.textContent = currentQuestionIndex + 1;

    // Set audio source
    audioPlayer.src = currentQuestion.audio;

    // Generate options based on mode
    if (currentMode === 'symbol') {
        const options = generateOptions(currentQuestion);
        displayOptions(options);
    } else if (currentMode === 'features') {
        // Feature analysis mode
        generateFeatureQuestion(currentQuestion);
    } else if (currentMode === 'complete') {
        // Complete analysis mode
        generateCompleteAnalysisQuestion(currentQuestion);
    }

    // Hide feedback
    feedback.classList.add('hidden');
}

// Generate multiple choice options
function generateOptions(correctAnswer) {
    // Determine if the correct answer is a vowel or consonant
    const isVowel = ipaData.vowels.some(v => v.symbol === correctAnswer.symbol);

    // Get symbols from the same category (vowel or consonant) as the correct answer
    const allSymbols = isVowel ? ipaData.vowels : ipaData.consonants;

    // Get 3 random incorrect options from the same category
    const incorrectOptions = allSymbols
        .filter(item => item.symbol !== correctAnswer.symbol)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    // Combine and shuffle
    const options = [correctAnswer, ...incorrectOptions];
    return shuffleArray(options);
}

// Display options
function displayOptions(options) {
    optionsContainer.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.symbol;
        button.addEventListener('click', () => selectOption(option, button));
        optionsContainer.appendChild(button);
    });
}

// Generate feature question for feature analysis mode
function generateFeatureQuestion(sound) {
    const isVowel = ipaData.vowels.some(v => v.symbol === sound.symbol);

    if (isVowel) {
        // For vowels, ask about one of: height, backness, rounding, or cardinal number
        const featureTypes = ['height', 'backness', 'rounding'];
        if (sound.features.cardinalNumber !== null) {
            featureTypes.push('cardinalNumber');
        }

        const selectedFeature = featureTypes[Math.floor(Math.random() * featureTypes.length)];
        currentFeatureQuestion = {
            feature: selectedFeature,
            correctAnswer: sound.features[selectedFeature],
            isVowel: true
        };

        generateFeatureOptions(selectedFeature, sound.features[selectedFeature], true);
    } else {
        // For consonants, ask about one of: place, manner, or voicing
        const featureTypes = ['place', 'manner', 'voicing'];
        const selectedFeature = featureTypes[Math.floor(Math.random() * featureTypes.length)];

        currentFeatureQuestion = {
            feature: selectedFeature,
            correctAnswer: sound.features[selectedFeature],
            isVowel: false
        };

        generateFeatureOptions(selectedFeature, sound.features[selectedFeature], false);
    }
}

// Generate options for feature questions
function generateFeatureOptions(featureType, correctAnswer, isVowel) {
    let allPossibleValues = [];

    if (isVowel) {
        // Get all possible values for this feature from vowel data
        const relevantVowels = currentCategory === 'consonants' ? [] :
                              currentCategory === 'vowels' ? ipaData.vowels :
                              ipaData.vowels;

        const uniqueValues = new Set();
        relevantVowels.forEach(v => {
            const value = v.features[featureType];
            if (value !== null && value !== undefined) {
                uniqueValues.add(value);
            }
        });
        allPossibleValues = Array.from(uniqueValues);
    } else {
        // Get all possible values for this feature from consonant data
        const relevantConsonants = currentCategory === 'vowels' ? [] :
                                   currentCategory === 'consonants' ? ipaData.consonants :
                                   ipaData.consonants;

        const uniqueValues = new Set();
        relevantConsonants.forEach(c => {
            const value = c.features[featureType];
            if (value !== null && value !== undefined) {
                uniqueValues.add(value);
            }
        });
        allPossibleValues = Array.from(uniqueValues);
    }

    // Ensure we have the correct answer
    if (!allPossibleValues.includes(correctAnswer)) {
        allPossibleValues.push(correctAnswer);
    }

    // If we have more than 4 options, randomly select 3 incorrect ones
    let options;
    if (allPossibleValues.length > 4) {
        const incorrectOptions = allPossibleValues
            .filter(v => v !== correctAnswer)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        options = [correctAnswer, ...incorrectOptions];
    } else {
        options = [...allPossibleValues];
    }

    // Shuffle options
    options = shuffleArray(options);

    // Display feature options
    displayFeatureOptions(options, featureType);
}

// Display feature options
function displayFeatureOptions(options, featureType) {
    optionsContainer.innerHTML = '';

    // Format feature type for display
    const featureLabel = {
        'height': 'Height',
        'backness': 'Backness',
        'rounding': 'Rounding',
        'cardinalNumber': 'Cardinal Vowel Number',
        'place': 'Place of Articulation',
        'manner': 'Manner of Articulation',
        'voicing': 'Voicing'
    }[featureType];

    // Create a header showing what feature is being tested
    const header = document.createElement('div');
    header.className = 'feature-question-header';
    header.textContent = `What is the ${featureLabel}?`;
    optionsContainer.appendChild(header);

    // Create buttons for each option
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'feature-options-grid';

    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button feature-option';

        // Format display text
        if (featureType === 'cardinalNumber') {
            button.textContent = `Cardinal Vowel ${option}`;
        } else {
            button.textContent = option.charAt(0).toUpperCase() + option.slice(1);
        }

        button.addEventListener('click', () => selectFeatureOption(option, button));
        buttonsContainer.appendChild(button);
    });

    optionsContainer.appendChild(buttonsContainer);
}

// Select feature option handler
function selectFeatureOption(selectedValue, button) {
    if (hasAnswered) return;

    hasAnswered = true;
    const isCorrect = selectedValue === currentFeatureQuestion.correctAnswer;

    // Disable all buttons
    const allButtons = document.querySelectorAll('.feature-option');
    allButtons.forEach(btn => {
        btn.disabled = true;
        // Highlight correct answer
        const btnText = btn.textContent.toLowerCase();
        const correctText = currentFeatureQuestion.feature === 'cardinalNumber'
            ? `cardinal vowel ${currentFeatureQuestion.correctAnswer}`.toLowerCase()
            : currentFeatureQuestion.correctAnswer.toLowerCase();

        if (btnText === correctText) {
            btn.classList.add('correct');
        }
    });

    // Mark selected answer
    if (!isCorrect) {
        button.classList.add('incorrect');
    }

    // Update score
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        feedbackText.textContent = `Correct! /${currentQuestion.symbol}/ - ${currentQuestion.description}`;
        feedback.className = 'feedback correct-feedback';
    } else {
        const featureLabel = {
            'height': 'height',
            'backness': 'backness',
            'rounding': 'rounding',
            'cardinalNumber': 'cardinal vowel number',
            'place': 'place of articulation',
            'manner': 'manner of articulation',
            'voicing': 'voicing'
        }[currentFeatureQuestion.feature];

        feedbackText.textContent = `Incorrect. /${currentQuestion.symbol}/ has ${featureLabel}: ${currentFeatureQuestion.correctAnswer}`;
        feedback.className = 'feedback incorrect-feedback';
    }

    feedback.classList.remove('hidden');
}

// Generate complete analysis question
function generateCompleteAnalysisQuestion(sound) {
    const isVowel = ipaData.vowels.some(v => v.symbol === sound.symbol);

    optionsContainer.innerHTML = '';

    // Create form for complete analysis
    const form = document.createElement('div');
    form.className = 'complete-analysis-form';

    // Add symbol selection first
    const symbolGroup = document.createElement('div');
    symbolGroup.className = 'feature-group';

    const symbolLabel = document.createElement('label');
    symbolLabel.className = 'feature-label';
    symbolLabel.textContent = 'Symbol:';
    symbolGroup.appendChild(symbolLabel);

    const symbolSelectContainer = document.createElement('div');
    symbolSelectContainer.className = 'feature-select-container';

    const symbolSelect = document.createElement('select');
    symbolSelect.className = 'feature-select';
    symbolSelect.id = 'select-symbol';

    // Add default option
    const defaultSymbolOption = document.createElement('option');
    defaultSymbolOption.value = '';
    defaultSymbolOption.textContent = 'Select...';
    symbolSelect.appendChild(defaultSymbolOption);

    // Get symbols from the same category (vowel or consonant)
    const allSymbols = isVowel ? ipaData.vowels : ipaData.consonants;

    // Shuffle and add all symbols as options
    shuffleArray([...allSymbols]).forEach(item => {
        const option = document.createElement('option');
        option.value = item.symbol;
        option.textContent = item.symbol;
        symbolSelect.appendChild(option);
    });

    symbolSelectContainer.appendChild(symbolSelect);
    symbolGroup.appendChild(symbolSelectContainer);
    form.appendChild(symbolGroup);

    if (isVowel) {
        // For vowels: height, backness, rounding, cardinal number
        const features = ['height', 'backness', 'rounding'];

        features.forEach(featureType => {
            const group = document.createElement('div');
            group.className = 'feature-group';

            const label = document.createElement('label');
            label.className = 'feature-label';
            label.textContent = featureType.charAt(0).toUpperCase() + featureType.slice(1) + ':';
            group.appendChild(label);

            const selectContainer = document.createElement('div');
            selectContainer.className = 'feature-select-container';

            const select = document.createElement('select');
            select.className = 'feature-select';
            select.id = `select-${featureType}`;

            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select...';
            select.appendChild(defaultOption);

            // Get all possible values for this feature
            const uniqueValues = new Set();
            ipaData.vowels.forEach(v => {
                const value = v.features[featureType];
                if (value !== null && value !== undefined) {
                    uniqueValues.add(value);
                }
            });

            Array.from(uniqueValues).sort().forEach(value => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value.charAt(0).toUpperCase() + value.slice(1);
                select.appendChild(option);
            });

            selectContainer.appendChild(select);
            group.appendChild(selectContainer);
            form.appendChild(group);
        });

        // Add cardinal vowel number if applicable
        if (sound.features.cardinalNumber !== null) {
            const cardinalGroup = document.createElement('div');
            cardinalGroup.className = 'feature-group';

            const cardinalLabel = document.createElement('label');
            cardinalLabel.className = 'feature-label';
            cardinalLabel.textContent = 'Cardinal Vowel Number:';
            cardinalGroup.appendChild(cardinalLabel);

            const cardinalSelectContainer = document.createElement('div');
            cardinalSelectContainer.className = 'feature-select-container';

            const cardinalSelect = document.createElement('select');
            cardinalSelect.className = 'feature-select';
            cardinalSelect.id = 'select-cardinalNumber';

            // Add default option
            const defaultCardinalOption = document.createElement('option');
            defaultCardinalOption.value = '';
            defaultCardinalOption.textContent = 'Select...';
            cardinalSelect.appendChild(defaultCardinalOption);

            // Add cardinal vowel numbers 1-18
            for (let i = 1; i <= 18; i++) {
                const option = document.createElement('option');
                option.value = i.toString();
                option.textContent = `Cardinal Vowel ${i}`;
                cardinalSelect.appendChild(option);
            }

            cardinalSelectContainer.appendChild(cardinalSelect);
            cardinalGroup.appendChild(cardinalSelectContainer);
            form.appendChild(cardinalGroup);
        }
    } else {
        // For consonants: place, manner, voicing
        const features = ['place', 'manner', 'voicing'];

        features.forEach(featureType => {
            const group = document.createElement('div');
            group.className = 'feature-group';

            const label = document.createElement('label');
            label.className = 'feature-label';
            label.textContent = featureType.charAt(0).toUpperCase() + featureType.slice(1) + ':';
            group.appendChild(label);

            const selectContainer = document.createElement('div');
            selectContainer.className = 'feature-select-container';

            const select = document.createElement('select');
            select.className = 'feature-select';
            select.id = `select-${featureType}`;

            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select...';
            select.appendChild(defaultOption);

            // Get all possible values for this feature
            const uniqueValues = new Set();
            ipaData.consonants.forEach(c => {
                const value = c.features[featureType];
                if (value !== null && value !== undefined) {
                    uniqueValues.add(value);
                }
            });

            Array.from(uniqueValues).sort().forEach(value => {
                const option = document.createElement('option');
                option.value = value;
                option.textContent = value.charAt(0).toUpperCase() + value.slice(1);
                select.appendChild(option);
            });

            selectContainer.appendChild(select);
            group.appendChild(selectContainer);
            form.appendChild(group);
        });
    }

    // Add submit button
    const submitButton = document.createElement('button');
    submitButton.className = 'submit-analysis-button';
    submitButton.textContent = 'Submit Answer';
    submitButton.addEventListener('click', () => checkCompleteAnalysis(sound));
    form.appendChild(submitButton);

    optionsContainer.appendChild(form);
}

// Check complete analysis answer
function checkCompleteAnalysis(sound) {
    if (hasAnswered) return;

    hasAnswered = true;
    const isVowel = ipaData.vowels.some(v => v.symbol === sound.symbol);

    let allCorrect = true;

    // Check symbol first
    const symbolSelect = document.getElementById('select-symbol');
    const selectedSymbol = symbolSelect.value;
    const correctSymbol = sound.symbol;

    symbolSelect.disabled = true;

    if (selectedSymbol === correctSymbol) {
        symbolSelect.parentElement.classList.add('correct');
    } else {
        symbolSelect.parentElement.classList.add('incorrect');
        allCorrect = false;

        // Show correct answer
        const correctLabel = document.createElement('span');
        correctLabel.className = 'correct-answer-label';
        correctLabel.textContent = ` (Correct: ${correctSymbol})`;
        symbolSelect.parentElement.appendChild(correctLabel);
    }

    // Check features
    const features = isVowel ? ['height', 'backness', 'rounding'] : ['place', 'manner', 'voicing'];

    features.forEach(featureType => {
        const select = document.getElementById(`select-${featureType}`);
        const selectedValue = select.value;
        const correctValue = sound.features[featureType];

        // Disable select
        select.disabled = true;

        // Check if correct
        if (selectedValue === correctValue) {
            select.parentElement.classList.add('correct');
        } else {
            select.parentElement.classList.add('incorrect');
            allCorrect = false;

            // Show correct answer
            const correctLabel = document.createElement('span');
            correctLabel.className = 'correct-answer-label';
            correctLabel.textContent = ` (Correct: ${correctValue})`;
            select.parentElement.appendChild(correctLabel);
        }
    });

    // Check cardinal vowel number if applicable
    if (isVowel && sound.features.cardinalNumber !== null) {
        const cardinalSelect = document.getElementById('select-cardinalNumber');
        const selectedCardinal = cardinalSelect.value;
        const correctCardinal = sound.features.cardinalNumber.toString();

        cardinalSelect.disabled = true;

        if (selectedCardinal === correctCardinal) {
            cardinalSelect.parentElement.classList.add('correct');
        } else {
            cardinalSelect.parentElement.classList.add('incorrect');
            allCorrect = false;

            // Show correct answer
            const correctLabel = document.createElement('span');
            correctLabel.className = 'correct-answer-label';
            correctLabel.textContent = ` (Correct: Cardinal Vowel ${correctCardinal})`;
            cardinalSelect.parentElement.appendChild(correctLabel);
        }
    }

    // Disable submit button
    const submitButton = optionsContainer.querySelector('.submit-analysis-button');
    submitButton.disabled = true;

    // Update score
    if (allCorrect) {
        score++;
        scoreDisplay.textContent = score;
        feedbackText.textContent = `Perfect! /${sound.symbol}/ - ${sound.description}`;
        feedback.className = 'feedback correct-feedback';
    } else {
        feedbackText.textContent = `Not quite. The sound is /${sound.symbol}/ - ${sound.description}`;
        feedback.className = 'feedback incorrect-feedback';
    }

    feedback.classList.remove('hidden');
}

// Play button handler
playButton.addEventListener('click', () => {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
});

// Select option handler
function selectOption(selectedOption, button) {
    if (hasAnswered) return;

    hasAnswered = true;
    const isCorrect = selectedOption.symbol === currentQuestion.symbol;

    // Disable all buttons
    const allButtons = optionsContainer.querySelectorAll('.option-button');
    allButtons.forEach(btn => {
        btn.disabled = true;
        // Highlight correct answer
        if (btn.textContent === currentQuestion.symbol) {
            btn.classList.add('correct');
        }
    });

    // Mark selected answer
    if (!isCorrect) {
        button.classList.add('incorrect');
    }

    // Update score
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        feedbackText.textContent = `Correct! The symbol is /${currentQuestion.symbol}/`;
        feedback.className = 'feedback correct-feedback';
    } else {
        feedbackText.textContent = `Incorrect. The correct answer is /${currentQuestion.symbol}/`;
        feedback.className = 'feedback incorrect-feedback';
    }

    feedback.classList.remove('hidden');
}

// Next button handler
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

// Show results
function showResults() {
    quizContent.classList.add('hidden');
    results.classList.remove('hidden');

    finalScore.textContent = score;
    finalTotal.textContent = totalQuestions;

    const percentageValue = Math.round((score / totalQuestions) * 100);
    percentage.textContent = `${percentageValue}%`;
}

// Restart button handler
restartButton.addEventListener('click', () => {
    initQuiz();
});

// Category change handler
categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    initQuiz();
});

// Mode change handler
modeSelect.addEventListener('change', (e) => {
    currentMode = e.target.value;

    // Update subtitle based on mode
    if (currentMode === 'symbol') {
        subtitle.textContent = 'Listen and identify the correct IPA symbol';
    } else if (currentMode === 'features') {
        subtitle.textContent = 'Listen and identify the phonetic features';
    } else if (currentMode === 'complete') {
        subtitle.textContent = 'Listen and identify all features of the sound';
    }

    initQuiz();
});

// Start quiz on page load
window.addEventListener('load', () => {
    initQuiz();
});
