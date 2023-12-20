import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  private readonly name = "Tiago Gomes"

  getName (): string {
    return this.name
  }
}
