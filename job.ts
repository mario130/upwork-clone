interface job{
    title:String,
    category:String,
    description:String,
    projectType:String,
    skills:String[],
    experience:String,
    duration:String,
    paymentChoice:String,
    budget:Number
    // client:clientId,
    proposals:[Proposal],

}
interface Proposal {
    freelancer:String,
    coverLetter:String,
    upload:String
}
interface ClientProfile{
}