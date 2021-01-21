import React, { useEffect } from 'react'
import Styles from './style.module.css'

export default function Postdetailblock(props) {
    const [description1, setDescription1] = React.useState([])
    const [description2, setDescription2] = React.useState([])
    const [img, setImg] = React.useState('')
    const [title, setTitle] = React.useState('')

    useEffect(() => {
        setDescription1(props.description1)
        setDescription2(props.description2)
        setImg(props.img)
        setTitle(props.title)
    }, [])
    return (
        <div className={Styles.container}>
            {
                description1.map((val, index) => {
                    return (
                        <div key={index}>
                            <p key={index + 1} className={Styles.description_style}>{val.desc1}</p>
                            <p key={index + 2} className={Styles.description_style}>{val.desc2}</p>
                            <p key={index + 3} className={Styles.description_style}>{val.desc3}</p>
                            <p key={index + 4} className={Styles.description_style}>{val.desc4}</p>
                            <p key={index + 5} className={Styles.description_style}>{val.desc5}</p>
                            <p key={index + 6} className={Styles.description_style}>{val.desc6}</p>
                        </div>
                    )
                })
            }
            <img src={img} alt={img} />
            {
                description2 ?
                    description2.map((val, index) => {
                        return (
                            <div key={index}>
                                <p key={index + 1} className={Styles.description_style}>{val.desc1}</p>
                                <p key={index + 2} className={Styles.description_style}>{val.desc2}</p>
                                <p key={index + 3} className={Styles.description_style}>{val.desc3}</p>
                            </div>
                        )
                    })
                    : ''

            }
            <div className={Styles.title_continer}>
                <p className={Styles.title_style}>{title}</p>
            </div>
        </div>
    )
}