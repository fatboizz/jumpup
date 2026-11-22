export type Language = "en" | "jp" | "vn";

export interface TranslationDictionary {
  skip_to_content: string;

  // Navigation
  nav_about: string;
  nav_services: string;
  nav_portfolio: string;
  nav_process: string;
  nav_leadership: string;
  nav_company: string;
  nav_faq: string;
  nav_contact: string;

  // Hero Section
  hero_badge: string;
  hero_eyebrow: string;
  hero_title: string;
  hero_title_p1: string;
  hero_title_gold: string;
  hero_title_p2: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  hero_scroll_down: string;
  hero_active_showcase: string;
  hero_prev_slide: string;
  hero_next_slide: string;
  hero_pause_slide: string;
  hero_play_slide: string;
  hero_details_link: string;
  hero_carousel_aria: string;
  hero_slide_aria: string;

  // Stats Strip (Hero)
  stat_capacity_val: string;
  stat_capacity_lbl: string;
  stat_regions_val: string;
  stat_regions_lbl: string;
  stat_years_val: string;
  stat_years_lbl: string;
  stat_languages_val: string;
  stat_languages_lbl: string;

  // Metrics
  metric_1: string;
  metric_2_unit: string;
  metric_2: string;
  metric_3_val: string;
  metric_3: string;
  metric_4: string;

  // About Section
  about_eyebrow: string;
  about_heading: string;
  about_mission: string;
  strength_1_title: string;
  strength_1_desc: string;
  strength_2_title: string;
  strength_2_desc: string;
  strength_3_title: string;
  strength_3_desc: string;

  // Services Section
  services_eyebrow: string;
  services_heading: string;
  services_subtitle: string;
  service_cta_consult: string;
  services_custom_need: string;
  services_cta_contact: string;
  services_tab_list_aria: string;
  services_prev_service: string;
  services_next_service: string;
  srv_stat_compliance: string;
  srv_stat_takkenshi: string;
  srv_stat_game_gov: string;
  srv_stat_japan_studio: string;
  srv_stat_5star: string;
  srv_collapsed_1: string;
  srv_collapsed_2: string;
  srv_collapsed_3: string;
  srv_collapsed_4: string;
  srv_expand_hint: string;

  srv1_badge: string;
  srv1_title: string;
  srv1_headline: string;
  srv1_overview: string;
  srv1_why_title: string;
  srv1_why_1: string;
  srv1_why_2: string;
  srv1_why_3: string;
  srv1_m1_title: string;
  srv1_m1_desc: string;
  srv1_m2_title: string;
  srv1_m2_desc: string;
  srv1_m3_title: string;
  srv1_m3_desc: string;
  srv1_m4_title: string;
  srv1_m4_desc: string;

  srv2_title: string;
  srv2_headline: string;
  srv2_overview: string;
  srv2_m1_t: string;
  srv2_m1_d: string;
  srv2_m2_t: string;
  srv2_m2_d: string;
  srv2_m3_t: string;
  srv2_m3_d: string;

  srv3_title: string;
  srv3_headline: string;
  srv3_overview: string;
  srv3_m1_t: string;
  srv3_m1_d: string;
  srv3_m2_t: string;
  srv3_m2_d: string;
  srv3_m3_t: string;
  srv3_m3_d: string;

  srv4_title: string;
  srv4_headline: string;
  srv4_overview: string;
  srv4_m1_t: string;
  srv4_m1_d: string;
  srv4_m2_t: string;
  srv4_m2_d: string;
  srv4_m3_t: string;
  srv4_m3_d: string;

  // Portfolio Section
  portfolio_eyebrow: string;
  portfolio_heading: string;
  portfolio_subtitle: string;
  portfolio_filter_all: string;
  portfolio_filter_event: string;
  portfolio_filter_market: string;
  portfolio_filter_realestate: string;
  portfolio_filter_animation: string;
  portfolio_view_details: string;
  portfolio_modal_close: string;
  portfolio_guest_label: string;
  portfolio_year_label: string;
  portfolio_venue_label: string;
  portfolio_highlight_label: string;
  portfolio_overview_label: string;

  // Projects Section UI (Bento Gallery & Viewer)
  project_eyebrow: string;
  project_heading: string;
  project_subtitle: string;
  project_filter_all: string;
  project_filter_event: string;
  project_filter_market: string;
  project_filter_realestate: string;
  project_filter_animation: string;
  project_view_details: string;
  project_request_similar: string;
  project_inquiry_template: string;
  project_scope_heading: string;
  project_results_heading: string;
  project_client_lbl: string;
  project_scale_lbl: string;
  project_venue_lbl: string;
  project_year_lbl: string;
  project_category_lbl: string;
  project_close: string;
  project_prev: string;
  project_next: string;
  project_sample_badge: string;
  project_aria_card: string;
  project_aria_gallery_img: string;
  project_aria_filter_live: string;
  project_drag_cursor: string;
  project_carousel_aria: string;
  project_slide_label: string;
  project_stat_1_val: string;
  project_stat_1_lbl: string;
  project_stat_2_val: string;
  project_stat_2_lbl: string;
  project_stat_3_val: string;
  project_stat_3_lbl: string;
  project_stat_4_val: string;
  project_stat_4_lbl: string;

  // Project 1: Gala InterContinental
  proj_gala_title: string;
  proj_gala_loc: string;
  proj_gala_venue: string;
  proj_gala_client: string;
  proj_gala_scale_val: string;
  proj_gala_scale_lbl: string;
  proj_gala_summary: string;
  proj_gala_scope_1: string;
  proj_gala_scope_2: string;
  proj_gala_scope_3: string;
  proj_gala_scope_4: string;
  proj_gala_res_1: string;
  proj_gala_res_2: string;
  proj_gala_alt_cover: string;
  proj_gala_alt_1: string;
  proj_gala_alt_2: string;
  proj_gala_alt_3: string;

  // Project 2: FinTech Conference
  proj_fintech_title: string;
  proj_fintech_loc: string;
  proj_fintech_venue: string;
  proj_fintech_client: string;
  proj_fintech_scale_val: string;
  proj_fintech_scale_lbl: string;
  proj_fintech_summary: string;
  proj_fintech_scope_1: string;
  proj_fintech_scope_2: string;
  proj_fintech_scope_3: string;
  proj_fintech_scope_4: string;
  proj_fintech_res_1: string;
  proj_fintech_res_2: string;
  proj_fintech_alt_cover: string;
  proj_fintech_alt_1: string;
  proj_fintech_alt_2: string;
  proj_fintech_alt_3: string;

  // Project 3: FDI Engineering Hub
  proj_fdi_title: string;
  proj_fdi_loc: string;
  proj_fdi_venue: string;
  proj_fdi_client: string;
  proj_fdi_scale_val: string;
  proj_fdi_scale_lbl: string;
  proj_fdi_summary: string;
  proj_fdi_scope_1: string;
  proj_fdi_scope_2: string;
  proj_fdi_scope_3: string;
  proj_fdi_scope_4: string;
  proj_fdi_res_1: string;
  proj_fdi_res_2: string;
  proj_fdi_alt_cover: string;
  proj_fdi_alt_1: string;
  proj_fdi_alt_2: string;
  proj_fdi_alt_3: string;

  // Project 4: Executive Summit & Golf
  proj_golf_title: string;
  proj_golf_loc: string;
  proj_golf_venue: string;
  proj_golf_client: string;
  proj_golf_scale_val: string;
  proj_golf_scale_lbl: string;
  proj_golf_summary: string;
  proj_golf_scope_1: string;
  proj_golf_scope_2: string;
  proj_golf_scope_3: string;
  proj_golf_scope_4: string;
  proj_golf_res_1: string;
  proj_golf_res_2: string;
  proj_golf_alt_cover: string;
  proj_golf_alt_1: string;
  proj_golf_alt_2: string;
  proj_golf_alt_3: string;

  // Project 5: Commercial Lease Advisory
  proj_lease_title: string;
  proj_lease_loc: string;
  proj_lease_venue: string;
  proj_lease_client: string;
  proj_lease_scale_val: string;
  proj_lease_scale_lbl: string;
  proj_lease_summary: string;
  proj_lease_scope_1: string;
  proj_lease_scope_2: string;
  proj_lease_scope_3: string;
  proj_lease_scope_4: string;
  proj_lease_res_1: string;
  proj_lease_res_2: string;
  proj_lease_alt_cover: string;
  proj_lease_alt_1: string;
  proj_lease_alt_2: string;
  proj_lease_alt_3: string;

  // Project 6: Game Studio Pipeline
  proj_game_title: string;
  proj_game_loc: string;
  proj_game_venue: string;
  proj_game_client: string;
  proj_game_scale_val: string;
  proj_game_scale_lbl: string;
  proj_game_summary: string;
  proj_game_scope_1: string;
  proj_game_scope_2: string;
  proj_game_scope_3: string;
  proj_game_scope_4: string;
  proj_game_res_1: string;
  proj_game_res_2: string;
  proj_game_alt_cover: string;
  proj_game_alt_1: string;
  proj_game_alt_2: string;
  proj_game_alt_3: string;

  // Process Section
  process_eyebrow: string;
  process_heading: string;
  process_subtitle: string;
  process_timeline_label: string;
  process_step_badge: string;
  process_note: string;
  process_cta_prompt: string;
  process_cta_btn: string;

  process_step_1_title: string;
  process_step_1_lead: string;
  process_step_1_desc: string;
  process_step_1_duration: string;

  process_step_2_title: string;
  process_step_2_lead: string;
  process_step_2_desc: string;
  process_step_2_duration: string;

  process_step_3_title: string;
  process_step_3_lead: string;
  process_step_3_desc: string;
  process_step_3_duration: string;

  process_step_4_title: string;
  process_step_4_lead: string;
  process_step_4_desc: string;
  process_step_4_duration: string;

  process_step_5_title: string;
  process_step_5_lead: string;
  process_step_5_desc: string;
  process_step_5_duration: string;

  // FAQ & Partners Section
  faq_eyebrow: string;
  faq_heading: string;
  faq_subtitle: string;
  faq_partner_title: string;
  faq_partner_subtitle: string;

  // Leadership Section
  lead_eyebrow: string;
  lead_heading: string;
  lead_subtitle: string;

  ceo_role: string;
  ceo_name: string;
  ceo_credentials: string;
  ceo_bio: string;
  badge_takken: string;
  badge_konami: string;
  badge_vietnam_exp: string;
  badge_meti: string;

  vp_role: string;
  vp_name: string;
  vp_credentials: string;
  vp_bio: string;
  badge_mice: string;
  badge_development: string;
  badge_english: string;
  badge_central_network: string;

  bio_read_more: string;
  bio_show_less: string;

  // Company Profile Section
  comp_eyebrow: string;
  comp_heading: string;
  tbl_name_k: string;
  tbl_addr_k: string;
  tbl_addr_v: string;
  tbl_lead_k: string;
  tbl_tax_k: string;
  tbl_biz_k: string;
  tbl_phone_k: string;
  tbl_email_k: string;
  tbl_copied_toast: string;
  tbl_copy_btn: string;
  tbl_copied_btn: string;
  tbl_directions_btn: string;

  loc_badge: string;
  loc_building_name: string;
  loc_short_address: string;
  loc_desc: string;
  loc_map_link: string;
  loc_feat_river: string;
  loc_feat_airport: string;
  loc_feat_hotels: string;
  tbl_view_leadership: string;
  sr_opens_new_tab: string;
  loc_map_fallback_prompt: string;

  // Contact Section
  cont_eyebrow: string;
  cont_heading: string;
  cont_subtitle: string;

  contact_info_title: string;
  contact_info_desc: string;
  contact_hotline_lbl: string;
  contact_email_lbl: string;
  contact_addr_lbl: string;
  contact_hours_lbl: string;
  contact_hours_val: string;
  contact_sla_badge: string;
  contact_sla_text: string;
  contact_social_lbl: string;

  form_name_lbl: string;
  form_name_ph: string;
  form_comp_lbl: string;
  form_comp_ph: string;
  form_email_lbl: string;
  form_email_ph: string;
  form_phone_lbl: string;
  form_phone_ph: string;
  form_cat_lbl: string;
  form_budget_lbl: string;
  form_budget_ph: string;
  form_date_lbl: string;
  form_date_ph: string;
  form_optional: string;
  form_required_sr: string;
  form_char_count: string;
  form_commitment: string;
  form_submit_btn: string;
  form_submitting_btn: string;
  form_reset_another: string;
  form_privacy_consent: string;
  form_privacy_link: string;
  form_submit_processing: string;
  form_reset_btn: string;
  form_success_badge: string;

  chip_event: string;
  chip_market: string;
  chip_realestate: string;
  chip_animation: string;
  chip_other: string;

  opt_event: string;
  opt_market: string;
  opt_realestate: string;
  opt_animation: string;
  opt_other: string;
  form_msg_lbl: string;
  form_msg_ph: string;
  form_note: string;
  form_submit: string;
  form_ok_title: string;
  form_ok_desc: string;

  err_name_required: string;
  err_company_required: string;
  err_email_invalid: string;
  err_phone_invalid: string;
  err_message_required: string;
  err_privacy_required: string;
  err_missing_fields: string;
  err_rate_limited: string;
  err_network: string;
  err_server_error: string;
  err_too_long: string;

  // Footer
  footer_desc: string;
  footer_nav_title: string;
  footer_contact_title: string;
  footer_legal_title: string;
  footer_rights: string;
  footer_privacy_link: string;
  footer_terms_link: string;
  footer_tax_id_lbl: string;
  footer_tagline: string;

  // Accessibility & Floating Contact
  back_to_top_aria: string;
  floating_contact_aria: string;
  floating_zalo: string;
  floating_line: string;
  floating_whatsapp: string;
  floating_call: string;
  floating_toggle_open: string;
  floating_toggle_close: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  // ───────────────────────────────────────────────────────────────────────────
  // ENGLISH (EN)
  // ───────────────────────────────────────────────────────────────────────────
  en: {
    skip_to_content: "Skip to main content",

    nav_about: "About Us",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_process: "Workflow",
    nav_leadership: "Leadership",
    nav_company: "Company Profile",
    nav_faq: "FAQ",
    nav_contact: "Contact",

    hero_badge: "DA NANG • HANOI • HO CHI MINH CITY",
    hero_eyebrow: "DA NANG · HANOI · HO CHI MINH CITY",
    hero_title: "Your trusted execution partner for business in Vietnam",
    hero_title_p1: "Your trusted execution partner for business in",
    hero_title_gold: "Vietnam",
    hero_title_p2: "",
    hero_subtitle: "Premier execution partner combining Japanese management precision with native Vietnamese networks. Delivering 100+ guest 5-star hotel events, market entry feasibility, and commercial real estate advisory across North, Central, and South Vietnam.",
    hero_cta_primary: "Schedule a Consultation",
    hero_cta_secondary: "Explore Our Services",
    hero_scroll_down: "Scroll to explore",
    hero_active_showcase: "Active Showcase",
    hero_prev_slide: "Previous slide",
    hero_next_slide: "Next slide",
    hero_pause_slide: "Pause showcase",
    hero_play_slide: "Play showcase",
    hero_details_link: "Details",
    hero_carousel_aria: "Corporate Capabilities Showcase",
    hero_slide_aria: "Slide",

    stat_capacity_val: "500+",
    stat_capacity_lbl: "Guests / 5-Star Events",
    stat_regions_val: "3",
    stat_regions_lbl: "North · Central · South",
    stat_years_val: "10+",
    stat_years_lbl: "Years on the Ground",
    stat_languages_val: "3",
    stat_languages_lbl: "Languages (EN / JP / VN)",

    metric_1: "Guest Capacity at 5-Star Hotel Events",
    metric_2_unit: "Years",
    metric_2: "On-the-Ground Vietnam Operations",
    metric_3_val: "3 Regions",
    metric_3: "North, Central & South Coverage",
    metric_4: "Multilingual Executive Management",

    about_eyebrow: "ABOUT JUMPUP SERVICES",
    about_heading: "Your Execution Partner in Vietnam",
    about_mission: "Headquartered in Da Nang, Vietnam, JUMPUP SERVICES is the premier local execution partner for international enterprises planning corporate events, investments, and business launches in Vietnam. We eliminate language, cultural, and regulatory barriers—delivering seamless, international-standard operations on the ground.",

    strength_1_title: "Global Management Standards Meets Local Execution Power",
    strength_1_desc: "Led jointly by our Japanese CEO—with 20+ years of corporate management experience—and our English-fluent Vietnamese Vice President with a proven track record in major local developments, we combine transparent, precision project management with strong local negotiation capabilities.",
    strength_2_title: "Deep Expertise Across North, Central & South Vietnam",
    strength_2_desc: "Backed by over a decade of hands-on business operations in Hanoi, Da Nang, and Ho Chi Minh City, we navigate regional business practices and regulatory frameworks with confidence.",
    strength_3_title: "End-to-End Solutions from Events to Investment & Launch",
    strength_3_desc: "From 100+ guest corporate events at 5-star hotels to market entry, real estate investment, and animation production, we provide comprehensive local support under one roof.",

    services_eyebrow: "OUR SERVICES",
    services_heading: "Comprehensive Business Solutions",
    services_subtitle: "Tailored execution for global corporations, event organizers, and investors operating in Vietnam.",
    service_cta_consult: "Consult for this Service →",
    services_custom_need: "Looking for tailored solutions? Inquire for bespoke advisory →",
    services_cta_contact: "Inquire About This Service →",
    srv_collapsed_1: "5-Star Corporate Events",
    srv_collapsed_2: "Vietnam Market Entry",
    srv_collapsed_3: "Commercial Real Estate",
    srv_collapsed_4: "Animation & Creative",
    srv_expand_hint: "Expand service details",
    services_tab_list_aria: "Corporate Services Selection Tabs",
    services_prev_service: "Previous service",
    services_next_service: "Next service",
    srv_stat_compliance: "Legal Compliance",
    srv_stat_takkenshi: "Takken-shi Oversight",
    srv_stat_game_gov: "Yrs KONAMI Governance",
    srv_stat_japan_studio: "Japan Studio Trained",
    srv_stat_5star: "5-Star Hotels",

    srv1_badge: "FLAGSHIP SERVICE • 100+ GUESTS AT 5-STAR HOTELS",
    srv1_title: "Corporate Event Management & Agency Services",
    srv1_headline: "End-to-End Corporate Event Production at 5-Star Luxury Hotels in Vietnam. Delivering seamless execution for 100+ guest events through Japanese-standard precision and strong local networks.",
    srv1_overview: "JUMPUP SERVICES provides comprehensive planning and on-site management for large-scale corporate events (100 to 500+ attendees) hosted at premier 5-star hotels across Vietnam, including Da Nang, Hanoi, and Ho Chi Minh City. From annual kickoff meetings and anniversary galas to international conferences and executive incentive trips, we handle every detail from concept design and venue negotiation to stage production and multilingual on-site operations.",
    srv1_why_title: "Why Choose JUMPUP for Large-Scale Events",
    srv1_why_1: "Bicultural Leadership: Japanese precision meets strong local negotiation power",
    srv1_why_2: "Proven Capability for 100+ Guest Logistics, VIP protocols & contingency management",
    srv1_why_3: "Direct Partnerships with 5-Star Hotel Event Teams & Top Production Vendors",
    srv1_m1_title: "5-Star Hotel Venue Sourcing & Negotiation",
    srv1_m1_desc: "Full coordination of grand ballrooms, conference facilities, group accommodations, gala dinners, and VIP arrangements at top 5-star hotels under competitive corporate terms.",
    srv1_m2_title: "Stage Production, AV & Visual Direction",
    srv1_m2_desc: "Complete technical management including large-scale LED screens, professional sound and lighting systems, and custom opening or corporate brand videos.",
    srv1_m3_title: "On-Site Operations & Multilingual Management",
    srv1_m3_desc: "Precision run-of-show scheduling, guest registration management for 100+ attendees, professional MCs, and seamless coordination in English, Japanese, and Vietnamese.",
    srv1_m4_title: "Transportation & Corporate Excursions",
    srv1_m4_desc: "Dedicated fleet logistics (airport transfers and private coaches), executive golf outings, cultural excursions, and customized business inspection tours.",

    srv2_title: "Market Research & Vietnam Market Entry Support",
    srv2_headline: "End-to-End Market Entry & Business Operations Support Backed by Over a Decade of Expertise Across North, Central, and South Vietnam.",
    srv2_overview: "Leveraging over 10 years of hands-on business leadership in Hanoi, Da Nang, and Ho Chi Minh City—alongside experience advising Japanese government-backed public-private projects—JUMPUP SERVICES guides foreign enterprises through every stage of entering and scaling in Vietnam.",
    srv2_m1_t: "• Market Research & Feasibility Studies",
    srv2_m1_d: "Industry analysis, competitor benchmarking, local partner sourcing & inspection tours.",
    srv2_m2_t: "• Company Incorporation & Office Setup",
    srv2_m2_d: "Business plan formulation, licensing coordination, and office/retail setup.",
    srv2_m3_t: "• Talent Acquisition & Back-Office Management",
    srv2_m3_d: "Bilingual staff recruitment, HR compliance setup & outsourced admin management.",

    srv3_title: "Real Estate Consulting & Advisory",
    srv3_headline: "Safe, Transparent Real Estate Advisory in Da Nang and Across Vietnam—Led by Licensed Japanese & Vietnamese Industry Veterans.",
    srv3_overview: "Combining our CEO’s credentials as a licensed Japanese Real Estate Transaction Specialist (Takken-shi) with our Vice President’s extensive track record leading major Vietnamese real estate developments, we eliminate legal and transactional risks for foreign buyers and corporate tenants.",
    srv3_m1_t: "• Corporate Office, Retail & Expatriate Leasing",
    srv3_m1_d: "Curated property listings in Da Nang, lease negotiations & multilingual contract review.",
    srv3_m2_t: "• Investment & Residential Property Acquisition",
    srv3_m2_d: "Foreign quota verification, developer due diligence, transaction guidance & ROI analysis.",
    srv3_m3_t: "• Property Management & Leasing Operations",
    srv3_m3_d: "Interior coordination, tenant sourcing, rent collection & maintenance management.",

    srv4_title: "Animation & Creative Production Outsourcing",
    srv4_headline: "High-Quality Animation & Game Art Production Delivered by Japan-Trained Vietnamese Creators Under Japanese Project Management.",
    srv4_overview: "We unite skilled Vietnamese animators and artists—who possess direct work experience at Japanese animation studios—with our CEO’s 20-year executive background in Japan’s gaming and entertainment industry to guarantee strict quality and deadline adherence.",
    srv4_m1_t: "• Live2D Video & Promotional Motion Production",
    srv4_m1_d: "Character rigging, modeling & dynamic motion for VTubers, games & corporate PR.",
    srv4_m2_t: "• Background Art for Games & Animation",
    srv4_m2_d: "Detailed Japanese-style background art via per-project or dedicated lab teams.",
    srv4_m3_t: "• Full-Pipeline Animation Production",
    srv4_m3_d: "Storyboarding, key animation, coloring & compositing supervised by senior directors.",

    portfolio_eyebrow: "CASE STUDIES & SHOWCASE",
    portfolio_heading: "Featured Project Portfolio",
    portfolio_subtitle: "Representative 5-star hotel events, market entry setups, and commercial advisory delivered across Vietnam.",
    portfolio_filter_all: "All Cases",
    portfolio_filter_event: "Corporate Events",
    portfolio_filter_market: "Market Entry",
    portfolio_filter_realestate: "Real Estate",
    portfolio_filter_animation: "Creative Animation",
    portfolio_view_details: "View Case Study",
    portfolio_modal_close: "Close modal",
    portfolio_guest_label: "Scale / Capacity",
    portfolio_year_label: "Execution Year",
    portfolio_venue_label: "Venue / Location",
    portfolio_highlight_label: "Key Directorship Highlights",
    portfolio_overview_label: "Overview & Directorship",

    // Projects Section UI (Bento Gallery & Viewer)
    project_eyebrow: "CASE STUDIES & SHOWCASE",
    project_heading: "Featured Corporate Engagements",
    project_subtitle: "Proven execution across five-star hotel events, Vietnam market expansion, commercial real estate, and digital creative production.",
    project_filter_all: "All Engagements",
    project_filter_event: "Corporate Events",
    project_filter_market: "Market Entry",
    project_filter_realestate: "Commercial Real Estate",
    project_filter_animation: "Animation & Creative",
    project_view_details: "View Case Details",
    project_request_similar: "Inquire About Similar Project",
    project_inquiry_template: "I am interested in discussing a project similar to: {title}",
    project_scope_heading: "Scope of Execution",
    project_results_heading: "Key Outcomes & Benchmarks",
    project_client_lbl: "Client Profile",
    project_scale_lbl: "Scale / Capacity",
    project_venue_lbl: "Venue / Location",
    project_year_lbl: "Year",
    project_category_lbl: "Sector",
    project_close: "Close details",
    project_prev: "Previous Project",
    project_next: "Next Project",
    project_sample_badge: "Dev Sample",
    project_aria_card: "View engagement details:",
    project_aria_gallery_img: "Image",
    project_aria_filter_live: "Showing projects in category:",
    project_drag_cursor: "Drag",
    project_carousel_aria: "Featured projects showcase",
    project_slide_label: "Project",
    project_stat_1_val: "250+ Guests",
    project_stat_1_lbl: "5-Star Hotel Ballroom Scale",
    project_stat_2_val: "100%",
    project_stat_2_lbl: "On-Schedule FDI Licensing",
    project_stat_3_val: "1,200 sqm",
    project_stat_3_lbl: "Prime CBD Office Leased",
    project_stat_4_val: "99.4%",
    project_stat_4_lbl: "Executive Client Satisfaction",

    // Project 1: Gala InterContinental
    proj_gala_title: "Japan-Vietnam Corporate Anniversary Gala Dinner",
    proj_gala_loc: "Son Tra Peninsula, Da Nang",
    proj_gala_venue: "InterContinental Danang Sun Peninsula Resort",
    proj_gala_client: "Japanese Multi-Industry Conglomerate",
    proj_gala_scale_val: "250+ Guests",
    proj_gala_scale_lbl: "VIP Attendees",
    proj_gala_summary: "Full-scale corporate anniversary production hosting international board members, regional partners, and VIP guests with seamless five-star luxury protocol.",
    proj_gala_scope_1: "5-Star Luxury Resort Ballroom Acquisition & Negotiation",
    proj_gala_scope_2: "Ultra-wide 8K Curved LED Stage Mapping & Lighting Design",
    proj_gala_scope_3: "Trilingual (EN/JP/VN) Executive Stage Direction & Keigo Protocol",
    proj_gala_scope_4: "Dedicated VIP Mercedes Private Chauffeur Fleet Operations",
    proj_gala_res_1: "250+ VIP delegates hosted with 100% on-time milestone execution",
    proj_gala_res_2: "Zero security or protocol incidents across full 3-day itinerary",
    proj_gala_alt_cover: "Grand ballroom gala dinner setup at 5-star beachfront resort in Da Nang",
    proj_gala_alt_1: "Curved LED main stage and VIP banquet tables arrangement",
    proj_gala_alt_2: "Trilingual executive master of ceremonies and stage direction",
    proj_gala_alt_3: "Beachfront evening welcome cocktail and traditional live performance",

    // Project 2: FinTech Conference
    proj_fintech_title: "Global FinTech Annual Leadership Kickoff Conference",
    proj_fintech_loc: "Non Nuoc Beach, Da Nang",
    proj_fintech_venue: "Sheraton Grand Danang Resort & Convention Center",
    proj_fintech_client: "Global Financial Technology Group",
    proj_fintech_scale_val: "380+ Guests",
    proj_fintech_scale_lbl: "Corporate Delegates",
    proj_fintech_summary: "Executed a two-day global conference featuring keynote presentations, interactive breakout workshops, and an oceanfront awards dinner.",
    proj_fintech_scope_1: "Multi-hall Keynote & Breakout Sessions Technical Direction",
    proj_fintech_scope_2: "High-fidelity Simultaneous Interpretation Booths (JP/EN/VN)",
    proj_fintech_scope_3: "Digital Delegate QR Accreditation & Badge Printing System",
    proj_fintech_scope_4: "Oceanfront Gala Dinner & Fireworks Celebration Production",
    proj_fintech_res_1: "380+ corporate delegates accredited with zero queue friction",
    proj_fintech_res_2: "Real-time trilingual audio streaming across 2 concurrent halls",
    proj_fintech_alt_cover: "Convention grand ballroom keynote setup with dual projection screens",
    proj_fintech_alt_1: "Simultaneous interpretation booth and technical control console",
    proj_fintech_alt_2: "Executive breakout workshop session with interactive digital displays",
    proj_fintech_alt_3: "Oceanfront gala dinner setup under coastal palm canopy",

    // Project 3: FDI Engineering Hub
    proj_fdi_title: "Tokyo IT Conglomerate: Central Vietnam Engineering Hub Setup",
    proj_fdi_loc: "Bach Dang CBD, Da Nang",
    proj_fdi_venue: "Bach Dang Complex CBD, Da Nang",
    proj_fdi_client: "Tokyo Prime-Listed IT Enterprise",
    proj_fdi_scale_val: "50+ Engineers",
    proj_fdi_scale_lbl: "Technical Capacity",
    proj_fdi_summary: "Comprehensive market feasibility, 100% foreign-owned enterprise licensing, Class-A office fit-out, and bilingual senior tech talent acquisition.",
    proj_fdi_scope_1: "Comprehensive Market Feasibility & FDI Regulatory Due Diligence",
    proj_fdi_scope_2: "100% On-Schedule Investment Registration & Entity Licensing",
    proj_fdi_scope_3: "Class-A Office Lease Negotiation & Turnkey Fit-out Supervision",
    proj_fdi_scope_4: "Executive Recruitment of 50 Senior Bilingual Engineers",
    proj_fdi_res_1: "Entity operational in 4 months (2 months ahead of target schedule)",
    proj_fdi_res_2: "100% regulatory compliance with Vietnamese labor & fiscal codes",
    proj_fdi_alt_cover: "Modern corporate software engineering office overlooking Han River Da Nang",
    proj_fdi_alt_1: "Executive conference room with panoramic city and river view",
    proj_fdi_alt_2: "Open collaboration space and ergonomic engineer workstations",
    proj_fdi_alt_3: "Formal signing ceremony for investment registration certificate",

    // Project 4: Executive Summit & Golf
    proj_golf_title: "Multinational Manufacturing Executive Summit & Golf Invitational",
    proj_golf_loc: "Coastal Da Nang & Quang Nam",
    proj_golf_venue: "BRG Da Nang Golf Resort & Montgomerie Links",
    proj_golf_client: "Japan-US-Vietnam Industrial Manufacturing Council",
    proj_golf_scale_val: "120+ C-Suite",
    proj_golf_scale_lbl: "Executive Attendees",
    proj_golf_summary: "Weekend executive retreat combining championship tournament golf, private Mercedes transfers, and oceanfront networking banquets.",
    proj_golf_scope_1: "Dual-course Championship Tournament Logistics & Live Scoring",
    proj_golf_scope_2: "Luxury Mercedes-Benz Private Escort Shuttle Logistics",
    proj_golf_scope_3: "Private Beachfront Networking Banquet & Cultural Performance",
    proj_golf_scope_4: "High-level Executive Security Protocol & Medical Standby",
    proj_golf_res_1: "120 C-suite executives accommodated with private hospitality",
    proj_golf_res_2: "98% attendee satisfaction rating in post-summit evaluation",
    proj_golf_alt_cover: "Lush coastal championship golf fairway under tropical skies in Da Nang",
    proj_golf_alt_1: "Tournament clubhouse registration and executive hospitality desk",
    proj_golf_alt_2: "Private Mercedes shuttle fleet at luxury golf resort pavilion",
    proj_golf_alt_3: "Twilight beachfront awards dinner with acoustic chamber ensemble",

    // Project 5: Commercial Lease Advisory
    proj_lease_title: "Foreign Enterprise HQ Long-Term Commercial Lease Advisory",
    proj_lease_loc: "Han River Waterfront CBD, Da Nang",
    proj_lease_venue: "Prime Riverside Commercial Tower, Da Nang",
    proj_lease_client: "European Renewable Energy Multinational",
    proj_lease_scale_val: "1,200 sqm",
    proj_lease_scale_lbl: "Leased Commercial Floor",
    proj_lease_summary: "Advised international corporate client on securing 1,200 sqm of prime CBD office space, including landlord negotiations and regulatory compliance.",
    proj_lease_scope_1: "Comprehensive CBD Grade-A Commercial Real Estate Scouting",
    proj_lease_scope_2: "Japanese Takken-shi Standard Contract Review & Legal Due Diligence",
    proj_lease_scope_3: "Commercial Lease Rent & Rent-free Period Negotiation",
    proj_lease_scope_4: "Fire Safety (PCCC) Approval & Construction Permit Filing",
    proj_lease_res_1: "Saved 18% on gross leasing expenditure over 5-year lease term",
    proj_lease_res_2: "PCCC and fit-out certificates issued with zero project delays",
    proj_lease_alt_cover: "Class-A glass commercial tower situated along Han River waterfront",
    proj_lease_alt_1: "Column-free open floor plate ready for customized corporate fit-out",
    proj_lease_alt_2: "Building executive lobby with access control turnstiles and security",
    proj_lease_alt_3: "Completed corporate reception and client consultation suites",

    // Project 6: Game Studio Pipeline
    proj_game_title: "Japanese Game Studio: Production Pipeline Lab Outsourcing",
    proj_game_loc: "Digital Tech District, Da Nang",
    proj_game_venue: "Jumpup Creative Lab, Da Nang",
    proj_game_client: "Major Japanese Console & Mobile Game Publisher",
    proj_game_scale_val: "20+ Creators",
    proj_game_scale_lbl: "Dedicated Studio Lab",
    proj_game_summary: "Established a dedicated offshore art and Live2D production team of 20 Vietnamese digital artists trained in Japanese commercial studio methods.",
    proj_game_scope_1: "Dedicated Secure Offshore Animation Production Lab Facility",
    proj_game_scope_2: "Live2D Rigging & Spine Animation Pipeline Integration",
    proj_game_scope_3: "Ex-KONAMI Executive Quality Control & Milestone Governance",
    proj_game_scope_4: "Enterprise-grade Data Security, Dedicated VPN & NDA Compliance",
    proj_game_res_1: "300+ game-ready animation assets delivered on schedule",
    proj_game_res_2: "Zero NDA security anomalies and 99.4% first-pass acceptance rate",
    proj_game_alt_cover: "Creative animation digital studio with dual-monitor artist workstations",
    proj_game_alt_1: "Live2D character rigging and motion calibration workstation",
    proj_game_alt_2: "Art directors conducting frame-by-frame quality review session",
    proj_game_alt_3: "Secure server rack and biometric access control for client NDA lab",

    process_eyebrow: "STRUCTURED WORKFLOW",
    process_heading: "Proven 5-Stage Project Execution",
    process_subtitle: "How we turn corporate vision into flawless on-the-ground reality in Vietnam.",
    process_timeline_label: "Target Timeline",
    process_step_badge: "PHASE",
    process_note: "* All milestones are tracked through shared bicultural management logs with daily or weekly executive reporting in Japanese, English, or Vietnamese.",
    process_cta_prompt: "Ready to execute? Contact us for a strategic proposal tailored to your needs.",
    process_cta_btn: "Request Consultation →",

    process_step_1_title: "Consultation & Requirement Analysis",
    process_step_1_lead: "Understanding your vision, scale & constraints",
    process_step_1_desc: "We conduct an in-depth consultation in Japanese, English, or Vietnamese to clarify your core objectives, estimated guest headcount, hotel venue preferences, and timeline milestones.",
    process_step_1_duration: "Day 1 – 2",

    process_step_2_title: "Strategic Proposal & Quotation",
    process_step_2_lead: "5-Star hotel options & comprehensive cost breakdown",
    process_step_2_desc: "We deliver a detailed project proposal featuring shortlisted 5-star ballrooms, audio/visual stage concepts, detailed schedules, and transparent, itemized corporate rates.",
    process_step_2_duration: "Day 3 – 5",

    process_step_3_title: "Venue Negotiation & Pre-Production",
    process_step_3_lead: "Contracting, technical staging & VIP logistics",
    process_step_3_desc: "Our bilingual team finalizes hotel corporate contracts, conducts technical site inspections, programs large-scale LED visuals, books luxury fleet transport, and verifies all bilingual materials.",
    process_step_3_duration: "Week 2 – 4",

    process_step_4_title: "On-Site Operational Directorship",
    process_step_4_lead: "Japanese precision & native field management",
    process_step_4_desc: "Led on-site by our executive directors, we supervise the run-of-show, manage 100+ guest registrations, coordinate trilingual MCs, and handle real-time VIP hospitality and contingencies.",
    process_step_4_duration: "Event Day",

    process_step_5_title: "Post-Event Reporting & Partnership",
    process_step_5_lead: "Media delivery, financial reconciliation & follow-up",
    process_step_5_desc: "We compile professional high-resolution photo/video archives, provide a comprehensive post-event evaluation report, finalize transparent financial reconciliation, and support your ongoing business in Vietnam.",
    process_step_5_duration: "Within 7 Days",

    faq_eyebrow: "FREQUENTLY ASKED QUESTIONS",
    faq_heading: "Clarifying Your Business Inquiries",
    faq_subtitle: "Common questions regarding corporate events, contracting, licensing, and operations in Vietnam.",
    faq_partner_title: "Prestigious 5-Star Hotel Venue Partners",
    faq_partner_subtitle: "Direct corporate negotiation partnerships with premier hospitality groups across Vietnam.",

    lead_eyebrow: "EXECUTIVE DIRECTORS",
    lead_heading: "Executive Management Team",
    lead_subtitle: "A bicultural two-top leadership structure uniting Japanese corporate governance with deep Vietnamese market execution.",

    ceo_role: "CEO & Representative Director",
    ceo_name: "Yasumasa Hibi",
    ceo_credentials: "Licensed Real Estate Transaction Specialist (Japan) • 10+ Years in Vietnam",
    ceo_bio: "Following his career in customer service at a major Japanese homebuilder, Mr. Hibi spent 20 years at leading gaming company KONAMI, driving multifaceted business initiatives across legal affairs, corporate planning, business administration, IT business development, and service division management. He holds Japan’s national Real Estate Transaction Specialist license (Takken-shi) and has served as a consultant for public-private co-creation support projects under Japan’s Ministry of Economy, Trade and Industry (METI). With over 10 years of residence in Vietnam (Hanoi, Ho Chi Minh City, and Da Nang), he has led local corporate subsidiaries, IT development teams, and the management of a 120-unit serviced apartment complex, while also writing a regular column for Walking Vietnam magazine. At JUMPUP SERVICES, he combines Japanese-standard management precision with deep local expertise to ensure client success across corporate events, market entry, real estate, and creative production.",
    badge_takken: "Takken-shi Licensed (Japan)",
    badge_konami: "20 Yrs Ex-KONAMI Executive",
    badge_vietnam_exp: "10+ Yrs Vietnam Residence",
    badge_meti: "METI Project Advisory",

    vp_role: "Vice President",
    vp_name: "Phạm Thị Thanh Huyền",
    vp_credentials: "Project Director • Real Estate & Corporate Event Specialist • Fluent in English",
    vp_bio: "A seasoned project director with a primary career in Vietnam’s real estate sales and transactions, Ms. Huyen has successfully led numerous large-scale developments and business initiatives. She possesses an extensive track record in planning and executing major promotional events for hotels and condominiums, as well as large-scale corporate internal events, excelling in everything from audience engagement to seamless on-site operations. Fluent in English, she communicates and negotiates effortlessly with foreign enterprises and international investors. As Vice President at JUMPUP SERVICES, she oversees corporate event production for 100+ guests at 5-star hotels, real estate consulting, and negotiations with local partners and vendors—combining Japanese-standard precision with deep local networks to ensure client success.",
    badge_mice: "5-Star Hotel & MICE Specialist",
    badge_development: "Major Development Director",
    badge_english: "Fluent English Negotiation",
    badge_central_network: "Native Central VN Network",

    bio_read_more: "Read Full Biography",
    bio_show_less: "Collapse Biography",

    comp_eyebrow: "CORPORATE INFORMATION",
    comp_heading: "Company Profile",
    tbl_name_k: "Company Name",
    tbl_addr_k: "Headquarters",
    tbl_addr_v: "8th Floor, Bach Dang Complex, 50 Bach Dang Street, Hai Chau Ward, Da Nang City, Vietnam",
    tbl_lead_k: "Leadership",
    tbl_tax_k: "Tax Code",
    tbl_biz_k: "Business Activities",
    tbl_phone_k: "Phone",
    tbl_email_k: "Email",
    tbl_copied_toast: "Copied to clipboard!",
    tbl_copy_btn: "Copy",
    tbl_copied_btn: "Copied!",
    tbl_directions_btn: "Get Directions",

    loc_badge: "DA NANG HEADQUARTERS",
    loc_building_name: "Bach Dang Complex",
    loc_short_address: "50 Bach Dang, Hai Chau, Da Nang",
    loc_desc: "Located along the Han River in the central business district of Da Nang, offering direct access to 5-star riverside hotels, administrative centers, and Da Nang International Airport (10 mins).",
    loc_map_link: "Open in Google Maps",
    loc_feat_river: "Prime Han Riverfront (Central Business District)",
    loc_feat_airport: "10 Minutes to Da Nang International Airport",
    loc_feat_hotels: "Surrounded by 5-Star Riverside Hospitality Cluster",
    tbl_view_leadership: "View Executive Leadership →",
    sr_opens_new_tab: "(opens in new tab)",
    loc_map_fallback_prompt: "Map preview unavailable. Click to open in Google Maps.",

    cont_eyebrow: "GET IN TOUCH",
    cont_heading: "Contact Us & Consultation",
    cont_subtitle: "Planning a 100+ guest corporate event at a 5-star hotel, market entry, or real estate investment in Vietnam? Reach out to our bilingual executive team.",

    contact_info_title: "Direct Executive Contacts",
    contact_info_desc: "Connect directly with our senior management team in Da Nang. We provide consultations in English, Japanese, and Vietnamese.",
    contact_hotline_lbl: "Direct Hotline",
    contact_email_lbl: "Executive Email",
    contact_addr_lbl: "Office Address",
    contact_hours_lbl: "Business Hours",
    contact_hours_val: "Monday – Friday: 08:30 – 17:30 (GMT+7)",
    contact_sla_badge: "Guaranteed SLA",
    contact_sla_text: "We respond to all verified corporate inquiries within 1 business day.",
    contact_social_lbl: "Quick Messaging Channels",

    form_name_lbl: "Full name",
    form_name_ph: "e.g. John Smith",
    form_comp_lbl: "Company",
    form_comp_ph: "e.g. Global Tech Inc.",
    form_email_lbl: "Work email",
    form_email_ph: "name@company.com",
    form_phone_lbl: "Phone number",
    form_phone_ph: "+84 ... or mobile number",
    form_cat_lbl: "Inquiry topic",
    form_budget_lbl: "Estimated scale",
    form_budget_ph: "e.g. 200 guests / 5-star venue",
    form_date_lbl: "Target timeline",
    form_date_ph: "e.g. Q3 2026 or November",
    form_optional: "(Optional)",
    form_required_sr: "(required)",
    form_char_count: "chars",
    form_commitment: "Response within 1 business day in English, Japanese, or Vietnamese",
    form_submit_btn: "Submit inquiry",
    form_submitting_btn: "Submitting…",
    form_reset_another: "Submit another inquiry",
    form_privacy_consent: "I agree to the processing of corporate inquiry details pursuant to the Privacy Policy.",
    form_privacy_link: "Privacy Policy",
    form_submit_processing: "Transmitting inquiry...",
    form_reset_btn: "Submit Another Inquiry",
    form_success_badge: "Inquiry Received Successfully",

    chip_event: "Corporate Events",
    chip_market: "Market Entry",
    chip_realestate: "Real Estate",
    chip_animation: "Animation",
    chip_other: "Other Inquiries",

    opt_event: "Corporate Event Management (100+ Guests / 5-Star Hotel)",
    opt_market: "Market Research & Vietnam Market Entry Support",
    opt_realestate: "Real Estate Consulting & Investment",
    opt_animation: "Animation & Creative Production Outsourcing",
    opt_other: "Other Business Inquiry",
    form_msg_lbl: "Project details",
    form_msg_ph: "Please share a brief summary of your project goals, venue preference, or scale...",
    form_note: "We respond in English or Japanese within 1 business day.",
    form_submit: "Send Business Inquiry",
    form_ok_title: "Thank you for contacting JUMPUP SERVICES!",
    form_ok_desc: "Your inquiry has been successfully received by our executive team. We will review your requirements and reach out within 1 business day.",

    err_name_required: "Please provide your full name.",
    err_company_required: "Please specify your company or organization name.",
    err_email_invalid: "Please provide a valid corporate email address.",
    err_phone_invalid: "Invalid phone number (7–20 digits).",
    err_message_required: "Please describe your project requirements.",
    err_privacy_required: "Please agree to the privacy terms before submitting.",
    err_missing_fields: "Please fill in all required fields.",
    err_rate_limited: "Too many requests. Please try again after 15 minutes.",
    err_network: "Network timeout or connection error. Please check your network and try again.",
    err_server_error: "A server error occurred. Please contact us directly at jumpupdanang@gmail.com.",
    err_too_long: "Message exceeds the 2,000 character limit.",

    footer_desc: "Your trusted on-the-ground execution partner in Vietnam. Specializing in 100+ guest 5-star hotel corporate events, foreign market entry, real estate advisory, and creative animation production.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Headquarters",
    footer_legal_title: "Corporate Legal",
    footer_rights: "All Rights Reserved.",
    footer_privacy_link: "Privacy Policy",
    footer_terms_link: "Terms of Engagement",
    footer_tax_id_lbl: "Tax Code",
    footer_tagline: "Corporate Events & Business Expansion in Vietnam",

    back_to_top_aria: "Scroll back to top of page",
    floating_contact_aria: "Quick contact channels",
    floating_zalo: "Zalo Chat",
    floating_line: "LINE Chat",
    floating_whatsapp: "WhatsApp",
    floating_call: "Call Hotline",
    floating_toggle_open: "Support & Hotline",
    floating_toggle_close: "Close",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // JAPANESE (JP) - ビジネス敬語（Natural Business Keigo）
  // ───────────────────────────────────────────────────────────────────────────
  jp: {
    skip_to_content: "メインコンテンツへスキップ",

    nav_about: "私たちについて",
    nav_services: "事業内容",
    nav_portfolio: "実績事例",
    nav_process: "支援の流れ",
    nav_leadership: "経営陣紹介",
    nav_company: "会社概要",
    nav_faq: "よくあるご質問",
    nav_contact: "お問い合わせ",

    hero_badge: "ダナン • ハノイ • ホーチミン（ベトナム全土対応）",
    hero_eyebrow: "ダナン · ハノイ · ホーチミン",
    hero_title: "ベトナムで事業を成功へ導く、信頼の実行パートナー",
    hero_title_p1: "",
    hero_title_gold: "ベトナム",
    hero_title_p2: "で事業を成功へ導く、信頼の実行パートナー",
    hero_subtitle: "日本品質のプロジェクト管理とベトナム全土の現地実行力を融合。5つ星ホテルでの100名超企業イベント、市場調査・進出支援、商業不動産コンサルティングを一貫サポート。",
    hero_cta_primary: "お問い合わせ・無料相談",
    hero_cta_secondary: "事業内容を見る",
    hero_scroll_down: "スクロールして詳細を見る",
    hero_active_showcase: "注目の事業領域",
    hero_prev_slide: "前のスライド",
    hero_next_slide: "次のスライド",
    hero_pause_slide: "スライド一時停止",
    hero_play_slide: "スライド再生",
    hero_details_link: "詳細を見る",
    hero_carousel_aria: "主要事業実績スライド",
    hero_slide_aria: "スライド",

    stat_capacity_val: "500+",
    stat_capacity_lbl: "5つ星ホテル対応規模",
    stat_regions_val: "3",
    stat_regions_lbl: "北・中・南部全土対応",
    stat_years_val: "10+",
    stat_years_lbl: "現地実務経験年数",
    stat_languages_val: "3",
    stat_languages_lbl: "言語対応（日英越）",

    metric_1: "5つ星ホテルでの企業イベント運営規模",
    metric_2_unit: "年超",
    metric_2: "ベトナム現地での事業運営・管理実績",
    metric_3_val: "ベトナム全土",
    metric_3: "北部・中部・南部を網羅する現地ネットワーク",
    metric_4: "日英越トリリンガルによる経営陣直轄管理",

    about_eyebrow: "ABOUT JUMPUP SERVICES",
    about_heading: "ベトナム現地の確かな実行パートナー",
    about_mission: "JUMPUP SERVICES CO.,LTD は、ベトナム・ダナンを拠点に、海外企業のベトナム進出・投資・事業立ち上げ、および5つ星ホテルでの大規模企業イベント（100名〜500名超）の企画・運営を支援する現地パートナー企業です。言語や商習慣、法規制の壁を取り払い、国際基準の緻密なプロジェクト管理とベトナム全土の強力なネットワークで貴社の成功を支えます。",

    strength_1_title: "日本品質の緻密な管理とベトナム現地の強力な交渉力",
    strength_1_desc: "日本で20年超の企業経営実績を持つ日本人代表と、ベトナム現地の大手開発事業を主導してきた英語堪能なベトナム人副代表が共同経営。透明性の高い進行管理と現地ベンダーへの強い交渉力を両立しています。",
    strength_2_title: "ベトナム全土（北部・中部・南部）に根ざした10年超の実績",
    strength_2_desc: "ハノイ、ダナン、ホーチミンでの10年以上にわたる実ビジネス運営を通じて培った、地域ごとの商習慣や行政手続きへの深い知見と人脈を保有しています。",
    strength_3_title: "イベントから投資・事業立ち上げまでワンストップ対応",
    strength_3_desc: "5つ星ホテルでの100名超イベント運営から、市場調査、法人設立、不動産仲介・投資、アニメ・クリエイティブ制作受託まで、ワンストップで完結します。",

    services_eyebrow: "OUR SERVICES",
    services_heading: "事業内容・包括的ソリューション",
    services_subtitle: "日系企業・外資系企業・投資家・イベント主催者様向けに、現地実行に特化した事業を展開しています。",
    service_cta_consult: "この事業について相談する →",
    services_custom_need: "ご要望に合わせた個別のご相談はこちらから →",
    services_cta_contact: "この事業について相談する →",
    srv_collapsed_1: "5つ星企業イベント",
    srv_collapsed_2: "ベトナム進出支援",
    srv_collapsed_3: "不動産・オフィス選定",
    srv_collapsed_4: "アニメ・Live2D制作",
    srv_expand_hint: "詳細を表示",
    services_tab_list_aria: "事業領域選択タブ",
    services_prev_service: "前の事業",
    services_next_service: "次の事業",
    srv_stat_compliance: "法務コンプライアンス",
    srv_stat_takkenshi: "日本の宅建士監修",
    srv_stat_game_gov: "大手ゲーム事業管理歴",
    srv_stat_japan_studio: "日本スタジオ出身",
    srv_stat_5star: "5つ星ホテル提携",

    srv1_badge: "主力事業 • 5つ星ホテル 100名超規模対応",
    srv1_title: "企業イベント企画・運営事業",
    srv1_headline: "ベトナム国内の5つ星ラグジュアリーホテルにおける、大規模企業イベントのトータルプロデュース。日本品質の緻密さと強固な現地ネットワークで、100名超のイベントを成功に導きます。",
    srv1_overview: "JUMPUP SERVICESは、ダナン、ハノイ、ホーチミンをはじめとするベトナム各地の5つ星ホテルを会場とした、100名から500名超規模の企業イベント（周年記念式典、年次総会・キックオフ、国際カンファレンス、インセンティブ旅行など）の企画・運営をトータルで受託いたします。企画立案から会場交渉、ステージ・LED演出、日英越の当日オペレーションまで一貫して支援いたします。",
    srv1_why_title: "JUMPUPが大規模イベントで選ばれる理由",
    srv1_why_1: "日本人代表とベトナム人副代表による直轄ディレクション（日本品質×現地交渉力）",
    srv1_why_2: "100名超のゲスト動線管理、VIPプロトコル、突発事態への即応体制",
    srv1_why_3: "提携5つ星ホテルのイベント統括部門および大手制作ベンダーとの直接契約ルート",
    srv1_m1_title: "5つ星ホテル会場の選定・優遇条件交渉",
    srv1_m1_desc: "一流ホテル（インターコンチネンタル、シェラトン、ノボテル等）のボールルーム、会議室、宿泊枠、ガラディナー、VIP手配を法人優遇条件で一括調達。",
    srv1_m2_title: "ステージ演出・大型LED・音響照明ディレクション",
    srv1_m2_desc: "大型LEDスクリーン、音響・照明機器の調達、オープニング映像や企業紹介動画の制作まで、テクニカルディレクションを完全網羅。",
    srv1_m3_title: "当日の運営統轄・日英越マルチリンガル対応",
    srv1_m3_desc: "分単位の進行台本策定、100名超の受付・動線管理、プロ司会者（日英越）の手配、VIPアテンドまで、トラブルのない円滑な運営を保証。",
    srv1_m4_title: "専用車両送迎・エグゼクティブ向けアクティビティ",
    srv1_m4_desc: "専用ハイヤー（空港送迎・貸切バス）の運行管理、名門ゴルフ場手配、文化視察ツアーなど、VIPのご滞在をトータルサポート。",

    srv2_title: "マーケットリサーチ・ベトナム進出支援事業",
    srv2_headline: "ハノイ・ダナン・ホーチミンのベトナム全土における10年超の実務知見に基づく、進出検討から実務運用までの伴走型支援。",
    srv2_overview: "ベトナム国内3拠点（ハノイ・ダナン・ホーチミン）での10年以上にわたる現地法人経営・事業推進の実績、および経済産業省（METI）支援プロジェクトでの知見を活かし、市場調査（FS）から現地法人設立、オフィス開設、バイリンガル人材採用までを一貫支援いたします。",
    srv2_m1_t: "• 市場調査（FS）・競合分析・現地視察アテンド",
    srv2_m1_d: "業界動向調査、競合調査、現地パートナー候補の選定、実地視察の企画および同行通訳。",
    srv2_m2_t: "• 現地法人設立・ライセンス取得・オフィス開設",
    srv2_m2_d: "事業計画策定、投資登録証明書（IRC）・企業登録証明書（ERC）取得、オフィス選定・内装監理。",
    srv2_m3_t: "• 人材採用支援・労務総務バックオフィス受託",
    srv2_m3_d: "日本語・英語対応可能な幹部人材の採用支援、人事労務制度の整備、総務・記帳代行窓口。",

    srv3_title: "不動産コンサルティング・投資助言事業",
    srv3_headline: "日本の宅建士資格とベトナム現地の開発ディレクター実績が融合した、安全で透明性の高い不動産仲介・コンサルティング。",
    srv3_overview: "日本の国家資格「宅地建物取引士」を持つ日本人代表と、ベトナム中部で数々の大型開発プロジェクトを指揮してきたベトナム人副代表が、外国人投資家や進出企業が直面する法的リスクや契約トラブルを未然に防ぎます。",
    srv3_m1_t: "• 法人向けオフィス・店舗・駐在員住宅の賃貸仲介",
    srv3_m1_d: "ダナン市内の優良物件の抽出、オーナー直接交渉、日英越での契約書リーガル精査。",
    srv3_m2_t: "• 不動産投資・売買仲介（コンドミニアム・商業施設）",
    srv3_m2_d: "外国人購入枠（SPA）の適法性確認、デベロッパー信用調査、売買契約手続き、利回り分析。",
    srv3_m3_t: "• 物件管理・賃貸運営代行（プロパティマネジメント）",
    srv3_m3_d: "内装コーディネート、入居者募集、家賃回収、定期清掃・設備メンテナンスの代行。",

    srv4_title: "アニメーション・クリエイティブ受託制作事業",
    srv4_headline: "日本のアニメ制作現場で技術を培ったベトナム人クリエイター陣と、日本のゲーム・エンタメ業界20年のプロデューサー体制。",
    srv4_overview: "日本のアニメ・ゲーム制作現場で実務経験を積んだ優秀なベトナム人クリエイターと、元KONAMI幹部として20年のキャリアを持つ日本人代表がタッグを組み、日本品質の厳格な納期・クオリティ管理のもとで制作を受託します。",
    srv4_m1_t: "• Live2D制作・プロモーション用動画制作",
    srv4_m1_d: "VTuber用モデリング、ゲーム用キャラクターモーション、企業PR動画の企画・制作。",
    srv4_m2_t: "• ゲーム・アニメ向け背景美術制作",
    srv4_m2_d: "日本のアニメ調・写実調の高品質な背景美術制作。プロジェクト単位または専用ラボ契約に対応。",
    srv4_m3_t: "• アニメーション作画・彩色・コンポジット受託",
    srv4_m3_d: "絵コンテ、原画、動画、彩色（ペイント）、撮影（コンポジット）まで、一貫した制作ラインを提供。",

    portfolio_eyebrow: "CASE STUDIES & SHOWCASE",
    portfolio_heading: "主な実績事例・プロジェクト紹介",
    portfolio_subtitle: "ベトナム国内の5つ星ホテルイベント、進出支援、オフィス開設などの代表的事例をご紹介します。",
    portfolio_filter_all: "すべての事例",
    portfolio_filter_event: "企業イベント",
    portfolio_filter_market: "進出支援",
    portfolio_filter_realestate: "不動産・オフィス",
    portfolio_filter_animation: "クリエイティブ制作",
    portfolio_view_details: "事例の詳細を見る",
    portfolio_modal_close: "モーダルを閉じる",
    portfolio_guest_label: "実施規模・人数",
    portfolio_year_label: "実施年",
    portfolio_venue_label: "開催地・会場",
    portfolio_highlight_label: "ディレクションの重点",
    portfolio_overview_label: "プロジェクト概要・統括内容",

    // Projects Section UI (Bento Gallery & Viewer)
    project_eyebrow: "CASE STUDIES & SHOWCASE",
    project_heading: "主な実績事例・プロジェクト紹介",
    project_subtitle: "ベトナム国内の5つ星ホテルイベント、進出支援、オフィス開設などの代表的事例をご紹介します。",
    project_filter_all: "すべての事例",
    project_filter_event: "企業イベント",
    project_filter_market: "進出支援",
    project_filter_realestate: "不動産・オフィス",
    project_filter_animation: "アニメ・制作",
    project_view_details: "事例の詳細を見る",
    project_request_similar: "同様のプロジェクトを相談する",
    project_inquiry_template: "「{title}」と同様の案件について相談したいです。",
    project_scope_heading: "担当・実施範囲（Scope of Work）",
    project_results_heading: "主な成果・評価指標",
    project_client_lbl: "クライアント",
    project_scale_lbl: "実施規模",
    project_venue_lbl: "開催会場",
    project_year_lbl: "実施年",
    project_category_lbl: "事業区分",
    project_close: "閉じる",
    project_prev: "前のプロジェクト",
    project_next: "次のプロジェクト",
    project_sample_badge: "開発用サンプル",
    project_aria_card: "事例詳細を表示：",
    project_aria_gallery_img: "写真",
    project_aria_filter_live: "件の事例を表示中：",
    project_drag_cursor: "ドラッグ",
    project_carousel_aria: "主要プロジェクトカルーセル",
    project_slide_label: "プロジェクト",
    project_stat_1_val: "250名超",
    project_stat_1_lbl: "5つ星ホテルイベント実績",
    project_stat_2_val: "100%",
    project_stat_2_lbl: "許認可取得オンスケジュール",
    project_stat_3_val: "1,200㎡",
    project_stat_3_lbl: "CBDオフィス仲介・交渉",
    project_stat_4_val: "99.4%",
    project_stat_4_lbl: "クライアント満足度",

    // Project 1: Gala InterContinental
    proj_gala_title: "日越企業 周年記念ガラディナー＆アワードセレモニー",
    proj_gala_loc: "ダナン市ソンチャ半島",
    proj_gala_venue: "インターコンチネンタル ダナン サン ペニンシュラ リゾート",
    proj_gala_client: "日系大手複合企業グループ",
    proj_gala_scale_val: "250名超",
    proj_gala_scale_lbl: "国内外役員・来賓",
    proj_gala_summary: "日本本社取締役、現地幹部、来賓250名超を迎えた大規模周年式典。会場交渉から超大型LED映像演出、日英越MC、VIPハイヤー送迎までワンストップで統轄。",
    proj_gala_scope_1: "5つ星高級リゾートボールルーム選定・特別会場交渉",
    proj_gala_scope_2: "8K対応超大型曲面LEDステージ・音響照明の総合設計",
    proj_gala_scope_3: "日英越3言語による進行統轄・政府高官VIPプロトコル",
    proj_gala_scope_4: "専用メルセデスハイヤーによるVIP送迎運行管理",
    proj_gala_res_1: "250名以上の重要来賓を迎え、全旅程オンスケジュールで完了",
    proj_gala_res_2: "3日間の全プログラムにおいて警備・プロトコル事故ゼロを達成",
    proj_gala_alt_cover: "ダナンの5つ星ビーチフロントリゾートにおけるグランドボールルーム晩餐会会場",
    proj_gala_alt_1: "曲面LEDメインステージとVIPバンケットテーブルのセッティング",
    proj_gala_alt_2: "日英越3言語対応のエグゼクティブMCと舞台進行ディレクション",
    proj_gala_alt_3: "夕暮れのビーチフロントウェルカムカクテルとベトナム伝統音楽演奏",

    // Project 2: FinTech Conference
    proj_fintech_title: "グローバルFinTech 年次リーダーシップ キックオフ総会",
    proj_fintech_loc: "ダナン市ノンヌオックビーチ",
    proj_fintech_venue: "シェラトン グランド ダナン リゾート＆コンベンションセンター",
    proj_fintech_client: "外資系大手FinTechグループ",
    proj_fintech_scale_val: "380名超",
    proj_fintech_scale_lbl: "各国代表参加者",
    proj_fintech_summary: "2日間にわたる基調講演、分科会ワークショップ、オーシャンフロントアワードディナーの全行程を設計・運営。380名以上の受付を円滑に完遂。",
    proj_fintech_scope_1: "複数ホール同時開催の基調講演および分科会テクニカルディレクション",
    proj_fintech_scope_2: "日英越対応の高品質同時通訳ブース設営・音響システム統轄",
    proj_fintech_scope_3: "QRコードによるデジタル来場認証および即時バッジ発行システム",
    proj_fintech_scope_4: "波打ち際特設会場でのアワードディナー＆祝祭花火演出",
    proj_fintech_res_1: "380名超の参加者チェックインを待ち時間ゼロでスムーズに完遂",
    proj_fintech_res_2: "2つの大会議場において遅延・雑音のない同時通訳配信を実現",
    proj_fintech_alt_cover: "デュアル大型スクリーンを備えたコンベンションホールの基調講演レイアウト",
    proj_fintech_alt_1: "同時通訳ブースとテクニカルコントロールコンソール",
    proj_fintech_alt_2: "インタラクティブディスプレイを活用した分科会ワークショップ",
    proj_fintech_alt_3: "ヤシの木に囲まれたオーシャンフロントガラディナー会場",

    // Project 3: FDI Engineering Hub
    proj_fdi_title: "東京東証上場IT企業：中部ベトナム開発拠点 開設・法人設立支援",
    proj_fdi_loc: "ダナン市バクダンCBD",
    proj_fdi_venue: "バクダンコンプレックス CBD ダナン",
    proj_fdi_client: "東証プライム上場IT企業",
    proj_fdi_scale_val: "エンジニア50名",
    proj_fdi_scale_lbl: "開発拠点体制",
    proj_fdi_summary: "FS調査から外資100%現地法人設立、ライセンス取得、グレードAオフィス内装施工管理、シニアバイリンガルエンジニア50名の採用まで包括支援。",
    proj_fdi_scope_1: "市場実現可能性調査（FS）および外資投資法規制の徹底精査",
    proj_fdi_scope_2: "投資登録証明書（IRC）・企業登録証明書（ERC）の予定通りの取得",
    proj_fdi_scope_3: "グレードAオフィスの賃貸借交渉および内装工事の施工監理",
    proj_fdi_scope_4: "シニアバイリンガルエンジニア・マネジメント層50名の採用支援",
    proj_fdi_res_1: "目標期日より2ヶ月前倒し（着手から4ヶ月）で開発拠点を開設",
    proj_fdi_res_2: "ベトナム労働法および税務コンプライアンスへの完全適合を実現",
    proj_fdi_alt_cover: "ダナン・ハン川を見下ろすモダンなソフトウェア開発オフィス",
    proj_fdi_alt_1: "リバービューを一望するエグゼクティブ大会議室",
    proj_fdi_alt_2: "人間工学に基づいたエンジニアデスクとオープンコラボレーションエリア",
    proj_fdi_alt_3: "投資登録証明書（IRC）交付式典の様子",

    // Project 4: Executive Summit & Golf
    proj_golf_title: "多国籍製造業エグゼクティブサミット＆親善ゴルフコンペティション",
    proj_golf_loc: "ダナン市沿岸部・クアンナム省",
    proj_golf_venue: "BRGダナン・ゴルフリゾート ＆ モンゴメリーリンクス",
    proj_golf_client: "日米越産業製造協議会",
    proj_golf_scale_val: "経営首脳120名",
    proj_golf_scale_lbl: "役員・招待客",
    proj_golf_summary: "日米越の経営首脳120名が集う親善サミット。名門コースでのトーナメント運営、専属メルセデスハイヤー運行、プライベートビーチ晩餐会を完全プロデュース。",
    proj_golf_scope_1: "名門2コース同時貸切によるトーナメント競技運営およびスコア集計",
    proj_golf_scope_2: "メルセデス・ベンツ専用車両による空港・ホテル・コース間護送運行",
    proj_golf_scope_3: "プライベートビーチ特設会場でのネットワーキング晩餐会および伝統芸能演出",
    proj_golf_scope_4: "VIP専属セキュリティ体制の構築および救急医療スタッフの常駐手配",
    proj_golf_res_1: "120名の経営層全員に個別ホスピタリティを提供し完全な満足度を獲得",
    proj_golf_res_2: "事後アンケートにおいて98%の参加者から最高評価を獲得",
    proj_golf_alt_cover: "青空の下に広がるダナン名門チャンピオンシップコースのフェアウェイ",
    proj_golf_alt_1: "クラブハウスにおけるトーナメント受付およびウェルカムデスク",
    proj_golf_alt_2: "リゾートエントランスに配備された専用メルセデスハイヤー船団",
    proj_golf_alt_3: "夕暮れのビーチで開催された室内楽アンサンブル付き表彰晩餐会",

    // Project 5: Commercial Lease Advisory
    proj_lease_title: "外資系企業ベトナム統轄本部 オフィス選定・長期賃貸借契約交渉",
    proj_lease_loc: "ダナン市ハン川ウォーターフロントCBD",
    proj_lease_venue: "ハン川沿いプライム商業タワー",
    proj_lease_client: "欧州系再生可能エネルギー多国籍企業",
    proj_lease_scale_val: "1,200㎡",
    proj_lease_scale_lbl: "契約賃貸面積",
    proj_lease_summary: "1,200平米のハイグレードオフィス選定において、日本の宅建士視点での法的精査を実施。オーナー交渉を通じ有利な条件を獲得し、消防許認可も円滑に取得。",
    proj_lease_scope_1: "ダナンCBDにおけるグレードA商業オフィスビルの総合物件調査",
    proj_lease_scope_2: "日本の宅地建物取引士基準による契約書条項精査およびデューデリジェンス",
    proj_lease_scope_3: "適正賃料水準およびフリーレント期間獲得に向けたオーナー直接交渉",
    proj_lease_scope_4: "消防安全（PCCC）許認可取得および内装工事申請手続きの代行",
    proj_lease_res_1: "5年間の総賃料負担において当初提示条件比18%のコスト削減を達成",
    proj_lease_res_2: "消防安全（PCCC）認証および入居工事許可を遅延なく完全取得",
    proj_lease_alt_cover: "ダナン市ハン川沿いにそびえるガラスカーテンウォールのハイグレードオフィスビル",
    proj_lease_alt_1: "自由なレイアウト設計が可能な無柱空間のオフィスフロア",
    proj_lease_alt_2: "セキュリティフラッパーゲートを備えたエントランスロビー",
    proj_lease_alt_3: "完成後の受付レセプションおよびクライアント来客用会議エリア",

    // Project 6: Game Studio Pipeline
    proj_game_title: "大手日本ゲーム開発企業：Live2D・アニメーション制作ラボ体制構築",
    proj_game_loc: "ダナン市デジタルハイテク区",
    proj_game_venue: "Jumpupクリエイティブラボ ダナン",
    proj_game_client: "大手日本ゲームパブリッシャー",
    proj_game_scale_val: "制作クリエイター20名",
    proj_game_scale_lbl: "専用ラボ体制",
    proj_game_summary: "日本のアニメ・ゲーム制作現場で研修を受けたベトナム人クリエイター20名による専用ラボチームを編成。厳格なNDAのもと高品質なアセットを安定継続納品。",
    proj_game_scope_1: "高度な情報セキュリティを備えた専用オフショア制作スタジオの構築",
    proj_game_scope_2: "Live2DモデリングおよびSpineアニメーション制作パイプラインの統合",
    proj_game_scope_3: "元KONAMI幹部による日本商業クオリティの工程管理・マイルストーン監査",
    proj_game_scope_4: "企業向け閉域VPN、生体認証入退室管理、厳格なNDAコンプライアンス運用",
    proj_game_res_1: "予定期日内に300点超の商用ゲーム向け高品質アニメーションアセットを納品",
    proj_game_res_2: "セキュリティインシデント発生ゼロ、初回検収合格率99.4%を記録",
    proj_game_alt_cover: "デュアルモニターを備えたクリエイター向けデジタルアニメーション制作ラボ",
    proj_game_alt_1: "Live2Dキャラクターモデリングおよびモーション調整作業ブース",
    proj_game_alt_2: "アートディレクターによる1コマ単位の精密なクオリティレビュー",
    proj_game_alt_3: "専用サーバーラックと生体認証セキュリティが完備されたNDA開発区画",

    process_eyebrow: "STRUCTURED WORKFLOW",
    process_heading: "プロジェクト推進の5段階プロセス",
    process_subtitle: "ご相談から本番実施・事後フォローまで、日本基準の透明性と確実性をもって進めます。",
    process_timeline_label: "標準スケジュール",
    process_step_badge: "ステップ",
    process_note: "※すべてのマイルストーンは日英越のバイリンガル管理ログにて共有し、定期的な進捗報告を行います。",
    process_cta_prompt: "プロジェクトのご相談・お見積りはこちらからお気軽にどうぞ。",
    process_cta_btn: "無料相談・お問い合わせ →",

    process_step_1_title: "初回ヒアリング・要件定義",
    process_step_1_lead: "目的・規模・予算・スケジュールの明確化",
    process_step_1_desc: "日本語・英語・ベトナム語で綿密なヒアリングを実施。開催趣旨、参加予定人数、希望ホテルグレード、予算感、VIP対応要件を詳細に把握します。",
    process_step_1_duration: "1〜2営業日",

    process_step_2_title: "最適プラン提案・詳細見積提示",
    process_step_2_lead: "複数ホテル会場比較・明朗会計な費用算出",
    process_step_2_desc: "提携5つ星ホテルの空き状況確認・ボールルーム選定、ステージ演出案、当日の分単位進行スケジュール案、明瞭な項目別見積書をご提示します。",
    process_step_2_duration: "3〜5営業日",

    process_step_3_title: "会場優先交渉・各種制作準備",
    process_step_3_lead: "優先契約締結・音響照明機材・VIP送迎手配",
    process_step_3_desc: "ホテルとの法人契約締結、現地テクニカル下見、大型LED用映像制作、音響照明プログラム策定、専属ハイヤー配車、日英越の配布資料準備を一括手配。",
    process_step_3_duration: "本番2〜4週間前",

    process_step_4_title: "当日本番総合現場指揮",
    process_step_4_lead: "日本品質の緻密な進行管理・現地スタッフ統制",
    process_step_4_desc: "経営陣が自ら現場で陣頭指揮を執り、分単位のキューシート進行、受付管理、トリリンガル司会進行、VIPエスコート、突発事項への即応を完璧に実行。",
    process_step_4_duration: "本番当日",

    process_step_5_title: "事後報告書提出・継続的伴走",
    process_step_5_lead: "記録メディア納品・会計精算・次期展開支援",
    process_step_5_desc: "プロカメラマン撮影の高解像度写真・ハイライト映像の納品、実施結果レポートの提出、明朗な会計精算を行い、今後のベトナム事業展開を継続支援します。",
    process_step_5_duration: "終了後7日以内",

    faq_eyebrow: "FREQUENTLY ASKED QUESTIONS",
    faq_heading: "よくあるご質問（FAQ）",
    faq_subtitle: "ベトナムでのイベント開催、進出支援、契約・法規制に関する主な疑問にお答えします。",
    faq_partner_title: "提携5つ星ホテル・会場ネットワーク",
    faq_partner_subtitle: "ベトナム各地の一流ホテルグループと法人優遇契約および直接連携体制を構築しています。",

    lead_eyebrow: "EXECUTIVE DIRECTORS",
    lead_heading: "経営陣紹介",
    lead_subtitle: "日本企業のガバナンスと、ベトナム現地の強力な実行力を融合した2トップ体制。",

    ceo_role: "代表取締役（CEO）",
    ceo_name: "日比 靖昌（Yasumasa Hibi）",
    ceo_credentials: "日本の宅地建物取引士（国家資格）保有 • ベトナム在住10年超",
    ceo_bio: "日本の大手ハウスメーカーでのカスタマーサービス業務を経て、大手ゲーム会社コナミ（KONAMI）にて20年間にわたり法務、経営企画、総務、IT事業開発、サービス部門マネジメントなど多岐にわたる事業推進を牽引。日本の国家資格である「宅地建物取引士」を保有し、経済産業省（METI）支援の官民共創プロジェクトにおいて現地アドバイザーを務める。ベトナム在住歴は10年を超え（ハノイ、ホーチミン、ダナン）、現地法人代表、IT開発チームの統括、120室規模のサービスアパートメントの運営責任者を歴任。情報誌『歩くベトナム』でのコラム連載など現地での発信も多数。JUMPUP SERVICESでは、日本品質の緻密なプロジェクト管理とベトナムの現地力を融合させ、企業イベント、進出支援、不動産、クリエイティブ事業を統率しています。",
    badge_takken: "宅地建物取引士（日本国家資格）",
    badge_konami: "元KONAMI幹部（在籍20年）",
    badge_vietnam_exp: "ベトナム在住・事業実績10年超",
    badge_meti: "経産省（METI）事業アドバイザー",

    vp_role: "バイスプレジデント（副代表）",
    vp_name: "ファム・ティ・タイン・フエン（Phạm Thị Thanh Huyền）",
    vp_credentials: "プロジェクトディレクター • 不動産・企業イベント専門家 • 英語堪能",
    vp_bio: "ベトナムの不動産売買・開発事業を主なキャリアとし、数々の大型開発プロジェクトや新規事業の立ち上げを成功に導いてきた実績豊富なプロジェクトディレクター。ホテルやコンドミニアムの大規模プロモーションイベント、大手企業の社内イベントの企画・運営において豊富な経験を持ち、集客から現場統轄まで卓越した手腕を発揮。英語に堪能であり、外資系企業や外国人投資家との交渉・コミュニケーションを円滑に行うことができます。JUMPUP SERVICESでは副代表として、5つ星ホテルでの100名超イベントプロデュース、不動産仲介、現地パートナー・行政機関との渉外を統轄し、日本品質の正確性と現地ネットワークのシナジーを創出しています。",
    badge_mice: "5つ星ホテル・MICE専門ディレクター",
    badge_development: "ベトナム大型開発案件統括実績",
    badge_english: "ビジネス英語・国際交渉対応",
    badge_central_network: "ベトナム中部・全土の強固な人脈",

    bio_read_more: "詳細な経歴を読む",
    bio_show_less: "経歴を折りたたむ",

    comp_eyebrow: "CORPORATE INFORMATION",
    comp_heading: "会社概要",
    tbl_name_k: "会社名",
    tbl_addr_k: "本社所在地",
    tbl_addr_v: "8th Floor, Bach Dang Complex, 50 Bach Dang Street, Hai Chau Ward, Da Nang City, Vietnam",
    tbl_lead_k: "代表者",
    tbl_tax_k: "TAXコード（納税者番号）",
    tbl_biz_k: "事業内容",
    tbl_phone_k: "電話番号",
    tbl_email_k: "メールアドレス",
    tbl_copied_toast: "クリップボードにコピーしました",
    tbl_copy_btn: "コピー",
    tbl_copied_btn: "コピー完了",
    tbl_directions_btn: "道順を確認する",

    loc_badge: "ダナン本社ロケーション",
    loc_building_name: "Bach Dang Complex（バクダン・コンプレックス）",
    loc_short_address: "50 Bach Dang, Hai Chau, Da Nang",
    loc_desc: "ダナン中心業務地区（CBD）のハン川沿いに位置し、5つ星リバーサイドホテル群、行政機関、ダナン国際空港（車で約10分）へのアクセスに優れた好立地です。",
    loc_map_link: "Googleマップで開く",
    loc_feat_river: "ハン川沿いウォーターフロント（ダナン中心CBD）",
    loc_feat_airport: "ダナン国際空港まで車で約10分の好アクセス",
    loc_feat_hotels: "主要5つ星ホテル群（ノボテル・ヒルトン等）が近接",
    tbl_view_leadership: "役員紹介を見る →",
    sr_opens_new_tab: "（新しいタブで開きます）",
    loc_map_fallback_prompt: "マップを直接読み込めませんでした。クリックしてGoogleマップで確認してください。",

    cont_eyebrow: "GET IN TOUCH",
    cont_heading: "お問い合わせ・無料相談",
    cont_subtitle: "5つ星ホテルでの100名超企業イベントの企画・運営、ベトナム進出支援、不動産投資など、日本語・英語でお気軽にご相談ください。",

    contact_info_title: "経営陣直通のご相談窓口",
    contact_info_desc: "ダナン本社の日本人代表および幹部が直接ご対応いたします。日本語・英語・ベトナム語での打ち合わせが可能です。",
    contact_hotline_lbl: "代表電話番号",
    contact_email_lbl: "公式メールアドレス",
    contact_addr_lbl: "オフィス所在地",
    contact_hours_lbl: "営業時間",
    contact_hours_val: "月曜日 〜 金曜日：08:30 〜 17:30（ベトナム時間 GMT+7）",
    contact_sla_badge: "返信保証SLA",
    contact_sla_text: "法人のお客様からのお問い合わせには、原則として1営業日以内にご返信いたします。",
    contact_social_lbl: "クイック連絡チャネル",

    form_name_lbl: "お名前",
    form_name_ph: "例：山田 太郎",
    form_comp_lbl: "貴社名",
    form_comp_ph: "例：株式会社グローバル",
    form_email_lbl: "ビジネスメール",
    form_email_ph: "yamada@company.co.jp",
    form_phone_lbl: "お電話番号",
    form_phone_ph: "+81 ... またはお電話番号",
    form_cat_lbl: "ご相談項目",
    form_budget_lbl: "想定規模",
    form_budget_ph: "例：200名規模 / 5つ星ホテル",
    form_date_lbl: "希望時期",
    form_date_ph: "例：2026年第3四半期 または 11月",
    form_optional: "（任意）",
    form_required_sr: "（必須）",
    form_char_count: "文字",
    form_commitment: "1営業日以内に日本語・英語・ベトナム語で折り返しご連絡いたします",
    form_submit_btn: "送信する",
    form_submitting_btn: "送信中…",
    form_reset_another: "別のお問い合わせを送信",
    form_privacy_consent: "プライバシーポリシーに同意し、問い合わせ内容を送信します。",
    form_privacy_link: "プライバシーポリシー",
    form_submit_processing: "送信処理中...",
    form_reset_btn: "別のお問い合わせを送信する",
    form_success_badge: "送信完了いたしました",

    chip_event: "企業イベント",
    chip_market: "市場進出",
    chip_realestate: "不動産投資",
    chip_animation: "アニメーション",
    chip_other: "その他",

    opt_event: "企業イベント企画・運営事業（100名超・5つ星ホテル会場）",
    opt_market: "マーケットリサーチ・ベトナム進出支援事業",
    opt_realestate: "不動産コンサルティング・投資相談",
    opt_animation: "アニメーション・クリエイティブ受託事業",
    opt_other: "その他のお問い合わせ",
    form_msg_lbl: "ご相談内容",
    form_msg_ph: "プロジェクトの概要、開催時期、ご希望の会場規模などをお知らせください...",
    form_note: "通常1営業日以内に日本語または英語でご返信いたします。",
    form_submit: "お問い合わせを送信する",
    form_ok_title: "お問い合わせを受け付けました",
    form_ok_desc: "お問い合わせいただき誠にありがとうございます。ダナン本社の担当役員より、1営業日以内に折り返しご連絡申し上げます。",

    err_name_required: "お名前を入力してください。",
    err_company_required: "貴社名・組織名を入力してください。",
    err_email_invalid: "有効なメールアドレスを入力してください。",
    err_phone_invalid: "有効な電話番号（7〜20桁）を入力してください。",
    err_message_required: "ご相談内容を入力してください。",
    err_privacy_required: "プライバシーポリシーへの同意をお願いいたします。",
    err_missing_fields: "必須項目をすべて入力してください。",
    err_rate_limited: "送信回数が上限に達しました。15分後にもう一度お試しください。",
    err_network: "ネットワーク接続がタイムアウトしました。通信環境をご確認の上、再度お試しください。",
    err_server_error: "サーバーエラーが発生しました。お手数ですがメール（jumpupdanang@gmail.com）にてご連絡ください。",
    err_too_long: "文字数が2,000文字の上限を超えています。",

    footer_desc: "ベトナム現地の確かな実行パートナー。5つ星ホテルでの100名超企業イベント企画・運営、進出支援、不動産仲介、アニメーション制作受託を展開しています。",
    footer_nav_title: "サイト内リンク",
    footer_contact_title: "ダナン本社",
    footer_legal_title: "法的情報・コンプライアンス",
    footer_rights: "All Rights Reserved.",
    footer_privacy_link: "プライバシーポリシー",
    footer_terms_link: "サービス利用規約",
    footer_tax_id_lbl: "TAXコード",
    footer_tagline: "企業イベント・ベトナム進出支援・不動産コンサルティング",

    back_to_top_aria: "ページ最上部へ戻る",
    floating_contact_aria: "クイック連絡窓口",
    floating_zalo: "Zaloでお問い合わせ",
    floating_line: "LINEで相談する",
    floating_whatsapp: "WhatsAppでお問い合わせ",
    floating_call: "代表電話を発信する",
    floating_toggle_open: "相談窓口・ホットライン",
    floating_toggle_close: "閉じる",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // VIETNAMESE (VN)
  // ───────────────────────────────────────────────────────────────────────────
  vn: {
    skip_to_content: "Chuyển đến nội dung chính",

    nav_about: "Về chúng tôi",
    nav_services: "Dịch vụ",
    nav_portfolio: "Dự án tiêu biểu",
    nav_process: "Quy trình",
    nav_leadership: "Ban lãnh đạo",
    nav_company: "Hồ sơ công ty",
    nav_faq: "Hỏi đáp (FAQ)",
    nav_contact: "Liên hệ",

    hero_badge: "ĐÀ NẴNG • HÀ NỘI • TP. HỒ CHÍ MINH",
    hero_eyebrow: "ĐÀ NẴNG · HÀ NỘI · TP. HỒ CHÍ MINH",
    hero_title: "Đối tác thực thi tin cậy cho doanh nghiệp tại Việt Nam",
    hero_title_p1: "Đối tác thực thi tin cậy cho doanh nghiệp tại",
    hero_title_gold: "Việt Nam",
    hero_title_p2: "",
    hero_subtitle: "Đối tác thực thi bản địa kết hợp quy chuẩn quản trị Nhật Bản và mạng lưới thực chiến khắp 3 miền. Chuyên tổ chức sự kiện trên 100 khách tại khách sạn 5 sao, nghiên cứu thị trường và tư vấn bất động sản doanh nghiệp.",
    hero_cta_primary: "Liên hệ tư vấn chuyên sâu",
    hero_cta_secondary: "Khám phá dịch vụ",
    hero_scroll_down: "Cuộn xuống để khám phá",
    hero_active_showcase: "Lĩnh vực Nổi bật",
    hero_prev_slide: "Slide trước",
    hero_next_slide: "Slide tiếp theo",
    hero_pause_slide: "Tạm dừng trình chiếu",
    hero_play_slide: "Tiếp tục trình chiếu",
    hero_details_link: "Chi tiết",
    hero_carousel_aria: "Năng lực điều hành tập đoàn",
    hero_slide_aria: "Trình chiếu",

    stat_capacity_val: "500+",
    stat_capacity_lbl: "Khách / Sự kiện 5 sao",
    stat_regions_val: "3",
    stat_regions_lbl: "Miền Bắc – Trung – Nam",
    stat_years_val: "10+",
    stat_years_lbl: "Năm tại Việt Nam",
    stat_languages_val: "3",
    stat_languages_lbl: "Ngôn ngữ (EN / JP / VN)",

    metric_1: "Quy mô khách mời sự kiện tại khách sạn 5 sao",
    metric_2_unit: "Năm+",
    metric_2: "Kinh nghiệm vận hành thực tế tại Việt Nam",
    metric_3_val: "3 Miền",
    metric_3: "Độ phủ sâu rộng Bắc – Trung – Nam",
    metric_4: "Điều hành trực tiếp đa ngôn ngữ Anh – Nhật – Việt",

    about_eyebrow: "VỀ JUMPUP SERVICES",
    about_heading: "Đối tác Thực thi Tin cậy tại Việt Nam",
    about_mission: "Có trụ sở chính tại Đà Nẵng, JUMPUP SERVICES CO.,LTD là đối tác thực thi hàng đầu dành cho các tập đoàn quốc tế và Nhật Bản có kế hoạch tổ chức sự kiện lớn, đầu tư và khởi sự kinh doanh tại Việt Nam. Chúng tôi xóa bỏ rào cản ngôn ngữ, văn hóa và quy định pháp lý—mang lại sự an tâm tuyệt đối với quy trình quản lý chuẩn quốc tế và sức mạnh thực thi bản địa vững vàng.",

    strength_1_title: "Tiêu chuẩn Quản trị Quốc tế kết hợp Năng lực Thực thi Bản địa",
    strength_1_desc: "Được đồng dẫn dắt bởi Tổng Giám đốc người Nhật—với 20 năm kinh nghiệm điều hành doanh nghiệp lớn—và Phó Chủ tịch người Việt sử dụng tiếng Anh lưu loát với bề dày quản lý các dự án phát triển quy mô, chúng tôi kết hợp sự minh bạch, chuẩn xác với năng lực đàm phán địa phương vượt trội.",
    strength_2_title: "Kinh nghiệm Chuyên sâu tại Cả 3 Miền Bắc – Trung – Nam",
    strength_2_desc: "Với hơn một thập kỷ trực tiếp điều hành kinh doanh tại Hà Nội, Đà Nẵng và TP.HCM, chúng tôi thấu hiểu sâu sắc tập quán kinh doanh và khung pháp lý từng vùng miền.",
    strength_3_title: "Giải pháp Toàn diện từ Sự kiện đến Đầu tư & Thành lập Doanh nghiệp",
    strength_3_desc: "Từ sự kiện trên 100 khách tại khách sạn 5 sao đến khảo sát thị trường, tư vấn bất động sản và gia công hoạt hình sáng tạo, chúng tôi cung cấp giải pháp trọn gói dưới một mái nhà.",

    services_eyebrow: "DỊCH VỤ CỦA CHÚNG TÔI",
    services_heading: "Giải pháp Doanh nghiệp Toàn diện",
    services_subtitle: "Được thiết kế riêng cho các tập đoàn quốc tế, ban tổ chức sự kiện và nhà đầu tư tại thị trường Việt Nam.",
    service_cta_consult: "Tư vấn về dịch vụ này →",
    services_custom_need: "Không thấy đúng nhu cầu? Liên hệ để được tư vấn riêng →",
    services_cta_contact: "Liên hệ về dịch vụ này →",
    srv_collapsed_1: "Sự kiện 5 Sao",
    srv_collapsed_2: "Gia nhập Thị trường",
    srv_collapsed_3: "Bất động sản Doanh nghiệp",
    srv_collapsed_4: "Sản xuất Hoạt hình",
    srv_expand_hint: "Xem chi tiết dịch vụ",
    services_tab_list_aria: "Danh mục lựa chọn dịch vụ",
    services_prev_service: "Dịch vụ trước",
    services_next_service: "Dịch vụ tiếp theo",
    srv_stat_compliance: "Minh bạch pháp lý",
    srv_stat_takkenshi: "Takken-shi chuẩn Nhật",
    srv_stat_game_gov: "Năm quản trị KONAMI",
    srv_stat_japan_studio: "Họa sĩ studio Nhật",
    srv_stat_5star: "Khách sạn 5 sao",

    srv1_badge: "DỊCH VỤ CHỦ LỰC • 100+ KHÁCH TẠI KHÁCH SẠN 5 SAO",
    srv1_title: "Dịch vụ Đại lý & Tổ chức Sự kiện Doanh nghiệp",
    srv1_headline: "Sản xuất Trọn gói Sự kiện Doanh nghiệp tại Khách sạn 5 sao Hàng đầu Việt Nam. Đảm bảo trải nghiệm hoàn hảo cho các sự kiện từ 100 khách trở lên nhờ tính kỷ luật chuẩn Nhật và mạng lưới đối tác bản địa.",
    srv1_overview: "JUMPUP SERVICES cung cấp giải pháp quy hoạch và điều hành hiện trường trọn gói cho các sự kiện doanh nghiệp quy mô lớn (từ 100 đến hơn 500 khách) tại các khách sạn 5 sao hàng đầu ở Đà Nẵng, Hà Nội và TP.HCM. Từ tiệc kick-off, gala kỷ niệm thành lập đến hội nghị quốc tế và chuyến tham quan doanh nghiệp VIP, chúng tôi đồng hành từ khâu lên ý tưởng, đàm phán địa điểm đến dàn dựng sân khấu và điều phối đa ngôn ngữ tại hiện trường.",
    srv1_why_title: "Vì sao chọn JUMPUP cho các Sự kiện Doanh nghiệp Lớn",
    srv1_why_1: "Ban lãnh đạo hai nền văn hóa: Kỷ luật chuẩn Nhật kết hợp đàm phán bản địa mạnh mẽ",
    srv1_why_2: "Năng lực đã được chứng minh trong quản trị logistics 100+ khách, nghi thức VIP và xử lý rủi ro",
    srv1_why_3: "Hợp đồng đối tác chiến lược trực tiếp với các khách sạn 5 sao và các nhà cung cấp thiết bị hàng đầu",
    srv1_m1_title: "Đàm phán & Đặt địa điểm Khách sạn 5 sao",
    srv1_m1_desc: "Điều phối trọn gói khán phòng tiệc lớn (grand ballroom), phòng hội thảo, phòng lưu trú đoàn, tiệc gala và bố trí VIP tại các khách sạn 5 sao với điều khoản doanh nghiệp cạnh tranh.",
    srv1_m2_title: "Dàn dựng Sân khấu, Màn hình LED & Âm thanh Ánh sáng",
    srv1_m2_desc: "Quản trị kỹ thuật trọn gói với màn hình LED độ phân giải cao, hệ thống âm thanh ánh sáng hội nghị chuyên nghiệp và sản xuất video clip thương hiệu/intro mở màn.",
    srv1_m3_title: "Vận hành Hiện trường & Điều phối Đa ngôn ngữ",
    srv1_m3_desc: "Xây dựng kịch bản chương trình chuẩn xác từng phút, quản lý đón tiếp và check-in cho 100+ khách, cung cấp MC chuyên nghiệp và điều phối liền mạch bằng tiếng Anh, tiếng Nhật và tiếng Việt.",
    srv1_m4_title: "Vận chuyển Đoàn xe Cao cấp & Tour Doanh nhân",
    srv1_m4_desc: "Điều phối đội xe chuyên dụng (đưa đón sân bay và xe khách cao cấp), tổ chức giao lưu golf lãnh đạo, tham quan văn hóa và các chuyến khảo sát kinh doanh riêng biệt.",

    srv2_title: "Nghiên cứu Thị trường & Hỗ trợ Gia nhập Thị trường Việt Nam",
    srv2_headline: "Đồng hành Gia nhập Thị trường và Vận hành Doanh nghiệp Trọn vẹn Dựa trên Hơn một Thập kỷ Kinh nghiệm Thực tế khắp 3 Miền.",
    srv2_overview: "Phát huy hơn 10 năm trực tiếp điều hành doanh nghiệp tại Hà Nội, Đà Nẵng và TP.HCM—cùng kinh nghiệm cố vấn cho các dự án hợp tác công tư của chính phủ Nhật Bản—JUMPUP SERVICES đồng hành cùng các tập đoàn quốc tế trong từng bước thâm nhập và mở rộng quy mô tại Việt Nam.",
    srv2_m1_t: "• Khảo sát Thị trường & Nghiên cứu Tiền khả thi",
    srv2_m1_d: "Phân tích ngành, đánh giá đối thủ cạnh tranh, tìm kiếm đối tác nội địa và tổ chức đoàn khảo sát thực tế.",
    srv2_m2_t: "• Thành lập Công ty & Thiết lập Văn phòng",
    srv2_m2_d: "Xây dựng kế hoạch kinh doanh, xin giấy phép đầu tư (IRC/ERC) và tìm kiếm/thi công hoàn thiện văn phòng.",
    srv2_m3_t: "• Tuyển dụng Nhân sự & Quản trị Hành chính",
    srv2_m3_d: "Tuyển dụng nhân sự cao cấp song ngữ, thiết lập quy chế nhân sự và ủy thác quản trị hành chính.",

    srv3_title: "Tư vấn & Môi giới Bất động sản",
    srv3_headline: "Dịch vụ Tư vấn Bất động sản An toàn, Minh bạch tại Đà Nẵng và Việt Nam—Được Dẫn dắt bởi Chuyên gia Sở hữu Chứng chỉ Hành nghề Nhật Bản và Việt Nam.",
    srv3_overview: "Kết hợp chứng chỉ quốc gia Chuyên gia Giao dịch Bất động sản Nhật Bản (Takken-shi) của Tổng Giám đốc với bề dày kinh nghiệm trực tiếp lãnh đạo các dự án bất động sản lớn của Phó Chủ tịch, chúng tôi triệt tiêu mọi rủi ro pháp lý cho khách hàng quốc tế.",
    srv3_m1_t: "• Thuê Văn phòng Doanh nghiệp, Mặt bằng & Căn hộ Chuyên gia",
    srv3_m1_d: "Tuyển chọn bất động sản chất lượng tại Đà Nẵng, đàm phán hợp đồng thuê và rà soát pháp lý đa ngôn ngữ.",
    srv3_m2_t: "• Mua bán & Đầu tư Bất động sản Thương mại / Nhà ở",
    srv3_m2_d: "Kiểm tra hạn ngạch sở hữu cho người nước ngoài (SPA), thẩm định chủ đầu tư, đồng hành ký kết và phân tích ROI.",
    srv3_m3_t: "• Quản lý Vận hành & Khai thác Cho thuê",
    srv3_m3_d: "Tư vấn thiết kế nội thất, tìm kiếm khách thuê, thu tiền thuê và quản lý bảo trì bảo dưỡng định kỳ.",

    srv4_title: "Gia công Hoạt hình & Sản xuất Sáng tạo",
    srv4_headline: "Sản xuất Hoạt hình và Đồ họa Game Chất lượng Cao Thực hiện bởi Họa sĩ Việt Nam Được Đào tạo tại Nhật Bản Dưới sự Giám sát Chuẩn mực.",
    srv4_overview: "Chúng tôi kết nối đội ngũ họa sĩ hoạt hình Việt Nam tài năng—từng làm việc trực tiếp tại các studio hoạt hình Nhật Bản—với kinh nghiệm 20 năm lãnh đạo cấp cao trong ngành game của Tổng Giám đốc để cam kết chất lượng khắt khe và tiến độ tuyệt đối.",
    srv4_m1_t: "• Sản xuất Video Live2D & Chuyển động Quảng cáo",
    srv4_m1_d: "Gắn xương (rigging), mô hình hóa và diễn hoạt chuyển động cho VTuber, game và PR thương hiệu.",
    srv4_m2_t: "• Thiết kế Bối cảnh Game & Hoạt hình",
    srv4_m2_d: "Vẽ bối cảnh hoạt hình chuẩn phong cách Nhật Bản theo từng dự án hoặc mô hình đội ngũ chuyên trách (lab).",
    srv4_m3_t: "• Gia công Sản xuất Hoạt hình Trọn gói",
    srv4_m3_d: "Vẽ storyboard, khung hình chính (key animation), tô màu và xử lý hậu kỳ (compositing) dưới sự chỉ đạo của đạo diễn kỳ cựu.",

    portfolio_eyebrow: "DỰ ÁN TIÊU BIỂU",
    portfolio_heading: "Dự án & Sự kiện Tiêu biểu",
    portfolio_subtitle: "Minh chứng năng lực qua các sự kiện 5 sao, dự án thành lập pháp nhân và tư vấn cơ sở doanh nghiệp tại Việt Nam.",
    portfolio_filter_all: "Tất cả dự án",
    portfolio_filter_event: "Sự kiện doanh nghiệp",
    portfolio_filter_market: "Gia nhập thị trường",
    portfolio_filter_realestate: "Bất động sản",
    portfolio_filter_animation: "Sản xuất hoạt hình",
    portfolio_view_details: "Xem chi tiết dự án",
    portfolio_modal_close: "Đóng cửa sổ",
    portfolio_guest_label: "Quy mô / Số lượng",
    portfolio_year_label: "Năm thực hiện",
    portfolio_venue_label: "Địa điểm / Khán phòng",
    portfolio_highlight_label: "Điểm nhấn điều hành",
    portfolio_overview_label: "Tổng quan & Điều hành",

    // Projects Section UI (Bento Gallery & Viewer)
    project_eyebrow: "DỰ ÁN & SỰ KIỆN TIÊU BIỂU",
    project_heading: "Dấu Ấn Dự Án & Hồ Sơ Năng Lực",
    project_subtitle: "Minh chứng năng lực qua các đại tiệc 5 sao, dự án thành lập pháp nhân FDI và tư vấn thương mại hàng đầu tại Việt Nam.",
    project_filter_all: "Tất cả dự án",
    project_filter_event: "Sự kiện doanh nghiệp",
    project_filter_market: "Gia nhập thị trường",
    project_filter_realestate: "Bất động sản doanh nghiệp",
    project_filter_animation: "Sản xuất Hoạt hình",
    project_view_details: "Xem chi tiết dự án",
    project_request_similar: "Yêu cầu dự án tương tự",
    project_inquiry_template: "Tôi quan tâm đến dự án tương tự như: {title}",
    project_scope_heading: "Phạm vi thực thi (Scope of Work)",
    project_results_heading: "Kết quả & Chỉ số đạt được",
    project_client_lbl: "Khách hàng",
    project_scale_lbl: "Quy mô thực hiện",
    project_venue_lbl: "Địa điểm tổ chức",
    project_year_lbl: "Năm thực hiện",
    project_category_lbl: "Lĩnh vực",
    project_close: "Đóng cửa sổ",
    project_prev: "Dự án trước",
    project_next: "Dự án sau",
    project_sample_badge: "Dữ liệu mẫu",
    project_aria_card: "Xem chi tiết dự án:",
    project_aria_gallery_img: "Hình ảnh",
    project_aria_filter_live: "Đang hiển thị các dự án thuộc danh mục:",
    project_drag_cursor: "Kéo",
    project_carousel_aria: "Băng chuyền dự án tiêu biểu",
    project_slide_label: "Dự án",
    project_stat_1_val: "250+ Khách",
    project_stat_1_lbl: "Quy mô sự kiện 5 sao",
    project_stat_2_val: "100%",
    project_stat_2_lbl: "Cấp phép FDI đúng tiến độ",
    project_stat_3_val: "1.200 m²",
    project_stat_3_lbl: "Mặt sàn văn phòng CBD",
    project_stat_4_val: "99,4%",
    project_stat_4_lbl: "Tỷ lệ khách hàng hài lòng",

    // Project 1: Gala InterContinental
    proj_gala_title: "Đại tiệc Gala Kỷ niệm Thành lập & Trao giải Doanh nghiệp Nhật – Việt",
    proj_gala_loc: "Bán đảo Sơn Trà, Đà Nẵng",
    proj_gala_venue: "InterContinental Danang Sun Peninsula Resort",
    proj_gala_client: "Tập đoàn Đa ngành Nhật Bản",
    proj_gala_scale_val: "250+ Khách",
    proj_gala_scale_lbl: "Khách mời VIP Cấp cao",
    proj_gala_summary: "Sản xuất trọn gói lễ kỷ niệm doanh nghiệp với sự tham gia của Hội đồng Quản trị quốc tế, đối tác khu vực và khách VIP theo nghi thức chuẩn 5 sao.",
    proj_gala_scope_1: "Đàm phán độc quyền & Đặt khán phòng tiệc khách sạn 5 sao cao cấp",
    proj_gala_scope_2: "Thiết kế sân khấu màn hình LED cong 8K & Hệ thống âm thanh ánh sáng lập trình",
    proj_gala_scope_3: "Điều phối sân khấu 3 ngôn ngữ (EN/JP/VN) & Nghi thức lễ tân ngoại giao Keigo",
    proj_gala_scope_4: "Điều hành đội xe Mercedes-Benz đưa đón VIP riêng biệt suốt hành trình",
    proj_gala_res_1: "Đón tiếp 250+ khách VIP với 100% các mốc tiến độ chuẩn xác tuyệt đối",
    proj_gala_res_2: "Đảm bảo an ninh và an toàn tuyệt đối trong suốt 3 ngày diễn ra lịch trình",
    proj_gala_alt_cover: "Toàn cảnh khán phòng đại tiệc gala sang trọng tại resort 5 sao ven biển Đà Nẵng",
    proj_gala_alt_1: "Sân khấu màn hình LED cong hoành tráng và bàn tiệc VIP",
    proj_gala_alt_2: "MC song ngữ và ekip điều phối sân khấu chuyên nghiệp",
    proj_gala_alt_3: "Tiệc cocktail đón khách hoàng hôn bên bờ biển và hòa tấu nghệ thuật dân tộc",

    // Project 2: FinTech Conference
    proj_fintech_title: "Hội nghị Lãnh đạo Cấp cao & Khởi động Năm mới FinTech Toàn cầu",
    proj_fintech_loc: "Bãi biển Non Nước, Đà Nẵng",
    proj_fintech_venue: "Sheraton Grand Danang Resort & Convention Center",
    proj_fintech_client: "Tập đoàn Công nghệ Tài chính Toàn cầu",
    proj_fintech_scale_val: "380+ Khách",
    proj_fintech_scale_lbl: "Đại biểu Doanh nghiệp",
    proj_fintech_summary: "Điều phối toàn diện hội nghị quốc tế 2 ngày gồm các phiên thảo luận chuyên sâu, hội thảo tương tác và tiệc vinh danh bên bờ biển.",
    proj_fintech_scope_1: "Chỉ đạo kỹ thuật sân khấu đa khán phòng cho bài phát biểu chính & hội thảo",
    proj_fintech_scope_2: "Hệ thống cabin dịch đồng thời chuẩn quốc tế 3 ngôn ngữ (JP/EN/VN)",
    proj_fintech_scope_3: "Hệ thống điểm danh thẻ đeo QR Code kỹ thuật số và in thẻ tự động",
    proj_fintech_scope_4: "Sản xuất dạ tiệc vinh danh bên bãi biển kết hợp pháo hoa chúc mừng",
    proj_fintech_res_1: "Thực hiện thủ tục check-in cho 380+ đại biểu với thời gian chờ 0 phút",
    proj_fintech_res_2: "Truyền dẫn âm thanh dịch đồng thời thời gian thực hoàn hảo qua 2 hội trường",
    proj_fintech_alt_cover: "Khán phòng trung tâm hội nghị với 2 màn hình trình chiếu bài phát biểu chính",
    proj_fintech_alt_1: "Cabin dịch đồng thời và bàn điều khiển kỹ thuật âm thanh hiện đại",
    proj_fintech_alt_2: "Phiên thảo luận nhóm chuyên sâu với màn hình tương tác kỹ thuật số",
    proj_fintech_alt_3: "Tiệc tối gala ngoài trời bên rặng dừa hướng biển Non Nước",

    // Project 3: FDI Engineering Hub
    proj_fdi_title: "Tập đoàn CNTT Tokyo: Thành lập Pháp nhân & Trung tâm Kỹ thuật Miền Trung",
    proj_fdi_loc: "CBD Bạch Đằng, Đà Nẵng",
    proj_fdi_venue: "Bach Dang Complex, Hải Châu, Đà Nẵng",
    proj_fdi_client: "Doanh nghiệp CNTT Niêm yết Tokyo",
    proj_fdi_scale_val: "50+ Kỹ sư",
    proj_fdi_scale_lbl: "Quy mô Trung tâm",
    proj_fdi_summary: "Khảo sát tiền khả thi, xin giấy phép đầu tư FDI vốn 100% nước ngoài, thi công hoàn thiện văn phòng hạng A và tuyển dụng 50 kỹ sư cao cấp song ngữ.",
    proj_fdi_scope_1: "Khảo sát nghiên cứu khả thi thị trường & Thẩm định pháp lý đầu tư nước ngoài (FDI)",
    proj_fdi_scope_2: "Hoàn tất đăng ký cấp Giấy chứng nhận đầu tư (IRC) và Đăng ký doanh nghiệp (ERC)",
    proj_fdi_scope_3: "Đại diện đàm phán hợp đồng thuê & Giám sát thi công nội thất văn phòng Hạng A",
    proj_fdi_scope_4: "Tuyển dụng nhân sự cấp cao cho 50 kỹ sư phần mềm song ngữ Nhật - Việt",
    proj_fdi_res_1: "Chính thức đi vào vận hành sau 4 tháng (sớm hơn tiến độ kế hoạch 2 tháng)",
    proj_fdi_res_2: "Tuân thủ 100% quy định pháp luật lao động, an toàn và thuế tại Việt Nam",
    proj_fdi_alt_cover: "Văn phòng kỹ thuật phần mềm hiện đại nhìn ra sông Hàn Đà Nẵng",
    proj_fdi_alt_1: "Phòng họp lãnh đạo với tầm nhìn toàn cảnh sông Hàn và trung tâm thành phố",
    proj_fdi_alt_2: "Không gian làm việc mở với bàn ghế công thái học cho kỹ sư",
    proj_fdi_alt_3: "Lễ trao giấy chứng nhận đăng ký đầu tư và khai trương văn phòng",

    // Project 4: Executive Summit & Golf
    proj_golf_title: "Hội nghị Thượng đỉnh Ban Lãnh đạo & Giải Golf Giao hữu Doanh nghiệp",
    proj_golf_loc: "Duyên hải Đà Nẵng & Quảng Nam",
    proj_golf_venue: "BRG Da Nang Golf Resort & Montgomerie Links Vietnam",
    proj_golf_client: "Hội đồng Doanh nghiệp Sản xuất Công nghiệp Nhật - Mỹ - Việt",
    proj_golf_scale_val: "120+ Lãnh đạo",
    proj_golf_scale_lbl: "Lãnh đạo Cấp cao C-Suite",
    proj_golf_summary: "Thiết kế kỳ nghỉ kết hợp hội nghị cao cấp cuối tuần cho 120 lãnh đạo doanh nghiệp, điều phối giải đấu golf chuyên nghiệp, đội xe Mercedes và dạ tiệc riêng tư.",
    proj_golf_scope_1: "Điều hành hậu cần giải đấu golf vô địch trên 2 sân tiêu chuẩn quốc tế",
    proj_golf_scope_2: "Vận hành đoàn xe Mercedes-Benz đưa đón VIP riêng từ sân bay đến khách sạn",
    proj_golf_scope_3: "Tổ chức dạ tiệc kết nối lãnh đạo cao cấp bên bờ biển và biểu diễn nghệ thuật truyền thống",
    proj_golf_scope_4: "Thiết lập quy trình an ninh nghiêm ngặt và đội ngũ y tế túc trực 24/7",
    proj_golf_res_1: "Phục vụ 120 lãnh đạo cấp cao với trải nghiệm dịch vụ cá nhân hóa tuyệt đối",
    proj_golf_res_2: "Đạt 98% mức độ hài lòng tuyệt đối trong khảo sát đánh giá sau sự kiện",
    proj_golf_alt_cover: "Sân cỏ xanh mướt của sân golf vô địch ven biển tại Đà Nẵng dưới ánh nắng",
    proj_golf_alt_1: "Khu vực check-in giải đấu và bàn đón tiếp lãnh đạo tại nhà câu lạc bộ",
    proj_golf_alt_2: "Đội xe Mercedes-Benz đưa đón VIP xếp hàng tại cổng resort",
    proj_golf_alt_3: "Tiệc trao giải hoàng hôn bên bờ biển với ban nhạc hòa tấu thính phòng",

    // Project 5: Commercial Lease Advisory
    proj_lease_title: "Tư vấn Lựa chọn & Đàm phán Hợp đồng Thuê Văn phòng Trụ sở Doanh nghiệp",
    proj_lease_loc: "Trung tâm thương mại ven sông Hàn, Đà Nẵng",
    proj_lease_venue: "Tòa tháp Thương mại Mặt tiền Sông Hàn, Đà Nẵng",
    proj_lease_client: "Tập đoàn Năng lượng Tái tạo Đa quốc gia Châu Âu",
    proj_lease_scale_val: "1.200 m²",
    proj_lease_scale_lbl: "Diện tích Sàn Thuê",
    proj_lease_summary: "Tư vấn cho khách hàng quốc tế thuê 1.200 m² mặt sàn văn phòng hạng A ven sông Hàn, đại diện đàm phán hợp đồng, rà soát pháp lý và xin cấp phép nghiệm thu PCCC.",
    proj_lease_scope_1: "Khảo sát và lập báo cáo so sánh chi tiết các tòa nhà văn phòng hạng A tại Đà Nẵng",
    proj_lease_scope_2: "Thẩm định pháp lý điều khoản hợp đồng thuê theo chuẩn Takken-shi Nhật Bản",
    proj_lease_scope_3: "Đại diện thương thảo mức giá thuê và gia tăng thời gian miễn phí thi công (free-rent)",
    proj_lease_scope_4: "Đại diện xin phê duyệt thiết kế PCCC và giấy phép sửa chữa cải tạo văn phòng",
    proj_lease_res_1: "Tiết kiệm 18% tổng chi phí thuê trong suốt thời hạn hợp đồng 5 năm",
    proj_lease_res_2: "Nghiệm thu PCCC và cấp giấy phép hoàn thiện văn phòng đúng tiến độ",
    proj_lease_alt_cover: "Tòa tháp văn phòng thương mại hạng A ốp kính ven bờ sông Hàn",
    proj_lease_alt_1: "Mặt sàn văn phòng thông suốt không cột sẵn sàng cho thiết kế nội thất",
    proj_lease_alt_2: "Sảnh đón tiếp cao cấp của tòa nhà với cổng an ninh phân tầng hiện đại",
    proj_lease_alt_3: "Khu vực lễ tân và phòng đón tiếp đối tác sang trọng sau hoàn thiện",

    // Project 6: Game Studio Pipeline
    proj_game_title: "Xưởng Game Nhật Bản: Thiết lập Đội ngũ Gia công Live2D & Hoạt hình",
    proj_game_loc: "Khu Công nghệ Cao, Đà Nẵng",
    proj_game_venue: "Jumpup Creative Lab Đà Nẵng",
    proj_game_client: "Nhà phát hành Game Console & Mobile Nhật Bản",
    proj_game_scale_val: "20+ Họa sĩ",
    proj_game_scale_lbl: "Đội ngũ Chuyên trách",
    proj_game_summary: "Thành lập đội ngũ chuyên trách gồm 20 họa sĩ kỹ thuật số Việt Nam được đào tạo theo quy chuẩn Nhật Bản, gia công mô hình Live2D đúng tiến độ và bảo mật.",
    proj_game_scope_1: "Xây dựng studio gia công hoạt hình biệt lập đạt chuẩn an ninh bảo mật cao",
    proj_game_scope_2: "Tích hợp quy trình gắn xương Live2D và dựng chuyển động Spine chuẩn studio",
    proj_game_scope_3: "Giám sát quy trình bởi cựu lãnh đạo KONAMI đảm bảo chuẩn mực chất lượng khắt khe",
    proj_game_scope_4: "Thiết lập mạng VPN riêng, kiểm soát ra vào vân tay và quy chế bảo mật NDA tuyệt đối",
    proj_game_res_1: "Bàn giao hơn 300 tài nguyên hoạt họa chất lượng cao đúng hẹn cho đối tác",
    proj_game_res_2: "Đạt tỷ lệ nghiệm thu vòng đầu 99,4% và không có bất kỳ sự cố vi phạm NDA nào",
    proj_game_alt_cover: "Phòng sáng tạo đồ họa kỹ thuật số với bàn vẽ và màn hình kép chuyên dụng",
    proj_game_alt_1: "Không gian làm việc gắn xương mô hình nhân vật Live2D và hiệu chỉnh chuyển động",
    proj_game_alt_2: "Buổi duyệt chất lượng từng khung hình giữa giám đốc mỹ thuật và nhóm họa sĩ",
    proj_game_alt_3: "Hệ thống tủ rack máy chủ bảo mật và khóa cửa sinh trắc học khu vực NDA",

    process_eyebrow: "QUY TRÌNH CHUẨN MỰC",
    process_heading: "5 Bước Thực thi Dự án Chuẩn mực",
    process_subtitle: "Cách chúng tôi chuyển hóa tầm nhìn của quý doanh nghiệp thành hiện thực hoàn hảo trên thực tế.",
    process_timeline_label: "Thời gian ước tính",
    process_step_badge: "BƯỚC",
    process_note: "* Tất cả các mốc tiến độ đều được theo dõi qua biên bản quản lý song ngữ với báo cáo định kỳ bằng tiếng Việt, tiếng Nhật hoặc tiếng Anh.",
    process_cta_prompt: "Sẵn sàng bắt đầu? Liên hệ để nhận bản đề xuất chiến lược tối ưu nhất.",
    process_cta_btn: "Liên hệ tư vấn →",

    process_step_1_title: "Khảo sát & Tiếp nhận Yêu cầu",
    process_step_1_lead: "Xác định rõ quy mô, mục tiêu và ngân sách",
    process_step_1_desc: "Trao đổi chi tiết bằng tiếng Việt, tiếng Nhật hoặc tiếng Anh để làm rõ mục tiêu, số lượng khách mời dự kiến, địa điểm mong muốn và các mốc thời gian quan trọng.",
    process_step_1_duration: "1 – 2 ngày làm việc",

    process_step_2_title: "Đề xuất Giải pháp & Báo giá",
    process_step_2_lead: "Lựa chọn khách sạn 5 sao & dự toán chi tiết",
    process_step_2_desc: "Cung cấp bản đề xuất dự án toàn diện gồm các phương án khán phòng khách sạn 5 sao, ý tưởng sân khấu LED, kịch bản thời gian chi tiết và báo giá trọn gói minh bạch.",
    process_step_2_duration: "3 – 5 ngày làm việc",

    process_step_3_title: "Đàm phán Địa điểm & Tiền kỳ",
    process_step_3_lead: "Ký kết hợp đồng, kỹ thuật âm thanh & xe VIP",
    process_step_3_desc: "Hoàn tất hợp đồng ưu đãi với khách sạn 5 sao, khảo sát kỹ thuật thực địa, sản xuất visual LED, đặt đội xe cao cấp và chuẩn bị tài liệu đa ngôn ngữ chuẩn xác.",
    process_step_3_duration: "2 – 4 tuần trước sự kiện",

    process_step_4_title: "Điều hành & Thực thi Hiện trường",
    process_step_4_lead: "Kỷ luật chuẩn Nhật Bản & điều hành song ngữ",
    process_step_4_desc: "Đích thân ban giám đốc chỉ huy trực tiếp tại hiện trường, giám sát timeline từng phút, đón tiếp 100+ đại biểu, phối hợp MC 3 ngôn ngữ và xử lý tình huống linh hoạt.",
    process_step_4_duration: "Ngày diễn ra sự kiện",

    process_step_5_title: "Báo cáo Tổng kết & Đồng hành",
    process_step_5_lead: "Bàn giao tư liệu hình ảnh, quyết toán & mở rộng",
    process_step_5_desc: "Bàn giao toàn bộ kho ảnh và video chất lượng cao, cung cấp báo cáo nghiệm thu tổng kết, thực hiện quyết toán tài chính minh bạch và sẵn sàng đồng hành cho các dự án tiếp theo.",
    process_step_5_duration: "Trong vòng 7 ngày",

    faq_eyebrow: "CÂU HỎI THƯỜNG GẶP",
    faq_heading: "Giải đáp Thắc mắc Doanh nghiệp",
    faq_subtitle: "Những thông tin thiết thực về tổ chức sự kiện, pháp lý đầu tư, hợp đồng và dịch vụ của chúng tôi.",
    faq_partner_title: "Hệ thống Khách sạn 5 sao Đối tác Chiến lược",
    faq_partner_subtitle: "Liên kết trực tiếp với các thương hiệu nghỉ dưỡng và trung tâm hội nghị hàng đầu tại Việt Nam.",

    lead_eyebrow: "BAN LÃNH ĐẠO",
    lead_heading: "Ban Điều hành Doanh nghiệp",
    lead_subtitle: "Mô hình lãnh đạo 2-Top kết hợp hài hòa chuẩn mực quản trị Nhật Bản với năng lực thực thi sâu sắc tại Việt Nam.",

    ceo_role: "Tổng Giám đốc (CEO)",
    ceo_name: "Yasumasa Hibi",
    ceo_credentials: "Chứng chỉ Chuyên gia Bất động sản Nhật Bản (Takken-shi) • 10+ Năm tại Việt Nam",
    ceo_bio: "Sau thời gian làm việc trong lĩnh vực dịch vụ khách hàng tại một tập đoàn xây dựng nhà ở lớn của Nhật Bản, ông Hibi đã có 20 năm công tác tại tập đoàn game hàng đầu KONAMI, trực tiếp thúc đẩy nhiều mảng nghiệp vụ đa dạng từ pháp chế, kế hoạch kinh doanh, quản trị hành chính, phát triển kinh doanh IT đến quản lý bộ phận dịch vụ. Ông sở hữu chứng chỉ quốc gia Chuyên gia Giao dịch Bất động sản Nhật Bản (Takken-shi) và từng đảm nhiệm vai trò cố vấn cho các dự án hỗ trợ đồng sáng tạo công tư của Bộ Kinh tế, Thương mại và Công nghiệp Nhật Bản (METI). Với hơn 10 năm sinh sống và làm việc tại Việt Nam (Hà Nội, TP.HCM và Đà Nẵng), ông đã lãnh đạo các công ty con tại địa phương, đội ngũ phát triển IT và quản lý tòa nhà căn hộ dịch vụ quy mô 120 phòng, đồng thời là cây bút phụ trách chuyên mục thường kỳ của tạp chí Walking Vietnam. Tại JUMPUP SERVICES, ông kết hợp kỷ luật quản lý chuẩn Nhật với sự am hiểu bản địa để đảm bảo thành công cho khách hàng trong các lĩnh vực sự kiện, gia nhập thị trường, bất động sản và sản xuất sáng tạo.",
    badge_takken: "Chứng chỉ Takken-shi Nhật Bản",
    badge_konami: "20 năm cựu lãnh đạo KONAMI",
    badge_vietnam_exp: "10+ năm kinh nghiệm tại Việt Nam",
    badge_meti: "Cố vấn dự án Bộ Kinh tế Nhật (METI)",

    vp_role: "Phó Chủ tịch (Vice President)",
    vp_name: "Phạm Thị Thanh Huyền",
    vp_credentials: "Giám đốc Dự án • Chuyên gia Bất động sản & Sự kiện Doanh nghiệp • Tiếng Anh lưu loát",
    vp_bio: "Là một giám đốc dự án dày dặn kinh nghiệm với sự nghiệp gắn liền với lĩnh vực kinh doanh và giao dịch bất động sản tại Việt Nam, bà Huyền đã dẫn dắt thành công nhiều dự án phát triển và sáng kiến kinh doanh quy mô lớn. Bà sở hữu bề dày thành tích trong việc lên kế hoạch và tổ chức các sự kiện quảng bá lớn cho các dự án khách sạn, căn hộ cao cấp cũng như sự kiện nội bộ doanh nghiệp lớn, xuất sắc từ khâu thu hút khách hàng mục tiêu đến điều hành hiện trường trơn tru. Sử dụng tiếng Anh lưu loát, bà giao tiếp và đàm phán thuận tiện với các doanh nghiệp nước ngoài và nhà đầu tư quốc tế. Trên cương vị Phó Chủ tịch tại JUMPUP SERVICES, bà trực tiếp giám sát mảng sản xuất sự kiện doanh nghiệp trên 100 khách tại khách sạn 5 sao, tư vấn bất động sản và quan hệ đối tác địa phương—tạo nên sự kết hợp hoàn hảo giữa kỷ luật chuẩn Nhật và sức mạnh mạng lưới Việt Nam.",
    badge_mice: "Chuyên gia MICE & Sự kiện 5 sao",
    badge_development: "Giám đốc Phát triển Dự án lớn",
    badge_english: "Đàm phán Tiếng Anh Quốc tế",
    badge_central_network: "Mạng lưới Đối tác Vững mạnh",

    bio_read_more: "Xem đầy đủ tiểu sử",
    bio_show_less: "Thu gọn tiểu sử",

    comp_eyebrow: "THÔNG TIN DOANH NGHIỆP",
    comp_heading: "Hồ sơ Công ty",
    tbl_name_k: "Tên công ty",
    tbl_addr_k: "Trụ sở chính",
    tbl_addr_v: "Tầng 8, Tòa nhà Bạch Đằng Complex, Số 50 Bạch Đằng, Phường Hải Châu, Thành phố Đà Nẵng, Việt Nam",
    tbl_lead_k: "Ban điều hành",
    tbl_tax_k: "Mã số thuế",
    tbl_biz_k: "Lĩnh vực hoạt động",
    tbl_phone_k: "Điện thoại",
    tbl_email_k: "Email",
    tbl_copied_toast: "Đã sao chép vào bộ nhớ tạm!",
    tbl_copy_btn: "Sao chép",
    tbl_copied_btn: "Đã chép!",
    tbl_directions_btn: "Chỉ đường Google Maps",

    loc_badge: "TRỤ SỞ CHÍNH ĐÀ NẴNG",
    loc_building_name: "Tòa nhà Bạch Đằng Complex",
    loc_short_address: "50 Bạch Đằng, Hải Châu, Đà Nẵng",
    loc_desc: "Tọa lạc bên bờ sông Hàn ngay trung tâm tài chính – thương mại Đà Nẵng, kết nối thuận tiện tới hệ thống khách sạn 5 sao ven sông, các cơ quan hành chính và Sân bay Quốc tế Đà Nẵng (chỉ 10 phút di chuyển).",
    loc_map_link: "Mở trên Google Maps",
    loc_feat_river: "Mặt tiền sông Hàn đắc địa (Trung tâm tài chính CBD)",
    loc_feat_airport: "Chỉ 10 phút di chuyển tới Sân bay Quốc tế Đà Nẵng",
    loc_feat_hotels: "Bao quanh bởi quần thể khách sạn 5 sao cao cấp",
    tbl_view_leadership: "Xem hồ sơ ban lãnh đạo →",
    sr_opens_new_tab: "(mở trong tab mới)",
    loc_map_fallback_prompt: "Không thể tải trực tiếp bản đồ. Nhấn để mở trên Google Maps.",

    cont_eyebrow: "KẾT NỐI VỚI CHÚNG TÔI",
    cont_heading: "Liên hệ Tư vấn Doanh nghiệp",
    cont_subtitle: "Quý khách đang lên kế hoạch tổ chức sự kiện doanh nghiệp trên 100 khách tại khách sạn 5 sao, mở rộng kinh doanh hay đầu tư bất động sản tại Việt Nam? Hãy liên hệ ngay với ban điều hành đa ngôn ngữ của chúng tôi.",

    contact_info_title: "Kênh Liên hệ Ban Điều hành",
    contact_info_desc: "Kết nối trực tiếp với ban giám đốc tại Đà Nẵng. Chúng tôi sẵn sàng tư vấn bằng tiếng Việt, tiếng Nhật hoặc tiếng Anh.",
    contact_hotline_lbl: "Đường dây nóng",
    contact_email_lbl: "Email điều hành",
    contact_addr_lbl: "Địa chỉ văn phòng",
    contact_hours_lbl: "Thời gian làm việc",
    contact_hours_val: "Thứ Hai – Thứ Sáu: 08:30 – 17:30 (GMT+7)",
    contact_sla_badge: "Cam kết phản hồi",
    contact_sla_text: "Chúng tôi cam kết phản hồi tất cả các yêu cầu doanh nghiệp trong vòng 1 ngày làm việc.",
    contact_social_lbl: "Kênh Kết nối Nhanh",

    form_name_lbl: "Họ và tên",
    form_name_ph: "Ví dụ: Nguyễn Văn A",
    form_comp_lbl: "Tên công ty",
    form_comp_ph: "Ví dụ: Tập đoàn ABC",
    form_email_lbl: "Email công việc",
    form_email_ph: "ten@congty.com",
    form_phone_lbl: "Số điện thoại",
    form_phone_ph: "+84 ... hoặc số di động",
    form_cat_lbl: "Bạn cần tư vấn về",
    form_budget_lbl: "Quy mô dự kiến",
    form_budget_ph: "Ví dụ: 200 khách / Hội nghị 5 sao",
    form_date_lbl: "Thời gian dự kiến",
    form_date_ph: "Ví dụ: Quý 3/2026 hoặc Tháng 11",
    form_optional: "(Tùy chọn)",
    form_required_sr: "(bắt buộc)",
    form_char_count: "ký tự",
    form_commitment: "Phản hồi trong 1 ngày làm việc bằng tiếng Việt, Nhật hoặc Anh",
    form_submit_btn: "Gửi yêu cầu",
    form_submitting_btn: "Đang gửi…",
    form_reset_another: "Gửi yêu cầu khác",
    form_privacy_consent: "Tôi đồng ý cung cấp thông tin theo",
    form_privacy_link: "Chính sách Bảo mật",
    form_submit_processing: "Đang gửi yêu cầu...",
    form_reset_btn: "Gửi thêm yêu cầu khác",
    form_success_badge: "Gửi Yêu Cầu Thành Công",

    chip_event: "Sự kiện Doanh nghiệp",
    chip_market: "Gia nhập Thị trường",
    chip_realestate: "Bất động sản",
    chip_animation: "Sản xuất Hoạt hình",
    chip_other: "Yêu cầu khác",

    opt_event: "Tổ chức Sự kiện Doanh nghiệp (Trên 100 khách / Khách sạn 5 sao)",
    opt_market: "Nghiên cứu Thị trường & Hỗ trợ Gia nhập Thị trường Việt Nam",
    opt_realestate: "Tư vấn & Đầu tư Bất động sản",
    opt_animation: "Gia công Hoạt hình & Sản xuất Sáng tạo",
    opt_other: "Yêu cầu hợp tác khác",
    form_msg_lbl: "Nội dung yêu cầu",
    form_msg_ph: "Vui lòng mô tả tóm tắt mục tiêu, quy mô hoặc yêu cầu sơ bộ của quý khách...",
    form_note: "Chúng tôi sẽ phản hồi bằng tiếng Việt, tiếng Anh hoặc tiếng Nhật trong vòng 1 ngày làm việc.",
    form_submit: "Gửi yêu cầu tư vấn chính thức",
    form_ok_title: "Cảm ơn quý khách đã liên hệ JUMPUP SERVICES!",
    form_ok_desc: "Yêu cầu của quý khách đã được chuyển tới ban điều hành. Chúng tôi sẽ nghiên cứu và liên hệ lại trong vòng 1 ngày làm việc.",

    err_name_required: "Vui lòng nhập họ và tên của quý khách.",
    err_company_required: "Vui lòng nhập tên công ty hoặc tổ chức.",
    err_email_invalid: "Vui lòng nhập địa chỉ email hợp lệ.",
    err_phone_invalid: "Số điện thoại không hợp lệ (từ 7 - 20 chữ số).",
    err_message_required: "Vui lòng mô tả yêu cầu hoặc nội dung cần tư vấn.",
    err_privacy_required: "Vui lòng tích đồng ý với Chính sách Bảo mật trước khi gửi.",
    err_missing_fields: "Vui lòng điền đầy đủ các thông tin bắt buộc.",
    err_rate_limited: "Bạn đã gửi quá nhiều yêu cầu trong thời gian ngắn. Vui lòng thử lại sau 15 phút.",
    err_network: "Không thể kết nối máy chủ hoặc quá thời gian chờ. Vui lòng kiểm tra mạng và thử lại.",
    err_server_error: "Đã xảy ra sự cố kỹ thuật. Vui lòng liên hệ trực tiếp qua email jumpupdanang@gmail.com.",
    err_too_long: "Nội dung vượt quá giới hạn 2.000 ký tự.",

    footer_desc: "Đối tác thực thi tin cậy tại Việt Nam. Chuyên tổ chức sự kiện doanh nghiệp quy mô 100+ khách tại khách sạn 5 sao, tư vấn gia nhập thị trường, bất động sản thương mại và sản xuất hoạt hình.",
    footer_nav_title: "Điều hướng",
    footer_contact_title: "Trụ sở chính Đà Nẵng",
    footer_legal_title: "Thông tin Pháp lý",
    footer_rights: "Đã đăng ký bản quyền.",
    footer_privacy_link: "Chính sách Bảo mật",
    footer_terms_link: "Điều khoản Dịch vụ",
    footer_tax_id_lbl: "Mã số thuế",
    footer_tagline: "Sự kiện Doanh nghiệp & Mở rộng Đầu tư tại Việt Nam",

    back_to_top_aria: "Cuộn lên đầu trang",
    floating_contact_aria: "Kênh liên hệ nhanh",
    floating_zalo: "Tư vấn qua Zalo",
    floating_line: "Tư vấn qua LINE",
    floating_whatsapp: "Tư vấn qua WhatsApp",
    floating_call: "Gọi đường dây nóng",
    floating_toggle_open: "Hỗ trợ & Hotline",
    floating_toggle_close: "Đóng",
  },
};
