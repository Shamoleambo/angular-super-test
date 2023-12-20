import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  private readonly name = "Tiago Gomes"
  public clicked : boolean = false
  public toggleText : string = "No"
  public twoBind: string = "two way binding"

  public buttonClick (event : Event) : void {
    console.log(event)
    this.clicked = !this.clicked
    if(this.clicked) {
      this.toggleText = "Yes"
    } else {
      this.toggleText = "No"
    }
  }

  getName (): string {
    return this.name
  }
}
