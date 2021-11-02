const choice = (items) => {
    let idx = Math.floor(math.random() * items.length);
    return items[idx];
}

const remove = (item, items) => {
    for (let i = 0; i< items.length; i++){
        if (items[i]===item) {
            return [...items.slice(0,i), ...items.slice(i+1)]
        }
    }
}

export {choice, remove}