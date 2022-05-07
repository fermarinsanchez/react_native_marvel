import md5 from "js-md5";

const PUBLIC_KEY = "736e28f19e917c7c3c261d9340c27bc2";

const PRIVATE_KEY = "bc028047cbfdd092fbbb371c25505633a836dc07";

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

const getSuperHeroes = async () => {

    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=30&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`);
    const  data = await response.json();

    return data;
}

export {getSuperHeroes};