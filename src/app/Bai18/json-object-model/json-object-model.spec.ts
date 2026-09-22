import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonObjectModel } from './json-object-model';

describe('JsonObjectModel', () => {
  let component: JsonObjectModel;
  let fixture: ComponentFixture<JsonObjectModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonObjectModel],
    }).compileComponents();

    fixture = TestBed.createComponent(JsonObjectModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
