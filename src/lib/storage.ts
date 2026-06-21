export const STORAGE_KEYS = {
  prefs: "sandra_site_prefs",
  lead: "sandra_site_lead",
  lastViewedProject: "sandra_site_last_project",
} as const;

export type SitePrefs = {
  theme: "light";
  cookiesAccepted: boolean;
  lastVisit: string;
};

export type SiteLead = {
  name: string;
  whatsapp: string;
  serviceInterest: string;
  submittedAt: string;
};

export const DEFAULT_PREFS: SitePrefs = {
  theme: "light",
  cookiesAccepted: false,
  lastVisit: "",
};

export const DEFAULT_LEAD: SiteLead = {
  name: "",
  whatsapp: "",
  serviceInterest: "",
  submittedAt: "",
};
