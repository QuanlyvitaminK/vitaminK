import Link from "next/link";

export function VitaminKNotice({ names }: { names: string[] }) {
  return (
    <aside className="rounded-2xl border border-violet-300 bg-violet-50 px-4 py-3 text-sm text-violet-950">
      <strong>Lưu ý thuốc chống đông (Sintrom, Warfarin):</strong> {names.join(", ")} vừa giàu
      Kali vừa giàu Vitamin K. Luộc chắt nước chỉ giảm Kali, không giảm Vitamin K — nên ăn lượng
      đều đặn mỗi ngày.{" "}
      <Link href="/benh-ly/thuoc-chong-dong" className="underline">
        Xem chi tiết
      </Link>
    </aside>
  );
}
