import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
    onComplete: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onComplete }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const welcomeText = [
        "Welcome to OSINT Terminal",
        "═══════════════════════════════════════════════",
        "",
        "System: Ubuntu 22.04.3 LTS",
        "User: osint-analyst@usman-portfolio:~$",
        "",
        "Available commands:",
        "  portfolio  - Access my professional portfolio",
        "  help       - Show available commands",
        "  about      - About Usman Ali",
        "  skills     - Technical capabilities",
        "  clear      - Clear terminal screen",
        "",
        "Type 'portfolio' to view my work"
    ];

    useEffect(() => {
        // Auto-type welcome message
        if (currentLine < welcomeText.length) {
            const timer = setTimeout(() => {
                setHistory(prev => [...prev, welcomeText[currentLine]]);
                setCurrentLine(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [currentLine]);

    useEffect(() => {
        // Cursor blinking effect
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    useEffect(() => {
        // Auto-focus input and scroll to bottom
        if (inputRef.current) {
            inputRef.current.focus();
        }
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (command: string) => {
        const cmd = command.toLowerCase().trim();
        const newHistory = [...history, `osint-analyst@usman-portfolio:~$ ${command}`];

        switch (cmd) {
            case 'portfolio':
                newHistory.push('');
                newHistory.push('🚀 Launching portfolio...');
                newHistory.push('✅ Authentication successful');
                newHistory.push('🔄 Loading professional interface...');
                newHistory.push('');
                setHistory(newHistory);

                setTimeout(() => {
                    onComplete();
                }, 2000);
                break;

            case 'help':
                newHistory.push('');
                newHistory.push('Available Commands:');
                newHistory.push('  portfolio  - Access my professional portfolio');
                newHistory.push('  help       - Show this help message');
                newHistory.push('  about      - About Usman Ali');
                newHistory.push('  skills     - Technical capabilities');
                newHistory.push('  clear      - Clear terminal screen');
                newHistory.push('');
                setHistory(newHistory);
                break;

            case 'about':
                newHistory.push('');
                newHistory.push('Usman Ali - OSINT Analyst');
                newHistory.push('Location: Lahore, Pakistan');
                newHistory.push('Specialization: Open Source Intelligence');
                newHistory.push('Experience: Python automation & OSINT operations');
                newHistory.push('Current Mission: Orion Intelligence Operations');
                newHistory.push('Email: usman.cout@gmail.com');
                newHistory.push('');
                setHistory(newHistory);
                break;

            case 'skills':
                newHistory.push('');
                newHistory.push('Technical Skills:');
                newHistory.push('├── OSINT Framework & Tools');
                newHistory.push('├── Python (Pandas, NumPy, Scikit-learn)');
                newHistory.push('├── Web Scraping & API Integration');
                newHistory.push('├── Data Analysis & Visualization');
                newHistory.push('├── Dark Web Reconnaissance');
                newHistory.push('└── Strategic Intelligence Reports');
                newHistory.push('');
                setHistory(newHistory);
                break;

            case 'clear':
                setHistory([]);
                break;

            case '':
                setHistory(newHistory);
                break;

            default:
                newHistory.push(`Command not found: ${command}`);
                newHistory.push("Type 'help' for available commands or 'portfolio' to view my work");
                newHistory.push('');
                setHistory(newHistory);
                break;
        }

        if (cmd !== 'portfolio') {
            setInput('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    const handleTerminalClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
            <div className="container mx-auto px-4 py-8 h-screen flex flex-col">
                {/* Terminal Header */}
                <div className="flex items-center mb-4 border-b border-green-400/30 pb-4">
                    <TerminalIcon className="w-6 h-6 mr-3 text-green-400" />
                    <span className="text-lg font-semibold">Terminal - Usman Ali Portfolio</span>
                    <div className="ml-auto flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                {/* Terminal Content */}
                <div
                    ref={terminalRef}
                    className="flex-1 overflow-y-auto cursor-text"
                    onClick={handleTerminalClick}
                >
                    {/* History */}
                    {history.map((line, index) => (
                        <div key={index} className="mb-1">
                            <span className="whitespace-pre-wrap">{line}</span>
                        </div>
                    ))}

                    {/* Current Input Line */}
                    {currentLine >= welcomeText.length && (
                        <div className="flex items-center">
                            <span className="text-green-400 mr-2">osint-analyst@usman-portfolio:~$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="bg-transparent border-none outline-none text-green-400 flex-1 font-mono"
                                autoComplete="off"
                                spellCheck="false"
                            />
                            <span className={`text-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
                █
              </span>
                        </div>
                    )}
                </div>

                {/* Instructions */}
                <div className="mt-4 pt-4 border-t border-green-400/30">
                    <div className="text-center text-green-400/70 text-sm">
                        <p>Tip: Type 'portfolio' to view my work</p>
                        <p className="mt-1">Use 'help' to see available commands</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terminal;