import React from "react";
class Movies extends React.Component{
    movie_name="D2";
    actor="RS";
    actress="SA";

    render(){
        return <div>
                    <h2>Movies Component</h2>
                    <p>Movie Name :{this.movie_name}</p>
                    <p>Actor :{this.actor}</p>
                    <p>Actress :{this.actress}</p>
                </div>
    }
}
export default Movies;