import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionEntry {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: AccordionEntry[];
  allowMultiple?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowMultiple = true,
}) => {
  const getKey = (item: AccordionEntry) => item.id || item.question;
  const [openKeys, setOpenKeys] = useState<string[]>(() =>
    items.length > 0 ? [getKey(items[0])] : []
  );

  const toggleKey = (key: string) => {
    setOpenKeys((prev) => {
      const exists = prev.includes(key);
      if (allowMultiple) {
        return exists ? prev.filter((k) => k !== key) : [...prev, key];
      }
      return exists ? [] : [key];
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const itemKey = getKey(item);
        const isOpen = openKeys.includes(itemKey);
        const panelId = `faq-panel-${item.id || idx}`;
        const buttonId = `faq-btn-${item.id || idx}`;

        return (
          <div
            key={itemKey}
            className="rounded-[12px] border border-black/8 bg-white shadow-[0_2px_12px_rgba(33,50,69,0.05)] overflow-hidden transition-colors"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleKey(itemKey)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-[#F5F9FE]/60 transition-colors"
            >
              <div>
                {item.category && (
                  <span className="block text-xs font-semibold text-[#025EC1] mb-1">
                    {item.category}
                  </span>
                )}
                <span className="text-base sm:text-[17px] font-bold text-[#213245]">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#025EC1] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-6 pb-5 pt-1 text-[15px] leading-relaxed text-[#59616B] border-t border-black/5"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
