import React from "react";
import { useState } from "react";

function SubjectList(props){
    const subjectList = props.list;
    const [subjects, setSubjects] = useState(subjectList);

    function addSubject(){
        setSubjects((subjects) => {
            const nval = [...subjects, { code: "CMSC23", description: "Mobile Development"}];
            console.log(nval);
            return nval;
        })
    }

    return (
        <>
        <p>Show list:</p>
        <ol>
            {
            subjects.map((subject)=>{
                return <li>{subject.code} - {subject.description}</li>
            })
            }
        </ol>
        <button onClick={addSubject}>Add Subject</button>
        </>
    )
}

export default SubjectList