let lightMode = false;

const colors = {
    DarkEmphColor: "#f00",
    DarkEmphShadowColor: "#500",
    DarkHeaderColor: "#333",
    DarkBodyColor: "#444",
    DarkLineColor: "#888",

    LightEmphColor: "#0f0",
    LightEmphShadowColor: "#050",
    LightHeaderColor: "#aaa",
    LightBodyColor: "#fff",
    LightLineColor: "#888",
}

let internalCSS = $("<style>", {
    id: "internalCSS"
});

$("head").append(internalCSS);

function toggleLightMode() {
    if (lightMode) {
        lightMode = false;
        $("#internalCSS").text(`:root {
--active-emph-color: ${colors.DarkEmphColor};
--active-emph-shadow-color: ${colors.DarkEmphShadowColor};
--active-header-color: ${colors.DarkHeaderColor};
--active-body-color: ${colors.DarkBodyColor};
--active-line-color: ${colors.DarkLineColor};
}`)
    } else {
        lightMode = true;
        $("#internalCSS").text(`:root {
--active-emph-color: ${colors.LightEmphColor};
--active-emph-shadow-color: ${colors.LightEmphShadowColor};
--active-header-color: ${colors.LightHeaderColor};
--active-body-color: ${colors.LightBodyColor};
--active-line-color: ${colors.LightLineColor};
}`)
    }
}
toggleLightMode();

$("#modeToggle").on("click", toggleLightMode);