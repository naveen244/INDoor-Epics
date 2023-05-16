import shield from "../assets/icons/quality-badge.svg";
import headphone from "../assets/icons/thumbs-up.svg";
import thumbsUp from "../assets/icons/handshake.svg";
import avatar1 from "../assets/Images/ashish.jpg";
import avatar2 from "../assets/Images/Palak.jpg";
import avatar3 from "../assets/Images/vatsal.jpg";
import avatar4 from "../assets/Images/shubhi.jpg";
import avatar5 from "../assets/Images/aviral.jpeg";
import avatar6 from "../assets/Images/naveen.jpg";
import avatar7 from "../assets/Images/priya.jpg";
import avatar8 from "../assets/Images/mrunmayee.jpg";

export const featureItems = [
    {
        id: "shield_icon",
        icon: shield,
        title: 'High Quality & Trusted Professionals',
        desc: 'We provide only verified, background checked and high quality professionals.'
    },
    {
        id: "thumbs_up_icon",
        icon: thumbsUp,
        title: 'Matched to Your Needs',
        desc: 'We match you with the right professionals with the right budget.'
    },
    {
        id: "headphones_icon",
        icon: headphone,
        title: 'Hassle Free Service Delivery',
        desc: 'Super convenient, guaranteed service from booking to delivery.'
    }
]

export const testimonials = [
    {
        id: 'testimonial_1',
        swiperId: 'SwiperTestimonial_1',
        name: 'Ashish Vats',
        comment: 'An Aspiring Web Developer. Constantly looking for new things to learn.',
        avatar: avatar1
    },
    {
        id: 'testimonial_2',
        swiperId: 'SwiperTestimonial_2',
        name: 'Palak Garg',
        comment: 'An Aspiring Web Developer. Constantly looking for new things to learn.',
        avatar: avatar2
    },
    {
        id: 'testimonial_3',
        swiperId: 'SwiperTestimonial_3',
        name: 'Vatsal Agarwal',
        comment: 'An Aspiring Web Developer. Constantly looking for new things to learn.',
        avatar: avatar3
    },
    {
        id: 'testimonial_4',
        swiperId: 'SwiperTestimonial_4',
        name: 'Shubhi Agrawal',
        comment: 'The code wizards behind exceptional app experiences.',
        avatar: avatar4
    },
    {
        id: 'testimonial_5',
        swiperId: 'SwiperTestimonial_5',
        name: 'Aviral Srivastava',
        comment: 'The code wizards behind exceptional app experiences.',
        avatar: avatar5
    },
    {
        id: 'testimonial_6',
        swiperId: 'SwiperTestimonial_6',
        name: 'Naveen Bojja',
        comment: 'An Aspiring Web Developer. Constantly looking for new things to learn.',
        avatar: avatar6
    },
    {
        id: 'testimonial_7',
        swiperId: 'SwiperTestimonial_7',
        name: 'Priya Singh',
        comment: 'The code wizards behind exceptional app experiences.',
        avatar: avatar7
    },
    {
        id: 'testimonial_8',
        swiperId: 'SwiperTestimonial_8',
        name: 'Mrunmayee Mohanty',
        comment: 'The code wizards behind exceptional app experiences.',
        avatar: avatar8
    },
    
]

export const stepsData = [
    {
        id: 'step_1',
        animation: 'fade-left',
        text: 'Select your service which you want to book and proceed to Checkout.',
        step_no: 'Step 1',
    },
    {
        id: 'step_2',
        animation: 'fade-right',
        text: 'We will check if professionals are available for your service.',
        step_no: 'Step 2',
    },
    {
        id: 'step_3',
        animation: 'fade-left',
        text: 'Make the Payment using the payment method you prefer.',
        step_no: 'Step 3',
    },
    {
        id: 'step_4',
        animation: 'fade-right',
        text:
            'Our professionals will reach to you as soon as possible.',
        step_no: 'Step 4',

    },
    // {
    //     id: 'step_5',
    //     animation: 'fade-left',
    //     text: 'We will send you the link to pay. You can pay via paypal or card',
    //     step_no: 'Step 5',
    // }
]

export const AccordionData = [
    {
        id: 'question_1',
        question: 'How long does it take to professional to reach?',
        answer: 'It depends on the distance between you and the professional. It can take up to 2 days to reach the professional.'
    },
    {
        id: 'question_2',
        question: 'What is the minimum budget for the service?',
        answer: 'It depends on the service you want to fix. It can be between ₹1000 to ₹5000.'
    },
    {
        id: 'question_3',
        question: 'What is experience level of the professional?',
        answer: 'They are highly skilled and particular about their professional. They have a minimum of 3 years of experience.'
    },
    {
        id: 'question_4',
        question: 'How does refund work?',
        answer: 'If your are not satisfied with the service, you can cancel the service and get the money back.'
    }
];