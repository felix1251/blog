import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["animate"];

    connect() {
        this.element.addEventListener("click", () => this.navClick());
    }

    navClick() {
        this.animateTargets.map((temp, index) => {
            switch (index) {
                case 0:
                    this.changeClass(temp, "rotate-[42deg]");
                    break;
                case 1:
                    this.changeClass(temp, "-translate-x-10");
                    break;
                case 2:
                    this.changeClass(temp, "-rotate-[42deg]");
                    break;
                default:
                    break;
            }
        });
    }

    changeClass(temp, twcss) {
        const { classList } = temp;
        if (classList.contains(twcss)) {
            temp.classList.remove(twcss);
        } else {
            temp.classList.add(twcss);
        }
    }

    disconnect() {
        this.element.removeEventListener("click", this.navClick());
    }
}
