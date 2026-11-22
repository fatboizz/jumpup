// ─────────────────────────────────────────────────────────────────────────────
// 3 NÚM CHỈNH NHANH HIỆU ỨNG (QUICK MOTION TUNING KNOBS)
// ─────────────────────────────────────────────────────────────────────────────
/** 1. Tốc độ chuyển kích thước panel desktop (giây) */
export const PANEL_DURATION = 0.9;

/** 2. Độ trễ trước khi chữ xuất hiện, đợi panel mở ~45% (giây) */
export const TEXT_DELAY = 0.38;

/** 3. Biên độ dịch chuyển trục Y khi chữ xuất hiện (px) */
export const TEXT_Y_OFFSET = 14;

// ─────────────────────────────────────────────────────────────────────────────
// THÔNG SỐ CHUYỂN CẢNH ĐỒNG BỘ (SHARED LUXURY EASINGS & TIMINGS)
// ─────────────────────────────────────────────────────────────────────────────
/** Easing chuyển panel: quintic out, mượt tuyệt đối, không nảy (overshoot = 0) */
export const PANEL_EASE = [0.22, 1, 0.36, 1] as const;
export const PANEL_EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Easing và duration cho văn bản nội dung */
export const CONTENT_EASE = [0.16, 1, 0.3, 1] as const;
export const CONTENT_DURATION = 0.7;
export const STAGGER_CHILDREN = 0.07;
export const STAGGER_CHILDREN_STACKED = 0.05;

/** Chiều cao chuẩn hóa cho accordion desktop (QA-001) */
export const PANEL_HEIGHT_CLAMP = "clamp(620px, 75svh, 700px)";

/** Thời gian chữ cũ biến mất (exit) nhanh gọn, không cản trở */
export const EXIT_DURATION = 0.18;
