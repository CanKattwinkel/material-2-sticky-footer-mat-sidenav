import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FooComponent} from './foo/foo.component';
import {BarComponent} from './bar/bar.component';

const routes: Routes = [
  {
    path: '',
    component: FooComponent
  },
  {
    path: 'bar',
    component: BarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
