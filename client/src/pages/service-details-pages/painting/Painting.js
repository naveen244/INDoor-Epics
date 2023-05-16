import { ServicesCheckout } from '../ServicesCheckout'
import { services_painting } from '../../../Data/ServicesData'

export const CabinetPainting = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[0].desc} desc={services_painting[0].checkout_desc} img={services_painting[0].img} category="Painting" />
        </>
    )
}

export const ColorConsultation = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[1].desc} desc={services_painting[1].checkout_desc} img={services_painting[1].img} category="Painting" />
        </>
    )
}

export const ExteriorPainting = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[2].desc} desc={services_painting[2].checkout_desc} img={services_painting[2].img} category="Painting" />
        </>
    )
}

export const InteriorPainting = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[3].desc} desc={services_painting[3].checkout_desc} img={services_painting[3].img} category="Painting" />
        </>
    )
}

export const PowerWashing = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[4].desc} desc={services_painting[4].checkout_desc} img={services_painting[4].img} category="Painting" />
        </>
    )
}

export const SpecialityFinishes = () => {
    return (
        <>
            <ServicesCheckout title={services_painting[5].desc} desc={services_painting[5].checkout_desc} img={services_painting[5].img} category="Painting" />
        </>
    )
}




