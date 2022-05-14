

export default function Card(props) {
  return (
    <div className="blog" style={{backgroundImage: `url(/image/${props.blog.image}.png)`}}>
      <h2 className="blog--header">{props.blog.name}</h2>
      { /* <img src={`/image/${props.blog.image}.png`} className="blog--image"/>  */ }

      <p className="blog--description">{props.blog.description}</p>

      <a className="blog--link" href={props.blog.link} >Read More...</a>



    </div>
  )
}
