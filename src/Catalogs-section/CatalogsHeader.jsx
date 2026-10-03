import React from 'react'
import { Download, Layers, Plus } from 'lucide-react';
export default function CatalogsHeader() {
  return (
    <>
    
        <header className="w-full bg-[#f8fafc] px-8 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        
        {/* الجانب الأيسر: العناوين والـ Badge */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight text-[#0f1d2e] leading-tight">
              Catalogs<br />Management
            </h1>

            {/* Sovereign Suite Badge */}
            <div className="bg-[#1f2937] text-[#e0b868] text-[11px] font-medium px-3 py-1.5 rounded-full leading-tight select-none self-center">
              <div>Enterprise</div>
              <div className="text-slate-300">Sovereign Suite</div>
            </div>
          </div>

          <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
            Organize and publish bilingual asset catalogs, commercial distributions, and master portfolio specs across regional operating hubs.
          </p>
        </div>

        {/* الجانب الأيمن: أزرار التحكم والعمليات */}
        <div className="flex flex-wrap items-center gap-3">
          {/* زر تصدير الفهرس */}
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-300 shadow-sm transition-colors duration-150 cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Export Master Index</span>
          </button>

          {/* زر العمليات الجماعية */}
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-300 shadow-sm transition-colors duration-150 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-slate-600" />
            <span>Batch Actions</span>
          </button>

          {/* زر إضافة كتالوج جديد */}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#d4a359] hover:bg-[#c6954b] text-[#141b24] text-sm font-semibold rounded-xl shadow-sm transition-colors duration-150 cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add Catalog</span>
          </button>
        </div>

      </div>
    </header>
    
    
    
    </>
  )
}
