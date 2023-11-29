import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent]      
    }    )
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 'ID',
      title: 'TITLE',
      description: 'DESC',
      photo: 'PHOTO',
      price: 20,
      stock: 2
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the product photo as image url', () => {
    const img = (fixture.nativeElement as HTMLImageElement).querySelector('img');
    expect(img?.src).toContain(component.product.photo);
  });

  it('should display the product description', () => {
    const desc = (fixture.nativeElement as HTMLElement).querySelector('small');
    expect(desc?.textContent).toBe(component.product.description);
  });

  it('should emit addToBasket event with the given product when the button is clicked', () => {
    const emitSpy = spyOn(component.addToBasket, 'emit');

    const button = ((fixture.nativeElement as HTMLButtonElement)).querySelector(('button'));
    button?.click();
    
    expect((emitSpy)).toHaveBeenCalledWith(component.product);
  });

});
