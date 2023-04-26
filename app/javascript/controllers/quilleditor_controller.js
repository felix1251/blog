import { Controller } from "@hotwired/stimulus";
import Utils from "../utils/quill";

export default class extends Controller {
    static targets = ["editor", "input"];

    connect() {
        Utils.generateQuill({
            target: this.editorTarget,
            input: this.inputTarget,
        });
    }

    disconnect() {
        Utils.disconnectQuill();
    }
}
