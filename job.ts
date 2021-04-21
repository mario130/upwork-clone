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
    client:"clientId",
    submittedProposals:[Proposal],

}
interface Proposal {
    freelancer:String,
    coverLetter:String,
    upload:String,
    jobId:String
}
interface client{


}
interface freelancer{
    hisProposals:[Proposal],
    // acceptedJobs: [job],
    profileId:"id"

}
interface profile {
    freelanceId : "id",
    // ....
}
// get all proposals for freelancer
// get all proposals for job 

