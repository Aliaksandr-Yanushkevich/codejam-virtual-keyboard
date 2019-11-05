const Keyboard = {
    elements: {
        wrapper: null,
        tittle: null,
        textarea: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false,
        language: "rus"
    },

    init() {
        this.wrapper = document.createElement('div'); //create wrapper
        this.wrapper.className = 'wrapper';
        document.body.appendChild(this.wrapper);

        this.header = document.createElement('h1');
        this.header.className = 'tittle';
        this.header.innerHTML = 'Virtual keyboard';
        this.wrapper.appendChild(this.header);


        this.textarea = document.createElement('textarea'); //create textarea and add it into wrapper
        this.textarea.className = 'text-field';
        this.textarea.setAttribute('type', 'text');
        this.wrapper.appendChild(this.textarea);

        this.keysContainer = document.createElement('section');
        this.keysContainer.classList.add('keyboard', 'keyboard--hidden');

        this.keysContainer.appendChild(this._createKeys());
        this.wrapper.appendChild(this.keysContainer);
        document.querySelectorAll(".text-field")
        forEach(element => {
            element.addEventListener("focus", () => {
                document.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyEng = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "enter",
            "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "Shift", "up",
            "Ctrl", "win", "Alt", "space", "Alt", "Ctrl", "left", "down", "right"
        ];

        const keyRus = [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
            "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "\\", "enter",
            "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift", "up",
            "Ctrl", "win", "Alt", "space", "Alt", "Ctrl", "left", "down", "right"
        ];



        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        Keyboard.properties.language == "eng" ? keyLayout = keyEng: keyLayout = keyRus;

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "]", "ъ", "enter", "up", ].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--backspace");
                    keyElement.innerHTML = createIconHTML("backspace");

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;
                
                case "tab":
                    keyElement.classList.add("keyboard__key--tab");
                    keyElement.innerHTML = createIconHTML("sync_alt");

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "caps":
                    keyElement.classList.add("keyboard__key--caps");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "enter":
                    keyElement.classList.add("keyboard__key--enter");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "Shift":
                    keyElement.classList.add("keyboard__key--shift");
                    keyElement.textContent = key;

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "Ctrl":
                    keyElement.classList.add("keyboard__key--ctrl");
                    keyElement.textContent = key;

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "win":
                    keyElement.classList.add("keyboard__key--win");
                    keyElement.innerHTML = createIconHTML("border_all");

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "Alt":
                    keyElement.classList.add("keyboard__key--alt");
                    keyElement.textContent = key;

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "space":
                    keyElement.classList.add("keyboard__key--space");
                    keyElement.innerHTML = createIconHTML("space_bar"); 

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "up":
                    keyElement.classList.add("keyboard__key--up");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_up"); 

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "left":
                    keyElement.classList.add("keyboard__key--left");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_left"); 

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "down":
                    keyElement.classList.add("keyboard__key--down");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_down"); 

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                case "right":
                    keyElement.classList.add("keyboard__key--right");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_right"); 

                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                    //     this._triggerEvent("oninput");
                    // });

                break;

                default:
                    // keyElement.classList.add("btn--text");
                   
                    Keyboard.properties.capsLock == false ?  keyElement.textContent = key.toLowerCase() : keyElement.textContent = key.toUpperCase();
            
                    // keyElement.addEventListener("click", () => {
                    //     this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                    //     this._triggerEvent("oninput");
                    // });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    }
}

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
});
window.addEventListener("keydown", (event) => {
    keys.forEach((key) => {
        event.key == key ? event.target.style.backgroundColor = "#FF8940" : event.metaKey;
    })
});
