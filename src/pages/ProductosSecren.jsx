import React from 'react';
import Breadcrumbs from '../components/BreadCrums';
import { Link, useLocation, useParams } from 'react-router-dom';
import { category } from '../models/category';
import BotonPM from '../components/BotonPM';
import Ganancias from '../components/Ganancias';
import SectionJob from '../components/SectionJob';
import Footer from '../components/Footer';


const ProductosSecren = () => {

    const {categoryId} = useParams();
    const locations = useLocation()
    const location = locations.pathname
    const rutaDividida = location.split("/"); // Dividir la ruta en segmentos usando "/" como separador
    const rutaProductos = rutaDividida.slice(0, -1).join(""); // Obtener la ruta sin el último segmento
    const {categoria,id} = category.find((e)=> e.categoria === categoryId)
    const path = `/assets/${categoryId}-${id}.png`



    return (
        <div className='pt-28'>
            <Breadcrumbs/>
            <section className='styles_template_product_screen__tkOFy'>
            <div className='styles_screen__2YYOb'>
            <div className="styles_screen__content__y9gFS text-left ">
            <Link to={`/${rutaProductos}`} className='styles_screen__category__1zxk1'>{rutaProductos.charAt(0).toUpperCase() + rutaProductos.slice(1)}</Link> 
            <h1 className="styles_screen__header__4pes5">
            <span>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</span>
            </h1>
            </div>

  

        <div aria-hidden="true" className="styles_slides__z_bx_">
        <figure
          href="https://data.cubika.toys/media/product/Tower LD-14/tower-ld-14-01.jpg"
          data-fancybox="gallery"
          className="styles_slides__item___FWaM styles_slides__item_active__3F6Ay"
          draggable="false"
        >
          <div className="styles_lazy_image__F9o3L styles_use_alpha__wtLlB  styles_loaded__HjfGB loaded  styles_contain__fch5T">
            <img
              alt="Tower LD-14"
              draggable="false"
              src={path}
              className="styles_img__awoOq styles_use_alpha__wtLlB  styles_loaded__HjfGB loaded  styles_contain__fch5T js-preload-ignore "
              data-is-loaded="true"
            />
          </div>
        </figure>
        
      </div>

      <div aria-hidden="true" className="styles_features__EpKfd">
        <div className="styles_features_item__D_aoh lg:text-left">
          <div className="styles_features_item__img__E43C4">
            <p className='mb-12'>Regálale a los más pequeños un mundo lleno de creatividad con nuestros juguetes para niñas, niños, bebés y enséñales de una forma divertida a aprender con nuestros juguetes didácticos o educativos.  Ven a tu [empresa] más cercano.</p>
          </div>
          <div className="styles_features_item__name__hGNT7 text-sm  mt-4" >*La disponibilidad de nuestro inventario está sujeta a existencias y rotación de ventas en cada una de nuestras sucursales.</div>
        </div>
      </div>




            
          <div className="styles_form__joco8">
            <div className="styles_form_request__c7w_1 ">
                      <BotonPM/>
                      </div>
                      </div>

        
            </div>
            </section>

            <div className='flex items-center justify-center'>
            <div className='px-4 md:px-16 lg:px-32 max-w-screen-lg '>

            <hr className='mt-16'/>

            <Ganancias/>
            </div>
            
            </div>
              
            <SectionJob/>
            <div className='mt-16'>
            <Footer/>
            </div>

        </div>
    );
}

export default ProductosSecren;
