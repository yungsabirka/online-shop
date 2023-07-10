import { Component } from '@angular/core';

interface IMain{
  title: string,
  firstSubTitle: string,
  secondSubTitle: string
}
@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
  sliderComponents: IMain[] = [
    {
      title: 'обери свій look дня',
      firstSubTitle: 'У нашому магазині є все!',
      secondSubTitle: 'Одяг, взуття, сумки та аксесуари,' +
        ' ви можете вибрати будь-який образ для себе!'
    },
    {
      title: 'Чоловічий fashion',
      firstSubTitle: 'Ми підберемо все на ваш смак!',
      secondSubTitle: 'Одяг, взуття, сумки та аксесуари,' +
        ' ви можете вибрати будь-який образ для себе!'
    }
  ]
}
