import React, { useState, useEffect } from 'react';
import { Shield, Eye, Lock, Unlock, Zap, Code, Database, Globe } from 'lucide-react';

interface CyberTransitionProps {
    onComplete: () => void;
}

const CyberTransition: React.FC<CyberTransitionProps> = ({ onComplete }) => {
    const [stage, setStage] = useState(0);
    const [matrixChars, setMatrixChars] = useState<string[]>([]);
    const [scanLines, setScanLines] = useState<number[]>([]);

    const stages = [
        "INITIALIZING SECURE CONNECTION...",
        "SCANNING NETWORK PROTOCOLS...",
        "DECRYPTING ACCESS TOKENS...",
        "BYPASSING SECURITY LAYERS...",
        "ACCESSING OSINT DATABASE...",
        "LOADING PORTFOLIO INTERFACE...",
        "CONNECTION ESTABLISHED ✓"
    ];

    const matrixCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?";

    // Text-to-Speech function
    const playWelcomeMessage = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance("Welcome to Usman Ali's Portfolio Website");

            // Configure voice settings for deep, masculine, authoritative tone
            utterance.rate = 0.6; // Even slower, more deliberate and commanding
            utterance.pitch = 0.6; // Much deeper pitch for masculine voice
            utterance.volume = 0.9; // Higher volume for authority

            // Wait for voices to load, then select the best masculine voice
            const voices = speechSynthesis.getVoices();

            // Function to find and set the best masculine voice
            const setBestMaleVoice = () => {
                const availableVoices = speechSynthesis.getVoices();

                // Priority order for masculine voices
                const maleVoicePreferences = [
                    // English male voices (most common)
                    'Google UK English Male',
                    'Microsoft David Desktop',
                    'Microsoft Mark Desktop',
                    'Alex', // macOS male voice
                    'Daniel', // Windows male voice
                    'Google US English Male',
                    'Microsoft Zira Desktop', // Sometimes sounds more masculine
                    // Fallback to any male-sounding voice
                    ...availableVoices.filter(voice =>
                        voice.name.toLowerCase().includes('male') ||
                        voice.name.toLowerCase().includes('david') ||
                        voice.name.toLowerCase().includes('daniel') ||
                        voice.name.toLowerCase().includes('mark') ||
                        voice.name.toLowerCase().includes('alex') ||
                        voice.name.toLowerCase().includes('jorge') ||
                        voice.name.toLowerCase().includes('diego')
                    ).map(voice => voice.name)
                ];

                // Find the first available preferred voice
                for (const voiceName of maleVoicePreferences) {
                    const voice = availableVoices.find(v => v.name === voiceName);
                    if (voice) {
                        utterance.voice = voice;
                        console.log(`Selected voice: ${voice.name} (${voice.lang})`);
                        break;
                    }
                }

                // If no preferred voice found, use default but with masculine settings
                if (!utterance.voice && availableVoices.length > 0) {
                    // Try to find any English voice as fallback
                    const englishVoice = availableVoices.find(voice =>
                        voice.lang.startsWith('en') && !voice.name.toLowerCase().includes('female')
                    );
                    if (englishVoice) {
                        utterance.voice = englishVoice;
                        console.log(`Fallback voice: ${englishVoice.name}`);
                    }
                }
            };

            // Set voice immediately if voices are loaded
            if (voices.length > 0) {
                setBestMaleVoice();
            } else {
                // Wait for voices to load
                speechSynthesis.onvoiceschanged = () => {
                    setBestMaleVoice();
                };
            }

            // Add event listeners for better control
            utterance.onstart = () => {
                console.log('🎤 Professor-style welcome message started');
            };

            utterance.onend = () => {
                console.log('🎤 Welcome message completed');
            };

            utterance.onerror = (event) => {
                console.log('🚨 Speech synthesis error:', event.error);
            };

            // Small delay to ensure voice is set, then play
            setTimeout(() => {
                speechSynthesis.speak(utterance);
            }, 100);
        } else {
            console.log('Speech synthesis not supported in this browser');
        }
    };
    useEffect(() => {
        // Generate matrix rain effect
        const generateMatrix = () => {
            const chars = [];
            for (let i = 0; i < 200; i++) {
                chars.push(matrixCharacters[Math.floor(Math.random() * matrixCharacters.length)]);
            }
            setMatrixChars(chars);
        };

        const matrixInterval = setInterval(generateMatrix, 100);
        generateMatrix();

        return () => clearInterval(matrixInterval);
    }, []);

    useEffect(() => {
        // Generate scanning lines
        const generateScanLines = () => {
            const lines = [];
            for (let i = 0; i < 5; i++) {
                lines.push(Math.random() * 100);
            }
            setScanLines(lines);
        };

        const scanInterval = setInterval(generateScanLines, 200);
        generateScanLines();

        return () => clearInterval(scanInterval);
    }, []);

    useEffect(() => {
        // Progress through stages
        if (stage < stages.length - 1) {
            const timer = setTimeout(() => {
                setStage(prev => prev + 1);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            // Complete transition after final stage
            const finalTimer = setTimeout(() => {
                // Play welcome message before transitioning
                playWelcomeMessage();

                // Delay the transition slightly to let the voice message start
                setTimeout(() => {
                    onComplete();
                }, 500);
            }, 1000);
            return () => clearTimeout(finalTimer);
        }
    }, [stage, onComplete]);

    return (
        <div className="fixed inset-0 bg-black z-50 overflow-hidden">
            {/* Matrix Rain Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-20 gap-0 h-full animate-pulse">
                    {matrixChars.map((char, index) => (
                        <div
                            key={index}
                            className="text-green-400 text-xs font-mono animate-bounce"
                            style={{
                                animationDelay: `${(index % 10) * 0.1}s`,
                                animationDuration: `${0.5 + (index % 3) * 0.2}s`
                            }}
                        >
                            {char}
                        </div>
                    ))}
                </div>
            </div>

            {/* Scanning Lines */}
            {scanLines.map((position, index) => (
                <div
                    key={index}
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60 animate-pulse"
                    style={{
                        top: `${position}%`,
                        animationDelay: `${index * 0.2}s`
                    }}
                />
            ))}

            {/* Central Interface */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/90 border-2 border-green-400 rounded-lg p-8 max-w-2xl w-full mx-4 backdrop-blur-sm">
                    {/* Header with Icons */}
                    <div className="flex items-center justify-center mb-8">
                        <div className="relative">
                            <Shield className="w-12 h-12 text-green-400 animate-spin" />
                            <Eye className="w-6 h-6 text-green-400 absolute top-1 right-1 animate-pulse" />
                        </div>
                        <div className="ml-4">
                            <h1 className="text-2xl font-bold text-green-400 font-mono">
                                OSINT SECURITY PROTOCOL
                            </h1>
                            <p className="text-green-300 text-sm">Establishing Secure Connection</p>
                        </div>
                    </div>

                    {/* Progress Stages */}
                    <div className="space-y-4 mb-8">
                        {stages.map((stageText, index) => (
                            <div
                                key={index}
                                className={`flex items-center space-x-3 transition-all duration-500 ${
                                    index <= stage ? 'opacity-100' : 'opacity-30'
                                }`}
                            >
                                {index < stage ? (
                                    <Unlock className="w-5 h-5 text-green-400" />
                                ) : index === stage ? (
                                    <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                                ) : (
                                    <Lock className="w-5 h-5 text-gray-500" />
                                )}
                                <span
                                    className={`font-mono text-sm ${
                                        index <= stage ? 'text-green-400' : 'text-gray-500'
                                    }`}
                                >
                  {stageText}
                </span>
                                {index <= stage && (
                                    <div className="flex space-x-1">
                                        <div className="w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                                        <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                        <div className="flex justify-between text-xs text-green-400 mb-2">
                            <span>PROGRESS</span>
                            <span>{Math.round(((stage + 1) / stages.length) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                            <div
                                className="bg-gradient-to-r from-green-400 to-green-300 h-2 rounded-full transition-all duration-500 relative overflow-hidden"
                                style={{ width: `${((stage + 1) / stages.length) * 100}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* System Info */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-gray-900/50 p-3 rounded border border-green-400/30">
                            <Code className="w-6 h-6 text-green-400 mx-auto mb-1" />
                            <div className="text-xs text-green-400">PYTHON</div>
                            <div className="text-xs text-gray-400">ACTIVE</div>
                        </div>
                        <div className="bg-gray-900/50 p-3 rounded border border-green-400/30">
                            <Database className="w-6 h-6 text-green-400 mx-auto mb-1" />
                            <div className="text-xs text-green-400">OSINT DB</div>
                            <div className="text-xs text-gray-400">ONLINE</div>
                        </div>
                        <div className="bg-gray-900/50 p-3 rounded border border-green-400/30">
                            <Globe className="w-6 h-6 text-green-400 mx-auto mb-1" />
                            <div className="text-xs text-green-400">NETWORK</div>
                            <div className="text-xs text-gray-400">SECURE</div>
                        </div>
                    </div>

                    {/* Final Stage Message */}
                    {stage === stages.length - 1 && (
                        <div className="mt-6 text-center">
                            <div className="text-green-400 font-mono text-lg animate-pulse">
                                ACCESS GRANTED
                            </div>
                            <div className="text-green-300 text-sm mt-2">
                                🎤 "Welcome to Usman Ali's Portfolio Website"
                            </div>
                            <div className="text-green-300 text-xs mt-1 opacity-75">
                                Loading portfolio... Stand by...
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 text-green-400 font-mono text-xs opacity-60">
                [OSINT-PROTOCOL]
            </div>
            <div className="absolute top-4 right-4 text-green-400 font-mono text-xs opacity-60">
                [USER-AUTHENTICATED]
            </div>
            <div className="absolute bottom-4 left-4 text-green-400 font-mono text-xs opacity-60">
                [SECURE-MODE: ACTIVE]
            </div>
            <div className="absolute bottom-4 right-4 text-green-400 font-mono text-xs opacity-60">
                [PORTFOLIO-ACCESS]
            </div>
        </div>
    );
};

export default CyberTransition;