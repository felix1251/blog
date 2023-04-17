import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["quillcontent"];

    connect() {
        hljs.configure({ languages: ["javascript", "ruby", "python"] });

        this.quill = new Quill(this.quillcontentTarget, {
            theme: "bubble",
            modules: {
                syntax: true,
            },
        });
        this.quill.container.firstChild.style.padding = 0;
        this.quill.disable();
    }

    disconnect() {
        if (this.quill) {
            this.quill = null;
        }
    }
}
