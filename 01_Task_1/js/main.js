const data = [1, 2, 3, 4, 5];

/**
 * Write your code below!
 */

function without(data, ...values) {
    return data.filter(item => !values.includes(item));
}