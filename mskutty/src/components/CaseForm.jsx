import {Button, Form, Input, Modal, Select} from "antd";
import React from 'react'
import CaseHistory from './CaseHistory';


const CaseForm = () => {
     const casedetails = {casename : "Test Case" , caseid : "12345", status : "Open"};
    const caseList = [
       {casename : "Test Case 1" , caseid : "12345", status : "Open"},
       {casename : "Test Case 2" , caseid : "67890", status : "Closed"},
       {casename : "Test Case 3" , caseid : "11223", status : "In Progress"}
    ];
    const numberList =[
      1,2,3,4,5
    ]
  return (
    <div>CaseForm
      {/* { casedetails.casename !== undefined && casedetails.caseid !== undefined && casedetails.status !== undefined &&
       casedetails.status !== null ?  <CaseHistory casedetails = {casedetails}/> : <h1>No Case Details Found</h1>}    */}

       <ul>
        {caseList.map((caseItem,Index) => (
          <li key={Index}>
            <CaseHistory  casedetails={caseItem} />
          </li>
        ))}
       </ul>
       <ul>
        {numberList.map((num,Index) => (<li key ={Index}>{num}</li>))}
       </ul>
    </div>
  )
}

export default CaseForm;