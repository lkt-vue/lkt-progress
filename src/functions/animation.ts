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
        onAnimationEnd?: Function
    }
}): undefined|Ref<number|null> => {

    // Prepare returned value
    const animationId: Ref<number|null> = ref(null);

    // Prevent invalid animation
    if (args.paused) return animationId;
    if (args.current.value === args.target && !args.animation.externalControl) return animationId;
    if (isNaN(args.target) || isNaN(args.current.value)) return animationId;

    // Initial timestamp and distance between origin and target
    let zero: number;
    const distance = Math.abs(args.target - args.current.value);

    // Animation process
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

        let increment = getAnimationDistanceStep(distance, pendingTime);
        if (!isNaN(increment)) {
            if (args.animation.type === ProgressAnimation.Incremental) {
                // args.current.value = Math.min(args.current.value + increment, args.target);

                args.current.value += increment;
                if (args.current.value > args.target) args.current.value = args.target;

            } else if (args.animation.type === ProgressAnimation.Decremental) {
                // args.current.value = Math.max(args.current.value - increment, args.target);

                args.current.value -= increment;
                if (args.current.value < args.target) args.current.value = args.target;
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
            if (typeof args.events.onAnimationEnd === 'function'
                && args.target === args.current.value
                && typeof args.animation.to !== 'undefined') {
                args.events.onAnimationEnd();
            }
        }
    }

    // Start animation
    animationId.value = requestAnimationFrame(animate);
    return animationId;
}

export const doStopProgressAnimation = (animationId: Ref<number|null>) => {
    if (animationId?.value) {
        cancelAnimationFrame(animationId.value);
        animationId.value = null;
    }
}