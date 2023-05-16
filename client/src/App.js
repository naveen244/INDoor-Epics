import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { ContactUs } from './pages/Contact-Us';
import { RegisterAsProfessional } from './pages/Register-as-professional';
import { ServicesCategories } from './pages/Services/ServicesCategories';
// import { ClientOrders } from './container/Orders-Dashboards/ClientOrders'
import { SignUp } from './container/SignIn-SignUp/Sign-Up/SignUp';
import { SignIn } from './container/SignIn-SignUp/Sign-In/SignIn';

import { Mechanic, Electrician, Plumbing, Cleaning, PestControl, Carpenter, Painting, Cooking, Gardening } from './pages/Services/AllServices';

import { AcRepairCheckout, MicrowaveRepairCheckout, RefrigeratorRepairCheckout, WashingMachineRepairCheckout, HouseholdApplianceRepairCheckout, MixerGrinderRepairCheckout, DishwasherRepairCheckout } from './pages/service-details-pages/mechanic/Mechanic';

import { Fan, Switchboard, Fuse, NewInternalWiring, InverterServicing, LightFitting, CCTVCamera, Doorbell } from './pages/service-details-pages/electrician/ElectricianCheckout'

import { WaterTank, TabAndMixer, BasinAndSink, ToiletAndBathroom, WaterLeakage, WholeHousePlumbing } from './pages/service-details-pages/plumbing/PlumbingCheckout';

import { BathroomCleaning, CarpetCleaning, DustCleaning, FurnitureCleaning, HouseDeepCleaning, HousePainting, KitchenDeepCleaning, SweepingAndMopping } from './pages/service-details-pages/cleaning/Cleaning';

import { BedBugExtermination, GreenPestControl, MosquitoControl, RodentControl, TermiteControl } from './pages/service-details-pages/pest_control/PestAndControl';

import { Catering, HealthAndNutrition, MealDelivery, PersonalChef } from './pages/service-details-pages/cooking/Cooking';
import { CabinetPainting, ColorConsultation, ExteriorPainting, InteriorPainting, PowerWashing, SpecialityFinishes } from './pages/service-details-pages/painting/Painting';
import { Cabinetry, Custom, FurnitureRestoration, Installation } from './pages/service-details-pages/carpenter/Carpenter';
import { EdibleGardens, GardenMaintainence, GardenInstallation, Irrigation, LandscapeLighting, OrganicGardening } from './pages/service-details-pages/gardening/Gardening';

// pages for admin dashboard


import CheckoutForm from './pages/checkout-form/CheckoutForm';
import Error from './pages/Error Page/Error';


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Categories" element={<ServicesCategories />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
        <Route path="/checkout/:category/:service" element={<CheckoutForm />} />
        {/* <Route path="/Orders" element={<ClientOrders />} /> */}

        {/* Link in pages/services/ServicesCategories*/}
        <Route path="/categories/mechanic" element={<Mechanic />} />
        <Route path="/categories/electrician" element={<Electrician />} />
        <Route path="/categories/plumbing" element={<Plumbing />} />
        <Route path="/categories/cleaning" element={<Cleaning />} />
        <Route path="/categories/pest_control" element={<PestControl />} />
        <Route path="/categories/carpenter" element={<Carpenter />} />
        <Route path="/categories/painting" element={<Painting />} />
        <Route path="/categories/cooking" element={<Cooking />} />
        <Route path="/categories/gardening" element={<Gardening />} />


        {/* Link in components/services/services.jsx */}
        <Route path="/categories/mechanic/ac_repair" element={<AcRepairCheckout />} />
        <Route path="/categories/mechanic/microwave_repair" element={<MicrowaveRepairCheckout />} />
        <Route path="/categories/mechanic/refrigerator_repair" element={<RefrigeratorRepairCheckout />} />
        <Route path="/categories/mechanic/washing_machine_repair" element={<WashingMachineRepairCheckout />} />
        <Route path="/categories/mechanic/ac_repair" element={<HouseholdApplianceRepairCheckout />} />
        <Route path="/categories/mechanic/mixer_grinder_repair" element={<MixerGrinderRepairCheckout />} />
        <Route path="/categories/mechanic/dishwasher_repair" element={<DishwasherRepairCheckout />} />
        <Route path="/categories/mechanic/household_appliance_repair" element={< HouseholdApplianceRepairCheckout />} />


        <Route path="/categories/electrician/fan" element={<Fan />} />
        <Route path="/categories/electrician/fuse" element={<Fuse />} />
        <Route path="/categories/electrician/switchboard" element={<Switchboard />} />
        <Route path="/categories/electrician/new_internal_wiring" element={<NewInternalWiring />} />
        <Route path="/categories/electrician/inverter_servicing" element={<InverterServicing />} />
        <Route path="/categories/electrician/light_fitting" element={<LightFitting />} />
        <Route path="/categories/electrician/cctv_camera" element={<CCTVCamera />} />
        <Route path="/categories/electrician/door_bell" element={<Doorbell />} />

        <Route path="/categories/plumbing/water_tank" element={<WaterTank />} />
        <Route path="/categories/plumbing/tab_and_mixer" element={<TabAndMixer />} />
        <Route path="/categories/plumbing/basin_and_sink" element={<BasinAndSink />} />
        <Route path="/categories/plumbing/toilet_and_bathroom" element={<ToiletAndBathroom />} />
        <Route path="/categories/plumbing/water_leakage" element={<WaterLeakage />} />
        <Route path="/categories/plumbing/whole_house_plumbing" element={<WholeHousePlumbing />} />

        <Route path="/categories/cleaning/pest_control" element={<PestControl />} />
        <Route path="/categories/cleaning/house_deep_cleaning" element={<HouseDeepCleaning />} />
        <Route path="/categories/cleaning/kitchen_deep_cleaning" element={<KitchenDeepCleaning />} />
        <Route path="/categories/cleaning/carpet_cleaning" element={<CarpetCleaning />} />
        <Route path="/categories/cleaning/house_painting" element={<HousePainting />} />
        <Route path="/categories/cleaning/dust_cleaning" element={<DustCleaning />} />
        <Route path="/categories/cleaning/bathroom_cleaning" element={<BathroomCleaning />} />
        <Route path="/categories/cleaning/furniture_cleaning" element={<FurnitureCleaning />} />
        <Route path="/categories/cleaning/sweeping_and_mopping" element={<SweepingAndMopping />} />

        <Route path="/categories/pest_control/bed_bug_extermination" element={<BedBugExtermination />} />
        <Route path="/categories/pest_control/green_pest_control" element={<GreenPestControl />} />
        <Route path="/categories/pest_control/mosquito_control" element={<MosquitoControl />} />
        <Route path="/categories/pest_control/rodent_control" element={<RodentControl />} />
        <Route path="/categories/pest_control/termite_control" element={<TermiteControl />} />

        <Route path="/categories/cooking/catering" element={<Catering />} />
        <Route path="/categories/cooking/healthy_and_nutritional" element={<HealthAndNutrition />} />
        <Route path="/categories/cooking/meal_delivery" element={<MealDelivery />} />
        <Route path="/categories/cooking/personal_chef" element={<PersonalChef />} />

        <Route path="/categories/painting/cabinet_painting" element={<CabinetPainting />} />
        <Route path="/categories/painting/color_consultation" element={<ColorConsultation />} />
        <Route path="/categories/painting/exterior_painting" element={<ExteriorPainting />} />
        <Route path="/categories/painting/interior_painting" element={<InteriorPainting />} />
        <Route path="/categories/painting/power_washing" element={<PowerWashing />} />
        <Route path="/categories/painting/speciality_finishes" element={<SpecialityFinishes />} />

        <Route path="/categories/carpenter/cabinetry" element={<Cabinetry />} />
        <Route path="/categories/carpenter/custom" element={<Custom />} />
        <Route path="/categories/carpenter/furniture_restoration" element={<FurnitureRestoration />} />
        <Route path="/categories/carpenter/installation" element={<Installation />} />

        <Route path="/categories/gardening/edible_gardens" element={<EdibleGardens />} />
        <Route path="/categories/gardening/garden_installation" element={<GardenInstallation />} />
        <Route path="/categories/gardening/garden_maintainence" element={<GardenMaintainence />} />
        <Route path="/categories/gardening/irrigation" element={<Irrigation />} />
        <Route path="/categories/gardening/landscape_lighting" element={<LandscapeLighting />} />
        <Route path="/categories/gardening/organic_gardening" element={<OrganicGardening />} />

        <Route path="/RegisterAsProfessional" element={<RegisterAsProfessional />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
