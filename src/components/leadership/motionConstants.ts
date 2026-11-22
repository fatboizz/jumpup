// ─────────────────────────────────────────────────────────────────────────────
// EXECUTIVE PORTRAIT DUO: 3 TUNING KNOBS (Núm chỉnh nhanh)
// ─────────────────────────────────────────────────────────────────────────────

/** 1. Số dòng tiểu sử hiển thị khi thu gọn (line-clamp) */
export const COLLAPSED_BIO_LINES = 4;

/** 2. Tỉ lệ phóng to nhẹ của ảnh chân dung khi hover thẻ (1.00 → 1.03) */
export const PHOTO_HOVER_SCALE = 1.03;

/** 3. Độ trễ stagger giữa hai thẻ lãnh đạo khi reveal vào viewport (giây) */
export const STAGGER_DELAY = 0.12;

// ─────────────────────────────────────────────────────────────────────────────
// CHUYỂN ĐỘNG & EASING DÙNG CHUNG
// ─────────────────────────────────────────────────────────────────────────────
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const DUR = 0.7;
