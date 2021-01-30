import axios from "axios";


const Data = async () => {
    // let api_key ="b05ea13c7ec547e3aec5bb8b93b18cf9";
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=b05ea13c7ec547e3aec5bb8b93b18cf9`;

    const data = await axios.get(url)
    .then((response) => {
        // console.log(response);
    } ).catch((error) => {
        console.log(error);
    })
    return data;
}

export default Data;