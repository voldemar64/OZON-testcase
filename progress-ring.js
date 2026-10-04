function clampValue(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.min(100, Math.max(0, number)) : 0;
}

export class ProgressRing extends HTMLElement {
  static observedAttributes = ["value"];

  connectedCallback() {
    this.setAttribute("role", "progressbar");
    this.setAttribute("aria-valuemin", "0");
    this.setAttribute("aria-valuemax", "100");
    this._updateValue();
  }

  attributeChangedCallback() {
    this._updateValue();
  }

  get value() {
    return clampValue(this.getAttribute("value"));
  }

  set value(value) {
    this.setAttribute("value", String(clampValue(value)));
  }

  get animated() {
    return this.hasAttribute("animated");
  }

  set animated(enabled) {
    this.toggleAttribute("animated", Boolean(enabled));
  }

  _updateValue() {
    const value = this.value;
    this.style.setProperty("--progress-angle", `${value * 3.6}deg`);
    this.setAttribute("aria-valuenow", String(value));
  }
}

customElements.define("progress-ring", ProgressRing);
