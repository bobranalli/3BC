import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cards from "../Cads/Cards";
import '../styles/styles.css';

export default function Home() {
    return (
        <div>
            <div className="home-title">Home</div>
            <div className="home-header">Web service consulting that’s affordable for
                small and growing businesses</div>
            <hr></hr>
            <Cards />
        </div>

    );
}