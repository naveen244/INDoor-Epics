import { ServicesCheckout } from '../ServicesCheckout'
import { services_carpenter } from '../../../Data/ServicesData'

export const Cabinetry = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[0].desc} desc={services_carpenter[0].checkout_desc} img={services_carpenter[0].img} category="Carpenter" />
        </>
    )
}

export const Custom = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[1].desc} desc={services_carpenter[1].checkout_desc} img={services_carpenter[1].img} category="Carpenter" />
        </>
    )
}

export const FurnitureRestoration = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[2].desc} desc={services_carpenter[2].checkout_desc} img={services_carpenter[2].img} category="Carpenter" />
        </>
    )
}

export const Installation = () => {
    return (
        <>
            <ServicesCheckout title={services_carpenter[3].desc} desc={services_carpenter[3].checkout_desc} img={services_carpenter[3].img} category="Carpenter" />
        </>
    )
}



