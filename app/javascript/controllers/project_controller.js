import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["quillcontent"];

    connect() {
        this.quill = new Quill(this.quillcontentTarget);
        this.quill.container.firstChild.style.padding = 0;
        this.quill.disable();
    }

    disconnect() {
        if (this.quill) {
            this.quill = null;
        }
    }
}
