import { Language } from "@/data/translations";

// ─────────────────────────────────────────────────────────────────────────────
// TRUST METRICS & STATS COUNTER
// TODO: Thay bằng số liệu thực tế được kiểm toán của công ty
// ─────────────────────────────────────────────────────────────────────────────
export interface TrustMetric {
  id: string;
  targetNumber: number;
  suffix: string;
  label: Record<Language, string>;
  subtext: Record<Language, string>;
}

export const siteTrustMetrics: TrustMetric[] = [
  {
    id: "events-scale",
    targetNumber: 500,
    suffix: "+",
    label: {
      en: "Guest Capacity",
      jp: "イベント最大収容人数",
      vn: "Quy mô Khách tối đa",
    },
    subtext: {
      en: "At 5-Star Hotel Grand Ballrooms",
      jp: "5つ星ホテル ボールルーム対応",
      vn: "Tại Ballroom khách sạn 5 sao",
    },
  },
  {
    id: "years-experience",
    targetNumber: 10,
    suffix: "+",
    label: {
      en: "Years in Vietnam",
      jp: "ベトナム現地事業実績",
      vn: "Năm kinh nghiệm thực tế",
    },
    subtext: {
      en: "Hanoi, Da Nang & HCMC",
      jp: "ハノイ・ダナン・ホーチミン全土",
      vn: "Hà Nội, Đà Nẵng & TP.HCM",
    },
  },
  {
    id: "successful-events",
    targetNumber: 120,
    suffix: "+",
    label: {
      en: "Events & Projects",
      jp: "イベント・進出プロジェクト数",
      vn: "Sự kiện & Dự án thực thi",
    },
    subtext: {
      en: "Delivered to International Standards",
      jp: "日系・外資・大手企業向け実績",
      vn: "Đạt chuẩn quốc tế & Nhật Bản",
    },
  },
  {
    id: "partner-hotels",
    targetNumber: 15,
    suffix: "+",
    label: {
      en: "5-Star Partner Hotels",
      jp: "提携5つ星ラグジュアリーホテル",
      vn: "Đối tác Khách sạn 5 sao",
    },
    subtext: {
      en: "Direct Corporate Tier Contracting",
      jp: "直接提携・優先予約枠保有",
      vn: "Hợp đồng đối tác chiến lược trực tiếp",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO / CASE STUDIES
// TODO: Thay bằng ảnh và thông tin dự án thật của JUMPUP SERVICES
// ─────────────────────────────────────────────────────────────────────────────
export interface PortfolioProject {
  id: string;
  image: string;
  categoryKey: "event" | "market" | "realestate" | "animation";
  title: Record<Language, string>;
  venue: Record<Language, string>;
  guests: string;
  year: string;
  highlight: Record<Language, string>;
  description: Record<Language, string>;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "case-01",
    // TODO: Thay bằng ảnh sự kiện thật: /images/portfolio/project-01.jpg
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    categoryKey: "event",
    title: {
      en: "Japan-Vietnam Corporate Anniversary Gala Dinner",
      jp: "日越企業 周年記念ガラディナー＆アワードセレモニー",
      vn: "Đại tiệc Gala Kỷ niệm Thành lập & Trao giải Doanh nghiệp Nhật – Việt",
    },
    venue: {
      en: "InterContinental Danang Sun Peninsula Resort",
      jp: "インターコンチネンタル ダナン サン ペニンシュラ リゾート",
      vn: "InterContinental Danang Sun Peninsula Resort",
    },
    guests: "250+ Guests",
    year: "2024",
    highlight: {
      en: "Trilingual Stage Direction & VIP Hospitality Protocol",
      jp: "日英越3言語による進行統轄・政府高官VIPプロトコル",
      vn: "Điều phối sân khấu 3 ngôn ngữ & Nghi thức đón tiếp VIP cấp cao",
    },
    description: {
      en: "Full-scale corporate anniversary production hosting international board members, regional partners, and VIP guests. Handled five-star venue acquisition, custom ultra-wide LED stage mapping, Japanese keigo protocol, and dedicated security transportation.",
      jp: "日本本社取締役、ベトナム現地幹部、来賓250名超を迎えた大規模周年式典。会場交渉から超大型LED映像演出、日英越トリリンガルMC、VIPハイヤー送迎までワンストップで統轄。",
      vn: "Sản xuất trọn gói lễ kỷ niệm doanh nghiệp với sự tham gia của Hội đồng Quản trị quốc tế, đối tác khu vực và khách VIP. Đảm nhận từ đàm phán địa điểm 5 sao, dàn dựng sân khấu LED mapping, nghi thức đón tiếp đến đoàn xe đưa đón cao cấp.",
    },
  },
  {
    id: "case-02",
    // TODO: Thay bằng ảnh sự kiện thật: /images/portfolio/project-02.jpg
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    categoryKey: "event",
    title: {
      en: "Global FinTech Annual Leadership Kickoff Conference",
      jp: "グローバルFinTech 年次リーダーシップ キックオフ総会",
      vn: "Hội nghị Lãnh đạo Cấp cao & Khởi động Năm mới FinTech Toàn cầu",
    },
    venue: {
      en: "Sheraton Grand Danang Resort & Convention Center",
      jp: "シェラトン グランド ダナン リゾート＆コンベンションセンター",
      vn: "Sheraton Grand Danang Resort & Convention Center",
    },
    guests: "380+ Guests",
    year: "2024",
    highlight: {
      en: "Simultaneous Interpretation & Live Broadcast Audio Engineering",
      jp: "同時通訳ブース設営・高音質ライブ配信ディレクション",
      vn: "Hệ thống cabin cabin dịch đồng thời & Kỹ thuật âm thanh phát sóng trực tiếp",
    },
    description: {
      en: "Executed a two-day global conference featuring keynote presentations, interactive breakout workshops, and an oceanfront awards dinner. Managed 380+ corporate delegate accreditations with zero queue friction.",
      jp: "2日間にわたる基調講演、分科会ワークショップ、オーシャンフロントアワードディナーの全行程を設計・運営。380名以上の参加者受付をデジタル化し、混雑ゼロの円滑運営を実現。",
      vn: "Điều phối toàn diện hội nghị quốc tế 2 ngày gồm các phiên thảo luận chuyên sâu, hội thảo tương tác và tiệc vinh danh bên bờ biển. Quản lý thủ tục check-in cho 380+ đại biểu mượt mà, chính xác.",
    },
  },
  {
    id: "case-03",
    // TODO: Thay bằng ảnh sự kiện thật: /images/portfolio/project-03.jpg
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    categoryKey: "market",
    title: {
      en: "Tokyo IT Conglomerate: Central Vietnam Engineering Hub Setup",
      jp: "東京東証上場IT企業：中部ベトナム開発拠点 開設・法人設立支援",
      vn: "Tập đoàn CNTT Tokyo: Thành lập Pháp nhân & Trung tâm Kỹ thuật Miền Trung",
    },
    venue: {
      en: "Bach Dang Complex CBD, Da Nang",
      jp: "バクダンコンプレックス CBD ダナン",
      vn: "Bach Dang Complex, Hải Châu, Đà Nẵng",
    },
    guests: "50+ Engineers Hub",
    year: "2023 - 2024",
    highlight: {
      en: "100% On-Schedule Legal Licensing & Bilingual Talent Sourcing",
      jp: "投資許可ライセンス予定通り取得・バイリンガル幹部人材採用",
      vn: "Cấp phép đầu tư đúng tiến độ 100% & Tuyển dụng nhân sự kỹ sư song ngữ",
    },
    description: {
      en: "Guided a major Japanese software house through market feasibility analysis, Foreign Direct Investment (FDI) licensing, Class-A office interior build-out, and initial recruitment of 50 senior bilingual software engineers in Da Nang.",
      jp: "FS調査から外資100%現地法人設立、ライセンス取得、グレードAオフィス内装施工管理、シニアバイリンガルエンジニア50名の採用まで包括支援。予定期日通りに事業開始を実現。",
      vn: "Đồng hành cùng công ty phần mềm niêm yết Nhật Bản từ khảo sát tiền khả thi, xin giấy phép đầu tư FDI, hoàn thiện văn phòng hạng A đến tuyển dụng 50 kỹ sư phần mềm cao cấp song ngữ tại Đà Nẵng.",
    },
  },
  {
    id: "case-04",
    // TODO: Thay bằng ảnh sự kiện thật: /images/portfolio/project-04.jpg
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    categoryKey: "event",
    title: {
      en: "Multinational Manufacturing Executive Summit & Golf Invitational",
      jp: "多国籍製造業エグゼクティブサミット＆親善ゴルフコンペティション",
      vn: "Hội nghị Thượng đỉnh Ban Lãnh đạo & Giải Golf Giao hữu Doanh nghiệp",
    },
    venue: {
      en: "BRG Da Nang Golf Resort & Montgomerie Links Vietnam",
      jp: "BRGダナン・ゴルフリゾート ＆ モンゴメリーリンクス",
      vn: "BRG Da Nang Golf Resort & Montgomerie Links Vietnam",
    },
    guests: "120+ C-Suite Guests",
    year: "2024",
    highlight: {
      en: "Premium Golf Logistics & Luxury Seaside Networking Banquet",
      jp: "高級プライベート送迎手配・海辺のラグジュアリーネットワーキング",
      vn: "Hậu cần golf chuyên nghiệp & Tiệc kết nối lãnh đạo cao cấp bên biển",
    },
    description: {
      en: "Tailored a weekend executive retreat for 120 multinational business leaders, combining top-tier tournament golf coordination, dedicated luxury Mercedes-Benz shuttles, and a private beachfront dinner with traditional Vietnamese cultural performances.",
      jp: "日米越の経営首脳120名が集う親善サミット。名門コースでのトーナメント運営、専属メルセデスハイヤー運行、伝統芸能を取り入れたプライベートビーチ晩餐会を完全プロデュース。",
      vn: "Thiết kế kỳ nghỉ kết hợp hội nghị cao cấp cuối tuần cho 120 lãnh đạo doanh nghiệp, điều phối giải đấu golf chuyên nghiệp, đội xe Mercedes riêng và dạ tiệc riêng tư bên bờ biển đậm đà bản sắc văn hóa Việt.",
    },
  },
  {
    id: "case-05",
    // TODO: Thay bằng ảnh sự kiện thật: /images/portfolio/project-05.jpg
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    categoryKey: "realestate",
    title: {
      en: "Foreign Enterprise HQ Long-Term Commercial Lease Advisory",
      jp: "外資系企業ベトナム統轄本部 オフィス選定・長期賃貸借契約交渉",
      vn: "Tư vấn Lựa chọn & Đàm phán Hợp đồng Thuê Văn phòng Trụ sở Doanh nghiệp",
    },
    venue: {
      en: "Prime Riverside CBD, Da Nang & Ho Chi Minh City",
      jp: "ダナン市ハン川CBD・ホーチミン市中心部",
      vn: "Khu trung tâm thương mại sông Hàn, Đà Nẵng & TP.HCM",
    },
    guests: "1,200 sqm Facility",
    year: "2023",
    highlight: {
      en: "Takken-shi Verified Contractual Due Diligence & Substantial Cost Savings",
      jp: "日本の宅建士による契約書精査・適正賃料交渉による大幅コスト削減",
      vn: "Thẩm định pháp lý chuẩn Takken-shi Nhật Bản & Tối ưu hóa chi phí thuê",
    },
    description: {
      en: "Advised an international corporate client on securing 1,200 sqm of prime riverside office space. Handled landlord negotiations, international lease legalities, fit-out permits, and fire safety regulatory compliance.",
      jp: "1,200平米のハイグレードオフィス選定において、日本の宅建士視点での法的精査を実施。オーナー交渉を通じ有利な賃料条件・フリーレント期間を獲得し、消防許認可も円滑に取得。",
      vn: "Tư vấn cho khách hàng quốc tế thuê 1.200 m² mặt sàn văn phòng hạng A ven sông Hàn. Đại diện đàm phán hợp đồng, rà soát điều khoản pháp lý, xin phép cải tạo và nghiệm thu phòng cháy chữa cháy hoàn tất.",
    },
  },
  {
    id: "case-06",
    // TODO: Thay bằng ảnh sự kiện thật: /images/portfolio/project-06.jpg
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    categoryKey: "animation",
    title: {
      en: "Japanese Game Studio: Production Pipeline Lab Outsourcing",
      jp: "大手日本ゲーム開発企業：Live2D・アニメーション制作ラボ体制構築",
      vn: "Xưởng Game Nhật Bản: Thiết lập Đội ngũ Gia công Live2D & Hoạt hình",
    },
    venue: {
      en: "Digital Studio, Da Nang - Tokyo Dedicated Pipeline",
      jp: "ダナン制作スタジオ（東京本社直結パイプライン）",
      vn: "Studio Kỹ thuật số Đà Nẵng - Kết nối trực tiếp Tokyo",
    },
    guests: "20+ Dedicated Creators",
    year: "2024",
    highlight: {
      en: "Supervised by Ex-KONAMI Executive with Japanese Quality Benchmarks",
      jp: "元KONAMI幹部による工程管理・日本商業クオリティの完全担保",
      vn: "Giám sát bởi cựu lãnh đạo KONAMI với tiêu chuẩn chất lượng khắt khe",
    },
    description: {
      en: "Established a dedicated offshore art and Live2D production team of 20 Vietnamese digital artists trained in Japanese studio methods, delivering on-time assets for major mobile titles with rigorous NDA and security protocols.",
      jp: "日本のアニメ・ゲーム制作現場で研修を受けたベトナム人クリエイター20名による専用ラボチームを編成。厳格な秘密保持契約のもと、高品質なアセットを安定継続納品。",
      vn: "Thành lập đội ngũ chuyên trách gồm 20 họa sĩ kỹ thuật số Việt Nam được đào tạo theo quy chuẩn Nhật Bản, gia công mô hình Live2D và tài nguyên đồ họa cho các tựa game nổi tiếng đúng tiến độ và bảo mật tuyệt đối.",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// WORKFLOW / PROCESS TIMELINE (5 PHASES)
// TODO: Tùy chỉnh các bước quy trình theo SOP vận hành của công ty nếu cần
// ─────────────────────────────────────────────────────────────────────────────
export interface WorkflowStep {
  step: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  desc: Record<Language, string>;
  timeline: Record<Language, string>;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: {
      en: "Consultation & Requirement Analysis",
      jp: "初回ヒアリング・要件定義",
      vn: "Tiếp nhận Yêu cầu & Khảo sát Ban đầu",
    },
    subtitle: {
      en: "Understanding your vision, scale & constraints",
      jp: "目的・規模・予算・スケジュールの明確化",
      vn: "Xác định rõ quy mô, mục tiêu và ngân sách",
    },
    desc: {
      en: "We conduct an in-depth consultation in Japanese, English, or Vietnamese to clarify your core objectives, estimated guest headcount, hotel venue preferences, and timeline milestones.",
      jp: "日本語・英語・ベトナム語で綿密なヒアリングを実施。開催趣旨、参加予定人数、希望ホテルグレード、予算感、VIP対応要件を詳細に把握します。",
      vn: "Trao đổi chi tiết bằng tiếng Việt, tiếng Nhật hoặc tiếng Anh để làm rõ mục tiêu, số lượng khách mời dự kiến, địa điểm mong muốn và các mốc thời gian quan trọng.",
    },
    timeline: {
      en: "Day 1 – 2",
      jp: "1〜2営業日以内",
      vn: "1 – 2 ngày làm việc",
    },
  },
  {
    step: "02",
    title: {
      en: "Strategic Proposal & Transparent Quotation",
      jp: "最適プラン提案・詳細見積書提示",
      vn: "Đề xuất Giải pháp & Báo giá Minh bạch",
    },
    subtitle: {
      en: "5-Star hotel options & comprehensive cost breakdown",
      jp: "複数ホテル会場比較・明朗会計な費用算出",
      vn: "Lựa chọn khách sạn 5 sao & bảng dự toán chi tiết",
    },
    desc: {
      en: "We deliver a detailed project proposal featuring shortlisted 5-star ballrooms, audio/visual stage concepts, detailed schedules, and transparent, itemized corporate rates.",
      jp: "提携5つ星ホテルの空き状況確認・ボールルーム選定、ステージ演出案、当日の分単位進行スケジュール案、明瞭な項目別見積書をご提示します。",
      vn: "Cung cấp bản đề xuất dự án toàn diện gồm các phương án khán phòng khách sạn 5 sao, ý tưởng sân khấu LED, kịch bản thời gian chi tiết và báo giá trọn gói minh bạch.",
    },
    timeline: {
      en: "Day 3 – 5",
      jp: "3〜5営業日以内",
      vn: "3 – 5 ngày làm việc",
    },
  },
  {
    step: "03",
    title: {
      en: "Venue Negotiation & Pre-Production",
      jp: "ホテル会場交渉・各種制作ディレクション",
      vn: "Đàm phán Địa điểm & Dàn dựng Tiền kỳ",
    },
    subtitle: {
      en: "Contracting, technical staging & VIP logistics",
      jp: "優先契約締結・音響照明機材・VIP送迎手配",
      vn: "Ký kết hợp đồng, kỹ thuật âm thanh & xe đưa đón VIP",
    },
    desc: {
      en: "Our bilingual team finalizes hotel corporate contracts, conducts technical site inspections, programs large-scale LED visuals, books luxury fleet transport, and verifies all bilingual materials.",
      jp: "ホテルとの法人契約締結、現地テクニカル下見、大型LED用映像制作、音響照明プログラム策定、専属ハイヤー配車、日英越の配布資料準備を一括手配。",
      vn: "Hoàn tất hợp đồng ưu đãi với khách sạn 5 sao, khảo sát kỹ thuật thực địa, sản xuất visual LED, đặt đội xe cao cấp và chuẩn bị tài liệu đa ngôn ngữ chuẩn xác.",
    },
    timeline: {
      en: "Week 2 – 4",
      jp: "本番2〜4週間前",
      vn: "2 – 4 tuần trước sự kiện",
    },
  },
  {
    step: "04",
    title: {
      en: "On-Site Operational Directorship",
      jp: "当日本番オペレーション・総合現場指揮",
      vn: "Điều phối Hiện trường & Thực thi Trực tiếp",
    },
    subtitle: {
      en: "Japanese precision & native bilingual field management",
      jp: "日本品質の緻密な進行管理・現地スタッフ統制",
      vn: "Kỷ luật quản lý chuẩn Nhật Bản & điều hành song ngữ",
    },
    desc: {
      en: "Led on-site by our executive directors, we supervise the run-of-show, manage 100+ guest registrations, coordinate trilingual MCs, and handle real-time VIP hospitality and contingencies.",
      jp: "経営陣が自ら現場で陣頭指揮を執り、分単位のキューシート進行、受付管理、トリリンガル司会進行、VIPエスコート、突発事項への即応を完璧に実行。",
      vn: "Đích thân ban giám đốc chỉ huy trực tiếp tại hiện trường, giám sát timeline từng phút, đón tiếp 100+ đại biểu, phối hợp MC 3 ngôn ngữ và xử lý tình huống linh hoạt.",
    },
    timeline: {
      en: "Event Day",
      jp: "本番当日",
      vn: "Ngày diễn ra sự kiện",
    },
  },
  {
    step: "05",
    title: {
      en: "Post-Event Reporting & Ongoing Partnership",
      jp: "事後報告書提出・継続的ビジネス伴走",
      vn: "Báo cáo Tổng kết & Đồng hành Lâu dài",
    },
    subtitle: {
      en: "Media delivery, financial reconciliation & follow-up",
      jp: "記録メディア納品・会計精算・次期展開支援",
      vn: "Bàn giao tư liệu hình ảnh, quyết toán & mở rộng",
    },
    desc: {
      en: "We compile professional high-resolution photo/video archives, provide a comprehensive post-event evaluation report, finalize transparent financial reconciliation, and support your ongoing business in Vietnam.",
      jp: "プロカメラマン撮影の高解像度写真・ハイライト映像の納品、実施結果レポートの提出、明朗な会計精算を行い、今後のベトナム事業展開を継続支援します。",
      vn: "Bàn giao toàn bộ kho ảnh và video chất lượng cao, cung cấp báo cáo nghiệm thu tổng kết, thực hiện quyết toán tài chính minh bạch và sẵn sàng đồng hành cho các dự án tiếp theo.",
    },
    timeline: {
      en: "Within 7 Days",
      jp: "終了後7日以内",
      vn: "Trong vòng 7 ngày",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FREQUENTLY ASKED QUESTIONS (FAQ)
// TODO: Tùy chỉnh câu hỏi thực tế thường gặp từ khách hàng
// ─────────────────────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export const siteFAQItems: FAQItem[] = [
  {
    id: "faq-01",
    question: {
      en: "What scale of corporate events does JUMPUP SERVICES specialize in?",
      jp: "どのくらいの規模の企業イベントに対応可能ですか？",
      vn: "JUMPUP SERVICES chuyên tổ chức sự kiện doanh nghiệp ở quy mô nào?",
    },
    answer: {
      en: "We specialize in corporate events ranging from 50 to 500+ attendees hosted at premier 5-star luxury hotels and convention centers across Vietnam (Da Nang, Hanoi, and Ho Chi Minh City). This includes annual corporate kickoffs, milestone galas, international executive summits, and incentive trips.",
      jp: "ダナン、ハノイ、ホーチミンをはじめとするベトナム各地の5つ星ラグジュアリーホテル会場において、50名から500名超の大規模イベントを専門としております。年次キックオフ総会、周年記念式典、国際カンファレンス、役員インセンティブ旅行まで幅広く対応可能です。",
      vn: "Chúng tôi chuyên tổ chức các sự kiện doanh nghiệp quy mô từ 50 đến hơn 500 khách tại hệ thống khách sạn 5 sao cao cấp khắp Việt Nam (Đà Nẵng, Hà Nội, TP.HCM). Bao gồm lễ khởi động năm mới, gala kỷ niệm thành lập, hội nghị lãnh đạo quốc tế và các chuyến du lịch khen thưởng cao cấp.",
    },
  },
  {
    id: "faq-02",
    question: {
      en: "Can communication, contracting, and invoicing be conducted in Japanese?",
      jp: "日本語での相談・契約・請求書発行は可能ですか？",
      vn: "Quy trình tư vấn, hợp đồng và hóa đơn có hỗ trợ tiếng Nhật và tiếng Anh không?",
    },
    answer: {
      en: "Yes, absolutely. Our CEO is Japanese with 20+ years of corporate management experience, and our Vice President is fluent in English. We can issue valid corporate contracts and official VAT (Red Invoice) receipts in Vietnam, and seamlessly communicate in Japanese, English, or Vietnamese.",
      jp: "はい、すべて日本語で完結可能です。日本で20年以上の企業経営経験を持つ日本人代表（日比）が直接窓口となり、英語堪能なベトナム人副代表（フエン）とともに対応いたします。ベトナム現地法人の正式な契約書および電子付加価値税インボイス（VATレッドインボイス）の発行も万全です。",
      vn: "Hoàn toàn có thể. Tổng Giám đốc của chúng tôi là người Nhật Bản với hơn 20 năm kinh nghiệm điều hành và Phó Chủ tịch sử dụng tiếng Anh lưu loát. Chúng tôi phát hành hợp đồng kinh tế hợp pháp tại Việt Nam, xuất hóa đơn đỏ (VAT) đầy đủ và giao tiếp thuận tiện bằng cả 3 ngôn ngữ: Việt, Nhật, Anh.",
    },
  },
  {
    id: "faq-03",
    question: {
      en: "How far in advance should we engage JUMPUP for a large-scale event?",
      jp: "イベント開催の何ヶ月前から相談を始めるべきでしょうか？",
      vn: "Doanh nghiệp nên liên hệ trước bao lâu để chuẩn bị cho một sự kiện lớn?",
    },
    answer: {
      en: "For large-scale events (100–500+ guests) during peak corporate seasons (October to April), we recommend initiating consultations 2 to 4 months in advance to secure preferred 5-star grand ballrooms and luxury hotel group room blocks. However, for urgent requests, our local networks enable rapid turnaround within 3 to 4 weeks.",
      jp: "100名〜500名規模の5つ星ホテルイベントの場合、ハイシーズン（10月〜4月）は会場確保の観点から2〜4ヶ月前のご相談を推奨しております。ただし、急遽決定した案件や特急のご要望につきましても、現地の強固なネットワークを活かし3〜4週間前からの緊急プロデュース実績がございます。",
      vn: "Đối với sự kiện quy mô từ 100–500+ khách trong mùa cao điểm (tháng 10 đến tháng 4), chúng tôi khuyến nghị quý khách nên bắt đầu tư vấn trước 2 đến 4 tháng để giữ được khán phòng ballroom và phòng nghỉ 5 sao đẹp nhất. Trong các trường hợp khẩn cấp, mạng lưới đối tác giúp chúng tôi triển khai nhanh gọn chỉ trong 3–4 tuần.",
    },
  },
  {
    id: "faq-04",
    question: {
      en: "What market entry services do you provide for foreign businesses?",
      jp: "ベトナム進出支援では具体的にどのようなサポートが受けられますか？",
      vn: "Dịch vụ hỗ trợ gia nhập thị trường Việt Nam bao gồm những hạng mục cụ thể nào?",
    },
    answer: {
      en: "We provide end-to-end guidance including initial feasibility studies (FS), competitor benchmarking, 100% foreign-owned enterprise (FDI) licensing, commercial office leasing and interior fit-out, bilingual staff recruitment, and ongoing accounting/administrative compliance.",
      jp: "市場調査（FS）・競合ベンチマークから、外資100%現地法人設立、投資登録証明書（IRC）・企業登録証明書（ERC）の取得、グレードAオフィス選定と内装工事、バイリンガル人材の採用、記帳代行・総務管理まで一貫して伴走いたします。",
      vn: "Chúng tôi cung cấp giải pháp trọn gói từ nghiên cứu tiền khả thi, khảo sát đối thủ, xin giấy chứng nhận đăng ký đầu tư (IRC) và doanh nghiệp (ERC), tìm kiếm và hoàn thiện văn phòng hạng A, tuyển dụng nhân sự chất lượng cao đến dịch vụ kế toán, thuế và pháp lý định kỳ.",
    },
  },
  {
    id: "faq-05",
    question: {
      en: "How does JUMPUP ensure real estate transaction security in Vietnam?",
      jp: "ベトナムの不動産賃貸や投資において、どのように安全性を担保していますか？",
      vn: "JUMPUP đảm bảo an toàn pháp lý cho giao dịch bất động sản tại Việt Nam bằng cách nào?",
    },
    answer: {
      en: "Our CEO holds the national Japanese Real Estate Transaction Specialist license (Takken-shi), while our Vice President has spearheaded major commercial and residential developments in Central Vietnam. We rigorously vet land-use rights, construction permits, developer financials, and fire safety certifications before every signing.",
      jp: "日本の国家資格である「宅地建物取引士（宅建士）」を保有する日本人代表と、ベトナム中部の大型開発プロジェクトを多数指揮してきたベトナム人副代表が直接ダブルチェックを行います。土地使用権証明書、開発許可、オーナーの財務健全性、消防基準適合を厳正に精査した上で契約に臨みます。",
      vn: "Tổng Giám đốc của chúng tôi sở hữu chứng chỉ Chuyên gia Giao dịch Bất động sản quốc gia Nhật Bản (Takken-shi), kết hợp với Phó Chủ tịch từng trực tiếp lãnh đạo nhiều dự án bất động sản lớn tại miền Trung. Mọi hợp đồng đều được thẩm định kỹ lưỡng về quyền sử dụng đất, giấy phép xây dựng, điều kiện PCCC và uy tín chủ đầu tư.",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// PRESTIGIOUS 5-STAR HOTEL PARTNERS & CLIENT PLACEHOLDERS
// TODO: Thay bằng logo chính thức của các đối tác & khách hàng thực tế
// ─────────────────────────────────────────────────────────────────────────────
export interface PartnerBrand {
  id: string;
  name: string;
  category: string;
}

export const partnerBrands: PartnerBrand[] = [
  { id: "p1", name: "InterContinental Danang Sun Peninsula Resort", category: "5-Star Luxury Resort" },
  { id: "p2", name: "Novotel Danang Premier Han River", category: "5-Star Riverside Hotel" },
  { id: "p3", name: "Marriott Resort & Spa Da Nang", category: "5-Star International Hotel" },
  { id: "p4", name: "Sheraton Grand Danang Resort", category: "5-Star Convention Center" },
  { id: "p5", name: "Pullman Danang Beach Resort", category: "5-Star Beachfront Resort" },
  { id: "p6", name: "Furama Resort Danang", category: "5-Star MICE Convention Resort" },
];

// ─────────────────────────────────────────────────────────────────────────────
// FLOATING CONTACT CONFIGURATION
// TODO: Điền link Zalo OA, LINE OA, WhatsApp Business chính thức của công ty
// ─────────────────────────────────────────────────────────────────────────────
export const floatingContactConfig = {
  enabled: true,
  hotline: "+84 329 622 061",
  hotlineHref: "tel:+84329622061",
  // TODO: Thay link Zalo thật (ví dụ: https://zalo.me/0329622061)
  zaloHref: "https://zalo.me/0329622061",
  // TODO: Thay link LINE thật (ví dụ: https://line.me/R/ti/p/@jumpup)
  lineHref: "https://line.me/R/ti/p/@jumpup",
  // TODO: Thay link WhatsApp thật (ví dụ: https://wa.me/84329622061)
  whatsappHref: "https://wa.me/84329622061",
  email: "jumpupdanang@gmail.com",
};
