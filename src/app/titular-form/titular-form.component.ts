import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { TitularesService } from '../titulares/titulares.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-titular-form',
  templateUrl: './titular-form.component.html',
  styleUrls: ['./titular-form.component.css']
})
export class TitularFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    public dialog: MatDialog,
    private service: TitularesService,
    private router: Router
    ) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      numeroConta: ['', Validators.required],
      agencia: ['', Validators.required],
      saldo: ['', Validators.required]
    });
  }

  ngOnInit() {
  }



  onSubmit() {
    if (this.form.valid) {
      const titular = {
        nome: this.form.value.nome,
        cpf: this.form.value.cpf,
        conta: {
          numero: this.form.value.numeroConta,
          agencia: this.form.value.agencia,
          saldo: this.form.value.saldo
        }
      }
      this.service.createTitular(titular).subscribe((res: any) => {
        this.router.navigate(['/titulares'])
        this.snackBar.open('Titular cadastrado com sucesso!', 'Ok', {
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
