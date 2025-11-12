import reactImg from '../assets/react.svg';


function Header(){
    return(
        <>       

        <h1>React Essentials</h1>
        <img src={reactImg} alt="Stylized atom" /> 
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
        </>
    )
}

export default Header;
