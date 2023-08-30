import { useScroll } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./liIcon";

const Details = ({ position, company, companyLink, time, description }) => {
    const ref = useRef(null);
    return (
      <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between">
        <LiIcon reference={ref} />
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:1, type:"spring", bounce:.5}}
        >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;<a href={companyLink} className="text-primary">
            @{company}</a>
        </h3>
        <span className="capitalize ">{time}</span>
        <p>{description}</p>
        </motion.div>
      </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target : ref,
            offset: ["start end", "center start"],
        }
    );
  return (
    <div className="my-64">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div 
        style={{scaleY:scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="UnitedHealth Group"
            companyLink="https://www.unitedhealthgroup.com/"
            time="2023 - Present"
            description="I excel in end-to-end software development, from design to agile DevOps delivery. With an impactful 18-week internship, I created a high-level security app using SQLite, Java, and Vue.js, ensuring scalability via Docker and Kubernetes. I managed a vast data influx—540,000 files—enhancing security tracking for the organization. My role spans the entire software journey, contributing to seamless updates via CI/CD. I'm adept in AWS, maintaining robust security and collaborating for efficient solutions. A dedicated team player, I drive agile practices and elevate our development landscape, while offering strong support and unwavering security commitment."
          />
          <Details
            position="Readiness Operations Manager/IT lead"
            company="US Space Force"
            companyLink="https://www.spaceforce.mil/"
            time="2021 - 2023"
            description="I've oversaw SharePoint environments, handling installation, configuration, and upkeep of SharePoint farms, web applications, and site collections. Managing user permissions and access, I've ensured robust security and supervised user roles and groups. I've also designed and maintained SharePoint sites, workflows, forms, and templates, optimizing collaboration and streamlining processes. Additionally, I've led a 12-member team that collaborated with international partners to train joint coalition forces in alignment with the commander's objectives. This resulted in a 100% achievement of learning goals for fiscal year 2021/22. Moreover, I've crafted training exercises, co-authored integration plans for mission requirements, and orchestrated successful training objectives across diverse geographically-separated operation centers."
          />
          <Details
            position="Conjunction Analyst/Flight Chief Operations & Readiness"
            company="US Space Force"
            companyLink="https://www.spaceforce.mil/"
            time="2018 - 2021"
            description="Accomplished data analyst with a proven track record of maintaining a flawless database for space satellites, utilizing adept bash scripts and Linux commands to ensure data integrity. Leveraged Perl code and scripts to automate processes, resulting in a remarkable 60% reduction in human resource requirements. Managed a substantial volume of 18,000 observations per shift with precision, driving significant Business Intelligence decisions. Demonstrated unwavering dedication to quality, providing error-free data to prominent clients like SpaceX, NASA, and Iridium satellites. Enhanced efficiency through optimized Perl scripts, navigating intricate data processing tasks and implementing ETL improvements. Collaborated cross-functionally within the Agile framework, identifying and executing enhancements for data screening and management processes, ultimately increasing productivity and cost efficiency. Vigilantly monitored and addressed database discrepancies, ensuring unwavering data reliability. Recognized for exceptional performance and commitment to delivering precise data to key stakeholders in the space industry."
          />
          <Details
            position="Lead Crew Operator/Non Commissioned Officer in charge of Training & Evaluations"
            company="US Air Force"
            companyLink="https://www.airforce.com/"
            time="2018 - 2021"
            description="As Crew Lead at the northernmost US base, directed radar operations, overseeing critical systems and ensuring accurate data collection. Delivered real-time observation data to NORTHCOM, enhancing situational awareness without compromising data quality. Awarded best Non-Commissioned Officer, recognized for exceptional teaching and leadership. Championed team growth through effective mentorship and training, fostering continuous learning. Integral to radar readiness and optimal performance, upholding data integrity for command centers. Facilitated seamless collaboration across units, ensuring radar integration within the military framework. Upheld mission excellence with professionalism and discipline, guiding subordinates toward personal and professional growth."
          />
        {/* <Details
            position="OBAC Lead Operator"
            company="US Air Force"
            companyLink="https://www.airforce.com/"
            time="2015 - 2017"
            description="Lead Operator of OBAC Missile warning (further details upon request)"
          />
        <Details
            position="Missile Warning Operator"
            company="US Air Force"
            companyLink="https://www.airforce.com/"
            time="2013 - 2015"
            description="Space Operator for Missile warning (further details upon request)"
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
