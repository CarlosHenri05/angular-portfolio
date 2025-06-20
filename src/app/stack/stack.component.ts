import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stack',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css',
})
export class StackComponent {}
