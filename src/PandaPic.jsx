import pandaPic from './assets/PandaPic.jpeg';

const handleClicks = (e) => e.target.style.display = "none"


function PandaPic(){
    return <img onClick={(e) => handleClicks(e)} src={pandaPic} alt="Panda" />
}

export default PandaPic