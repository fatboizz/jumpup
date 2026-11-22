import { Project } from "./projectTypes";

export const PROJECTS: Project[] = [
  {
    id: "gala-intercontinental",
    category: "event",
    featured: true,
    // TODO: Thay bằng ảnh sự kiện thật: /images/projects/gala-intercontinental-cover.jpg
    cover: {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80",
      altKey: "proj_gala_alt_cover",
      objectPosition: "center 40%",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_gala_alt_1",
      },
      {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_gala_alt_2",
      },
      {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_gala_alt_3",
      },
    ],
    titleKey: "proj_gala_title",
    locationKey: "proj_gala_loc",
    summaryKey: "proj_gala_summary",
    year: 2024,
    scale: { valueKey: "proj_gala_scale_val", labelKey: "proj_gala_scale_lbl" },
    venueKey: "proj_gala_venue",
    scopeKeys: ["proj_gala_scope_1", "proj_gala_scope_2", "proj_gala_scope_3", "proj_gala_scope_4"],
    resultKeys: ["proj_gala_res_1", "proj_gala_res_2"],
    clientDisplay: "anonymized",
    clientKey: "proj_gala_client",
    isPlaceholder: true, // TODO: Thay bằng dữ liệu nghiệm thu thật
  },
  {
    id: "fintech-conference",
    category: "event",
    featured: false,
    // TODO: Thay bằng ảnh sự kiện thật: /images/projects/fintech-conference-cover.jpg
    cover: {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
      altKey: "proj_fintech_alt_cover",
      objectPosition: "center center",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_fintech_alt_1",
      },
      {
        src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_fintech_alt_2",
      },
      {
        src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_fintech_alt_3",
      },
    ],
    titleKey: "proj_fintech_title",
    locationKey: "proj_fintech_loc",
    summaryKey: "proj_fintech_summary",
    year: 2024,
    scale: { valueKey: "proj_fintech_scale_val", labelKey: "proj_fintech_scale_lbl" },
    venueKey: "proj_fintech_venue",
    scopeKeys: ["proj_fintech_scope_1", "proj_fintech_scope_2", "proj_fintech_scope_3", "proj_fintech_scope_4"],
    resultKeys: ["proj_fintech_res_1", "proj_fintech_res_2"],
    clientDisplay: "anonymized",
    clientKey: "proj_fintech_client",
    isPlaceholder: true, // TODO: Thay bằng dữ liệu thật
  },
  {
    id: "fdi-engineering-hub",
    category: "market",
    featured: false,
    // TODO: Thay bằng ảnh văn phòng thật: /images/projects/fdi-hub-cover.jpg
    cover: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      altKey: "proj_fdi_alt_cover",
      objectPosition: "center center",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_fdi_alt_1",
      },
      {
        src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_fdi_alt_2",
      },
      {
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_fdi_alt_3",
      },
    ],
    titleKey: "proj_fdi_title",
    locationKey: "proj_fdi_loc",
    summaryKey: "proj_fdi_summary",
    year: 2024,
    scale: { valueKey: "proj_fdi_scale_val", labelKey: "proj_fdi_scale_lbl" },
    venueKey: "proj_fdi_venue",
    scopeKeys: ["proj_fdi_scope_1", "proj_fdi_scope_2", "proj_fdi_scope_3", "proj_fdi_scope_4"],
    resultKeys: ["proj_fdi_res_1", "proj_fdi_res_2"],
    clientDisplay: "anonymized",
    clientKey: "proj_fdi_client",
    isPlaceholder: true, // TODO: Thay bằng dữ liệu thật
  },
  {
    id: "executive-golf-summit",
    category: "event",
    featured: false,
    // TODO: Thay bằng ảnh sự kiện thật: /images/projects/executive-golf-cover.jpg
    cover: {
      src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1600&q=80",
      altKey: "proj_golf_alt_cover",
      objectPosition: "center center",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_golf_alt_1",
      },
      {
        src: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_golf_alt_2",
      },
      {
        src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_golf_alt_3",
      },
    ],
    titleKey: "proj_golf_title",
    locationKey: "proj_golf_loc",
    summaryKey: "proj_golf_summary",
    year: 2024,
    scale: { valueKey: "proj_golf_scale_val", labelKey: "proj_golf_scale_lbl" },
    venueKey: "proj_golf_venue",
    scopeKeys: ["proj_golf_scope_1", "proj_golf_scope_2", "proj_golf_scope_3", "proj_golf_scope_4"],
    resultKeys: ["proj_golf_res_1", "proj_golf_res_2"],
    clientDisplay: "anonymized",
    clientKey: "proj_golf_client",
    isPlaceholder: true, // TODO: Thay bằng dữ liệu thật
  },
  {
    id: "commercial-lease-advisory",
    category: "realestate",
    featured: false,
    // TODO: Thay bằng ảnh tòa nhà thật: /images/projects/commercial-lease-cover.jpg
    cover: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      altKey: "proj_lease_alt_cover",
      objectPosition: "center 30%",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_lease_alt_1",
      },
      {
        src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_lease_alt_2",
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_lease_alt_3",
      },
    ],
    titleKey: "proj_lease_title",
    locationKey: "proj_lease_loc",
    summaryKey: "proj_lease_summary",
    year: 2023,
    scale: { valueKey: "proj_lease_scale_val", labelKey: "proj_lease_scale_lbl" },
    venueKey: "proj_lease_venue",
    scopeKeys: ["proj_lease_scope_1", "proj_lease_scope_2", "proj_lease_scope_3", "proj_lease_scope_4"],
    resultKeys: ["proj_lease_res_1", "proj_lease_res_2"],
    clientDisplay: "anonymized",
    clientKey: "proj_lease_client",
    isPlaceholder: true, // TODO: Thay bằng dữ liệu thật
  },
  {
    id: "game-studio-pipeline",
    category: "animation",
    featured: false,
    // TODO: Thay bằng ảnh studio thật: /images/projects/game-studio-cover.jpg
    cover: {
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
      altKey: "proj_game_alt_cover",
      objectPosition: "center center",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_game_alt_1",
      },
      {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_game_alt_2",
      },
      {
        src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
        altKey: "proj_game_alt_3",
      },
    ],
    titleKey: "proj_game_title",
    locationKey: "proj_game_loc",
    summaryKey: "proj_game_summary",
    year: 2024,
    scale: { valueKey: "proj_game_scale_val", labelKey: "proj_game_scale_lbl" },
    venueKey: "proj_game_venue",
    scopeKeys: ["proj_game_scope_1", "proj_game_scope_2", "proj_game_scope_3", "proj_game_scope_4"],
    resultKeys: ["proj_game_res_1", "proj_game_res_2"],
    clientDisplay: "anonymized",
    clientKey: "proj_game_client",
    isPlaceholder: true, // TODO: Thay bằng dữ liệu thật
  },
];
