import { Component, OnInit, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TitularesComponent } from 'src/app/titulares/titulares.component';
import { TitularesService } from 'src/app/titulares/titulares.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css', '../../../styles.css']
})
export class DialogComponent implements OnInit {
  id: any;
  constructor(
    private service: TitularesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  @ViewChild(TitularesComponent) titulares!: TitularesComponent;

  ngOnInit() {
    this.id = this.service.getId();
    console.log(this.titulares)
  }

  onDeletar() {
    this.service.titulares = null
    this.service.deleteTitular(this.id).subscribe((res: any) => {
      this.service.getTitulares();
      this.dialog.closeAll();
      this.snackBar.open('Titular excluído com sucesso!', 'Ok', {
        duration: 3000
      })
    });

  }

}
