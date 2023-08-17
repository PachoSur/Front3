import'./Card.css'

const Card = ({nombre, ciudad}) => {

    return (
      <div className='card'>
          <h3>Hola {nombre}!</h3>
          <h4>Vives en {ciudad}.</h4>
      </div>
    )

}

export default Card