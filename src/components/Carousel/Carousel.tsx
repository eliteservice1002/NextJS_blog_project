import React, { Component } from 'react';
import Styles from './carousel_style.module.css'

/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
const slideWidth = 50;

const _items = [
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

const length = _items.length
_items.push(..._items)


const sleep = (ms = 0) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const createItem = (position, idx, activeIdx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`
        },
        player: _items[idx].player
    }

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: 'grayscale(1)' }
            break
        case length:
            break
        default:
            item.styles = { ...item.styles, opacity: 0 }
            break
    }

    return item
}

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx)

    return (
        <li className={Styles.carousel__slide_item} style={item.styles}>
            <div className={Styles.carousel__slide_item_img_link}>
                <img src={item.player.image} alt={item.player.title} />
            </div>
            <div className={Styles.carousel_slide_item__body}>
                <h4>{item.player.title}</h4>
                <p>{item.player.desc}</p>
            </div>
        </li >
    )
}

const keys = Array.from(Array(_items.length).keys())

const Carousel = () => {
    const [items, setItems] = React.useState(keys)
    const [isTicking, setIsTicking] = React.useState(false)
    const [activeIdx, setActiveIdx] = React.useState(0)
    const bigLength = items.length

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => {
                return prev.map((_, i) => prev[(i + jump) % bigLength])
            })
        }
    }

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength]
                )
            })
        }
    }

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false))
    }, [isTicking])

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items])

    return (
        <div className={Styles.carousel__wrap}>
            <div className={Styles.carousel__inner}>
                <div className={Styles.carousel__container}>
                    <ul className={Styles.carousel__slide_list}>
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <div>
                    <img src="./img/blog/btn_allow.png" alt="btn_allow" className={`${Styles.carousel__btn} ${Styles.carousel__btn_next}`}
                        onClick={() => nextClick()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Carousel;