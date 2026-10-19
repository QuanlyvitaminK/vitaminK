import Link from "next/link";
import { DisclaimerBanner } from "@/components/disclaimer-banner";

const steps = [
  {
    n: "01",
    href: "/bua-an",
    title: "Ước lượng Kali theo cách chế biến",
    body: "Ước lượng lượng Kali nạp vào cơ thể theo cách chế biến của từng nguyên liệu: luộc, hấp, xào, nướng, nấu canh hay ngâm luộc kỹ, giúp bạn dễ dàng biết được lượng Kali hao hụt hoặc giữ lại sau khi nấu.",
  },
  {
    n: "02",
    href: "/benh-ly",
    title: "Gợi ý mức an toàn theo từng bệnh lý",
    body: "Đối chiếu lượng Kali bữa ăn với mức khuyến nghị cho từng tình trạng sức khỏe (suy thận, chạy thận, suy tim hay huyết áp cao) theo các hướng dẫn y tế tin cậy, giúp bạn dễ dàng nhận biết bữa ăn đã an toàn hay chưa.",
  },
  {
    n: "03",
    href: "/thuoc",
    title: "Tra cứu thuốc cần chú ý lượng Kali",
    body: "Dễ dàng tra cứu các thuốc cần quản lý Kali thường gặp tại Việt Nam (như Coversyl, Micardis, Verospiron, Lasix...) theo tên biệt dược, hoạt chất và hàm lượng, giúp nhận biết sớm nguy cơ.",
  },
  {
    n: "04",
    href: "/benh-ly/thuoc-chong-dong",
    title: "Lưu ý thuốc chống đông kháng vitamin K",
    body: "Cảnh báo cần thiết cho người đang dùng nhóm thuốc chống đông kháng vitamin K (như Sintrom, Warfarin...) khi ăn các loại rau vừa giàu Kali vừa giàu Vitamin K (như rau dền, rau ngót, cải xoăn), giúp tránh làm giảm tác dụng chống đông và phòng ngừa nguy cơ hình thành cục máu đông.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-moss-deep sm:text-5xl">
            Tính Kali trong bữa ăn theo đúng cách bạn nấu.
          </h1>
          <p className="mt-4 max-w-xl text-lg opacity-85">
            Quản lý Kali trong bữa ăn đóng vai trò sống còn trong việc giữ nhịp tim đập ổn định,
            ngăn ngừa biến chứng loạn nhịp hoặc ngừng tim nguy hiểm do thừa/thiếu điện giải. Việc
            kiểm soát này giúp người dùng thuốc huyết áp - tim mạch tránh được nguy cơ ứ Kali cấp
            tính, đồng thời bảo đảm an toàn cho người uống thuốc chống đông kháng vitamin K
            (Sintrom, Warfarin) không bị ảnh hưởng tác dụng thuốc; mà vẫn ăn uống đủ chất, tránh
            kiêng khem quá mức gây suy kiệt thể trạng, ăn uống không ngon miệng.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/bua-an"
              className="rounded-full bg-moss px-5 py-3 text-sm font-semibold text-white"
            >
              Bắt đầu tính bữa ăn
            </Link>
            <Link
              href="/nguyen-lieu"
              className="rounded-full border border-moss px-5 py-3 text-sm font-semibold text-moss-deep"
            >
              Tra cứu nguyên liệu
            </Link>
          </div>
        </div>
        <DisclaimerBanner />
      </div>

      <ol className="mt-14 grid gap-4 sm:grid-cols-2">
        {steps.map((step) => (
          <li key={step.n}>
            <Link
              href={step.href}
              className="block h-full rounded-3xl border border-line bg-card p-5 hover:border-moss"
            >
              <span className="text-clay">{step.n}</span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl">{step.title}</h2>
              <p className="mt-2 text-sm opacity-80">{step.body}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
