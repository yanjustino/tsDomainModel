class Aluno {
    constructor(public name: string, public age: number, document: string) { }

    public IsValid(): boolean {
        return true;
    }
    
    public OfAge(): boolean{
        return this.age < 18;
    }
}

export = Aluno
