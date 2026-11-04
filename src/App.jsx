

import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/330px-Google_Favicon_2025.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyIJTZH6coR_VdT8i2gDGDs7uXrXxcqybdcbtEz5mlQ&s=10https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10n",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Gurgaon, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hour",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOiKj7dwbCxousHBzDudIUoIFJH3fMRsDJssE4HF2MA&s=10https://cdn.simpleicons.org/adobe",
    companyName: "Adobe",
    datePosted: "8 weeks ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz6CHowYt5ofulp4FmtwA9Dqz9cN7joL7OoacZSN6VAg&s=10",
    companyName: "Salesforce",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmnIQfgCkJsWzxkNBjANLU7AQ1oIzRK7AECH75FJNow&s=10",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Bangalore, India",
  },
];

// export default jobOpenings;

  console.log(jobOpenings);
  

 


  return (
   <div className="parent" >
    {jobOpenings.map(function(ele){
     return <Card company={ele.companyName} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location} brandLogo={ele.brandLogo} datePosted={ele.datePosted}/>
})}
    </div>
 )
}


export default App
