import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquestionComponent } from './myquestion.component';

describe('MyquestionComponent', () => {
  let component: MyquestionComponent;
  let fixture: ComponentFixture<MyquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
