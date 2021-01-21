import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Styles from './style.module.css'
import Link from "next/link";

export default function Block(props) {
    useEffect(() => {
        console.log(props.text4)
    }, [])
    return (
        <Grid container>
            <Grid item sm={12} md={4}>
                <img src={props.img} alt={props.img} />
            </Grid>
            <Grid item sm={12} md={8} className={!props.text4 ? Styles.postblock_right_container : Styles.postblock_right_container1}>
                <div className={Styles.div100}>
                    <div className={Styles.text1}>{props.text1}</div>
                </div>
                <div className={Styles.div100}>
                    <div className={Styles.text2}>
                        <Link href="/blog_detail"><a>{props.text2}</a></Link>
                    </div>
                </div>
                <div className={Styles.div100}>
                    <div className={Styles.text3}>{props.text3}</div>
                </div>
                <div className={Styles.div100}>
                    <div className={Styles.text4}>{props.text4}</div>
                </div>
            </Grid>
        </Grid>
    )
}