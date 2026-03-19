import './Header.css'
function Header(){

    return(
        <div className="header">
            <h1>Kedy</h1>
            <div className="navs">
                <a href="">About me</a>
                <a href="">Skills</a>
                <a href="">Projects</a>  
            </div>
        </div>
    );
}

export default Header