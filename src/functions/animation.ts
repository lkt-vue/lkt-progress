import {ProgressAnimation, ProgressAnimationConfig} from "lkt-vue-kernel";
import {getAnimationDistanceStep} from "./functions";
import {ref, Ref} from "vue";

export const doProgressAnimation = (args: {
    duration: number
    animation: ProgressAnimationConfig
    paused: boolean
    current: Ref<number>
    target: number
    events: {
        onAnimatedFrame: Function
    }
}): undefined|Ref<number|null> => {

    if (args.paused) return;
    if (args.current.value === args.target && !args.animation.externalControl) return;
    if (isNaN(args.target) || isNaN(args.current.value)) return;
    let zero: number;
    const animationId: Ref<number|null> = ref(null);
    const distance = Math.abs(args.target - args.current.value);

    function animate(timestamp: DOMHighResTimeStamp) {
        if (args.paused || args.current.value === args.target) {
            doStopProgressAnimation(animationId);
            return;
        }

        if (isNaN(args.target) || isNaN(args.current.value)) {
            doStopProgressAnimation(animationId);
            return;
        }

        if (!zero) zero = timestamp;
        let elapsed = timestamp - zero;
        let pendingTime = args.duration - elapsed;

        let progress = getAnimationDistanceStep(distance, pendingTime);
        if (!isNaN(progress)) {
            if (args.animation.type === ProgressAnimation.Incremental) {
                args.current.value = Math.min(args.current.value + progress, args.target);

            } else if (args.animation.type === ProgressAnimation.Decremental) {
                args.current.value = Math.max(args.current.value - progress, args.target);
            }
        }

        let keepAnimating = args.current.value !== args.target;

        if (typeof args.events.onAnimatedFrame === 'function') args.events.onAnimatedFrame();

        // if (elapsed >= args.duration) {
        //     keepAnimating = false;
        // }

        if (keepAnimating) {
            animationId.value = requestAnimationFrame(animate);
        } else {
            doStopProgressAnimation(animationId);
        }
    }

    animationId.value = requestAnimationFrame(animate);
    return animationId;
}

export const doStopProgressAnimation = (animationId: Ref<number|null>) => {
    if (animationId.value) {
        cancelAnimationFrame(animationId.value);
        animationId.value = null;
    }
}