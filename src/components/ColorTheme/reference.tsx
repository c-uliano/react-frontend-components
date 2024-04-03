(() => {
    "use strict";

    const getStoredTheme = () => localStorage.getItem("theme");
    const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme();
        if (storedTheme) {
            return storedTheme;
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const setTheme = (theme) => {
        if (theme === "auto") {
            document.documentElement.setAttribute("data-bs-theme", window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        } else {
            document.documentElement.setAttribute("data-bs-theme", theme);
        }
    };

    setTheme(getPreferredTheme());

    const showActiveTheme = (theme, focus = false) => {
        const themeSwitcher = document.querySelector("#bd-theme");

        if (!themeSwitcher) {
            return;
        }

        const themeSwitcherText = document.querySelector("#bd-theme-text");
        const activeThemeIcon = document.querySelector(".theme-icon-active use");
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
        const svgOfActiveBtn = btnToActive.querySelector("svg use").getAttribute("href");

        document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
            element.classList.remove("active");
            element.setAttribute("aria-pressed", "false");
        });

        btnToActive.classList.add("active");
        btnToActive.setAttribute("aria-pressed", "true");
        activeThemeIcon.setAttribute("href", svgOfActiveBtn);
        const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
        themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);

        if (focus) {
            themeSwitcher.focus();
        }
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        const storedTheme = getStoredTheme();
        if (storedTheme !== "light" && storedTheme !== "dark") {
            setTheme(getPreferredTheme());
        }
    });

    window.addEventListener("DOMContentLoaded", () => {
        showActiveTheme(getPreferredTheme());

        document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
            toggle.addEventListener("click", () => {
                const theme = toggle.getAttribute("data-bs-theme-value");
                setStoredTheme(theme);
                setTheme(theme);
                showActiveTheme(theme, true);
            });
        });
    });
})();

// ! ************************

<div className="dropdown">
    <button
        className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-label="Toggle theme (dark)">
        <svg className="bi my-1 theme-icon-active">
            <use href="#moon-stars-fill"></use>
        </svg>
        <span className="d-lg-none ms-2" id="bd-theme-text">
            Toggle theme
        </span>
    </button>
    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
        <li>
            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                <svg className="bi me-2 opacity-50">
                    <use href="#sun-fill"></use>
                </svg>
                Light
                <svg className="bi ms-auto d-none">
                    <use href="#check2"></use>
                </svg>
            </button>
        </li>
        <li>
            <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark" aria-pressed="true">
                <svg className="bi me-2 opacity-50">
                    <use href="#moon-stars-fill"></use>
                </svg>
                Dark
                <svg className="bi ms-auto d-none">
                    <use href="#check2"></use>
                </svg>
            </button>
        </li>
        <li>
            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                <svg className="bi me-2 opacity-50">
                    <use href="#circle-half"></use>
                </svg>
                Auto
                <svg className="bi ms-auto d-none">
                    <use href="#check2"></use>
                </svg>
            </button>
        </li>
    </ul>
</div>;
