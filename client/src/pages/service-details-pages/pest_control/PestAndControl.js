import { ServicesCheckout } from '../ServicesCheckout'
import { services_pest_control } from '../../../Data/ServicesData'

export const BedBugExtermination = () => {
    return (
        <>
            <ServicesCheckout title={services_pest_control[0].desc} desc={services_pest_control[0].checkout_desc} img={services_pest_control[0].img} category="Pest Control" />
        </>
    )
}

export const GreenPestControl = () => {
    return (
        <>
            <ServicesCheckout title={services_pest_control[1].desc} desc={services_pest_control[1].checkout_desc} img={services_pest_control[1].img} category="Pest Control" />
        </>
    )
}

export const MosquitoControl = () => {
    return (
        <>
            <ServicesCheckout title={services_pest_control[2].desc} desc={services_pest_control[2].checkout_desc} img={services_pest_control[2].img} category="Pest Control" />
        </>
    )
}

export const RodentControl = () => {
    return (
        <>
            <ServicesCheckout title={services_pest_control[3].desc} desc={services_pest_control[3].checkout_desc} img={services_pest_control[3].img} category="Pest Control" />
        </>
    )
}

export const TermiteControl = () => {
    return (
        <>
            <ServicesCheckout title={services_pest_control[4].desc} desc={services_pest_control[4].checkout_desc} img={services_pest_control[4].img} category="Pest Control" />
        </>
    )
}

