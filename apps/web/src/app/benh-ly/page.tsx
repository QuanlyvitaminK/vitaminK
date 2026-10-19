import type { Metadata } from "next";
import Link from "next/link";
import { CONDITIONS } from "@repo/kali-core";
import { ConditionLabel } from "@/components/condition-label";

export const metadata: Metadata = {
  title: "Bệnh lý và Kali",
};

export default function ConditionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
        Bệnh cần chú ý liều Kali
      </h1>
      <p className="mt-3 max-w-2xl opacity-80">
        Tóm tắt theo KDIGO, AHA/ACC/HFSA, ESC, WHO và hướng dẫn Bộ Y tế / hội chuyên khoa Việt
        Nam.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {CONDITIONS.map((condition) => (
          <li key={condition.id}>
            <Link
              href={`/benh-ly/${condition.id}`}
              className="block h-full rounded-3xl border border-line bg-card p-5 hover:border-moss"
            >
              <ConditionLabel condition={condition} />
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl">
                {condition.nameVi}
              </h2>
              <p className="mt-2 text-sm opacity-80">{condition.summaryVi}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
