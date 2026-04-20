let Movie=()=>{
    let movie_name="D2";
    let actor="RS";
    let actress="SA";
    let image="d2.png";
    return <div>
        <h2>Movie Name :{movie_name}</h2>
        <p>Actor :{actor}</p>
        <p>Actress :{actress}</p>
        <img src={image} alt={movie_name} />
    </div>
}
export default Movie;