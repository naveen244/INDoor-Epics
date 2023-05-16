
import { ServicesCheckout } from '../ServicesCheckout'
import { services_mechanic } from '../../../Data/ServicesData'

export const AcRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_mechanic[0].desc} desc={services_mechanic[0].checkout_desc} img={services_mechanic[0].img} category="Appliance Repair" />
        </>
    )
}

export const MicrowaveRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_mechanic[1].desc} desc={services_mechanic[1].checkout_desc} url_title="microwave_repair_checkout" img={services_mechanic[1].img} category="Appliance Repair" />
        </>
    )
}

export const MixerGrinderRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_mechanic[2].desc} desc={services_mechanic[2].checkout_desc} url_title="ac_repair_checkout" img={services_mechanic[2].img} category="Appliance Repair" />
        </>
    )
}

export const RefrigeratorRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_mechanic[3].desc} desc={services_mechanic[3].checkout_desc} url_title="ac_repair_checkout" img={services_mechanic[3].img} category="Appliance Repair" />
        </>
    )
}

export const WashingMachineRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_mechanic[4].desc} desc={services_mechanic[4].checkout_desc} url_title="ac_repair_checkout" img={services_mechanic[4].img} category="Appliance Repair" />
        </>
    )
}

export const WaterHeaterRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_mechanic[5].desc} desc={services_mechanic[5].checkout_desc} url_title="ac_repair_checkout" img={services_mechanic[5].img} category="Appliance Repair" />
        </>
    )
}

export const DishwasherRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_mechanic[6].desc} desc={services_mechanic[6].checkout_desc} url_title="ac_repair_checkout" img={services_mechanic[6].img} category="Appliance Repair" />
        </>
    )
}

export const HouseholdApplianceRepairCheckout = () => {
    return (
        <>
            <ServicesCheckout title={services_mechanic[7].desc} desc={services_mechanic[7].checkout_desc} url_title="ac_repair_checkout" img={services_mechanic[7].img} category="Appliance Repair" />
        </>
    )
}


