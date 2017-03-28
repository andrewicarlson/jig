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

    if(typeof interpolationString !== 'string' ) {
        throw new Error('interpolationString argument must be of type "string"');
    }
    
    if(typeof interpolationValues !== 'object' || interpolationValues === null || Array.isArray(interpolationValues)) {
        throw new Error('interpolationValues argument must be of type "object", non-null and not an Array');
    }
    
    return interpolationString.replace(/{([^{}]*)}/g,
        (a, b) => {
            const r = interpolationValues[b];
            return typeof r === 'string' ? r : a;
        }
    );
}