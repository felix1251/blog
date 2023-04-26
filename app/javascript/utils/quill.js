class Quill {
    generateQuill({ type = "editor", target, input = "" }) {
        hljs.configure({ languages: ["javascript", "ruby", "python"] });

        switch (type) {
            case "editor":
                this.editorQuill(target, input);
                break;
            case "read-only":
                this.displayQuill(target);
                break;
            default:
                break;
        }
    }

    editorQuill(target, input) {
        this.quill = new Quill(target, {
            theme: "snow",
            modules: {
                syntax: true,
                toolbar: [
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ align: [] }],
                    ["blockquote", "link", "image", "code-block"],
                    ["clean"],
                    [{ color: ["", "#0BB981"] }],
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

        this.quill.container.firstChild.innerHTML = input.value;
        this.quill.on("text-change", () => {
            input.value = this.quill.container.firstChild.innerHTML;
        });
    }

    displayQuill(target) {
        this.quill = new Quill(target, {
            theme: "bubble",
            modules: {
                syntax: true,
            },
        });

        this.quill.container.firstChild.style.padding = 0;
        this.quill.disable();
    }

    customizeQuill() {
        let container = document.getElementsByClassName("ql-container");
        let toolbar = document.getElementsByClassName("ql-toolbar");
        let svgs = document.querySelectorAll(".ql-stroke");

        svgs.forEach((svg) => {
            svg.style.stroke = "#8e8e8e";
        });

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
    }

    disconnectQuill() {
        if (this.quill) {
            this.quill = null;
        }
    }
}

const instance = new Quill();
export default instance;
