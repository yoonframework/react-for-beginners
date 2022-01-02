import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [obj, setObj] = useState({});

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setObj(json.data.movie);
    };

    useEffect(() => {
        getMovies();
    }, []);

    console.log(obj);
    return (
        <div>
            <img src={obj.medium_cover_image} alt={obj.title} />
            <h2>{obj.title}</h2>
            <p>{obj.description_full}</p>
            <p>{obj.date_uploaded}</p>
            <ul>
                {obj.genres?.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

export default Detail;
