//indexing by default is 0,1,2... but we can change it to our own values
enum SeatChoice {
    AISLE=10,
    MIDDLE=20,
    WINDOW=30
}

const mySeat = SeatChoice.WINDOW

//can add const before enum to make it immutable
enum Gender {
    MALE="male",
    FEMALE="female",
    OTHER=2
}

//allowed as userGender is of type Gender enum
let userGender=Gender.MALE
userGender=Gender.OTHER