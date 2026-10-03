import React, { useState } from 'react';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';

export default function CatalogsFilter() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] p-4 flex flex-wrap items-center justify-between gap-4">
      {/* الجانب الأيسر: حقل البحث والقوائم المنسدلة */}
      <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
        {/* حقل البحث بالفلتر */}
        <div className="relative flex items-center min-w-[240px] flex-1 sm:flex-initial">
          <Filter className="absolute left-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Filter by title, reference..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-[#f8fafc] border border-slate-200/80 rounded-xl placeholder:text-slate-400 text-slate-700 outline-none focus:border-slate-400 transition-colors"
          />
        </div>

        {/* قائمة All Categories */}
        <div className="relative">
          <select className="appearance-none bg-[#f8fafc] border border-slate-200/80 rounded-xl pl-3.5 pr-8 py-2 text-sm text-slate-700 outline-none focus:border-slate-400 transition-colors cursor-pointer">
            <option>All Categories</option>
            <option>Commercial</option>
            <option>Residential</option>
            <option>Industrial</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>

        {/* قائمة All Statuses */}
        <div className="relative">
          <select className="appearance-none bg-[#f8fafc] border border-slate-200/80 rounded-xl pl-3.5 pr-8 py-2 text-sm text-slate-700 outline-none focus:border-slate-400 transition-colors cursor-pointer">
            <option>All Statuses</option>
            <option>Live & Published</option>
            <option>Pending Approval</option>
            <option>Draft</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* الجانب الأيمن: عدد النتائج وأزرار التبديل */}
      <div className="flex items-center gap-4 text-sm text-slate-500 self-center">
        <span className="font-medium select-none">
          Viewing 1-6 of 42
        </span>

        {/* أزرار عرض الشبكة / القائمة */}
        <div className="flex items-center border border-slate-200 rounded-xl p-1 bg-[#f8fafc]">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-400 hover:text-slate-600'
            }`}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              viewMode === 'list'
                ? 'bg-white text-slate-800 shadow-xs'
                : 'text-slate-400 hover:text-slate-600'
            }`}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}