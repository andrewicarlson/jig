/**
 * This function makes it easy to pluck properties from one object and create a new object. Things like this make it easier
 * to follow the principle of least privilege. 
 * 
 * This is similar to ._pick in the Lodash library.
 * 
 * Usage:
 * 
 * var oldObj = {"prop1": 1, "prop2": 2, "prop3": 3};
 * var newObj = pluck(oldObj, ["prop1", "prop3"]); // {"prop1": 1, "prop3": 3}
 */

interface PluckObject {
    [propName: string]: any
}

/**
 *
 * @param object: A JavaScript object to clean values from.
 * @param valuesToTake: An array of property names to pull from `object`
 * @returns {{}}: Returns an object of values pulled from `object`
 */
export default function pluck(object: PluckObject, valuesToTake: Array<string>): PluckObject {
    return valuesToTake.reduce( (a, b) => {
        if(object.hasOwnProperty(b)) {
            a[b] = object[b];
        }

        return a;
    }, {} );
}