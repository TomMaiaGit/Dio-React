import {Link} from 'react-router-dom'; //útil para criar links de rotas

const Home = () => {
    return ( 

        <>
        <h1> Home</h1>
        <Link to = "/login"> Fazer login </Link>
        </>

    )
}

export { Home };