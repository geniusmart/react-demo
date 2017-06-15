export const SEARCH = "SEARCH"
export const CHANGE = "CHANGE"
export const LOADING = 'LOADING'
export const LOADED = 'LOADED'

export const change = ()=>{
    return {
        type:CHANGE
    }
}

export const search = name => (dispatch, getState) => {
    dispatch(loading());

    return fetch(`https://api.github.com/users/${name}/repos`)
        .then(response => response.json())
        .then(json => dispatch(loaded(json)));
};


const loading = ()=>{
    return{
        type:LOADING
    }
}

const loaded = (json)=>{
    return{
        type:LOADED,
        json
    }
}