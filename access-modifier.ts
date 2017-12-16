/*
    can remove field declaration for lighter code when using
    public or private keywords in constructor
*/
class Person {
    /*
        can mark fields public or private
    */
    // private first: String;
    // private last: String;

    constructor(private first: String, private last: String) {
    }

}

class AnotherPerson {

    constructor(public first: String, public last: String) {
    }
}