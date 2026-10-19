import type { Metadata } from "next";
import { CITATIONS, type Citation } from "@repo/kali-core";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

export const metadata: Metadata = {
  title: "Nguồn và khuyến cáo",
};

const groups = [
  { id: "vi", title: "I. Tài liệu tiếng Việt" },
  { id: "en", title: "II. Tài liệu tiếng Anh" },
] as const;

function CitationItem({ citation }: { citation: Citation }) {
  return (
    <li className="rounded-2xl border border-line bg-card p-4">
      <p className="text-sm text-moss">
        {citation.org}
        {citation.year ? ` · ${citation.year}` : null}
      </p>
      <h3 className="font-semibold">{citation.title}</h3>
      <p className="text-sm opacity-80">{citation.noteVi}</p>
      {citation.url ? (
        <a href={citation.url} className="text-sm text-clay underline" target="_blank" rel="noreferrer">
          Mở nguồn
        </a>
      ) : null}
    </li>
  );
}

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-moss-deep">
        Nguồn và dữ liệu tham khảo
      </h1>
      <DisclaimerBanner />
      <p>
        Chỉ số Kali trong thực phẩm là số liệu ước tính (đã làm tròn) nhằm giúp bạn so sánh trực
        quan sự hao hụt qua từng cách chế biến, không phải kết quả phân tích phòng thí nghiệm cho
        từng bữa ăn cụ thể. Danh mục thuốc được xây dựng để người bệnh thuận tiện đối chiếu với
        vỏ hộp thuốc đang dùng tại nhà và sẽ được cập nhật định kỳ theo dữ liệu cấp phép lưu hành
        của Cục Quản lý Dược.
      </p>
      {groups.map((group) => (
        <section key={group.id}>
          <h2 className="font-[family-name:var(--font-display)] text-2xl">{group.title}</h2>
          <ol className="mt-4 space-y-4">
            {CITATIONS.filter((citation) => citation.group === group.id).map((citation) => (
              <CitationItem key={citation.id} citation={citation} />
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
