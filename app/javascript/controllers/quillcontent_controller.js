import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["content"];

    connect() {
        this.quill = new Quill(this.element);
        this.quill.container.firstChild.style.padding = 0;
        this.quill.disable();
    }

    disconnect() {
        if (this.quill) {
            this.quill = null;
        }
    }
}
