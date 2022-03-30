
const navLinkToUrl = (
    url: string,
    query?: { [key: string]: string }
) => {
    let search = '';
    if (query) {
        search = '?';
        Object.keys(query).forEach((e, i) => {
            search += `${i > 0 ? '&' : ''}${e}=${query[e]}`
        })
    }
    console.log(`/${url}${search}`);
    return `/${url}${search}`
}
export default navLinkToUrl;