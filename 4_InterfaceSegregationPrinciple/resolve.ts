interface IAnimalCanWalker {
    walk(): void;
}
interface IAnimalCanSwimmer {
    swim(): void;
}

class WalkAnimal implements IAnimalCanWalker {
    walk(): void {
        console.log('Walking...');
    }
}
class SwimAnimal implements IAnimalCanSwimmer {
    swim(): void {
        console.log('Swimming...');
    }
}