import React from 'react'
import Grid from '@material-ui/core/Grid';
import Styles from './style.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Footer() {
    return (
        <Grid container className={Styles.footer_container}>
            <Grid item xs={12} className={Styles.footer_logo_container}>
                <img src="./img/footer_logo.png" alt="footer_logo" className={Styles.footer_logo_img} />
            </Grid>
            <Grid item md={12} lg={3} className={Styles.footer_left_container} >
                <div className={Styles.footer_left_txt}><strong>Eva © 2020</strong> Todos los derechos reservados</div>
            </Grid>
            <Grid item md={12} lg={6} className={Styles.footer_left_container}>
                <div className={Styles.footer_center_txt}>Eva Center</div>
                <div className={Styles.footer_center_txt}>Privacidad</div>
                <div className={Styles.footer_center_txt}>Términos</div>
            </Grid>
            <Grid item md={12} lg={3} className={Styles.footer_left_container}>
                <FacebookIcon className={Styles.social_style} />
                <TwitterIcon className={Styles.social_style} />
                <InstagramIcon className={Styles.social_style} />
                <YouTubeIcon className={Styles.social_style} />
                <LinkedInIcon className={Styles.social_style} />
                <MailOutlineIcon className={Styles.social_style} />
            </Grid>
        </Grid>
    )
}