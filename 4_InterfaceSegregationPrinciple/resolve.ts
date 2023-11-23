interface IWalker {
    walk(): void;
}
interface ISwimmer {
    swim(): void;
}

class Dog implements IWalker {
    walk(): void {
        console.log('Walking...');
    }
}
class Fish implements ISwimmer {
    swim(): void {
        console.log('Swimming...');
    }
}