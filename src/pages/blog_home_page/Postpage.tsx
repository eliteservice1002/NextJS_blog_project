import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from './style.module.css';
import Postblock from '../../components/Postblock';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import Footer from "../../components/BlogFooter";

const postdata = [
    { img: './img/blog/portada-tinte-600x460.jpg', text1: 'Cáncer / Estilo de vida / Prevención', text2: '¿Hay relación entre el uso de tinte y el cáncer de mama?', text3: 'Sabemos que existen muchísimos mitos sobre las posibles causas del cáncer de mama. Por eso, iremos compartiendo algunos…' },
    { img: './img/blog/comer-feliz-600x460.jpg', text1: 'Estilo de vida', text2: '¿Qué comer para ser más feliz? 3 alimentos sanadores.', text3: 'Eres lo que comes, así que si quieres ser feliz, todo lo que necesitas es elegir con cuidado…' },
    { img: './img/blog/10de10-600x460.jpg', text1: 'Cáncer / Diagnóstico / Prevención', text2: 'Tengo una bolita en el seno, ¿significa que tengo cáncer?', text3: 'Una bolita en el seno puede ser un síntoma de cáncer de mama, sobre todo, cuando tiene ciertas…' },
    { img: './img/blog/blog-hombres-2-600x460.jpg', text1: 'Cáncer / Estilo de vida / Prevención', text2: '10 cosas que puedes hacer en 10 minutos para ser feliz.', text3: 'Vivimos la cultura de la inmediatez, andamos con tanta prisa que 10 minutos cobran gran relevancia en nuestra…' },
    { img: './img/blog/5050-600x460.jpg', text1: 'Cáncer / Prevención', text2: 'El cáncer de mama también es cosa de hombres.', text3: 'El Día Internacional del Hombre se celebra cada 19 de noviembre y es el pretexto perfecto para recordarte…' },
    { img: './img/blog/portada-tinte-600x460.jpg', text1: 'Cáncer / Estilo de vida', text2: '50/50: una película que te hará reír, llorar y disfrutar la vida.', text3: '50/50 está basada en una historia de la vida real; es la lucha de Adam, un joven de…' },
    { img: './img/blog/portada-tinte-600x460.jpg', text1: 'Cáncer / Estilo de vida / Prevención', text2: '10 factores de riesgo del cáncer de mama.', text3: 'El cáncer de mama es un padecimiento que puede estar relacionado con múltiples causas, sin embargo, hay algunos…' },
    { img: './img/blog/lactancia2-600x460.jpg', text1: 'Cáncer / Estilo de vida / Prevención', text2: '¿La lactancia materna te protege del cáncer de mama?', text3: 'La leche materna tiene muy buena fama cuando se trata de cuidar la salud del bebé, además, hay…' },
    { img: './img/blog/portada-tinte-600x460.jpg', text1: 'Cáncer / Estilo de vida / Prevención', text2: '¿Hay relación entre el uso de tinte y el cáncer de mama?', text3: 'Sabemos que existen muchísimos mitos sobre las posibles causas del cáncer de mama. Por eso, iremos compartiendo algunos…' },
    { img: './img/blog/portada-tinte-600x460.jpg', text1: 'Cáncer / Estilo de vida / Prevención', text2: '¿Hay relación entre el uso de tinte y el cáncer de mama?', text3: 'Sabemos que existen muchísimos mitos sobre las posibles causas del cáncer de mama. Por eso, iremos compartiendo algunos…' }
]

const postdata2 = [
    { img: './img/blog/Frame-1-80x80.jpg', text4: '¿Cuál es la relación entre la termografía y el cáncer de mama?' },
    { img: './img/blog/consejos-80x80.jpg', text4: '¿Tienes miedo de sufrir cáncer? 3 consejos para gestionarlo.' },
    { img: './img/blog/mamografia-80x80.jpg', text4: '¿Qué es la mamografía? Todo lo que debes saber.' },
]

const footerpostdata = [
    { img: './img/blog/135041746_1241218736259752_3808202899300926232_nfull.jpg' },
    { img: './img/blog/133716631_2860465457572391_7817195478335643698_nfull.jpg' },
    { img: './img/blog/133606349_182423753569771_1624064626422665786_nfull.jpg' },
    { img: './img/blog/135041746_1241218736259752_3808202899300926232_nfull.jpg' },
]
export default function Postpage() {
    const [postdata1, setPostdata1] = React.useState([]);
    const [currentpage, setCurrentPage] = React.useState(1);

    useEffect(() => {
        let data = []
        postdata.map((val, index) => {
            if (index >= 0 && index <= 7)
                data.push(val)
        })
        setPostdata1(data)
    }, [])

    const handleChangePage = (event, newPage) => {
        handleProductfilter(newPage)
        setCurrentPage(newPage)
    }

    const handleProductfilter = (param) => {
        let data = []
        let first = 0;
        let last = 11;

        if (param !== 1) {
            first = (9 * (param - 1)) - 1;
            last = (9 * param - 1) - 1;
        }

        postdata.map((val, index) => {
            if (index >= first && index <= last) {
                data.push(val)
            }
        })
        setPostdata1(data)
    }

    return (
        <Grid container className={Styles.blo_home_page_container}>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={8}>
                <Grid container>
                    <Grid item md={12} lg={7}>
                        {
                            postdata1.map((val, index) => {
                                return (
                                    <div key={index} className={Styles.post_block_item_container}>
                                        <Postblock img={val.img} text1={val.text1} text2={val.text2} text3={val.text3} key={index + 1} />
                                    </div>
                                )
                            })
                        }
                        <div className={Styles.pagenation}>
                            <Pagination
                                count={Math.ceil(postdata.length / 8)}
                                color="secondary"
                                page={currentpage}
                                onChange={handleChangePage}
                            />
                        </div>
                    </Grid>
                    <Grid item md={12} lg={1}></Grid>
                    <Grid item md={12} lg={4} style={{ width: '100%' }}>
                        <div className={Styles.blog_home_page_right_title_container}>
                            <div className={Styles.blog_home_page_right_title_line}></div>
                            <div className={Styles.blog_home_page_right_title}>te recomendamos</div>
                            <div className={Styles.blog_home_page_right_title_line}></div>
                        </div>
                        {
                            postdata2.map((val, index) => {
                                return (
                                    <div key={index} className={Styles.post_block_item_container1}>
                                        <Postblock img={val.img} text4={val.text4} key={index + 1} />
                                    </div>
                                )
                            })
                        }
                        <div style={{ backgroundImage: 'url(./img/blog/banner-videoeva.jpg)', marginTop: 30 }} className={Styles.another_block_container}>
                            <div style={{ width: '100%' }}>
                                <Button variant="contained"
                                    className={Styles.btnstyle}
                                >
                                    Agenda tu estudio Eva
                                </Button>
                            </div>
                        </div>
                        <div style={{ backgroundImage: 'url(./img/blog/cta-bg-empresas-1-e1601146819421.jpg)' }} className={Styles.another_block_container}>
                            <div style={{ width: '100%' }}>
                                <Button variant="contained"
                                    className={Styles.btnstyle}
                                >
                                    Platica con tu doctora
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2}></Grid>
            <Grid container className={Styles.footer_post_container}>
                <div className={Styles.footer_post_top_container}>
                    <div className={Styles.footer_post_top_title}>Encuéntranos en Instagram @evacenter.mx</div>
                </div>
                {
                    footerpostdata.map((val, index) => {
                        return (
                            <Grid item xs={3} key={index}>
                                <img src={val.img} alt={val.img} key={index + 1} />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Footer />
        </Grid>
    )
}