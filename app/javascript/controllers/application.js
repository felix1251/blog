import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

let iconLight = document.getElementById("theme-toggle-light-icon");
let iconDark = document.getElementById("theme-toggle-dark-icon");

if (localStorage.getItem('color-theme') === 'dark')
{
    application.element.classList.add('dark');
    iconDark.classList.add("hidden")
    iconLight.classList.remove("hidden")
} else {
    application.element.classList.remove('dark');
    iconDark.classList.remove("hidden")
    iconLight.classList.add("hidden")
}

export { application }
