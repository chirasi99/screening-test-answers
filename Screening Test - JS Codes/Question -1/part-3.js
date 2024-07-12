function projectObject(src, proto) {
    const projected = {};
    for (let key in proto) {
        if (src.hasOwnProperty(key)) {
            if (typeof proto[key] === 'object' && proto[key] !== null) {
                projected[key] = projectObject(src[key], proto[key]);
            } else {
                projected[key] = src[key];
            }
        }
    }
    return projected;
}
const src = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32
        }
    },
    prop12: 12
}

const proto = {
    prop11: {
        prop22: null
    },
}

console.log(projectObject(src, proto));
