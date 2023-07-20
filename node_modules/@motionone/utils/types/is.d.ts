import { BezierDefinition, Easing, EasingGenerator } from "@motionone/types";
export declare const isNumber: (value: unknown) => value is number;
export declare const isString: (value: unknown) => value is string;
export declare const isEasingGenerator: (easing: Easing | Easing[] | EasingGenerator) => easing is EasingGenerator;
export declare const isCubicBezier: (easing: EasingGenerator | Easing | Easing[]) => easing is BezierDefinition;
export declare const isEasingList: (easing: EasingGenerator | Easing | Easing[] | undefined) => easing is Easing[];
//# sourceMappingURL=is.d.ts.map