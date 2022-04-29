let lightMode = false;

const colors = {
    DarkEmphColor: "#f00",
    DarkEmphShadowColor: "#500",
    DarkHeaderColor: "#333",
    DarkBodyColor: "#222",
    DarkLineColor: "#000",
    DarkTextColor: "#888",

    LightEmphColor: "#0f0",
    LightEmphShadowColor: "#050",
    LightHeaderColor: "#aaa",
    LightBodyColor: "#fff",
    LightLineColor: "#ddd",
    LightTextColor: "#888"
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
--active-text-color: ${colors.DarkTextColor};
}`)
        $("#modeToggle").attr("src", "assets/LightMode.png");
        $("#github").attr("src", "assets/socials/GitHub_Logo_White.png");
    } else {
        lightMode = true;
        $("#internalCSS").text(`:root {
--active-emph-color: ${colors.LightEmphColor};
--active-emph-shadow-color: ${colors.LightEmphShadowColor};
--active-header-color: ${colors.LightHeaderColor};
--active-body-color: ${colors.LightBodyColor};
--active-line-color: ${colors.LightLineColor};
--active-text-color: ${colors.LightTextColor};
}`)
        $("#modeToggle").attr("src", "assets/DarkMode.png");
        $("#github").attr("src", "assets/socials/GitHub_Logo.png");
    }
}
toggleLightMode();

$("#modeToggle").on("click", toggleLightMode);



$(".projectPic").on("mouseout", (event) => {
    console.log(event);
    $(event.target).attr("style", "");
});

$(".projectPic").on("mouseover", (event) => {
    console.log(event);
    $(event.target).css("box-shadow", "2px 2px 10px 5px var(--active-emph-shadow-color)");
    $(event.target).css("border-radius", "1%");
});