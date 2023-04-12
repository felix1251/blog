import { Controller } from "@hotwired/stimulus";
// import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {
    static targets = ["lightIcon", "darkIcon"];

    connect() {
        this.element.addEventListener("click", () => this.changeTheme());
    }

    disconnect() {
        this.element.removeEventListener("click", () => this.changeTheme());
    }

    changeTheme() {
        if (this.application.element.classList.contains("dark")) {
            this.application.element.classList.remove("dark");
            this.lightIconTarget.classList.remove("hidden");
            this.darkIconTarget.classList.add("hidden");
            document.cookie = "theme=light";
            return;
        }
        this.application.element.classList.add("dark");
        this.lightIconTarget.classList.add("hidden");
        this.darkIconTarget.classList.remove("hidden");
        document.cookie = "theme=dark";
    }
}
