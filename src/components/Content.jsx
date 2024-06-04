import Objective from "./Objective"
import Credential from "./Credentials"

const education = {
    institution: 'University of Arizona',
    tenure: '1860 - 1864',
    role: 'Bachelor of Science in Criminal Justice',
    highlights: [
            'Presided over Student Body junior and senior year, gaining skills in leadership',
            'Completed 4-year apprenticeship with security division, demonstrating commitment to student safety'
        ]
}

const professional = {
    institution: "Pima County Sherrif's Department",
    tenure: '1869 - 1880',
    role: 'Sherrif',
    highlights: [
        'Maintain safety of citizenry within city of Tombstone',
        'Outlaw neutralization'
    ]
}

export default function Content() {
    return (
        <main>
            <Objective />
            <Credential title='Education' credentialItem={education}></Credential>
            <Credential title='Professional Experience' credentialItem={professional}></Credential>
        </main>
    )
}