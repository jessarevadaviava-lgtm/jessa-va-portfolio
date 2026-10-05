import React from 'react';
import { NavSectionId } from '../types.ts';
import { NAV_ITEMS } from './Navbar.tsx';
import { ChevronLeft, ChevronRight, LayoutList } from 'lucide-react';

interface TabPaginationProps {
  currentTab: NavSectionId;
  onNavigate: (tabId: NavSectionId) => void;
  onSwitchToScrollView: () => void;
}

export const TabPagination: React.FC<TabPaginationProps> = ({
  currentTab,
  onNavigate,
  onSwitchToScrollView,
}) => {
  const currentIndex = NAV_ITEMS.findIndex((item) => item.id === currentTab);
  const prevTab = currentIndex > 0 ? NAV_ITEMS[currentIndex - 1] : null;
  const nextTab = currentIndex < NAV_ITEMS.length - 1 ? NAV_ITEMS[currentIndex + 1] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-[#FFE8D1]/80">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Previous Button */}
        <div>
          {prevTab ? (
            <button
              type="button"
              onClick={() => onNavigate(prevTab.id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#FFE8D1] bg-white text-xs font-semibold text-[#222222] hover:bg-[#FFF8F0] hover:border-[#F57C00]/40 transition-all active:scale-95 shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4 text-[#F57C00]" />
              <span>Previous: {prevTab.label}</span>
            </button>
          ) : (
            <div className="text-xs text-[#6B6B6B]/60 italic">Beginning of portfolio</div>
          )}
        </div>

        {/* Tab Indicator & Switch view */}
        <div className="flex items-center gap-3 text-xs text-[#6B6B6B]">
          <span className="font-semibold text-[#222222] tabular-nums">
            Tab {currentIndex + 1} of {NAV_ITEMS.length}
          </span>
          <span>·</span>
          <button
            type="button"
            onClick={onSwitchToScrollView}
            className="inline-flex items-center gap-1 text-[#F57C00] hover:underline font-medium"
          >
            <LayoutList className="w-3.5 h-3.5" />
            <span>Switch to Full Scroll View</span>
          </button>
        </div>

        {/* Next Button */}
        <div>
          {nextTab ? (
            <button
              type="button"
              onClick={() => onNavigate(nextTab.id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F57C00] text-white text-xs font-semibold hover:bg-[#e06f00] transition-all active:scale-95 shadow-xs shadow-[#F57C00]/20"
            >
              <span>Next: {nextTab.label}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#222222] text-white text-xs font-semibold hover:bg-black transition-all active:scale-95"
            >
              <span>Back to Home</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
