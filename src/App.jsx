
import { Route, Routes } from "react-router-dom"
import "./App.css"
import All from "./Components/All";
import FullStack from "./Components/FullStack";
import DataScience from "./Components/DataScience";
import Cyber from "./Components/Cyber";
import Career from "./Components/Career";
import NavBar from "./Components/NavBar";

function App() {

  const data = [
    {
      id: 1,
      imageUrl:
        "https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg",
      name: "Full Stack Developer",
      content: "Top Full Stack Development Trends for 2024: What to Expect",
      paragraph:
        "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full stack development, which involves creating software systems or web applications",
      date: Date.now()
    },
    {
      id: 2,
      imageUrl:
        "https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg",
      name: "Data Science",
      content: "Top Product-Based Companies for Data Science Freshers",
      paragraph:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing the power of data to gain valuable insights and make informed decisions.",
    },
    {
      id: 3,
      imageUrl:
        "https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba-1024x576.jpg",
      name: "Full Stack Developer",
      content: "Top Full Stack Development Trends",
      paragraph:
        "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full stack development, which involves creating software systems or web applications that encompass both front-end and back-end components, is no exception.",
    },
    {
      id: 4,
      imageUrl:
        "https://s3.ap-southeast-1.amazonaws.com/datawow/uploader/blogs/a4.png",
      name: "Data Science",
      content: "Top 10 Data Science Tools in 2024",
      paragraph:
        "One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. ",
    },
    {
      id: 5,
      imageUrl: "https://wallpapercave.com/wp/wp11346428.jpg",
      name: "Full Stack Developer",
      content: "Guide to HTML and CSS",
      paragraph:
        "One of the constant things that’s been trending since the rise of the internet is websites and it still will. No matter how much the future changes about technology, websites will always be a game-changer for businesses and that is why you need to learn full-stack development.",
    },
    {
      id: 6,
      imageUrl:
        "https://anthonyhuntley.com/wp-content/uploads/2017/11/The-Data-Science-Process-large.jpeg",
      name: "Data Science",
      content: "Useful Python Libraries & Tools for Data Science Beginners",
      paragraph:
        "In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data, is a skill that’s needed in many areas like business, finance, and healthcare.",
    },
    {
      id: 7,
      imageUrl: "https://wallpapercave.com/wp/wp11346423.jpg",
      name: "Full Stack Developer",
      content:
        "Backend Developers: Roles, Responsibilities, Skills, and Salary",
      paragraph:
        "Websites are not only about colorful outlooks, fancy transitions, or eye-catching illustrations. These are the things that come under the frontend but the real work happens in the backend development.",
    },
    {
      id: 8,
      imageUrl:
        "https://technonguide.com/wp-content/uploads/2021/05/data-science-course.jpg",
      name: "Data Science",
      content: "Data Science and Data Engineering",
      paragraph:
        "India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend. ",
    },
    {
      id: 9,
      imageUrl:
        "https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png",
      name: "Full Stack Developer",
      content: "What Does a Top Backend Developer Do?",
      paragraph: "Backend development plays a vital role in the functioning of websites and web applications. While frontend development focuses on the user interface and the visible aspects of a website, backend developers work behind the scenes to ensure that everything runs smoothly.",
    },
    {
      id: 10,
      imageUrl:
        "https://th.bing.com/th/id/R.d35235b71a30e9aa9177b8a4e12ffe20?rik=%2bz0hBZeyp78Trw&riu=http%3a%2f%2fkiet.ac.in%2fwp-content%2fuploads%2f2020%2f09%2fai-ds.jpg&ehk=L2MSHuz8oF4C%2bfM1EAPAyPv4cEOnSQpE1ocsmUNGRU8%3d&risl=&pid=ImgRaw&r=0",
      name: "Data Science",
      content: "Programs on Hiring Data Scientists",
      paragraph:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These data insights are supplements for the growth of modern businesses today",
    },
    {
      id: 11,
      imageUrl:
        "https://th.bing.com/th/id/R.6cb7c439be1aa1191a04ba0dbf4c08f8?rik=6Eq%2fkgP8bbXZ4g&riu=http%3a%2f%2fskytechgeek.com%2fwp-content%2fuploads%2f2019%2f06%2ffull-stack-developer.jpg&ehk=ncuyH8Pmi0%2fDc8zwkVM%2fMSBoqGctgN96urcUm5ZbRCU%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      name: "Full Stack Developer",
      content: "What is Frontend Development?",
      paragraph: "Frontend development is all about making websites that look good and work well for people who use them. It’s the job of frontend developers to turn designs into real, clickable websites you can visit on your internet browser. In this blog, we’re going to talk about what frontend development involves, what frontend developers do, the skills they need, and how much money they can make",
    },
    {
      id: 12,
      imageUrl:
        "https://blog.dataiku.com/hubfs/Infographic-%20Types%20of%20Data%20Scientists-2021-01.jpg#keepProtocol",
      name: "Data Science",
      content: " Data Science Freshers",
      paragraph:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing the power of data to gain valuable insights and make informed decisions.",
    },
    {
      id: 13,
      imageUrl:
        "https://i.pinimg.com/originals/ee/6e/ec/ee6eec41fa0f41108181f891d936a42a.png",
      name: "Cyber Security Non-Coding Jobs",
      content: "How Is Cyber Security Important To Our Lives?",
      paragraph:
        "Cybersecurity is an exact solution that is sought either by a billionaire with a massive business or an innovator with a small start-up or even an individual who risks personal data online. ",
    },
    {
      id: 14,
      imageUrl:
        "https://th.bing.com/th/id/R.32b56ef494d281f64d4024bcf1639cd8?rik=rsDlV17lWe0Qyw&riu=http%3a%2f%2fwww.security-guard.ca%2fwp-content%2fuploads%2f2015%2f11%2fECPI20-20jobs20in20cyber20security_0.png&ehk=MOQhDxcJ5OMi6PW0Q1gCChX6JLtpXE%2bZSolni43rpgQ%3d&risl=&pid=ImgRaw&r=0",
      name: "Cyber Security",
      content: "The Cybersecurity Surge",
      paragraph:
        "There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism.",
    },
    {
      id: 15,
      imageUrl:
        "https://firewall.firm.in/wp-content/uploads/2020/08/Cybersecurity-Best-Practices-for-Small-Businesses.jpg",
      name: "Cyber Security",
      content: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      paragraph:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.",
    },
    {
      id: 16,
      imageUrl:
        "https://www.whizlabs.com/blog/wp-content/uploads/2023/04/Highest-Paying-Cybersecurity-Jobs-scaled.webp",
      name: "Cyber Security",
      content: "Cybersecurity",
      paragraph:
        "Cybersecurity is an exponentially growing industry that is evolving to protect individuals & organizations from increasing cyber-attacks. Recently, The Artificial Intelligence(AI) Industry is playing a vital role in cybersecurity, improving the efficiency of various organizations & industries’ cybersecurity.",
    },
    {
      id: 17,
      imageUrl:
        "https://hilartech.com/wp-content/uploads/2021/08/Cybersecurity-Advertising.jpg",
      name: "Cyber Security",
      content: "Cybersecurity Vs Ethical Hacking",
      paragraph:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    },
    {
      id: 18,
      imageUrl:
        "https://i1.wp.com/hackersonlineclub.com/wp-content/uploads/2018/08/Cyber-Security-Jobs.png?w=668&ssl=1",
      name: "Cyber Security",
      content: "Cybersecurity and Threats Involved",
      paragraph:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc.",
    },
    {
      id: 19,
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students-768x480.webp",
      name: "Career",
      content: "Top IT Jobs for Commerce Students",
      paragraph:
        "The intersection of commerce and technology offers a wide range of job prospects that can provide both financial stability and personal growth.",
    },
    {
      id: 20,
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
      name: "Career",
      content: "Master JavaScript Frontend Roadmap",
      paragraph:
        "Front-end development is the creation of a webpage that has an engaging and intuitive user experience. When that front end is built using JavaScript",
    },
    {
      id: 21,
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students-768x480.webp",
      name: "Career",
      content: "Top 5 IT Jobs for Economics Students",
      paragraph:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for students with a background in economics.",
    },
    {
      id: 22,
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp",
      name: "Career",
      content: "Top 5 Product-Based Companies That Don’t Require Coding",
      paragraph:
        "You’ve come to the right place. Let’s talk about the top product-based companies that don’t require coding and also the tech job roles they offer. ",
    },
    {
      id: 23,
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-1200x628.webp",
      name: "Career",
      content: "Blockchain Developer Resume Guide",
      paragraph:
        "What if I say that blockchain is going to be the next big thing? And why do I say so? Because of its decentralized and secure approach to data management. ",
    },
    {
      id: 24,
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers-768x480.webp",
      name: "Career",
      content: "Top 13 Product Based Companies for AI Freshers",
      paragraph:
        "Artificial intelligence (AI) has revolutionized various industries, and the demand for AI professionals is at an all-time high. As a fresher in the field of AI, it is crucial to find opportunities with top product-based companies that are leading the way in AI research and development.",
    },
  ];
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Routes>

        <Route path="/" element={<All data={data} />} /> //Route path

        <Route path="/fullStack" element={<FullStack data={data} />} /> //path for full Stack developement page

        <Route path="/dataScience" element={<DataScience data={data} />} /> //

        <Route path="/cyberSecurity" element={<Cyber data={data} />} />

        <Route path="/career" element={<Career data={data} />} />

      </Routes>

    </>
  )
}
export default App
