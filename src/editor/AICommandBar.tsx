/**
 * AI Command Bar
 *
 * A floating command bar (Cmd+K style) for AI editing commands.
 * Users type natural language and AI modifies the website.
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AICommandBarProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (command: string) => void;
  isProcessing: boolean;
  lastExplanation?: string;
  status: 'idle' | 'processing' | 'success' | 'error';
};

const suggestions = [
  'Make it more premium',
  'Make it darker',
  'Use luxury colors',
  'Add more whitespace',
  'Change font to serif',
  'Remove the FAQ section',
  'Make it look more modern',
  'Add a pricing section',
  'Rewrite the hero headline',
  'Make it more colorful',
];

export default function AICommandBar({
  isOpen,
  onClose,
  onSubmit,
  isProcessing,
  lastExplanation,
  status,
}: AICommandBarProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setValue('');
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && !isProcessing) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (!isProcessing) {
      onSubmit(suggestion);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Command Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-1/2 top-[20%] z-50 w-full max-w-2xl -translate-x-1/2"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]/95 shadow-2xl backdrop-blur-xl">
              {/* Input */}
              <form onSubmit={handleSubmit} className="flex items-center gap-3 px-5 py-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
                  <span className="text-xs font-bold text-white">AI</span>
                </div>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Tell AI what to change... (e.g., 'Make it more premium')"
                  className="flex-1 bg-transparent text-white outline-none placeholder:text-white/30"
                  disabled={isProcessing}
                />
                {isProcessing && (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-purple-400 border-t-transparent" />
                )}
                {!isProcessing && value && (
                  <button
                    type="submit"
                    className="rounded-lg bg-purple-500/20 px-3 py-1.5 text-xs font-medium text-purple-300 transition hover:bg-purple-500/30"
                  >
                    Apply
                  </button>
                )}
              </form>

              {/* Status message */}
              {status === 'success' && lastExplanation && (
                <div className="border-t border-white/5 px-5 py-3">
                  <p className="text-xs text-green-400">✓ {lastExplanation}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="border-t border-white/5 px-5 py-3">
                  <p className="text-xs text-red-400">✗ Command failed. Try a different phrasing.</p>
                </div>
              )}

              {/* Suggestions */}
              {!isProcessing && !value && status !== 'success' && (
                <div className="border-t border-white/5 px-5 py-3">
                  <p className="mb-2.5 text-[10px] font-medium uppercase tracking-widest text-white/30">
                    Suggestions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 transition hover:border-white/15 hover:bg-white/[0.06] hover:text-white/80"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/5 px-5 py-2.5">
                <span className="text-[10px] text-white/20">
                  Press Enter to apply • Esc to close
                </span>
                <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-white/30">
                  ⌘K
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
