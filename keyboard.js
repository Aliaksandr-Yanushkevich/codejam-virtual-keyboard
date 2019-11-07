const Keyboard = {

    properties: {
        shiftLeftHold: false,
        shiftRightHold: false,
        altLeftHold: false,
        altRightHold: false,
        value: "",
        capsLock: false,
        language: false
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
        this.textarea.placeholder = "Created by Aliaksandr Yanushkevich. Rolling Scopes School 2019-Q3";
        this.wrapper.appendChild(this.textarea);

        this.keysContainer = document.createElement('section');
        this.keysContainer.classList.add('keyboard');

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
        let keyLayout;
        const fragment = document.createDocumentFragment();
        const keysCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5",
            "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
            "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO",
            "KeyP", "BracketLeft", "BracketRight", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF",
            "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "Enter",
            "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period",
            "Slash", "ShiftRight", "ArrowUp", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight",
            "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"
        ];

        const keyEng = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "enter",
            "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ShiftRight", "up",
            "ControlLeft", "win", "AltLeft", "space", "AltRight", "ControlRight", "left", "down", "right"
        ];

        const keyEngShift = [
            "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "backspace",
            "tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}",
            "caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "|", "enter",
            "ShiftLeft", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "ShiftRight", "up",
            "ControlLeft", "win", "AltLeft", "space", "AltRight", "ControlRight", "left", "down", "right"
        ];

        const keyRus = [
            "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
            "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "\\", "enter",
            "ShiftLeft", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "ShiftRight", "up",
            "ControlLeft", "win", "AltLeft", "space", "AltRight", "ControlRight", "left", "down", "right"
        ];

        const keyRusShift = [
            "Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "backspace",
            "tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ",
            "caps", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "/", "enter",
            "ShiftLeft", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "ShiftRight", "up",
            "ControlLeft", "win", "AltLeft", "space", "AltRight", "ControlRight", "left", "down", "right"
        ];



        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };
        if (Keyboard.properties.language == false && Keyboard.properties.shiftLeftHold == false) { // Keyboard.properties.language(false) = eng
            keyLayout = keyEng;                                                                    // Keyboard.properties.language(true) = rus
        }

        else if (Keyboard.properties.language == false && Keyboard.properties.shiftLeftHold == true) {
            keyLayout = keyEngShift;
        }
        else if (Keyboard.properties.language == false && Keyboard.properties.shiftRightHold == true) {
            keyLayout = keyEngShift;
        }
        else if (Keyboard.properties.language == true && Keyboard.properties.shiftLeftHold == false) {
            keyLayout = keyRus;
        }
        else if (Keyboard.properties.language == true && Keyboard.properties.shiftLeftHold == true) {
            keyLayout = keyRusShift;
        }
        else if (Keyboard.properties.language == true && Keyboard.properties.shiftRightHold == true) {
            keyLayout = keyRusShift;
        }


        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "]", "ъ", "}", "enter", "up", "Ъ"].indexOf(key) !== -1;
            let i = keyLayout.indexOf(key);
            let keyCode = keysCode[i];
            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add(keyCode);
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--backspace");
                    keyElement.innerHTML = createIconHTML("backspace");

                    break;

                case "tab":
                    keyElement.classList.add("keyboard__key--tab");
                    keyElement.innerHTML = createIconHTML("sync_alt");

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--caps");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");
                    if (Keyboard.properties.capsLock == true) {
                        keyElement.classList.add("active");
                    }

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--enter");
                    keyElement.innerHTML = createIconHTML("keyboard_return")

                    break;

                case "ShiftLeft":
                    keyElement.classList.add("keyboard__key--shift");
                    keyElement.textContent = "Shift";
                    if (Keyboard.properties.shiftLeftHold == true) {
                        keyElement.classList.add("active");
                    }

                    break;

                case "ShiftRight":
                    keyElement.classList.add("keyboard__key--shift");
                    keyElement.textContent = "Shift";
                    if (Keyboard.properties.shiftRightHold == true) {
                        keyElement.classList.add("active");
                    }

                    break;

                case "ControlLeft":
                    keyElement.classList.add("keyboard__key--ctrl");
                    keyElement.textContent = "Ctrl";

                    break;

                case "ControlRight":
                    keyElement.classList.add("keyboard__key--ctrl");
                    keyElement.textContent = "Ctrl";

                    break;

                case "win":
                    keyElement.classList.add("keyboard__key--win");
                    keyElement.innerHTML = createIconHTML("border_all");

                    break;

                case "AltLeft":
                    keyElement.classList.add("keyboard__key--alt");
                    keyElement.textContent = "Alt";
                    if (Keyboard.properties.altLeftHold == true) {
                        keyElement.classList.add("active");
                    }

                    break;

                case "AltRight":
                    keyElement.classList.add("keyboard__key--alt");
                    keyElement.textContent = "Alt";
                    if (Keyboard.properties.altRightHold == true) {
                        keyElement.classList.add("active");
                    }
                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--space");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    break;

                case "up":
                    keyElement.classList.add("keyboard__key--up");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_up");

                    break;

                case "left":
                    keyElement.classList.add("keyboard__key--left");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_left");

                    break;

                case "down":
                    keyElement.classList.add("keyboard__key--down");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_down");

                    break;

                case "right":
                    keyElement.classList.add("keyboard__key--right");
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_right");

                    break;

                default:

                    Keyboard.properties.capsLock == false ? keyElement.textContent = key.toLowerCase() : keyElement.textContent = key.toUpperCase();
                    if (Keyboard.properties.shiftLeftHold == true || Keyboard.properties.shiftRightHold == true) {
                        keyElement.textContent = key.toLocaleUpperCase();
                    }

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
window.addEventListener("keyup", (event) => { // handling key highlighter
    if (event.code !== "CapsLock") {
        if (event.code == "ShiftLeft") {
            Keyboard.properties.shiftLeftHold = false;
            document.body.innerHTML = '';
            Keyboard.init();
        }
        if (event.code == "ShiftRight") {
            Keyboard.properties.shiftRightHold = false;
            document.body.innerHTML = '';
            Keyboard.init();
        }
        if (event.code == "AltLeft") {
            event.preventDefault();
            document.querySelector('.' + event.code + '').classList.add("active");
            Keyboard.properties.altLeftHold = false;
        }
        if (event.code == "AltRight") {
            event.preventDefault();
            document.querySelector('.' + event.code + '').classList.add("active");
            Keyboard.properties.altRightHold = false;
        }

        document.querySelectorAll('.keyboard__key').forEach((element) => {
            element.classList.remove("active")
        })
    }
});

window.addEventListener("keydown", (event) => { // handling language switch
    if (event.code == "ShiftLeft") {
        Keyboard.properties.shiftLeftHold = true;
        document.body.innerHTML = '';
        Keyboard.init();
    }
    if (event.code == "ShiftRight") {
        Keyboard.properties.shiftRightHold = true;
        document.body.innerHTML = '';
        Keyboard.init();
    }

    if (event.code == "AltLeft") {
        document.querySelector('.' + event.code + '').classList.add("active");
        Keyboard.properties.altLeftHold = true;
    }
    if (event.code == "AltRight") {
        document.querySelector('.' + event.code + '').classList.add("active");
        Keyboard.properties.altRightHold = true;
    }

    if (event.code == "AltLeft" && Keyboard.properties.shiftLeftHold == true) {
        Keyboard.properties.language = !Keyboard.properties.language;
        document.body.innerHTML = '';
        Keyboard.init();
    }

    if (event.code == "ShiftLeft" && Keyboard.properties.altLeftHold == true) {
        Keyboard.properties.language = !Keyboard.properties.language;
        document.body.innerHTML = '';
        Keyboard.init();
    }

    if (event.code == "CapsLock") {
        // document.querySelector('.' + event.code + '').classList.toggle("active");
        Keyboard.properties.capsLock = !Keyboard.properties.capsLock;
        document.body.innerHTML = '';
        Keyboard.init();
    }


    else if (event.code == "Tab") {
        event.preventDefault();
        document.querySelector('.' + event.code + '').classList.add("active");

    } else {
        document.querySelector('.' + event.code + '').classList.add("active");
    }

});

window.addEventListener('mouseup', (e) => {
    let eventText = e.target.textContent;
    console.log(eventText)
})