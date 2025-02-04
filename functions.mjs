export function myBind(thisArg, ...bindArgs) {
    //write method myBind fully running standard "bind" method functionality
    //no using standard call / apply methods
    return (...args) => {
        const field = Symbol();
        thisArg[field] = this;
        const res = thisArg[field](...args, ...bindArgs);
        delete thisArg[field];
        return res;
    }
}