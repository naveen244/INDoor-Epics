import { ServicesCheckout } from '../ServicesCheckout'
import { services_gardening } from '../../../Data/ServicesData'

export const EdibleGardens = () => {
    return (
        <>
            <ServicesCheckout title={services_gardening[0].desc} desc={services_gardening[0].checkout_desc} img={services_gardening[0].img} category="Gardening" />
        </>
    )
}

export const GardenInstallation = () => {
    return (
        <>
            <ServicesCheckout title={services_gardening[1].desc} desc={services_gardening[1].checkout_desc} img={services_gardening[1].img} category="Gardening" />
        </>
    )
}

export const GardenMaintainence = () => {
    return (
        <>
            <ServicesCheckout title={services_gardening[0].desc} desc={services_gardening[0].checkout_desc} img={services_gardening[0].img} category="Gardening" />
        </>
    )
}

export const Irrigation = () => {
    return (
        <>
            <ServicesCheckout title={services_gardening[1].desc} desc={services_gardening[1].checkout_desc} img={services_gardening[1].img} category="Gardening" />
        </>
    )
}

export const LandscapeLighting = () => {
    return (
        <>
            <ServicesCheckout title={services_gardening[2].desc} desc={services_gardening[2].checkout_desc} img={services_gardening[2].img} category="Gardening" />
        </>
    )
}

export const OrganicGardening = () => {
    return (
        <>
            <ServicesCheckout title={services_gardening[3].desc} desc={services_gardening[3].checkout_desc} img={services_gardening[3].img} category="Gardening" />
        </>
    )
}

