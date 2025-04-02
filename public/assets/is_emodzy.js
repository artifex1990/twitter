const isEmodzy = (char) => {
    return char >= '\uD800' && char <= '\uDFFF';
}

export default isEmodzy;