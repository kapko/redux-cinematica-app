export const credos = {
    email: 'admin@gmail.com',
    password: 'admin'
};

export const setItem = (key, value) => {
    localStorage.setItem(key, value);
}

export const removeItem = (key, value) => {
    localStorage.removeItem(key, value);
}

export const clearStorage = () => localStorage.clear();
