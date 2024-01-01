interface Animal {
    walk(): void;
    swim(): void;
}
class Bird implements Animal {
    walk(): void {
        console.log('Walking...');
    }
    swim(): void {
        // Do nothing
        console.log('Swimming...');
    }
}
class Fish implements Animal {
    walk(): void {
        // Do nothing
        console.log('Walking...');
    }
    swim(): void {
        console.log('Swimming...');
    }
}