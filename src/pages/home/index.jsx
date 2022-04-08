import React from "react";
import Qualification from "../../component/qualification";
import Reference from "../../component/reference";
import Skills from "../../component/skills";
import "./styles.css";

const Home = () => {
  const data = [
    {
      name: "Khairul Anam",
      address: "H-120, R-4, Journalist Residential Area, Mirpur-11, Dhaka 1216",
      email: "khairul.anam4372@gmail.com",
      phone: "+8801816678198",
      skills: {
        programmingLanguage: ["HTML", "CSS", "JavaScript", "React"],
      },
      qualifications: [
        {
          title: "Honours",
          subject: "Computer Science and Engineering",
          institute: "Daffodil International University",
          session: "2019",
          cgpa: "3.98",
        },
        {
          title: "HSC",
          subject: "Data Telecommunication & Networking Technology",
          institute: "Feni Computer Institute",
          session: "2013",
          cgpa: "3.64",
        },
        {
          title: "SSC",
          subject: "Science",
          institute: "Basurhat Islamia Fazil Madrasah",
          session: "2009",
          cgpa: "4.94",
        },
      ],
      reference: [
        {
          name: "Md Sazzadul Islam",
          position: "Senior Software Engineer",
          workplace: "Rodeo Software, Amsterdam, Netherlands",
          email: "netsazzad@gmail.com",
          phone: "",
        },
        {
          name: "Md Saiful Islam",
          position: "Senior Software Engineer",
          workplace: "Grameen Communications",
          email: "saiful@grameen.com",
          phone: "+880 1731398255",
        },
      ],
    },
  ];
  //console.log(data[0].skills.programmingLanguage.map(va=> console.log(va)))

  return (
    <div className="container">
      <div className="main">
        <div>
          <h1>{data[0].name}</h1>
          <p>{data[0].address}</p>
          <p>{data[0].email}</p>
          <p>{data[0].phone}</p>
        </div>
        <div>
          <img
            src={require("../../assets/images/cover-photo.jpg")}
            alt="cover photo"
            width="200px"
            height="200px"
            className="image"
          />
        </div>
      </div>
      <hr />
      <hr />
      <Skills data={data[0].skills.programmingLanguage} />
      <Qualification data={data[0].qualifications} />
      <Reference className="reference" data={data[0].reference} />
    </div>
  );
};

export default Home;
