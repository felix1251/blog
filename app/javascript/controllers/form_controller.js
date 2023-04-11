import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["editor", "input"];
    connect() {
        this.quill = new Quill(this.editorTarget, {
            placeholder: "Write something...",
            theme: "snow",
            modules: {
                toolbar: [
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ align: [] }],
                    ["blockquote", "link", "image"],
                    ["clean"],
                    [{ color: ["#0BB981"] }],
                ],
                imageResize: {
                    displaySize: true,
                    displayStyles: {
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                    },
                    modules: ["Resize", "DisplaySize", "Toolbar"],
                },
            },
        });
        this.quill.container.firstChild.classList.add("text-primary");
        this.quill.container.firstChild.classList.add("dark:text-white");
        this.quill.container.firstChild.innerHTML = this.inputTarget.value;
        this.quill.on("text-change", (delta, oldDelta, source) => {
            this.inputTarget.value = this.quill.container.firstChild.innerHTML;
        });
    }
    disconnect() {
        if (this.quill) {
            this.quill = null;
        }
    }
}
