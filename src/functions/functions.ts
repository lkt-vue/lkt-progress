import {ProgressAnimation, ProgressAnimationConfig, ProgressValueFormat, UnitConfig} from "lkt-vue-kernel";
import {ref, Ref} from "vue";

export const getVisiblePercentage = (progress: number, format: ProgressValueFormat) => {
    let r = Number(progress).toFixed(2);
    if (format === ProgressValueFormat.Auto) {
        if (r.indexOf('.00') > -1) r = r.replace('.00', '');
    }
    else if (format === ProgressValueFormat.Integer) {
        //@ts-ignore
        r = parseInt(r);
    }
    return r;
}

export const getFinalText = (visiblePercentage: number|string, unit?: string|UnitConfig): string => {
    if (!unit || (typeof unit === 'object' && Object.keys(unit).length === 0)) return String(visiblePercentage);

    if (typeof unit === 'string') return `${visiblePercentage}${unit}`;

    switch (unit.position){
        case "end":
            return `${visiblePercentage}${unit.text}`;

        case "start":
            return `${unit.text}${visiblePercentage}`;

        default:
            return `${visiblePercentage}${unit.text}`;
    }

    return String(visiblePercentage);
}

export const getAnimationDistance = (currentPercentage: number, animation: ProgressAnimation, highLimit: number, lowLimit: number) => {
    switch (animation) {
        case ProgressAnimation.Incremental:
            return highLimit - currentPercentage;
            
        case ProgressAnimation.Decremental:
            return currentPercentage - lowLimit;
        
        default:
            return 0;
    }
}

export const getExternalAnimationDistance = (currentPercentage: number, limit: number) => {
    return Math.abs(currentPercentage - limit)
}

export const getAnimationDistanceStep = (distance: number, duration: number) => {
    return (distance / duration) * (duration / 100);
}

export const parseAnimationConfig = (animation: ProgressAnimation|ProgressAnimationConfig) => {
    if (typeof animation === 'string') return <ProgressAnimationConfig>{
        type: animation,
        autoplay: true,
    }

    if (typeof animation.autoplay === 'undefined') animation.autoplay = true;
    if (typeof animation.externalControl === 'undefined') animation.externalControl = false;
    if (typeof animation.type === 'undefined') animation.type = ProgressAnimation.None;

    return animation;
}

export const calcProgressAndLimits = (progress: number, animationConfig: Ref<ProgressAnimationConfig>) => {
    let _progress = Number(progress);
    if (_progress > 100) _progress = 100;
    if (_progress < 0) _progress = 0;

    let highLimit = 100;
    if (animationConfig.value.type === ProgressAnimation.Incremental) {
        highLimit = _progress;
        _progress = 0;
    }

    let lowerLimit = 0;
    if (animationConfig.value.type === ProgressAnimation.Decremental) {
        // if (!animationConfig.value.externalControl) {
        lowerLimit = _progress;
        // }
        _progress = highLimit;
    }

    if (typeof animationConfig.value.to !== 'undefined') {

        if (animationConfig.value.type === ProgressAnimation.Incremental) {
            highLimit = animationConfig.value.to;
        }

        if (animationConfig.value.type === ProgressAnimation.Decremental) {
            lowerLimit = animationConfig.value.to;
        }
    }

    if (typeof animationConfig.value.from !== 'undefined') {
        _progress = animationConfig.value.from;
    }

    return [_progress, lowerLimit, highLimit];
}