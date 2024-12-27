import { useEffect } from "react"

 export const MovieList = ({title}) => {
  useEffect(()=>{
    document.title=title
  })
  return (
    <div>
      <main className="container">
        <h5 className="text-danger py-2 border-bottom">{title}</h5>
      </main>
    </div>
  )
}

