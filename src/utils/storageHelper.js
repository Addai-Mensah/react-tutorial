export let setStorage = (name,value) =>{
    localStorage.setItem(`${name}`, `${value}`);
    return value;
};


export let getStoredValue = (name) => {
    let value = localStorage.getItem(`${name}`);
    return value;
};