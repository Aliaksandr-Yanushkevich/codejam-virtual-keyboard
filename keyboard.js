const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);


const input = document.createElement('input');
input.className = 'text-field';
input.setAttribute('type', 'text');
wrapper.appendChild(input);

const keyboard = document.createElement('section');
keyboard.className = 'keyboard';
wrapper.appendChild(keyboard);

const row1 = document.createElement('div');
row1.className = 'row row1';
keyboard.appendChild(row1);

for ( let i= 0; i<14; i++) {
    const button = document.createElement('button');
    button.setAttribute('class', 'btn');
    row1.appendChild(button);
}

const row2 = document.createElement('div');
row2.className = 'row row2';
keyboard.appendChild(row2);

for ( let i= 0; i<15; i++) {
    const button = document.createElement('button');
    button.className = 'btn';
    row2.appendChild(button);
}

const row3 = document.createElement('div');
row3.className = 'row row3';
keyboard.appendChild(row3);

for ( let i= 0; i<13; i++) {
    const button = document.createElement('button');
    button.className = 'btn';
    row3.appendChild(button);
}

const row4 = document.createElement('div');
row4.className = 'row row4';
keyboard.appendChild(row4);

for ( let i= 0; i<14; i++) {
    const button = document.createElement('button');
    button.setAttribute('class', 'btn');
    row4.appendChild(button);
}

const row5 = document.createElement('div');
row5.className = 'row row5';
keyboard.appendChild(row5);

for ( let i= 0; i<9; i++) {
    const button = document.createElement('button');
    button.setAttribute('class', 'btn');
    row5.appendChild(button);
}

