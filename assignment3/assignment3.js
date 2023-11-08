let tabBtns = [];
let tabPanels = {};

tabBtns = Array.from(document.querySelectorAll(".tabBtn"));
for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener("click", selectTab, false);
    tabBtns[i].addEventListener("keyup", focusTab, false);
    // Add the role and tabindex attributes for accessibility
    tabBtns[i].setAttribute("role", "tab");
    tabBtns[i].setAttribute("aria-selected", "false");
    tabBtns[i].setAttribute("tabindex", "0");
}

let x = document.querySelectorAll(".tabPanel");
for (let i = 0; i < x.length; i++) {
    tabPanels[x[i].id] = x[i];
    // Add the role, aria-labelledby, and tabindex attributes for accessibility
    x[i].setAttribute("role", "tabpanel");
    x[i].setAttribute("aria-hidden", "true");
    x[i].setAttribute("tabindex", "0");
}

// If left (37), right (39), or down (40) arrow keys are pressed, change the focus on the tab buttons, but do not activate.
function focusTab(e) {
    let currentIndex = tabBtns.indexOf(e.target);

    if (e.keyCode == 39) {
        // Right arrow key
        tabBtns[(currentIndex + 1) % tabBtns.length].focus();
    } else if (e.keyCode == 37) {
        // Left arrow key
        tabBtns[(currentIndex - 1 + tabBtns.length) % tabBtns.length].focus();
    } else if (e.keyCode == 40) {
        // Down arrow key
        tabPanels[e.target.getAttribute("aria-controls")].focus();
        tabPanels[e.target.getAttribute("aria-controls")].setAttribute("aria-hidden", "false");
    }
}

// If tab button is clicked (mouse, touch, Enter/Space) or focused with the down arrow key, expose that tab's panel and hide the others
function selectTab(e) {
    let tabPanelID = e.target.getAttribute("aria-controls");

    for (let i = 0; i < tabBtns.length; i++) {
        if (tabBtns[i].id == e.target.id) {
            tabPanels[tabPanelID].classList.remove("hidden");
            tabBtns[i].setAttribute("aria-selected", "true");
            tabBtns[i].setAttribute("tabindex", "0");
            e.target.focus();
        } else {
            tabPanels[tabBtns[i].getAttribute("aria-controls")].classList.add("hidden");
            tabBtns[i].setAttribute("aria-selected", "false");
            tabBtns[i].setAttribute("tabindex", "0");
        }
    }
}
