import { Services } from '../../components/services/Services'
import { services_carpenter, services_plumbing, services_cleaning, services_electrician, services_pest_control, services_painting, services_cooking, services_mechanic, services_gardening } from '../../Data/ServicesData'



// export function ApplianceRepair() {
//     return (
//         <>
//             <Services servicesProps={services_appliance_repair} title={'Appliance Repair'} tagLine={'Explore the greatest our services.'} category="appliance_repair" />
//         </>
//     )
// }

export const Electrician = () => {
    return (
        <>
            <Services servicesProps={services_electrician} title={'Electrician'} tagLine={'Explore the greatest our services.'} category="electrician" />
        </>
    )
}

export const Plumbing = () => {
    return (
        <>
            <Services servicesProps={services_plumbing} title={'Plumbing'} tagLine={'Explore the greatest our services.'} category="plumbing" />
        </>
    )
}

export const Cleaning = () => {
    return (
        <>
            <Services servicesProps={services_cleaning} title={'Cleaning'} tagLine={'Explore the greatest our services.'} category="cleaning" />
        </>
    )
}

export const Carpenter = () => {
    return (
        <>
            <Services servicesProps={services_carpenter} title={'Carpenter'} tagLine={'Explore the greatest our services.'} category="carpenter" />
        </>
    )
}

export const PestControl = () => {
    return (
        <>
            <Services servicesProps={services_pest_control} title={'Pest Control'} tagLine={'Explore the greatest our services.'} category="pest control" />
        </>
    )
}

export const Painting = () => {
    return (
        <>
            <Services servicesProps={services_painting} title={'Painting'} tagLine={'Explore the greatest our services.'} category="painting" />
        </>
    )
}

export const Cooking = () => {
    return (
        <>
            <Services servicesProps={services_cooking} title={'Cooking'} tagLine={'Explore the greatest our services.'} category="cooking" />
        </>
    )
}

export const Mechanic = () => {
    return (
        <>
            <Services servicesProps={services_mechanic} title={'Mechanic'} tagLine={'Explore the greatest our services.'} category="mechanic" />
        </>
    )
}

export const Gardening = () => {
    return (
        <>
            <Services servicesProps={services_gardening} title={'Gardening'} tagLine={'Explore the greatest our services.'} category="gardening" />
        </>
    )
}

