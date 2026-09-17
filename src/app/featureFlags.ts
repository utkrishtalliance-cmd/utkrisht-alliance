// Central feature toggles for shelved pages. Flip a flag to `true` to re-enable.
// Page-level toggles live here (not inline) because visibility spans both the
// router and the navigation menu.

// Media & Portfolio page — hidden until we have real portfolio content to show.
// When false: the "Media" nav link is hidden and /media redirects to home.
export const SHOW_MEDIA_PAGE = false;

// Public phone number — temporarily hidden across the footer and Contact page.
// Flip to `true` to show the number again (markup is kept in place).
export const SHOW_PHONE = false;
