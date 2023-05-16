import appliance_repair from "../assets/categories/appliance_repair.jpg"
import pest_control from "../assets/categories/pest_control.jpg"

// Mechanic
import ac_repair from "../assets/mechanic/ac_repair.jpg";
import washing_machine_repair from "../assets/mechanic/washing_machine_repair.jpg";
import microwave_repair from "../assets/mechanic/microwave_repair.jpg";
import refrigerator_repair from "../assets/mechanic/refrigerator_repair.jpg";
import mixer_grinder_repair from "../assets/mechanic/mixer_grinder_repair.jpg";
import dishwasher_repair from "../assets/mechanic/dishwasher_repair.jpg";


// Electrician
import fan from "../assets/electrician/fan.jpg";
import switchboard from "../assets/electrician/switchboard.jpg";
import new_internal_wiring from "../assets/electrician/new_internal_wiring.jpg";
import inverter_servicing from "../assets/electrician/inverter_servicing.jpg";
import cctv_camera from "../assets/electrician/cctv_camera.jpg";
import door_bell from "../assets/electrician/door_bell.jpg";
import fuse from "../assets/electrician/fuse.jpg";
import light_fitting from "../assets/electrician/light_fitting.jpg";

// Plumbing
import water_tank from "../assets/plumbing/water_tank.jpg";
import tab_and_mixer from "../assets/plumbing/tab_and_mixer.jpg";
import basin_and_sink from "../assets/plumbing/basin_and_sink.jpg";
import toilet_and_bathroom from "../assets/plumbing/toilet_and_bathroom.jpg";
import water_leakage from "../assets/plumbing/water_leakage.jpg";
import whole_house_plumbing from "../assets/plumbing/whole_house_plumbing.jpg";

// Cleaning
import carpet_cleaning from "../assets/cleaning/carpet_cleaning.jpg";
import house_deep_cleaning from "../assets/cleaning/house_deep_cleaning.jpg";
import kitchen_deep_cleaning from "../assets/cleaning/kitchen_deep_cleaning.jpg";
import sweeping_and_mopping from "../assets/cleaning/sweeping_and_mopping.jpg";
import dust_cleaning from "../assets/cleaning/dust_cleaning.jpg";
import bathroom_cleaning from "../assets/cleaning/bathroom_cleaning.jpg";
import furniture_cleaning from "../assets/cleaning/furniture_cleaning.jpg";

// Carpenter
import cabinetry from "../assets/carpenter/cabinetry.jpg";
import custom from "../assets/carpenter/custom.jpg";
import furniture_restoration from "../assets/carpenter/furniture_restoration.jpg";
import installation from "../assets/carpenter/installation.jpg";


// Beauty and Spa
import bed_bug_extermination from "../assets/pest_control/bed_bug_extermination.jpg";
import green_pest_control from "../assets/pest_control/green_pest_control.jpg";
import mosquito_control from "../assets/pest_control/mosquito_control.jpg";
import rodent_control from "../assets/pest_control/rodent_control.jpg";
import termite_control from "../assets/pest_control/termite_control.jpg";

// Painting
import cabinet_painting from "../assets/painting/cabinet_painting.jpg"
import color_consultation from "../assets/painting/color_consultation.jpg"
import exterior_painting from "../assets/painting/exterior_painting.jpg"
import interior_painting from "../assets/painting/interior_painting.jpg"
import power_washing from "../assets/painting/power_washing.jpg"
import speciality_finishes from "../assets/painting/Speciality_finishes.jpg"

// Cooking
import catering from "../assets/cooking/catering.jpg";
import healthy_and_nutritional from "../assets/cooking/healthy_and_nutritional.jpg";
import meal_delivery from "../assets/cooking/meal_delivery.jpg";
import personal_chef from "../assets/cooking/personal_chef.jpg";

// Gardening
import edible_gardens from "../assets/gardening/edible_gardens.jpg"
import garden_installation from "../assets/gardening/garden_installation.jpg"
import garden_maintainence from "../assets/gardening/garden_maintainence.jpg"
import irrigation from "../assets/gardening/irrigation.jpg"
import landscape_lighting from "../assets/gardening/landscape_lighting.jpg"
import organic_gardening from "../assets/gardening/organic_gardening.jpg"

export const popularServices = [
    {
        id: 'switchboard',
        desc: 'Switch Board Repair',
        img: switchboard,
        category: 'electrician',
        status: "active",
        price: "Rs 120.00",
    },
    {
        id: 'carpet_cleaning',
        desc: 'Carpet Cleaning',
        img: carpet_cleaning,
        category: 'cleaning',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        id: 'termite_control',
        desc: 'Termite Control',
        img: pest_control,
        category: 'pest_control',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        id: 'ac_repair',
        desc: 'AC Repairing',
        img: appliance_repair,
        category: 'mechanic',
        status: "active",
        price: "Rs. 120.00",
    },

]

export const services_electrician = [
    {
        serviceId: 1,
        id: 'fan',
        desc: 'Fan Repair and Installation',
        img: fan,
        checkout_desc: 'We are here to tend to the world class Fan repairing or installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 2,
        id: 'switchboard',
        desc: 'Switchboard Repair and Installation',
        img: switchboard,
        checkout_desc: 'We are here to tend to the world class Switchboard repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 3,
        id: 'fuse',
        desc: 'Fuse Repair and Installation',
        img: fuse,
        checkout_desc: 'We are here to tend to the world class Fuse repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 4,
        id: 'new_internal_wiring',
        desc: 'New internal wiring',
        img: new_internal_wiring,
        checkout_desc: 'We are here to tend to the world class Internal Wiring repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 5,
        id: 'inverter_servicing',
        desc: 'Inverter Repair and Installation',
        img: inverter_servicing,
        checkout_desc: 'We are here to tend to the world class Inverter repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "Rs. 120.00",

    },
    {
        serviceId: 6,
        id: 'light_fitting',
        desc: 'Lights Repair and Installation',
        img: light_fitting,
        checkout_desc: 'We are here to tend to the world class Light repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 7,
        id: 'cctv_camera',
        desc: 'CCTV camera Repair and Installation',
        img: cctv_camera,
        checkout_desc: 'We are here to tend to the world class CCTV repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 8,
        id: 'door_bell',
        desc: 'Door bell Repair and Installation',
        img: door_bell,
        checkout_desc: 'We are here to tend to the world class Door Bell repairing and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'electrician',
        status: "active",
        price: "Rs. 120.00",
    }
]
export const services_plumbing = [
    {
        serviceId: 9,
        id: 'water_tank',
        desc: 'Water Tank Cleaning and Installation',
        img: water_tank,
        checkout_desc: 'We are here to the give quality Water Tank cleaning and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 10,
        id: 'tab_and_mixer',
        desc: 'Tab and Mixer Repair and Installation',
        img: tab_and_mixer,
        checkout_desc: 'We are here to the give quality Tab and Mixer repair and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 11,
        id: 'basin_and_sink',
        desc: 'Basin and Sink Repair and Installation',
        img: basin_and_sink,
        checkout_desc: 'We are here to the give quality Basin and Sink repair and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 12,
        id: 'toilet_and_bathroom',
        desc: 'Toilet, Bathroom or Kitchen',
        img: toilet_and_bathroom,
        checkout_desc: 'We are here to the give quality Toilet, Bathroom or Kitchen plumbing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 13,
        id: 'water_leakage',
        desc: 'water Leakage ',
        img: water_leakage,
        checkout_desc: 'We are here to the give quality water leakage fixing service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 14,
        id: 'whole_house_plumbing',
        desc: 'Whole House Plumbing ',
        img: whole_house_plumbing,
        checkout_desc: 'We are here to the give quality whole house plumbing repair and installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'plumbing',
        status: "active",
        price: "Rs. 120.00",
    }
]
export const services_cleaning = [
    // {
    //     serviceId: 15,
    //     id: 'pest_control',
    //     desc: 'Pest Control ',
    //     img: pest_control,
    //     checkout_desc: 'We are here to the give quality Pest control services to our costumers no matter what it takes. Thanks for Trusting us.',
    //     category: 'cleaning',
    //     status: "active",
    //     price: "Rs. 120.00",
    // },
    {
        serviceId: 16,
        id: 'house_deep_cleaning',
        desc: 'House Deep Cleaning ',
        img: house_deep_cleaning,
        checkout_desc: 'We are here to the give quality House Deep Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cleaning',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 17,
        id: 'kitchen_deep_cleaning',
        desc: 'Kitchen Deep Cleaning ',
        img: kitchen_deep_cleaning,
        checkout_desc: 'We are here to the give quality Kitchen Deep Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cleaning',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 18,
        id: 'carpet_cleaning',
        desc: 'Carpet Cleaning',
        img: carpet_cleaning,
        checkout_desc: 'We are here to the give quality Carpet Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cleaning',
        status: "active",
        price: "Rs. 120.00",
    },
    // {
    //     serviceId: 19,
    //     id: 'house_painting',
    //     desc: 'House Painting',
    //     img: house_painting,
    //     checkout_desc: 'We are here to the give quality House Painting services to our costumers no matter what it takes. Thanks for Trusting us.',
    //     category: 'cleaning',
    //     status: "active",
    //     price: "Rs. 120.00",
    // },
    {
        serviceId: 20,
        id: 'sweeping_and_moping',
        desc: 'Sweeping and Mopping',
        img: sweeping_and_mopping,
        checkout_desc: 'We are here to the give quality Sweeping and Mopping services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cleaning',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 21,
        id: 'dust_cleaning',
        desc: 'Dust Cleaning',
        img: dust_cleaning,
        checkout_desc: 'We are here to the give quality Dust Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cleaning',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 22,
        id: 'furniture_cleaning',
        desc: 'Furniture Cleaning',
        img: furniture_cleaning,
        checkout_desc: 'We are here to the give quality Furniture Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cleaning',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 23,
        id: 'bathroom_cleaning',
        desc: 'Bathroom Cleaning',
        img: bathroom_cleaning,
        checkout_desc: 'We are here to the give quality Bathroom Cleaning services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cleaning',
        status: "active",
        price: "Rs. 120.00",
    }
]

export const services_carpenter = [
    {
        serviceId: 24,
        id: 'cabinetry',
        desc: 'Cabinetry',
        img: cabinetry,
        checkout_desc: 'We are here to the give quality Cabinetry to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'carpenter',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 25,
        id: 'custom',
        desc: 'Custom',
        img: custom,
        checkout_desc: 'We are here to the give quality Custom Carpentry Services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'carpenter',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 26,
        id: 'furniture_restoration',
        desc: 'Furniture Restoration',
        img: furniture_restoration,
        checkout_desc: 'We are here to the give quality Furniture Restoration to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'carpenter',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 27,
        id: 'installation',
        desc: 'Installation',
        img: installation,
        checkout_desc: 'We are here to the give quality Installation Services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'carpenter',
        status: "active",
        price: "Rs. 120.00",
    },
    // {
    //     serviceId: 28,
    //     id: 'music_instructor',
    //     desc: 'Music Instructor',
    //     img: music_instructor,
    //     checkout_desc: 'We are here to the give quality Music Classes to our costumers no matter what it takes. Thanks for Trusting us.',
    //     category: 'carpenter',
    //     status: "active",
    //     price: "Rs. 120.00",
    // },
    // {
    //     serviceId: 29,
    //     id: 'tuition_for_kids',
    //     desc: 'Tuition For Kids',
    //     img: tuition_for_kids,
    //     checkout_desc: 'We are here to the give quality Tuitions to Kids no matter what it takes. Thanks for Trusting us.',
    //     category: 'carpenter',
    //     status: "active",
    //     price: "Rs. 120.00",
    // }
]
export const services_pest_control = [
    {
        serviceId: 30,
        id: 'bed_bug_extermination',
        desc: 'Bed Bug Extermination',
        img: bed_bug_extermination,
        checkout_desc: 'We are here to the give quality Bed Bug Extermination services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'pest_control',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 31,
        id: 'green_pest_control',
        desc: 'Green Pest Control',
        img: green_pest_control,
        checkout_desc: 'We are here to the give quality Green Pest Control service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'pest_control',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 32,
        id: 'mosquito_control',
        desc: 'Mosquito Control',
        img: mosquito_control,
        checkout_desc: 'We are here to the give quality Mosquito Control services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'pest_control',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 33,
        id: 'rodent_control',
        desc: 'Rodent Control',
        img: rodent_control,
        checkout_desc: 'We are here to the give quality Rodent Control service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'pest_control',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 34,
        id: 'termite_control',
        desc: 'Termite Control',
        img: termite_control,
        checkout_desc: 'We are here to the give quality Termite Control services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'pest_control',
        status: "active",
        price: "Rs. 120.00",
    }
]
export const services_painting = [
    {
        serviceId: 35,
        id: 'cabinet_painting',
        desc: 'Cabinet Painting',
        img: cabinet_painting,
        checkout_desc: 'We are here to the give quality Cabinet Painting services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'painting',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 36,
        id: 'color_consultation',
        desc: 'Color Consultation',
        img: color_consultation,
        checkout_desc: 'We are here to the give quality Color Consultation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'painting',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 37,
        id: 'exterior_painting',
        desc: 'Exterior Painting',
        img: exterior_painting,
        checkout_desc: 'We are here to the give quality Exterior Painting services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'painting',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 38,
        id: 'interior_painting',
        desc: 'Interior Painting',
        img: interior_painting,
        checkout_desc: 'We are here to the give quality Interior Painting services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'painting',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 39,
        id: 'power_washing',
        desc: 'Power Washing',
        img: power_washing,
        checkout_desc: 'We are here to the give quality Power Washing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'painting',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 40,
        id: 'speciality_finishes',
        desc: 'Speciality Finishes',
        img: speciality_finishes,
        checkout_desc: 'We are here to the give quality Speciality Finishes service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'painting',
        status: "active",
        price: "Rs. 120.00",
    }
]
export const services_cooking = [
    {
        serviceId: 41,
        id: 'catering',
        desc: 'Catering',
        img: catering,
        checkout_desc: 'We are here to the give quality Catering service to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cooking',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 42,
        id: 'healthy_and_nutritional',
        desc: 'Health and Nutrition',
        img: healthy_and_nutritional,
        checkout_desc: 'We are here to the give quality Health and Nutrition services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cooking',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 43,
        id: 'meal_delivery',
        desc: 'Meal Delivery',
        img: meal_delivery,
        checkout_desc: 'We are here to the give quality Meal Delivery services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cooking',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 44,
        id: 'personal_chef',
        desc: 'Personal Chef',
        img: personal_chef,
        checkout_desc: 'We are here to the give quality Personal Chef services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'cooking',
        status: "active",
        price: "Rs. 120.00",
    }
]

export const services_mechanic = [
    {
        serviceId: 45,
        id: "ac_repair",
        desc: 'Air Conditioner',
        img: ac_repair,
        checkout_desc: 'We are here to tend to the world class AC repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'mechanic',
        status: "active",
        price: "Rs. 120.00",
    },

    {
        serviceId: 46,
        id: "microwave_repair",
        desc: 'Microwave and Oven',
        img: microwave_repair,
        checkout_desc: 'We are here to tend to the world class Microwave repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'mechanic',
        status: "active",
        price: "Rs. 120.00",

    },
    {
        serviceId: 47,
        id: "mixer_grinder_repair",
        desc: 'Mixer Grinder',
        img: mixer_grinder_repair,
        checkout_desc: 'We are here to tend to the world class Mixer and Grinder repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'mechanic',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 48,
        id: "refrigerator_repair",
        desc: 'Refrigerator',
        img: refrigerator_repair,
        checkout_desc: 'We are here to tend to the world class Refrigerator repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'mechanic',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 49,
        id: "washing_machine_repair",
        desc: 'Washing Machine',
        img: washing_machine_repair,
        checkout_desc: 'We are here to tend to the world class Washing Machine repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'mechanic',
        status: "active",
        price: "Rs. 120.00",
    },
    // {
    //     serviceId: 50,
    //     id: "water_heater_repair",
    //     desc: 'Water Heater',
    //     img: water_heater_repair,
    //     checkout_desc: 'We are here to tend to the world class Water Heater repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
    //     category: 'mechanic',
    //     status: "active",
    //     price: "Rs. 120.00",
    // },
    {
        serviceId: 51,
        id: "dishwasher_repair",
        desc: 'Dishwasher',
        img: dishwasher_repair,
        checkout_desc: 'We are here to tend to the world class Dishwasher repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'mechanic',
        status: "active",
        price: "Rs. 120.00",
    },
    // {
    //     serviceId: 52,
    //     id: "household_mechanic",
    //     desc: 'Household Appliance',
    //     img: household_appliances_repair,
    //     checkout_desc: 'We are here to tend to the world class Household Appliance repairing services to our costumers no matter what it takes. Thanks for Trusting us.',
    //     category: 'mechanic',
    //     status: "active",
    //     price: "Rs. 120.00",
    // }
]
export const services_gardening = [
    {
        serviceId: 53,
        id: "edible_gardens",
        desc: 'Edible Garden',
        img: edible_gardens,
        checkout_desc: 'We are here to tend to the world class Edible Garden services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'gardening',
        status: "active",
        price: "Rs. 120.00",
    },

    {
        serviceId: 54,
        id: "garden_installation",
        desc: 'Garden Installation',
        img: garden_installation,
        checkout_desc: 'We are here to tend to the world class Garden Installation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'gardening',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 54,
        id: "garden_maintainence",
        desc: 'Garden Maintainence',
        img: garden_maintainence,
        checkout_desc: 'We are here to tend to the world class Garden Maintainence services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'gardening',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 54,
        id: "irrigation",
        desc: 'Irrigation',
        img: irrigation,
        checkout_desc: 'We are here to tend to the world class Irrigation services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'gardening',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 54,
        id: "landscape_lighting",
        desc: 'Landscape Lighting',
        img: landscape_lighting,
        checkout_desc: 'We are here to tend to the world class Landscape Lighting services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'gardening',
        status: "active",
        price: "Rs. 120.00",
    },
    {
        serviceId: 54,
        id: "organic_gardening",
        desc: 'Organic Gardening',
        img: organic_gardening,
        checkout_desc: 'We are here to tend to the world class Organic Gardening services to our costumers no matter what it takes. Thanks for Trusting us.',
        category: 'gardening',
        status: "active",
        price: "Rs. 120.00",
    },
    
]





