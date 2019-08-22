import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePage } from './youtube.page';

describe('YoutubePage', () => {
  let component: YoutubePage;
  let fixture: ComponentFixture<YoutubePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
