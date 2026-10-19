import Link from "next/link";

const mealLinks = [
  { href: "/bua-an", label: "Tính Kali bữa ăn" },
  { href: "/nguyen-lieu", label: "Theo nguyên liệu" },
  { href: "/mon-an", label: "Theo món ăn" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-line bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl text-moss-deep">
          Quản lý Kali trong bữa ăn
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-lg font-semibold text-moss-deep">
          <Link href="/benh-ly" className="hover:text-clay">
            Bệnh lý
          </Link>
          <Link href="/thuoc" className="hover:text-clay">
            Thuốc
          </Link>
          <div className="group relative">
            <button type="button" className="hover:text-clay">
              Quản lý Kali trong bữa ăn ▾
            </button>
            <ul className="absolute right-0 top-full hidden min-w-56 rounded-2xl border border-line bg-card p-2 text-base shadow-lg group-focus-within:block group-hover:block">
              {mealLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-2 hover:bg-paper hover:text-clay"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
