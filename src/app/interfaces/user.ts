export interface Service {
    title: number,
    description: string,
    categoryId: string,
    planFor : {
        name: string,
        gender: string,
        mobileNo: number,
        email: string,
        birthDate: Date
    },
    userEmail: string
}
