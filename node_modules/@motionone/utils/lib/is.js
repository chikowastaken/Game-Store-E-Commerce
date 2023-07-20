export const isNumber = (value) => typeof value === "number";
export const isString = (value) => typeof value === "string";
export const isEasingGenerator = (easing) => typeof easing === "object" &&
    Boolean(easing.createAnimation);
export const isCubicBezier = (easing) => Array.isArray(easing) && isNumber(easing[0]);
export const isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);
//# sourceMappingURL=is.js.map