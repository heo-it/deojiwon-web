import { Lock, BarChart2, Wrench, ShieldCheck, Move } from "lucide-react";

const benefits = [
  { icon: <Lock className="w-8 h-8" />, label: "보안강화" },
  { icon: <BarChart2 className="w-8 h-8" />, label: "비용절감" },
  { icon: <Wrench className="w-8 h-8" />, label: "편리한 관리" },
  { icon: <ShieldCheck className="w-8 h-8" />, label: "안정성" },
  { icon: <Move className="w-8 h-8" />, label: "확장성" },
];

export default function ServiceBenefit() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="grid grid-cols-3 gap-6 items-center">
        <BenefitItem icon={benefits[0].icon} label={benefits[0].label} />
        <BenefitItem icon={benefits[1].icon} label={benefits[1].label} />
        <BenefitItem icon={benefits[2].icon} label={benefits[2].label} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <BenefitItem icon={benefits[3].icon} label={benefits[3].label} />
        <BenefitItem icon={benefits[4].icon} label={benefits[4].label} />
      </div>
      <div className="mt-4 text-lg font-semibold text-center">
        <span>신규 구축 / </span>
        <span>컨설팅</span>
        <span> / 이설 / 증설</span>
      </div>
    </div>
  );
}

function BenefitItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
