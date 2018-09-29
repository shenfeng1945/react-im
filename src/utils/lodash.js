export const isEmpty = (object) => {
    if(Object.keys(object).length){
        return false;
    }else {
        return true;
    }
}