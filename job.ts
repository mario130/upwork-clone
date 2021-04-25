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
    contract: Contract
    status:["listed","active","closed"]
    
}
interface Proposal {
    freelancer:String,
    coverLetter:String,
    upload:String,
    jobId:String,
    status:["submitted","accepted"]
}
interface client{


}
interface freelancer{
    hisProposals:[Proposal],
    hisContract:[Contract]
    // acceptedJobs: [job],
    profileId:"id"

}
interface profile {
    freelanceId : "id",
    // ....
}
// get all proposals for freelancer
// get all proposals for job 

interface Contract {
    
    clientId:"req.id", // 
    jobId:"req.params",
    proposalId:"req.body",
    ///.......
    budget : Number,
    paymentMethods:String

}
//>> when accept 
//> job >> status >> active and change api for feed;
//>>create contract :{
    // freelancerId:"req.body",  
    // clientId:"req.id", // 
    // jobId:"req.params",
    // status: ["active"]
// }

// >> proposal >> accepted true
