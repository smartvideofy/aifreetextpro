export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export const CONSENT_EVENT = 'aftp:consent-changed';
export const CONSENT_NOTICE_VERSION = '2026-10-tracking-v2';
export const CONSENT_NOTICE = 'Optional analytics cookies measure site use with Google Analytics. Optional marketing cookies share page visits, app-link clicks and advertising click identifiers with Meta and X for advertising measurement, and remember which creator link brought you here. You can refuse or withdraw in Cookie Settings. No submitted writing or contact details are sent.';
export const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true, analytics: false, marketing: false, functional: false,
};

export function parsePreferences(raw: string | null): CookiePreferences {
  try {
    const p = JSON.parse(raw || 'null');
    return { essential: true, analytics: p?.analytics === true, marketing: p?.marketing === true, functional: p?.functional === true };
  } catch { return { ...DEFAULT_PREFERENCES }; }
}

export function readPreferences(): CookiePreferences {
  try { return parsePreferences(localStorage.getItem('cookie-preferences')); }
  catch { return { ...DEFAULT_PREFERENCES }; }
}

export function savePreferences(preferences: CookiePreferences, choice: string): void {
  const normalized = parsePreferences(JSON.stringify(preferences));
  // A stable pseudonymous reference, not an email or cross-site advertising identifier.
  const visitor = localStorage.getItem('aftp-consent-visitor') || crypto.randomUUID();
  localStorage.setItem('aftp-consent-visitor', visitor);
  let history: unknown[] = [];
  try {
    const saved = JSON.parse(localStorage.getItem('aftp-consent-history') || '[]');
    if (Array.isArray(saved)) history = saved;
  } catch { /* retain a new record when old storage is malformed */ }
  history.push({ visitor, at: new Date().toISOString(), noticeVersion: CONSENT_NOTICE_VERSION, notice: CONSENT_NOTICE, preferences: normalized, choice, region: 'unknown', scope: 'marketing-site' });
  localStorage.setItem('aftp-consent-history', JSON.stringify(history));
  localStorage.setItem('cookie-preferences', JSON.stringify(normalized));
  localStorage.setItem('cookie-consent', choice);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function observeConsent(callback: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === 'cookie-preferences' || event.key === null) callback();
  };
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener('storage', onStorage);
  };
}