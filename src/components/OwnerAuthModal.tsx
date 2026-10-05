import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext.tsx';
import { Lock, KeyRound, AlertCircle, X, ShieldCheck } from 'lucide-react';

interface OwnerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const OwnerAuthModal: React.FC<OwnerAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const { verifyPasscode } = usePortfolio();
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyPasscode(passcode)) {
      setError(false);
      setPasscode('');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#FFE8D1] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-xl text-[#6B6B6B] hover:text-[#222222] hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#FFE8D1] text-[#F57C00] flex items-center justify-center mb-4 mx-auto">
          <Lock className="w-6 h-6" />
        </div>

        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-[#222222]">Owner Verification</h3>
          <p className="text-xs text-[#6B6B6B] mt-1">
            This portfolio webpage is protected. Enter your private owner passcode to enable editing.
          </p>
        </div>

        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <div className="relative">
              <input
                type="password"
                required
                autoFocus
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError(false);
                }}
                placeholder="Enter owner passcode"
                className={`w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border outline-hidden transition-all ${
                  error
                    ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100'
                    : 'border-[#FFE8D1] focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20'
                }`}
              />
              <KeyRound className="w-4 h-4 text-[#6B6B6B] absolute left-3 top-3 pointer-events-none" />
            </div>

            {error && (
              <div className="flex items-center gap-1.5 text-[11px] text-red-600 mt-2 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Incorrect passcode. Only the portfolio owner can edit.</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-[#F57C00] hover:bg-[#e06f00] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
          >
            Unlock Editor
          </button>

          <div className="text-center pt-2">
            <span className="text-[11px] text-[#6B6B6B]">
              Default passcode: <code className="bg-[#FFF8F0] px-1 py-0.5 rounded border border-[#FFE8D1] font-mono text-[#F57C00]">jessa2026</code>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
