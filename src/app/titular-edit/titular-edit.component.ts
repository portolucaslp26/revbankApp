import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { TitularesService } from '../titulares/titulares.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-titular-edit',
  templateUrl: './titular-edit.component.html',
  styleUrls: ['./titular-edit.component.css']
})
export class TitularEditComponent implements OnInit {

  form: FormGroup;
  id: any

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private titularService: TitularesService,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.titularService.getTitularById(this.id).subscribe((res: any) => {
      this.form.controls['nome'].setValue(res.nome);
    })
  }

  onSubmit() {
    if (this.form.valid) {
      const titular = {
        id: this.id,
        nome: this.form.value.nome
      }
      this.titularService.updateTitular(titular).subscribe((res: any) => {
        this.router.navigate(['/titulares'])
        this.snackBar.open('Titular atualizado com sucesso!', 'Ok', {
          duration: 3000
        })
      })
    } else {
      this.snackBar.open('Preencha todos os campos!', 'Ok', {
        duration: 3000
      })
    }
  }

  onCancel() {
    this.location.back()
    // this.courseService.onEdit();
  }

}
