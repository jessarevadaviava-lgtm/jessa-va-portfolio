import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext.tsx';
import { EditModal } from './EditModal.tsx';
import { OwnerAuthModal } from './OwnerAuthModal.tsx';
import { Edit3, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const EditToolbar: React.FC = () => {
  const { isOwnerAuthenticated, lockEditor, hasCustomEdits } = usePortfolio();
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Listen for secret keyboard shortcut: Ctrl+Shift+E or Cmd+Shift+E
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
        e.preventDefault();
        if (isOwnerAuthenticated) {
          setIsEditorOpen(true);
        } else {
          setIsAuthOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOwnerAuthenticated]);

  // Check URL hash #owner or query param ?owner=true
  useEffect(() => {
    if (window.location.hash === '#owner' || window.location.search.includes('owner=true')) {
      if (!isOwnerAuthenticated) {
        setIsAuthOpen(true);
      }
    }
  }, [isOwnerAuthenticated]);

  // Listen for custom trigger from footer
  useEffect(() => {
    const handleOpenOwnerAuth = () => {
      if (isOwnerAuthenticated) {
        setIsEditorOpen(true);
      } else {
        setIsAuthOpen(true);
      }
    };
    window.addEventListener('open-owner-auth', handleOpenOwnerAuth);
    return () => window.removeEventListener('open-owner-auth', handleOpenOwnerAuth);
  }, [isOwnerAuthenticated]);

  return (
    <>
      {/* 
        CRITICAL PRIVACY & SECURITY:
        The toolbar is ONLY visible when the owner is authenticated!
        Regular visitors and clients will NEVER see this toolbar.
      */}
      {isOwnerAuthenticated && (
        <aside
          aria-label="Owner Protected Controls"
          className="fixed bottom-5 right-5 z-40 animate-in slide-in-from-bottom-3 duration-200"
        >
          <div className="bg-[#222222] text-white rounded-2xl border border-white/20 shadow-2xl p-2.5 flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Owner Verified</span>
            </div>

            <button
              type="button"
              onClick={() => setIsEditorOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F57C00] text-white text-xs font-semibold hover:bg-[#e06f00] shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Portfolio</span>
            </button>

            <button
              type="button"
              onClick={() => {
                lockEditor();
                setIsEditorOpen(false);
              }}
              title="Lock editor and sign out"
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Lock className="w-4 h-4" />
            </button>
          </div>
        </aside>
      )}

      {/* Owner Passcode Auth Modal */}
      <OwnerAuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSuccess={() => {
          setIsAuthOpen(false);
          setIsEditorOpen(true);
        }}
      />

      {/* Full Editor Modal (Only accessible by owner) */}
      {isOwnerAuthenticated && (
        <EditModal isOpen={isEditorOpen} onClose={() => setIsEditorOpen(false)} />
      )}
    </>
  );
};
