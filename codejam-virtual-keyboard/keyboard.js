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
        capsLock: false
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
        this.wrapper.appendChild(this.keysContainer)
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "enter",
            "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "Shift", "up",
            "Ctrl", "win", "Alt", "space", "Alt", "Ctrl", "left", "down", "right"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "]", "enter", "up", ].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--backspace");
                    // keyElement.innerHTML = "backspace";
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
                    keyElement.classList.add("keyboard__key--ctr");
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
                    keyElement.classList.add("keyboard__key--shift");
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
                    keyElement.textContent = key.toLowerCase();

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
})




// const Keyboard = {
//     elements: {
//         main: null,
//         keysContainer: null,
//         keys: []
//     },

//     eventHandlers: {
//         oninput: null,
//         onclose: null
//     },

//     properties: {
//         value: "",
//         capsLock: false
//     },



// const keyboard = document.createElement('section');
// keyboard.className = 'keyboard';
// wrapper.appendChild(keyboard);

// const row1 = document.createElement('div');
// row1.className = 'row row1';
// keyboard.appendChild(row1);

// for ( let i= 0; i<14; i++) {
//     const button = document.createElement('button');
//     button.setAttribute('class', 'btn');
//     row1.appendChild(button);
// }

// const row2 = document.createElement('div');
// row2.className = 'row row2';
// keyboard.appendChild(row2);

// for ( let i= 0; i<15; i++) {
//     const button = document.createElement('button');
//     button.className = 'btn';
//     row2.appendChild(button);
// }

// const row3 = document.createElement('div');
// row3.className = 'row row3';
// keyboard.appendChild(row3);

// for ( let i= 0; i<13; i++) {
//     const button = document.createElement('button');
//     button.className = 'btn';
//     row3.appendChild(button);
// }

// const row4 = document.createElement('div');
// row4.className = 'row row4';
// keyboard.appendChild(row4);

// for ( let i= 0; i<14; i++) {
//     const button = document.createElement('button');
//     button.setAttribute('class', 'btn');
//     row4.appendChild(button);
// }

// const row5 = document.createElement('div');
// row5.className = 'row row5';
// keyboard.appendChild(row5);

// for ( let i= 0; i<9; i++) {
//     const button = document.createElement('button');
//     button.setAttribute('class', 'btn');
//     row5.appendChild(button);
// }

