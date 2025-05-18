
export const changeStorage = (key, value) => {
    localStorage.setItem(key, value)
}

export const getFromStorage = (key) => {
    return localStorage.getItem(key)
}

export const removeItem = (key) => {
    localStorage.removeItem(key)
}

export const removeStorage = () => {
    localStorage.clear()
}

