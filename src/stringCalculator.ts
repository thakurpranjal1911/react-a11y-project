export function stringCalculator(input: string): number {
    
    if (!input || !input.trim()) {
        throw new Error('Please Enter a valid input');
    }

    const modifiedInput = input.replace(/\n/g, ',');

    const nums = modifiedInput.split(',').map((n) => parseFloat(n.trim())).filter((n) => !isNaN(n));
    
    if (nums.length === 0) {
        throw new Error('Please Enter a valid number');
    }

    const result = nums.reduce((a,b) => a+b, 0);
    return result;

}