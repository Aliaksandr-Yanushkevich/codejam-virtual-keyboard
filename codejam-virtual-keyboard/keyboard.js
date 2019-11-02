const Keyboard = {
    elements: {
        wrapper: null,
        tittle: null,
        textarea: null,
        keyscontainer: null,
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
        this.header.innerHTML = 'Virtual keyboard';
        this.wrapper.appendChild(this.header);


        this.textarea = document.createElement('textarea'); //create textarea and add it into wrapper
        this.textarea.className = 'text-field';
        this.textarea.setAttribute('type', 'text');
        this.wrapper.appendChild(this.textarea);

        this.keyscontainer = document.createElement('section');
        this.keyscontainer.classList.add('keyboard', 'keyboard--hidden');

        this.elements.keysContainer.appendChild(this._createKeys());
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },


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

