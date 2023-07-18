import {animate, animation, style, transition, trigger} from "@angular/animations";


export const transitionAnimation = animation([
        style({opacity: 0}),
        animate('.5s', style({opacity: 1}))
      ])
