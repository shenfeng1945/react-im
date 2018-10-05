export function createAction(type, ...actionArgs) {
    return (...args) => {
        let action = {type: type, payload: {}};
        actionArgs.forEach((arg, index) => {
            action.payload[actionArgs[index]] = args[index];
        });
        return action;
    }
}