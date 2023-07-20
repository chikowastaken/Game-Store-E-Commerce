import type { AnimationControls, AnimationOptions } from "@motionone/types";
export declare class Animation implements Omit<AnimationControls, "stop" | "duration"> {
    private resolve?;
    private reject?;
    startTime: number | null;
    private pauseTime;
    private rate;
    private tick;
    private t;
    private cancelTimestamp;
    private frameRequestId?;
    playState: AnimationPlayState;
    constructor(output: (v: number) => void, keyframes?: number[], { easing, duration, delay, endDelay, repeat, offset, direction, }?: AnimationOptions);
    finished: Promise<unknown>;
    play(): void;
    pause(): void;
    finish(): void;
    stop(): void;
    cancel(): void;
    reverse(): void;
    commitStyles(): void;
    get currentTime(): number;
    set currentTime(t: number);
    get playbackRate(): number;
    set playbackRate(rate: number);
}
//# sourceMappingURL=Animation.d.ts.map