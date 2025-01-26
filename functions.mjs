export function myBind(thisArg, ...bindArgs) {
    //write method myBind fully running standard "bind" method functionality
    //no using standard call / apply methods
    return (...args) => {
        const fieldTime = new Date().getTime();
        thisArg[fieldTime] = this;
        const res = thisArg[fieldTime](...args, ...bindArgs);
        delete thisArg[fieldTime];
        return res;
    }
}