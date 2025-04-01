const postSize = (post) => {
    let count = 0;
    let i = 0;
    const n = post.length;

    while (i < n) {
        const isHttpLink = post.startsWith('http://', i) || post.startsWith('https://', i);
        const isWwwLink = post.startsWith('www.', i);

        if (isHttpLink || isWwwLink) {
            while (i < n && post[i] !== ' ') {
                i++;
            }
        } else {
            const char = post[i];
            if (char >= '\uD800' && char <= '\uDFFF') {
                i += 2;
            } else {
                i++;
            }
            count++;
        }
    }

    return count;
};

export default postSize;
