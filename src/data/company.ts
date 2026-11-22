import { LucideIcon, Hotel, TrendingUp, Building, Film, Waves, Plane } from "lucide-react";
import { TranslationDictionary } from "./translations";

export interface CompanyExecutive {
  roleKey: keyof TranslationDictionary;
  nameKey: keyof TranslationDictionary;
}

export interface CompanyActivity {
  id: string;
  icon: LucideIcon;
  titleKey: keyof TranslationDictionary;
  hash: string;
}

export interface CompanyLocationHighlight {
  icon: LucideIcon;
  labelKey: keyof TranslationDictionary;
}

export interface ChatChannel {
  id: "zalo" | "whatsapp" | "line";
  name: string;
  href: string | null;
  isConfigured: boolean;
}

export interface CompanyInfoData {
  legalName: string;
  vnName: string;
  taxCode: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  addressKey: keyof TranslationDictionary;
  buildingNameKey: keyof TranslationDictionary;
  shortAddressKey: keyof TranslationDictionary;
  workingHoursKey: keyof TranslationDictionary;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  executives: CompanyExecutive[];
  activities: CompanyActivity[];
  locationHighlights: CompanyLocationHighlight[];
  chatChannels: ChatChannel[];
  // TODO: Bổ sung khi có số liệu đăng ký chính thức:
  // establishedYear?: number;
  // charterCapital?: string;
  // businessLicenseNumber?: string;
}

export const companyData: CompanyInfoData = {
  legalName: "JUMPUP SERVICES CO.,LTD",
  vnName: "CÔNG TY TNHH DỊCH VỤ JUMPUP",
  taxCode: "0402251691",
  phoneDisplay: "+84 329 622 061",
  phoneRaw: "+84329622061",
  email: "jumpupdanang@gmail.com",
  addressKey: "tbl_addr_v",
  buildingNameKey: "loc_building_name",
  shortAddressKey: "loc_short_address",
  workingHoursKey: "contact_hours_val",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Bach%20Dang%20Complex,%2050%20Bach%20Dang,%20Hai%20Chau,%20Da%20Nang&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl:
    "https://maps.google.com/?q=Bach+Dang+Complex,+50+Bach+Dang,+Hai+Chau,+Da+Nang,+Vietnam",
  executives: [
    {
      roleKey: "ceo_role",
      nameKey: "ceo_name",
    },
    {
      roleKey: "vp_role",
      nameKey: "vp_name",
    },
  ],
  activities: [
    {
      id: "event",
      icon: Hotel,
      titleKey: "srv1_title",
      hash: "#services-event",
    },
    {
      id: "market",
      icon: TrendingUp,
      titleKey: "srv2_title",
      hash: "#services-market",
    },
    {
      id: "realestate",
      icon: Building,
      titleKey: "srv3_title",
      hash: "#services-realestate",
    },
    {
      id: "animation",
      icon: Film,
      titleKey: "srv4_title",
      hash: "#services-animation",
    },
  ],
  locationHighlights: [
    {
      icon: Waves,
      labelKey: "loc_feat_river",
    },
    {
      icon: Plane,
      // Đã xác minh: Từ 50 Bạch Đằng tới Sân bay Quốc tế Đà Nẵng cự ly ~3.5km, di chuyển ô tô 8-10 phút.
      labelKey: "loc_feat_airport",
    },
    {
      icon: Building,
      labelKey: "loc_feat_hotels",
    },
  ],
  chatChannels: [
    {
      id: "zalo",
      name: "Zalo Chat",
      href: "https://zalo.me/0329622061",
      isConfigured: true,
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      href: "https://wa.me/84329622061",
      isConfigured: true,
    },
    {
      id: "line",
      name: "LINE Official",
      // TODO: Cung cấp URL LINE Official thật từ doanh nghiệp (ví dụ: https://line.me/R/ti/p/@jumpupdanang). Tạm ẩn vì chưa có tài khoản chính thức.
      href: null,
      isConfigured: false,
    },
  ],
};
