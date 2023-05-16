import { ServicesCheckout } from '../ServicesCheckout'
import { services_cooking } from '../../../Data/ServicesData'

export const Catering = () => {
    return (
        <>
            <ServicesCheckout title={services_cooking[0].desc} desc={services_cooking[0].checkout_desc} img={services_cooking[0].img} category="Cooking" />
        </>
    )
}

export const HealthAndNutrition = () => {
    return (
        <>
            <ServicesCheckout title={services_cooking[1].desc} desc={services_cooking[1].checkout_desc} img={services_cooking[1].img} category="Cooking" />
        </>
    )
}

export const MealDelivery = () => {
    return (
        <>
            <ServicesCheckout title={services_cooking[2].desc} desc={services_cooking[2].checkout_desc} img={services_cooking[2].img} category="Cooking" />
        </>
    )
}
export const PersonalChef = () => {
    return (
        <>
            <ServicesCheckout title={services_cooking[3].desc} desc={services_cooking[3].checkout_desc} img={services_cooking[3].img} category="Cooking" />
        </>
    )
}


