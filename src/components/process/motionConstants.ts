// ─────────────────────────────────────────────────────────────────────────────
// SCROLL-DRIVEN RAIL: 3 TUNING KNOBS (Núm chỉnh nhanh)
// ─────────────────────────────────────────────────────────────────────────────

/** 1. Ngưỡng cuộn bắt đầu & kết thúc của đường vàng chạy trên ray */
export const RAIL_SCROLL_OFFSET: ["start 75%", "end 65%"] = ["start 75%", "end 65%"];

/** 2. Độ trễ stagger giữa các cột khi vào viewport (giây) */
export const STAGGER_DELAY = 0.1;

/** 3. Độ mờ của thẻ chưa tới (tối thiểu 0.65 để đảm bảo tương phản WCAG AA) */
export const INACTIVE_OPACITY = 0.7;

// ─────────────────────────────────────────────────────────────────────────────
// CHUYỂN ĐỘNG & EASING DÙNG CHUNG
// ─────────────────────────────────────────────────────────────────────────────
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const DUR = 0.7;

// Cấu hình lò xo mượt cho đường vàng
export const SPRING_CONFIG = { stiffness: 120, damping: 30 };

// Ngưỡng cuộn tương ứng với 5 nút trên ray (0.0 → 1.0)
export const STEP_THRESHOLDS = [0.05, 0.28, 0.52, 0.75, 0.95] as const;
