// import { useParams } from 'react-router-dom';
// import EventList from './EventList';



// const EditEventID = () => {
// const { id } = useParams(); // <-- access id match param here
// const blogId = id
// console.log(blogId)
//  return blogId
//  }
// export default EditEventID;

// // export const EditEventID = (EditEvent) => {
// //     const Wrapper = (props) => {
// //       const history = useHistory();
// //       const { id } = useParams(); // <-- access id match param here
// //   const blogId = id
// //   console.log(blogId)
      
// //       return (
// //         <EditEvent
// //           history={history}
// //           {...blogId}
// //           />
// //       );
// //     };
    
// //     return Wrapper;
// //   };


import React, { Component, useState, useEffect } from "react"
import { useLocation,useParams } from 'react-router-dom';

const EditEvent2 = () => {
    const { id } = useParams(); // <-- access id match param here
  //   const [journal, setJournal] = useState(null);
  
    useEffect(() => {
      const getJournal = async () => {
        const response = await fetch(`/events/edit-event/${id}/`); // <-- passed to API URL
        const data = await response.json();
      //   setJournal(data);
      }
  
      // getJournal();
    }, [id]); // <-- used as dependency
    console.log( [id])
  
    return (
      <div>
        {id}
      </div>
    );
  };
  export default EditEvent2