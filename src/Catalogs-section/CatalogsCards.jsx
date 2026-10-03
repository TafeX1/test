import React, { useState } from 'react';
import { Pencil, Trash2, Layers, X } from 'lucide-react';

// البيانات الأساسية
const initialCatalogsData = [
  {
    id: '1',
    category: 'Energy & Logistics',
    status: 'Published',
    ref: 'REF-CAT-2025-01',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    titleEn: 'MENA Logistics Master Catalog',
    titleAr: 'دليل الخدمات اللوجستية الرئيسي للشرق الأوسط',
    description: 'Master portfolio technical specifications, LEED Gold certifications, and regional...',
    countText: '18 Projects',
    version: 'v2.4',
    updatedAt: 'Updated 2d ago',
  },
  {
    id: '2',
    category: 'Industrial Infrastructure',
    status: 'Published',
    ref: 'REF-CAT-2025-04',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    titleEn: 'Apex Industrial Infrastructure',
    titleAr: 'كتالوج البنية التحتية الصناعية المتقدمة',
    description: 'Desalination plants, high-output fabrication centers, and sovereign heavy...',
    countText: '12 Assets',
    version: 'v3.1',
    updatedAt: 'Updated 5d ago',
  },
  {
    id: '3',
    category: 'Commercial Portfolio',
    status: 'Published',
    ref: 'REF-CAT-2025-08',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    titleEn: 'Sovereign Commercial Assets',
    titleAr: 'محفظة الأصول التجارية السيادية',
    description: 'Grade-A financial centers, prime sovereign wealth headquarters, and...',
    countText: '26 Towers',
    version: 'v4.0',
    updatedAt: 'Updated 1w ago',
  },
  {
    id: '4',
    category: 'Hospitality Assets',
    status: 'Draft',
    ref: 'REF-CAT-2025-11',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    titleEn: 'Red Sea Coastal Developments',
    titleAr: 'مشاريع الساحل والتطوير العقاري الفاخر',
    description: 'Regenerative luxury hospitality retreats, ultra-prime marina berths, and private...',
    countText: '9 Resorts',
    version: 'v1.2',
    updatedAt: 'Updated 3h ago',
  },
  {
    id: '5',
    category: 'Energy & Logistics',
    status: 'Published',
    ref: 'REF-CAT-2025-15',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    titleEn: 'Global Clean Energy Grid 2025',
    titleAr: 'كتالوج شبكات الطاقة المتجددة العالمية',
    description: 'Utility-scale photovoltaic installations, multi-gigawatt battery storage terminals,',
    countText: '34 Facilities',
    version: 'v5.3',
    updatedAt: 'Updated 4d ago',
  },
  {
    id: '6',
    category: 'Industrial Infrastructure',
    status: 'Published',
    ref: 'REF-CAT-2025-22',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    titleEn: 'Multimodal Air Cargo Hubs',
    titleAr: 'موانئ ومراكز الشحن الجوي متعددة الوسائط',
    description: 'Automated cold-chain pharmaceutical facilities, rapid runway access bays, and',
    countText: '7 Hubs',
    version: 'v2.0',
    updatedAt: 'Updated 6d ago',
  },
];

export default function CatalogsGrid() {
  // حفظ البيانات في State عشان نقدر نعدل ونمسح
  const [catalogs, setCatalogs] = useState(initialCatalogsData);
  
  // States الخاصة بالـ Pop-up (Modal)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // دالة الحذف
  const handleDelete = (id) => {
    // تصفية المصفوفة وإزالة العنصر اللي الـ ID بتاعه بيساوي الـ ID المبعوث
    setCatalogs(catalogs.filter(item => item.id !== id));
  };

  // دالة فتح نافذة التعديل
  const openEditModal = (item) => {
    setEditingItem({ ...item }); // بناخد نسخة من العنصر عشان نعدل عليها
    setIsModalOpen(true);
  };

  // دالة حفظ التعديلات
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // تحديث العنصر في المصفوفة الأصلية
    setCatalogs(catalogs.map(item => 
      item.id === editingItem.id ? editingItem : item
    ));
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {catalogs.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            {/* قسم الصورة العلوية */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.titleEn}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

              <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-[#1e293b]/85 backdrop-blur-md text-[11px] font-medium text-slate-200 shadow-xs">
                  {item.category}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium backdrop-blur-md shadow-xs ${
                    item.status === 'Published'
                      ? 'bg-[#107e4d]/85 text-emerald-100'
                      : 'bg-[#b45309]/85 text-amber-100'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.status === 'Published' ? 'bg-emerald-300' : 'bg-amber-300'
                    }`}
                  />
                  {item.status}
                </span>
              </div>

              <div className="absolute bottom-3 left-3">
                <span className="text-[11px] font-mono tracking-wider text-slate-300 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                  {item.ref}
                </span>
              </div>
            </div>

            {}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#0f172a] leading-snug line-clamp-1">
                  {item.titleEn}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-1" dir="rtl">
                  {item.titleAr}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 pt-1">
                  {item.description}
                </p>
              </div>

              {}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-4">
                  <span className="inline-flex items-center gap-1 font-medium text-slate-600">
                    <Layers className="w-3.5 h-3.5 text-slate-400 rotate-45" />
                    {item.countText}
                  </span>
                  <span className="font-mono text-slate-400">{item.version}</span>
                  <span>{item.updatedAt}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {}
                  <button
                    type="button"
                    onClick={() => openEditModal(item)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 active:scale-95 transition-all cursor-pointer shadow-xs"
                  >
                    <Pencil className="w-3.5 h-3.5 text-slate-500" />
                    <span>Edit</span>
                  </button>

                  {}
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-rose-100 text-xs font-semibold text-rose-600 bg-white hover:bg-rose-50/50 active:scale-95 transition-all cursor-pointer shadow-xs"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {}
      {isModalOpen && editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* عنوان الـ Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-800">Edit Catalog</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {}
            <form onSubmit={handleSaveChanges} className="p-6 space-y-4">
              <div className="space-y-4">
                {}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">English Title</label>
                  <input
                    type="text"
                    value={editingItem.titleEn}
                    onChange={(e) => setEditingItem({ ...editingItem, titleEn: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-slate-400"
                    required
                  />
                </div>

                {}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Arabic Title</label>
                  <input
                    type="text"
                    dir="rtl"
                    value={editingItem.titleAr}
                    onChange={(e) => setEditingItem({ ...editingItem, titleAr: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-slate-400 font-arabic"
                    required
                  />
                </div>

                {}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Description</label>
                  <textarea
                    rows="3"
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-slate-400 resize-none"
                    required
                  />
                </div>

                {}
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Image URL</label>
                  <input
                    type="url"
                    value={editingItem.image}
                    onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-slate-400"
                    required
                  />
                </div>
              </div>

              {}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-[#d4a359] text-[#141b24] hover:bg-[#c6954b] rounded-xl shadow-sm transition-colors cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}