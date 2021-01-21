import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Styles from './slick.module.css'

const items = [
    {
        player: {
            title: 'Cáncer / Estilo de vida / Prevención',
            desc: '10 cosas que puedes hacer en 10 minutos para ser feliz.',
            image: './img/blog/10de10-1140x806.jpg'
        }
    },
    {
        player: {
            title: "Estilo de vida",
            desc: "¿Qué comer para ser más feliz? 3 alimentos sanadores.",
            image: './img/blog/comer-feliz-1140x806.jpg'
        }
    },
    {
        player: {
            title: 'Cáncer / Prevención',
            desc: 'El cáncer de mama también es cosa de hombres.',
            image: './img/blog/blog-hombres-2-1140x806.jpg'
        }
    },
    {
        player: {
            title: 'Cáncer / Diagnóstico / Prevención',
            desc: 'Tengo una bolita en el seno, ¿significa que tengo cáncer?',
            image: './img/blog/blog-hombres-2-1140x806.jpg'
        }
    },
    {
        player: {
            title: 'Cáncer / Diagnóstico / Prevención',
            desc: 'Tengo una bolita en el seno, ¿significa que tengo cáncer?',
            image: './img/blog/blog-hombres-2-1140x806.jpg'
        }
    },
    {
        player: {
            title: 'Cáncer / Diagnóstico / Prevención',
            desc: 'Tengo una bolita en el seno, ¿significa que tengo cáncer?',
            image: './img/blog/blog-hombres-2-1140x806.jpg'
        }
    }
]



export default function App() {
    const [windowWidth, setWindowWidth] = React.useState(0)
    const [carouselimgcount, setCarouselimgcount] = React.useState(3);

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
    }, [windowWidth])

    const updateDimensions = () => {
        if (window.innerWidth > 1200) setCarouselimgcount(3);
        else if (window.innerWidth <= 1200 && window.innerWidth > 850) setCarouselimgcount(2);
        else setCarouselimgcount(1);
        setWindowWidth(window.innerWidth)
    }

    const renderSlides = () =>
        items.map((val, index) => {
            return (
                <div key={index}>
                    <div>
                        <img src={val.player.image} alt={val.player.image} key={index + 1} className={carouselimgcount !== 1 ? Styles.carousel_img : Styles.carousel_img1} />
                    </div>
                    <div className={Styles.carousel_slide_item__body}>
                        <h4>{val.player.title}</h4>
                        <p>{val.player.desc}</p>
                    </div>
                </div>
            )
        })

    return (
        <div className="App">
            <Slider
                dots={false}
                slidesToShow={carouselimgcount}
                slidesToScroll={1}
            // autoplay={true}
            // autoplaySpeed={3000}
            >
                {renderSlides()}
            </Slider>
        </div>
    );
}