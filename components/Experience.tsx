import Image from "next/image";
import { BounceLoader } from "react-spinners";
import { FaDotCircle } from "react-icons/fa";

export default function Experience() {
  return (
    <section className="ml-[10%] mb-[3%] relative text-[#cdd6f4]" id="about">
      <div className="flex flex-row mb-[3%]">
        <h1 className="relative font-medium text-4xl"> experience</h1>
        <div className="pl-4 flex flex-col justify-center w-[50%]">
          <hr className="border-solid border-2 border-[#313244] min-w-max" />
          <h1 className="relative font-medium text-2xl text-[#313244]">
            information about education and work
          </h1>
        </div>
      </div>
      <div className="mb-[3%]">
        <div className="flex flex-col">
          <div className="flex flex-row align-items-center">
            <div className="flex flex-col align-items-center">
              <BounceLoader
                size={18}
                color={"#cdd6f4"}
                className="ml-16 my-2"
              />
              <div className="ml-16 h-64 border-white border-r-2 -translate-x-2" />
            </div>
            <div className="ml-5 translate-y-0.5">
              <p className="text-2xl font-semibold">
                Cloud Solutions Contractor @{" "}
                <span className="text-[#cba6f7]">DevKinetics</span>
              </p>
              <p className="mb-2">
                CONTRACT/PROJECT BASED • JUL 2021 - AUG 2022 (2 mos)
              </p>
              <p className="max-w-2xl">
                As an Infrastructure and DevOps Intern, I handle AWS
                Infrastructure of the company in addition to the deployment of
                CI/CD tools. In addition to that, I was also tasked to handle
                the following: • Use Agile Methodology as a practice. • Create
                and Deploy CI/CD tools inclusive but not limited to of Jenkins,
                Mattermost, Internal Tools. • Create and Deploy the
                Infrastructure using Terraform. • Manage and Create Helm Charts
                for use in Kubernetes. • Push and test our deployment in AWS on
                CodeCommit and on GitHub. • Take on a leadership role under
                CI/CD, guiding the Microservices Team. • Write and Verify
                Documentation.
              </p>
            </div>
          </div>
          <div className="flex flex-row align-items-center">
            <div className="flex flex-col align-items-center">
              <FaDotCircle className="ml-16 my-2 translate-x-0.5" />
              <div className="ml-16 h-64 border-white border-r-2 -translate-x-1.5" />
            </div>
            <div className="ml-5 translate-y-0.5">
              <p className="text-2xl font-semibold">
                DevOps Intern @{" "}
                <span className="text-[#cba6f7]">DevKinetics</span>
              </p>
              <p className="mb-2">INTERNSHIP • FEB 2022 - JUN 2022 (5 mos)</p>
              <p className="max-w-2xl">
                As an Infrastructure and DevOps Intern, I handle AWS
                Infrastructure of the company in addition to the deployment of
                CI/CD tools. In addition to that, I was also tasked to handle
                the following: • Use Agile Methodology as a practice. • Create
                and Deploy CI/CD tools inclusive but not limited to of Jenkins,
                Mattermost, Internal Tools. • Create and Deploy the
                Infrastructure using Terraform. • Manage and Create Helm Charts
                for use in Kubernetes. • Push and test our deployment in AWS on
                CodeCommit and on GitHub. • Take on a leadership role under
                CI/CD, guiding the Microservices Team. • Write and Verify
                Documentation.
              </p>
            </div>
          </div>
          <div className="flex flex-row align-items-center">
            <div className="flex flex-col align-items-center">
              <FaDotCircle className="ml-16 my-2 translate-x-0.5" />
              <div className="ml-16 h-64 border-white border-r-2 -translate-x-1.5" />
            </div>
            <div className="ml-5 translate-y-0.5">
              <p className="text-2xl font-semibold">
                Front-end Intern @{" "}
                <span className="text-[#cba6f7]">DevKinetics</span>
              </p>
              <p className="mb-2">INTERNSHIP • DEC 2021 - FEB 2022 (3 mos)</p>
              <p className="max-w-2xl">
                As an Infrastructure and DevOps Intern, I handle AWS
                Infrastructure of the company in addition to the deployment of
                CI/CD tools. In addition to that, I was also tasked to handle
                the following: • Use Agile Methodology as a practice. • Create
                and Deploy CI/CD tools inclusive but not limited to of Jenkins,
                Mattermost, Internal Tools. • Create and Deploy the
                Infrastructure using Terraform. • Manage and Create Helm Charts
                for use in Kubernetes. • Push and test our deployment in AWS on
                CodeCommit and on GitHub. • Take on a leadership role under
                CI/CD, guiding the Microservices Team. • Write and Verify
                Documentation.
              </p>
            </div>
          </div>
          <div className="flex flex-row align-items-center">
            <div className="flex flex-col align-items-center">
              <FaDotCircle className="ml-16 my-2 translate-x-0.5" />
            </div>
            <div className="ml-5 translate-y-1">You've reached the end! 🚀</div>
          </div>
        </div>
      </div>
    </section>
  );
}
