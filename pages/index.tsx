import Link from 'next/link'
import axios from 'axios'
const index=({notes}:any)=>
{

  return(
<div className="notes-container flex px-4 flex-wrap  ">
  {notes.map((note: any)=>
  {
    // console.log(note) 
   return( <div key={note._id} className="py-1  shadow-md rounded-md overflow-hidden text-center " style={{width:250}}>
      <div className="py-3 px-5 bg-gray-100 ">
          ID :- {note._id}
      </div>
      <div className="p-5 ">
          <h5 className="text-xl font-semibold mb-2">{note.title}</h5>
          <p className="mb-4">{note.description}</p>
          {/* <button
              className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">
                <Link href={`/${note._id}/edit`}> Edit</Link>
          </button>
          <button
              className="bg-purple-500 text-white active:bg-purple-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">
             Delete
          </button> */}
          <div>
          <Link href={`/${note._id}`}>
                    <button  className="bg-purple-500 text-white active:bg-purple-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">View</button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <button  className="bg-purple-500 text-white active:bg-purple-200 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Edit</button>
                  </Link>
          </div>
          
      </div>
      <div className="py-3 px-5 bg-gray-100"></div>
  </div>)
  })}
</div>
  )
}
index.getInitialProps=async()=>
{
  const res=await axios.get('http://localhost:3000/api/notes');
  const {data}:any=await res.data;
   return {notes:data}
}

export default index;