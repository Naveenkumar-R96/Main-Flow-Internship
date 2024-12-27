import backup from"../assets/react.svg"
import { Link } from "react-router-dom"
 export const Card = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
      <img src={backup} alt="" className="card-img-top" />
        <div className="card-body">
         <h5 className="card-title text-primary">Movie Title</h5>
         <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio, cupiditate laborum sapiente illo eligendi.</p>
         <div className="d-flex justify-content-between align-items-center">
          <Link to='' className="btn btn-sm btn-outline-primary">Read More</Link>
          <small>
            <i className="bi bi-star-fill text-warning"> </i>
            7.25 | 250
          </small>
         </div>
        </div>
      </div>
    </div>
  )
}

