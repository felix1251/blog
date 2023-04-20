import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    connect() {
        new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.intersectionRatio > 0) {
                    this.animate();
                    observer.disconnect();
                }
            });
        }).observe(this.element);
    }

    animate() {
        this.element.classList.remove("opacity-0");
        this.element.classList.add("opcity-100");
    }
}
