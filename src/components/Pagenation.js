import React from 'react'

const Pagenation = ({AllData, pageHandler}) => {


    let pageNumber = [];
    for(var i=1; i < Math.ceil(AllData.length/10)+1; i++){
        pageNumber.push(i)
    }


  

  return (
    <div>
     {
        pageNumber && pageNumber?.map((cur)=>{
            return <button onClick={pageHandler} className="btn btn-danger ms-2">{cur}</button>
        })
    } 
    </div>
  )


}

export default Pagenation