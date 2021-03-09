import { TestBed } from '@angular/core/testing';

import { DeviceByCommandService } from './device-by-command.service';

describe('DeviceByCommandService', () => {
  let service: DeviceByCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceByCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
