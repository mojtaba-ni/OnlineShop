export const NavbarAnimate = {
    hidden : {
        opacity: 0,
        y:'-40px'

    },
    visible : {
        opacity:1,
        y:0,

        transition:{
            delay:0.2,
            duration:1,
        }
    }
}
export const ImgAnimate = {
    hidden : {
        opacity: 0,
        x: -160,

    },
    visible : {
        opacity:1,
        x:0,

        transition:{
            duration:.7,
            delay:0.5,
            type: "tween" 
        }
    }
}
export const ImgAnimateRight = {
    hidden : {
        opacity: 0,
        x: 160,

    },
    visible : {
        opacity:1,
        x:0,

        transition:{
            duration:.7,
            delay:0.5,
            type: "tween" 
        }
    }
}
export const PerformAnimate = {
    hidden : {
        opacity: 0,
        y: -100,

    },
    visible : {
        opacity:1,
        y:0,

        transition:{
            duration:1.5,
            delay:1,
            type: "tween" 
        }
    }
}
export const SpecialAnimate = {
    hidden : {
        opacity: 0,
        x: -180,

    },
    visible : {
        opacity:1,
        x:0,

        transition:{
            duration:.9,
            delay:0.6,
            type: 'spring',
            stiffness: 60, 
        }
    }
}
export const CardListAnimate = {
    hidden : {
        opacity: 0,
        y:'-160px'

    },
    visible : {
        opacity:1,
        y:0,

        transition:{
            delay:1.3,
            duration:1.4,
            type: 'spring',
            stiffness: 60, 
        }
    }
}
export const ConrtollerAnimate = {
    hidden : {
        opacity: 0,
        x:'-160px'

    },
    visible : {
        opacity:1,
        x:0,

        transition:{
            delay:1,
            duration:1.2,
            type: 'spring',
            stiffness: 60, 
        }
    }
}
export const OpacityAnimate = {
    hidden : {
        opacity: 0,
    },
    visible : {
        opacity:1,
        transition:{
            delay:.8,
            duration:1.2,
            type: 'spring',
            stiffness: 60, 
        }
    }
}
export const FooterContactAnimate = {
    hidden : {
        opacity: 0,
        y:'50px'

    },
    visible : {
        opacity:1,
        y:0,

        transition:{
            delay:1,
            duration:1.2,
            type: 'spring',
            stiffness: 60, 
        }
    }
}