import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.products = [{
      id: 'ID',
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO',
      price: 20,
      stock: 2
    }];
    fixture.detectChanges();
  });
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('It should display the products', () => {
    const productDebugElement = fixture.debugElement.queryAll(By.css('app-product'));
    expect(productDebugElement[0].properties['product']).toBe(component.products[0]);
  });
});