import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-moss-deep text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm leading-6 sm:flex-row sm:justify-between">
        <p className="max-w-xl">
          Công cụ hỗ trợ tham khảo dinh dưỡng, không thay thế chẩn đoán hay đơn thuốc của bác
          sĩ. Hàm lượng Kali được ước tính khoa học từ Bảng thành phần thực phẩm Việt Nam và tài
          liệu dinh dưỡng quốc tế. Vui lòng đối chiếu với hộp thuốc đang uống và tham vấn bác sĩ
          điều trị để đảm bảo an toàn.
        </p>
        <Link href="/nguon" className="underline decoration-paper/40 underline-offset-4">
          Nguồn và khuyến cáo
        </Link>
      </div>
    </footer>
  );
}
