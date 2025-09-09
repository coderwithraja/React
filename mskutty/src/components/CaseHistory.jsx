import React from 'react'

const CaseHistory = (props) => {
     const casedetails = props.casedetails;
     const {casename,caseid , status} = casedetails;
     const text = `${casename} ${caseid} and  status is now ${status}`;
  return (
    <div>
        <h1>{text}</h1>
    </div>
  )
}

export default CaseHistory