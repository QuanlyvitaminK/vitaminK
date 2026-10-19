import type { Condition } from "./types";

export const CONDITIONS: Condition[] = [
  {
    id: "benh-than-man",
    nameVi: "Bệnh thận mạn (CKD)",
    potassiumIssue: "hyperkalemia_risk",
    labelVi: "Nguy cơ tăng Kali",
    summaryVi:
      "Theo khuyến cáo KDIGO: không cần ăn kiêng quá mức nếu nồng độ Kali máu vẫn ở mức an toàn. Người bệnh chỉ cần quản lý hàm lượng Kali khi chức năng thận suy giảm nặng, xét nghiệm thấy tăng Kali máu hoặc đang dùng các thuốc làm giữ lại Kali trong cơ thể.",
    dietGuidanceVi: [
      "Ưu tiên theo dõi Kali máu, chứ không cắt hết thực phẩm giàu Kali nếu xét nghiệm ổn.",
      "Khi bác sĩ yêu cầu hạn chế: chọn luộc chắt nước, hạn chế nước dừa, chuối, bơ, khoai nướng.",
      "Ngâm + luộc hai lần với củ (khoai tây) có thể giảm Kali còn lại.",
      "Phối hợp với thuốc ACEI/ARB/ARNI/MRA — không tự ngừng thuốc.",
    ],
    relatedMedicineIds: [
      "enalapril-10",
      "losartan-50",
      "spironolactone-25",
      "entresto-100",
      "furosemide-40",
      "kalimate",
    ],
    sourceIds: ["kdigo-ckd-2024", "bytvn-ckd"],
  },
  {
    id: "tang-kali-mau",
    nameVi: "Tăng Kali máu (Hyperkalemia)",
    potassiumIssue: "hyperkalemia_emergency",
    labelVi: "Nguy cơ khẩn cấp",
    summaryVi:
      "Tình trạng lượng Kali trong máu tăng quá cao làm rối loạn nhịp tim và có thể khiến tim ngừng đập đột ngột. Đây là trường hợp cần bác sĩ can thiệp y tế khẩn cấp; về ăn uống hàng ngày, người bệnh cần tuyệt đối tránh ăn sống, xào hay uống nước canh đậm đặc mà bắt buộc phải luộc kỹ chắt bỏ nước.",
    dietGuidanceVi: [
      "Tạm thời hạn chế thực phẩm và đồ uống giàu Kali theo hướng dẫn điều trị.",
      "Tránh muối thay thế chứa Kali clorua nếu không được kê.",
      "Không tự uống viên Kali (Slow-K, Kaleorid, Panangin) khi đang tăng Kali.",
    ],
    relatedMedicineIds: [
      "spironolactone-25",
      "enalapril-10",
      "cotrimoxazole",
      "kalimate",
      "kcl-600",
    ],
    sourceIds: ["kdigo-ckm-2025", "kdigo-ckd-2024"],
  },
  {
    id: "ha-kali-mau",
    nameVi: "Hạ Kali máu (Hypokalemia)",
    potassiumIssue: "hypokalemia_risk",
    labelVi: "Nguy cơ hạ Kali",
    summaryVi:
      "Thường xuất hiện khi dùng thuốc lợi tiểu thải muối (như Furosemide), tiêu chảy kéo dài hoặc mất nước; dễ gây mệt mỏi, chuột rút và loạn nhịp tim. Người bệnh nên ưu tiên cách chế biến giữ lại trọn vẹn Kali (như hấp, ăn tươi, nấu canh húp cả nước) để bù đắp vi chất tự nhiên.",
    dietGuidanceVi: [
      "Tăng thực phẩm giàu Kali (chuối, khoai, rau xanh, nước dừa) khi bác sĩ cho phép.",
      "Bù Kali bằng thuốc chỉ theo toa — không tự truyền KCl.",
      "Kiểm tra magie: thiếu magie làm khó giữ Kali.",
    ],
    relatedMedicineIds: ["furosemide-40", "hctz-25", "indapamide-15", "kcl-600", "digoxin-025"],
    sourceIds: ["esc-htn-2024", "aha-hf-2022"],
  },
  {
    id: "suy-tim",
    nameVi: "Suy tim",
    potassiumIssue: "both",
    labelVi: "Cả tăng và hạ Kali",
    summaryVi:
      "Các nhóm thuốc nền tảng bảo vệ tim (ức chế men chuyển, chẹn thụ thể, kháng aldosterone) dễ làm ứ giữ Kali, trong khi thuốc lợi tiểu lại làm mất Kali qua nước tiểu. Cần đối chiếu vỏ hộp thuốc thực tế để chọn cách chế biến tăng hoặc giảm Kali cho phù hợp.",
    dietGuidanceVi: [
      "Không tự ý ăn kiêng Kali cực đoan: có thể làm hạ Kali khi đang lợi tiểu.",
      "Theo dõi Kali khi chỉnh liều Entresto, spironolactone, enalapril.",
      "Hạn chế muối; cẩn thận muối 'giảm natri' có Kali.",
    ],
    relatedMedicineIds: [
      "entresto-100",
      "spironolactone-25",
      "enalapril-10",
      "furosemide-40",
      "digoxin-025",
    ],
    sourceIds: ["aha-hf-2022", "bytvn-thn"],
  },
  {
    id: "tang-huyet-ap",
    nameVi: "Tăng huyết áp",
    potassiumIssue: "monitor",
    labelVi: "Theo dõi điện giải",
    summaryVi:
      "Người tăng huyết áp có chức năng thận bình thường được khuyến khích ăn nhiều Kali tự nhiên (chế biến hấp, ăn tươi) để hỗ trợ giãn mạch và hạ áp. Tuy nhiên, cần thận trọng và chuyển sang luộc bỏ nước nếu đã có tổn thương thận hoặc đang dùng nhóm thuốc giữ Kali.",
    dietGuidanceVi: [
      "Người huyết áp, thận bình thường: rau quả giàu Kali thường có lợi (DASH).",
      "Nếu đang ACEI/ARB + spironolactone: không tự bổ sung Kali.",
      "Indapamide/HCTZ có thể làm hạ Kali — theo dõi.",
    ],
    relatedMedicineIds: [
      "perindopril-5",
      "telmisartan-40",
      "amlodipine-note",
      "losartan-50",
      "indapamide-15",
      "hctz-25",
    ],
    sourceIds: ["who-potassium", "esc-htn-2024", "bytvn-thn"],
  },
  {
    id: "dai-thao-duong-than",
    nameVi: "Đái tháo đường có bệnh thận",
    potassiumIssue: "hyperkalemia_risk",
    labelVi: "Nguy cơ tăng Kali",
    summaryVi:
      "Biến chứng thận làm giảm khả năng đào thải Kali, kết hợp với các thuốc bảo vệ tim thận khiến Kali dễ bị tích tụ. Người bệnh cần áp dụng cách sơ chế giảm Kali (ngâm, luộc bỏ nước) mà vẫn đảm bảo giữ được cân bằng đường huyết ổn định.",
    dietGuidanceVi: [
      "Không cắt hết Kali nếu HbA1c/Kali máu ổn — cá thể hóa.",
      "Cẩn nước dừa, trái cây cô đặc, nước ép.",
      "Nhịn ăn + insulin có thể gây hạ Kali cấp.",
    ],
    relatedMedicineIds: ["irbesartan-150", "enalapril-10", "insulin-human", "cotrimoxazole"],
    sourceIds: ["kdigo-ckd-2024"],
  },
  {
    id: "suy-thuong-than",
    nameVi: "Suy thượng thận (Addison)",
    potassiumIssue: "hyperkalemia_risk",
    labelVi: "Nguy cơ tăng Kali",
    summaryVi:
      "Tuyến thượng thận giảm sản xuất hormon aldosterone khiến cơ thể có xu hướng giữ lại Kali và mất natri qua đường niệu. Người bệnh bắt buộc phải tuân thủ điều trị hormone thay thế, kết hợp chọn cách chế biến giảm bớt Kali trong khẩu phần ăn.",
    dietGuidanceVi: [
      "Tránh bổ sung Kali và muối thay thế chứa KCl.",
      "Khi khủng hoảng Addison: xử trí cấp cứu, không tự điều chỉnh ăn.",
    ],
    relatedMedicineIds: ["spironolactone-25", "kcl-600"],
    sourceIds: ["kdigo-ckm-2025"],
  },
  {
    id: "loc-mau",
    nameVi: "Đang lọc máu (Thận nhân tạo / Thẩm phân phúc mạc)",
    potassiumIssue: "strict_control",
    labelVi: "Kiểm soát nghiêm ngặt",
    summaryVi:
      "Giữa hai kỳ lọc máu, Kali từ thức ăn rất dễ tích tụ trong máu gây nguy hiểm cho tính mạng. Bắt buộc áp dụng kỹ thuật luộc chắt nước hoặc ngâm luộc 2 lần và tuân thủ nghiêm ngặt định lượng bữa ăn do bác sĩ hoặc chuyên khoa dinh dưỡng chỉ định.",
    dietGuidanceVi: [
      "Hạn chế chuối, bơ, nước dừa, khoai chiên/nướng, nước luộc rau.",
      "Luộc rau/củ, chắt nước; không dùng nước đó nấu canh.",
      "Không bỏ bữa lọc; Kali cao liên quan loạn nhịp.",
    ],
    relatedMedicineIds: ["kalimate", "kcl-600", "digoxin-025"],
    sourceIds: ["bytvn-ckd", "nni-renal-k"],
  },
  {
    id: "thuoc-chong-dong",
    nameVi: "Dùng thuốc chống đông (Sintrom / Warfarin)",
    potassiumIssue: "vitamin_k_antagonist",
    labelVi: "Lưu ý thuốc chống đông",
    summaryVi:
      "Luộc chắt nước chỉ giúp làm giảm Kali mà không làm giảm Vitamin K (do Vitamin K tan trong chất béo). Người bệnh cần duy trì lượng rau củ nạp vào đều đặn mỗi ngày, tránh ăn dồn dập làm mất tác dụng của thuốc hoặc tăng nguy cơ hình thành cục máu đông.",
    dietGuidanceVi: [
      "Rau vừa giàu Kali vừa giàu Vitamin K: rau dền, rau ngót, cải xoăn, cải bó xôi, bông cải xanh.",
      "Giữ lượng rau xanh mỗi ngày tương đối ổn định, không đột ngột ăn nhiều hoặc bỏ hẳn.",
      "Nếu thay đổi thói quen ăn rau, báo bác sĩ để kiểm tra lại INR.",
    ],
    relatedMedicineIds: ["acenocoumarol-4", "warfarin"],
    sourceIds: ["vnha-af", "chest-antithrombotic", "duoc-thu-qg"],
  },
];

export function getCondition(id: string): Condition | undefined {
  return CONDITIONS.find((item) => item.id === id);
}
