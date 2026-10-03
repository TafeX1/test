import React, { useState } from 'react';

export default function CatalogsPagination() {
  // حالة بسيطة لتوضيح التفاعل، يمكنك ربطها بالبيانات الحقيقية
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
      {/* الجانب الأيسر: إحصائية العناصر المعروضة */}
      <div className="text-sm text-slate-500">
        Showing <span className="font-semibold text-slate-700">1</span> to{' '}
        <span className="font-semibold text-slate-700">6</span> of{' '}
        <span className="font-semibold text-slate-700">42</span> catalogs
      </div>

      {/* الجانب الأيمن: أزرار وأرقام التصفح */}
      <div className="flex items-center gap-2 select-none text-sm font-medium">
        {/* زر Previous */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-3 py-1.5 rounded-lg border transition-colors ${
            currentPage === 1
              ? 'border-slate-200 text-slate-400 bg-white cursor-not-allowed'
              : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50 cursor-pointer'
          }`}
        >
          &lt; Previous
        </button>

        {/* أرقام الصفحات */}
        <div className="flex items-center gap-2">
          {/* الصفحة 1 */}
          <button
            type="button"
            onClick={() => setCurrentPage(1)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all cursor-pointer ${
              currentPage === 1
                ? 'bg-[#d5a557] text-[#141b24] shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            1
          </button>

          {/* الصفحة 2 */}
          <button
            type="button"
            onClick={() => setCurrentPage(2)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all cursor-pointer ${
              currentPage === 2
                ? 'bg-[#d5a557] text-[#141b24] shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            2
          </button>

          {/* الصفحة 3 */}
          <button
            type="button"
            onClick={() => setCurrentPage(3)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all cursor-pointer ${
              currentPage === 3
                ? 'bg-[#d5a557] text-[#141b24] shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            3
          </button>

          {/* علامة النقاط ... */}
          <span className="w-4 flex items-center justify-center text-slate-400 tracking-widest">
            ...
          </span>

          {/* الصفحة 7 */}
          <button
            type="button"
            onClick={() => setCurrentPage(7)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all cursor-pointer ${
              currentPage === 7
                ? 'bg-[#d5a557] text-[#141b24] shadow-sm'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            7
          </button>
        </div>

        {/* زر Next */}
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className={`px-3 py-1.5 rounded-lg border transition-colors ${
            currentPage === totalPages
              ? 'border-slate-200 text-slate-400 bg-white cursor-not-allowed'
              : 'border-slate-200 text-slate-700 bg-white hover:bg-slate-50 cursor-pointer'
          }`}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}