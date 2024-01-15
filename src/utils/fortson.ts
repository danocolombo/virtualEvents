export function printObject(label: string, target: any) {
    console.log(label, JSON.stringify(target, null, 2));
}
