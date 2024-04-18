'use client';



const Error = (error,reset) => {
  return (
    <div className="container mx-auto">

<h2 className="font-heading text-red-800 mb-10">
    Something went wrong;
</h2>
<button onClick={()=>reset()} className="btn-primary">Try Again</button>
    </div>
  )
}

export default Error