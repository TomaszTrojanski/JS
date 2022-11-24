const asyncAdd = async (a,b) =>{
    if (typeof a !== 'number' || b !== 'number'){
        return Promise.reject('Argumenty muszą być numerami!!!')
    }
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(b+a)
        }, 1000)
    })
}