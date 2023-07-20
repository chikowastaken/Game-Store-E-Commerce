import type { Easing, OptionResolver } from "@motionone/types";
import type { EasingFunction } from "@motionone/easing";
export declare type From = "first" | "last" | "center" | number;
export declare type StaggerOptions = {
    start?: number;
    from?: From;
    easing?: EasingFunction | Easing;
};
export declare function stagger(duration?: number, { start, from, easing }?: StaggerOptions): OptionResolver<number>;
export declare function getFromIndex(from: From, total: number): number;
export declare function resolveOption<T>(option: T | OptionResolver<T>, i: number, total: number): T;
//# sourceMappingURL=stagger.d.ts.map