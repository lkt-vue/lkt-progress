import {ProgressAnimation, ProgressValueFormat} from "lkt-vue-kernel";

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

export const getAnimationDistanceStep = (distance: number, duration: number) => {
    return (distance / duration) * (duration / 100);
}