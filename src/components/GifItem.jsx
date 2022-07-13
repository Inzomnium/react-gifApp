

export const GifItem = ({title, url, id}) => {

    

  return (

   
    <div
    id={id}
    className="card">
       <img src={url} alt={title} />
       <p>{title}</p>
    </div>
   
    
  )
}
