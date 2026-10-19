import type { Citation } from "./types";

export const CITATIONS: Citation[] = [
  {
    id: "vndn-fct",
    group: "vi",
    title: "Bảng thành phần thực phẩm Việt Nam",
    org: "Viện Dinh dưỡng — Bộ Y tế",
    noteVi:
      "Hàm lượng Kali tham chiếu trong các nguyên liệu và món ăn quen thuộc tại Việt Nam.",
  },
  {
    id: "duoc-thu-qg",
    group: "vi",
    title: "Dược thư Quốc gia Việt Nam",
    org: "Bộ Y tế",
    noteVi:
      "Thông tin biệt dược, hoạt chất, cơ chế giữ/thải Kali và tương tác thuốc tim mạch - huyết áp.",
  },
  {
    id: "vnha-af",
    group: "vi",
    title: "Khuyến cáo chẩn đoán và điều trị rung nhĩ / bệnh van tim",
    org: "Hội Tim mạch học Việt Nam (VNHA)",
    noteVi:
      "Nguyên tắc quản lý chế độ ăn ổn định Vitamin K, tránh dao động chỉ số đông máu (INR) khi dùng Sintrom, Warfarin.",
  },
  {
    id: "usda-fdc",
    group: "en",
    title: "FoodData Central",
    org: "U.S. Department of Agriculture",
    year: "2024",
    url: "https://fdc.nal.usda.gov/",
    noteVi:
      "Cơ sở dữ liệu quốc tế về hàm lượng dinh dưỡng và Kali trong nguyên liệu thô.",
  },
  {
    id: "usda-nrf",
    group: "en",
    title: "USDA Table of Nutrient Retention Factors, Release 6",
    org: "USDA",
    url: "https://www.ars.usda.gov/northeast-area/beltsville-md-bhnrc/beltsville-human-nutrition-research-center/methods-and-application-of-food-composition-laboratory/mafcl-site-pages/nutrient-retention-information/",
    noteVi: "Cơ sở khoa học về mức hao hụt Kali theo từng cách nấu.",
  },
  {
    id: "kdigo-ckd-2024",
    group: "en",
    title: "KDIGO 2024 Clinical Practice Guideline for CKD",
    org: "KDIGO",
    year: "2024",
    url: "https://kdigo.org/guidelines/ckd-evaluation-and-management/",
    noteVi:
      "Khuyến cáo y khoa quốc tế về ngưỡng an toàn Kali cho người bệnh thận mạn.",
  },
  {
    id: "chest-antithrombotic",
    group: "en",
    title: "CHEST Guideline on Antithrombotic Therapy",
    org: "American College of Chest Physicians",
    noteVi:
      "Khuyến cáo quốc tế về kiểm soát tương tác rau củ chứa Vitamin K đối với liệu pháp kháng vitamin K.",
  },
  {
    id: "kdigo-ckm-2025",
    title: "KDIGO guideline on chronic kidney disease–mineral and related electrolyte care (hyperkalemia practice)",
    org: "KDIGO / Kidney International summaries",
    year: "2024–2025",
    noteVi: "Nguyên tắc xử trí tăng Kali máu, thuốc giữ Kali và nhựa gắn Kali.",
  },
  {
    id: "aha-hf-2022",
    title: "AHA/ACC/HFSA Guideline for the Management of Heart Failure",
    org: "American Heart Association / ACC / HFSA",
    year: "2022",
    url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063",
    noteVi: "ACEI/ARB/ARNI/MRA và theo dõi Kali, chức năng thận.",
  },
  {
    id: "esc-htn-2024",
    title: "ESC Guidelines for the management of elevated blood pressure and hypertension",
    org: "European Society of Cardiology",
    year: "2024",
    noteVi: "Lợi tiểu, ức chế trục RAAS và rối loạn Kali.",
  },
  {
    id: "who-potassium",
    title: "Guideline: Potassium intake for adults and children",
    org: "World Health Organization",
    year: "2012",
    url: "https://www.who.int/publications/i/item/9789241504829",
    noteVi: "Khuyến cáo tăng Kali ăn uống ở dân số chung (≥90 mmol/ngày, ~3510 mg) khi không có chống chỉ định.",
  },
  {
    id: "bytvn-ckd",
    title: "Hướng dẫn chẩn đoán và điều trị bệnh thận mạn",
    org: "Bộ Y tế Việt Nam",
    noteVi:
      "Khung lâm sàng CKD tại Việt Nam; chế độ ăn và thuốc phải theo bác sĩ điều trị.",
  },
  {
    id: "bytvn-thn",
    title: "Hướng dẫn chẩn đoán và điều trị tăng huyết áp",
    org: "Bộ Y tế / Hội Tim mạch học Việt Nam (VNHA)",
    noteVi: "Thuốc hạ áp phổ biến tại VN và theo dõi điện giải.",
  },
  {
    id: "dav-vn",
    title: "Cơ sở dữ liệu thuốc được cấp số đăng ký — Cục Quản lý Dược",
    org: "Cục Quản lý Dược (DAV), Bộ Y tế Việt Nam",
    url: "https://dav.gov.vn/",
    noteVi:
      "Đối chiếu biệt dược đang lưu hành; số đăng ký có thể đổi theo thời gian.",
  },
  {
    id: "nni-renal-k",
    title: "Leaching methods to reduce potassium in tubers (renal diet literature)",
    org: "Journal of Renal Nutrition / dietetic practice reviews",
    year: "2008–2019",
    noteVi: "Ngâm và luộc hai lần giảm Kali củ; hiệu quả phụ thuộc cắt lát, thời gian, tỉ lệ nước.",
  },
];

export function getCitation(id: string): Citation | undefined {
  return CITATIONS.find((item) => item.id === id);
}
