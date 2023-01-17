import 'bootstrap/dist/css/bootstrap.css';

import {useState} from 'react'
import './slider.css'

function Slider() {




  const [Count, setCount] = useState(1);

  const [Player, setPlayer] = useState([
    {
      id: 1,
      titre: "Hakim  Ziyech",
      img: "https://digitalhub.fifa.com/transform/6e80e609-30a9-4d4e-9476-bf63d4b7b4d1/Hakim-Ziyech-Morocco-v-Paraguay-Friendly-preparation-270922"
    },

    {
      id: 2,
      titre: "Hakimi",
      img: "https://www.leparisien.fr/resizer/DmziuVp6fSsOIR4ORE9w7GD873M=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/LY7RNJRDCJFOFFSWDA7I3Y3EFU.jpg"
    },

    {
      id: 3,
      titre: "AMRABET",
      img: "https://www.africatopsports.com/wp-content/uploads/2023/01/Sofyan-Amrabat.jpg"
    },
    {
      id: 4,
      titre: "BONO",
      img: "https://www.mjtnews.com/wp-content/uploads/2022/12/Bono_2.jpg"
    },
    {
      id: 5,
      titre: "Munir ",
      img: "https://m.footballdatabase.eu/images/photos/players/a_147/147118.jpg"
    }
  ])

  const goToSlide = (slideIndex) => {
    setCount(slideIndex+1);
  }


  return (
    <div>

      <button onClick={()=>Count<=1 ? setCount(Player.length):    setCount(Count-1)}  >-</button>
      <div >

      {Player.filter((index) =>Count === index.id)
      .map((x)=>(
       <div className="card text-center" style={{width :'300px' , margin:'auto'} } >
         <img className="card-img-top"  src={x.img} alt=""/>
         <div className="card-body">
           <h4 className="card-title">{x.titre}</h4>
           <p className="card-text">{x.id}</p>
         </div>
       </div>
      ))}

      </div>
      <button onClick={()=>Count >=Player.length ? setCount(1) : setCount(Count+1)}  >+</button>

      <div className='dots'>
        {Player.map((slide, slideIndex) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            •
          </div>
        ))}
      </div>

    </div>
  );
}

export default Slider;
