import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const lngs = {
    en: { nativeName: "English" },
    ru: { nativeName: "Russian" },
    az: { nativeName: "Azerbaijan" },
  };

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => {
            navigate(
              `${lng}/${location.pathname.split("/").slice(2).join("/")}`
            );
            i18n.changeLanguage(lng);
          }}
        >
          {(lngs as any)[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
