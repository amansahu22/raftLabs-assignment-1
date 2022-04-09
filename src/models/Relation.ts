class Relation{
    id:string
    first_person:string
    second_person:string
    relation:string
    
    constructor(a:string,b:string,c:string){
        const generatedId: string= new Date().toISOString+Math.random().toString();
        this.id=generatedId
        this.first_person=a
        this.second_person=b
        this.relation=c
    }
}

export default Relation