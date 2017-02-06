/**
 * The interpolate function accepts a string as the first argument and will interpolate the values found in the object argument.
 * 
 * Usage: interpolate("This is a {0} with {1} interpolations", {"0": "string", "1": "2"});
 */

interface InterpolationValues {
    [propName: string]: any;
}

/**
 * 
 * @param interpolationString: string
 * @param interpolationValues: InterpolationValues interface
 * @returns {string}
 */
export default function interpolate(interpolationString: string, interpolationValues: InterpolationValues): string {
    return interpolationString.replace(/{([^{}]*)}/g,
        (a, b) => {
            const r = interpolationValues[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
}