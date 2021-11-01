let count = 0;
const msgClone = () => new Array(count++).length;
const postsDB = [
    {id: 1, message: `It's my ${msgClone()}st post!`, likesCount: 24},
    {id: 2, message: `It's my ${msgClone()}st post!`, likesCount: 4},
    {id: 3, message: `It's my ${msgClone()}st post!`, likesCount: 4}
]




export default postsDB