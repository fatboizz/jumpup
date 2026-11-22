// ─────────────────────────────────────────────────────────────────────────────
// CINEMATIC CAROUSEL: 3 TUNING KNOBS (Núm chỉnh nhanh)
// ─────────────────────────────────────────────────────────────────────────────

/** 1. Tỉ lệ scale của thẻ không active (0.85 – 0.95) */
export const INACTIVE_SCALE = 0.9;

/** 2. Độ mạnh parallax ảnh bên trong thẻ (0.04 – 0.10) */
export const PARALLAX_STRENGTH = 0.06;

/** 3. Độ trễ hiển thị chữ sau khi thẻ đã dừng ổn định (giây) */
export const TEXT_SETTLE_DELAY = 0.12;

// ─────────────────────────────────────────────────────────────────────────────
// CHUYỂN ĐỘNG & EASING DÙNG CHUNG
// ─────────────────────────────────────────────────────────────────────────────
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
export const DUR_CONTENT = 0.7;
export const STAGGER_CHILDREN = 0.07;

// Drag cursor spring config
export const CURSOR_SPRING = { stiffness: 300, damping: 30 };
