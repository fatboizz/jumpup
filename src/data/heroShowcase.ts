import { Language } from "@/data/translations";

export interface CinematicHeroSlide {
  id: string;
  number: string;
  // TODO: Replace with production images (>= 1920x1080) in public/images/hero/
  image: string;
  imageAlt: Record<Language, string>;
  shortNav: Record<Language, string>;
  badge: Record<Language, string>;
  caption: Record<Language, string>;
  serviceName: Record<Language, string>;
  ctaCategory: string;
  anchorLink: string;
  focalPoint?: string;
}

export const cinematicHeroSlides: CinematicHeroSlide[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // SLIDE 01: 5-STAR CORPORATE EVENTS (100–500+ GUESTS)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "events",
    number: "01",
    // TODO: Thay bằng ảnh thực tế sự kiện của JumpUp: /images/hero/slide-01.jpg
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80",
    imageAlt: {
      en: "5-Star Hotel Grand Ballroom Gala Event & Corporate Ceremony",
      jp: "5つ星ホテル グランドボールルームのガラディナー・企業式典",
      vn: "Đại tiệc Grand Ballroom khách sạn 5 sao và lễ kỷ niệm doanh nghiệp",
    },
    shortNav: {
      en: "Corporate Events",
      jp: "企業イベント",
      vn: "Sự kiện 5 sao",
    },
    badge: {
      en: "5-STAR GRAND BALLROOM",
      jp: "5つ星ボールルーム",
      vn: "GRAND BALLROOM 5 SAO",
    },
    serviceName: {
      en: "5-Star Hotel Corporate Events & Gala Management (100–500+ Guests)",
      jp: "5つ星ホテル 企業イベント・大型式典プロデュース（100〜500名超）",
      vn: "Sự kiện Doanh nghiệp Khách sạn 5 Sao (100–500+ Khách)",
    },
    caption: {
      en: "Full-scale corporate production: venue negotiation, LED staging, and trilingual on-site execution.",
      jp: "会場交渉から大型LED演出、日英越トリリンガル当日運営まで一貫プロデュース。",
      vn: "Đàm phán địa điểm, dàn dựng sân khấu LED và điều hành đa ngôn ngữ trọn gói.",
    },
    ctaCategory: "events",
    anchorLink: "#services",
    focalPoint: "center",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SLIDE 02: MARKET RESEARCH & VIETNAM ENTRY (FDI, LICENSING, OFFICE)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "expansion",
    number: "02",
    // TODO: Thay bằng ảnh thực tế tư vấn FDI của JumpUp: /images/hero/slide-02.jpg
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    imageAlt: {
      en: "Central Business District Tower & Vietnam Market Expansion Strategy",
      jp: "主要都市CBDオフィスとベトナム進出戦略コンサルティング",
      vn: "Tòa nhà trung tâm tài chính và chiến lược mở rộng thị trường Việt Nam",
    },
    shortNav: {
      en: "Market Entry",
      jp: "進出支援",
      vn: "Thâm nhập thị trường",
    },
    badge: {
      en: "MARKET ENTRY & FDI",
      jp: "進出支援・FDI戦略",
      vn: "GIA NHẬP THỊ TRƯỜNG FDI",
    },
    serviceName: {
      en: "Vietnam Market Research, Entity Setup & Corporate Licensing",
      jp: "ベトナム市場調査（FS）・現地法人設立・許認可取得支援",
      vn: "Nghiên cứu Thị trường, Thành lập Pháp nhân & Giấy phép Đầu tư",
    },
    caption: {
      en: "Comprehensive navigation across Hanoi, Da Nang, and Ho Chi Minh City.",
      jp: "ハノイ・ダナン・ホーチミン全土で、事業立ち上げから安定稼働まで伴走。",
      vn: "Đồng hành khảo sát, lập pháp nhân và tuyển dụng nhân sự khắp 3 miền.",
    },
    ctaCategory: "expansion",
    anchorLink: "#services",
    focalPoint: "center top",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SLIDE 03: COMMERCIAL REAL ESTATE & ASSET ADVISORY (TAKKEN-SHI)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "realestate",
    number: "03",
    // TODO: Thay bằng ảnh thực tế bất động sản của JumpUp: /images/hero/slide-03.jpg
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    imageAlt: {
      en: "Prime Waterfront Commercial & Luxury Residential Real Estate Da Nang",
      jp: "ダナン一等地ウォーターフロントの商業オフィス・高級レジデンス",
      vn: "Bất động sản thương mại và căn hộ cao cấp ven sông Hàn, Đà Nẵng",
    },
    shortNav: {
      en: "Real Estate",
      jp: "不動産",
      vn: "Bất động sản",
    },
    badge: {
      en: "TAKKEN-SHI LICENSED",
      jp: "日本の宅建士監修",
      vn: "TAKKEN-SHI CHUẨN NHẬT",
    },
    serviceName: {
      en: "Commercial Office Leasing & Luxury Property Advisory",
      jp: "法人オフィス賃貸・高級不動産売買・資産管理コンサルティング",
      vn: "Tư vấn Cho thuê Văn phòng Hạng A & Mua bán Bất động sản",
    },
    caption: {
      en: "Transparent advisory led by Japanese licensed Takken-shi and senior local directors.",
      jp: "日本の宅地建物取引士と現地開発統括が、安全確実な取引をナビゲート。",
      vn: "Minh bạch pháp lý, dẫn dắt bởi chuyên gia Takken-shi Nhật Bản và chuyên gia Việt Nam.",
    },
    ctaCategory: "realestate",
    anchorLink: "#services",
    focalPoint: "center",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SLIDE 04: ANIMATION STUDIO & CREATIVE OUTSOURCING
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "animation",
    number: "04",
    // TODO: Thay bằng ảnh thực tế studio hoạt hình: /images/hero/slide-04.jpg
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80",
    imageAlt: {
      en: "Digital Animation Studio & High-Precision Graphics Workstation",
      jp: "デジタル作画スタジオと高精細グラフィック制作ライン",
      vn: "Studio sản xuất hoạt hình đồ họa kỹ thuật số chuẩn Nhật",
    },
    shortNav: {
      en: "Animation",
      jp: "クリエイティブ",
      vn: "Hoạt hình & Media",
    },
    badge: {
      en: "LIVE2D & ANIMATION",
      jp: "Live2D・アニメ受託",
      vn: "LIVE2D & SẢN XUẤT HOẠT HÌNH",
    },
    serviceName: {
      en: "Anime, Game Background Art & Full Animation Outsourcing",
      jp: "アニメ・ゲーム背景美術・Live2Dモデリング受託制作",
      vn: "Gia công Hoạt hình, Live2D & Mỹ thuật Bối cảnh Game/Anime",
    },
    caption: {
      en: "Japan-trained Vietnamese artists delivering uncompromising studio quality.",
      jp: "日本のアニメスタジオ出身クリエイター陣による高品質な一貫受託ライン。",
      vn: "Họa sĩ từng làm việc tại Nhật Bản dưới quy trình kiểm soát chất lượng nghiêm ngặt.",
    },
    ctaCategory: "animation",
    anchorLink: "#services",
    focalPoint: "center",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SLIDE 05: BICULTURAL EXECUTIVE LEADERSHIP (20 YRS KONAMI & VN EXPERT)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "leadership",
    number: "05",
    // TODO: Thay bằng ảnh thực tế văn phòng lãnh đạo: /images/hero/slide-05.jpg
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80",
    imageAlt: {
      en: "Executive Boardroom at Bach Dang Complex Headquarters, Da Nang",
      jp: "ダナン本社 バクダンコンプレックス 役員室",
      vn: "Phòng điều hành cấp cao tại Bach Dang Complex, Đà Nẵng",
    },
    shortNav: {
      en: "Leadership",
      jp: "経営陣",
      vn: "Ban điều hành",
    },
    badge: {
      en: "BICULTURAL LEADERSHIP",
      jp: "日越2トップ体制",
      vn: "LÃNH ĐẠO SONG VĂN HÓA",
    },
    serviceName: {
      en: "Two-Top Executive Model: 20 Yrs KONAMI Governance & Veteran Execution",
      jp: "KONAMI事業管理20年の日本人代表 ✕ ベトナム大手開発統括の副代表",
      vn: "Mô hình 2-Top: 20 Năm Quản trị KONAMI & Năng lực Thực thi Bản địa",
    },
    caption: {
      en: "Strategic synergy ensuring absolute accountability, compliance, and velocity.",
      jp: "厳格なガバナンスと圧倒的な現地突破力で、迅速かつ確実な成果を約束。",
      vn: "Hợp lực chiến lược đảm bảo tính minh bạch, kỷ luật và tốc độ triển khai vượt trội.",
    },
    ctaCategory: "general",
    anchorLink: "#leadership",
    focalPoint: "center top",
  },
];
