import Objective from "./Objective";
import Credential from "./Credentials";

const education = {
  institution: "University of Arizona",
  tenure: "1860 - 1864",
  role: "Bachelor of Science in Criminal Justice",
  highlights: [
    {
      id: 0,
      detail:
        "Presided over Student Body junior and senior year, gaining skills in leadership",
    },
    {
      id: 1,
      detail:
        "Completed 4-year apprenticeship with security division, demonstrating commitment to student safety",
    },
    {
      id: 2,
      detail: "",
    },
    {
      id: 3,
      detail: "",
    }
  ],
};

const professional = {
  institution: "Pima County Sherrif's Department",
  tenure: "1869 - 1880",
  role: "Sherrif",
  highlights: [
    {
      id: 0,
      detail: "Maintain safety of citizenry within city of Tombstone",
    },
    {
      id: 1,
      detail: "Outlaw neutralization",
    },
    {
      id: 2,
      detail: "",
    },
    {
      id: 3,
      detail: "",
    }
  ],
};

export default function Content() {
  return (
    <main>
      <Objective />
      <Credential title="Education" credentialItem={education} />
      <Credential
        title="Professional Experience"
        credentialItem={professional}
      />
    </main>
  );
}
