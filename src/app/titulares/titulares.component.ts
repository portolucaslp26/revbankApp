import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TitularesService } from './titulares.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.component.html',
  styleUrls: ['./titulares.component.css']
})
export class TitularesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(
    public service: TitularesService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }

  ngAfterViewInit() {
    this.service.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.service.getTitulares();
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(titular: any) {
    this.service.getTitularById(titular.id).subscribe((res: any) => {
      this.router.navigate(['edit', res.id], { relativeTo: this.route });
    })
  }

  openDialog(titular: any) {
    this.dialog.open(DialogComponent);
    this.service.setId(titular.id);
  }


  onTransfer(titular: any) {
    this.router.navigate(['transferencia'], { relativeTo: this.route });
    this.service.setId(titular.id);
  }

  onExtract(titular: any) {
    this.router.navigate(['extrato'], { relativeTo: this.route });
    this.service.setId(titular.id);
  }
}
