import type { Condition } from "@repo/kali-core";

const toneByIssue: Record<Condition["potassiumIssue"], string> = {
  hyperkalemia_risk: "bg-orange-100 text-clay",
  hyperkalemia_emergency: "bg-red-100 text-red-800",
  hypokalemia_risk: "bg-sky-100 text-sky-900",
  both: "bg-amber-100 text-amber-900",
  monitor: "bg-emerald-100 text-moss-deep",
  strict_control: "bg-red-100 text-red-800",
  vitamin_k_antagonist: "bg-violet-100 text-violet-900",
};

export function ConditionLabel({ condition }: { condition: Condition }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${toneByIssue[condition.potassiumIssue]}`}
    >
      {condition.labelVi}
    </span>
  );
}
