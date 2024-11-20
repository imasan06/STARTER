// src/app/crudcomponent/crudcomponent.component.ts
import { Component, OnInit } from '@angular/core';
import { CrudapiService } from '../Services/crudapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crudcomponent.component.html',
  styleUrls: ['./crudcomponent.component.css'],
  providers: [CrudapiService]  // Asegúrate de que el servicio CRUD esté disponible
})
export class CrudcomponentComponent implements OnInit {
  data: any[] = [];
  selectedNota: any = {};

  constructor(private crudapiService: CrudapiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.crudapiService.getData().subscribe(data => {
      this.data = data;
    });
  }

  editarNota(item: any) {
    this.selectedNota = { ...item };
  }

  guardarNota() {
    this.crudapiService.editNota(this.selectedNota.id, this.selectedNota).subscribe(() => {
      this.llenarData();
      this.cerrarModal();
    });
  }

  resetearNotas(id: number) {
    this.crudapiService.resetNotas(id).subscribe(() => {
      this.llenarData();
    });
  }

  cerrarModal() {
    const modal = document.getElementById('editEmployeeModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }

    const backdrops = document.getElementsByClassName('modal-backdrop');
    while (backdrops.length > 0) {
      const backdrop = backdrops[0];
      if (backdrop && backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
    }

    document.body.classList.remove('modal-open');
  }
}