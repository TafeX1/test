import React from 'react';
import { Copy, BadgeCheck, ClipboardList, ArrowUp } from 'lucide-react';

export default function CatalogsStats() {
  const stats = [
    {
      label: 'TOTAL REGISTRIES',
      value: '42 Catalogs',
      badge: null,
      icon: Copy,
      iconBg: 'bg-[#e9f0fe]',
      iconColor: 'text-[#8c6b2d]',
    },
    {
      label: 'LIVE & PUBLISHED',
      value: '38',
      badge: {
        text: '90.5%',
        icon: ArrowUp,
        bg: 'bg-[#e8f8f0]',
        color: 'text-[#107e4d]',
      },
      icon: BadgeCheck,
      iconBg: 'bg-[#e8f8f0]',
      iconColor: 'text-[#107e4d]',
    },
    {
      label: 'PENDING APPROVAL',
      value: '4',
      badge: {
        text: 'Audit Stage',
        bg: 'bg-[#fef6e7]',
        color: 'text-[#9a5b13]',
      },
      icon: ClipboardList,
      iconBg: 'bg-[#fef9ec]',
      iconColor: 'text-[#8c501c]',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-5 py-5">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]"
          >
            {/* جهة النصوص والأرقام */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                {stat.label}
              </span>
              
              <div className="flex items-center gap-2.5">
                <span className="text-3xl font-extrabold text-[#0f1d2e] tracking-tight">
                  {stat.value}
                </span>

                {/* الشارة إذا وُجدت */}
                {stat.badge && (
                  <span
                    className={`inline-flex items-center gap-0.5 px-2 py-0.5 text-xs font-semibold rounded-md ${stat.badge.bg} ${stat.badge.color}`}
                  >
                    {stat.badge.icon && <stat.badge.icon className="w-3 h-3 stroke-[2.5]" />}
                    {stat.badge.text}
                  </span>
                )}
              </div>
            </div>

            {/* مربع الأيقونة الجانبي */}
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.iconBg}`}
            >
              <IconComponent className={`w-5 h-5 ${stat.iconColor} stroke-[2]`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}