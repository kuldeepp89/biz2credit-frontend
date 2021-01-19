import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { ServiceProviderComponent } from "../app/modules/service-provider/service-provider.component";


const routes: Routes = [
  { path: "", redirectTo: "/service-providers", pathMatch: "full" },
  { path: "service-providers", component: ServiceProviderComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
