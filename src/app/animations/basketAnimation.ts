import {animate, animation, state, style} from "@angular/animations";

export const basketAnimation = animation([
  state('show', style({
    opacity: 1
  })),
  state('notShow', style({
    opacity: 0
  }))
])
