import '../styles/header.css'
const header = () => { 

    return (

        <>
        <div className="header">
            <h1 className="headerH1">Welcome, you are cool</h1>
            <p className="HeaderPara" >It's recommended (but not required) to also use the styled-components Babel plugin if you can. <br></br>
                It offers many benefits like more legible class names, server-side rendering compatibility, smaller bundles, and more.</p>

                <button>Contact us</button> <button>About us</button>
        </div>
        
        </>

    );
}


export default header