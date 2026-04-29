"use client";

import { useEffect, useState } from "react";

const storageKey = "mapex-cookie-consent";

type Preferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: Preferences = {
  necessary: true,
  analytics: false,
  marketing: false
};

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);

  useEffect(() => {
    setMounted(true);
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        setPreferences({ ...defaultPreferences, ...JSON.parse(saved) });
      } catch {
        setShowBanner(true);
      }
    }

    const open = () => {
      setShowSettings(true);
      setShowBanner(false);
    };
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  const save = (next: Preferences) => {
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    setPreferences(next);
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!mounted) return null;

  return (
    <>
      {showBanner ? (
        <div className="cookie-banner" role="dialog" aria-label="Súhlas s cookies">
          <div>
            <h2>Vážime si vaše súkromie</h2>
            <p>
              Súbory cookie používame na zlepšenie vášho zážitku z prehliadania,
              poskytovanie prispôsobených reklám alebo obsahu a analýzu našej
              návštevnosti. Kliknutím na „Prijať všetko“ súhlasíte s naším
              používaním súborov cookie.{" "}
              <button type="button" onClick={() => setShowSettings(true)}>
                Nastavenia
              </button>
            </p>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => save(defaultPreferences)}>
              Odmietnuť
            </button>
            <button type="button" onClick={() => setShowSettings(true)}>
              Prispôsobiť
            </button>
            <button
              type="button"
              onClick={() =>
                save({ necessary: true, analytics: true, marketing: true })
              }
            >
              Prijať všetko
            </button>
          </div>
        </div>
      ) : null}

      {showSettings ? (
        <div className="cookie-modal-wrap" role="presentation">
          <button
            className="cookie-backdrop"
            type="button"
            aria-label="Zavrieť nastavenia cookies"
            onClick={() => setShowSettings(false)}
          />
          <div className="cookie-modal" role="dialog" aria-modal="true" aria-label="Nastavenia cookies">
            <div className="cookie-modal-header">
              <h2>Prispôsobte preferencie súhlasu</h2>
              <button type="button" onClick={() => setShowSettings(false)}>
                Zavrieť
              </button>
            </div>
            <div className="cookie-modal-body">
              <p>
                Používame súbory cookies, aby sme vám pomohli efektívne sa
                pohybovať a vykonávať určité funkcie. Nižšie nájdete podrobné
                informácie o kategóriách súhlasu.
              </p>
              <CookieToggle
                title="Nevyhnutné"
                description="Potrebné súbory cookie sú pre základné funkcie webových stránok zásadné."
                checked={preferences.necessary}
                disabled
                onChange={() => undefined}
              />
              <CookieToggle
                title="Analytika"
                description="Analytické cookies sa používajú na pochopenie toho, ako návštevníci interagujú s webovou stránkou."
                checked={preferences.analytics}
                onChange={(value) =>
                  setPreferences((current) => ({ ...current, analytics: value }))
                }
              />
              <CookieToggle
                title="Marketing"
                description="Marketingové cookies pomáhajú doručovať relevantný obsah a vyhodnocovať účinnosť kampaní."
                checked={preferences.marketing}
                onChange={(value) =>
                  setPreferences((current) => ({ ...current, marketing: value }))
                }
              />
            </div>
            <div className="cookie-modal-actions">
              <button type="button" onClick={() => save(defaultPreferences)}>
                Odmietnuť
              </button>
              <button type="button" onClick={() => save(preferences)}>
                Uložiť moje predvoľby
              </button>
              <button
                type="button"
                onClick={() =>
                  save({ necessary: true, analytics: true, marketing: true })
                }
              >
                Prijať všetko
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function CookieToggle({
  title,
  description,
  checked,
  disabled,
  onChange
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="cookie-toggle">
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />
    </label>
  );
}
