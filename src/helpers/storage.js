class storage {
    setStorageItem = (cle, objet) => {
        return localStorage.setItem(cle,JSON.stringify(objet))
    }

    getStorageItem = cle => {
        var valeur = localStorage.getItem(cle);
        return valeur && JSON.parse(valeur);
    }

    removeStorageItem = cle => {
        return localStorage.removeItem(cle)
    }
}

export default new storage();