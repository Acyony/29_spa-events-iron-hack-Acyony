export function randomColor () {
    let colorRed = Math.floor(Math.random() * 256);
    let colorGreen = Math.floor(Math.random() * 256);
    let colorBlue = Math.floor(Math.random() * 266);

    return { 
        r: colorRed, 
        g: colorGreen, 
        b: colorBlue,
        hex: rgb2hex(colorRed, colorGreen, colorBlue)
    };
}


//-------=^.^=--------Convert RGB to Hexadecimal 

export function rgb2hex(r, g, b) {
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}