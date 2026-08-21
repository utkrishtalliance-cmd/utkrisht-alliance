// Web3Forms delivery — a single source of truth for the access key and the
// destination inbox, shared by the contact form and the newsletter signup so
// they never drift out of sync. Get or rotate the key at https://web3forms.com.
export const WEB3FORMS_ACCESS_KEY: string = "d1ac73d9-0056-4e75-94a0-8a0d985e9149";
export const CONTACT_EMAIL = "info@utkrishtalliance.com";

// hCaptcha spam protection. This is Web3Forms' own shared sitekey, documented
// for zero-config use on the free plan — no hCaptcha account needed. Swap it
// for a self-managed sitekey if we ever want our own hCaptcha analytics.
// Submissions send the token as `h-captcha-response`, which Web3Forms verifies.
export const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
