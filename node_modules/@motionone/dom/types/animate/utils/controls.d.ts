import type { AnimationControls } from "@motionone/types";
import type { AnimationFactory, AnimationWithCommitStyles } from "../types";
interface MotionState {
    animations: AnimationWithCommitStyles[];
    duration: number;
    finished?: Promise<any>;
}
export declare const wrapAnimationWithControls: (animationFactory: AnimationFactory[], duration?: number) => AnimationControls;
export declare const controls: {
    get: (target: MotionState, key: string) => number | Promise<any> | AnimationPlayState | (() => void) | undefined;
    set: (target: MotionState, key: string, value: number) => boolean;
};
export {};
//# sourceMappingURL=controls.d.ts.map