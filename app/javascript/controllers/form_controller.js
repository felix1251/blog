import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["editor", "input"];
    connect() {
        this.quill = new Quill(this.editorTarget, {
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

        this.customizeQuill();

        this.quill.container.firstChild.innerHTML = this.inputTarget.value;
        this.quill.on("text-change", () => {
            this.inputTarget.value = this.quill.container.firstChild.innerHTML;
        });
    }

    customizeQuill() {
        let container = document.getElementsByClassName("ql-container");
        let toolbar = document.getElementsByClassName("ql-toolbar");
        let svgs = document.querySelectorAll(".ql-stroke");

        ["rounded-t-lg", "text-white"].forEach((twcss) =>
            toolbar[0].classList.add(twcss)
        );

        [
            "rounded-b-lg",
            "border",
            "dark:border-gray-700",
            "text-primary",
            "dark:text-white",
        ].forEach((twcss) => container[0].classList.add(twcss));

        svgs.forEach((svg) => {
            svg.style.stroke = "#8e8e8e";
        });
    }

    disconnect() {
        if (this.quill) {
            this.quill = null;
        }
    }
}
