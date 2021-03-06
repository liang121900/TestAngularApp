import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterpriceComponent } from './enterprice/enterprice.component';
import { ModernComponent } from './modern/modern.component';
import { ModernSassComponent } from './modern-sass/modern-sass.component';
import { EnterpriceSassComponent } from './enterprice-sass/enterprice-sass.component';
import { ResumeComponent } from './resume/resume.component';
import { AgencyComponent } from './agency/agency.component';
import { EventsComponent } from './events/events.component';
import { GymComponent } from './gym/gym.component';
import { MusicComponent } from './music/music.component';
import { WeddingComponent } from './wedding/wedding.component';
import { YogaComponent } from './yoga/yoga.component';
import { PortfolioMetroComponent } from './portfolio-metro/portfolio-metro.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ProductDetailComponent } from './e-commerce/product/widget/product-detail/product-detail.component';
import { CheckoutComponent } from './e-commerce/product/widget/checkout/checkout.component';
import { CompareComponent } from './e-commerce/product/widget/compare/compare.component';
import { CartComponent } from './e-commerce/product/widget/cart/cart.component';
import { CollectionLeftSidebarComponent } from './e-commerce/product/widget/collection/collection-left-sidebar/collection-left-sidebar.component';
import { SuccessComponent } from './e-commerce/product/widget/success/success.component';

const routes: Routes = [
  {
    path: 'agency',
    component: AgencyComponent,
    data: {
      title: "Agency | Unice Landing Page",
      content: "Agency Angular 8 landing page with Angular Universal | SSR | SEO friendly"
    }
  },
  {
    path: 'enterprice',
    component: EnterpriceComponent,
    data: {
      title: "App Landing Page | Unice Landing Page"
    }
  },
  {
    path: 'modern',
    component: ModernComponent,
    data: {
      title: "App Landing Page 2 | Unice Landing Page"
    }
  },
  {
    path: 'modern-sass',
    component: ModernSassComponent,
    data: {
      title: "Modern SASS| Unice Landing Page"
    }
  },
  {
    path: 'enterprice-sass',
    component: EnterpriceSassComponent,
    data: {
      title: "Enterprice SASS | Unice Landing Page"
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: {
      title: "Resume | Unice Landing Page"
    }
  },
  {
    path: 'event',
    component: EventsComponent,
    data: {
      title: "Events | Unice Landing Page"
    }
  },
  {
    path: 'gym',
    component: GymComponent,
    data: {
      title: "Gym | Unice Landing Page"
    }
  },
  {
    path: 'music',
    component: MusicComponent,
    data: {
      title: "Music | Unice Landing Page"
    }
  },
  {
    path: 'portfolio-layout',
    component: PortfolioMetroComponent,
    data: {
      title: "Portfolio | Unice Landing Page"
    }
  },
  {
    path: 'wedding',
    component: WeddingComponent,
    data: {
      title: "Wedding | Unice Landing Page"
    }
  },
  {
    path: 'yoga',
    component: YogaComponent,
    data: {
      title: "Yoga | Unice Landing Page"
    }
  },
/*   {
    path: 'e-commerce',
    component: ECommerceComponent,
    data: {
      title: "ECommerce | Unice Landing Page"
    }
  }, */
  {
    path: 'left-sidebar/product/:id',
    component: ProductDetailComponent,
    data: {
      title: "Detail Page | Unice Landing Page"
    }
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: {
      title: "Checkout Page| Unice Landing Page"
    }
  },
  {
    path: 'checkout/success',
    component: SuccessComponent,
    data: {
      title: "Success Page| Unice Landing Page"
    }
  },
  {
    path: 'compare',
    component: CompareComponent,
    data: {
      title: "Compare Page| Unice Landing Page"
    }
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: "Cart | Unice Landing Page"
    }
  },
  {
    path: 'left-sidebar/collection/:category',
    component: CollectionLeftSidebarComponent,
    data: {
      title: "Collection Page | Unice Landing Page"
    }
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
