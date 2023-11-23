interface IWalker {
    walk(): void;
}
interface ISwimmer {
    swim(): void;
}

class Person implements IWalker, ISwimmer {
    walk(): void {
        console.log('Walking...');
    }
    swim(): void {
        console.log('Swimming...');
    }
}