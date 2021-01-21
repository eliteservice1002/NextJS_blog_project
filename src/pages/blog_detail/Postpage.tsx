import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from './style.module.css';
import Postblock from '../../components/Postblock';
import Postdetailblock from '../../components/Postdetailblock';
import Button from '@material-ui/core/Button';
import Footer from "../../components/BlogFooter";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const postdata = [
    {
        description1: [
            { desc1: 'Sabemos que existen muchísimos mitos sobre las posibles causas del cáncer de mama. Por eso, iremos compartiendo algunos de ellos y te explicaremos, con referencias científicas, si son reales o falsos y por qué. ¿Preparada? Comencemos por el mito de que usar tinte en el cabello puede causar cáncer de mama.' },
            { desc2: 'Para empezar, es importante que sepas que el cáncer  es una enfermedad multifactorial, o sea, que puede estar relacionada con factores como las hormonas, el estilo de vida y el entorno, según Mayo Clinic1.' },
            { desc3: 'Algunos otros factores de riesgo son el consumo excesivo de bebidas alcohólicas, el sedentarismo y, muchas veces como consecuencia, el sobrepeso u obesidad, en particular después de la menopausia.' },
            { desc4: 'No haber tenido hijos o no haberlos amamantado pudieran también aumentar la probabilidad de padecer cáncer de mama2. Y aunque una decisión de este tipo es muy personal, vale la pena que tomes en cuenta este dato.' },
            { desc5: 'Sin embargo, hay algunos otros factores de riesgo de los que se habla poco debido a que se trata de un tema controversial. El uso de tinte para el cabello y su relación con la aparición del cáncer de mama es uno de ellos.' }
        ],
        description2: [],
        img: './img/blogdetail/hairdresser-applies-hair-mask-to-the-woman-in-the-beauty-salon-botox-and-keratin-hair-straightening-procedure-1024x683.jpg',
        title: '¿Qué dicen los expertos sobre este mito?'
    },
    {
        description1: [
            { desc1: 'Un estudio publicado en diciembre del 2019, en la versión electrónica de International Journal of Cancer revela que el uso de tintes permanentes para cabello se relacionó con mayor riesgo de padecer cáncer de mama, esto en comparación con nunca haberlos utilizado3.' },
            { desc2: 'Alexandra White, directora del National Institute of Environmental Health Sciences, National Institutes of Health, Research Triangle Park, en Carolina del Norte, Estados Unidos, asegura que se debe a que estos productos contienen miles de sustancias dañinas para la salud.' },
            { desc3: 'White, afirma que algunas “tienen propiedades mutagénicas y de alteración endocrina, como las aminas aromáticas”3, estas últimas son un tipo de sustancia química que suele ser muy tóxica y es absorbida por la piel.' },
            { desc4: 'En el mismo estudio se concluye, además, que el uso de tinte permanente se asocia con riesgo relativo de cáncer de mama 45% más alto en mujeres de raza negra, y riesgo relativo 7% más elevado en mujeres caucásicas3.' }
        ],
        description2: [
            { desc1: 'Y así como algunas investigaciones sugieren una relación clara entre el uso de este tipo de productos de belleza y la aparición de cáncer de seno, en otros casos no se ha encontrado evidencia suficiente para afirmar que es así.' },
            { desc2: 'El National Institutes of Health (NIH), un grupo de instituciones públicas en Estados Unidos, comprobó que las primeras fórmulas de tintes para teñir el cabello contenían sustancias cancerígenas4.' },
            { desc3: 'Pero la NIH también investiga las formulaciones de los tintes modernos y su posible relación con el cáncer de seno, la diferencia está en años de investigación. Aquí te cuento los detalles.' }
        ],
        img: './img/blogdetail/hairdresser-applies-hair-mask-to-the-woman-in-the-beauty-salon-botox-and-keratin-hair-straightening-procedure-1024x683.jpg',
        title: '¿Las nuevas formulaciones de tintes causan cáncer?'
    },
    {
        description1: [
            { desc1: 'Los fabricantes de tintes han cambiado sus componentes con el objetivo de eliminar varias de las sustancias químicas tóxicas que afectaron a algunos animales durante las pruebas de sensibilidad y que, probablemente, aumentaron el riesgo de padecer cáncer en muchas personas.' },
            { desc2: 'Además de que el uso de tinte para el cabello ha estado relacionado con la aparición de cáncer de mama, también tiene mucho que ver con el riesgo de padecer linfoma no Hodgkin, leucemia y cáncer de vejiga.' },
            { desc3: 'Pero eso no es todo, la investigación publicada en la International Journal of Cancer3,dice que el uso de tratamientos químicos para alisar o reparar el cabello está relacionado también con el cáncer de seno.' },
            { desc4: 'El problema es que los datos sobre la relación entre el cáncer de mama y el uso de estos y otros productos de belleza no son tan claros y, a veces son contradictorios, entonces, ¿usar o no usar tintes para el cabello?' },
            { desc5: 'Parece que no hay respuesta contundente y, aunque quizá una serie de investigadores estén ahora mismo tratando de llegar a una conslusión, tendremos que esperar para tener una postura clara.' },
            { desc6: 'Pero no te preocupes, hay mucho que hacer para disminuir el riesgo de padecer cáncer de mama. Cambiar algunos hábitos y tener una mejor actitud frente a los desafíos de la vida es un gran primer paso.' }
        ],
        description2: [],
        img: '',
        title: '¿Cómo reducir el riesgo de cáncer de mama?'
    },
    {
        description1: [
            { desc1: 'Revisa tus pechos con frecuencia, además de tu mastografía o los ultrasonidos que tu médico sugiera, puedes cuidar de ti con Eva, un método complementario para la detección del cáncer de mama que, además de preciso, no causa dolor alguno.' },
            { desc2: 'Y si eliges usar tintes para el cabello, asegúrate de identificar, junto a un profesional de la salud, el tipo de componentes que contiene. No dudes en hacer preguntas a tu médico de cabecera, te ayudará a tomar decisiones más informadas.' },
            { desc3: 'Y, por supuesto, tu rutina diaria puede hacer toda la diferencia cuando se trata de reducir el riesgo de padecer cáncer de mama. Mayo Clinic5 recomienda, entre otras cosas, hacer actividad física y dejar de fumar. Créeme, vas a sentirte mucho mejor.' }
        ],
        description2: [],
        img: './img/blogdetail/actividad-1024x576.jpg',
        title: '¿Qué comer para prevenir el cáncer de mama?'
    },
    {
        description1: [
            { desc1: 'Hay un tipo de dieta que puede resultar de gran ayuda para mantenernos saludables, ganar tiempo y calidad de vida.' },
            { desc2: 'Para Mayo Clinic5, esa es la dieta mediterránea, una forma deliciosa de comer desde jamón serrano y hasta pulpo a las brasas. ¿Ves? Comer rico no tiene por qué ser aburrido.  ' },
            { desc3: 'No olvides que, tanto para reducir el riesgo de sufrir cáncer de mama como para estar, en general, en tu mejor estado, es importante que sea un nutriólogo quien haga un plan a tu medida. Y recuerda siempre que no hay magia, la clave está en la constancia.' },
            { desc4: 'Cuando empieces a comer más saludable te van a dar ganas de hacer ejercicio, luego, vas a estar de buenas y tus relaciones estarán mejor que nunca. Así es esto de cambiar hábitos, es un círculo virtuoso en el que te la vas a pasar muy bien.' }
        ],
        description2: [],
        img: '',
        title: ''
    }
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

    return (
        <Grid container className={Styles.blog_detail_page_container}>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={8}>
                <Grid container>
                    <Grid item md={12} lg={7}>
                        <div>
                            <div className={Styles.post_cats_a}>Cáncer / Estilo de vida / Prevención</div>
                            <div className={Styles.post_header_h1}>¿Hay relación entre el uso de tinte y el cáncer de mama?</div>
                            <div style={{ marginBottom: 30 }}>
                                <img src="./img/blogdetail/hairdresser-applies-hair-mask-to-the-woman-in-the-beauty-salon-botox-and-keratin-hair-straightening-procedure-1024x683.jpg" alt="hairdresser-applies-hair-mask-to-the-woman-in-the-beauty-salon-botox-and-keratin-hair-straightening-procedure-1024x683.jpg" style={{ width: '100%' }} />
                            </div>
                            <div className={Styles.post_meta}>
                                <div className={Styles.meta_left}>
                                    <img src="./img/blogdetail/52084a21113d4fcec908a4f3ff702693.jpeg" alt="52084a21113d4fcec908a4f3ff702693.jpeg" className={Styles.meta_author_img} />
                                    <div>
                                        <div className={Styles.author_written}>Written by</div>
                                        <div className={Styles.author_name}>BELEM CAPETILLO</div>
                                    </div>
                                </div>
                                <div className={Styles.meta_right}>
                                    <FacebookIcon className={Styles.meta_social_icon} />
                                    <TwitterIcon className={Styles.meta_social_icon} />
                                </div>
                            </div>
                        </div>
                        {
                            postdata.map((val, index) => {
                                return (
                                    <div key={index}>
                                        <Postdetailblock description1={val.description1} description2={val.description2} img={val.img} title={val.title} key={index + 1} />
                                    </div>
                                )
                            })
                        }
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